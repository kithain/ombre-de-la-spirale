import { clonerProfond as cloner } from "../../utilitaires/clonerProfond";

/**
 * Clés canoniques du schéma PNJ D&D 3.5 FR.
 * Toute clé présente dans cette liste sera normalisée par creerPnj.
 * Les clés supplémentaires (ex: details, disposition) sont préservées telles quelles.
 */
const CLES_CANONIQUES = new Set([
  "nom", "classe", "niveau", "taille", "type", "alignement", "fp",
  "environnement", "biome", "residence", "lieuxRencontre", "organisation",
  "ini", "sens", "ca", "pv", "dv", "js", "rm", "rd", "vit",
  "bba", "lutte", "attaque", "att_outrance", "espace", "allonge",
  "att_spe", "qual_spe", "carac", "competences", "dons", "tactiques",
  "butin", "est_ennemi", "antagoniste", "role", "image",
  "meta_mj", "fiche_combat", "bonus_actifs", "sorts_prepares", "ogas",
  "disposition", "classes", "modeEntite",
]);

const DEFAULT_JS = Object.freeze({ vig: "+0", ref: "+0", vol: "+0" });
const DEFAULT_CARAC = Object.freeze({ for: 10, dex: 10, con: 10, int: 10, sag: 10, cha: 10 });
const DEFAULT_CA = Object.freeze({ total: 10, contact: 10, pris_au_depourvu: 10 });
const DEFAULT_OGAS = Object.freeze({ occupation: "", objectif: "", attitude: "", enjeu: "" });

const CARAC_VALIDES = ["for", "dex", "con", "int", "sag", "cha"];

/**
 * Parse une valeur CA en objet structuré { total, contact, pris_au_depourvu }.
 *
 * Accepte :
 *   - Un objet déjà structuré : { total: 18, contact: 14, pris_au_depourvu: 14 }
 *   - Une chaîne descriptive : "18 (+4 Dex, +4 Armure) ; contact 14, pris au dépourvu 14"
 *   - Un nombre seul : 18
 *
 * @param {object|string|number} caValue
 * @returns {{ total: number, contact: number, pris_au_depourvu: number }}
 */
const parseCA = (caValue) => {
  // Déjà un objet structuré
  if (caValue !== null && typeof caValue === "object" && !Array.isArray(caValue)) {
    return {
      total: typeof caValue.total === "number" ? caValue.total : 10,
      contact: typeof caValue.contact === "number" ? caValue.contact : 10,
      pris_au_depourvu: typeof caValue.pris_au_depourvu === "number" ? caValue.pris_au_depourvu : 10,
    };
  }

  // Nombre seul
  if (typeof caValue === "number" && Number.isFinite(caValue)) {
    return { total: caValue, contact: 10, pris_au_depourvu: caValue };
  }

  // Chaîne descriptive
  const chaine = String(caValue ?? "");

  const match = chaine.match(
    /^(\d+).*contact\s+(\d+).*d[ée]pourvu\s+(\d+)/i,
  );
  if (match) {
    return {
      total: parseInt(match[1], 10),
      contact: parseInt(match[2], 10),
      pris_au_depourvu: parseInt(match[3], 10),
    };
  }

  const totalMatch = chaine.match(/^(\d+)/);
  const total = totalMatch ? parseInt(totalMatch[1], 10) : 10;
  return { total, contact: 10, pris_au_depourvu: total };
};

/**
 * Valide les caractéristiques d'un PNJ.
 * D&D 3.5 : chaque caractéristique doit être ≥ 1 (sauf 0 pour les morts-vivants sans Con).
 * @param {object} carac
 * @returns {object} Caractéristiques validées
 */
