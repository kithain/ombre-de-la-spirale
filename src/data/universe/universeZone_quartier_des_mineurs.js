export const zoneQuartierDesMineurs = {
  id: "quartier_des_mineurs",
  name: "Quartier des Mineurs",
  summary: "Niveau du sol au pied de la falaise, quartier ouvrier nain où la tension sociale est permanente.",
  details: [
    "Ambiance : Bruyant, saturé de poussière et de jurons nains.",
    "Tension : Piquets de grève, charrettes renversées, familles prêtes à tout pour quitter la ville.",
    "Focus : Cœur du conflit social entre la Guilde des Mineurs, le Conseil et la Guilde des Mages.",
    "Opportunités : Recruter des alliés temporaires, provoquer des émeutes ou organiser des actions de sabotage."
  ],
  locations: [
    {
      id: "quartier_des_mineurs_place",
      name: "Place Centrale du Quartier",
      summary: "Carrefour bruyant où se croisent mineurs, contremaîtres et familles épuisées.",
      details: [
        "Ambiance : Cris, odeur de sueur et de charbon, fumée des forges en arrière-plan.",
        "Tests : Diplomatie / Intimidation pour calmer ou enflammer la foule.",
        "Ennemis potentiels : Casseurs ou briseurs de grève manipulés par Thade.",
        "Opportunités : Lancer des rumeurs, organiser une manifestation, négocier avec les meneurs de grève."
      ],
      npcs: [
        {
          id: "durnik_chef_mineur",
          name: "Durnik, chef de la Guilde des Mineurs",
          role: "Leader syndical nain, protecteur de sa communauté.",
          isEnemy: false,
          details: [
            "Motivation : Protéger les mineurs de la 'pierre malade' et des décisions du Conseil.",
            "Attitude : Bourru mais honnête. Respecte les PJ qui prennent des risques pour les siens.",
            "Utilisation : Donneur de quêtes pour les scénarios liés à la Mine et à la Spirale.",
            "Test social : Difficile à convaincre si les PJ sont trop proches des Mages ou du Conseil."
          ]
        },
        {
          id: "contremaitre_humain",
          name: "Varrus, contremaître humain",
          role: "Intermédiaire entre le Conseil et les mineurs.",
          isEnemy: true,
          details: [
            "Motivation : Maintenir la production coûte que coûte pour conserver ses privilèges.",
            "Attitude : Méprisant envers les Nains, agressif envers les PJ qui remettent en cause l'autorité.",
            "Combat : Peut devenir un antagoniste lors d'une émeute ou d'un piquet de grève qui dégénère.",
            "Indice : Reçoit des ordres indirectement liés à Thade via des lettres scellées."
          ]
        }
      ]
    },
    {
      id: "quartier_artisan_patrouille",
      name: "Allée des Artisans",
      summary:
        "Rue principale bordée d'ateliers métallurgiques, devenue terrain de rafles improvisées.",
      details: [
        "Ambiance : Vapeur brûlante, marteaux arrêtés net, torches renversées.",
        "Tests : Discrétion / Acrobaties pour se faufiler entre les barrages de caisses.",
        "Danger : Patrouilles mixtes (gardes humains, automates de la Guilde), dénonciations forcées.",
        "Usage : Montrer la violence de la Loi Martiale et les arrestations ciblant les Nains."
      ],
      npcs: [
        {
          id: "patrouille_mixte_conseil",
          name: "Patrouille mixte du Conseil",
          role: "Escouade composite chargée de briser la résistance artisanale.",
          isEnemy: true,
          details: [
            "Motivation : Appliquer les ordres de Thade sous couvert du Conseil.",
            "Tactiques : Barricader les ruelles, utiliser des immobilisations magiques.",
            "Indice : Le chef porte un cristal relais identique à celui de Thade."
          ]
        }
      ]
    },
    {
      id: "entree_mine_valdombre",
      name: "Entrée de la Mine",
      summary:
        "Palissade gardée et cage de descente massive, point de passage obligé entre la surface et les profondeurs.",
      details: [
        "Ambiance : Rugissement du treuil, fumée de torches, martèlement des boucliers des gardes.",
        "Tests : Diplomatie / Intimidation pour franchir le piquet de grève sans violence.",
        "Danger : Risque d'émeute, sabotage latent, surveillants prêts à déclencher l'alarme.",
        "Usage : Contrôle d'accès vers la Mine d'Argent, négociations entre Guildes et PJ."
      ],
      npcs: [
        {
          id: "garde_portail_mine",
          name: "Escouade de gardes du portail",
          role: "Soldats épuisés chargés de verrouiller l'accès.",
          isEnemy: true,
          details: [
            "Motivation : Obéir aux ordres contradictoires du Conseil tout en évitant un massacre.",
            "Attitude : Nerveuse, soupçonne les PJ d'espionnage.",
            "Usage : Obstacles physiques ou négociation sous pression.",
            "Indice : Portent des sceaux falsifiés liés aux lettres de Thade."
          ]
        }
      ]
    },
    {
      id: "forge_thorgar_refuge",
      name: "Forge-Refuge de Thorgar",
      summary:
        "Atelier latéral du Temple-Forgeron converti en sanctuaire provisoire pour les blessés et chefs nains.",
      details: [
        "Ambiance : Chaleur étouffante des fours, murmures de prières, odeur d'huile brûlée.",
        "Tests : Premiers secours / Artisanat (forge) pour stabiliser les défenses improvisées.",
        "Danger : Effondrement possible si les glyphes sont sabordés de l'intérieur.",
        "Usage : Lieu des décisions morales, confrontation directe avec Thorgar sur la stratégie."
      ],
      npcs: [
        {
          id: "thorgar_pretre_nain",
          name: "Thorgar, prêtre du Temple-Forgeron",
          role: "Chef militaire et spirituel du quartier.",
          isEnemy: false,
          details: [
            "Motivation : Sauver les civils enfermés dans les caves adjacentes.",
            "Attitude : Partagé entre préserver les innocents et suivre les tactiques des PJ.",
            "Usage : Déclenche le 'Dilemme de Thorgar' : tenir ou sauver les réfugiés."
          ]
        }
      ]
    },
    {
      id: "temple_forgeron",
      name: "Temple-Forgeron des Nains",
      summary: "Forteresse-temple creusée dans la roche, cœur spirituel et militaire des Nains.",
      details: [
        "Ambiance : Chant religieux sourd mêlé au martèlement des marteaux sur l'enclume sacrée.",
        "Tests : Religion / Histoire pour comprendre les runes de protection gravées dans la pierre.",
        "Ennemis : Pendant la Nuit des Longs Couteaux, assaillants morts-vivants et fanatiques de Thade.",
        "Loot : Reliques naines, armes bénies contre les morts-vivants, accès à des bénédictions temporaires."
      ],
      npcs: [
        {
          id: "thorgar_pretre_nain",
          name: "Thorgar, prêtre du Temple-Forgeron",
          role: "Allié clé, donneur de quêtes lié au cimetière et à la défense de la ville.",
          isEnemy: false,
          details: [
            "Motivation : Protéger la mémoire des morts et empêcher l'ouverture de la Spirale.",
            "Attitude : Grave, inflexible sur les questions sacrées, mais reconnaissant envers les PJ.",
            "Usage : Point d'ancrage moral de la campagne, peut octroyer soins et informations secrètes.",
            "Lien : Premier à parler de la 'maladie' de la montagne et de la folie de creuser trop profond."
          ]
        },
        {
          id: "capitaine_garde_temple",
          name: "Capitaine de la Garde du Temple",
          role: "Officier humain détaché, partagé entre obéissance au Conseil et respect des Nains.",
          isEnemy: true,
          details: [
            "Motivation : Maintenir l'ordre et éviter une guerre civile ouverte.",
            "Attitude : Suspicion envers les PJ impliqués dans trop d'incidents.",
            "Combat : Peut devenir un ennemi direct si les PJ se rangent ouvertement du côté des Nains contre le Conseil.",
            "Spoiler : Manipulé par des ordres falsifiés provenant de la faction de Thade."
          ]
        }
      ]
    },
    {
      id: "egouts_val_dombre",
      name: "Égouts de Val-d'Ombre",
      summary: "Réseau ancien reliant quartiers pauvres, Temple-Forgeron et Cimetière.",
      details: [
        "Ambiance : Souterrains sombres, odeurs pestilentielles, eau stagnante.",
        "Tests : Survie / Perception pour éviter de se perdre ou tomber dans des fosses cachées.",
        "Ennemis : Rats géants, charognards, expériences ratées de nécromancie.",
        "Usage : Voie de fuite, terrain de guérilla naine et d'infiltration discrète."
      ],
      npcs: [
        {
          id: "sniv_kobold",
          name: "Sniv, kobold égaré",
          role: "Guide tremblant mais utile dans le réseau d'égouts.",
          isEnemy: false,
          details: [
            "Motivation : Survivre et quitter les tunnels hantés.",
            "Attitude : Apeuré, très superstitieux, respecte la force et les démonstrations de magie.",
            "Utilisation : Peut éviter au groupe plusieurs combats ou embuscades s'il est bien traité.",
            "Récompense : Indique des caches oubliées laissées par d'anciens contrebandiers."
          ]
        }
      ]
    },
    {
      id: "taverne_fumees_rouges",
      name: "Taverne des Fumées Rouges",
      summary: "Bouge enfumé fréquenté par contremaîtres, dockers et mercenaires sans contrat.",
      details: [
        "Ambiance : Fumée épaisse, tables collantes, rires gras et bagarres régulières.",
        "Tests : Perception / Intuition pour repérer les vrais informateurs parmi les ivrognes.",
        "Ennemis potentiels : Brutes locales, collecteurs de dettes.",
        "Opportunités : Recruter des mercenaires, régler des dettes, provoquer une diversion."
      ],
      npcs: [
        {
          id: "tenancier_taverne",
          name: "Mara, tenancière des Fumées Rouges",
          role: "Informatrice neutre, voit tout passer.",
          isEnemy: false,
          details: [
            "Motivation : Garder sa clientèle en vie juste assez longtemps pour qu'elle revienne payer.",
            "Attitude : Cynique mais pragmatique, apprécie les PJ qui paient comptant.",
            "Info : Vend volontiers des rumeurs sur les mouvements de la Garde et de la Guilde des Mineurs.",
            "Secret : Cache parfois des réfugiés ou des fuyards dans ses caves."
          ]
        }
      ]
    }
  ]
};
