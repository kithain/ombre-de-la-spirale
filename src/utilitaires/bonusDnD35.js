/**
 * Moteur de cumul de bonus typés — D&D 3.5 (SRD / PHB p.21)
 *
 * Règle fondamentale : les bonus de même type ne se cumulent PAS.
 * Seul le plus élevé s'applique, SAUF :
 *   - Les bonus d'Esquive (se cumulent toujours entre eux)
 *   - Les bonus de Synergie (se cumulent toujours entre eux)
 *   - Les bonus sans type (« divers ») se cumulent toujours
 *   - Les malus (valeurs négatives) se cumulent toujours
 *
 * Terminologie française officielle (PHB FR) :
 *   Altération, Armure, Armure naturelle, Bouclier, Chance, Circonstance,
 *   Compétence, Esquive, Insight (Intuition), Moral, Naturel, Parade,
 *   Profane, Racial, Résistance, Sacré, Synergie, Taille
 */

// ─── TYPES DE BONUS OFFICIELS D&D 3.5 ──────────────────────────────

/**
 * Enum des types de bonus reconnus par les règles D&D 3.5.
 * Utilisé pour le typage strict des bonus.
 */
export const TYPES_BONUS = Object.freeze({
  ALTERATION: "Altération",
  ARMURE: "Armure",
  ARMURE_NATURELLE: "Armure naturelle",
  BOUCLIER: "Bouclier",
  CHANCE: "Chance",
  CIRCONSTANCE: "Circonstance",
  COMPETENCE: "Compétence",
  ESQUIVE: "Esquive",
  INTUITION: "Intuition",
  MORAL: "Moral",
  NATUREL: "Naturel",
  PARADE: "Parade",
  PROFANE: "Profane",
  RACIAL: "Racial",
  RESISTANCE: "Résistance",
  SACRE: "Sacré",
  SYNERGIE: "Synergie",
  TAILLE: "Taille",
  DIVERS: "Divers",       // sans type → cumul libre
});

/** Types qui se cumulent toujours entre eux (exception aux règles) */
const TYPES_CUMULABLES = new Set([
  TYPES_BONUS.ESQUIVE,
  TYPES_BONUS.SYNERGIE,
  TYPES_BONUS.CIRCONSTANCE,
  TYPES_BONUS.DIVERS,
]);

/**
 * @typedef {Object} Bonus
 * @property {string} type      - Type du bonus (cf. TYPES_BONUS)
 * @property {number} valeur    - Valeur numérique (+positif = bonus, -négatif = malus)
 * @property {string} source    - Libellé de la source (sort, objet, aptitude…)
 * @property {string} [cible]   - Cible du bonus : "ca", "attaque", "js_vig", "js_ref", "js_vol", etc.
 */

/**
 * Crée un objet Bonus validé.
 *
 * @param {string} type    - Type du bonus (doit être dans TYPES_BONUS)
 * @param {number} valeur  - Valeur numérique
 * @param {string} source  - Libellé de la source
 * @param {string} [cible] - Cible optionnelle ("ca", "attaque", "js_vig", etc.)
 * @returns {Bonus}
 * @throws {Error} Si le type est inconnu ou la valeur n'est pas un nombre fini
 */
export function creerBonus(type, valeur, source, cible = "") {
  const typesValides = Object.values(TYPES_BONUS);
  if (!typesValides.includes(type)) {
    throw new Error(
      `Type de bonus inconnu : "${type}". Types valides : ${typesValides.join(", ")}`
    );
  }
  if (!Number.isFinite(valeur)) {
    throw new Error(
      `Valeur de bonus invalide : "${valeur}". Doit être un nombre fini.`
    );
  }
  if (!source || typeof source !== "string") {
    throw new Error("La source du bonus est obligatoire (chaîne non vide).");
  }

  return Object.freeze({ type, valeur, source, cible });
}

/**
 * Résout un tableau de bonus en appliquant les règles de cumul D&D 3.5.
 *
 * Algorithme O(n) : un seul passage pour regrouper par type,
 * puis résolution par type en O(k) où k = nombre de types distincts.
 *
 * @param {Bonus[]} bonus - Liste de bonus à résoudre
 * @returns {{ total: number, details: Bonus[], ignores: Bonus[] }}
 *   - total   : somme finale après résolution des cumuls
 *   - details : bonus retenus (contribuent au total)
 *   - ignores : bonus écartés (non cumulés car inférieur à un autre du même type)
 */
