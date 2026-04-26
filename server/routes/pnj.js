/**
 * Routes API — PNJ (CRUD)
 *
 * GET    /api/pnj              — Lister tous les PNJ (groupés par fichier)
 * PUT    /api/pnj/:id          — Mettre à jour un PNJ existant (même fichier)
 * PUT    /api/pnj/:id/deplacer — Déplacer un PNJ vers un autre fichier (body: { fichierCible })
 * POST   /api/pnj              — Créer un nouveau PNJ (body: { fichierCible?, pnj })
 * DELETE /api/pnj/:id          — Supprimer un PNJ
 */
import { Router } from "express";
import { writeFile } from "node:fs/promises";
import { basename } from "node:path";
import {
  trouverPnjDansFichiers,
  lireFichierJS,
  lireCommentaireFichier,
  PNJ_DIR,
  PERSONNAGES_DIR,
  FICHIERS_PNJ,
} from "../helpers.js";
import { genererFichierPnj } from "../serialiseur.js";
import { join } from "node:path";

export const routesPnj = Router();

// ─── GET /api/pnj — Lister tous les PNJ ─────────────────────────────
routesPnj.get("/", async (_req, res) => {
  try {
    const resultat = [];
    for (const { fichier, variable, repertoire } of FICHIERS_PNJ) {
      const chemin = join(repertoire || PNJ_DIR, fichier);
      try {
        const { data } = await lireFichierJS(chemin);
        resultat.push({
          fichier,
          variable,
          pnjs: data,
        });
      } catch (e) {
        resultat.push({ fichier, variable, pnjs: [], erreur: e.message });
      }
    }
    res.json(resultat);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

/** Méta-attributs à appliquer selon le fichier cible. */
const COULEURS_CATEGORIES = { allies: "text-blue-400", ennemis: "text-red-400", monstres: "text-purple-400" };

function normaliserPnjPourFichier(pnj, fichierCible) {
  const clone = { ...pnj };
  if (fichierCible === "02_pnj_ennemis.js") {
    clone.category  = "ennemis";
    clone.source    = "ennemis";
    clone.color     = COULEURS_CATEGORIES.ennemis;
    clone.isMonster = false;
    clone.est_ennemi = true;
    clone.modeEntite = "pnj";
  } else if (/^\d{2}_archetype_fp\d+\.js$/.test(fichierCible)) {
    clone.category  = "monstres";
    clone.source    = "bestiary";
    clone.color     = COULEURS_CATEGORIES.monstres;
    clone.isMonster = true;
    clone.est_ennemi = false;
    clone.modeEntite = "creature";
  }
  return clone;
}

// ─── PUT /api/pnj/:id/deplacer — Déplacer un PNJ vers un autre fichier ────
routesPnj.put("/:id/deplacer", async (req, res) => {
  try {
    const { id } = req.params;
    const { fichierCible } = req.body;

    if (!fichierCible) {
      return res.status(400).json({ error: "fichierCible requis." });
    }

    const fichierDestInfo = FICHIERS_PNJ.find((f) => f.fichier === fichierCible);
    if (!fichierDestInfo) {
      return res.status(400).json({ error: `Fichier cible "${fichierCible}" inconnu.` });
    }

    const source = await trouverPnjDansFichiers(id);
    if (!source) {
      return res.status(404).json({ error: `PNJ "${id}" introuvable.` });
    }

    // Déjà dans le bon fichier
    if (basename(source.fichier) === fichierCible) {
      return res.json({ ok: true, deja_en_place: true, fichier: fichierCible });
    }

    const cheminDest = join(fichierDestInfo.repertoire || PNJ_DIR, fichierCible);
    const { data: dataDest } = await lireFichierJS(cheminDest);

    if (dataDest.some((p) => p.id === id)) {
      return res.status(409).json({ error: `PNJ "${id}" existe déjà dans "${fichierCible}".` });
    }

    const pnjACopier = normaliserPnjPourFichier(source.pnj, fichierCible);

    // Retirer de la source
    source.data.splice(source.indexDansTableau, 1);
    const commentaireSource = await lireCommentaireFichier(source.fichier);
    await writeFile(source.fichier, genererFichierPnj(source.nomVariable, commentaireSource, source.data), "utf-8");

    // Ajouter à la destination
    dataDest.push(pnjACopier);
    const commentaireDest = await lireCommentaireFichier(cheminDest);
    await writeFile(cheminDest, genererFichierPnj(fichierDestInfo.variable, commentaireDest, dataDest), "utf-8");

    console.log(`[pnj] DEPLACER ${id} : ${basename(source.fichier)} → ${fichierCible}`);
    res.json({ ok: true, fichier: fichierCible, pnj: pnjACopier });
  } catch (e) {
    console.error("[pnj] DEPLACER erreur:", e);
    res.status(500).json({ error: e.message });
  }
});

// ─── PUT /api/pnj/:id — Modifier un PNJ ─────────────────────────────
routesPnj.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pnjModifie = req.body;

    if (!pnjModifie || !pnjModifie.id) {
      return res.status(400).json({ error: "Corps invalide : un objet PNJ avec un id est requis." });
    }

    const entry = await trouverPnjDansFichiers(id);
    if (!entry) {
      return res.status(404).json({ error: `PNJ "${id}" introuvable dans les fichiers source.` });
    }

    // Remplacer le PNJ dans le tableau
    entry.data[entry.indexDansTableau] = pnjModifie;

    // Lire le commentaire JSDoc existant
    const commentaire = await lireCommentaireFichier(entry.fichier);

    // Réécrire le fichier complet
    const code = genererFichierPnj(entry.nomVariable, commentaire, entry.data);
    await writeFile(entry.fichier, code, "utf-8");

    console.log(`[pnj] PUT ${id} → ${entry.fichier}`);
    res.json({ ok: true, pnj: pnjModifie });
  } catch (e) {
    console.error("[pnj] PUT erreur:", e);
    res.status(500).json({ error: e.message });
  }
});

