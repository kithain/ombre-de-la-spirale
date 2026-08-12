// PNJ liés à la Résistance, au Syndicat des Brumes et à l'Ordre de Nyx

export const pnjResistanceNyxData = [
{
    "id": "mara_dirigeante",
    "usageNarratif": "scene",
    "nom": "Mara, dirigeante de la Résistance",
    "role": "Cheffe de la Résistance civile. Elle organise les caches, les itinéraires et les opérations contre le Conseil et le Syndicat.",
    "categorie": "allies",
    "image": "/images/PNJ/Mara.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Elle parle en regardant une carte ou une liste de noms, comme si elle comptait déjà les pertes possibles.",
      "objectif": "Garder la Résistance en vie et frapper les bonnes cibles sans sacrifier inutilement les habitants.",
      "attitude": "Directe, fatiguée et pragmatique. Elle juge les PJ sur ce qu'ils font, pas sur ce qu'ils promettent."
    },
    "disposition": "neutre",
    "impulsion": "Sauver le plus de gens possible avec trop peu de moyens.",
    "degats": {
      "valeur": 1,
      "description": "Arbalète, pièges, embuscade préparée",
      "tags": [
        "loin",
        "préparation",
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
    "description": "Femme brune au visage marqué, vêtue de vêtements sombres et pratiques. Elle garde une écharpe ou un manteau serré autour d'elle, comme si elle était prête à partir à tout moment. Une carte, une dague ou une liste de noms n'est jamais loin de sa main.",
    "notes": "",
    "race": "humaine",
    "faction": "Résistance Civile"
  },

{
    "id": "sniv_kobold",
    "usageNarratif": "scene",
    "nom": "Sniv",
    "role": "Petit témoin des passages interdits. Il connaît les égouts, les conduits et plusieurs choses que personne d'autre n'a vues.",
    "categorie": "allies",
    "image": "/images/PNJ/Sniv.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Il regarde toujours la sortie avant de répondre.",
      "objectif": "Rester en vie et trouver quelqu'un qui le protégera vraiment.",
      "attitude": "Peureux, rapide et très précis quand il se sent en sécurité. Il répond court, mais ne brode pas."
    },
    "disposition": "neutre",
    "impulsion": "Survivre en échangeant ce qu'il sait contre une protection.",
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
    "description": "Petit kobold maigre, peau écailleuse brun-rouge, grands yeux jaunes et museau pointu. Il porte des chiffons, une capuche usée et quelques objets attachés à une corde. Il reste courbé, prêt à bondir dans un conduit ou derrière une grille.",
    "notes": "",
    "race": "kobold",
    "faction": "Témoin indépendant / Résistance"
  },

{
    "id": "ursula_fraternite",
    "usageNarratif": "scene",
    "nom": "Ursula, apothicaire et Dévote de l'Ordre de Nyx",
    "role": "Apothicaire clandestine liée à l'Ordre de Nyx. Elle soigne ceux que l'Université, le Clergé ou la loi ont abandonnés.",
    "categorie": "allies",
    "image": "/images/PNJ/Ursula.png",
    "interpretation": {
      "accroche": "Elle continue de préparer un remède pendant qu'elle interroge les PJ du regard.",
      "objectif": "Protéger ses patients et poursuivre ses recherches médicales sans livrer les siens.",
      "attitude": "Épuisée, sincère et méfiante. Elle aide volontiers, mais devient dure si un patient est menacé."
    },
    "disposition": "neutre",
    "impulsion": "Soigner ceux que personne d'autre ne veut prendre en charge.",
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
    "description": "Femme aux cheveux sombres et au visage tiré par la fatigue. Elle porte une robe de travail grise, tachée de poudres et de décoctions. Son atelier est couvert de bandages, de fioles, de pots d'onguent, de plantes sèches et de linges posés près des patients.",
    "notes": "",
    "race": "humaine",
    "faction": "Ordre de Nyx - Dévots",
    "antagoniste": false
  },

{
    "id": "aubergiste_pic_brise",
    "usageNarratif": "levier",
    "nom": "Brand, aubergiste humain du Pic Brisé",
    "role": "Aubergiste du Pic Brisé. Il entend beaucoup de rumeurs de la Vieille Ville, mais évite de se mêler ouvertement aux conflits.",
    "categorie": "allies",
    "image": "/images/PNJ/Brand.png",
    "interpretation": {
      "accroche": "Il accueille les PJ avec un sourire, tout en surveillant du coin de l'oeil les autres tables.",
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
      "humain"
    ],
    "actionsMJ": [
      "Offrir une rumeur vraie mais incomplète",
      "Protéger son établissement avant la cause",
      "Nommer qui est passé trop tard ou trop tôt"
    ],
    "description": "Homme large, barbe courte, chemise de tavernier et tablier sombre. Il tient souvent une chope ou un chiffon derrière le comptoir. Son visage est ouvert et chaleureux, mais ses yeux suivent les mouvements de la salle.",
    "notes": "",
    "race": "humain",
    "faction": "Vieille Ville / neutre",
    "antagoniste": false
  },

{
    "id": "le_collecteur",
    "usageNarratif": "scene",
    "nom": "Le Collecteur (identité inconnue)",
    "role": "Créancier du Syndicat des Brumes. Il vend informations, passages et services, mais chaque aide devient une dette.",
    "categorie": "ennemis",
    "image": "/images/PNJ/Collecteur.png",
    "interpretation": {
      "accroche": "Il connaît déjà un détail embarrassant avant que les PJ aient donné leur nom.",
      "objectif": "Rendre ses services indispensables afin que chaque faction finisse par lui devoir quelque chose.",
      "attitude": "Courtois, précis et jamais pressé. Il parle comme un marchand : rien n'est gratuit, pas même une vérité."
    },
    "disposition": "neutre",
    "impulsion": "Faire de chaque service une dette que le Syndicat pourra réclamer.",
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
      "Donner l'indice demandé, puis révéler son prix — qui n'est jamais en argent",
      "Met une dette entre les PJ et un innocent : effacer une dette d'Ursula, protéger un criminel, livrer un nom",
      "Vend la même information à deux camps différents avec quelques heures de décalage",
      "Disparaître avant d'être coincé, mais jamais sans avoir facturé au passage"
    ],
    "description": "Homme vêtu de noir, visage presque entièrement noyé dans l'ombre d'un capuchon ou d'un masque sombre. Il porte des gants, reste assis derrière une table basse et garde autour de lui des registres, des contrats et une lumière de bougie qui n'éclaire jamais assez son visage.",
    "notes": "Le Collecteur est un marchand d'arrangements. Quand les PJ lui demandent une information, il la donne — puis nomme son prix. Le prix n'est jamais simple : effacer une dette d'Ursula auprès du Syndicat, récupérer un registre saisi par la Garde, escorter une cargaison sans poser de questions, livrer le nom de la personne qui protège Olane, ou laisser partir un homme de main capturé. Chaque transaction renforce l'emprise du Syndicat.",
    "race": "humain",
    "faction": "Syndicat des Brumes",
    "antagoniste": false
  },

