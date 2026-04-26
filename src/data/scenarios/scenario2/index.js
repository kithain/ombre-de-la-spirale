/**
 * Scénario 2 : L'Écho des Profondeurs
 * Index - Agrège tous les actes et exporte le scénario complet
 */

import { scenario2Metadata } from "./metadata";
import { acte1 } from "./acte1_fraternite_nyx";
import { acte2 } from "./acte2_protection_efficace";
import { acte3 } from "./acte3_la_descente";
import { acte4 } from "./acte4_premier_cercle";
import { acte5 } from "./acte5_prix_silence";

export const scenario2 = {
  ...scenario2Metadata,
  acts: [acte1, acte2, acte3, acte4, acte5],
};

// Exports individuels pour accès ciblé
export { scenario2Metadata } from "./metadata";
export { acte1 } from "./acte1_fraternite_nyx";
export { acte2 } from "./acte2_protection_efficace";
export { acte3 } from "./acte3_la_descente";
export { acte4 } from "./acte4_premier_cercle";
export { acte5 } from "./acte5_prix_silence";
