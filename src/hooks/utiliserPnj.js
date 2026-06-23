/**
 * Hook utiliserPnj - Wrapper simplifié autour du registre des PNJ
 */
import { useMemo } from "react";
import {
  tousLesPnj,
  chercherPnjParId,
  obtenirPnjParCategorie,
  compteursPnj,
  categoriesPnj,
} from "../data/npc_registry";

export function utiliserPnj() {
  return useMemo(() => ({
    pnj: tousLesPnj,
    compteurs: compteursPnj,
    obtenirPnjParId: chercherPnjParId,
    obtenirPnjParCategorie,
    categories: categoriesPnj,
  }), []);
}
