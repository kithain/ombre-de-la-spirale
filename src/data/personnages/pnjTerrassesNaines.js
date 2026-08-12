// PNJ liés aux Terrasses Naines et à la Guilde des Mineurs

export const pnjTerrassesNainesData = [
{
    "id": "thorgar_pretre_nain",
    "usageNarratif": "scene",
    "nom": "Thorgar, Haut Clerc du Temple-Forgeron",
    "role": "Haut clerc du Temple-Forgeron. Il protège les rites funéraires nains et rappelle aux PJ que les morts des Terrasses ont encore des droits.",
    "categorie": "allies",
    "image": "/images/PNJ/Thorgar.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Il termine toujours son geste rituel avant de répondre, même si la situation est urgente.",
      "objectif": "Préserver les tombes des Thanes et empêcher que les rites nains soient traités comme un simple obstacle.",
      "attitude": "Grave, patient et ferme. Il remercie l'aide sincère, mais ne transige pas sur les morts."
    },
    "disposition": "amical",
    "impulsion": "Maintenir les rites, même lorsque tout pousse à les bâcler.",
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
    "description": "Vieux nain à la longue barbe blanche, coiffée et tressée avec soin. Il porte une robe claire épaisse sous des pièces de cuir et de métal, et tient un marteau rituel massif. Son visage est marqué par l'âge, mais son regard reste droit et calme.",
    "notes": "",
    "race": "nain",
    "faction": "Communauté Naine",
    "familleNaine": {
      "lignee": "Mordurn",
      "role": "Famille noble gardienne des rites funéraires, de la mémoire des Thanes et des gestes d'Edhrek-Murn"
    }
  },

{
    "id": "durnik_chef_mineur",
    "usageNarratif": "levier",
    "nom": "Durnik, chef de la Guilde des Mineurs",
    "role": "Chef de la Guilde des Mineurs. Il décide qui descend, avec quelle équipe, et sous quelles conditions.",
    "categorie": "allies",
    "image": "/images/PNJ/Durnik.png",
    "interpretation": {
      "accroche": "Il écoute d'abord en silence, les deux mains posées sur le manche de son outil.",
      "objectif": "Protéger les mineurs et éviter une descente mal préparée dans les galeries dangereuses.",
      "attitude": "Bourru, franc et difficile à impressionner. Il respecte les gens qui assument les risques au lieu de les minimiser."
    },
    "disposition": "neutre",
    "impulsion": "Empêcher les imprudents de tuer ses mineurs.",
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
    "description": "Nain robuste, barbe grise courte, épaules larges et vêtements de travail renforcés. Il porte des protections de mineur, un lourd outil à la main et des traces de poussière incrustées dans les plis du visage.",
    "notes": "",
    "race": "nain",
    "faction": "Communauté Naine",
    "familleNaine": {
      "lignee": "Brokkund",
      "role": "Famille noble liée aux mines profondes, aux concessions anciennes et à l'autorité de terrain"
    },
    "antagoniste": false
  },

{
    "id": "garde_portail_mine",
    "usageNarratif": "levier",
    "nom": "Escouade de Gardes du Portail",
    "role": "Escouade qui garde le portail des mines. Elle bloque l'accès aux profondeurs tant qu'aucune autorisation claire n'est présentée.",
    "image": "/images/PNJ/Escouade de Gardes Du portail.png",
    "interpretation": {
      "accroche": "Les gardes barrent le passage et demandent les autorisations avant même les noms.",
      "objectif": "Empêcher une intrusion dans les mines sans déclencher une émeute aux Terrasses.",
      "attitude": "Nerveux, fatigués et soupçonneux. Ils peuvent laisser passer quelqu'un, mais seulement avec une garantie solide."
    },
    "impulsion": "Tenir le portail sans devenir responsables d'un désastre.",
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
    "description": "Groupe de gardes en armures lourdes, rassemblés devant une porte de mine renforcée. Ils portent lances, boucliers, casques et lanternes. La poussière, la fatigue et la méfiance se voient dans leurs postures fermées.",
    "notes": "",
    "race": "groupe humanoïde",
    "faction": "Conseil / Terrasses Naines",
    "categorie": "ennemis",
    "disposition": "neutre",
    "antagoniste": false
  },

