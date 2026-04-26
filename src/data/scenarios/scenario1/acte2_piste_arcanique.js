/**
 * Scénario 1 - Acte 2 : La Piste Arcanique
 * Université de Magie de Valombre
 */

export const acte2 = {
  title: "ACTE 2 : LA PISTE ARCANIQUE",
  stake:
    "Établir les liens entre Jaren, la Fraternité Nyx et l'Université, et localiser ses travaux et ses soutiens.",
  location: "Université de Magie de Valombre.",
  scenes: [
    {
      title: "Scène 1 : La Fraternité Dissoute",
      type: "Social",
      image: "./images/scenes/universite_arcane.jpg",
      locationId: "universite_arcane",
      npcIds: ["etudiant_universite"],
      description: {
        resume:
          "Les PJ enquêtent sur la Fraternité Nyx au sein de l'Université et apprennent son lien avec Jaren et le Professeur Coren.",
        visuel:
          "Nichée au cœur d'une cité de pierre, la Tour des Mages se dresse comme un monolithe de marbre blanc gravé de runes lumineuses, une anomalie verticale s'élevant en spirales impossibles. Des passerelles de verre liquide relient les bâtiments entre eux, tandis que des orbes lumineux patrouillent silencieusement autour des plus hautes flèches, projetant une lumière froide et clinique.",
        audio:
          "Le bourdonnement électrique des barrières de mana, ponctué par le son cristallin des pas sur le verre et des échos de voix désincarnées.",
        odeur: "Poussière de bibliothèque, encre fraîche et thé à la bergamote.",
        lumiere:
          "Une luminescence blanche et stérile émanant des murs eux-mêmes, gommant les reliefs et donnant aux visages un aspect cireux.",
      },
      narration: {
        declencheur: "Les PJ présentent la broche de Nyx à un étudiant dans la cour.",
        texte_a_lire:
          "L'apprenti blêmit instantanément. Il jette un coup d'œil nerveux aux alentours et baisse la voix : « Rangez ça. Si les recteurs vous voient avec un sceau de la Nyx, vous finirez au cachot. Allez voir le Professeur Coren, c'est lui qui gère le... nettoyage. Et oubliez que vous m'avez vu. »",
        contexte_mj:
          "L'Université est un lieu d'ordre et de silence. L'étudiant ne veut pas d'ennuis. Jouez sur la paranoïa,  il chuchote, regarde par-dessus son épaule. La simple vue de la broche doit le faire paniquer. Il dirige les PJ vers Thade non pas pour les aider, mais pour se débarrasser d'eux.",
        objectif:
          "Localiser le bureau de Thade Coren et recueillir les bruits de couloir.",
      },
      mecaniques: {
        defis: [
          "Diplomatie (DD 13) : Convaincre l'étudiant de parler davantage.",
          "Renseignements (DD 15) : Apprendre que Jaren était le protégé de Coren.",
        ],
        indices: [
          "Rumeurs : On raconte que Jaren n'a pas quitté les lieux en silence. Il hurlait que son expulsion était une « erreur monumentale » et que bientôt, même le Conseil des Mages devra se mettre à genoux devant son prochain maître.",
        ],
        recompenses: "Localisation du bureau de Thade.",
      },
      transitions: {
        success: "Rencontre avec Thade (Scène 2).",
        fail:
          "Les PJ sont escortés par la garde universitaire jusqu'au bureau de Coren pour « interrogatoire ».",
      },
    },
    {
      title: "Scène 2 : Le Professeur Bienveillant",
      type: "Social",
      image: "./images/scenes/thade_coren.jpg",
      locationId: "bureau_thade_coren",
      npcIds: ["thade_coren"],
      description: {
        resume:
          "Thade Coren confirme l'expulsion de Jaren et charge les PJ de localiser ses travaux afin de les sécuriser.",
        visuel:
          "Murs tapissés de grimoires impeccables. Thade est assis derrière un bureau de chêne, élégant et calme.",
        audio:
          "Le grattement d'une plume de phénix et le tic-tac d'une horloge astronomique.",
        odeur: "Cire de bougie chaude et lavande séchée.",
        lumiere: "Tamisée par des vitraux illustrant les lois de la magie.",
      },
      narration: {
        declencheur: "Aborder le sujet de Jaren.",
        texte_a_lire:
          "Thade ne touche pas la broche. Il continue d'écrire, sans lever les yeux. « Jaren... Un esprit brillant, hélas brisé par sa propre ambition. La nécromancie n'est pas un jeu. S'il a continué ses expériences, il est un danger pour lui-même et pour la ville. Retrouvez-le. Je me chargerai de sécuriser ses travaux. »",
        contexte_mj:
          "Thade est le masque parfait de l'autorité bienveillante. Il ne doit jamais paraître suspect. Il parle avec une tristesse feinte, comme un père déçu par un fils prodigue. Il ne nie pas les faits, il les réinterprète. La folie de Jaren est une tragédie personnelle. Il manipule les PJ en flattant leur ego et en leur donnant une mission 'noble' sécuriser des connaissances dangereuses.",
        objectif: "Accepter la mission de localiser le laboratoire et les notes de Jaren.",
      },
      mecaniques: {
        defis: [
          "Psychologie (DD 18) : Thade semble sincère, mais son détachement face aux menaces contre le Conseil est troublant.",
          "Négociation (DD 14) : Obtenir 100 po d'avance pour « frais d'enquête ».",
        ],
        indices: [
          "Le rapport d'expulsion de Jaren. En marge, l'écriture élégante de Thade note : « Instabilité prévisible. Manque de discipline. »",
        ],
        recompenses: "Sauf-conduit de l'Université + 1 parchemin de Dissipation de la Magie.",
      },
      transitions: { success: "Vers le taudis de Jaren (Scène 3)." },
    },
    {
      title: "Scène 3 : La Descente aux Enfers",
      type: "Exploration",
      image: "./images/scenes/taudis_jaren.jpg",
      locationId: "vieille_ville_taudis_jaren",
      npcIds: [],
      description: {
        resume:
          "Les PJ explorent le logement de Jaren, découvrent des signes de récupération récente et identifient un accès vers un laboratoire souterrain.",
        visuel:
          "Une mansarde où la folie s'est inscrite sur les murs. Des parchemins forment une spirale obsessionnelle de croquis anatomiques nains. Au centre, les planches du parquet ont volé en éclats autour d'une trappe béante.",
        audio:
          "Le claquement sec d'un volet mal fixé et le grondement sourd, presque organique, de l'eau dans les profondeurs.",
        odeur:
          "Un mélange écœurant de papier jauni, de moisissure et l'odeur métallique de la magie brute.",
        lumiere:
          "Des lames de lumière grise découpent l'obscurité, révélant la poussière qui danse au-dessus du chaos.",
      },
      narration: {
        declencheur: "Fouille approfondie de la pièce.",
        texte_a_lire:
          "Ce qui règne ici n'a rien du simple désordre d'un étudiant. On sent qu'une rage désespérée a retourné chaque meuble, chaque papier, avec une frénésie presque palpable. Sur le mur, la paranoïa s'est muée en obsession : une seule phrase s'y étale partout, griffonnée à s'en briser les ongles : « Mensonge. Tout n'est que mensonge. Il a menti. IL A MENTI. » \n\nAu milieu de ce chaos, le regard est inévitablement attiré par le sol. La trappe n'a pas été simplement ouverte ; elle a été littéralement arrachée, le bois pulvérisé et les gonds sautés sous l'impact d'une force magique brutale. On ignore qui a forcé le passage, mais la violence de l'effraction trahit une urgence telle qu'on n'a même pas cherché la clé.",
        contexte_mj:
          "L'ambiance doit basculer dans l'horreur. Ce n'est plus une chambre d'étudiant, c'est l'esprit de Jaren étalé sur les murs. Insistez sur l'obsession. L'élément clé est l'effraction de la trappe, c'e n'est pas l'œuvre d'un étudiant fou, mais d'un professionnel (Ilse). Les PJ doivent sentir qu'ils arrivent quelques minutes trop tard. La trace est chaude, l'ennemi est proche.",
        objectif:
          "S'enfoncer dans les égouts pour traquer Kaela et découvrir le laboratoire secret.",
      },
      mecaniques: {
        defis: [
          "Fouille (DD 12) : Dénicher sous un tas de linge sale un plan partiel des égouts, avec une croix rouge marquant une zone sous le vieux manoir.",
          "Art de la Magie (DD 14) : Analyser les traces de brûlures sur la trappe. Ce n'est pas la magie du niveau de Jaren, mais une force plus puissante (celle de Kaela).",
        ],
        indices: [
          "Un journal intime brûlé dont il ne reste qu'une page : « Tout ce qu'on a construit n'est qu'un immense mensonge pour nourrir son ambition.»",
        ],
        recompenses:
          "Accès à l'Acte 3. Si le plan est trouvé, les PJ ont un Avantage sur les jets de Survie dans les égouts.",
      },
      transitions: { success: "Début de l'Acte 3 : Les Égouts et le Labyrinthe." },
    },
  ],
};
