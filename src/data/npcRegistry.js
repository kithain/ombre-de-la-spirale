/**
 * NPC Registry — Source unique pour tous les PNJ
 *
 * Responsabilité : fusionner pnjPrincipaux, pnjEnnemis et bestiaryData
 * en une seule structure indexée (par ID et par nom).
 *
 * Fournit l'API CRUD en mémoire pour tous les PNJ du jeu.
 */
import { pnjPrincipaux, pnjEnnemis, bestiaryData35FR } from "./personnages";
import { creerPnj } from "./personnages/pnjTemplate";
import { normaliserPnj } from "../utilitaires/normaliserPnj";

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
 * Détermine la catégorie d'un PNJ selon sa source et ses propriétés.
 * @param {object} pnj
 * @param {string} source - "principaux", "ennemis", "bestiary"
 * @returns {string}
 */
function resoudreCategorie(pnj, source) {
  if (pnj.category && CATEGORIES_VALIDES.has(pnj.category)) return pnj.category;
  if (source === "bestiary") return "monstres";
  if (source === "ennemis") return "ennemis";
  if (pnj.est_ennemi) return "ennemis";
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
 * Enrichit un PNJ brut avec métadonnées (category, source, color) puis normalise.
 * @param {object} pnj - Données brutes du PNJ
 * @param {string} source - Origine ("principaux", "ennemis", "bestiary")
 * @param {object} [extras] - Propriétés supplémentaires à fusionner
 * @returns {object|null}
 */
function enrichirEtNormaliser(pnj, source, extras = {}) {
  if (!pnj || typeof pnj !== "object") return null;
  const cat = resoudreCategorie(pnj, source);
  const avecMeta = {
    ...pnj,
    category: cat,
    source,
    color: obtenirCouleurParCategorie(cat),
    ...extras,
  };
  // creerPnj comble tous les champs canoniques manquants (modeEntite, classes,
  // ogas, bonus_actifs, sorts_prepares…) tout en préservant les clés non-canoniques
  // (category, source, color, isMonster, details, fiche_combat…).
  try {
    const normalise = creerPnj(avecMeta);
    return normaliserPnj(normalise);
  } catch (err) {
    console.warn(`[npcRegistry] Normalisation échouée pour "${pnj.nom || pnj.id || "?"}":`, err.message);
    return normaliserPnj(avecMeta);
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

  for (const pnj of pnjEnnemis || []) {
    const enrichi = enrichirEtNormaliser(pnj, "ennemis");
    if (enrichi) listePnj.push(enrichi);
  }

  for (const monstre of bestiaryData35FR || []) {
    const enrichi = enrichirEtNormaliser(monstre, "bestiary", { isMonster: true });
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

// Construire l'index par nom (lowercase)
function construireIndexNomPnj(liste) {
  const index = new Map();
  liste.forEach((pnj) => {
    const cle = (pnj.nom || "").toLowerCase();
    if (cle && !index.has(cle)) {
      index.set(cle, pnj);
    }
  });
  return index;
}

// === Données construites une seule fois ===
const listePnjComplete = construireListePnj();
const indexParId = construireIndexPnj(listePnjComplete);
const indexParNom = construireIndexNomPnj(listePnjComplete);

// Restaurer les éditions persistées dans localStorage
(function restaurerEditionsLocales() {
  try {
    if (typeof localStorage === "undefined") return;
    for (let i = 0; i < localStorage.length; i++) {
      const cle = localStorage.key(i);
      if (!cle || !cle.startsWith("pnj_edit_")) continue;
      try {
        const donnees = JSON.parse(localStorage.getItem(cle));
        if (donnees?.id && indexParId.has(donnees.id)) {
          // Valider via le schéma canonique avant de muter
          const existant = indexParId.get(donnees.id);
          const normalise = enrichirEtNormaliser(
            { ...existant, ...donnees },
            existant.source || "principaux",
          );
          if (normalise) Object.assign(existant, normalise);
        }
      } catch (erreurItem) {
        console.warn(`[npcRegistry] Données corrompues pour clé "${cle}", ignorée.`);
      }
    }
  } catch {
    // localStorage indisponible (SSR, tests) — on ignore silencieusement
  }
})();

// === API Publique ===

/** Liste complète de tous les PNJ */
export const tousLesPnj = listePnjComplete;

/** Trouver un PNJ par ID */
export function chercherPnjParId(id) {
  return indexParId.get(id) || null;
}

/** Trouver un PNJ par nom (insensible à la casse) */
export function chercherPnjParNom(name) {
  if (!name) return null;
  return indexParNom.get(name.toLowerCase()) || null;
}

/** Obtenir les PNJ par catégorie */
export function obtenirPnjParCategorie(category) {
  if (category === "all") return listePnjComplete;
  return listePnjComplete.filter((pnj) => pnj.category === category);
}

/** Compteurs par catégorie (single-pass) */
export const compteursPnj = listePnjComplete.reduce(
  (acc, p) => {
    acc.all++;
    if (p.category === "allies") acc.allies++;
    else if (p.category === "ennemis") acc.ennemis++;
    else if (p.category === "monstres") acc.monstres++;
    return acc;
  },
  { all: 0, allies: 0, ennemis: 0, monstres: 0 },
);

/** Catégories disponibles */
export const categoriesPnj = Object.freeze(["all", "allies", "ennemis", "monstres"]);

/** Vérifier si un ID existe */
export function possedePnj(id) {
  return indexParId.has(id);
}

/** Obtenir plusieurs PNJ par leurs IDs */
export function obtenirPnjParIds(ids) {
  if (!Array.isArray(ids)) return [];
  return ids.map((id) => indexParId.get(id)).filter(Boolean);
}

/**
 * Ajoute un nouveau PNJ au registre (liste + index).
 * L'objet doit déjà être normalisé (via creerPnj / normaliserPnj).
 * @param {object} pnj - Objet PNJ complet avec un id unique
 * @returns {boolean} true si l'ajout a réussi, false si doublon ou invalide
 */
export function ajouterPnj(pnj) {
  if (!pnj || typeof pnj !== "object" || !pnj.id) {
    console.warn("[npcRegistry] ajouterPnj : PNJ invalide ou sans id.");
    return false;
  }
  if (indexParId.has(pnj.id)) {
    console.warn(`[npcRegistry] ajouterPnj : doublon ignoré pour id "${pnj.id}".`);
    return false;
  }

  listePnjComplete.push(pnj);
  indexParId.set(pnj.id, pnj);
  const nomCle = (pnj.nom || "").toLowerCase();
  if (nomCle) indexParNom.set(nomCle, pnj);

  // Mettre à jour les compteurs
  compteursPnj.all++;
  if (pnj.category === "allies") compteursPnj.allies++;
  else if (pnj.category === "ennemis") compteursPnj.ennemis++;
  else if (pnj.category === "monstres") compteursPnj.monstres++;

  return true;
}

/**
 * Met à jour un PNJ en mémoire (dans la liste et les index).
 * Fusionne les champs modifiés dans l'objet existant (mutation intentionnelle
 * pour que toutes les références restent synchronisées).
 *
 * @param {string} id - ID du PNJ à mettre à jour
 * @param {object} donnees - Objet complet ou partiel à fusionner
 * @returns {boolean} true si la mise à jour a réussi
 */
export function mettreAJourPnj(id, donnees) {
  if (!id || typeof id !== "string") return false;
  if (!donnees || typeof donnees !== "object") return false;

  const existant = indexParId.get(id);
  if (!existant) {
    console.warn(`[npcRegistry] mettreAJourPnj : PNJ "${id}" introuvable.`);
    return false;
  }

  // Ancien nom pour mettre à jour l'index par nom
  const ancienNom = (existant.nom || "").toLowerCase();

  // Fusionner les champs dans l'objet existant (mutation intentionnelle)
  // Filtrer les clés undefined pour éviter d'écraser des valeurs valides
  const donneesFiltrees = Object.fromEntries(
    Object.entries(donnees).filter(([_, v]) => v !== undefined),
  );
  Object.assign(existant, donneesFiltrees);

  // Mettre à jour l'index par nom si le nom a changé
  const nouveauNom = (existant.nom || "").toLowerCase();
  if (ancienNom !== nouveauNom) {
    if (ancienNom) indexParNom.delete(ancienNom);
    if (nouveauNom) indexParNom.set(nouveauNom, existant);
  }

  return true;
}
