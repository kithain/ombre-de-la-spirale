/**
 * Contexte minimal de l'éditeur Lieu — hook + valeur par défaut no-op.
 * Voir ContexteEditeurPnjBase.js pour la justification de ce split.
 */
import { createContext, useContext } from "react";

const VALEUR_DEFAUT = {
  ouvrirEditeurLieu: () => {},
  fermerEditeurLieu: () => {},
  creerNouveauLieu: () => {},
  supprimerLieuActif: async () => false,
};

export const ContexteEditeurLieu = createContext(VALEUR_DEFAUT);

/**
 * Hook pour consommer le contexte éditeur Lieu.
 * Retourne les no-ops si appelé hors Provider (mode viewer).
 * @returns {{ ouvrirEditeurLieu: function, fermerEditeurLieu: function, creerNouveauLieu: function, supprimerLieuActif: function }}
 */
export function utiliserEditeurLieuContexte() {
  return useContext(ContexteEditeurLieu);
}
