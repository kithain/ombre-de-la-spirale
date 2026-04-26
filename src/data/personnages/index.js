/**
 * Index centralisé pour tous les personnages.
 *
 * Importe une seule fois chaque module puis ré-exporte et agrège.
 * Évite les doubles imports qui augmentent inutilement le module graph.
 */

// PNJ nommés
export { pnjPrincipaux } from "./pnj_principaux";
import { pnjEnnemisRaw } from "./02_pnj_ennemis";
export { pnjEnnemisRaw };

// Utilitaires
import { creerPnj, createPnj } from "./pnjTemplate";
export { creerPnj, createPnj };

/** PNJ ennemis normalisés via creerPnj() — compatibilité client */
export const pnjEnnemis = pnjEnnemisRaw.map((pnj) => {
  try { return creerPnj(pnj); } catch { return pnj; }
});
export { factionsData } from "./factions";

// Archétypes par FP (import unique, utilisé pour re-export + agrégation)
import { archetypeFp1 } from "./03_archetype_fp1";
import { archetypeFp2 } from "./04_archetype_fp2";
import { archetypeFp3 } from "./05_archetype_fp3";
import { archetypeFp4 } from "./06_archetype_fp4";
import { archetypeFp5 } from "./07_archetype_fp5";
import { archetypeFp6 } from "./08_archetype_fp6";
import { archetypeFp7 } from "./09_archetype_fp7";
import { archetypeFp8 } from "./10_archetype_fp8";
import { archetypeFp9 } from "./11_archetype_fp9";
import { archetypeFp10 } from "./12_archetype_fp10";

export {
  archetypeFp1, archetypeFp2, archetypeFp3, archetypeFp4, archetypeFp5,
  archetypeFp6, archetypeFp7, archetypeFp8, archetypeFp9, archetypeFp10,
};

/** Bestiaire complet : tous les archétypes FP 1–10, normalisés via creerPnj() */
export const bestiaryData35FR = [
  ...archetypeFp1,
  ...archetypeFp2,
  ...archetypeFp3,
  ...archetypeFp4,
  ...archetypeFp5,
  ...archetypeFp6,
  ...archetypeFp7,
  ...archetypeFp8,
  ...archetypeFp9,
  ...archetypeFp10,
].map((archetype) => {
  try {
    return creerPnj(archetype);
  } catch {
    console.warn(`[bestiaryData35FR] Normalisation impossible pour "${archetype?.nom || archetype?.id || "?"}", entrée conservée brute.`);
    return archetype;
  }
});

/** Alias pour compatibilité */
export const bestiaryData = bestiaryData35FR;
