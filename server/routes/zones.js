/**
 * Routes API — Zones (CRUD complet sur les fichiers universeZone_*.js)
 *
 * GET    /api/zones       — Liste les zones (métadonnées sans locations).
 * POST   /api/zones       — Crée une nouvelle zone (nouveau fichier + index).
 * PUT    /api/zones/:id   — Met à jour les métadonnées (locations préservées).
 * DELETE /api/zones/:id   — Supprime la zone (fichier + entrée dans l'index).
 *
 * ⚠ Les lieux (`locations`) sont gérés exclusivement par /api/lieux.
 *   L'éditeur de zone ne peut pas accidentellement écraser les lieux : le
 *   serveur préserve le champ `locations` lu sur disque.
 *
 * ⚠ POST/DELETE modifient aussi `universeZones.js` (barrel d'imports). En cas
 *   d'échec partiel, le fichier zone est nettoyé pour éviter un état incohérent.
 */
import { Router } from "express";
import { readFile, unlink } from "node:fs/promises";
import { join } from "node:path";
import {
  chargerToutesLesZones,
  lireFichierJS,
  UNIVERSE_DIR,
} from "../helpers.js";
import { genererFichierZone } from "../serialiseur.js";
import { ecrireFichierSource } from "../ecritureSecurisee.js";

export const routesZones = Router();

/** Chemin du barrel d'imports universeZones.js */
const FICHIER_INDEX = join(UNIVERSE_DIR, "universeZones.js");

/**
 * Convertit un id snake_case en variable `zone<PascalCase>`.
 * Ex: "vieille_ville" → "zoneVieilleVille"
 */
