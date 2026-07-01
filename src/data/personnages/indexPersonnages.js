/**
 * Index centralisé pour tous les personnages.
 *
 * npcRegistry.js est le seul point de normalisation (creerPnj).
 * Ici on exporte les données brutes et les ré-exports utilitaires.
 */

import { pnjData } from "./pnj";

export { creerPnj } from "./pnjTemplate";

export const pnjPrincipaux = pnjData;

export { factionsData } from "./factions";
