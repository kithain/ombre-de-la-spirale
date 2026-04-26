/**
 * Couche de persistance pour les brouillons de scénarios.
 *
 * Responsabilité unique : lecture / écriture / suppression
 * des éditions de scénarios dans localStorage.
 *
 * Extrait de ContexteEditeurScenario.jsx pour respecter SRP.
 *
 * @module utilitaires/persistanceScenario
 */

const CLE_PREFIX = "scenario_edit_";

/**
 * Charge les éditions persistées pour un scénario donné.
 * @param {string} id - ID du scénario
 * @returns {object|null} Données éditées ou null
 */
export function chargerEditionLocale(id) {
  try {
    const raw = localStorage.getItem(`${CLE_PREFIX}${id}`);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Persiste les éditions d'un scénario dans localStorage.
 * @param {string} id - ID du scénario
 * @param {object} donnees - Données à persister
 */
export function persisterEdition(id, donnees) {
  try {
    localStorage.setItem(`${CLE_PREFIX}${id}`, JSON.stringify(donnees));
  } catch {
    // localStorage plein ou indisponible — pas bloquant
  }
}

/**
 * Supprime les éditions persistées d'un scénario.
 * @param {string} id - ID du scénario
 */
export function supprimerEdition(id) {
  try {
    localStorage.removeItem(`${CLE_PREFIX}${id}`);
  } catch {
    // localStorage indisponible — pas bloquant
  }
}

/**
 * @typedef {object} DescriptionScene
 * @property {string} resume  - Résumé court
 * @property {string} visuel  - Détail visuel
 * @property {string} audio   - Détail sonore
 * @property {string} odeur   - Détail olfactif
 * @property {string} lumiere - Éclairage
 */

/**
 * @typedef {object} NarrationScene
 * @property {string} declencheur    - Événement qui déclenche la scène
 * @property {string} texte_a_lire   - Texte lu à voix haute aux joueurs
 * @property {string} contexte_mj    - Notes privées du MJ
 * @property {string} objectif       - Objectif narratif de la scène
 */

/**
 * @typedef {object} MecaniquesScene
 * @property {string[]} defis        - Défis / obstacles
 * @property {string[]} indices      - Indices / récompenses d'information
 * @property {string}   recompenses  - Récompenses matérielles
 */

/**
 * @typedef {object} TransitionsScene
 * @property {string} success - Transition en cas de succès
 * @property {string} fail    - Transition en cas d'échec
 */

/**
 * Représente une scène dans un acte de scénario.
 *
 * @typedef {object} Scene
 * @property {string}           title       - Titre de la scène
 * @property {string}           type        - Type ("Social", "Combat", "Exploration"…)
 * @property {string}           image       - URL ou chemin de l'image (optionnel)
 * @property {string}           locationId  - ID du lieu associé
 * @property {string[]}         npcIds      - IDs des PNJ présents
 * @property {DescriptionScene} description - Descriptions sensorielles
 * @property {NarrationScene}   narration   - Éléments narratifs
 * @property {MecaniquesScene}  mecaniques  - Mécaniques de jeu
 * @property {TransitionsScene} transitions - Suites possibles
 */

/**
 * Fabrique de scène vide conforme au schéma attendu.
 * @param {number} numero - Numéro de la scène (pour le titre par défaut)
 * @returns {Scene}
 */
export function creerSceneVide(numero = 1) {
  return {
    title: `Scène ${numero} : Nouvelle scène`,
    type: "Social",
    image: "",
    locationId: "",
    npcIds: [],
    description: { resume: "", visuel: "", audio: "", odeur: "", lumiere: "" },
    narration: { declencheur: "", texte_a_lire: "", contexte_mj: "", objectif: "" },
    mecaniques: { defis: [], indices: [], recompenses: "" },
    transitions: { success: "", fail: "" },
  };
}

/**
 * Représente un acte dans un scénario.
 *
 * @typedef {object} Acte
 * @property {string}   title    - Titre de l'acte
 * @property {string}   stake    - Enjeu narratif de l'acte
 * @property {string}   location - Lieu principal de l'acte
 * @property {Scene[]}  scenes   - Scènes de l'acte
 */

/**
 * Fabrique d'acte vide conforme au schéma attendu.
 * @param {number} numero - Numéro de l'acte (pour le titre par défaut)
 * @returns {Acte}
 */
export function creerActeVide(numero = 1) {
  return {
    title: `ACTE ${numero} : Nouvel acte`,
    stake: "",
    location: "",
    scenes: [],
  };
}