function idVersNomVariable(id) {
  const pascal = id
    .split(/[_-]/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
  return `zone${pascal}`;
}

/**
 * Convertit un id snake_case en nom de fichier `universeZone_<id>.js`.
 */
function idVersNomFichier(id) {
  return `universeZone_${id}.js`;
}

/**
 * Valide qu'un id de zone est sûr pour usage en chemin de fichier
 * (pas de séparateur, pas de caractère exotique).
 */
function validerIdZonePourFichier(id) {
  if (typeof id !== "string" || id.trim() === "") {
    return "zone.id doit être une chaîne non vide.";
  }
  if (!/^[a-z][a-z0-9_]{1,63}$/.test(id)) {
    return `zone.id "${id}" invalide : minuscules, chiffres et underscores uniquement (commence par lettre, 2-64 caractères).`;
  }
  return null;
}

/**
 * Vérifie qu'un objet zone est sérialisable et bien formé.
 * @returns {string|null} message d'erreur ou null si OK
 */
function validerObjetZone(zone) {
  if (!zone || typeof zone !== "object" || Array.isArray(zone)) {
    return "Objet zone attendu.";
  }
  if (typeof zone.id !== "string" || zone.id.trim() === "") {
    return "zone.id doit être une chaîne non vide.";
  }
  // eslint-disable-next-line no-control-regex
  if (/[\u0000-\u001F\u007F]/.test(zone.id)) {
    return `zone.id contient des caractères de contrôle interdits.`;
  }
  try {
    JSON.stringify(zone);
  } catch (err) {
    return `Objet zone non sérialisable : ${err.message}`;
  }
  return null;
}

// ─── Manipulation du barrel universeZones.js ────────────────────────────

/**
 * Lit le fichier barrel et extrait imports + variables du tableau exporté.
 * @returns {Promise<{ entrees: Array<{nomVariable: string, fichier: string}>, contenu: string }>}
 */
async function lireBarrelZones() {
  const contenu = await readFile(FICHIER_INDEX, "utf-8");
  const entrees = [];
  // Pattern : import { <varName> } from "./<fichier>";
  const regexImport = /import\s+\{\s*(\w+)\s*\}\s+from\s+"\.\/([\w./-]+?)"\s*;?/g;
  let m;
  while ((m = regexImport.exec(contenu)) !== null) {
    entrees.push({ nomVariable: m[1], fichier: m[2] });
  }
  return { entrees, contenu };
}

/**
 * Régénère le contenu du barrel à partir d'une liste d'entrées.
 * @param {Array<{nomVariable: string, fichier: string}>} entrees
 * @returns {string}
 */
function genererBarrelZones(entrees) {
  const imports = entrees
    .map((e) => `import { ${e.nomVariable} } from "./${e.fichier.replace(/\.js$/, "")}";`)
    .join("\n");
  const tableau = entrees.map((e) => `  ${e.nomVariable},`).join("\n");
  return `${imports}\n\nexport const universeZones = [\n${tableau}\n];\n`;
}

/**
 * Charge dynamiquement universeZones.js pour valider qu'il parse correctement.
 * Utilisé après écriture du barrel pour détecter une corruption.
 */
async function validerBarrelEnLisant() {
  // On ne peut pas utiliser lireFichierJS (pas de single export const = ...).
  // On lit le texte et on vérifie la présence de "export const universeZones".
  const txt = await readFile(FICHIER_INDEX, "utf-8");
  if (!/export\s+const\s+universeZones\s*=\s*\[/.test(txt)) {
    throw new Error("Barrel universeZones.js corrompu après écriture.");
  }
}

// ─── GET /api/zones — Lister les zones (métadonnées uniquement) ─────────
routesZones.get("/", async (_req, res) => {
  try {
    const zones = await chargerToutesLesZones();
    const resultat = [];
    for (const [, entry] of zones) {
      const { locations: _locations, ...meta } = entry.data;
      resultat.push(meta);
    }
    res.json(resultat);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ─── PUT /api/zones/:id — Modifier les métadonnées d'une zone ───────────
routesZones.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const zoneModifiee = req.body;

    const erreurValidation = validerObjetZone(zoneModifiee);
    if (erreurValidation) {
      return res.status(400).json({ error: erreurValidation });
    }
    if (zoneModifiee.id !== id) {
      return res.status(400).json({
        error: `Incohérence : id URL (${id}) ≠ zone.id (${zoneModifiee.id}).`,
      });
    }

    const zones = await chargerToutesLesZones();
    const entry = zones.get(id);
    if (!entry) {
      return res.status(404).json({ error: `Zone "${id}" introuvable.` });
    }

    // Préserver les locations existantes du disque ; l'éditeur de zone ne
    // doit surtout pas écraser les lieux (gérés par /api/lieux).
    // On ignore aussi `locations` s'il est fourni dans le body, par sécurité.
    const { locations: _locFromBody, ...metaModifiees } = zoneModifiee;
    const fusionnee = {
      ...entry.data,
      ...metaModifiees,
      locations: entry.data.locations || [],
    };

    const code = genererFichierZone(entry.nomVariable, fusionnee);
    await ecrireFichierSource(entry.fichier, code);

    console.log(`[zones] PUT ${id} → ${entry.fichier}`);
    // Renvoyer la version sans locations (ce qu'attend l'éditeur de zone)
    const { locations: _l, ...meta } = fusionnee;
    res.json({ ok: true, zone: meta });
  } catch (e) {
    console.error("[zones] PUT erreur:", e);
    res.status(500).json({ error: e.message });
  }
});

// ─── POST /api/zones — Créer une nouvelle zone ──────────────────────────
routesZones.post("/", async (req, res) => {
  const { zone } = req.body || {};

  // Validation de l'enveloppe
  const erreurEnveloppe = validerObjetZone(zone);
  if (erreurEnveloppe) {
    return res.status(400).json({ error: erreurEnveloppe });
  }
  const erreurId = validerIdZonePourFichier(zone.id);
  if (erreurId) {
    return res.status(400).json({ error: erreurId });
  }

  const nomFichier = idVersNomFichier(zone.id);
  const nomVariable = idVersNomVariable(zone.id);
  const cheminZone = join(UNIVERSE_DIR, nomFichier);

  // Vérifier qu'aucune zone avec ce nom de variable ou cet id n'existe déjà
  let barrel;
  try {
    barrel = await lireBarrelZones();
  } catch (err) {
    console.error("[zones] POST lecture barrel échouée :", err);
    return res.status(500).json({ error: `Lecture barrel échouée : ${err.message}` });
  }
  if (barrel.entrees.some((e) => e.nomVariable === nomVariable)) {
    return res.status(409).json({ error: `Zone "${zone.id}" existe déjà (variable ${nomVariable}).` });
  }
  if (barrel.entrees.some((e) => e.fichier === nomFichier || e.fichier === nomFichier.replace(/\.js$/, ""))) {
    return res.status(409).json({ error: `Fichier ${nomFichier} déjà référencé.` });
  }

  // Construire l'objet final : on initialise locations à [] s'il manque
  const zoneComplete = {
    ...zone,
    locations: Array.isArray(zone.locations) ? zone.locations : [],
  };

  let zoneEcrite = false;
  try {
    // 1. Écrire le fichier zone (atomique, validé par roundtrip)
    const codeZone = genererFichierZone(nomVariable, zoneComplete);
    await ecrireFichierSource(cheminZone, codeZone);
    zoneEcrite = true;

    // 2. Mettre à jour le barrel
    const nouvellesEntrees = [...barrel.entrees, { nomVariable, fichier: nomFichier }];
    const nouveauBarrel = genererBarrelZones(nouvellesEntrees);
    // On désactive la validation roundtrip de ecrireFichierSource (le barrel
    // n'est pas un single `export const = …`) mais on valide après-coup.
    await ecrireFichierSource(FICHIER_INDEX, nouveauBarrel, { valider: false });
    await validerBarrelEnLisant();

    console.log(`[zones] POST ${zone.id} → ${nomFichier} (+ barrel mis à jour)`);
    const { locations: _l, ...meta } = zoneComplete;
    res.status(201).json({ ok: true, zone: meta });
  } catch (e) {
    console.error("[zones] POST erreur:", e);
    // Rollback : si la zone a été écrite mais le barrel a échoué, on
    // supprime le fichier zone pour ne pas laisser un orphelin.
    if (zoneEcrite) {
      await unlink(cheminZone).catch((err) => {
        console.error(`[zones] rollback unlink ${cheminZone} échoué :`, err);
      });
    }
    res.status(500).json({ error: e.message });
  }
});

// ─── DELETE /api/zones/:id — Supprimer une zone ─────────────────────────
routesZones.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const erreurId = validerIdZonePourFichier(id);
    if (erreurId) {
      return res.status(400).json({ error: erreurId });
    }

    const zones = await chargerToutesLesZones();
    const entry = zones.get(id);
    if (!entry) {
      return res.status(404).json({ error: `Zone "${id}" introuvable.` });
    }

    // Refuser la suppression si la zone contient encore des lieux : il faut
    // les supprimer/déplacer d'abord (via /api/lieux) pour éviter une perte
    // silencieuse de données.
    const nbLieux = (entry.data.locations || []).length;
    if (nbLieux > 0) {
      return res.status(409).json({
        error: `Zone "${id}" contient encore ${nbLieux} lieu(x). Supprimez-les d'abord via /api/lieux.`,
      });
    }

    const barrel = await lireBarrelZones();
    const entreeBarrel = barrel.entrees.find((e) => e.nomVariable === entry.nomVariable);
    if (!entreeBarrel) {
      return res.status(500).json({
        error: `Incohérence : zone "${id}" présente sur disque mais absente du barrel.`,
      });
    }

    // 1. Mettre à jour le barrel d'abord (retire la référence)
    const nouvellesEntrees = barrel.entrees.filter((e) => e.nomVariable !== entry.nomVariable);
    const nouveauBarrel = genererBarrelZones(nouvellesEntrees);
    await ecrireFichierSource(FICHIER_INDEX, nouveauBarrel, { valider: false });
    await validerBarrelEnLisant();

    // 2. Supprimer le fichier zone
    await unlink(entry.fichier);

    console.log(`[zones] DELETE ${id} → ${entry.fichier} supprimé (+ barrel mis à jour)`);
    res.json({ ok: true, id });
  } catch (e) {
    console.error("[zones] DELETE erreur:", e);
    res.status(500).json({ error: e.message });
  }
});
