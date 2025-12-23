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
      npcIds: ["chef_bandes_ruelles"]
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
      npcIds: ["aubergiste_pic_brise"]
    }
  ]
};
