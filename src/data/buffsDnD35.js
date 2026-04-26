/**
 * Buffs automatiques D&D 3.5
 *
 * Définit les sorts-buffs et aptitudes de classe qui génèrent
 * des bonus actifs, avec effet et durée calculée par niveau de lanceur.
 *
 * Chaque buff déclare un `typeBonus` (cf. TYPES_BONUS dans bonusDnD35.js)
 * et des `cibles` pour permettre au moteur de cumul de détecter
 * les conflits de stacking selon les règles D&D 3.5 :
 *   - Les bonus de même type ne se cumulent PAS (sauf Esquive/Synergie)
 *   - Seul le plus élevé s'applique
 */

// ─── SORTS-BUFFS COURANTS ────────────────────────────────────────
// Chaque entrée : { effet(niv), duree(niv), source, typeBonus, cibles }
// typeBonus : type du bonus selon les règles D&D 3.5 (PHB p.21)
// cibles    : statistiques affectées ("ca", "attaque", "js", "degats", etc.)
export const BUFFS_SORTS = {
  // Prêtre / Paladin
  "Bénédiction": {
    effet: () => "+1 aux jets d'attaque et de sauvegarde contre la peur",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Moral",
    cibles: ["attaque", "js"],
  },
  "Bouclier de la foi": {
    effet: (niv) => `+${2 + Math.floor(niv / 6)} CA (parade)`,
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Parade",
    cibles: ["ca"],
  },
  "Protection contre le Mal": {
    effet: () => "+2 CA et JS contre créatures mauvaises, bloque domination",
    duree: (niv) => `${niv} min`,
    source: "sort",
    // LIMITATION : CA = bonus Parade, JS = bonus Résistance (PHB p.278)
    // Le modèle mono-typeBonus ne peut pas représenter les deux simultanément.
    // On retient Parade (CA) car c'est le plus impactant pour le stacking.
    typeBonus: "Parade",
    cibles: ["ca", "js"],
  },
  "Aide": {
    effet: () => "+1 attaque, +1 JS peur, +1d8 pv temporaires",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Moral",
    cibles: ["attaque", "js"],
  },
  "Endurance de l'ours": {
    effet: () => "+4 Constitution",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Altération",
    cibles: ["carac_con"],
  },
  "Force de taureau": {
    effet: () => "+4 Force",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Altération",
    cibles: ["carac_for"],
  },
  "Grâce féline": {
    effet: () => "+4 Dextérité",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Altération",
    cibles: ["carac_dex"],
  },
  "Sagesse du hibou": {
    effet: () => "+4 Sagesse",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Altération",
    cibles: ["carac_sag"],
  },
  "Splendeur de l'aigle": {
    effet: () => "+4 Charisme",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Altération",
    cibles: ["carac_cha"],
  },
  "Ruse du renard": {
    effet: () => "+4 Intelligence",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Altération",
    cibles: ["carac_int"],
  },
  "Prière": {
    effet: () => "+1 attaque, dégâts, JS et compétences (alliés) / -1 pour ennemis",
    duree: (niv) => `${niv} rounds`,
    source: "sort",
    typeBonus: "Chance",
    cibles: ["attaque", "degats", "js", "competences"],
  },
  "Panoplie magique": {
    effet: (niv) => `+${Math.min(5, 1 + Math.floor(niv / 4))} armure et bouclier`,
    duree: (niv) => `${niv} h`,
    source: "sort",
    typeBonus: "Altération",
    cibles: ["ca"],
  },
  "Liberté de mouvement": {
    effet: () => "Immunité : lutte, toile, paralysie, ralentissement",
    duree: (niv) => `${niv * 10} min`,
    source: "sort",
    typeBonus: "Divers",
    cibles: ["mouvement"],
  },
  "Protection contre la mort": {
    effet: () => "Immunité effets de mort, +4 JS contre énergie négative",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Résistance",
    cibles: ["js"],
  },
  "Résistance aux sorts": {
    effet: (niv) => `Résistance à la magie ${12 + niv}`,
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Divers",
    cibles: ["rm"],
  },
  "Sanctuaire": {
    effet: () => "Les ennemis doivent réussir un JS Volonté pour attaquer",
    duree: (niv) => `${niv} rounds`,
    source: "sort",
    typeBonus: "Divers",
    cibles: ["defense"],
  },
  "Silence": {
    effet: () => "Zone de silence 6 m de rayon (aucun son)",
    duree: (niv) => `${niv} rounds`,
    source: "sort",
    typeBonus: "Divers",
    cibles: ["zone"],
  },
  // Magicien / Ensorceleur
  "Armure de mage": {
    effet: () => "+4 CA (armure, sans pénalité)",
    duree: (niv) => `${niv} h`,
    source: "sort",
    typeBonus: "Armure",
    cibles: ["ca"],
  },
  "Bouclier": {
    effet: () => "+4 CA (bouclier), bloque projectiles magiques",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Bouclier",
    cibles: ["ca"],
  },
  "Image miroir": {
    effet: (niv) => `${Math.min(8, 1 + Math.floor(niv / 3))} images illusoires`,
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Divers",
    cibles: ["defense"],
  },
  "Flou": {
    effet: () => "20% de chances d'échec des attaques (camouflage)",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Divers",
    cibles: ["defense"],
  },
  "Invisibilité": {
    effet: () => "Invisible jusqu'à attaque",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Divers",
    cibles: ["defense"],
  },
  "Hâte": {
    effet: () => "+1 attaque, +1 CA esquive, +1 Réflexes, +9 m vitesse, attaque supplémentaire",
    duree: (niv) => `${niv} rounds`,
    source: "sort",
    typeBonus: "Esquive",
    cibles: ["ca", "attaque", "js_ref", "vitesse"],
  },
  "Vol": {
    effet: () => "Vol 18 m (bonne manœuvrabilité)",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Divers",
    cibles: ["mouvement"],
  },
  "Peau de pierre": {
    effet: (niv) => `RD ${Math.min(150, niv * 10)}/adamantium`,
    duree: (niv) => `${niv * 10} min ou charges épuisées`,
    source: "sort",
    typeBonus: "Divers",
    cibles: ["rd"],
  },
  "Invisibilité suprême": {
    effet: () => "Invisible même en attaquant",
    duree: (niv) => `${niv} rounds`,
    source: "sort",
    typeBonus: "Divers",
    cibles: ["defense"],
  },
  // Druide / Rôdeur
  "Peau d'écorce": {
    effet: (niv) => `+${Math.min(5, 2 + Math.floor((niv - 3) / 3))} CA (armure naturelle)`,
    duree: (niv) => `${niv * 10} min`,
    source: "sort",
    typeBonus: "Armure naturelle",
    cibles: ["ca"],
  },
  "Résistance aux énergies destructives": {
    effet: () => "Résistance 10 à un type d'énergie",
    duree: (niv) => `${niv * 10} min`,
    source: "sort",
    typeBonus: "Divers",
    cibles: ["resistance"],
  },
  "Protection contre les énergies destructives": {
    effet: (niv) => `Absorbe ${niv * 12} points de dégâts d'énergie`,
    duree: (niv) => `${niv * 10} min ou charges épuisées`,
    source: "sort",
    typeBonus: "Divers",
    cibles: ["resistance"],
  },
  // Barde
  "Héroïsme": {
    effet: () => "+2 attaque, JS et tests de compétences",
    duree: (niv) => `${niv * 10} min`,
    source: "sort",
    typeBonus: "Moral",
    cibles: ["attaque", "js", "competences"],
  },
  "Héroïsme suprême": {
    effet: (niv) => `+4 attaque, JS et compétences, +${niv} pv temp, immunité peur`,
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Moral",
    cibles: ["attaque", "js", "competences", "pv"],
  },
  // Paladin
  "Faveur divine": {
    effet: () => "+1 attaque, +1d6 dégâts contre mal",
    duree: () => "1 min",
    source: "sort",
    typeBonus: "Sacré",
    cibles: ["attaque", "degats"],
  },
  "Bénédiction d'arme": {
    effet: () => "+1 attaque (ne manque pas sur 1 naturel), critique confirmé auto contre mal",
    duree: (niv) => `${niv} min`,
    source: "sort",
    typeBonus: "Sacré",
    cibles: ["attaque"],
  },
};

