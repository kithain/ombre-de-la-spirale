// PNJ liés à l'Université Arcanique

export const pnjUniversiteData = [
{
    "id": "thade_coren",
    "usageNarratif": "scene",
    "nom": "Thade Coren, Archimage de l'Université Arcanique",
    "role": "Archimage de l'Université et principal responsable de la crise. Il cache depuis des années la vérité sur Nyx, Sealine et la Spirale, et veut rouvrir le seuil pour en prendre le contrôle.",
    "categorie": "ennemis",
    "image": "/images/PNJ/Thade.png",
    "antagoniste": true,
    "interpretation": {
      "accroche": "Il reçoit les PJ assis derrière un bureau impeccable, les mains posées à plat, sans hausser la voix.",
      "objectif": "Rassembler la Larme, les archives et les prisonniers nécessaires pour ouvrir le seuil selon ses propres conditions.",
      "attitude": "Poli, calme et très sûr de lui. Il ne menace presque jamais directement : il explique pourquoi son choix serait, selon lui, le seul raisonnable."
    },
    "disposition": "neutre",
    "impulsion": "Contrôler la Spirale avant qu'elle ne lui échappe une seconde fois.",
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
    "description": "Homme mûr aux traits sévères, vêtu d'une robe noire richement brodée. Ses cheveux sombres sont tirés en arrière et son visage reste presque immobile lorsqu'il parle. Il travaille dans des pièces ordonnées, éclairées par des bougies et couvertes de livres, de sceaux et d'instruments arcaniques.",
    "notes": "",
    "race": "humain",
    "faction": "Université"
  },

{
    "id": "jaren_velt",
    "usageNarratif": "scene",
    "nom": "Jaren Velt, étudiant en arcanes",
    "role": "Étudiant de l'Université utilisé par Thade pour des missions dangereuses. Il obéit parce qu'il veut être reconnu et parce qu'il a peur de perdre sa place.",
    "categorie": "ennemis",
    "image": "/images/PNJ/Jaren Velt.png",
    "interpretation": {
      "accroche": "Il serre ses livres contre lui et vérifie plusieurs fois ses notes avant de répondre.",
      "objectif": "Rapporter à Thade le matériel demandé sans être accusé d'échec ou de trahison.",
      "attitude": "Nerveux, susceptible et facilement paniqué. Il essaie de parler comme un vrai mage, mais sa peur le trahit vite."
    },
    "disposition": "hostile",
    "impulsion": "Obéir à Thade pour prouver qu'il mérite sa place à l'Université.",
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
    "description": "Jeune homme maigre, les cheveux noirs en désordre, le regard cerné par le manque de sommeil. Il porte une robe d'étudiant sombre et transporte toujours des livres, des feuilles ou une sacoche trop remplie. Ses doigts sont tachés d'encre.",
    "notes": "",
    "race": "humain",
    "faction": "Université / Renégats de Thade",
    "antagoniste": false
  },

{
    "id": "etudiants_charmes",
    "usageNarratif": "scene",
    "nom": "Étudiants de l'Université",
    "role": "Étudiants placés sous charme pour défendre la Tour. Ils bloquent les PJ sans être responsables de ce qu'ils font.",
    "categorie": "ennemis",
    "image": "/images/PNJ/Etudiante de la Tour.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Ils avancent en silence, les yeux humides, les mains crispées sur des livres, des bâtons ou de petits focus.",
      "objectif": "Empêcher les intrus de passer tant que le charme les tient.",
      "attitude": "Lents, mécaniques et absents. Certains pleurent ou murmurent des excuses sans pouvoir s'arrêter."
    },
    "disposition": "neutre",
    "impulsion": "Bloquer le passage parce que la magie les y force.",
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
    "description": "Groupe de jeunes mages en robes d'étude bleu nuit ou noires. Ils tiennent des livres, des baguettes, des bâtons de cours ou des sacoches d'alchimie. Leurs gestes sont raides et mal coordonnés, comme s'ils luttaient contre leur propre corps.",
    "notes": "",
    "race": "humains",
    "faction": "Université"
  },

{
    "id": "gardes_pieges",
    "usageNarratif": "scene",
    "nom": "Gardes de la Tour",
    "role": "Gardes de l'Université chargés de tenir les portes de la Tour. Ils obéissent aux ordres, mais certains commencent à comprendre que quelque chose ne va pas.",
    "categorie": "ennemis",
    "image": "/images/PNJ/Gardes de la tour.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Ils lèvent leurs hallebardes et ordonnent aux PJ de reculer avant d'engager le combat.",
      "objectif": "Empêcher l'accès aux étages interdits sans provoquer un massacre inutile.",
      "attitude": "Disciplinés et tendus. Ils avertissent avant de frapper et peuvent douter devant une preuve claire."
    },
    "disposition": "neutre",
    "impulsion": "Tenir la porte tant que l'ordre semble encore légitime.",
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
    "description": "Soldats en armure sombre, casque fermé ou relevé, hallebarde en main. Ils se tiennent en formation dans les couloirs de pierre de la Tour. Leurs boucliers portent les couleurs de l'Université, mais plusieurs ont le regard inquiet derrière la discipline.",
    "notes": "",
    "race": "humains",
    "faction": "Garde de la Tour"
  },

