export const scenario1 = {
  id: 1,
  title: "SCÉNARIO 1 : LE MURMURE DES OS",
  level: "Niveaux 1-3",
  synopsis:
    "Des tombes sont profanées. Ce qui ressemble à du pillage cache les expériences d'une cabale d'apprentis dirigée en sous-main par Thade Coren.",
  acts: [
    {
      title: "ACTE 1 : L'INCIDENT DU CIMETIÈRE",
      stake: "Accroche de l'aventure et premier combat.",
      location: "Auberge « Le Pic Brisé » et le Cimetière.",
      scenes: [
        {
          title: "Scène 1 : L'Offre du Prêtre",
          type: "Social",
          locationId: "temple_forgeron",
          npcIds: ["thorgar_pretre_nain", "aubergiste_pic_brise"],
          details: [
            "À l'auberge, Thorgar (prêtre nain du Temple-Forgeron) engage les PJ.",
            "Mission : Enquêter et monter la garde au cimetière cette nuit, suite à des profanations.", 
            "Contexte : Des tombes naines ont été profanées, des corps volés. Les autorités locales et la garde s'en moquent, ce ne sont que des os pour eux, mais pour les nains, c'est un sacrilège.",
            "Récompense : Or et une lettre de recommandation.",
          ],
},
        {
          title: "Scène 2 : La Veillée Brumeuse",
          type: "Ambiance",
          locationId: "cimetiere_terrasse",
          details: [
            "Ambiance : Brume épaisse, statues gothiques, froid mordant.",
            "Tests : Détection / Perception pour voir des ombres bouger.",
            "Tests : Discrétion pour ne pas se faire repérer.",
          ],
        },
        {
          title: "Scène 3 : Les Pilleurs",
          type: "Combat",
          locationId: "cimetiere_terrasse",
          details: [
            "Ennemis : Groupe de 4-5 bandits humains (Guerriers/Roublards niv 1).",
            "Action : Ils commencent à creuser une tombe récente.",
            "Comportement : Ils fuient s'ils sont submergés.",
            "Indice : Ils n'emportent pas les bijoux, mais les corps entiers dans des sacs imprégnés d'herbes (pour l'odeur).",
          ],
        },
        {
          title: "Scène 4 : L'Anomalie",
          type: "Investigation",
          locationId: "cimetiere_terrasse",
          details: [
            "Inspection : Corps portant des traces de chirurgie post-mortem précise.",
            "Loot clé : Une broche en argent avec un sigle partiel (chouette stylisée).",
            "Signification : Symbole d'une fraternité d'étudiants mages.",
          ],
        },
        {
          title: "Scène 5 : L'Intervention de la Garde",
          type: "Conflit",
          locationId: "cimetiere_terrasse",
          npcIds: ["gardien_cimetiere", "thorgar_pretre_nain"],
          details: [
            "Action : La Garde Urbaine arrive, attirée par le bruit.",
            "Problème : Le Capitaine veut arrêter les PJ pour 'trouble à l'ordre public'.",
            "Résolution : Thorgar intervient pour les innocenter.",
            "Tension : Palpable entre l'autorité humaine et la religion naine.",
          ],
        },
      ],
    },
    {
      title: "ACTE 2 : LA PISTE ARCANIQUE",
      stake: "Enquête urbaine et introduction de Thade Coren.",
      location: "Quartier du Savoir et Université.",
      scenes: [
        {
          title: "Scène 1 : Le Conseil de Thorgar",
          type: "Social",
          locationId: "temple_forgeron",
          npcIds: ["thorgar_pretre_nain"],
          details: [
            "Thorgar identifie la broche comme un objet de mage.",
            "Il refuse d'aller voir la Guilde lui-même ('Ils mentiront').",
            "Il envoie les PJ enquêter à l'Université.",
          ],
        },
        {
          title: "Scène 2 : Les Portes du Savoir",
          type: "Investigation",
          locationId: "quartier_du_savoir_universite",
          npcIds: ["etudiante_cabale", "marchand_gris"],
          details: [
            "Action : Interroger des étudiants ou entrer à l'Université.",
            "Test : Renseignements / Diplomatie.",
            "Info : La broche appartient à la fraternité 'Nyx', dissoute il y a deux mois pour 'conduite non académique'.",
          ],
        },
        {
          title: "Scène 3 : Le Professeur Thade Coren",
          type: "Rencontre Clé",
          locationId: "quartier_du_savoir_universite",
          npcIds: ["thade_coren"],
          details: [
            "Rencontre : Thade invite les PJ dans son bureau.",
            "Attitude : Serviable, sévère mais juste.",
            "Manipulation : Il dénonce l'ancien chef de la fraternité, Jaren. 'Arrêtez-le avant qu'il ne souille la réputation de la Magie.'",
            "Aide : Il donne l'adresse de la planque de Jaren.",
          ],
        },
        {
          title: "Scène 4 : Le Taudis de l'Apprenti",
          type: "Exploration",
          locationId: "vieille_ville_taudis_jaren",
          npcIds: ["jaren_apprenti"],
          details: [
            "Lieu : Vieille Ville, chambre insalubre.",
            "Danger : La porte est piégée (Glyphe mineur ou mécanique).",
            "Indices : Notes délirantes sur 'La Spirale qui chante' et plans des égouts.",
          ],
        },
        {
          title: "Scène 5 : Le Gardien Laissé Derrière",
          type: "Combat",
          locationId: "vieille_ville_taudis_jaren",
          details: [
            "Ennemi : Squelette ou Petit Élémentaire invoqué par une rune.",
            "Cliffhanger : Les plans montrent que Jaren opère sous un vieux manoir abandonné, accessible via les égouts.",
          ],
        },
      ],
    },
    {
      title: "ACTE 3 : LES ÉGOUTS ET LES OUBLIÉS",
      stake: "Dungeon crawl (Niveau 2) et ambiance horrifique.",
      location: "Les Égouts / Connexion mines.",
      scenes: [
        {
          title: "Scène 1 : La Descente",
          type: "Exploration",
          locationId: "egouts_val_dombre",
          details: [
            "Entrée par une grille rouillée.",
            "Ambiance : Sombre, humide, pestilentiel. Gestion de la lumière nécessaire.",
          ],
        },
        {
          title: "Scène 2 : La Faune Locale",
          type: "Combat",
          locationId: "egouts_val_dombre",
          details: [
            "Ennemis : Rats géants ou nuées de chauves-souris.",
            "Danger : Risque de Fièvre des égouts.",
          ],
        },
        {
          title: "Scène 3 : L'Ossuaire Clandestin",
          type: "Indice",
          locationId: "egouts_val_dombre",
          details: [
            "Zone sèche avec des os rongés (restes d'expériences).",
            "Indice : Rune tracée au sang (Test Mystères/Religion). Tentative maladroite de nécromancie.",
          ],
        },
        {
          title: "Scène 4 : Le Kobold Égaré",
          type: "Social",
          locationId: "egouts_val_dombre",
          npcIds: ["sniv_kobold"],
          details: [
            "Rencontre : Sniv, vieux kobold terrifié par 'les hommes en robes'.",
            "Aide : Peut guider les PJ contre nourriture.",
          ],
        },
        {
          title: "Scène 5 : La Porte Scellée",
          type: "Action",
          locationId: "egouts_val_dombre",
          details: [
            "Sous le manoir. Porte en fer renforcée.",
            "Gardes : 2 mercenaires humains.",
            "Choix : Combat, Bluff ou Infiltration.",
          ],
        },
      ],
    },
    {
      title: "ACTE 4 : LE MANOIR ABANDONNÉ",
      stake: "Le cœur du culte. Tactique et magie.",
      location: "Sous-sol du manoir.",
      scenes: [
        {
          title: "Scène 1 : L'Antichambre",
          type: "Infiltration",
          locationId: "manoir_souterrain_antichambre",
          details: [
            "Ancien cellier transformé en labo.",
            "Décor : Fioles bouillonnantes, odeur de formol.",
          ],
        },
        {
          title: "Scène 2 : Les Expériences Ratées",
          type: "Combat",
          locationId: "manoir_souterrain_antichambre",
          details: [
            "Ennemis : Zombies (lents mais résistants).",
            "Horreur : Ce sont les cadavres volés au cimetière (possibilité de reconnaître un nom).",
          ],
        },
        {
          title: "Scène 3 : La Bibliothèque Interdite",
          type: "Énigme",
          locationId: "manoir_souterrain_bibliotheque",
          details: [
            "Livre de comptes protégé par un piège magique.",
            "Preuve : Jaren achète des composants très chers (financés par qui ?).",
            "Loot : Parchemins (Niv 1) et potions.",
          ],
        },
        {
          title: "Scène 4 : Les Prisonniers",
          type: "Tension",
          locationId: "manoir_souterrain_cachot",
          details: [
            "Deux mendiants vivants, ligotés, prêts au sacrifice.",
            "Chrono : Les chants rituels commencent à côté.",
          ],
        },
        {
          title: "Scène 5 : Le Seuil du Rituel",
          type: "Préparation",
          locationId: "manoir_souterrain_rituel",
          details: [
            "Porte entrouverte, lumière violette.",
            "Les PJ ont 1 round pour se buffer.",
          ],
        },
      ],
    },
    {
      title: "ACTE 5 : LE BOUC ÉMISSAIRE",
      stake: "Boss final et montée de niveau.",
      location: "Salle de bal souterraine.",
      scenes: [
        {
          title: "Scène 1 : Le Rituel de Jaren",
          type: "Boss",
          locationId: "manoir_souterrain_rituel",
          npcIds: ["jaren_apprenti"],
          details: [
            "Jaren (Nécromancien Niv 3) + 4 Squelettes archers.",
            "Dialogue : 'Le Maître sera fier ! La Spirale m'a choisi !'",
            "Terrain : Tables d'opération (couverture).",
          ],
        },
        {
          title: "Scène 2 : Surcharge",
          type: "Twist",
          locationId: "manoir_souterrain_rituel",
          details: [
            "À 50% PV de Jaren : onde de choc magique.",
            "Effet : Squelettes deviennent Enragés (+Attaque, -CA).",
          ],
        },
        {
          title: "Scène 3 : L'Arrivée du Sauveur",
          type: "Dénouement",
          locationId: "manoir_souterrain_rituel",
          npcIds: ["thade_coren"],
          details: [
            "Thade Coren entre avec des gardes.",
            "Action : Il neutralise Jaren avec un sort impressionnant.",
            "Dialogue : 'Pauvre fou... tu as joué avec des forces qui te dépassent.'",
          ],
        },
        {
          title: "Scène 4 : Le Nettoyage",
          type: "Indice",
          locationId: "manoir_souterrain_rituel",
          npcIds: ["thade_coren"],
          details: [
            "Thade saisit tout le matériel 'pour sécurité'.",
            "Test (Psychologie/Perception DD 20) : Thade empoche le journal de recherche avec soin, contrairement à son dégoût affiché.",
          ],
        },
        {
          title: "Scène 5 : Héros de Val-d'Ombre",
          type: "Conclusion",
          locationId: "quartier_du_savoir_universite",
          npcIds: ["thade_coren", "thorgar_pretre_nain", "bourgmestre"],
          details: [
            "Retour surface. Bourgmestre soulagé, Thorgar content.",
            "Thade félicite les PJ.",
            "Gain : Passage Niveau 3.",
          ],
        },
      ],
    },
  ],
};