// ─── BUFFS D'APTITUDES DE CLASSE ─────────────────────────────────────
// { classe, niveauMin, nom, effet(niveau), duree(niveau), source: "classe", typeBonus, cibles }
export const BUFFS_APTITUDES = [
  {
    classe: "Barbare",
    niveauMin: 1,
    nom: "Rage de berserker",
    // PHB p.25 : +4 For/Con (Altération), +2 JS Vol (Moral), -2 CA (non-typé)
    // Rage suprême (niv 11) : +6/+6/+3 ; Rage de maître (niv 20) : +8/+8/+4
    effet: (niv) => {
      const bonus = niv >= 20 ? [8, 8, 4] : niv >= 11 ? [6, 6, 3] : [4, 4, 2];
      return `+${bonus[0]} FOR, +${bonus[1]} CON, +${bonus[2]} JS Vol, -2 CA`;
    },
    duree: () => "3 + mod Con (avec rage) rounds",
    source: "classe",
    typeBonus: "Altération",   // For/Con sont Altération → ne cumule PAS avec Force de taureau etc.
    cibles: ["carac_for", "carac_con", "js_vol", "ca"],
  },
  {
    classe: "Paladin",
    niveauMin: 2,
    nom: "Aura de courage",
    effet: () => "Immunité à la peur (paladin) + alliés à 3 m : +4 JS contre peur",
    duree: () => "Permanent (tant que conscient)",
    source: "classe",
    typeBonus: "Divers",
    cibles: ["js"],
  },
  {
    classe: "Paladin",
    niveauMin: 1,
    nom: "Grâce divine",
    effet: (_, cha) => `+${Math.max(0, cha || 0)} à tous les jets de sauvegarde (Cha)`,
    duree: () => "Permanent",
    source: "classe",
    typeBonus: "Divers",
    cibles: ["js"],
  },
  {
    classe: "Moine",
    niveauMin: 5,
    nom: "Pureté physique",
    effet: () => "Immunité à toutes les maladies (y compris surnaturelles)",
    duree: () => "Permanent",
    source: "classe",
    typeBonus: "Divers",
    cibles: ["maladies"],
  },
  {
    classe: "Rôdeur",
    niveauMin: 1,
    nom: "Ennemi juré",
    effet: (niv) => `+${2 + Math.floor(niv / 5) * 2} dégâts et Bluff/Perception auditive/Psychologie/Renseignements/Survie contre type choisi`,
    duree: () => "Permanent (contre type choisi)",
    source: "classe",
    typeBonus: "Divers",
    cibles: ["degats", "competences"],
  },
  {
    classe: "Barde",
    niveauMin: 1,
    nom: "Inspiration vaillante",
    effet: (niv) => `+${niv >= 14 ? 3 : niv >= 8 ? 2 : 1} attaque et dégâts, +${niv >= 14 ? 3 : niv >= 8 ? 2 : 1} JS peur et charme`,
    duree: () => "Tant que le barde chante + 5 rounds",
    source: "classe",
    typeBonus: "Moral",
    cibles: ["attaque", "degats", "js"],
  },
];

