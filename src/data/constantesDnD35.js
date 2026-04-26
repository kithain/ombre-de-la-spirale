/**
 * Constantes officielles D&D 3.5 (SRD / PHB / DMG / MM)
 * Sources : regles-donjons-dragons.com, ahriman.fr/dnd
 *
 * Utilisées pour les menus déroulants de l'éditeur de personnages.
 */

// ─── CLASSES ─────────────────────────────────────────────────────────
/** Classes de base (PHB) */
export const CLASSES_BASE = [
  "Barbare",
  "Barde",
  "Druide",
  "Ensorceleur",
  "Guerrier",
  "Magicien",
  "Moine",
  "Paladin",
  "Prêtre",
  "Rôdeur",
  "Roublard",
];

/** Classes de PNJ (DMG) */
export const CLASSES_PNJ = [
  "Adepte",
  "Aristocrate",
  "Expert",
  "Homme d'armes",
  "Roturier",
];

/** Classes de prestige courantes (DMG + suppléments) */
export const CLASSES_PRESTIGE = [
  "Archer-mage",
  "Assassin",
  "Champion occultiste",
  "Chevalier noir",
  "Disciple draconique",
  "Duelliste",
  "Gardien du savoir",
  "Hiérophante",
  "Maître des ombres",
  "Mystificateur profane",
  "Théurge mystique",
];

/** Toutes les classes, regroupées par catégorie pour les menus */
export const CLASSES_TOUTES = [
  { groupe: "Classes de base", options: CLASSES_BASE },
  { groupe: "Classes de PNJ", options: CLASSES_PNJ },
  { groupe: "Classes de prestige", options: CLASSES_PRESTIGE },
];

/** Liste plate pour la validation */
export const CLASSES_LISTE_PLATE = [
  ...CLASSES_BASE,
  ...CLASSES_PNJ,
  ...CLASSES_PRESTIGE,
];

// ─── TYPES DE CRÉATURES ──────────────────────────────────────────────
/** Types officiels (MM / SRD) */
export const TYPES_CREATURE = [
  "Aberration",
  "Animal",
  "Créature artificielle",
  "Créature magique",
  "Dragon",
  "Élémentaire",
  "Esprit (Incorporel)",
  "Extérieur",
  "Fée",
  "Géant",
  "Humanoïde",
  "Humanoïde monstrueux",
  "Mort-vivant",
  "Plante",
  "Vase",
  "Vermine",
];

/** Sous-types officiels (MM / SRD) */
export const SOUS_TYPES_CREATURE = [
  "Air",
  "Altéré",
  "Ange",
  "Aquatique",
  "Archon",
  "Bien",
  "Chaos",
  "Démon",
  "Diable",
  "Eau",
  "Elfe",
  "Extraplanaire",
  "Feu",
  "Froid",
  "Gobelinoïde",
  "Humain",
  "Incorporel",
  "Intangible",
  "Loi",
  "Mal",
  "Métamorphe",
  "Nain",
  "Natif",
  "Nuée",
  "Orque",
  "Reptilien",
  "Terre",
];

// ─── ALIGNEMENTS ─────────────────────────────────────────────────────
export const ALIGNEMENTS = [
  { code: "LB", label: "Loyal Bon" },
  { code: "NB", label: "Neutre Bon" },
  { code: "CB", label: "Chaotique Bon" },
  { code: "LN", label: "Loyal Neutre" },
  { code: "N", label: "Neutre" },
  { code: "CN", label: "Chaotique Neutre" },
  { code: "LM", label: "Loyal Mauvais" },
  { code: "NM", label: "Neutre Mauvais" },
  { code: "CM", label: "Chaotique Mauvais" },
];

export const CODES_ALIGNEMENTS = ALIGNEMENTS.map((a) => a.code);

// ─── TAILLES ─────────────────────────────────────────────────────────
export const TAILLES = [
  { code: "I", label: "Infime", modificateur: 8, espace: "0,15 m" },
  { code: "Min", label: "Minuscule", modificateur: 4, espace: "0,30 m" },
  { code: "TP", label: "Très petit", modificateur: 2, espace: "0,75 m" },
  { code: "P", label: "Petit", modificateur: 1, espace: "1,5 m" },
  { code: "M", label: "Moyen", modificateur: 0, espace: "1,5 m" },
  { code: "G", label: "Grand", modificateur: -1, espace: "3 m" },
  { code: "TG", label: "Très grand", modificateur: -2, espace: "4,5 m" },
  { code: "Gig", label: "Gigantesque", modificateur: -4, espace: "6 m" },
  { code: "C", label: "Colossal", modificateur: -8, espace: "9 m" },
];

export const LABELS_TAILLES = TAILLES.map((t) => t.label);

// ─── COMPÉTENCES ─────────────────────────────────────────────────────
/** Liste officielle des compétences (PHB / SRD) avec caractéristique associée */
export const COMPETENCES = [
  { nom: "Acrobaties", carac: "Dex", formation: true },
  { nom: "Art de la magie", carac: "Int", formation: true },
  { nom: "Artisanat", carac: "Int", formation: false },
  { nom: "Bluff", carac: "Cha", formation: false },
  { nom: "Concentration", carac: "Con", formation: false },
  { nom: "Connaissance (arcanes)", carac: "Int", formation: true },
  { nom: "Connaissance (architecture)", carac: "Int", formation: true },
  { nom: "Connaissance (géographie)", carac: "Int", formation: true },
  { nom: "Connaissance (histoire)", carac: "Int", formation: true },
  { nom: "Connaissance (mystères)", carac: "Int", formation: true },
  { nom: "Connaissance (nature)", carac: "Int", formation: true },
  { nom: "Connaissance (noblesse)", carac: "Int", formation: true },
  { nom: "Connaissance (plans)", carac: "Int", formation: true },
  { nom: "Connaissance (religion)", carac: "Int", formation: true },
  { nom: "Contrefaçon", carac: "Int", formation: false },
  { nom: "Crochetage", carac: "Dex", formation: true },
  { nom: "Décryptage", carac: "Int", formation: true },
  { nom: "Déguisement", carac: "Cha", formation: false },
  { nom: "Déplacement silencieux", carac: "Dex", formation: false },
  { nom: "Désamorçage/sabotage", carac: "Int", formation: true },
  { nom: "Détection", carac: "Sag", formation: false },
  { nom: "Diplomatie", carac: "Cha", formation: false },
  { nom: "Discrétion", carac: "Dex", formation: false },
  { nom: "Dressage", carac: "Cha", formation: true },
  { nom: "Équilibre", carac: "Dex", formation: false },
  { nom: "Équitation", carac: "Dex", formation: false },
  { nom: "Escalade", carac: "For", formation: false },
  { nom: "Escamotage", carac: "Dex", formation: true },
  { nom: "Estimation", carac: "Int", formation: false },
  { nom: "Évasion", carac: "Dex", formation: false },
  { nom: "Fouille", carac: "Int", formation: false },
  { nom: "Intimidation", carac: "Cha", formation: false },
  { nom: "Langue", carac: "Aucune", formation: true },
  { nom: "Maîtrise des cordes", carac: "Dex", formation: false },
  { nom: "Natation", carac: "For", formation: false },
  { nom: "Perception auditive", carac: "Sag", formation: false },
  { nom: "Premiers secours", carac: "Sag", formation: false },
  { nom: "Profession", carac: "Sag", formation: true },
  { nom: "Psychologie", carac: "Sag", formation: false },
  { nom: "Renseignements", carac: "Cha", formation: false },
  { nom: "Représentation", carac: "Cha", formation: false },
  { nom: "Saut", carac: "For", formation: false },
  { nom: "Survie", carac: "Sag", formation: false },
  { nom: "Utilisation d'objets magiques", carac: "Cha", formation: true },
];