function validerCarac(carac) {
  if (!carac || typeof carac !== "object") return { ...DEFAULT_CARAC };

  const resultat = { ...DEFAULT_CARAC };
  for (const stat of CARAC_VALIDES) {
    const val = carac[stat];
    if (val === null) {
      // null légitimement autorisé : Con pour Mort-vivants/Créatures artificielles,
      // Int pour Vases/Vermine/Créatures artificielles
      resultat[stat] = null;
    } else if (val === undefined) {
      resultat[stat] = DEFAULT_CARAC[stat];
    } else if (typeof val === "number" && Number.isFinite(val)) {
      resultat[stat] = val;
    } else {
      console.warn(`[creerPnj] Caractéristique "${stat}" invalide : ${val}, valeur par défaut 10 utilisée.`);
      resultat[stat] = DEFAULT_CARAC[stat];
    }
  }
  return resultat;
}

/**
 * @typedef {object} CaracteristiquesPnj
 * @property {number} for - Force
 * @property {number} dex - Dextérité
 * @property {number} con - Constitution
 * @property {number} int - Intelligence
 * @property {number} sag - Sagesse
 * @property {number} cha - Charisme
 */

/**
 * @typedef {object} CaPnj
 * @property {number} total            - CA totale
 * @property {number} contact          - CA de contact
 * @property {number} pris_au_depourvu - CA pris au dépourvu
 */

/**
 * @typedef {object} JsPnj
 * @property {string} vig - Vigueur
 * @property {string} ref - Réflexes
 * @property {string} vol - Volonté
 */

/**
 * @typedef {object} OgasPnj
 * @property {string} occupation - Ce que fait le PNJ à l'instant T
 * @property {string} objectif   - Ce qu'il veut
 * @property {string} attitude   - Comment il se comporte avec les PJ
 * @property {string} enjeu      - Ce qu'il risque de perdre/gagner
 */

/**
 * @typedef {object} MetaMjPnj
 * @property {string} [reference_livre]    - Source (ex: "Manuel des Monstres p.247")
 * @property {string} [contexte_scenario]  - Quand/où ce PNJ intervient
 */

/**
 * @typedef {object} FicheCombatPnj
 * @property {Array<{nom: string, details: string}>} sorts           - Sorts disponibles
 * @property {Array<{nom: string, details: string}>} actions_spe     - Actions spéciales
 * @property {Array<{nom: string, details: string}>} dons_tactiques  - Dons utilisés en combat
 * @property {string} resume_tactique - Résumé de la tactique de combat
 */