// ─── MOTEUR DE SUGGESTIONS ───────────────────────────────────────
/**
 * Calcule la liste de buffs suggérés pour un personnage.
 * Analyse : sorts préparés, aptitudes de classe selon niveau, et butin magique.
 *
 * Chaque suggestion inclut le typeBonus et les cibles pour détecter
 * les conflits de stacking dans l'interface.
 *
 * @param {object} brouillon - Le personnage en cours d'édition
 * @returns {Array<{nom: string, effet: string, duree: string, source: string, typeBonus: string, cibles: string[]}>}
 */
export function calculerBuffsSuggeres(brouillon) {
  if (!brouillon || typeof brouillon !== "object") return [];

  try {
    const suggestions = [];
    const niveau = Number(brouillon.niveau) || 1;
    const modCha = brouillon.carac?.cha ? Math.floor((brouillon.carac.cha - 10) / 2) : 0;

    // 1. Sorts préparés → buffs de sorts
    const sortsPrepares = brouillon.sorts_prepares || brouillon.sortsPrepares || {};
    for (const nivSort of Object.keys(sortsPrepares)) {
      for (const nomSort of sortsPrepares[nivSort] || []) {
        const buff = BUFFS_SORTS[nomSort];
        if (buff) {
          suggestions.push({
            nom: nomSort,
            effet: buff.effet(niveau),
            duree: buff.duree(niveau),
            source: "sort",
            typeBonus: buff.typeBonus,
            cibles: buff.cibles,
          });
        }
      }
    }

    // 2. Aptitudes de classe
    const classe = brouillon.classe || "";
    for (const apt of BUFFS_APTITUDES) {
      if (apt.classe === classe && niveau >= apt.niveauMin) {
        suggestions.push({
          nom: apt.nom,
          effet: apt.effet(niveau, modCha),
          duree: apt.duree(niveau),
          source: "classe",
          typeBonus: apt.typeBonus || "Divers",
          cibles: apt.cibles || [],
        });
      }
    }

    // Dédupliquer par nom (le premier trouvé a la priorité)
    const vus = new Set();
    return suggestions.filter((s) => {
      if (vus.has(s.nom)) return false;
      vus.add(s.nom);
      return true;
    });
  } catch (erreur) {
    console.error("[calculerBuffsSuggeres] Erreur :", erreur);
    return [];
  }
}
