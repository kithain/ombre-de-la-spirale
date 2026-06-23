/**
 * Index centralisé pour tous les personnages.
 */

import { pnjData } from "./pnj";
import { creerPnj } from "./pnjTemplate";

export { creerPnj };

export const pnjPrincipaux = pnjData.map((pnj) => {
  try { return creerPnj(pnj); } catch { return pnj; }
});

export { factionsData } from "./factions";
