/**
 * Validation des données de personnage/monstre — D&D 3.5
 *
 * Trois niveaux de validation :
 * 1. validerChamp     — validation unitaire d'un champ (temps réel)
 * 2. validerCoherence — règles croisées entre champs (avertissements)
 * 3. validerPersonnage — validation complète (erreurs + avertissements)
 *
 * Respecte les règles D&D 3.5 (PHB/DMG/SRD) :
 * - Alignement obligatoire par classe (Paladin LB, Moine Loyal, Barbare non-Loyal)
 * - CA contact ≤ CA totale, CA dépourvu ≤ CA totale
 * - Espace occupé cohérent avec la taille
 * - Morts-vivants : pas de Constitution
 * - Animaux : Int ≤ 2
 */
import {
  CODES_ALIGNEMENTS,
  LABELS_TAILLES,
  CLASSES_LISTE_PLATE,
  CODES_DISPOSITIONS,
  obtenirTraitsType,
} from "../data/constantesDnD35";
import {
  extraireTypeBase,
  extraireSousTypes,
  parserDV,
  calculerDonsAttendus,
  calculerStatistiquesCreature,
  PROGRESSION_TYPES,
} from "./calculsDnD35";

// Limites de validation
const LIMITES = {
  CARAC_MIN: 1,
  CARAC_MAX: 40,
  PV_MIN: 0,
  PV_MAX: 9999,
  CA_MIN: 0,
  CA_MAX: 99,
  NIVEAU_MIN: 0,
  NIVEAU_MAX: 40,
  NOM_MIN_LENGTH: 1,
  NOM_MAX_LENGTH: 200,
};

const CARACS_VALIDES = ["for", "dex", "con", "int", "sag", "cha"];

// Ré-export des listes officielles pour compatibilité
const ALIGNEMENTS_VALIDES = CODES_ALIGNEMENTS;
const TAILLES_VALIDES = LABELS_TAILLES;

/**
 * Valide un champ unique et retourne une erreur ou null
 * @param {string} champ - Nom du champ
 * @param {*} valeur - Valeur à valider
 * @returns {string|null} Message d'erreur ou null si valide
 */
function validerChamp(champ, valeur) {
  switch (champ) {
    case "nom":
      if (!valeur || typeof valeur !== "string" || valeur.trim().length < LIMITES.NOM_MIN_LENGTH) {
        return "Le nom est obligatoire.";
      }
      if (valeur.trim().length > LIMITES.NOM_MAX_LENGTH) {
        return `Le nom ne peut pas dépasser ${LIMITES.NOM_MAX_LENGTH} caractères.`;
      }
      return null;

    case "pv":
      if (valeur === null || valeur === undefined || valeur === "") return null;
      if (typeof valeur !== "number" || !Number.isFinite(valeur)) {
        return "Les PV doivent être un nombre valide.";
      }
      if (valeur < LIMITES.PV_MIN) {
        return "Les PV ne peuvent pas être négatifs.";
      }
      if (valeur > LIMITES.PV_MAX) {
        return `Les PV ne peuvent pas dépasser ${LIMITES.PV_MAX}.`;
      }
      return null;

    case "niveau":
      if (valeur === null || valeur === undefined || valeur === "") return null;
      if (typeof valeur !== "number" || !Number.isFinite(valeur)) {
        return "Le niveau doit être un nombre valide.";
      }
      if (valeur < LIMITES.NIVEAU_MIN || valeur > LIMITES.NIVEAU_MAX) {
        return `Le niveau doit être entre ${LIMITES.NIVEAU_MIN} et ${LIMITES.NIVEAU_MAX}.`;
      }
      return null;

    case "ca":
      if (!valeur || typeof valeur !== "object") return null;
      for (const cle of ["total", "contact", "pris_au_depourvu"]) {
        const v = valeur[cle];
        if (v === null || v === undefined || v === "") continue;
        if (typeof v !== "number" || !Number.isFinite(v)) {
          return `CA ${cle} doit être un nombre valide.`;
        }
        if (v < LIMITES.CA_MIN || v > LIMITES.CA_MAX) {
          return `CA ${cle} doit être entre ${LIMITES.CA_MIN} et ${LIMITES.CA_MAX}.`;
        }
      }
      return null;

    case "carac":
      if (!valeur || typeof valeur !== "object") return null;
      for (const stat of CARACS_VALIDES) {
        const v = valeur[stat];
        if (v === null || v === undefined) continue;
        if (typeof v !== "number" || !Number.isFinite(v)) {
          return `Caractéristique "${stat}" doit être un nombre valide.`;
        }
        if (v < LIMITES.CARAC_MIN || v > LIMITES.CARAC_MAX) {
          return `Caractéristique "${stat}" doit être entre ${LIMITES.CARAC_MIN} et ${LIMITES.CARAC_MAX}.`;
        }
      }
      return null;

    case "alignement":
      if (!valeur || valeur === "") return null;
      if (!ALIGNEMENTS_VALIDES.includes(valeur)) {
        return `Alignement invalide. Valeurs acceptées : ${ALIGNEMENTS_VALIDES.join(", ")}.`;
      }
      return null;

    case "taille":
      return null;

    case "classe":
      return null;

    case "disposition":
      if (!valeur || valeur === "") return null;
      if (!CODES_DISPOSITIONS.includes(valeur)) {
        return `Disposition invalide. Valeurs acceptées : ${CODES_DISPOSITIONS.join(", ")}.`;
      }
      return null;

    case "dv": {
      if (!valeur || valeur === "") return null;
      const REG_DV = /^(\d+)d(\d+)([+-]\d+)?$/;
      if (!REG_DV.test(String(valeur).trim())) {
        return 'Format DV invalide. Attendu : XdY ou XdY+Z (ex : "4d8", "6d8+24", "2d6-2").';
      }
      return null;
    }

    default:
      return null;
  }
}

