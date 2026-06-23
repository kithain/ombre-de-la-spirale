import { useState, useEffect } from "react";

/**
 * Hook pour gérer un état persistant dans le localStorage
 * @param {string} cle - Clé de stockage dans le localStorage
 * @param {*} valeurInitiale - Valeur initiale si aucune valeur n'est trouvée
 * @returns {[*, Function]} Tuple [valeur, definirValeur]
 */
export function utiliserEtatPersistant(cle, valeurInitiale) {
  const [valeur, definirValeur] = useState(() => {
    try {
      const sauvegarde = localStorage.getItem(cle);
      return sauvegarde ? JSON.parse(sauvegarde) : valeurInitiale;
    } catch {
      return valeurInitiale;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(cle, JSON.stringify(valeur));
    } catch (erreur) {
      console.error(`Échec de sauvegarde de ${cle} dans localStorage`, erreur);
    }
  }, [cle, valeur]);

  return [valeur, definirValeur];
}
