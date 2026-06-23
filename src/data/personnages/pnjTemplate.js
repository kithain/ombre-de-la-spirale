/**
 * Schéma PNJ — Powered by the Apocalypse (PBTA)
 *
 * 4 piliers :
 * 1. Impulsion     : moteur interne du PNJ en une phrase
 * 2. Actions MJ    : moves narratifs du GM liés au PNJ
 * 3. Dégâts/Armure/Vie : combat simplifié (valeurs fixes, jauge courte)
 * 4. Étiquettes    : tags narratifs et mécaniques
 */

const INTERPRETATION_PAR_DEFAUT = Object.freeze({ accroche: "", objectif: "", attitude: "" });
const DEFAULT_VIE_CASES = Object.freeze(["mineure", "serieuse", "mortelle"]);

function validerRp(interpretation) {
  if (!interpretation || typeof interpretation !== "object") return { ...INTERPRETATION_PAR_DEFAUT };
  return {
    accroche: interpretation.accroche || "",
    objectif: interpretation.objectif || "",
    attitude: interpretation.attitude || "",
  };
}

function validerTableauStrings(tableau) {
  if (!Array.isArray(tableau)) return [];
  return tableau.filter((s) => typeof s === "string");
}

function validerDegats(degats) {
  if (!degats || typeof degats !== "object") {
    return { valeur: null, description: "", tags: [] };
  }
  return {
    valeur: typeof degats.valeur === "number" ? degats.valeur : null,
    description: typeof degats.description === "string" ? degats.description : "",
    tags: validerTableauStrings(degats.tags),
  };
}

function validerArmure(armure) {
  if (!armure || typeof armure !== "object") {
    return { valeur: 0, description: "" };
  }
  return {
    valeur: typeof armure.valeur === "number" ? armure.valeur : 0,
    description: typeof armure.description === "string" ? armure.description : "",
  };
}

function validerVie(vie) {
  if (!vie || typeof vie !== "object") {
    return { type: "cases", points: null, max: null, cases: [...DEFAULT_VIE_CASES] };
  }
  const type = vie.type === "points" ? "points" : "cases";
  return {
    type,
    points: typeof vie.points === "number" ? vie.points : null,
    max: typeof vie.max === "number" ? vie.max : null,
    cases: Array.isArray(vie.cases) ? validerTableauStrings(vie.cases) : [...DEFAULT_VIE_CASES],
  };
}

/**
 * @typedef {object} PNJ
 * @property {string} id
 * @property {string} nom
 * @property {string} [role]
 * @property {string} [categorie]
 * @property {string|null} [image]
 * @property {boolean} [antagoniste]
 * @property {string} impulsion
 * @property {{valeur:number|null, description:string, tags:string[]}} degats
 * @property {{valeur:number, description:string}} armure
 * @property {{type:"points"|"cases", points:number|null, max:number|null, cases:string[]}} vie
 * @property {string[]} etiquettes
 * @property {string[]} actionsMJ
 * @property {{accroche:string, objectif:string, attitude:string}} interpretation
 * @property {string} [description]
 * @property {string} [notes]
 * @property {string} [race]
 * @property {string} [faction]
 * @property {string} [disposition]
 * @property {string} [origine]
 * @property {string} [couleur]
 */

/**
 * Normalise un objet PNJ selon le schéma PBTA.
 *
 * @param {Partial<PNJ>} data
 * @returns {PNJ}
 * @throws {Error} Si data n'est pas un objet
 */
