// PNJ liés à l'Université Arcanique

export const pnjUniversiteData = [
{
    "id": "thade_coren",
    "usageNarratif": "scene",
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
    "id": "jaren_velt",
    "usageNarratif": "scene",
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
    "id": "etudiants_charmes",
    "usageNarratif": "scene",
    "nom": "Étudiants de l'Université",
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
    "usageNarratif": "scene",
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
    "id": "magi_tuteur_loyal",
    "usageNarratif": "scene",
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
    "id": "maera_olane",
    "usageNarratif": "scene",
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
    "id": "libraire_penne",
    "usageNarratif": "levier",
    "nom": "Aldric Penne, libraire-fournisseur de l'Université",
    "role": "Libraire installé à proximité de l'Université Arcanique. Il vend des livres, du parchemin, de l'encre, des composants alchimiques de base et du matériel d'étude aux étudiants, aux chercheurs et aux visiteurs.",
    "categorie": "neutres",
    "image": "/images/PNJ/pnj_libraire_penne.jpg",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Aldric parle par questions rhétoriques et citations approximatives, comme s'il avait passé trop d'années entouré de professeurs.",
      "objectif": "Maintenir son catalogue à jour et garder de bonnes relations avec l'Université, qui est son meilleur client.",
      "attitude": "Précis, serviable, un peu pédant. Connaît les références de mémoire. Se méfie des achats anonymes de composants sensibles."
    },
    "disposition": "neutre",
    "impulsion": "Classer, référencer et vendre — dans cet ordre.",
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
    "description": "Homme mince aux lunettes épaisses, vêtu d'une robe de bureau usée. Sa librairie est étroite, sent le papier et la cire. Des étagères du sol au plafond regorgent de livres reliés, de rouleaux de parchemin et de bocaux de composants alignés par ordre alphabétique.",
    "notes": "Aldric vend du parchemin, de l'encre, des plumes, des livres d'étude, des composants alchimiques courants (soufre, sel, poudre de fer, cire vierge) et du matériel de laboratoire de base. Il ne vend pas de grimoires avancés ni de composants illicites, mais peut commander des ouvrages spécifiques avec l'autorisation d'un maître de l'Université. Il tient un registre de toutes les ventes et note les noms des acheteurs pour les composants sensibles. Il sait quels professeurs commandent quoi, ce qui en fait une source discrète d'informations sur les recherches en cours.",
    "race": "humain",
    "faction": "Université Arcanique"
  },
];
