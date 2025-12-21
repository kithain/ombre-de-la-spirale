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
    name: "Jaren",
    size: "Moyen",
    type: "Humanoïde (Humain)",
    alignment: "Neutre Mauvais",
    fp: 1,
    environment: "Cimetière des Terrasses, Université de Magie",
    organization: "Solitaire (accompagné de 3 brutes)",
    initiative: "+6", // +2 Dex +4 Science de l'Init
    senses: "Perception +2",
    ac: "14 (+2 Dex, +2 Armure de cuir) ; contact 12, pris au dépourvu 12",
    hp: 11,
    dv: "2d4+2", // Magicien Niveau 2 (plus cohérent pour un étudiant)
    js: { vig: "+1", ref: "+2", vol: "+3" }, // Volonté augmentée (classe de lanceur)
    vit: "9 m",
    abb: "+1",
    grp: "+2",
    attaque: "Bâton +2 (1d6+1) ou Dague +3 (1d4+1)",
    att_complete: "Bâton +2 (1d6+1) ou Dague +3 (1d4+1)",
    espace: "1,5 m",
    allonge: "1,5 m",
    att_spé: [
      "Sort mineur 3/jour (Rayon de givre +3 toucher à distance, 1d3 froid)", 
      "Tactique de groupe (+1 att si adjacent à un allié)"
    ],
    qual_spé: [
      "Science académique (+2 en Connaissances : arcanes)",
      "Vœu de Silence (Inconscient) : Si interrogé sur le Maître, subit un sort de Censure fatal."
    ],
    carac: { for: 12, dex: 14, con: 12, int: 15, sag: 10, cha: 8 }, // Int augmentée pour un futur nécromancien
    compétences: "Connaissances (arcanes) +9, Discrétion +6, Art de la magie +7, Perception +2",
    dons: "Science de l'Initiative, Incantation rapide (parchemin)",
    tactiques:
      "Jaren reste à l'arrière, utilisant les stèles comme abri (couverture +4 CA). Il utilise 'Rayon de Givre' pour ralentir le PJ le plus rapide. Il privilégie la fuite dès qu'une brute tombe.",
    butin: "Broche en argent de la fraternité Nyx, Outils chirurgicaux (estampillés Université), Liste de 'Sujets' (Nains), 1 parchemin de Rayon affaiblissant.",
    est_ennemi: true,
    role: "Étudiant désespéré et manipulé, pivot de l'enquête entre le Cimetière et l'Université.",
    tactical: {
      bookReference: "Scénario 1 – Acte 1, Scène 3 : L'Interrogatoire interrompu",
      scenarioContext:
        "Membre junior de la Fraternité Nyx. Il est terrifié par Thade Coren mais obsédé par ses recherches sur la nécromancie.",
      spells: [
        {
          name: "Rayon de givre",
          details: "+3 toucher à distance, 1d3 froid ; réduit la vitesse de la cible de 1,5m pour 1 round.",
        },
      ],
      specialActions: [
        {
          name: "Appel à l'aide",
          details: "Si Jaren tombe à moins de 5 PV, il offre sa rédition en échange de sa vie, déclenchant potentiellement la scène 4 de l'Acte 1.",
        },
      ],
      tacticFeats: [
        {
          name: "Science de l'initiative",
          details: "Agit presque toujours en premier pour lancer un sort de diversion ou se cacher.",
        },
      ],
      tacticSummary:
        "Utilise le terrain (tombes) pour bloquer les lignes de vue. Ne cherche pas le corps à corps. S'il est acculé, il pleure et supplie, révélant sa nature de lâche manipulé.",
    },
  }
];