/**
 * Représente un PNJ/monstre/allié conforme au schéma canonique D&D 3.5 FR.
 *
 * @typedef {object} PNJ
 * @property {string}               id              - Identifiant unique
 * @property {string}               nom             - Nom complet
 * @property {string}               classe          - Classe ou type de créature
 * @property {number|null}          niveau          - Niveau de classe (null si sans classe)
 * @property {string}               taille          - Catégorie de taille ("Petit", "Moyen", "Grand"…)
 * @property {string}               type            - Type D&D ("Humanoïde (Humain)", "Mort-vivant"…)
 * @property {string}               alignement      - Alignement en 2 lettres ("LB", "NM", "CM"…)
 * @property {number}               fp              - Facteur de puissance
 * @property {string}               environnement   - Environnement général
 * @property {string}               biome           - Biome précis
 * @property {string}               residence       - Lieu de résidence fixe
 * @property {string[]}             lieuxRencontre  - IDs des lieux où on peut croiser ce PNJ
 * @property {string}               organisation    - Mode de groupe ("Solitaire", "Bande (5-12)"…)
 * @property {string}               ini             - Initiative (ex: "+3")
 * @property {string}               sens            - Sens spéciaux (perception, vision dans le noir…)
 * @property {CaPnj}                ca              - Classe d'armure structurée
 * @property {number}               pv              - Points de vie maximum
 * @property {string}               dv              - Dés de vie (ex: "5d8+10")
 * @property {JsPnj}                js              - Jets de sauvegarde
 * @property {string|null}          rm              - Résistance à la Magie (ex: "RM 16") ou null
 * @property {string|null}          rd              - Réduction des Dégâts (ex: "5/Magie") ou null
 * @property {string}               vit             - Vitesse de déplacement (ex: "9 m")
 * @property {string}               bba             - Bonus de base à l'attaque (ex: "+5")
 * @property {string}               lutte           - Modificateur de lutte (ex: "+8")
 * @property {string}               attaque         - Description de l'attaque simple
 * @property {string}               att_outrance    - Description de l'attaque à outrance
 * @property {string}               espace          - Espace occupé (ex: "1,5 m")
 * @property {string}               allonge         - Allonge naturelle (ex: "1,5 m")
 * @property {string[]}             att_spe         - Attaques spéciales (texte libre)
 * @property {string[]}             qual_spe        - Qualités spéciales (texte libre)
 * @property {CaracteristiquesPnj}  carac           - Les 6 caractéristiques
 * @property {string}               competences     - Compétences (texte libre)
 * @property {string}               dons            - Dons (texte libre)
 * @property {string}               tactiques       - Tactiques de combat
 * @property {string}               butin           - Butin type
 * @property {boolean}              est_ennemi      - Vrai si ce PNJ est un ennemi des joueurs
 * @property {boolean}              [antagoniste]   - Vrai si c'est l'antagoniste principal
 * @property {string}               role            - Rôle narratif court
 * @property {string|null}         [image]         - URL de l'image 50x50px (placeholder si absent)
 * @property {MetaMjPnj|null}       meta_mj         - Métadonnées pour le MJ
 * @property {FicheCombatPnj|null}  fiche_combat    - Fiche de combat détaillée
 * @property {import('../../../utilitaires/bonusDnD35').Bonus[]} bonus_actifs - Bonus actifs (buffs)
 * @property {object}               sorts_prepares  - Sorts préparés par niveau
 * @property {OgasPnj}              ogas            - Fiche OGAS (roleplay)
 * @property {string}               [category]      - Catégorie registre ("allies","ennemis","monstres")
 * @property {string}               [source]        - Source de données ("univers","custom","local")
 */

/**
 * Normalise un objet PNJ afin de respecter le schéma canonique français D&D 3.5.
 *
 * Responsabilité unique : normalisation et valeurs par défaut.
 * - Clone profondément toutes les structures mutables
 * - Parse les formats de CA (string → objet)
 * - Préserve les clés non canoniques (details, disposition, etc.)
 *
 * @param {Partial<PNJ>} data - Données brutes du PNJ
 * @returns {PNJ} PNJ normalisé avec toutes les clés canoniques
 * @throws {Error} Si data n'est pas un objet
 */