{
    "id": "magi_tuteur_loyal",
    "usageNarratif": "scene",
    "nom": "Maître Arcaniste Loyaliste",
    "role": "Professeur chargé de défendre la Tour. Il s'oppose d'abord aux PJ, mais peut les aider si la trahison de Thade devient évidente.",
    "image": "/images/PNJ/maitre arcaniste.png",
    "interpretation": {
      "accroche": "Il plante son bâton devant lui et exige une explication officielle avant toute discussion.",
      "objectif": "Protéger la Tour, ses élèves et les archives de l'Université.",
      "attitude": "Autoritaire et méfiant. Il devient moins hostile si les PJ apportent une preuve qu'il peut vérifier."
    },
    "impulsion": "Défendre l'Université, même contre ceux qui prétendent la sauver.",
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
    "description": "Homme large et imposant, en robe universitaire sombre bordée de violet. Il porte une courte barbe grise, un regard dur et un bâton marqué d'un cercle arcanique lumineux. Sa tenue est impeccable, presque militaire.",
    "notes": "",
    "race": "humain",
    "faction": "Université Arcanique",
    "categorie": "ennemis",
    "disposition": "tendu",
    "antagoniste": false
  },

{
    "id": "maera_olane",
    "usageNarratif": "scene",
    "nom": "Maera Olane, Magistère de l'Université",
    "role": "Professeure de l'Université qui enquête sur les irrégularités de Thade. Elle possède des preuves, mais manque d'appuis pour les faire entendre.",
    "categorie": "allies",
    "image": "/images/PNJ/Maera Olane.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Elle pose une question, note la réponse, puis demande aussitôt une date, un nom ou une preuve.",
      "objectif": "Faire reconnaître officiellement les preuves contre Thade avant que l'Université ne les enterre.",
      "attitude": "Rigoureuse, fatiguée et parfois cassante. Elle fait confiance aux faits plus qu'aux promesses."
    },
    "disposition": "amical",
    "impulsion": "Faire sortir la vérité des registres avant qu'on ne les confisque.",
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
    "description": "Femme d'âge mûr, cheveux gris tirés en arrière, robe universitaire noire usée aux manches. Elle porte de fines lunettes et garde près d'elle un encrier, des carnets et des piles de dossiers. Son bureau est rempli de livres ouverts et de notes annotées.",
    "notes": "À ne pas confondre avec Maera Coren, la mère défunte de Thade. Maera Olane est le grain de sable dans l'angle mort de l'Université. Pivot de la menace « L'Université, l'Angle Mort » (Front 4) : si elle est neutralisée, l'enquête interne se referme. Son angle mort est aggravé par le déphasage : l'Université cherche un phénomène magique dans Valombre, alors que le phénomène est Valombre elle-même. Ses sorts de détection fonctionnent à l'intérieur du référentiel déphasé, ses instruments sont pris dans la même dérive, et ses mesures restent cohérentes parce que tout ce qu'elle mesure est déphasé avec elle. Olane manque de preuves publiques parce que ses instruments mentent avec la ville.",
    "race": "humaine",
    "faction": "Université"
  },

{
    "id": "libraire_penne",
    "usageNarratif": "levier",
    "nom": "Aldric Penne, libraire-fournisseur de l'Université",
    "role": "Libraire et fournisseur de l'Université. Il vend livres, encres et composants, et ses registres peuvent révéler qui a acheté quoi.",
    "categorie": "neutres",
    "image": "/images/PNJ/Aldric Penne.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Il ajuste ses lunettes, ouvre son registre et demande le titre exact ou le nom du professeur concerné.",
      "objectif": "Garder son commerce en règle avec l'Université et éviter d'être mêlé à une affaire dangereuse.",
      "attitude": "Serviable, prudent et un peu pédant. Il aime corriger les titres mal cités et devient nerveux dès qu'une commande paraît illégale."
    },
    "disposition": "neutre",
    "impulsion": "Tenir ses registres propres et éviter les ennuis avec l'Université.",
    "degats": {
      "valeur": 0,
      "description": "Lourd in-folio, poids de registre",
      "tags": ["proche", "improvise", "non-letal"]
    },
    "armure": {
      "valeur": 0,
      "description": ""
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": ["mineure", "serieuse", "mortelle"]
    },
    "etiquettes": ["libraire", "fournisseur", "université", "parchemin", "composants"],
    "actionsMJ": [
      "Demander à quel cours ou à quel maître la commande est destinée",
      "Signaler qu'un ouvrage demandé a été retiré du catalogue sur ordre de l'Université",
      "Proposer un composant rare qu'il n'a en stock qu'en petite quantité"
    ],
    "description": "Homme mince aux lunettes épaisses, vêtu d'une robe de bureau brune. Il travaille derrière un comptoir couvert de livres, de plumes et de fioles étiquetées. Sa librairie est étroite, chaude, encombrée d'étagères hautes et d'odeurs de papier, de cire et d'herbes sèches.",
    "notes": "Aldric vend du parchemin, de l'encre, des plumes, des livres d'étude, des composants alchimiques courants (soufre, sel, poudre de fer, cire vierge) et du matériel de laboratoire de base. Il ne vend pas de grimoires avancés ni de composants illicites, mais peut commander des ouvrages spécifiques avec l'autorisation d'un maître de l'Université. Il tient un registre de toutes les ventes et note les noms des acheteurs pour les composants sensibles. Il sait quels professeurs commandent quoi, ce qui en fait une source discrète d'informations sur les recherches en cours.",
    "race": "humain",
    "faction": "Université Arcanique"
  },
];
