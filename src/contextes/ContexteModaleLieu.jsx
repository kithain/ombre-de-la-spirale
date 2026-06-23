import { createContext, useContext, useState, useCallback } from "react";
import { trouverLieuParId } from "../utilitaires/liaisonsDonnees";
import ModaleDetailsLieu from "../composants/lieux/ModaleDetailsLieu";

/**
 * Contexte global pour ouvrir la fiche détaillée d'un Lieu en modale
 * depuis n'importe quelle page, sans navigation.
 */
const NOOP_MODALE_LIEU = { ouvrirFicheLieu: () => {}, fermerFicheLieu: () => {} };
const ContexteModaleLieu = createContext(NOOP_MODALE_LIEU);

/**
 * Hook pour consommer le contexte de la modale Lieu
 * @returns {{ ouvrirFicheLieu: (idLieu: string) => void, fermerFicheLieu: () => void }}
 */
export function utiliserModaleLieu() {
  return useContext(ContexteModaleLieu);
}

/**
 * Fournisseur du contexte — à placer autour de <Outlet /> dans Disposition.jsx
 * Rend la ModaleDetailsLieu en interne quand un lieu est sélectionné.
 */
export function FournisseurModaleLieu({ children }) {
  const [lieuSelectionne, definirLieuSelectionne] = useState(null);
  const [zoneSelectionnee, definirZoneSelectionnee] = useState(null);

  const ouvrirFicheLieu = useCallback((idLieu) => {
    const resultat = trouverLieuParId(idLieu);
    if (resultat) {
      definirLieuSelectionne(resultat.lieu);
      definirZoneSelectionnee(resultat.zone);
    }
  }, []);

  const fermerFicheLieu = useCallback(() => {
    definirLieuSelectionne(null);
    definirZoneSelectionnee(null);
  }, []);

  return (
    <ContexteModaleLieu.Provider value={{ ouvrirFicheLieu, fermerFicheLieu }}>
      {children}
      <ModaleDetailsLieu
        lieu={lieuSelectionne}
        zone={zoneSelectionnee}
        estOuverte={!!lieuSelectionne}
        fermer={fermerFicheLieu}
      />
    </ContexteModaleLieu.Provider>
  );
}

