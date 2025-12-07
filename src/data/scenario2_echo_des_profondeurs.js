export const scenario2 = {
  id: 2,
  title: "SCÉNARIO 2 : L'ÉCHO DES PROFONDEURS",
  level: "Niveaux 4-6",
  synopsis:
    "Grève des mineurs car 'la pierre hurle'. La mine a percé la paroi de la Spirale. Exploration souterraine.",
  acts: [
    {
      title: "ACTE 1 : LA GRÈVE DE LA PIOCHE",
      stake: "Social et tension politique.",
      location: "Quartier des Mineurs.",
      scenes: [
        {
          title: "Scène 1 : Le Conseil de Crise",
          type: "Social",
          locationId: "quartier_des_mineurs_place",
          npcIds: ["durnik_chef_mineur", "thade_coren"],
          details: [
            "Hôtel de Ville. Revenus gelés.",
            "Thade remet un 'Cristal de Résonance' aux PJ (en fait un mouchard).",
          ],
        },
        {
          title: "Scène 2 : Le Quartier Paralysé",
          type: "Ambiance",
          locationId: "quartier_des_mineurs_place",
          npcIds: ["tenancier_taverne"],
          details: [
            "Silence inhabituel. Familles prêtes à fuir.",
            "Rumeurs : 'Les murs saignent', 'Ombres vivantes'.",
          ],
        },
        {
          title: "Scène 3 : Le Piquet de Grève",
          type: "Négociation",
          locationId: "mine_argent",
          npcIds: ["durnik_chef_mineur"],
          details: [
            "Durnik (chef mineur) bloque l'entrée.",
            "Test (Diplomatie/Bluff) : Convaincre de laisser passer des étrangers.",
          ],
        },
        {
          title: "Scène 4 : L'Équipement",
          type: "Préparation",
          locationId: "mine_argent",
          npcIds: ["durnik_chef_mineur"],
          details: [
            "Durnik prévient : 'On ferme la porte blindée derrière vous'.",
            "Matériel : Lampes, cordes, carte sommaire.",
          ],
        },
        {
          title: "Scène 5 : La Cage",
          type: "Transition",
          locationId: "mine_argent",
          details: [
            "Descente interminable dans le monte-charge.",
            "Obscurité totale, chaleur. Huis clos.",
          ],
        },
      ],
    },
    {
      title: "ACTE 2 : LES GALERIES SILENCIEUSES",
      stake: "Exploration et dangers naturels.",
      location: "Niveaux -1 à -7.",
      scenes: [
        {
          title: "Scène 1 : La Cantine Désertée",
          type: "Exploration",
          locationId: "galeries_silencieuses",
          details: [
            "Repas à moitié finis.",
            "Pas de combat, mais traces de panique.",
          ],
        },
        {
          title: "Scène 2 : Les Charognards",
          type: "Combat",
          locationId: "galeries_silencieuses",
          details: [
            "Ennemis : Monstres rouilleurs (Rust Monsters) ou Ankhegs.",
            "Danger : Destruction de l'équipement des PJ.",
          ],
        },
        {
          title: "Scène 3 : La Poche de Gaz",
          type: "Piège",
          locationId: "galeries_silencieuses",
          details: [
            "Niveau -7. Odeur d'œuf pourri.",
            "Test : Gaz explosif. Interdiction d'utiliser du feu.",
          ],
        },
        {
          title: "Scène 4 : Le Journal du Géomètre",
          type: "Investigation",
          locationId: "galeries_silencieuses",
          npcIds: ["geometre_fou"],
          details: [
            "Cadavre mort de soif avec une gourde pleine.",
            "Journal : 'La galerie s'allonge quand on ne la regarde pas'.",
          ],
        },
        {
          title: "Scène 5 : Le Mur Brisé",
          type: "Découverte",
          locationId: "galeries_silencieuses",
          details: [
            "Niveau -8. Une galerie s'arrête sur une roche noire vitrifiée.",
            "Fissure avec lueur violette : Entrée de la Spirale.",
          ],
        },
      ],
    },
    {
      title: "ACTE 3 : L'ANTICHAMBRE DE LA FOLIE",
      stake: "Transition vers le surnaturel.",
      location: "Faille Mine/Spirale.",
      scenes: [
        {
          title: "Scène 1 : Les Runes d'Avertissement",
          type: "Lore",
          locationId: "galeries_silencieuses",
          details: [
            "Runes de confinement naines martelées/sabotées.",
            "Décryptage : 'Ici commence ce qui ne doit pas être'.",
          ],
        },
        {
          title: "Scène 2 : Les Gardiens de Pierre",
          type: "Combat",
          locationId: "galeries_silencieuses",
          details: [
            "Ennemis : Élémentaires de Terre corrompus (veines violettes).",
            "Comportement : Ils ne gardent pas, ils fuient la fissure.",
          ],
        },
        {
          title: "Scène 3 : L'Appel de la Spirale",
          type: "Vision",
          locationId: "galeries_silencieuses",
          details: [
            "Vision d'un œil gigantesque en touchant la roche noire.",
            "Le Cristal de Thade vibre et chauffe.",
          ],
        },
        {
          title: "Scène 4 : Le Passage",
          type: "Exploration",
          locationId: "galeries_silencieuses",
          details: [
            "Entrer dans la fissure.",
            "Physique : La gravité pivote de 10 degrés.",
          ],
        },
        {
          title: "Scène 5 : Le Balcon",
          type: "Cliffhanger",
          locationId: "spirale_balcon_inverse",
          npcIds: ["exploratrice_perdue"],
          details: [
            "Corniche donnant sur le vide.",
            "Vue sur le Super Donjon inversé.",
          ],
        },
      ],
    },
    {
      title: "ACTE 4 : LE PREMIER CERCLE",
      stake: "Survie en milieu hostile.",
      location: "La Spirale (Haut).",
      scenes: [
        {
          title: "Scène 1 : L'Architecture Vivante",
          type: "Mécanique",
          locationId: "spirale_premier_cercle",
          details: [
            "Règle : Si on quitte une salle, le couloir derrière change.",
          ],
        },
        {
          title: "Scène 2 : Les Anciens Mineurs",
          type: "Combat",
          locationId: "spirale_premier_cercle",
          details: [
            "Ennemis : Goules en armures naines rouillées.",
            "Dialogue : 'Creuser... creuser...'.",
          ],
        },
        {
          title: "Scène 3 : La Géode Chantante",
          type: "Objectif",
          locationId: "spirale_coeur_geode",
          npcIds: ["geode_avatar"],
          details: [
            "Source du trouble : excroissance cristalline.",
            "Le Cristal de Thade aspire cette énergie.",
            "Action : Détruire la géode.",
          ],
        },
        {
          title: "Scène 4 : Le Nettoyeur",
          type: "Rencontre",
          locationId: "spirale_premier_cercle",
          npcIds: ["cube_nettoyeur"],
          details: [
            "Ennemi : Cube gélatineux ou Gibbering Mouther.",
            "Rôle : Système immunitaire du donjon.",
          ],
        },
        {
          title: "Scène 5 : Le Rejet",
          type: "Fuite",
          locationId: "spirale_premier_cercle",
          details: [
            "La Spirale tremble après la destruction de la géode.",
            "Skill Challenge : Courir vers la fissure avant fermeture.",
          ],
        },
      ],
    },
    {
      title: "ACTE 5 : LE SABOTAGE",
      stake: "Trahison et politique.",
      location: "Retour surface.",
      scenes: [
        {
          title: "Scène 1 : Retour en Terre Connue",
          type: "Répit",
          locationId: "mine_argent",
          npcIds: ["contremaitre_nain_mine"],
          details: [
            "Mine stable. Le chant a cessé.",
            "Les PJ ont le Cristal chargé d'énergie.",
          ],
        },
        {
          title: "Scène 2 : Les Secouristes",
          type: "Embuscade",
          locationId: "mine_argent",
          details: [
            "Mercenaires de Thade déguisés.",
            "Objectif : Récupérer le cristal, pas de témoins.",
          ],
        },
        {
          title: "Scène 3 : L'Effondrement",
          type: "Catastrophe",
          locationId: "mine_argent",
          details: [
            "Explosifs mercenaires sautent.",
            "Fuite désespérée vers le monte-charge.",
          ],
        },
        {
          title: "Scène 4 : Confrontation Surface",
          type: "Social",
          locationId: "quartier_des_mineurs_place",
          npcIds: ["durnik_chef_mineur", "thade_coren"],
          details: [
            "Thade et Durnik présents.",
            "Thade retourne la situation (accuse le trauma des PJ).",
            "Il récupère le cristal.",
          ],
        },
        {
          title: "Scène 5 : Le Fossé se creuse",
          type: "Conclusion",
          details: [
            "Grève finie mais mine sabotée.",
            "Nains blâment la magie, Mages blâment la mine.",
            "Thade a son énergie.",
          ],
        },
      ],
    },
  ],
};