{
    "id": "kessak_mineur",
    "usageNarratif": "levier",
    "nom": "Kessak, mineur de la Galerie 5",
    "role": "Jeune mineur des galeries supérieures. Il connaît les bruits, les courants d'air et les détails pratiques que les chefs ne remarquent plus.",
    "categorie": "allies",
    "image": "/images/PNJ/Kessak.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Essuie régulièrement la poussière de ses mains sur son pantalon, même lorsqu'elles sont propres.",
      "objectif": "Être réaffecté à une équipe de fond et montrer qu'il est capable de tenir une galerie sans supervision.",
      "attitude": "Volontaire, un peu susceptible quand on le traite comme un débutant. Devient rapidement bavard lorsqu'on parle du travail de la mine."
    },
    "disposition": "neutre",
    "impulsion": "Prouver qu'il mérite une vraie place dans une équipe de fond.",
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
    "description": "Jeune nain roux, visage rond, vêtements de travail clairs et lampe de mine à la main. Il garde souvent les manches retroussées et les joues salies par la poussière. Son air volontaire masque mal son envie d'être pris au sérieux.",
    "notes": "Kessak peut avoir remarqué quelque chose d'étrange dans les niveaux profonds, mais il ne l'interprète pas comme un phénomène surnaturel.",
    "race": "nain",
    "faction": "Guilde des Mineurs"
  },

{
    "id": "brandin_forgeron",
    "usageNarratif": "levier",
    "nom": "Brandin, forgeron des Terrasses",
    "role": "Forgeron indépendant des Terrasses. Il répare les outils, juge la qualité du métal et rend service sans se mêler de politique.",
    "categorie": "allies",
    "image": "/images/PNJ/Brandin.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Fait sonner les pièces métalliques du bout de l'ongle avant de donner son avis.",
      "objectif": "Obtenir suffisamment de commandes régulières pour engager un apprenti.",
      "attitude": "Direct et appliqué. Peu impressionné par les titres, mais toujours disposé à discuter avec quelqu'un qui connaît son métier."
    },
    "disposition": "neutre",
    "impulsion": "Faire un travail solide, payé honnêtement.",
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
    "description": "Nain trapu aux bras puissants, tablier de cuir noirci et chemise retroussée. Ses mains sont marquées par les brûlures et la suie. Son atelier est simple, encombré d'outils, de fers à réparer et de pièces domestiques suspendues aux murs.",
    "notes": "Brandin respecte Thorgar comme forgeron, mais n'aime pas que chaque artisan des Terrasses soit comparé au Temple.",
    "race": "nain",
    "faction": "Communauté Naine"
  },

{
    "id": "voldrin_changeur",
    "usageNarratif": "levier",
    "nom": "Voldrin, comptable du Comptoir",
    "role": "Comptable du Comptoir de Change. Il tient les registres de pesée, de salaire et de transaction des Terrasses.",
    "categorie": "allies",
    "image": "/images/PNJ/Voldrin.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Replace machinalement les objets parallèlement au bord de son bureau.",
      "objectif": "Clore chaque journée sans erreur entre les pièces reçues, les reçus délivrés et les sommes inscrites.",
      "attitude": "Formel et peu démonstratif. Se montre serviable dès qu'une demande est formulée clairement."
    },
    "disposition": "neutre",
    "impulsion": "Faire correspondre chaque pièce, chaque reçu et chaque ligne du registre.",
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
    "description": "Nain brun à lunettes, barbe courte et soigneusement peignée. Il travaille derrière un bureau couvert de registres, de plumes et de petits poids de mesure. Ses manches sont propres malgré l'encre, et tout sur sa table est aligné au cordeau.",
    "notes": "Voldrin n'est pas incorruptible par principe : il veut surtout qu'une personne identifiable assume officiellement chaque arrangement.",
    "race": "nain",
    "faction": "Guilde des Mineurs"
  },

