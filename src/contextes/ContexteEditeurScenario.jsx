import { useState, useCallback, useRef, useMemo } from "react";
import { ContexteEditeurScenario } from "./ContexteEditeurScenarioBase";
import { scenariosData } from "../data/scenarios/scenarios";
import { clonerProfond } from "../hooks/helpersEditeur";
import {
  chargerEditionLocale,
  persisterEdition,
  supprimerEdition,
  creerSceneVide,
  creerActeVide,
} from "../utilitaires/persistanceScenario";
import { apiScenarios, estModeEditeur } from "../services/api";

/**
 * Contexte global pour l'édition des scénarios.
 *
 * Pattern identique à ContexteEditeurPnj :
 * - Les fichiers JS sources restent intacts (lecture seule).
 * - Les modifications sont stockées dans localStorage via persistanceScenario.js.
 * - Un brouillon est créé par clonage profond ; l'original sert de référence pour le diff.
 *
 * Fournit : modeEdition, brouillons, modifierChamp, sauvegarder, annuler,
 *           ajouterActe, supprimerActe, reordonnerActes,
 *           ajouterScene, supprimerScene, reordonnerScenes,
 *           ouvrirEditeurScene, fermerEditeurScene.
 */

// ── Fournisseur ──────────────────────────────────────────────────────────────

