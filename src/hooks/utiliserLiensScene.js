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
    const idsPnj = Array.isArray(scene.idsPnj) ? scene.idsPnj : [];
    const idsImpliques = Array.isArray(scene.idsPnjImpliques) ? scene.idsPnjImpliques : [];
    const idsDejaPresent = new Set(idsPnj);

    const present = idsPnj.map((id) => {
      const pnj = chercherPnjParId(id);
      if (!pnj) return { id, nom: id, origine: null, introuvable: true };
      return { ...pnj, id, nom: pnj.nom || id, origine: pnj.origine, implique: false };
    });

    const impliques = idsImpliques
      .filter((id) => !idsDejaPresent.has(id))
      .map((id) => {
        const pnj = chercherPnjParId(id);
        if (!pnj) return { id, nom: id, origine: null, introuvable: true, implique: true };
        return { ...pnj, id, nom: pnj.nom || id, origine: pnj.origine, implique: true };
      });

    return [...present, ...impliques];
  }, [scene.idsPnj, scene.idsPnjImpliques]);

  return { lieuLie, pnjLies };
}
