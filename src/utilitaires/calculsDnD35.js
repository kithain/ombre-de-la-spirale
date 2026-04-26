/**
 * Moteur de calculs automatiques D&D 3.5 (SRD)
 *
 * Calcule à partir de la classe, du niveau et des caractéristiques :
 * - Modificateurs de caractéristiques
 * - Bonus de base à l'attaque (BBA) avec attaques itératives
 * - Jets de sauvegarde de base (Vigueur, Réflexes, Volonté)
 * - Points de vie estimés (DV moyen + mod Con × niveau)
 * - Dé de vie (type de dé par classe)
 * - Initiative (mod Dex)
 * - CA contact et pris au dépourvu
 * - Bonus de lutte (BBA + mod For + mod taille spécial)
 * - Bonus de compétences basés sur les caractéristiques
 */
import { calculerBonusLutte } from "./bonusDnD35";

// ─── TABLES DE PROGRESSION PAR CLASSE ────────────────────────────────

/**
 * Chaque classe définit :
 * - bba : "bon" (=niv), "moyen" (=3/4 niv), "faible" (=1/2 niv)
 * - js  : { vig, ref, vol } chacun "bon" ou "faible"
 * - dv  : type de dé de vie (4, 6, 8, 10, 12)
 */
const PROGRESSION_CLASSES = {
  // Classes de base (PHB)
  "Barbare":     { bba: "bon",    js: { vig: "bon", ref: "faible", vol: "faible" }, dv: 12 },
  "Barde":       { bba: "moyen",  js: { vig: "faible", ref: "bon", vol: "bon" },   dv: 6 },
  "Druide":      { bba: "moyen",  js: { vig: "bon", ref: "faible", vol: "bon" },   dv: 8 },
  "Ensorceleur": { bba: "faible", js: { vig: "faible", ref: "faible", vol: "bon" }, dv: 4 },
  "Guerrier":    { bba: "bon",    js: { vig: "bon", ref: "faible", vol: "faible" }, dv: 10 },
  "Magicien":    { bba: "faible", js: { vig: "faible", ref: "faible", vol: "bon" }, dv: 4 },
  "Moine":       { bba: "moyen",  js: { vig: "bon", ref: "bon", vol: "bon" },      dv: 8 },
  "Paladin":     { bba: "bon",    js: { vig: "bon", ref: "faible", vol: "faible" }, dv: 10 },
  "Prêtre":      { bba: "moyen",  js: { vig: "bon", ref: "faible", vol: "bon" },   dv: 8 },
  "Rôdeur":      { bba: "bon",    js: { vig: "bon", ref: "bon", vol: "faible" },   dv: 8 },
  "Roublard":    { bba: "moyen",  js: { vig: "faible", ref: "bon", vol: "faible" }, dv: 6 },

  // Classes de PNJ (DMG)
  "Adepte":        { bba: "faible", js: { vig: "faible", ref: "faible", vol: "bon" }, dv: 6 },
  "Aristocrate":   { bba: "moyen",  js: { vig: "faible", ref: "faible", vol: "bon" }, dv: 8 },
  "Expert":        { bba: "moyen",  js: { vig: "faible", ref: "faible", vol: "bon" }, dv: 6 },
  "Homme d'armes": { bba: "bon",    js: { vig: "bon", ref: "faible", vol: "faible" }, dv: 8 },
  "Roturier":      { bba: "faible", js: { vig: "faible", ref: "faible", vol: "faible" }, dv: 4 },

  // Classes de prestige courantes (valeurs moyennes)
  "Archer-mage":           { bba: "bon",    js: { vig: "faible", ref: "bon", vol: "bon" },    dv: 6 },
  "Assassin":              { bba: "moyen",  js: { vig: "faible", ref: "bon", vol: "faible" },  dv: 6 },
  "Champion occultiste":   { bba: "bon",    js: { vig: "bon", ref: "faible", vol: "faible" },  dv: 10 },
  "Chevalier noir":        { bba: "bon",    js: { vig: "bon", ref: "faible", vol: "bon" },     dv: 10 },
  "Disciple draconique":   { bba: "moyen",  js: { vig: "bon", ref: "faible", vol: "bon" },     dv: 12 },
  "Duelliste":             { bba: "bon",    js: { vig: "faible", ref: "bon", vol: "faible" },   dv: 10 },
  "Gardien du savoir":     { bba: "faible", js: { vig: "faible", ref: "faible", vol: "bon" },  dv: 4 },
  "Hiérophante":           { bba: "faible", js: { vig: "faible", ref: "faible", vol: "bon" },  dv: 8 },
  "Maître des ombres":     { bba: "moyen",  js: { vig: "faible", ref: "bon", vol: "bon" },     dv: 8 },
  "Mystificateur profane": { bba: "faible", js: { vig: "faible", ref: "faible", vol: "bon" },  dv: 4 },
  "Théurge mystique":      { bba: "faible", js: { vig: "faible", ref: "faible", vol: "bon" },  dv: 4 },
};

// ─── FONCTIONS DE CALCUL DE BASE ─────────────────────────────────────

/**
 * Modificateur de caractéristique D&D 3.5
 * @param {number|null} score - Valeur de caractéristique (1-40)
 * @returns {number|null} Modificateur
 */
export function calculerModificateur(score) {
  if (score === null || score === undefined || !Number.isFinite(score)) return null;
  return Math.floor((score - 10) / 2);
}

/**
 * Formatte un modificateur avec signe
 * @param {number|null} mod
 * @returns {string}
 */