{
    "id": "grodrin_serveur",
    "usageNarratif": "levier",
    "nom": "Grodrin, serveur du Marteau d'Étain",
    "role": "Serveur du Marteau d'Étain. Il connaît les habitués, les places préférées et les querelles qui couvent dans la salle.",
    "categorie": "allies",
    "image": "/images/PNJ/Grodrin.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Pose les chopes exactement au même endroit devant chaque habitué.",
      "objectif": "Faire tourner la salle sans verre cassé, compte impayé ni bagarre inutile.",
      "attitude": "Peu bavard pendant le service, mais pas mystérieux. Son humour sec apparaît lorsque la salle se calme."
    },
    "disposition": "neutre",
    "impulsion": "Servir vite et empêcher les disputes de devenir des bagarres.",
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
    "description": "Nain large, barbe grise et tablier de tavernier porté sur une chemise claire. Il tient souvent une chope ou un torchon à la main. Son visage semble fermé au premier abord, mais ses yeux suivent toute la salle.",
    "notes": "Grodrin peut fournir des renseignements simples sur les allées et venues, mais il n'est ni informateur professionnel ni marchand de secrets.",
    "race": "nain",
    "faction": "Communauté Naine / Marteau d'Étain"
  },

{
    "id": "brogar_eclaireur",
    "usageNarratif": "levier",
    "nom": "Brogar, ancien arpenteur des mines",
    "role": "Ancien arpenteur des mines. Il se souvient des vieux plans, des pentes oubliées et des noms de galeries que les jeunes ne connaissent plus.",
    "categorie": "allies",
    "image": "/images/PNJ/Brogar.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Sort de sa poche un morceau de craie dès que quelqu'un décrit un trajet.",
      "objectif": "Rester utile aux équipes actuelles sans avoir à reprendre un poste régulier.",
      "attitude": "Familier et volontiers critique. Corrige les imprécisions avec plaisir, mais ne cherche pas à rabaisser ses interlocuteurs."
    },
    "disposition": "amical",
    "impulsion": "Prouver que son expérience des galeries sert encore.",
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
    "description": "Très vieux nain à la barbe blanche broussailleuse, visage ridé et vêtements de mine usés. Il garde près de lui une carte, un morceau de craie ou un outil de mesure. Ses mains tremblent parfois, mais son regard reste vif dès qu'on parle de galeries.",
    "notes": "Brogar connaît les anciennes galeries, mais ses informations datent parfois de plusieurs décennies.",
    "race": "nain",
    "faction": "Communauté Naine"
  },

{
    "id": "torm_garde_mine",
    "usageNarratif": "levier",
    "nom": "Torm, gardien de l'Entrée",
    "role": "Gardien de l'entrée de la mine. Il vérifie les noms, les lampes et l'équipement avant chaque descente.",
    "categorie": "allies",
    "image": "/images/PNJ/Torm.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Vérifie systématiquement la mèche des lampes pendant qu'on lui parle.",
      "objectif": "Terminer son service sans laisser descendre quelqu'un de mal équipé ou inscrit sur la mauvaise équipe.",
      "attitude": "Professionnel et patient avec les erreurs honnêtes. Devient inflexible dès qu'une personne plaisante avec les règles de sécurité."
    },
    "disposition": "neutre",
    "impulsion": "Ne laisser descendre personne sans matériel correct.",
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
    "description": "Nain massif en armure de mine, barbe noire et regard sévère. Il porte une lanterne lourde, des plaques de métal sur les épaules et plusieurs outils attachés à la ceinture. Sa posture bloque naturellement le passage.",
    "notes": "Torm ne cherche pas à empêcher les PJ de passer. Il cherche à ne pas être tenu responsable s'ils descendent sans préparation.",
    "race": "nain",
    "faction": "Guilde des Mineurs"
  },

