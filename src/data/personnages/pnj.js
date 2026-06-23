export const pnjData = [
  {
    "id": "thade_coren",
    "nom": "Thade Coren, Archimage de l'Université Arcanique",
    "role": "Antagoniste principal. Archimage tragique et héros public dont la gloire repose sur un mensonge. Ancien membre de l'Ordre de Nyx, il a survécu à la catastrophe qui a tué Sealine et brisé l'Ordre. Devenu Archimage de l'Université, il confisque la Larme, la Spirale, les archives et le récit public pour rouvrir le seuil et ramener Sealine.",
    "categorie": "ennemis",
    "image": "/images/PNJ/pnj_thade_coren.jpg",
    "antagoniste": true,
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Thade les reçoit dans un lieu impeccablement ordonné, avec la courtoisie d'un homme qui sait déjà ce qu'il va leur demander.",
      "objectif": "Ramener Sealine en concentrant sur lui seul la Larme, la Spirale, les prisonniers, les archives et le récit public. Coût : Valombre entière et son âme d'archimage.",
      "attitude": "Poli, précis, jamais cruel par plaisir. L'atrocité est dans l'efficacité, pas dans le ton. Parle comme un homme qui a déjà pleuré tout ce qu'il pouvait pleurer."
    },
    "disposition": "neutre",
    "impulsion": "Thésauriser savoir, pouvoir et douleur, puis rationaliser l'horreur.",
    "degats": {
      "valeur": 3,
      "description": "Magie de contrôle, dissection à distance, glyphes préparés",
      "tags": [
        "magique",
        "proche",
        "loin",
        "entrave"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Protections arcaniques et autorité sociale"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "brise",
        "mortelle"
      ]
    },
    "etiquettes": [
      "archimage",
      "tragique",
      "manipulateur",
      "faux-héros"
    ],
    "actionsMJ": [
      "Présenter un sacrifice comme une nécessité raisonnable",
      "Isoler une preuve ou un témoin derrière une procédure",
      "Offrir aux PJ une vérité utile mais incomplète"
    ],
    "description": "Thade incarne le pouvoir savant devenu confiscation. Il reste poli, mesuré et presque raisonnable, mais chaque décision révèle un homme prêt à sacrifier Valombre pour imposer son récit et retrouver Sealine.",
    "notes": "",
    "race": "humain",
    "faction": "Université"
  },
  {
    "id": "sealine_coren",
    "nom": "Sealine Vael, la Dame des Soupirs",
    "role": "Mage de soin de l'Ordre de Nyx et amante de Thade, devenue pivot émotionnel de la trilogie. Lors de la catastrophe de Nyx, elle servit d'ancre vivante et referma la brèche sur elle-même pour sauver le quartier. Depuis, elle est piégée au-delà du seuil, ni tout à fait morte ni vivante.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_sealine_coren.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Quand les PJ la rencontrent pour la première fois, Sealine apparaît dans un calme impossible, comme si la Spirale avait suspendu le temps autour de sa voix.",
      "objectif": "Que Thade s'arrête par choix, pas par défaite. Que la Larme reste scellée et la brèche refermée. Qu'il accepte sa mort au lieu d'en faire payer le prix à Valombre.",
      "attitude": "Précise, calme, un peu d'humour. Parle comme quelqu'un qui pense sans interruption depuis qu'elle est de l'autre côté du seuil. Derrière chaque mot, l'amour pour Thade et le refus de le laisser se détruire pour elle."
    },
    "disposition": "amical",
    "impulsion": "Empêcher Thade de se sacrifier — et le monde avec lui — pour la ramener.",
    "degats": {
      "valeur": 1,
      "description": "Contact planaire, froid de vérité, trouble intérieur",
      "tags": [
        "magique",
        "intime",
        "non-letal"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Incorporelle seulement dans certaines conditions"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "vérité",
      "gardienne",
      "spirale",
      "non-combattante"
    ],
    "actionsMJ": [
      "Révéler ce qui s'est vraiment passé lors de la catastrophe de Nyx",
      "Montrer le coût humain de rouvrir le seuil",
      "Offrir une issue morale plus difficile qu'une victoire militaire"
    ],
    "description": "Sealine est la vérité vivante au-delà du seuil. Elle porte à la fois l'amour de Thade, la mémoire de la catastrophe de Nyx et le refus que son retour serve d'excuse à la destruction de Valombre.",
    "notes": "",
    "race": "humaine, ancienne mage de l'Ordre de Nyx, piégée au-delà du seuil",
    "faction": "Ordre de Nyx (origine) / Spirale"
  },
  {
    "id": "thorgar_pretre_nain",
    "nom": "Thorgar, Haut Clerc du Temple-Forgeron",
    "role": "Ancre morale de Valombre. Gardien des rites funéraires nains, sincère, courageux, conscient qu'il ne possède qu'une part de la vérité.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_thorgar_pretre_nain.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Thorgar termine un geste rituel avant de lever les yeux vers eux.",
      "objectif": "Préserver la sainteté des morts et protéger les vivants, même quand les deux sont incompatibles.",
      "attitude": "Grave et inflexible sur les questions sacrées, mais reconnaissant envers ceux qui aident. Porte une fatigue croissante."
    },
    "disposition": "amical",
    "impulsion": "Tenir les rites même quand la foi tremble.",
    "degats": {
      "valeur": 2,
      "description": "Marteau consacré et renvoi des morts",
      "tags": [
        "proche",
        "sacre",
        "anti-mort-vivant"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Armure de prêtre-forgeron"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "clerc",
      "rite",
      "morts-nommes",
      "inflexible"
    ],
    "actionsMJ": [
      "Exiger qu'un mort soit nommé avant d'agir",
      "Opposer le devoir sacré à l'efficacité",
      "Tenir une ligne que personne d'autre ne veut tenir"
    ],
    "description": "Thorgar sert de repère moral aux Terrasses. Il protège les rites funéraires nains, nomme les morts et rappelle aux PJ que sauver la cité ne justifie pas toujours de piétiner ce qu'elle a juré d'honorer.",
    "notes": "",
    "race": "nain",
    "faction": "Communauté Naine"
  },
  {
    "id": "mara_dirigeante",
    "nom": "Mara, dirigeante de la Résistance",
    "role": "Cheffe de la résistance civile. Pragmatique, fatiguée, efficace.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_mara_dirigeante.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Quand les PJ la rencontrent pour la première fois, Mara consulte une carte ou une liste de noms, déjà occupée à compter les pertes possibles.",
      "objectif": "Reprendre la ville en stratège, pas en héros. Minimiser les pertes.",
      "attitude": "Pragmatique et directe. Évaleur les PJ sur leurs actes, pas leurs paroles."
    },
    "disposition": "neutre",
    "impulsion": "Sauver le plus grand nombre, même si personne ne sort indemne.",
    "degats": {
      "valeur": 1,
      "description": "Arbalète, pièges, embuscade préparée",
      "tags": [
        "loin",
        "preparation",
        "discret"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Reste loin du front"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "stratège",
      "résistance",
      "pragmatique",
      "réseau"
    ],
    "actionsMJ": [
      "Forcer un choix entre deux groupes à sauver",
      "Transformer une preuve en opération concrète",
      "Demander ce que les PJ acceptent de perdre"
    ],
    "description": "Mara dirige la Résistance comme une opération de survie plutôt que comme une geste héroïque. Elle fournit des plans, des contacts et des choix difficiles, en jugeant les PJ sur ce qu'ils acceptent de risquer.",
    "notes": "",
    "race": "humaine",
    "faction": "Résistance Civile"
  },
  {
    "id": "durnik_chef_mineur",
    "nom": "Durnik, chef de la Guilde des Mineurs",
    "role": "Chef de guilde pragmatique. Ouvre ou ferme l'accès aux mines.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_durnik_chef_mineur.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Durnik les jauge comme il jaugerait une galerie instable : en silence, avant de décider si elle tiendra.",
      "objectif": "Protéger ses hommes et empêcher quiconque de rouvrir la fissure sans précautions.",
      "attitude": "Bourru, honnête. Méprisant envers les mages qui parlent sans agir."
    },
    "disposition": "neutre",
    "impulsion": "Fermer les accès dangereux jusqu'à ce qu'on mérite sa confiance.",
    "degats": {
      "valeur": 2,
      "description": "Hache de mine, éboulement contrôlé, terrain souterrain",
      "tags": [
        "proche",
        "brutal",
        "terrain"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Armure de mine et endurance naine"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "mineur",
      "gardien",
      "bourru",
      "terrain"
    ],
    "actionsMJ": [
      "Bloquer une route tant qu'un risque n'est pas assumé",
      "Faire payer l'arrogance des mages",
      "Offrir un passage sûr contre une promesse claire"
    ],
    "description": "Durnik contrôle l'accès réel aux mines et aux mineurs. Il n'aime ni les promesses vagues ni les mages pressés, mais il respecte les gens qui assument clairement les risques souterrains.",
    "notes": "",
    "race": "nain",
    "faction": "Communauté Naine",
    "antagoniste": false
  },
  {
    "id": "sniv_kobold",
    "nom": "Sniv",
    "role": "Témoin universel. A tout vu, se souvient de tout, parle précisément.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_sniv_kobold.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Sniv cherche d'abord la sortie la plus proche avant de répondre à la moindre question.",
      "objectif": "Rester en vie. Accessoirement, être utile à quelqu'un qui le protégera.",
      "attitude": "Terrifié mais coopératif si rassuré. Dit la vérité sans détour."
    },
    "disposition": "neutre",
    "impulsion": "Survivre en disant exactement ce qu'il a vu.",
    "degats": {
      "valeur": 0,
      "description": "Fuite, morsure paniquée, caillou lancé",
      "tags": [
        "faible",
        "discret"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "en_danger",
        "hors_jeu"
      ]
    },
    "etiquettes": [
      "témoin",
      "furtif",
      "terrifié",
      "conduits"
    ],
    "actionsMJ": [
      "Révéler un détail précis que personne n'avait remarqué",
      "Fuir vers un passage utile",
      "Demander protection avant de parler"
    ],
    "description": "Sniv est un témoin fragile et précieux. Il relie les égouts, les passages oubliés et les scènes que personne d'autre n'a vues, à condition que les PJ prennent sa peur au sérieux.",
    "notes": "",
    "race": "kobold",
    "faction": "Témoin indépendant / Résistance"
  },
  {
    "id": "jaren_velt",
    "nom": "Jaren Velt, étudiant en arcanes",
    "role": "Outil jetable de Thade. Pas un pillard : un opérateur suivant un protocole qu'il ne comprend pas.",
    "categorie": "ennemis",
    "image": "/images/PNJ/pnj_jaren_velt.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Jaren serre trop fort ses notes ou son matériel, comme si l'ordre écrit pouvait encore le protéger.",
      "objectif": "Compléter les prélèvements T-03 à T-07 et livrer le matériel à l'Université.",
      "attitude": "Terrifié et désespéré, obéit par peur et par besoin de validation."
    },
    "disposition": "hostile",
    "impulsion": "Obéir pour être validé, puis paniquer quand le protocole mord.",
    "degats": {
      "valeur": 1,
      "description": "Dague, sort mineur, piège académique",
      "tags": [
        "proche",
        "magique",
        "fuite"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Armure de mage fragile"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "étudiant",
      "outil",
      "terrifié",
      "protocole"
    ],
    "actionsMJ": [
      "Laisser une preuve trop propre",
      "Déclencher une sécurité imposée par Thade",
      "Supplier sans comprendre ce qu'il sert"
    ],
    "description": "Jaren est un exécutant de Thade plus qu'un véritable adversaire. Sa présence montre comment l'Université transforme la peur, l'ambition et l'obéissance en outils jetables.",
    "notes": "",
    "race": "humain",
    "faction": "Université / Renégats de Thade",
    "antagoniste": false
  },
  {
    "id": "ursula_fraternite",
    "nom": "Ursula, apothicaire et Dévote de l'Ordre de Nyx",
    "role": "Dernière soignante visible de l'Ordre de Nyx. Elle continue le serment original de soigner quand les lois abandonnent. Thade l'instrumentalise sans qu'elle le sache.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_ursula_fraternite.jpg",
    "interpretation": {
      "accroche": "Quand les PJ la rencontrent pour la première fois, Ursula continue de soigner quelqu'un tout en décidant s'ils sont une menace ou une aide.",
      "objectif": "Trouver un remède aux maladies incurables via les propriétés des ossements des Thanes.",
      "attitude": "Épuisée, sincère, prête à coopérer si on ne menace pas ses gens."
    },
    "disposition": "neutre",
    "impulsion": "Cacher les siens et soigner malgré la loi.",
    "degats": {
      "valeur": 0,
      "description": "Fumigène, scalpel, fuite organisée",
      "tags": [
        "non-letal",
        "discret"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "soignante",
      "nyx",
      "dévote",
      "clandestine"
    ],
    "actionsMJ": [
      "Protéger un patient au prix d'une preuve",
      "Mentir par compassion",
      "Révéler que Nyx n'est pas une seule chose"
    ],
    "description": "Ursula représente le visage compatissant et clandestin de Nyx. Elle soigne ceux que la loi et l'Université abandonnent, tout en étant prise dans des recherches dont elle ne mesure pas toujours l'usage final.",
    "notes": "",
    "race": "humaine",
    "faction": "Ordre de Nyx - Dévots",
    "antagoniste": false
  },
  {
    "id": "aubergiste_pic_brise",
    "nom": "Brand, aubergiste Nain du Pic Brisé",
    "role": "Hôte bien informé, origine de rumeurs de première main.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_aubergiste_pic_brise.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Brand les accueille avec chaleur sans jamais cesser de surveiller la salle.",
      "objectif": "Protéger son commerce, rester informé sans prendre parti.",
      "attitude": "Jovial, accueillant, mais ne s'engage jamais ouvertement."
    },
    "disposition": "neutre",
    "impulsion": "Rester informé sans devenir responsable.",
    "degats": {
      "valeur": 1,
      "description": "Matraque sous le comptoir",
      "tags": [
        "proche",
        "non-letal"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "aubergiste",
      "rumeurs",
      "neutre",
      "nain"
    ],
    "actionsMJ": [
      "Offrir une rumeur vraie mais incomplète",
      "Protéger son établissement avant la cause",
      "Nommer qui est passé trop tard ou trop tôt"
    ],
    "description": "Brand est une porte d'entrée vers la Vieille Ville. Il offre des rumeurs, des horaires et des noms, mais protège d'abord son auberge et évite de devenir responsable d'une cause trop visible.",
    "notes": "",
    "race": "nain",
    "faction": "Vieille Ville / neutre",
    "antagoniste": false
  },
  {
    "id": "marchand_orthen",
    "nom": "Orthen, marchand du Village des Oubliés",
    "role": "Premier contact des PJ dans le Village. Normalité rassurante dans un endroit qui ne l'est pas.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_marchand_orthen.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Orthen leur pose une question sur Valombre avant même de parler de prix.",
      "objectif": "Continuer à vivre. Avoir des nouvelles du monde.",
      "attitude": "Curieux et accueillant, un peu mélancolique. Pose beaucoup de questions sur 'là-haut'."
    },
    "disposition": "amical",
    "impulsion": "Maintenir un lien avec le monde d'en haut.",
    "degats": {
      "valeur": 0,
      "description": "Bâton défensif, appel aux gardiens",
      "tags": [
        "proche",
        "défensif"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "village",
      "mémoire",
      "accueil",
      "spirale"
    ],
    "actionsMJ": [
      "Poser une question simple qui révèle un gouffre temporel",
      "Troquer une route contre des nouvelles",
      "Humaniser la Spirale"
    ],
    "description": "Orthen donne au Village des Oubliés une normalité humaine. Il sert de premier contact, de guide social et de rappel que la Spirale contient aussi des vies ordinaires.",
    "notes": "",
    "race": "humain",
    "faction": "Village des Oubliés",
    "antagoniste": false
  },
  {
    "id": "lia_enfant_nee_spirale",
    "nom": "Lia",
    "role": "Incarnation de ce que la Spirale fait aux innocents. Pas de l'horreur : de la normalité décalée.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_lia_enfant_nee_spirale.jpg",
    "interpretation": {
      "accroche": "Quand les PJ la rencontrent pour la première fois, Lia les observe avec une curiosité tranquille, comme s'ils étaient les êtres étranges de son monde.",
      "objectif": "Comprendre le monde 'd'en haut' dont les adultes parlent.",
      "attitude": "Curieuse, directe, sans filtre. Pas effrayée : c'est son monde normal."
    },
    "disposition": "amical",
    "impulsion": "Comprendre le monde impossible d'en haut.",
    "degats": {
      "valeur": 0,
      "description": "Aucun, mais ses perceptions attirent l'attention",
      "tags": [
        "innocent",
        "planaire"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "en_danger",
        "hors_jeu"
      ]
    },
    "etiquettes": [
      "enfant",
      "spirale",
      "oracle",
      "innocente"
    ],
    "actionsMJ": [
      "Décrire les flux invisibles comme des couleurs",
      "Répéter une phrase de Sealine sans la comprendre",
      "Mettre les PJ face à ce qu'ils appellent normal"
    ],
    "description": "Lia montre la Spirale sans horreur spectaculaire. Son innocence, ses perceptions décalées et ses questions simples rendent le monde d'en haut aussi étrange que celui d'en bas.",
    "notes": "",
    "race": "humaine née planaire",
    "faction": "Village des Oubliés",
    "antagoniste": false
  },
  {
    "id": "pell_ancien_garde",
    "nom": "Pell, ancien garde de Valombre",
    "role": "Gardien résigné du Village. Ne sait plus quel roi règne, mais sait encore se battre.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_pell_ancien_garde.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Pell se place naturellement entre eux et les habitants du Village.",
      "objectif": "Protéger les habitants. Peut-être un jour retrouver Valombre.",
      "attitude": "Résigné, méthodique. Un sursaut de vie quand les PJ parlent du monde d'en haut."
    },
    "disposition": "neutre",
    "impulsion": "Protéger le Village même si son identité s'efface.",
    "degats": {
      "valeur": 2,
      "description": "Épée rouillée, garde ancienne, défense de ligne",
      "tags": [
        "proche",
        "défensif"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Vieille armure entretenue"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "garde",
      "oublié",
      "protecteur",
      "mélancolique"
    ],
    "actionsMJ": [
      "Reconnaître un symbole qu'il ne peut plus dater",
      "Se placer entre les PJ et les civils",
      "Oublier un nom au pire moment"
    ],
    "description": "Pell est la protection fatiguée du Village des Oubliés. Ancien soldat détaché de son époque, il défend les habitants tout en perdant peu à peu ses repères sur Valombre.",
    "notes": "",
    "race": "humain",
    "faction": "Village des Oubliés",
    "antagoniste": false
  },
  {
    "id": "envoye_caldris",
    "nom": "Émissaire Maelric de Caldris",
    "role": "Porte l'ultimatum du royaume voisin. Arrivé par les Pierres du Traité — un vieux dispositif diplomatique permettant le passage de porteurs assermentés — il sait que Valombre ne répond plus normalement au monde extérieur. Si Valombre ne prouve pas qu'elle tient encore le verrou, Caldris imposera la quarantaine.",
    "categorie": "neutres",
    "image": "/images/PNJ/pnj_envoye_caldris.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Maelric note leurs réponses plus vite qu'il ne les juge, puis demande une preuve simple.",
      "objectif": "Éviter que la Spirale franchisse les routes de Caldris, même au prix de Valombre.",
      "attitude": "Courtois, froid, sincèrement inquiet. Demande des preuves courtes et se méfie des récits complexes."
    },
    "disposition": "neutre",
    "impulsion": "Réduire une vérité complexe à une preuve exploitable.",
    "degats": {
      "valeur": 1,
      "description": "Rapière cérémonielle, mandat, pression diplomatique",
      "tags": [
        "proche",
        "social",
        "autorité"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Protection politique, pas martiale"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "émissaire",
      "ultimatum",
      "caldris",
      "froid",
      "pierres-du-traite"
    ],
    "actionsMJ": [
      "Exiger une preuve courte sous délai",
      "Bloquer une route légalement",
      "Faire passer la prudence pour de la culpabilité",
      "Produire une carte extérieure où Valombre n'est plus atteignable depuis des semaines"
    ],
    "description": "Maelric est la pression extérieure sous forme diplomatique. Il est arrivé par les Pierres du Traité, pâle et saignant du nez, comme tous les émissaires qui franchissent le voile de continuité. Il n'est pas venu haïr Valombre, mais réduire une crise impossible en preuves, délais et mesures de quarantaine. Caldris est la seule puissance extérieure à savoir que Valombre ne répond plus normalement au monde.",
    "notes": "Arrivé via les Pierres du Traité, un dispositif rituel datant du traité entre Caldris et Valombre. Le passage ne fonctionne que pour des porteurs assermentés, munis d'un mandat officiel et accompagnés d'un mage de frontière. Les émissaires arrivent pâles, saignants du nez, avec des souvenirs incomplets du trajet. Ils peuvent entrer, mais pas ouvrir la route aux marchands, aux armées ou aux réfugiés. Pivot de la menace « La Révélation par étapes » (Front 6) et de la menace « L'Émissaire Maelric » (Front 3).",
    "race": "humain",
    "faction": "Caldris",
    "antagoniste": false
  },
  {
    "id": "elian_voss",
    "nom": "Elian Voss",
    "role": "Masque de l'Ordre de Nyx, chercheur du sérum S-01 et trafiquant d'identités. Il obtient des résultats réels, puis justifie leur coût humain.",
    "categorie": "ennemis",
    "image": "/images/PNJ/pnj_elian_voss.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Elian range un instrument, ferme un dossier, puis leur parle comme s'ils arrivaient au mauvais moment d'une expérience nécessaire.",
      "objectif": "Prouver que sa méthode sauve plus de vies qu'elle n'en détruit, et conserver les protocoles S-01.",
      "attitude": "Froid, précis, presque courtois. Répond par des résultats et oblige ses interlocuteurs à assumer leurs propres morts."
    },
    "disposition": "tendu",
    "impulsion": "Sauver par le calcul, sacrifier les cas perdus.",
    "degats": {
      "valeur": 1,
      "description": "Fiole instable, crise contrôlée, scalpel",
      "tags": [
        "alchimique",
        "proche",
        "instable"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Sorties préparées"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "médecin",
      "masque",
      "sérum",
      "sans-limite"
    ],
    "actionsMJ": [
      "Présenter un crime comme une statistique",
      "Utiliser un patient comme argument moral",
      "Détruire un registre pour garder le protocole"
    ],
    "description": "Elian Voss porte la part froide et calculatrice de Nyx. Il obtient des résultats réels, mais traite les patients, les registres et les victimes comme des variables qu'il faut accepter ou effacer.",
    "notes": "",
    "race": "humain",
    "faction": "Ordre de Nyx - Masques",
    "antagoniste": false
  },
  {
    "id": "champion_banniere_pure",
    "nom": "Champion de la Bannière Pure",
    "role": "Chevalier noir et ennemi miroir. Il croit accomplir l'ancien devoir extérieur en purifiant Valombre de la Spirale.",
    "categorie": "ennemis",
    "image": "/images/PNJ/pnj_champion_banniere_pure.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, le Champion se tient droit sous sa bannière, prêt à écouter un engagement mais pas une excuse.",
      "objectif": "Purger le verrou parce qu'il pense que ceux qui le tenaient avant lui ont échoué.",
      "attitude": "Digne, tranchant, jamais gratuitement cruel. Méprise les demi-vérités et respecte les engagements tenus devant témoins."
    },
    "disposition": "hostile",
    "impulsion": "Purger publiquement pour prouver que l'ancien devoir vit encore.",
    "degats": {
      "valeur": 3,
      "description": "Épée de maître, duel, charge sous bannière",
      "tags": [
        "proche",
        "puissant",
        "honorable"
      ]
    },
    "armure": {
      "valeur": 2,
      "description": "Armure lourde et discipline sacrée"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "brise",
        "mortelle"
      ]
    },
    "etiquettes": [
      "champion",
      "purge",
      "duel",
      "caldris"
    ],
    "actionsMJ": [
      "Sauver des civils pour gagner la foule",
      "Défier un PJ devant témoins",
      "Transformer une nuance en trahison"
    ],
    "description": "Le Champion est un adversaire public et honorable, dangereux parce qu'il peut avoir raison sur certains constats. Il transforme les nuances en lâcheté et les demi-vérités en preuves de trahison.",
    "notes": "",
    "race": "humain",
    "faction": "Caldris",
    "antagoniste": false
  },
  {
    "id": "etudiants_charmes",
    "nom": "Étudiants  de l'Université",
    "role": "Obstacle moral. Les PJ peuvent-ils se résoudre à frapper des victimes ?",
    "categorie": "ennemis",
    "image": "/images/PNJ/pnj_etudiants_charmes.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Quand les PJ les rencontrent pour la première fois, les étudiants forment un obstacle tremblant, les yeux humides et les gestes mécaniques.",
      "objectif": "Aucun propre. Exécutent les ordres du charme.",
      "attitude": "Mécaniques, regard vitreux. Certains pleurent."
    },
    "disposition": "neutre",
    "impulsion": "Bloquer les intrus sous contrainte en pleurant parfois.",
    "degats": {
      "valeur": 1,
      "description": "Sorts mineurs, bâtons, mur de corps charmés",
      "tags": [
        "groupe",
        "magique",
        "non-volontaire"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "groupe",
      "victimes",
      "charmés",
      "obstacle-moral"
    ],
    "actionsMJ": [
      "Forcer les PJ à choisir entre efficacité et non-létal",
      "Laisser une victime murmurer une demande d'aide",
      "Occuper un passage clé"
    ],
    "description": "Les étudiants charmés sont un obstacle moral avant d'être une menace tactique. Ils forcent les PJ à choisir entre avancer vite, protéger des victimes et limiter les dégâts dans la Tour.",
    "notes": "",
    "race": "humains",
    "faction": "Université"
  },
  {
    "id": "gardes_pieges",
    "nom": "Gardes de la Tour",
    "role": "Protéger et servir.",
    "categorie": "ennemis",
    "image": "/images/PNJ/pnj_gardes_pieges.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Quand les PJ les rencontrent pour la première fois, les gardes somment d'abord les intrus de reculer, comme s'ils espéraient encore ne pas devoir frapper.",
      "objectif": "Obéir par contrainte, pas par choix. Certains espèrent être vaincus.",
      "attitude": "Disciplinés mais hésitants. Avertissent avant de frapper."
    },
    "disposition": "neutre",
    "impulsion": "Obéir jusqu'à ce qu'une preuve rende l'ordre impossible.",
    "degats": {
      "valeur": 2,
      "description": "Mur de hallebardes, discipline, sommations",
      "tags": [
        "groupe",
        "proche",
        "formation"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Armure de garde"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "gardes",
      "hésitants",
      "tour",
      "retournables"
    ],
    "actionsMJ": [
      "Avertir avant de frapper",
      "Fermer une porte au nom d'un ordre légal",
      "Douter devant une preuve précise"
    ],
    "description": "Les gardes de la Tour sont des défenseurs contraints ou manipulés. Leur discipline rend la progression dangereuse, mais leurs hésitations donnent aux PJ des occasions de les retourner ou de les épargner.",
    "notes": "",
    "race": "humains",
    "faction": "Garde de la Tour"
  },
  {
    "id": "le_collecteur",
    "nom": "Le Collecteur (identité inconnue)",
    "role": "Intermédiaire de la Pègre. Ni héros ni monstre : quelqu'un qui fait tourner une machine.",
    "categorie": "ennemis",
    "image": "/images/PNJ/pnj_le_collecteur.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, le Collecteur connaît déjà au moins une chose qu'ils auraient préféré garder pour eux.",
      "objectif": "Maintenir les flux de la Pègre, éviter l'exposition. Que personne ne sache qui il est vraiment.",
      "attitude": "Professionnel, jamais personnel. Traite les PJ comme des clients potentiels ou des problèmes à gérer selon leur comportement."
    },
    "disposition": "neutre",
    "impulsion": "Rester indispensable en vendant passages, dettes et secrets.",
    "degats": {
      "valeur": 2,
      "description": "Rapière, arbalète de poing, chantage, hommes de main",
      "tags": [
        "proche",
        "loin",
        "sournois"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Contacts, sorties et gardes du corps"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "syndicat",
      "dette",
      "secret",
      "fuyant"
    ],
    "actionsMJ": [
      "Offrir exactement l'information utile au mauvais prix",
      "Transformer une aide en dette",
      "Disparaître avant d'être coincé"
    ],
    "description": "Le Collecteur incarne le Syndicat comme service indispensable et dette dangereuse. Il vend des passages, des secrets et des arrangements, toujours au prix qui enferme un peu plus ses clients.",
    "notes": "",
    "race": "humain",
    "faction": "Syndicat des Brumes",
    "antagoniste": false
  },
  {
    "id": "contremaite_egouts",
    "nom": "Brek, dit 'le Tuyau'",
    "role": "Logisticien souterrain du Syndicat. Ni violent ni cruel : juste pratique.",
    "categorie": "ennemis",
    "image": "/images/PNJ/pnj_contremaite_egouts.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, Brek vérifie d'abord qui bloque le passage, qui paie, et qui ment.",
      "objectif": "Garder le contrôle de ses tunnels et être payé à temps.",
      "attitude": "Économe en mots. Méfiant par défaut. Récompense la directness. Déteste les gens qui tournent autour du pot."
    },
    "disposition": "neutre",
    "impulsion": "Contrôler les tunnels et vendre le passage au bon prix.",
    "degats": {
      "valeur": 2,
      "description": "Hachette, arbalète, trappes et vannes",
      "tags": [
        "proche",
        "terrain",
        "piège"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Terrain connu et embuscades"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "égouts",
      "logistique",
      "syndicat",
      "pratique"
    ],
    "actionsMJ": [
      "Ouvrir une route qui crée un nouveau problème",
      "Actionner une vanne au pire moment",
      "Demander paiement avant morale"
    ],
    "description": "Brek tient la logistique souterraine du Syndicat. Il connaît les tunnels, les vannes et les routes discrètes, et traite la morale comme une complication ajoutée au prix du passage.",
    "notes": "",
    "race": "humain",
    "faction": "Syndicat des Brumes",
    "antagoniste": false
  },
  {
    "id": "hommes_main_pegre",
    "nom": "Homme de main du Syndicat",
    "role": "Chair à canon de la Pègre. Des gens ordinaires dans un mauvais boulot.",
    "categorie": "ennemis",
    "image": "/images/PNJ/pnj_hommes_main_pegre.jpg",
    "interpretation": {
      "accroche": "Quand les PJ les rencontrent pour la première fois, les hommes de main cherchent surtout à paraître plus nombreux et plus sûrs d'eux qu'ils ne le sont.",
      "objectif": "Faire le travail, toucher la paie, rentrer chez eux.",
      "attitude": "Professionnels du minimum. Pas de cruauté gratuite, pas d'héroïsme non plus."
    },
    "disposition": "hostile",
    "impulsion": "Faire le minimum violent nécessaire pour être payés.",
    "degats": {
      "valeur": 1,
      "description": "Matraques, couteaux, intimidation en groupe",
      "tags": [
        "groupe",
        "proche",
        "non-letal"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Ils fuient si le chef tombe"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "groupe",
      "pègre",
      "intimidation",
      "jetables"
    ],
    "actionsMJ": [
      "Encercler quelqu'un de vulnérable",
      "Se disperser dès que le coût devient réel",
      "Révéler qui les paie sous pression"
    ],
    "description": "Les hommes de main du Syndicat peuplent les scènes de pression et d'intimidation. Ils sont dangereux en groupe, mais restent des employés ordinaires qui peuvent fuir, parler ou changer de calcul.",
    "notes": "",
    "race": "humains",
    "faction": "Syndicat des Brumes",
    "antagoniste": false
  },
  {
    "id": "patrouille_mixte_conseil",
    "nom": "Patrouille Mixte du Conseil",
    "role": "Escouade composite chargée de briser la résistance artisanale.",
    "image": "/images/PNJ/pnj_patrouille_mixte_conseil.jpg",
    "interpretation": {
      "accroche": "Quand les PJ la rencontrent pour la première fois, la patrouille transforme immédiatement la rue en poste de contrôle.",
      "objectif": "Appliquer les ordres du Conseil et briser la résistance artisanale",
      "attitude": "Disciplinés et méthodiques, suivent les ordres sans question"
    },
    "impulsion": "Maintenir l'ordre public même quand l'ordre devient injuste.",
    "degats": {
      "valeur": 2,
      "description": "Hallebardes, mandats, arrestations coordonnées",
      "tags": [
        "groupe",
        "proche",
        "autorité"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Boucliers, procédures et supériorité numérique"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "conseil",
      "patrouille",
      "loi",
      "pression"
    ],
    "actionsMJ": [
      "Transformer une scène en contrôle d'identité",
      "Confisquer une preuve au nom de la sécurité",
      "Obéir à un mandat contestable"
    ],
    "description": "La patrouille mixte matérialise l'ordre civil de Valombre lorsqu'il devient oppressant. Elle sert à bloquer une rue, saisir une preuve, arrêter un témoin ou rappeler que la loi peut protéger l'injustice.",
    "notes": "",
    "race": "groupe humanoïde",
    "faction": "Conseil de Valombre",
    "categorie": "ennemis",
    "disposition": "hostile",
    "antagoniste": false
  },
  {
    "id": "garde_portail_mine",
    "nom": "Escouade de Gardes du Portail",
    "role": "Soldats épuisés chargés de verrouiller l'accès.",
    "image": "/images/PNJ/pnj_patrouille_mixte_conseil.jpg",
    "interpretation": {
      "accroche": "Quand les PJ la rencontrent pour la première fois, l'escouade garde les mains près des armes et les yeux sur les autorisations.",
      "objectif": "Obéir aux ordres du Conseil tout en évitant un massacre",
      "attitude": "Nerveux et soupçonneux, craignent l'espionnage"
    },
    "impulsion": "Verrouiller l'accès et éviter d'être responsables du désastre.",
    "degats": {
      "valeur": 2,
      "description": "Lances, arbalètes, herses et barricades",
      "tags": [
        "groupe",
        "défensif",
        "proche"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Poste fortifié"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "portail",
      "mine",
      "épuisés",
      "soupçonneux"
    ],
    "actionsMJ": [
      "Exiger une autorisation impossible",
      "Laisser passer quelqu'un contre garantie personnelle",
      "Déclencher l'alarme par peur"
    ],
    "description": "L'escouade du portail verrouille l'accès aux profondeurs. Elle n'est pas cruelle, mais sa peur, sa fatigue et ses ordres peuvent transformer la mine en frontière presque impossible à franchir.",
    "notes": "",
    "race": "groupe humanoïde",
    "faction": "Conseil / Terrasses Naines",
    "categorie": "ennemis",
    "disposition": "neutre",
    "antagoniste": false
  },
  {
    "id": "magi_tuteur_loyal",
    "nom": "Maître Arcaniste Loyaliste",
    "role": "Professeur resté fidèle à la Guilde, mais pas à Thade.",
    "image": "/images/PNJ/pnj_magi_tuteur_loyal.jpg",
    "interpretation": {
      "accroche": "Quand les PJ le rencontrent pour la première fois, le maître arcaniste parle au nom de l'Université avant de parler en son propre nom.",
      "objectif": "Protéger la Tour et la Guilde des Mages contre les intrus",
      "attitude": "Arrogant et méfiant, déclenche ses défenses sans sommation"
    },
    "impulsion": "Protéger l'institution avant de comprendre qui la parasite.",
    "degats": {
      "valeur": 3,
      "description": "Glyphes, contre-sorts, projectiles arcaniques",
      "tags": [
        "magique",
        "loin",
        "défensif"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Barrières de la Tour"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "mage",
      "loyaliste",
      "université",
      "retournable"
    ],
    "actionsMJ": [
      "Déclencher une défense académique disproportionnée",
      "Exiger une preuve formelle au milieu du danger",
      "Changer de camp si l'institution est clairement trahie"
    ],
    "description": "Le maître arcaniste loyaliste défend l'Université avant de comprendre qu'elle a été parasitée. Il peut d'abord s'opposer aux PJ, puis devenir utile si la trahison de Thade devient indiscutable.",
    "notes": "",
    "race": "humain",
    "faction": "Université Arcanique",
    "categorie": "ennemis",
    "disposition": "tendu",
    "antagoniste": false
  },
  {
    "id": "kessak_mineur",
    "nom": "Kessak, mineur de la Galerie 5",
    "role": "Jeune mineur récemment affecté aux galeries supérieures après la fermeture des niveaux profonds. Il supporte mal les tâches de surface et cherche surtout à retrouver une équipe régulière.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_kessak_mineur.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Essuie régulièrement la poussière de ses mains sur son pantalon, même lorsqu'elles sont propres.",
      "objectif": "Être réaffecté à une équipe de fond et montrer qu'il est capable de tenir une galerie sans supervision.",
      "attitude": "Volontaire, un peu susceptible quand on le traite comme un débutant. Devient rapidement bavard lorsqu'on parle du travail de la mine."
    },
    "disposition": "neutre",
    "impulsion": "Prouver qu'il est un véritable mineur et pas seulement le plus jeune de l'équipe.",
    "degats": {
      "valeur": 1,
      "description": "Hache de mine, pierre de taille",
      "tags": [
        "proche",
        "brutal",
        "improvise"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Vêtements de travail renforcés"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "mineur",
      "jeune",
      "volontaire",
      "observateur"
    ],
    "actionsMJ": [
      "Se plaindre des travaux de surface auxquels il a été affecté",
      "Mentionner un bruit ou un courant d'air inhabituel comme un détail de travail",
      "Reconnaître un outil ou un équipement abandonné dans les galeries"
    ],
    "description": "Kessak sert à donner un visage jeune et concret aux équipes de mineurs. Il parle des galeries comme d'un lieu de travail avant d'y voir un mystère ou une menace.",
    "notes": "Kessak peut avoir remarqué quelque chose d'étrange dans les niveaux profonds, mais il ne l'interprète pas comme un phénomène surnaturel.",
    "race": "nain",
    "faction": "Guilde des Mineurs"
  },
  {
    "id": "brandin_forgeron",
    "nom": "Brandin, forgeron des Terrasses",
    "role": "Forgeron indépendant spécialisé dans la réparation des outils de mine et des objets domestiques. Son atelier est plus modeste que celui du Temple-Forgeron, mais son travail est fiable.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_brandin_forgeron.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Fait sonner les pièces métalliques du bout de l'ongle avant de donner son avis.",
      "objectif": "Obtenir suffisamment de commandes régulières pour engager un apprenti.",
      "attitude": "Direct et appliqué. Peu impressionné par les titres, mais toujours disposé à discuter avec quelqu'un qui connaît son métier."
    },
    "disposition": "neutre",
    "impulsion": "Laisser la qualité de son travail parler à sa place.",
    "degats": {
      "valeur": 2,
      "description": "Marteau de forge, tenailles",
      "tags": [
        "proche",
        "brutal",
        "outils"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Tablier de cuir renforcé"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "forgeron",
      "artisan",
      "meticuleux",
      "independant"
    ],
    "actionsMJ": [
      "Examiner un objet endommagé avant de parler de son prix",
      "Proposer une réparation simple contre un service raisonnable",
      "Prêter un outil en exigeant qu'il soit rendu propre et affûté"
    ],
    "description": "Brandin peuple les Terrasses comme artisan indépendant. Il permet d'obtenir réparations, avis sur le métal et présence quotidienne sans transformer chaque échange en intrigue majeure.",
    "notes": "Brandin respecte Thorgar comme forgeron, mais n'aime pas que chaque artisan des Terrasses soit comparé au Temple.",
    "race": "nain",
    "faction": "Communauté Naine"
  },
  {
    "id": "voldrin_changeur",
    "nom": "Voldrin, comptable du Comptoir",
    "role": "Comptable chargé des registres du Comptoir de Change des Terrasses. Il vérifie les pesées, les avances de salaire et les transactions de la Guilde.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_voldrin_changeur.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Replace machinalement les objets parallèlement au bord de son bureau.",
      "objectif": "Clore chaque journée sans erreur entre les pièces reçues, les reçus délivrés et les sommes inscrites.",
      "attitude": "Formel et peu démonstratif. Se montre serviable dès qu'une demande est formulée clairement."
    },
    "disposition": "neutre",
    "impulsion": "Transformer chaque échange en une opération compréhensible et vérifiable.",
    "degats": {
      "valeur": 0,
      "description": "Coupe-papier",
      "tags": [
        "proche",
        "improvise",
        "non-letal"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "comptable",
      "registres",
      "methodique",
      "guilde"
    ],
    "actionsMJ": [
      "Retrouver un paiement à partir d'une date ou d'un montant précis",
      "Demander quel clan ou quelle institution garantit une transaction",
      "Signaler calmement une incohérence dans un registre"
    ],
    "description": "Voldrin donne accès aux registres économiques des Terrasses. Il sert surtout à vérifier des paiements, des garanties, des dates et les traces administratives laissées par les mouvements de la Guilde.",
    "notes": "Voldrin n'est pas incorruptible par principe : il veut surtout qu'une personne identifiable assume officiellement chaque arrangement.",
    "race": "nain",
    "faction": "Guilde des Mineurs"
  },
  {
    "id": "grodrin_serveur",
    "nom": "Grodrin, serveur du Marteau d'Étain",
    "role": "Serveur expérimenté du Marteau d'Étain. Il connaît les habitudes des clients réguliers, sait qui s'assoit avec qui et intervient avant que les discussions ne deviennent des disputes.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_grodrin_serveur.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Pose les chopes exactement au même endroit devant chaque habitué.",
      "objectif": "Faire tourner la salle sans verre cassé, compte impayé ni bagarre inutile.",
      "attitude": "Peu bavard pendant le service, mais pas mystérieux. Son humour sec apparaît lorsque la salle se calme."
    },
    "disposition": "neutre",
    "impulsion": "Garder les chopes pleines et les querelles assez petites pour rester verbales.",
    "degats": {
      "valeur": 1,
      "description": "Poing, plateau en bois",
      "tags": [
        "proche",
        "non-letal",
        "improvise"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "serveur",
      "taverne",
      "habitudes",
      "calme"
    ],
    "actionsMJ": [
      "Interrompre une conversation tendue en apportant une commande",
      "Indiquer discrètement quel habitué connaît le sujet recherché",
      "Se souvenir de ce qu'une personne commande, mais pas nécessairement de ce qu'elle raconte"
    ],
    "description": "Grodrin rend le Marteau d'Étain vivant et lisible. Il connaît les habitudes de salle, les clients réguliers et les petites tensions avant qu'elles ne deviennent des bagarres.",
    "notes": "Grodrin peut fournir des renseignements simples sur les allées et venues, mais il n'est ni informateur professionnel ni marchand de secrets.",
    "race": "nain",
    "faction": "Communauté Naine / Marteau d'Étain"
  },
  {
    "id": "brogar_eclaireur",
    "nom": "Brogar, ancien arpenteur des mines",
    "role": "Mineur retraité qui relevait autrefois les distances, les pentes et les anciennes galeries. Il passe encore régulièrement au Marteau d'Étain pour commenter les nouveaux plans.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_brogar_eclaireur.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Sort de sa poche un morceau de craie dès que quelqu'un décrit un trajet.",
      "objectif": "Rester utile aux équipes actuelles sans avoir à reprendre un poste régulier.",
      "attitude": "Familier et volontiers critique. Corrige les imprécisions avec plaisir, mais ne cherche pas à rabaisser ses interlocuteurs."
    },
    "disposition": "amical",
    "impulsion": "Comparer les nouveaux chemins avec ceux qu'il a connus autrefois.",
    "degats": {
      "valeur": 1,
      "description": "Canne ferrée de mineur",
      "tags": [
        "proche",
        "improvise",
        "defensif"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "mineur",
      "retraite",
      "arpenteur",
      "cartes"
    ],
    "actionsMJ": [
      "Corriger le nom ou la distance d'une ancienne galerie",
      "Tracer un itinéraire approximatif à la craie sur une table",
      "Expliquer pourquoi un passage a été abandonné pour une raison parfaitement ordinaire"
    ],
    "description": "Brogar fournit une mémoire pratique des galeries. Il peut commenter un plan, reconnaître une pente ou donner un avis de terrain sans devenir un guide permanent.",
    "notes": "Brogar connaît les anciennes galeries, mais ses informations datent parfois de plusieurs décennies.",
    "race": "nain",
    "faction": "Communauté Naine"
  },
  {
    "id": "torm_garde_mine",
    "nom": "Torm, gardien de l'Entrée",
    "role": "Garde nain affecté au contrôle de la cage de descente. Il vérifie les équipes, les lampes, le matériel et les autorisations avant chaque départ.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_torm_garde_mine.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Vérifie systématiquement la mèche des lampes pendant qu'on lui parle.",
      "objectif": "Terminer son service sans laisser descendre quelqu'un de mal équipé ou inscrit sur la mauvaise équipe.",
      "attitude": "Professionnel et patient avec les erreurs honnêtes. Devient inflexible dès qu'une personne plaisante avec les règles de sécurité."
    },
    "disposition": "neutre",
    "impulsion": "Vérifier les noms, les lampes et les autorisations, toujours dans le même ordre.",
    "degats": {
      "valeur": 2,
      "description": "Hache de garde, poignard de ceinture",
      "tags": [
        "proche",
        "brutal",
        "discipline"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Cotte de garde et casque de mine"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "garde",
      "mine",
      "securite",
      "methodique"
    ],
    "actionsMJ": [
      "Rendre une autorisation en indiquant précisément ce qui manque",
      "Inspecter l'équipement d'un visiteur avant de discuter de son accès",
      "Trouver un accompagnateur officiel pour quelqu'un qui s'est montré respectueux"
    ],
    "description": "Torm rend l'entrée de la mine concrète et procédurale. Il vérifie les noms, les lampes et les autorisations, rappelant que descendre est un acte encadré avant d'être une aventure.",
    "notes": "Torm ne cherche pas à empêcher les PJ de passer. Il cherche à ne pas être tenu responsable s'ils descendent sans préparation.",
    "race": "nain",
    "faction": "Guilde des Mineurs"
  },
  {
    "id": "yselle_vaurin",
    "nom": "Yselle Vaurin, première syndique",
    "role": "Première syndique de la Guilde Marchande. Elle préside les assemblées, représente les négociants auprès du Conseil et arbitre les conflits entre les principales maisons de commerce.",
    "categorie": "neutres",
    "image": "/images/PNJ/pnj_yselle_vaurin.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Examine toujours le sceau, la signature ou le registre posé devant elle avant de regarder son interlocuteur.",
      "objectif": "Maintenir les marchés ouverts, faire respecter les contrats et préserver l’influence de la Guilde auprès du Conseil.",
      "attitude": "Courtoise et attentive, mais peu sensible aux discours vagues. Elle préfère les chiffres, les noms et les engagements clairement formulés."
    },
    "disposition": "neutre",
    "impulsion": "Transformer chaque conflit en un accord dont la Guilde peut garantir les termes.",
    "degats": {
      "valeur": 0,
      "description": "Autorité marchande et gardes de la Guilde",
      "tags": [
        "non-combattante",
        "social",
        "autorite"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Protection institutionnelle de la Guilde"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "marchande",
      "syndique",
      "negociatrice",
      "influente"
    ],
    "actionsMJ": [
      "Demander qui garantit une promesse ou un paiement",
      "Suspendre un crédit jusqu’à ce qu’un litige soit réglé",
      "Proposer un compromis avantageux mais contraignant"
    ],
    "description": "Femme d’une cinquantaine d’années, vêtue de robes sombres soigneusement coupées. Elle porte au cou le sceau de la Guilde et garde toujours un petit carnet relié dans une poche intérieure.",
    "notes": "Yselle distingue les intérêts de la Guilde de ceux des maisons marchandes. Elle peut s’opposer à un négociant puissant si ses pratiques menacent la confiance dans les contrats.",
    "race": "humaine",
    "faction": "La Guilde Marchande"
  },
  {
    "id": "odran_bellec",
    "nom": "Odran Bellec, maître du Beffroi",
    "role": "Maître du Beffroi de la Marchande. Il supervise l’horloge, les cloches des marchés, les poids officiels et les registres qui fixent les heures d’ouverture et de fermeture des halles.",
    "categorie": "neutres",
    "image": "/images/PNJ/pnj_odran_bellec.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Interrompt parfois une phrase pour écouter le mécanisme de l’horloge et compter silencieusement les battements.",
      "objectif": "Maintenir l’horloge, les cloches et les mesures officielles assez fiables pour que personne ne puisse contester les échanges.",
      "attitude": "Méticuleux, littéral et rarement pressé. Il devient plus loquace dès qu’une conversation concerne un mécanisme, une heure ou une mesure."
    },
    "disposition": "neutre",
    "impulsion": "Faire coïncider les horaires, les poids et les registres avec une précision incontestable.",
    "degats": {
      "valeur": 1,
      "description": "Clé de mécanicien en fer",
      "tags": [
        "proche",
        "improvise",
        "defensif"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "beffroi",
      "horloger",
      "mesures",
      "meticuleux"
    ],
    "actionsMJ": [
      "Comparer un objet à un poids ou à une mesure officielle",
      "Signaler une incohérence dans un horaire ou un registre",
      "Faire sonner une cloche pour ouvrir, fermer ou interrompre un marché"
    ],
    "description": "Homme mince aux cheveux grisonnants, vêtu d’un tablier de travail couvert de petites poches. Ses doigts portent des traces d’huile et de limaille malgré les efforts qu’il fait pour les nettoyer.",
    "notes": "Odran conserve les anciens registres du Beffroi. Il peut vérifier l’heure d’un événement public, la fermeture d’une halle ou l’utilisation officielle d’une cloche.",
    "race": "humain",
    "faction": "La Guilde Marchande"
  },
  {
    "id": "geraud_veyre",
    "nom": "Géraud Veyre, prévôt de Saint-Aldric",
    "role": "Prévôt de la cathédrale Saint-Aldric. Il administre le chapitre, représente le clergé auprès du Conseil et préside les principales cérémonies religieuses de Valombre.",
    "categorie": "neutres",
    "image": "/images/PNJ/pnj_geraud_veyre.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Prend quelques secondes de silence avant de répondre à toute question qui engage une promesse, un jugement ou la réputation d’une personne.",
      "objectif": "Préserver l’autorité du clergé sur les rites et empêcher que la cathédrale ne devienne un simple décor des décisions du Conseil.",
      "attitude": "Formel et mesuré. Il écoute sans interrompre, mais distingue strictement les confidences privées des déclarations faites devant témoins."
    },
    "disposition": "neutre",
    "impulsion": "Donner une forme publique et durable aux serments que les habitants prononcent.",
    "degats": {
      "valeur": 1,
      "description": "Bâton cérémoniel et autorité du chapitre",
      "tags": [
        "proche",
        "social",
        "autorite",
        "non-letal"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Respect attaché à sa fonction"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "pretre",
      "prevot",
      "serments",
      "institution"
    ],
    "actionsMJ": [
      "Demander qu’un engagement soit répété devant témoins",
      "Opposer les usages du chapitre à une décision précipitée",
      "Accorder une audience privée sans promettre son soutien"
    ],
    "description": "Homme âgé à la barbe courte et blanche, vêtu de robes grises bordées de bleu sombre. Il porte une chaîne d’argent ornée du livre et de l’épée de Saint-Aldric.",
    "notes": "Géraud n’est pas hostile au Conseil, mais il refuse que les prêtres soient traités comme des fonctionnaires municipaux. Il accorde une grande importance aux précédents et aux formulations exactes des serments.",
    "race": "humain",
    "faction": "Le Clergé de Saint-Aldric"
  },
  {
    "id": "alix_marne",
    "nom": "Sœur Alix Marne, hospitalière",
    "role": "Hospitalière du Clergé de Saint-Aldric. Elle organise les aumônes, visite les malades et aide les familles qui ne peuvent payer les soins ou les funérailles.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_alix_marne.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Confie régulièrement un panier, une couverture ou une liste de courses à la personne disponible la plus proche sans lui demander son rang.",
      "objectif": "Faire parvenir les réserves du clergé aux familles qui en ont réellement besoin avant qu’elles ne soient absorbées par les cérémonies et l’administration.",
      "attitude": "Chaleureuse, directe et difficile à impressionner. Elle remercie les bonnes intentions, mais juge surtout les gens sur l’aide concrète qu’ils apportent."
    },
    "disposition": "amical",
    "impulsion": "Mettre une aide utile entre les mains de quelqu’un avant que les institutions aient terminé d’en discuter.",
    "degats": {
      "valeur": 0,
      "description": "Ciseaux médicaux, eau chaude et appel aux voisins",
      "tags": [
        "non-combattante",
        "soin",
        "improvise"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "hospitaliere",
      "aumones",
      "soignante",
      "quartiers"
    ],
    "actionsMJ": [
      "Donner une tâche concrète à quelqu’un qui propose son aide",
      "Connaître une famille, un malade ou un logement oublié des registres",
      "Refuser un don accompagné de conditions humiliantes"
    ],
    "description": "Femme robuste d’une quarantaine d’années, vêtue d’une robe religieuse simple protégée par un tablier clair. Elle porte une sacoche contenant des bandages, des listes et quelques remèdes ordinaires.",
    "notes": "Alix connaît les cuisines communes, les logements pauvres et les petites chapelles de plusieurs quartiers. Elle entretient de bonnes relations avec les guérisseurs qui soignent sans demander immédiatement de paiement.",
    "race": "humaine",
    "faction": "Le Clergé de Saint-Aldric"
  },
  {
    "id": "edran_morn",
    "nom": "Edran Morn, porte-parole des Endeuillés",
    "role": "Porte-parole d’un cercle d’endeuillés qui se réunit dans la Vieille Ville. Edran affirme que les institutions de Valombre abandonnent les familles dès que les funérailles sont terminées. Il utilise certains symboles de Nyx et encourage son groupe à recourir à des pratiques interdites pour obtenir des réponses des morts.",
    "categorie": "ennemis",
    "image": "/images/PNJ/pnj_edran_morn.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Replace les portraits et les bougies devant lui avant de commencer une discussion.",
      "objectif": "Contraindre les autorités religieuses et savantes à reconnaître que les morts ne doivent pas être réduits à des noms inscrits dans des registres.",
      "attitude": "Calme tant qu’on écoute les témoignages des familles. Devient accusateur dès qu’il pense qu’un interlocuteur cherche à minimiser leur deuil ou à gagner du temps."
    },
    "disposition": "tendu",
    "impulsion": "Transformer le deuil partagé en certitude, puis la certitude en action.",
    "degats": {
      "valeur": 2,
      "description": "Couteau de travail, fioles incendiaires et soutien des Endeuillés",
      "tags": [
        "proche",
        "alchimique",
        "groupe",
        "improvise"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Protégé par les membres de son cercle plutôt que par une véritable armure"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "endeuille",
      "nyx",
      "meneur",
      "radical",
      "retournable"
    ],
    "actionsMJ": [
      "Demander à chacun de nommer un mort avant de poursuivre la discussion",
      "Transformer un refus officiel en preuve que les institutions abandonnent les familles",
      "Faire fermer les issues par les Endeuillés pendant qu’il exige une réponse",
      "Hésiter lorsque ses décisions mettent directement une famille en danger"
    ],
    "description": "Homme d’une quarantaine d’années vêtu comme un artisan de la Vieille Ville. Son manteau sombre porte des traces de cire et de pluie. Une petite clé appartenant à son épouse défunte est suspendue à son cou. Il ne porte ni robe rituelle ni insigne officiel.",
    "notes": "Edran n’est pas le chef d’un Ordre de Nyx unifié. Son cercle a adopté ce nom après avoir récupéré quelques textes et symboles interdits. Il peut renoncer à une action si les PJ prouvent que son groupe est manipulé ou que des vivants vont en payer directement le prix. Les autorités le désignent comme « le Fanatique », mais les Endeuillés l’appellent simplement Edran.",
    "race": "humain",
    "faction": "Ordre de Nyx - Endeuillés"
  },
  {
    "id": "avel_ronce",
    "nom": "Avel Ronce, Bourgmestre de Valombre",
    "role": "Préside le Conseil de Valombre, promulgue ses décisions et veille à leur application. Homme d'ordre et de procédure, il croit gouverner en cherchant le consensus, sans voir que ses propres lenteurs paralysent la cité au moment où elle aurait besoin d'agir. Sous la pression, il peut voter une loi martiale partielle pour donner l'illusion de la fermeté.",
    "categorie": "neutres",
    "image": "/images/PNJ/pnj_avel_ronce.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Tapote l'ordre du jour du bout des doigts et renvoie chaque urgence à « la commission compétente ».",
      "objectif": "Maintenir l'ordre public et sa propre légitimité en évitant toute décision qui l'exposerait personnellement.",
      "attitude": "Courtois et mesuré, sincèrement attaché à la cité, mais incapable de trancher tant qu'une procédure peut encore le couvrir. Se durcit dès qu'on l'accuse d'inaction."
    },
    "disposition": "neutre",
    "impulsion": "Produire du consensus plutôt qu'une décision, et se protéger derrière la procédure.",
    "degats": {
      "valeur": null,
      "description": "Non combattant ; agit par décrets, gardes civiques et budgets",
      "tags": [
        "autorite",
        "institutionnel"
      ]
    },
    "armure": {
      "valeur": 2,
      "description": "Garde civique, immunité de fonction et appareil administratif"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "conseil",
      "bourgmestre",
      "procedurier",
      "indecis",
      "institution"
    ],
    "actionsMJ": [
      "Enterrer une urgence sous une commission ou un conflit de compétence",
      "Chercher un coupable commode pour rassurer la population et les marchés",
      "Voter une mesure d'exception qui donne une apparence d'action",
      "Offrir aux PJ un appui officiel en échange d'une preuve présentable"
    ],
    "description": "Homme vieillissant en robe de fonction sobre, chaîne d'office sur la poitrine. Voix posée d'orateur de séance. Garde toujours un dossier ouvert devant lui, comme un rempart.",
    "notes": "Avel Ronce n'est pas corrompu : il est dépassé. Il peut devenir un allié décisif si les PJ lui apportent une vérité simple et présentable qui le couvre politiquement. Pivot de la menace « Le Conseil, la Machine à Retarder » (Front 4).",
    "race": "humain",
    "faction": "Conseil de Valombre"
  },
  {
    "id": "hessa_brunefer",
    "nom": "Hessa Brunefer, Déléguée des Terrasses",
    "role": "Voix des clans nains devant le Conseil de Valombre. Elle défend les droits, les coutumes et les galeries des Terrasses contre les empiétements de la cité haute. Lucide sur la fragilité de la position naine, elle négocie pied à pied pour que les siens ne soient ni sacrifiés ni placés sous tutelle.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_hessa_brunefer.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Rappelle d'une phrase sèche quel article de quelle charte protège les Terrasses avant de répondre.",
      "objectif": "Préserver l'autonomie des clans et l'accès aux galeries, et obtenir que Valombre traite les nains en partenaires plutôt qu'en sujets.",
      "attitude": "Directe, méfiante envers les promesses humaines, loyale envers ceux qui tiennent parole. Patiente en négociation, intraitable sur les coutumes funéraires et minières."
    },
    "disposition": "neutre",
    "impulsion": "Faire respecter les droits des Terrasses sans déclencher une rupture qui condamnerait les siens.",
    "degats": {
      "valeur": 2,
      "description": "Hache de cérémonie et autorité reconnue sur les clans",
      "tags": [
        "proche",
        "autorite"
      ]
    },
    "armure": {
      "valeur": 1,
      "description": "Maille naine et statut diplomatique"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "critique",
        "mortelle"
      ]
    },
    "etiquettes": [
      "naine",
      "deleguee",
      "terrasses",
      "negociatrice",
      "gardienne-des-coutumes"
    ],
    "actionsMJ": [
      "Opposer une charte ou une coutume ancienne à une décision du Conseil",
      "Menacer de fermer un accès commercial pour faire plier la cité haute",
      "Demander aux PJ une garantie concrète avant d'engager les clans",
      "Révéler ce que les nains savent — ou ont oublié — des tombes des Thanes"
    ],
    "description": "Naine au port grave, barbe tressée de fils d'argent marquant son rang. Porte les couleurs de son clan sous une étole de délégation. Parle lentement, pèse chaque mot.",
    "notes": "Hessa peut basculer en alliée précieuse si les PJ respectent les coutumes des Terrasses, ou se replier sur la défense des seuls clans si Valombre les trahit. Liée aux menaces « La Réputation de Valombre » (Front 3) et « Le Conseil, la Machine à Retarder » (Front 4).",
    "race": "naine",
    "faction": "Terrasses naines / Clans"
  },
  {
    "id": "maera_olane",
    "nom": "Maera Olane, Magistère de l'Université",
    "role": "Enseignante et chercheuse de l'Université qui, la première, a relevé les anomalies entourant les travaux et les réquisitions de Thade. Compétente et obstinée, elle se heurte à une institution qui préfère traiter ses soupçons comme une rivalité personnelle plutôt que d'enquêter sur son membre le plus prestigieux.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_maera_olane.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Pose des questions précises et note les réponses, persuadée que les chiffres finiront par parler.",
      "objectif": "Faire reconnaître officiellement les irrégularités de Thade avant que les preuves ne soient enterrées par l'Université.",
      "attitude": "Rigoureuse, un peu cassante, isolée mais tenace. Méfiante après avoir vu ses alertes étouffées ; reconnaissante envers quiconque la prend au sérieux."
    },
    "disposition": "amical",
    "impulsion": "Faire éclater une vérité documentée malgré une institution qui veut l'enterrer.",
    "degats": {
      "valeur": 1,
      "description": "Sorts mineurs d'analyse et de protection",
      "tags": [
        "magique",
        "proche",
        "non-letal"
      ]
    },
    "armure": {
      "valeur": 0,
      "description": "Aucune ; sa protection est sa réputation académique, fragilisée"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "mineure",
        "serieuse",
        "mortelle"
      ]
    },
    "etiquettes": [
      "universite",
      "magistere",
      "lanceuse-d-alerte",
      "isolee",
      "rigoureuse"
    ],
    "actionsMJ": [
      "Confier aux PJ une preuve avant qu'elle ne soit confisquée par une procédure interne",
      "Révéler qu'on a restreint ses accès et découragé ses témoins",
      "Demander une protection ou un relais extérieur à l'Université",
      "Pointer l'incohérence d'une version officielle trop lisse"
    ],
    "description": "Femme d'âge mûr en robe universitaire élimée aux coudes, encrier toujours à portée. Regard attentif derrière des verres. Parle vite quand elle tient une preuve.",
    "notes": "À ne pas confondre avec Maera Coren, la mère défunte de Thade. Maera Olane est le grain de sable dans l'angle mort de l'Université. Pivot de la menace « L'Université, l'Angle Mort » (Front 4) : si elle est neutralisée, l'enquête interne se referme. Son angle mort est aggravé par le déphasage : l'Université cherche un phénomène magique dans Valombre, alors que le phénomène est Valombre elle-même. Ses sorts de détection fonctionnent à l'intérieur du référentiel déphasé, ses instruments sont pris dans la même dérive, et ses mesures restent cohérentes parce que tout ce qu'elle mesure est déphasé avec elle. Olane manque de preuves publiques parce que ses instruments mentent avec la ville.",
    "race": "humaine",
    "faction": "Université"
  },
  {
    "id": "creature_spirale_cooptee",
    "nom": "La Présence Cooptée",
    "role": "Ce qui franchit le seuil affaibli et s'installe dans les galeries inférieures. Sans intention humaine mais dotée d'effets cohérents et croissants, la Spirale réécrit peu à peu les distances, les lois physiques et les êtres qu'elle absorbe. Elle n'attaque pas : elle assimile.",
    "categorie": "monstres",
    "image": "/images/PNJ/pnj_creature_spirale_cooptee.jpg",
    "antagoniste": true,
    "interpretation": {
      "accroche": "Précède son apparition par un silence qui aspire les sons et une lumière qui éclaire moins loin qu'elle ne devrait.",
      "objectif": "Occuper le vide laissé par le sceau et étendre la géométrie de la Spirale à tout ce qu'elle touche.",
      "attitude": "Sans malveillance ni pitié. Indifférente comme une marée. Ne négocie pas, ne menace pas : elle est simplement en train d'arriver."
    },
    "disposition": "hostile",
    "impulsion": "Étendre la Spirale et assimiler ce qui reste piégé dans les galeries.",
    "degats": {
      "valeur": 3,
      "description": "Distorsion planaire, froid de vérité, déplacement des distances",
      "tags": [
        "magique",
        "loin",
        "ignore-armure",
        "zone"
      ]
    },
    "armure": {
      "valeur": 2,
      "description": "Incorporelle et diffuse ; les coups ordinaires la traversent"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": [
        "perturbee",
        "repoussee",
        "contenue",
        "dissipee"
      ]
    },
    "etiquettes": [
      "spirale",
      "planaire",
      "environnemental",
      "incorporel",
      "sans-intention"
    ],
    "actionsMJ": [
      "Allonger un trajet déjà parcouru et rendre les cartes contradictoires",
      "Inverser localement le poids, le son ou l'orientation",
      "Absorber une section de galerie avec ses outils, ses structures et ceux qui s'y trouvent",
      "Coopter une présence ou un être croisé pour étendre son emprise"
    ],
    "description": "Pas une forme, mais un endroit qui a cessé d'obéir. Couloirs qui rejoignent ce qu'ils ne devraient pas toucher, ciel laiteux au fond d'une mine, échos d'une voix presque familière. On ne la combat pas : on la contient ou on la fuit.",
    "notes": "Force environnementale, pas un adversaire à abattre. Ses « cases de vie » représentent des paliers de confinement plutôt que des blessures. Liée à Sealine Vael, prisonnière au-delà du seuil. Pivot de la menace « La Spirale en Expansion » (Front 5) et de la menace « Le Glissement de l'Ancrage » (Front 6). Le déphasage de Valombre est l'expression surface de ce que la Présence fait en profondeur : la Spirale n'a pas envahi, elle a glissé l'ancrage de la cité entière.",
    "race": "manifestation planaire de la Spirale",
    "faction": "La Spirale"
  }
];