export function resoudreBonusCumules(bonus) {
  if (!Array.isArray(bonus) || bonus.length === 0) {
    return { total: 0, details: [], ignores: [] };
  }

  const details = [];
  const ignores = [];

  // Séparer malus (toujours cumulés) et bonus positifs
  const malus = [];
  const positifs = [];

  for (const b of bonus) {
    if (b.valeur < 0) {
      malus.push(b);
    } else {
      positifs.push(b);
    }
  }

  // Regrouper les bonus positifs par type
  /** @type {Map<string, Bonus[]>} */
  const parType = new Map();
  for (const b of positifs) {
    const liste = parType.get(b.type) || [];
    liste.push(b);
    parType.set(b.type, liste);
  }

  // Résoudre chaque groupe
  for (const [type, groupe] of parType) {
    if (TYPES_CUMULABLES.has(type)) {
      // Types cumulables : on additionne tout
      details.push(...groupe);
    } else {
      // Non cumulable : seul le plus élevé s'applique
      groupe.sort((a, b) => b.valeur - a.valeur);
      details.push(groupe[0]);
      if (groupe.length > 1) {
        ignores.push(...groupe.slice(1));
      }
    }
  }

  // Les malus se cumulent toujours
  details.push(...malus);

  const total = details.reduce((somme, b) => somme + b.valeur, 0);

  return { total, details, ignores };
}

/**
 * Filtre les bonus par cible, puis résout les cumuls.
 *
 * @param {Bonus[]} bonus - Liste complète de bonus
 * @param {string} cible  - Cible à filtrer ("ca", "attaque", "js_vig", etc.)
 * @returns {{ total: number, details: Bonus[], ignores: Bonus[] }}
 */
export function resoudreBonusPourCible(bonus, cible) {
  if (!Array.isArray(bonus)) {
    return { total: 0, details: [], ignores: [] };
  }
  const filtres = bonus.filter((b) => b.cible === cible);
  return resoudreBonusCumules(filtres);
}

// ─── CALCUL DE LA CLASSE D'ARMURE STRUCTURÉE ────────────────────────

/**
 * Calcule la CA totale, contact et pris au dépourvu à partir de bonus typés.
 *
 * CA Totale     = 10 + tous les bonus applicables
 * CA Contact    = 10 + bonus (sauf Armure, Bouclier, Armure naturelle)
 * CA Dépourvu   = CA Totale − bonus d'Esquive − bonus de Dex (si positif)
 *
 * @param {Bonus[]} bonusCA - Liste de bonus ciblant "ca"
 * @returns {{ total: number, contact: number, pris_au_depourvu: number, details: Bonus[], ignores: Bonus[] }}
 */
export function calculerCADepuisBonus(bonusCA) {
  const BASE_CA = 10;

  if (!Array.isArray(bonusCA) || bonusCA.length === 0) {
    return {
      total: BASE_CA,
      contact: BASE_CA,
      pris_au_depourvu: BASE_CA,
      details: [],
      ignores: [],
    };
  }

  // Résoudre tous les bonus CA (avec cumul)
  const { total: bonusTotal, details, ignores } = resoudreBonusCumules(bonusCA);

  const caTotal = BASE_CA + bonusTotal;

  // CA Contact : exclure Armure, Bouclier, Armure naturelle
  const TYPES_EXCLUS_CONTACT = new Set([
    TYPES_BONUS.ARMURE,
    TYPES_BONUS.BOUCLIER,
    TYPES_BONUS.ARMURE_NATURELLE,
  ]);

  const bonusContact = details
    .filter((b) => !TYPES_EXCLUS_CONTACT.has(b.type))
    .reduce((s, b) => s + b.valeur, 0);

  const caContact = BASE_CA + bonusContact;

  // CA Pris au dépourvu : exclure Esquive et bonus Dex positif
  const bonusDepourvu = details
    .filter((b) => {
      if (b.type === TYPES_BONUS.ESQUIVE) return false;
      // Le bonus de Dex à la CA est typiquement de type "Divers" avec source "Dextérité"
      // ou on le reconnaît par convention de source
      if (b.source === "Dextérité" && b.valeur > 0) return false;
      return true;
    })
    .reduce((s, b) => s + b.valeur, 0);

  const caPrisAuDepourvu = BASE_CA + bonusDepourvu;

  return {
    total: caTotal,
    contact: caContact,
    pris_au_depourvu: caPrisAuDepourvu,
    details,
    ignores,
  };
}