export function formaterModificateur(mod) {
  if (mod === null || mod === undefined) return "—";
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

/**
 * BBA selon la progression et le niveau
 * @param {"bon"|"moyen"|"faible"} progression
 * @param {number} niveau
 * @returns {number}
 */
export function calculerBBA(progression, niveau) {
  if (!niveau || niveau < 1) return 0;
  switch (progression) {
    case "bon":    return niveau;
    case "moyen":  return Math.floor(niveau * 3 / 4);
    case "faible": return Math.floor(niveau / 2);
    default:       return 0;
  }
}

/**
 * Jet de sauvegarde de base selon la progression et le niveau
 * @param {"bon"|"faible"} progression
 * @param {number} niveau
 * @returns {number}
 */
export function calculerJSBase(progression, niveau) {
  if (!niveau || niveau < 1) return 0;
  switch (progression) {
    case "bon":    return Math.floor(niveau / 2) + 2;
    case "faible": return Math.floor(niveau / 3);
    default:       return 0;
  }
}

/**
 * PV moyens estimés pour un PNJ avec classe (convention joueur PHB).
 * Au niveau 1 on prend le DV max, puis la moyenne (dv+1)/2 par DV suivant.
 * @param {number} dv - Type de dé (4, 6, 8, 10, 12)
 * @param {number} niveau
 * @param {number|null} modCon - Modificateur de Constitution
 * @returns {number|null}
 */
export function calculerPVEstimes(dv, niveau, modCon) {
  if (!dv || !niveau || niveau < 1) return null;
  const mc = modCon ?? 0;
  // Niveau 1 : DV max + mod Con
  const pvNiv1 = dv + mc;
  if (niveau === 1) return Math.max(pvNiv1, 1);
  // Niveaux suivants : moyenne SRD = (dv + 1) / 2 par DV + mod Con
  const moyenneDV = (dv + 1) / 2;
  const pvSuivants = (moyenneDV + mc) * (niveau - 1);
  return Math.max(Math.floor(pvNiv1 + pvSuivants), 1);
}

/**
 * Formatte la chaîne de DV : "6d8+24" par ex
 * @param {number} dv - Type de dé
 * @param {number} niveau
 * @param {number|null} modCon
 * @returns {string}
 */
export function formaterDV(dv, niveau, modCon) {
  if (!dv || !niveau || niveau < 1) return "";
  const mc = modCon ?? 0;
  const bonusTotal = mc * niveau;
  const base = `${niveau}d${dv}`;
  if (bonusTotal === 0) return base;
  return bonusTotal > 0 ? `${base}+${bonusTotal}` : `${base}${bonusTotal}`;
}

/**
 * Initiative = mod Dex
 * @param {number|null} modDex
 * @returns {string}
 */
export function calculerInitiative(modDex) {
  if (modDex === null || modDex === undefined) return "";
  return formaterModificateur(modDex);
}

/**
 * CA contact = CA totale − bonus d'armure − bonus de bouclier − bonus d'armure naturelle
 * Simplification : CA contact = 10 + mod Dex + mod Taille + (bonus d'esquive éventuel)
 * On l'approxime à : 10 + modDex + modTaille
 * @param {number|null} modDex
 * @param {number} modTaille - modificateur de taille (0 pour Moyen)
 * @returns {number}
 */
export function calculerCAContact(modDex, modTaille) {
  return 10 + (modDex ?? 0) + (modTaille ?? 0);
}

/**
 * CA pris au dépourvu = CA totale − mod Dex (min 0, pas de malus Dex)
 * @param {number} caTotal
 * @param {number|null} modDex
 * @returns {number}
 */
export function calculerCAPrisAuDepourvu(caTotal, modDex) {
  if (!caTotal) return 10;
  const bonusDex = Math.max(modDex ?? 0, 0);
  return caTotal - bonusDex;
}

/**
 * Attaque corps à corps = BBA + mod For + mod Taille
 * @param {number} bba
 * @param {number|null} modFor
 * @param {number} modTaille
 * @returns {string}
 */
export function calculerAttaqueCAC(bba, modFor, modTaille) {
  const total = bba + (modFor ?? 0) + (modTaille ?? 0);
  return formaterModificateur(total);
}

/**
 * Attaque à distance = BBA + mod Dex + mod Taille
 * @param {number} bba
 * @param {number|null} modDex
 * @param {number} modTaille
 * @returns {string}
 */
export function calculerAttaqueDist(bba, modDex, modTaille) {
  const total = bba + (modDex ?? 0) + (modTaille ?? 0);
  return formaterModificateur(total);
}

/**
 * Formatte les attaques itératives selon le BBA.
 * D&D 3.5 : une attaque supplémentaire tous les +5 de BBA (min +1).
 * Ex: BBA +11 → "+11/+6/+1"
 *
 * @param {number} bba - Bonus de base à l'attaque
 * @returns {string} Chaîne formatée des attaques itératives
 */
export function formaterAttaquesIteratives(bba) {
  if (bba === null || bba === undefined || !Number.isFinite(bba)) return "";
  const attaques = [];
  let courant = bba;
  while (courant >= 1 || attaques.length === 0) {
    attaques.push(formaterModificateur(courant));
    courant -= 5;
    if (courant < 1 || attaques.length >= 4) break;
  }
  return attaques.join("/");
}

// ─── HELPERS PARTAGÉS ENTRE PNJ ET CRÉATURES ─────────────────────────

/**
 * Calcule les 6 modificateurs de caractéristiques.
 * @param {object|null} carac - { for, dex, con, int, sag, cha }
 * @returns {object}
 */
export function calculerModificateursTous(carac) {
  return {
    for: calculerModificateur(carac?.for),
    dex: calculerModificateur(carac?.dex),
    con: calculerModificateur(carac?.con),
    int: calculerModificateur(carac?.int),
    sag: calculerModificateur(carac?.sag),
    cha: calculerModificateur(carac?.cha),
  };
}

/**
 * Calcule les statistiques dérivées communes (initiative, CA, attaques, lutte).
 * Factorise la logique partagée entre calculerStatistiques et calculerStatistiquesCreature.
 *
 * @param {object} params
 * @param {number|null} params.bba
 * @param {object} params.modificateurs - { for, dex, con, int, sag, cha }
 * @param {number} params.modTaille
 * @param {string} params.taille - Label de taille ("Moyen", "Grand", etc.)
 * @param {object|null} params.ca - { total }
 * @returns {object}
 */
function calculerStatsDerivees({ bba, modificateurs, modTaille, taille, ca }) {
  const initiative = calculerInitiative(modificateurs.dex);
  const caTotal = ca?.total ?? null;
  const caContact = calculerCAContact(modificateurs.dex, modTaille);
  const caPrisAuDepourvu = caTotal ? calculerCAPrisAuDepourvu(caTotal, modificateurs.dex) : null;

  const attaqueCAC = bba !== null ? calculerAttaqueCAC(bba, modificateurs.for, modTaille) : null;
  const attaqueDist = bba !== null ? calculerAttaqueDist(bba, modificateurs.dex, modTaille) : null;
  const attaquesIteratives = bba !== null ? formaterAttaquesIteratives(bba) : null;
  const lutte = bba !== null ? calculerBonusLutte(bba, modificateurs.for, taille) : null;

  return {
    initiative,
    caContact,
    caPrisAuDepourvu,
    attaqueCAC,
    attaqueDist,
    attaquesIteratives,
    lutte,
    lutteFormattee: lutte !== null ? formaterModificateur(lutte) : null,
  };
}

// ─── CORRESPONDANCE TAILLE → MODIFICATEUR ────────────────────────────

const MODIFICATEURS_TAILLE = {
  "Infime": 8,
  "Minuscule": 4,
  "Très petit": 2,
  "Petit": 1,
  "Moyen": 0,
  "Grand": -1,
  "Très grand": -2,
  "Gigantesque": -4,
  "Colossal": -8,
};

export function obtenirModTaille(taille) {
  return MODIFICATEURS_TAILLE[taille] ?? 0;
}

// ─── CARACTÉRISTIQUE ASSOCIÉE À CHAQUE COMPÉTENCE ───────────────────

const CARAC_COMPETENCE = {
  "Acrobaties": "dex", "Art de la magie": "int", "Artisanat": "int",
  "Bluff": "cha", "Concentration": "con",
  "Connaissance (arcanes)": "int", "Connaissance (architecture)": "int",
  "Connaissance (géographie)": "int", "Connaissance (histoire)": "int",
  "Connaissance (mystères)": "int", "Connaissance (nature)": "int",
  "Connaissance (noblesse)": "int", "Connaissance (plans)": "int",
  "Connaissance (religion)": "int",
  "Contrefaçon": "int", "Crochetage": "dex", "Décryptage": "int",
  "Déguisement": "cha", "Déplacement silencieux": "dex",
  "Désamorçage/sabotage": "int", "Détection": "sag",
  "Diplomatie": "cha", "Discrétion": "dex", "Dressage": "cha",
  "Équilibre": "dex", "Équitation": "dex", "Escalade": "for",
  "Escamotage": "dex", "Estimation": "int", "Évasion": "dex",
  "Fouille": "int", "Intimidation": "cha",
  "Maîtrise des cordes": "dex", "Natation": "for",
  "Perception auditive": "sag", "Premiers secours": "sag",
  "Profession": "sag", "Psychologie": "sag",
  "Renseignements": "cha", "Représentation": "cha",
  "Saut": "for", "Survie": "sag",
  "Utilisation d'objets magiques": "cha",
};

// ─── FONCTION PRINCIPALE : TOUT CALCULER ─────────────────────────────

/**
 * Calcule toutes les statistiques dérivées d'un personnage
 * @param {object} personnage - Objet personnage avec classe, niveau, carac, taille, ca
 * @returns {object} Statistiques calculées
 */
export function calculerStatistiques(personnage) {
  if (!personnage || typeof personnage !== "object") return null;

  try {
    const { classe, niveau, carac, taille, ca, type } = personnage;
    const progression = PROGRESSION_CLASSES[classe] || null;
    const niv = typeof niveau === "number" && Number.isFinite(niveau) ? niveau : 0;

    // Modificateurs de caractéristiques (helper partagé)
    const modificateurs = calculerModificateursTous(carac);

    // Modificateur de taille (CA/attaque)
    const modTaille = obtenirModTaille(taille);

    // Détection Mort-vivant : Cha remplace Con pour Vigueur et PV (SRD)
    const typeBase = extraireTypeBase(type || "");
    const estMortVivant = typeBase === "Mort-vivant";
    const modPV = estMortVivant ? (modificateurs.cha ?? 0) : (modificateurs.con ?? 0);

    // ── Multiclassage (PHB p.22) ──
    // Si classes[] est renseigné et non vide, on somme BBA/JS/PV par classe.
    // Sinon, fallback sur classe/niveau unique (compatibilité).
    const classesMulti = Array.isArray(personnage.classes) && personnage.classes.length > 0
      ? personnage.classes.filter(c => c.classe && PROGRESSION_CLASSES[c.classe] && c.niveau > 0)
      : null;

    let bba, jsBase, dv, pvEstimes, dvFormatte, classeConnue;

    if (classesMulti && classesMulti.length > 0) {
      // ── Mode multiclasse ──
      bba = 0;
      jsBase = { vig: 0, ref: 0, vol: 0 };
      pvEstimes = 0;
      classeConnue = true;
      const dvParties = [];
      let premierDV = true;

      for (const entree of classesMulti) {
        const prog = PROGRESSION_CLASSES[entree.classe];
        if (!prog) continue;
        const nivClasse = entree.niveau;

        // BBA : somme des BBA de chaque classe (PHB p.22)
        bba += calculerBBA(prog.bba, nivClasse);

        // JS : somme des JS de base de chaque classe
        jsBase.vig += calculerJSBase(prog.js.vig, nivClasse);
        jsBase.ref += calculerJSBase(prog.js.ref, nivClasse);
        jsBase.vol += calculerJSBase(prog.js.vol, nivClasse);

        // PV : par classe, 1er DV global = max
        for (let i = 0; i < nivClasse; i++) {
          if (premierDV) {
            pvEstimes += prog.dv + modPV;
            premierDV = false;
          } else {
            pvEstimes += ((prog.dv + 1) / 2) + modPV;
          }
        }

        // DV formaté par classe
        const bonusClasse = modPV * nivClasse;
        dvParties.push(bonusClasse === 0
          ? `${nivClasse}d${prog.dv}`
          : bonusClasse > 0
            ? `${nivClasse}d${prog.dv}+${bonusClasse}`
            : `${nivClasse}d${prog.dv}${bonusClasse}`);
      }

      pvEstimes = Math.max(Math.floor(pvEstimes), 1);
      dv = classesMulti.length === 1 ? PROGRESSION_CLASSES[classesMulti[0].classe]?.dv : null;
      dvFormatte = dvParties.join(" + ");
    } else if (progression) {
      // ── Mode classe unique (compatibilité) ──
      bba = calculerBBA(progression.bba, niv);
      jsBase = {
        vig: calculerJSBase(progression.js.vig, niv),
        ref: calculerJSBase(progression.js.ref, niv),
        vol: calculerJSBase(progression.js.vol, niv),
      };
      dv = progression.dv;
      pvEstimes = dv ? calculerPVEstimes(dv, niv, modPV) : null;
      dvFormatte = dv ? formaterDV(dv, niv, modPV) : null;
      classeConnue = true;
    } else {
      bba = null;
      jsBase = null;
      dv = null;
      pvEstimes = null;
      dvFormatte = null;
      classeConnue = false;
    }

    // Jets de sauvegarde totaux : base + mod caractéristique (1 seule fois)
    const jsTotal = jsBase ? {
      vig: jsBase.vig + (estMortVivant ? (modificateurs.cha ?? 0) : (modificateurs.con ?? 0)),
      ref: jsBase.ref + (modificateurs.dex ?? 0),
      vol: jsBase.vol + (modificateurs.sag ?? 0),
    } : null;

    // Stats dérivées communes (helper partagé)
    const derivees = calculerStatsDerivees({ bba, modificateurs, modTaille, taille, ca });

    // Bonus de compétences basés sur les caractéristiques
    const bonusCompetences = {};
    for (const [comp, car] of Object.entries(CARAC_COMPETENCE)) {
      bonusCompetences[comp] = modificateurs[car] ?? 0;
    }

    return {
      modificateurs,
      modTaille,
      bba,
      bbaFormatte: bba !== null ? formaterModificateur(bba) : null,
      ...derivees,
      jsBase,
      jsTotal,
      jsTotalFormatte: jsTotal ? {
        vig: formaterModificateur(jsTotal.vig),
        ref: formaterModificateur(jsTotal.ref),
        vol: formaterModificateur(jsTotal.vol),
      } : null,
      dv,
      dvFormatte,
      pvEstimes,
      bonusCompetences,
      classeConnue,
    };
  } catch (erreur) {
    console.error("[calculerStatistiques] Erreur de calcul :", erreur);
    return null;
  }
}

// ─── PROGRESSION PAR TYPE DE CRÉATURE (MM / SRD) ────────────────────

/**
 * Table de progression par type de créature (monstres sans classe).
 * Chaque type définit :
 * - dv        : type de dé de vie
 * - bba       : "bon" (=DV), "moyen" (=3/4 DV), "faible" (=1/2 DV)
 * - js        : { vig, ref, vol } chacun "bon" ou "faible"
 * - ptComp    : points de compétence par DV (SRD, avant mod Int, min 1)
 * - caracNulles: caractéristiques qui doivent être null/— (ex: Mort-vivant → con)
 * - notes     : règle SRD résumée
 *
 * Sources : Manuel des Monstres p.290-317, SRD Creature Types
 */
export const PROGRESSION_TYPES = {
  "Aberration":             { dv: 8,  bba: "moyen",  js: { vig: "faible", ref: "faible", vol: "bon" },    ptComp: 2, caracNulles: [],                notes: "" },
  "Animal":                 { dv: 8,  bba: "moyen",  js: { vig: "bon",    ref: "bon",    vol: "faible" }, ptComp: 2, caracNulles: [],                notes: "Int 1 ou 2 (sans intelligence)" },
  "Créature artificielle":  { dv: 10, bba: "moyen",  js: { vig: "faible", ref: "faible", vol: "faible" }, ptComp: 0, caracNulles: ["con"],           notes: "Pas de Con. Bonus PV selon taille." },
  "Créature magique":       { dv: 10, bba: "bon",    js: { vig: "bon",    ref: "bon",    vol: "faible" }, ptComp: 2, caracNulles: [],                notes: "" },
  "Dragon":                 { dv: 12, bba: "bon",    js: { vig: "bon",    ref: "bon",    vol: "bon" },    ptComp: 6, caracNulles: [],                notes: "Tous les JS bons" },
  "Élémentaire":            { dv: 8,  bba: "moyen",  js: { vig: "bon",    ref: "bon",    vol: "faible" }, ptComp: 2, caracNulles: [],                notes: "JS bons varient selon l'élément" },
  "Extérieur":              { dv: 8,  bba: "bon",    js: { vig: "bon",    ref: "bon",    vol: "bon" },    ptComp: 8, caracNulles: [],                notes: "Tous les JS bons" },
  "Fée":                    { dv: 6,  bba: "faible", js: { vig: "faible", ref: "bon",    vol: "bon" },    ptComp: 6, caracNulles: [],                notes: "" },
  "Géant":                  { dv: 8,  bba: "moyen",  js: { vig: "bon",    ref: "faible", vol: "faible" }, ptComp: 2, caracNulles: [],                notes: "" },
  "Humanoïde":              { dv: 8,  bba: "moyen",  js: { vig: "faible", ref: "faible", vol: "faible" }, ptComp: 2, caracNulles: [],                notes: "1 JS bon au choix" },
  "Humanoïde monstrueux":   { dv: 8,  bba: "bon",    js: { vig: "faible", ref: "bon",    vol: "bon" },    ptComp: 2, caracNulles: [],                notes: "Vision dans le noir 18 m" },
  "Mort-vivant":            { dv: 12, bba: "faible", js: { vig: "faible", ref: "faible", vol: "bon" },    ptComp: 4, caracNulles: ["con"],           notes: "Pas de Con. PV basés sur Cha." },
  "Plante":                 { dv: 8,  bba: "moyen",  js: { vig: "bon",    ref: "faible", vol: "faible" }, ptComp: 2, caracNulles: [],                notes: "Beaucoup n'ont pas d'Int" },
  "Vase":                   { dv: 10, bba: "moyen",  js: { vig: "faible", ref: "faible", vol: "faible" }, ptComp: 0, caracNulles: ["int"],           notes: "Aveugle, pas d'Int" },
  "Vermine":                { dv: 8,  bba: "moyen",  js: { vig: "bon",    ref: "faible", vol: "faible" }, ptComp: 0, caracNulles: ["int"],           notes: "Sans intelligence" },
  "Esprit":                 { dv: 12, bba: "faible", js: { vig: "faible", ref: "faible", vol: "bon" },    ptComp: 4, caracNulles: ["con", "for"], notes: "Incorporel. PV basés sur Cha. Immunité aux armes non-magiques." },
};

// ─── BONUS PV DES CRÉATURES ARTIFICIELLES PAR TAILLE (SRD) ──────────
/**
 * Les créatures artificielles n'ont pas de Con. À la place, elles reçoivent
 * un bonus fixe aux PV selon leur taille (MM p.293).
 */
export const BONUS_PV_ARTIFICIEL = {
  "Infime": 0, "Minuscule": 0, "Très petit": 0,
  "Petit": 10, "Moyen": 20, "Grand": 30,
  "Très grand": 40, "Gigantesque": 60, "Colossal": 80,
};

// ─── ESPACE & ALLONGE PAR TAILLE (MM p.29 / SRD) ────────────────────
/**
 * Espace occupé et allonge naturelle par catégorie de taille.
 * L'allonge dépend de la morphologie :
 *   - "haut" : bipède, corps vertical (humanoïdes, géants)
 *   - "long" : quadrupède, corps horizontal (animaux, dragons)
 *
 * Sources : MM p.29, SRD Table: Creature Size and Scale
 */
export const ESPACE_ALLONGE = {
  "Infime":     { espace: "0,15 m", allonge: { haut: "0 m",   long: "0 m" } },
  "Minuscule":  { espace: "0,30 m", allonge: { haut: "0 m",   long: "0 m" } },
  "Très petit": { espace: "0,75 m", allonge: { haut: "0 m",   long: "0 m" } },
  "Petit":      { espace: "1,5 m",  allonge: { haut: "1,5 m", long: "1,5 m" } },
  "Moyen":      { espace: "1,5 m",  allonge: { haut: "1,5 m", long: "1,5 m" } },
  "Grand":      { espace: "3 m",    allonge: { haut: "3 m",   long: "1,5 m" } },
  "Très grand": { espace: "4,5 m",  allonge: { haut: "4,5 m", long: "3 m" } },
  "Gigantesque": { espace: "6 m",   allonge: { haut: "6 m",   long: "4,5 m" } },
  "Colossal":    { espace: "9 m",   allonge: { haut: "9 m",   long: "6 m" } },
};

// ─── DÉGÂTS D'ATTAQUES NATURELLES PAR TAILLE (MM p.296 / SRD) ───────
/**
 * Progression des dégâts d'attaques naturelles selon la taille.
 * Chaque type d'attaque naturelle a une base (Moyen) puis une progression
 * qui augmente/diminue d'un cran par catégorie de taille.
 *
 * Sources : MM p.296, SRD Natural Attacks
 */
export const DEGATS_NATURELS = {
  // Dés de dégâts indexés par taille (du plus petit au plus grand)
  progression: ["1", "1d2", "1d3", "1d4", "1d6", "1d8", "2d6", "2d8", "4d6"],
  indexTaille: {
    "Infime": 0, "Minuscule": 1, "Très petit": 2, "Petit": 3,
    "Moyen": 4, "Grand": 5, "Très grand": 6, "Gigantesque": 7, "Colossal": 8,
  },
  // Base de chaque type d'attaque naturelle (index dans progression pour taille Moyen)
  baseAttaque: {
    "morsure":    4, // 1d6 pour Moyen
    "griffe":     3, // 1d4 pour Moyen
    "coup":       4, // 1d6 pour Moyen
    "corne":      4, // 1d6 pour Moyen
    "dard":       3, // 1d4 pour Moyen
    "tentacule":  3, // 1d4 pour Moyen
    "sabot":      3, // 1d4 pour Moyen
    "queue":      4, // 1d6 pour Moyen
    "aile":       3, // 1d4 pour Moyen
    "pilon":      4, // 1d6 pour Moyen
    "écrasement": 5, // 1d8 pour Moyen (attaque spéciale dragons/géants)
  },
};

// ─── HELPERS CRÉATURES ──────────────────────────────────────────────

/**
 * Extrait le type de base d'un type composé.
 * Ex: "Mort-vivant (Incorporel)" → "Mort-vivant"
 *     "Extérieur (Extraplanaire, Mal)" → "Extérieur"
 *     "Humanoïde (Humain)" → "Humanoïde"
 * @param {string} typeComplet
 * @returns {string}
 */
export function extraireTypeBase(typeComplet) {
  if (!typeComplet) return "";
  const idx = typeComplet.indexOf("(");
  return (idx === -1 ? typeComplet : typeComplet.slice(0, idx)).trim();
}

/**
 * Extrait les sous-types entre parenthèses.
 * Ex: "Extérieur (Chaotique, Extraplanaire, Mal)" → ["Chaotique", "Extraplanaire", "Mal"]
 * @param {string} typeComplet
 * @returns {string[]}
 */
export function extraireSousTypes(typeComplet) {
  if (!typeComplet) return [];
  const match = typeComplet.match(/\(([^)]+)\)/);
  if (!match) return [];
  return match[1].split(",").map((s) => s.trim()).filter(Boolean);
}

