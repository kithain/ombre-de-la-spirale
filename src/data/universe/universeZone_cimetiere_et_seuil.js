export const zoneCimetiereEtSeuil = {
  id: "cimetiere_et_seuil",
  name: "Cimetière et Seuil",
  summary: "Nécropole en terrasses reliées par des escaliers étroits, seuil vers la Spirale.",
  details: [
    "Ambiance : Brume épaisse, statues gothiques, lanternes mourantes.",
    "Tension : Profanations récentes, veillées inquiètes, intervention de la Garde.",
    "Focus : Point de départ du premier scénario, lieu de passage vers la Spirale.",
    "Opportunités : Enquêtes, combats contre les morts-vivants, révélations sur la cabale nécromancienne."
  ],
  locations: [
    {
      id: "cimetiere_terrasse",
      name: "Cimetière en Terrasse",
      summary: "Gradins funéraires taillés dans la falaise.",
      details: [
        "Ambiance : Brouillard, silence, bruit lointain de la ville.",
        "Tests : Perception / Investigation pour repérer les tombes profanées.",
        "Ennemis : Pilleurs de tombes, morts-vivants, gardes nerveux.",
        "Usage : Scènes d'enquête, de garde de nuit, de premiers combats contre la nécromancie."
      ],
      npcIds: ["gardien_cimetiere"]
    },
    {
      id: "mausolee_seuil",
      name: "Mausolée Secret du Seuil",
      summary: "Tombeau scellé servant de sas vers la Spirale.",
      details: [
        "Ambiance : Froid mordant, silence étouffé, runes d'interdiction partiellement effacées.",
        "Tests : Religion / Arcane pour comprendre les runes naines de confinement.",
        "Ennemis : Chevaliers morts-vivants, gardiens de l'ancien ordre.",
        "Usage : Point de non-retour de la campagne, ouverture du puits vers la Spirale."
      ],
      npcIds: ["spectre_ancien_heros"]
    },
    {
      id: "mausolee_pont_secret",
      name: "Pont Secret des Mausolées",
      summary: "Passerelle étroite reliant deux terrasses funéraires, piégée par les nécromanciens.",
      details: [
        "Ambiance : Chaînes grinçantes, poussière de pierre, runes fissurées sous les pieds.",
        "Tests : Acrobaties / Perception pour éviter les sections sabotées.",
        "Danger : Gardiens gargouilles, charges explosives posées par Durnik.",
        "Usage : Lieu du sacrifice héroïque bloquant l'accès au Seuil."
      ],
      npcIds: ["durnik_chef_mineur"]
    },
    {
      id: "puits_spirale_abime",
      name: "Puits de l'Abîme Spirale",
      summary: "Ouverture verticale noire où l'on ressent l'appel de la Spirale.",
      details: [
        "Ambiance : Vent froid venant d'en bas, chuchotements lointains.",
        "Tests : Volonté / Escalade pour affronter le vertige et descendre en rappel.",
        "Danger : Tourbillons d'énergie attirant armes et âmes, assauts d'ombres.",
        "Usage : Dernière étape avant la fuite vers la Spirale lors de la chute de la ville."
      ],
      npcIds: []
    }
  ]
};