// ─── CALCUL DE LA LUTTE (GRAPPLE) ──────────────────────────────────

/**
 * Calcule le bonus de lutte D&D 3.5.
 * Lutte = BBA + mod Force + modificateur spécial de taille
 *
 * Note : le modificateur de taille pour la lutte est DIFFÉRENT de celui
 * pour la CA (PHB p.155). Il utilise une échelle spécifique.
 *
 * @param {number} bba     - Bonus de base à l'attaque
 * @param {number} modFor  - Modificateur de Force
 * @param {string} taille  - Catégorie de taille ("Moyen", "Grand", etc.)
 * @returns {number}
 */
const MODIFICATEURS_LUTTE = Object.freeze({
  "Infime": -16,
  "Minuscule": -12,
  "Très petit": -8,
  "Petit": -4,
  "Moyen": 0,
  "Grand": 4,
  "Très grand": 8,
  "Gigantesque": 12,
  "Colossal": 16,
});

export function calculerBonusLutte(bba, modFor, taille) {
  const modTaille = MODIFICATEURS_LUTTE[taille] ?? 0;
  return (bba ?? 0) + (modFor ?? 0) + modTaille;
}

// ─── CONSTRUCTION DE BONUS DEPUIS UN PERSONNAGE ─────────────────────

/**
 * Génère automatiquement les bonus de CA typés à partir des données
 * structurées d'un personnage (carac, taille, équipement, buffs).
 *
 * Utilisé pour alimenter `calculerCADepuisBonus` dans le moteur de calcul.
 *
 * @param {object} params
 * @param {number|null} params.modDex          - Modificateur de Dextérité
 * @param {number}      params.modTaille       - Modificateur de taille (CA)
 * @param {number}      [params.bonusArmure]   - Bonus d'armure (équipement)
 * @param {number}      [params.bonusBouclier] - Bonus de bouclier
 * @param {number}      [params.armureNaturelle] - Bonus d'armure naturelle
 * @param {number}      [params.bonusParade]   - Bonus de parade
 * @param {number}      [params.bonusEsquive]  - Bonus d'esquive
 * @returns {Bonus[]}
 */
export function construireBonusCA({
  modDex = null,
  modTaille = 0,
  bonusArmure = 0,
  bonusBouclier = 0,
  armureNaturelle = 0,
  bonusParade = 0,
  bonusEsquive = 0,
} = {}) {
  const bonus = [];

  if (modDex !== null && modDex !== 0) {
    bonus.push(creerBonus(TYPES_BONUS.DIVERS, modDex, "Dextérité", "ca"));
  }

  if (modTaille !== 0) {
    bonus.push(creerBonus(TYPES_BONUS.TAILLE, modTaille, "Taille", "ca"));
  }

  if (bonusArmure > 0) {
    bonus.push(creerBonus(TYPES_BONUS.ARMURE, bonusArmure, "Armure équipée", "ca"));
  }

  if (bonusBouclier > 0) {
    bonus.push(creerBonus(TYPES_BONUS.BOUCLIER, bonusBouclier, "Bouclier équipé", "ca"));
  }

  if (armureNaturelle > 0) {
    bonus.push(creerBonus(TYPES_BONUS.ARMURE_NATURELLE, armureNaturelle, "Armure naturelle", "ca"));
  }

  if (bonusParade > 0) {
    bonus.push(creerBonus(TYPES_BONUS.PARADE, bonusParade, "Parade", "ca"));
  }

  if (bonusEsquive > 0) {
    bonus.push(creerBonus(TYPES_BONUS.ESQUIVE, bonusEsquive, "Esquive", "ca"));
  }

  return bonus;
}