/**
 * Parse une chaîne de DV type "4d12", "3d8+6", "6d10-3".
 * @param {string} dvStr
 * @returns {{ nombre: number, type: number, bonus: number } | null}
 */
export function parserDV(dvStr) {
  if (!dvStr || typeof dvStr !== "string") return null;
  const match = dvStr.trim().match(/^(\d+)d(\d+)([+-]\d+)?$/);
  if (!match) return null;
  return {
    nombre: parseInt(match[1], 10),
    type: parseInt(match[2], 10),
    bonus: match[3] ? parseInt(match[3], 10) : 0,
  };
}

/**
 * Calcule les PV moyens attendus pour un DV donné.
 * DV max au premier niveau, puis moyenne arrondie au supérieur.
 * @param {number} nombreDV - Nombre de dés de vie
 * @param {number} typeDV - Type de dé (4, 6, 8, 10, 12)
 * @param {number} bonus - Bonus fixe aux PV
 * @returns {number}
 */
export function calculerPVMoyens(nombreDV, typeDV, bonus = 0) {
  if (!nombreDV || !typeDV || nombreDV < 1) return 0;
  // Convention SRD monstres (MM) : tous les DV à la moyenne = (typeDV + 1) / 2
  const moyenneDV = (typeDV + 1) / 2;
  const pv = nombreDV * moyenneDV + bonus;
  return Math.max(Math.floor(pv), 1);
}