// ─── RÈGLES DE COHÉRENCE CROISÉE D&D 3.5 ────────────────────────────

const TAILLE_ESPACE_ATTENDU = {
  "Infime": "0,15 m",
  "Minuscule": "0,30 m",
  "Très petit": "0,75 m",
  "Petit": "1,5 m",
  "Moyen": "1,5 m",
  "Grand": "3 m",
  "Très grand": "4,5 m",
  "Gigantesque": "6 m",
  "Colossal": "9 m",
};

// Types de créatures incompatibles avec les niveaux de classe (SRD/MM)
// Vermine, Vase, Créature artificielle : sans intelligence (Int —)
// Animal : Int 1-2, ne peut pas prendre de niveaux de classe
const TYPES_SANS_CLASSE = ["Vermine", "Vase", "Créature artificielle", "Animal"];

const CLASSES_LOYAL_OBLIGATOIRE = ["Moine", "Paladin"];
const ALIGNEMENTS_LOYAUX = ["LB", "LN", "LM"];

const CLASSES_NON_LOYAL = ["Barbare"];
const ALIGNEMENTS_NON_LOYAUX = ["NB", "N", "NM", "CB", "CN", "CM"];

const PALADIN_ALIGNEMENTS = ["LB"];

/**
 * Validations croisées entre plusieurs champs (règles D&D 3.5)
 *
 * Retourne des avertissements (pas des erreurs bloquantes) car certains PNJ
 * peuvent intentionnellement enfreindre ces règles (ex-Paladin déchu, etc.).
 *
 * @param {object} personnage
 * @returns {Record<string, string>} Avertissements (clé = identifiant de la règle)
 */
