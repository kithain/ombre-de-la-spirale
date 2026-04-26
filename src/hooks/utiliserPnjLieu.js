import { useMemo } from "react";
import {
  trouverPnjParIdLieu,
  trouverPnjParId,
  trouverOccurrencesPnj,
  obtenirPnjPourLieu,
} from "../utilitaires/liaisonsDonnees";

/**
 * Hook pour résoudre les PNJ résidents et visiteurs d'un lieu
 * Extrait la logique de données hors du composant de présentation DetailsLieux
 * @param {object|null} lieu - Lieu sélectionné
 * @returns {{ residents: Array, visiteurs: Array }}
 */
export function utiliserPnjLieu(lieu) {
  return useMemo(() => {
    if (!lieu) return { residents: [], visiteurs: [] };

    const pnjResidents = obtenirPnjPourLieu(lieu);
    const residents = pnjResidents.map((pnj) => ({
      ...pnj,
      occurrences: trouverOccurrencesPnj(pnj.id),
    }));

    const entreesVisiteurs = trouverPnjParIdLieu(lieu.id);
    const idsResidents = new Set(pnjResidents.map((pnj) => pnj.id));

    const visiteurs = entreesVisiteurs
      .filter((entree) => !idsResidents.has(entree.pnjId))
      .map((entree) => {
        const lienPnj = trouverPnjParId(entree.pnjId);
        const donneesPnj = lienPnj?.pnj;
        return {
          id: entree.pnjId,
          nom: donneesPnj?.nom || entree.pnjId,
          role: donneesPnj?.role || "",
          est_ennemi: donneesPnj?.est_ennemi ?? false,
          occurrences: entree.occurrences || [],
        };
      });

    return { residents, visiteurs };
  }, [lieu]);
}