/**
 * Nombre de dons attendus selon les DV (SRD).
 * 1 don au 1er DV + 1 par tranche de 3 DV supplémentaires.
 * @param {number} nombreDV
 * @returns {number}
 */
export function calculerDonsAttendus(nombreDV) {
  if (!nombreDV || nombreDV < 1) return 0;
  return 1 + Math.floor((nombreDV - 1) / 3);
}

/**
 * Calcule les points de compétence totaux d'une créature à DV raciaux.
 * Règle SRD : (ptComp + mod Int) × DV, min 1 par DV.
 * Premier DV : ×4 (comme le premier niveau de classe).
 * Créatures sans Int (Vase, Vermine, Créature artificielle) : 0.
 *
 * @param {string} typeBase - Type de créature
 * @param {number} nombreDV - Nombre de dés de vie
 * @param {number|null} modInt - Modificateur d'Intelligence
 * @returns {number} Points de compétence totaux
 */
export function calculerPointsCompetencesCreature(typeBase, nombreDV, modInt) {
  const progression = PROGRESSION_TYPES[typeBase];
  if (!progression || progression.ptComp === 0 || nombreDV < 1) return 0;
  if (modInt === null || modInt === undefined) return 0;

  const parDV = Math.max(progression.ptComp + modInt, 1);
  // Premier DV ×4, suivants ×1
  return parDV * 4 + (nombreDV > 1 ? parDV * (nombreDV - 1) : 0);
}

