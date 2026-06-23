/**
 * Obtient le badge de catégorie pour un PNJ
 * @param {string} categorie - Catégorie du PNJ
 * @returns {object|null} Objet avec etiquette et className, ou null
 */
export function obtenirBadgeCategorie(categorie) {
  switch (categorie) {
    case "monstres":
      return {
        etiquette: "Monstre",
        nomClasse: "bg-purple-900/20 text-purple-300 border-purple-800/30",
      };
    case "ennemis":
      return {
        etiquette: "Ennemi",
        nomClasse: "bg-red-900/20 text-red-300 border-red-800/30",
      };
    case "allies":
      return {
        etiquette: "Allié",
        nomClasse: "bg-blue-900/20 text-blue-300 border-blue-800/30",
      };
    default:
      return null;
  }
}
