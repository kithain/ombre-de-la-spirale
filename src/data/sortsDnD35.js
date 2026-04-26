/**
 * Système de sorts D&D 3.5 (SRD / PHB)
 *
 * - Tables d'emplacements de sorts par classe et niveau
 * - Sorts bonus selon modificateur de caractéristique
 * - Liste représentative des sorts courants par classe et niveau de sort
 */

// ─── EMPLACEMENTS DE SORTS PAR JOUR ─────────────────────────────────
// Chaque entrée : tableau indexé par [niveauDeSort] = nombre d'emplacements
// null = pas d'accès à ce niveau de sort, 0 = seulement via bonus

export const EMPLACEMENTS_SORTS = {
  "Prêtre": {
    carac: "sag",
    domaine: true, // +1 sort de domaine par niveau de sort accessible
    progression: {
      1:  [3,1],
      2:  [4,2],
      3:  [4,2,1],
      4:  [5,3,2],
      5:  [5,3,2,1],
      6:  [5,3,3,2],
      7:  [6,4,3,2,1],
      8:  [6,4,3,3,2],
      9:  [6,4,4,3,2,1],
      10: [6,4,4,3,3,2],
      11: [6,5,4,4,3,2,1],
      12: [6,5,4,4,3,3,2],
      13: [6,5,5,4,4,3,2,1],
      14: [6,5,5,4,4,3,3,2],
      15: [6,5,5,5,4,4,3,2,1],
      16: [6,5,5,5,4,4,3,3,2],
      17: [6,5,5,5,5,4,4,3,2,1],
      18: [6,5,5,5,5,4,4,3,3,2],
      19: [6,5,5,5,5,5,4,4,3,3],
      20: [6,5,5,5,5,5,4,4,4,4],
    },
  },
  "Druide": {
    carac: "sag",
    domaine: false,
    progression: {
      1:  [3,1],
      2:  [4,2],
      3:  [4,2,1],
      4:  [5,3,2],
      5:  [5,3,2,1],
      6:  [5,3,3,2],
      7:  [6,4,3,2,1],
      8:  [6,4,3,3,2],
      9:  [6,4,4,3,2,1],
      10: [6,4,4,3,3,2],
      11: [6,5,4,4,3,2,1],
      12: [6,5,4,4,3,3,2],
      13: [6,5,5,4,4,3,2,1],
      14: [6,5,5,4,4,3,3,2],
      15: [6,5,5,5,4,4,3,2,1],
      16: [6,5,5,5,4,4,3,3,2],
      17: [6,5,5,5,5,4,4,3,2,1],
      18: [6,5,5,5,5,4,4,3,3,2],
      19: [6,5,5,5,5,5,4,4,3,3],
      20: [6,5,5,5,5,5,4,4,4,4],
    },
  },
  "Magicien": {
    carac: "int",
    domaine: false,
    progression: {
      1:  [3,1],
      2:  [4,2],
      3:  [4,2,1],
      4:  [4,3,2],
      5:  [4,3,2,1],
      6:  [4,3,3,2],
      7:  [4,4,3,2,1],
      8:  [4,4,3,3,2],
      9:  [4,4,4,3,2,1],
      10: [4,4,4,3,3,2],
      11: [4,4,4,4,3,2,1],
      12: [4,4,4,4,3,3,2],
      13: [4,4,4,4,4,3,2,1],
      14: [4,4,4,4,4,3,3,2],
      15: [4,4,4,4,4,4,3,2,1],
      16: [4,4,4,4,4,4,3,3,2],
      17: [4,4,4,4,4,4,4,3,2,1],
      18: [4,4,4,4,4,4,4,3,3,2],
      19: [4,4,4,4,4,4,4,4,3,3],
      20: [4,4,4,4,4,4,4,4,4,4],
    },
  },
  "Ensorceleur": {
    carac: "cha",
    domaine: false,
    progression: {
      1:  [5,3],
      2:  [6,4],
      3:  [6,5],
      4:  [6,6,3],
      5:  [6,6,4],
      6:  [6,6,5,3],
      7:  [6,6,6,4],
      8:  [6,6,6,5,3],
      9:  [6,6,6,6,4],
      10: [6,6,6,6,5,3],
      11: [6,6,6,6,6,4],
      12: [6,6,6,6,6,5,3],
      13: [6,6,6,6,6,6,4],
      14: [6,6,6,6,6,6,5,3],
      15: [6,6,6,6,6,6,6,4],
      16: [6,6,6,6,6,6,6,5,3],
      17: [6,6,6,6,6,6,6,6,4],
      18: [6,6,6,6,6,6,6,6,5,3],
      19: [6,6,6,6,6,6,6,6,6,4],
      20: [6,6,6,6,6,6,6,6,6,6],
    },
  },
  "Barde": {
    carac: "cha",
    domaine: false,
    progression: {
      1:  [2],
      2:  [3,0],
      3:  [3,1],
      4:  [3,2,0],
      5:  [3,3,1],
      6:  [3,3,2],
      7:  [3,3,2,0],
      8:  [3,3,3,1],
      9:  [3,3,3,2],
      10: [3,3,3,2,0],
      11: [3,3,3,3,1],
      12: [4,3,3,3,2],
      13: [4,4,3,3,3,1],
      14: [4,4,4,3,3,2],
      15: [4,4,4,4,3,3],
      16: [4,4,4,4,4,3],
      17: [4,4,4,4,4,4],
      18: [4,4,4,4,4,4],
      19: [4,4,4,4,4,4],
      20: [4,4,4,4,4,4],
    },
  },
  "Paladin": {
    carac: "sag",
    domaine: false,
    niveauMin: 4,
    progression: {
      4:  [0],
      5:  [0],
      6:  [1],
      7:  [1],
      8:  [1,0],
      9:  [1,0],
      10: [1,1],
      11: [1,1,0],
      12: [1,1,1],
      13: [1,1,1],
      14: [2,1,1,0],
      15: [2,1,1,1],
      16: [2,2,1,1],
      17: [2,2,2,1],
      18: [3,2,2,1],
      19: [3,3,3,2],
      20: [3,3,3,3],
    },
  },
  "Rôdeur": {
    carac: "sag",
    domaine: false,
    niveauMin: 4,
    progression: {
      4:  [0],
      5:  [0],
      6:  [1],
      7:  [1],
      8:  [1,0],
      9:  [1,0],
      10: [1,1],
      11: [1,1,0],
      12: [1,1,1],
      13: [1,1,1],
      14: [2,1,1,0],
      15: [2,1,1,1],
      16: [2,2,1,1],
      17: [2,2,2,1],
      18: [3,2,2,1],
      19: [3,3,3,2],
      20: [3,3,3,3],
    },
  },
  "Adepte": {
    carac: "sag",
    domaine: false,
    progression: {
      1:  [3,1],
      2:  [3,1],
      3:  [3,2],
      4:  [3,2,0],
      5:  [3,2,1],
      6:  [3,2,1],
      7:  [3,3,2],
      8:  [3,3,2,0],
      9:  [3,3,2,1],
      10: [3,3,2,1],
      11: [3,3,3,2],
      12: [3,3,3,2,0],
      13: [3,3,3,2,1],
      14: [3,3,3,2,1],
      15: [3,3,3,3,2],
      16: [3,3,3,3,2,0],
      17: [3,3,3,3,2,1],
      18: [3,3,3,3,2,1],
      19: [3,3,3,3,3,2],
      20: [3,3,3,3,3,2],
    },
  },
};