export function creerPnj(data = {}) {
  if (data === null || typeof data !== "object" || Array.isArray(data)) {
    throw new Error(
      `[creerPnj] Entrée invalide : attendu un objet, reçu ${Array.isArray(data) ? "Array" : typeof data}.`
    );
  }

  try {
    // Extraire les clés non canoniques (details, disposition, etc.)
    const extras = {};
    for (const [cle, val] of Object.entries(data)) {
      if (!CLES_CANONIQUES.has(cle) && cle !== "id") {
        extras[cle] = cloner(val);
      }
    }

    const normalise = {
      id: data.id ?? "",
      nom: data.nom ?? "",
      classe: data.classe ?? "",
      niveau: data.niveau ?? null,
      taille: data.taille ?? "Moyen",
      type: data.type ?? "Humanoïde (Humain)",
      alignement: data.alignement ?? "N",
      fp: data.fp ?? 1,
      environnement: data.environnement ?? "",
      biome: data.biome ?? "",
      residence: data.residence ?? "",
      lieuxRencontre: cloner(data.lieuxRencontre ?? []),
      organisation: data.organisation ?? "Solitaire",
      ini: data.ini ?? "+0",
      sens: data.sens ?? "",
      ca: parseCA(data.ca ?? DEFAULT_CA),
      pv: data.pv ?? 1,
      dv: data.dv ?? "1d8",
      js: cloner(data.js ?? DEFAULT_JS),
      rm: data.rm ?? null,
      rd: data.rd ?? null,
      vit: data.vit ?? "9 m",
      bba: data.bba ?? "+0",
      lutte: data.lutte ?? "+0",
      attaque: data.attaque ?? "",
      att_outrance: data.att_outrance ?? "",
      espace: data.espace ?? "1,5 m",
      allonge: data.allonge ?? "1,5 m",
      att_spe: cloner(data.att_spe ?? []),
      qual_spe: cloner(data.qual_spe ?? []),
      carac: validerCarac(data.carac),
      competences: data.competences ?? "",
      dons: data.dons ?? "",
      tactiques: data.tactiques ?? "",
      butin: data.butin ?? "",
      est_ennemi: data.est_ennemi ?? false,
      antagoniste: data.antagoniste ?? false,
      role: data.role ?? "",
      image: data.image ?? null,
      meta_mj: cloner(data.meta_mj ?? null),
      fiche_combat: cloner(data.fiche_combat ?? null),
      bonus_actifs: cloner(data.bonus_actifs ?? []),
      sorts_prepares: cloner(data.sorts_prepares ?? {}),
      ogas: cloner(data.ogas ?? DEFAULT_OGAS),
      disposition: data.disposition ?? "",
      classes: cloner(data.classes ?? []),
      modeEntite: data.modeEntite ?? null,
    };

    return { ...extras, ...normalise };
  } catch (erreur) {
    console.error(`[creerPnj] Erreur lors de la normalisation de "${data.nom ?? data.id ?? "?"}": ${erreur.message}`);
    throw erreur;
  }
}

/** @deprecated Utiliser creerPnj à la place */
export const createPnj = creerPnj;

export const pnjTemplate = `{
  id: "pnj_id_unique",
  nom: "Nom du PNJ",
  classe: "Classe du PNJ",
  niveau: 1,
  taille: "Moyen",
  type: "Humanoïde (Humain)",
  alignement: "N",
  fp: 1,
  environnement: "Lieu / Biome",
  biome: "",
  residence: "",
  lieuxRencontre: [],
  organisation: "Solitaire / Groupe (2-4) / Bande (5-12)",
  ini: "+0",
  sens: "Détection +0, Perception auditive +0",
  ca: { total: 10, contact: 10, pris_au_depourvu: 10 },
  pv: 1,
  dv: "1d8",
  js: { vig: "+0", ref: "+0", vol: "+0" },
  rm: null,       // Résistance à la Magie (ex: "RM 16") - optionnel
  rd: null,       // Réduction des Dégâts (ex: "5/Magie", "10/Argent") - optionnel
  vit: "9 m",
  bba: "+0",
  lutte: "+0",
  attaque: "Arme +0 (dégâts)",
  att_outrance: "",
  espace: "1,5 m",
  allonge: "1,5 m",
  att_spe: [],
  qual_spe: [],
  carac: { for: 10, dex: 10, con: 10, int: 10, sag: 10, cha: 10 },
  competences: "",
  dons: "",
  tactiques: "",
  butin: "",
  est_ennemi: false,
  role: "",
  meta_mj: {
    reference_livre: "",   // Source (ex: "Manuel des Monstres p.247")
    contexte_scenario: "", // Quand/où ce PNJ intervient
  },
  fiche_combat: {
    sorts: [],             // [{ nom, details }]
    actions_spe: [],       // [{ nom, details }]
    dons_tactiques: [],    // [{ nom, details }]
    resume_tactique: "",
  },
  bonus_actifs: [],        // [{ nom, effet, duree }]
  sorts_prepares: {},
  ogas: {
    occupation: "", // Ce qu'il fait à l'instant T
    objectif: "",   // Ce qu'il veut
    attitude: "",   // Comment il se comporte avec les PJ
    enjeu: "",      // Ce qu'il risque de perdre/gagner
  },
};`;
