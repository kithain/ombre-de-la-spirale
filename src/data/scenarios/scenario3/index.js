/**
 * Scénario 3 : La Chute de Valombre
 * Index - Agrège tous les actes et exporte le scénario complet
 */

import { scenario3Metadata } from "./metadata";
import { acte1 } from "./acte1_mineurs_radicaux";
import { acte2 } from "./acte2_le_sabotage";
import { acte3 } from "./acte3_la_detente";
import { acte4 } from "./acte4_nuit_longs_couteaux";
import { acte5 } from "./acte5_siege_temple";
import { acte6 } from "./acte6_chute_temple";
import { acte7 } from "./acte7_descente_abime";

export const scenario3 = {
  ...scenario3Metadata,
  acts: [acte1, acte2, acte3, acte4, acte5, acte6, acte7],
};

// Exports individuels pour accès ciblé
export { scenario3Metadata } from "./metadata";
export { acte1 } from "./acte1_mineurs_radicaux";
export { acte2 } from "./acte2_le_sabotage";
export { acte3 } from "./acte3_la_detente";
export { acte4 } from "./acte4_nuit_longs_couteaux";
export { acte5 } from "./acte5_siege_temple";
export { acte6 } from "./acte6_chute_temple";
export { acte7 } from "./acte7_descente_abime";
