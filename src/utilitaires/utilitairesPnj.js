/**
 * Obtient la variante d'étiquette en fonction de la disposition du PNJ
 *
 * Valeurs possibles de disposition :
 * - "hostile"  → Badge "Combat" (rouge)
 * - "tendu"    → Badge "Tension" (orange)
 * - "neutre"   → Badge "Social" (jaune)
 * - "amical"   → Badge "Allié" (bleu)
 * - "boss"     → Badge "Boss" (violet)
 *
 * Si pas de disposition, fallback sur est_ennemi puis category
 *
 * @param {object} pnj - L'objet PNJ complet
 * @returns {string} Nom de la variante
 */
export function obtenirVarianteFp(pnj) {
  // Si c'est juste un FP (ancien usage), on garde la compat
  if (typeof pnj === "number" || typeof pnj === "string") {
    const nombre = analyserFp(pnj);
    if (nombre >= 10) return "Boss";
    if (nombre >= 7) return "Combat";
    if (nombre >= 4) return "Tension";
    return "Social";
  }

  // Nouveau système basé sur disposition
  const disposition = pnj?.disposition;

  if (disposition) {
    switch (disposition) {
      case "hostile":
        return "Combat";
      case "tendu":
        return "Tension";
      case "neutre":
        return "Social";
      case "amical":
        return "Allié";
      case "boss":
        return "Boss";
      default:
        break;
    }
  }

  // Fallback : basé sur estEnnemi et category
  const estEnnemi = pnj?.est_ennemi;
  const category = pnj?.category;

  if (estEnnemi === true) {
    return "Combat";
  }

  if (category === "allies") {
    return "Allié";
  }

  if (category === "monstres" || category === "ennemis") {
    return "Tension";
  }

  return "Social";
}

/**
 * Analyse et convertit un FP en nombre
 * Gère les fractions (1/4), les chaînes complexes (Mage 5, Guerrier 2), etc.
 * @param {number|string} fp - Facteur de puissance à analyser
 * @returns {number} Valeur numérique du FP
 */
export function analyserFp(fp) {
  if (fp === undefined || fp === null) return 0;
  if (typeof fp === "number") return fp;
  const chaine = String(fp).trim();

  // Si c'est une fraction (ex: "1/4")
  if (chaine.includes("/")) {
    const parties = chaine.split("/");
    if (parties.length === 2) {
      return parseFloat(parties[0]) / parseFloat(parties[1]);
    }
  }

  // Si c'est une chaîne complexe (ex: "Mage 5, Guerrier 2"), on somme les nombres
  const correspondances = chaine.match(/\d+/g);
  if (correspondances && correspondances.length > 0) {
    // Si c'est juste un nombre (ex: "5"), ça marche aussi
    return correspondances.reduce((somme, val) => somme + parseInt(val, 10), 0);
  }

  return parseFloat(chaine) || 0;
}

/**
 * Plages de FP disponibles pour le filtrage
 */
export const PLAGES_FP = ["tous", "inf1", "1-2", "3-4", "5-6", "7-9", "10+"];

/**
 * Vérifie si un FP numérique correspond à une plage donnée
 * @param {number} fp - Valeur FP numérique
 * @param {string} plage - Identifiant de la plage ("inf1", "1-2", etc.)
 * @returns {boolean}
 */
export function fpDansPlage(fp, plage) {
  switch (plage) {
    case "inf1":  return fp < 1;
    case "1-2":   return fp >= 1 && fp <= 2;
    case "3-4":   return fp >= 3 && fp <= 4;
    case "5-6":   return fp >= 5 && fp <= 6;
    case "7-9":   return fp >= 7 && fp <= 9;
    case "10+":   return fp >= 10;
    default:      return true;
  }
}

/**
 * Filtre une liste de PNJ par plage de FP
 * @param {Array} listePnj - Liste de PNJ à filtrer
 * @param {string} filtreFp - Identifiant de la plage
 * @returns {Array} PNJ dont le FP est dans la plage
 */
export function filtrerParPlageFp(listePnj, filtreFp) {
  if (filtreFp === "tous") return listePnj;
  return listePnj.filter((pnj) => {
    const valeur = (pnj.niveau !== null && pnj.niveau !== undefined) ? pnj.niveau : pnj.fp;
    return fpDansPlage(analyserFp(valeur), filtreFp);
  });
}

/**
 * Mappe un mode + FP vers le nom de fichier source correspondant.
 * @param {"pnj"|"creature"} mode
 * @param {string|number|null} fp - FP de la créature (ex : "1/2", "3", 5)
 * @returns {string}
 */
export function fichierCiblePourMode(mode, fp) {
  if (mode === "pnj") return "02_pnj_ennemis.js";
  const s = String(fp ?? "").trim();
  if (!s || ["1/8", "1/4", "1/2"].includes(s)) return "03_archetype_fp1.js";
  const n = parseFloat(s);
  if (isNaN(n) || n <= 1) return "03_archetype_fp1.js";
  const entier = Math.min(Math.round(n), 10);
  if (entier <= 1) return "03_archetype_fp1.js";
  const num = String(entier + 2).padStart(2, "0");
  return `${num}_archetype_fp${entier}.js`;
}

/**
 * Obtient le badge de catégorie pour un PNJ
 * @param {string} categorie - Catégorie du PNJ
 * @returns {object|null} Objet avec label et className, ou null
 */
export function obtenirBadgeCategorie(categorie) {
  switch (categorie) {
    case "monstres":
      return {
        label: "Monstre",
        nomClasse: "bg-purple-900/20 text-purple-300 border-purple-800/30",
      };
    case "ennemis":
      return {
        label: "Ennemi",
        nomClasse: "bg-red-900/20 text-red-300 border-red-800/30",
      };
    case "allies":
      return {
        label: "Allié",
        nomClasse: "bg-blue-900/20 text-blue-300 border-blue-800/30",
      };
    default:
      return null;
  }
}
