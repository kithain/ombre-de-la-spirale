// PNJ liés à la Résistance, au Syndicat des Brumes et à l'Ordre de Nyx

export const pnjResistanceNyxData = [
{
    "id": "mara_dirigeante",
    "usageNarratif": "scene",
    "nom": "Mara, dirigeante de la Résistance",
    "role": "Cheffe de la résistance civile. Pragmatique, fatiguée, efficace.",
    "categorie": "allies",
    "image": "/images/PNJ/pnj_mara_dirigeante.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Quand les PJ la rencontrent pour la première fois, Mara consulte une carte ou une liste de noms, déjà occupée à compter les pertes possibles.",
      "objectif": "Reprendre la ville en stratège, pas en héros. Minimiser les pertes.",
      "attitude": "Pragmatique et directe. Évalue les PJ sur leurs actes, pas leurs paroles."
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
    "id": "sniv_kobold",
    "usageNarratif": "scene",
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
    "id": "ursula_fraternite",
    "usageNarratif": "scene",
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
    "usageNarratif": "levier",
    "nom": "Brand, aubergiste Nain du Pic Brisé",
    "role": "Hôte bien informé, source de rumeurs de première main.",
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
    "id": "le_collecteur",
    "usageNarratif": "scene",
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
    "usageNarratif": "levier",
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
    "usageNarratif": "levier",
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
    "id": "edran_morn",
    "usageNarratif": "scene",
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
];