/**
 * Retourne les dégâts attendus d'une attaque naturelle pour une taille donnée.
 * @param {string} typeAttaque - "morsure", "griffe", "coup", etc.
 * @param {string} taille - Catégorie de taille
 * @returns {string|null} Dés de dégâts attendus (ex: "1d8") ou null si inconnu
 */
export function obtenirDegatsNaturels(typeAttaque, taille) {
  const base = DEGATS_NATURELS.baseAttaque[typeAttaque.toLowerCase()];
  if (base === undefined) return null;
  const idxTaille = DEGATS_NATURELS.indexTaille[taille];
  if (idxTaille === undefined) return null;
  // Décalage : base est pour Moyen (index 4), ajuster selon la taille
  const idx = base + (idxTaille - 4);
  const clamped = Math.max(0, Math.min(idx, DEGATS_NATURELS.progression.length - 1));
  return DEGATS_NATURELS.progression[clamped];
}

/**
 * Calcule les statistiques dérivées d'une créature à DV raciaux (pas de classe).
 * Complète calculerStatistiques() qui ne gère que les classes.
 *
 * Gère les règles SRD spécifiques aux monstres :
 * - BBA et JS basés sur les DV raciaux et le type de créature
 * - PV avec bonus taille pour Créatures artificielles
 * - Morts-vivants : Cha remplace Con pour PV et Vigueur
 * - Points de compétence par type
 * - Validation espace/allonge vs taille
 * - Validation dégâts d'attaques naturelles vs taille
 *
 * @param {object} creature - Objet créature avec type, dv (string), carac, taille, ca, pv
 * @returns {object|null} Statistiques calculées + avertissements
 */
