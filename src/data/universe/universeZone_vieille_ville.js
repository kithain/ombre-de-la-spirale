export const zoneVieilleVille = {
  id: "vieille_ville",
  name: "Vieille Ville",
  summary: "Quartier le plus ancien, labyrinthe de ruelles étroites et de maisons penchées.",
  details: [
    "Ambiance : Linge humide suspendu, pavés glissants, odeur de moisi.",
    "Tension : Refuge des marginaux, des apprentis mages en fuite et des contrebandiers.",
    "Focus : Terrain idéal pour les filatures, embuscades et planques secrètes.",
    "Opportunités : Réseaux d'information parallèles, caches d'objets illicites."
  ],
  locations: [
    {
      id: "vieille_ville_ruelles",
      name: "Vieille Ville et Ruelles Basses",
      summary: "Réseau de ruelles serrées où l'on se perd facilement.",
      details: [
        "Ambiance : Obscurité, murs humides, voix étouffées derrière les volets.",
        "Tests : Discrétion / Perception pour éviter les embuscades.",
        "Ennemis : Bandits, espions, créatures tapis dans l'ombre.",
        "Usage : Terrain de jeu des criminels et des complots mineurs."
      ],
      npcs: [
        {
          id: "chef_bandes_ruelles",
          name: "Rask, chef de bande de la Vieille Ville",
          role: "Petit seigneur du crime local.",
          isEnemy: true,
          details: [
            "Motivation : Contrôler les ruelles et racketter les marchands.",
            "Attitude : Arrogant, déteste qu'on lui marche sur les pieds.",
            "Combat : Entouré de voyous, connaît tous les raccourcis pour fuir.",
            "Usage : Antagoniste récurrent ou allié forcé contre une menace plus grande."
          ]
        }
      ]
    },
    {
      id: "auberge_pic_brise",
      name: "Auberge \"Le Pic Brisé\"",
      summary: "Grande auberge de bois sombre, point de départ idéal de la campagne.",
      details: [
        "Ambiance : Rires fatigués, odeur de bière, feu chaleureux dans l'âtre.",
        "Tests : Renseignements pour glaner les premières rumeurs sur le Cimetière et la Mine.",
        "Ennemis potentiels : Ivrognes agressifs, collecteurs de dettes.",
        "Usage : Point de rencontre initial, lieu où les PJ reçoivent leurs premières offres de mission."
      ],
      npcs: [
        {
          id: "aubergiste_pic_brise",
          name: "Brand, aubergiste du Pic Brisé",
          role: "Hôte bien informé qui entend toutes les conversations.",
          isEnemy: false,
          details: [
            "Motivation : Garder son auberge neutre et prospère.",
            "Attitude : Jovial mais prudent, n'aime pas les bagarres gratuites.",
            "Info : Fournit rumeurs sur le Cimetière, le Temple-Forgeron et la Garde.",
            "Usage : Source constante de missions secondaires et de contacts."
          ]
        }
      ]
    }
  ]
};
