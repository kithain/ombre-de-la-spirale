/**
 * Scénario 3 - Acte 3 : La Détente
 * Hôtel de Ville de Valombre
 */

export const acte3 = {
  title: "ACTE 3 : LA DÉTENTE",
  stake:
    "Survivre à l'assassinat du Grand Prêtre et échapper à l'accusation lors du sommet de réconciliation.",
  location: "Hôtel de Ville de Valombre.",
  scenes: [
    {
      title: "Scène 1 : Le Sommet de la Réconciliation",
      type: "Social / Tension",
      image: "./images/scenes/conseil_sanglant.jpg",
      locationId: "hotel_de_ville_conseil",
      npcIds: [
        "bourgmestre_valombre",
        "grand_pretre_nain",
        "thade_coren",
        "secretaire_bourgmestre",
      ],
      description: {
        resume: "Sommet de réconciliation tendu entre nains et humains",
        visuel:
          "La grande salle du conseil de l'Hôtel de Ville. Une table ronde en chêne massif. D'un côté, le Bourgmestre Aldric Vorn et Thade Coren, impeccable dans sa robe violette. De l'autre, le Grand Prêtre nain Thorin Martelforge, entouré de ses gardes du corps. Les PJ sont présents comme témoins neutres, invités pour leur rôle dans la résolution de la crise de la mine.",
        audio:
          "Murmures tendus. Le craquement des chaises. Dehors, on entend une foule hostile scander des slogans anti-nains.",
        odeur:
          "Encens de cérémonie, sueur nerveuse, et un parfum subtil de lavande (signature de Thade).",
        lumiere:
          "Lumière dorée des lustres de cristal. Les ombres des participants s'allongent sur les murs tendus de tapisseries.",
      },
      narration: {
        declencheur:
          "Les PJ sont convoqués comme témoins d'honneur pour un sommet de réconciliation entre la ville et la communauté naine.",
        texte_a_lire:
          "Le Bourgmestre Vorn tente de parler de paix, mais sa voix tremble. Thorin Martelforge ne l'écoute même pas, il fixe Thade. « Mes frères sont morts pour tes expériences, Coren. » Thade ne lève même pas les yeux de ses parchemins. « Si vous avez une plainte formelle, déposez-la au greffe, Grand Prêtre. Nous ne sommes pas ici pour écouter des rumeurs de taverne. » L'air dans la salle devient soudainement électrique, chargé d'ozone.",
        contexte_mj:
          "Thade a orchestré ce sommet comme un piège. Il va assassiner le Grand Prêtre et faire accuser les PJ ou les nains. Les PJ peuvent sentir la tension, mais ne savent pas encore ce qui va se passer. Thade est calme, trop calme. Il a déjà gagné.",
        objectif:
          "Survivre à ce qui va suivre et comprendre qu'ils sont tombés dans un piège.",
      },
      mecaniques: {
        defis: [
          "Psychologie (DD 18) : Réaliser que Thade manipule la situation. Il veut que le Grand Prêtre l'accuse publiquement.",
          "Perception (DD 20) : Remarquer un apprenti mage dans un coin, les yeux vitreux, murmurant une incantation. Il est sous charme.",
          "Détection de la magie (DD 16) : Sentir une aura nécromantique puissante qui se concentre dans la salle.",
          "Diplomatie (DD 22) : Tenter de désamorcer la tension (très difficile, Thade sabote activement).",
        ],
        indices: [
          "Thade ne prend aucune note. Il observe, comme un prédateur.",
          "Le Bourgmestre semble nerveux, comme s'il savait quelque chose.",
          "Les gardes nains ont la main sur leurs armes. Ils s'attendent à une trahison.",
          "L'apprenti mage dans le coin est l'un des étudiants de Thade. Il ne devrait pas être là.",
        ],
        recompenses: "Aucune. C'est une scène de mise en place du drame.",
      },
      transitions: {
        success:
          "Les PJ détectent le danger une fraction de seconde avant qu'il ne se produise.",
        fail: "L'assassinat les prend totalement par surprise.",
      },
    },
    {
      title: "Scène 2 : Le Meurtre du Grand Prêtre",
      type: "Événement / Horreur",
      image: "./images/scenes/mort_grand_pretre.jpg",
      locationId: "hotel_de_ville_valombre",
      npcIds: ["grand_pretre_nain", "thade_coren", "apprenti_charme"],
      description: {
        resume: "Assassinat du Grand Prêtre par un apprenti charmé",
        visuel:
          "Le Grand Prêtre Thorin se lève pour répondre à Thade. Soudain, un apprenti mage dans le coin lève les mains. Un rayon d'énergie noire jaillit, frappant Thorin en pleine poitrine. Le nain s'effondre, du sang noir coulant de sa bouche. Ses gardes hurlent. Thade recule, feignant la surprise parfaite.",
        audio:
          "Le cri du sort nécromantique, un sifflement aigu. Le choc du corps de Thorin heurtant le sol. Les hurlements des gardes nains. Le chaos.",
        odeur: "Ozone brûlé, sang et chair carbonisée.",
        lumiere:
          "Le rayon noir laisse des traînées d'ombre dans l'air. Les lustres vacillent.",
      },
      narration: {
        declencheur: "L'apprenti sous charme lance le sort mortel.",
        texte_a_lire:
          "L'apprenti dans le coin lève la main. Un éclair noir. Thorin s'effondre, la poitrine ouverte, mort avant de toucher le sol. Les gardes nains hurlent. L'apprenti ouvre la bouche pour parler, mais ses yeux se révulsent et il tombe raide mort, le cerveau liquéfié par un sort de sécurité. Thade se lève calmement : « Sécurisez la salle. Ces nains sont dangereux. »",
        contexte_mj:
          "Thade a orchestré cet assassinat à la perfection. L'apprenti était sous charme et programmé pour se suicider après l'acte. Les preuves mènent à l'Université Arcanique, mais Thade a préparé des boucs émissaires. Les PJ sont témoins, ce qui les rend dangereux pour Thade. Il va les éliminer ou les discréditer.",
        objectif:
          "Comprendre qu'ils sont dans un piège et que Thade va les accuser.",
      },
      mecaniques: {
        defis: [
          "Réflexes (DD 18) : Tenter d'intercepter le rayon (impossible, mais permet de se positionner près du corps).",
          "Premiers secours (DD 25) : Tenter de sauver Thorin (impossible, il est déjà mort, mais permet de constater la magie noire).",
          "Détection de la magie (DD 14) : L'apprenti porte une marque de charme puissante. Quelqu'un l'a contrôlé.",
          "Fouille rapide (DD 16) : Trouver sur l'apprenti un médaillon avec le sceau de Thade (preuve, mais Thade dira qu'il a été volé).",
        ],
        indices: [
          "L'apprenti était sous contrôle mental. Ce n'était qu'un outil.",
          "Thade ne semble pas surpris. Son jeu d'acteur est parfait, mais trop parfait.",
          "Le Bourgmestre est en état de choc. Il ne s'attendait pas à ça (ou fait-il semblant ?).",
          "Les gardes nains accusent immédiatement Thade et l'Université.",
        ],
        recompenses:
          "Preuve du charme (médaillon). Mais cette preuve sera retournée contre les PJ.",
      },
      transitions: {
        success:
          "Les PJ récupèrent des preuves avant que la situation n'explose.",
        fail: "Le chaos éclate immédiatement sans qu'ils aient le temps de réagir.",
      },
    },
    {
      title: "Scène 3 : Le Chaos du Conseil",
      type: "Combat / Chaos",
      image: "./images/scenes/bataille_conseil.jpg",
      locationId: "hotel_de_ville_valombre",
      npcIds: ["gardes_nains", "gardes_ville", "thade_coren"],
      description: {
        resume: "Bataille rangée dans la salle du conseil",
        visuel:
          "La salle du conseil explose en violence. Les gardes nains, fous de rage, dégainent leurs haches et chargent vers Thade. Les gardes de la ville répondent, épées tirées. Le Bourgmestre hurle des ordres que personne n'écoute. Tables renversées, tapisseries déchirées, sang sur le marbre.",
        audio:
          "Fracas d'acier, cris de rage, ordres contradictoires. Le bruit d'une émeute qui commence.",
        odeur: "Sueur, sang, fumée (quelqu'un a renversé une lampe).",
        lumiere:
          "Chaos de lumières vacillantes. Des ombres dansent sur les murs.",
      },
      narration: {
        declencheur: "La mort du Grand Prêtre déclenche une bataille rangée.",
        texte_a_lire:
          "C'est le chaos. Les nains chargent. Thade claque des doigts et disparaît dans un pli dimensionnel, vous laissant seuls au milieu du massacre. Les gardes de la ville, croyant à un coup d'état, dégainent leurs épées contre vous.",
        contexte_mj:
          "Combat chaotique. Les PJ doivent survivre et protéger le Bourgmestre (ou le laisser mourir, ce qui aggrave la situation). Thade s'échappe facilement. Les PJ réalisent qu'ils sont piégés : témoins d'un assassinat, ils seront accusés de complicité ou d'incompétence.",
        objectif: "Survivre au chaos et protéger le Bourgmestre (optionnel).",
      },
      mecaniques: {
        defis: [
          "Combat : 4 Gardes nains (Guerrier 4) vs 6 Gardes de la ville (Guerrier 3). Les PJ sont au milieu.",
          "Diplomatie (DD 25) : Tenter de calmer la situation (presque impossible dans le chaos).",
          "Acrobaties (DD 14) : Se frayer un chemin vers le Bourgmestre sans être blessé.",
          "Détection de la magie (DD 16) : Réaliser que Thade a lancé plusieurs sorts de préparation avant de partir (il savait).",
        ],
        indices: [
          "Thade s'échappe sans combattre. Il avait tout prévu.",
          "Le Bourgmestre est en danger. Si les PJ le sauvent, il pourra témoigner en leur faveur plus tard.",
          "Des renforts arrivent. Les PJ doivent fuir rapidement.",
        ],
        recompenses:
          "Si le Bourgmestre survit : allié potentiel. Si mort : situation encore pire.",
      },
      transitions: {
        success:
          "Les PJ s'échappent de la salle du conseil avant l'arrivée des renforts.",
        fail: "Les PJ sont blessés ou capturés temporairement.",
      },
    },
    {
      title: "Scène 4 : L'Évacuation en Flammes",
      type: "Fuite / Action",
      image: "./images/scenes/evacuation_toits.jpg",
      locationId: "hotel_de_ville_valombre",
      npcIds: [],
      description: {
        resume: "Fuite de l'Hôtel de Ville en flammes",
        visuel:
          "L'Hôtel de Ville est en feu. Des flammes magiques (violettes, signature de Thade) dévorent les couloirs. La fumée est épaisse, toxique. Les escaliers s'effondrent. La seule issue : les toits.",
        audio:
          "Craquements du bois qui brûle, explosions de fenêtres, cris de panique des autres occupants.",
        odeur: "Fumée âcre, bois brûlé, chair carbonisée.",
        lumiere: "Lueur orange et violette des flammes. Ombres dansantes.",
      },
      narration: {
        declencheur: "Le bâtiment prend feu (sabotage de Thade).",
        texte_a_lire:
          "Des flammes violettes surgissent des murs. Ce n'est pas un incendie normal : c'est de la magie. Thade a piégé le bâtiment. Les escaliers s'effondrent derrière vous. La fumée vous brûle les poumons. Vous entendez des cris : d'autres personnes sont piégées. Devant vous, une fenêtre donne sur les toits. C'est votre seule chance. Dehors, vous entendez des cloches sonner l'alarme et une voix amplifiée magiquement : 'Citoyens de Valombre ! Le Grand Prêtre nain a été assassiné par des agents nains infiltrés ! La loi martiale est décrétée ! Tous les nains doivent se rendre immédiatement !'",
        contexte_mj:
          "Scène d'action pure. Les PJ doivent fuir le bâtiment en feu tout en entendant la propagande de Thade qui retourne la ville contre les nains. Ils réalisent que Valombre est en train de basculer dans la folie.",
        objectif: "S'échapper de l'Hôtel de Ville en feu.",
      },
      mecaniques: {
        defis: [
          "Acrobaties (DD 15) : Sauter par la fenêtre et atterrir sur le toit adjacent.",
          "Vigueur (DD 14) : Résister à la fumée toxique (échec = 1d6 dégâts de poison et état 'Nauséeux').",
          "Escalade (DD 12) : Descendre du toit vers une ruelle.",
          "Choix moral : Sauver des civils piégés (ralentit la fuite mais gagne des alliés) ou fuir directement.",
        ],
        indices: [
          "La voix amplifiée est celle de Thade. Il contrôle déjà la narration publique.",
          "Des patrouilles se forment dans les rues. La chasse aux nains a commencé.",
          "Les PJ sont recherchés : 'Témoins du meurtre, considérés comme complices'.",
        ],
        recompenses:
          "Si les PJ sauvent des civils : reconnaissance et cachettes potentielles. Sinon : progression plus rapide.",
      },
      transitions: {
        success:
          "Les PJ atteignent les toits et peuvent observer la ville qui bascule dans le chaos.",
        fail: "Les PJ sont blessés par les flammes ou la chute.",
      },
    },
    {
      title: "Scène 5 : La Ville en Flammes",
      type: "Observation / Horreur",
      image: "./images/scenes/loi_martiale.jpg",
      locationId: "toits_valombre",
      npcIds: [],
      description: {
        resume: "Valombre bascule dans la purge ethnique",
        visuel:
          "Depuis les toits, les PJ ont une vue panoramique de Valombre. Des incendies éclatent dans le quartier nain. Des patrouilles de gardes et d'automates de la Guilde ratissent les rues. Des nains sont traînés hors de leurs maisons. Au loin, la Tour Arcanique brille d'une lueur violette malsaine.",
        audio:
          "Cloches d'alarme, cris lointains, ordres hurlés, le bruit sourd des portes enfoncées.",
        odeur: "Fumée portée par le vent, odeur de peur.",
        lumiere:
          "Crépuscule. La ville est éclairée par les incendies et les torches des patrouilles.",
      },
      narration: {
        declencheur: "Les PJ atteignent un point d'observation.",
        texte_a_lire:
          "Depuis les toits, vous voyez Valombre se transformer en enfer. Le quartier des mineurs brûle. Des patrouilles de gardes, accompagnées d'automates de combat de la Guilde, enfoncent les portes des maisons naines. Vous voyez des familles entières traînées dans les rues, enchaînées. Des affiches sont placardées partout : 'RECHERCHÉS - Complices de l'assassinat du Grand Prêtre. Récompense : 1000 po.' Vos visages sont dessinés dessus. Thade a travaillé vite. Au loin, vous voyez la Tour Arcanique briller d'une lueur violette. Quelque chose de terrible se prépare. Une voix magiquement amplifiée résonne : 'Couvre-feu immédiat. Toute personne dans les rues sera considérée comme complice. La Guilde des Mages assure votre sécurité.' C'est la voix de Thade.",
        contexte_mj:
          "Moment de réalisation. Les PJ comprennent l'ampleur du plan de Thade : il a déclenché une purge ethnique et pris le contrôle de la ville. Ils sont recherchés et ne peuvent plus compter sur les autorités. Leur seul espoir : rejoindre la résistance naine ou fuir. Mais Thade ne les laissera pas partir vivants.",
        objectif: "Comprendre la situation et décider d'un plan d'action.",
      },
      mecaniques: {
        defis: [
          "Perception (DD 12) : Repérer des patrouilles qui se dirigent vers leur position.",
          "Connaissance (Locale) (DD 14) : Se souvenir de cachettes ou d'alliés potentiels dans la ville.",
          "Survie (DD 16) : Trouver un chemin sûr à travers les toits pour rejoindre le quartier nain.",
        ],
        indices: [
          "Le Temple-Forgeron (temple de Moradin) semble encore libre. Des lumières y brillent.",
          "Des groupes de nains se battent dans les rues, tentant de protéger leurs familles.",
          "La Tour Arcanique pulse d'énergie. Thade y prépare quelque chose de grand.",
        ],
        recompenses:
          "Informations sur la situation. Choix de direction pour l'Acte 4.",
      },
      transitions: {
        success:
          "Les PJ décident de rejoindre la résistance naine au Temple-Forgeron.",
        fail: "Les PJ sont repérés et doivent fuir immédiatement, sans plan clair.",
      },
    },
  ],
};
