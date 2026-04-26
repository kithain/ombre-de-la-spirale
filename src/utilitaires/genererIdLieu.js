/**
 * Mots-outils à supprimer lors de la génération d'ID de lieu.
 */
const MOTS_OUTILS = new Set([
  "de", "du", "des", "la", "le", "les", "l", "et", "d", "un", "une", "au", "aux",
]);

/**
 * Supprime les accents d'une chaîne Unicode.
 * @param {string} str
 * @returns {string}
 */
function supprimerAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * Génère un ID snake_case à partir d'un nom de lieu.
 *
 * Conventions :
 * - Supprime les accents
 * - Passe en minuscules
 * - Remplace espaces / tirets / apostrophes par _
 * - Supprime les mots-outils (de, du, des, la, le, les, l', et, d', un, une, au, aux)
 * - Supprime les caractères spéciaux restants
 * - Supprime les underscores consécutifs ou en début/fin
 *
 * Exemples :
 *   "Hôtel de Ville et Place du Conseil" → "hotel_ville_place_conseil"
 *   "Forge-Refuge de Thorgar"            → "forge_refuge_thorgar"
 *   "Taverne des Fumées Rouges"          → "taverne_fumees_rouges"
 *   "L'Antre du Dragon"                  → "antre_dragon"
 *
 * @param {string} nom - Nom du lieu
 * @returns {string} ID en snake_case
 */
export function genererIdLieu(nom) {
  if (!nom || typeof nom !== "string") return "";

  return (
    supprimerAccents(nom)
      .toLowerCase()
      // Apostrophes typographiques et classiques → séparateur
      .replace(/[''`]/g, " ")
      // Tirets → séparateur
      .replace(/-/g, " ")
      // Découper en mots
      .split(/\s+/)
      // Retirer les mots-outils
      .filter((mot) => mot && !MOTS_OUTILS.has(mot))
      // Nettoyer les caractères non-alphanumériques restants
      .map((mot) => mot.replace(/[^a-z0-9]/g, ""))
      .filter(Boolean)
      .join("_")
  );
}

/**
 * Catégories de détails pré-formatées pour un nouveau lieu.
 * Chaque entrée a un label (préfixe) et un placeholder pour guider la saisie.
 */
export const CATEGORIES_DETAILS_LIEU = [
  {
    label: "Ambiance",
    placeholder: "Description sensorielle : odeurs, sons, lumière, atmosphère…",
  },
  {
    label: "Tests",
    placeholder: "Compétences / jets pertinents pour les PJ dans ce lieu…",
  },
  {
    label: "Danger",
    placeholder: "Menaces, ennemis, pièges ou risques présents…",
  },
  {
    label: "Usage",
    placeholder: "Fonction narrative ou scénaristique de ce lieu…",
  },
];

/**
 * Génère le tableau details[] pré-formaté pour un nouveau lieu.
 * @returns {string[]}
 */
export function genererDetailsPreformates() {
  return CATEGORIES_DETAILS_LIEU.map((cat) => `${cat.label} : `);
}