{
    "id": "contremaite_egouts",
    "usageNarratif": "levier",
    "nom": "Brek, dit 'le Tuyau'",
    "role": "Contremaître des égouts pour le Syndicat. Il contrôle les vannes, les grilles et les passages clandestins sous la ville.",
    "categorie": "ennemis",
    "image": "/images/PNJ/Brek.png",
    "interpretation": {
      "accroche": "Il demande d'abord qui paie, qui bloque le passage et qui ment.",
      "objectif": "Garder le contrôle de ses tunnels et être payé à temps.",
      "attitude": "Économe en mots. Méfiant par défaut. Récompense la franchise. Déteste les gens qui tournent autour du pot."
    },
    "disposition": "neutre",
    "impulsion": "Garder ses tunnels sous contrôle et ses hommes payés.",
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
      "Bloquer une poursuite en fermant une vanne",
      "Exiger un péage pendant que les PJ suivent une piste urgente",
      "Faire jeter une caisse compromettante dans un puits si les PJ approchent",
      "Protéger une cargaison sans savoir ou sans vouloir savoir ce qu'elle contient",
      "Ouvrir une route qui crée un nouveau problème",
      "Actionner une vanne au pire moment",
      "Demander paiement avant morale"
    ],
    "description": "Homme solide, barbe sombre, vêtements de cuir usés et cape courte. Il travaille dans les tunnels, près des chaînes, des vannes et des lanternes. Sa main se pose souvent sur une hachette ou sur une clef de grille.",
    "notes": "Brek est pragmatique. Si les PJ lui montrent que les caisses qu'il transporte contiennent des ossements volés et que ça attire la garde, il veut s'en laver les mains. Mais le Collecteur refuse de rompre le contrat si le client paie bien. Cette fissure entre Brek et le Collecteur est exploitable par les PJ.",
    "race": "humain",
    "faction": "Syndicat des Brumes",
    "antagoniste": false
  },

