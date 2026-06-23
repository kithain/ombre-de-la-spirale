/**
 * Données des scénarios de la campagne
 *
 * Ce fichier agrège les trois scénarios de la trilogie Valombre.
 * Structure : Array<{ id, titre, synopsis, actes: [{ titre, scenes: [...] }] }>
 */
import { scenario1 } from "./scenario1_sept_thanes";
import { scenario2 } from "./scenario2_masques_nyx";
import { scenario3 } from "./scenario3_dame_spirale";

export const scenariosData = [scenario1, scenario2, scenario3];
