import { createPnj } from "./pnjTemplate";

// PNJ ennemis : adversaires déclarés avec personnalité et interactions sociales possibles
const pnjEnnemisRaw = [
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
    details: [
      "Motivation : L'argent et le frisson du danger.",
      "Attitude : Ne parle presque jamais, communique par gestes.",
      "Combat : Spécialiste des attaques surprise et des chutes mortelles.",
      "Spoiler : Peut être lié à une faction que les PJ croyaient alliée."
    ],
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
    initiative: "+6", // +2 Dex +4 Science de l'Initiative
    senses: "Détection +2",
    ac: "12 (+2 Dex) ; contact 12, pris au dépourvu 10", // pas d’armure (magicien)
    hp: 5,
    dv: "1d4+1", // Magicien Niv 1
    js: { vig: "+1", ref: "+2", vol: "+2" },
    vit: "9 m",
    abb: "+0",
    grp: "+1",
    attaque: "Dague +1 (1d4+1) ou Bâton +1 (1d6+1)",
    att_complete: "Dague +1 (1d4+1) ou Bâton +1 (1d6+1)",
    espace: "1,5 m",
    allonge: "1,5 m",

    // En 3.5, les dons ne vont pas dans att_spé
    att_spé: [
      "Sort mineur à volonté (Rayon de givre +3 toucher à distance, 1d3 froid)",
      "Couverture : +4 CA contre les attaques à distance derrière une stèle (terrain)",
    ],
    qual_spé: [
      "Science académique (+2 en Connaissances : arcanes)",
      "Vœu de Silence (Inconscient) : si interrogé sur le Maître, déclenchement de censure (élément de scénario)",
    ],

    carac: { for: 12, dex: 14, con: 12, int: 15, sag: 10, cha: 8 },

    compétences:
      "Connaissances (arcanes) +9, Art de la magie +6, Discrétion +6, Détection +2",
    dons: "Science de l'Initiative, Écriture de parchemins", // (bonus de magicien)

    tactiques:
      "Reste derrière les brutes. Tour 1 : lance Armure de mage si menacé (CA 16 ensuite). Sinon, Projectile magique sur la cible la plus blessée. Utilise Rayon de givre pour harceler et reculer. Cherche à fuir dès qu’une brute tombe.",

    // Petit rappel “buff” si Armure de mage active (pour ton moteur, si tu veux gérer)
    buffs: [
      {
        name: "Armure de mage",
        effect: "+4 CA d’armure (CA passe à 16)",
        duration: "1 heure",
      },
    ],

    // Sorts “safe” (pas de Sommeil/Color Spray qui peuvent retourner un combat niveau 1)
    spells_prepared: {
      niveau0: ["Rayon de givre", "Détection de la magie", "Lumière"],
      niveau1: ["Armure de mage", "Projectile magique"],
    },

    butin:
      "Broche en argent (fraternité Nyx), Outils chirurgicaux (Université), Liste de 'Sujets' (Nains), 1 parchemin de Rayon affaiblissant",
    est_ennemi: true,
    role: "Étudiant désespéré et manipulé, pivot de l'enquête entre le Cimetière et l'Université.",
    tactical: {
      bookReference: "Scénario 1 – Acte 1, Scène 3 : L'Interrogatoire interrompu",
      scenarioContext:
        "Membre junior de la Fraternité Nyx. Terrifié par Thade Coren, mais obsédé par ses recherches.",
      spells: [
        {
          name: "Rayon de givre",
          details: "+3 toucher à distance, 1d3 froid.",
        },
        {
          name: "Projectile magique",
          details: "1 projectile (1d4+1), pas de JS.",
        },
        {
          name: "Armure de mage",
          details: "+4 CA d’armure, durée 1 heure.",
        },
      ],
      specialActions: [
        {
          name: "Appel à l'aide",
          details:
            "Si Jaren tombe à 3 PV ou moins, il tente de se rendre/fuir et marchande sa vie.",
        },
      ],
      tacticSummary:
        "Terrain + brutes = écran. Jaren n’est pas un duelliste : il pique, recule, puis tente la fuite.",
    },
  },
  {
    id: "contremaitre_humain",
    name: "Varrus, contremaître humain",
    size: "Moyen",
    type: "Humanoïde (Humain)",
    alignment: "LE",
    fp: 3,
    environment: "Quartier des Mineurs – Place Centrale",
    organization: "Solitaire (avec 2 gardes)",
    initiative: "+1",
    senses: "Perception +5",
    ac: { total: 16, touch: 11, flatFooted: 15 },
    hp: 38,
    hd: "5d8+10",
    saves: { fort: "+4", ref: "+2", will: "+4" },
    speed: "9 m",
    attack: "Fouet +6 (1d3 non létal ou létal)",
    fullAttack: "Fouet +6 (1d3)",
    space: "1,5 m",
    reach: "4,5 m (fouet)",
    specialAttacks: ["Désarmement (Amélioré)"],
    specialQualities: ["Autorité Tyranique (+2 Intimidation sur les mineurs)"],
    abilities: { str: 14, dex: 12, con: 14, int: 12, sag: 10, cha: 14 },
    skills: "Intimidation +10, Psychologie +6, Profession (contremaître) +8",
    feats: "Maniement du fouet, Expertise du combat",
    tactics:
      "Reste derrière ses gardes, utilise son fouet pour désarmer ou faire trébucher les meneurs.",
    loot: "Fouet de maître, liste noire des mineurs, lettre scellée (ordre de Thade).",
    isEnemy: true,
    role: "Intermédiaire entre le Conseil et les mineurs.",
    details: [
      "Motivation : Maintenir la production coûte que coûte pour conserver ses privilèges.",
      "Attitude : Méprisant envers les Nains, agressif envers les PJ qui remettent en cause l'autorité.",
      "Combat : Peut devenir un antagoniste lors d'une émeute ou d'un piquet de grève qui dégénère.",
      "Indice : Reçoit des ordres indirectement liés à Thade via des lettres scellées."
    ],
  },
  {
    id: "patrouille_mixte_conseil",
    name: "Patrouille Mixte du Conseil",
    size: "Moyen",
    type: "Humanoïde (Humain/Nain)",
    alignment: "LN",
    fp: 4,
    environment: "Quartier des Mineurs – Allée des Artisans",
    organization: "Escouade (4 gardes)",
    initiative: "+0",
    senses: "Perception +4",
    ac: { total: 17, touch: 10, flatFooted: 17 },
    hp: 30,
    hd: "4d10+8",
    saves: { fort: "+6", ref: "+1", will: "+1" },
    speed: "6 m",
    attack: "Hallebarde +6 (1d10+2)",
    fullAttack: "Hallebarde +6 (1d10+2)",
    space: "1,5 m",
    reach: "3 m",
    specialAttacks: ["Formation de mur (Couverture +4 si adjacents)"],
    specialQualities: [],
    abilities: { str: 15, dex: 10, con: 14, int: 10, wis: 10, cha: 10 },
    skills: "Détection +5, Intimidation +6",
    feats: "Robustesse, Arme de prédilection (hallebarde)",
    tactics:
      "Barricadent les ruelles, utilisent l'allonge des hallebardes pour tenir la foule à distance.",
    loot: "Uniforme du Conseil, ordre d'arrestation vierge, cristal relais.",
    isEnemy: true,
    role: "Escouade composite chargée de briser la résistance artisanale.",
    details: [
      "Motivation : Appliquer les ordres de Thade sous couvert du Conseil.",
      "Tactiques : Barricader les ruelles, utiliser des immobilisations magiques.",
      "Indice : Le chef porte un cristal relais identique à celui de Thade."
    ],
  },
  {
    id: "garde_portail_mine",
    name: "Escouade de Gardes du Portail",
    size: "Moyen",
    type: "Humanoïde (Humain)",
    alignment: "N",
    fp: 3,
    environment: "Quartier des Mineurs – Entrée de la Mine",
    organization: "Groupe (3-5)",
    initiative: "+1",
    senses: "Perception +5",
    ac: { total: 16, touch: 11, flatFooted: 15 },
    hp: 26,
    hd: "3d10+6",
    saves: { fort: "+5", ref: "+2", will: "+1" },
    speed: "9 m",
    attack: "Épée courte +5 (1d6+2)",
    fullAttack: "Épée courte +5 (1d6+2)",
    space: "1,5 m",
    reach: "1,5 m",
    specialAttacks: [],
    specialQualities: [],
    abilities: { str: 14, dex: 12, con: 14, int: 10, wis: 10, cha: 10 },
    skills: "Psychologie +4, Détection +5",
    feats: "Vigilance, Arme de prédilection",
    tactics:
      "Défensive stricte. Ne frappent que si on force le passage ou si une arme est tirée.",
    loot: "Clés du treuil, lanterne, sceau falsifié.",
    isEnemy: true,
    role: "Soldats épuisés chargés de verrouiller l'accès.",
    details: [
      "Motivation : Obéir aux ordres contradictoires du Conseil tout en évitant un massacre.",
      "Attitude : Nerveuse, soupçonne les PJ d'espionnage.",
      "Usage : Obstacles physiques ou négociation sous pression.",
      "Indice : Portent des sceaux falsifiés liés aux lettres de Thade."
    ],
  },
  {
    id: "magi_tuteur_loyal",
    name: "Maître Arcaniste Loyaliste",
    size: "Moyen",
    type: "Humanoïde (Humain)",
    alignment: "LN",
    fp: 7,
    environment: "Quartier du Savoir – Tour des Mages",
    organization: "Solitaire (avec golems ou élémentaires)",
    initiative: "+2",
    senses: "Détection de la magie, Vision dans le noir",
    ac: { total: 18, touch: 12, flatFooted: 16 },
    hp: 45,
    hd: "9d4+18",
    saves: { fort: "+6", ref: "+5", will: "+8" },
    speed: "9 m",
    attack: "Rayon Arcanique +6 (4d6 force)",
    fullAttack: "Rayon Arcanique +6 (4d6 force)",
    space: "1,5 m",
    reach: "1,5 m",
    specialAttacks: ["Sorts de Magicien NLS 9 (Évocation/Abjuration)"],
    specialQualities: ["Glyphes de Renvoi (1/tour, renvoie un sort de niveau 3 ou moins)"],
    abilities: { str: 10, dex: 14, con: 14, int: 18, wis: 12, cha: 12 },
    skills: "Art de la magie +15, Connaissances (arcanes) +15, Intimidation +10",
    feats: "Ecole Renforcée (Évocation), vigilance",
    tactics: "Déclenche ses glyphes sans sommation, reste à distance derrière des champs de force.",
    loot: "Bâton de défense, parchemins de Dissipation.",
    isEnemy: true,
    role: "Professeur resté fidèle à la Guilde, mais pas à Thade.",
    details: [
      "Motivation : Protéger la Tour contre toute intrusion, PJ compris.",
      "Attitude : Arrogant, déclenche des runes de défense sans sommation.",
      "Pouvoir : Champs de force, glyphes de renvoi, serviteurs élémentaires.",
      "Usage : Mini-boss ou négociateur si convaincu que Thade trahit la Guilde."
    ],
  }
];

export const pnjEnnemis = pnjEnnemisRaw.map((npc) => createPnj(npc));
