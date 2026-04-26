/**
 * Scénario 1 : Le Prix de l'Impatience
 * Index - Agrège tous les actes et exporte le scénario complet
 */

import { scenario1Metadata } from "./metadata";
import { acte1 } from "./acte1_incident_cimetiere";
import { acte2 } from "./acte2_piste_arcanique";
import { acte3 } from "./acte3_egouts_labyrinthe";
import { acte4 } from "./acte4_rituel_spirale";

export const scenario1 = {
  ...scenario1Metadata,
  acts: [acte1, acte2, acte3, acte4],
};

// Exports individuels pour accès ciblé
export { scenario1Metadata } from "./metadata";
export { acte1 } from "./acte1_incident_cimetiere";
export { acte2 } from "./acte2_piste_arcanique";
export { acte3 } from "./acte3_egouts_labyrinthe";
export { acte4 } from "./acte4_rituel_spirale";
