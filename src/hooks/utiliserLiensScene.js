import { useMemo } from "react";
import { chercherPnjParId } from "../data/npcRegistry";
import { trouverLieuParId } from "../utilitaires/liaisonsDonnees";

/**
 * Hook pour résoudre les liens lieu/PNJ d'une scène
 * Extrait la logique de données hors du composant de présentation CarteScene
 * @param {object} scene - Données brutes de la scène
 * @returns {{ lieuLie: object|null, pnjLies: Array }}
 */
export function utiliserLiensScene(scene) {
  const lieuLie = useMemo(
    () => (scene.locationId ? trouverLieuParId(scene.locationId) : null),
    [scene.locationId],
  );

  const pnjLies = useMemo(() => {
    if (!Array.isArray(scene.npcIds)) return [];
    return scene.npcIds.map((id) => {
      const pnj = chercherPnjParId(id);
      if (!pnj) {
        return { id, nom: id, source: null };
      }
      return {
        ...pnj,
        id,
        nom: pnj.nom || id,
        source: pnj.source,
      };
    });
  }, [scene.npcIds]);

  return { lieuLie, pnjLies };
}