export const NOMS_COMPETENCES = COMPETENCES.map((c) => c.nom);

// ─── DONS ────────────────────────────────────────────────────────────
/** Dons généraux officiels (PHB / SRD) */
export const DONS_GENERAUX = [
  "Affinité magique",
  "Amélioration des créatures convoquées",
  "Arme de prédilection",
  "Arme de prédilection supérieure",
  "Arme en main",
  "Athlétisme",
  "Attaque éclair",
  "Attaque en finesse",
  "Attaque en puissance",
  "Attaque en rotation",
  "Attaque au galop",
  "Attaques réflexes",
  "Autonome",
  "Charge dévastatrice",
  "Combat à deux armes",
  "Combat en aveugle",
  "Combat monté",
  "Coup étourdissant",
  "Course",
  "Défense à deux armes",
  "Discret",
  "Dispense de composants matériels",
  "Doigts de fée",
  "Dur à cuire",
  "École renforcée",
  "École supérieure",
  "Efficacité des sorts accrue",
  "Efficacité des sorts supérieure",
  "Emprise sur les morts-vivants",
  "Enchaînement",
  "Endurance",
  "Esquive",
  "Expertise du combat",
  "Feu nourri",
  "Fin limier",
  "Fourberie",
  "Fraternité animale",
  "Funambule",
  "Incantation animale",
  "Interception de projectile",
  "Magie de guerre",
  "Maîtrise des sorts",
  "Maîtrise du combat à deux armes",
  "Maniement d'une arme de guerre",
  "Maniement d'une arme exotique",
  "Maniement des armes courantes",
  "Maniement des boucliers",
  "Maniement du pavois",
  "Méticuleux",
  "Négociation",
  "Parade de projectiles",
  "Persuasion",
  "Piétinement",
  "Pistage",
  "Port des armures légères",
  "Port des armures intermédiaires",
  "Port des armures lourdes",
  "Prestige",
  "Rechargement rapide",
  "Réflexes surhumains",
  "Robustesse",
  "Savoir-faire mécanique",
  "Science de l'initiative",
  "Science de la bousculade",
  "Science de la destruction",
  "Science de la feinte",
  "Science de la lutte",
  "Science du combat à deux armes",
  "Science du combat à mains nues",
  "Science du contresort",
  "Science du coup de bouclier",
  "Science du croc-en-jambe",
  "Science du critique",
  "Science du désarmement",
  "Science du renvoi",
  "Science du renversement",
  "Science du tir de précision",
  "Souplesse du serpent",
  "Spécialisation martiale",
  "Spécialisation martiale supérieure",
  "Succession d'enchaînements",
  "Talent",
  "Tir à bout portant",
  "Tir de loin",
  "Tir de précision",
  "Tir en mouvement",
  "Tir monté",
  "Tir rapide",
  "Vigilance",
  "Vigueur surhumaine",
  "Volonté de fer",
  "Voltigeur",
];

/** Dons de métamagie (PHB / SRD) */
export const DONS_METAMAGIE = [
  "Extension de durée",
  "Extension de portée",
  "Incantation rapide",
  "Incantation silencieuse",
  "Incantation statique",
  "Quintessence des sorts",
  "Sort étendu",
  "Sort intensifié",
  "Sort renforcé",
];

/** Dons de création d'objets (PHB / SRD) */
export const DONS_CREATION = [
  "Création d'armes et armures magiques",
  "Création d'anneaux magiques",
  "Création d'objets merveilleux",
  "Création de baguettes magiques",
  "Création de bâtons magiques",
  "Création de sceptres magiques",
  "Écriture de parchemins",
  "Préparation de potions",
];

/** Tous les dons, regroupés */
export const DONS_TOUS = [
  { groupe: "Dons généraux", options: DONS_GENERAUX },
  { groupe: "Dons de métamagie", options: DONS_METAMAGIE },
  { groupe: "Dons de création d'objets", options: DONS_CREATION },
];

/** Liste plate pour validation */
export const DONS_LISTE_PLATE = [
  ...DONS_GENERAUX,
  ...DONS_METAMAGIE,
  ...DONS_CREATION,
];

// ─── SENS & PERCEPTIONS ──────────────────────────────────────────────
export const SENS = [
  "Odorat",
  "Odorat surdéveloppé",
  "Perception aveugle",
  "Perception des vibrations",
  "Vision dans le noir 18 m",
  "Vision dans le noir 36 m",
  "Vision dans le noir 72 m",
  "Vision nocturne",
  "Vision à 360°",
];

// ─── DISPOSITIONS ────────────────────────────────────────────────────
export const DISPOSITIONS = [
  { code: "hostile", label: "Hostile" },
  { code: "inamical", label: "Inamical" },
  { code: "neutre", label: "Neutre" },
  { code: "amical", label: "Amical" },
  { code: "serviable", label: "Serviable" },
];

export const CODES_DISPOSITIONS = DISPOSITIONS.map((d) => d.code);

// ─── VITESSES DE DÉPLACEMENT ─────────────────────────────────────────
export const VITESSES = [
  "1,5 m",
  "3 m",
  "4,5 m",
  "6 m",
  "6 m (armure)",
  "9 m",
  "9 m (armure)",
  "12 m",
  "15 m",
  "18 m",
  "Vol 9 m (parfaite)",
  "Vol 9 m (bonne)",
  "Vol 9 m (moyenne)",
  "Vol 12 m (parfaite)",
  "Vol 12 m (bonne)",
  "Vol 12 m (moyenne)",
  "Vol 18 m (bonne)",
  "Vol 18 m (moyenne)",
  "Vol 18 m (médiocre)",
  "Nage 9 m",
  "Nage 18 m",
  "Fouissement 6 m",
  "Fouissement 9 m",
];

// ─── ESPACES / ALLONGES ──────────────────────────────────────────────
export const ESPACES = [
  "0,15 m",
  "0,30 m",
  "0,75 m",
  "1,5 m",
  "3 m",
  "4,5 m",
  "9 m",
  "18 m",
];

export const ALLONGES = [
  "0 m",
  "1,5 m",
  "3 m",
  "4,5 m",
  "6 m",
  "9 m",
];

