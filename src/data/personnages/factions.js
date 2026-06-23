import {
  BookOpen,
  Church,
  Coins,
  Flag,
  Key,
  Scale,
  Shovel,
  Skull,
} from "lucide-react";

export const factionsData = [
  {
    nom: "Le Conseil de Valombre",
    type: "Gouvernement civil",
    description:
      "Le Conseil de Valombre dirige les affaires civiles de la cité depuis l’Hôtel de Ville. Il réunit le bourgmestre, les représentants des principales institutions humaines et plusieurs délégués des communautés reconnues. Il administre les taxes, les tribunaux, la garde et les travaux publics, mais ses décisions sont souvent ralenties par les intérêts des guildes, de l’Université, des familles influentes et des Terrasses naines. Le Conseil cherche avant tout à préserver l’ordre, la continuité des institutions et l’autorité de la ville.",
    icone: Scale,
    couleur: "text-blue-400 border-blue-900 bg-blue-950/30",

    hierarchie: [
      {
        role: "Bourgmestre",
        idPnj: "avel_ronce",
        notes:
          "Préside les séances, représente officiellement Valombre et veille à l’application des décisions civiles.",
      },
      {
        role: "Déléguée des familles naines",
        idPnj: "hessa_brunefer",
        notes:
          "Porte devant le Conseil les demandes des clans, des guildes et des familles établies sur les Terrasses.",
      },
      {
        role: "Rectrice et conseillère universitaire",
        idPnj: "maera_olane",
        notes:
          "Conseille le Conseil sur les affaires magiques, l’enseignement et les questions relevant de l’Université.",
      },
      {
        role: "Garde civique",
        idPnj: "patrouille_mixte_conseil",
        notes:
          "Assure les patrouilles, exécute les mandats et protège les bâtiments administratifs.",
      },
    ],

    membres_cles: [
      {
        id: "avel_ronce",
        nom: "Avel Ronce",
        role: "bourgmestre de Valombre",
      },
      {
        id: "hessa_brunefer",
        nom: "Hessa Brunefer",
        role: "déléguée des familles naines",
      },
      {
        id: "maera_olane",
        nom: "Maëra Olane",
        role: "rectrice et conseillère du Conseil",
      },
      {
        id: "patrouille_mixte_conseil",
        nom: "Patrouilles mixtes",
        role: "bras exécutif de l’autorité civile",
      },
    ],

    idsPnj: [
      "avel_ronce",
      "hessa_brunefer",
      "maera_olane",
      "patrouille_mixte_conseil",
    ],

    objectifs: {
      court_terme:
        "Maintenir le fonctionnement des services publics, régler les conflits entre institutions et faire appliquer les décisions municipales.",
      long_terme:
        "Préserver l’autonomie de Valombre et maintenir un équilibre durable entre les quartiers, les guildes et les communautés de la cité.",
    },

    alliances: [
      {
        faction: "Communauté Naine",
        type: "alliance",
        description:
          "Le Conseil reconnaît une large autonomie aux Terrasses, tandis que les guildes naines entretiennent les mines et une partie des infrastructures de la cité.",
      },
      {
        faction: "Université Arcanique",
        type: "alliance",
        description:
          "Le Conseil s’appuie sur l’expertise de l’Université pour les affaires magiques, les expertises techniques et la formation de certains fonctionnaires.",
      },
      {
        faction: "La Guilde Marchande",
        type: "alliance",
        description:
          "Le Conseil fixe les taxes et les règles du commerce ; la Guilde fournit en retour des recettes, des transports et des informations sur l’état des marchés.",
      },
      {
        faction: "Le Clergé de Saint-Aldric",
        type: "alliance",
        description:
          "Le clergé donne une forme religieuse aux serments publics, aux funérailles officielles et aux grandes cérémonies civiques.",
      },
      {
        faction: "Caldris, Marche du Serment Extérieur",
        type: "rivalite",
        description:
          "Le Conseil entretient des relations diplomatiques et commerciales avec Caldris, tout en refusant toute ingérence dans les affaires intérieures de Valombre.",
      },
    ],

    forces_militaires: {
      effectifs:
        "Une garde urbaine permanente, soutenue par des secrétaires, geôliers, messagers et officiers municipaux.",
      equipement:
        "Mandats, registres civils, archives municipales, prisons, postes de garde, armureries et réseau de messagers.",
      capacites: [
        "Peut faire appliquer une décision dans la plupart des quartiers de la cité.",
        "Peut ouvrir l’accès aux archives, aux tribunaux et aux bâtiments publics.",
        "Peut mobiliser des équipes pour sécuriser une rue, un marché ou un bâtiment.",
      ],
      faiblesses: [
        "Les décisions importantes exigent souvent de longues négociations.",
        "Le Conseil dépend des guildes et de l’Université pour de nombreuses compétences techniques.",
        "Son autorité est moins directe dans les Terrasses naines et la Vieille Ville.",
      ],
    },

    quetes_associees: [],
  },

  {
    nom: "Communauté Naine",
    type: "Clans, guildes et familles des Terrasses",
    description:
      "La communauté naine rassemble les clans, les familles de mineurs, les artisans et les prêtres établis sur les Terrasses. Elle administre une grande partie de ses affaires selon ses propres usages, entretient les mines et les forges, et accorde une importance particulière aux serments, aux lignées et à la mémoire des morts. Ses membres partagent un fort attachement à leur autonomie, sans pour autant parler d’une seule voix : les intérêts des guildes, du Temple-Forgeron et des familles ne coïncident pas toujours.",
    icone: Shovel,
    couleur: "text-amber-400 border-amber-900 bg-amber-950/30",

    hierarchie: [
      {
        role: "Chef de la Guilde des Mineurs",
        idPnj: "durnik_chef_mineur",
        notes:
          "Organise le travail des équipes, contrôle les accès miniers et représente les intérêts des mineurs.",
      },
      {
        role: "Haut Clerc du Temple-Forgeron",
        idPnj: "thorgar_pretre_nain",
        notes:
          "Préside les rites, conserve les traditions funéraires et arbitre certains serments familiaux.",
      },
      {
        role: "Déléguée au Conseil",
        idPnj: "hessa_brunefer",
        notes:
          "Défend les intérêts des Terrasses auprès des institutions humaines de Valombre.",
      },
    ],

    membres_cles: [
      {
        id: "durnik_chef_mineur",
        nom: "Durnik",
        role: "chef de la Guilde des Mineurs",
      },
      {
        id: "thorgar_pretre_nain",
        nom: "Thorgar",
        role: "haut clerc du Temple-Forgeron",
      },
      {
        id: "hessa_brunefer",
        nom: "Hessa Brunefer",
        role: "déléguée des familles naines",
      },
    ],

    idsPnj: [
      "durnik_chef_mineur",
      "thorgar_pretre_nain",
      "hessa_brunefer",
    ],

    objectifs: {
      court_terme:
        "Assurer la sécurité des mines, défendre les droits des familles et maintenir le fonctionnement des ateliers des Terrasses.",
      long_terme:
        "Préserver l’autonomie des clans, transmettre les savoir-faire nains et conserver la maîtrise de leurs terres, de leurs rites et de leurs ouvrages.",
    },

    alliances: [
      {
        faction: "Le Conseil de Valombre",
        type: "alliance",
        description:
          "Une longue coopération lie les Terrasses à la cité, même si les clans se méfient des décisions prises sans leur consultation.",
      },
      {
        faction: "Université Arcanique",
        type: "rivalite",
        description:
          "Les nains respectent les compétences des mages, mais supportent mal leur tendance à étudier les traditions et les ouvrages anciens sans en respecter les usages.",
      },
      {
        faction: "La Guilde Marchande",
        type: "alliance",
        description:
          "Les maisons marchandes achètent le minerai, financent les convois et dépendent des artisans nains pour de nombreux outils et ouvrages métalliques.",
      },
      {
        faction: "Le Clergé de Saint-Aldric",
        type: "rivalite",
        description:
          "Les deux traditions accordent une grande valeur aux serments et aux morts, mais leurs rites et leur conception de l’autorité religieuse diffèrent profondément.",
      },
      {
        faction: "Ordre de Nyx",
        type: "conflit",
        description:
          "Les clans se méfient des pratiques clandestines liées aux morts et refusent que leurs sépultures ou leurs traditions servent à des expériences extérieures.",
      },
    ],

    forces_militaires: {
      effectifs:
        "Mineurs, artisans, gardes de guilde, prêtres-forgerons et familles capables de se mobiliser pour défendre les Terrasses.",
      equipement:
        "Plans des galeries, outils de mine, forges, entrepôts, salles communes, registres de clan et équipements de protection souterraine.",
      capacites: [
        "Connaît mieux que quiconque les mines, les galeries et les fondations de la cité.",
        "Peut mobiliser rapidement des ouvriers, des artisans et du matériel lourd.",
        "Dispose d’une forte solidarité locale lorsqu’un clan ou une famille est menacé.",
      ],
      faiblesses: [
        "Les clans et les guildes ne défendent pas toujours les mêmes priorités.",
        "Une grande partie de leur prospérité dépend du fonctionnement régulier des mines.",
        "Leur influence reste limitée dans les institutions dominées par les humains.",
      ],
    },

    quetes_associees: [],
  },

  {
    nom: "Université Arcanique",
    type: "Institution savante et juridiction magique",
    description:
      "L’Université Arcanique forme les mages de Valombre, conserve les principales archives magiques de la cité et supervise les recherches qui relèvent de sa juridiction. Elle rassemble des maîtres, des copistes, des étudiants, des gardiens de laboratoire et une administration particulièrement attachée aux titres et aux procédures. L’institution jouit d’un grand prestige et considère volontiers que les problèmes complexes doivent être confiés à ceux qui ont été formés pour les comprendre.",
    icone: BookOpen,
    couleur: "text-purple-400 border-purple-900 bg-purple-950/30",

    hierarchie: [
      {
        role: "Rectrice",
        idPnj: "maera_olane",
        notes:
          "Dirige l’Université, représente ses intérêts auprès du Conseil et arbitre les conflits entre départements.",
      },
      {
        role: "Professeur d’Arcanes appliquées",
        idPnj: "thade_coren",
        notes:
          "Enseigne, dirige des recherches et bénéficie d’une solide réputation parmi les maîtres et les étudiants.",
      },
      {
        role: "Maître de la Tour",
        idPnj: "magi_tuteur_loyal",
        notes:
          "Supervise une partie des enseignements avancés et veille au respect des règles d’accès aux espaces sensibles.",
      },
      {
        role: "Étudiants et assistants",
        idPnj: "etudiants_charmes",
        notes:
          "Assurent une grande partie du travail quotidien des bibliothèques, laboratoires et salles de cours.",
      },
    ],

    membres_cles: [
      {
        id: "maera_olane",
        nom: "Maëra Olane",
        role: "rectrice de l’Université",
      },
      {
        id: "thade_coren",
        nom: "Thade Coren",
        role: "professeur d’Arcanes appliquées",
      },
      {
        id: "magi_tuteur_loyal",
        nom: "Maître arcaniste",
        role: "enseignant et gardien des usages de la Tour",
      },
      {
        id: "jaren_velt",
        nom: "Jaren Velt",
        role: "étudiant en arcanes",
      },
    ],

    idsPnj: [
      "maera_olane",
      "thade_coren",
      "magi_tuteur_loyal",
      "jaren_velt",
      "etudiants_charmes",
    ],

    objectifs: {
      court_terme:
        "Assurer les cours, protéger les collections et contrôler l’accès aux recherches dangereuses ou sensibles.",
      long_terme:
        "Conserver son autorité sur la pratique magique à Valombre et accroître ses connaissances sans dépendre entièrement du Conseil ou des mécènes privés.",
    },

    alliances: [
      {
        faction: "Le Conseil de Valombre",
        type: "alliance",
        description:
          "L’Université fournit expertises et conseillers ; le Conseil lui accorde en retour des moyens, des privilèges et une large autonomie académique.",
      },
      {
        faction: "Communauté Naine",
        type: "rivalite",
        description:
          "Les deux groupes coopèrent sur certaines questions techniques, mais s’opposent régulièrement sur la propriété des découvertes et le traitement des traditions anciennes.",
      },
      {
        faction: "La Guilde Marchande",
        type: "alliance",
        description:
          "Les négociants financent des chaires, achètent des expertises et commandent l’examen d’objets, de minerais ou de cargaisons inhabituelles.",
      },
      {
        faction: "Le Clergé de Saint-Aldric",
        type: "rivalite",
        description:
          "Le clergé consulte les mages pour certains phénomènes, tout en refusant que toute expérience spirituelle soit réduite à un mécanisme arcanique.",
      },
      {
        faction: "Ordre de Nyx",
        type: "conflit",
        description:
          "L’Université condamne les recherches et les pratiques conduites hors de son contrôle, en particulier lorsqu’elles concernent les morts ou la transformation du corps.",
      },
    ],

    forces_militaires: {
      effectifs:
        "Maîtres, chercheurs, étudiants, copistes, gardiens de laboratoire et personnel administratif.",
      equipement:
        "Bibliothèques, archives scellées, laboratoires, ateliers, instruments de mesure, glyphes de protection et Tour Arcanique.",
      capacites: [
        "Peut identifier des phénomènes magiques, authentifier des documents et analyser des objets inhabituels.",
        "Contrôle l’accès à une grande partie du savoir arcanique disponible à Valombre.",
        "Dispose de moyens de protection et de confinement adaptés aux incidents magiques.",
      ],
      faiblesses: [
        "Son administration est lente et très sensible aux questions de rang.",
        "Les départements protègent jalousement leurs recherches et leurs financements.",
        "L’institution peine à reconnaître les savoirs qui ne passent pas par ses méthodes officielles.",
      ],
    },

    quetes_associees: [],
  },

  {
    nom: "Ordre de Nyx",
    type: "Réseau clandestin interdit",
    description:
      "Le nom de Nyx désigne plusieurs cercles clandestins liés par un intérêt commun pour les maladies incurables, les états proches de la mort et les formes de magie interdites par l’Université. Certains membres sont des guérisseurs qui accueillent ceux que les institutions refusent de traiter ; d’autres sont des chercheurs bannis, des faussaires, des trafiquants de réactifs ou des endeuillés attirés par des promesses dangereuses. L’Ordre ne possède ni direction unique ni doctrine commune, et ses groupes se connaissent parfois à peine.",
    icone: Skull,
    couleur: "text-red-500 border-red-900 bg-black/60",

    hierarchie: [
      {
        role: "Les Dévots",
        idPnj: "ursula_fraternite",
        notes:
          "Guérisseurs clandestins qui soignent les malades pauvres, recherchés ou refusés par les établissements officiels.",
      },
      {
        role: "Les Masques",
        idPnj: "elian_voss",
        notes:
          "Intermédiaires, faussaires et chercheurs sans autorisation qui obtiennent les substances et les identités nécessaires aux activités clandestines.",
      },
      {
        role: "Les Endeuillés",
        idPnj: "edran_morn",
        notes:
          "Groupes formés autour du deuil et de la peur de la mort, dont certains développent des croyances ou des méthodes radicales.",
      },
    ],

    membres_cles: [
      {
        id: "ursula_fraternite",
        nom: "Ursula",
        role: "apothicaire et soignante clandestine",
      },
      {
        id: "elian_voss",
        nom: "Elian Voss",
        role: "chercheur et intermédiaire des Masques",
      },
      {
        id: "edran_morn",
        nom: "Edran Morn",
        role: "porte-parole d’un cercle radical d’endeuillés",
      },
    ],

    idsPnj: ["ursula_fraternite", "elian_voss", "edran_morn"],

    objectifs: {
      court_terme:
        "Protéger les malades, les refuges, les registres et les approvisionnements nécessaires aux activités clandestines.",
      long_terme:
        "Poursuivre des pratiques interdites sans laisser une seule branche imposer sa doctrine à toutes les autres.",
    },

    alliances: [
      {
        faction: "Le Syndicat des Brumes",
        type: "alliance",
        description:
          "Certains cercles achètent au Syndicat des passages, des réactifs, de faux papiers et le silence de témoins gênants.",
      },
      {
        faction: "Le Clergé de Saint-Aldric",
        type: "conflit",
        description:
          "Le clergé condamne les pratiques liées aux morts, même si quelques prêtres reconnaissent l’utilité des soins apportés aux plus pauvres.",
      },
      {
        faction: "Université Arcanique",
        type: "conflit",
        description:
          "L’Université considère les cercles de Nyx comme des praticiens dangereux échappant à tout contrôle académique.",
      },
      {
        faction: "Communauté Naine",
        type: "conflit",
        description:
          "Les clans nains refusent que leurs morts, leurs rites ou leurs objets funéraires servent aux recherches clandestines.",
      },
      {
        faction: "La Guilde Marchande",
        type: "rivalite",
        description:
          "Les réseaux de Nyx utilisent parfois les circuits commerciaux ordinaires, mais leurs achats anonymes et leurs cargaisons dissimulées inquiètent les négociants.",
      },
    ],

    forces_militaires: {
      effectifs:
        "Un ensemble mouvant de guérisseurs, patients, chercheurs bannis, passeurs, faussaires et petits cercles indépendants.",
      equipement:
        "Apothicaireries, caches, registres de patients, faux papiers, instruments médicaux, réactifs rares et textes interdits.",
      capacites: [
        "Peut traiter certains malades que les institutions officielles refusent ou ne savent pas aider.",
        "Dispose de refuges, de noms d’emprunt et de relais dans les quartiers pauvres.",
        "Conserve des connaissances que l’Université ne diffuse pas publiquement.",
      ],
      faiblesses: [
        "Les différents cercles se connaissent mal et se méfient les uns des autres.",
        "Le réseau dépend de fournisseurs extérieurs et de lieux difficiles à protéger.",
        "Les méthodes de certains membres compromettent tous ceux qui utilisent le nom de Nyx.",
      ],
    },

    quetes_associees: [],
  },

  {
    nom: "Caldris, Marche Extérieure",
    type: "Marche frontalière voisine",
    description:
      "Caldris est une marche fortifiée située sur les routes qui relient Valombre aux royaumes de l'Est. Son autorité repose sur une noblesse militaire, des officiers de frontière et une tradition ancienne de surveillance des cols. Ils considèrent Valombre comme une partenaire nécessaire, mais aussi comme une cité imprudente dont les affaires peuvent menacer les routes communes. Depuis l'explosion de Nyx, Caldris est la seule puissance extérieure à savoir que Valombre ne répond plus normalement au monde : ses convois et messagers reviennent systématiquement sans atteindre la cité. Les émissaires caldrisiens entrent par les Pierres du Traité, un vieux dispositif rituel datant du traité entre les deux cités — deux ancrages permettant le passage de porteurs assermentés, munis d'un mandat officiel et accompagnés d'un mage de frontière. Ce n'est pas un portail confortable : les émissaires arrivent pâles, saignants du nez, avec des souvenirs incomplets du trajet. Ils peuvent entrer, mais pas ouvrir la route aux marchands, aux armées ou aux réfugiés.",
    icone: Flag,
    couleur: "text-sky-300 border-sky-900 bg-sky-950/30",

    hierarchie: [
      {
        role: "Émissaire de Caldris",
        idPnj: "envoye_caldris",
        notes:
          "Représente la Marche auprès du Conseil et transmet les demandes officielles de son gouvernement.",
      },
      {
        role: "Champion de la Bannière Pure",
        idPnj: "champion_banniere_pure",
        notes:
          "Officier prestigieux chargé de représenter l’autorité militaire et les traditions chevaleresques de Caldris.",
      },
      {
        role: "Observateurs de frontière",
        idPnj: null,
        notes:
          "Scribes, éclaireurs et inspecteurs qui surveillent les routes, les cargaisons et les mouvements inhabituels.",
      },
    ],

    membres_cles: [
      {
        id: "envoye_caldris",
        nom: "Émissaire Maelric",
        role: "représentant diplomatique de Caldris",
      },
      {
        id: "champion_banniere_pure",
        nom: "Champion de la Bannière Pure",
        role: "officier et figure publique de la Marche",
      },
    ],

    idsPnj: ["envoye_caldris", "champion_banniere_pure"],

    objectifs: {
      court_terme:
        "Comprendre pourquoi les livraisons depuis Valombre ont cessé, déterminer s'il s'agit d'une trahison interne, d'un accord secret avec une autre puissance ou d'un phénomène inexpliqué, et maintenir une présence diplomatique dans la cité malgré l'impossibilité d'y accéder par les routes ordinaires.",
      long_terme:
        "Préserver la sécurité et l’influence de Caldris sur les routes orientales sans dépendre des décisions prises à Valombre.",
    },

    alliances: [
      {
        faction: "Le Conseil de Valombre",
        type: "rivalite",
        description:
          "Les deux gouvernements coopèrent sur les routes et la diplomatie, mais s’opposent dès que Caldris cherche à imposer ses propres contrôles dans la cité.",
      },
      {
        faction: "Le Clergé de Saint-Aldric",
        type: "alliance",
        description:
          "Les prêtres et les officiers de Caldris partagent un langage commun autour du devoir, de la responsabilité publique et de la protection des cols.",
      },
      {
        faction: "Communauté Naine",
        type: "rivalite",
        description:
          "Caldris enquête sur la rupture des livraisons et fouille les entrepôts, les routes et les galeries, soupçonnant une trahison ou un accord secret avec une autre puissance. Les clans nains ne comprennent pas pourquoi les officiers caldrisiens fourrent leur nez dans les affaires naines alors que, pour eux, tout se passe bien : les mines produisent, les contrats sont signés, les livraisons aux entrepôts sont régulières.",
      },
      {
        faction: "La Guilde Marchande",
        type: "rivalite",
        description:
          "La Guilde veut maintenir la circulation des convois, alors que les officiers de Caldris privilégient les inspections et la fermeture prudente des routes.",
      },
    ],

    forces_militaires: {
      effectifs:
		"Des officiers de frontière, des patrouilles montées, des éclaireurs et une délégation diplomatique installée à Valombre.",
      equipement:
        "Relais fortifiés, cavalerie légère, cartes routières et mandats caldrisiens.",
      capacites: [
        "Peut contrôler ou ralentir les voyageurs et les convois sur les routes orientales.",
        "Dispose d’un réseau d’observateurs entraînés à relever les mouvements inhabituels.",
        "Peut exercer une pression diplomatique importante sur le Conseil et les marchands.",
        "Dispose des Pierres du Traité, permettant d'envoyer des émissaires assermentés à Valombre malgré le déphasage — mais sans pouvoir ouvrir la route aux convois ou aux armées.",
      ],
      faiblesses: [
        "Ses représentants comprennent mal les usages locaux de Valombre.",
        "Sa préférence pour les preuves simples conduit souvent à des conclusions trop rapides.",
        "Une intervention trop visible renforce la méfiance de la population et des institutions locales.",
      ],
    },

    quetes_associees: [],
  },

  {
    nom: "La Guilde Marchande",
    type: "Corporation des négociants et maisons de commerce",
    description:
      "La Guilde Marchande organise une grande partie du commerce de Valombre. Elle fixe les horaires des marchés, contrôle les poids et les mesures, arbitre les litiges entre négociants et entretient le Beffroi de la Marchande. Les grandes maisons y défendent leurs intérêts, mais les petits boutiquiers peuvent également solliciter ses commis et ses arbitres. Depuis le déphasage, la Guilde maquille la rupture du commerce extérieur en crise de route : les entrepôts se remplissent lentement, les délais de paiement s'allongent, les lettres de crédit deviennent bizarres et les mêmes maisons marchandes achètent pour un convoi qui ne part jamais vraiment. La Guilde présente ces signes comme une prudence caldrisienne, une baisse temporaire de confiance ou une instabilité des routes orientales.",
    icone: Coins,
    couleur: "text-yellow-300 border-yellow-900 bg-yellow-950/30",

    hierarchie: [
      {
        role: "Première syndique",
        idPnj: "yselle_vaurin",
        notes:
          "Préside les assemblées, négocie avec le Conseil et tranche les conflits entre maisons marchandes.",
      },
      {
        role: "Maître du Beffroi",
        idPnj: "odran_bellec",
        notes:
          "Supervise l’horloge, les cloches de marché, les poids officiels et les registres d’ouverture des halles.",
      },
      {
        role: "Délégués des maisons",
        idPnj: null,
        notes:
          "Représentants élus ou mandatés par les négociants, transporteurs, changeurs et propriétaires d’entrepôts.",
      },
    ],

    membres_cles: [
      {
        id: "yselle_vaurin",
        nom: "Yselle Vaurin",
        role: "première syndique de la Guilde",
      },
      {
        id: "odran_bellec",
        nom: "Odran Bellec",
        role: "maître du Beffroi et gardien des mesures officielles",
      },
    ],

    idsPnj: ["yselle_vaurin", "odran_bellec"],

    objectifs: {
      court_terme:
        "Maintenir les marchés ouverts, garantir les contrats en cours et éviter les ruptures d’approvisionnement.",
      long_terme:
        "Préserver la liberté de commerce de Valombre et l’influence des maisons marchandes sur les décisions du Conseil.",
    },

    alliances: [
      {
        faction: "Le Conseil de Valombre",
        type: "alliance",
        description:
          "Le Conseil accorde les chartes et perçoit les taxes ; la Guilde fournit des recettes, des transports et des informations sur l’état des routes.",
      },
      {
        faction: "Communauté Naine",
        type: "alliance",
        description:
          "Le minerai, les outils et les ouvrages nains alimentent une grande partie du commerce de la cité.",
      },
      {
        faction: "Université Arcanique",
        type: "alliance",
        description:
          "La Guilde finance certaines recherches utiles au transport, à la conservation et à l’authentification des marchandises.",
      },
      {
        faction: "Le Syndicat des Brumes",
        type: "conflit",
        description:
          "La contrebande contourne les taxes et les monopoles, même si certains marchands utilisent parfois les services du Syndicat.",
      },
      {
        faction: "Caldris, Marche Extérieure",
        type: "rivalite",
        description:
          "Caldris est un partenaire commercial important, mais ses contrôles de frontière peuvent immobiliser les convois pendant plusieurs jours.",
      },
    ],

    forces_militaires: {
      effectifs:
        "Gardes d’entrepôt, commis, peseurs, courtiers, porteurs, conducteurs de convois et employés des grandes maisons.",
      equipement:
        "Registres de commerce, sceaux de garantie, poids officiels, entrepôts, lettres de crédit, contrats de transport et accès au Beffroi.",
      capacites: [
        "Peut retrouver l’origine déclarée d’une cargaison ou le garant d’un contrat.",
        "Peut mobiliser rapidement des chariots, des porteurs et des espaces de stockage.",
        "Peut suspendre un crédit ou refuser la reconnaissance d’un sceau marchand.",
      ],
      faiblesses: [
        "Dépend fortement de l’ouverture des routes et du fonctionnement des mines.",
        "Les grandes maisons défendent souvent leurs intérêts avant ceux de la Guilde.",
        "Son autorité est faible dans la Vieille Ville et sur les marchés clandestins.",
      ],
    },

    quetes_associees: [],
  },

  {
    nom: "Le Syndicat des Brumes",
    type: "Réseau criminel et contrebandier",
    description:
	  "Le Syndicat des Brumes organise une grande partie de la contrebande à Valombre. Ses passeurs utilisent les égouts, les caves et les ruelles de la Vieille Ville pour déplacer des marchandises, cacher des fugitifs ou transmettre des messages sans attirer l’attention de la garde. Le réseau repose sur quelques intermédiaires, des receleurs, des créanciers et des hommes de main. Il travaille avec tous ceux qui peuvent payer, mais chaque service accordé devient une dette que le Syndicat finit toujours par réclamer.",
    icone: Key,
    couleur: "text-gray-300 border-gray-700 bg-gray-950/40",

    hierarchie: [
      {
        role: "Le Collecteur",
        idPnj: "le_collecteur",
        notes:
          "Négocie les contrats sensibles, gère les dettes importantes et protège l’identité de certains clients.",
      },
      {
        role: "Contremaître des Égouts",
        idPnj: "contremaite_egouts",
        notes:
          "Contrôle les passages, les vannes, les chargements et les équipes qui travaillent sous la ville.",
      },
      {
        role: "Hommes de main",
        idPnj: "hommes_main_pegre",
        notes:
          "Assurent la surveillance, le recouvrement, l’intimidation et la protection des cargaisons.",
      },
    ],

    membres_cles: [
      {
        id: "le_collecteur",
        nom: "Le Collecteur",
        role: "intermédiaire et créancier",
      },
      {
        id: "contremaite_egouts",
        nom: "Brek",
        role: "logisticien des passages souterrains",
      },
      {
        id: "hommes_main_pegre",
        nom: "Hommes de main",
        role: "force de pression locale",
      },
    ],

    idsPnj: [
      "le_collecteur",
      "contremaite_egouts",
      "hommes_main_pegre",
    ],

    objectifs: {
      court_terme:
        "Maintenir les routes clandestines ouvertes, faire payer les dettes et éviter que les autorités identifient ses principaux relais.",
      long_terme:
        "Rester indispensable aux habitants et aux institutions qui ont besoin de services qu’ils ne peuvent pas demander publiquement.",
    },

    alliances: [
      {
        faction: "Ordre de Nyx",
        type: "alliance",
        description:
          "Certains cercles clandestins achètent des faux papiers, des réactifs, des passages et des lieux de stockage au Syndicat.",
      },
      {
        faction: "La Guilde Marchande",
        type: "rivalite",
        description:
          "La Guilde combat officiellement la contrebande, mais certaines maisons utilisent discrètement les routes du Syndicat lorsque les voies ordinaires sont trop lentes.",
      },
      {
        faction: "Le Conseil de Valombre",
        type: "conflit",
        description:
          "Le Conseil poursuit les trafics du Syndicat, tandis que celui-ci exploite les dettes, les habitudes et les faiblesses de certains fonctionnaires.",
      },
      {
        faction: "Le Clergé de Saint-Aldric",
        type: "conflit",
        description:
          "Le clergé surveille le trafic de reliques, de faux certificats funéraires et de biens volés aux morts.",
      },
      {
        faction: "Communauté Naine",
        type: "rivalite",
        description:
          "Les guildes naines protègent leurs galeries et leurs entrepôts, mais certains contrebandiers connaissent d’anciens passages sous les Terrasses.",
      },
    ],

    forces_militaires: {
      effectifs:
        "Hommes de main, guetteurs, passeurs, débiteurs, receleurs et informateurs répartis dans les quartiers bas.",
      equipement:
        "Passages secrets, caches, reconnaissances de dette, faux sceaux, armes de contrebande et registres compromettants.",
      capacites: [
        "Obtient rapidement des informations locales, à condition que quelqu’un accepte d’en payer le prix.",
        "Peut ouvrir ou fermer certaines routes dans les égouts et les quartiers bas.",
        "Peut fournir des marchandises, des identités ou des intermédiaires difficiles à trouver légalement.",
      ],
      faiblesses: [
        "La loyauté de ses membres dépend surtout de l’argent et de la peur.",
        "Le réseau devient vulnérable lorsqu’une route ou une identité est exposée.",
        "Ses différents responsables se concurrencent et dissimulent une partie de leurs affaires aux autres.",
      ],
    },

    quetes_associees: [],
  },

  {
    nom: "Le Clergé de Saint-Aldric",
    type: "Institution religieuse humaine",
    description:
      "Le Clergé de Saint-Aldric rassemble les prêtres de la grande cathédrale du Centre Civique et des chapelles de quartier. Il accompagne les habitants lors des mariages, des funérailles, des serments et des grandes fêtes de Valombre. Ses membres tiennent les registres des naissances, des unions et des décès, distribuent des aumônes et viennent parfois apaiser les conflits que les familles préfèrent ne pas porter devant le Conseil.",
    icone: Church,
    couleur: "text-stone-300 border-stone-700 bg-stone-950/40",

    hierarchie: [
      {
        role: "Prévôt de la cathédrale",
        idPnj: "geraud_veyre",
        notes:
          "Administre le chapitre, représente le clergé auprès du Conseil et préside les grandes cérémonies.",
      },
      {
        role: "Hospitalière des aumônes",
        idPnj: "alix_marne",
        notes:
          "Organise les distributions, les visites aux malades et l’aide aux familles qui ne peuvent payer des funérailles.",
      },
      {
        role: "Chapitre de Saint-Aldric",
        idPnj: null,
        notes:
          "Chanoines, prêtres de quartier, sacristains, copistes et gardiens chargés du culte quotidien.",
      },
    ],

    membres_cles: [
      {
        id: "geraud_veyre",
        nom: "Géraud Veyre",
        role: "prévôt de la cathédrale",
      },
      {
        id: "alix_marne",
        nom: "Sœur Alix Marne",
        role: "hospitalière chargée des aumônes",
      },
    ],

    idsPnj: ["geraud_veyre", "alix_marne"],

    objectifs: {
      court_terme:
        "Assurer les offices, tenir les registres et répondre aux besoins ordinaires des paroisses.",
      long_terme:
        "Conserver au culte de Saint-Aldric sa place dans la vie publique sans devenir un simple instrument du Conseil ou des familles influentes.",
    },

    alliances: [
      {
        faction: "Le Conseil de Valombre",
        type: "alliance",
        description:
          "Le clergé bénit les serments publics et les cérémonies civiques, mais tient à conserver son autorité sur les rites religieux.",
      },
      {
        faction: "La Guilde Marchande",
        type: "alliance",
        description:
          "Les maisons marchandes financent des œuvres, des chapelles et des distributions en échange de prestige et de messes commémoratives.",
      },
      {
        faction: "Communauté Naine",
        type: "rivalite",
        description:
          "Les deux traditions respectent les serments et les morts, mais ne partagent ni les mêmes rites ni la même conception de la mémoire funéraire.",
      },
      {
        faction: "Université Arcanique",
        type: "rivalite",
        description:
          "Le clergé consulte les mages pour certains phénomènes, tout en refusant que toute expérience spirituelle soit réduite à un mécanisme arcanique.",
      },
      {
        faction: "Ordre de Nyx",
        type: "conflit",
        description:
          "Les pratiques liées aux morts sont condamnées, même lorsque certains prêtres reconnaissent l’utilité des soins clandestins apportés aux plus pauvres.",
      },
    ],

    forces_militaires: {
      effectifs:
        "Prêtres, chanoines, sacristains, copistes, bénévoles, gardes de la cathédrale et responsables des œuvres de charité.",
      equipement:
        "Registres paroissiaux, archives funéraires, cloches, reliquaires, réserves d’aumônes, clés des chapelles et des cryptes.",
      capacites: [
        "Peut confirmer un mariage, une naissance, un décès ou un serment inscrit dans ses registres.",
        "Peut mobiliser rapidement des bénévoles pour une collecte, une veillée ou une distribution.",
        "Peut donner une forte portée publique à une déclaration prononcée devant l’autel.",
      ],
      faiblesses: [
        "Son influence est surtout reconnue par la population humaine.",
        "Le chapitre avance lentement lorsqu’une décision sort des usages établis.",
        "Les dons des grandes familles et des marchands créent des dépendances difficiles à reconnaître publiquement.",
      ],
    },

    quetes_associees: [],
  },
];