function validerCoherence(personnage) {
  const avertissements = {};

  const { classe, alignement, taille, espace, ca, type, carac } = personnage;

  // ─── TAILLE / CLASSE NON-STANDARD ─────────────────────────────

  if (taille && !TAILLES_VALIDES.includes(taille)) {
    avertissements._coherence_taille = `Taille "${taille}" non standard. Valeurs officielles : ${TAILLES_VALIDES.join(", ")}.`;
  }

  if (classe && !CLASSES_LISTE_PLATE.includes(classe)) {
    avertissements._coherence_classe = `Classe "${classe}" non reconnue dans les règles D&D 3.5.`;
  }

  // ─── TYPE DE CRÉATURE / CLASSE ──────────────────────────────────

  // Les créatures sans intelligence (Vermine, Vase, Créature artificielle)
  // et les Animaux (Int 1-2) ne peuvent pas prendre de niveaux de classe (SRD/MM).
  if (type) {
    const typeBase = extraireTypeBase(type);
    if (TYPES_SANS_CLASSE.includes(typeBase)) {
      // Vérifier classe principale
      const aClasse = classe && classe.trim() !== "";
      // Vérifier multiclassage
      const aClasseMulti = Array.isArray(personnage.classes) &&
        personnage.classes.some((c) => c.classe && c.classe.trim() !== "");
      if (aClasse || aClasseMulti) {
        avertissements._coherence_type_classe = `Les créatures de type "${typeBase}" ne peuvent normalement pas prendre de niveaux de classe (pas d'intelligence ou Int trop basse). Utilisez les DV raciaux à la place.`;
      }
    }
  }

  // ─── ALIGNEMENT / CLASSE ────────────────────────────────────────

  // Moine doit être Loyal (PHB p.40)
  if (classe === "Moine" && alignement && !ALIGNEMENTS_LOYAUX.includes(alignement)) {
    avertissements._coherence_alignement = `Un Moine doit être d'alignement Loyal (LB, LN ou LM). Alignement actuel : ${alignement}.`;
  }

  // Paladin doit être LB (PHB p.43)
  if (classe === "Paladin" && alignement && !PALADIN_ALIGNEMENTS.includes(alignement)) {
    avertissements._coherence_alignement = `Un Paladin doit être Loyal Bon (LB). Alignement actuel : ${alignement}.`;
  }

  // Barbare ne peut pas être Loyal (PHB p.25)
  if (classe === "Barbare" && alignement && !ALIGNEMENTS_NON_LOYAUX.includes(alignement)) {
    avertissements._coherence_alignement = `Un Barbare ne peut pas être Loyal. Alignement actuel : ${alignement}.`;
  }

  // Druide : neutre obligatoire sur au moins un axe (PHB p.33)
  if (classe === "Druide" && alignement && !["NB", "LN", "N", "CN", "NM"].includes(alignement)) {
    avertissements._coherence_alignement = `Un Druide doit être Neutre sur au moins un axe (NB, LN, N, CN ou NM). Alignement actuel : ${alignement}.`;
  }

  // Barde ne peut pas être Loyal (PHB p.26)
  if (classe === "Barde" && alignement && ALIGNEMENTS_LOYAUX.includes(alignement)) {
    avertissements._coherence_alignement = `Un Barde ne peut pas être d'alignement Loyal. Alignement actuel : ${alignement}.`;
  }

  // ─── TAILLE / ESPACE ──────────────────────────────────────────

  if (taille && espace && TAILLE_ESPACE_ATTENDU[taille]) {
    const attendu = TAILLE_ESPACE_ATTENDU[taille];
    if (espace !== attendu) {
      avertissements._coherence_espace = `Espace occupé "${espace}" ne correspond pas à la taille "${taille}" (attendu : ${attendu}).`;
    }
  }

  // ─── CLASSE D'ARMURE ─────────────────────────────────────────

  // CA contact ≤ CA total (PHB p.136 : contact = sans armure/bouclier/arm. naturelle)
  if (ca && typeof ca.total === "number" && typeof ca.contact === "number") {
    if (ca.contact > ca.total) {
      avertissements._coherence_ca = `CA Contact (${ca.contact}) ne peut pas être supérieure à CA Total (${ca.total}).`;
    }
  }

  // CA dépourvu ≤ CA total (PHB p.136)
  if (ca && typeof ca.total === "number" && typeof ca.pris_au_depourvu === "number") {
    if (ca.pris_au_depourvu > ca.total) {
      avertissements._coherence_ca_dep = `CA Dépourvu (${ca.pris_au_depourvu}) ne peut pas être supérieure à CA Total (${ca.total}).`;
    }
  }

  // ─── TYPE DE CRÉATURE / CARACTÉRISTIQUES (SRD) ─────────────

  const typeBase = extraireTypeBase(type);
  const sousTypes = extraireSousTypes(type);
  const progressionType = PROGRESSION_TYPES[typeBase];

  if (progressionType && carac) {
    // Caractéristiques nulles obligatoires par type
    for (const caracNulle of progressionType.caracNulles) {
      const val = carac[caracNulle];
      if (val !== null && val !== undefined) {
        const nomCarac = { con: "Constitution", int: "Intelligence", for: "Force" }[caracNulle] || caracNulle;
        avertissements[`_coherence_type_${caracNulle}`] = `${typeBase} ne devrait pas avoir de ${nomCarac} (valeur actuelle : ${val}). Utiliser — ou null.`;
      }
    }

    // Animaux : Int ≤ 2 (MM p.312)
    if (typeBase === "Animal" && typeof carac.int === "number" && carac.int > 2) {
      avertissements._coherence_type_int = `Les Animaux ont Int 1 ou 2 (valeur actuelle : ${carac.int}).`;
    }
  }

  // Sous-type Incorporel/Intangible → pas de For
  if ((sousTypes.includes("Incorporel") || sousTypes.includes("Intangible")) && carac) {
    if (carac.for !== null && carac.for !== undefined) {
      avertissements._coherence_incorporel_for = `Créature incorporelle ne devrait pas avoir de Force (valeur actuelle : ${carac.for}). Utiliser null / —.`;
    }
  }

  return avertissements;
}

/**
 * Valide un objet personnage complet
 * @param {object} personnage - Objet personnage à valider
 * @returns {{ valide: boolean, erreurs: Record<string, string>, avertissements: Record<string, string> }}
 */
