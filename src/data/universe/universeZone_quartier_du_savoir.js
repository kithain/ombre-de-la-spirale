export const zoneQuartierDuSavoir = {
  id: "quartier_du_savoir",
  nom: "Université Arcanique (Quartier du Savoir)",
  resume:
    "Institution polie, compétente, respectée. Bibliothèques en ordre, étudiants en robe propre, professeurs qui se serrent la main. Aucun complot. Une déférence collective qui a permis à Thade de tout faire en pleine lumière.",
  details: [
    "Ambiance : lambris de chêne, lampes alchimiques au-dessus des bureaux, parfum d'encre et de cire d'abeille, chuchotements studieux.",
    "Tension : invisible. L'Université ne soupçonne rien parce qu'elle a confiance. Thade est l'angle mort.",
    "Focus : siège du pouvoir réel à Valombre. La Tour Arcanique en est le point de rupture.",
    "Opportunités : Olane comme allié, archives scellées, lecture des cahiers de Thade, infiltration finale.",
  ],
  emplacements: [
    {
      id: "universite_valombre",
      nom: "Cœur de l'Université",
      resume:
        "Cour intérieure et amphithéâtres principaux. Statues de fondateurs en pierre claire, allées entre les bâtiments, étudiants en transit.",
      details: [
        "Ambiance : feuilles d'automne sur les pavés, cloches de cours qui sonnent toutes les heures, conversations cordiales en latin technique.",
        "Tests : Diplomatie pour naviguer dans la hiérarchie. Renseignements pour glaner les rumeurs étudiantes.",
        "Usage : premiers contacts avec l'Université. Rencontre avec Olane. Point de départ de l'assaut.",
      ],
      idsPnj: [],
    },
    {
      id: "bureau_thade_universite",
      nom: "Bureau de Thade Coren",
      resume:
        "Bureau en angle, deux étages au-dessus de l'aile de Thaumaturgie. Bibliothèque tapissée du sol au plafond, fenêtre panoramique, parfum de lavande omniprésent.",
      details: [
        "Ambiance : lampe à huile sur le bureau, coffret plombé sur l'étagère (os T-01 à T-04), service à thé à peine touché, pas de poussière.",
        "Tests : Investigation DD 13 sur le coffret. Psychologie DD 15 pour le choix des mots de Thade. Détection de la magie pour les glyphes de défense.",
        "Indices : Thade ne ment jamais directement. Il choisit ses mots. Il dit 'matériel' et pas 'recherches'. Le coffret est révélateur.",
        "Usage : engagement initial. Rapport et bourse lors du retour.",
      ],
      idsPnj: ["thade_coren"],
    },
    {
      id: "pavillon_nord",
      nom: "Pavillon Nord (Résidences Étudiantes)",
      resume:
        "Bâtiment résidentiel de l'Université. Trois étages de chambres lambrissées, couloirs en tapis usé, lampes à huile espacées.",
      details: [
        "Ambiance : domestique, chaleureuse, parfaitement ordinaire.",
        "Tests : Discrétion / Renseignements pour interroger les voisins de Jaren.",
        "Usage : chambre de Jaren. Mort de Jaren dans le couloir.",
      ],
      idsPnj: [],
    },
    {
      id: "pavillon_nord_couloir",
      nom: "Couloir du 3e étage du Pavillon Nord",
      resume:
        "Couloir lambrissé du 3e étage. Jaren y meurt médicalement, pas spectaculairement.",
      details: [
        "Ambiance : tapis usé, lampes à huile basses, jaunes et chaudes.",
        "Tests : Médecine DD 14 (mort instantanée par sort). Connaissances (mystères) DD 16 (signature : variante de Dissection à Distance, publiée par Thade six ans plus tôt). Investigation DD 13 pour trouver la rune sur la nuque.",
        "Usage : mort de Jaren. Aucun témoin.",
      ],
      idsPnj: [],
    },
    {
      id: "archives_scellees_universite",
      nom: "Archives Médicales Scellées",
      resume:
        "Sous-sol bas et voûté de l'aile administrative. Armoires métalliques classées par décennie. Aucun verrouillage spécifique.",
      details: [
        "Ambiance : odeur de papier ancien et de bois ciré. Bourdonnement d'une lampe alchimique. Silence d'aile désaffectée la nuit.",
        "Tests : Investigation DD 12 pour trouver le dossier 'Coren, S. — 12-VAEL — Médical'. Médecine DD 15 pour comprendre la chronologie de la maladie de Sealine.",
        "Indices : dernière entrée de Thade : 'Méthodes conventionnelles épuisées. Explorer la littérature interdite.' Plus tard : 'S-01 : protocole établi. Premier essai dans 28 jours.'",
        "Usage : identification S-01 = Sealine.",
      ],
      idsPnj: [],
    },
    {
      id: "salle_4b",
      nom: "Salle 4-B (Bureau d'Olane)",
      resume:
        "Petit bureau dans l'aile des Maîtres séniors. Olane y reçoit les étudiants en difficulté et les PJ qui ont compris son signal.",
      details: [
        "Ambiance : étagères modestes mais lues, avec annotations dans les marges. Café d'orge.",
        "Tests : Diplomatie pour des informations claires sur les habitudes de Thade.",
        "Indices : Olane se doute depuis longtemps. Il n'a aucune preuve. Il n'ose parler qu'après le retour des PJ avec les carnets.",
        "Usage : rendez-vous après le rapport à Thade. Allié de la Résistance. Peut être capturé pendant l'assaut.",
      ],
      idsPnj: [],
    },
    {
      id: "bibliotheque_recherche_interdite",
      nom: "Réserve de Recherche Interdite",
      resume:
        "Niveau souterrain de la bibliothèque centrale. Accessible aux Maîtres de département. Corpus sur la résonance planaire consulté par Thade il y a huit ans.",
      details: [
        "Ambiance : froid sec, lampes à mana basses, livres aux couvertures scellées de cire blanche.",
        "Tests : Connaissances (mystères) DD 17 pour les textes. Effraction sous la loi martiale si non autorisée.",
        "Indices : registre sur huit ans. Thade y a passé 142 séances. La fréquentation s'effondre à la mort de Sealine.",
        "Usage : trace écrite de la préparation de Thade.",
      ],
      idsPnj: [],
    },
    {
      id: "tour_arcanique",
      nom: "Tour Arcanique (Étages)",
      resume:
        "Tour de l'Université vue de l'intérieur. Couloirs lambrissés, salles de cours désertées, bibliothèques en désordre récent.",
      details: [
        "Ambiance : banale aux étages bas. Plus on monte, plus les modifications de Thade apparaissent (piliers de cristal, runes, objets en lévitation).",
        "Tests : Combat tactique 5-6 rencontres avec étudiants charmés, gardes piégés, créatures planaires séduites. CHAQUE rencontre a une option non-létale.",
        "Indices : ardoise non effacée au 6e étage. Équation préliminaire de S-01 datée de sept ans. Thade y travaillait avant la mort de Sealine.",
        "Usage : ascension de la Tour. Décompte des victimes pour l'épilogue.",
      ],
      idsPnj: ["etudiants_charmes", "gardes_pieges", "creature_spirale_cooptee", "magi_tuteur_loyal"],
    },
    {
      id: "laboratoire_verre",
      nom: "Laboratoire de Verre (Rotonde)",
      resume:
        "Rotonde de pierre claire au cœur de la Tour, douze mètres de diamètre. Cuve cylindrique en cristal au centre. Dedans : le corps de Thade dans un liquide doré.",
      details: [
        "Ambiance : ronronnement doux des tubes alimentaires, parfum mielleux du liquide, lumière dorée diffuse. Lavande à saturation.",
        "Tests : Investigation DD 12 pour comprendre le système. Connaissances (mystères) DD 16 : détruire le corps coûte une phase au Thade du sommet.",
        "Indices : bureau adjacent, mur de cahiers reliés bordeaux alignés par date. Thade écrit à Sealine tous les jours depuis huit ans. La plume du cahier ouvert écrit en temps réel.",
        "Usage : décision sur le corps. Lecture optionnelle des cahiers. Message possible dans le cahier ouvert.",
      ],
      idsPnj: ["thade_coren", "magi_tuteur_loyal"],
    },
    {
      id: "laboratoire_elian_voss",
      nom: "Laboratoire d'Elian Voss",
      resume:
        "Sous un ancien amphithéâtre médical. Porte métallique, colonnes de dossiers, bocaux opaques.",
      details: [
        "Ambiance : rangé en colonnes. À gauche, cinquante dossiers 'stabilisés'. À droite, sept bocaux sans étiquette. Deux dossiers cachés sous une plaque.",
        "Tests : Art de la magie DD 17 pour le sérum. Décryptage DD 17 pour l'annotation de Sealine.",
        "Indices : schéma ancien nommant la Larme. Cachet de Caldris. Note barrée : 'Ne jamais alimenter cela avec des vivants.'",
        "Usage : récupération du protocole S-01 et de la liste des patients. Attaque simultanée de deux groupes.",
      ],
      idsPnj: ["elian_voss"],
    },
    {
      id: "sommet_tour_vortex",
      nom: "Sommet de la Tour (Vortex)",
      resume:
        "Plateforme circulaire au toit, marbre clair, ouverte sur le ciel violet. Au centre, le vortex : puits horizontal d'énergie. Au cœur, la Larme.",
      details: [
        "Ambiance : bourdonnement profond, vent sur le toit, parfum de lavande à saturation.",
        "Tests : Combat en 3 phases (Archimage Épuisé / Larme se Fissure / Épuisement). Chaque vérité sur Sealine fissure la Larme.",
        "Indices : Sealine peut apparaître. La conversation à trois est entre deux personnes qui se connaissent et se sont perdues.",
        "Usage : apothéose, conversation à trois, le prix.",
      ],
      idsPnj: ["thade_coren", "sealine_coren", "magi_tuteur_loyal"],
    },
  ],
};
