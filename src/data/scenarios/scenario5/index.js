/**
 * Scénario 5 : L'Aube de Sang
 * Index - Agrège tous les actes et exporte le scénario complet
 */

import { scenario5Metadata } from "./metadata";
import { acte1 } from "./acte1_resistance_ombre";
import { acte2 } from "./acte2_ascension_miroirs";
import { acte3 } from "./acte3_apotheose_vide";

export const scenario5 = {
  ...scenario5Metadata,
  acts: [acte1, acte2, acte3],
};

// Exports individuels pour accès ciblé
export { scenario5Metadata } from "./metadata";
export { acte1 } from "./acte1_resistance_ombre";
export { acte2 } from "./acte2_ascension_miroirs";
export { acte3 } from "./acte3_apotheose_vide";