export function validerPersonnage(personnage) {
  if (!personnage || typeof personnage !== "object") {
    return { valide: false, erreurs: { _global: "Objet personnage invalide." }, avertissements: {} };
  }

  const erreurs = {};
  const champsAValider = ["nom", "pv", "niveau", "ca", "carac", "alignement", "taille", "classe", "disposition", "dv"];

  for (const champ of champsAValider) {
    const erreur = validerChamp(champ, personnage[champ]);
    if (erreur) {
      erreurs[champ] = erreur;
    }
  }

  const avertissements = validerCoherence(personnage);

  // ─── Validation créature (DV raciaux, type sans classe) ────────
  const statsCreature = calculerStatistiquesCreature(personnage);
  if (statsCreature) {
    // Fusionner les avertissements de calculerStatistiquesCreature
    Object.assign(avertissements, statsCreature.avertissements);

    // Vérifier le nombre de dons
    const dons = personnage.dons;
    if (dons && typeof dons === "string" && statsCreature.donsAttendus > 0) {
      const listeDons = dons.split(/[,;]/).map((d) => d.trim()).filter(Boolean);
      if (listeDons.length !== statsCreature.donsAttendus) {
        avertissements._creature_dons = `Nombre de dons (${listeDons.length}) différent de l'attendu (${statsCreature.donsAttendus}) pour ${statsCreature.dvParse?.nombre || "?"} DV.`;
      }
    }

    // Vérifier BBA vs valeur saisie
    if (personnage.bba && typeof personnage.bba === "string") {
      const bbaStr = personnage.bba.replace("+", "");
      const bbaSaisi = parseInt(bbaStr, 10);
      if (!isNaN(bbaSaisi) && bbaSaisi !== statsCreature.bba) {
        avertissements._creature_bba = `BBA saisi (+${bbaSaisi}) différent du calcul SRD (+${statsCreature.bba}) pour ${statsCreature.typeBase} à ${statsCreature.dvParse?.nombre || "?"} DV.`;
      }
    }

    // Vérifier JS vs valeurs saisies
    if (personnage.js && typeof personnage.js === "object" && statsCreature.jsTotalFormatte) {
      for (const [cle, label] of [["vig", "Vigueur"], ["ref", "Réflexes"], ["vol", "Volonté"]]) {
        const saisi = personnage.js[cle];
        const attendu = statsCreature.jsTotalFormatte[cle];
        if (saisi && attendu && saisi !== attendu) {
          avertissements[`_creature_js_${cle}`] = `JS ${label} saisi (${saisi}) différent du calcul SRD (${attendu}).`;
        }
      }
    }

    // Vérifier points de compétences (SRD : ptComp par type × DV)
    if (statsCreature.pointsCompetences > 0 && personnage.competences && typeof personnage.competences === "string" && personnage.competences !== "—") {
      // Parser "Discrétion +8, Escalade +11" → extraire les bonus numériques
      const entreesComp = personnage.competences.split(/[,;]/).map((c) => c.trim()).filter(Boolean);
      // Extraire les rangs investis (bonus - mod carac ≈ rangs, mais on ne peut pas savoir exactement)
      // On se contente de compter le nombre de compétences listées vs DV max rangs
      const nbDV = statsCreature.dvParse?.nombre || 0;
      const rangMax = nbDV + 3; // rang max = DV + 3 pour compétence de classe
      if (entreesComp.length > 0) {
        avertissements._creature_competences_info = `${statsCreature.typeBase} ${nbDV} DV : ${statsCreature.pointsCompetences} points de compétence attendus (rang max ${rangMax}). ${entreesComp.length} compétence(s) listée(s).`;
      }
    }
  }

  // ─── Vérification des traits de type de créature (qual_spe) ────────
  const traitsAttendus = obtenirTraitsType(personnage.type);
  if (traitsAttendus.qual_spe.length > 0) {
    const qualSpeFiche = Array.isArray(personnage.qual_spe) ? personnage.qual_spe : [];
    // Normaliser pour comparaison souple (minuscule, sans accents superflus)
    const normaliser = (s) => s.toLowerCase().trim();
    const qualNorm = qualSpeFiche.map(normaliser);

    const manquants = traitsAttendus.qual_spe.filter(
      (trait) => !qualNorm.some((q) => q.includes(normaliser(trait)) || normaliser(trait).includes(q))
    );

    if (manquants.length > 0) {
      avertissements._creature_traits_manquants = `Traits de type manquants (${extraireTypeBase(personnage.type)}) : ${manquants.join(", ")}.`;
    }
  }

  return {
    valide: Object.keys(erreurs).length === 0,
    erreurs,
    avertissements,
  };
}

/**
 * Valide un seul champ (pour validation en temps réel)
 * @param {string} champ - Nom du champ
 * @param {*} valeur - Valeur à valider
 * @returns {string|null} Message d'erreur ou null
 */
export function validerChampUnique(champ, valeur) {
  return validerChamp(champ, valeur);
}

export { LIMITES, CARACS_VALIDES, ALIGNEMENTS_VALIDES, TAILLES_VALIDES };
