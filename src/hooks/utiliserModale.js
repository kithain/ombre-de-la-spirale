import { useState, useCallback } from "react";

/**
 * Hook pour gérer l'état d'une modale
 * @param {boolean} etatInitial - État initial (ouvert/fermé)
 * @returns {object} { estOuvert, ouvrir, fermer, basculer, donnees, definirDonnees }
 */
export function utiliserModale(etatInitial = false) {
  const [estOuvert, definirEstOuvert] = useState(etatInitial);
  const [donnees, definirDonnees] = useState(null);

  const ouvrir = useCallback((donneesModale = null) => {
    definirDonnees(donneesModale);
    definirEstOuvert(true);
  }, []);

  const fermer = useCallback(() => {
    definirEstOuvert(false);
    definirDonnees(null);
  }, []);

  const basculer = useCallback(() => {
    definirEstOuvert((precedent) => !precedent);
  }, []);

  return {
    estOuvert,
    ouvrir,
    fermer,
    basculer,
    donnees,
    definirDonnees,
  };
}
