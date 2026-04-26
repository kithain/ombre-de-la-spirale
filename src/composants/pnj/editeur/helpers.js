/**
 * Helpers partagés entre les sous-composants de l'éditeur de personnage.
 * Pure functions — pas de dépendance React.
 */

export const NOMS_CARACS = {
  for: "Force",
  dex: "Dextérité",
  con: "Constitution",
  int: "Intelligence",
  sag: "Sagesse",
  cha: "Charisme",
};

/**
 * Extrait la représentation textuelle d'un élément att_spe / qual_spe.
 * @param {string|{nom?: string}|*} el
 * @returns {string}
 */
export function versTexteCapacite(el) {
  if (typeof el === "string") return el;
  if (el && typeof el === "object") return el.nom ?? "";
  return "";
}

/**
 * Vérifie si une valeur est déjà présente dans une liste att_spe / qual_spe
 * via correspondance inclusive insensible à la casse.
 * @param {Array<string|object>} liste
 * @param {string} valeur
 * @returns {boolean}
 */
export function capaciteDejaPresente(liste, valeur) {
  const v = versTexteCapacite(valeur).toLowerCase().trim();
  if (!v) return false;
  return liste.some((el) => {
    const t = versTexteCapacite(el).toLowerCase().trim();
    return t.includes(v) || v.includes(t);
  });
}