// ─── SORTS BONUS PAR MODIFICATEUR DE CARACTÉRISTIQUE ─────────────────
// mod 1 → +1 sort de niv 1, mod 2 → +1 sort de niv 1 et +1 niv 2, etc.
export function calculerSortsBonus(modCarac) {
  if (!modCarac || modCarac < 1) return [];
  const bonus = [];
  for (let niv = 1; niv <= 9; niv++) {
    bonus[niv] = modCarac >= niv ? 1 + Math.floor((modCarac - niv) / 4) : 0;
  }
  bonus[0] = 0; // Pas de bonus pour les tours de magie
  return bonus;
}

// ─── CALCUL DES EMPLACEMENTS TOTAUX ──────────────────────────────────
/**
 * Calcule les emplacements de sorts par jour pour une classe/niveau/carac
 * @param {string} classe
 * @param {number} niveau
 * @param {number|null} modCarac - Modificateur de la caractéristique de lancement
 * @returns {Array<{niveau: number, base: number, bonus: number, domaine: number, total: number}>|null}
 */
export function calculerEmplacementsSorts(classe, niveau, modCarac) {
  const config = EMPLACEMENTS_SORTS[classe];
  if (!config) return null;

  const niv = typeof niveau === "number" ? niveau : 0;
  if (niv < 1) return null;
  if (config.niveauMin && niv < config.niveauMin) return null;

  const progression = config.progression[niv];
  if (!progression) return null;

  const bonus = calculerSortsBonus(modCarac ?? 0);
  const aDomaine = config.domaine === true;

  return progression.map((base, nivSort) => ({
    niveau: nivSort + (config.niveauMin && classe !== "Adepte" ? 1 : 0),
    base,
    bonus: bonus[nivSort + (config.niveauMin && classe !== "Adepte" ? 1 : 0)] || 0,
    domaine: (aDomaine && nivSort > 0) ? 1 : 0,
    total: base + (bonus[nivSort + (config.niveauMin && classe !== "Adepte" ? 1 : 0)] || 0) + ((aDomaine && nivSort > 0) ? 1 : 0),
  }));
}

