export const zoneQuartierDuSavoir = {
  id: "quartier_du_savoir",
  name: "Quartier du Savoir",
  summary: "Quartier en terrasses dédié au savoir, aux bibliothèques et aux expériences secrètes.",
  details: [
    "Ambiance : De jour, agitation studieuse ; de nuit, complots en robe noire.",
    "Tension : Rivalités entre étudiants, professeurs et cabales secrètes.",
    "Focus : Point d'entrée idéal pour enquêter sur la Spirale et les expériences de nécromancie.",
    "Opportunités : Accès aux archives interdites, à des mentors ou à des ennemis puissants."
  ],
  locations: [
    {
      id: "quartier_du_savoir_coeur",
      name: "Cœur du Quartier du Savoir",
      summary: "Terrasses de tours fines reliées par des passerelles couvertes.",
      details: [
        "Ambiance : Odeur d'encre, de parchemin et d'ozone magique.",
        "Tests : Connaissances / Investigation pour glaner des informations discrètes.",
        "Danger : Espions de Thade à l'affût de toute curiosité mal placée.",
        "Usage : Lieu de rencontres rapides avec différents érudits et étudiants."
      ],
      npcs: [
        {
          id: "etudiante_cabale",
          name: "Lyssia, étudiante de la cabale Nyx",
          role: "Informatrice nerveuse sur les agissements de ses anciens camarades.",
          isEnemy: false,
          details: [
            "Motivation : Se protéger de la disgrâce de la cabale et survivre à la purge.",
            "Attitude : Méfiante envers les PJ liés au Temple-Forgeron.",
            "Info : Connaît des entrées secondaires vers les laboratoires de la Tour des Mages.",
            "Évolution : Peut devenir une alliée majeure ou une traîtresse, selon la façon dont les PJ la traitent."
          ]
        }
      ]
    },
    {
      id: "tour_des_mages_toit",
      name: "Toit de la Tour des Mages",
      summary: "Plateforme d'affrontement final, balayée par les vents et les éclairs arcaniques.",
      details: [
        "Quatre pylônes alimentent un bouclier de force sur le boss.",
        "Vue panoramique sur Val-d'Ombre en ruine.",
        "Terrain : risque de chute, éclairs, gravité instable lors de la fusion.",
        "Climax : lieu de la confrontation contre Thade et la Spirale."
      ],
      npcs: [
        {
          id: "kaelen_vampire",
          name: "Kaelen, l'apprenti favori",
          role: "Vampire mage, dernier rempart avant le sommet.",
          isEnemy: true,
          details: [
            "Protecteur loyal de Thade, espère l'immortalité via la Spirale.",
            "Contrôle des nuées d'ombres et des contre-sorts.",
            "Peut être retourné par la promesse d'un pouvoir indépendant de Thade."
          ]
        }
      ]
    },
    {
      id: "tour_des_mages",
      name: "Tour des Mages",
      summary: "Symbole de la Guilde des Mages, cœur du pouvoir magique de la ville.",
      details: [
        "Ambiance : Brume violette, éclairs arcaniques, silhouettes en robes observant la ville.",
        "Tests : Arcane / Politique pour naviguer entre les différentes factions de mages.",
        "Ennemis : Apprentis fanatisés, élémentaires liés, gardiens magiques.",
        "Climax : Devient théâtre du combat final contre Thade dans la campagne."
      ],
      npcs: [
        {
          id: "thade_coren",
          name: "Thade Coren",
          role: "Antagoniste principal, professeur respecté en façade.",
          isEnemy: true,
          details: [
            "Motivation : Fusionner avec la Spirale pour atteindre l'immortalité.",
            "Masque : Froid, académique, se présente comme un allié rationnel.",
            "Spoiler : Manipule les PJ dès les premiers scénarios en orientant leurs enquêtes.",
            "Combat : Dans le final, utilise la Tour comme catalyseur d'énergie nécromantique."
          ]
        },
        {
          id: "archimage_defecteur",
          name: "Archimage Défecteur",
          role: "Ancien maître du Conseil, tente de saboter Thade de l'intérieur.",
          isEnemy: false,
          details: [
            "Motivation : Stopper Thade avant la fusion avec la Spirale.",
            "Attitude : Paranoïaque, exige des preuves de loyauté.",
            "Pouvoir : Portails rapides, contre-mesures anti-nécromancie.",
            "Usage : Peut fournir des clés de contournement dans la Tour."
          ]
        },
        {
          id: "magi_tuteur_loyal",
          name: "Maître Arcaniste Loyaliste",
          role: "Professeur resté fidèle à la Guilde, mais pas à Thade.",
          isEnemy: true,
          details: [
            "Motivation : Protéger la Tour contre toute intrusion, PJ compris.",
            "Attitude : Arrogant, déclenche des runes de défense sans sommation.",
            "Pouvoir : Champs de force, glyphes de renvoi, serviteurs élémentaires.",
            "Usage : Mini-boss ou négociateur si convaincu que Thade trahit la Guilde."
          ]
        }
      ]
    },
    {
      id: "universite_arcane",
      name: "Université Arcane et Bibliothèques",
      summary: "Complexe d'amphithéâtres, de salles de cours et d'archives interdites.",
      details: [
        "Ambiance : Chuchotements, pages tournées, chandelles vacillantes.",
        "Tests : Recherche / Investigation pour dénicher des informations sur la Spirale et la nécromancie.",
        "Ennemis : Bibliothécaires zélés, sorts de défense animant les livres et les étagères.",
        "Loot : Grimoires, parchemins de sorts, notes de recherches compromettantes."
      ],
      npcs: [
        {
          id: "bibliothecaire_interdits",
          name: "Maître Selvar, gardien des Archives Interdites",
          role: "Gardien sourcilleux des secrets arcaniques.",
          isEnemy: false,
          details: [
            "Motivation : Protéger les connaissances dangereuses, même contre le Conseil.",
            "Attitude : Froid mais juste, respecte les pactes et les serments.",
            "Info : Connaît l'existence de la Spirale et soupçonne Thade, sans pouvoir le prouver.",
            "Prix : Exige un serment ou un sacrifice symbolique pour l'accès à certains savoirs."
          ]
        }
      ]
    },
    {
      id: "place_marche_noir",
      name: "Place du Marché Noir",
      summary: "Place couverte à l'écart des patrouilles, dédiée aux transactions interdites.",
      details: [
        "Ambiance : Torches bleuâtres, voix basses, marchandises cachées sous des bâches.",
        "Tests : Négociation / Intimidation pour obtenir des objets rares sans se faire dépouiller.",
        "Ennemis potentiels : Voleurs, assassins, espions.",
        "Loot : Composants nécromantiques, artefacts de la Spirale, informations vendues au plus offrant."
      ],
      npcs: [
        {
          id: "marchand_gris",
          name: "Le Marchand Gris",
          role: "Vendeur mystérieux d'objets dangereux.",
          isEnemy: true,
          details: [
            "Motivation : L'appât du gain et une fascination malsaine pour les reliques de la Spirale.",
            "Attitude : Poli, presque amical, mais toujours en train d'évaluer la valeur des PJ.",
            "Spoiler : A déjà vendu du matériel à la cabale d'apprentis nécromanciens.",
            "Usage : Peut fournir des artefacts puissants au prix de conséquences lourdes."
          ]
        }
      ]
    }
  ]
};
