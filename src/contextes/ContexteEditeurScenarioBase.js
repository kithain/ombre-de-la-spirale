/**
 * Contexte minimal de l'éditeur Scénario — hook + valeur par défaut no-op.
 * Voir ContexteEditeurPnjBase.js pour la justification de ce split.
 *
 * scenariosFusionnes vaut scenariosData par défaut : en viewer mode, il n'y a
 * pas de brouillons donc les données fusionnées = données sources originales.
 * Cela permet à VueScenarios de rendre la liste même sans Provider monté.
 */
import { createContext, useContext } from "react";
import { scenariosData } from "../data/scenarios/scenarios";

const VALEUR_DEFAUT = {
  modeEdition: false,
  basculerModeEdition: () => {},
  activerModeEdition: () => {},
  scenariosFusionnes: scenariosData,

  estModifie: () => false,
  obtenirBrouillon: (id) => scenariosData.find((s) => s.id === id) ?? null,

  modifierChampScenario: () => {},

  modifierChampActe: () => {},
  ajouterActe: () => {},
  supprimerActe: () => {},
  reordonnerActes: () => {},

  modifierChampScene: () => {},
  modifierChampSceneImbrique: () => {},
  ajouterScene: () => {},
  supprimerScene: () => {},
  reordonnerScenes: () => {},

  sauvegarder: async () => {},
  annulerModifications: () => {},
  sauvegarderTout: async () => {},

  sceneEditee: null,
  ouvrirEditeurScene: () => {},
  fermerEditeurScene: () => {},
};

export const ContexteEditeurScenario = createContext(VALEUR_DEFAUT);

/**
 * Hook pour consommer le contexte éditeur Scénario.
 * Retourne les no-ops (et scenariosData) si appelé hors Provider (mode viewer).
 */
export function utiliserEditeurScenario() {
  return useContext(ContexteEditeurScenario);
}