// ─── LISTE REPRÉSENTATIVE DES SORTS COURANTS ─────────────────────────
/**
 * Sorts les plus utilisés par classe et niveau de sort.
 * Format : { classe: { nivSort: ["Nom du sort", ...] } }
 */
export const SORTS_COURANTS = {
  "Prêtre": {
    0: ["Assistance divine", "Création d'eau", "Détection de la magie", "Lumière", "Réparation", "Résistance", "Stabilisation"],
    1: ["Bénédiction", "Bouclier de la foi", "Injonction", "Protection contre le Mal", "Regain d'assurance", "Sanctuaire", "Soins légers"],
    2: ["Aide", "Arme spirituelle", "Endurance de l'ours", "Immobilisation de personne", "Restauration partielle", "Silence", "Soins modérés", "Zone de vérité"],
    3: ["Dissipation de la magie", "Lumière du jour", "Panoplie magique", "Prière", "Protection contre les énergies destructives", "Soins importants"],
    4: ["Contrôle de l'eau", "Guérison de la cécité/surdité", "Liberté de mouvement", "Neutralisation du poison", "Protection contre la mort", "Soins intensifs"],
    5: ["Colonne de flamme", "Communion", "Rappel à la vie", "Résistance aux sorts", "Soins suprêmes", "Force du juste"],
    6: ["Barrière de lames", "Guérison suprême", "Mot de rappel", "Résurrection partielle", "Dissipation suprême"],
    7: ["Blasphème", "Mot sacré", "Régénération", "Résurrection", "Restauration suprême"],
    8: ["Aura sacrée", "Tempête de feu", "Zone d'antimagie"],
    9: ["Guérison de groupe", "Miracle", "Résurrection suprême"],
  },
  "Magicien": {
    0: ["Aspersion acide", "Détection de la magie", "Hébétement", "Lumière", "Lecture de la magie", "Prestidigitation", "Rayon de givre"],
    1: ["Armure de mage", "Bouclier", "Charme-personne", "Graisse", "Image silencieuse", "Missile magique", "Projectile magique", "Sommeil"],
    2: ["Détection de l'invisibilité", "Flèche acide", "Flou", "Image miroir", "Invisibilité", "Lévitation", "Pattes d'araignée", "Toile d'araignée"],
    3: ["Boule de feu", "Dissipation de la magie", "Éclair", "Hâte", "Lenteur", "Protection contre les énergies destructives", "Vol"],
    4: ["Brouillard dense", "Confusion", "Invisibilité suprême", "Mur de feu", "Peau de pierre", "Porte dimensionnelle", "Tempête de grêle"],
    5: ["Cône de froid", "Domination de personne", "Mur de force", "Nuage mortel", "Télékinésie", "Téléportation"],
    6: ["Chaîne d'éclairs", "Désintégration", "Dissipation suprême", "Globe d'invulnérabilité", "Suggestion de masse"],
    7: ["Doigt de mort", "Mot de pouvoir (étourdissement)", "Changement de plan", "Téléportation suprême"],
    8: ["Esprit impénétrable", "Mot de pouvoir (étourdissement)", "Clone", "Labyrinthe"],
    9: ["Arrêt du temps", "Mot de pouvoir (mort)", "Portail", "Souhait"],
  },
  "Ensorceleur": {
    0: ["Aspersion acide", "Détection de la magie", "Hébétement", "Lumière", "Prestidigitation", "Rayon de givre"],
    1: ["Armure de mage", "Charme-personne", "Graisse", "Missile magique", "Sommeil"],
    2: ["Flèche acide", "Image miroir", "Invisibilité", "Pattes d'araignée", "Toile d'araignée"],
    3: ["Boule de feu", "Dissipation de la magie", "Hâte", "Vol"],
    4: ["Confusion", "Invisibilité suprême", "Porte dimensionnelle", "Tempête de grêle"],
    5: ["Cône de froid", "Domination de personne", "Téléportation"],
    6: ["Chaîne d'éclairs", "Désintégration", "Suggestion de masse"],
    7: ["Doigt de mort", "Téléportation suprême"],
    8: ["Esprit impénétrable", "Labyrinthe"],
    9: ["Arrêt du temps", "Souhait"],
  },
  "Druide": {
    0: ["Assistance divine", "Création d'eau", "Détection de la magie", "Lumière", "Réparation", "Résistance"],
    1: ["Baie nourricière", "Brume de dissimulation", "Charme-animal", "Enchevêtrement", "Flamme", "Soins légers"],
    2: ["Endurance de l'ours", "Flamme éternelle", "Forme d'arbre", "Peau d'écorce", "Restauration partielle"],
    3: ["Appel de la foudre", "Dissipation de la magie", "Croissance végétale", "Soins importants"],
    4: ["Colonne de flamme", "Contrôle de l'eau", "Liberté de mouvement", "Soins intensifs"],
    5: ["Communion avec la nature", "Mur d'épines", "Soins suprêmes", "Rappel à la vie"],
  },
  "Barde": {
    0: ["Détection de la magie", "Hébétement", "Lumière", "Message", "Prestidigitation", "Son imaginaire"],
    1: ["Charme-personne", "Déguisement", "Graisse", "Hypnose", "Soins légers", "Sommeil"],
    2: ["Apaisement des émotions", "Détection de l'invisibilité", "Héroïsme", "Invisibilité", "Silence", "Suggestion"],
    3: ["Charme-monstre", "Confusion", "Dissipation de la magie", "Hâte", "Terreur"],
    4: ["Domination de personne", "Invisibilité suprême", "Liberté de mouvement", "Porte dimensionnelle"],
    5: ["Guérison suprême", "Héroïsme suprême", "Mot de rappel", "Suggestion de masse"],
    6: ["Animation d'objets", "Projet d'image", "Suggestion de masse"],
  },
  "Paladin": {
    1: ["Bénédiction d'arme", "Bouclier de la foi", "Faveur divine", "Protection contre le Mal", "Soins légers"],
    2: ["Arme magique suprême", "Endurance de l'ours", "Force de taureau", "Résistance aux énergies destructives"],
    3: ["Dissipation de la magie", "Guérison de la cécité/surdité", "Panoplie magique", "Prière"],
    4: ["Liberté de mouvement", "Neutralisation du poison", "Restauration"],
  },
  "Rôdeur": {
    1: ["Alarme", "Enchevêtrement", "Passage sans trace", "Résistance aux énergies destructives", "Soins légers"],
    2: ["Endurance de l'ours", "Peau d'écorce", "Protection contre les énergies destructives", "Vent de murmures"],
    3: ["Dissipation de la magie", "Neutralisation du poison", "Soins modérés"],
    4: ["Communion avec la nature", "Liberté de mouvement", "Soins importants"],
  },
  "Adepte": {
    0: ["Assistance divine", "Création d'eau", "Détection de la magie", "Lumière", "Réparation"],
    1: ["Bénédiction", "Brûlure des mains", "Injonction", "Protection contre le Mal", "Soins légers"],
    2: ["Aide", "Image miroir", "Invisibilité", "Résistance aux énergies destructives", "Toile d'araignée"],
    3: ["Animation des morts", "Dissipation de la magie", "Éclair", "Soins importants"],
    4: ["Mur de feu", "Métamorphose", "Restauration", "Soins intensifs"],
    5: ["Communion", "Mur de pierre", "Rappel à la vie", "Soins suprêmes"],
  },
};

// ─── NOMS DES NIVEAUX DE SORT ────────────────────────────────────────
export const NOMS_NIVEAUX_SORTS = [
  "Tours de magie / Oraisons",
  "Niveau 1", "Niveau 2", "Niveau 3", "Niveau 4", "Niveau 5",
  "Niveau 6", "Niveau 7", "Niveau 8", "Niveau 9",
];

/**
 * Vérifie si une classe est une classe de lanceur de sorts
 */
export function estLanceurDeSorts(classe) {
  return !!EMPLACEMENTS_SORTS[classe];
}
