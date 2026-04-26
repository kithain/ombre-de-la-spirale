/**
 * Routes API — Scénarios
 *
 * PUT /api/scenarios/:id — Sauvegarder un scénario modifié sur disque.
 *   Écrit chaque acte dans son fichier source (acte1_xxx.js…) et les
 *   métadonnées dans metadata.js.
 */
import { Router } from "express";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import {
  lireCommentaireFichier,
  lireFichierJS,
  listerFichiersActes,
  SCENARIOS_DIR,
} from "../helpers.js";
import { genererFichierObjetJS } from "../serialiseur.js";

export const routesScenarios = Router();

// ─── PUT /api/scenarios/:id — Sauvegarder un scénario ───────────────────────
routesScenarios.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID de scénario invalide (entier attendu)." });
    }

    const scenario = req.body;
    if (!scenario || !Array.isArray(scenario.acts)) {
      return res.status(400).json({ error: "Corps invalide : { acts: [...] } requis." });
    }

    const fichiersActes = await listerFichiersActes(id);
    if (fichiersActes.length === 0) {
      return res.status(404).json({ error: `Aucun fichier acte trouvé pour le scénario ${id}.` });
    }

    const fichiersModifies = [];

    // ── Écrire chaque acte dans son fichier source ───────────────────────────
    for (let i = 0; i < fichiersActes.length; i++) {
      const { fichier, variable } = fichiersActes[i];
      const acte = scenario.acts[i];
      if (!acte) {
        // Acte supprimé par l'éditeur — on ne touche pas au fichier
        continue;
      }
      const commentaire = await lireCommentaireFichier(fichier);
      const code = genererFichierObjetJS(variable, commentaire, acte);
      await writeFile(fichier, code, "utf-8");
      fichiersModifies.push(fichier);
    }

    // ── Écrire les métadonnées dans metadata.js ──────────────────────────────
    const metadataFichier = join(SCENARIOS_DIR, `scenario${id}`, "metadata.js");
    try {
      const { nomVariable } = await lireFichierJS(metadataFichier);
      // Extraire uniquement les champs metadata (sans acts ni _source)
      const { acts: _acts, _source: _src, ...metadonnees } = scenario;
      const commentaire = await lireCommentaireFichier(metadataFichier);
      const code = genererFichierObjetJS(nomVariable, commentaire, metadonnees);
      await writeFile(metadataFichier, code, "utf-8");
      fichiersModifies.push(metadataFichier);
    } catch (e) {
      console.warn(`[scenarios] Impossible d'écrire metadata pour scénario ${id} :`, e.message);
    }

    console.log(`[scenarios] PUT ${id} → ${fichiersModifies.length} fichier(s) mis à jour`);
    res.json({ ok: true, fichiersModifies });
  } catch (e) {
    console.error("[scenarios] PUT erreur :", e);
    res.status(500).json({ error: e.message });
  }
});