export function calculerStatistiquesCreature(creature) {
  if (!creature || typeof creature !== "object") return null;

  try {
    const { type, dv: dvStr, carac, taille, ca, pv } = creature;
    const typeBase = extraireTypeBase(type);
    const progression = PROGRESSION_TYPES[typeBase] || null;
    if (!progression) return null;

    const dvParse = parserDV(dvStr);
    const nombreDV = dvParse?.nombre ?? 0;

    // Modificateurs de caractéristiques (helper partagé)
    const modificateurs = calculerModificateursTous(carac);

    const modTaille = obtenirModTaille(taille);

    // BBA basé sur les DV raciaux
    const bba = calculerBBA(progression.bba, nombreDV);

    // JS basés sur les DV raciaux + mod carac
    // Morts-vivants utilisent Cha pour Vigueur, pas Con
    const modVig = typeBase === "Mort-vivant"
      ? (modificateurs.cha ?? 0)
      : (modificateurs.con ?? 0);

    const jsBase = {
      vig: calculerJSBase(progression.js.vig, nombreDV),
      ref: calculerJSBase(progression.js.ref, nombreDV),
      vol: calculerJSBase(progression.js.vol, nombreDV),
    };

    const jsTotal = {
      vig: jsBase.vig + modVig,
      ref: jsBase.ref + (modificateurs.dex ?? 0),
      vol: jsBase.vol + (modificateurs.sag ?? 0),
    };

    // PV attendus
    // Morts-vivants : mod Cha au lieu de mod Con pour bonus PV
    // Créatures artificielles : pas de mod Con, bonus fixe par taille
    let bonusPVFixe = 0;
    let modPV = 0;
    if (typeBase === "Créature artificielle") {
      bonusPVFixe = BONUS_PV_ARTIFICIEL[taille] ?? 0;
      modPV = 0; // pas de Con
    } else if (typeBase === "Mort-vivant") {
      modPV = modificateurs.cha ?? 0;
    } else {
      modPV = modificateurs.con ?? 0;
    }
    const bonusPVParDV = modPV * nombreDV + bonusPVFixe;
    const pvMoyens = dvParse
      ? calculerPVMoyens(dvParse.nombre, dvParse.type, bonusPVParDV)
      : null;

    // Points de compétence
    const pointsCompetences = calculerPointsCompetencesCreature(
      typeBase, nombreDV, modificateurs.int,
    );

    // Dons attendus
    const donsAttendus = calculerDonsAttendus(nombreDV);

    // Stats dérivées communes (helper partagé)
    const derivees = calculerStatsDerivees({ bba, modificateurs, modTaille, taille, ca });

    // ── Avertissements ──
    const avertissements = {};

    // Vérifier le type de DV
    if (dvParse && dvParse.type !== progression.dv) {
      avertissements._creature_dv_type = `Type de DV incorrect pour ${typeBase} : d${dvParse.type} (attendu d${progression.dv}).`;
    }

    // Vérifier les caractéristiques nulles obligatoires
    for (const caracNulle of progression.caracNulles) {
      const val = carac?.[caracNulle];
      if (val !== null && val !== undefined) {
        const nomCarac = { con: "Constitution", int: "Intelligence", for: "Force" }[caracNulle] || caracNulle;
        avertissements[`_creature_carac_${caracNulle}`] = `${typeBase} ne devrait pas avoir de ${nomCarac} (valeur actuelle : ${val}). Utiliser null / —.`;
      }
    }

    // Vérifier les sous-types
    const sousTypes = extraireSousTypes(type);
    if (sousTypes.includes("Incorporel") || sousTypes.includes("Intangible")) {
      if (carac?.for !== null && carac?.for !== undefined) {
        avertissements._creature_incorporel_for = `Créature incorporelle ne devrait pas avoir de Force (valeur actuelle : ${carac.for}). Utiliser null / —.`;
      }
    }

    // Vérifier Animal : Int ≤ 2
    if (typeBase === "Animal" && carac?.int !== null && carac?.int !== undefined && carac.int > 2) {
      avertissements._creature_animal_int = `Animal avec Int ${carac.int} — les Animaux ont Int 1 ou 2 (MM p.312).`;
    }

    // Vérifier PV vs PV moyens attendus (tolérance ±25%)
    if (pvMoyens !== null && typeof pv === "number" && pv > 0) {
      const ecart = Math.abs(pv - pvMoyens);
      const tolerance = Math.max(pvMoyens * 0.25, 5);
      if (ecart > tolerance) {
        avertissements._creature_pv = `PV (${pv}) significativement différents de la moyenne attendue (${pvMoyens}) pour ${dvStr}.`;
      }
    }

    // Vérifier espace occupé vs taille
    const espaceAttendu = ESPACE_ALLONGE[taille];
    if (espaceAttendu && creature.espace) {
      if (creature.espace !== espaceAttendu.espace) {
        avertissements._creature_espace = `Espace "${creature.espace}" ne correspond pas à la taille "${taille}" (attendu : ${espaceAttendu.espace}).`;
      }
    }

    // Vérifier allonge vs taille (si renseignée)
    if (espaceAttendu && creature.allonge) {
      const allongeHaut = espaceAttendu.allonge.haut;
      const allongeLong = espaceAttendu.allonge.long;
      if (creature.allonge !== allongeHaut && creature.allonge !== allongeLong) {
        avertissements._creature_allonge = `Allonge "${creature.allonge}" inhabituelle pour taille "${taille}" (attendu : ${allongeHaut} (haut) ou ${allongeLong} (long)).`;
      }
    }

    // Vérifier créature artificielle sans bonus PV taille
    if (typeBase === "Créature artificielle" && bonusPVFixe > 0 && dvParse) {
      const pvSansBonusTaille = calculerPVMoyens(dvParse.nombre, dvParse.type, 0);
      if (typeof pv === "number" && pv > 0 && pv <= pvSansBonusTaille) {
        avertissements._creature_artificiel_pv = `Créature artificielle ${taille} : bonus PV de taille +${bonusPVFixe} semble manquant (PV saisie : ${pv}, PV dés seuls : ${pvSansBonusTaille}).`;
      }
    }

    return {
      typeBase,
      sousTypes,
      progression,
      modificateurs,
      modTaille,
      bba,
      bbaFormatte: formaterModificateur(bba),
      ...derivees,
      jsBase,
      jsTotal,
      jsTotalFormatte: {
        vig: formaterModificateur(jsTotal.vig),
        ref: formaterModificateur(jsTotal.ref),
        vol: formaterModificateur(jsTotal.vol),
      },
      dvParse,
      pvMoyens,
      bonusPVFixe,
      donsAttendus,
      pointsCompetences,
      avertissements,
      typeConnu: true,
    };
  } catch (erreur) {
    console.error("[calculerStatistiquesCreature] Erreur :", erreur);
    return null;
  }
}

