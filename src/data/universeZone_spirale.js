export const zoneSpirale = {
  id: "spirale",
  name: "La Spirale",
  summary: "Donjon inversé aux lois changeantes, accessible par la brèche dans la mine.",
  details: [
    "Ambiance : Murmures lointains, gravité capricieuse, lumière violette sourde.",
    "Tension : L'architecture se reconfigure, rien n'est fiable longtemps.",
    "Focus : Les premiers cercles testent la résilience et la prudence des explorateurs.",
    "Opportunités : Découvrir la source des résonances, isoler la géode chantante, comprendre la conscience du lieu."
  ],
  locations: [
    {
      id: "spirale_premier_cercle",
      name: "Premier Cercle de la Spirale",
      summary: "Anfractuosités initiales après la fissure, couloirs qui se réécrivent derrière soi.",
      details: [
        "Règle : À chaque sortie d'une salle, le couloir précédent change de topologie.",
        "Dangers : Goules mineurs égarées, cubes nettoyeurs, instabilité gravitationnelle légère.",
        "Indices : Veines cristallines pulsant au rythme des résonances, inscriptions naines partiellement effacées.",
        "Usage : Première zone pour éprouver les règles de la Spirale et affronter la Géode chantante."
      ],
      npcs: [
        {
          id: "sentinelle_reliee",
          name: "Sentinelle reliée",
          role: "Golem poreux aux veines de cristal, surveille les intrusions.",
          isEnemy: true,
          details: [
            "Motivation : Contenir la propagation de la Géode chantante.",
            "Attitude : Attaque si le cristal de Thade résonne, sinon observe.",
            "Indice : Réagit faiblement aux symboles nains de confinement.",
            "Usage : Garde mobile pouvant être évitée par ruse ou négociation arcano-tech."
          ]
        },
        {
          id: "exploratrice_perdue",
          name: "Lysa, exploratrice perdue",
          role: "Éclaireuse humaine hagarde, rescapée d'une expédition précédente.",
          isEnemy: false,
          details: [
            "Motivation : Sortir vivante, avertir le Conseil de la conscience du donjon.",
            "Attitude : Méfiante mais coopérative si on partage eau/soins.",
            "Indice : Décrit un balcon donnant sur le 'donjon inversé'.",
            "Usage : Guide temporaire, peut fournir une carte déformée."
          ]
        }
      ]
    },
    {
      id: "spirale_balcon_inverse",
      name: "Balcon Inversé",
      summary: "Corniche donnant sur le vide, surplombant les structures retournées de la Spirale.",
      details: [
        "Vertige constant, pluie de poussière cristalline tombant vers le haut.",
        "Point d'observation idéal pour repérer des passerelles mouvantes.",
        "Risque : Chutes imprévisibles si la gravité change brusquement.",
        "Indice : On entend le chant de la Géode résonner plus fort ici."
      ],
      npcs: []
    },
    {
      id: "spirale_coeur_geode",
      name: "Cœur de la Géode Chantante",
      summary: "Salle cristalline où l'énergie de la Spirale se condense.",
      details: [
        "Pulsations lumineuses violettes synchronisées avec le cristal de Thade.",
        "Chant harmoniquement discordant, fatigue mentale accrue.",
        "Structure semi-organique : la géode se défend en modifiant l'espace.",
        "But : Détruire ou canaliser l'énergie pour stabiliser la mine."
      ],
      npcs: [
        {
          id: "geode_avatar",
          name: "Avatar de la Géode",
          role: "Manifestation semi-consciente de la Spirale.",
          isEnemy: true,
          details: [
            "Motivation : Protéger la source et étendre la résonance.",
            "Attitude : Communique par vibrations, peut négocier via empathie magique.",
            "Pouvoir : Déforme la géométrie, projette des ondes soniques.",
            "Faiblesse : Perturbée par les runes naines de confinement."
          ]
        }
      ]
    },
    {
      id: "spirale_zone_dechets",
      name: "Zone de Déchets",
      summary: "Îlots instables d'éboulis et de gravats, première halte après la chute.",
      details: [
        "Gravité erratique, brume violette, éclats cristallins tranchants.",
        "Le sol se désagrège si l'on s'y repose trop longtemps.",
        "Point d'entrée pour les survivants éjectés vers la Spirale.",
        "Vestiges nains indiquant que d'autres sont déjà tombés ici."
      ],
      npcs: [
        {
          id: "charognard_errant",
          name: "Charognard errant",
          role: "Prédateur opportuniste attiré par la chair fraîche.",
          isEnemy: true,
          details: [
            "Utilise les effondrements à son avantage.",
            "Fuit si blessé ou si la gravité se retourne.",
            "Présage des dangers naturels de la Spirale."
          ]
        }
      ]
    },
    {
      id: "spirale_couloirs_chair",
      name: "Couloirs de Chair",
      summary: "Vaisseaux organiques pulsants, réagissant aux émotions et au sang.",
      details: [
        "Parois veineuses, yeux incrustés, chuchotements humides.",
        "Gravité changeante, sols visqueux, escaliers de cartilage.",
        "La Spirale observe : tests de volonté et de sang-froid.",
        "Accès vers le laboratoire secret plus bas."
      ],
      npcs: [
        {
          id: "marchand_fou_mercane",
          name: "Le Marchand Fou (Mercane exilé)",
          role: "Vendeur opportuniste qui troque souvenirs et vitalité.",
          isEnemy: false,
          details: [
            "Motivation : Accumuler des artefacts de la Spirale pour regagner sa stature.",
            "Attitude : Polie mais cynique, aime les marchés tordus.",
            "Offres : Potions instables, informations sur le laboratoire.",
            "Danger : Peut trahir s'il voit un profit immédiat."
          ]
        }
      ]
    },
    {
      id: "spirale_labo_secret",
      name: "Laboratoire Secret de Thade",
      summary: "Complexe technomagique enchâssé dans la paroi, cœur des expériences de Thade.",
      details: [
        "Portes runiques, odeur d'ozone et de formol, bassins d'âmes.",
        "Production de corps réassemblés et d'artefacts de contrôle.",
        "Archives prouvant l'usage d'éclats de Spirale sur le cœur de Thade.",
        "Pont vers les zones mécaniques plus profondes."
      ],
      npcs: [
        {
          id: "sujet_zero",
          name: "Sujet Zéro",
          role: "Prototype vivant Troll/Démon, gardien du laboratoire.",
          isEnemy: true,
          details: [
            "Régénération tant que l'éclat de Spirale reste intact.",
            "Résistance à la magie, vulnérable aux dégâts radieux/soniques.",
            "Peut être distrait par des commandes technomagiques corrompues."
          ]
        }
      ]
    },
    {
      id: "spirale_salle_engrenages",
      name: "Salle des Engrenages",
      summary: "Cathédrale mécanique d'engrenages géants suspendus dans le vide.",
      details: [
        "Bruit assourdissant, vents tranchants, plateformes en rotation.",
        "Flux d'énergie alimentant la surface et les pylônes de Thade.",
        "Passerelles nécessitant synchronisation et sang-froid.",
        "Point de sabotage critique pour affaiblir Thade."
      ],
      npcs: [
        {
          id: "inevitable_contremetre",
          name: "Inévitable Contremètre",
          role: "Construct de Loi supervisant le flux d'énergie.",
          isEnemy: false,
          details: [
            "Objectif : Maintenir le mécanisme, hostile aux perturbations.",
            "Peut être convaincu que Thade est une anomalie à corriger.",
            "Dispose d'outils de gravité locale et de champ anti-magie."
          ]
        }
      ]
    },
    {
      id: "spirale_tunnel_teleport",
      name: "Tunnel de Téléportation",
      summary: "Colonne luminescente propulsant vers la surface, protégée par des ombres.",
      details: [
        "Flux d'énergie vertical, salles-tampons cyclées par la Spirale.",
        "Purge régulière des intrus par décharges d'ombre et de vide.",
        "Permet d'intercepter Thade pendant la remontée.",
        "Termine sur la Tour des Mages si le flux est inversé."
      ],
      npcs: []
    }
  ]
};
