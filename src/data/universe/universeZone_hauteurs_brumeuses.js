export const zoneHauteursBrumeuses = {
  id: "hauteurs_brumeuses",
  name: "Hauteurs Brumeuses",
  summary: "Plateaux supérieurs plongés dans la brume, domaine des nobles et des industriels.",
  details: [
    "Ambiance : Brume froide, jardins suspendus, balcons dominant la ville.",
    "Tension : Décalage extrême entre le confort des hauteurs et la misère du bas.",
    "Focus : Lieu des décisions politiques et des complots à grande échelle.",
    "Opportunités : Infiltration, espionnage, renversement d'alliances."
  ],
  locations: [
    {
      id: "hauteurs_brumeuses_quartier",
      name: "Quartier des Nobles",
      summary: "Manoirs murés, allées silencieuses et gardes blasés.",
      details: [
        "Ambiance : Silence feutré, parfums coûteux, lumière tamisée par la brume.",
        "Tests : Discrétion / Bluff pour se faire passer pour des invités.",
        "Ennemis : Gardes privés, mages de cour.",
        "Usage : Rencontres diplomatiques, chantages, soirées qui peuvent tourner au massacre."
      ],
      npcs: [
        {
          id: "bourgmestre",
          name: "Le Bourgmestre de Val-d'Ombre",
          role: "Dirigeant officiel dépassé par les événements.",
          isEnemy: false,
          details: [
            "Motivation : Maintenir l'illusion de stabilité et protéger son image.",
            "Attitude : Courtois, sincèrement inquiet mais trop influençable.",
            "Usage : Peut soutenir les PJ politiquement s'ils évitent de l'humilier.",
            "Spoiler léger : Devient un pion dans le jeu de Thade et du Conseil."
          ]
        }
      ]
    },
    {
      id: "manoir_bourgmestre",
      name: "Manoir du Bourgmestre",
      summary: "Résidence officielle, mélange de luxe fatigué et de paranoïa.",
      details: [
        "Ambiance : Couloirs chargés de portraits sévères, pièces de réception rarement utilisées.",
        "Tests : Investigation pour trouver des archives cachées sur la gestion de la ville.",
        "Ennemis : Espions infiltrés, gardes loyaux au Conseil plutôt qu'au Bourgmestre.",
        "Loot : Documents compromettants, lettres codées mentionnant la Spirale."
      ],
      npcs: [
        {
          id: "secretaire_bourgmestre",
          name: "Elira, secrétaire du Bourgmestre",
          role: "Administratrice compétente, sait tout sur la bureaucratie de la ville.",
          isEnemy: false,
          details: [
            "Motivation : Empêcher l'effondrement administratif de Val-d'Ombre.",
            "Attitude : Pressée, ironique, mais impressionnée par les PJ efficaces.",
            "Info : Possède des doubles de nombreuses clés et sceaux officiels.",
            "Usage : Peut falsifier ou accélérer des documents pour les PJ au besoin."
          ]
        }
      ]
    },
    {
      id: "chapelle_oublies",
      name: "Chapelle des Oubliés",
      summary: "Petit sanctuaire oublié coincé entre deux demeures nobles.",
      details: [
        "Ambiance : Silence épais, cierges presque consumés, statues de saints oubliés.",
        "Tests : Religion / Intuition pour percevoir la lassitude du clergé local.",
        "Ennemis potentiels : Fanatiques isolés, esprits amers.",
        "Usage : Refuge discret pour les PJ, lieu de confessions et de complots nocturnes."
      ],
      npcs: [
        {
          id: "clerc_desabuse",
          name: "Frère Malen, clerc désabusé",
          role: "Religieux qui doute autant de ses dieux que de ses supérieurs.",
          isEnemy: false,
          details: [
            "Motivation : Trouver un sens à la souffrance qui s'abat sur Val-d'Ombre.",
            "Attitude : Las, mais réceptif aux preuves concrètes apportées par les PJ.",
            "Info : A entendu parler de visions liées à la Spirale chez certains fidèles.",
            "Usage : Peut offrir un soutien moral, des soins et des rumeurs."
          ]
        }
      ]
    },
    {
      id: "balcons_brumeux",
      name: "Balcons du Brumeux",
      summary: "Passerelles dominant le vide, idéales pour rencontres secrètes et chutes spectaculaires.",
      details: [
        "Ambiance : Brume épaisse, vent glacé, vue plongeante sur le Cimetière et la Mine.",
        "Tests : Acrobatie / Discrétion lors de filatures en hauteur.",
        "Ennemis : Assassins, agents de Thade, créatures volantes invoquées.",
        "Usage : Scènes dramatiques de confrontation, de trahison ou de sacrifice."
      ],
      npcs: [
        {
          id: "assassin_masque",
          name: "L'Assassin Masqué",
          role: "Tueur à gages anonyme employé par diverses factions.",
          isEnemy: true,
          details: [
            "Motivation : L'argent et le frisson du danger.",
            "Attitude : Ne parle presque jamais, communique par gestes.",
            "Combat : Spécialiste des attaques surprise et des chutes mortelles.",
            "Spoiler : Peut être lié à une faction que les PJ croyaient alliée."
          ]
        }
      ]
    }
  ]
};
