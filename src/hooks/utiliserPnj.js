/**
 * Hook utiliserPnj - Wrapper simplifié autour du registre des PNJ
 * Utilise la source unique pour éviter les duplications.
 *
 * Le retour est mémorisé : les consommateurs ne re-rendront que
 * si les données statiques changent (ce qui n'arrive jamais en session).
 */
import { useMemo, useCallback } from "react";
import {
  tousLesPnj,
  chercherPnjParId,
  obtenirPnjParCategorie,
  compteursPnj,
  categoriesPnj,
} from "../data/npcRegistry";
import { filtrerParPlageFp, PLAGES_FP } from "../utilitaires/utilitairesPnj";

export function utiliserPnj() {
  const obtenirPnjParFp = useCallback(
    (filtreFp, listSource = tousLesPnj) => filtrerParPlageFp(listSource, filtreFp),
    [],
  );

  return useMemo(() => ({
    pnj: tousLesPnj,
    compteurs: compteursPnj,
    obtenirPnjParId: chercherPnjParId,
    obtenirPnjParCategorie,
    obtenirPnjParFp,
    categories: categoriesPnj,
    filtresFp: PLAGES_FP,
  }), [obtenirPnjParFp]);
}