/**
 * Orchestrateur de calcul de statistiques D&D 3.5.
 * Détecte automatiquement le mode (PNJ ou Créature) et délègue au bon calculateur.
 *
 * Mode Créature : entité sans classe dont le type de base est reconnu dans PROGRESSION_TYPES
 * Mode PNJ      : entité avec classe, ou type non reconnu dans PROGRESSION_TYPES
 *
 * @param {object} entite - Objet PNJ ou créature (brouillon)
 * @returns {object|null} Statistiques calculées avec `mode: "pnj" | "creature"`
 */
export function calculerStatsGlobal(entite) {
  if (!entite || typeof entite !== "object") return null;
  const typeBase = extraireTypeBase(entite.type || "");
  const aUneClasse = !!(entite.classe && typeof entite.classe === "string" && entite.classe.trim());
  const typeReconnu = !!PROGRESSION_TYPES[typeBase];

  // Respecter modeEntite s'il est explicitement forcé par l'utilisateur
  const modeForce = entite.modeEntite;

  const estCreature = modeForce === "creature"
    || (modeForce !== "pnj" && !aUneClasse && typeReconnu);

  if (estCreature) {
    const stats = calculerStatistiquesCreature(entite);
    if (!stats) return null;
    return { ...stats, mode: "creature" };
  }

  const stats = calculerStatistiques(entite);
  if (!stats) return null;
  return { ...stats, mode: "pnj" };
}

