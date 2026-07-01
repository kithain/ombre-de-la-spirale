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
        titre: "Le Conseil sous Pression",
        acte: "Acte I",
        statut: "obligatoire_flexible",
        axe: "Public",
        dependances: ["L'Émeute de la Place de la Fondation (le Conseil réagit à l'émeute)"],
        revele: ["Avel Ronce est paralysé par la procédure", "Hessa Brunefer défend les Terrasses", "Maelric presse le Conseil d'agir ou de subir la quarantaine", "Le Champion monte la pression dehors", "Yselle cache la crise des convois"],
        note: "Scène politique jouable. Avel, Hessa, Maelric et Yselle sont présents. Le Champion harangue la foule dehors. Les PJ peuvent présenter des preuves, soutenir Hessa, ou confronter le Champion.",
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
      {
        titre: "L'Escalier du Sommet",
        acte: "Acte III",
        statut: "obligatoire",
        axe: "Cosmique",
        dependances: ["Le Laboratoire de Verre"],
        revele: ["Le sommet de la Tour est déphasé", "Thade parle à Sealine en continu depuis le vortex"],
        note: "Scène de transition sans combat. Sas dramatique avant le Scénario 3. Le MJ rappelle le décompte des victimes et laisse les PJ se préparer.",
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
      {
        titre: "Les Lettres Doublées",
        description:
          "Odran Bellec découvre que les lettres arrivent en double ou avec un contenu décalé dans le temps. Yselle Vaurin reçoit des lettres de crédit identiques à trois semaines d'intervalle.",
        declencheur: "Si les PJ passent par le Centre Civique ou le Beffroi pendant l'Acte I.",
        apport: "Comprendre que le déphasage décale les communications entre Valombre et l'extérieur. Étape 2 de la révélation du déphasage.",
      },
      {
        titre: "La Route qui Boucle",
        description:
          "Un messager revient à Valombre après six heures de route sans avoir quitté la ville. Les bornes sont en place, la route semble normale, mais elle ramène au point de départ.",
        declencheur: "Si les PJ passent par la porte de la Vieille Ville ou entendent parler d'un messager perdu.",
        apport: "Vivre le déphasage corporellement : la ville ne laisse pas sortir. Étape 4 de la révélation du déphasage.",
      },
      {
        titre: "Les Entrepôts Pleins",
        description:
          "Les entrepôts de la Guilde Marchande débordent. Les convois sont prêts mais les transporteurs reviennent sans avoir livré. Yselle cache la crise pour éviter la panique.",
        declencheur: "Si les PJ enquêtent sur l'économie ou visitent les entrepôts de la Guilde Marchande.",
        apport: "Comprendre que le déphasage a des conséquences économiques concrètes et que les institutions le cachent. Étape 3 de la révélation du déphasage.",
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
    {
      id: "enc_objets_symptomes",
      titre: "Garder la Larme, le seuil et le déphasage incarnés par des objets et symptômes",
      situation:
        "Les notions de Larme de Vael, de seuil planaire et de déphasage sont abstraites. Les PJ peuvent les comprendre intellectuellement sans les ressentir. La simulation montre que ces notions gagnent à rester concrètes pendant toute la campagne.",
      principe:
        "Chaque notion cosmique a un objet physique ou un symptôme sensoriel qui l'incarne. Le MJ les utilise à chaque apparition pour que les PJ associent l'idée à une sensation, pas à un concept.",
      proceder: [
        {
          etape: "La Larme de Vael",
          detail:
            "Objet : un schéma trouvé chez Elian Voss (papier, encre, cachet de Caldris). Puis la Larme elle-même au sommet — brillante, petite, suspendue dans le vortex. Le MJ la décrit comme un objet physique, pas comme un concept magique. Sa taille, son poids, sa lumière.",
        },
        {
          etape: "Le seuil / le sceau",
          detail:
            "Objet : les runes sur les dalles du cimetière. Le froid du Mausolée. Les os des Thanes avec runes gravées. Le sceau n'est pas une idée — c'est des pierres, des os, du froid. Quand le sceau cède, ce sont les pierres qui bougent et le froid qui s'étend.",
        },
        {
          etape: "Le déphasage",
          detail:
            "Symptômes : l'absence d'odeur. Les échos qui se répètent trois fois. Les distances qui ne diminuent pas. Les lettres en double. Les horloges décalées. Le ciel laiteux puis violet. Le MJ utilise un symptôme sensoriel à chaque fois que le déphasage apparaît — pas une explication arcanique.",
        },
        {
          etape: "La lavande",
          detail:
            "La lavande est la signature de Thade. Elle relie le bureau de Thade, la mort de Jaren, la Tour, le Laboratoire de Verre, le sommet. Le MJ la décrit à chaque apparition de Thade ou de ses traces. C'est l'indice olfactif qui relie tout.",
        },
        {
          etape: "Quand les PJ demandent une explication",
          detail:
            "Le MJ donne l'objet ou le symptôme d'abord, puis l'explication. « Tu sens l'absence d'odeur. L'air ne porte plus rien. C'est le déphasage. » Pas l'inverse. La sensation précède le concept.",
        },
      ],
      a_ne_pas_faire: [
        "Ne pas expliquer le déphasage sans le faire vivre sensoriellement d'abord.",
        "Ne pas mentionner la Larme sans la décrire physiquement.",
        "Ne pas parler du sceau sans parler des pierres, du froid ou des os.",
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

    preuves_transportables: [
      {
        objet: "Textes des Endeuillés (tampon de la Réserve)",
        scene: "Les Endeuillés d'Edran Morn",
        type: "Physique — emportable",
        description: "Textes portant le tampon de la Réserve de Recherche Interdite. Copies dégradées des ouvrages que Thade maîtrise.",
        utilisable_pour: "Prouver que Thade a laissé les textes circuler. Présenter au Conseil ou à Olane.",
      },
      {
        objet: "Registre de la Réserve (copie partielle)",
        scene: "La Réserve de Recherche Interdite",
        type: "Physique — copie, emportable",
        description: "142 séances de Thade sur 8 ans. Sujets : résonance planaire, seuils, ancrages. Effondrement après la mort de Sealine.",
        utilisable_pour: "Prouver la préparation méthodique du rituel. Présenter au Conseil.",
      },
      {
        objet: "Schéma de la Larme de Vael",
        scene: "Le Laboratoire d'Elian Voss",
        type: "Physique — emportable",
        description: "Schéma d'un dispositif en forme de larme. Cachet de Caldris. Annotation de Sealine : « Ne jamais alimenter cela avec des vivants. »",
        utilisable_pour: "Prouver le rôle de la Larme comme catalyseur et l'implication de Caldris. Présenter au Conseil.",
      },
      {
        objet: "Dossiers des patients d'Elian Voss (copie partielle)",
        scene: "Le Laboratoire d'Elian Voss",
        type: "Physique — copie, emportable",
        description: "Cinquante dossiers « stabilisés ». Noms, dates, dosages. Cachet de Caldris sur chaque dossier.",
        utilisable_pour: "Prouver la reproduction de S-01 sur des vivants. Présenter au Conseil ou au magi-tuteur.",
      },
      {
        objet: "Sept bocaux (témoignage ou description)",
        scene: "Le Laboratoire d'Elian Voss",
        type: "Physique — transport délicat, preuve par description possible",
        description: "Sept bocaux contenant les restes des sept échecs d'Elian après S-01. Témoignage d'Art de la magie DD 17.",
        utilisable_pour: "Prouver le coût humain du rituel. Elian ou Olane peuvent témoigner.",
      },
      {
        objet: "Cahiers bordeaux du Laboratoire de Verre",
        scene: "Le Laboratoire de Verre",
        type: "Physique — emportable (volumineux)",
        description: "Huit ans de lettres de Thade à Sealine. La plume écrit en temps réel. Le cahier ouvert est un canal de communication.",
        utilisable_pour: "Prouver l'obsession de Thade. Utiliser comme armes pendant le combat final (Scénario 3).",
      },
      {
        objet: "Ardoise du 6e étage (relevé)",
        scene: "L'Assaut de la Tour",
        type: "Physique — relevé/copie, emportable",
        description: "Équation préliminaire de S-01 datée de sept ans. Les recherches de Thade précèdent la disparition de Sealine.",
        utilisable_pour: "Prouver que Thade n'a pas dérapé par chagrin — il a choisi. Présenter au Conseil.",
      },
      {
        objet: "Témoignage d'Elian Voss (si retourné)",
        scene: "Le Laboratoire d'Elian Voss",
        type: "Témoignage — formalisable",
        description: "Elian révèle tout : Thade a commandé le protocole, Caldris fournit le matériel, la Larme est le catalyseur.",
        utilisable_pour: "Témoin le plus précieux pour le Conseil. Si Elian meurt, cette preuve est perdue.",
      },
    ],

    pnj_allies: [
      {
        id: "maera_olane",
        nom: "Maëra Olane",
        lieu: "Université — Salle 4B",
        disponibilite: "Dès le Scénario 1 (si alliée). Couvre l'accès à la Réserve.",
        apporte: "Accès institutionnel, couverture, interprétation des ouvrages de la Réserve. Pont vers le Conseil.",
        mobilisable: "Peut porter les preuves au Conseil. Peut interpréter les textes arcaniques si les PJ échouent.",
      },
      {
        id: "mara_dirigeante",
        nom: "Mara",
        lieu: "Maison des Retours / égouts",
        disponibilite: "Dès le Scénario 1 (si contact établi).",
        apporte: "Réseau clandestin, égouts, renseignements sur les caisses. Alternative à l'institution.",
        mobilisable: "Peut envoyer des éclaireurs. Peut fournir un refuge si les PJ sont recherchés sous la loi martiale.",
      },
      {
        id: "elian_voss",
        nom: "Elian Voss",
        lieu: "Laboratoire sous l'amphithéâtre médical",
        disponibilite: "Si retourné (Intimidation DD 14). Disparaît si tué.",
        apporte: "Témoignage complet sur le protocole, la Larme, Caldris. Témoin le plus précieux.",
        mobilisable: "Peut témoigner au Conseil. Peut fournir des détails médicaux sur les patients S-01.",
      },
      {
        id: "magi_tuteur_loyal",
        nom: "Le Magi-Tuteur loyal",
        lieu: "Tour Arcanique, 4e étage",
        disponibilite: "Si les PJ ne l'attaquent pas pendant l'Assaut.",
        apporte: "Explications sur la Tour, la cuve, le rituel au sommet. Guide les PJ.",
        mobilisable: "Peut intervenir à la phase 2 du combat final (Scénario 3). Peut expliquer les options si Sealine est absente.",
      },
      {
        id: "thorgar_pretre_nain",
        nom: "Thorgar",
        lieu: "Temple-Forgeron, sous les Terrasses",
        disponibilite: "Dès le Scénario 1. Toujours disponible aux Terrasses.",
        apporte: "Rites d'Edhrek-Murn. Peut restaurer le sceau partiellement.",
        mobilisable: "Peut être appelé pour restaurer les rites si les Endeuillés sont dispersés. Pas un combattant.",
      },
      {
        id: "sniv_kobold",
        nom: "Sniv",
        lieu: "Via Mara — égouts",
        disponibilite: "Dès le Scénario 1 (si contact établi via Mara).",
        apporte: "Passages souterrains. Accès discret à des zones sous surveillance.",
        mobilisable: "Peut guider les PJ sous la loi martiale. Utile pour éviter la garde.",
      },
    ],

    symptomes_fronts: [
      {
        front: "Le Sceau qui cède",
        symptomes: [
          { etape: "1 segment", signe: "Froid au cimetière. Lanternes qui s'éteignent." },
          { etape: "2 segments", signe: "Vibrations dans la mine. Mineurs refusent de descendre." },
          { etape: "3 segments", signe: "Runes qui changent. Rite inversé des Endeuillés fissure le sceau." },
          { etape: "4 segments", signe: "Déphasage visible. Routes qui bouclent. Lettres qui arrivent en double." },
        ],
      },
      {
        front: "Le Plan de Thade",
        symptomes: [
          { etape: "1 segment", signe: "Outils d'Université sur les tombes. Prélèvements en cours." },
          { etape: "2 segments", signe: "Flux détournés vers la Tour. Olane confirme." },
          { etape: "3 segments", signe: "142 consultations à la Réserve. Schéma de la Larme trouvé." },
          { etape: "4 segments", signe: "La Tour s'éveille. Cristal qui pousse. Objets en lévitation. Bourdonnement du vortex." },
        ],
      },
      {
        front: "La Cité sous pression",
        symptomes: [
          { etape: "1 segment", signe: "Émeute de la Place de la Fondation. Le Champion harangue." },
          { etape: "2 segments", signe: "Endeuillés recrutent parmi les malades. Rumeurs sur les caisses." },
          { etape: "3 segments", signe: "Conseil sous pression. Ultimatum de Caldris. Vote de la loi martiale possible." },
          { etape: "4 segments", signe: "Loi martiale votée. Terrasses sous surveillance. Olane arrêtée si découverte." },
        ],
      },
      {
        front: "Le Déphasage (couche de campagne)",
        symptomes: [
          { etape: "1", signe: "Routes qui bouclent. Messager revient au point de départ." },
          { etape: "2", signe: "Lettres en double. Horloges décalées. Communications perturbées." },
          { etape: "3", signe: "Zones déphasées dans la Vieille Ville. Absence d'odeur. Échos répétés." },
          { etape: "4", signe: "Déphasage général. Le ciel vire au violet. La Spirale filtre partout." },
        ],
      },
    ],

    consequences_choix: [
      {
        choix: "Soutenir Hessa au Conseil",
        consequence_immediate: "Le Conseil reporte la loi martiale. Hessa devient une alliée. Les Terrasses restent accessibles.",
        consequence_long_terme: "Le Champion perd en crédibilité. Caldris maintient sa pression mais sans résultat immédiat.",
        impact_front: "Le front 'La Cité sous pression' recule d'un segment. Le front 'Les Factions' — le Champion perd en influence.",
      },
      {
        choix: "Soutenir Maelric / accepter l'ultimatum de Caldris",
        consequence_immediate: "Le Conseil accepte les conditions de Caldris. Maelric devient un contact. La pression extérieure diminue.",
        consequence_long_terme: "Valombre perd en autonomie. Caldris gagne un droit de regard sur l'Université. Thade est plus exposé.",
        impact_front: "Le front 'La Cité sous pression' se stabilise. Mais Caldris gagne en influence sur l'Université.",
      },
      {
        choix: "Présenter les preuves via Olane",
        consequence_immediate: "Le Conseil ouvre une enquête officielle sur Thade. Olane est protégée institutionnellement.",
        consequence_long_terme: "Thade verrouille la Tour. Accélère le rituel. Les PJ ont un mandat officiel pour agir.",
        impact_front: "Le front 'Le Plan de Thade' accélère — Thade se sait découvert. Le front 'La Cité sous pression' se stabilise.",
      },
      {
        choix: "Laisser le Conseil voter sans intervenir",
        consequence_immediate: "Le résultat dépend de la pression. Si le Champion domine, loi martiale. Si Hessa tient, report.",
        consequence_long_terme: "Les PJ perdent une occasion d'influencer la politique. Les conséquences leur retombent dessus.",
        impact_front: "Le front 'La Cité sous pression' avance d'un segment. Les PJ n'ont ni allié ni ennemi au Conseil.",
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

          navigation: {
            indice_indispensable: "Les PJ doivent savoir que le Champion exploite la crise et qu'Edran Morn recrute parmi les désespérés.",
            consequence_si_manque: "Sans identifier les acteurs cachés, les PJ ne savent pas qui manipule la foule. Le Champion gagne en influence. Edran recrute sans opposition.",
            pnj_alternatifs: ["mara_dirigeante — peut renseigner les PJ sur le Champion et les Endeuillés depuis la Résistance", "maera_olane — peut fournir des données institutionnelles sur la crise"],
            front_si_ignore: "Les Factions de la Crise — le Champion gagne en influence. La Cité sous pression — les Terrasses se ferment.",
            scenes_alternatives: ["s2_conseil_crise — si les PJ vont directement au Conseil sans enquêter sur l'émeute", "s2_endeuilles_edran — si les PJ suivent la piste d'Edran Morn directement"],
            sorties_jouables: [
              {
                condition: "Les PJ veulent alerter le Conseil de la crise",
                sceneId: "s2_conseil_crise",
                type: "indice_principal",
                moteur: "L'émeute justifie une session extraordinaire du Conseil. Les PJ peuvent y porter leurs observations.",
                accroche_mj: "« Le Conseil se réunit en session extraordinaire demain. Si vous voulez être entendus, préparez vos arguments. Avel n'aime pas les improvisations. »",
                consequence_si_refus: "Si les PJ ignorent le Conseil, les décisions se prennent sans eux. La loi martiale peut être votée sans leur avis.",
              },
              {
                condition: "Les PJ suivent la piste d'Edran Morn",
                sceneId: "s2_endeuilles_edran",
                type: "pnj",
                moteur: "Edran recrute parmi les désespérés après l'émeute. Sa cave est dans la Vieille Ville.",
                accroche_mj: "« Vous avez vu un homme qui observait la foule sans participer. Il recrutait. Les plus désespérés le suivaient. La Vieille Ville. Les caves sous la blanchisserie. »",
                consequence_si_refus: "Edran continue son rite inversé. Le front 'Le Sceau qui cède' avance.",
              },
              {
                condition: "Les PJ veulent enquêter sur le déphasage visible",
                sceneId: "s2_dephasage_visible",
                type: "lieu",
                moteur: "Les symptômes du déphasage sont visibles dans certaines zones de la ville.",
                accroche_mj: "« Pendant l'émeute, vous avez vu des choses étranges. Des échos qui se répètent. Des distances qui ne correspondent pas. Le déphasage n'est plus une rumeur. »",
                consequence_si_refus: "Le déphasage s'étend sans enquête. Les zones touchées s'agrandissent.",
              },
              {
                condition: "L'émeute a tourné à la violence (échec)",
                sceneId: "s2_conseil_crise",
                type: "urgence_front",
                moteur: "La violence accélère la réponse politique. Le Conseil envisage la loi martiale.",
                accroche_mj: "« Les Terrasses sont fermées. La garde patrouille. Le Conseil se réunit en urgence. La loi martiale est sur la table. »",
                consequence_si_refus: "Si les PJ n'interviennent pas au Conseil, la loi martiale est votée. Les PJ perdent en liberté de mouvement.",
              },
              {
                condition: "Les PJ veulent négocier avec le Champion",
                sceneId: "s2_conseil_crise",
                type: "echec",
                moteur: "Le Champion peut être détourné mais pas raisonner sur les causes.",
                accroche_mj: "« Le Champion vous reçoit en privé. Courtois, mesuré. Il dit : 'Vous voyez les mêmes choses que moi. Les maladies. Le froid. Les disparitions.' Mais il ne cède pas sur les causes. »",
                consequence_si_refus: "Si les PJ ne détournent pas le Champion vers l'Université, il continue à viser les nains. Les Terrasses se ferment.",
              },
              {
                condition: "Les PJ veulent explorer la Vieille Ville",
                sceneId: "s2_endeuilles_edran",
                type: "libre",
                moteur: "Les PJ cherchent d'autres pistes dans la Vieille Ville après l'émeute.",
                accroche_mj: "« La Vieille Ville est en ébullition. L'émeute a attiré des gens désespérés. Et des gens qui les attendent. Si vous cherchez des pistes, commencez par les caves. »",
                consequence_si_refus: "Les PJ peuvent explorer plus tard, mais Edran a déjà recruté et commencé son rite.",
              },
            ],
            fallback_mj: "L'Émeute de la Place est la scène d'ouverture du Scénario 2. Elle se déclenche automatiquement à l'arrivée des PJ. Si les PJ ratent l'émeute (arrivée tardive), ils entendent les rumeurs et peuvent enquêter rétroactivement. Le Champion et Edran sont les deux pistes principales.",
            objectif_scene: "Identifier les acteurs cachés de l'émeute : le Champion qui harangue, les agents de Thade qui manipulent, les Endeuillés d'Edran Morn qui profitent du chaos.",
            pression: "L'émeute tourne en violence si les PJ n'interviennent pas. Les Terrasses se ferment. Le Conseil se réunit en urgence. Le front 'Le Sceau qui cède' avance si les PJ tardent.",
            actions_pj_attendues: ["observer la foule et identifier les meneurs", "intervenir ou non dans l'émeute", "suivre les Endeuillés ou le Champion", "collecter des témoignages"],
            sorties_possibles: ["vers s2_conseil_crise (le Conseil se réunit)", "vers s2_endeuilles_edran (suivre les Endeuillés)", "vers s2_dephasage_visible (explorer le déphasage)"],
            si_les_pj_bloquent: "Si les PJ évitent l'émeute, le Conseil se réunit quand même. Mara peut informer. Le Champion harangue la foule. Les rumeurs rattrapent les PJ.",
            conditions_sortie: [
              "Les PJ ont identifié le Champion ou les Endeuillés comme acteurs de l'émeute.",
              "OU les PJ ont dispersé la foule ou négocié avec le Champion.",
              "OU les PJ arrivent en retard — l'émeute a tourné, les Terrasses sont fermées.",
            ],
            transition_defaut: "L'émeute se disperse ou est réprimée. Les rues sont calmes mais tendues. Un crieur public annonce une session extraordinaire du Conseil. Que font les PJ ?",
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
              "Cette scène donne aux PJ un accès direct aux trois forces politiques : Avel (paralysie), Hessa (défense naine), Maelric (pression extérieure). Olane est présente seulement si les PJ l'ont rencontrée dans le Scénario 1 et qu'ils la soutiennent. Si Olane n'est pas disponible, les PJ perdent l'option 2 mais peuvent encore présenter les preuves eux-mêmes avec un DD plus élevé (16 au lieu de 15). La scène peut être jouée avant ou après le Déphasage Visible — si après, Maelric peut témoigner avoir vu une rue se déformer.\n\nGestion de l'overload : si les PJ arrivent avec beaucoup de preuves, le MJ ne traite pas tout en une fois. Ordre de priorité : 1) L'ultimatum de Caldris (Maelric) — c'est l'urgence immédiate. 2) Les irrégularités de Thade (via Olane) — c'est le sujet de fond. 3) La loi martiale (Champion) — c'est la pression extérieure. Si les PJ ont plus de trois preuves, le MJ leur demande d'en choisir trois à présenter. Les autres peuvent être utilisées après le Conseil, dans une scène de suivi avec Olane ou Hessa. Le Conseil ne peut pas tout traiter en une séance — c'est réaliste et ça évite l'overload.",
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
            fronts_heritiers: ["Front 'La Cité sous pression' — la paralysie du Conseil avance l'horloge institutionnelle.", "Front 'Le Déphasage' — les lettres doublées et les routes qui bouclent révèlent l'isolation."],
            jeu_des_pnj: "Avel est courtois, lent, incapable de trancher. Hessa est directe, sèche, intraitable sur les coutumes. Maelric est froid, précis, sincèrement inquiet. Olane parle vite quand elle tient une preuve, mais se tait si elle se sent exposée.",
            escalade: "Si les PJ échouent ou ne font rien : Avel renvoie tout en commission, Hessa ferme un accès commercial, Maelric note l'incapacité de Valombre. L'horloge 'Le Conseil, la Machine à Retarder' avance d'une étape.",
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

          navigation: {
            indice_indispensable: "Les PJ doivent savoir que le Conseil est paralysé et que la loi martiale est envisagée.",
            consequence_si_manque: "Sans comprendre la paralysie du Conseil, les PJ peuvent perdre du temps à attendre une action politique qui ne viendra pas. Mara ou Olane peuvent les informer.",
            pnj_alternatifs: ["mara_dirigeante — peut informer les PJ de la situation politique depuis la Résistance", "maera_olane — peut fournir des données et un appui institutionnel au Conseil"],
            front_si_ignore: "La Cité sous pression — sans intervention au Conseil, la loi martiale est votée. Les Terrasses se ferment. Les PJ perdent en liberté de mouvement.",
            scenes_alternatives: ["s2_endeuilles_edran — si les PJ contourment le Conseil et enquêtent sur le terrain", "s2_dephasage_visible — si les PJ enquêtent sur le déphasage au lieu de faire de la politique"],
            sorties_jouables: [
              {
                condition: "Les PJ veulent enquêter sur les Endeuillés d'Edran Morn",
                sceneId: "s2_endeuilles_edran",
                type: "indice_principal",
                moteur: "Le Conseil est paralysé. La piste concrète est Edran Morn et son rite inversé.",
                accroche_mj: "« Le Conseil ne fera rien. Mais vous avez vu Edran recruter après l'émeute. Sa cave. Son rite. C'est là que vous pouvez agir. »",
                consequence_si_refus: "Edran continue son rite. Le front 'Le Sceau qui cède' avance d'un segment.",
              },
              {
                condition: "Les PJ veulent enquêter sur le déphasage visible",
                sceneId: "s2_dephasage_visible",
                type: "lieu",
                moteur: "Le déphasage est visible dans certaines zones. Les PJ peuvent le constater et identifier la source.",
                accroche_mj: "« Le Conseil parle. Pendant ce temps, la ville change. Des zones où les échos se répètent. Des routes qui ne mènent plus où elles devraient. Allez voir. »",
                consequence_si_refus: "Le déphasage s'étend sans enquête.",
              },
              {
                condition: "Les PJ ont obtenu le soutien d'Hessa ou Maelric",
                sceneId: "s2_endeuilles_edran",
                type: "pnj",
                moteur: "Un allié au Conseil ouvre des portes. Hessa peut donner accès aux Terrasses. Maelric peut fournir des renseignements.",
                accroche_mj: "« Hessa vous prend à part. 'Le Conseil ne bougera pas. Mais moi, je peux vous donner accès aux Terrasses. Et j'ai entendu parler d'un groupe dans la Vieille Ville. Des gens qui font des rites. Des rites nains. Mal faits.' »",
                consequence_si_refus: "Sans allié au Conseil, les PJ n'ont pas d'accès facilité aux Terrasses ni aux renseignements institutionnels.",
              },
              {
                condition: "Le Conseil vote la loi martiale (échec)",
                sceneId: "s2_dephasage_visible",
                type: "urgence_front",
                moteur: "La loi martiale restreint les mouvements. Les PJ doivent agir vite.",
                accroche_mj: "« La garde patrouille dans les rues. Couvre-feu à la tombée de la nuit. Les Terrasses sont sous surveillance. Mais le déphasage s'étend. Vous devez continuer. »",
                consequence_si_refus: "Si les PJ se replient, la crise s'aggrave sans eux. Le déphasage s'étend.",
              },
              {
                condition: "Les PJ veulent retourner à l'Université pour trouver Olane",
                sceneId: "s2_conseil_sous_pression",
                type: "echec",
                moteur: "Olane peut fournir des données et un accès à la Réserve Interdite.",
                accroche_mj: "« Le Conseil est paralysé. Mais Olane, à l'Université, a les chiffres. Elle peut prouver que le déphasage vient du sceau. Avec ça, vous pouvez forcer la main du Conseil. Plus tard. »",
                consequence_si_refus: "Sans Olane, les PJ n'ont pas de preuve institutionnelle du déphasage.",
              },
              {
                condition: "Les PJ veulent explorer les zones déphasées de nuit",
                sceneId: "s2_dephasage_visible",
                type: "libre",
                moteur: "Les PJ veulent voir le déphasage par eux-mêmes, de nuit.",
                accroche_mj: "« La nuit, les zones déphasées sont plus visibles. Les échos. Les distances. L'absence d'odeur. Mais c'est dangereux. Le déphasage n'est pas stable. »",
                consequence_si_refus: "Les PJ peuvent y aller de jour, mais les symptômes sont moins visibles.",
              },
            ],
            fallback_mj: "Le Conseil de Crise peut être évité si les PJ contourment la politique. Mais sans intervention, la loi martiale est votée à la prochaine session. Les PJ perdent en liberté de mouvement. Le Conseil redevient pertinent au Scénario 2 Acte II (Conseil sous Pression).",
            objectif_scene: "Assister à la paralysie du Conseil : Caldris menace d'un blocus, le Champion monte en influence, personne ne décide.",
            pression: "Sans intervention, la loi martiale est votée à la prochaine session. Le Champion gagne en influence. Le déphasage s'étend pendant les débats.",
            actions_pj_attendues: ["observer les débats et identifier les factions", "présenter des preuves si les PJ en ont", "négocier avec les conseillers", "décider quelle piste suivre après le Conseil"],
            sorties_possibles: ["vers s2_endeuilles_edran (suivre les Endeuillés)", "vers s2_dephasage_visible (explorer le déphasage)", "vers s2_conseil_sous_pression (revenir au Conseil plus tard avec des preuves)"],
            si_les_pj_bloquent: "Si les PJ n'y vontent pas, le Conseil se réunit sans eux. Mara ou Olane peut informer du résultat. La paralysie est visible et relance l'enquête.",
            conditions_sortie: [
              "Les PJ ont assisté au Conseil et identifié les blocages (Caldris, Champion, paralysie).",
              "OU les PJ ont présenté des preuves et influencé le vote.",
              "OU les PJ n'y vontent pas — le Conseil décide sans eux, la loi martiale se rapproche.",
            ],
            transition_defaut: "Le Conseil se sépare sans décision. Les conseillers quittent la salle. Dehors, la foule attend des réponses. Un crieur annonce : « Le Conseil délibère. Patience. » Que font les PJ ?",
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

          navigation: {
            indice_indispensable: "Les PJ doivent savoir que le rite d'Edran est un Edhrek-Murn inversé et que les textes viennent de la Réserve Interdite de l'Université.",
            consequence_si_manque: "Sans identifier le rite inversé, les PJ ne comprennent pas que le sceau est activement fissuré. Olane ou Thorgar peuvent l'expliquer plus tard. Sans identifier les textes, la piste de la Réserve Interdite est manquée.",
            pnj_alternatifs: ["thorgar_pretre_nain — peut identifier l'inversion du rite Edhrek-Murn", "maera_olane — peut identifier le tampon de la Réserve Interdite sur les textes"],
            front_si_ignore: "Le Sceau qui cède — le rite inversé fissure le sceau activement. Le Plan de Thade — les textes circulent avec l'accord de Thade.",
            scenes_alternatives: ["s2_dephasage_visible — si les PJ enquêtent sur les effets du rite au lieu de l'arrêter", "s2_reserve_interdite — si les PJ suivent directement la piste des textes"],
            sorties_jouables: [
              {
                condition: "Les PJ suivent la piste des textes vers la Réserve Interdite",
                sceneId: "s2_reserve_interdite",
                type: "indice_principal",
                moteur: "Les textes portent le tampon de la Réserve de Recherche Interdite. Thade a laissé les textes circuler.",
                accroche_mj: "« Les textes portent un tampon. Réserve de Recherche Interdite. Université. Si Thade a laissé ces textes circuler, c'est qu'il voulait qu'Edran les trouve. Ou qu'il s'en fichait. Les deux sont inquiétants. »",
                consequence_si_refus: "Sans suivre cette piste, les PJ manquent les 142 consultations de Thade et la théorie des seuils.",
              },
              {
                condition: "Les PJ veulent voir les effets du déphasage dans la ville",
                sceneId: "s2_dephasage_visible",
                type: "lieu",
                moteur: "Le rite fissure le sceau. Le déphasage s'étend. Les PJ peuvent le constater.",
                accroche_mj: "« Le rite est arrêté. Mais les fissures qu'il a créées ne se referment pas. Le déphasage s'étend. Allez voir. Les zones où les échos se répètent. »",
                consequence_si_refus: "Le déphasage s'étend sans que les PJ le constatent directement.",
              },
              {
                condition: "Les PJ veulent retourner au Conseil avec les textes comme preuve",
                sceneId: "s2_conseil_sous_pression",
                type: "pnj",
                moteur: "Les textes de la Réserve Interdite sont une preuve que l'Université est impliquée.",
                accroche_mj: "« Des textes volés de la Réserve Interdite. Si vous les apportez au Conseil, vous prouvez que l'Université est impliquée. Mais Olane doit les confirmer. »",
                consequence_si_refus: "Sans preuve au Conseil, la loi martiale reste sur la table.",
              },
              {
                condition: "Le rite continue (échec)",
                sceneId: "s2_dephasage_visible",
                type: "urgence_front",
                moteur: "Le rite fissure le sceau. Le déphasage s'aggrave.",
                accroche_mj: "Le rite continue. Vous avez échoué à convaincre Edran. La nuit suivante, le déphasage s'étend. De nouvelles zones. De nouveaux échos. Le front 'Le Sceau qui cède' avance.",
                consequence_si_refus: "Le déphasage s'étend. Le front avance d'un segment.",
              },
              {
                condition: "Les PJ veulent trouver Olane pour identifier les textes",
                sceneId: "s2_reserve_interdite",
                type: "echec",
                moteur: "Olane peut identifier le tampon et donner accès à la Réserve.",
                accroche_mj: "Les textes sont techniques. Olane peut les identifier. Et elle a accès à la Réserve Interdite. Si Thade a laissé ces textes circuler, il y a peut-être autre chose dans cette Réserve.",
                consequence_si_refus: "Sans Olane, les PJ n'ont pas accès à la Réserve Interdite ni à l'interprétation des textes.",
              },
              {
                condition: "Les PJ veulent explorer les autres symptômes du déphasage",
                sceneId: "s2_lettres_doublees",
                type: "libre",
                moteur: "Le déphasage affecte les communications et les horloges.",
                accroche_mj: "Le rite est arrêté. Mais le déphasage a d'autres symptômes. Des lettres qui arrivent en double. Des horloges décalées. Des routes qui bouclent. Allez voir.",
                consequence_si_refus: "Les PJ peuvent ignorer les symptômes, mais le déphasage s'étend.",
              },
            ],
            fallback_mj: "Les Endeuillés d'Edran Morn peuvent être trouvés via la Vieille Ville (rumeurs, Mara, ou exploration). Si les PJ n'arrêtent jamais le rite, Edran continue jusqu'à ce que le sceau cède davantage. Le rite peut être arrêté plus tard, mais chaque jour coûte un segment au front 'Le Sceau qui cède'. La piste des textes mène à la Réserve Interdite.",
            objectif_scene: "Identifier et arrêter le rite inversé d'Edran Morn qui attaque le sceau. Comprendre que les textes proviennent de l'Université.",
            pression: "Chaque jour sans intervention, le rite affaiblit le sceau d'un segment. Edran recrute de nouveaux adeptes. Les textes circulent.",
            actions_pj_attendues: ["trouver les Endeuillés (Vieille Ville, rumeurs, Mara)", "identifier le rite inversé", "arrêter Edran ou le rite (combat, négociation, contre-rite)", "récupérer les textes utilisés"],
            sorties_possibles: ["vers s2_dephasage_visible (le rite est arrêté, le déphasage persiste)", "vers s2_reserve_interdite (les textes mènent à la Réserve)", "vers s2_lettres_doublees (explorer les autres symptômes)"],
            si_les_pj_bloquent: "Les Endeuillés peuvent être trouvés via Mara, les rumeurs, ou l'exploration. Si le rite n'est jamais arrêté, le sceau cède davantage. Olane peut alerter. Le front 'Le Sceau qui cède' relance l'urgence.",
            conditions_sortie: [
              "Les PJ ont arrêté le rite d'Edran (combat, négociation, ou contre-rite).",
              "OU les PJ ont identifié les textes comme provenant de l'Université — piste vers la Réserve.",
              "OU les PJ dispersent les Endeuillés sans comprendre le rite — il reprendra avec un nouveau gourou.",
            ],
            transition_defaut: "Le rite s'interrompt ou les Endeuillés se dispersent. Les textes gisent au sol. L'air sent l'encens et la terre retournée. Un texte porte le cachet de l'Université. Que font les PJ ?",
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
          idsPnjImpliques: ["sealine_coren"],

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

          navigation: {
            indice_indispensable: "Les PJ doivent savoir que le déphasage vient du Puits de l'Abîme (le sceau) et qu'il s'étend.",
            consequence_si_manque: "Sans identifier la source, les PJ ne savent pas que le déphasage vient du sceau. Olane ou Thorgar peuvent l'expliquer. Les symptômes (échos, distances, absence d'odeur) restent des anomalies inexpliquées.",
            pnj_alternatifs: ["maera_olane — peut analyser les filaments planaires et confirmer la source", "thorgar_pretre_nain — sait que le Puits de l'Abîme est le point d'ancrage du sceau"],
            front_si_ignore: "Le Sceau qui cède — le déphasage s'étend sans enquête. La Cité sous pression — les zones touchées se multiplient.",
            scenes_alternatives: ["s2_lettres_doublees — si les PJ enquêtent sur les symptômes administratifs du déphasage", "s2_route_qui_boucle — si les PJ suivent les anomalies des routes"],
            sorties_jouables: [
              {
                condition: "Les PJ veulent documenter d'autres symptômes du déphasage",
                sceneId: "s2_lettres_doublees",
                type: "indice_principal",
                moteur: "Le déphasage affecte les communications. Lettres en double, horloges décalées.",
                accroche_mj: "Vous avez vu les filaments. Le déphasage a d'autres symptômes. Le bureau de poste signale des lettres en double. Les horloges de la ville sont décalées. Allez voir.",
                consequence_si_refus: "Les PJ peuvent ignorer les symptômes administratifs, mais ils manquent la preuve que le déphasage affecte toute la ville.",
              },
              {
                condition: "Les PJ veulent suivre la piste des textes vers la Réserve Interdite",
                sceneId: "s2_reserve_interdite",
                type: "lieu",
                moteur: "Si les PJ ont les textes d'Edran, la piste mène à la Réserve. Sinon, Olane peut y accéder.",
                accroche_mj: "Le déphasage vient du sceau. Mais quelqu'un a laissé les textes circuler. La Réserve Interdite de l'Université. Olane peut vous y emmener.",
                consequence_si_refus: "Sans la Réserve, les PJ manquent les 142 consultations de Thade et la théorie des seuils.",
              },
              {
                condition: "Les PJ veulent aller au Conseil avec la preuve du déphasage",
                sceneId: "s2_conseil_sous_pression",
                type: "pnj",
                moteur: "Les filaments planaires et les symptômes sont des preuves tangibles.",
                accroche_mj: "Vous avez vu les filaments. Vous avez ressenti l'absence d'odeur. Si vous l'apportez au Conseil, avec Olane pour confirmer, vous prouvez que le déphasage est réel et qu'il vient du sceau.",
                consequence_si_refus: "Sans preuve au Conseil, la loi martiale reste sur la table.",
              },
              {
                condition: "Les PJ ont tourné en rond dans la zone (échec)",
                sceneId: "s2_lettres_doublees",
                type: "echec",
                moteur: "Les PJ n'ont pas identifié la source. Ils peuvent chercher d'autres symptômes.",
                accroche_mj: "Vous êtes ressortis au point de départ. Le déphasage vous a joués. Mais les symptômes sont ailleurs aussi. Lettres en double. Horloges décalées. Routes qui bouclent. Peut-être plus lisibles ailleurs.",
                consequence_si_refus: "Les PJ peuvent abandonner l'enquête sur le déphasage, mais il s'étend.",
              },
              {
                condition: "Le front 'Le Sceau qui cède' est à 4+ segments",
                sceneId: "s2_conseil_sous_pression",
                type: "urgence_front",
                moteur: "Le déphasage est général. Le Conseil doit agir.",
                accroche_mj: "Les zones déphasées se multiplient. La ville entière est touchée. Le Conseil se réunit en urgence. Si vous n'y allez pas, la loi martiale est votée.",
                consequence_si_refus: "La loi martiale est votée. Les PJ perdent en liberté de mouvement.",
              },
              {
                condition: "Les PJ veulent explorer les routes qui bouclent",
                sceneId: "s2_route_qui_boucle",
                type: "libre",
                moteur: "Un autre symptôme du déphasage : les routes referment les distances.",
                accroche_mj: "Les routes de la ville ne sont plus fiables. Des messagers reviennent à leur point de départ. Si vous voulez voir par vous-mêmes, prenez la route du col.",
                consequence_si_refus: "Les PJ peuvent ignorer les routes, mais le déphasage les affectera tôt ou tard.",
              },
            ],
            fallback_mj: "Le Déphasage Visible est une scène d'investigation qui peut être déclenchée par les rumeurs, par Olane, ou par les PJ qui explorent la ville. Si les PJ n'y vontent jamais, le déphasage s'étend sans qu'ils comprennent sa source. Olane peut apporter l'information plus tard.",
            objectif_scene: "Comprendre que le déphasage vient du sceau et qu'il affecte la réalité de Valombre (froid, filaments planaires, distorsions).",
            pression: "Le déphasage s'étend chaque jour. Les filaments deviennent visibles. Les distorsions s'aggravent. Le front 'Le Sceau qui cède' avance sans intervention.",
            actions_pj_attendues: ["examiner les filaments planaires (Connaissances)", "mesurer l'étendue du déphasage en ville", "identifier la source (le sceau, la Tour)", "collecter des témoignages de citoyens"],
            sorties_possibles: ["vers s2_lettres_doublees (autres symptômes du déphasage)", "vers s2_reserve_interdite (la piste des textes)", "vers s2_conseil_sous_pression (preuves au Conseil)", "vers s2_route_qui_boucle (explorer les routes)"],
            si_les_pj_bloquent: "Le déphasage peut être découvert par les rumeurs, par Olane, ou par les PJ qui explorent. Si les PJ n'investiguent pas, le déphasage s'étend et devient impossible à ignorer.",
            conditions_sortie: [
              "Les PJ ont identifié le déphasage comme une filtration planaire liée au sceau.",
              "OU les PJ ont collecté assez de preuves pour alerter le Conseil.",
              "OU les PJ quittent la scène sans comprendre — Olane peut apporter l'information plus tard.",
            ],
            transition_defaut: "Les filaments vacillent dans l'air froid. Un citoyen passe, frissonne, et murmure : « Ça empire. » Les PJ ont vu le déphasage. Que font les PJ ?",
          },
        },

        {
          id: "s2_lettres_doublees",
          titre: "Les Lettres Doublées",
          type: "Investigation",
          resume_mj:
            "Les PJ remarquent que des lettres arrivent en double ou avec des formules anciennes. Une missive de Caldris contient des nouvelles vagues, des signatures attendues, des formules qui datent d'il y a six mois. Le greffier du Beffroi, Odran Bellec, a noté que les horloges ne correspondent plus aux envois. Yselle Vaurin, première syndique de la Guilde Marchande, reçoit des lettres de crédit qui reprennent des montants déjà payés.",
          idLieu: "conseil_valombre",
          idsPnj: ["odran_bellec"],
          idsPnjImpliques: ["yselle_vaurin", "envoye_caldris"],

          format_livre: {
            ambiance:
              "Le bureau du Beffroi est une petite salle pleine de registres, de cloches miniatures et de poids de laiton. Odran Bellec travaille debout derrière un pupitre encombré. La lumière vient d'une fenêtre étroite qui donne sur les halles. Des piles de lettres sont triées par date — mais certaines dates ne correspondent pas au contenu.",
            deroulement_narratif:
              "Odran montre ses registres aux PJ s'ils lui demandent ce qui ne va pas. Il a noté trois anomalies :\n\n1. Une lettre de Caldris datée du mois dernier contient des nouvelles qui correspondent à il y a six mois. Les formules, les signatures, les références aux routes — tout est ancien présenté comme récent.\n\n2. Deux lettres de la Guilde Marchande portent le même numéro de lot mais des dates différentes. Yselle Vaurin a reçu le premier exemplaire il y a trois semaines, le second hier. Le contenu est identique, mot pour mot.\n\n3. Les horloges du Beffroi indiquent toutes la même heure, mais les cloches des halles sonnent avec un décalage croissant. Odran ne sait plus quelle heure est la bonne.\n\nInvestigation DD 12 : les lettres ne sont pas des contrefaçons. Le papier, l'encre, les sceaux sont authentiques. Les lettres sont vraies — mais elles arrivent en retard ou en double, comme si le temps entre Valombre et l'extérieur se décalait.\n\nSi les PJ vont voir Yselle Vaurin (Guilde Marchande), elle confirme : les lettres de crédit arrivent en double, les montants se répètent, les maisons de commerce signalent des paiements reçus deux fois. Elle ne comprend pas. Elle soupçonne d'abord une fraude, mais les sceaux sont authentiques.\n\nSi les PJ ont déjà rencontré l'émissaire de Caldris, ils peuvent rapprocher les lettres doublées de son témoignage : les Pierres du Traité amènent les émissaires avec des souvenirs incomplets du trajet. Le déphasage ne coupe pas la communication — il la décale.",
            notes_mj:
              "Cette capsule peut se jouer quand les PJ passent par le Centre Civique ou les halles. Odran est accessible sans rendez-vous. Yselle exige un minimum de politesse. Aucune scène n'est bloquée si les PJ ignorent cette capsule — mais ils perdent un indice clé sur la nature du déphasage.",
          },

          texte_a_lire:
            "Odran Bellec vous reçoit dans son bureau du Beffroi, entre les registres et les poids de laiton. Il pose une lettre devant vous. « Celle-ci est datée du mois dernier. Les nouvelles qu'elle contient ont six mois. » Il en pose une seconde. « Deux exemplaires de la même lettre de crédit. Trois semaines d'écart. Même contenu, même sceau. »",

          objectif: "Comprendre pourquoi les lettres arrivent en double ou en retard.",

          contexte_mj: {
            situation:
              "Odran Bellec a remarqué que les lettres et les horloges ne correspondent plus. Yselle Vaurin reçoit des lettres de crédit en double. Le déphasage décale la communication entre Valombre et l'extérieur.",
            secrets: [
              "Les lettres ne sont pas des contrefaçons. Le papier, l'encre, les sceaux sont authentiques. Le déphasage décale le temps de transit.",
              "Yselle soupçonne une fraude, mais les sceaux sont vrais. Elle ne peut pas expliquer ce qui se passe.",
              "Les horloges du Beffroi et les cloches des halles se décalent progressivement. Odran ne sait plus quelle heure est exacte.",
            ],
            rappels: [
              "Si les PJ ont rencontré l'émissaire de Caldris, ils peuvent rapprocher les lettres doublées des Pierres du Traité : le trajet décale les souvenirs.",
              "Cette capsule est optionnelle. Elle ne bloque aucune scène obligatoire.",
            ],
          },

          defis: [
            { competence: "Investigation", dd: 12, reussite: "Les lettres sont authentiques mais décalées dans le temps. Le déphasage affecte la communication écrite.", echec: "Difficile de distinguer une contrefaçon d'un décalage temporel. Les sceaux sont authentiques, c'est tout ce qu'on peut dire." },
            { competence: "Renseignements", dd: 13, reussite: "Yselle Vaurin confirme : les lettres de crédit arrivent en double. Les maisons de commerce signalent des paiements reçus deux fois.", echec: "Yselle est occupée et renvoie les PJ. Elle parlera si on lui apporte une preuve." },
          ],

          indices: [
            { indice: "Lettre de Caldris décalée", localisation: "Beffroi, registre d'Odran", detection: "Lecture directe", information: "Une lettre datée du mois dernier avec un contenu vieux de six mois. Sceau authentique.", usage: "Comprendre que le déphasage décale le temps de transit des lettres." },
            { indice: "Lettre de crédit en double", localisation: "Guilde Marchande, bureau de Yselle", detection: "Renseignements DD 13", information: "Deux exemplaires identiques, trois semaines d'écart. Même sceau, même contenu.", usage: "Confirmer que le déphasage affecte les communications commerciales." },
          ],

          guide_mj: {
            intention: "Montrer le déphasage à travers des objets du quotidien : des lettres, des horloges, des paiements. Le mystère devient concret.",
            mise_en_place: "Bureau du Beffroi. Registres. Lettres triées. Odran debout derrière son pupitre.",
            deroulement: ["Les PJ rencontrent Odran au Beffroi.", "Il montre les lettres décalées et les horloges qui ne synchronisent plus.", "Les PJ peuvent aller voir Yselle pour confirmer.", "Ils rapprochent les lettres du témoignage de l'émissaire de Caldris."],
            actions_utiles: ["Lire les registres d'Odran.", "Aller voir Yselle Vaurin.", "Comparer avec le témoignage de l'émissaire."],
            fronts_heritiers: ["Couche 'Le Déphasage' — étape 2 de l'horloge de révélation : les lettres se répètent."],
            jeu_des_pnj: "Odran est factuel et inquiet. Yselle est pragmatique et agacée. Aucun ne comprend ce qui se passe.",
            escalade: "Aucune. La capsule est une scène d'investigation pure.",
            sortie: "Les PJ ont compris que le déphasage décale les communications. Ils peuvent agir ou ignorer.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les lettres sont authentiques mais décalées. Le déphasage affecte le temps de transit.",
            ne_pas_bloquer_sur_un_jet: "Odran montre les lettres sans jet. Yselle parle si les PJ sont polis.",
            question_dramatique: "Que se passe-t-il quand les lettres de votre ville arrivent avec le mauvais temps ?",
          },

          transitions: {
            resume: "Les PJ ont vu les lettres doublées et les horloges décalées. Le déphasage n'est plus un phénomène visible — c'est une anomalie administrative.",
            reussite: "Les PJ ont identifié le décalage temporel. Ils savent que le déphasage affecte les communications.",
            echec: "Les PJ ont noté les anomalies sans les rattacher au déphasage. L'indice est là, mais la conclusion leur échappe.",
          },

          navigation: {
            indice_indispensable: "Les PJ doivent comprendre que le déphasage affecte le temps de transit des lettres et les horloges.",
            consequence_si_manque: "Sans rattacher les anomalies au déphasage, les PJ traitent les lettres doublées comme un problème administratif. Olane ou Odran peuvent faire le lien plus tard.",
            pnj_alternatifs: ["maera_olane — peut analyser le décalage temporel et le rattacher au déphasage", "odran_bellec — le greffier du Beffroi a noté les anomalies d'horloges"],
            front_si_ignore: "Le Sceau qui cède — le déphasage s'étend. La Cité sous pression — les communications sont perturbées.",
            scenes_alternatives: ["s2_route_qui_boucle — si les PJ suivent les anomalies des routes au lieu des lettres", "s2_entrepots_pleins — si les PJ suivent la piste économique"],
            sorties_jouables: [
              {
                condition: "Les PJ veulent suivre la piste des textes vers la Réserve Interdite",
                sceneId: "s2_reserve_interdite",
                type: "indice_principal",
                moteur: "Les lettres doublées confirment que le déphasage s'aggrave. La source est le sceau. La Réserve Interdite contient les recherches de Thade.",
                accroche_mj: "Les lettres arrivent en double. Les horloges sont décalées. Le déphasage affecte le temps lui-même. Si vous voulez comprendre pourquoi, il faut aller à la source. La Réserve Interdite. Olane peut vous y emmener.",
                consequence_si_refus: "Sans la Réserve, les PJ manquent les 142 consultations de Thade et la théorie des seuils.",
              },
              {
                condition: "Les PJ veulent voir les routes qui bouclent",
                sceneId: "s2_route_qui_boucle",
                type: "lieu",
                moteur: "Un autre symptôme du déphasage : les routes ramènent à Valombre.",
                accroche_mj: "Les lettres doublées, c'est le temps. Mais l'espace aussi est touché. Un messager est revenu au point de départ après une journée de route. Allez voir.",
                consequence_si_refus: "Les PJ peuvent ignorer les routes, mais le déphasage les affectera.",
              },
              {
                condition: "Les PJ veulent aller au Conseil avec les preuves administratives",
                sceneId: "s2_conseil_sous_pression",
                type: "pnj",
                moteur: "Les lettres doublées et les horloges décalées sont des preuves tangibles du déphasage.",
                accroche_mj: "Odran a les registres. Yselle a les lettres de crédit. Si vous apportez ça au Conseil, vous prouvez que le déphasage affecte l'économie. Avel ne pourra plus l'ignorer.",
                consequence_si_refus: "Sans preuve au Conseil, la loi martiale reste sur la table.",
              },
              {
                condition: "Les PJ veulent suivre la piste économique",
                sceneId: "s2_entrepots_pleins",
                type: "indice_principal",
                moteur: "Les lettres de crédit doublées mènent à Yselle Vaurin et aux entrepôts.",
                accroche_mj: "Les lettres de crédit arrivent en double. Les mêmes montants payés deux fois. Yselle Vaurin, la première syndique, doit savoir. Les entrepôts de la Guilde Marchande.",
                consequence_si_refus: "Sans suivre la piste économique, les PJ manquent la preuve que le déphasage affecte l'économie réelle.",
              },
              {
                condition: "Les PJ n'ont pas rattaché les anomalies au déphasage (échec)",
                sceneId: "s2_route_qui_boucle",
                type: "echec",
                moteur: "Les PJ peuvent voir d'autres symptômes pour comprendre.",
                accroche_mj: "Vous avez noté les anomalies. Mais vous ne voyez pas le lien. Peut-être que les routes vous l'apprendront. Un messager est revenu au point de départ. La route du col. Allez voir.",
                consequence_si_refus: "Les PJ peuvent abandonner l'enquête, mais le déphasage s'étend.",
              },
              {
                condition: "Le front 'Le Sceau qui cède' est à 4+ segments",
                sceneId: "s2_conseil_sous_pression",
                type: "urgence_front",
                moteur: "Le déphasage affecte les communications. Le Conseil doit agir.",
                accroche_mj: "Les lettres arrivent en double. Les horloges sont décalées. L'économie suit. Le Conseil se réunit à nouveau. Si vous n'y allez pas, la loi martiale est votée.",
                consequence_si_refus: "La loi martiale est votée. Les PJ perdent en liberté de mouvement.",
              },
            ],
            fallback_mj: "Les Lettres Doublées peuvent être découvertes par Odran Bellec (greffier du Beffroi), par Yselle Vaurin (syndique de la Guilde), ou par les PJ qui remarquent les anomalies. Si les PJ n'explorent jamais cette scène, ils manquent la preuve administrative du déphasage. Olane peut apporter l'information plus tard. La piste économique mène aux Entrepôts Pleins.",
            objectif_scene: "Découvrir que le déphasage affecte le temps de transit des lettres et les horloges. Collecter la preuve administrative du déphasage.",
            pression: "Les communications se dégradent. Les horloges se décalent. Les lettres de crédit doublées créent des tensions économiques. Le déphasage s'étend pendant l'enquête.",
            actions_pj_attendues: ["aller au Beffroi et parler à Odran Bellec", "aller à la Guilde Marchande et parler à Yselle Vaurin", "comparer les lettres doublées et les horloges décalées", "rattacher les anomalies au déphasage"],
            sorties_possibles: ["vers s2_reserve_interdite (la piste des textes)", "vers s2_route_qui_boucle (les routes qui bouclent)", "vers s2_conseil_sous_pression (preuves administratives au Conseil)", "vers s2_entrepots_pleins (la piste économique)"],
            si_les_pj_bloquent: "Découvert par Odran Bellec, Yselle Vaurin, ou les PJ qui remarquent les anomalies. Si les PJ n'explorent pas, Olane peut apporter l'information. La piste économique mène aux Entrepôts Pleins.",
            conditions_sortie: [
              "Les PJ ont rattaché les lettres doublées et les horloges décalées au déphasage.",
              "OU les PJ ont collecté les preuves administratives (Odran, Yselle).",
              "OU les PJ n'ont pas rattaché au déphasage — la piste économique mène aux Entrepôts.",
            ],
            transition_defaut: "Odran Bellec referme son registre. « Les horloges ne mentent pas. Quelque chose ne va pas. » Les PJ ont les preuves administratives. Que font les PJ ?",
          },
        },

        {
          id: "s2_route_qui_boucle",
          titre: "La Route qui Boucle",
          type: "Horreur",
          resume_mj:
            "Un messager ou un marchand revient à Valombre après avoir roulé toute la journée. Il jure avoir pris la route du col, suivi les bornes, mais il est revenu au point de départ. Les bornes sont en place, la route semble normale, mais elle ramène à Valombre. Odran Bellec a noté que les cloches du Beffroi ont sonné deux fois pour le même convoi.",
          idLieu: "vieille_ville_ruelles",
          idsPnj: ["odran_bellec"],
          idsPnjImpliques: ["envoye_caldris"],

          format_livre: {
            ambiance:
              "La porte de la Vieille Ville, là où la route du col rejoint les premiers quartiers. Un chariot est arrêté sur le bas-côté. Le mulet broute l'herbe sans lever la tête. Le messager, assis sur le marchepied, se tient la tête entre les mains. Il n'est pas blessé. Il est épuisé. Il a roulé toute la journée et il est revenu au point de départ.",
            deroulement_narratif:
              "Le messager raconte : il a pris la route du col à l'aube. Il a suivi les bornes. Les bornes indiquaient la bonne direction. Le paysage était normal — champs, bosquets, un pont, un poste de route. Mais au bout de six heures, il a reconnu le mur de la Vieille Ville. Il était de retour.\n\nSi les PJ examinent la route (Investigation DD 12), les bornes sont en place, les ornières sont fraîches, mais les empreintes du chariot font une boucle qui revient sur elle-même. La route ne mène nulle part — elle ramène à Valombre.\n\nSi les PJ vont voir Odran au Beffroi, il confirme : les cloches ont sonné deux fois pour le même convoi. La première fois à l'aube, la seconde à midi. Le messager est parti et revenu sans s'en rendre compte.\n\nSi les PJ ont déjà rencontré l'émissaire de Caldris, ils peuvent rapprocher cette boucle de son témoignage : les Pierres du Traité amènent les émissaires avec des souvenirs incomplets du trajet. Le déphasage ne ferme pas les routes — il les referme sur Valombre.\n\nPerception DD 14 : l'air de la route sent le foin et la poussière, mais sans la fraîcheur du col. C'est l'odeur de la Vieille Ville, pas de la campagne. Le déphasage ne déplace pas la route — il la remplace par une copie qui ramène à la ville.",
            notes_mj:
              "Cette capsule peut se jouer quand les PJ passent par la porte de la Vieille Ville ou entendent parler d'un messager perdu. Le messager n'est pas un PNJ nommé — c'est un témoin occasionnel. La scène ne bloque rien, mais elle donne aux PJ une expérience concrète du déphasage.",
          },

          texte_a_lire:
            "Un chariot est arrêté à la porte de la Vieille Ville. Le messager est assis sur le marchepied, la tête entre les mains. « J'ai pris la route du col à l'aube. J'ai suivi les bornes. Six heures de route. Et je suis revenu ici. »",

          objectif: "Comprendre pourquoi la route ramène à Valombre.",

          contexte_mj: {
            situation:
              "Un messager a pris la route du col et est revenu à Valombre après six heures de route. Les bornes sont en place, la route semble normale, mais elle boucle. Odran a noté que les cloches ont sonné deux fois pour le même convoi.",
            secrets: [
              "La route ne mène nulle part — elle ramène à Valombre. Le déphasage referme les routes sur la ville.",
              "L'air de la route sent la Vieille Ville, pas la campagne. Le déphasage remplace la route par une copie.",
              "Les bornes et les ornières sont normales, mais les empreintes font une boucle qui revient sur elle-même.",
            ],
            rappels: [
              "Si les PJ ont rencontré l'émissaire de Caldris, ils peuvent rapprocher cette boucle des Pierres du Traité.",
              "Cette capsule est optionnelle. Elle ne bloque aucune scène obligatoire.",
            ],
          },

          defis: [
            { competence: "Investigation", dd: 12, reussite: "Les ornières du chariot font une boucle qui revient sur elle-même. La route ramène à Valombre.", echec: "Les ornières sont fraîches mais leur direction est confuse. Difficile de dire si c'est une boucle ou un demi-tour." },
            { competence: "Perception", dd: 14, reussite: "L'air de la route sent le foin et la poussière de la Vieille Ville, pas la fraîcheur du col. Le déphasage remplace la route par une copie.", echec: "L'air semble normal. Rien de particulier à signaler." },
          ],

          indices: [
            { indice: "Les ornières en boucle", localisation: "Route du col, après la porte", detection: "Investigation DD 12", information: "Les empreintes du chariot font une boucle qui revient au point de départ.", usage: "Comprendre que le déphasage referme les routes sur Valombre." },
            { indice: "L'odeur de la route", localisation: "Route du col", detection: "Perception DD 14", information: "L'air sent la Vieille Ville, pas la campagne. La route est une copie.", usage: "Comprendre que le déphasage remplace le paysage extérieur par une version qui ramène à la ville." },
          ],

          guide_mj: {
            intention: "Faire vivre le déphasage comme une expérience corporelle : on prend la route, on roule, on revient. La ville ne laisse pas partir.",
            mise_en_place: "Porte de la Vieille Ville. Chariot arrêté. Messager épuisé. Mulet indifférent.",
            deroulement: ["Les PJ trouvent le messager à la porte.", "Il raconte sa boucle.", "Les PJ examinent la route et les ornières.", "Ils vont voir Odran pour confirmer avec les cloches.", "Ils rapprochent du témoignage de l'émissaire."],
            actions_utiles: ["Examiner les ornières.", "Sentir l'air de la route.", "Aller voir Odran au Beffroi.", "Comparer avec le témoignage de l'émissaire."],
            fronts_heritiers: ["Couche 'Le Déphasage' — étape 4 de l'horloge de révélation : les routes ramènent au même point."],
            jeu_des_pnj: "Le messager est épuisé et confus. Odran est factuel. L'émissaire, si les PJ le croisent, confirme que le trajet par les Pierres du Traité est lui aussi décalé.",
            escalade: "Aucune. La capsule est une scène d'expérience et d'investigation.",
            sortie: "Les PJ ont vécu le déphasage dans leur corps. La ville ne laisse pas sortir.",
          },

          reperes_de_jeu: {
            indice_indispensable: "La route ramène à Valombre. Le déphasage referme les routes sur la ville.",
            ne_pas_bloquer_sur_un_jet: "Le messager raconte sa boucle sans jet. Les ornières sont visibles.",
            question_dramatique: "Que faites-vous quand la route de votre ville ne mène plus nulle part ?",
          },

          transitions: {
            resume: "Les PJ ont vu la route boucler. Le déphasage n'est plus une rumeur — c'est un fait vécu.",
            reussite: "Les PJ ont identifié la boucle et l'odeur décalée. Ils savent que le déphasage referme les routes.",
            echec: "Les PJ ont noté l'anomalie sans la rattacher au déphasage. Le messager est reparti, la route est toujours là.",
          },

          navigation: {
            indice_indispensable: "Les PJ doivent comprendre que le déphasage referme les routes sur Valombre et que la ville est en train d'être coupée du reste du monde.",
            consequence_si_manque: "Sans comprendre que les routes bouclent, les PJ ne savent pas que Valombre est en train d'être isolée. Olane ou Odran peuvent l'expliquer. La crise économique s'aggrave sans intervention.",
            pnj_alternatifs: ["odran_bellec — a noté que les cloches ont sonné deux fois pour le même convoi", "maera_olane — peut analyser la boucle spatiale et la rattacher au déphasage"],
            front_si_ignore: "Le Sceau qui cède — le déphasage s'étend. La Cité sous pression — Valombre est isolée. Les convois ne partent plus.",
            scenes_alternatives: ["s2_lettres_doublees — si les PJ enquêtent sur les anomalies temporelles au lieu des routes", "s2_entrepots_pleins — si les PJ suivent la piste économique des convois bloqués"],
            sorties_jouables: [
              {
                condition: "Les PJ veulent suivre la piste des convois bloqués",
                sceneId: "s2_entrepots_pleins",
                type: "indice_principal",
                moteur: "Les routes bouclent. Les convois ne partent pas. Les entrepôts débordent.",
                accroche_mj: "La route ramène à Valombre. Les convois ne partent plus. Les entrepôts de la Guilde Marchande doivent être pleins. Yselle Vaurin sait quelque chose.",
                consequence_si_refus: "Sans suivre la piste économique, les PJ manquent la preuve que le déphasage affecte l'économie réelle.",
              },
              {
                condition: "Les PJ veulent aller au Conseil avec la preuve des routes bouclantes",
                sceneId: "s2_conseil_sous_pression",
                type: "pnj",
                moteur: "Les routes qui bouclent sont une preuve tangible que Valombre est isolée.",
                accroche_mj: "Un messager a roulé toute la journée et est revenu au point de départ. Si vous apportez ce témoignage au Conseil, vous prouvez que Valombre est coupée du reste du monde.",
                consequence_si_refus: "Sans preuve au Conseil, la loi martiale reste sur la table.",
              },
              {
                condition: "Les PJ veulent suivre la piste des textes vers la Réserve Interdite",
                sceneId: "s2_reserve_interdite",
                type: "lieu",
                moteur: "Le déphasage referme les routes. La source est le sceau. La Réserve contient les recherches de Thade.",
                accroche_mj: "Les routes bouclent. Les lettres doublent. Le déphasage s'aggrave. Si vous voulez comprendre pourquoi, il faut aller à la source. La Réserve Interdite. Olane peut vous y emmener.",
                consequence_si_refus: "Sans la Réserve, les PJ manquent les recherches de Thade sur les seuils.",
              },
              {
                condition: "Les PJ n'ont pas rattaché la boucle au déphasage (échec)",
                sceneId: "s2_lettres_doublees",
                type: "echec",
                moteur: "Les PJ peuvent voir d'autres symptômes pour comprendre.",
                accroche_mj: "Vous avez vu la route boucler. Mais vous ne voyez pas le lien avec le déphasage. Peut-être que les lettres doublées vous l'apprendront. Odran Bellec, au Beffroi, a noté des anomalies d'horloges.",
                consequence_si_refus: "Les PJ peuvent abandonner l'enquête, mais le déphasage s'étend.",
              },
              {
                condition: "Le front 'Le Sceau qui cède' est à 4+ segments",
                sceneId: "s2_conseil_sous_pression",
                type: "urgence_front",
                moteur: "Les routes bouclent. Valombre est isolée. Le Conseil doit agir.",
                accroche_mj: "Les routes ramènent à Valombre. Les convois ne partent plus. La ville est coupée. Le Conseil se réunit à nouveau. Si vous n'y allez pas, la loi martiale est votée.",
                consequence_si_refus: "La loi martiale est votée. Les PJ perdent en liberté de mouvement.",
              },
              {
                condition: "Les PJ veulent explorer les lettres doublées",
                sceneId: "s2_lettres_doublees",
                type: "libre",
                moteur: "Un autre symptôme du déphasage : les communications temporelles.",
                accroche_mj: "Les routes bouclent. Mais le temps aussi est touché. Des lettres arrivent en double. Les horloges sont décalées. Odran Bellec, au Beffroi, a les registres.",
                consequence_si_refus: "Les PJ peuvent ignorer les lettres, mais le déphasage affecte déjà les communications.",
              },
            ],
            fallback_mj: "La Route qui Boucle peut être découverte par un messager de retour, par Odran Bellec (anomalies d'horloges), ou par les PJ qui prennent la route. Si les PJ n'explorent jamais cette scène, ils manquent la preuve spatiale du déphasage. La piste économique mène aux Entrepôts Pleins.",
            objectif_scene: "Découvrir que le déphasage referme les routes sur Valombre. Les messagers reviennent à leur point de départ. Les distances se contractent.",
            pression: "Valombre s'isole. Les convois ne partent pas. Les messagers reviennent. Le déphasage s'étend. Le front 'Le Sceau qui cède' avance.",
            actions_pj_attendues: ["parler à un messager de retour", "prendre la route et expérimenter la boucle", "aller au Beffroi (Odran Bellec)", "rattacher l'anomalie au déphasage"],
            sorties_possibles: ["vers s2_entrepots_pleins (les convois ne partent pas)", "vers s2_conseil_sous_pression (preuve que Valombre est isolée)", "vers s2_reserve_interdite (la piste des textes)", "vers s2_lettres_doublees (les lettres doublées)"],
            si_les_pj_bloquent: "Découvert par un messager de retour, par Odran Bellec, ou par les PJ qui prennent la route. Si les PJ n'explorent pas, la piste économique mène aux Entrepôts Pleins.",
            conditions_sortie: [
              "Les PJ ont expérimenté ou documenté la boucle des routes.",
              "OU les PJ ont rattaché l'anomalie au déphasage.",
              "OU les PJ n'ont pas rattaché au déphasage — la piste économique mène aux Entrepôts.",
            ],
            transition_defaut: "La route ramène les PJ à Valombre. Le même panneau. Le même carrefour. Le déphasage est réel. Que font les PJ ?",
          },
        },

        {
          id: "s2_entrepots_pleins",
          titre: "Les Entrepôts Pleins",
          type: "Investigation",
          resume_mj:
            "Les entrepôts de la Guilde Marchande sont pleins. Le minerai continue d'arriver des Terrasses, mais les convois ne partent plus. Les lettres de crédit sont payées, les contrats sont honorés, mais les cargaisons restent. Yselle Vaurin tente de maintenir les apparences. Les comptables de la Guilde notent que les mêmes maisons d'achat passent commande pour des convois qui ne quittent jamais la ville.",
          idLieu: "conseil_valombre",
          idsPnj: ["yselle_vaurin"],
          idsPnjImpliques: ["odran_bellec"],

          format_livre: {
            ambiance:
              "Les entrepôts de la Guilde Marchande bordent le quai de chargement. Des caisses de minerai sont empilées jusqu'au plafond. Des chariots attendent dans l'allée centrale, chargés et couverts. L'air sent la poussière de fer et l'huile de charrette. Un comptable coche des registres sur un pupitre de fortune, entre deux piles de caisses.",
            deroulement_narratif:
              "Yselle Vaurin reçoit les PJ si ils se présentent comme des enquêteurs ou des alliés du Conseil. Elle montre les entrepôts : trois bâtiments pleins, un quatrième qui déborde. Les convois sont prêts, les contrats sont signés, les lettres de crédit sont payées. Mais les transporteurs reviennent sans avoir livré. Ils ne le disent pas — ils disent que les routes sont instables, que Caldris inspecte davantage, que le Conseil négocie.\n\nInvestigation DD 12 : les registres de la Guilde montrent que les mêmes maisons d'achat passent commande chaque mois pour les mêmes quantités. Les paiements arrivent, les contrats sont renouvelés, mais aucun accusé de réception extérieur n'est enregistré depuis trois mois. Les cargaisons sortent et reviennent, ou ne sortent pas du tout.\n\nSi les PJ ont vu Odran au Beffroi (capsule « Les Lettres Doublées »), ils peuvent rapprocher les lettres de crédit en double des entrepôts pleins : les paiements arrivent en double parce que le temps de transit se décale. Les cargaisons ne partent pas parce que la route ne mène nulle part.\n\nYselle ne dit pas qu'elle comprend. Elle dit qu'elle gère. Elle a des stocks, des contrats, des salariés. Elle ne peut pas annoncer que les convois ne partent plus — ce serait la panique. Elle achète du temps. Elle dit aux marchands que les routes sont en réparation, que Caldris négocie, que le Conseil prépare un accord. Elle ment pour maintenir l'ordre.\n\nSi les PJ la pressent (Intimidation DD 14 ou Persuasion DD 15), elle admet : « Les convois ne partent pas. Je ne sais pas pourquoi. Les routes semblent ouvertes, mais les chariots reviennent. Je ne peux pas le dire publiquement. La Guilde s'effondrerait en une journée. »",
            notes_mj:
              "Cette capsule peut se jouer quand les PJ passent par le Centre Civique ou enquêtent sur l'économie. Yselle est accessible si les PJ ont un contact institutionnel. La scène ne bloque rien, mais elle montre que le déphasage a des conséquences économiques concrètes.",
          },

          texte_a_lire:
            "Les entrepôts de la Guilde Marchande sont pleins. Des caisses de minerai empilées jusqu'au plafond. Des chariots chargés qui attendent dans l'allée. Yselle Vaurin vous regarde, les mains croisées sur son registre. « Les convois sont prêts. Les contrats sont signés. Mais les transporteurs reviennent. Ils ne le disent pas comme ça — ils disent que les routes sont instables. »",

          objectif: "Comprendre pourquoi les convois ne partent plus et ce que cache Yselle.",

          contexte_mj: {
            situation:
              "Les entrepôts de la Guilde Marchande sont pleins. Le minerai arrive des Terrasses, mais les convois vers l'extérieur ne partent pas. Yselle maintient les apparences pour éviter la panique.",
            secrets: [
              "Les convois ne partent pas parce que les routes ramènent à Valombre. Le déphasage referme les routes sur la ville.",
              "Les paiements arrivent en double parce que le temps de transit se décale. Les lettres de crédit se répètent.",
              "Yselle sait que les convois ne partent pas, mais elle ne peut pas le dire publiquement. La Guilde s'effondrerait.",
            ],
            rappels: [
              "Si les PJ ont vu Odran (lettres doublées) ou vécu la route qui boucle, ils peuvent rapprocher les entrepôts pleins de ces indices.",
              "Cette capsule est optionnelle. Elle ne bloque aucune scène obligatoire.",
            ],
          },

          defis: [
            { competence: "Investigation", dd: 12, reussite: "Les registres montrent que les mêmes maisons d'achat passent commande chaque mois, mais aucun accusé de réception extérieur n'est enregistré depuis trois mois.", echec: "Les registres sont volumineux et désorganisés. Difficile de voir la tendance." },
            { competence: "Persuasion", dd: 15, reussite: "Yselle admet que les convois ne partent pas. Elle ne sait pas pourquoi. Elle ment pour maintenir l'ordre.", echec: "Yselle reste sur sa version officielle : les routes sont en réparation, Caldris négocie." },
          ],

          indices: [
            { indice: "Registres de la Guilde", localisation: "Entrepôts, bureau de Yselle", detection: "Investigation DD 12", information: "Les mêmes commandes chaque mois, aucun accusé de réception extérieur depuis trois mois.", usage: "Comprendre que les convois ne partent pas et que la Guilde le cache." },
            { indice: "L'aveu de Yselle", localisation: "Entrepôts, après pression", detection: "Persuasion DD 15 ou Intimidation DD 14", information: "Les convois reviennent. Les routes semblent ouvertes mais ramènent à Valombre. Yselle ment pour éviter la panique.", usage: "Confirmer que le déphasage a des conséquences économiques et que les institutions le cachent." },
          ],

          guide_mj: {
            intention: "Montrer le déphasage à travers ses conséquences économiques. La ville produit, mais ne peut plus exporter. Les institutions mentent pour maintenir l'ordre.",
            mise_en_place: "Entrepôts pleins. Chariots immobiles. Yselle avec ses registres. Comptables qui cochent.",
            deroulement: ["Les PJ arrivent aux entrepôts.", "Yselle montre les stocks et la version officielle.", "Les PJ examinent les registres.", "Ils pressent Yselle.", "Elle avoue : les convois ne partent pas."],
            actions_utiles: ["Lire les registres.", "Presser Yselle.", "Comparer avec les lettres doublées et la route qui boucle."],
            fronts_heritiers: ["Couche 'Le Déphasage' — étape 3 de l'horloge de révélation : les stocks s'accumulent."],
            jeu_des_pnj: "Yselle est contrôlée, pragmatique, fatiguée. Elle ne panique pas — elle gère. Mais elle sait que ça ne durera pas.",
            escalade: "Aucune. La capsule est une scène d'investigation et de négociation.",
            sortie: "Les PJ ont vu les entrepôts pleins et l'aveu de Yselle. Le déphasage a un coût économique que les institutions cachent.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les convois ne partent pas. Les institutions le savent et le cachent.",
            ne_pas_bloquer_sur_un_jet: "Les entrepôts pleins sont visibles sans jet. Yselle parle si les PJ sont polis.",
            question_dramatique: "Que se passe-t-il quand votre ville produit pour un extérieur qui ne reçoit plus ?",
          },

          transitions: {
            resume: "Les PJ ont vu les entrepôts pleins et l'aveu de Yselle. Le déphasage n'est plus un mystère cosmique — c'est une crise économique que les institutions cachent.",
            reussite: "Les PJ ont compris que les convois ne partent pas et que Yselle le sait. Ils peuvent utiliser cette information.",
            echec: "Les PJ ont vu les stocks sans obtenir l'aveu de Yselle. L'anomalie est là, mais sa cause reste officiellement inexpliquée.",
          },

          navigation: {
            indice_indispensable: "Les PJ doivent savoir que les convois ne partent pas et que les institutions le cachent.",
            consequence_si_manque: "Sans comprendre la crise économique, les PJ ne savent pas que le déphasage a des conséquences matérielles. Yselle ou Odran peuvent les informer. Le Conseil peut être forcé d'agir par la pression économique.",
            pnj_alternatifs: ["yselle_vaurin — première syndique, sait que les convois ne partent pas", "odran_bellec — a noté les anomalies dans les registres d'expédition"],
            front_si_ignore: "La Cité sous pression — l'économie s'effondre. Les institutions cachent la crise. Le Sceau qui cède — le déphasage s'aggrave.",
            scenes_alternatives: ["s2_conseil_sous_pression — si les PJ vont directement au Conseil avec les preuves économiques", "s2_reserve_interdite — si les PJ suivent la piste de la source du déphasage"],
            sorties_jouables: [
              {
                condition: "Les PJ veulent aller au Conseil avec les preuves économiques",
                sceneId: "s2_conseil_sous_pression",
                type: "indice_principal",
                moteur: "Les entrepôts pleins et l'aveu de Yselle sont des preuves que le déphasage a des conséquences économiques.",
                accroche_mj: "Yselle a avoué que les convois ne partent pas. Les entrepôts débordent. Si vous apportez ça au Conseil, vous prouvez que la crise est réelle et matérielle. Avel ne pourra plus renvoyer en commission.",
                consequence_si_refus: "Sans preuve économique au Conseil, la loi martiale reste sur la table.",
              },
              {
                condition: "Les PJ veulent suivre la piste des textes vers la Réserve Interdite",
                sceneId: "s2_reserve_interdite",
                type: "lieu",
                moteur: "Le déphasage a des conséquences économiques. La source est le sceau. La Réserve contient les recherches de Thade.",
                accroche_mj: "Les convois ne partent pas. Les routes bouclent. Les lettres doublent. Tout vient du sceau. Si vous voulez comprendre pourquoi, la Réserve Interdite. Olane peut vous y emmener.",
                consequence_si_refus: "Sans la Réserve, les PJ manquent les recherches de Thade sur les seuils.",
              },
              {
                condition: "Les PJ veulent confronter le Champion avec les preuves économiques",
                sceneId: "s2_conseil_sous_pression",
                type: "pnj",
                moteur: "Le Champion exploite la crise. Les preuves économiques peuvent le discréditer ou le détourner.",
                accroche_mj: "Le Champion dit que les nains sont responsables. Mais les convois ne partent pas. Les routes bouclent. Ce n'est pas les nains — c'est le déphasage. Si vous lui apportez les preuves, il doit changer de cible.",
                consequence_si_refus: "Si les PJ ne détournent pas le Champion, il continue à viser les nains. Les Terrasses se ferment.",
              },
              {
                condition: "Les PJ n'ont pas obtenu l'aveu de Yselle (échec)",
                sceneId: "s2_conseil_sous_pression",
                type: "echec",
                moteur: "Les PJ ont les stocks mais pas l'aveu. Le Conseil peut enquêter.",
                accroche_mj: "Yselle n'a pas parlé. Mais les entrepôts sont pleins. Les registres montrent les anomalies. Si vous apportez les registres au Conseil, Avel devra enquêter.",
                consequence_si_refus: "Sans l'aveu de Yselle ni les registres, le Conseil n'a pas de preuve économique.",
              },
              {
                condition: "Le front 'Le Sceau qui cède' est à 4+ segments",
                sceneId: "s2_conseil_sous_pression",
                type: "urgence_front",
                moteur: "L'économie s'effondre. Le Conseil doit agir.",
                accroche_mj: "Les entrepôts débordent. Les routes bouclent. Les lettres doublent. L'économie s'effondre. Le Conseil se réunit en urgence. Si vous n'y allez pas, la loi martiale est votée.",
                consequence_si_refus: "La loi martiale est votée. Les PJ perdent en liberté de mouvement.",
              },
              {
                condition: "Les PJ veulent explorer les routes qui bouclent",
                sceneId: "s2_route_qui_boucle",
                type: "libre",
                moteur: "Les PJ veulent voir les routes par eux-mêmes.",
                accroche_mj: "Yselle dit que les convois ne partent pas. Mais pourquoi ? Les routes peut-être. Un messager est revenu au point de départ. La route du col. Allez voir.",
                consequence_si_refus: "Les PJ peuvent ignorer les routes, mais le déphasage les affecte.",
              },
            ],
            fallback_mj: "Les Entrepôts Pleins peuvent être découverts par Yselle Vaurin (syndique de la Guilde), par Odran Bellec (registres d'expédition), ou par les PJ qui explorent les quais. Si les PJ n'explorent jamais cette scène, ils manquent la preuve économique du déphasage. La piste mène au Conseil sous Pression.",
            objectif_scene: "Découvrir que les convois ne partent pas et que les institutions le cachent. Les entrepôts sont pleins, les quais sont bloqués.",
            pression: "L'économie s'effondre. Les marchands paniquent. Les institutions cachent la crise. Le déphasage s'étend. Le front 'Le Sceau qui cède' avance.",
            actions_pj_attendues: ["aller aux quais et examiner les entrepôts", "parler à Yselle Vaurin (Guilde Marchande)", "parler à Odran Bellec (registres d'expédition)", "obtenir l'aveu que les convois ne partent pas"],
            sorties_possibles: ["vers s2_conseil_sous_pression (preuves économiques au Conseil)", "vers s2_reserve_interdite (la piste des textes)", "vers s2_route_qui_boucle (les routes qui bouclent)"],
            si_les_pj_bloquent: "Découvert par Yselle Vaurin, par Odran Bellec, ou par les PJ qui explorent les quais. Si les PJ n'explorent pas, la piste mène au Conseil sous Pression.",
            conditions_sortie: [
              "Les PJ ont documenté que les convois ne partent pas et que les institutions le cachent.",
              "OU les PJ ont l'aveu de Yselle ou les registres d'Odran.",
              "OU les PJ n'explorent pas — la piste mène au Conseil sous Pression.",
            ],
            transition_defaut: "Yselle Vaurin ferme les registres. « Les caisses s'accumulent. Personne ne veut admettre que rien ne part. » Les PJ ont la preuve économique. Que font les PJ ?",
          },
        },

        {
          id: "s2_conseil_sous_pression",
          titre: "Le Conseil sous Pression",
          type: "Social",
          resume_mj:
            "Le Conseil de Valombre se réunit une seconde fois. La première session s'est terminée sans décision — Avel a tout renvoyé en commission. Depuis, le déphasage s'est aggravé : les routes ramènent les convois, les lettres arrivent en double, les entrepôts débordent. Le Champion de la Bannière Pure a grandi et harangue la foule dehors. L'émissaire Maelric de Caldris revient avec un ultimatum plus ferme : trente jours pour prouver que Valombre tient le verrou, sinon blocus total. Yselle Vaurin, première syndique de la Guilde Marchande, réclame des garanties — l'économie s'effondre. Avel Ronce tente de maintenir l'ordre. Hessa Brunefer défend les Terrasses. Les PJ doivent naviguer entre les factions politiques pour éviter la loi martiale, gagner des alliés, ou révéler ce qu'ils savent.",
          idLieu: "conseil_valombre",
          idsPnj: ["avel_ronce", "hessa_brunefer", "envoye_caldris"],
          idsPnjImpliques: ["champion_banniere_pure", "yselle_vaurin"],

          format_livre: {
            ambiance:
              "La salle du Conseil est une longue pièce aux murs de pierre grise, éclairée par des fenêtres hautes. Des bancs de bois sombre alignés en gradins face à une table surélevée. La statue des Fondateurs domine le fond de la salle. L'air sent la cire et le bois froid. La foule gronde dehors, derrière les portes fermées. Le Champion parle quelque part sur la place, sa voix filtrée par les murs comme un bourdonnement.",
            deroulement_narratif:
              "Avel Ronce ouvre la séance — la seconde en peu de temps. Il est pâle, fatigué, et lit la même déclaration préparée : la sécurité de Valombre est sa priorité, le Conseil prend des mesures, la garde est renforcée. Il ne dit rien de concret. Rien n'a changé depuis la première réunion, sauf que la situation a empiré. Hessa Brunefer prend la parole ensuite : les Terrasses sont stables, les mines produisent, les clans n'ont pas besoin d'une loi martiale qui les stigmatiserait. Elle s'oppose à toute mesure qui ciblerait les nains ou les étrangers.\n\nL'émissaire Maelric intervient. Il n'est pas membre du Conseil, mais il a demandé à être entendu. Il parle calmement : Caldris sait que Valombre ne répond plus normalement. Les Pierres du Traité fonctionnent, mais les communications ordinaires sont coupées. Si Valombre ne prouve pas qu'elle tient le verrou de la Spirale dans les trente jours, Caldris imposera une quarantaine totale. Pas une invasion — un blocus. Plus de commerce, plus de messagers, plus de passage. Valombre sera isolée officiellement.\n\nYselle Vaurin, si elle est présente, monte à la tribune de la Guilde Marchande. Elle confirme que les routes sont instables, que les convois sont retardés, que les lettres de crédit posent problème. Elle ne dit pas que les convois ne partent pas — elle dit que les délais s'allongent. Elle demande des garanties du Conseil pour les maisons de commerce.\n\nLe Champion n'est pas dans la salle. Mais sa voix porte dehors. Si les PJ regardent par la fenêtre, ils voient la foule sur la place, les bannières blanches, et le Champion sur l'estrade. La garde mixte hésite à disperser la manifestation.\n\nLes PJ peuvent intervenir de plusieurs manières :\n\n1. Présenter des preuves (Persuasion DD 15) : s'ils ont des indices sur Thade, les Endeuillés, ou le déphasage, ils peuvent les exposer au Conseil. Avel Ronce est réticent — les preuves contre l'Université sont politiques. Hessa est plus réceptive. Maelric écoute tout.\n\n2. Soutenir Hessa (Diplomatie DD 14) : défendre les Terrasses contre la loi martiale. Hessa devient une alliée solide. Avel accepte si la pression retombe.\n\n3. Soutenir Maelric (Diplomatie DD 13) : appuyer l'ultimatum de Caldris. Avel est furieux, mais Maelric devient un allié. Caldris enverra des observateurs.\n\n4. Confronter le Champion dehors (Intimidation DD 14 ou Persuasion DD 15) : sortir et affronter le Champion publiquement. Risqué — la foule est hostile. Mais si les PJ démasquent son soutien logistique (Renseignements DD 14 obtenu avant), le Champion perd en crédibilité.\n\n5. Rester silencieux et observer : le Conseil vote une loi martiale partielle. Les Terrasses sont placées sous surveillance. La garde ferme les accès. Les PJ perdent un allié institutionnel mais gagnent du temps.\n\nLe résultat dépend des choix. Si les PJ présentent des preuves et soutiennent Hessa, le Conseil reporte la loi martiale et autorise une enquête. Si les PJ soutiennent Maelric, Caldris envoie des observateurs mais Avel se braque. Si les PJ restent silencieux, la loi martiale passe.",
            notes_mj:
              "Cette scène est le second Conseil de l'Arc II. Elle se joue après s2_conseil_crise (qui s'est terminée en paralysie ou sans décision ferme) et après les capsules de déphasage (routes, lettres, entrepôts). La justification : la première session n'a rien réglé, la situation économique et spatiale s'est dégradée, Maelric revient avec un délai plus court et Yselle Vaurin s'ajoute pour défendre la Guilde Marchande. Si les PJ n'ont pas joué s2_conseil_crise, cette scène fonctionne seule — il suffit de dire que le Conseil a déjà tenté une réunion qui n'a rien donné. Le MJ peut ajuster le contenu selon ce que les PJ ont découvert.",
          },

          texte_a_lire:
            "La salle du Conseil est pleine pour la seconde fois en peu de temps. Avel Ronce lit sa déclaration d'une voix plate — les mêmes mots, la même promesse. Hessa Brunefer se tient debout, les mains sur la table : « Les Terrasses ne sont pas le problème. » L'émissaire de Caldris attend son tour, un parchemin à la main. Dehors, la voix du Champion filtre par les fenêtres comme un bruit de fond.",

          objectif: "Influencer le Conseil : éviter la loi martiale, gagner des alliés, ou révéler ce que vous savez.",

          contexte_mj: {
            situation:
              "Le Conseil se réunit une seconde fois parce que la première session n'a rien décidé. Le déphasage s'est aggravé, les convois ne partent plus, le Champion a grandi. Avel veut maintenir l'ordre. Hessa défend les Terrasses. Maelric revient avec un ultimatum plus ferme. Le Champion harangue la foule dehors. Yselle demande des garanties pour la Guilde Marchande.",
            secrets: [
              "Maelric sait que Valombre ne répond plus normalement. Son ultimatum est réel : trente jours, puis blocus.",
              "Yselle cache que les convois ne partent pas. Elle demande des garanties pour maintenir les apparences.",
              "Avel est paralysé par la procédure. Il veut un consensus qui n'existe pas. Sous pression, il vote la loi martiale pour donner l'illusion de la fermeté.",
              "Le Champion reçoit un soutien logistique de marchands qui veulent affaiblir les clans nains. Si les PJ le révèlent, il perd en crédibilité.",
            ],
            rappels: [
              "Si les PJ ont des preuves sur Thade, les Endeuillés, ou le déphasage, ils peuvent les présenter au Conseil.",
              "Si les PJ ont découvert le soutien logistique du Champion (Renseignements DD 14), ils peuvent le démasquer publiquement.",
              "Hessa Brunefer est un levier politique : défendre les Terrasses contre la loi martiale en fait une alliée solide.",
            ],
          },

          defis: [
            { competence: "Persuasion", dd: 15, reussite: "Le Conseil écoute les preuves. Avel est réticent mais Hessa appuie. Maelric prend note. La loi martiale est reportée.", echec: "Avel refuse d'entendre des accusations contre l'Université sans preuves formelles. Le Conseil passe à autre chose." },
            { competence: "Diplomatie", dd: 14, reussite: "Hessa accepte le soutien des PJ. Elle défend les Terrasses avec force. Avel recule sur la loi martiale.", echec: "Hessa remercie les PJ mais ne veut pas d'alliance publique. Elle négocie seule." },
            { competence: "Intimidation", dd: 14, reussite: "Les PJ confrontent le Champion dehors. S'ils ont la preuve de son soutien logistique, la foule hésite. Le Champion perd en crédibilité.", echec: "La foule est hostile. Les PJ sont chassés de la place. Le Champion en sort renforcé." },
          ],

          indices: [
            { indice: "L'ultimatum de Caldris", localisation: "Salle du Conseil, intervention de Maelric", detection: "Automatique", information: "Trente jours pour prouver que Valombre tient le verrou, sinon blocus total.", usage: "Comprendre que l'isolation de Valombre est connue de l'extérieur et que le temps est compté." },
            { indice: "L'aveu indirect de Yselle", localisation: "Tribune de la Guilde Marchande", detection: "Persuasion DD 13 ou Insight", information: "Yselle confirme que les délais de livraison s'allongent mais cache que les convois ne partent pas.", usage: "Si les PJ ont vu les entrepôts pleins, ils savent que Yselle ment." },
          ],

          guide_mj: {
            intention: "Donner une scène politique où les PJ peuvent agir sur le Conseil, rencontrer Avel, Hessa et Maelric en personne, et sentir la pression du Champion sans l'affronter directement.",
            mise_en_place: "Salle du Conseil. Bancs en gradins. Table surélevée. Foule dehors. Voix du Champion qui filtre.",
            deroulement: ["Avel ouvre la séance.", "Hessa défend les Terrasses.", "Maelric lit l'ultimatum de Caldris.", "Yselle demande des garanties (si présente).", "Les PJ interviennent.", "Le Conseil vote ou reporte."],
            actions_utiles: ["Présenter des preuves au Conseil.", "Soutenir Hessa contre la loi martiale.", "Soutenir Maelric et l'ultimatum de Caldris.", "Confronter le Champion dehors.", "Observer et laisser le Conseil voter."],
            fronts_heritiers: ["Front 'La Cité sous pression' — la loi martiale avance ou recule selon les choix.", "Front 'Les Factions de la Crise' — le Champion gagne ou perd en crédibilité.", "Couche 'Le Déphasage' — Maelric confirme que l'isolation est connue de l'extérieur."],
            jeu_des_pnj: "Avel est procédurier et fatigué. Hessa est directe et solide. Maelric est calme et précis. Yselle est contrôlée. Le Champion n'est pas dans la salle — il est la pression extérieure.",
            escalade: "Si les PJ affrontent le Champion dehors et échouent, la foule devient violente. La garde intervient. Le Conseil vote la loi martiale en urgence.",
            sortie: "Le Conseil vote ou reporte. Les PJ ont des alliés ou des ennemis. La suite dépend de leurs choix.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Le Conseil de Valombre est paralysé. Caldris menace d'un blocus. Le Champion monte la pression. Les PJ peuvent influencer le résultat.",
            ne_pas_bloquer_sur_un_jet: "La scène se joue même sans jets. Avel, Hessa et Maelric parlent quel que soit le résultat des PJ. Les jets déterminent l'influence des PJ, pas l'existence de la scène.",
            question_dramatique: "Pouvez-vous empêcher le Conseil de se saborder sous la pression ?",
          },

          transitions: {
            resume: "Le Conseil a voté ou reporté. Les PJ ont gagné des alliés ou des ennemis. La pression politique est maintenant tangible.",
            reussite: "Le Conseil reporte la loi martiale. Hessa ou Maelric est un allié. Les PJ ont du temps.",
            echec: "Le Conseil vote la loi martiale. Les Terrasses sont sous surveillance. Les PJ ont perdu un allié institutionnel.",
          },

          navigation: {
            indice_indispensable: "Les PJ doivent savoir que le Conseil peut voter la loi martiale et que Caldris menace d'un blocus.",
            consequence_si_manque: "Sans comprendre la pression politique, les PJ peuvent perdre du temps. Mara ou Olane peuvent les informer. La loi martiale restreint les mouvements et complique l'accès à la Tour.",
            pnj_alternatifs: ["mara_dirigeante — peut informer les PJ de la situation politique", "yselle_vaurin — peut faire pression sur le Conseil via la crise économique"],
            front_si_ignore: "La Cité sous pression — la loi martiale est votée. Les Terrasses sont sous surveillance. Les PJ perdent en liberté de mouvement.",
            scenes_alternatives: ["s2_reserve_interdite — si les PJ contourment le Conseil et vont directement à l'Université", "s2_laboratoire_voss — si les PJ suivent la piste d'Elian Voss directement"],
            sorties_jouables: [
              {
                condition: "Les PJ veulent infiltrer la Réserve Interdite",
                sceneId: "s2_reserve_interdite",
                type: "indice_principal",
                moteur: "Le Conseil est géré. La piste suivante est la Réserve Interdite de l'Université.",
                accroche_mj: "Le Conseil a reporté. Vous avez du temps. Maintenant, à l'Université. Olane peut vous emmener à la Réserve. Les recherches de Thade. Les seuils. Les ancrages.",
                consequence_si_refus: "Sans la Réserve, les PJ manquent les 142 consultations de Thade et la théorie des seuils.",
              },
              {
                condition: "Les PJ veulent aller au Laboratoire d'Elian Voss",
                sceneId: "s2_laboratoire_voss",
                type: "pnj",
                moteur: "Elian Voss est le médecin qui a mené les expériences. Il a le schéma de la Larme de Vael.",
                accroche_mj: "Le Conseil est géré. Mais vous avez besoin de preuves concrètes. Elian Voss. Le médecin de Caldris. Il a mené les expériences. Il a le schéma de la Larme.",
                consequence_si_refus: "Sans Voss, les PJ manquent le schéma de la Larme et le témoignage clé.",
              },
              {
                condition: "Le Conseil a voté la loi martiale (échec)",
                sceneId: "s2_reserve_interdite",
                type: "urgence_front",
                moteur: "La loi martiale restreint les mouvements. Les PJ doivent agir vite.",
                accroche_mj: "La garde patrouille. Couvre-feu. Les Terrasses sont sous surveillance. Mais l'Université reste ouverte — c'est son territoire. Olane peut vous faire entrer. Allez à la Réserve. Vite.",
                consequence_si_refus: "Si les PJ attendent, la loi martiale se durcit. L'accès à la Tour devient plus difficile.",
              },
              {
                condition: "Les PJ ont gagné le soutien d'Hessa",
                sceneId: "s2_reserve_interdite",
                type: "pnj",
                moteur: "Hessa peut fournir un accès aux Terrasses et des renseignements.",
                accroche_mj: "Hessa vous prend à part. 'Le Conseil a reporté. Mais vous devez agir. L'Université. La Réserve. Olane peut vous y emmener. Je vous couvre.'",
                consequence_si_refus: "Sans le soutien d'Hessa, les PJ n'ont pas de couverture institutionnelle.",
              },
              {
                condition: "Les PJ veulent confronter le Champion avec les preuves du déphasage",
                sceneId: "s2_assaut_tour",
                type: "echec",
                moteur: "Le Champion peut être détourné vers l'Université avec des preuves.",
                accroche_mj: "Le Champion harangue la foule dehors. Si vous lui apportez la preuve que le déphasage vient de l'Université, pas des nains, il détourne sa croisade. Mais c'est un outil instable.",
                consequence_si_refus: "Si les PJ ne détournent pas le Champion, il continue à viser les nains. Les Terrasses se ferment.",
              },
              {
                condition: "Les PJ veulent utiliser Yselle pour faire pression sur le Conseil",
                sceneId: "s2_reserve_interdite",
                type: "libre",
                moteur: "Yselle peut révéler la crise économique au Conseil.",
                accroche_mj: "Yselle vous dit : 'Je peux parler. Les entrepôts. Les convois. Si je révèle ça au Conseil, Avel devra agir. Mais ça me coûte. Utilisez bien mon aide.' Puis elle se tourne vers la salle. Vous, allez à l'Université.",
                consequence_si_refus: "Sans Yselle, le Conseil n'a pas la pleine mesure de la crise économique.",
              },
            ],
            fallback_mj: "Le Conseil sous Pression est la seconde session du Conseil. Si les PJ n'y vontent pas, la loi martiale est votée. Les PJ perdent en liberté de mouvement. Le Conseil redevient pertinent si les PJ trouvent des preuves et veulent les présenter. La piste principale mène à la Réserve Interdite ou au Laboratoire d'Elian Voss.",
            objectif_scene: "Le Conseil peut voter la loi martiale. Caldris menace d'un blocus. Les PJ doivent présenter des preuves ou trouver une autre voie (Réserve, Voss).",
            pression: "La loi martiale est votée si les PJ n'agissent pas. Caldris impose la quarantaine. Le Champion gagne en pouvoir. Le déphasage s'étend.",
            actions_pj_attendues: ["présenter les preuves du déphasage au Conseil", "négocier avec les conseillers", "décider quelle piste suivre (Réserve, Voss, assaut)", "éventuellement confronter le Champion avec les preuves"],
            sorties_possibles: ["vers s2_reserve_interdite (infiltrer la Réserve)", "vers s2_laboratoire_voss (aller au Laboratoire d'Elian Voss)", "vers s2_assaut_tour (confronter le Champion — risqué)"],
            si_les_pj_bloquent: "Si les PJ n'y vontent pas, la loi martiale est votée. Le Conseil redevient pertinent si les PJ trouvent des preuves et veulent les présenter. La piste principale mène à la Réserve ou à Voss.",
            conditions_sortie: [
              "Les PJ ont présenté les preuves et le Conseil a ajourné la loi martiale.",
              "OU les PJ ont décidé d'infiltrer la Réserve ou d'aller au Laboratoire de Voss.",
              "OU la loi martiale est votée — les PJ perdent en liberté de mouvement.",
            ],
            transition_defaut: "Le Conseil vote ou ajourne. Les conseillers quittent la salle. Hessa Brunefer murmure aux PJ : « Si vous avez des preuves, apportez-les. Sinon, c'est la loi martiale. » Que font les PJ ?",
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
          idsPnjImpliques: ["thade_coren"],

          format_livre: {
            ambiance:
              "La Réserve de Recherche Interdite est un niveau souterrain de la bibliothèque centrale de l'Université. On y accède par un escalier en colimaçon derrière une porte de chêne renforcée de fer. L'air est froid et sec — un froid de conservation, pas d'hiver. Des lampes à mana brûlent bas, projetant une lumière bleutée sur les étagères. Les livres ont des couvertures scellées de cire blanche — chaque ouvrage est verrouillé jusqu'à ce qu'un Maître de département le demande. L'air sent le papier ancien et la cire. Le silence est absolu, presque physique.",
            deroulement_narratif:
              "Un registre est posé sur le lutrin à l'entrée. Grand, relié de cuir, les pages jaunies. Les noms des Maîtres qui ont consulté les ouvrages, par date et par sujet. Investigation DD 13 pour le lire : le nom de Thade Coren apparaît 142 fois sur huit ans. Les sujets : résonance planaire, seuils dimensionnels, ancrages rituels, théorie des sceaux. La fréquentation est dense la première année — 60 séances — puis s'effondre après la catastrophe de Nyx. Il a trouvé ce qu'il cherchait. Il n'a plus besoin de la bibliothèque.\n\nConnaissances (mystères) DD 17 pour déchiffrer les ouvrages : ils décrivent un rituel de seuil — ouvrir un passage vers un plan adjacent en utilisant des ancrages physiques. Le protocole S-01 est une application de ce rituel. Les textes sont arcaniques, obscurs, mais la théorie est claire : on peut ouvrir une porte si on a assez d'ancrages et un catalyseur.\n\nSi les PJ ont les textes des Endeuillés, ils peuvent les comparer avec les ouvrages de la Réserve. Les textes d'Edran sont des copies dégradées des mêmes pages. Thade a laissé les textes circuler — il a armé les Endeuillés avec des fragments de la théorie qu'il maîtrise depuis des années.\n\nUne note dans la marge du registre mentionne une ardoise non effacée au 6e étage de la Tour Arcanique. Équation préliminaire de S-01, datée de sept ans — avant la mort de Sealine. Thade travaillait déjà sur la théorie des seuils avant la disparition de Sealine. Mais le rituel actuel — celui qui vise à la ramener — naît après Nyx, quand la recherche devient obsession.\n\nSi Olane accompagne les PJ : elle ne lit pas les ouvrages à leur place, mais elle oriente. Elle dit : « Regardez les dates. La première année, il est venu presque tous les jours. Puis plus rien. Il a trouvé. » Elle peut aussi identifier les ouvrages les plus pertinents sans déchiffrer le contenu — elle reconnaît les titres et les sujets. Si les PJ échouent au jet de Connaissances, Olane peut faire un croquis des diagrammes clés (Investigation DD 10 de sa part, automatique pour les PJ si elle est présente).\n\nSi les PJ entrent sans Olane (Effraction DD 15) : la porte est verrouillée par un sigil mineur. Crochetage DD 15 ou Contresort DD 13. Si les PJ sont surpris par un garde (Perception du garde DD 13 vs Discrétion des PJ), procédure interne — Olane est arrêtée si elle couvre, sinon les PJ sont signalés. Sous la loi martiale, c'est un crime.\n\nSi les PJ ont le cachet de Caldris des notes de Jaren (Scénario 1) : ils peuvent le comparer avec les ouvrages. Le cachet apparaît sur trois ouvrages importés de Caldris — Thade a importé du matériel interdit via Caldris avant même la catastrophe de Nyx. C'est un indice supplémentaire : Caldris n'est pas un partenaire récent, c'est un complice de longue date.\n\nSi les PJ prennent le temps de chercher (Investigation DD 15) : une seconde note, plus discrète, mentionne que Thade a consulté un ouvrage spécifique — « De la Persistance des Âmes Liées » — trois jours avant la catastrophe de Nyx. L'ouvrage est toujours sur les étagères. Connaissances DD 14 pour le lire : il décrit comment maintenir un lien avec une personne dont le corps a traversé un seuil planaire. C'est le fondement théorique de la Larme de Vael.",
            notes_mj:
              "L'accès dépend du choix du Scénario 1. Olane peut fournir un accès si les PJ sont ses alliés. Sinon, Effraction DD 15. Sous la loi martiale, l'accès non autorisé est un crime — Olane peut couvrir, mais si les PJ sont surpris sans couverture, elle est arrêtée. Le registre est visible sans jet — le nom de Thade et le nombre 142 sont lisibles dès l'entrée. Les ouvrages nécessitent Connaissances DD 17, mais Olane peut les interpréter si les PJ lui apportent des notes.\n\nCopies partielles : les PJ n'ont pas besoin de tout déchiffrer sur place. Ils peuvent emporter : le relevé du registre (142 séances, sujets, dates — copie rapide sans jet), et des croquis des diagrammes d'ancrage (Investigation DD 10 pour un croquis utilisable). Les ouvrages complets restent dans la Réserve, mais les croquis suffisent pour prouver la préparation méthodique. Olane peut interpréter les croquis plus tard. Si les PJ sont pressés, le MJ leur donne le relevé du registre automatiquement.",
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
            { competence: "Investigation", dd: 15, reussite: "Une note discrète mentionne un ouvrage consulté par Thade trois jours avant Nyx : « De la Persistance des Âmes Liées ». L'ouvrage est sur les étagères. Il décrit comment maintenir un lien avec une personne dont le corps a traversé un seuil.", echec: "Les notes marginales sont illisibles. Rien d'autre à trouver." },
            { competence: "Connaissances (mystères)", dd: 14, reussite: "L'ouvrage « De la Persistance des Âmes Liées » décrit le fondement théorique de la Larme de Vael — un dispositif qui maintient un lien à travers un seuil planaire.", echec: "L'ouvrage est dense et arcanique. Olane peut l'interpréter plus tard." },
          ],

          indices: [
            { indice: "Le registre de Thade", localisation: "Lutrin de la Réserve", detection: "Investigation DD 13", information: "142 séances sur 8 ans. Sujets : résonance planaire, seuils, ancrages. Effondrement après la mort de Sealine.", usage: "Les premières recherches précèdent la perte ; le rituel actuel la transforme en objectif." },
            { indice: "L'ardoise du 6e étage", localisation: "Tour Arcanique, 6e étage", detection: "Mention dans les notes de la Réserve", information: "Équation préliminaire de S-01 datée de sept ans — avant la mort de Sealine.", usage: "Thade travaillait déjà sur la théorie des seuils avant la disparition de Sealine. Mais le rituel actuel — celui qui vise à la ramener — naît après Nyx, quand la recherche devient obsession." },
            { indice: "« De la Persistance des Âmes Liées »", localisation: "Étagères de la Réserve", detection: "Investigation DD 15 + Connaissances DD 14", information: "Ouvrage consulté par Thade trois jours avant Nyx. Décrit comment maintenir un lien avec une personne dont le corps a traversé un seuil planaire. Fondement théorique de la Larme de Vael.", usage: "Comprendre que Thade préparait la Larme avant même la disparition de Sealine. Le rituel n'est pas né du chagrin — il est né de la peur de perdre." },
            { indice: "Cachet de Caldris sur trois ouvrages", localisation: "Étagères de la Réserve", detection: "Lecture directe si les PJ ont le cachet de Jaren", information: "Trois ouvrages importés de Caldris. Thade a importé du matériel interdit via Caldris avant la catastrophe de Nyx.", usage: "Caldris n'est pas un partenaire récent — c'est un complice de longue date." },
          ],

          guide_mj: {
            intention: "Donner aux PJ la preuve écrite que Thade a préparé le rituel pendant des années.",
            mise_en_place: "Réserve souterraine. Froid, sec, silencieux. Lampes basses. Si Olane accompagne, elle reste discrète — elle ne veut pas être vue ici.",
            deroulement: [
              "Les PJ accèdent à la Réserve (Olane, Effraction, ou mandat).",
              "Ils trouvent le registre — 142 séances, le nom de Thade, l'effondrement après Nyx.",
              "Ils déchiffrent les ouvrages (Connaissances DD 17) ou font des croquis (Investigation DD 10).",
              "Si Olane est là, elle oriente la recherche et identifie les ouvrages pertinents.",
              "Si les PJ ont les textes des Endeuillés, comparaison immédiate.",
              "Si les PJ cherchent plus loin (Investigation DD 15), ils trouvent « De la Persistance des Âmes Liées ».",
              "Ils comprennent : Thade a tout préparé. La théorie précède la perte. Le rituel naît après.",
            ],
            actions_utiles: [
              "Copier le registre.",
              "Relever les passages essentiels.",
              "Faire un croquis des diagrammes.",
              "Comparer avec les textes des Endeuillés.",
              "Chercher l'ardoise du 6e étage.",
              "Si Olane est là : lui demander d'identifier les ouvrages pertinents.",
              "Si les PJ ont le cachet de Caldris : comparer avec les ouvrages importés.",
            ],
            fronts_heritiers: [
              "Front 'Le Plan de Thade' — les PJ ont maintenant la preuve écrite.",
              "Front 'La Cité sous pression' — l'Université est complice par ignorance.",
            ],
            jeu_des_pnj: "Aucun PNJ dans la Réserve. Si Olane accompagne, elle est nerveuse — elle sait que sa présence ici est un risque. Elle parle bas, reste près des PJ, et demande de partir dès qu'ils ont ce qu'ils sont venus chercher. Les livres parlent.",
            escalade: "Si les PJ sont surpris sans couverture : procédure interne. Olane est arrêtée si elle couvre. Sous la loi martiale, c'est un crime. Les PJ peuvent être détenus.",
            sortie: "Les PJ quittent la Réserve avec 142 séances, des croquis des diagrammes, et la certitude que Thade a préparé le rituel pendant des années. Si Olane est avec eux, elle leur dit : « Maintenant il faut la Tour. »",
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

          navigation: {
            indice_indispensable: "Les PJ doivent trouver les 142 séances de Thade et comprendre que le protocole S-01 est une application d'un rituel de seuil.",
            consequence_si_manque: "Sans les 142 séances, les PJ ne savent pas que Thade travaille sur les seuils depuis 8 ans. Sans la théorie des ancrages, ils ne comprennent pas que les os des Thanes sont des ancrages physiques. Olane peut aider à interpréter.",
            pnj_alternatifs: ["maera_olane — peut décrypter les ouvrages et interpréter le protocole S-01", "mara_dirigeante — peut fournir un contexte sur les recherches interdites"],
            front_si_ignore: "Le Plan de Thade — sans la Réserve, les PJ ne comprennent pas l'ampleur du projet de Thade. La Tour s'active sans compréhension.",
            scenes_alternatives: ["s2_laboratoire_voss — si les PJ vont directement au laboratoire d'Elian Voss sans passer par la Réserve", "s2_assaut_tour — si les PJ assautent la Tour directement"],
            sorties_jouables: [
              {
                condition: "Les PJ veulent aller au Laboratoire d'Elian Voss",
                sceneId: "s2_laboratoire_voss",
                type: "indice_principal",
                moteur: "La Réserve donne la théorie. Voss a la pratique : le schéma de la Larme, les bocaux, le protocole appliqué.",
                accroche_mj: "Vous avez la théorie. 142 séances. Le protocole S-01. Maintenant, il faut voir ce que ça donne en pratique. Elian Voss. Le médecin de Caldris. Son laboratoire sous l'amphithéâtre.",
                consequence_si_refus: "Sans Voss, les PJ manquent le schéma de la Larme, les bocaux et le témoignage clé.",
              },
              {
                condition: "Les PJ veulent assauter la Tour directement",
                sceneId: "s2_assaut_tour",
                type: "lieu",
                moteur: "Les PJ ont assez de preuves pour confronter Thade directement.",
                accroche_mj: "Vous avez les preuves. 142 séances. Le protocole S-01. Les ancrages. Thade construit un rituel de seuil. La Tour. C'est là qu'il est. Montons.",
                consequence_si_refus: "Si les PJ assautent la Tour sans passer par Voss, ils manquent le schéma de la Larme et le témoignage.",
              },
              {
                condition: "Les PJ veulent retourner au Conseil avec les preuves de la Réserve",
                sceneId: "s2_conseil_sous_pression",
                type: "pnj",
                moteur: "Les 142 séances et le protocole S-01 sont des preuves institutionnelles.",
                accroche_mj: "142 séances. Le protocole S-01. La théorie des seuils. Tout est là. Si vous apportez ça au Conseil, vous prouvez que Thade travaille sur un rituel de seuil depuis 8 ans. Avel ne pourra plus l'ignorer.",
                consequence_si_refus: "Sans preuve au Conseil, la loi martiale reste sur la table.",
              },
              {
                condition: "Les PJ n'ont pas déchiffré les ouvrages (échec)",
                sceneId: "s2_laboratoire_voss",
                type: "echec",
                moteur: "Olane peut aider à interpréter. Ou Voss peut montrer la pratique.",
                accroche_mj: "Vous avez le registre mais pas la théorie. Olane peut vous aider. Ou alors, allez voir Voss. Lui, il a appliqué le protocole. Il peut vous montrer ce que ça donne.",
                consequence_si_refus: "Sans interpréter les ouvrages ni voir Voss, les PJ ne comprennent pas le protocole S-01.",
              },
              {
                condition: "Le front 'La Tour s'active' est à 3+ segments",
                sceneId: "s2_assaut_tour",
                type: "urgence_front",
                moteur: "La Tour s'active. Les PJ doivent agir vite.",
                accroche_mj: "La Tour bourdonne. Les étages s'allument un par un. Thade accélère. Vous avez les preuves. Maintenant, montez.",
                consequence_si_refus: "Si les PJ attendent, la Tour s'active entièrement. Le déphasage s'accélère.",
              },
              {
                condition: "Les PJ veulent utiliser les preuves pour convaincre le Magi-Tuteur",
                sceneId: "s2_assaut_tour",
                type: "libre",
                moteur: "Le Magi-Tuteur est loyal à Thade mais désillusionné. Les preuves peuvent le retourner.",
                accroche_mj: "Les preuves sont accablantes. Si le Magi-Tuteur les voit, il pourrait se retourner. Il est à la Tour. 4e étage. Il ne combat pas si les PJ ne l'agressent pas.",
                consequence_si_refus: "Sans le Magi-Tuteur, les PJ n'ont pas de guide dans la Tour.",
              },
            ],
            fallback_mj: "La Réserve Interdite nécessite Olane pour y accéder. Si les PJ n'ont pas Olane, ils peuvent trouver Voss directement. Si les PJ n'explorent jamais la Réserve, ils manquent les 142 séances et la théorie des seuils. Voss peut apporter une partie de l'information, mais sans le contexte théorique.",
            objectif_scene: "Découvrir les 142 séances de Thade dans la Réserve, le protocole S-01, et la théorie des seuils planaires. Comprendre que Thade a planifié pendant huit ans.",
            pression: "La Tour s'active. Le déphasage s'étend. Si les PJ tardent, Thade accomplit le rituel. La loi martiale restreint l'accès si elle est votée.",
            actions_pj_attendues: ["accéder à la Réserve (avec Olane ou par effraction)", "déchiffrer les 142 séances (Connaissances)", "trouver la théorie des seuils et le protocole S-01", "comprendre que Thade a planifié pendant huit ans"],
            sorties_possibles: ["vers s2_laboratoire_voss (Voss a la pratique)", "vers s2_assaut_tour (assaut direct de la Tour)", "vers s2_conseil_sous_pression (preuves institutionnelles au Conseil)"],
            si_les_pj_bloquent: "Nécessite Olane pour y accéder. Sans Olane, Voss directement. Sans la Réserve, Voss peut partiellement compenser. Le Magi-Tuteur peut orienter.",
            conditions_sortie: [
              "Les PJ ont déchiffré les 142 séances et la théorie des seuils.",
              "OU les PJ ont trouvé le protocole S-01 et compris la planification de Thade.",
              "OU les PJ n'ont pas Olane — ils vont directement au Laboratoire de Voss.",
            ],
            transition_defaut: "Les PJ referment les registres de la Réserve. 142 séances. Huit ans de préparation. La théorie des seuils est claire. Et Voss a la pratique. Que font les PJ ?",
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
              "À gauche, cinquante dossiers étiquetés « stabilisés ». Lecture directe : cinquante patients stabilisés par des dérivés du protocole S-01, menés après la catastrophe de Nyx. Des noms, des dates, des dosages. Les patients viennent de Caldris — le cachet de Caldris est sur chaque dossier. Sealine est S-01, la première tentative consciente de stabilisation planaire. Les patients d'Elian sont postérieurs : des reproductions et adaptations du protocole S-01. À droite, sept bocaux sans étiquette. Art de la magie DD 17 : le sérum dans les bocaux est une préparation planaire. Il stabilise le corps pendant le transit vers la Spirale. Les sept bocaux contiennent les restes des sept échecs d'Elian après S-01. Toutes ont échoué.\n\nSous une plaque amovible de la table de travail, deux dossiers cachés. Investigation DD 12 pour trouver la plaque. Le premier dossier porte un schéma ancien — un dispositif en forme de larme, avec des annotations en écriture fine et précise. Le schéma nomme la Larme de Vael. Cachet de Caldris sur le schéma. Décryptage DD 17 pour lire l'annotation : « Ne jamais alimenter cela avec des vivants. » L'écriture est celle de Sealine. Sa main. Elle savait. Elle a essayé d'empêcher Thade. Il l'a fait quand même.\n\nElian Voss est présent si les PJ arrivent de jour. Il est effrayé — un homme brisé qui sait ce qu'il a fait. Intimidation DD 14 : il révèle tout. Thade a commandé les reproductions du protocole après Nyx, Caldris fournit le matériel, la Larme est le catalyseur. Elian n'est pas un fanatique — c'est un médecin qui a franchi la ligne par peur de Thade. Si les PJ le retournent, il peut témoigner au Conseil. S'ils le tuent, ils perdent un témoin clé.\n\nSi les PJ arrivent de nuit : Elian n'est pas là. Le laboratoire est vide. Les dossiers, les bocaux et le schéma sont accessibles sans confrontation. Mais sans Elian, les PJ n'ont pas de témoin direct — ils ont des preuves matérielles mais pas de voix pour les porter au Conseil. Olane peut interpréter les dossiers médicaux (Médecine DD 12 de sa part), mais elle ne peut pas témoigner de ce qu'Elian a fait de sa propre voix.\n\nSi Elian est présent et que les PJ le menacent sans succès (échec Intimidation DD 14) : il se recroqueville et se tait. Il a plus peur de Thade que des PJ. Persuasion DD 13 (alternative) : « Je comprends. Vous étiez médecin. Vous vouliez sauver des gens. Thade vous a utilisé. » Si réussi, Elian se ouvre progressivement. Il dit : « J'ai commencé par croire que c'était de la recherche. De la vraie recherche. Puis les premiers sont morts. Et je n'ai pas arrêté. »\n\nSi les PJ ont le cachet de Caldris des notes de Jaren (Scénario 1) : Elian le reconnaît immédiatement. Il pâlit. « Où avez-vous trouvé ça ? » Il sait que le circuit est découvert. Cela facilite l'Intimidation (DD 12 au lieu de 14) — Elian sait que les PJ ont déjà des preuves.\n\nSi les PJ mentionnent Sealine ou le protocole S-01 : Elian réagit. « Vous savez pour Sealine ? Alors vous savez que tout ça... tout ça vient d'elle. De ce que Thade a perdu. » Il ne pleure pas — il est trop épuisé pour pleurer. Mais sa voix change.\n\nSi les PJ touchent aux bocaux sans précaution (échec Art de la magie DD 15) : le sérum réagit. Un écho planaire — un visage fugace dans le liquide, un murmure. Les PJ qui échouent un jet de Volonté DD 12 sont secoués (état « effrayé » pendant 1 round). Les bocaux sont instables. Le MJ peut utiliser cela pour établir le danger du protocole.\n\nSi les PJ fouillent le laboratoire plus en profondeur (Investigation DD 15) : une lettre de Thade à Elian, datée d'il y a six mois. « Les stabilisations progressent. La Larme est presque prête. Continuez les dosages. Ne laissez aucune trace. » Preuve supplémentaire de la direction consciente de Thade.",
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
            { competence: "Art de la magie", dd: 15, reussite: "Les bocaux sont instables. Manipuler sans précaution déclenche un écho planaire — un visage fugace, un murmure. Les PJ savent qu'il faut les manipuler avec soin.", echec: "Un écho planaire se déclenche. Un visage fugace dans le liquide. Volonté DD 12 ou état effrayé pendant 1 round." },
            { competence: "Décryptage", dd: 17, reussite: "L'annotation de Sealine sur le schéma dit : 'Ne jamais alimenter cela avec des vivants.' Son écriture. Sa main.", echec: "L'annotation est ancienne et difficile à lire. Quelque chose sur des vivants." },
            { competence: "Intimidation", dd: 14, reussite: "Elian Voss, terrifié, révèle tout : Thade a commandé le protocole, Caldris fournit le matériel, la Larme est le catalyseur.", echec: "Elian se tait. Il a plus peur de Thade que des PJ." },
            { competence: "Persuasion", dd: 13, reussite: "Elian s'ouvre progressivement. « J'ai commencé par croire que c'était de la recherche. Puis les premiers sont morts. Et je n'ai pas arrêté. » Il accepte de témoigner.", echec: "Elian secoue la tête. « Vous ne comprenez pas. Vous n'avez pas vu ce que Thade peut faire. »" },
            { competence: "Investigation", dd: 15, reussite: "Une lettre de Thade à Elian, datée d'il y a six mois. « Les stabilisations progressent. La Larme est presque prête. Continuez les dosages. Ne laissez aucune trace. »", echec: "Rien d'autre à trouver dans le laboratoire." },
          ],

          indices: [
            { indice: "Le schéma de la Larme de Vael", localisation: "Dossier caché sous la plaque", detection: "Investigation DD 12", information: "La Larme est le catalyseur du rituel de seuil. Cachet de Caldris sur le schéma.", usage: "Comprendre que la Larme est l'objet central du plan de Thade." },
            { indice: "L'annotation de Sealine", localisation: "Schéma de la Larme", detection: "Décryptage DD 17", information: "'Ne jamais alimenter cela avec des vivants.' Écriture de Sealine.", usage: "Sealine savait. Elle a essayé d'empêcher Thade. Il l'a fait quand même." },
            { indice: "La liste des patients", localisation: "Cinquante dossiers 'stabilisés'", detection: "Lecture directe", information: "Cinquante patients stabilisés par des dérivés du protocole S-01, menés après Nyx. Sept échecs dans les bocaux.", usage: "Thade et Elian ont reproduit S-01 sur des vivants après Sealine." },
            { indice: "La lettre de Thade à Elian", localisation: "Table de travail, cachée", detection: "Investigation DD 15", information: "Lettre datée d'il y a six mois. Thade ordonne de continuer les dosages et de ne laisser aucune trace.", usage: "Preuve que Thade dirige consciemment les expériences. Pas un dérapage — un ordre." },
          ],

          guide_mj: {
            intention: "Révéler l'ampleur des expériences de Thade et le rôle de la Larme de Vael.",
            mise_en_place: "Laboratoire sous amphithéâtre. Porte métallique. Odeur de formol. Si Elian est là (jour), il est assis à la table, la tête dans les mains. Si absent (nuit), le laboratoire est vide et silencieux.",
            deroulement: [
              "Les PJ entrent. L'odeur frappe.",
              "Ils trouvent les dossiers (50 patients) et les bocaux (7 échecs).",
              "Ils découvrent le schéma de la Larme sous la plaque (Investigation DD 12).",
              "Si Elian est présent : confrontation sociale. Intimidation ou Persuasion.",
              "Si Elian est absent : les PJ collectent les preuves matérielles sans témoin.",
              "Si les PJ fouillent plus loin (Investigation DD 15) : lettre de Thade.",
              "Les PJ décident quoi faire d'Elian (si présent) : retourné, tué, ou laissé.",
            ],
            actions_utiles: [
              "Récupérer le protocole S-01 et le schéma de la Larme.",
              "Interroger Elian Voss (Intimidation ou Persuasion).",
              "Prendre les bocaux comme preuves (avec précaution).",
              "Comparer avec les archives médicales du Scénario 1.",
              "Chercher la lettre de Thade (Investigation DD 15).",
              "Si les PJ ont le cachet de Caldris : le montrer à Elian pour faciliter l'Intimidation.",
            ],
            fronts_heritiers: [
              "Front 'Le Plan de Thade' — la Larme est le catalyseur.",
              "Front 'Les Factions de la Crise' — Caldris est un acteur extérieur.",
            ],
            jeu_des_pnj: "Elian est un homme brisé. Il sait ce qu'il a fait. Il a peur de Thade et peur de lui-même. Si les PJ l'approchent avec empathie (Persuasion), il s'ouvre. S'ils l'approchent avec violence (Intimidation), il se recroqueville. Il ne combat pas — il n'en a pas la force. Si les PJ le tuent, le laboratoire perd sa voix. Les preuves matérielles restent, mais le Conseil veut un témoin.",
            escalade: "Si les PJ tuent Elian, ils perdent un témoin clé. S'ils le retournent, il peut témoigner au Conseil. S'ils le laissent vivant sans le retourner, il prévient Thade — le laboratoire est nettoyé avant que les PJ ne reviennent.",
            sortie: "Les PJ quittent le laboratoire avec le protocole, la Larme, la liste et peut-être un témoin. Ils ont tout sauf la Tour. Si Elian est retourné, il leur dit : « Thade ne s'arrêtera pas. Il est trop loin pour s'arrêter. »",
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

          navigation: {
            indice_indispensable: "Les PJ doivent obtenir le schéma de la Larme de Vael, le cachet de Caldris, et idéalement le témoignage d'Elian Voss.",
            consequence_si_manque: "Sans le schéma, les PJ ne savent pas ce qu'est la Larme. Sans Voss, ils n'ont pas de témoin clé. Olane ou Mara peuvent aider à interpréter le schéma, mais le témoignage de Voss est irremplaçable.",
            pnj_alternatifs: ["maera_olane — peut interpréter le schéma et le protocole S-01", "mara_dirigeante — peut recouper avec les informations de la Résistance"],
            front_si_ignore: "Le Plan de Thade — sans Voss, les PJ ne savent pas que Thade a commandé le protocole, que Caldris fournit le matériel, et que la Larme est le catalyseur. La Tour s'active sans compréhension complète.",
            scenes_alternatives: ["s2_assaut_tour — si les PJ vont directement à la Tour sans passer par Voss", "s2_reserve_interdite — si les PJ n'ont pas encore exploré la Réserve"],
            sorties_jouables: [
              {
                condition: "Les PJ veulent assauter la Tour",
                sceneId: "s2_assaut_tour",
                type: "indice_principal",
                moteur: "Les PJ ont le protocole, la Larme et un témoin. La Tour est la prochaine étape.",
                accroche_mj: "Vous avez tout. Le schéma. Le cachet. Le protocole. Et Voss a parlé. Thade a commandé le protocole. Caldris fournit le matériel. La Larme est le catalyseur. La Tour. C'est là qu'il est. Montons.",
                consequence_si_refus: "Si les PJ attendent, la Tour s'active. Le déphasage s'accélère.",
              },
              {
                condition: "Les PJ veulent retourner au Conseil avec Voss comme témoin",
                sceneId: "s2_conseil_sous_pression",
                type: "pnj",
                moteur: "Voss est le témoin le plus précieux. Son témoignage peut forcer le Conseil à agir.",
                accroche_mj: "Voss a avoué. Thade a commandé le protocole. Caldris fournit le matériel. Si vous amenez Voss au Conseil, Avel ne pourra plus rien ignorer. C'est un témoin direct.",
                consequence_si_refus: "Sans Voss au Conseil, les PJ n'ont pas de témoin direct. Les preuves matérielles sont fortes mais le témoignage est irremplaçable.",
              },
              {
                condition: "Les PJ n'ont pas retourné Voss (échec)",
                sceneId: "s2_assaut_tour",
                type: "echec",
                moteur: "Les PJ ont le schéma mais pas le témoin. La Tour reste la prochaine étape.",
                accroche_mj: "Voss n'a pas parlé. Mais vous avez le schéma. Le cachet de Caldris. L'annotation de Sealine. C'est suffisant pour comprendre. La Tour. Montons.",
                consequence_si_refus: "Sans Voss, les PJ n'ont pas de témoin direct mais ont les preuves matérielles.",
              },
              {
                condition: "Les PJ veulent aller à la Réserve Interdite pour compléter leurs preuves",
                sceneId: "s2_reserve_interdite",
                type: "lieu",
                moteur: "Les PJ ont le schéma mais pas la théorie. La Réserve contient les 142 séances.",
                accroche_mj: "Vous avez le schéma. La Larme. Mais pas la théorie. Pourquoi les os ? Pourquoi les Thanes ? La Réserve Interdite. Les 142 séances de Thade. Olane peut vous y emmener.",
                consequence_si_refus: "Sans la Réserve, les PJ ne comprennent pas la théorie des ancrages.",
              },
              {
                condition: "Le front 'La Tour s'active' est à 3+ segments",
                sceneId: "s2_assaut_tour",
                type: "urgence_front",
                moteur: "La Tour s'active. Les PJ doivent agir vite.",
                accroche_mj: "La Tour bourdonne. Les étages s'allument. Thade accélère. Vous avez le protocole et la Larme. Maintenant, montez. Vite.",
                consequence_si_refus: "Si les PJ attendent, la Tour s'active entièrement.",
              },
              {
                condition: "Les PJ veulent protéger Voss et le cacher",
                sceneId: "s2_assaut_tour",
                type: "libre",
                moteur: "Voss est un témoin précieux. Le cacher le protège de Thade.",
                accroche_mj: "Voss a peur. Thade le fera taire s'il le trouve. Mara peut le cacher à la Maison des Retours. Mais vous, vous devez monter à la Tour.",
                consequence_si_refus: "Si les PJ ne protègent pas Voss, Thade peut le faire disparaître. Le témoin est perdu.",
              },
            ],
            fallback_mj: "Le Laboratoire d'Elian Voss peut être trouvé via le cachet de Caldris (piste du Scénario 1), via Olane (qui connaît Voss), ou via la Résistance (le Collecteur a des contacts). Si les PJ n'explorent jamais cette scène, ils manquent le schéma de la Larme, les bocaux et le témoignage. La Réserve peut partiellement compenser, mais le témoignage de Voss est irremplaçable.",
            objectif_scene: "Trouver le laboratoire de Voss, découvrir le schéma de la Larme de Vael, les bocaux (échecs), et le témoignage de Voss sur les expériences de Thade.",
            pression: "La Tour s'active. Si les PJ tardent, Thade accomplit le rituel. Voss peut être fait disparaître par Thade si les PJ attendent trop.",
            actions_pj_attendues: ["trouver le laboratoire (cachet de Caldris, Olane, Résistance)", "examiner le schéma de la Larme et les bocaux", "interroger Voss sur les expériences de Thade", "récupérer les preuves (schéma, bocaux, cachet)"],
            sorties_possibles: ["vers s2_assaut_tour (les PJ ont tout, la Tour est la prochaine étape)", "vers s2_conseil_sous_pression (Voss comme témoin au Conseil)", "vers s2_reserve_interdite (compléter avec la théorie)"],
            si_les_pj_bloquent: "Trouvé via le cachet de Caldris, via Olane, ou via la Résistance. Les preuves matérielles (schéma, bocaux, cachet) sont présentes même sans Voss. Olane peut interpréter le schéma.",
            conditions_sortie: [
              "Les PJ ont le schéma de la Larme et les bocaux.",
              "OU les PJ ont le témoignage de Voss.",
              "OU les PJ n'ont pas Voss — les preuves matérielles suffisent pour la Tour.",
            ],
            transition_defaut: "Voss referme le schéma. « La Larme de Vael. C'est ce que Thade cherche. C'est ce qu'il a toujours cherché. » Les PJ ont les preuves. Que font les PJ ?",
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
              "Les PJ montent étage par étage. Étages 1-2 : banals, transition. Des couloirs vides, des salles désertées. L'occasion de se préparer. Le MJ décrit le changement progressif : les murs passent de la pierre lambrissée à une pierre plus claire, presque translucide. Des objets flottent — des plumes, des tasses, des livres. Pas de menace. Mais l'air sent la lavande dès le deuxième étage.\n\nÉtage 3 : étudiants charmés. Trois étudiants aux yeux vides. Ils lèvent les mains et lancent des sorts — Boule de feu, Rayon de givre. Persuasion DD 16 ou Dissipation de la magie pour les libérer sans violence. Ils se réveillent désorientés. L'un d'eux dit : « Le professeur Coren a dit qu'il fallait défendre la Tour. On a obéi. On... on ne savait pas. » Les tuer compte comme victime pour l'épilogue. Si les PJ utilisent Dissipation, les étudiants tombent à genoux et pleurent. Si les PJ combattent, les étudiants meurent avec les yeux vides — pas de rage, pas de peur. Juste le vide.\n\nÉtage 4 : gardes piégés et magi-tuteur loyal. Les gardes sont protégés par des runes explosives — les attaquer déclenche les runes. Discrétion DD 16 pour les éviter par les couloirs latéraux. Les couloirs latéraux sont étroits, non modifiés par Thade — de vieux passages de service. Le magi-tuteur est un allié caché — il se présente si les PJ ne l'attaquent pas. Il porte une robe usée, des mains tremblantes, et un regard qui dit qu'il attend depuis longtemps. Il dit : « Je suis le magi-tuteur. Je garde la Tour depuis que Thade est... parti. Son esprit est au sommet. Son corps est au septième. Je peux vous guider. » Il peut expliquer la Tour, la cuve et le rituel au sommet. Si les PJ l'attaquent par erreur, il se défend mal — il n'est pas combattant. Si les PJ le blessent, il dit : « Je ne suis pas votre ennemi. Thade l'est. Ne perdez pas de temps avec moi. »\n\nÉtage 5 : créature de la Spirale. Une entité cooptée par Thade — pas hostile par nature, mais prisonnière. Elle ressemble à un voile de lumière bleutée qui prend forme quand les PJ entrent. Elle ne parle pas — elle communique par impressions, par images mentales. Diplomatie DD 15 pour la retourner. Elle se retire si les PJ la traitent avec respect. Si elle attaque, elle est puissante mais ne veut pas mourir. Si les PJ la libèrent (Diplomatie), elle enveloppe un PJ brièvement — une sensation de froid, puis de gratitude — et disparaît. Le magi-tuteur, s'il est présent, dit : « Thade l'a amenée il y a deux ans. Elle ne voulait pas venir. »\n\nÉtage 6 : ardoise. Investigation DD 10. Équation préliminaire de S-01, datée de sept ans. Thade travaillait déjà sur la théorie des seuils avant la disparition de Sealine. Mais le rituel actuel naît après Nyx, quand la recherche devient obsession. La salle est une ancienne salle de cours — des bancs, un tableau, l'ardoise au mur. L'ardoise n'a pas été effacée. Le magi-tuteur, s'il est présent, dit : « Il a écrit ça avant. Avant Sealine. Avant tout. Je ne savais pas ce que ça voulait dire. Maintenant je sais. »\n\nÉtage 7 : porte du Laboratoire de Verre. L'air sent la lavande à saturation. Le bourdonnement du vortex est audible. Derrière la porte : le corps de Thade dans la cuve. La porte est fermée mais pas verrouillée — Thade n'a pas besoin de la verrouiller. Personne n'est censé arriver jusqu'ici.",
            notes_mj:
              "5-6 rencontres tactiques. Chaque rencontre a une option non-létale. Le MJ doit tenir le décompte du nombre de victimes — ce décompte détermine le ton de l'épilogue du Scénario 3. Personne dans la Tour n'est un ennemi volontaire — sauf Thade. Les étudiants sont des victimes. La créature est une prisonnière. Le magi-tuteur est un allié. S'ils tuent tout, l'épilogue sera sombre. S'ils minimisent les victimes, l'épilogue peut être lumineux.\n\nModularité selon le nombre de PJ :\n- 1 PJ : réduire à 3 rencontres (étages 3, 5, 6). L'étage 4 (gardes + magi-tuteur) devient une scène sociale — le magi-tuteur se présente immédiatement si le PJ n'attaque pas. Les étudiants charmés sont un seul étudiant (un sort au lieu de trois). La créature est affaiblie. Les DD de Persuasion passent à 14 au lieu de 16. Discrétion DD 14 au lieu de 16. Le PJ peut éviter toutes les rencontres sauf l'ardoise (étage 6) et la porte du Laboratoire (étage 7).\n- 2 PJ : 4 rencontres (étages 3, 4, 5, 6). Les étudiants sont deux. Les gardes sont deux. La créature est standard. DD 15 au lieu de 16.\n- 3-4 PJ : 5-6 rencontres comme écrit. DD standards (16). Toutes les rencontres sont jouées.\n\nDans tous les cas, le magi-tuteur est un allié caché qui se présente si les PJ ne l'attaquent pas. L'ardoise du 6e étage est toujours accessible. La porte du Laboratoire de Verre est toujours le point d'arrivée.",
          },

          texte_a_lire:
            "La Tour Arcanique se dresse au cœur de l'Université. De l'extérieur, elle semble normale. De l'intérieur, elle est transformée. Les premiers étages sont banals — couloirs lambrissés, salles de cours. Mais plus vous montez, plus les murs changent. Des piliers de cristal poussent entre les pierres. Des runes brillent dans les angles. Des objets flottent dans l'air, immobiles.\n\nAu troisième étage, un étudiant vous regarde avec des yeux vides. Il lève la main. Une boule de feu apparaît.",

          objectif: "Atteindre le seuil du sommet en minimisant les victimes.",

          contexte_mj: {
            situation:
              "La Tour est un dispositif rituel. Chaque étage est modifié pour canaliser l'énergie vers le sommet. Thade a charmé des étudiants, piégé des gardes et coopté une créature de la Spirale. Les PJ doivent monter étage par étage.",
            secrets: [
              "Chaque étudiant charmé peut être libéré avec Dissipation de la magie ou Persuasion DD 16. Les tuer compte comme victime pour l'épilogue.",
              "Les gardes piégés au 4e étage ne sont pas volontaires — les runes explosives les forcent à combattre. Les attaquer déclenche les runes. Les éviter (Discrétion DD 16) ou les désamorcer (Art de la magie DD 14) sont les options non-létales.",
              "La créature de la Spirale au 5e étage n'est pas hostile par nature. Elle a été séduite par Thade. Parler DD 15 peut la retourner. Elle communique par impressions, pas par mots.",
              "Le magi-tuteur loyal au 4e étage est un allié caché. Il peut guider les PJ s'ils ne l'attaquent pas. Il connaît la Tour, la cuve et le rituel.",
              "L'ardoise du 6e étage prouve que Thade travaillait sur la théorie des seuils avant la disparition de Sealine.",
            ],
            rappels: [
              "5-6 rencontres tactiques. Chaque rencontre a une option non-létale.",
              "Le décompte des victimes détermine le ton de l'épilogue.",
              "Le magi-tuteur peut accompagner les PJ jusqu'au 7e étage. Il ne montera pas au sommet — il dit : « Je ne peux pas le voir. Pas comme ça. »",
            ],
          },

          defis: [
            { competence: "Persuasion", dd: 16, reussite: "Les PJ libèrent les étudiants charmés sans violence. Ils se réveillent désorientés mais vivants. L'un dit : « Le professeur Coren a dit qu'il fallait défendre la Tour. On a obéi. »", echec: "Les étudiants sont trop profondément charmés. Seul un combat ou Dissipation les arrête." },
            { competence: "Dissipation de la magie", dd: 14, reussite: "Le charme se dissipe. Les étudiants tombent à genoux et pleurent. Ils ne se souviennent de rien.", echec: "Le charme résiste. Les étudiants continuent d'attaquer." },
            { competence: "Discrétion", dd: 16, reussite: "Les PJ évitent les gardes piégés par les couloirs latéraux que Thade n'a pas modifiés.", echec: "Tous les couloirs mènent aux gardes. Les PJ doivent combattre ou négocier." },
            { competence: "Art de la magie", dd: 14, reussite: "Les runes explosives sur les gardes sont désamorcées. Les gardes s'effondrent, épuisés mais vivants.", echec: "Les runes sont trop complexes. Les attaquer les déclenche." },
            { competence: "Diplomatie", dd: 15, reussite: "La créature de la Spirale accepte de se retirer. Elle n'est pas l'ennemie de Thade — elle est sa prisonnière. Elle enveloppe un PJ brièvement — froid, puis gratitude — et disparaît.", echec: "La créature attaque. Elle est puissante mais ne veut pas mourir." },
            { competence: "Investigation", dd: 10, reussite: "L'ardoise du 6e étage montre l'équation préliminaire de S-01, datée de sept ans. Thade travaillait déjà sur les seuils avant la disparition de Sealine.", echec: "L'ardoise est couverte de poussière. Les équations sont partiellement effacées." },
          ],

          indices: [
            { indice: "L'ardoise du 6e étage", localisation: "Salle de cours désertée", detection: "Investigation DD 10", information: "Équation préliminaire de S-01 datée de sept ans. Les premières recherches de Thade sur les seuils précèdent la disparition de Sealine.", usage: "Les premières recherches de Thade sur les seuils précèdent la disparition de Sealine ; le rituel actuel, lui, naît de sa perte. Thade n'a pas dérapé par chagrin — il a choisi." },
          ],

          guide_mj: {
            intention: "L'assaut de la Tour est la percée du Scénario 2 — pas l'apothéose. Les PJ atteignent le 7e étage, découvrent le corps de Thade et comprennent que le sommet est le vortex. Mais ils n'affrontent pas encore Thade dans le vortex : ils comprennent que le Scénario 3 commence maintenant.",
            mise_en_place: "La Tour est ouverte si les PJ ont un accès (Olane) ou forcée (Effraction/combat). Le MJ décrit le changement progressif à chaque étage — la pierre qui devient translucide, les objets qui flottent, la lavande qui s'intensifie.",
            deroulement: [
              "Étages 1-2 : banals, transition. Le MJ décrit le changement de l'air et des murs.",
              "Étage 3 : étudiants charmés. Persuasion DD 16 ou Dissipation DD 14 pour libérer. Combat = victimes.",
              "Étage 4 : gardes piégés. Discrétion DD 16 pour éviter, Art de la magie DD 14 pour désamorcer, ou combat (runes explosives). Le magi-tuteur se présente si les PJ ne l'attaquent pas.",
              "Étage 5 : créature de la Spirale. Diplomatie DD 15 pour la retourner. Communication par impressions.",
              "Étage 6 : ardoise. Investigation DD 10. Preuve que Thade travaillait sur les seuils avant Sealine.",
              "Étage 7 : porte du Laboratoire de Verre. Pas verrouillée. Derrière : le corps de Thade dans la cuve.",
            ],
            actions_utiles: [
              "Libérer les étudiants charmés (Persuasion ou Dissipation).",
              "Désamorcer les runes des gardes (Art de la magie).",
              "Éviter les gardes par les couloirs latéraux (Discrétion).",
              "Parler à la créature planaire (Diplomatie).",
              "Trouver et parler au magi-tuteur.",
              "Lire l'ardoise du 6e.",
              "Emmener le magi-tuteur jusqu'au 7e (il refuse de monter au sommet).",
            ],
            fronts_heritiers: ["Front 'Le Plan de Thade' — la Tour est le dispositif.", "Front 'Le Sceau qui cède' — le rituel est proche."],
            jeu_des_pnj: "Les étudiants sont des victimes. La créature est une prisonnière. Le magi-tuteur est un allié. Personne dans la Tour n'est un ennemi volontaire — sauf Thade. Le magi-tuteur parle bas, tremble, mais connaît la Tour. Il peut expliquer chaque étage si les PJ lui demandent. Il dit : « Thade a commencé à modifier la Tour il y a deux ans. D'abord les runes. Puis les piliers de cristal. Puis les étudiants. »",
            escalade: "Si les PJ tuent tout, l'épilogue sera sombre. S'ils minimisent les victimes, l'épilogue peut être lumineux. Le magi-tuteur, s'il est présent, compte les victimes. Il ne dit rien — mais il note.",
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

          navigation: {
            indice_indispensable: "Les PJ doivent atteindre le Laboratoire de Verre au sommet de la Tour, idéalement avec le Magi-Tuteur comme guide.",
            consequence_si_manque: "Si les PJ montent en force sans guide, ils tuent des étudiants et des gardes. Le Magi-Tuteur peut se retourner contre eux. L'épilogue sera sombre.",
            pnj_alternatifs: ["magi_tuteur_loyal — peut guider les PJ à travers la Tour et expliquer la cuve et le rituel", "maera_olane — peut fournir des informations sur la structure de la Tour"],
            front_si_ignore: "La Tour s'active — si les PJ n'agissent pas, la Tour s'active entièrement. Le déphasage s'accélère. Le Sceau qui cède — le front avance sans opposition.",
            scenes_alternatives: ["s2_laboratoire_verre — la destination finale de l'assaut", "s2_reserve_interdite — si les PJ n'ont pas encore les preuves et veulent revenir en arrière"],
            sorties_jouables: [
              {
                condition: "Les PJ atteignent le Laboratoire de Verre",
                sceneId: "s2_laboratoire_verre",
                type: "indice_principal",
                moteur: "Le Laboratoire de Verre est au sommet de la Tour. Le corps de Thade est dans la cuve.",
                accroche_mj: "La porte du Laboratoire de Verre. L'air sent la lavande à saturation. Derrière cette porte : le corps de Thade. Les cahiers. La vérité.",
                consequence_si_refus: "Si les PJ ne montent pas, la Tour s'active. Le déphasage s'accélère.",
              },
              {
                condition: "Les PJ ont tué le Magi-Tuteur",
                sceneId: "s2_laboratoire_verre",
                type: "echec",
                moteur: "Sans le Magi-Tuteur, les PJ entrent dans le Laboratoire sans guide. La scène est plus difficile.",
                accroche_mj: "Le Magi-Tuteur est mort. Vous avez tué un allié potentiel. La porte du Laboratoire est devant vous. Aucun guide. Aucune explication. Entrez.",
                consequence_si_refus: "Sans le Magi-Tuteur, les PJ ne comprennent pas la cuve ni le rituel sans investigation supplémentaire.",
              },
              {
                condition: "Les PJ veulent faire demi-tour et chercher plus de preuves",
                sceneId: "s2_reserve_interdite",
                type: "libre",
                moteur: "Les PJ ne se sentent pas prêts. Ils peuvent retourner à la Réserve.",
                accroche_mj: "Vous n'êtes pas prêts ? La Réserve est encore accessible. Olane peut vous aider. Mais la Tour s'active. Le temps presse.",
                consequence_si_refus: "Si les PJ font demi-tour, la Tour s'active davantage. Le déphasage s'accélère.",
              },
              {
                condition: "Les PJ veulent négocier avec les gardes de la Tour",
                sceneId: "s2_laboratoire_verre",
                type: "libre",
                moteur: "Les gardes ne sont pas tous loyaux à Thade. Certains peuvent être raisonnés.",
                accroche_mj: "Les gardes de la Tour ne sont pas des fanatiques. Ce sont des étudiants, des employés. Si vous leur montrez les preuves, certains peuvent se ranger. Pas tous. Mais certains.",
                consequence_si_refus: "Si les PJ attaquent sans négocier, les gardes se défendent. Les victimes s'accumulent.",
              },
              {
                condition: "Le front 'La Tour s'active' est à 4+ segments",
                sceneId: "s2_laboratoire_verre",
                type: "urgence_front",
                moteur: "La Tour est presque entièrement activée. Les PJ doivent atteindre le sommet maintenant.",
                accroche_mj: "La Tour vibre. Les étages s'allument en cascade. Le déphasage est visible depuis les fenêtres. Si vous n'atteignez pas le sommet maintenant, tout est perdu. Montez. Montez.",
                consequence_si_refus: "Si les PJ n'atteignent pas le sommet, la Tour s'active entièrement. Le seuil s'ouvre sans opposition.",
              },
              {
                condition: "Les PJ veulent utiliser le Champion pour attaquer la Tour",
                sceneId: "s2_laboratoire_verre",
                type: "echec",
                moteur: "Le Champion et ses hommes peuvent servir de force d'assaut. Mais c'est instable.",
                accroche_mj: "Le Champion veut du sang. Si vous lui dites que l'Université est responsable, il attaque la Tour. Mais il est instable. Il tuera tout ce qui bouge. À vous de voir.",
                consequence_si_refus: "Si les PJ utilisent le Champion, l'assaut est plus facile mais les victimes sont nombreuses. L'épilogue sera sombre.",
              },
            ],
            fallback_mj: "L'Assaut de la Tour est la scène de montée. Si les PJ n'agissent pas, la Tour s'active entièrement et le déphasage devient irréversible. Le Magi-Tuteur est un allié clé s'il est épargné. Le Champion peut être utilisé comme force d'assaut mais avec des conséquences sombres.",
            objectif_scene: "Atteindre le Laboratoire de Verre au sommet de la Tour Arcanique, idéalement avec le Magi-Tuteur comme guide.",
            pression: "La Tour s'active. Le déphasage devient irréversible. Si les PJ tardent, Thade accomplit le rituel. Le Magi-Tuteur peut être tué si les PJ l'agressent.",
            actions_pj_attendues: ["infiltrer la Tour (Discrétion, force, ou négociation avec les gardes)", "convaincre ou neutraliser le Magi-Tuteur", "monter les étages vers le Laboratoire de Verre", "éventuellement utiliser le Champion comme force d'assaut"],
            sorties_possibles: ["vers s2_laboratoire_verre (atteindre le Laboratoire)", "vers s2_reserve_interdite (demi-tour pour plus de preuves)"],
            si_les_pj_bloquent: "Si les PJ n'agissent pas, la Tour s'active entièrement. Le Magi-Tuteur peut guider s'il est convaincu. Le Champion peut être utilisé comme force d'assaut mais avec des conséquences sombres.",
            conditions_sortie: [
              "Les PJ ont atteint le Laboratoire de Verre.",
              "OU les PJ font demi-tour pour plus de preuves (dernier moment).",
              "OU les PJ n'agissent pas — la Tour s'active, le déphasage devient irréversible.",
            ],
            transition_defaut: "Les PJ atteignent le sommet de la Tour. La porte du Laboratoire de Verre est devant eux. Derrière, le vortex commence à pulser. Que font les PJ ?",
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
              "Sur le mur adjacent, des cahiers reliés bordeaux alignés par date. Des dizaines de cahiers. Huit ans de cahiers. Le dernier est ouvert sur un pupitre. Une plume écrit dedans, seule, en temps réel. L'écriture est fine, régulière, sans hésitation. Thade écrit depuis le vortex.\n\nSi les PJ lisent le cahier ouvert, ils voient que Thade parle à Sealine comme si elle était là. Il raconte sa journée. Il décrit ce qu'il fait. Il dit qu'il est proche. Il dit qu'il va la ramener. Il ne sait pas qu'il a échoué. Ou il ne veut pas le savoir.\n\nSi les PJ lisent un cahier plus ancien (au choix du MJ, un cahier de la première année) : Thade écrit différemment. Les premières lettres sont désespérées, brouillées, avec des ratures. « Sealine, je ne dors plus. Les équations ne marchent pas. J'ai essayé six variantes. Rien. Je continuerai demain. » Puis, au fil des mois, l'écriture se régularise. La douleur devient routine. La routine devient obsession. Le MJ peut lire un extrait de chaque période si les PJ feuillètent.\n\nSi les PJ écrivent dans le cahier ouvert : la plume s'arrête. Un silence. Puis l'écriture de Thade reprend, plus lente : « Qui êtes-vous ? » Si les PJ répondent, Thade peut engager une conversation par écrit. Il ne menace pas. Il explique. « Je sais ce que vous pensez. Que je suis fou. Que j'ai franchi une ligne. Mais si vous aviez vu son visage quand elle a compris qu'elle allait mourir — vous feriez la même chose. » Si les PJ lui disent qu'ils ont vu les bocaux, les patients, les expériences : la plume s'arrête. Long silence. Puis : « Je sais. Je sais tout ce que j'ai fait. » La conversation peut continuer jusqu'à ce que les PJ décident de monter.\n\nInvestigation DD 12 : le système de la cuve est clair — tubes alimentaires, runes de préservation, connexion arcanique vers le sommet. Détruire la cuve interrompt la connexion entre Thade et le vortex. Connaissances (mystères) DD 16 : détruire le corps coûte une phase au Thade du sommet. Il sera affaibli mais pas arrêté.\n\nLes PJ peuvent : détruire la cuve et le corps, lire les cahiers, écrire dans le cahier ouvert (Thade lira au sommet — c'est un canal de communication), ou emporter les cahiers comme preuve. Le magi-tuteur, s'il est présent, peut expliquer : « Son esprit est au sommet. Son corps est ici. La cuve maintient le lien. Détruisez le corps, et il sera plus faible là-haut. Mais il saura que vous êtes venus. »\n\nSi les PJ détruisent la cuve : le liquide doré s'écoule. Les runes s'éteignent. Le corps de Thade s'affaisse. La lavande disparaît brusquement — comme si quelqu'un avait ouvert une fenêtre. Le magi-tuteur, s'il est présent, détourne le regard. Il dit : « Il le saura. Montez vite. »\n\nSi les PJ choisissent de ne pas détruire le corps : le magi-tuteur hoche la tête. « Vous avez pitié de lui. C'est votre droit. Mais là-haut, il sera plus fort. »\n\nLa décision de détruire le corps est morale, pas mécanique. Les PJ regardent le visage paisible de Thade. Ils lisent les lettres à Sealine. Et ils doivent choisir : détruire le corps d'un homme qui écrit à sa femme tous les jours, ou monter au sommet sans avantage.",
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
            mise_en_place: "Rotonde de pierre claire. Cuve centrale. Lumière dorée. Parfum de lavande. Le magi-tuteur, s'il est présent, reste près de la porte — il ne s'approche pas de la cuve.",
            deroulement: [
              "Les PJ entrent et voient la cuve. Le MJ décrit le corps de Thade — paisible, immobile, vivant.",
              "Ils examinent la cuve (Investigation DD 12 pour comprendre le système).",
              "Ils découvrent les cahiers. Lecture directe. Le cahier ouvert écrit en temps réel.",
              "Si les PJ feuillètent les cahiers anciens : l'évolution de l'écriture, de la douleur à l'obsession.",
              "Si les PJ écrivent dans le cahier : Thade répond. Conversation écrite possible.",
              "Le magi-tuteur explique si les PJ ne l'ont pas attaqué.",
              "Les PJ décident : détruire le corps, lire les cahiers, écrire, ou emporter les cahiers.",
            ],
            actions_utiles: [
              "Détruire la cuve et le corps (affaiblit Thade au sommet).",
              "Lire les cahiers (comprendre l'évolution de Thade).",
              "Lire un cahier ancien (voir la douleur devenir obsession).",
              "Écrire à Thade dans le cahier (conversation avant l'affrontement).",
              "Emporter les cahiers comme preuve.",
              "Demander au magi-tuteur d'expliquer la cuve.",
            ],
            fronts_heritiers: ["Front 'Le Plan de Thade' — le corps est le point faible.", "Front 'Le Sceau qui cède' — le rituel est en cours au sommet."],
            jeu_des_pnj: "Le magi-tuteur peut expliquer. Sinon, les cahiers parlent pour Thade. Si les PJ écrivent dans le cahier, Thade répond avec une honnêteté désarmante — il ne ment pas, il ne menace pas. Il explique. C'est la seule conversation possible avec Thade avant le sommet. Le MJ peut utiliser cet échange pour personnaliser le combat final — Thade au sommet peut faire référence à ce que les PJ ont écrit.",
            escalade: "Si les PJ détruisent le corps, Thade au sommet perd une phase. Mais il peut accélérer le rituel en représailles. La lavande disparaît brusquement — Thade sait qu'ils sont venus.",
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

          navigation: {
            indice_indispensable: "Les PJ doivent comprendre que le corps de Thade est dans la cuve et qu'il écrit à Sealine depuis 8 ans.",
            consequence_si_manque: "Sans détruire le corps ou lire les cahiers, les PJ se présentent au seuil du sommet sans avantage narratif. Ils ne savent pas qui est Thade vraiment. Le Scénario 3 commence dans des conditions difficiles.",
            pnj_alternatifs: ["magi_tuteur_loyal — peut expliquer la cuve, le rituel et l'écriture automatique", "mara_dirigeante — peut recouper avec les informations de la Résistance"],
            front_si_ignore: "La Tour s'active — sans détruire le corps, Thade reste connecté à la Tour. Le seuil s'ouvre. Le Sceau qui cède — le front avance.",
            scenes_alternatives: [],
            sorties_jouables: [
              {
                condition: "Les PJ ont détruit le corps de Thade dans la cuve",
                sceneId: "s2_vers_s3_escalier_du_sommet",
                type: "indice_principal",
                moteur: "Le corps est détruit. Thade est affaibli. Les PJ montent avec un avantage.",
                accroche_mj: "La cuve se brise. Le liquide doré se répand. Le corps de Thade se dissout. L'écriture s'arrête. Mais le bourdonnement continue. Thade n'est pas dans la cuve. Thade est au sommet. Montez.",
                consequence_si_refus: "Si les PJ ne montent pas, le déphasage s'accélère sans opposition.",
              },
              {
                condition: "Les PJ ont lu les cahiers bordeaux sans détruire le corps",
                sceneId: "s2_vers_s3_escalier_du_sommet",
                type: "lieu",
                moteur: "Les PJ savent qui est Thade. Ils montent avec la compréhension mais sans affaiblir Thade.",
                accroche_mj: "Les cahiers. Huit ans de lettres à Sealine. La plume écrit en temps réel. Thade n'a jamais accepté sa mort. Il ouvre le seuil pour la retrouver. Maintenant, montez. Le sommet vous attend.",
                consequence_si_refus: "Si les PJ ne montent pas, le déphasage s'accélère.",
              },
              {
                condition: "Les PJ ont vu la cuve sans agir (échec)",
                sceneId: "s2_vers_s3_escalier_du_sommet",
                type: "echec",
                moteur: "Les PJ montent sans avantage. Ils ne savent pas qui est Thade vraiment.",
                accroche_mj: "Vous avez vu la cuve. Le corps. Les cahiers. Mais vous n'avez rien fait. La porte du sommet est devant vous. Le bourdonnement vous appelle. Montez. Sans avantage. Sans préparation.",
                consequence_si_refus: "Si les PJ ne montent pas, le déphasage s'accélère. Le seuil s'ouvre sans opposition.",
              },
              {
                condition: "Les PJ veulent emporter les cahiers comme preuve",
                sceneId: "s2_vers_s3_escalier_du_sommet",
                type: "libre",
                moteur: "Les cahiers sont des preuves. Mais ils sont aussi le lien de Thade avec Sealine.",
                accroche_mj: "Les cahiers. Huit ans de lettres. Si vous les emportez, Thade perdra son lien ? Ou sa colère sera pire ? Prenez-les. Montez. Le sommet vous attend.",
                consequence_si_refus: "Si les PJ laissent les cahiers, Thade garde son lien. Le sommet est plus difficile.",
              },
              {
                condition: "Le Magi-Tuteur est vivant et accompagne les PJ",
                sceneId: "s2_vers_s3_escalier_du_sommet",
                type: "pnj",
                moteur: "Le Magi-Tuteur peut expliquer ce qui les attend au sommet.",
                accroche_mj: "Le Magi-Tuteur regarde la porte du sommet. 'Derrière cette porte, il y a le vortex. La Larme de Vael. Et Thade. Pas le corps dans la cuve. Thade lui-même. Son esprit. Sa volonté. Soyez prêts.' Montez.",
                consequence_si_refus: "Si le Magi-Tuteur est mort, les PJ montent sans guide ni explication.",
              },
              {
                condition: "Le front 'Le Sceau qui cède' est à 5+ segments",
                sceneId: "s2_vers_s3_escalier_du_sommet",
                type: "urgence_front",
                moteur: "Le sceau est presque entièrement cédé. Les PJ doivent monter maintenant.",
                accroche_mj: "La Tour vibre. Le sol tremble. Le déphasage est visible partout. Le sceau cède. Si vous ne montez pas maintenant, tout est perdu. Montez. Montez. Montez.",
                consequence_si_refus: "Si les PJ ne montent pas, le sceau cède entièrement. Le seuil s'ouvre. Le Scénario 3 commence dans les pires conditions.",
              },
            ],
            fallback_mj: "Le Laboratoire de Verre est la dernière scène avant le sommet. Si les PJ détruisent le corps, Thade est affaibli. S'ils lisent les cahiers, ils comprennent qui il est. S'ils ne font rien, ils montent sans avantage. Le Magi-Tuteur est un guide précieux s'il est vivant. Dans tous les cas, le Scénario 3 commence au sommet.",
            objectif_scene: "Découvrir le corps de Thade dans la cuve et les cahiers bordeaux (huit ans de lettres à Sealine). Comprendre qui Thade est vraiment.",
            pression: "Le vortex commence à pulser. Le sceau cède. Si les PJ tardent, Thade accomplit le rituel. Le Magi-Tuteur peut être tué si les PJ l'agressent.",
            actions_pj_attendues: ["examiner la cuve et le corps de Thade", "lire les cahiers bordeaux", "décider : détruire le corps, lire les cahiers, ou les deux", "préparer la montée vers le sommet"],
            sorties_possibles: ["vers s2_vers_s3_escalier_du_sommet (corps détruit, Thade affaibli)", "vers s2_vers_s3_escalier_du_sommet (cahiers lus, compréhension sans affaiblir)", "vers s2_vers_s3_escalier_du_sommet (vu sans agir, montée sans avantage)"],
            si_les_pj_bloquent: "Dernière scène avant le sommet. Le Magi-Tuteur est un guide précieux s'il est vivant. Dans tous les cas, le Scénario 3 commence au sommet. Les conditions de départ dépendent des choix faits ici.",
            conditions_sortie: [
              "Les PJ ont détruit le corps de Thade dans la cuve.",
              "OU les PJ ont lu les cahiers bordeaux et compris qui Thade est.",
              "OU les PJ ont vu sans agir — ils montent sans avantage.",
              "OU les PJ font demi-tour — le Scénario 3 commence dans les pires conditions.",
            ],
            transition_defaut: "Les PJ quittent le Laboratoire de Verre. L'escalier du sommet est devant eux. Le vortex pulse au-dessus. Le Magi-Tuteur, s'il est vivant, dit : « C'est là-haut. Tout ce qu'il a fait, c'est pour là-haut. » Que font les PJ ?",
          },
        },

        {
          id: "s2_vers_s3_escalier_du_sommet",
          titre: "L'Escalier du Sommet",
          type: "Transition",
          resume_mj:
            "Après le Laboratoire de Verre, les PJ montent vers le sommet. Un escalier en colimaçon de pierre claire, sans porte intermédiaire. Le bourdonnement du vortex change de ton à chaque étage. L'air sent la lavande puis plus rien. La lumière passe du doré au violet. C'est le dernier moment avant l'affrontement final.",
          idLieu: "tour_arcanique",
          idsPnj: [],
          idsPnjImpliques: ["thade_coren", "sealine_coren"],

          format_livre: {
            ambiance:
              "L'escalier est étroit, taillé dans une pierre claire qui n'est pas tout à fait du calcaire. Les marches sont usées au centre, comme si des milliers de pas les avaient creusées. Les murs sont nus — pas de tableaux, pas de runes, pas de décorations. La lumière change à chaque demi-tour : dorée au premier palier, blanche au deuxième, puis violette. L'air sent la lavande au début, puis perd toute odeur. Le bourdonnement du vortex est constant, mais il monte en intensité. Au dernier palier, il devient un son grave qui vibre dans la poitrine.",
            deroulement_narratif:
              "Les PJ montent. Il n'y a pas d'ennemis, pas de piège, pas d'obstacle. Juste l'escalier, le son et la lumière qui change.\n\nAu premier palier, les PJ entendent la voix de Thade. Pas des mots — un murmure continu, comme une prière ou une conversation sans fin. Si les PJ ont lu les cahiers du Laboratoire de Verre, ils reconnaissent le rythme : c'est la même écriture, la même cadence, transformée en voix. Le MJ peut demander un test de Perception DD 10 pour distinguer des mots fragmentés : « Sealine », « bientôt », « je suis proche ». Si les PJ ont écrit dans le cahier, Thade peut murmurer une phrase qu'ils ont écrite — il sait qu'ils sont là.\n\nAu deuxième palier, l'odeur de lavande disparaît. L'air devient neutre, sans saveur. Les PJ qui ont traversé une zone déphasée reconnaissent la sensation : c'est l'absence d'odeur de la Spirale. Le déphasage est ici. La Tour n'est plus tout à fait dans Valombre. Le MJ décrit : les murs de l'escalier deviennent légèrement translucides. On voit le ciel violet à travers la pierre. Les marches sont solides mais la sensation sous les pieds est étrange — comme marcher sur du verre épais.\n\nSi les PJ s'arrêtent et écoutent (Perception DD 12) : un second son sous le murmure de Thade. Un bourdonnement grave, régulier, qui vibre dans la poitrine. C'est le vortex. Il est proche.\n\nSi un PJ veut faire demi-tour : il peut. L'escalier descend. Mais il n'y a rien en bas — le Laboratoire de Verre est vide, la Tour est silencieuse. Le MJ dit : « Vous pouvez redescendre. Mais Thade ne s'arrêtera pas. » Aucun PJ ne est bloqué. C'est un choix.\n\nSi les PJ ont le magi-tuteur avec eux : il s'arrête au deuxième palier. Il dit : « Je ne peux pas monter plus loin. Je ne peux pas le voir comme ça. » Il reste au palier. Si les PJ redescendent après le combat, il est toujours là.\n\nAu dernier palier, une porte. Pas de serrure, pas de barre. Elle s'ouvre quand les PJ s'approchent. Derrière : la lumière violette du sommet, le son du vortex, et la silhouette de Thade au centre de la plateforme.\n\nLe MJ demande aux PJ s'ils veulent se préparer — sorts, objets, derniers mots. C'est le dernier moment de calme. Le décompte des victimes de la Tour est rappelé : combien d'étudiants libérés, combien de gardes évités, combien de créatures retournées. Ce nombre compte pour l'épilogue. Le MJ peut aussi rappeler les preuves accumulées : les cahiers, le schéma de la Larme, l'annotation de Sealine, les bocaux, la liste des patients. Chaque preuve est une arme potentielle au sommet.",
            notes_mj:
              "Cette scène n'a pas de jets. C'est un sas dramatique. Le MJ ralentit le rythme, décrit l'escalier, laisse les PJ parler entre eux. Si un PJ veut écrire dans le cahier de Thade avant de monter, c'est le moment. Si un PJ veut faire un dernier discours, c'est le moment. La porte s'ouvre seule — Thade sait qu'ils arrivent. Il les attend.",
          },

          texte_a_lire:
            "L'escalier monte en colimaçon. La pierre est claire, usée au centre des marches. Les murs sont nus. La lumière change à chaque palier : dorée, puis blanche, puis violette. L'air perd son odeur au deuxième étage. Le bourdonnement du vortex vibre dans les murs.\n\nAu dernier palier, une porte. Pas de serrure. Elle s'ouvre quand vous vous approchez. Derrière : la lumière violette du sommet, le son du vortex, et une silhouette au centre de la plateforme.",

          objectif: "Monter au sommet. Se préparer. Franchir la porte.",

          contexte_mj: {
            situation:
              "Les PJ quittent le Laboratoire de Verre et montent l'escalier vers le sommet de la Tour. Il n'y a pas d'obstacle. L'escalier est un passage sensoriel : la lumière, le son et l'odeur changent à chaque palier. La porte du sommet s'ouvre seule.",
            secrets: [
              "Le murmure de Thade au premier palier est le même rythme que l'écriture des cahiers. Thade parle à Sealine en continu depuis le vortex.",
              "L'absence d'odeur au deuxième palier indique que la Tour est déphasée. Le sommet n'est plus tout à fait dans le monde matériel.",
              "La porte s'ouvre seule parce que Thade sait que les PJ arrivent. Il les attend.",
            ],
            rappels: [
              "Rappeler le décompte des victimes de la Tour : étudiants libérés, gardes évités, créatures retournées. Ce nombre détermine le ton de l'épilogue.",
              "Si les PJ ont détruit le corps dans la cuve, Thade est affaibli d'une phase au sommet.",
              "Si les PJ ont écrit dans le cahier, Thade a lu. Il peut répondre pendant le combat.",
            ],
          },

          defis: [],

          indices: [
            { indice: "Le murmure de Thade", localisation: "Premier palier", detection: "Perception DD 10", information: "Un murmure continu, comme une prière. Le rythme correspond à l'écriture des cahiers.", usage: "Comprendre que Thade parle à Sealine depuis le vortex. Il ne s'est pas arrêté." },
            { indice: "L'absence d'odeur", localisation: "Deuxième palier", detection: "Automatique", information: "L'air perd toute odeur. La lavande disparaît. C'est la sensation du déphasage.", usage: "Comprendre que le sommet de la Tour est déphasé. La Spirale est proche." },
          ],

          guide_mj: {
            intention: "Créer un sas dramatique entre la révélation du Laboratoire de Verre et l'affrontement final. Ralentir le rythme. Laisser les PJ respirer avant le combat.",
            mise_en_place: "Escalier en colimaçon. Lumière changeante. Son montant. Porte sans serrure au sommet. Le MJ ralentit le rythme — une marche à la fois si nécessaire.",
            deroulement: [
              "Les PJ quittent le Laboratoire de Verre.",
              "Ils montent l'escalier. Le MJ décrit chaque palier.",
              "Au premier palier : le murmure de Thade. Perception DD 10 pour des mots fragmentés.",
              "Au deuxième palier : l'absence d'odeur. Les murs translucides. Le déphasage.",
              "Le magi-tuteur s'arrête au deuxième palier. Il ne monte pas.",
              "Au dernier palier : la porte s'ouvre.",
              "Les PJ se préparent. Le MJ rappelle le décompte des victimes et les preuves accumulées.",
              "Les PJ franchissent la porte. Le Scénario 3 commence.",
            ],
            actions_utiles: [
              "Se préparer (sorts, objets, derniers mots).",
              "Écrire dans le cahier de Thade avant de monter (si retourné au laboratoire).",
              "Rappeler le décompte des victimes.",
              "Rappeler les preuves accumulées (cahiers, schéma, annotation, bocaux, patients).",
              "Faire un dernier discours.",
              "Faire demi-tour (possible mais inutile — Thade ne s'arrête pas).",
            ],
            fronts_heritiers: ["Front 'Le Plan de Thade' — Thade attend au sommet.", "Couche 'Le Déphasage' — le sommet est déphasé. La Spirale est là."],
            jeu_des_pnj: "Aucun PNJ présent. Le murmure de Thade est le seul signe de vie. Sealine est de l'autre côté du vortex. Le magi-tuteur, s'il a accompagné, reste au deuxième palier — il dit : « Je prierai pour vous. »",
            escalade: "Aucune. La scène ne peut pas tourner au combat. Si les PJ veulent redescendre, ils le peuvent — mais il n'y a rien en bas. Le MJ dit : « Vous pouvez redescendre. Mais Thade ne s'arrêtera pas. »",
            sortie: "Les PJ franchissent la porte. Le Scénario 3 commence.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent savoir que le sommet est déphasé et que Thade les attend.",
            ne_pas_bloquer_sur_un_jet: "Aucun jet requis. L'escalier est un passage narratif pur.",
            question_dramatique: "Êtes-vous prêts à affronter Thade après avoir vu qui il est vraiment ?",
          },

          transitions: {
            resume: "Les PJ franchissent la porte du sommet. La lumière violette les accueille. Le vortex bourdonne. Thade est là. Le Scénario 3 commence.",
            reussite: "Les PJ montent préparés. Ils ont détruit le corps ou lu les cahiers. Ils savent qui est Thade.",
            echec: "Les PJ montent sans préparation. Ils n'ont ni détruit le corps ni lu les cahiers. Ils ne savent pas qui est Thade.",
          },

          navigation: {
            indice_indispensable: "Les PJ doivent savoir ce qui les attend au sommet : le vortex, la Larme de Vael, et Thade lui-même.",
            consequence_si_manque: "Si les PJ montent sans préparation, ils ne savent pas qui est Thade. La confrontation est plus difficile. Le Magi-Tuteur peut les informer s'il est vivant.",
            pnj_alternatifs: ["magi_tuteur_loyal — peut expliquer le vortex et la Larme si il accompagne les PJ"],
            front_si_ignore: "Tous les fronts — le sommet est le point de non-retour. Si les PJ ne montent pas, tous les fronts avancent jusqu'à la catastrophe.",
            scenes_alternatives: [],
            sorties_jouables: [
              {
                condition: "Les PJ montent préparés (corps détruit ou cahiers lus)",
                sceneId: "s3_vortex",
                type: "indice_principal",
                moteur: "Le Scénario 3 commence. Les PJ ont un avantage narratif.",
                accroche_mj: "La porte du sommet s'ouvre. La lumière violette vous accueille. Le vortex bourdonne. Thade est là. Vous savez qui il est. Vous savez ce qu'il a fait. Vous êtes prêts. Le Scénario 3 commence.",
                consequence_si_refus: "Si les PJ ne montent pas, le seuil s'ouvre sans opposition.",
              },
              {
                condition: "Les PJ montent sans préparation",
                sceneId: "s3_vortex",
                type: "echec",
                moteur: "Le Scénario 3 commence dans les pires conditions.",
                accroche_mj: "La porte du sommet s'ouvre. La lumière violette vous accueille. Le vortex bourdonne. Thade est là. Vous ne savez pas qui il est vraiment. Vous n'avez ni détruit son corps ni lu ses cahiers. Le Scénario 3 commence. Bonne chance.",
                consequence_si_refus: "Si les PJ ne montent pas, le seuil s'ouvre. Tout est perdu.",
              },
              {
                condition: "Les PJ veulent faire demi-tour (dernier moment)",
                sceneId: "s2_laboratoire_verre",
                type: "libre",
                moteur: "Les PJ peuvent revenir au Laboratoire de Verre pour détruire le corps ou lire les cahiers.",
                accroche_mj: "Vous êtes à la porte du sommet. Vous pouvez encore faire demi-tour. Le Laboratoire de Verre est en dessous. Le corps. Les cahiers. Mais le temps presse. Chaque minute, le vortex grandit.",
                consequence_si_refus: "Si les PJ font demi-tour, le vortex grandit. Le déphasage s'accélère. Le sommet sera plus difficile au retour.",
              },
              {
                condition: "Le Magi-Tuteur accompagne les PJ",
                sceneId: "s3_vortex",
                type: "pnj",
                moteur: "Le Magi-Tuteur peut expliquer le vortex et la Larme avant la confrontation.",
                accroche_mj: "Le Magi-Tuteur s'arrête à la porte. 'Je ne peux pas monter. Mais sachez ceci : la Larme est le catalyseur. Le vortex est le seuil. Thade est les deux à la fois. Si vous détruisez la Larme, vous fermez le seuil. Mais Thade... Thade est lié à la Larme. C'est son choix.' Montez.",
                consequence_si_refus: "Si le Magi-Tuteur est mort, les PJ montent sans cette explication.",
              },
              {
                condition: "Le front 'Le Sceau qui cède' est à 6 segments (maximum)",
                sceneId: "s3_vortex",
                type: "urgence_front",
                moteur: "Le sceau est entièrement cédé. Le seuil s'ouvre. Les PJ doivent monter maintenant.",
                accroche_mj: "Le sol tremble. Les murs de la Tour se fissurent. Le ciel de Valombre vire au violet. Le sceau cède. Le seuil s'ouvre. Si vous ne montez pas maintenant, c'est fini. Montez. Montez. Montez.",
                consequence_si_refus: "Si les PJ ne montent pas, le seuil s'ouvre entièrement. Le Scénario 3 commence dans les pires conditions imaginables.",
              },
            ],
            fallback_mj: "L'Escalier du Sommet est une scène de transition. Il n'y a pas d'alternative : les PJ doivent monter. Le seul choix est de faire demi-tour au Laboratoire de Verre (dernier moment) ou de monter. Les conditions de départ du Scénario 3 dépendent des choix faits au Laboratoire de Verre.",
            objectif_scene: "Monter au sommet de la Tour pour affronter Thade et le rituel de la Larme de Vael. Scène de transition vers le Scénario 3.",
            pression: "Le sceau cède. Le vortex s'ouvre. Si les PJ ne montent pas, le seuil s'ouvre entièrement. Le Scénario 3 commence dans les pires conditions.",
            actions_pj_attendues: ["monter l'escalier vers le sommet", "se préparer mentalement et physiquement", "éventuellement faire demi-tour (dernier moment)", "éventuellement discuter avec le Magi-Tuteur si présent"],
            sorties_possibles: ["vers s3_vortex (monter préparés)", "vers s3_vortex (monter sans préparation)", "vers s2_laboratoire_verre (demi-tour — dernier moment)"],
            si_les_pj_bloquent: "Pas d'alternative : les PJ doivent monter. Si les PJ refusent, le sceau cède entièrement et le seuil s'ouvre. Le Scénario 3 commence dans les pires conditions.",
            conditions_sortie: [
              "Les PJ montent au sommet — le Scénario 3 commence.",
              "OU les PJ font demi-tour vers le Laboratoire de Verre (dernier moment).",
              "OU les PJ refusent de monter — le seuil s'ouvre, le Scénario 3 commence dans les pires conditions.",
            ],
            transition_defaut: "Les PJ atteignent le sommet de l'escalier. La porte est ouverte. Le vortex pulse au-delà. Thade est là. Le Scénario 3 commence.",
          },
        },
      ],
    },
  ],
};
