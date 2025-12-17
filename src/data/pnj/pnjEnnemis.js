// PNJ ennemis : adversaires déclarés avec personnalité et interactions sociales possibles
export const pnjEnnemis = [
  {
    id: "sujet_zero",
    name: "Sujet Zéro",
    size: "Grand",
    type: "Créature artificielle (aberration)",
    alignment: "CN",
    fp: 8,
    environment: "Spirale – Laboratoire secret de Thade",
    organization: "Solitaire",
    initiative: "+1",
    senses: "Vision dans le noir 18 m, odorat",
    ac: { total: 18, touch: 9, flatFooted: 17 },
    hp: 102,
    hd: "12d10+36",
    saves: { fort: "+9", ref: "+5", will: "+6" },
    speed: "9 m",
    attack: "griffe +14 (1d8+6)",
    fullAttack: "2 griffes +14 (1d8+6) et morsure +12 (2d6+3)",
    space: "3 m",
    reach: "3 m",
    specialAttacks: ["Rage contrôlée (+2 dégâts, 5 tours)", "Prise puissante (+4 sur lutte)"],
    specialQualities: [
      "Régénération 3 (supprimée par dégâts radieux ou soniques)",
      "Résistance à la magie 16",
    ],
    abilities: { str: 22, dex: 12, con: 20, int: 6, wis: 12, cha: 6 },
    skills: "Perception +10, Intimidation +8",
    feats: "Robustesse, Science du critique (griffe), Attaque en puissance, Combat en aveugle",
    tactics:
      "S'acharne sur la cible la plus bruyante ; si régénération stoppée, tente d'abattre rapidement puis fuit vers Thade.",
    loot: "Implants expérimentaux, échantillon d'éclat de Spirale",
    isEnemy: true,
    role: "Garde du laboratoire, tragédie contrôlée par Thade.",
    tactical: {
      bookReference: "Bestiaire : 'Sujet Zéro' (Annexe Spirale - laboratoire)",
      scenarioContext:
        "Acte 4 : combat d'anéantissement dans les laboratoires. Se concentre sur des attaques brutes et sa régénération, avec des pics de rage pour punir les soins.",
      spells: [],
      specialActions: [
        {
          name: "Rage contrôlée",
          details: "+2 dégâts pendant 5 tours, déclenchée quand il perd >30% PV avant de changer de cible.",
        },
        {
          name: "Prise puissante",
          details: "+4 sur lutte, cherche à immobiliser le lanceur de sorts ou le guérisseur.",
        },
      ],
      tacticFeats: [
        {
          name: "Science du critique",
          details: "Optimise les attaques de griffe en concentration sur le lanceur de sorts le plus vulnérable.",
        },
        {
          name: "Attaque en puissance",
          details: "Souhaite des frappes maximales sur les tanks blessés.",
        },
      ],
      tacticSummary:
        "Fonce sur la cible la plus bruyante, utilise sa régénération pour rester au contact ; si la régénération est stoppée, tente de fuir vers Thade.",
    },
  },
  {
    id: "assassin_masque",
    name: "Assassin Masqué",
    size: "Moyen",
    type: "Humanoïde (Humain)",
    alignment: "NM",
    fp: 5,
    environment: "Ruelles de Val-d'Ombre, toits",
    organization: "Solitaire ou duo",
    initiative: "+6",
    senses: "Détection +8",
    ac: "18 (+4 Dex, +4 Armure) ; contact 14, pris au dépourvu 14",
    hp: 45,
    dv: "6d8+18",
    js: { vig: "+5", ref: "+9", vol: "+3" },
    vit: "9 m, escalade 6 m",
    abb: "+4",
    grp: "+6",
    attaque: "Dague +8 (1d4+2, x2) ou Arbalète Légère +8 (1d8, 19-20/x2)",
    att_complete: "Dague +8/+3 (1d4+2, x2) ou Arbalète Légère +8 (1d8, 19-20/x2)",
    espace: "1,5 m",
    allonge: "1,5 m",
    att_spé: ["Attaque Sournoise +3d6", "Poison Enduit (Vig. DD 15)"],
    qual_spé: ["Esquive Instinctive", "Bonus Discrétion +4 en milieu urbain"],
    carac: { for: 12, dex: 18, con: 14, int: 12, sag: 10, cha: 10 },
    compétences: "Discrétion +14, Acrobaties +12, Détection +8, Escalade +10",
    dons: "Science de l'Initiative, Tir de Précision, Arme de Prédilection (dague)",
    tactiques:
      "Frappe depuis les ombres, s'acharne sur les cibles isolées ; peut négocier un contrat si pris de vitesse.",
    butin: "Lettre scellée, fiole de poison, masque rituel",
    est_ennemi: true,
    role: "Tueur à gages lié aux complots urbains.",
    tactical: {
      bookReference: "Bestiaire urbain : 'Assassin Masqué' (Ruelles / Ombres)",
      scenarioContext:
        "Acte 1-3 : embuscade dans les toits. Préfère frapper isolément avant que les gardes se regroupent.",
      spells: [],
      specialActions: [
        {
          name: "Attaque sournoise",
          details: "+3d6 dès qu'il frappe un ennemi en dehors du combat.",
        },
        {
          name: "Poison enduit",
          details: "Application sur dague (Vig DD 15), utilisé sur ses premières attaques pour maximiser la victime engagée.",
        },
      ],
      tacticFeats: [
        {
          name: "Tir de précision",
          details: "Ouverture sur la cible isolée (dague ou arbalète).",
        },
        {
          name: "Science de l'initiative",
          details: "Permet d'agir avant la majorité de la troupe et de choisir sa cible.",
        },
      ],
      tacticSummary:
        "Frappe depuis les ombres, vise les cibles isolées, peut négocier ou s'enfuir si surpris.",
    },
  },
  {
    id: "etudiant_renvoye",
    name: "Étudiant renvoyé",
    size: "Moyen",
    type: "Humanoïde (Humain)",
    alignment: "NM",
    fp: 1,
    environment: "Cimetière terrasse, université",
    organization: "Escouade de 3-4",
    initiative: "+2",
    senses: "Perception +2",
    ac: "14 (+2 Dex, +2 Armure de cuir) ; contact 12, pris au dépourvu 12",
    hp: 11,
    dv: "2d8+2",
    js: { vig: "+1", ref: "+2", vol: "+1" },
    vit: "9 m",
    abb: "+1",
    grp: "+2",
    attaque: "Bâton +3 (1d6+1) ou Dague +3 (1d4+1)",
    att_complete: "Bâton +3 (1d6+1) ou Dague +3 (1d4+1)",
    espace: "1,5 m",
    allonge: "1,5 m",
    att_spé: ["Sort mineur 1/jour (Rayon de givre +2, 1d3 froid)", "Tactique de groupe (+1 att si adjacent à un allié)"],
    qual_spé: ["Science académique (+2 Connaissances : arcanes)"],
    carac: { for: 12, dex: 14, con: 12, int: 12, sag: 10, cha: 8 },
    compétences: "Connaissances (arcanes) +6, Discrétion +6, Escalade +4, Perception +2",
    dons: "Science de l'Initiative",
    tactiques:
      "Tente de surprendre, l'un lit un parchemin pendant que les autres couvrent la fuite. Cède rapidement si isolé.",
    butin: "Broche ternie de la fraternité Nyx, carnet de commandes d'os, 1 parchemin mineur (Rayon affaiblissant).",
    est_ennemi: true,
    role: "Mercenaire académique impliqué dans le pillage du cimetière.",
    tactical: {
      bookReference: "Scénario 1 – Acte 1, Scène 3 : Les Mercenaires Érudits",
      scenarioContext:
        "Escouade d'étudiants déchus opérant dans le cimetière. Ils cherchent à prélever des ossements pour la fraternité Nyx.",
      spells: [
        {
          name: "Rayon de givre",
          details: "+2 toucher, 1d3 froid ; utilisé pour ralentir un PJ menaçant pendant que le groupe se repositionne.",
        },
      ],
      specialActions: [
        {
          name: "Tactique de groupe",
          details: "+1 aux jets d'attaque s'ils sont adjacents à un allié ; ils restent groupés derrière les tombes.",
        },
      ],
      tacticFeats: [
        {
          name: "Science de l'initiative",
          details: "Ils agissent tôt pour lancer un sort mineur ou prendre l'avantage de position.",
        },
      ],
      tacticSummary:
        "Commencent groupés derrière des tombes (couvert). Un lance un sort mineur pour couvrir la fuite avec le sac d'os, les autres font écran. Se rendent rapidement si isolés ou menacés.",
    },
  },
];
