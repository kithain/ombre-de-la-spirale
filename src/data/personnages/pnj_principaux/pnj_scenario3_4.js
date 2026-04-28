/**
 * PNJ Scénarios 3-4 : La Chute de Valombre & Le Labyrinthe Vivant
 * Personnages liés à la Spirale et aux dimensions extérieures
 */

export const pnjScenario3_4Raw = [
  {
    id: "marchand_fou_mercane",
    nom: "Le Marchand Fou (Mercane exilé)",
    classe: null,
    niveau: null,
    taille: "Grand",
    type: "Extérieur (Extraplanaire)",
    alignement: "LN",
    fp: 5,
    environnement: "Spirale – Couloirs de Chair",
    organisation: "Solitaire",
    ini: "+2",
    sens: "Vision dans le noir 18 m, Détection +10",
    ca: { total: 15, contact: 12, pris_au_depourvu: 13 },
    pv: 26,
    dv: "4d8+8",
    js: { vig: "+3", ref: "+6", vol: "+8" },
    vit: "9 m (6 c.)",
    attaque: "Dague +3 corps à corps (1d6)",
    att_outrance: "Dague +3 corps à corps (1d6)",
    espace: "3 m",
    allonge: "3 m",
    att_spe: [],
    qual_spe: [
      "Résistance à la magie 25",
      "Télépathie 30 m",
      "Pouvoirs magiques (NLS 9) : porte dimensionnelle 3/j, invisibilité (personnel) à volonté, détection de la magie à volonté",
      "Coffre secret (Mag) : comme coffre secret de Léomund",
    ],
    carac: { for: 11, dex: 14, con: 14, int: 20, sag: 15, cha: 16 },
    competences:
      "Estimation +17, Bluff +10, Diplomatie +10, Intimidation +10, Psychologie +9, Connaissance (plans) +12",
    dons: "Vigilance, Talent (Estimation)",
    tactiques:
      "Négocie d'abord, se rend invisible si menacé, tente la fuite dimensionnelle. Vend information contre vitalité.",
    bonus_actifs: [],
    butin: "Trousse de marchandises exotiques, anneau de discrétion mineure",
    disposition: "neutre",
    est_ennemi: false,
    role: "Marchand opportuniste, prêt à des marchés étranges.",
    meta_mj: {
      reference_livre: "Manuel des Monstres II p.152",
      contexte_scenario:
        "Acte 4 : apparait en négociateur instable dans les couloirs de la Spirale, prêt à sacrifier des objets contre des informations.",
    },
    fiche_combat: {
      sorts: [
        {
          nom: "Porte dimensionnelle (Mag)",
          details: "3/j pour s'échapper ou faire traverser un allié.",
        },
        {
          nom: "Invisibilité (Mag)",
          details: "À volonté, personnel uniquement.",
        },
      ],
      actions_spe: [
        {
          nom: "Coffre secret",
          details:
            "Stocke ses marchandises dans un coffre extradimensionnel, invoque à volonté.",
        },
      ],
      dons_tactiques: [
        {
          nom: "Vigilance",
          details: "Repère les mensonges et les embuscades.",
        },
        {
          nom: "Talent (Estimation)",
          details: "Expert en évaluation d'objets magiques et précieux.",
        },
      ],
      resume_tactique:
        "Négocie, propose des deals, puis se rend invisible ou franchit une porte dimensionnelle si la situation tourne au combat.",
    },
    ogas: {
      occupation:
        "Erre dans les Couloirs de Chair de la Spirale en cherchant une sortie",
      objectif: "Échapper à la Spirale et retrouver la liberté, quitte à faire des marchés étranges",
      attitude: "Opportuniste et instable, prêt à négocier mais méfiant",
      enjeu:
        "Risque de rester piégé éternellement dans la Spirale ; peut obtenir sa liberté par un marché",
    },
    quetesAnnexes: [
      {
        id: "mercane_coffre",
        titre: "Le Coffre Perdu du Mercane",
        description: "Le Marchand Fou a perdu l'accès à son coffre secret extradimensionnel quelque part dans les Couloirs de Chair. Il offre des objets magiques en échange de sa récupération.",
        statut: "disponible",
        recompenses: "400 XP, 1 objet magique au choix (valeur ≤ 2000 po), Faveur du Mercane",
        conditions: "Avoir négocié avec le Marchand Fou sans hostilité",
        difficulte: "Difficile",
        scenario: 3,
      },
    ],
  },
  {
    id: "lysa_exploratrice_perdue",
    nom: "Lysa, exploratrice perdue",
    classe: "Roublard",
    niveau: 4,
    taille: "Moyen",
    type: "Humanoïde (humain)",
    alignement: "NB",
    fp: 4,
    environnement: "Spirale – Premier cercle",
    organisation: "Solitaire (survivante)",
    ini: "+3",
    sens: "Détection +7",
    ca: { total: 17, contact: 13, pris_au_depourvu: 14 },
    pv: 22,
    dv: "4d6+8",
    js: { vig: "+3", ref: "+7", vol: "+1" },
    vit: "9 m",
    attaque: "épée courte +6 (1d6+1)",
    att_outrance: "épée courte +6 (1d6+1)",
    espace: "1,5 m",
    allonge: "1,5 m",
    att_spe: ["Attaque sournoise +2d6"],
    qual_spe: [
      "Évasion",
      "Esquive instinctive",
      "Recherche des pièges",
    ],
    carac: { for: 12, dex: 17, con: 14, int: 12, sag: 10, cha: 10 },
    competences:
      "Discrétion +10, Détection +7, Survie +5, Acrobaties +10, Déplacement silencieux +10",
    dons:
      "Arme de prédilection (épée courte), Science de l'initiative, Esquive",
    tactiques:
      "Observe avant d'agir ; coopère si on partage eau/soins. Évite le combat direct, cherche les issues.",
    butin: "Carte déformée de la Spirale, rations maigres",
    disposition: "neutre",
    est_ennemi: false,
    role: "Guide de circonstance, possible alliée ou romance survie.",
    meta_mj: {
      reference_livre:
        "Bestiaire : 'Lysa, exploratrice perdue' (Spirale – Premier cercle)",
      contexte_scenario:
        "Acte 3 : guide les PJ puis doit se défendre contre des chasseurs. Préfère éviter le combat direct.",
    },
    fiche_combat: {
      sorts: [],
      actions_spe: [
        {
          nom: "Attaque sournoise",
          details:
            "+2d6 quand elle frappe depuis la cachette ou après une évasion.",
        },
      ],
      dons_tactiques: [
        {
          nom: "Tir de précision",
          details: "Finit les créatures blessées à distance.",
        },
        {
          nom: "Esquive",
          details: "Reste hors de portée avec des déplacements précis.",
        },
      ],
      resume_tactique:
        "Observe d'abord, coopère quand on partage ressources, puis frappe en retrait en visant les ouvertures ; fuit si la situation dégénère.",
    },
    ogas: {
      occupation:
        "Survit dans le Premier cercle de la Spirale en cherchant une sortie",
      objectif: "Échapper à la Spirale et retrouver la surface",
      attitude:
        "Méfiante mais prête à coopérer si on partage ressources et informations",
      enjeu:
        "Risque de mourir de faim ou d'être tuée par les créatures ; peut s'échapper avec l'aide des PJ",
    },
    quetesAnnexes: [
      {
        id: "lysa_carte",
        titre: "La Carte de la Spirale",
        description: "Lysa possède une carte déformée du Premier cercle de la Spirale. Elle accepte de la partager si les PJ l'aident à retrouver son équipement perdu dans une grotte piégée.",
        statut: "disponible",
        recompenses: "250 XP, Carte du Premier cercle (avantage navigation), Épée courte +1",
        conditions: "Avoir partagé des rations ou des soins avec Lysa",
        difficulte: "Moyenne",
        scenario: 3,
      },
      {
        id: "lysa_compagnons",
        titre: "Les Compagnons Perdus",
        description: "Lysa cherche les membres de son groupe d'exploration, disparus plus profondément dans la Spirale. Elle croit que certains sont encore vivants.",
        statut: "disponible",
        recompenses: "350 XP, Alliance permanente de Lysa, Informations sur le Deuxième cercle",
        conditions: "Avoir terminé 'La Carte de la Spirale'",
        difficulte: "Difficile",
        scenario: 4,
      },
    ],
  },
  {
    id: "zelekhut",
    nom: "Zelekhut",
    classe: null,
    niveau: null,
    taille: "Grand",
    type: "Extérieur (Extraplanaire, Loi)",
    alignement: "LN",
    fp: 9,
    environnement: "Plan Mécanicus, Spirale – Salle des Engrenages",
    organisation: "Solitaire",
    ini: "+0",
    sens:
      "Vision dans le noir 18 m, vision lucide, détection du chaos/mensonge",
    ca: { total: 24, contact: 10, pris_au_depourvu: 24 },
    pv: 66,
    dv: "8d8+32",
    js: { vig: "+10", ref: "+6", vol: "+7" },
    vit: "15 m (10 c.), vol 18 m (moyenne)",
    attaque: "Chaîne +13 corps à corps (2d6+7 plus paralysie)",
    att_outrance: "2 chaînes +13 corps à corps (2d6+7 plus paralysie)",
    espace: "3 m",
    allonge: "3 m",
    att_spe: ["Paralysie (Sur) : Vig DD 18 ou paralysé 1d6+2 minutes"],
    qual_spe: [
      "RD 10/chaotique",
      "Régénération 5 (chaotique)",
      "Résistance à la magie 20",
      "Vision lucide permanente",
      "Immunité : poison, maladie",
    ],
    carac: { for: 25, dex: 10, con: 19, int: 10, sag: 13, cha: 14 },
    competences:
      "Détection +12, Perception auditive +12, Psychologie +12, Fouille +11, Survie +12",
    dons: "Attaque en vol, Vigilance, Arme de prédilection (chaîne)",
    tactiques:
      "Neutralise les fuyards et les parjures, négocie si preuve de l'anomalie de Thade ; peut basculer d'allié à ennemi.",
    butin: "Clé de recalibrage, noyau d'énergie régulé.",
    disposition: "neutre",
    est_ennemi: false,
    role: "Gardien neutre des mécanismes de la Spirale, potentiel allié si convaincu.",
    meta_mj: {
      reference_livre: "Manuel des Monstres p.160",
      contexte_scenario:
        "Acte 4 : surveille l'accès mécanique de la Spirale. Utilise ses chaînes paralysantes pour neutraliser les intrus.",
    },
    fiche_combat: {
      sorts: [],
      actions_spe: [
        {
          nom: "Paralysie",
          details:
            "Vig DD 18 ou paralysé 1d6+2 minutes ; priorise les fuyards.",
        },
      ],
      dons_tactiques: [
        {
          nom: "Attaque en vol",
          details: "Fond sur les cibles et remonte après avoir frappé.",
        },
        {
          nom: "Vigilance",
          details: "Détecte les intrus avant qu'ils ne puissent fuir.",
        },
      ],
      resume_tactique:
        "Vole au-dessus des intrus, frappe avec ses chaînes pour paralyser, puis interroge. Peut négocier si on prouve que Thade viole les lois cosmiques.",
    },
    ogas: {
      occupation:
        "Surveille et maintient les mécanismes de la Salle des Engrenages",
      objectif: "Préserver l'ordre et l'équilibre de la Spirale selon les lois cosmiques",
      attitude:
        "Neutre et méthodique, peut devenir allié si on prouve que Thade viole les lois",
      enjeu:
        "Risque de voir la Spirale corrompue par le chaos ; peut restaurer l'équilibre cosmique",
    },
  },
];
