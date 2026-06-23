/**
 * NPC Registry — Source unique pour tous les PNJ
 *
 * Responsabilité : normaliser pnjPrincipaux en une structure
 * indexée par ID.
 *
 * Fournit l'API de lecture en mémoire pour tous les PNJ du jeu.
 */
import { pnjPrincipaux } from "./personnages/indexPersonnages";
import { creerPnj } from "./personnages/pnjTemplate";

// ─── HELPERS INTERNES ───────────────────────────────────────────

const CATEGORIES_VALIDES = new Set(["allies", "ennemis", "monstres", "neutres"]);

/** @type {Record<string, string>} */
const COULEURS_CATEGORIES = Object.freeze({
  allies: "text-blue-400",
  ennemis: "text-red-400",
  monstres: "text-purple-400",
  neutres: "text-yellow-400",
});

/**
 * Détermine la catégorie d'un PNJ selon son origine et ses propriétés.
 * @param {object} pnj
 * @param {string} origine - "principaux", "ennemis", "bestiary"
 * @returns {string}
 */
function resoudreCategorie(pnj, origine) {
  if (pnj.categorie && CATEGORIES_VALIDES.has(pnj.categorie)) return pnj.categorie;
  if (origine === "bestiary") return "monstres";
  if (origine === "ennemis") return "ennemis";
  return "allies";
}

/**
 * @param {string} categorie
 * @returns {string} Classe CSS Tailwind
 */
function obtenirCouleurParCategorie(categorie) {
  return COULEURS_CATEGORIES[categorie] || "text-gray-400";
}

/**
 * Enrichit un PNJ brut avec métadonnées (categorie, origine, couleur) puis normalise.
 * @param {object} pnj - Données brutes du PNJ
 * @param {string} origine - Origine ("principaux", "ennemis", "bestiary")
 * @param {object} [extras] - Propriétés supplémentaires à fusionner
 * @returns {object|null}
 */
function enrichirEtNormaliser(pnj, origine, extras = {}) {
  if (!pnj || typeof pnj !== "object") return null;
  const cat = resoudreCategorie(pnj, origine);

  const avecMeta = {
    ...pnj,
    categorie: cat,
    origine,
    couleur: obtenirCouleurParCategorie(cat),
    ...extras,
  };
  // creerPnj normalise selon le schéma simplifié (combat, interpretation, mj, …).
  try {
    return creerPnj(avecMeta);
  } catch (erreur) {
    console.warn(`[npcRegistry] Normalisation échouée pour "${pnj.nom || pnj.id || "?"}":`, erreur.message);
    return avecMeta;
  }
}

/**
 * Construit la liste complète des PNJ avec métadonnées.
 * Filtre les entrées invalides (null après normalisation).
 * @returns {object[]}
 */
function construireListePnj() {
  const listePnj = [];

  for (const pnj of pnjPrincipaux || []) {
    const enrichi = enrichirEtNormaliser(pnj, "principaux");
    if (enrichi) listePnj.push(enrichi);
  }

  return listePnj;
}

// Construire l'index par ID
function construireIndexPnj(liste) {
  const index = new Map();
  liste.forEach((pnj) => {
    if (pnj.id && !index.has(pnj.id)) {
      index.set(pnj.id, pnj);
    }
  });
  return index;
}

// === Données construites une seule fois ===
const listePnjComplete = construireListePnj();
const indexParId = construireIndexPnj(listePnjComplete);

// === API Publique ===

/** Liste complète de tous les PNJ */
export const tousLesPnj = listePnjComplete;

/** Trouver un PNJ par ID */
export function chercherPnjParId(id) {
  return indexParId.get(id) || null;
}

/** Obtenir les PNJ par catégorie */
export function obtenirPnjParCategorie(categorie) {
  if (categorie === "all") return listePnjComplete;
  return listePnjComplete.filter((pnj) => pnj.categorie === categorie);
}

/** Compteurs par catégorie (single-pass) */
export const compteursPnj = listePnjComplete.reduce(
  (acc, p) => {
    acc.all++;
    if (p.categorie === "allies") acc.allies++;
    else if (p.categorie === "ennemis") acc.ennemis++;
    else if (p.categorie === "monstres") acc.monstres++;
    else if (p.categorie === "neutres") acc.neutres++;
    return acc;
  },
  { all: 0, allies: 0, ennemis: 0, monstres: 0, neutres: 0 },
);

/** Catégories disponibles */
export const categoriesPnj = Object.freeze(["all", "allies", "ennemis", "monstres"]);

/** Obtenir plusieurs PNJ par leurs IDs */
export function obtenirPnjParIds(ids) {
  if (!Array.isArray(ids)) return [];
  return ids.map((id) => indexParId.get(id)).filter(Boolean);
}

/** Obtenir les IDs PNJ orphelins (non trouvés dans le registre) */
export function obtenirIdsPnjOrphelins(ids) {
  if (!Array.isArray(ids)) return [];
  return ids.filter((id) => !indexParId.has(id));
}