/**
 * Coût en points d'achat selon la table D&D 3.5 (PHB p.169).
 * Scores 8-18 uniquement. Hors plage → coût null (non géré par la table).
 */
const TABLE_POINTS_ACHAT = {
  8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 6, 15: 8, 16: 10, 17: 13, 18: 16,
};

/**
 * Calcule le coût en "points d'achat" D&D 3.5 pour un ensemble de caractéristiques.
 *
 * Règle SRD : chaque score de 8 à 18 a un coût fixe (table PHB p.169).
 * Budgets officiels : 25 pts (standard), 28 pts (héros), 32 pts (héroïque).
 * Scores < 8 ou > 18 : hors table (null dans details, non comptabilisés).
 * Scores null (Con mort-vivant, Int vase) : ignorés.
 *
 * @param {{ for, dex, con, int, sag, cha }} carac - Les 6 caractéristiques
 * @returns {{ total: number, details: object, budget: string } | null}
 */
export function calculerPointsAchat(carac) {
  if (!carac || typeof carac !== "object") return null;

  const CARACS = ["for", "dex", "con", "int", "sag", "cha"];
  let total = 0;
  const details = {};

  for (const stat of CARACS) {
    const val = carac[stat];
    if (val === null || val === undefined) {
      details[stat] = null; // stat nulle (Mort-vivant, etc.)
      continue;
    }
    const pts = TABLE_POINTS_ACHAT[val];
    if (pts === undefined) {
      details[stat] = null; // hors table (<8 ou >18)
    } else {
      details[stat] = pts;
      total += pts;
    }
  }

  let budget;
  if (total <= 25)      budget = "standard";
  else if (total <= 28) budget = "héros";
  else if (total <= 32) budget = "héroïque";
  else                  budget = "hors-budget";

  return { total, details, budget };
}

export { PROGRESSION_CLASSES };
