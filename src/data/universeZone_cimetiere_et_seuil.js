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
      npcs: [
        {
          id: "gardien_cimetiere",
          name: "Varek, gardien du cimetière",
          role: "Employé fatigué qui a tout vu sans être cru.",
          isEnemy: false,
          details: [
            "Motivation : Que les morts restent tranquilles et qu'on le laisse finir ses nuits en paix.",
            "Attitude : Râleur mais lâche, préfère prévenir plutôt qu'intervenir.",
            "Info : A vu des silhouettes transporter des corps entiers, pas des bijoux.",
            "Usage : Premier témoin clé des événements du scénario 1."
          ]
        }
      ]
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
      npcs: [
        {
          id: "spectre_ancien_heros",
          name: "Spectre d'un ancien héros nain",
          role: "Gardien spectral du Seuil.",
          isEnemy: true,
          details: [
            "Motivation : Empêcher quiconque de rouvrir le passage vers la Spirale.",
            "Attitude : Hostile par défaut, mais peut être apaisé par des preuves de nécessité.",
            "Combat : Combat redoutable, mais peut être évité par des rites appropriés.",
            "Spoiler : Révèle des fragments de la véritable histoire de la première rencontre avec la Spirale."
          ]
        }
      ]
    }
  ]
};
