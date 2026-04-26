import { createContext, useContext, useState, useCallback } from "react";
import { chercherPnjParId } from "../data/npcRegistry";
import ModaleDetailsPnj from "../composants/pnj/ModaleDetailsPnj";

/**
 * Contexte global pour ouvrir la fiche détaillée d'un PNJ en modale
 * depuis n'importe quelle page, sans navigation.
 */
const NOOP_MODALE_PNJ = { ouvrirFichePnj: () => {}, fermerFichePnj: () => {} };
const ContexteModalePnj = createContext(NOOP_MODALE_PNJ);

/**
 * Hook pour consommer le contexte de la modale PNJ
 * @returns {{ ouvrirFichePnj: (idPnj: string) => void, fermerFichePnj: () => void }}
 */
export function utiliserModalePnj() {
  return useContext(ContexteModalePnj);
}

/**
 * Fournisseur du contexte — à placer autour de <Outlet /> dans Disposition.jsx
 * Rend la ModaleDetailsPnj en interne quand un PNJ est sélectionné.
 */
export function FournisseurModalePnj({ children }) {
  const [pnjSelectionne, definirPnjSelectionne] = useState(null);

  const ouvrirFichePnj = useCallback((idPnj) => {
    const pnj = chercherPnjParId(idPnj);
    if (pnj) {
      definirPnjSelectionne(pnj);
    }
  }, []);

  const fermerFichePnj = useCallback(() => {
    definirPnjSelectionne(null);
  }, []);

  return (
    <ContexteModalePnj.Provider value={{ ouvrirFichePnj, fermerFichePnj }}>
      {children}
      <ModaleDetailsPnj
        pnj={pnjSelectionne}
        estOuverte={!!pnjSelectionne}
        fermer={fermerFichePnj}
      />
    </ContexteModalePnj.Provider>
  );
}

