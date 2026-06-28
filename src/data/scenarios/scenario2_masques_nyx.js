/**
 * Scénario 2 — Les Masques de Nyx
 *
 * Les PJ ont choisi leur camp. La crise s'étend. Les factions
 * s'affrontent. Le déphasage devient visible. Thade accélère.
 */
export const scenario2 = {
  id: "scenario2",
  titre: "Les Masques de Nyx",
  niveau: "Niveaux 5-8 · 8-10 séances · Acte II de la trilogie",

  vue_ensemble: {
    ton:
      "Thriller conspirationniste et horreur urbaine. La cité se déchire pendant que la réalité se plisse. Le ton est plus sombre, plus urgent que le Scénario 1 — les PJ ne découvrent plus, ils agissent. Mais chaque action a un coût politique, humain ou cosmique.",
    themes: [
      "La crise politique — la peur exploite le vide laissé par la vérité.",
      "La crise clandestine — des relais involontaires manipulés accomplissent le travail de Thade sans le savoir.",
      "La crise cosmique — la réalité de Valombre commence à mentir. La Spirale filtre.",
      "Le coût de l'action — chaque choix a des victimes collatérales. Le décompte compte pour l'épilogue.",
    ],
    question_dramatique:
      "Les PJ peuvent-ils naviguer trois crises simultanées — politique, clandestine, cosmique — sans perdre la cité, leurs alliés, ni eux-mêmes ?",
    axes_de_crise: [
      {
        axe: "Public",
        description:
          "Le Champion de la Bannière Pure exploite la peur. L'émeute, la loi martiale, l'expulsion des nains. La garde est divisée. Le Conseil tergiverse. La crise politique est visible, bruyante, et elle masque les deux autres.",
        scenes_cles: ["L'Émeute de la Place de la Fondation"],
      },
      {
        axe: "Clandestin",
        description:
          "Les Endeuillés d'Edran Morn recrutent parmi les brisés. Le rite de deuil fissure le sceau. Elian Voss cache les expériences de Thade. La Réserve Interdite contient la trace écrite. La crise clandestine est invisible, silencieuse, et elle nourrit la crise cosmique.",
        scenes_cles: ["Les Endeuillés d'Edran Morn", "La Réserve de Recherche Interdite", "Le Laboratoire d'Elian Voss"],
      },
      {
        axe: "Cosmique",
        description:
          "Le déphasage devient visible. Les routes mentent, le ciel change, les distances fluctuent. La Spirale filtre par les fissures du sceau. La Tour Arcanique s'éveille. La crise cosmique est l'horloge maîtresse — si elle avance trop loin, Valombre est perdue.",
        scenes_cles: ["Le Déphasage Visible", "L'Assaut de la Tour", "Le Laboratoire de Verre"],
      },
    ],
    ce_que_les_pj_savent: [
      "Thade Coren orchestre les prélèvements d'ossements pour ouvrir le seuil de la Spirale.",
      "Les Sept Thanes sont les ancrages du sceau. Le sceau cède.",
      "Le protocole S-01 relie Thade à Nyx et à Sealine Vael.",
      "La Résistance existe dans la Vieille Ville. Olane est une alliée institutionnelle.",
      "Le choix du Scénario 1 détermine leur position : avec Thade, avec la Résistance, ou entre les deux.",
    ],
    ce_que_les_pj_doivent_decouvrir: [
      "Thade utilise des relais involontaires : les Endeuillés d'Edran Morn affaiblissent le sceau par le deuil, sans le savoir.",
      "Le Champion de la Bannière Pure reçoit un soutien logistique de marchands qui veulent affaiblir les clans nains — la crise politique est instrumentalisée sans faire de lui un simple pantin.",
      "Le déphasage est la preuve visible que la Spirale filtre. Les zones déphasées s'étendront.",
      "Elian Voss, médecin de Caldris, a reproduit S-01 sur des vivants après Sealine. La Larme de Vael est le catalyseur du rituel.",
      "Thade a consulté la Réserve Interdite 142 fois en 8 ans. Les premières recherches de Thade sur les seuils précèdent la disparition de Sealine ; le rituel actuel, lui, naît de sa perte.",
      "Le corps de Thade est dans une cuve au 7e étage de la Tour. Son esprit est au sommet, dans le vortex.",
    ],
    structure_narrative: [
      {
        acte: "Acte I — La Crise s'Étend",
        resume: "Les PJ affrontent les trois axes simultanément : l'émeute publique, les Endeuillés clandestins, le déphasage cosmique. Chaque scène interagit avec les autres — ignorer un axe le laisse avancer.",
      },
      {
        acte: "Acte II — La Tour s'Éveille",
        resume: "Les PJ infiltrent l'Université pour trouver les preuves : la Réserve Interdite, le laboratoire d'Elian Voss. La trace écrite de Thade est là. La Larme de Vael est nommée.",
      },
      {
        acte: "Acte III — La Confrontation",
        resume: "Les PJ montent la Tour. Chaque étage est un choix : libérer ou tuer, négocier ou combattre. Le décompte des victimes compte pour l'épilogue. Au 7e étage : le corps de Thade, les cahiers, et la porte du sommet. Le Scénario 2 s'arrête au seuil du vortex — les PJ n'affrontent pas encore Thade. Ils comprennent que le Scénario 3 commence de l'autre côté de cette porte.",
      },
    ],
    pnj_cles: [
      {
        id: "champion_banniere_pure",
        nom: "Le Champion de la Bannière Pure",
        role: "Fanatique charismatique. Exploite la peur pour prendre le contrôle de la garde. Accepte un soutien logistique de marchands qui veulent affaiblir les clans nains.",
      },
      {
        id: "edran_morn",
        nom: "Edran Morn",
        role: "Chef des Endeuillés. Homme brisé qui croit ouvrir une porte vers les morts. Proxy involontaire de Thade.",
      },
      {
        id: "elian_voss",
        nom: "Elian Voss",
        role: "Médecin de Caldris. A reproduit S-01 sur des vivants après Sealine. Témoin clé, effrayé, retournable.",
      },
      {
        id: "maera_olane",
        nom: "Maëra Olane",
        role: "Alliée institutionnelle. Peut fournir accès, couverture et données. Sa protection dépend des PJ.",
      },
      {
        id: "magi_tuteur_loyal",
        nom: "Le Magi-Tuteur loyal",
        role: "Allié caché dans la Tour. Peut guider les PJ s'ils ne l'attaquent pas.",
      },
    ],
    lieux_cles: [
      {
        id: "place_fondation",
        nom: "Place de la Fondation",
        role: "Centre civique. Lieu de l'émeute. Le Champion y harangue la foule.",
      },
      {
        id: "cave_des_endeuilles",
        nom: "Cave des Endeuillés",
        role: "Vieille Ville. Repaire d'Edran Morn. Le rite de deuil y est accompli.",
      },
      {
        id: "bibliotheque_recherche_interdite",
        nom: "Réserve de Recherche Interdite",
        role: "Sous-sol de la bibliothèque. 142 consultations de Thade. La trace écrite.",
      },
      {
        id: "laboratoire_elian_voss",
        nom: "Laboratoire d'Elian Voss",
        role: "Sous un amphithéâtre médical. Dossiers, bocaux, schéma de la Larme de Vael.",
      },
      {
        id: "tour_arcanique",
        nom: "Tour Arcanique",
        role: "Dispositif rituel. 7 étages modifiés. Le corps de Thade au 7e. Le vortex au sommet.",
      },
    ],
  },

  revelations_indispensables: [
    {
      id: "rev_proxies_thade",
      titre: "Thade utilise des relais involontaires",
      resume:
        "Les Endeuillés d'Edran Morn affaiblissent le sceau par un rite de deuil inversé, sans le savoir. Les textes qu'ils utilisent ont été laissés circuler délibérément par Thade. Le Champion de la Bannière Pure, lui, reçoit un soutien logistique de marchands qui veulent affaiblir les clans nains et prendre influence sur la Mine — mais le chaos qu'il crée masque aussi les opérations de Thade.",
      sources: [
        "Cave des Endeuillés : textes volés portant le tampon de la Réserve Interdite (Acte I, scène 2).",
        "Place de la Fondation : rumeurs sur le soutien logistique du Champion (Acte I, scène 1).",
      ],
      declencheur: "Investigation DD 13 dans la cave + Renseignements DD 14 sur le Champion.",
      plan_b:
        "Le tampon de la Réserve est visible sans jet. Mara ou Olane peuvent faire le lien entre les textes et Thade. Le soutien logistique du Champion peut être révélé par un contact dans la pègre ou par le Collecteur.",
      consequence_si_ratee:
        "Les PJ ne comprennent pas que Thade a armé les Endeuillés. Le rite continue. Le déphasage s'accélère sans que les PJ puissent l'arrêter à la source.",
    },
    {
      id: "rev_rite_inverse",
      titre: "Le rite d'Edran Morn est un Edhrek-Murn inversé",
      resume:
        "Edran accomplit les gestes d'Edhrek-Murn à l'envers. Au lieu de maintenir le sceau, il le fissure. Il croit ouvrir une porte vers les morts — en réalité, il ouvre le seuil de la Spirale.",
      sources: [
        "Cave des Endeuillés : observation du rite (Acte I, scène 2).",
        "Thorgar ou un prêtre nain : comparaison avec les gestes d'Edhrek-Murn.",
      ],
      declencheur: "Religion DD 14 pour identifier l'inversion.",
      plan_b:
        "Si Religion échoue, Thorgar (s'il accompagne les PJ) reconnaît les gestes et dit : « C'est Edhrek-Murn... mais à l'envers. C'est une profanation. » Les textes de l'Université portent le tampon — le lien est visuel.",
      consequence_si_ratee:
        "Les PJ ne comprennent pas que le rite attaque le sceau. Ils peuvent disperser les Endeuillés sans détruire les textes, et le rite reprendra avec un nouveau gourou.",
    },
    {
      id: "rev_dephasage_source",
      titre: "Le déphasage vient du Puits de l'Abîme",
      resume:
        "Les zones déphasées contiennent des filaments planaires violets qui pointent vers le Puits de l'Abîme, sous le Mausolée du Cimetière. Le déphasage est la Spirale qui filtre par les fissures du sceau.",
      sources: [
        "Zone déphasée dans la Vieille Ville (Acte I, scène 3).",
      ],
      declencheur: "Connaissances (mystères) DD 15 ou Détection de la magie.",
      plan_b:
        "Les filaments sont visibles avec Détection de la magie sans jet. Leur direction (vers le sous-sol) est observable. Le troisième écho (Perception DD 13) confirme que le son vient d'ailleurs.",
      consequence_si_ratee:
        "Les PJ ne relient pas le déphasage au sceau. Ils le traitent comme un phénomène inexplicable. La crise cosmique reste abstraite, et les PJ ne savent pas où frapper.",
    },
    {
      id: "rev_registre_142",
      titre: "Thade a consulté la Réserve 142 fois en 8 ans",
      resume:
        "Le registre de la Réserve de Recherche Interdite montre 142 séances de Thade sur 8 ans, portant sur la résonance planaire, les seuils et les ancrages rituels. La fréquentation s'effondre après la mort de Sealine — il a trouvé ce qu'il cherchait.",
      sources: [
        "Réserve de Recherche Interdite : registre sur le lutrin (Acte II, scène 1).",
      ],
      declencheur: "Investigation DD 13 pour lire le registre. Connaissances (mystères) DD 17 pour déchiffrer les ouvrages.",
      plan_b:
        "Le registre est visible sans jet. Le nom de Thade et le nombre 142 sont lisibles. Olane peut interpréter les ouvrages si les PJ lui apportent des notes.",
      consequence_si_ratee:
        "Les PJ n'ont pas la preuve écrite de la préparation de Thade. Sans le registre, la confrontation avec Thade manque de fondement documentaire. Le Conseil ne peut pas être convaincu.",
    },
    {
      id: "rev_larme_vael",
      titre: "La Larme de Vael est le catalyseur du rituel",
      resume:
        "Le laboratoire d'Elian Voss contient un schéma qui nomme la Larme de Vael — l'objet au cœur du rituel de seuil. L'annotation de Sealine dit : « Ne jamais alimenter cela avec des vivants. » Sealine savait. Thade l'a fait quand même.",
      sources: [
        "Laboratoire d'Elian Voss : schéma caché sous une plaque (Acte II, scène 2).",
        "Elian Voss lui-même : interrogation ou intimidation.",
      ],
      declencheur: "Investigation DD 12 pour trouver le schéma. Décryptage DD 17 pour lire l'annotation.",
      plan_b:
        "Le schéma est visible sans jet. Le nom « Larme de Vael » et le cachet de Caldris sont lisibles. Elian Voss, intimidé (DD 14), révèle tout. L'annotation peut être lue par Olane ou Mara.",
      consequence_si_ratee:
        "Les PJ ne savent pas ce qu'est la Larme de Vael. Au Scénario 3, la confrontation au sommet perd sa dimension tragique — les PJ ne savent pas que Sealine a essayé d'empêcher Thade.",
    },
    {
      id: "rev_corps_thade_cuve",
      titre: "Le corps de Thade est dans la cuve, son esprit au sommet",
      resume:
        "Au 7e étage de la Tour, le corps de Thade flotte dans une cuve de cristal. Son esprit est au sommet, dans le vortex. Détruire le corps affaiblit Thade au sommet. Les cahiers bordeaux sont huit ans de lettres à Sealine.",
      sources: [
        "Laboratoire de Verre : cuve centrale et mur de cahiers (Acte III, scène 2).",
        "Magi-Tuteur loyal : explication si les PJ ne l'attaquent pas.",
      ],
      declencheur: "Aucun jet requis. La cuve et les cahiers sont visibles.",
      plan_b:
        "Le magi-tuteur peut expliquer la connexion cuve-sommet. Les cahiers parlent d'eux-mêmes. Investigation DD 12 pour comprendre le système de la cuve.",
      consequence_si_ratee:
        "Les PJ montent au sommet sans affaiblir Thade. La confrontation du Scénario 3 est plus difficile — Thade a toutes ses phases. Les PJ n'ont pas lu les cahiers, et la dimension humaine de Thade reste invisible.",
    },
  ],

  fronts_actifs: [
    {
      id_front: "front_plan_thade",
      nom: "Le Plan de Thade",
      etat_initial:
        "Thade a déplacé ses opérations vers la Tour Arcanique. Les prélèvements d'ossements continuent via les égouts. Les Endeuillés d'Edran Morn affaiblissent le sceau par procuration. Elian Voss maintient le laboratoire caché. Thade prépare le rituel de seuil avec la Larme de Vael. L'horloge est à l'étape 2-3.",
      manifestation_scenarios:
        "La Tour se verrouille. Les flux détournés s'intensifient. Les Endeuillés reçoivent des textes de l'Université. Le laboratoire d'Elian Voss est actif.",
      interactions_scenes: [
        {
          scene: "Les Endeuillés d'Edran Morn",
          interaction:
            "Les textes volés portent le tampon de la Réserve Interdite. Thade a laissé les textes circuler. Si les PJ détruisent les textes, le rite s'arrête — mais les Endeuillés chercheront un nouveau gourou.",
        },
        {
          scene: "La Réserve de Recherche Interdite",
          interaction:
            "Le registre montre 142 séances. La preuve écrite de la préparation. Si les PJ copient le registre, le front ralentit — Thade sait que sa trace est exposée.",
        },
        {
          scene: "Le Laboratoire d'Elian Voss",
          interaction:
            "Le schéma de la Larme et les bocaux des échecs. Si les PJ récupèrent le schéma ou retournent Elian, Thade perd un agent clé et un composant du rituel.",
        },
        {
          scene: "L'Assaut de la Tour",
          interaction:
            "La Tour est le dispositif rituel. Chaque étage canalise l'énergie vers le sommet. Si les PJ montent, Thade accélère le rituel en représailles.",
        },
        {
          scene: "Le Laboratoire de Verre",
          interaction:
            "Le corps de Thade dans la cuve. Si les PJ détruisent le corps, Thade au sommet perd une phase. Mais il peut accélérer le rituel.",
        },
      ],
      leviers_pj_scenario:
        "Les PJ peuvent ralentir ce front en : détruisant les textes des Endeuillés, copiant le registre, retournant Elian Voss, détruisant le corps de Thade dans la cuve, ou en empêchant les flux d'atteindre la Tour.",
    },
    {
      id_front: "front_factions_crise",
      nom: "Les Factions de la Crise",
      etat_initial:
        "Le Champion de la Bannière Pure monte en influence. Des patrouilles civiques harcèlent les nains et les étrangers. Les Endeuillés recrutent parmi les malades. La garde est divisée. Le Conseil tergiverse. L'horloge est à l'étape 2.",
      manifestation_scenarios:
        "L'émeute de la Place de la Fondation. Les disparitions dans la Vieille Ville. La loi martiale partielle. L'expulsion des nains du Centre Civique.",
      interactions_scenes: [
        {
          scene: "L'Émeute de la Place de la Fondation",
          interaction:
            "Le Champion harangue la foule. Si l'émeute tourne à la violence, le front avance de deux étapes. Si les PJ calment la foule, le front ralentit. Si les PJ démasquent le soutien logistique du Champion, le front recule.",
        },
        {
          scene: "Les Endeuillés d'Edran Morn",
          interaction:
            "Si les PJ tuent Edran, les Endeuillés rejoignent le Champion. La violence nourrit la crise. Si les PJ convainquent Edran d'arrêter, les Endeuillés se dispersent pacifiquement.",
        },
        {
          scene: "Le Déphasage Visible",
          interaction:
            "Le déphasage alimente la peur. Les habitants paniquent. Le Champion exploite la peur pour recruter. Si les PJ expliquent la cause du déphasage, la peur diminue.",
        },
      ],
      leviers_pj_scenario:
        "Les PJ peuvent ralentir ce front en : calmant l'émeute, démasquant le soutien logistique du Champion, retournant Edran Morn, protégeant les nains, ou en fournissant au Conseil une preuve présentable qui justifie une action.",
    },
    {
      id_front: "front_sceau_qui_cede",
      nom: "Le Sceau qui cède",
      etat_initial:
        "Cinq à six tombes sur sept sont touchées. Le rite d'Edran Morn fissure le sceau par le deuil. Les prélèvements de Thade continuent. Le déphasage devient visible. L'horloge est à l'étape 3-4.",
      manifestation_scenarios:
        "Les zones déphasées s'étendent. Les routes mentent. Le ciel change. Le Puits de l'Abîme pulse. Les filaments planaires sont visibles.",
      interactions_scenes: [
        {
          scene: "Les Endeuillés d'Edran Morn",
          interaction:
            "Le rite inversé fissure le sceau. Si les PJ arrêtent le rite, le front ralentit d'une étape. Si le rite continue, le front avance d'une étape par session.",
        },
        {
          scene: "Le Déphasage Visible",
          interaction:
            "Les filaments planaires pointent vers le Puits de l'Abîme. Le déphasage est la preuve visible que le sceau cède. Si les PJ identifient la source, ils savent où frapper.",
        },
        {
          scene: "L'Assaut de la Tour",
          interaction:
            "Le rituel au sommet accélère la fissuration. Si les PJ désorganisent la Tour, ils retardent l'ouverture complète du vortex. S'ils tardent, le sceau cède entièrement.",
        },
      ],
      leviers_pj_scenario:
        "Les PJ peuvent ralentir ce front en : arrêtant le rite d'Edran, détruisant les textes, restaurant les rites d'Edhrek-Murn avec Thorgar, ou en désorganisant la Tour avant l'ouverture complète du vortex.",
    },
    {
      id_front: "front_cite_sous_pression",
      nom: "La Cité sous pression",
      etat_initial:
        "Valombre est en crise. Les marchands paniquent. L'approvisionnement en argent vacille. Les nains sont menacés. Olane est isolée. Le Conseil vote une loi martiale partielle. L'horloge est à l'étape 2.",
      manifestation_scenarios:
        "La loi martiale suspend les droits des communautés clandestines. Les Terrasses sont placées sous tutelle civile. Les routes vers la Mine deviennent impraticables.",
      interactions_scenes: [
        {
          scene: "L'Émeute de la Place de la Fondation",
          interaction:
            "L'émeute justifie la loi martiale. Si les PJ calment la foule, le Conseil n'a pas de prétexte. Si l'émeute tourne à la violence, le Conseil vote la loi martiale le lendemain.",
        },
        {
          scene: "Le Déphasage Visible",
          interaction:
            "Le déphasage rend les routes impraticables. L'approvisionnement en argent s'effondre. Les marchands paniquent. Si les PJ expliquent la cause, la panique diminue.",
        },
        {
          scene: "La Réserve de Recherche Interdite",
          interaction:
            "Si les PJ sont surpris dans la Réserve sans couverture, Olane est arrêtée. Les PJ perdent leurs alliés institutionnels. Si Olane couvre, le front ralentit.",
        },
      ],
      leviers_pj_scenario:
        "Les PJ peuvent ralentir ce front en : calmant l'émeute, protégeant Olane, fournissant au Conseil une preuve présentable, ou en gardant les Terrasses ouvertes aux humains.",
    },
  ],

  scenes_structure: {
    legende: {
      obligatoire: "La scène doit être jouée. Le scénario ne peut pas se terminer sans elle.",
      obligatoire_flexible: "La scène doit être jouée, mais son contenu peut être adapté ou déplacé.",
      optionnel: "La scène peut être ignorée, mais elle enrichit l'expérience et peut fournir des indices ou alliés.",
    },
    scenes: [
      {
        titre: "L'Émeute de la Place de la Fondation",
        acte: "Acte I",
        statut: "obligatoire_flexible",
        axe: "Public",
        dependances: [],
        revele: ["Le Champion exploite la peur", "Edran recrute dans l'ombre", "La garde est divisée"],
        note: "Peut être déclenchée par une rumeur, une invitation du Conseil, ou par les PJ qui passent par la Place. Le contenu s'adapte au choix du Scénario 1.",
      },
      {
        titre: "Le Conseil en Crise",
        acte: "Acte I",
        statut: "obligatoire_flexible",
        axe: "Public",
        dependances: ["L'Émeute de la Place de la Fondation (le Conseil réagit à l'émeute)"],
        revele: ["Avel Ronce est paralysé par la procédure", "Hessa Brunefer défend les Terrasses", "Maelric presse le Conseil d'agir ou de subir la quarantaine", "Olane peut apporter des preuves si les PJ la soutiennent"],
        note: "Peut se jouer au Conseil de Valombre ou dans un lieu institutionnel équivalent. Le contenu s'adapte aux relations des PJ avec le Conseil et l'Université.",
      },
      {
        titre: "Les Endeuillés d'Edran Morn",
        acte: "Acte I",
        statut: "obligatoire",
        axe: "Clandestin",
        dependances: ["L'Émeute de la Place de la Fondation (optionnel — Edran peut être suivi depuis l'émeute)"],
        revele: ["Le rite inversé fissure le sceau", "Les textes viennent de l'Université", "Thade utilise des relais involontaires"],
        note: "Si les PJ n'ont pas suivi Edran depuis l'émeute, la cave peut être trouvée par Renseignements DD 14 ou via Ursula.",
      },
      {
        titre: "Le Déphasage Visible",
        acte: "Acte I",
        statut: "obligatoire_flexible",
        axe: "Cosmique",
        dependances: [],
        revele: ["Le déphasage vient du Puits de l'Abîme", "La Spirale filtre par les fissures", "Les zones déphasées s'étendront"],
        note: "Peut se produire n'importe quand pendant l'Acte I. Le MJ déclenche la zone déphasée quand les PJ traversent la Vieille Ville.",
      },
      {
        titre: "La Réserve de Recherche Interdite",
        acte: "Acte II",
        statut: "obligatoire",
        axe: "Clandestin",
        dependances: ["Les Endeuillés d'Edran Morn (les textes pointent vers la Réserve)"],
        revele: ["142 consultations de Thade", "Les premières recherches sur les seuils précèdent la disparition de Sealine ; le rituel actuel naît de sa perte", "La théorie des seuils planaires"],
        note: "L'accès dépend du choix du Scénario 1 : Olane peut fournir un accès si les PJ sont ses alliés. Sinon, Effraction DD 15.",
      },
      {
        titre: "Le Laboratoire d'Elian Voss",
        acte: "Acte II",
        statut: "obligatoire",
        axe: "Clandestin",
        dependances: ["La Réserve de Recherche Interdite (l'ardoise du 6e étage est mentionnée)"],
        revele: ["La Larme de Vael est le catalyseur", "Sealine savait et a essayé d'empêcher", "Thade et Elian ont reproduit S-01 sur des vivants après Sealine"],
        note: "Elian Voss est présent de jour, absent de nuit. Sa réaction dépend de la réputation des PJ.",
      },
      {
        titre: "L'Assaut de la Tour",
        acte: "Acte III",
        statut: "obligatoire",
        axe: "Cosmique",
        dependances: ["La Réserve de Recherche Interdite", "Le Laboratoire d'Elian Voss"],
        revele: ["La Tour est un dispositif rituel", "Le décompte des victimes compte pour l'épilogue", "Le sommet contient le vortex"],
        note: "5-6 rencontres tactiques. Chaque rencontre a une option non-létale. Le MJ doit tenir le décompte du nombre de victimes.",
      },
      {
        titre: "Le Laboratoire de Verre",
        acte: "Acte III",
        statut: "obligatoire",
        axe: "Cosmique",
        dependances: ["L'Assaut de la Tour"],
        revele: ["Le corps de Thade est dans la cuve", "Les cahiers : 8 ans de lettres à Sealine", "Détruire le corps affaiblit Thade au sommet"],
        note: "Aucun jet requis pour voir la cuve et les cahiers. La décision de détruire le corps est morale, pas mécanique.",
      },
    ],
    scenes_optionnelles: [
      {
        titre: "La Loi Martiale",
        description:
          "Le Conseil vote une loi martiale partielle. Les patrouilles civiques ferment les Terrasses. Les PJ doivent négocier avec Avel Ronce ou Hessa Brunefer pour garder l'accès.",
        declencheur: "Si l'émeute tourne à la violence ou si les PJ ignorent le Champion.",
        apport: "Comprendre la paralysie institutionnelle. Avel Ronce peut devenir un allié si les PJ lui apportent une preuve présentable.",
      },
      {
        titre: "Le Marchand et la Mine",
        description:
          "Les PJ enquêtent sur le soutien logistique du Champion. Ils remontent jusqu'aux marchands qui veulent affaiblir les clans nains et prendre influence sur la Mine. Confrontation politique ou économique.",
        declencheur: "Si les PJ cherchent qui soutient logistiquement le Champion (Renseignements DD 14).",
        apport: "Démasquer l'instrumentalisation de la crise. Le Champion perd sa crédibilité si le soutien logistique est révélé publiquement.",
      },
      {
        titre: "Les Malades de la Vieille Ville",
        description:
          "Ursula soigne les malades dans la Maison des Retours. Les symptômes s'aggravent. Certains malades entrent en zone déphasée et ne reviennent pas.",
        declencheur: "Si les PJ retournent voir Ursula ou Mara après le déphasage visible.",
        apport: "Comprendre l'impact humain du déphasage. Ursula peut identifier les premiers cas d'assimilation par la Spirale.",
      },
    ],
  },

  encadres_mj: [
    {
      id: "enc_pj_tuent_tour",
      titre: "Que faire si les PJ tuent tout dans la Tour",
      situation:
        "Les PJ montent la Tour en force. Ils tuent les étudiants charmés, les gardes piégés, la créature de la Spirale. Le décompte de victimes est élevé.",
      principe:
        "Le scénario ne punit pas — il consigne. Chaque victime est comptée. L'épilogue du Scénario 3 en tiendra compte. Le MJ ne dit pas « vous ne devriez pas faire ça » — il décrit les conséquences.",
      proceder: [
        {
          etape: "Tenir le décompte de chaque victime",
          detail:
            "Noter le nom, l'étage et les circonstances. Étudiant charmé tué au lieu d'être libéré. Garde piégé tué au lieu d'être évité. Créature de la Spirale tuée au lieu d'être retournée.",
        },
        {
          etape: "Décrire les conséquences immédiates",
          detail:
            "Les étudiants charmés meurent avec les yeux vides. Les gardes explosent avec les runes. La créature de la Spirale se dissout en gémissant. Le MJ décrit — il ne juge pas.",
        },
        {
          etape: "Le magi-tuteur réagit",
          detail:
            "Si le magi-tuteur est encore vivant, il dit : « Vous avez tué des étudiants. Des enfants. Ils étaient prisonniers. » Il ne combat pas — il pleure. Si les PJ l'ont aussi tué, personne ne pleure.",
        },
        {
          etape: "L'épilogue en tiendra compte",
          detail:
            "Au Scénario 3, le décompte de victimes détermine le ton de l'épilogue. Un décompte élevé donne un épilogue sombre — Valombre se souvient de ce que les PJ ont fait dans la Tour.",
        },
      ],
      a_ne_pas_faire: [
        "Ne pas empêcher les PJ de tuer. C'est leur choix.",
        "Ne pas rendre les rencontres impossibles à résoudre sans violence — chaque rencontre a une option non-létale.",
        "Ne pas moraliser en jeu. Les conséquences parlent d'elles-mêmes.",
      ],
    },
    {
      id: "enc_pj_attaquent_thade_prematurement",
      titre: "Que faire si les PJ attaquent Thade prématurément",
      situation:
        "Les PJ décident d'attaquer Thade avant d'avoir les preuves de la Réserve, du laboratoire d'Elian Voss ou des cahiers. Ils veulent frapper dès l'Acte I ou au début de l'Acte II.",
      principe:
        "Thade est protégé par l'institution. Une attaque prématurée se retourne contre les PJ — pas par la force de Thade, mais par le système qui le protège.",
      proceder: [
        {
          etape: "Thade n'est pas accessible",
          detail:
            "Thade est dans la Tour, qui est verrouillée. La Tour est gardée. L'accès est limité aux Maîtres. Les PJ ne peuvent pas entrer sans plan.",
        },
        {
          etape: "L'Université protège Thade",
          detail:
            "Si les PJ attaquent publiquement, l'Université se ferme. Olane est arrêtée. Les PJ perdent leurs alliés institutionnels. Le Conseil les déclare ennemis de la cité.",
        },
        {
          etape: "Thade ne se défend pas directement",
          detail:
            "Thade ne combat pas les PJ. Il les ignore, ou il les fait arrêter par la garde. Il dit : « Je comprends votre colère. Mais vous attaquez l'Université, pas moi. »",
        },
        {
          etape: "Orienter vers la collecte de preuves",
          detail:
            "Le MJ guide les PJ vers la Réserve, le laboratoire d'Elian, les Endeuillés. Sans preuve, l'attaque est un crime. Avec preuve, c'est une enquête légitime.",
        },
      ],
      a_ne_pas_faire: [
        "Ne pas faire de Thade un boss combattable dès l'Acte I. Il est protégé par le système.",
        "Ne pas punir les PJ avec un TPK. Les conséquences sont politiques, pas mortelles.",
        "Ne pas fermer le scénario. L'attaque prématurée complique les choses, mais le scénario continue.",
      ],
    },
    {
      id: "enc_pj_ignorent_un_axe",
      titre: "Que faire si les PJ ignorent un axe de crise",
      situation:
        "Les PJ se concentrent sur un seul axe (public, clandestin ou cosmique) et ignorent les deux autres. Par exemple, ils passent tout l'Acte I sur le Champion et ignorent les Endeuillés et le déphasage.",
      principe:
        "Les trois axes avancent en parallèle. Ignorer un axe ne le met pas en pause — il avance sans les PJ. Les conséquences s'accumulent.",
      proceder: [
        {
          etape: "L'axe ignoré avance",
          detail:
            "Si les PJ ignorent le Champion : la Bannière Pure prend le contrôle de la garde. Les nains sont expulsés. S'ils ignorent les Endeuillés : le rite continue, le déphasage s'aggrave. S'ils ignorent le déphasage : les routes deviennent impraticables, l'approvisionnement s'effondre.",
        },
        {
          etape: "Les PNJ signalent la crise ignorée",
          detail:
            "Mara ou Ursula parle des disparitions. Olane mentionne les flux. Thorgar signale de nouvelles fissures. Les PJ entendent que ça va mal ailleurs.",
        },
        {
          etape: "Les axes interagissent",
          detail:
            "Le déphasage alimente la peur, qui alimente le Champion. Les Endeuillés fissurent le sceau, qui accélère le déphasage. Ignorer un axe accélère les autres.",
        },
        {
          etape: "Le scénario s'adapte",
          detail:
            "Les PJ peuvent rattraper — mais dans des conditions plus difficiles. Le scénario ne se bloque pas. Il devient plus dur.",
        },
      ],
      a_ne_pas_faire: [
        "Ne pas forcer les PJ à jouer les trois axes simultanément. C'est leur choix.",
        "Ne pas annuler les conséquences de l'ignorance. Les axes avancent.",
        "Ne pas rendre le scénario impossible. Plus difficile, oui. Impossible, non.",
      ],
    },
    {
      id: "enc_pj_negocient_champion",
      titre: "Que faire si les PJ veulent négocier avec le Champion",
      situation:
        "Les PJ veulent parler au Champion de la Bannière Pure au lieu de le combattre ou de le démasquer. Ils pensent pouvoir le raisonner ou l'utiliser.",
      principe:
        "Le Champion est charismatique, froid et précis. Il ne crie pas — il projette. Il peut être raisonné sur les faits, mais pas sur les causes. Sa croisade reçoit un soutien logistique de marchands qui veulent affaiblir les clans nains — il n'est pas nécessairement acheté ; il accepte des soutiens qu'il juge utiles à sa mission.",
      proceder: [
        {
          etape: "Le Champion écoute",
          detail:
            "Il reçoit les PJ en privé. Il est courtois, mesuré, presque amical. Il dit : « Vous voyez les mêmes choses que moi. Les maladies. Le froid. Les disparitions. »",
        },
        {
          etape: "Il ne cède pas sur les causes",
          detail:
            "Si les PJ disent que les nains ne sont pas responsables, il répond : « Alors qui ? L'Université ? Le Conseil ? Quelqu'un doit porter la responsabilité. Les nains sont les plus visibles. »",
        },
        {
          etape: "Révéler le soutien logistique",
          detail:
            "Si les PJ révèlent qu'il reçoit un soutien logistique de marchands qui veulent affaiblir les clans nains, le Champion réagit — soit avec colère (il ne savait pas), soit avec pragmatisme (il savait et accepte car ces soutiens servent sa croisade). Dans les deux cas, il ne s'arrête pas. Mais il perd sa crédibilité si l'information est rendue publique.",
        },
        {
          etape: "Une alliance fragile est possible",
          detail:
            "Si les PJ lui apportent une preuve que Thade est responsable du déphasage, le Champion peut détourner sa croisade vers l'Université. C'est utile mais dangereux — le Champion reste un fanatique.",
        },
      ],
      a_ne_pas_faire: [
        "Ne pas rendre le Champion facilement raisonnable. Il croit en sa mission.",
        "Ne pas transformer le Champion en allié fiable. C'est un outil instable.",
        "Ne pas bloquer la négociation. Le Champion parle — c'est sa méthode.",
      ],
    },
  ],

  aides_jeu: {
    indices_recap: [
      {
        scene: "L'Émeute de la Place de la Fondation",
        jet: "Renseignements DD 14",
        info: "Le Champion reçoit un soutien logistique de marchands qui veulent affaiblir les clans nains et prendre influence sur la Mine. Il n'est pas acheté — il accepte des soutiens utiles à sa croisade.",
      },
      {
        scene: "L'Émeute de la Place de la Fondation",
        jet: "Discrétion DD 13",
        info: "Edran Morn observe la manifestation depuis les ruelles. Il recrute parmi les plus désespérés après la foule.",
      },
      {
        scene: "Les Endeuillés d'Edran Morn",
        jet: "Religion DD 14",
        info: "Le rite d'Edran est un Edhrek-Murn inversé. Au lieu de maintenir le sceau, il le fissure.",
      },
      {
        scene: "Les Endeuillés d'Edran Morn",
        jet: "Investigation DD 13",
        info: "Les textes portent le tampon de la Réserve de Recherche Interdite de l'Université. Thade a laissé les textes circuler.",
      },
      {
        scene: "Le Déphasage Visible",
        jet: "Connaissances (mystères) DD 15 ou Détection de la magie",
        info: "Des filaments violets relient la zone à un point souterrain — le Puits de l'Abîme. Le déphasage vient du sceau.",
      },
      {
        scene: "Le Déphasage Visible",
        jet: "Perception DD 13",
        info: "Le troisième écho d'un son n'est pas une répétition — c'est un son de la Spirale qui filtre.",
      },
      {
        scene: "La Réserve de Recherche Interdite",
        jet: "Investigation DD 13",
        info: "142 séances de Thade sur 8 ans. Sujets : résonance planaire, seuils, ancrages. Effondrement après la mort de Sealine.",
      },
      {
        scene: "La Réserve de Recherche Interdite",
        jet: "Connaissances (mystères) DD 17",
        info: "Les ouvrages décrivent un rituel de seuil avec ancrages physiques. Le protocole S-01 est une application de ce rituel.",
      },
      {
        scene: "Le Laboratoire d'Elian Voss",
        jet: "Investigation DD 12",
        info: "Schéma de la Larme de Vael. Cachet de Caldris. La Larme est le catalyseur du rituel.",
      },
      {
        scene: "Le Laboratoire d'Elian Voss",
        jet: "Décryptage DD 17",
        info: "Annotation de Sealine : « Ne jamais alimenter cela avec des vivants. » Elle savait. Thade l'a fait quand même.",
      },
      {
        scene: "Le Laboratoire d'Elian Voss",
        jet: "Intimidation DD 14",
        info: "Elian Voss révèle tout : Thade a commandé le protocole, Caldris fournit le matériel, la Larme est le catalyseur.",
      },
      {
        scene: "L'Assaut de la Tour",
        jet: "Investigation DD 10",
        info: "Ardoise du 6e étage : équation préliminaire de S-01 datée de sept ans. Les premières recherches de Thade sur les seuils précèdent la disparition de Sealine.",
      },
      {
        scene: "Le Laboratoire de Verre",
        jet: "Aucun jet requis",
        info: "Le corps de Thade est dans la cuve. Les cahiers bordeaux sont 8 ans de lettres à Sealine. La plume écrit en temps réel.",
      },
    ],
    pnj_recap: [
      {
        id: "champion_banniere_pure",
        nom: "Le Champion de la Bannière Pure",
        faction: "Bannière Pure (soutenu logistiquement par des marchands)",
        role_court: "Fanatique charismatique / Crise publique",
        apparition: "Acte I, scène 1",
        info_cle: "Exploite la peur. Soutenu logistiquement par des marchands qui veulent affaiblir les clans nains. Peut être démasqué ou détourné vers l'Université.",
        dd_clés: "Diplomatie DD 15 pour calmer l'émeute. Renseignements DD 14 pour le soutien logistique.",
      },
      {
        id: "edran_morn",
        nom: "Edran Morn",
        faction: "Endeuillés (proxy involontaire de Thade)",
        role_court: "Gourou du deuil / Crise clandestine",
        apparition: "Acte I, scène 2",
        info_cle: "Rite inversé d'Edhrek-Murn qui fissure le sceau. Textes volés de l'Université. Sincère dans son deuil.",
        dd_clés: "Religion DD 14 pour identifier l'inversion. Diplomatie DD 16 pour le convaincre d'arrêter.",
      },
      {
        id: "elian_voss",
        nom: "Elian Voss",
        faction: "Caldris / Université (agent de Thade)",
        role_court: "Médecin brisé / Témoin clé",
        apparition: "Acte II, scène 2",
        info_cle: "A mené les expériences sur des vivants. Schéma de la Larme de Vael. Retournable. Témoin le plus précieux.",
        dd_clés: "Intimidation DD 14 pour le retourner. Art de la magie DD 17 pour les bocaux.",
      },
      {
        id: "maera_olane",
        nom: "Maëra Olane",
        faction: "Université (isolée)",
        role_court: "Alliée institutionnelle",
        apparition: "Acte II (accès à la Réserve)",
        info_cle: "Peut fournir accès, couverture et données. Sa protection dépend des PJ. Si elle est arrêtée, les PJ perdent tout soutien institutionnel.",
        dd_clés: "Pas de jet — elle s'ouvre si les PJ apportent des preuves.",
      },
      {
        id: "magi_tuteur_loyal",
        nom: "Le Magi-Tuteur loyal",
        faction: "Université (loyal à Thade mais désillusionné)",
        role_court: "Allié caché dans la Tour",
        apparition: "Acte III, scène 1 (4e étage)",
        info_cle: "Peut expliquer la Tour, la cuve et le rituel. Guide les PJ s'ils ne l'attaquent pas.",
        dd_clés: "Pas de jet — il se présente si les PJ ne l'agressent pas.",
      },
    ],
    lieux_recap: [
      {
        id: "place_fondation",
        nom: "Place de la Fondation",
        scenes: ["L'Émeute de la Place de la Fondation"],
        ambiance: "Cœur civique. Statue des Fondateurs. Foule dense. Tension.",
      },
      {
        id: "cave_des_endeuilles",
        nom: "Cave des Endeuillés",
        scenes: ["Les Endeuillés d'Edran Morn"],
        ambiance: "Sous-sol humide. Cire brûlée. Portraits des morts. Chaises dépareillées.",
      },
      {
        id: "vieille_ville_ruelles",
        nom: "Ruelles déphasées de la Vieille Ville",
        scenes: ["Le Déphasage Visible"],
        ambiance: "Distances trompeuses. Ciel laiteux. Odeurs absentes. Échos répétés.",
      },
      {
        id: "bibliotheque_recherche_interdite",
        nom: "Réserve de Recherche Interdite",
        scenes: ["La Réserve de Recherche Interdite"],
        ambiance: "Sous-sol. Froid sec. Lampes à mana bleutées. Cire blanche. Silence absolu.",
      },
      {
        id: "laboratoire_elian_voss",
        nom: "Laboratoire d'Elian Voss",
        scenes: ["Le Laboratoire d'Elian Voss"],
        ambiance: "Sous amphithéâtre. Formol, cire. Lampes vertes. Dossiers, bocaux, schémas.",
      },
      {
        id: "tour_arcanique",
        nom: "Tour Arcanique",
        scenes: ["L'Assaut de la Tour", "Le Laboratoire de Verre"],
        ambiance: "Lavande et ozone. Cristal qui pousse. Runes bleues. Objets en lévitation. Bourdonnement du vortex.",
      },
    ],
    chronologie: [
      {
        phase: "Avant le scénario",
        evenements: [
          "Il y a 8 ans : catastrophe de Nyx. Sealine se sacrifie. Thade survit.",
          "Il y a 8 ans : Thade devient Archimage de l'Université. L'Université est reconstruite.",
          "Depuis 8 ans : Thade consulte la Réserve Interdite (142 séances).",
          "Depuis 8 ans : Thade écrit à Sealine tous les jours (cahiers bordeaux).",
          "Depuis plusieurs années : Thade laisse circuler des textes de la Réserve vers la Vieille Ville.",
          "Depuis plusieurs années : Elian Voss mène les expériences sur des vivants à Caldris.",
          "Récemment : le déphasage devient visible. Les zones déphasées apparaissent.",
          "Récemment : le Champion de la Bannière Pure monte en influence.",
        ],
      },
      {
        phase: "Acte I — La Crise s'Étend (semaines 1-2)",
        evenements: [
          "L'émeute de la Place de la Fondation. Le Champion harangue la foule.",
          "Les PJ infiltrent les Endeuillés. Le rite inversé est découvert.",
          "Le déphasage devient visible dans la Vieille Ville.",
          "Si l'émeute tourne à la violence : le Conseil vote la loi martiale.",
        ],
      },
      {
        phase: "Acte II — La Tour s'Éveille (semaines 2-4)",
        evenements: [
          "Les PJ accèdent à la Réserve Interdite. 142 séances. La trace écrite.",
          "Les PJ trouvent le laboratoire d'Elian Voss. La Larme de Vael. L'annotation de Sealine.",
          "Thade verrouille la Tour. Les flux détournés s'intensifient.",
          "Si les PJ ont retourné Elian : il peut témoigner au Conseil.",
        ],
      },
      {
        phase: "Acte III — La Confrontation (semaine 4-5)",
        evenements: [
          "Les PJ montent la Tour. Chaque étage est un choix.",
          "Le décompte des victimes est établi.",
          "Les PJ atteignent le Laboratoire de Verre. Le corps de Thade. Les cahiers.",
          "Les PJ se tournent vers la porte du sommet. Le bourdonnement du vortex les appelle.",
        ],
      },
    ],
  },

  synopsis:
    "Le choix est fait. Les PJ connaissent la vérité sur Thade et le sceau. Mais connaître n'est pas arrêter. Les factions de Valombre se déchirent : le Champion de la Bannière Pure exploite la peur, les Endeuillés d'Edran Morn recrutent parmi les malades, la Résistance s'organise dans l'ombre. Le déphasage devient visible — les routes mentent, le ciel change, la Spirale filtre. Thade accélère ses prélèvements. La Tour Arcanique s'éveille.",

  evenements_mondiaux: {
    chronologie_inevitable: [
      "Le déphasage s'aggrave : les routes de Valombre deviennent trompeuses, les distances fluctuent.",
      "Le Champion de la Bannière Pure monte en influence. Des patrouilles civiques harcèlent les nains et les étrangers.",
      "Les Endeuillés d'Edran Morn grandissent. Des disparitions dans la Vieille Ville.",
      "Thade verrouille la Tour Arcanique. Les flux détournés s'intensifient.",
    ],
    consequences_echecs: [
      "Si les PJ ignorent le Champion : la Bannière Pure prend le contrôle de la garde. Les nains sont expulsés du Centre Civique.",
      "Si les PJ ignorent les Endeuillés : Edran Morn accomplit un rite qui accélère le déphasage.",
      "Si les PJ ignorent le déphasage : les routes vers la Mine deviennent impraticables. L'approvisionnement en argent s'effondre.",
      "Si les PJ attaquent Thade prématurément : l'Université se ferme. Olane est arrêtée. Les PJ perdent leurs alliés institutionnels.",
    ],
  },

  actes: [
    // ── ACTE I — LA CRISE S'ÉTEND ──────────────────────────────────
    {
      titre: "Acte I — La Crise s'Étend",
      stake: "Les PJ doivent naviguer entre les factions qui s'affrontent pendant que le déphasage s'aggrave.",
      location: "Centre Civique, Vieille Ville, Terrasses Naines",

      scenes: [
        {
          id: "s2_emeute_place",
          titre: "L'Émeute de la Place de la Fondation",
          type: "Action",
          resume_mj:
            "Le Champion de la Bannière Pure organise une manifestation sur la Place de la Fondation. Il accuse les nains et les étrangers d'être responsables des maladies et des anomalies. La garde hésite à intervenir. Les PJ doivent choisir : calmer la foule, protéger les nains, ou exploiter le chaos.",
          idLieu: "place_fondation",
          idsPnj: ["champion_banniere_pure", "patrouille_mixte_conseil"],

          format_livre: {
            ambiance:
              "La Place de la Fondation est le cœur civique de Valombre. Un espace pavé, bordé de bâtiments administratifs aux façades de pierre grise. Au centre, la statue des Fondateurs — sept silhouettes naines, usées par le temps. La place est noire de monde. Des badauds, des curieux, des habitants en colère. L'air porte une tension qu'on pourrait couper au couteau. Le ciel est couvert, bas, d'un gris qui n'a pas décidé s'il allait pleuvoir ou s'abaisser encore.",
            deroulement_narratif:
              "Le Champion de la Bannière Pure se tient sur l'estrade, en robe blanche, le visage masqué. Sa voix porte sans effort. Il ne crie pas — il projette. Chaque phrase est calibrée. Il accuse les nains et les étrangers d'être responsables des maladies et du froid. Il ne ment pas sur les faits — les maladies et le froid sont réels. Il ment sur les causes. La foule boit ses mots. Des huées montent. Des nains du Centre Civique reculent vers les ruelles adjacentes. La garde mixte hésite au pied de l'estrade — Géraud Veyre, leur commandant, regarde les PJ d'un air qui dit : « Si vous avez une idée, c'est le moment. »\n\nDans les ruelles, un homme en robe sombre observe. Edran Morn. Il ne participe pas à l'émeute — il la récolte. Il parle aux plus désespérés, ceux qui ont perdu quelqu'un, ceux qui pleurent encore. Il leur murmure que les morts peuvent revenir. Si un PJ est attentif (Discrétion DD 13), il repère Edran et peut le suivre après la manifestation.\n\nLes PJ ont trois options : calmer la foule (Diplomatie DD 15), intimider les meneurs (Intimidation DD 14), ou exploiter le chaos. Chaque choix a un coût. Calmer la foule protège les nains mais laisse le Champion libre. Intimider disperse la foule mais marque les PJ comme ennemis. Exploiter le chaos avance le front « Les Factions de la Crise » de deux étapes.",
            notes_mj:
              "Le Champion reçoit un soutien logistique de marchands qui veulent affaiblir les clans nains et prendre influence sur la Mine. Il n'est pas acheté — il accepte des soutiens qu'il juge utiles à sa croisade. Le MJ peut révéler ce soutien par Renseignements DD 14 ou via le Collecteur. Si l'émeute tourne à la violence, le Conseil vote la loi martiale le lendemain. Edran Morn recrute parmi les plus désespérés après la manifestation — c'est la porte d'entrée vers la scène suivante.",
          },

          texte_a_lire:
            "La Place de la Fondation est noire de monde. Le Champion de la Bannière Pure se tient sur l'estrade, en robe blanche, le visage masqué. Sa voix porte sans effort : « Valombre souffre. La maladie ronge nos quartiers. Le froid gagne nos rues. Et pendant ce temps, l'Université ferme les yeux, le Conseil tergiverse, et les étrangers profitent de notre faiblesse ! »\n\nDes huées montent de la foule. Des nains du Centre Civique reculent vers les ruelles adjacentes. La garde mixte hésite au pied de l'estrade.",

          objectif: "Gérer l'émeute : calmer, protéger, ou exploiter.",

          contexte_mj: {
            situation:
              "Le Champion exploite la peur grandissante. La garde mixte (humains et nains) est divisée. Le Conseil n'a pas donné d'ordres clairs. Les nains présents sont en danger.",
            secrets: [
              "Le Champion reçoit un soutien logistique de marchands qui veulent affaiblir les clans nains et prendre influence sur la Mine. Il n'est pas acheté — il accepte des soutiens utiles à sa croisade.",
              "Edran Morn observe la manifestation depuis les ruelles. Il recrute parmi les plus désespérés.",
              "Si l'émeute tourne à la violence, le Front 'Les Factions de la Crise' avance de deux étapes.",
            ],
            rappels: [
              "Le Champion ne ment pas sur les faits — les maladies et le froid sont réels. Il ment sur les causes.",
              "La patrouille mixte est commandée par Géraud Veyre, qui respecte les PJ s'ils ont aidé le Conseil auparavant.",
            ],
          },

          defis: [
            { competence: "Diplomatie", dd: 15, reussite: "Les PJ calment la foule en rappelant que les nains sont les fondateurs de Valombre. Le Champion perd sa dynamique.", echec: "La foule ignore les PJ. L'émeute continue." },
            { competence: "Intimidation", dd: 14, reussite: "Les PJ intimident les meneurs. La foule se disperse, mais le Champion les note comme ennemis.", echec: "Les PJ sont hués. La tension augmente." },
            { competence: "Discrétion", dd: 13, reussite: "Les PJ repèrent Edran Morn dans la foule et peuvent le suivre après la manifestation.", echec: "Impossible de distinguer les visages dans la masse." },
          ],

          indices: [
            { indice: "Le soutien logistique du Champion", localisation: "Rumeurs et contacts", detection: "Renseignements DD 14", information: "Le Champion reçoit un soutien logistique de marchands qui veulent affaiblir les clans nains et prendre influence sur la Mine.", usage: "Le Champion n'est pas qu'un fanatique — il accepte des soutiens qu'il juge utiles à sa croisade." },
            { indice: "Edran Morn dans la foule", localisation: "Ruelles de la Place", detection: "Discrétion DD 13", information: "Edran observe et recrute. Il parle aux plus désespérés après la manifestation.", usage: "Piste vers les Endeuillés et le rite de déphasage." },
          ],

          guide_mj: {
            intention: "Montrer que la crise n'est pas que mystique — elle est politique et sociale.",
            mise_en_place: "Place de la Fondation, milieu de journée. Foule dense. Champion sur l'estrade.",
            deroulement: ["Le Champion harangue la foule.", "Les PJ interviennent ou observent.", "La garde hésite.", "Edran recrute dans les ruelles."],
            actions_utiles: ["Calmer la foule.", "Protéger les nains.", "Suivre Edran Morn.", "Parler au Champion directement."],
            fronts_heritiers: ["Front 'Les Factions de la Crise'", "Front 'La Cité sous pression'"],
            jeu_des_pnj: "Le Champion est charismatique, froid, précis. Il ne crie pas — il projette. Géraud Veyre est un soldat fatigué qui veut des ordres clairs.",
            escalade: "Si l'émeute tourne à la violence, des nains sont blessés. Les Terrasses se ferment aux humains.",
            sortie: "La foule se disperse ou tourne à la violence. Les PJ ont vu le Champion, Edran et l'état de la garde.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent savoir que le Champion exploite la crise et qu'Edran recrute dans l'ombre.",
            ne_pas_bloquer_sur_un_jet: "Même si tous les jets échouent, l'émeute se produit. Les PJ voient le Champion et la tension.",
            question_dramatique: "Qui profite du chaos ?",
          },

          transitions: {
            resume: "La Place se vide. Les nains regagnent les Terrasses. Le Champion disparaît dans un carrosse fermé.",
            reussite: "Les PJ ont calmé la foule ou identifié les acteurs cachés.",
            echec: "L'émeute a tourné à la violence. Les Terrasses se ferment. La crise s'aggrave.",
          },
        },

        {
          id: "s2_conseil_crise",
          titre: "Le Conseil en Crise",
          type: "Social",
          resume_mj:
            "Après l'émeute, le Conseil de Valombre convoque une session extraordinaire. Avel Ronce tente de produire du consensus sans trancher. Hessa Brunefer exige que les Terrasses ne soient pas placées sous tutelle. L'Émissaire Maelric de Caldris rappelle son ultimatum : si Valombre ne prouve pas qu'elle tient le verrou, Caldris imposera la quarantaine. Maera Olane, si les PJ la soutiennent, peut apporter des preuves sur les irrégularités de Thade. Les PJ doivent naviguer entre pression politique, preuves scientifiques et intérêts nains pour obtenir une décision — ou constater que le Conseil ne décidera rien.",
          idLieu: "conseil_valombre",
          idsPnj: ["avel_ronce", "hessa_brunefer", "envoye_caldris", "patrouille_mixte_conseil", "maera_olane"],

          format_livre: {
            ambiance:
              "La salle du Conseil est vaste, voûtée, éclairée par des lampes d'ambre qui ne tremblent pas. Des bancs de pierre en demi-cercle font face à une table surélevée. Avel Ronce est assis derrière la table, un dossier ouvert devant lui, l'ordre du jour sous les doigts. Hessa Brunefer se tient debout à sa droite, les bras croisés, l'étole de délégation sur les épaules. Maelric de Caldris se tient à gauche, pâle, un peu raide, un carnet à la main. La patrouille mixte surveille les portes. Maera Olane est assise au fond de la salle, un dossier sous le bras, prête à parler si on lui donne la parole — et si on la protège.",
            deroulement_narratif:
              "Avel Ronce ouvre la session en annonçant que le Conseil doit « répondre aux événements de la Place de la Fondation et aux inquiétudes de nos partenaires extérieurs ». Il ne nomme ni le Champion, ni Maelric, ni les malades. Il parle de « tensions » et de « mesures appropriées ».\n\nHessa Brunefer prend la parole la première. Elle rappelle quel article de quelle charte protège les Terrasses, exige que les clans ne soient pas punis pour les actes du Champion, et menace de fermer l'accès commercial à la mine si le Conseil place les Terrasses sous tutelle.\n\nMaelric parle ensuite. Courtois, froid, il pose une carte sur la table : Valombre n'est plus atteignable par les routes normales depuis trois semaines. Les marchands ne reviennent pas. Les messagers n'arrivent plus. Si le Conseil ne peut pas prouver qu'il contrôle la situation, Caldris imposera la quarantaine dans dix jours.\n\nAvel Ronce tente de renvoyer chaque point à « la commission compétente ». Hessa s'y oppose. Maelric s'impatiente. La salle s'enlise.\n\nSi les PJ sont présents (convocation officielle, invitation d'un membre du Conseil, ou parce qu'ils se sont invités), ils peuvent :\n\n1. Appuyer Hessa : les Terrasses ne sont pas le problème. La crise vient d'ailleurs. Persuasion DD 14. Si réussi, Avel recule sur la tutelle.\n\n2. Présenter les preuves d'Olane : si Olane est là et que les PJ la soutiennent, elle expose les irrégularités de Thade (142 consultations, les outils d'Université sur les tombes, le protocole S-01). Avel Ronce veut renvoyer ça à « la commission disciplinaire de l'Université ». Olane répond que l'Université étouffe l'affaire depuis des mois. Persuasion DD 15. Si réussi, le Conseil ouvre une enquête officielle.\n\n3. Négocier avec Maelric : les PJ proposent une preuve concrète que Valombre tient le verrou (les rites de Thorgar, les os des Thanes, le sceau). Diplomatie DD 15. Si réussi, Maelric accorde un délai supplémentaire. Si échoué, il maintient l'ultimatum.\n\n4. Demander la loi martiale : les PJ poussent le Conseil à voter des mesures d'exception pour protéger les Terrasses et interdire les rassemblements du Champion. Avel accepte avec soulagement — ça lui donne l'illusion d'agir. Mais la loi martiale avance aussi le Front « Le Conseil, la Machine à Retarder ».\n\nSi les PJ ne font rien, le Conseil ne décide rien. Avel renvoie tout en commission. Hessa repart furieuse. Maelric note l'incapacité de Valombre dans son carnet.",
            notes_mj:
              "Cette scène donne aux PJ un accès direct aux trois forces politiques : Avel (paralysie), Hessa (défense naine), Maelric (pression extérieure). Olane est présente seulement si les PJ l'ont rencontrée dans le Scénario 1 et qu'ils la soutiennent. Si Olane n'est pas disponible, les PJ perdent l'option 2 mais peuvent encore présenter les preuves eux-mêmes avec un DD plus élevé (16 au lieu de 15). La scène peut être jouée avant ou après le Déphasage Visible — si après, Maelric peut témoigner avoir vu une rue se déformer.",
          },

          texte_a_lire:
            "La salle du Conseil est voûtée, éclairée par des lampes d'ambre. Avel Ronce est assis derrière la table surélevée, l'ordre du jour sous les doigts. Hessa Brunefer se tient à sa droite, les bras croisés. L'Émissaire Maelric de Caldris est à gauche, pâle, un carnet à la main.\n\nAvel Ronce ouvre la session : « Le Conseil doit répondre aux tensions récentes et aux inquiétudes de nos partenaires extérieurs. »\n\nHessa Brunefer parle la première : « Les Terrasses ne seront pas placées sous tutelle. Les clans ne paieront pas pour les actes d'un étranger. »\n\nMaelric pose une carte sur la table : « Valombre n'est plus atteignable par les routes normales. Si le Conseil ne prouve pas qu'il contrôle la situation, Caldris imposera la quarantaine dans dix jours. »\n\nAvel Ronce regarde ses notes. « Nous allons examiner ces questions en commission. »",

          objectif: "Obtenir une décision du Conseil — ou constater sa paralysie et trouver une autre voie.",

          contexte_mj: {
            situation:
              "Le Conseil réagit à l'émeute et à la pression caldrisienne. Avel Ronce veut éviter toute décision qui l'expose. Hessa Brunefer protège les Terrasses. Maelric presse avec un délai. Olane, si elle est là, apporte des preuves sur Thade.",
            secrets: [
              "Avel Ronce n'est pas corrompu — il est dépassé. Il peut devenir un allié si les PJ lui apportent une vérité simple et présentable qui le couvre politiquement.",
              "Hessa Brunefer sait que les nains possèdent une part du verrou, mais elle ne révélera rien devant Maelric sans garantie.",
              "Maelric a vu le déphasage de ses propres yeux si la scène se joue après Le Déphasage Visible. Il peut en témoigner, ce qui crédibilise la crise.",
              "Olane a été découragée de témoigner par l'Université. Si les PJ ne la protègent pas, elle se tait.",
            ],
            rappels: [
              "Le Conseil ne décidera rien sans preuve présentable et sans quelqu'un pour assumer la décision politiquement.",
              "La patrouille mixte est présente mais neutre — elle exécute les ordres du Conseil, elle ne prend pas parti.",
            ],
          },

          defis: [
            { competence: "Persuasion", dd: 14, reussite: "Les PJ appuient Hessa : Avel recule sur la tutelle des Terrasses.", echec: "Avel renvoie la question en commission. Hessa repart sans garantie." },
            { competence: "Diplomatie", dd: 15, reussite: "Les PJ négocient avec Maelric : il accorde un délai supplémentaire de cinq jours.", echec: "Maelric maintient l'ultimatum. Dix jours, pas un de plus." },
            { competence: "Persuasion", dd: 15, reussite: "Olane (ou les PJ) présentent les preuves sur Thade : le Conseil ouvre une enquête officielle.", echec: "Avel renvoie à la commission disciplinaire de l'Université. L'affaire reste interne." },
          ],

          indices: [
            { indice: "L'ultimatum de Caldris", localisation: "Témoignage de Maelric", detection: "Automatique", information: "Valombre n'est plus atteignable par les routes normales. Caldris imposera la quarantaine dans dix jours si le Conseil ne prouve pas qu'il tient le verrou.", usage: "Presser le Conseil d'agir ou chercher une preuve de stabilité crédible." },
            { indice: "Les irrégularités de Thade", localisation: "Dossier d'Olane", detection: "Olane doit être présente et soutenue", information: "142 consultations, outils d'Université sur les tombes, protocole S-01. L'Université étouffe l'affaire.", usage: "Forcer le Conseil à ouvrir une enquête officielle ou à agir sans l'Université." },
          ],

          guide_mj: {
            intention: "Rendre les forces politiques jouables et concrètes. Les PJ voient que la crise n'est pas que mystique — elle est institutionnelle.",
            mise_en_place: "Salle du Conseil de Valombre. Session extraordinaire. Avel, Hessa, Maelric, patrouille mixte. Olane si les PJ la soutiennent.",
            deroulement: ["Avel ouvre et tente de renvoyer en commission.", "Hessa exige que les Terrasses ne soient pas punies.", "Maelric pose son ultimatum.", "Les PJ interviennent (ou non).", "Le Conseil décide — ou ne décide pas."],
            actions_utiles: ["Appuyer Hessa sur les Terrasses.", "Soutenir Olane pour exposer Thade.", "Négocier un délai avec Maelric.", "Pousser à la loi martiale.", "Constater la paralysie et chercher une autre voie."],
            fronts_heritiers: ["Front 'Le Conseil, la Machine à Retarder'", "Front 'La Réputation de Valombre'", "Front 'La Révélation par étapes'"],
            jeu_des_pnj: "Avel est courtois, lent, incapable de trancher. Hessa est directe, sèche, intraitable sur les coutumes. Maelric est froid, précis, sincèrement inquiet. Olane parle vite quand elle tient une preuve, mais se tait si elle se sent exposée.",
            escalade: "Si les PJ échouent ou ne font rien : Avel renvoie tout en commission, Hessa ferme un accès commercial, Maelric note l'incapacité de Valombre. Le Front 'Le Conseil' avance d'une étape.",
            sortie: "Le Conseil a décidé quelque chose — ou n'a rien décidé. Les PJ savent maintenant qui pèse quoi dans la crise politique.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent comprendre que le Conseil est paralysé et que la pression extérieure (Caldris) est réelle.",
            ne_pas_bloquer_sur_un_jet: "Même si tous les jets échouent, la scène se joue. Les PJ voient la paralysie du Conseil et l'ultimatum de Maelric.",
            question_dramatique: "Le Conseil peut-il agir — ou faut-il contourner le Conseil ?",
          },

          transitions: {
            resume: "La session se lève. Avel range ses dossiers. Hessa repart vers les Terrasses. Maelric note quelque chose dans son carnet.",
            reussite: "Les PJ ont obtenu une décision du Conseil — enquête, délai, ou protection des Terrasses.",
            echec: "Le Conseil n'a rien décidé. La paralysie est visible. Les PJ doivent trouver une autre voie.",
          },
        },

        {
          id: "s2_endeuilles_edran",
          titre: "Les Endeuillés d'Edran Morn",
          type: "Investigation",
          resume_mj:
            "Les PJ infiltrent ou confrontent les Endeuillés dans la Cave des Endeuillés de la Vieille Ville. Edran Morn prêche un rite de deuil qui accélère le déphasage. Il croit ouvrir une porte vers les morts. En réalité, il ouvre le seuil de la Spirale.",
          idLieu: "cave_des_endeuilles",
          idsPnj: ["edran_morn"],

          format_livre: {
            ambiance:
              "La Cave des Endeuillés est un sous-sol humide sous un immeuble abandonné de la Vieille Ville. On y descend par un escalier étroit, marche après marche, jusqu'à une pièce voûtée qui sent la cire brûlée et la pierre humide. Des chaises dépareillées autour d'une table couverte de coulures de cire. Des portraits, des bougies, des objets des morts occupent les niches creusées dans les murs — un ruban, une pipe, une lettre pliée. L'air est lourd, chaud, presque suffocant. On parle bas ici. On pleure bas.",
            deroulement_narratif:
              "Edran Morn se tient au fond de la cave. Robe sombre, visage marqué, mains ouvertes. Il ne prêche pas — il accueille. « Vous avez perdu quelqu'un », dit-il. « Tout le monde a perdu quelqu'un. Ici, nous ne pleurons pas. Nous ouvrons. »\n\nLes Endeuillés sont assis, une vingtaine, silencieux. Certains tiennent des photos. D'autres ont les yeux fermés. Edran accomplit les gestes du rite : il trace des runes dans l'air, lentement, avec une précision de cérémonie. Les gestes ressemblent à quelque chose — si un PJ a vu les rites d'Edhrek-Murn au Temple-Forgeron, il reconnaît les mouvements. Mais à l'envers. Religion DD 14 pour identifier l'inversion : Edran accomplit Edhrek-Murn à l'envers. Au lieu de maintenir le sceau, il le fissure.\n\nSur la table, des textes. Des pages arrachées, photocopiées, recopiées à la main. Le tampon de la Réserve de Recherche Interdite de l'Université est visible sur l'une des pages. Investigation DD 13 pour examiner les textes : ils décrivent un rite de seuil, pas un rite de deuil. Edran a trouvé ces textes — il croit qu'ils ouvrent une porte vers les morts. En réalité, ils ouvrent le seuil de la Spirale.\n\nLes PJ peuvent : convaincre Edran d'arrêter (Diplomatie DD 16 — difficile car Edran croit voir sa fille), disperser les Endeuillés par la force (Intimidation DD 13 — mais la violence les radicalise), ou détruire les textes (ce qui arrête le rite mais pousse les Endeuillés à chercher un nouveau gourou). La meilleure option est de convaincre Edran que son rite ne ramène pas les morts — il ouvre une porte vers quelque chose de pire.",
            notes_mj:
              "Edran est sincère dans son deuil. Il n'est pas un agent de Thade — il est une victime indirecte. Thade a laissé les textes circuler délibérément pour affaiblir le sceau par procuration. Si les PJ tuent Edran, les Endeuillés rejoignent le Champion. La violence nourrit la crise. Si les PJ ont rencontré Ursula, elle peut les aider à approcher les Endeuillés avec compassion plutôt qu'avec force.",
          },

          texte_a_lire:
            "La Cave des Endeuillés est une cave humide sous un immeuble abandonné. Des chaises dépareillées autour d'une table couverte de cire. Des portraits, des bougies et des objets des morts occupent les niches. L'air lourd sent la cire brûlée et la pierre humide.\n\nUn homme en robe sombre se tient au fond. Son visage est marqué. « Vous avez perdu quelqu'un », dit-il. « Tout le monde a perdu quelqu'un. Ici, nous ne pleurons pas. Nous ouvrons. »",

          objectif: "Comprendre le rite d'Edran, stopper les Endeuillés ou les retourner contre Thade.",

          contexte_mj: {
            situation:
              "Edran Morn a transformé le deuil en rite. Il croit que les morts peuvent revenir par le seuil. En réalité, le rite affaiblit le sceau et accélère le déphasage. Les Endeuillés sont des victimes, pas des ennemis — mais leur rite est dangereux.",
            secrets: [
              "Edran a trouvé le rite dans des textes volés à l'Université — des textes que Thade a laissés circuler délibérément.",
              "Le rite d'Edran et les prélèvements de Thade visent le même sceau. Edran affaiblit le verrou par le deuil, Thade par le vol d'os.",
              "Si les PJ détruisent les textes d'Edran, le rite s'arrête. Mais les Endeuillés chercheront un nouveau gourou.",
            ],
            rappels: [
              "Les Endeuillés sont des citoyens brisés, pas des fanatiques violents. La violence les radicalise.",
              "Si les PJ ont rencontré Ursula, elle peut les aider à approcher les Endeuillés avec compassion.",
            ],
          },

          defis: [
            { competence: "Religion", dd: 14, reussite: "Le rite d'Edran est une distorsion du rite d'Edhrek-Murn. Il accomplit les gestes à l'envers — au lieu de maintenir le sceau, il le fissure.", echec: "Le rite est étrange et funéraire. Difficile d'en comprendre la mécanique." },
            { competence: "Diplomatie", dd: 16, reussite: "Les PJ convainquent Edran que son rite ne ramène pas les morts — il ouvre une porte vers quelque chose de pire. Edran, brisé, accepte d'arrêter.", echec: "Edran refuse. « Vous ne comprenez pas. J'ai vu ma fille. Elle m'attend. »" },
            { competence: "Intimidation", dd: 13, reussite: "Les PJ dispersent les Endeuillés par la force. Le rite s'arrête, mais les Endeuillés se radicalisent.", echec: "Les Endeuillés se défendent. La cave devient un champ de bataille." },
          ],

          indices: [
            { indice: "Les textes volés", localisation: "Cave des Endeuillés", detection: "Investigation DD 13", information: "Les textes d'Edran portent le tampon de la Réserve de Recherche Interdite de l'Université.", usage: "Preuve que Thade a laissé les textes circuler pour affaiblir le sceau par procuration." },
            { indice: "Le rite inversé", localisation: "Gestes d'Edran", detection: "Religion DD 14", information: "Edran accomplit les gestes d'Edhrek-Murn à l'envers. Au lieu de maintenir, il fissure.", usage: "Comprendre que le rite est une arme contre le sceau, pas un rite de deuil." },
          ],

          guide_mj: {
            intention: "Montrer que Thade utilise des relais involontaires. Les Endeuillés sont des outils involontaires.",
            mise_en_place: "Cave humide, nocturne. Edran au fond. Endeuillés assis.",
            deroulement: ["Les PJ entrent et observent le rite.", "Religion pour comprendre.", "Diplomatie ou intimidation pour arrêter.", "Investigation pour trouver les textes."],
            actions_utiles: ["Convaincre Edran d'arrêter.", "Détruire les textes.", "Retourner les Endeuillés contre Thade.", "Capturer Edran pour interrogatoire."],
            fronts_heritiers: ["Front 'Le Sceau qui cède' — le rite d'Edran accélère la fissure.", "Front 'Le Plan de Thade' — les textes prouvent la manipulation."],
            jeu_des_pnj: "Edran est sincère dans son deuil. Il n'est pas un agent de Thade — il est une victime indirecte. Le tuer renforce la Bannière Pure.",
            escalade: "Si les PJ tuent Edran, les Endeuillés rejoignent le Champion. La violence nourrit la crise.",
            sortie: "Les PJ quittent la cave avec ou sans Edran. Les textes de l'Université sont la clé : Thade a armé les Endeuillés.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent comprendre que le rite d'Edran fissure le sceau et que les textes viennent de l'Université.",
            ne_pas_bloquer_sur_un_jet: "Même si Religion échoue, les PJ voient les textes de l'Université. Le lien est visuel.",
            question_dramatique: "Un homme de bonne foi peut-il faire le mal sans le savoir ?",
          },

          transitions: {
            resume: "La cave se vide. Les bougies s'éteignent. L'air redevient froid et humide.",
            reussite: "Les PJ ont arrêté le rite et récupéré les textes. Piste vers la Réserve Interdite.",
            echec: "Le rite continue. Le déphasage s'aggrave. Les Endeuillés se radicalisent.",
          },
        },

        {
          id: "s2_dephasage_visible",
          titre: "Le Déphasage Visible",
          type: "Horreur",
          resume_mj:
            "Les PJ expérimentent le déphasage en direct. Une route qu'ils connaissent se déforme. Les distances changent. Le ciel prend une teinte violette. Un écho de la Spirale filtre dans Valombre. Ils doivent traverser la zone déphasée pour atteindre leur objectif.",
          idLieu: "vieille_ville_ruelles",
          idsPnj: [],

          format_livre: {
            ambiance:
              "Les ruelles de la Vieille Ville sont étroites, pavées de pierres inégales, bordées de maisons penchées dont les étages se rapprochent au fil des siècles. Normalement, on y sent le pain, la fumée, l'humidité de la rivière. Mais aujourd'hui, l'air ne porte plus d'odeur. Le ciel, visible entre les toits, a pris une teinte laiteuse — pas grise, pas violette, quelque chose entre les deux. Les murs ne sont pas à la même distance. Le sol semble souple sous les pieds, comme s'il y avait une couche d'air entre la semelle et la pierre.",
            deroulement_narratif:
              "Les PJ entrent dans la zone sans avertissement. Une rue qu'ils connaissent, qu'ils ont parcourue dix fois, se déforme. Les distances changent. Le bout de la ruelle n'est pas plus proche après cinq minutes de marche. Un son familier — le bruit d'une charrette, le cri d'un marchand — se répète trois fois, identique, puis s'arrête. Le troisième écho est légèrement différent. Perception DD 13 : c'est un son de la Spirale, pas de Valombre. La Spirale filtre par les fissures du sceau.\n\nSi les PJ utilisent Détection de la magie, ils voient des filaments violets dans l'air — des lignes fines, presque invisibles, qui descendent vers le sous-sol. Direction : le Puits de l'Abîme. Connaissances (mystères) DD 15 : le déphasage est causé par la fissuration du sceau. Plus le sceau cède, plus ces zones s'étendront.\n\nLa zone est limitée — quelques rues — mais à l'intérieur, les repères habituels ne fonctionnent plus. Survie DD 14 pour trouver un chemin stable. Si les PJ échouent, ils tournent en rond et ressortent au point de départ après 20 minutes. La zone n'est pas un piège mortel — c'est un avertissement. Les habitants de la Vieille Ville ont commencé à éviter ces rues. Ceux qui y entrent en ressortent désorientés, parfois changés.\n\nSi les PJ ont des liens avec la Spirale (objets, rêves, contacts avec Sealine), ils sont plus sensibles au déphasage. S'ils restent trop longtemps, ils subissent un effet de confusion ou entendent la voix de Sealine.",
            notes_mj:
              "Le déphasage n'est pas une information — c'est une expérience. Le MJ doit le faire vivre sensoriellement : l'absence d'odeur, la souplesse du sol, les échos répétés, la distance qui ne diminue pas. C'est la première fois que les PJ expérimentent directement la Spirale qui filtre. Cette scène transforme la crise cosmique d'un concept abstrait en une réalité corporelle.",
          },

          texte_a_lire:
            "Vous connaissez ces ruelles. Vous les avez parcourues dix fois. Mais aujourd'hui, les murs ne sont pas à la même distance. Le sol semble souple sous vos pieds. Le ciel, visible entre les toits penchés, a pris une teinte laiteuse qui n'a rien à voir avec l'heure.\n\nUn son que vous connaissez — le bruit d'une charrette, le cri d'un marchand — se répète trois fois, identique, puis s'arrête. L'air ne porte plus d'odeur. Vous marchez depuis cinq minutes et le bout de la ruelle n'est pas plus proche.",

          objectif: "Traverser la zone déphasée et atteindre l'autre côté sans perdre de membres du groupe.",

          contexte_mj: {
            situation:
              "Le déphasage est localisé mais intense. La réalité se plisse. Les PJ doivent naviguer dans un espace qui ne suit plus les règles normales. La zone est limitée — quelques rues — mais à l'intérieur, les repères habituels ne fonctionnent plus.",
            secrets: [
              "Le déphasage est causé par la fissuration du sceau. Plus le sceau cède, plus ces zones s'étendent.",
              "Si les PJ utilisent Détection de la magie, ils voient des filaments violets qui relient la zone à un point souterrain — la direction du Puits de l'Abîme.",
              "Les habitants de la Vieille Ville ont commencé à éviter ces rues. Ceux qui y entrent en ressortent désorientés, parfois changés.",
            ],
            rappels: [
              "Le déphasage n'est pas mortel par lui-même, mais il peut séparer le groupe, désorienter, ou révéler des choses que les PJ ne devraient pas voir.",
              "Si les PJ ont des liens avec la Spirale (objets, rêves, contacts avec Sealine), ils sont plus sensibles au déphasage.",
            ],
          },

          defis: [
            { competence: "Survie", dd: 14, reussite: "Les PJ trouvent un chemin stable à travers la zone. Ils sentent les variations et évitent les pièges spatiaux.", echec: "Les PJ tournent en rond. Ils ressortent au point de départ après 20 minutes." },
            { competence: "Connaissances (mystères)", dd: 15, reussite: "Les PJ identifient les filaments planaires et peuvent les suivre jusqu'à leur source — le Puits de l'Abîme.", echec: "Les filaments sont visibles mais incompréhensibles. Des lignes violettes dans l'air qui ne mènent nulle part." },
            { competence: "Perception", dd: 13, reussite: "Les PJ remarquent que les échos sonores se répètent par trois. Le troisième écho est légèrement différent — c'est un son de la Spirale, pas de Valombre.", echec: "Les sons sont étranges mais sans signification claire." },
          ],

          indices: [
            { indice: "Les filaments planaires", localisation: "Zone déphasée", detection: "Détection de la magie ou Connaissances (mystères) DD 15", information: "Des filaments violets relient la zone à un point souterrain. Direction : Puits de l'Abîme.", usage: "Preuve visuelle que le déphasage vient du sceau." },
            { indice: "Le troisième écho", localisation: "Sons de la zone", detection: "Perception DD 13", information: "Le troisième écho d'un son n'est pas une répétition — c'est un son de la Spirale qui filtre.", usage: "Comprendre que la Spirale n'est pas un autre monde lointain. Elle est là, qui filtre par les fissures." },
          ],

          guide_mj: {
            intention: "Faire vivre le déphasage. Ce n'est pas une information — c'est une expérience.",
            mise_en_place: "Les PJ traversent la Vieille Ville et entrent dans une zone déphasée sans avertissement.",
            deroulement: ["Les PJ entrent dans la zone.", "Les repères spatiaux et temporels se déforment.", "Survie pour naviguer.", "Connaissances pour comprendre.", "Les PJ ressortent de l'autre côté (ou au point de départ)."],
            actions_utiles: ["Suivre les filaments vers le Puits.", "Marquer le sol pour ne pas tourner en rond.", "Utiliser Détection de la magie.", "Fermer les yeux et avancer au son."],
            fronts_heritiers: ["Front 'Le Sceau qui cède' — le déphasage est la preuve visible.", "Front 'La Cité sous pression' — les habitants paniquent."],
            jeu_des_pnj: "Aucun PNJ. La zone est vide. Les habitants ont fui.",
            escalade: "Si les PJ restent trop longtemps dans la zone, ils subissent un effet de confusion ou entendent la voix de Sealine.",
            sortie: "Les PJ ressortent de la zone, secoués. Ils savent maintenant ce qu'est le déphasage : la Spirale qui filtre.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent avoir vécu le déphasage et compris qu'il vient du sceau.",
            ne_pas_bloquer_sur_un_jet: "Même si Survie échoue, les PJ finissent par ressortir. La zone n'est pas un piège mortel — c'est un avertissement.",
            question_dramatique: "Que se passe-t-il quand la réalité de votre ville commence à mentir ?",
          },

          transitions: {
            resume: "Les PJ ressortent de la zone. L'air reprend ses odeurs. Le ciel redevient normal. Mais ils savent que ça s'étendra.",
            reussite: "Les PJ ont traversé et identifié la source. Ils peuvent agir.",
            echec: "Les PJ ont tourné en rond et ressorti au point de départ. Le temps est perdu.",
          },
        },
      ],
    },

    // ── ACTE II — LA TOUR S'ÉVEILLE ────────────────────────────────
    {
      titre: "Acte II — La Tour s'Éveille",
      stake: "Les PJ doivent infiltrer la Tour Arcanique ou la Réserve Interdite pour comprendre ce que Thade construit.",
      location: "Tour Arcanique, Réserve de Recherche Interdite",

      scenes: [
        {
          id: "s2_reserve_interdite",
          titre: "La Réserve de Recherche Interdite",
          type: "Investigation",
          resume_mj:
            "Les PJ accèdent à la Réserve de Recherche Interdite de la bibliothèque. Ils y trouvent le registre des consultations de Thade : 142 séances sur huit ans, avec un effondrement après la mort de Sealine. La trace écrite de la préparation de Thade.",
          idLieu: "bibliotheque_recherche_interdite",
          idsPnj: [],

          format_livre: {
            ambiance:
              "La Réserve de Recherche Interdite est un niveau souterrain de la bibliothèque centrale de l'Université. On y accède par un escalier en colimaçon derrière une porte de chêne renforcée de fer. L'air est froid et sec — un froid de conservation, pas d'hiver. Des lampes à mana brûlent bas, projetant une lumière bleutée sur les étagères. Les livres ont des couvertures scellées de cire blanche — chaque ouvrage est verrouillé jusqu'à ce qu'un Maître de département le demande. L'air sent le papier ancien et la cire. Le silence est absolu, presque physique.",
            deroulement_narratif:
              "Un registre est posé sur le lutrin à l'entrée. Grand, relié de cuir, les pages jaunies. Les noms des Maîtres qui ont consulté les ouvrages, par date et par sujet. Investigation DD 13 pour le lire : le nom de Thade Coren apparaît 142 fois sur huit ans. Les sujets : résonance planaire, seuils dimensionnels, ancrages rituels, théorie des sceaux. La fréquentation est dense la première année — 60 séances — puis s'effondre après la catastrophe de Nyx. Il a trouvé ce qu'il cherchait. Il n'a plus besoin de la bibliothèque.\n\nConnaissances (mystères) DD 17 pour déchiffrer les ouvrages : ils décrivent un rituel de seuil — ouvrir un passage vers un plan adjacent en utilisant des ancrages physiques. Le protocole S-01 est une application de ce rituel. Les textes sont arcaniques, obscurs, mais la théorie est claire : on peut ouvrir une porte si on a assez d'ancrages et un catalyseur.\n\nSi les PJ ont les textes des Endeuillés, ils peuvent les comparer avec les ouvrages de la Réserve. Les textes d'Edran sont des copies dégradées des mêmes pages. Thade a laissé les textes circuler — il a armé les Endeuillés avec des fragments de la théorie qu'il maîtrise depuis des années.\n\nUne note dans la marge du registre mentionne une ardoise non effacée au 6e étage de la Tour Arcanique. Équation préliminaire de S-01, datée de sept ans — avant la mort de Sealine. Thade travaillait déjà sur la théorie des seuils avant la disparition de Sealine. Mais le rituel actuel — celui qui vise à la ramener — naît après Nyx, quand la recherche devient obsession.",
            notes_mj:
              "L'accès dépend du choix du Scénario 1. Olane peut fournir un accès si les PJ sont ses alliés. Sinon, Effraction DD 15. Sous la loi martiale, l'accès non autorisé est un crime — Olane peut couvrir, mais si les PJ sont surpris sans couverture, elle est arrêtée. Le registre est visible sans jet — le nom de Thade et le nombre 142 sont lisibles dès l'entrée. Les ouvrages nécessitent Connaissances DD 17, mais Olane peut les interpréter si les PJ lui apportent des notes.",
          },

          texte_a_lire:
            "La Réserve de Recherche Interdite est un niveau souterrain de la bibliothèque centrale. Froid sec, lampes à mana basses, livres aux couvertures scellées de cire blanche. L'air sent le papier ancien et la cire.\n\nUn registre est posé sur le lutrin. Les noms des Maîtres qui ont consulté les ouvrages. Celui de Thade apparaît 142 fois sur huit ans.",

          objectif: "Trouver la trace des recherches de Thade et comprendre ce qu'il prépare.",

          contexte_mj: {
            situation:
              "La Réserve est accessible aux Maîtres de département. Olane peut fournir un accès si les PJ sont ses alliés. Sinon, Effraction DD 15. Le registre montre 142 séances de Thade, avec un effondrement après la mort de Sealine.",
            secrets: [
              "Les ouvrages consultés par Thade portent sur la résonance planaire, les seuils et les ancrages rituels. Connaissances (mystères) DD 17 pour les déchiffrer.",
              "La fréquentation de Thade s'effondre après la mort de Sealine — il a trouvé ce qu'il cherchait et n'a plus besoin de la bibliothèque.",
              "Une ardoise non effacée au 6e étage de la Tour contient l'équation préliminaire de S-01, datée de sept ans — avant la mort de Sealine.",
            ],
            rappels: [
              "Sous la loi martiale du Conseil, l'accès non autorisé est un crime. Olane peut couvrir les PJ.",
              "Si les PJ ont les textes des Endeuillés, ils peuvent les comparer avec les ouvrages de la Réserve.",
            ],
          },

          defis: [
            { competence: "Investigation", dd: 13, reussite: "Le registre montre 142 séances. Les sujets : résonance planaire, seuils, ancrages. La fréquentation s'effondre après la mort de Sealine.", echec: "Le registre est illisible ou endommagé. Les PJ ne trouvent que le nom de Thade." },
            { competence: "Connaissances (mystères)", dd: 17, reussite: "Les ouvrages décrivent un rituel de seuil : ouvrir un passage vers un plan adjacent en utilisant des ancrages physiques. Le protocole S-01 est une application de ce rituel.", echec: "Les textes sont arcaniques et obscurs. La théorie est claire mais l'application reste floue." },
          ],

          indices: [
            { indice: "Le registre de Thade", localisation: "Lutrin de la Réserve", detection: "Investigation DD 13", information: "142 séances sur 8 ans. Sujets : résonance planaire, seuils, ancrages. Effondrement après la mort de Sealine.", usage: "Les premières recherches précèdent la perte ; le rituel actuel la transforme en objectif." },
            { indice: "L'ardoise du 6e étage", localisation: "Tour Arcanique, 6e étage", detection: "Mention dans les notes de la Réserve", information: "Équation préliminaire de S-01 datée de sept ans — avant la mort de Sealine.", usage: "Thade travaillait déjà sur la théorie des seuils avant la disparition de Sealine. Mais le rituel actuel — celui qui vise à la ramener — naît après Nyx, quand la recherche devient obsession." },
          ],

          guide_mj: {
            intention: "Donner aux PJ la preuve écrite que Thade a préparé le rituel pendant des années.",
            mise_en_place: "Réserve souterraine. Froid, sec, silencieux. Lampes basses.",
            deroulement: ["Les PJ accèdent à la Réserve.", "Ils trouvent le registre.", "Ils déchiffrent les ouvrages.", "Ils comprennent : Thade a tout préparé."],
            actions_utiles: ["Copier le registre.", "Relever les passages essentiels.", "Faire un croquis des diagrammes.", "Comparer avec les textes des Endeuillés.", "Chercher l'ardoise du 6e étage."],
            fronts_heritiers: ["Front 'Le Plan de Thade' — les PJ ont maintenant la preuve écrite.", "Front 'La Cité sous pression' — l'Université est complice par ignorance."],
            jeu_des_pnj: "Aucun PNJ. Les livres parlent.",
            escalade: "Si les PJ sont surpris, Olane peut couvrir. Sinon, procédure interne.",
            sortie: "Les PJ quittent la Réserve avec 142 séances, des ouvrages sur les seuils et la certitude que Thade a préparé le rituel pendant des années.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent savoir que Thade a consulté 142 fois la Réserve et que ses recherches portaient sur les seuils planaires.",
            ne_pas_bloquer_sur_un_jet: "Le registre est visible sans jet. Le nom de Thade et le nombre 142 sont lisibles.",
            question_dramatique: "Quand un homme brillant prépare quelque chose pendant huit ans, qui peut l'arrêter ?",
          },

          transitions: {
            resume: "Les PJ referment les ouvrages et quittent la Réserve. La cire blanche des couvertures brille dans l'obscurité.",
            reussite: "Les PJ ont la trace écrite et la théorie. Prochaine étape : la Tour.",
            echec: "Les PJ ont trouvé le registre sans déchiffrer les ouvrages. Olane peut les aider à interpréter.",
          },
        },

        {
          id: "s2_laboratoire_elian",
          titre: "Le Laboratoire d'Elian Voss",
          type: "Révélation",
          resume_mj:
            "Les PJ trouvent le laboratoire caché d'Elian Voss sous un amphithéâtre médical. Des dossiers, des bocaux, un schéma qui nomme la Larme de Vael. Le cachet de Caldris confirme le lien avec l'extérieur. Le protocole S-01 est là, complet.",
          idLieu: "laboratoire_elian_voss",
          idsPnj: ["elian_voss"],

          format_livre: {
            ambiance:
              "Sous un ancien amphithéâtre médical de l'Université, une porte métallique dissimulée derrière un panneau de bois pourri. La porte grince sur un couloir court qui descend vers une pièce basse, voûtée, éclairée par des lampes alchimiques vertes. L'odeur frappe d'abord : formol, cire, et quelque chose de doux en dessous — quelque chose d'organique qui ne devrait pas être là. Des colonnes de dossiers s'élèvent jusqu'au plafond. Des bocaux opaques alignés sur des étagères de fer. Une table de travail couverte de notes, de schémas, d'instruments de précision.",
            deroulement_narratif:
              "À gauche, cinquante dossiers étiquetés « stabilisés ». Lecture directe : cinquante patients stabilisés par des dérivés du protocole S-01, menés après la catastrophe de Nyx. Des noms, des dates, des dosages. Les patients viennent de Caldris — le cachet de Caldris est sur chaque dossier. Sealine est S-01, la première tentative consciente de stabilisation planaire. Les patients d'Elian sont postérieurs : des reproductions et adaptations du protocole S-01. À droite, sept bocaux sans étiquette. Art de la magie DD 17 : le sérum dans les bocaux est une préparation planaire. Il stabilise le corps pendant le transit vers la Spirale. Les sept bocaux contiennent les restes des sept échecs d'Elian après S-01. Toutes ont échoué.\n\nSous une plaque amovible de la table de travail, deux dossiers cachés. Investigation DD 12 pour trouver la plaque. Le premier dossier porte un schéma ancien — un dispositif en forme de larme, avec des annotations en écriture fine et précise. Le schéma nomme la Larme de Vael. Cachet de Caldris sur le schéma. Décryptage DD 17 pour lire l'annotation : « Ne jamais alimenter cela avec des vivants. » L'écriture est celle de Sealine. Sa main. Elle savait. Elle a essayé d'empêcher Thade. Il l'a fait quand même.\n\nElian Voss est présent si les PJ arrivent de jour. Il est effrayé — un homme brisé qui sait ce qu'il a fait. Intimidation DD 14 : il révèle tout. Thade a commandé les reproductions du protocole après Nyx, Caldris fournit le matériel, la Larme est le catalyseur. Elian n'est pas un fanatique — c'est un médecin qui a franchi la ligne par peur de Thade. Si les PJ le retournent, il peut témoigner au Conseil. S'ils le tuent, ils perdent un témoin clé.",
            notes_mj:
              "Le schéma de la Larme est visible sans jet — le nom et le cachet sont lisibles. L'annotation de Sealine nécessite Décryptage DD 17, mais Olane ou Mara peuvent la lire si les PJ leur apportent le schéma. Si les PJ ont le cachet de Caldris des notes de Jaren (Scénario 1), la confirmation est immédiate. Elian Voss est le témoin le plus précieux du scénario — le tuer ferme la porte du Conseil.",
          },

          texte_a_lire:
            "Sous un ancien amphithéâtre médical, une porte métallique. Derrière : des colonnes de dossiers, des bocaux opaques, une odeur de formol et de cire.\n\nÀ gauche, cinquante dossiers étiquetés 'stabilisés'. À droite, sept bocaux sans étiquette. Sous une plaque amovible, deux dossiers cachés. L'un porte un schéma ancien. Le schéma nomme la Larme de Vael.",

          objectif: "Récupérer le protocole S-01 complet et la liste des patients d'Elian Voss.",

          contexte_mj: {
            situation:
              "Elian Voss est un médecin de Caldris qui travaille avec Thade. Son laboratoire contient les dossiers des patients stabilisés par le protocole, les bocaux des échecs, et le schéma de la Larme de Vael — l'objet au cœur du rituel.",
            secrets: [
              "Le schéma de la Larme porte une note barrée : 'Ne jamais alimenter cela avec des vivants.' Sealine a été la première — et la seule à avoir survécu au transit, avant de se sacrifier à Nyx.",
              "Les sept bocaux contiennent les restes des sept échecs d'Elian après S-01 — des reproductions du protocole qui n'ont pas survécu au transit. Toutes ont échoué.",
              "Elian Voss est présent si les PJ arrivent de jour. Il est effrayé et peut être retourné.",
            ],
            rappels: [
              "Si les PJ ont le cachet de Caldris des notes de Jaren, la confirmation est immédiate.",
              "Elian Voss n'est pas un fanatique. C'est un médecin qui a franchi la ligne par peur de Thade.",
            ],
          },

          defis: [
            { competence: "Art de la magie", dd: 17, reussite: "Le sérum dans les bocaux est une préparation planaire. Il stabilise le corps pendant le transit vers la Spirale. Le protocole S-01 est une version améliorée.", echec: "Les bocaux contiennent un liquide alchimique complexe. Sa fonction exacte reste obscure." },
            { competence: "Décryptage", dd: 17, reussite: "L'annotation de Sealine sur le schéma dit : 'Ne jamais alimenter cela avec des vivants.' Son écriture. Sa main.", echec: "L'annotation est ancienne et difficile à lire. Quelque chose sur des vivants." },
            { competence: "Intimidation", dd: 14, reussite: "Elian Voss, terrifié, révèle tout : Thade a commandé le protocole, Caldris fournit le matériel, la Larme est le catalyseur.", echec: "Elian se tait. Il a plus peur de Thade que des PJ." },
          ],

          indices: [
            { indice: "Le schéma de la Larme de Vael", localisation: "Dossier caché sous la plaque", detection: "Investigation DD 12", information: "La Larme est le catalyseur du rituel de seuil. Cachet de Caldris sur le schéma.", usage: "Comprendre que la Larme est l'objet central du plan de Thade." },
            { indice: "L'annotation de Sealine", localisation: "Schéma de la Larme", detection: "Décryptage DD 17", information: "'Ne jamais alimenter cela avec des vivants.' Écriture de Sealine.", usage: "Sealine savait. Elle a essayé d'empêcher Thade. Il l'a fait quand même." },
            { indice: "La liste des patients", localisation: "Cinquante dossiers 'stabilisés'", detection: "Lecture directe", information: "Cinquante patients stabilisés par des dérivés du protocole S-01, menés après Nyx. Sept échecs dans les bocaux.", usage: "Thade et Elian ont reproduit S-01 sur des vivants après Sealine." },
          ],

          guide_mj: {
            intention: "Révéler l'ampleur des expériences de Thade et le rôle de la Larme de Vael.",
            mise_en_place: "Laboratoire sous amphithéâtre. Porte métallique. Odeur de formol.",
            deroulement: ["Les PJ entrent.", "Ils trouvent les dossiers et les bocaux.", "Ils découvrent le schéma de la Larme.", "Elian Voss est présent (de jour) ou absent (de nuit)."],
            actions_utiles: ["Récupérer le protocole S-01.", "Interroger Elian Voss.", "Prendre les bocaux comme preuves.", "Comparer avec les archives médicales."],
            fronts_heritiers: ["Front 'Le Plan de Thade' — la Larme est le catalyseur.", "Front 'Les Factions de la Crise' — Caldris est un acteur extérieur."],
            jeu_des_pnj: "Elian est un homme brisé. Il sait ce qu'il a fait. Il a peur de Thade et peur de lui-même.",
            escalade: "Si les PJ tuent Elian, ils perdent un témoin clé. S'ils le retournent, il peut témoigner au Conseil.",
            sortie: "Les PJ quittent le laboratoire avec le protocole, la Larme et la liste. Ils ont tout sauf la Tour.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent savoir que la Larme de Vael est le catalyseur et que Thade et Elian ont reproduit S-01 sur des vivants après Sealine.",
            ne_pas_bloquer_sur_un_jet: "Le schéma de la Larme est visible sans jet. Le nom et le cachet sont lisibles.",
            question_dramatique: "Que vaut la vie de cinquante patients face à celle d'une femme qu'on aime ?",
          },

          transitions: {
            resume: "Les PJ quittent le laboratoire. Derrière eux, les bocaux restent dans l'obscurité.",
            reussite: "Les PJ ont le protocole, la Larme et un témoin. Prochaine étape : la Tour.",
            echec: "Les PJ ont trouvé le schéma sans comprendre le protocole. Olane ou Mara peuvent les aider à interpréter.",
          },
        },
      ],
    },

    // ── ACTE III — LA CONFRONTATION ────────────────────────────────
    {
      titre: "Acte III — La Confrontation",
      stake: "Les PJ confrontent Thade ou ses agents. La Tour s'active. Le déphasage s'accélère. La Spirale est à portée.",
      location: "Tour Arcanique, Centre Civique",

      scenes: [
        {
          id: "s2_assaut_tour",
          titre: "L'Assaut de la Tour",
          type: "Boss",
          resume_mj:
            "Les PJ montent la Tour Arcanique. Chaque étage est modifié : piliers de cristal, runes, objets en lévitation. Des étudiants charmés, des gardes piégés, des créatures planaires séduites par Thade. Chaque rencontre a une option non-létale. Le décompte des victimes compte pour l'épilogue.",
          idLieu: "tour_arcanique",
          idsPnj: ["etudiants_charmes", "gardes_pieges", "creature_spirale_cooptee", "magi_tuteur_loyal"],

          format_livre: {
            ambiance:
              "La Tour Arcanique se dresse au cœur de l'Université. De l'extérieur, elle semble normale — une flèche de pierre grise, des fenêtres étroites, un toit d'ardoise. Mais en franchissant le seuil, l'air change. Il sent la lavande et l'ozone. Les premiers étages sont banals — couloirs lambrissés, salles de cours vides, tableaux anciens. Mais à mesure qu'on monte, les murs changent. Des piliers de cristal poussent entre les pierres comme des racines inversées. Des runes brillent dans les angles, d'un bleu profond. Des objets flottent dans l'air — des livres, des plumes, des tasses, immobiles, comme suspendus dans du verre. Le bourdonnement du vortex au sommet est perceptible dès le troisième étage.",
            deroulement_narratif:
              "Les PJ montent étage par étage. Étages 1-2 : banals, transition. Des couloirs vides, des salles désertées. L'occasion de se préparer.\n\nÉtage 3 : étudiants charmés. Trois étudiants aux yeux vides. Ils lèvent les mains et lancent des sorts — Boule de feu, Rayon de givre. Persuasion DD 16 ou Dissipation de la magie pour les libérer sans violence. Ils se réveillent désorientés. Les tuer compte comme victime pour l'épilogue.\n\nÉtage 4 : gardes piégés et magi-tuteur loyal. Les gardes sont protégés par des runes explosives — les attaquer déclenche les runes. Discrétion DD 16 pour les éviter par les couloirs latéraux. Le magi-tuteur est un allié caché — il se présente si les PJ ne l'attaquent pas. Il peut expliquer la Tour, la cuve et le rituel au sommet.\n\nÉtage 5 : créature de la Spirale. Une entité cooptée par Thade — pas hostile par nature, mais prisonnière. Diplomatie DD 15 pour la retourner. Elle se retire si les PJ la traitent avec respect. Si elle attaque, elle est puissante mais ne veut pas mourir.\n\nÉtage 6 : ardoise. Investigation DD 10. Équation préliminaire de S-01, datée de sept ans. Thade travaillait déjà sur la théorie des seuils avant la disparition de Sealine. Mais le rituel actuel naît après Nyx, quand la recherche devient obsession.\n\nÉtage 7 : porte du Laboratoire de Verre. L'air sent la lavande à saturation. Le bourdonnement du vortex est audible. Derrière la porte : le corps de Thade dans la cuve.",
            notes_mj:
              "5-6 rencontres tactiques. Chaque rencontre a une option non-létale. Le MJ doit tenir le décompte du nombre de victimes — ce décompte détermine le ton de l'épilogue du Scénario 3. Personne dans la Tour n'est un ennemi volontaire — sauf Thade. Les étudiants sont des victimes. La créature est une prisonnière. Le magi-tuteur est un allié. S'ils tuent tout, l'épilogue sera sombre. S'ils minimisent les victimes, l'épilogue peut être lumineux.",
          },

          texte_a_lire:
            "La Tour Arcanique se dresse au cœur de l'Université. De l'extérieur, elle semble normale. De l'intérieur, elle est transformée. Les premiers étages sont banals — couloirs lambrissés, salles de cours. Mais plus vous montez, plus les murs changent. Des piliers de cristal poussent entre les pierres. Des runes brillent dans les angles. Des objets flottent dans l'air, immobiles.\n\nAu troisième étage, un étudiant vous regarde avec des yeux vides. Il lève la main. Une boule de feu apparaît.",

          objectif: "Atteindre le seuil du sommet en minimisant les victimes.",

          contexte_mj: {
            situation:
              "La Tour est un dispositif rituel. Chaque étage est modifié pour canaliser l'énergie vers le sommet. Thade a charmé des étudiants, piégé des gardes et coopté une créature de la Spirale. Les PJ doivent monter étage par étage.",
            secrets: [
              "Chaque étudiant charmé peut être libéré avec Dissipation de la magie ou Persuasion DD 16. Les tuer compte comme victime pour l'épilogue.",
              "La créature de la Spirale au 5e étage n'est pas hostile par nature. Elle a été séduite par Thade. Parler DD 15 peut la retourner.",
              "Le magi-tuteur loyal au 4e étage est un allié caché. Il peut guider les PJ s'ils ne l'attaquent pas.",
            ],
            rappels: [
              "5-6 rencontres tactiques. Chaque rencontre a une option non-létale.",
              "Le décompte des victimes détermine le ton de l'épilogue.",
            ],
          },

          defis: [
            { competence: "Persuasion", dd: 16, reussite: "Les PJ libèrent les étudiants charmés sans violence. Ils se réveillent désorientés mais vivants.", echec: "Les étudiants sont trop profondément charmés. Seul un combat ou Dissipation les arrête." },
            { competence: "Diplomatie", dd: 15, reussite: "La créature de la Spirale accepte de se retirer. Elle n'est pas l'ennemie de Thade — elle est sa prisonnière.", echec: "La créature attaque. Elle est puissante mais ne veut pas mourir." },
            { competence: "Discrétion", dd: 16, reussite: "Les PJ évitent deux rencontres en passant par les couloirs latéraux que Thade n'a pas modifiés.", echec: "Tous les couloirs mènent aux rencontres. Les PJ doivent combattre ou négocier." },
          ],

          indices: [
            { indice: "L'ardoise du 6e étage", localisation: "Salle de cours désertée", detection: "Investigation DD 10", information: "Équation préliminaire de S-01 datée de sept ans. Les premières recherches de Thade sur les seuils précèdent la disparition de Sealine.", usage: "Les premières recherches de Thade sur les seuils précèdent la disparition de Sealine ; le rituel actuel, lui, naît de sa perte. Thade n'a pas dérapé par chagrin — il a choisi." },
          ],

          guide_mj: {
            intention: "L'assaut de la Tour est la percée du Scénario 2 — pas l'apothéose. Les PJ atteignent le 7e étage, découvrent le corps de Thade et comprennent que le sommet est le vortex. Mais ils n'affrontent pas encore Thade dans le vortex : ils comprennent que le Scénario 3 commence maintenant.",
            mise_en_place: "La Tour est ouverte si les PJ ont un accès (Olane) ou forcée (Effraction/combat).",
            deroulement: ["Étages 1-2 : banals, transition.", "Étage 3 : étudiants charmés.", "Étage 4 : gardes piégés + magi-tuteur loyal.", "Étage 5 : créature de la Spirale.", "Étage 6 : ardoise, preuve.", "Étage 7 : porte du Laboratoire de Verre."],
            actions_utiles: ["Libérer les étudiants charmés.", "Parler à la créature planaire.", "Trouver le magi-tuteur.", "Lire l'ardoise du 6e."],
            fronts_heritiers: ["Front 'Le Plan de Thade' — la Tour est le dispositif.", "Front 'Le Sceau qui cède' — le rituel est proche."],
            jeu_des_pnj: "Les étudiants sont des victimes. La créature est une prisonnière. Le magi-tuteur est un allié. Personne dans la Tour n'est un ennemi volontaire — sauf Thade.",
            escalade: "Si les PJ tuent tout, l'épilogue sera sombre. S'ils minimisent les victimes, l'épilogue peut être lumineux.",
            sortie: "Les PJ atteignent la porte du Laboratoire de Verre. Derrière : le corps de Thade dans la cuve. Au-dessus : le sommet, le vortex, la Larme.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent atteindre le 7e étage et savoir que le sommet contient le vortex.",
            ne_pas_bloquer_sur_un_jet: "Même si tous les jets échouent, les PJ peuvent combattre leur chemin vers le haut. Le coût est plus élevé.",
            question_dramatique: "Combien de victimes acceptable pour arrêter un homme qui ne veut pas être arrêté ?",
          },

          transitions: {
            resume: "Les PJ atteignent la porte du Laboratoire de Verre. L'air sent la lavande à saturation.",
            reussite: "Les PJ ont monté la Tour avec un minimum de victimes. Ils sont prêts pour le seuil du sommet.",
            echec: "Les PJ ont monté la Tour en force. Les victimes s'accumulent. L'épilogue sera sombre.",
          },
        },

        {
          id: "s2_laboratoire_verre",
          titre: "Le Laboratoire de Verre",
          type: "Révélation",
          resume_mj:
            "Les PJ entrent dans le Laboratoire de Verre. Au centre : une cuve cylindrique en cristal. Dedans : le corps de Thade dans un liquide doré. Il est vivant, immobile, connecté à la Tour. Un mur de cahiers reliés bordeaux : Thade écrit à Sealine tous les jours depuis huit ans. La plume du cahier ouvert écrit en temps réel.",
          idLieu: "laboratoire_verre",
          idsPnj: ["thade_coren", "magi_tuteur_loyal"],

          format_livre: {
            ambiance:
              "La rotonde du 7e étage est baignée d'une lumière dorée qui n'a pas de source visible — elle émane des murs eux-mêmes, comme si la pierre avait absorbé huit ans de magie et ne savait plus comment ne pas briller. Une cuve cylindrique en cristal occupe le centre, douze mètres de diamètre, quatre mètres de haut. Le cristal est transparent — on voit tout. Dedans, un corps flotte dans un liquide doré, immobile. Thade Coren. Les yeux fermés. Le visage paisible. Des tubes l'alimentent — nutriments, mana, quelque chose de plus sombre. Des runes brillent sur la cuve, d'un or qui pulse lentement. L'air sent la lavande à saturation — pas un parfum, une présence. Le bourdonnement du vortex au sommet vibre dans les murs.",
            deroulement_narratif:
              "Sur le mur adjacent, des cahiers reliés bordeaux alignés par date. Des dizaines de cahiers. Huit ans de cahiers. Le dernier est ouvert sur un pupitre. Une plume écrit dedans, seule, en temps réel. L'écriture est fine, régulière, sans hésitation. Thade écrit depuis le vortex.\n\nSi les PJ lisent le cahier ouvert, ils voient que Thade parle à Sealine comme si elle était là. Il raconte sa journée. Il décrit ce qu'il fait. Il dit qu'il est proche. Il dit qu'il va la ramener. Il ne sait pas qu'il a échoué. Ou il ne veut pas le savoir.\n\nInvestigation DD 12 : le système de la cuve est clair — tubes alimentaires, runes de préservation, connexion arcanique vers le sommet. Détruire la cuve interrompt la connexion entre Thade et le vortex. Connaissances (mystères) DD 16 : détruire le corps coûte une phase au Thade du sommet. Il sera affaibli mais pas arrêté.\n\nLes PJ peuvent : détruire la cuve et le corps, lire les cahiers, écrire dans le cahier ouvert (Thade lira au sommet — c'est un canal de communication), ou emporter les cahiers comme preuve. Le magi-tuteur, s'il est présent, peut expliquer : « Son esprit est au sommet. Son corps est ici. La cuve maintient le lien. Détruisez le corps, et il sera plus faible là-haut. Mais il saura que vous êtes venus. »\n\nLa décision de détruire le corps est morale, pas mécanique. Les PJ regardent le visage paisible de Thade. Ils lisent les lettres à Sealine. Et ils doivent choisir : détruire le corps d'un homme qui écrit à sa femme tous les jours, ou monter au sommet sans avantage.",
            notes_mj:
              "Aucun jet requis pour voir la cuve et les cahiers. Le corps de Thade est reconnaissable. La scène est le seuil du Scénario 3 — l'humanité de Thade révélée au moment où les PJ comprennent que l'affrontement final les attend au sommet. Si les PJ détruisent le corps, Thade au sommet perd une phase mais peut accélérer le rituel en représailles. Si les PJ écrivent dans le cahier, Thade peut répondre — c'est une dernière conversation avant le Scénario 3.",
          },

          texte_a_lire:
            "La rotonde est baignée d'une lumière dorée. Une cuve cylindrique en cristal occupe le centre, douze mètres de diamètre. Dedans, un corps flotte dans un liquide doré. Thade Coren. Les yeux fermés. Le visage paisible. Des tubes l'alimentent. Des runes brillent sur la cuve.\n\nSur le mur adjacent, des cahiers reliés bordeaux alignés par date. Huit ans de cahiers. Le dernier est ouvert. Une plume écrit dedans, seule, en temps réel.",

          objectif: "Décider quoi faire du corps de Thade dans la cuve.",

          contexte_mj: {
            situation:
              "Le corps de Thade est dans la cuve. Il est vivant mais immobile. Son esprit est au sommet de la Tour, dans le vortex. La cuve maintient son corps pendant que son esprit accomplit le rituel. Détruire le corps coûte une phase au Thade du sommet.",
            secrets: [
              "Les cahiers sont des lettres à Sealine. Huit ans de lettres. Tous les jours. La plume écrit en temps réel — Thade écrit depuis le vortex.",
              "Si les PJ lisent le cahier ouvert, ils voient que Thade parle à Sealine comme si elle était là. Il ne sait pas qu'il a échoué. Ou il ne veut pas le savoir.",
              "Détruire le corps interrompt la connexion entre Thade et le vortex. Il perd une phase de puissance au sommet.",
            ],
            rappels: [
              "Le magi-tuteur loyal peut expliquer la cuve si les PJ ne l'ont pas attaqué.",
              "Si les PJ écrivent dans le cahier ouvert, Thade peut les lire au sommet. C'est un canal de communication.",
            ],
          },

          defis: [
            { competence: "Investigation", dd: 12, reussite: "Le système de la cuve est clair : tubes alimentaires, runes de préservation, connexion arcanique vers le sommet. Détruire la cuve interrompt la connexion.", echec: "La cuve est complexe. Les runes sont inconnues. Difficile de savoir quoi faire." },
            { competence: "Connaissances (mystères)", dd: 16, reussite: "Détruire le corps coûte une phase au Thade du sommet. Il sera affaibli mais pas arrêté.", echec: "Le lien entre la cuve et le sommet est arcanique et puissant. Difficile d'évaluer l'impact." },
          ],

          indices: [
            { indice: "Les cahiers de Thade", localisation: "Mur du laboratoire", detection: "Lecture directe", information: "Huit ans de lettres à Sealine. Tous les jours. La plume écrit en temps réel.", usage: "Comprendre que Thade n'a jamais renoncé. Il parle à Sealine comme si elle était là." },
            { indice: "Le cahier ouvert", localisation: "Bureau adjacent", detection: "Lecture directe", information: "Thade écrit depuis le vortex. Le cahier est un canal de communication.", usage: "Les PJ peuvent écrire dans le cahier. Thade lira au sommet." },
          ],

          guide_mj: {
            intention: "Révéler la vérité humaine de Thade. Il n'est pas un monstre distant. Il est un homme qui écrit à sa femme tous les jours depuis huit ans.",
            mise_en_place: "Rotonde de pierre claire. Cuve centrale. Lumière dorée. Parfum de lavande.",
            deroulement: ["Les PJ entrent et voient la cuve.", "Ils examinent le corps de Thade.", "Ils découvrent les cahiers.", "Ils décident : détruire le corps, lire les cahiers, ou écrire dans le cahier ouvert."],
            actions_utiles: ["Détruire la cuve et le corps.", "Lire les cahiers.", "Écrire à Thade dans le cahier.", "Emporter les cahiers comme preuve."],
            fronts_heritiers: ["Front 'Le Plan de Thade' — le corps est le point faible.", "Front 'Le Sceau qui cède' — le rituel est en cours au sommet."],
            jeu_des_pnj: "Le magi-tuteur peut expliquer. Sinon, les cahiers parlent pour Thade.",
            escalade: "Si les PJ détruisent le corps, Thade au sommet perd une phase. Mais il peut accélérer le rituel en représailles.",
            sortie: "Les PJ quittent le laboratoire. La porte du sommet est devant eux. L'air sent la lavande à saturation. Le bourdonnement du vortex est audible.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent savoir que le corps de Thade est dans la cuve et que le détruire affaiblit Thade au sommet.",
            ne_pas_bloquer_sur_un_jet: "La cuve et les cahiers sont visibles sans jet. Le corps de Thade est reconnaissable.",
            question_dramatique: "Pouvez-vous détruire le corps d'un homme qui écrit à sa femme tous les jours ?",
          },

          transitions: {
            resume: "Les PJ se tournent vers la porte du sommet. Le bourdonnement du vortex les appelle. Ils n'ont pas encore affronté Thade — mais ils savent maintenant que le Scénario 3 commence de l'autre côté de cette porte.",
            reussite: "Les PJ ont détruit le corps ou lu les cahiers. Ils se tiennent au seuil du sommet. Le Scénario 3 commence.",
            echec: "Les PJ ont vu la cuve sans agir. Ils se présentent au seuil du sommet sans avantage.",
          },
        },
      ],
    },
  ],
};
