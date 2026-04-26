/**
 * Index des PNJ Principaux
 * Agrège tous les PNJ par scénario et exporte la liste complète
 */

import { creerPnj } from "../pnjTemplate";

// Import des PNJ par scénario
import { pnjGlobauxRaw } from "./pnj_globaux";
import { pnjScenario1Raw } from "./pnj_scenario1";
import { pnjScenario2Raw } from "./pnj_scenario2";
import { pnjScenario3_4Raw } from "./pnj_scenario3_4";
import { pnjScenario5Raw } from "./pnj_scenario5";

// Agrégation de tous les PNJ bruts
const pnjPrincipauxRaw = [
  ...pnjGlobauxRaw,
  ...pnjScenario1Raw,
  ...pnjScenario2Raw,
  ...pnjScenario3_4Raw,
  ...pnjScenario5Raw,
];

// Application du template et export
export const pnjPrincipaux = pnjPrincipauxRaw.map((pnj) => creerPnj(pnj));

// Exports individuels pour accès ciblé
export { pnjGlobauxRaw } from "./pnj_globaux";
export { pnjScenario1Raw } from "./pnj_scenario1";
export { pnjScenario2Raw } from "./pnj_scenario2";
export { pnjScenario3_4Raw } from "./pnj_scenario3_4";
export { pnjScenario5Raw } from "./pnj_scenario5";
