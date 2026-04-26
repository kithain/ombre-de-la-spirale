/**
 * Contexte minimal de l'éditeur PNJ — hook + valeur par défaut no-op.
 *
 * Séparé du Provider (ContexteEditeurPnj.jsx) pour permettre aux composants
 * viewer d'importer uniquement ce fichier léger, sans tirer le code éditeur
 * lourd (EditeurPersonnage, utiliserEditeurPersonnage, etc.) dans le bundle.
 *
 * En mode viewer : le Provider est un passthrough → useContext retourne
 * VALEUR_DEFAUT (no-ops) → les appels à ouvrirEditeur() etc. sont silencieux.
 * En mode éditeur : le vrai FournisseurEditeurPnj surcharge cette valeur.
 */
import { createContext, useContext } from "react";

const VALEUR_DEFAUT = {
  ouvrirEditeur: () => {},
  fermerEditeur: () => {},
  creerNouveauPnj: () => {},
};

export const ContexteEditeurPnj = createContext(VALEUR_DEFAUT);

/**
 * Hook pour consommer le contexte éditeur PNJ.
 * Retourne les no-ops si appelé hors Provider (mode viewer).
 * @returns {{ ouvrirEditeur: function, fermerEditeur: function, creerNouveauPnj: function }}
 */
export function utiliserEditeurPnj() {
  return useContext(ContexteEditeurPnj);
}