// ─── POST /api/pnj — Créer un PNJ ───────────────────────────────────
routesPnj.post("/", async (req, res) => {
  try {
    const { fichierCible, pnj } = req.body;

    if (!pnj?.id) {
      return res.status(400).json({ error: "pnj.id requis." });
    }

    // Par défaut, ajouter dans pnj_globaux.js
    const cible = fichierCible || "pnj_globaux.js";
    const fichierInfo = FICHIERS_PNJ.find((f) => f.fichier === cible);
    if (!fichierInfo) {
      return res.status(400).json({ error: `Fichier cible "${cible}" inconnu.` });
    }

    const chemin = join(fichierInfo.repertoire || PNJ_DIR, cible);
    const { data } = await lireFichierJS(chemin);

    // Vérifier doublon
    if (data.some((p) => p.id === pnj.id)) {
      return res.status(409).json({ error: `Un PNJ avec l'id "${pnj.id}" existe déjà.` });
    }

    data.push(pnj);

    const commentaire = await lireCommentaireFichier(chemin);
    const code = genererFichierPnj(fichierInfo.variable, commentaire, data);
    await writeFile(chemin, code, "utf-8");

    console.log(`[pnj] POST ${pnj.id} → ${cible}`);
    res.status(201).json({ ok: true, pnj });
  } catch (e) {
    console.error("[pnj] POST erreur:", e);
    res.status(500).json({ error: e.message });
  }
});

// ─── DELETE /api/pnj/:id — Supprimer un PNJ ─────────────────────────
routesPnj.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await trouverPnjDansFichiers(id);
    if (!entry) {
      return res.status(404).json({ error: `PNJ "${id}" introuvable.` });
    }

    entry.data.splice(entry.indexDansTableau, 1);

    const commentaire = await lireCommentaireFichier(entry.fichier);
    const code = genererFichierPnj(entry.nomVariable, commentaire, entry.data);
    await writeFile(entry.fichier, code, "utf-8");

    console.log(`[pnj] DELETE ${id} → ${entry.fichier}`);
    res.json({ ok: true, id });
  } catch (e) {
    console.error("[pnj] DELETE erreur:", e);
    res.status(500).json({ error: e.message });
  }
});