export function FournisseurEditeurScenario({ children }) {
  // Mode édition global
  const [modeEdition, definirModeEdition] = useState(false);

  // Brouillons : Map<scenarioId, brouillon>
  //
  // En mode éditeur, la source de vérité est le disque (les fichiers acte*.js).
  // Charger les brouillons localStorage écraserait les valeurs fraîches du
  // disque avec d'anciennes éditions périmées (mêmes symptômes que pour les
  // PNJ : valeurs qui "reviennent" après chaque reload). On les ignore donc
  // en mode éditeur ; en mode viewer ils servent à conserver les modifs entre
  // sessions sans serveur.
  const [brouillons, definirBrouillons] = useState(() => {
    if (estModeEditeur()) return {};
    const map = {};
    for (const scenario of scenariosData) {
      const edition = chargerEditionLocale(scenario.id);
      if (edition) {
        map[scenario.id] = edition;
      }
    }
    return map;
  });

  // Originaux gelés (référence pour diff)
  const originauxRef = useRef(
    Object.fromEntries(scenariosData.map((s) => [s.id, Object.freeze(clonerProfond(s))]))
  );

  // Scène en cours d'édition (modale EditeurScene)
  const [sceneEditee, definirSceneEditee] = useState(null);

  // ── Données fusionnées (source + brouillons) ────────────────────────────

  const scenariosFusionnes = useMemo(() => {
    return scenariosData.map((scenario) => {
      const brouillon = brouillons[scenario.id];
      if (!brouillon) return scenario;
      // Fusionner les champs de premier niveau + acts
      return { ...scenario, ...brouillon };
    });
  }, [brouillons]);

  // ── Détection de modifications ──────────────────────────────────────────

  const estModifie = useCallback(
    (idScenario) => {
      return !!brouillons[idScenario];
    },
    [brouillons],
  );

  // ── Obtenir ou créer un brouillon ───────────────────────────────────────

  const obtenirBrouillon = useCallback(
    (idScenario) => {
      if (brouillons[idScenario]) return brouillons[idScenario];
      const source = scenariosData.find((s) => s.id === idScenario);
      return source ? clonerProfond(source) : null;
    },
    [brouillons],
  );

  const definirBrouillon = useCallback((idScenario, nouveau) => {
    definirBrouillons((prev) => ({
      ...prev,
      [idScenario]: nouveau,
    }));
  }, []);

  // ── Modifier un champ de scénario ───────────────────────────────────────

  const modifierChampScenario = useCallback(
    (idScenario, champ, valeur) => {
      const brouillon = obtenirBrouillon(idScenario);
      if (!brouillon) return;
      const nouveau = { ...brouillon, [champ]: valeur };
      definirBrouillon(idScenario, nouveau);
    },
    [obtenirBrouillon, definirBrouillon],
  );

  // ── Modifier un champ d'acte ────────────────────────────────────────────

  const modifierChampActe = useCallback(
    (idScenario, indexActe, champ, valeur) => {
      const brouillon = obtenirBrouillon(idScenario);
      if (!brouillon) return;
      const acts = [...(brouillon.acts || [])];
      acts[indexActe] = { ...acts[indexActe], [champ]: valeur };
      definirBrouillon(idScenario, { ...brouillon, acts });
    },
    [obtenirBrouillon, definirBrouillon],
  );

  // ── Modifier un champ de scène ──────────────────────────────────────────

  const modifierChampScene = useCallback(
    (idScenario, indexActe, indexScene, champ, valeur) => {
      const brouillon = obtenirBrouillon(idScenario);
      if (!brouillon) return;
      const acts = [...(brouillon.acts || [])];
      const scenes = [...(acts[indexActe]?.scenes || [])];
      scenes[indexScene] = { ...scenes[indexScene], [champ]: valeur };
      acts[indexActe] = { ...acts[indexActe], scenes };
      definirBrouillon(idScenario, { ...brouillon, acts });
    },
    [obtenirBrouillon, definirBrouillon],
  );

  // ── Modifier un sous-champ imbriqué d'une scène (ex: description.resume)

  const modifierChampSceneImbrique = useCallback(
    (idScenario, indexActe, indexScene, champParent, sousChamp, valeur) => {
      const brouillon = obtenirBrouillon(idScenario);
      if (!brouillon) return;
      const acts = [...(brouillon.acts || [])];
      const scenes = [...(acts[indexActe]?.scenes || [])];
      const scene = { ...scenes[indexScene] };
      scene[champParent] = { ...(scene[champParent] || {}), [sousChamp]: valeur };
      scenes[indexScene] = scene;
      acts[indexActe] = { ...acts[indexActe], scenes };
      definirBrouillon(idScenario, { ...brouillon, acts });
    },
    [obtenirBrouillon, definirBrouillon],
  );

  // ── Gestion des actes ───────────────────────────────────────────────────

  const ajouterActe = useCallback(
    (idScenario) => {
      const brouillon = obtenirBrouillon(idScenario);
      if (!brouillon) return;
      const acts = [...(brouillon.acts || [])];
      acts.push(creerActeVide(acts.length + 1));
      definirBrouillon(idScenario, { ...brouillon, acts });
    },
    [obtenirBrouillon, definirBrouillon],
  );

  const supprimerActe = useCallback(
    (idScenario, indexActe) => {
      const brouillon = obtenirBrouillon(idScenario);
      if (!brouillon) return;
      const acts = [...(brouillon.acts || [])];
      acts.splice(indexActe, 1);
      definirBrouillon(idScenario, { ...brouillon, acts });
    },
    [obtenirBrouillon, definirBrouillon],
  );

  const reordonnerActes = useCallback(
    (idScenario, ancienIndex, nouvelIndex) => {
      const brouillon = obtenirBrouillon(idScenario);
      if (!brouillon) return;
      const acts = [...(brouillon.acts || [])];
      if (ancienIndex < 0 || ancienIndex >= acts.length) return;
      if (nouvelIndex < 0 || nouvelIndex >= acts.length) return;
      const [deplace] = acts.splice(ancienIndex, 1);
      acts.splice(nouvelIndex, 0, deplace);
      definirBrouillon(idScenario, { ...brouillon, acts });
    },
    [obtenirBrouillon, definirBrouillon],
  );

  // ── Gestion des scènes ─────────────────────────────────────────────────

  const ajouterScene = useCallback(
    (idScenario, indexActe) => {
      const brouillon = obtenirBrouillon(idScenario);
      if (!brouillon) return;
      const acts = [...(brouillon.acts || [])];
      const scenes = [...(acts[indexActe]?.scenes || [])];
      scenes.push(creerSceneVide(scenes.length + 1));
      acts[indexActe] = { ...acts[indexActe], scenes };
      definirBrouillon(idScenario, { ...brouillon, acts });
    },
    [obtenirBrouillon, definirBrouillon],
  );

  const supprimerScene = useCallback(
    (idScenario, indexActe, indexScene) => {
      const brouillon = obtenirBrouillon(idScenario);
      if (!brouillon) return;
      const acts = [...(brouillon.acts || [])];
      const scenes = [...(acts[indexActe]?.scenes || [])];
      scenes.splice(indexScene, 1);
      acts[indexActe] = { ...acts[indexActe], scenes };
      definirBrouillon(idScenario, { ...brouillon, acts });
    },
    [obtenirBrouillon, definirBrouillon],
  );

  const reordonnerScenes = useCallback(
    (idScenario, indexActe, ancienIndex, nouvelIndex) => {
      const brouillon = obtenirBrouillon(idScenario);
      if (!brouillon) return;
      const acts = [...(brouillon.acts || [])];
      const scenes = [...(acts[indexActe]?.scenes || [])];
      if (ancienIndex < 0 || ancienIndex >= scenes.length) return;
      if (nouvelIndex < 0 || nouvelIndex >= scenes.length) return;
      const [deplace] = scenes.splice(ancienIndex, 1);
      scenes.splice(nouvelIndex, 0, deplace);
      acts[indexActe] = { ...acts[indexActe], scenes };
      definirBrouillon(idScenario, { ...brouillon, acts });
    },
    [obtenirBrouillon, definirBrouillon],
  );

  // ── Sauvegarder / Annuler ───────────────────────────────────────────────

  const sauvegarder = useCallback(
    async (idScenario) => {
      const brouillon = brouillons[idScenario];
      if (!brouillon) return false;

      const { _source, ...donnees } = brouillon;

      if (estModeEditeur()) {
        try {
          await apiScenarios.modifier(idScenario, donnees);
          // Succès : données écrites sur disque, on purge le brouillon local
          supprimerEdition(idScenario);
          definirBrouillons((prev) => {
            const suivant = { ...prev };
            delete suivant[idScenario];
            return suivant;
          });
          console.log(`[EditeurScenario] Scénario ${idScenario} sauvegardé sur disque`);
        } catch (erreur) {
          // Fallback : conserver dans localStorage pour ne pas perdre les données
          persisterEdition(idScenario, donnees);
          console.error(`[EditeurScenario] Erreur API, sauvegarde localStorage uniquement :`, erreur);
          return false;
        }
      } else {
        // Mode viewer (ne devrait pas arriver) — localStorage uniquement
        persisterEdition(idScenario, donnees);
        console.log(`[EditeurScenario] Scénario ${idScenario} sauvegardé (localStorage)`);
      }

      return true;
    },
    [brouillons, definirBrouillons],
  );

  const annulerModifications = useCallback(
    (idScenario) => {
      supprimerEdition(idScenario);
      definirBrouillons((prev) => {
        const nouveau = { ...prev };
        delete nouveau[idScenario];
        return nouveau;
      });
    },
    [],
  );

  const sauvegarderTout = useCallback(async () => {
    const resultats = await Promise.all(
      Object.keys(brouillons).map((id) => sauvegarder(Number(id)))
    );
    return resultats.every(Boolean);
  }, [brouillons, sauvegarder]);

  // ── Modale d'édition de scène ───────────────────────────────────────────

  const ouvrirEditeurScene = useCallback(
    (idScenario, indexActe, indexScene) => {
      definirSceneEditee({ idScenario, indexActe, indexScene });
    },
    [],
  );

  const fermerEditeurScene = useCallback(() => {
    definirSceneEditee(null);
  }, []);

  // ── Toggle mode édition ─────────────────────────────────────────────────

  const basculerModeEdition = useCallback(() => {
    definirModeEdition((prev) => !prev);
  }, []);

  const activerModeEdition = useCallback(() => {
    definirModeEdition(true);
  }, []);

  // ── Valeur du contexte ──────────────────────────────────────────────────

  const valeur = useMemo(
    () => ({
      // État
      modeEdition,
      basculerModeEdition,
      activerModeEdition,
      scenariosFusionnes,

      // Brouillons
      estModifie,
      obtenirBrouillon,

      // Modifications scénario
      modifierChampScenario,

      // Modifications acte
      modifierChampActe,
      ajouterActe,
      supprimerActe,
      reordonnerActes,

      // Modifications scène
      modifierChampScene,
      modifierChampSceneImbrique,
      ajouterScene,
      supprimerScene,
      reordonnerScenes,

      // Persistance
      sauvegarder,
      annulerModifications,
      sauvegarderTout,

      // Modale scène
      sceneEditee,
      ouvrirEditeurScene,
      fermerEditeurScene,
    }),
    [
      modeEdition,
      basculerModeEdition,
      activerModeEdition,
      scenariosFusionnes,
      estModifie,
      obtenirBrouillon,
      modifierChampScenario,
      modifierChampActe,
      ajouterActe,
      supprimerActe,
      reordonnerActes,
      modifierChampScene,
      modifierChampSceneImbrique,
      ajouterScene,
      supprimerScene,
      reordonnerScenes,
      sauvegarder,
      annulerModifications,
      sauvegarderTout,
      sceneEditee,
      ouvrirEditeurScene,
      fermerEditeurScene,
    ],
  );

  return (
    <ContexteEditeurScenario.Provider value={valeur}>
      {children}
    </ContexteEditeurScenario.Provider>
  );
}

export { utiliserEditeurScenario } from "./ContexteEditeurScenarioBase";
