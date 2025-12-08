export const zoneProfondeursMine = {
  id: "profondeurs_mine",
  name: "Profondeurs de la Mine",
  summary: "Réseau de galeries profondes, poumon économique et porte brisée vers la Spirale.",
  details: [
    "Ambiance : Grincement des cages de descente, chaleur étouffante, poussière de roche.",
    "Tension : Mineurs terrorisés par les hurlements de la pierre.",
    "Focus : Découverte de la paroi de la Spirale au niveau -8.",
    "Opportunités : Exploration, survie, sabotage, négociations avec la Guilde des Mineurs."
  ],
  locations: [
    {
      id: "mine_argent",
      name: "La Mine d'Argent",
      summary: "Galeries principales et niveaux de travail ordinaires.",
      details: [
        "Ambiance : Lumière de lanternes, claquement des pioches, rails grinçants.",
        "Tests : Survie / Ingénierie pour éviter les effondrements et poches de gaz.",
        "Ennemis : Monstres fouisseurs, créatures attirées par la magie de la Spirale.",
        "Usage : Lieu d'introduction à la menace surnaturelle dans les profondeurs."
      ],
      npcs: [
        {
          id: "contremaitre_nain_mine",
          name: "Grelm, contremaître nain",
          role: "Nain pragmatique chargé de la sécurité des galeries.",
          isEnemy: false,
          details: [
            "Motivation : Renvoyer tout le monde vivant à la surface.",
            "Attitude : Bourru, se méfie des aventuriers trop téméraires.",
            "Info : Connaît les zones déjà 'maudites' de la mine.",
            "Usage : Guide officieux pour les premières explorations."
          ]
        }
      ]
    },
    {
      id: "galeries_silencieuses",
      name: "Galeries Silencieuses",
      summary: "Niveaux -1 à -7 abandonnés après les premiers hurlements de la pierre.",
      details: [
        "Ambiance : Tables renversées, repas à moitié mangés, outils abandonnés.",
        "Tests : Perception / Sang-froid pour affronter l'atmosphère oppressante.",
        "Ennemis : Monstres rouilleurs, ankhegs, morts oubliés.",
        "Usage : Exploration horrifique et pistes vers la paroi de la Spirale."
      ],
      npcs: [
        {
          id: "geometre_fou",
          name: "Cadavre du géomètre fou",
          role: "Source d'indices post-mortem.",
          isEnemy: false,
          details: [
            "Motivation (de son vivant) : Cartographier l'impossible.",
            "Indice : Journal décrivant des galeries qui s'allongent quand on ne les regarde pas.",
            "Usage : Point de bascule vers la compréhension de l'architecture vivante de la Spirale.",
            "Loot : Plans déformés mais précieux pour naviguer dans les profondeurs."
          ]
        }
      ]
    }
  ]
};