{
    "id": "hommes_main_pegre",
    "usageNarratif": "levier",
    "nom": "Homme de main du Syndicat",
    "role": "Hommes de main du Syndicat. Ils intimident, escortent les cargaisons et frappent quand quelqu'un ne paie pas.",
    "categorie": "ennemis",
    "image": null,
    "interpretation": {
      "accroche": "Ils bloquent une porte ou une ruelle en essayant de paraître plus nombreux qu'ils ne le sont.",
      "objectif": "Faire le travail, toucher la paie, rentrer chez eux.",
      "attitude": "Professionnels du minimum. Pas de cruauté gratuite, pas d'héroïsme non plus."
    },
    "disposition": "hostile",
    "impulsion": "Faire peur juste assez pour toucher la paie.",
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
      "Encercler quelqu'un de vulnérable pendant qu'un autre compte les pièces",
      "Casser les doigts d'un débiteur, mais pas assez pour le tuer",
      "Escorter une cargaison en silence, observer les PJ puis disparaître",
      "Bloquer une sortie « pour vérifier que personne ne part avec les biens du Syndicat »",
      "Se disperser dès que le coût devient réel",
      "Révéler qui les paie sous pression"
    ],
    "description": "Groupe d'hommes et de femmes en manteaux sombres, bottes usées et armes courtes faciles à cacher. Ils portent matraques, couteaux, gourdins et parfois une arbalète de poing. Leur assurance disparaît vite si leur chef tombe ou si la garde approche.",
    "notes": "",
    "race": "humains",
    "faction": "Syndicat des Brumes",
    "antagoniste": false
  },

{
    "id": "edran_morn",
    "usageNarratif": "scene",
    "nom": "Edran Morn, porte-parole des Endeuillés",
    "role": "Porte-parole des Endeuillés de la Vieille Ville. Il veut forcer le Clergé et l'Université à répondre aux familles qui réclament leurs morts.",
    "categorie": "ennemis",
    "image": "/images/PNJ/Edran Morn.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Replace les portraits et les bougies devant lui avant de commencer une discussion.",
      "objectif": "Contraindre les autorités religieuses et savantes à reconnaître que les morts ne doivent pas être réduits à des noms inscrits dans des registres.",
      "attitude": "Calme tant qu’on écoute les témoignages des familles. Devient accusateur dès qu’il pense qu’un interlocuteur cherche à minimiser leur deuil ou à gagner du temps."
    },
    "disposition": "tendu",
    "impulsion": "Obtenir une réponse des morts, même si cela exige un rite interdit.",
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
      "endeuillé",
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
    "description": "Homme d'une quarantaine d'années, cheveux sombres, visage creusé et manteau d'artisan taché de cire. Une petite clé pend à son cou, souvenir de son épouse morte. Il parle au milieu de portraits, de bougies et de proches endeuillés.",
    "notes": "Edran n’est pas le chef d’un Ordre de Nyx unifié. Son cercle a adopté ce nom après avoir récupéré quelques textes et symboles interdits. Il peut renoncer à une action si les PJ prouvent que son groupe est manipulé ou que des vivants vont en payer directement le prix. Les autorités le désignent comme « le Fanatique », mais les Endeuillés l’appellent simplement Edran.",
    "race": "humain",
    "faction": "Ordre de Nyx - Endeuillés"
  },
];