{
    "id": "hessa_brunefer",
    "usageNarratif": "scene",
    "nom": "Hessa Brunefer, Déléguée des Terrasses",
    "role": "Déléguée des clans nains au Conseil. Elle défend les droits des Terrasses, les coutumes funéraires et l'accès aux galeries.",
    "categorie": "allies",
    "image": "/images/PNJ/Hessa_Brunefer.png",
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
    "description": "Naine d'âge mûr au port droit, barbe tressée de fils d'argent et cheveux tirés en arrière. Elle porte des vêtements de délégation richement brodés, une étole sombre et des bijoux de clan. Son visage reste calme, mais son regard est dur.",
    "notes": "Hessa peut basculer en alliée précieuse si les PJ respectent les coutumes des Terrasses, ou se replier sur la défense des seuls clans si Valombre les trahit. Liée aux menaces « La Réputation de Valombre » (Front 3) et « Le Conseil, la Machine à Retarder » (Front 4).",
    "race": "naine",
    "faction": "Terrasses naines / Clans",
    "familleNaine": {
      "lignee": "Brunefer",
      "role": "Famille noble des chartes, des droits des Terrasses, des murailles sociales et de la négociation politique"
    }
  },

{
    "id": "armurier_dvalin",
    "usageNarratif": "levier",
    "nom": "Dvalin Forgefer, armurier des Terrasses",
    "role": "Armurier réputé des Terrasses. Il vend des armes et armures de grande qualité, mais refuse de livrer une pièce médiocre.",
    "categorie": "allies",
    "image": "/images/PNJ/Dvalin Forgefer.png",
    "antagoniste": false,
    "interpretation": {
      "accroche": "Dvalin examine toujours une arme ou une armure qu'on lui présente avant de regarder son interlocuteur. Il teste le tranchant, pèse la lame, fait sonner le métal.",
      "objectif": "Maintenir la réputation de son armurerie et ne jamais vendre une pièce qui pourrait casser au mauvais moment.",
      "attitude": "Sérieux, professionnel, peu bavard. Respecte les clients qui connaissent le métal. Méfiant envers ceux qui marchandent."
    },
    "disposition": "neutre",
    "impulsion": "Ne livrer que du travail dont il répondrait personnellement.",
    "degats": {
      "valeur": 2,
      "description": "Marteau d'atelier, tenailles chauffées",
      "tags": ["proche", "brutal", "outils"]
    },
    "armure": {
      "valeur": 2,
      "description": "Tablier de cuir épais et gantelets de forge"
    },
    "vie": {
      "type": "cases",
      "points": null,
      "max": null,
      "cases": ["mineure", "serieuse", "mortelle"]
    },
    "etiquettes": ["armurier", "nain", "qualite", "cher", "sur-commande"],
    "actionsMJ": [
      "Refuser une réparation si le métal est trop corrompu",
      "Proposer une pièce de qualité supérieure à un prix qui fait hésiter",
      "Accepter un paiement en minerai brut plutôt qu'en monnaie"
    ],
    "description": "Nain massif à la barbe rousse, assis dans une armurerie éclairée par les braises. Il porte un tablier épais, des manches de travail et de lourds bracelets de cuir. Autour de lui pendent armes, boucliers et pièces d'armure soigneusement entretenues.",
    "notes": "Dvalin vend des armures de plates, des boucliers de qualité naine et des armes en acier forgé. Ses prix sont 30 à 50% plus élevés que la norme, mais ses pièces ne se brisent pas. Il accepte les commandes spéciales si le client fournit les matériaux. Il ne fait pas de crédit.",
    "race": "nain",
    "faction": "Communauté Naine"
  },
];
