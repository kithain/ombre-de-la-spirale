/**
 * Scénario 4 : Le Labyrinthe Vivant
 * Index - Agrège tous les actes et exporte le scénario complet
 */

import { scenario4Metadata } from "./metadata";
import { acte1 } from "./acte1_chute_impossible";
import { acte2 } from "./acte2_purgatoire_echos";
import { acte3 } from "./acte3_cathedrale_soupirs";
import { acte4 } from "./acte4_coeur_mecanique";
import { acte5 } from "./acte5_retour_amere";

export const scenario4 = {
  ...scenario4Metadata,
  acts: [acte1, acte2, acte3, acte4, acte5],
};

// Exports individuels pour accès ciblé
export { scenario4Metadata } from "./metadata";
export { acte1 } from "./acte1_chute_impossible";
export { acte2 } from "./acte2_purgatoire_echos";
export { acte3 } from "./acte3_cathedrale_soupirs";
export { acte4 } from "./acte4_coeur_mecanique";
export { acte5 } from "./acte5_retour_amere";
