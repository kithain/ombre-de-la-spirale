import { Users, Shield, Sparkles, Eye, Skull } from "lucide-react";

export const factionsData = [
  {
    name: "Le Conseil (Politique)",
    type: "Administration",
    desc: "Le Bourgmestre est un humain honnête mais dépassé. Il est obsédé par le maintien de la paix entre Nains et Mages pour que le commerce tourne.",
    icon: Users,
    color: "text-blue-400 border-blue-900 bg-blue-950/30",
    hierarchy: [
      {
        role: "Bourgmestre",
        npcId: "bourgmestre",
        notes: "Autorité civile, cherche l'équilibre.",
      },
      {
        role: "Capitaine de la Garde urbaine",
        npcId: "capitaine_garde_urbaine",
        notes: "Sécurité, couvre-feu, siège.",
      },
      {
        role: "Geôlier du Conseil",
        npcId: "geolier_principal",
        notes: "Prisons politiques, interrogatoires.",
      },
    ],
    npcIds: ["bourgmestre", "capitaine_garde_urbaine", "geolier_principal"],
    objectifs: {
      court_terme:
        "Maintenir l'ordre public et éviter l'escalade entre Nains et Mages",
      long_terme:
        "Préserver la prospérité économique de Valombre et son statut de carrefour commercial",
    },
    alliances: [
      {
        faction: "Faction Nains",
        type: "alliance",
        desc: "Alliance fragile, tensions croissantes",
      },
      {
        faction: "La Guilde des Mages",
        type: "alliance",
        desc: "Dépendance économique, influence politique forte",
      },
    ],
    forces_militaires: {
      effectifs: "150 gardes urbains",
      capacites: [
        "Patrouilles urbaines",
        "Maintien de l'ordre",
        "Arrestations",
      ],
      faiblesses: [
        "Sous-équipés face à la magie",
        "Loyauté divisée",
        "Dépassés par les événements",
      ],
    },
    quetes_associees: [
      {
        scenarioId: 1,
        acte: 1,
        sceneIndex: 0,
        sceneLabel: "Scène 1",
        role: "Employeur indirect via Thorgar",
      },
      {
        scenarioId: 3,
        acte: 1,
        sceneIndex: 0,
        sceneLabel: "Scène 1",
        role: "Sommet de réconciliation",
      },
    ],
  },
  {
    name: "Faction Nains",
    type: "Foi & Mineurs",
    desc: "Le bloc nain réunit les mineurs et le Temple-Forgeron : gardiens du savoir ancestral, protecteurs des galeries et des reliques sacrées.",
    icon: Shield,
    color: "text-amber-400 border-amber-900 bg-amber-950/30",
    hierarchy: [
      {
        role: "Chef de la Guilde des Mineurs",
        npcId: "durnik_chef_mineur",
        notes: "Voix des mineurs, meneur de grève.",
      },
      {
        role: "Haut Clerc / Prêtre du Temple-Forgeron",
        npcId: "thorgar_pretre_nain",
        notes: "Avertit sur la Spirale, soutien moral.",
      },
      {
        role: "Contremaître sécurité mine",
        npcId: "contremaitre_nain_mine",
        notes: "Logistique, sécurité des galeries.",
      },
      {
        role: "Capitaine de la Garde du Temple",
        npcId: "capitaine_garde_temple",
        notes: "Organise la défense et les patrouilles sacrées.",
      },
      {
        role: "Gardien du Cimetière",
        npcId: "gardien_cimetiere",
        notes: "Veille sur les sépultures et détecte les profanations.",
      },
    ],
    npcIds: [
      "durnik_chef_mineur",
      "thorgar_pretre_nain",
      "contremaitre_nain_mine",
      "capitaine_garde_temple",
      "gardien_cimetiere",
    ],
    objectifs: {
      court_terme:
        "Protéger les tombes ancestrales et sécuriser les mines face aux anomalies",
      long_terme:
        "Préserver l'héritage nain et contenir la menace de la Spirale",
    },
    alliances: [
      {
        faction: "Le Conseil (Politique)",
        type: "alliance",
        desc: "Alliance fragile, tensions sur les profanations",
      },
      {
        faction: "La Guilde des Mages",
        type: "rivalite",
        desc: "Méfiance envers la magie, conflit ouvert après l'assassinat",
      },
    ],
    forces_militaires: {
      effectifs: "200 guerriers nains + 300 mineurs armés",
      capacites: [
        "Combat au corps-à-corps",
        "Défense de forteresse",
        "Connaissance des tunnels",
        "Résistance magique naturelle",
      ],
      faiblesses: [
        "Vulnérables à la magie nécromantique",
        "Manque de mobilité",
        "Isolés dans le Temple-Forgeron",
      ],
    },
    quetes_associees: [
      {
        scenarioId: 1,
        acte: 1,
        sceneIndex: 0,
        sceneLabel: "Scène 1",
        role: "Employeur principal (Thorgar)",
      },
      {
        scenarioId: 1,
        acte: 1,
        sceneIndex: 1,
        sceneLabel: "Scène 2",
        role: "Gardien du cimetière",
      },
      {
        scenarioId: 2,
        acte: 1,
        sceneIndex: 0,
        sceneLabel: "Scène 1",
        role: "Crise de la mine (Durnik)",
      },
      {
        scenarioId: 3,
        acte: 2,
        sceneIndex: 3,
        sceneLabel: "Scène 4",
        role: "Réfugiés à sauver",
      },
      {
        scenarioId: 3,
        acte: 3,
        sceneIndex: 0,
        sceneLabel: "Scène 1",
        role: "Défense du Temple-Forgeron",
      },
      {
        scenarioId: 5,
        acte: 2,
        sceneIndex: 2,
        sceneLabel: "Scène 3",
        role: "Ralliement de Thorgar",
      },
    ],
  },
  {
    name: "La Guilde des Mages",
    type: "Les Ambitieux",
    desc: "Prestige intellectuel et force militaire. Officiellement contre la nécromancie et gardienne de l'orthodoxie magique. Thade Coren a infiltré le Cercle Intérieur pour manipuler la Guilde de l'intérieur.",
    icon: Sparkles,
    color: "text-purple-400 border-purple-900 bg-purple-950/30",
    hierarchy: [
      {
        role: "Cercle Intérieur",
        npcId: "thade_coren",
        notes: "Antagoniste, contrôle la Tour.",
      },
      {
        role: "Archimage défecteur",
        npcId: "archimage_defecteur",
        notes: "Sabote Thade de l'intérieur.",
      },
      {
        role: "Maître loyaliste",
        npcId: "magi_tuteur_loyal",
        notes: "Défend la Tour contre tous.",
      },
      {
        role: "Apprenti favori",
        npcId: "kaelen_vampire",
        notes: "Garde du toit, bras droit vampirique.",
      },
    ],
    npcIds: [
      "thade_coren",
      "archimage_defecteur",
      "magi_tuteur_loyal",
      "kaelen_vampire",
      "bibliothecaire_interdits",
    ],
    objectifs: {
      court_terme:
        "Maintenir le prestige de la Guilde et contrôler l'accès à la connaissance magique",
      long_terme:
        "Préserver l'ordre magique et empêcher les abus de la nécromancie (objectif officiel, compromis par Thade)",
    },
    alliances: [
      {
        faction: "Le Conseil (Politique)",
        type: "alliance",
        desc: "Influence politique dominante",
      },
      {
        faction: "Faction Nains",
        type: "rivalite",
        desc: "Tensions sur la magie vs tradition, conflit après l'assassinat",
      },
      {
        faction: "Fraternité Nyx",
        type: "conflit",
        desc: "Lutte contre la nécromancie clandestine (officiellement)",
      },
    ],
    forces_militaires: {
      effectifs: "50 mages de combat + 100 apprentis + automates de guerre",
      capacites: [
        "Magie destructrice",
        "Évocation",
        "Abjuration",
        "Automates de combat",
        "Barrières magiques",
      ],
      faiblesses: [
        "Division interne (infiltration de Thade)",
        "Arrogance",
        "Isolés dans leur Tour",
        "Vulnérables aux attaques surprises",
      ],
    },
    quetes_associees: [
      {
        scenarioId: 1,
        acte: 2,
        sceneIndex: 0,
        sceneLabel: "Scène 1",
        role: "Enquête sur la Fraternité Nyx",
      },
      {
        scenarioId: 1,
        acte: 2,
        sceneIndex: 1,
        sceneLabel: "Scène 2",
        role: "Rencontre avec Thade",
      },
      {
        scenarioId: 2,
        acte: 1,
        sceneIndex: 0,
        sceneLabel: "Scène 1",
        role: "Thade offre le cristal",
      },
      {
        scenarioId: 3,
        acte: 1,
        sceneIndex: 1,
        sceneLabel: "Scène 2",
        role: "Assassinat du Grand Prêtre",
      },
      {
        scenarioId: 3,
        acte: 4,
        sceneIndex: 3,
        sceneLabel: "Scène 4",
        role: "Confrontation avec Thade",
      },
      {
        scenarioId: 5,
        acte: 5,
        sceneLabel: "Toutes",
        role: "Combat final contre Thade",
      },
    ],
  },
  {
    name: "Réseau des Ombres",
    type: "Assassins & Informateurs",
    desc: "Intermédiaires discrets, chasseurs de primes et opportunistes qui profitent du chaos pour tirer les ficelles dans l'ombre.",
    icon: Eye,
    color: "text-emerald-300 border-emerald-900 bg-emerald-950/30",
    hierarchy: [
      {
        role: "Courtier invisible",
        npcId: "marchand_fou_mercane",
        notes: "Marchand d'informations et d'artefacts.",
      },
      {
        role: "Assassin Masqué",
        npcId: "assassin_masque",
        notes: "Tueur à gages lié aux complots urbains.",
      },
      {
        role: "Éclaireuse perdue",
        npcId: "lysa_exploratrice_perdue",
        notes: "Guide occasionnelle pour qui paye ou sauve sa peau.",
      },
    ],
    npcIds: [
      "marchand_fou_mercane",
      "assassin_masque",
      "lysa_exploratrice_perdue",
    ],
    objectifs: {
      court_terme: "Profiter du chaos pour accumuler richesses et informations",
      long_terme:
        "Survivre et maintenir leur réseau d'influence quel que soit le vainqueur",
    },
    alliances: [
      {
        faction: "Le Conseil (Politique)",
        type: "neutre",
        desc: "Contrats ponctuels, pas de loyauté",
      },
      {
        faction: "Faction Nains",
        type: "neutre",
        desc: "Commerce d'informations",
      },
      {
        faction: "La Guilde des Mages",
        type: "neutre",
        desc: "Mercenaires occasionnels pour Thade",
      },
    ],
    forces_militaires: {
      effectifs: "30-50 agents indépendants",
      capacites: [
        "Assassinat",
        "Espionnage",
        "Infiltration",
        "Commerce d'artefacts",
        "Réseau d'informateurs",
      ],
      faiblesses: [
        "Pas d'armée organisée",
        "Loyauté limitée",
        "Vulnérables si exposés",
      ],
    },
    quetes_associees: [
      {
        scenarioId: 2,
        acte: 5,
        sceneIndex: 1,
        sceneLabel: "Scène 2",
        role: "Mercenaires de Thade",
      },
      {
        scenarioId: 3,
        acte: 2,
        sceneIndex: 2,
        sceneLabel: "Scène 3",
        role: "Embuscade de Kael Ombrelame",
      },
      {
        scenarioId: 4,
        acte: 2,
        sceneIndex: 1,
        sceneLabel: "Scène 2",
        role: "Xareth le Mercane",
      },
    ],
  },
  {
    name: "Fraternité Nyx",
    type: "Nécromanciens Clandestins",
    desc: "Société secrète de nécromanciens dissous officiellement par la Guilde des Mages. Thade Coren en était membre et l'a réactivée pour ses expériences sur la Spirale. Opère dans l'ombre avec des étudiants radicalisés.",
    icon: Skull,
    color: "text-violet-400 border-violet-900 bg-violet-950/30",
    hierarchy: [
      {
        role: "Maître Secret",
        npcId: "thade_coren",
        notes:
          "Fondateur et manipulateur, utilise la Fraternité pour ses plans",
      },
      {
        role: "Apprentie Fanatique",
        npcId: "ilse_nyx",
        notes: "Disciple zélée, tente de compléter le rituel de Jaren",
      },
      {
        role: "Cobaye Raté",
        npcId: "etudiant_renvoye",
        notes: "Jaren, étudiant instable utilisé pour les expériences",
      },
      {
        role: "Lieutenant Corrompu",
        npcId: "kael_ombrelame",
        notes: "Nécromancien devenu vampire, bras armé de Thade",
      },
    ],
    npcIds: [
      "thade_coren",
      "ilse_nyx",
      "etudiant_renvoye",
      "kael_ombrelame",
      "apprenti_charme",
    ],
    objectifs: {
      court_terme:
        "Mener des expériences nécromantiques sur la Spirale et créer des morts-vivants",
      long_terme:
        "Atteindre l'immortalité via la fusion avec la Spirale (agenda de Thade)",
    },
    alliances: [
      {
        faction: "La Guilde des Mages",
        type: "conflit",
        desc: "Ennemis officiels, mais Thade infiltre la Guilde",
      },
      {
        faction: "Faction Nains",
        type: "conflit",
        desc: "Profanation des tombes, guerre totale",
      },
      {
        faction: "Le Conseil (Politique)",
        type: "conflit",
        desc: "Hors-la-loi, recherchés",
      },
      {
        faction: "Réseau des Ombres",
        type: "neutre",
        desc: "Recrutement de mercenaires pour missions sales",
      },
    ],
    forces_militaires: {
      effectifs:
        "10-15 nécromanciens actifs + armée mort-vivante (milliers après Scénario 3)",
      capacites: [
        "Nécromancie de masse",
        "Animation de morts-vivants",
        "Magie noire",
        "Contrôle de la Spirale",
        "Rituels interdits",
        "Transformation en liches/vampires",
      ],
      faiblesses: [
        "Petit nombre de membres vivants",
        "Dépendance totale à Thade",
        "Vulnérables aux armes sacrées",
        "Instabilité des morts-vivants",
        "Isolés socialement",
      ],
    },
    quetes_associees: [
      {
        scenarioId: 1,
        acte: 1,
        sceneIndex: 2,
        sceneLabel: "Scène 3",
        role: "Pilleurs de tombes (Jaren)",
      },
      {
        scenarioId: 1,
        acte: 2,
        sceneIndex: 0,
        sceneLabel: "Scène 1",
        role: "Enquête sur la Fraternité dissoute",
      },
      {
        scenarioId: 1,
        acte: 4,
        sceneIndex: 0,
        sceneLabel: "Scène 1",
        role: "Ilse tente de stabiliser le rituel",
      },
      {
        scenarioId: 2,
        acte: 2,
        sceneIndex: 1,
        sceneLabel: "Scène 2",
        role: "Laboratoire secret de Thade",
      },
      {
        scenarioId: 3,
        acte: 1,
        sceneIndex: 1,
        sceneLabel: "Scène 2",
        role: "Assassinat via apprenti charmé",
      },
      {
        scenarioId: 3,
        acte: 2,
        sceneIndex: 1,
        sceneLabel: "Scène 2",
        role: "Transformation des nains en zombies",
      },
      {
        scenarioId: 3,
        acte: 3,
        sceneLabel: "Toutes",
        role: "Armée mort-vivante assiège le Temple",
      },
      {
        scenarioId: 4,
        acte: 3,
        sceneIndex: 2,
        sceneLabel: "Scène 3",
        role: "Usine de production de morts-vivants",
      },
      {
        scenarioId: 5,
        acte: 5,
        sceneLabel: "Toutes",
        role: "Combat final contre Thade-Liche",
      },
    ],
  },
];
