/**
 * Clone profond sûr pour structures JSON sérialisables.
 * Pas de fonctions, pas de références circulaires.
 *
 * Point unique d'import pour éviter la duplication entre
 * helpersEditeur.js et pnjTemplate.js.
 *
 * @param {*} obj
 * @returns {*}
 */
export function clonerProfond(obj) {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj !== "object") return obj;
  try {
    return structuredClone(obj);
  } catch {
    return JSON.parse(JSON.stringify(obj));
  }
}
