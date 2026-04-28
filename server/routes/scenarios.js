/**
 * Routes API — Scénarios
 *
 * PUT /api/scenarios/:id — Sauvegarder un scénario modifié sur disque.
 *   Écrit chaque acte dans son fichier source (acte1_xxx.js…) et les
 *   métadonnées dans metadata.js.
 */
import { Router } from "express";
import { join } from "node:path";
import {
  lireCommentaireFichier,
  lireFichierJS,
  listerFichiersActes,
  SCENARIOS_DIR,
} from "../helpers.js";
import { genererFichierObjetJS } from "../serialiseur.js";
import { ecrireFichierSource } from "../ecritureSecurisee.js";

export const routesScenarios = Router();

// ─── PUT /api/scenarios/:id — Sauvegarder un scénario ───────────────────────
routesScenarios.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id) || id < 1 || id > 999) {
      return res.status(400).json({ error: "ID de scénario invalide (entier 1-999 attendu)." });
    }

    const scenario = req.body;
    if (!scenario || typeof scenario !== "object" || Array.isArray(scenario)) {
      return res.status(400).json({ error: "Corps invalide : objet scénario attendu." });
    }
    if (!Array.isArray(scenario.acts)) {
      return res.status(400).json({ error: "Corps invalide : { acts: [...] } requis." });
    }
    try {
      JSON.stringify(scenario);
    } catch (err) {
      return res.status(400).json({ error: `Scénario non sérialisable : ${err.message}` });
    }

    const fichiersActes = await listerFichiersActes(id);
    if (fichiersActes.length === 0) {
      return res.status(404).json({ error: `Aucun fichier acte trouvé pour le scénario ${id}.` });
    }

    const fichiersModifies = [];
    const erreurs = [];

    // ── Écrire chaque acte dans son fichier source ─────────────────────────
    // Chaque écriture est atomique et verrouillée indépendamment ; on continue
    // même si l'une échoue afin de maximiser le nombre d'actes sauvés.
    for (let i = 0; i < fichiersActes.length; i++) {
      const { fichier, variable } = fichiersActes[i];
      const acte = scenario.acts[i];
      if (!acte) {
        // Acte supprimé par l'éditeur — on ne touche pas au fichier
        continue;
      }
      try {
        const commentaire = await lireCommentaireFichier(fichier);
        const code = genererFichierObjetJS(variable, commentaire, acte);
        await ecrireFichierSource(fichier, code);
        fichiersModifies.push(fichier);
      } catch (err) {
        erreurs.push({ fichier, message: err.message });
        console.error(`[scenarios] échec écriture ${fichier} :`, err);
      }
    }

    // ── Écrire les métadonnées dans metadata.js ──────────────────────────
    const metadataFichier = join(SCENARIOS_DIR, `scenario${id}`, "metadata.js");
    try {
      const { nomVariable } = await lireFichierJS(metadataFichier);
      // Extraire uniquement les champs metadata (sans acts ni _source)
      const { acts: _acts, _source: _src, ...metadonnees } = scenario;
      const commentaire = await lireCommentaireFichier(metadataFichier);
      const code = genererFichierObjetJS(nomVariable, commentaire, metadonnees);
      await ecrireFichierSource(metadataFichier, code);
      fichiersModifies.push(metadataFichier);
    } catch (e) {
      erreurs.push({ fichier: metadataFichier, message: e.message });
      console.warn(`[scenarios] Impossible d'écrire metadata pour scénario ${id} :`, e.message);
    }

    console.log(`[scenarios] PUT ${id} → ${fichiersModifies.length} fichier(s) mis à jour, ${erreurs.length} erreur(s)`);

    // Si aucun fichier n'a pu être écrit, c'est un échec complet
    if (fichiersModifies.length === 0 && erreurs.length > 0) {
      return res.status(500).json({
        ok: false,
        error: "Aucun fichier n'a pu être écrit.",
        erreurs,
      });
    }

    // Succès partiel ou complet : on retourne 200 mais avec la liste des erreurs
    res.json({
      ok: erreurs.length === 0,
      fichiersModifies,
      ...(erreurs.length > 0 ? { erreurs } : {}),
    });
  } catch (e) {
    console.error("[scenarios] PUT erreur :", e);
    res.status(500).json({ error: e.message });
  }
});