// ─── VALEURS DE FP ───────────────────────────────────────────────────
export const VALEURS_FP = [
  "1/8", "1/6", "1/4", "1/3", "1/2",
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// ─── BIOMES D&D 3.5 (SRD) ───────────────────────────────────────────
// Organisés par catégorie Climat × Terrain, format groupé pour ComboboxFiltrable
export const BIOMES_DND35 = [
  {
    groupe: "Climat froid",
    options: [
      "Désert froid",
      "Forêt froide",
      "Collines froides",
      "Marais froid",
      "Montagnes froides",
      "Plaines froides",
      "Aquatique froid",
    ],
  },
  {
    groupe: "Climat tempéré",
    options: [
      "Désert tempéré",
      "Forêts tempérées",
      "Collines tempérées",
      "Marais tempérés",
      "Montagnes tempérées",
      "Plaines tempérées",
      "Aquatique tempéré",
    ],
  },
  {
    groupe: "Climat chaud",
    options: [
      "Désert chaud",
      "Forêt chaude",
      "Collines chaudes",
      "Marais chaud",
      "Montagnes chaudes",
      "Plaines chaudes",
      "Aquatique chaud",
    ],
  },
  {
    groupe: "Souterrains",
    options: [
      "Souterrains",
      "Souterrains aquatiques",
      "Aquatique souterrain",
    ],
  },
  {
    groupe: "Plans extérieurs",
    options: [
      "Plans Inférieurs",
      "Plans Chaotiques Mauvais",
      "Plans Loyaux Mauvais",
      "Plans Supérieurs",
      "Plan Astral",
      "Plan Éthéré",
      "Plan Élémentaire de l'Air",
      "Plan Élémentaire de l'Eau",
      "Plan Élémentaire de la Terre",
      "Plan Élémentaire du Feu",
      "Plan de l'Ombre",
      "Plan Mécanicus",
      "Tous plans",
      "Tous plans Inférieurs",
    ],
  },
  {
    groupe: "Universel",
    options: [
      "Tous",
      "Tous climats",
      "Urbain",
    ],
  },
];

/** Liste plate des biomes pour validation */
export const BIOMES_LISTE_PLATE = BIOMES_DND35.flatMap((g) => g.options);

// ─── APTITUDES DE CLASSE PAR NIVEAU (PHB / DMG) ─────────────────────
/**
 * Chaque classe liste ses aptitudes par niveau.
 * { niveau: number, nom: string, type: "qual_spe"|"att_spe" }
 */
export const APTITUDES_CLASSES = {
  "Barbare": [
    { niveau: 1, nom: "Déplacement accéléré", type: "qual_spe" },
    { niveau: 1, nom: "Illettrisme", type: "qual_spe" },
    { niveau: 1, nom: "Rage de berserker 1/jour", type: "att_spe" },
    { niveau: 2, nom: "Esquive instinctive", type: "qual_spe" },
    { niveau: 3, nom: "Sens des pièges +1", type: "qual_spe" },
    { niveau: 4, nom: "Rage de berserker 2/jour", type: "att_spe" },
    { niveau: 5, nom: "Esquive instinctive supérieure", type: "qual_spe" },
    { niveau: 6, nom: "Sens des pièges +2", type: "qual_spe" },
    { niveau: 7, nom: "RD 1/—", type: "qual_spe" },
    { niveau: 8, nom: "Rage de berserker 3/jour", type: "att_spe" },
    { niveau: 9, nom: "Sens des pièges +3", type: "qual_spe" },
    { niveau: 10, nom: "RD 2/—", type: "qual_spe" },
    { niveau: 11, nom: "Rage supérieure", type: "att_spe" },
    { niveau: 12, nom: "Rage de berserker 4/jour", type: "att_spe" },
    { niveau: 12, nom: "Sens des pièges +4", type: "qual_spe" },
    { niveau: 13, nom: "RD 3/—", type: "qual_spe" },
    { niveau: 14, nom: "Volonté indomptable", type: "qual_spe" },
    { niveau: 15, nom: "Sens des pièges +5", type: "qual_spe" },
    { niveau: 16, nom: "Rage de berserker 5/jour", type: "att_spe" },
    { niveau: 16, nom: "RD 4/—", type: "qual_spe" },
    { niveau: 17, nom: "Rage de grand berserker", type: "att_spe" },
    { niveau: 18, nom: "Sens des pièges +6", type: "qual_spe" },
    { niveau: 19, nom: "RD 5/—", type: "qual_spe" },
    { niveau: 20, nom: "Rage de berserker 6/jour", type: "att_spe" },
  ],
  "Barde": [
    { niveau: 1, nom: "Sorts de Barde (NLS {NLS})", type: "att_spe" },
    { niveau: 1, nom: "Savoir bardique", type: "qual_spe" },
    { niveau: 1, nom: "Musique de barde", type: "att_spe" },
    { niveau: 1, nom: "Contre-chant", type: "att_spe" },
    { niveau: 1, nom: "Fascination", type: "att_spe" },
    { niveau: 1, nom: "Inspiration vaillante +1", type: "att_spe" },
    { niveau: 3, nom: "Inspiration talentueuse", type: "att_spe" },
    { niveau: 6, nom: "Suggestion", type: "att_spe" },
    { niveau: 8, nom: "Inspiration vaillante +2", type: "att_spe" },
    { niveau: 9, nom: "Inspiration héroïque", type: "att_spe" },
    { niveau: 12, nom: "Chant de liberté", type: "att_spe" },
    { niveau: 14, nom: "Inspiration vaillante +3", type: "att_spe" },
    { niveau: 15, nom: "Suggestion de groupe", type: "att_spe" },
    { niveau: 18, nom: "Chant de groupe", type: "att_spe" },
    { niveau: 20, nom: "Inspiration vaillante +4", type: "att_spe" },
  ],
  "Druide": [
    { niveau: 1, nom: "Sorts de Druide (NLS {NLS})", type: "att_spe" },
    { niveau: 1, nom: "Compagnon animal", type: "qual_spe" },
    { niveau: 1, nom: "Empathie sauvage", type: "qual_spe" },
    { niveau: 1, nom: "Instinct naturel", type: "qual_spe" },
    { niveau: 2, nom: "Déplacement facilité", type: "qual_spe" },
    { niveau: 3, nom: "Absence de traces", type: "qual_spe" },
    { niveau: 4, nom: "Résistance à l'appel de la nature", type: "qual_spe" },
    { niveau: 5, nom: "Forme animale 1/jour", type: "att_spe" },
    { niveau: 6, nom: "Forme animale 2/jour", type: "att_spe" },
    { niveau: 7, nom: "Forme animale 3/jour", type: "att_spe" },
    { niveau: 9, nom: "Immunité contre les venins", type: "qual_spe" },
    { niveau: 12, nom: "Forme animale (plante)", type: "att_spe" },
    { niveau: 13, nom: "Mille visages", type: "qual_spe" },
    { niveau: 15, nom: "Éternelle jeunesse", type: "qual_spe" },
    { niveau: 16, nom: "Forme animale (élémentaire)", type: "att_spe" },
  ],
  "Ensorceleur": [
    { niveau: 1, nom: "Sorts d'Ensorceleur (NLS {NLS})", type: "att_spe" },
    { niveau: 1, nom: "Familier", type: "qual_spe" },
  ],
  "Guerrier": [
    { niveau: 1, nom: "Don supplémentaire de guerrier (niv 1)", type: "qual_spe" },
    { niveau: 2, nom: "Don supplémentaire de guerrier (niv 2)", type: "qual_spe" },
    { niveau: 4, nom: "Don supplémentaire de guerrier (niv 4)", type: "qual_spe" },
    { niveau: 6, nom: "Don supplémentaire de guerrier (niv 6)", type: "qual_spe" },
    { niveau: 8, nom: "Don supplémentaire de guerrier (niv 8)", type: "qual_spe" },
    { niveau: 10, nom: "Don supplémentaire de guerrier (niv 10)", type: "qual_spe" },
  ],
  "Magicien": [
    { niveau: 1, nom: "Sorts de Magicien (NLS {NLS})", type: "att_spe" },
    { niveau: 1, nom: "Familier", type: "qual_spe" },
    { niveau: 1, nom: "École de magie (spécialisation)", type: "qual_spe" },
    { niveau: 5, nom: "Don supplémentaire de magicien (niv 5)", type: "qual_spe" },
    { niveau: 10, nom: "Don supplémentaire de magicien (niv 10)", type: "qual_spe" },
    { niveau: 15, nom: "Don supplémentaire de magicien (niv 15)", type: "qual_spe" },
    { niveau: 20, nom: "Don supplémentaire de magicien (niv 20)", type: "qual_spe" },
  ],
  "Moine": [
    { niveau: 1, nom: "Déluge de coups", type: "att_spe" },
    { niveau: 1, nom: "Combat à mains nues (1d6)", type: "att_spe" },
    { niveau: 1, nom: "Bonus à la CA (Sagesse)", type: "qual_spe" },
    { niveau: 2, nom: "Esquive totale", type: "qual_spe" },
    { niveau: 3, nom: "Déplacement accéléré (+3 m)", type: "qual_spe" },
    { niveau: 3, nom: "Sérénité", type: "qual_spe" },
    { niveau: 4, nom: "Chute ralentie (6 m)", type: "qual_spe" },
    { niveau: 4, nom: "Combat à mains nues (1d8)", type: "att_spe" },
    { niveau: 5, nom: "Pureté physique (immunité maladies)", type: "qual_spe" },
    { niveau: 7, nom: "Plénitude physique", type: "qual_spe" },
    { niveau: 9, nom: "Esquive totale supérieure", type: "qual_spe" },
    { niveau: 10, nom: "Combat à mains nues (1d10)", type: "att_spe" },
    { niveau: 11, nom: "Corps de diamant (RD 10/magie)", type: "qual_spe" },
    { niveau: 12, nom: "Pas chassé", type: "qual_spe" },
    { niveau: 13, nom: "Âme de diamant (RM)", type: "qual_spe" },
    { niveau: 15, nom: "Paume vibratoire", type: "att_spe" },
    { niveau: 16, nom: "Combat à mains nues (2d6)", type: "att_spe" },
    { niveau: 17, nom: "Éternelle jeunesse", type: "qual_spe" },
    { niveau: 19, nom: "Vide intérieur", type: "qual_spe" },
    { niveau: 20, nom: "Perfection de l'être", type: "qual_spe" },
  ],
  "Paladin": [
    { niveau: 4, nom: "Sorts de Paladin (NLS {NLS-3})", type: "att_spe" },
    { niveau: 1, nom: "Aura de bien", type: "qual_spe" },
    { niveau: 1, nom: "Détection du mal", type: "att_spe" },
    { niveau: 1, nom: "Châtiment du mal 1/jour", type: "att_spe" },
    { niveau: 2, nom: "Grâce divine (+mod Cha aux JS)", type: "qual_spe" },
    { niveau: 2, nom: "Imposition des mains", type: "att_spe" },
    { niveau: 3, nom: "Aura de courage (immunité peur, +4 alliés)", type: "qual_spe" },
    { niveau: 3, nom: "Santé divine (immunité maladies)", type: "qual_spe" },
    { niveau: 4, nom: "Renvoi des morts-vivants", type: "att_spe" },
    { niveau: 5, nom: "Châtiment du mal 2/jour", type: "att_spe" },
    { niveau: 5, nom: "Destrier céleste", type: "qual_spe" },
    { niveau: 6, nom: "Don de guérison 1/semaine", type: "att_spe" },
    { niveau: 10, nom: "Châtiment du mal 3/jour", type: "att_spe" },
    { niveau: 15, nom: "Châtiment du mal 4/jour", type: "att_spe" },
    { niveau: 20, nom: "Châtiment du mal 5/jour", type: "att_spe" },
  ],
  "Prêtre": [
    { niveau: 1, nom: "Renvoi/intimidation des morts-vivants", type: "att_spe" },
    { niveau: 1, nom: "Sorts de Prêtre (NLS {NLS})", type: "att_spe" },
    { niveau: 1, nom: "Domaines divins (×2)", type: "qual_spe" },
    { niveau: 1, nom: "Sorts spontanés (soins/blessures)", type: "qual_spe" },
  ],
  "Rôdeur": [
    { niveau: 4, nom: "Sorts de Rôdeur (NLS {NLS-3})", type: "att_spe" },
    { niveau: 1, nom: "Ennemi juré (×1)", type: "qual_spe" },
    { niveau: 1, nom: "Empathie sauvage", type: "qual_spe" },
    { niveau: 1, nom: "Pistage", type: "qual_spe" },
    { niveau: 2, nom: "Style de combat (deux armes / archerie)", type: "qual_spe" },
    { niveau: 3, nom: "Endurance", type: "qual_spe" },
    { niveau: 4, nom: "Compagnon animal", type: "qual_spe" },
    { niveau: 5, nom: "Ennemi juré (×2)", type: "qual_spe" },
    { niveau: 6, nom: "Style de combat supérieur", type: "qual_spe" },
    { niveau: 7, nom: "Déplacement facilité", type: "qual_spe" },
    { niveau: 8, nom: "Camouflage", type: "qual_spe" },
    { niveau: 9, nom: "Esquive totale", type: "qual_spe" },
    { niveau: 10, nom: "Ennemi juré (×3)", type: "qual_spe" },
    { niveau: 11, nom: "Style de combat maîtrisé", type: "qual_spe" },
    { niveau: 13, nom: "Camouflage supérieur", type: "qual_spe" },
    { niveau: 15, nom: "Ennemi juré (×4)", type: "qual_spe" },
    { niveau: 17, nom: "Invisibilité dans la nature", type: "qual_spe" },
    { niveau: 20, nom: "Ennemi juré (×5)", type: "qual_spe" },
  ],
  "Roublard": [
    { niveau: 1, nom: "Attaque sournoise +1d6", type: "att_spe" },
    { niveau: 1, nom: "Recherche des pièges", type: "qual_spe" },
    { niveau: 2, nom: "Esquive totale", type: "qual_spe" },
    { niveau: 3, nom: "Attaque sournoise +2d6", type: "att_spe" },
    { niveau: 3, nom: "Sens des pièges +1", type: "qual_spe" },
    { niveau: 4, nom: "Esquive instinctive", type: "qual_spe" },
    { niveau: 5, nom: "Attaque sournoise +3d6", type: "att_spe" },
    { niveau: 6, nom: "Sens des pièges +2", type: "qual_spe" },
    { niveau: 7, nom: "Attaque sournoise +4d6", type: "att_spe" },
    { niveau: 8, nom: "Esquive instinctive supérieure", type: "qual_spe" },
    { niveau: 9, nom: "Attaque sournoise +5d6", type: "att_spe" },
    { niveau: 9, nom: "Sens des pièges +3", type: "qual_spe" },
    { niveau: 10, nom: "Aptitude spéciale de roublard", type: "qual_spe" },
    { niveau: 11, nom: "Attaque sournoise +6d6", type: "att_spe" },
    { niveau: 12, nom: "Sens des pièges +4", type: "qual_spe" },
    { niveau: 13, nom: "Attaque sournoise +7d6", type: "att_spe" },
    { niveau: 13, nom: "Aptitude spéciale de roublard", type: "qual_spe" },
    { niveau: 15, nom: "Attaque sournoise +8d6", type: "att_spe" },
    { niveau: 15, nom: "Sens des pièges +5", type: "qual_spe" },
    { niveau: 16, nom: "Aptitude spéciale de roublard", type: "qual_spe" },
    { niveau: 17, nom: "Attaque sournoise +9d6", type: "att_spe" },
    { niveau: 18, nom: "Sens des pièges +6", type: "qual_spe" },
    { niveau: 19, nom: "Attaque sournoise +10d6", type: "att_spe" },
    { niveau: 19, nom: "Aptitude spéciale de roublard", type: "qual_spe" },
  ],
  "Adepte": [
    { niveau: 1, nom: "Sorts d'Adepte (NLS {NLS})", type: "att_spe" },
    { niveau: 2, nom: "Familier", type: "qual_spe" },
  ],
  "Expert": [],
  "Aristocrate": [],
  "Homme d'armes": [],
  "Roturier": [],
};

// ─── TRAITS RACIAUX ──────────────────────────────────────────────────
/**
 * Traits par sous-type racial (utilisé dans le champ "type" du personnage).
 * Chaque trait a un type : "qual_spe" ou "att_spe"
 */
export const TRAITS_RACIAUX = {
  "Humain": [
    { nom: "1 don supplémentaire au niveau 1", type: "qual_spe" },
    { nom: "4 points de compétence supplémentaires au niveau 1", type: "qual_spe" },
    { nom: "1 point de compétence supplémentaire par niveau", type: "qual_spe" },
  ],
  "Elfe": [
    { nom: "Immunité aux sorts et effets de sommeil", type: "qual_spe" },
    { nom: "+2 JS contre enchantement", type: "qual_spe" },
    { nom: "Vision nocturne", type: "qual_spe" },
    { nom: "Maniement des armes elfiques (épée longue, rapière, arc long, arc court)", type: "qual_spe" },
    { nom: "Détection des portes secrètes (passage à 1,5 m : Fouille automatique)", type: "qual_spe" },
  ],
  "Nain": [
    { nom: "Vision dans le noir 18 m", type: "qual_spe" },
    { nom: "+2 JS contre poison", type: "qual_spe" },
    { nom: "+2 JS contre sorts et effets magiques", type: "qual_spe" },
    { nom: "+1 attaque contre orques et gobelinoïdes", type: "att_spe" },
    { nom: "+4 esquive CA contre géants", type: "qual_spe" },
    { nom: "Connaissance de la pierre (+2 Fouille pierres)", type: "qual_spe" },
    { nom: "Stabilité (+4 contre bousculade/croc-en-jambe)", type: "qual_spe" },
  ],
  "Halfelin": [
    { nom: "+2 JS contre la peur", type: "qual_spe" },
    { nom: "+1 aux jets d'attaque avec les armes de jet et les frondes", type: "qual_spe" },
    { nom: "+2 Escalade, Saut, Déplacement silencieux", type: "qual_spe" },
    { nom: "Perception auditive +2", type: "qual_spe" },
  ],
  "Gnome": [
    { nom: "Vision nocturne", type: "qual_spe" },
    { nom: "+2 JS contre illusions", type: "qual_spe" },
    { nom: "+1 DD des sorts d'illusion lancés", type: "qual_spe" },
    { nom: "+1 attaque contre kobolds et gobelinoïdes", type: "att_spe" },
    { nom: "+4 esquive CA contre géants", type: "qual_spe" },
    { nom: "Pouvoirs magiques : communication avec les animaux (fouisseurs) 1/jour", type: "att_spe" },
  ],
  "Demi-elfe": [
    { nom: "Immunité aux sorts et effets de sommeil", type: "qual_spe" },
    { nom: "+2 JS contre enchantement", type: "qual_spe" },
    { nom: "Vision nocturne", type: "qual_spe" },
    { nom: "Sang mêlé (compte comme elfe et humain)", type: "qual_spe" },
  ],
  "Demi-orque": [
    { nom: "Vision dans le noir 18 m", type: "qual_spe" },
    { nom: "Sang mêlé (compte comme orque et humain)", type: "qual_spe" },
  ],
  "Reptilien": [
    { nom: "Vision dans le noir 18 m", type: "qual_spe" },
    { nom: "Sensibilité à la lumière", type: "qual_spe" },
    { nom: "Armure naturelle +1", type: "qual_spe" },
  ],
  "Gobelinoïde": [
    { nom: "Vision dans le noir 18 m", type: "qual_spe" },
  ],
};

// ─── TRAITS PAR TYPE DE CRÉATURE (MM p.290-317 / SRD) ───────────────
/**
 * Traits automatiques accordés par le type de créature.
 * Chaque trait a un type : "qual_spe" (qualité spéciale) ou "att_spe" (attaque spéciale).
 * Ces traits sont inhérents au type et doivent apparaître dans la fiche.
 */
export const TRAITS_TYPES_CREATURE = {
  "Aberration": [
    { nom: "Vision dans le noir 18 m", type: "qual_spe" },
    { nom: "Maniement des armes courantes", type: "qual_spe" },
  ],
  "Animal": [
    { nom: "Vision nocturne", type: "qual_spe" },
    { nom: "Alignement toujours Neutre", type: "qual_spe" },
  ],
  "Créature artificielle": [
    { nom: "Vision dans le noir 18 m", type: "qual_spe" },
    { nom: "Vision nocturne", type: "qual_spe" },
    { nom: "Immunité (poison)", type: "qual_spe" },
    { nom: "Immunité (sommeil)", type: "qual_spe" },
    { nom: "Immunité (paralysie)", type: "qual_spe" },
    { nom: "Immunité (étourdissement)", type: "qual_spe" },
    { nom: "Immunité (maladie)", type: "qual_spe" },
    { nom: "Immunité (effets de mort)", type: "qual_spe" },
    { nom: "Immunité (nécromancie)", type: "qual_spe" },
    { nom: "Immunité (effets mentaux)", type: "qual_spe" },
    { nom: "Immunité (coups critiques)", type: "qual_spe" },
    { nom: "Immunité (dégâts non-létaux)", type: "qual_spe" },
    { nom: "Immunité (affaiblissement de caractéristique)", type: "qual_spe" },
    { nom: "Immunité (drain d'énergie)", type: "qual_spe" },
    { nom: "Immunité (fatigue et épuisement)", type: "qual_spe" },
    { nom: "Ne peut pas être ressuscité ni rappelé à la vie", type: "qual_spe" },
  ],
  "Créature magique": [
    { nom: "Vision dans le noir 18 m", type: "qual_spe" },
    { nom: "Vision nocturne", type: "qual_spe" },
    { nom: "Maniement des armes courantes", type: "qual_spe" },
  ],
  "Dragon": [
    { nom: "Vision dans le noir 18 m", type: "qual_spe" },
    { nom: "Vision nocturne", type: "qual_spe" },
    { nom: "Immunité (sommeil)", type: "qual_spe" },
    { nom: "Immunité (paralysie)", type: "qual_spe" },
    { nom: "Maniement des armes courantes", type: "qual_spe" },
  ],
  "Élémentaire": [
    { nom: "Vision dans le noir 18 m", type: "qual_spe" },
    { nom: "Immunité (poison)", type: "qual_spe" },
    { nom: "Immunité (sommeil)", type: "qual_spe" },
    { nom: "Immunité (paralysie)", type: "qual_spe" },
    { nom: "Immunité (étourdissement)", type: "qual_spe" },
    { nom: "Immunité (coups critiques)", type: "qual_spe" },
    { nom: "Immunité (prise en tenaille)", type: "qual_spe" },
    { nom: "Ne peut pas être ressuscité ni rappelé à la vie", type: "qual_spe" },
  ],
  "Extérieur": [
    { nom: "Vision dans le noir 18 m", type: "qual_spe" },
    { nom: "Maniement des armes courantes", type: "qual_spe" },
  ],
  "Fée": [
    { nom: "Vision nocturne", type: "qual_spe" },
    { nom: "Maniement des armes courantes", type: "qual_spe" },
  ],
  "Géant": [
    { nom: "Vision nocturne", type: "qual_spe" },
    { nom: "Maniement des armes courantes et de guerre", type: "qual_spe" },
  ],
  "Humanoïde": [
    { nom: "Maniement des armes courantes", type: "qual_spe" },
  ],
  "Humanoïde monstrueux": [
    { nom: "Vision dans le noir 18 m", type: "qual_spe" },
    { nom: "Maniement des armes courantes", type: "qual_spe" },
  ],
  "Mort-vivant": [
    { nom: "Vision dans le noir 18 m", type: "qual_spe" },
    { nom: "Immunité (poison)", type: "qual_spe" },
    { nom: "Immunité (sommeil)", type: "qual_spe" },
    { nom: "Immunité (paralysie)", type: "qual_spe" },
    { nom: "Immunité (étourdissement)", type: "qual_spe" },
    { nom: "Immunité (maladie)", type: "qual_spe" },
    { nom: "Immunité (effets de mort)", type: "qual_spe" },
    { nom: "Immunité (nécromancie)", type: "qual_spe" },
    { nom: "Immunité (effets mentaux)", type: "qual_spe" },
    { nom: "Immunité (coups critiques)", type: "qual_spe" },
    { nom: "Immunité (dégâts non-létaux)", type: "qual_spe" },
    { nom: "Immunité (affaiblissement de caractéristique)", type: "qual_spe" },
    { nom: "Immunité (drain d'énergie)", type: "qual_spe" },
    { nom: "Immunité (fatigue et épuisement)", type: "qual_spe" },
    { nom: "PV basés sur le Charisme (pas de Constitution)", type: "qual_spe" },
    { nom: "Pas de guérison naturelle (sauf par nécromancie)", type: "qual_spe" },
    { nom: "Renvoi/intimidation des morts-vivants", type: "qual_spe" },
  ],
  "Plante": [
    { nom: "Vision nocturne", type: "qual_spe" },
    { nom: "Immunité (poison)", type: "qual_spe" },
    { nom: "Immunité (sommeil)", type: "qual_spe" },
    { nom: "Immunité (paralysie)", type: "qual_spe" },
    { nom: "Immunité (étourdissement)", type: "qual_spe" },
    { nom: "Immunité (métamorphose)", type: "qual_spe" },
    { nom: "Immunité (effets mentaux)", type: "qual_spe" },
    { nom: "Immunité (coups critiques)", type: "qual_spe" },
  ],
  "Vase": [
    { nom: "Aveugle (immunité regard, illusions visuelles, attaques nécessitant la vue)", type: "qual_spe" },
    { nom: "Immunité (poison)", type: "qual_spe" },
    { nom: "Immunité (sommeil)", type: "qual_spe" },
    { nom: "Immunité (paralysie)", type: "qual_spe" },
    { nom: "Immunité (étourdissement)", type: "qual_spe" },
    { nom: "Immunité (métamorphose)", type: "qual_spe" },
    { nom: "Immunité (effets mentaux)", type: "qual_spe" },
    { nom: "Immunité (coups critiques)", type: "qual_spe" },
    { nom: "Immunité (prise en tenaille)", type: "qual_spe" },
  ],
  "Vermine": [
    { nom: "Vision dans le noir 18 m", type: "qual_spe" },
    { nom: "Sans intelligence (immunité effets mentaux)", type: "qual_spe" },
  ],
};

/**
 * Retourne les traits attendus pour un type de créature.
 * Combine les traits du type de base + les traits raciaux du sous-type.
 *
 * Ex: "Humanoïde (nain)" → traits Humanoïde + traits Nain
 * Ex: "Mort-vivant (Incorporel)" → traits Mort-vivant
 *
 * @param {string} typeCreature
 * @returns {{ qual_spe: string[], att_spe: string[] }}
 */
export function obtenirTraitsType(typeCreature) {
  if (!typeCreature) return { qual_spe: [], att_spe: [] };

  // 1. Extraire type de base
  const idx = typeCreature.indexOf("(");
  const typeBase = (idx === -1 ? typeCreature : typeCreature.slice(0, idx)).trim();

  // 2. Traits du type de créature
  const traitsType = TRAITS_TYPES_CREATURE[typeBase] || [];
  const qual_spe = traitsType.filter((t) => t.type === "qual_spe").map((t) => t.nom);
  const att_spe = traitsType.filter((t) => t.type === "att_spe").map((t) => t.nom);

  // 3. Ajouter les traits raciaux du sous-type
  const traitsRaciaux = obtenirTraitsRaciaux(typeCreature);
  qual_spe.push(...traitsRaciaux.qual_spe);
  att_spe.push(...traitsRaciaux.att_spe);

  return { qual_spe, att_spe };
}

// ─── QUALITÉS SPÉCIALES COURANTES (MONSTRES / SRD) ──────────────────
export const QUALITES_SPECIALES_COMMUNES = [
  "Amphibie",
  "Aveuglé par la lumière",
  "Compression",
  "Guérison accélérée 1",
  "Guérison accélérée 5",
  "Guérison accélérée 10",
  "Immunité (acide)",
  "Immunité (effets mentaux)",
  "Immunité (électricité)",
  "Immunité (feu)",
  "Immunité (froid)",
  "Immunité (maladie)",
  "Immunité (paralysie)",
  "Immunité (poison)",
  "Immunité (sommeil)",
  "Incorporel",
  "Nage dans la terre",
  "Odorat",
  "Odorat surdéveloppé",
  "Perception aveugle 18 m",
  "Perception aveugle 36 m",
  "Perception des vibrations 18 m",
  "Perception des vibrations 36 m",
  "RD 5/Bien",
  "RD 5/argent",
  "RD 5/fer froid",
  "RD 5/magie",
  "RD 10/Bien",
  "RD 10/argent",
  "RD 10/fer froid",
  "RD 10/magie",
  "RD 15/Bien et fer froid",
  "Réception de rochers",
  "Régénération 5",
  "Régénération 10",
  "Résistance (acide 5)",
  "Résistance (acide 10)",
  "Résistance (électricité 5)",
  "Résistance (électricité 10)",
  "Résistance (feu 5)",
  "Résistance (feu 10)",
  "Résistance (froid 5)",
  "Résistance (froid 10)",
  "Résistance à la magie 10",
  "Résistance à la magie 15",
  "Résistance à la magie 20",
  "Résistance à la magie 25",
  "Sensibilité à la lumière",
  "Télépathie 30 m",
  "Vision à 360°",
  "Vision dans le noir 18 m",
  "Vision dans le noir 36 m",
  "Vision dans le noir 72 m",
  "Vision nocturne",
  "Vol (bonne manœuvrabilité)",
  "Vol (parfaite manœuvrabilité)",
  "Voyage astral",
  "Forme éthérée",
];

// ─── ATTAQUES SPÉCIALES COURANTES (MONSTRES / SRD) ──────────────────
export const ATTAQUES_SPECIALES_COMMUNES = [
  "Attaque sournoise",
  "Charge puissante",
  "Constriction",
  "Destruction d'armes",
  "Emporter",
  "Engloutissement",
  "Étreinte améliorée",
  "Lancer de rochers",
  "Maladie surnaturelle",
  "Paralysie",
  "Piétinement",
  "Poison",
  "Pouvoirs magiques",
  "Regard (charme)",
  "Regard (méduse / pétrification)",
  "Regard (terreur)",
  "Renvoi des morts-vivants",
  "Souffle (cône de feu)",
  "Souffle (cône de froid)",
  "Souffle (ligne d'acide)",
  "Souffle (ligne d'électricité)",
  "Sorts de Magicien",
  "Sorts de Prêtre",
  "Sorts de Druide",
  "Sorts d'Ensorceleur",
  "Toile",
  "Venin",
];

// ─── FONCTION UTILITAIRE : APTITUDES POUR CLASSE + NIVEAU ────────────
/**
 * Retourne les aptitudes qu'un personnage de cette classe et ce niveau
 * devrait posséder, séparées en qual_spe et att_spe.
 *
 * @param {string} classe
 * @param {number} niveau
 * @returns {{ qual_spe: string[], att_spe: string[] }}
 */
export function obtenirAptitudesClasse(classe, niveau) {
  const aptitudes = APTITUDES_CLASSES[classe];
  if (!aptitudes || !niveau) return { qual_spe: [], att_spe: [] };

  const qual_spe = [];
  const att_spe = [];

  // Pour les aptitudes qui augmentent (ex: Attaque sournoise, Rage),
  // on ne garde que la version du plus haut niveau atteint
  const derniereVersion = {};
  for (const apt of aptitudes) {
    if (apt.niveau <= niveau) {
      // Extraire le nom "de base" (sans le numéro de dé ou /jour)
      const base = apt.nom
        .replace(/\s*\+?\d+d\d+$/, "")   // +1d6, +3d6
        .replace(/\s*\+\d+$/, "")          // +1, +2, +3
        .replace(/\s*\d+\/jour$/, "")      // 1/jour, 3/jour
        .replace(/\s*\d+\/—$/, "")         // 1/—, 3/—
        .replace(/\s*\(×\d+\)$/, "")       // (×1), (×3)
        .replace(/\s*\d+\/semaine$/, "")   // 1/semaine
        .trim();
      derniereVersion[`${apt.type}:${base}`] = apt;
    }
  }

  for (const apt of Object.values(derniereVersion)) {
    // Substituer {NLS} par le niveau réel du personnage
    let nom = apt.nom.replace("{NLS}", String(niveau));
    // {NLS-3} pour Paladin/Rôdeur (NLS = niveau de classe - 3)
    nom = nom.replace(/\{NLS-(\d+)\}/g, (_, offset) => String(Math.max(1, niveau - Number(offset))));
    if (apt.type === "qual_spe") qual_spe.push(nom);
    else att_spe.push(nom);
  }

  return { qual_spe, att_spe };
}

/**
 * Retourne les traits raciaux à partir du champ "type" du personnage.
 * Ex: "Humanoïde (nain)" → traits de "Nain"
 *
 * @param {string} typeCreature - Ex: "Humanoïde (nain)"
 * @returns {{ qual_spe: string[], att_spe: string[] }}
 */
export function obtenirTraitsRaciaux(typeCreature) {
  if (!typeCreature) return { qual_spe: [], att_spe: [] };

  const match = typeCreature.match(/\((.+)\)/);
  const sousType = match ? match[1].trim() : "";

  // Chercher dans TRAITS_RACIAUX (insensible à la casse)
  const cle = Object.keys(TRAITS_RACIAUX).find(
    (k) => k.toLowerCase() === sousType.toLowerCase()
  );

  if (!cle) return { qual_spe: [], att_spe: [] };

  const traits = TRAITS_RACIAUX[cle];
  return {
    qual_spe: traits.filter((t) => t.type === "qual_spe").map((t) => t.nom),
    att_spe: traits.filter((t) => t.type === "att_spe").map((t) => t.nom),
  };
}

// ─── PRÉREQUIS DES DONS D&D 3.5 ──────────────────────────────────────
// Format : { don: { bba?, carac?: { stat: min }, dons?: [don requis], classe?, niveau? } }
export const PREREQUIS_DONS = {
  // Dons de combat
  "Arme de prédilection": { bba: 1 },
  "Arme de prédilection supérieure": { bba: 1, dons: ["Arme de prédilection"] },
  "Spécialisation martiale": { bba: 4, dons: ["Arme de prédilection"], classe: "Guerrier" },
  "Spécialisation martiale supérieure": { bba: 12, dons: ["Spécialisation martiale"], classe: "Guerrier" },
  "Science du critique": { bba: 8, dons: ["Arme de prédilection"] },
  "Attaque en puissance": { carac: { for: 13 } },
  "Enchaînement": { carac: { for: 13 }, dons: ["Attaque en puissance"] },
  "Succession d'enchaînements": { bba: 4, carac: { for: 13 }, dons: ["Enchaînement"] },
  "Fente": { bba: 6, carac: { for: 13 }, dons: ["Attaque en puissance"] },
  "Science de la bousculade": { carac: { for: 13 }, dons: ["Attaque en puissance"] },
  "Science de la destruction": { carac: { for: 13 }, dons: ["Attaque en puissance"] },
  "Science du renversement": { carac: { for: 13 }, dons: ["Attaque en puissance"] },
  "Expertise du combat": { carac: { int: 13 } },
  "Science de la feinte": { carac: { int: 13 }, dons: ["Expertise du combat"] },
  "Science du désarmement": { carac: { int: 13 }, dons: ["Expertise du combat"] },
  "Science du croc-en-jambe": { carac: { int: 13 }, dons: ["Expertise du combat"] },
  "Souplesse du serpent": { carac: { dex: 13 }, dons: ["Esquive"] },
  "Esquive": { carac: { dex: 13 } },
  "Attaques réflexes": { carac: { dex: 13 } },
  // Tir
  "Tir à bout portant": {},
  "Tir de précision": { dons: ["Tir à bout portant"] },
  "Science du tir de précision": { bba: 11, dons: ["Tir de précision"] },
  "Tir rapide": { carac: { dex: 13 }, dons: ["Tir à bout portant"] },
  "Feu nourri": { carac: { dex: 15 }, bba: 6, dons: ["Tir rapide"] },
  "Tir en mouvement": { carac: { dex: 13 }, bba: 4, dons: ["Esquive", "Souplesse du serpent", "Tir à bout portant"] },
  "Tir de loin": { dons: ["Tir à bout portant"] },
  // Combat à deux armes
  "Combat à deux armes": { carac: { dex: 15 } },
  "Science du combat à deux armes": { bba: 6, carac: { dex: 15 }, dons: ["Combat à deux armes"] },
  "Maîtrise du combat à deux armes": { bba: 11, carac: { dex: 19 }, dons: ["Science du combat à deux armes"] },
  // Armures
  "Port des armures intermédiaires": { dons: ["Port des armures légères"] },
  "Port des armures lourdes": { dons: ["Port des armures intermédiaires"] },
  // Métamagie
  "Incantation rapide": {},
  "Extension de durée": {},
  "Extension de portée": {},
  "Sort renforcé": {},
  "Sort intensifié": {},
  // Sans prérequis notables
  "Robustesse": {},
  "Science de l'initiative": {},
  "Vigilance": {},
  "Réflexes surhumains": {},
  "Vigueur surhumaine": {},
  "Volonté de fer": {},
  "Talent": {},
};

/**
 * Vérifie les prérequis d'un don pour un personnage donné.
 * @param {string} nomDon
 * @param {object} personnage - { carac, classe, niveau, dons (chaîne) }
 * @param {number|null} bba - BBA calculé
 * @returns {{ valide: boolean, manquants: string[] }}
 */
export function verifierPrerequis(nomDon, personnage, bba) {
  const prereq = PREREQUIS_DONS[nomDon];
  if (!prereq) return { valide: true, manquants: [] }; // Don inconnu = pas de vérif

  const manquants = [];
  const donsActuels = (personnage.dons || "")
    .split(/[,;]/)
    .map((d) => d.trim())
    .filter(Boolean);

  // BBA
  if (prereq.bba != null && (bba == null || bba < prereq.bba)) {
    manquants.push(`BBA ≥ ${prereq.bba} (actuel : ${bba ?? "?"})`);
  }

  // Caractéristiques
  if (prereq.carac) {
    for (const [stat, min] of Object.entries(prereq.carac)) {
      const val = personnage.carac?.[stat];
      if (val == null || val < min) {
        manquants.push(`${stat.toUpperCase()} ≥ ${min} (actuel : ${val ?? "?"})`);
      }
    }
  }

  // Dons prérequis
  if (prereq.dons) {
    for (const donReq of prereq.dons) {
      if (!donsActuels.includes(donReq)) {
        manquants.push(`Don : ${donReq}`);
      }
    }
  }

  // Classe requise
  if (prereq.classe && personnage.classe !== prereq.classe) {
    manquants.push(`Classe : ${prereq.classe}`);
  }

  return { valide: manquants.length === 0, manquants };
}

// ─── EMPLACEMENTS DE DONS PAR CLASSE ──────────────────────────────────
// Niveaux auxquels chaque classe accorde un don bonus (PHB)
export const DONS_BONUS_CLASSE = {
  "Guerrier": [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  "Magicien": [5, 10, 15, 20],
  "Moine": [1, 2, 6],
  "Rôdeur": [1], // Style de combat au niveau 2 (automatique, pas un vrai don à choisir)
};

/**
 * Calcule le nombre d'emplacements de dons attendus pour un personnage.
 * D&D 3.5 : 1 don au niv 1, puis 1 tous les 3 niveaux (3, 6, 9, 12…)
 * + dons bonus de classe.
 * @param {string} classe
 * @param {number} niveau
 * @param {boolean} estHumain - Les humains ont +1 don au niveau 1
 * @returns {{ generaux: number, bonusClasse: number, total: number, detail: string[] }}
 */
export function calculerEmplacementsDons(classe, niveau, estHumain = false) {
  if (!niveau || niveau < 1) return { generaux: 0, bonusClasse: 0, total: 0, detail: [] };

  // Dons généraux : niv 1, 3, 6, 9, 12, 15, 18
  const generaux = 1 + Math.floor(niveau / 3);
  const detail = [`${generaux} don(s) général(aux) (niv 1, 3, 6…)`];

  // Bonus humain
  let bonusHumain = 0;
  if (estHumain) {
    bonusHumain = 1;
    detail.push("1 don bonus (humain)");
  }

  // Dons bonus de classe
  const niveauxBonus = DONS_BONUS_CLASSE[classe] || [];
  const bonusClasse = niveauxBonus.filter((n) => n <= niveau).length;
  if (bonusClasse > 0) {
    detail.push(`${bonusClasse} don(s) bonus (${classe})`);
  }

  return {
    generaux,
    bonusHumain,
    bonusClasse,
    total: generaux + bonusHumain + bonusClasse,
    detail,
  };
}

// ─── POINTS DE COMPÉTENCES PAR CLASSE ─────────────────────────────────
// Points de compétences par niveau (hors bonus Int)
export const POINTS_COMPETENCES_PAR_CLASSE = {
  "Barbare": 4,
  "Barde": 6,
  "Druide": 4,
  "Ensorceleur": 2,
  "Guerrier": 2,
  "Magicien": 2,
  "Moine": 4,
  "Paladin": 2,
  "Prêtre": 2,
  "Rôdeur": 6,
  "Roublard": 8,
  // PNJ
  "Adepte": 2,
  "Aristocrate": 4,
  "Expert": 6,
  "Homme d'armes": 2,
  "Roturier": 2,
};

/**
 * Calcule le nombre total de rangs de compétences attendu
 * @param {string} classe
 * @param {number} niveau
 * @param {number|null} modInt - Modificateur d'Intelligence
 * @returns {{ parNiveau: number, total: number }|null}
 */
export function calculerPointsCompetences(classe, niveau, modInt) {
  const base = POINTS_COMPETENCES_PAR_CLASSE[classe];
  if (base == null || !niveau || niveau < 1) return null;
  const mod = modInt ?? 0;
  const parNiveau = Math.max(1, base + mod); // minimum 1 point/niveau
  // Niveau 1 = (parNiveau + 3) × 4... non, D&D 3.5 : niv 1 = (base+modInt)×4, niv 2+ = base+modInt
  const niv1 = Math.max(1, base + mod) * 4;
  const reste = niveau > 1 ? (niveau - 1) * parNiveau : 0;
  return { parNiveau, total: niv1 + reste };
}
