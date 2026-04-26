/**
 * PNJ Globaux - Personnages présents dans plusieurs scénarios
 * Antagoniste principal et personnages récurrents
 */

export const pnjGlobauxRaw = [
  {
    details: [
      "Motivation : Fusionner avec la Spirale pour atteindre l'immortalité.",
      "Masque : Froid, académique, se présente comme un allié rationnel.",
      "Spoiler : Manipule les PJ dès les premiers scénarios en orientant leurs enquêtes.",
      "Combat : Dans le final, utilise la Tour comme catalyseur d'énergie nécromantique.",
    ],
    quetesAnnexes: [
      {
        id: "quete_thade_1",
        titre: "Les notes perdues",
        description: "Retrouvez les notes de recherche volées de Thade Coren.",
        statut: "disponible",
        recompenses: "100 XP, 50 po",
        conditions: "Avoir terminé la quête principale 'La Tour de l'Observatoire'",
      },
    ],
    category: "allies",
    source: "principaux",
    color: "text-blue-400",
    id: "thade_coren",
    nom: "Thade Coren",
    classe: "Magicien",
    niveau: 10,
    taille: "Moyen",
    type: "Humanoïde (Humain)",
    alignement: "CN",
    fp: 10,
    environnement: "Bureau de Thade Coren",
    biome: "",
    residence: "bureau_thade_coren",
    lieuxRencontre: [],
    organisation: "Solitaire (manipulateur)",
    ini: "+2",
    sens: "Détection +8",
    ca: { total: 20, contact: 12, pris_au_depourvu: 18 },
    pv: 51,
    dv: "10d4+20",
    js: { vig: "+5", ref: "+5", vol: "+8" },
    rm: null,
    rd: null,
    vit: "9 m",
    bba: "+0",
    lutte: "+0",
    attaque: "bâton ferré +7 (1d6+1 contondant)",
    att_outrance: "bâton ferré +7 (1d6+1) ou rayon affaiblissant +9 à distance",
    espace: "1,5 m",
    allonge: "1,5 m",
    att_spe: [
      "Sorts de magicien/ensorceleur (NLS 10) : contrôle, nécromancie, entrave",
      "Rayon affaiblissant 4/jour",
      "Sorts de Magicien (NLS 10)",
    ],
    qual_spe: [
      "Préparation : +2 DD pour les sorts de contrôle lancés sur cibles affaiblies",
      "Résistance mentale (contre Charme) +2",
      "Buff actif : Brume de dissimulation (20% de chances de rater, 10 min)",
      "1 don supplémentaire au niveau 1",
      "École de magie (spécialisation)",
      "Don supplémentaire de magicien (niv 5)",
      "4 points de compétence supplémentaires au niveau 1",
      "1 point de compétence supplémentaire par niveau",
      "Familier",
      "Don supplémentaire de magicien (niv 10)",
    ],
    carac: { for: 10, dex: 14, con: 14, int: 20, sag: 12, cha: 16 },
    competences:
      "Concentration +15, Diplomatie +12, Intimidation +11, Connaissance (arcane) +17, Connaissance (plans) +12, Psychologie +10",
    dons:
      "Volonté de fer, Science de l'initiative, Incantation silencieuse, Incantation réflexe, Robustesse",
    tactiques:
      "Commence par entraver (corde animée, immobilisation), place des rayons affaiblissants, puis négocie si avantage. En fuite, utilise brume de dissimulation et dimensions mineures.",
    butin:
      "Bâton ferré, notes nécromantiques, cristal mouchard, anneau de protection +1",
    est_ennemi: false,
    antagoniste: true,
    role: "Antagoniste principal, double jeu : mécène puis manipulateur.",
    image: "/images/monstres/0bcc9103-1a83-4f71-815f-36f09625dcba.png",
    meta_mj: {
      reference_livre: "Bestiaire : Dossier 'Thade Coren' (Chap. Manipulations & Spirale)",
      contexte_scenario:
        "Acte 2-3 : infiltration au Conclave, ensuite confrontation finale dans la Spirale (cercle des miroirs). Focus sur les sorts de contrôle pour déstabiliser les PJ avant de négocier.",
    },
    fiche_combat: {
      sorts: [
        {
          nom: "Rayon affaiblissant",
          details:
            "+9 / DD 16 Str, -2 Str/Con pendant 1 tour, 4/j. Permet de fragiliser la cible principale avant l'assaut.",
        },
        {
          nom: "Corde animée",
          details:
            "Prépare un piège pour restreindre un seul PJ : +12 toucher, DD 15 Force, idéal pour neutraliser un tank temporairement.",
        },
        {
          nom: "Brume de dissimulation",
          details:
            "Prépare sa retraite ou se repositionner derrière un masque magique ; déclenchée après avoir lancé rayon ou immobilisation.",
        },
      ],
      dons_tactiques: [
        {
          nom: "Science de l'initiative",
          details:
            "Donne une fenêtre pour activer un sort dès le tour 1 et imposer son plan tactique.",
        },
        {
          nom: "Incantation réflexe",
          details:
            "Permet de lancer un sort de réaction (rayon ou téléportation mineure) quand un PJ s'approche trop.",
        },
      ],
      resume_tactique:
        "Démarre par des contrôles (corde animée, immobilisation), enchaîne avec rayon affaiblissant, puis se met en retrait pour converser/négocier. Garde une brume active pour fuir vers les étages supérieurs si mis en difficulté.",
    },
    bonus_actifs: [
      {
        nom: "Brume de dissimulation",
        effet: "20% de chances de rater les attaques contre lui",
        duree: "10 minutes",
      },
    ],
    sorts_prepares: {},
    ogas: {
      occupation: "Dirige ses recherches sur la Spirale depuis son laboratoire secret",
      objectif: "Fusionner avec la Spirale pour atteindre l'immortalité arcanique",
      attitude:
        "Froid et académique, se présente comme un allié rationnel mais manipule subtilement",
      enjeu:
        "Risque de perdre son accès à la Spirale et ses années de recherches ; peut gagner le pouvoir ultime",
    },
    disposition: "neutre",
    classes: [],
    modeEntite: null,
  },
];
