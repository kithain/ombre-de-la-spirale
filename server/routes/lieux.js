/**
 * Routes API — Lieux (CRUD)
 *
 * PUT    /api/lieux/:id       — Mettre à jour un lieu existant
 * POST   /api/lieux           — Créer un nouveau lieu (body: { zoneId, lieu })
 * DELETE /api/lieux/:id       — Supprimer un lieu
 * GET    /api/lieux           — Lister tous les lieux (groupés par zone)
 */
import { Router } from "express";
import {
  chargerToutesLesZones,
  trouverLieuDansZones,
} from "../helpers.js";
import { genererFichierZone } from "../serialiseur.js";
import { ecrireFichierSource } from "../ecritureSecurisee.js";

/**
 * Vérifie qu'un objet lieu est sérialisable et bien formé.
 * @returns {string|null} message d'erreur ou null si OK
 */
function validerObjetLieu(lieu) {
  if (!lieu || typeof lieu !== "object" || Array.isArray(lieu)) {
    return "Objet lieu attendu.";
  }
  if (typeof lieu.id !== "string" || lieu.id.trim() === "") {
    return "lieu.id doit être une chaîne non vide.";
  }
  // L'id n'est pas utilisé comme chemin disque : on accepte tout caractère
  // imprimable. On bloque uniquement les caractères de contrôle.
  // eslint-disable-next-line no-control-regex
  if (/[\u0000-\u001F\u007F]/.test(lieu.id)) {
    return `lieu.id contient des caractères de contrôle interdits.`;
  }
  try {
    JSON.stringify(lieu);
  } catch (err) {
    return `Objet lieu non sérialisable : ${err.message}`;
  }
  return null;
}

export const routesLieux = Router();

// ─── GET /api/lieux — Lister tous les lieux ──────────────────────────
routesLieux.get("/", async (_req, res) => {
  try {
    const zones = await chargerToutesLesZones();
    const resultat = [];
    for (const [zoneId, entry] of zones) {
      resultat.push({
        zoneId,
        zoneName: entry.data.name,
        locations: entry.data.locations || [],
      });
    }
    res.json(resultat);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── PUT /api/lieux/:id — Modifier un lieu ───────────────────────────
routesLieux.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const lieuModifie = req.body;

    const erreurValidation = validerObjetLieu(lieuModifie);
    if (erreurValidation) {
      return res.status(400).json({ error: erreurValidation });
    }
    if (lieuModifie.id !== id) {
      return res.status(400).json({ error: `Incohérence : id URL (${id}) ≠ lieu.id (${lieuModifie.id}).` });
    }

    const entry = await trouverLieuDansZones(id);
    if (!entry) {
      return res.status(404).json({ error: `Lieu "${id}" introuvable dans les fichiers source.` });
    }

    // Remplacer le lieu dans le tableau de la zone
    entry.data.locations[entry.indexLieu] = lieuModifie;

    // Réécrire le fichier zone complet (atomique + verrouillé + validé)
    const code = genererFichierZone(entry.nomVariable, entry.data);
    await ecrireFichierSource(entry.fichier, code);

    console.log(`[lieux] PUT ${id} → ${entry.fichier}`);
    res.json({ ok: true, lieu: lieuModifie });
  } catch (e) {
    console.error("[lieux] PUT erreur:", e);
    res.status(500).json({ error: e.message });
  }
});

// ─── POST /api/lieux — Créer un lieu ─────────────────────────────────
routesLieux.post("/", async (req, res) => {
  try {
    const { zoneId, lieu } = req.body;

    if (typeof zoneId !== "string" || zoneId.trim() === "") {
      return res.status(400).json({ error: "zoneId requis (chaîne non vide)." });
    }
    const erreurValidation = validerObjetLieu(lieu);
    if (erreurValidation) {
      return res.status(400).json({ error: erreurValidation });
    }

    const zones = await chargerToutesLesZones();
    const entry = zones.get(zoneId);
    if (!entry) {
      return res.status(404).json({ error: `Zone "${zoneId}" introuvable.` });
    }

    // Vérifier doublon
    if ((entry.data.locations || []).some((l) => l.id === lieu.id)) {
      return res.status(409).json({ error: `Un lieu avec l'id "${lieu.id}" existe déjà.` });
    }

    if (!entry.data.locations) entry.data.locations = [];
    entry.data.locations.push(lieu);

    const code = genererFichierZone(entry.nomVariable, entry.data);
    await ecrireFichierSource(entry.fichier, code);

    console.log(`[lieux] POST ${lieu.id} → zone ${zoneId}`);
    res.status(201).json({ ok: true, lieu });
  } catch (e) {
    console.error("[lieux] POST erreur:", e);
    res.status(500).json({ error: e.message });
  }
});

// ─── DELETE /api/lieux/:id — Supprimer un lieu ───────────────────────
routesLieux.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await trouverLieuDansZones(id);
    if (!entry) {
      return res.status(404).json({ error: `Lieu "${id}" introuvable.` });
    }

    entry.data.locations.splice(entry.indexLieu, 1);

    const code = genererFichierZone(entry.nomVariable, entry.data);
    await ecrireFichierSource(entry.fichier, code);

    console.log(`[lieux] DELETE ${id} → ${entry.fichier}`);
    res.json({ ok: true, id });
  } catch (e) {
    console.error("[lieux] DELETE erreur:", e);
    res.status(500).json({ error: e.message });
  }
});