export function creerPnj(data = {}) {
  if (data === null || typeof data !== "object" || Array.isArray(data)) {
    throw new Error(
      `[creerPnj] Entrée invalide : attendu un objet, reçu ${
        Array.isArray(data) ? "Array" : typeof data
      }.`,
    );
  }

  try {
    const pnj = {
      // Identité
      id: data.id ?? "",
      nom: data.nom ?? "",
      role: data.role ?? "",
      race: data.race ?? "",
      faction: data.faction ?? "",
      categorie: data.categorie ?? "neutres",
      image: data.image ?? null,
      antagoniste: data.antagoniste === true,

      // PBTA Core
      impulsion: data.impulsion ?? "",
      degats: validerDegats(data.degats),
      armure: validerArmure(data.armure),
      vie: validerVie(data.vie),
      etiquettes: validerTableauStrings(data.etiquettes),
      actionsMJ: validerTableauStrings(data.actionsMJ),

      // Narratif
      interpretation: validerRp(data.interpretation),
      description: data.description ?? "",
      notes: data.notes ?? "",
      disposition: data.disposition ?? "neutre",

      // Métadonnées injectées par npcRegistry
      origine: data.origine ?? "",
      couleur: data.couleur ?? "",
    };

    // Conserver les champs inconnus pour compatibilité ascendante
    for (const cle of Object.keys(data)) {
      if (!(cle in pnj)) {
        pnj[cle] = data[cle];
      }
    }

    return pnj;
  } catch (erreur) {
    console.error(
      `[creerPnj] Erreur lors de la normalisation de "${
        data.nom ?? data.id ?? "?"
      }" : ${erreur.message}`,
    );
    throw erreur;
  }
}

// ─── HELPERS PUBLICS ──────────────────────────────────────────────

/** Rendu texte des dégâts : "3-dégâts (Épée de justice, brutale, historique)" */
export function formaterDegats(degats) {
  if (!degats) return "";
  const base = degats.valeur != null ? `${degats.valeur}-dégâts` : "Non combattant";
  const tags = degats.tags?.length ? degats.tags.join(", ") : "";
  const description = degats.description || tags;
  return description ? `${base} (${description}${tags && degats.description ? ", " + tags : ""})` : base;
}

/** Rendu texte de l'armure */
export function formaterArmure(armure) {
  if (!armure) return "0";
  return armure.description ? `${armure.valeur} (${armure.description})` : String(armure.valeur);
}

/** Rendu texte de la vie */
export function formaterVie(vie) {
  if (!vie) return "";
  if (vie.type === "points" && vie.max != null) {
    return `${vie.points ?? vie.max}/${vie.max}`;
  }
  return vie.cases.join(" · ");
}

// ─── TEMPLATE EXPORTÉ POUR L'ÉDITEUR ──────────────────────────────

export const pnjTemplate = `{
  id: "pnj_id_unique",
  nom: "Nom du PNJ",
  role: "Rôle narratif court",
  race: "Humain",
  faction: "Faction / Guilde",
  categorie: "neutres",           // "allies" | "ennemis" | "monstres" | "neutres"
  image: null,
  antagoniste: false,

  // 1. Impulsion (moteur interne)
  impulsion: "Ce que le PNJ veut par-dessus tout, en une phrase.",

  // 2. Actions MJ (moves narratifs)
  actionsMJ: [
    "Action narrative 1",
    "Action narrative 2",
  ],

  // 3. Combat simplifié
  degats: {
    valeur: 2,                   // null si non combattant, 1-5 généralement
    description: "Arme / pouvoir",
    tags: ["perçant", "brutal", "a_distance"],
  },
  armure: {
    valeur: 1,                   // 0 à 3 généralement
    description: "Armure / peau épaisse",
  },
  vie: {
    type: "cases",               // "cases" (PNJ majeur) ou "points" (boss)
    cases: ["mineure", "serieuse", "mortelle"],
    // pour un boss : type: "points", points: 5, max: 5
  },

  // 4. Étiquettes (tags narratifs + mécaniques)
  etiquettes: [
    "Autoritaire",
    "Soutenu par la foule",
    "Inflexible",
  ],

  // Narratif
  interpretation: {
    accroche: "Tic reconnaissable en 10 secondes",
    objectif: "Ce qu'il veut concrètement",
    attitude: "Comment il se comporte avec les PJ",
  },
  description: "Apparence, tenue, voix, posture…",
  notes: "Notes libres pour le MJ",
  disposition: "neutre",         // "hostile" | "tendu" | "neutre" | "amical"
}`;
