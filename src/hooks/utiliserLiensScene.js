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
    () => (scene.idLieu ? trouverLieuParId(scene.idLieu) : null),
    [scene.idLieu],
  );

  const pnjLies = useMemo(() => {
    if (!Array.isArray(scene.idsPnj)) return [];
    return scene.idsPnj.map((id) => {
      const pnj = chercherPnjParId(id);
      if (!pnj) {
        return { id, nom: id, origine: null, introuvable: true };
      }
      return {
        ...pnj,
        id,
        nom: pnj.nom || id,
        origine: pnj.origine,
      };
    });
  }, [scene.idsPnj]);

  return { lieuLie, pnjLies };
}
