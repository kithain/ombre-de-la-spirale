import { BIOMES_LISTE_PLATE } from "../data/constantesDnD35";
import { universeZones } from "../data/universe/universeZones";

/** Biomes pré-triés par longueur décroissante (plus long match en premier, calculé une seule fois) */
const BIOMES_PAR_LONGUEUR = [...BIOMES_LISTE_PLATE].sort((a, b) => b.length - a.length);

/**
 * Normalise un PNJ et migre les champs hérités :
 * - `lieu` (ancien champ unique) → `residence`
 * - `environnement` texte libre → `biome` + `residence` (déduits si possible)
 *
 * Ne mute PAS l'objet original : retourne une copie enrichie.
 *
 * @param {object} pnj - Objet PNJ
 * @returns {object|null} PNJ avec biome/residence/lieuxRencontre déduits, ou null si entrée invalide
 */
export function normaliserPnj(pnj) {
  if (!pnj || typeof pnj !== "object") return null;

  try {
    // Copie superficielle pour ne pas muter l'original
    const resultat = { ...pnj };

    // Migration : ancien champ `lieu` → `residence`
    if (resultat.lieu && !resultat.residence) {
      resultat.residence = resultat.lieu;
      delete resultat.lieu;
    }

    // S'assurer que lieuxRencontre existe
    if (!Array.isArray(resultat.lieuxRencontre)) {
      resultat.lieuxRencontre = [];
    }

    // Déjà structuré → rien de plus à faire
    if (resultat.biome || resultat.residence) return resultat;

    const env = (resultat.environnement || "").trim();
    if (!env) return resultat;

    const envLower = env.toLowerCase();

    // 1. Matcher un biome (plus long match d'abord, pré-trié)
    const biomeTrouve = BIOMES_PAR_LONGUEUR.find(
      (b) => envLower.includes(b.toLowerCase())
    ) || "";

    // 2. Matcher un lieu du scénario par nom → residence
    let lieuTrouve = "";
    for (const zone of universeZones || []) {
      for (const loc of zone.locations || []) {
        if (loc.name && envLower.includes(loc.name.toLowerCase())) {
          lieuTrouve = loc.id;
          break;
        }
      }
      if (lieuTrouve) break;
    }

    if (biomeTrouve) resultat.biome = biomeTrouve;
    if (lieuTrouve) resultat.residence = lieuTrouve;

    return resultat;
  } catch (erreur) {
    console.error(`[normaliserPnj] Erreur pour "${pnj.nom || pnj.id || "?"}":`, erreur);
    return pnj;
  }
}
