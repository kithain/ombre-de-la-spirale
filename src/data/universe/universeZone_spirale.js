export const zoneSpirale = {
  id: "spirale",
  name: "La Spirale",
  summary:
    "Donjon inversé aux lois changeantes, accessible par la brèche dans la mine.",
  details: [
    "Ambiance : Murmures lointains, gravité capricieuse, lumière violette sourde.",
    "Tension : L'architecture se reconfigure, rien n'est fiable longtemps.",
    "Focus : Les premiers cercles testent la résilience et la prudence des explorateurs.",
    "Opportunités : Découvrir la source des résonances, isoler la géode chantante, comprendre la conscience du lieu.",
  ],
  locations: [
    {
      id: "spirale_premier_cercle",
      name: "Premier Cercle de la Spirale",
      summary:
        "Anfractuosités initiales après la fissure, couloirs qui se réécrivent derrière soi.",
      details: [
        "Règle : À chaque sortie d'une salle, le couloir précédent change de topologie.",
        "Danger : Goules mineurs égarées, cubes nettoyeurs, instabilité gravitationnelle légère.",
        "Indices : Veines cristallines pulsant au rythme des résonances, inscriptions naines partiellement effacées.",
        "Usage : Première zone pour éprouver les règles de la Spirale et affronter la Géode chantante.",
      ],
      npcIds: ["sentinelle_reliee", "lysa_exploratrice_perdue"],
    },
    {
      id: "spirale_engrenages_plenaires",
      name: "Engrenages Plénaires",
      summary:
        "Segment de contrôle où les engrenages modulent la gravité des niveaux supérieurs.",
      details: [
        "Ambiance : Éclairs d'énergie pure, vibrations continues, champ magnétique désorientant.",
        "Tests : Ingénierie / Acrobaties pour actionner les leviers synchronisés.",
        "Danger : Compression brutale pour ceux qui ratent le rythme, arcs électriques aléatoires.",
        "Usage : Désamorcer le mécanisme avant de pénétrer dans la Salle des Engrenages principale.",
      ],
      npcIds: [],
    },
    {
      id: "spirale_balcon_inverse",
      name: "Balcon Inversé",
      summary:
        "Corniche donnant sur le vide, surplombant les structures retournées de la Spirale.",
      details: [
        "Ambiance : Vertige constant, pluie de poussière cristalline tombant vers le haut.",
        "Usage : Point d'observation idéal pour repérer des passerelles mouvantes.",
        "Danger : Chutes imprévisibles si la gravité change brusquement.",
        "Indices : On entend le chant de la Géode résonner plus fort ici.",
      ],
      npcIds: [],
    },
    {
      id: "spirale_coeur_geode",
      name: "Cœur de la Géode Chantante",
      summary: "Salle cristalline où l'énergie de la Spirale se condense.",
      details: [
        "Ambiance : Pulsations lumineuses violettes synchronisées avec le cristal de Thade.",
        "Danger : Chant harmoniquement discordant, fatigue mentale accrue.",
        "Terrain : Structure semi-organique — la géode se défend en modifiant l'espace.",
        "Usage : Détruire ou canaliser l'énergie pour stabiliser la mine.",
      ],
      npcIds: ["geode_avatar"],
    },
    {
      id: "spirale_zone_dechets",
      name: "Zone de Déchets",
      summary:
        "Îlots instables d'éboulis et de gravats, première halte après la chute.",
      details: [
        "Ambiance : Gravité erratique, brume violette, éclats cristallins tranchants.",
        "Danger : Le sol se désagrège si l'on s'y repose trop longtemps.",
        "Usage : Point d'entrée pour les survivants éjectés vers la Spirale.",
        "Indices : Vestiges nains indiquant que d'autres sont déjà tombés ici.",
      ],
      npcIds: ["charognard_errant"],
    },
    {
      id: "spirale_couloirs_ether",
      name: "Couloirs de l'Éther",
      summary:
        "Galeries translucides suspendues dans le vide, parcourues de vents inverses.",
      details: [
        "Ambiance : Lumière blanche diffuse, poussière flottant à contresens, échos métalliques déformés.",
        "Tests : Acrobaties / Volonté pour garder son orientation quand la gravité pivote de 90°.",
        "Danger : Prédateurs éthérés, bourrasques aspirant vers le plafond devenu sol.",
        "Usage : Terrain d'introduction aux règles physiques absurdes avant de rejoindre les couloirs organiques.",
      ],
      npcIds: [],
    },
    {
      id: "spirale_couloirs_chair",
      name: "Couloirs de Chair",
      summary: "Vaisseaux organiques pulsants, réagissant aux émotions et au sang.",
      details: [
        "Ambiance : Parois veineuses, yeux incrustés, chuchotements humides.",
        "Terrain : Gravité changeante, sols visqueux, escaliers de cartilage.",
        "Tests : Volonté / Sang-froid — la Spirale observe.",
        "Usage : Accès vers le laboratoire secret plus bas.",
      ],
      npcIds: ["marchand_fou_mercane"],
    },
    {
      id: "spirale_carrefour_mercane",
      name: "Carrefour du Mercane",
      summary:
        "Plateforme hexagonale où convergent six veines vivantes, transformée en bazar interdit.",
      details: [
        "Ambiance : Odeur d'ozone et de térébenthine, cliquetis d'artefacts suspendus autour d'un brasero violet.",
        "Tests : Marchandage / Bluff (souvenirs contre ressources).",
        "Danger : Contrats piégés qui siphonnent des niveaux ou des souvenirs des PJ.",
        "Usage : Rencontre avec le Marchand Fou, accès à des informations sur les niveaux inférieurs.",
      ],
      npcIds: ["marchand_fou_mercane"],
    },
    {
      id: "spirale_salle_miroirs",
      name: "Salle des Miroirs du Regret",
      summary: "Cylindre tapissé de miroirs liquides reflétant des futurs possibles.",
      details: [
        "Ambiance : Chuchotements familiers, battements de cœur amplifiés, froid psychique.",
        "Tests : Volonté / Bluff contre soi-même pour accepter un secret ou subir des dégâts mentaux.",
        "Danger : Reflets qui sortent des miroirs si l'on ment.",
        "Usage : Confronter les PJ à leurs regrets avant d'accéder au mécanisme d'ascenseur.",
      ],
      npcIds: [],
    },
    {
      id: "spirale_labo_secret",
      name: "Laboratoire Secret de Thade",
      summary:
        "Complexe technomagique enchâssé dans la paroi, cœur des expériences de Thade.",
      details: [
        "Ambiance : Portes runiques, odeur d'ozone et de formol, bassins d'âmes.",
        "Danger : Production de corps réassemblés et d'artefacts de contrôle.",
        "Indices : Archives prouvant l'usage d'éclats de Spirale sur le cœur de Thade.",
        "Usage : Pont vers les zones mécaniques plus profondes.",
      ],
      npcIds: ["sujet_zero"],
    },
    {
      id: "spirale_bibliotheque_ames",
      name: "Bibliothèque de Cristal des Âmes",
      summary:
        "Galerie d'étagères faites d'os et de quartz, contenant des souvenirs piégés.",
      details: [
        "Ambiance : Bourdonnement harmonique, lueurs prisonnières dans chaque fiole.",
        "Tests : Connaissance / Utilisation d'objets magiques pour consulter sans libérer les esprits.",
        "Danger : Fantômes archivistes, surtension mentale en cas de lecture prolongée.",
        "Usage : Révéler le plan d'immortalité de Thade et des indices sur la Spirale.",
      ],
      npcIds: [],
    },
    {
      id: "spirale_laboratoire_clonage",
      name: "Laboratoire de Clonage",
      summary: "Chaîne de montage charnelle où des corps recomposés sont assemblés.",
      details: [
        "Ambiance : Pistons organiques, odeur d'aldéhyde, éclats de métal ensanglantés.",
        "Tests : Sabotage / Artisanat (alchimie) pour dérégler les cuves.",
        "Danger : Berserkers fraîchement sortis des cuves, alarmes appelant Sujet Zéro.",
        "Usage : Prouver que Thade produit ses armées artificielles.",
      ],
      npcIds: [],
    },
    {
      id: "spirale_salle_engrenages",
      name: "Salle des Engrenages",
      summary: "Cathédrale mécanique d'engrenages géants suspendus dans le vide.",
      details: [
        "Ambiance : Bruit assourdissant, vents tranchants, plateformes en rotation.",
        "Terrain : Flux d'énergie alimentant la surface et les pylônes de Thade.",
        "Tests : Passerelles nécessitant synchronisation et sang-froid.",
        "Usage : Point de sabotage critique pour affaiblir Thade.",
      ],
      npcIds: ["inevitable_contremetre"],
    },
  ],
};
