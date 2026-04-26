/**
 * Contexte minimal de l'éditeur Zone — hook + valeur par défaut no-op.
 * Voir ContexteEditeurPnjBase.js pour la justification de ce split.
 */
import { createContext, useContext } from "react";

const VALEUR_DEFAUT = {
  ouvrirEditeurZone: () => {},
  fermerEditeurZone: () => {},
};

export const ContexteEditeurZone = createContext(VALEUR_DEFAUT);

/**
 * Hook pour consommer le contexte éditeur Zone.
 * Retourne les no-ops si appelé hors Provider (mode viewer).
 * @returns {{ ouvrirEditeurZone: function, fermerEditeurZone: function }}
 */
export function utiliserEditeurZoneContexte() {
  return useContext(ContexteEditeurZone);
}
