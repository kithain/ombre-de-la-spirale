/**
 * Scénario 1 — Le Serment des Sept Thanes
 *
 * Les PJ commencent comme outils de Thade Coren, envoyés enquêter sur
 * des profanations de tombes naines. Ils découvrent que les tombes des
 * Sept Thanes ne sont pas des monuments mais les points visibles du
 * verrou qui scelle la Spirale.
 */
export const scenario1 = {
  id: "scenario1",
  titre: "Le Serment des Sept Thanes",
  niveau: "Niveaux 1-4 · 6-8 séances · Acte I de la trilogie",

  vue_ensemble: {
    tone:
      "Enquête qui s'assombrit. On commence dans l'atmosphère confiant d'un mandataire de l'Université, puis on bascule vers le mystère, la suspicion et l'horreur douce d'une cité qui ne sait pas ce qu'elle garde.",
    themes: [
      "La mémoire perdue — une cité qui a oublié pourquoi elle enterre ses fondateurs.",
      "La manipulation bienveillante — un homme brillant qui ne ment jamais mais qui ne dit jamais toute la vérité.",
      "Le verrou caché — les tombes ne sont pas des monuments, ce sont des ancrages actifs.",
      "Le choix impossible — servir un homme bon ou combattre un homme que personne ne veut arrêter.",
    ],
    question_dramatique:
      "Les PJ peuvent-ils découvrir que Thade Coren, l'homme qui les a engagés, est celui qui profane les tombes — et que les tombes sont le verrou de la Spirale ?",
    ce_que_les_pj_savent: [
      "Des profanations ont lieu au Cimetière des Terrasses.",
      "Thade Coren, Archimage respecté, les a engagés pour enquêter.",
      "Les clans nains ne parlent pas à l'Université.",
      "Le Conseil traite cela comme du vandalisme.",
    ],
    ce_que_les_pj_doivent_decouvrir: [
      "Les Sept Thanes ne sont pas des fondateurs honorés : ce sont les ancrages du sceau qui maintient la Spirale close.",
      "Les profanations utilisent des outils de l'Université — quelqu'un à l'intérieur est impliqué.",
      "Le protocole S-01 relie Thade à la catastrophe de Nyx et à Sealine.",
      "Thade lui-même orchestre les prélèvements d'ossements pour ouvrir le seuil.",
      "La Résistance de la Vieille Ville est une alternative à l'Université.",
    ],
    structure: [
      {
        acte: "Acte I — L'Engagement",
        resume:
          "Les PJ acceptent la mission de Thade, descendent aux Terrasses, rencontrent Thorgar et Jaren. La mort de Jaren bascule la campagne.",
        scenes: 3,
        severite: "Confiance → Suspicion",
      },
      {
        acte: "Acte II — La Découverte du Verrou",
        resume:
          "Les PJ comprennent que les tombes sont un système d'ancrage. Thorgar révèle les rites d'Edhrek-Murn. Les archives dévoilent S-01. Olane devient une alliée.",
        scenes: 3,
        severite: "Suspicion → Révélation",
      },
      {
        acte: "Acte III — Le Tournant",
        resume:
          "Le sceau cède visiblement. La Résistance s'offre comme alternative. Les PJ doivent choisir leur camp : Thade, la Résistance, ou une troisième voie.",
        scenes: 3,
        severite: "Révélation → Choix",
      },
    ],
    pnj_cles: [
      {
        id: "thade_coren",
        nom: "Thade Coren",
        role: "Mandataire des PJ. Antagoniste caché. Poli, précis, jamais cruel — l'atrocité est dans l'efficacité.",
      },
      {
        id: "thorgar_pretre_nain",
        nom: "Thorgar",
        role: "Prêtre nain du Temple-Forgeron. Gardien des rites qu'il accomplit sans comprendre. Allié potentiel.",
      },
      {
        id: "jaren_velt",
        nom: "Jaren Velt",
        role: "Étudiant de l'Université. Agent de Thade. Sa mort marque le tournant du scénario.",
      },
      {
        id: "maera_olane",
        nom: "Maëra Olane",
        role: "Rectrice et conseillère. Alliée institutionnelle isolée. Fournit accès, données et couverture légale.",
      },
      {
        id: "mara_dirigeante",
        nom: "Mara",
        role: "Dirigeante de la Résistance. Cherche la vérité sur Nyx depuis huit ans.",
      },
      {
        id: "sealine_coren",
        nom: "Sealine Vael",
        role: "Épouse de Thade, présumée morte à Nyx. Inscrite sous le nom marital « Coren, S. — 12-VAEL » dans les dossiers médicaux. Le récit la nomme Sealine Vael. Les cahiers de Thade la nomment Sealine. Elle est le motif de tout.",
      },
    ],
    lieux_cles: [
      {
        id: "bureau_thade_universite",
        nom: "Bureau de Thade Coren",
        role: "Point de départ. Lavande, papier ancien, coffret plombé.",
      },
      {
        id: "cimetiere_thanes",
        nom: "Cimetière des Terrasses",
        role: "Centre de l'enquête. Tombes en gradins, Mausolée du Seuil, Puits de l'Abîme.",
      },
      {
        id: "temple_forgeron",
        nom: "Temple-Forgeron de Moradin",
        role: "Chapelle souterraine. Lieu des révélations sur les rites d'Edhrek-Murn.",
      },
      {
        id: "archives_scellees_universite",
        nom: "Archives Médicales Scellées",
        role: "Sous-sol de l'Université. Dossier S-01 et lien avec Sealine.",
      },
      {
        id: "maison_des_retours",
        nom: "Maison des Retours",
        role: "QG de la Résistance dans la Vieille Ville. Alternative à l'Université.",
      },
    ],
  },

  revelations_indispensables: [
    {
      id: "rev_verrou_thanes",
      titre: "Les tombes des Sept Thanes sont le verrou de la Spirale",
      resume:
        "Les Sept Thanes ne sont pas des fondateurs honorés. Leurs tombes sont les points visibles d'un système d'ancrage qui maintient le sceau fermant la Spirale. Les os portent des runes d'ancrage. Les rites d'Edhrek-Murn les maintiennent.",
      sources: [
        "Temple-Forgeron : Thorgar montre les gestes et identifie les runes (Acte II, scène 1).",
        "Cimetière des Terrasses : les runes dans les os sont visibles dès la première descente (Acte I, scène 2).",
      ],
      declencheur: "Diplomatie DD 14 avec Thorgar OU Connaissances (religion) DD 15 sur les runes.",
      plan_b:
        "Si les PJ ratent Thorgar, Olane peut orienter vers les archives. Le Mausolée du Seuil et son froid anormal sont perceptibles sans jet. Thorgar finit par dire que les rites existent et que les profanations les brisent.",
      consequence_si_ratee:
        "Les PJ ne comprennent pas l'enjeu réel. Ils traitent les profanations comme du vandalisme et rapportent à Thade sans soupçon. Le Scénario 2 démarre avec un retard critique.",
    },
    {
      id: "rev_outils_universite",
      titre: "Les profanations utilisent des outils de l'Université",
      resume:
        "Les passages sous les dalles ont été creusés avec des ciselets d'Université, pas des outils de vandale. Quelqu'un à l'intérieur de l'institution est impliqué.",
      sources: [
        "Cimetière des Terrasses : Investigation DD 14 sur les passages (Acte I, scène 2).",
      ],
      declencheur: "Investigation DD 14.",
      plan_b:
        "Même en cas d'échec, Thorgar dit que trois tombes ont été touchées et que les passages viennent par en-dessous. Le MJ peut faire remarquer la précision des coupes sans révéler l'origine exacte.",
      consequence_si_ratee:
        "Les PJ ne relient pas les profanations à l'Université. La piste de Thade reste invisible plus longtemps. Le Scénario 2 commence sans soupçon institutionnel.",
    },
    {
      id: "rev_protocol_s01",
      titre: "Le protocole S-01 relie Thade à Nyx et à Sealine",
      resume:
        "Le dossier médical scellé de Sealine Vael (inscrit sous le nom marital Coren, S. — 12-VAEL) contient le protocole S-01, établi 28 jours avant la catastrophe de Nyx. S-01 = Sealine. Thade a exploré la 'littérature interdite' avant la catastrophe. Nyx n'était pas un accident — c'était une tentative de sauver Sealine qui a mal tourné.",
      sources: [
        "Archives Médicales Scellées : dossier 'Coren, S. — 12-VAEL — Médical' (Acte II, scène 2).",
        "Notes de Jaren Velt : cachet de Caldris et écriture inconnue (Acte I, scène 2).",
      ],
      declencheur: "Médecine DD 15 ou Investigation DD 12 dans les archives.",
      plan_b:
        "Le nom 'S-01' et la référence à la 'littérature interdite' sont lisibles sans jet. Olane peut faire le lien si les PJ lui montrent le dossier. Le cachet de Caldris sur les notes de Jaren est trouvable par Discrétion DD 12.",
      consequence_si_ratee:
        "Les PJ ne comprennent pas le motif de Thade. Sans S-01, Thade reste un bienfaiteur incompréhensible. La confrontation du Scénario 3 perd sa dimension tragique.",
    },
    {
      id: "rev_thade_orchestre",
      titre: "Thade Coren orchestre lui-même les prélèvements",
      resume:
        "Thade ne se contente pas d'enquêter : il commande les profanations. Jaren Velt était son agent. Les textes des Endeuillés d'Edran Morn viennent de la Réserve Interdite — Thade les a laissés circuler. Les os convergent vers la Tour Arcanique.",
      sources: [
        "Mort de Jaren : rune de Dissection à Distance, signature de Thade (Acte I, scène 3).",
        "Résistance : le Collecteur confirme que des caisses d'os circulent dans les égouts (Acte III, scène 2).",
        "Olane : les flux arcaniques sont détournés vers la Tour (Acte II, scène 3).",
      ],
      declencheur: "Connaissances (mystères) DD 16 sur la rune + Renseignements DD 14 avec le Collecteur.",
      plan_b:
        "Le parfum de lavande relie le bureau de Thade à la mort de Jaren sans jet. Le Collecteur peut confirmer les caisses d'os avec Diplomatie DD 13. Olane dit 'La Tour. Regardez la Tour.' même en cas d'échec.",
      consequence_si_ratee:
        "Les PJ soupçonnent l'Université mais pas Thade personnellement. Le choix du Scénario 1 (Acte III) perd sa force. Les PJ peuvent rejoindre la Résistance sans comprendre qui ils combattent.",
    },
    {
      id: "rev_resistance_existe",
      titre: "La Résistance de la Vieille Ville est une alternative à l'Université",
      resume:
        "Un réseau clandestin — Mara, Ursula, le Collecteur, Sniv — soigne les malades, cache les fugitifs et cherche la vérité sur Thade depuis huit ans. Ils ont accès aux égouts, à la pègre et aux malades — des pistes que l'Université ne peut pas fournir.",
      sources: [
        "Maison des Retours : rencontre avec Mara et le réseau (Acte III, scène 2).",
      ],
      declencheur: "Diplomatie DD 13 avec Mara.",
      plan_b:
        "Même en cas d'échec, Mara offre un repas et dit que la Résistance existe. Les PJ peuvent revenir. Sniv propose de montrer les passages des égouts indépendamment de la confiance de Mara.",
      consequence_si_ratee:
        "Les PJ restent dépendants de l'Université pour leur enquête. Sans accès aux égouts et à la pègre, ils ne peuvent pas suivre la piste des ossements. Le Scénario 2 démarre avec moins de ressources et d'alliés.",
    },
  ],

  fronts_actifs: [
    {
      id_front: "front_plan_thade",
      nom: "Le Plan de Thade",
      etat_initial:
        "Thade a récupéré les fragments d'os des Thanes T-01 à T-03 via les profanations récentes, plus T-04 grâce à un prélèvement ancien jamais découvert (coffret plombé dans son bureau). Trois tombes sont officiellement profanées ; la quatrième l'a été discrètement il y a des années. Il utilise l'Université comme couverture et les PJ comme outils d'enquête pour contrôler l'information. L'horloge est à l'étape 1.",
      manifestation_scenarios:
        "Thade engage les PJ pour enquêter sur ses propres profanations. Jaren Velt est son agent sur le terrain. La mort de Jaren est un nettoyage. Les os convergent vers la Tour par les égouts.",
      interactions_scenes: [
        {
          scene: "Le Bureau de Thade Coren",
          interaction:
            "Thade recrute les PJ comme outils. Le coffret plombé est visible. L'horloge avance d'un segment si les PJ acceptent sans poser de questions.",
        },
        {
          scene: "Première Descente aux Terrasses",
          interaction:
            "Jaren transmet chaque découverte à Thade. Les PJ travaillent pour l'antagoniste sans le savoir.",
        },
        {
          scene: "La Mort de Jaren Velt",
          interaction:
            "Thade élimine un témoin gênant. La rune de Dissection à Distance est sa signature. L'horloge avance d'un segment.",
        },
        {
          scene: "Le Bureau d'Olane",
          interaction:
            "Olane révèle que les flux sont détournés vers la Tour. Si les PJ la protègent, l'horloge ralentit. Si ils l'ignorent, Thade accélère son isolement.",
        },
      ],
      leviers_pj_scenario:
        "Les PJ peuvent ralentir ce front en : refusant de transmettre leurs découvertes à Thade, en protégeant Olane, en suivant les os via les égouts, en comprenant que Jaren était un agent.",
    },
    {
      id_front: "front_sceau_qui_cede",
      nom: "Le Sceau qui cède",
      etat_initial:
        "Trois des sept tombes sont officiellement touchées au début du scénario. En réalité, une quatrième (T-04) a été prélevée discrètement il y a des années — Thade avait déjà commencé avant que la crise ne soit visible. Le froid et les vibrations s'étendent vers les galeries. L'horloge est à l'étape 1-2.",
      manifestation_scenarios:
        "Les profanations sont le symptôme visible. Le Mausolée vibre, le Puits de l'Abîme pulse. À l'Acte III, cinq tombes sur sept sont touchées. Thorgar accomplit les rites incomplets chaque nuit.",
      interactions_scenes: [
        {
          scene: "Première Descente aux Terrasses",
          interaction:
            "Les PJ voient trois tombes touchées. Le froid du Mausolée est perceptible. Premier signe que le sceau cède.",
        },
        {
          scene: "Le Temple-Forgeron et les Rites Perdus",
          interaction:
            "Thorgar révèle que les rites maintiennent le sceau. Si les PJ proposent de restaurer les rites, le MJ retire un segment de l'horloge.",
        },
        {
          scene: "Le Retour au Cimetière",
          interaction:
            "Cinq tombes sur sept sont touchées. Le bourdonnement du Puits est audible. L'horloge est à l'étape 3-4. Urgence maximale.",
        },
      ],
      leviers_pj_scenario:
        "Les PJ peuvent ralentir ce front en : restaurant les rites avec Thorgar (retire un segment), en protégeant les deux dernières tombes, en récupérant les ossements pour les replacer.",
    },
    {
      id_front: "front_cite_sous_pression",
      nom: "La Cité sous pression",
      etat_initial:
        "Le Conseil traite les profanations comme du vandalisme. L'Université défère à Thade par confiance. Olane est isolée. L'horloge est à l'étape 1.",
      manifestation_scenarios:
        "L'Université classe les anomalies comme incidents locaux. Olane n'a plus accès à ses données. Le Conseil enterre la crise sous la procédure. La mémoire du sceau est perdue.",
      interactions_scenes: [
        {
          scene: "Le Bureau de Thade Coren",
          interaction:
            "Thade instrumentalise son statut institutionnel. Le Conseil ne s'intéresse pas au Cimetière.",
        },
        {
          scene: "Le Bureau d'Olane",
          interaction:
            "Olane est le pont entre l'Université et le Conseil. Si les PJ la soutiennent, l'Université peut être retournée. Sinon, elle reste isolée et le front avance.",
        },
        {
          scene: "Le Temple-Forgeron et les Rites Perdus",
          interaction:
            "La mémoire perdue est un enjeu direct. Thorgar accomplit des gestes sans comprendre leur sens. C'est le symptôme de l'oubli institutionnel.",
        },
      ],
      leviers_pj_scenario:
        "Les PJ peuvent ralentir ce front en : soutenant Olane publiquement, en rassemblant des preuves pour le Conseil, en restaurant la mémoire du sceau via Thorgar et les archives.",
    },
    {
      id_front: "front_factions_crise",
      nom: "Les Factions de la Crise",
      etat_initial:
        "Les cercles de Nyx commencent à s'organiser. Edran Morn recrute parmi les endeuillés. Le Champion n'est pas encore visible. L'horloge est à l'étape 1, à peine visible.",
      manifestation_scenarios:
        "Présence limitée. Les PJ peuvent croiser des agents de Thade ou des Endeuillés d'Edran Morn au Cimetière la nuit. Le cachet de Caldris sur les notes de Jaren est une amorce vers Elian Voss. La Résistance existe déjà mais n'est pas encore un acteur public.",
      interactions_scenes: [
        {
          scene: "Première Descente aux Terrasses",
          interaction:
            "Les notes de Jaren portent un cachet de Caldris — amorce de la piste Elian Voss pour le Scénario 2.",
        },
        {
          scene: "La Rencontre avec la Résistance",
          interaction:
            "La Résistance est un acteur de la crise. Le Collecteur a des informations sur les caisses d'os dans les égouts. Sniv a trouvé des passages récents.",
        },
      ],
      leviers_pj_scenario:
        "Les PJ peuvent amorcer ce front en : rencontrant la Résistance, en suivant le cachet de Caldris, en évitant de radicaliser les Endeuillés s'ils les croisent.",
    },
  ],

  scenes_structure: {
    legende: {
      obligatoire: "La scène doit se jouer. Sans elle, le scénario perd sa colonne vertébrale.",
      obligatoire_flexible:
        "La scène doit se jouer, mais son ordre, sa forme ou son lieu peuvent varier. La révélation qu'elle apporte est indispensable.",
      optionnel: "La scène enrichit l'expérience mais peut être sautée ou condensée sans casser le scénario.",
    },
    scenes: [
      {
        titre: "Le Bureau de Thade Coren",
        acte: "Acte I",
        statut: "obligatoire",
        ordre: 1,
        dependances: [],
        revele: ["Thade engage les PJ", "coffret plombé visible", "parfum de lavande"],
        flexible:
          "Peut se jouer dans n'importe quel lieu de l'Université si le bureau ne convient pas. L'essentiel est le mandat et le doute optionnel.",
      },
      {
        titre: "Première Descente aux Terrasses",
        acte: "Acte I",
        statut: "obligatoire",
        ordre: 2,
        dependances: ["Le Bureau de Thade Coren"],
        revele: ["outils d'Université", "runes dans l'os", "froid du Mausolée", "notes de Jaren"],
        flexible:
          "Thorgar peut être remplacé par un autre gardien nain si besoin. Jaren doit être présent — c'est sa seule apparition avant sa mort.",
      },
      {
        titre: "La Mort de Jaren Velt",
        acte: "Acte I",
        statut: "obligatoire",
        ordre: 3,
        dependances: ["Première Descente aux Terrasses"],
        revele: ["rune de Dissection à Distance", "parfum de lavande", "pages arrachées"],
        flexible:
          "Le timing peut varier (lendemain ou surlendemain). Si les PJ ne sont pas sur place, on les fait appeler. La scène peut aussi se jouer au Pavillon Nord ou ailleurs dans l'Université.",
      },
      {
        titre: "Le Temple-Forgeron et les Rites Perdus",
        acte: "Acte II",
        statut: "obligatoire_flexible",
        ordre: 4,
        dependances: ["Première Descente aux Terrasses"],
        revele: ["rites d'Edhrek-Murn", "runes d'ancrage", "les tombes sont un système actif"],
        flexible:
          "La révélation sur les rites peut venir d'une autre source (archives, vieux textes) si les PJ n'ont pas gagné la confiance de Thorgar. Mais Thorgar est le meilleur vecteur narratif.",
      },
      {
        titre: "Les Archives Médicales Scellées",
        acte: "Acte II",
        statut: "obligatoire_flexible",
        ordre: 5,
        dependances: ["La Mort de Jaren Velt"],
        revele: ["protocole S-01", "Sealine", "littérature interdite", "Nyx n'était pas un accident"],
        flexible:
          "Les PJ peuvent trouver S-01 par d'autres moyens : cahiers personnels de Thade, confidences d'Olane, ou le laboratoire d'Elian Voss (si le MJ avance cette piste). Mais le dossier scellé est la source la plus directe.",
      },
      {
        titre: "Le Bureau d'Olane",
        acte: "Acte II",
        statut: "obligatoire_flexible",
        ordre: 6,
        dependances: ["La Mort de Jaren Velt"],
        revele: ["flux détournés vers la Tour", "isolement d'Olane", "Olane est une alliée"],
        flexible:
          "Olane peut rencontrer les PJ ailleurs (bibliothèque, couloir, Conseil). L'essentiel est qu'elle devienne une alliée si les PJ apportent des preuves. Sans cette scène, les PJ perdent leur seul accès institutionnel.",
      },
      {
        titre: "Le Retour au Cimetière",
        acte: "Acte III",
        statut: "obligatoire_flexible",
        ordre: 7,
        dependances: ["Le Temple-Forgeron et les Rites Perdus"],
        revele: ["cinq tombes sur sept touchées", "empreinte planaire", "urgence maximale"],
        flexible:
          "Peut être fusionné avec une scène d'action si les PJ interceptent des profanateurs sur place. L'essentiel est l'urgence : le sceau est proche de la rupture.",
      },
      {
        titre: "La Rencontre avec la Résistance",
        acte: "Acte III",
        statut: "obligatoire_flexible",
        ordre: 8,
        dependances: [],
        revele: ["la Résistance existe", "passages des égouts", "caisses d'os avec cachet de Caldris"],
        flexible:
          "La Résistance peut contacter les PJ plutôt que l'inverse. Ursula, Tibbet ou un malade aidé peuvent servir de pont. La scène peut se jouer plus tôt si les PJ cherchent des alliés en dehors de l'Université.",
      },
      {
        titre: "Le Choix",
        acte: "Acte III",
        statut: "obligatoire",
        ordre: 9,
        dependances: ["Le Retour au Cimetière", "La Rencontre avec la Résistance"],
        revele: ["le moment pivot", "Thade prélève les os pour ouvrir le seuil"],
        flexible:
          "Le choix peut être différé mais pas évité. Si les PJ refusent de choisir, le temps passe et le sceau cède davantage. La scène peut se jouer dans n'importe quel lieu neutre.",
      },
    ],
    scenes_optionnelles: [
      {
        titre: "Interception de profanateurs",
        description:
          "Les PJ croisent des agents de Thade ou des Endeuillés d'Edran Morn au Cimetière de nuit. Combat ou négociation possible.",
        declencheur: "Si les PJ visitent le Cimetière de nuit sans prévenir.",
        apport: "Preuve directe que les profanations sont organisées. Possibilité de capturer un agent et de l'interroger.",
      },
      {
        titre: "Les Égouts avec Sniv",
        description:
          "Sniv guide les PJ dans les passages creusés entre le Cimetière et la Vieille Ville. Exploration, dangers, et découverte des caisses d'os.",
        declencheur: "Si les PJ acceptent l'aide de Sniv après la Rencontre avec la Résistance.",
        apport: "Preuve physique du circuit des ossements. Piste directe vers la Tour ou vers les destinataires.",
      },
      {
        titre: "Confrontation avec un Loyaliste",
        description:
          "Les PJ interpellent un maître arcaniste loyaliste qui défend l'Université. Débat institutionnel.",
        declencheur: "Si les PJ cherchent à alerter l'Université avant d'avoir des preuves solides.",
        apport: "Comprendre que l'Université n'est pas complice mais aveugle. Le loyaliste peut être retourné plus tard.",
      },
      {
        titre: "Visite à Ursula",
        description:
          "Les PJ rencontrent Ursula dans son dispensaire clandestin. Elle soigne des malades que l'Université refuse.",
        declencheur: "Si les PJ cherchent des soins ou des informations sur les malades de la Vieille Ville.",
        apport: "Comprendre l'ampleur humaine de la crise. Ursula peut servir de pont vers la Résistance.",
      },
    ],
  },

  encadres_mj: [
    {
      id: "enc_pj_ratent",
      titre: "Que faire si les PJ ratent leurs jets",
      situation:
        "Les PJ échouent à répétition aux jets d'Investigation, de Connaissances ou de Diplomatie. Ils n'ont aucun indice, aucune révélation, aucun allié.",
      principe:
        "Le scénario ne se bloque jamais sur un jet. Chaque révélation a un plan B. Si tous les jets échouent, le MJ utilise les PNJ comme vecteurs de l'information.",
      proceder: [
        {
          etape: "Identifier ce qui manque",
          detail:
            "Quelle révélation indispensable n'a pas été obtenue ? Consulter la liste des revelations_indispensables et leur plan_b.",
        },
        {
          etape: "Utiliser un PNJ comme vecteur",
          detail:
            "Thorgar dit ce qu'il sait sans jet si les PJ lui posent la bonne question. Olane fait le lien si les PJ lui montrent le dossier. Le Collecteur donne les informations sur les caisses si les PJ acceptent le repas de Mara.",
        },
        {
          etape: "Laisser le monde réagir",
          detail:
            "Si les PJ n'ont pas compris que le sceau cède, le monde le leur montre : le froid s'étend, les lanternes s'éteignent, les mineurs refusent de descendre. Les signes visibles des fronts avancent sans jet.",
        },
        {
          etape: "Différer, pas bloquer",
          detail:
            "Si les PJ ratent la scène des Archives, S-01 peut être trouvé plus tard — dans les cahiers de Thade au Scénario 2, ou par Olane qui fait le lien elle-même. La révélation est différée, pas perdue.",
        },
      ],
      a_ne_pas_faire:
        "Ne pas faire rejouer le jet. Ne pas donner l'information gratuitement. Ne pas punir les PJ pour leurs échecs — laisser le monde s'adapter et offrir d'autres voies.",
    },
    {
      id: "enc_accusent_thade",
      titre: "Que faire si les PJ accusent Thade prématurément",
      situation:
        "Dès la scène 1 ou 2, les PJ soupçonnent Thade et l'accusent ouvertement, sans preuve.",
      principe:
        "Thade ne peut pas être accusé sans preuve. L'Université le protège. Le Conseil lui fait confiance. Une accusation prématurée se retourne contre les PJ.",
      proceder: [
        {
          etape: "Thade reste calme",
          detail:
            "Thade ne se défend pas avec agressivité. Il écoute, il acquiesce, il dit : « Je comprends votre suspicion. C'est exactement pourquoi j'ai besoin de vous. Si je suis le coupable, enquêter est le meilleur moyen de le prouver. » Il retourne l'accusation en mandat.",
        },
        {
          etape: "L'Université protège Thade",
          detail:
            "Si les PJ vont au Conseil ou à l'Université sans preuve, on leur dit que Thade est l'Archimage, qu'il a sauvé la cité, et que des enquêteurs sans preuves ne sont pas crédibles. Pas par méchanceté — par confiance institutionnelle.",
        },
        {
          etape: "Olane comme soupape",
          detail:
            "Si les PJ cherchent un allié pour leur suspicion, Olane est la bonne porte. Elle ne confirme pas, mais elle ne ferme pas. Elle dit : « Apportez-moi quelque chose. N'importe quoi. Et je vous écoute. »",
        },
        {
          etape: "Transformer l'accusation en enquête",
          detail:
            "Le MJ guide les PJ vers la collecte de preuves : la rune sur la nuque de Jaren, le dossier S-01, les caisses d'os dans les égouts. L'accusation n'est pas annulée — elle est transformée en projet d'enquête.",
        },
      ],
      a_ne_pas_faire:
        "Ne pas faire arrêter les PJ. Ne pas faire punir Thade par le MJ. Ne pas confirmer ni infirmer l'accusation sans preuve. Laisser les PJ formuler leur hypothèse et la tester.",
    },
    {
      id: "enc_refusent_mission",
      titre: "Que faire si les PJ refusent la mission de Thade",
      situation:
        "Les PJ refusent l'ordre de mission de Thade dès la scène 1. Ils ne veulent pas travailler pour l'Université.",
      principe:
        "Le refus est un choix valide. Mais les profanations continuent. Le sceau cède. Le monde n'attend pas les PJ.",
      proceder: [
        {
          etape: "Thade accepte le refus",
          detail:
            "Thade ne insiste pas. Il dit : « Je comprends. Si vous changez d'avis, vous savez où me trouver. » Il trouve d'autres enquêteurs — moins compétents, plus dociles. Les profanations continuent.",
        },
        {
          etape: "Le monde avance sans les PJ",
          detail:
            "Le MJ fait avancer les horloges. Une nouvelle tombe est touchée chaque semaine. Le froid s'étend. Les mineurs commencent à parler. Les symptômes apparaissent dans la Vieille Ville. Les PJ entendent les rumeurs.",
        },
        {
          etape: "La Résistance comme porte d'entrée",
          detail:
            "Si les PJ refusent l'Université, ils peuvent rencontrer la Résistance par d'autres voies : un malade soigné par Ursula, un fugitif caché par Mara, un passage découvert par Sniv. La Résistance ne demande pas un ordre de mission — elle demande de l'aide.",
        },
        {
          etape: "Thorgar comme alternative",
          detail:
            "Thorgar cherche de l'aide. Si les PJ descendent aux Terrasses par eux-mêmes, il les accueille. Il n'a pas besoin de l'ordre de mission de l'Université — il a besoin de quelqu'un qui écoute.",
        },
        {
          etape: "Le retard a un prix",
          detail:
            "Si les PJ refusent et reviennent plus tard, le sceau a cédé davantage. Trois tombes touchées deviennent quatre ou cinq. Olane est plus isolée. La Résistance est plus désespérée. Le scénario se joue, mais dans des conditions plus difficiles.",
        },
      ],
      a_ne_pas_faire:
        "Ne pas forcer les PJ à accepter. Ne pas punir le refus. Ne pas annuler les conséquences du retard. Le monde avance, les PJ décident quand ils entrent.",
    },
    {
      id: "enc_tuent_thorgar",
      titre: "Que faire si les PJ attaquent ou tuent Thorgar",
      situation:
        "Les PJ, par panique ou par erreur, attaquent Thorgar ou le tuent.",
      principe:
        "Thorgar est le seul à connaître les rites. Sans lui, le sceau perd son dernier gardien. Mais le scénario ne se termine pas.",
      proceder: [
        {
          etape: "Conséquences immédiates",
          detail:
            "Les gardes du Temple-Forgeron interviennent. Les PJ sont chassés des Terrasses. Les clans nains coupent tout contact. La réputation des PJ est entachée.",
        },
        {
          etape: "Les rites s'arrêtent",
          detail:
            "Sans Thorgar, les rites d'Edhrek-Murn ne sont plus accomplis. L'horloge du front « Le Sceau qui cède » accélère — le MJ ajoute un segment par session.",
        },
        {
          etape: "Alternative pour les rites",
          detail:
            "Les rites peuvent être retrouvés dans les archives du Temple-Forgeron, mais ils nécessitent Connaissances (religion) DD 18 et plusieurs sessions de recherche. Un autre prêtre nain peut être formé, mais il faut du temps — temps que les PJ n'ont pas.",
        },
        {
          etape: "La Résistance comme voie",
          detail:
            "Mara peut envoyer quelqu'un qui connaît les rites partiels — un vieux nain de la Vieille Ville, ancien apprenti du maître de Thorgar. Mais il est fragile, et les rites qu'il connaît sont incomplets.",
        },
      ],
      a_ne_pas_faire:
        "Ne pas annuler l'impact de la mort de Thorgar. Ne pas rendre les rites trivialement retrouvables. Les PJ ont cassé quelque chose d'irremplaçable — le monde le leur rappelle.",
    },
    {
      id: "enc_vont_au_conseil",
      titre: "Que faire si les PJ vont au Conseil trop tôt",
      situation:
        "Les PJ tentent d'alerter le Conseil de Valombre avant d'avoir des preuves solides.",
      principe:
        "Le Conseil traite les profanations comme du vandalisme. Sans preuve arcanique ou témoignage de poids, l'alerte est classée.",
      proceder: [
        {
          etape: "Le Conseil écoute poliment",
          detail:
            "Un conseiller reçoit les PJ. Il prend des notes. Il dit que le sujet sera examiné. Il ne ment pas — il examine. Mais l'examen est lent, procédurier, et Thade a plus de poids institutionnel que les PJ.",
        },
        {
          etape: "Thade neutralise",
          detail:
            "Thade, informé par ses contacts au Conseil, intervient discrètement. Il ne discrédite pas les PJ — il reformule. Il dit : « J'ai déjà engagé ces enquêteurs. Ils font un excellent travail. Le Conseil n'a pas à s'inquiéter. » Il transforme l'alerte en confirmation de sa propre diligence.",
        },
        {
          etape: "Olane comme voix au Conseil",
          detail:
            "Si les PJ ont gagné la confiance d'Olane, elle peut porter leur voix au Conseil. Mais elle a besoin de preuves — sans preuve, elle est isolée et le Conseil l'ignore.",
        },
        {
          etape: "Le Conseil comme acteur tardif",
          detail:
            "Le Conseil n'agit que face à une preuve irréfutable ou à une crise visible. Si le sceau cède visiblement (froid, tremblements, anomalies), le Conseil réagit — mais tard, trop tard pour prévenir.",
        },
      ],
      a_ne_pas_faire:
        "Ne pas ridiculiser les PJ au Conseil. Ne pas bloquer la voie institutionnelle. Le Conseil est lent, pas hostile. Il protège Thade par confiance, pas par complicité.",
    },
  ],

  aides_jeu: {
    indices_recap: [
      {
        indice: "Ciselets d'Université",
        scene: "Première Descente aux Terrasses",
        jet: "Investigation DD 14",
        info: "Les passages sous les dalles ont été creusés avec des outils de précision d'Université, pas des outils de vandale.",
        pointeur: "Quelqu'un à l'Université est impliqué.",
      },
      {
        indice: "Runes dans l'os",
        scene: "Première Descente aux Terrasses",
        jet: "Médecine DD 12 ou Connaissances (religion) DD 15",
        info: "Les ossements prélevés portent des runes d'ancrage gravées. Ce ne sont pas des décorations — ce sont des points de fixation rituelle.",
        pointeur: "Les tombes sont un système actif, pas des monuments.",
      },
      {
        indice: "Notes de Jaren — cachet de Caldris",
        scene: "Première Descente aux Terrasses",
        jet: "Discrétion DD 12 ou Vol DD 14",
        info: "Le carnet de Jaren contient des pages en écriture inconnue et un cachet de Caldris. Certaines pages ont été arrachées après sa mort.",
        pointeur: "Jaren avait un contact extérieur. Piste pour Elian Voss (Scénario 2).",
      },
      {
        indice: "Rune de Dissection à Distance",
        scene: "La Mort de Jaren Velt",
        jet: "Connaissances (mystères) DD 16",
        info: "La rune sur la nuque de Jaren est une variante publiée par Thade Coren il y a six ans. Signature arcanique identifiable.",
        pointeur: "Thade a tué Jaren. Ou quelqu'un qui utilise ses méthodes.",
      },
      {
        indice: "Parfum de lavande",
        scene: "Le Bureau de Thade Coren / La Mort de Jaren Velt",
        jet: "Perception DD 10",
        info: "Le même parfum de lavande alchimique dans le bureau de Thade et sur le lieu de la mort de Jaren.",
        pointeur: "Relie Thade à la mort de Jaren. Pas une preuve, mais un indice atmosphérique.",
      },
      {
        indice: "Pages arrachées du carnet de Jaren",
        scene: "La Mort de Jaren Velt",
        jet: "Investigation DD 13",
        info: "Les pages écrites ont été arrachées proprement après la mort. Quelqu'un a pris les notes.",
        pointeur: "Les notes contenaient des informations sur S-01 et le cachet de Caldris.",
      },
      {
        indice: "Protocole S-01",
        scene: "Les Archives Médicales Scellées",
        jet: "Médecine DD 15 ou Investigation DD 12",
        info: "Dossier médical de Sealine Vael (nom marital : Coren, S. — 12-VAEL). S-01 = Sealine, premier patient. Protocole établi 28 jours avant Nyx. Mention « littérature interdite ».",
        pointeur: "Thade explorait la littérature interdite avant la catastrophe. Nyx n'était pas un accident.",
      },
      {
        indice: "Flux détournés vers la Tour",
        scene: "Le Bureau d'Olane",
        jet: "Fourni par Olane",
        info: "Les flux arcaniques de l'Université sont détournés vers la Tour Arcanique par quelqu'un qui a un accès de haut niveau.",
        pointeur: "Thade utilise les ressources de l'Université pour son rituel.",
      },
      {
        indice: "Caisses d'os dans les égouts",
        scene: "La Rencontre avec la Résistance",
        jet: "Renseignements DD 14 ou Diplomatie DD 13 avec le Collecteur",
        info: "Des caisses d'os circulent dans les égouts. Cachet de Caldris et marquage d'Université. Convergent vers la Tour.",
        pointeur: "Circuit physique des ossements : Cimetière → égouts → Tour.",
      },
      {
        indice: "Runes qui changent",
        scene: "Le Retour au Cimetière",
        jet: "Connaissances (mystères) DD 16",
        info: "Les runes d'ancrage sur les tombes touchées se transforment en runes d'ouverture. Quelqu'un remplace le sceau par un autre système.",
        pointeur: "Thade ne brise pas le sceau — il le remplace par un système d'ouverture.",
      },
      {
        indice: "Empreinte planaire au Mausolée",
        scene: "Le Retour au Cimetière",
        jet: "Connaissances (mystères) DD 14",
        info: "Le froid du Puits de l'Abîme porte une texture planaire. La Spirale filtre par les fissures du sceau.",
        pointeur: "Le sceau cède. La Spirale est déjà là, partiellement.",
      },
    ],

    pnj_recap: [
      {
        id: "thade_coren",
        nom: "Thade Coren",
        faction: "Université",
        role_court: "Mandataire / Antagoniste caché",
        apparition: "Scène 1, puis en filigrane jusqu'à la fin",
        info_cle: "Engage les PJ pour enquêter sur ses propres profanations. S-01 est son motif. La lavande est sa signature.",
        dd_clés: "Connaissances (mystères) DD 16 pour identifier la rune de Dissection à Distance",
      },
      {
        id: "thorgar_pretre_nain",
        nom: "Thorgar",
        faction: "Temple-Forgeron",
        role_court: "Gardien des rites / Allié potentiel",
        apparition: "Scène 2, puis Acte II et III",
        info_cle: "Connaît les gestes d'Edhrek-Murn mais pas leur sens. Seul à pouvoir restaurer les rites.",
        dd_clés: "Diplomatie DD 14 pour qu'il montre les gestes",
      },
      {
        id: "jaren_velt",
        nom: "Jaren Velt",
        faction: "Université (agent de Thade)",
        role_court: "Surveillant / Victime",
        apparition: "Scène 2, mort scène 3",
        info_cle: "Transmet les découvertes des PJ à Thade. Son carnet contient le cachet de Caldris. Tué par Dissection à Distance.",
        dd_clés: "Discrétion DD 12 pour examiner le carnet",
      },
      {
        id: "maera_olane",
        nom: "Maëra Olane",
        faction: "Université (isolée)",
        role_court: "Alliée institutionnelle",
        apparition: "Acte II, scène 3",
        info_cle: "Sait que les flux sont détournés. Isolée par l'institution. Peut fournir accès, données et couverture.",
        dd_clés: "Pas de jet — elle s'ouvre si les PJ apportent des preuves",
      },
      {
        id: "mara_dirigeante",
        nom: "Mara",
        faction: "Résistance",
        role_court: "Dirigeante de la Résistance",
        apparition: "Acte III, scène 2",
        info_cle: "Cherche la vérité sur Nyx depuis huit ans. Offre une alternative à l'Université.",
        dd_clés: "Diplomatie DD 13 pour gagner sa confiance",
      },
      {
        id: "le_collecteur",
        nom: "Le Collecteur",
        faction: "Résistance",
        role_court: "Récupérateur d'informations",
        apparition: "Acte III, scène 2",
        info_cle: "Connaît le circuit des caisses d'os dans les égouts. Cachet de Caldris et marquage d'Université.",
        dd_clés: "Renseignements DD 14 ou Diplomatie DD 13",
      },
      {
        id: "sniv_kobold",
        nom: "Sniv",
        faction: "Résistance",
        role_court: "Guide des égouts",
        apparition: "Acte III, scène 2",
        info_cle: "Kobold qui connaît les passages souterrains. Peut montrer les passages creusés récents.",
        dd_clés: "Pas de jet — il propose son aide spontanément",
      },
      {
        id: "ursula_fraternite",
        nom: "Ursula",
        faction: "Résistance",
        role_court: "Soigneuse clandestine",
        apparition: "Acte III, scène 2 (ou scène optionnelle)",
        info_cle: "Soigne les malades que l'Université refuse. Les symptômes ressemblent à ceux de Sealine.",
        dd_clés: "Pas de jet — elle parle si les PJ cherchent des soins",
      },
    ],

    lieux_recap: [
      {
        id: "bureau_thade_universite",
        nom: "Bureau de Thade Coren",
        zone: "Université — Pavillon Nord, dernier étage",
        ambiance: "Lavande, papier ancien, coffret plombé. Vue sur la Tour.",
        scenes: ["Le Bureau de Thade Coren"],
      },
      {
        id: "cimetiere_thanes",
        nom: "Cimetière des Terrasses",
        zone: "Flanc nord de la colline",
        ambiance: "Gradins de pierre, lanternes funéraires, froid anormal. Mausolée au centre.",
        scenes: ["Première Descente aux Terrasses", "Le Retour au Cimetière"],
      },
      {
        id: "mausolee_seuil",
        nom: "Mausolée du Seuil",
        zone: "Centre du Cimetière",
        ambiance: "Dalle vibrante, bourdonnement du Puits de l'Abîme, froid planaire.",
        scenes: ["Le Retour au Cimetière"],
      },
      {
        id: "temple_forgeron",
        nom: "Temple-Forgeron de Moradin",
        zone: "Sous les Terrasses",
        ambiance: "Martèlement de l'enclume, bas-reliefs usés, chapelle souterraine.",
        scenes: ["Le Temple-Forgeron et les Rites Perdus"],
      },
      {
        id: "archives_scellees_universite",
        nom: "Archives Médicales Scellées",
        zone: "Université — Pavillon Sud, sous-sol",
        ambiance: "Cuir, produits de conservation, lampe alchimique bourdonnante.",
        scenes: ["Les Archives Médicales Scellées"],
      },
      {
        id: "salle_4b",
        nom: "Bureau d'Olane",
        zone: "Université — Salle 4B",
        ambiance: "Dossiers, graphiques, fils de laine, café d'orge. Désordre organisé.",
        scenes: ["Le Bureau d'Olane"],
      },
      {
        id: "maison_des_retours",
        nom: "Maison des Retours",
        zone: "Vieille Ville — derrière une blanchisserie",
        ambiance: "Savon, soupe, cire à briquet. Lits de malades, rideaux de vieux draps.",
        scenes: ["La Rencontre avec la Résistance"],
      },
      {
        id: "qg_resistance",
        nom: "Salle de filtration (QG temporaire)",
        zone: "Égouts des Terrasses",
        ambiance: "Voûte basse, tuyaux rouillés, table de pierre, lampe alchimique.",
        scenes: ["Le Choix"],
      },
    ],

    chronologie: [
      {
        phase: "Avant le scénario",
        evenements: [
          "Il y a 8 ans : catastrophe de Nyx. Sealine se sacrifie. Thade survit.",
          "Il y a 8 ans : Thade devient Archimage de l'Université. L'Université est reconstruite.",
          "Il y a 6 ans : Thade publie la variante de Dissection à Distance.",
          "Depuis 8 ans : Thade prélève les ossements des Thanes par intermittence.",
          "Depuis 8 ans : la Résistance se forme autour de Mara et Ursula.",
          "Récemment : Thade accélère les prélèvements. Trois tombes touchées.",
        ],
      },
      {
        phase: "Acte I — L'Engagement (semaine 1)",
        evenements: [
          "Jour 1 : Thade engage les PJ.",
          "Jour 2-3 : Première descente aux Terrasses. Thorgar, Jaren, indices.",
          "Jour 3-5 : Mort de Jaren Velt. Le scénario bascule.",
        ],
      },
      {
        phase: "Acte II — La Découverte du Verrou (semaines 2-3)",
        evenements: [
          "Thorgar révèle les rites d'Edhrek-Murn.",
          "Les PJ infiltrent les Archives. S-01 est découvert.",
          "Olane devient une alliée. Les flux sont confirmés.",
          "Une quatrième tombe est touchée si les PJ tardent.",
        ],
      },
      {
        phase: "Acte III — Le Tournant (semaine 4)",
        evenements: [
          "Cinq tombes sur sept sont touchées. Le sceau cède visiblement.",
          "La Résistance s'offre comme alternative.",
          "Le Choix : Thade, la Résistance, ou une troisième voie.",
          "Le scénario se termine sur la décision des PJ.",
        ],
      },
      {
        phase: "Transition vers le Scénario 2",
        evenements: [
          "Si les PJ ont rejoint la Résistance : ils ont des alliés, des égouts, et des ennemis à l'Université.",
          "Si les PJ restent avec Thade : ils ont un mandat, des ressources, et un doute qui grandit.",
          "Si les PJ ont confronté Thade : la relation est tendue, mais pas rompue. Thade surveille.",
          "Dans tous les cas : le déphasage commence à se manifester. Les routes mentent doucement.",
        ],
      },
    ],
  },

  synopsis:
    "Valombre vit sur un verrou qu'elle ne nomme plus. Quand des tombes naines sont profanées au Cimetière des Terrasses, l'Archimage Thade Coren engage les PJ pour enquêter. Ce qu'ils découvrent dépasse de loin le simple vandalisme : les Sept Thanes ne sont pas des fondateurs honorés, ce sont les ancrages du sceau qui maintient la Spirale close. Et quelqu'un prélève leurs ossements.",

  evenements_mondiaux: {
    chronologie_inevitable: [
      "Les profanations continuent au Cimetière. Une nouvelle tombe est touchée chaque semaine si les PJ n'interviennent pas.",
      "Le froid et les vibrations s'étendent depuis le Cimetière vers les galeries de la mine.",
      "Thade renforce ses prélèvements via l'Université. Des fragments d'os convergent vers la Tour Arcanique.",
      "L'Université classe les anomalies comme incidents locaux. Olane est isolée professionnellement.",
    ],
    consequences_echecs: [
      "Si les PJ ignorent les profanations : le Front 'Le Sceau qui cède' avance d'une étape.",
      "Si les PJ servent Thade sans poser de questions : le Front 'Le Plan de Thade' avance.",
      "Si les PJ détruisent des preuves pour protéger Thade : Olane perd ses derniers indices.",
      "Si les PJ quittent Valombre sans conclure : le déphasage s'aggrave.",
    ],
  },

  actes: [
    // ── ACTE I — L'ENGAGEMENT ──────────────────────────────────────
    {
      titre: "Acte I — L'Engagement",
      stake: "Les PJ acceptent une mission de Thade Coren sans savoir qu'ils servent l'antagoniste principal.",
      location: "Université Arcanique & Cimetière des Terrasses",

      scenes: [
        {
          id: "s1_bureau_thade",
          titre: "Le Bureau de Thade Coren",
          type: "Social",
          resume_mj:
            "Thade reçoit les PJ dans son bureau. Poli, précis, jamais pressé. Il leur demande d'enquêter sur des profanations au Cimetière. Il présente cela comme un service à la cité.",
          idLieu: "bureau_thade_universite",
          idsPnj: ["thade_coren"],

          format_livre: {
            ambiance:
              "Le bureau de Thade Coren occupe le dernier étage du Pavillon Nord de l'Université. On y monte par un escalier en colimaçon dont les marches sont usées au centre — des décennies d'érudits ont gravé ce passage. La porte est en chêne massif, sans plaque, sans nom. On frappe, on attend. La lavande flotte dans l'air bien avant que la porte ne s'ouvre.\n\nL'intérieur sent la lavande et le papier ancien. Des livres tapissent les murs du sol au plafond, rangés par couleur de reliure — un système de classification qui n'appartient qu'à Thade. Un coffret plombé repose sur une étagère, à hauteur d'épaule, sans serrure apparente. La fenêtre donne sur les toits de l'Université et, au loin, sur la Tour Arcanique.\n\nThade se lève quand les PJ entrent. Il est grand, mince, vêtu de gris. Son visage porte les traces d'un homme qui a survécu à quelque chose qu'il n'évoquera pas. Il propose du thé — un thé d'orge amer, pas une boisson de cérémonie. L'expression est celle d'un homme qui a déjà pleuré tout ce qu'il pouvait pleurer.",
            deroulement_narratif:
              "Thade accueille les PJ avec une courtoisie précise, sans chaleur excessive. Il les installe, propose du thé, prend le temps de les regarder. Puis il va droit au fait.\n\nQuelqu'un profane les tombes du Cimetière des Terrasses. Les clans nains ne parlent pas à l'Université. Le Conseil traite cela comme du vandalisme. Ce n'est pas du vandalisme. Thade le sait. Il ne dit pas pourquoi il le sait — il présente cela comme une intuition d'archimage, un sentiment de celui qui connaît sa cité.\n\nIl offre un ordre de mission et une bourse. L'ordre donne aux PJ un accès officiel au Cimetière et aux Terrasses. La bourse est modeste — pas assez pour acheter des mercenaires, assez pour vivre. Il précise : enquêter discrètement. Ne pas alerter le Conseil. Ne pas effrayer les clans.\n\nSi les PJ posent des questions sur l'Ordre de Nyx, Thade répond avec calme. Il se présente comme un survivant, pas comme un coupable. Il a perdu des collègues. Il a perdu quelqu'un qu'il aimait. Il a reconstruit. Ce qu'il ne dit pas : il a reconstruit pour rouvrir le seuil.\n\nLe coffret plombé est visible sur l'étagère. Un œil attentif remarque les runes de conservation funéraire gravées sur le plomb. Un nez attentif remarque que la lavande n'est pas un parfum ordinaire — c'est un masque olfactif alchimique.\n\nThade ne ment jamais directement. Il omet, il cadre, il oriente. Il dit « patrimoine » et non « sépultures ». Il dit « matériel » et non « recherches ». Chaque mot est choisi. Si un PJ perçoit ce soin, c'est le premier indice : Thade construit son discours.",
            notes_mj:
              "Cette scène est le piège. Les PJ doivent vouloir travailler pour Thade. Si le MJ joue Thade comme un méchant évident, tout le scénario s'effondre. Thade est charismatique, crédible, et sincère dans sa douleur. Ce qui le rend dangereux n'est pas le mensonge — c'est l'omission.",
          },

          texte_a_lire:
            "Le bureau de Thade Coren sent la lavande et le papier ancien. Des livres tapissent les murs du sol au plafond. Un coffret plombé repose sur une étagère. Thade se lève quand vous entrez — l'expression d'un homme qui a déjà pleuré tout ce qu'il pouvait pleurer.\n\n« Asseyez-vous. Je vais être direct. Quelqu'un profane les tombes du Cimetière des Terrasses. Les clans nains ne parlent pas à l'Université, et le Conseil traite cela comme du vandalisme. Ce n'est pas du vandalisme. »",

          objectif: "Accepter la mission de Thade : enquêter sur les profanations et identifier les responsables.",

          contexte_mj: {
            situation:
              "Thade a besoin d'enquêteurs extérieurs. Il présente les profanations comme un crime ordinaire. Il ne mentionne ni la Spirale, ni les Thanes, ni la Larme de Vael.",
            secrets: [
              "Thade sait qui profane les tombes : ses propres agents ou les Endeuillés d'Edran Morn qu'il a indirectement encouragés.",
              "Le coffret plombé contient des fragments d'os des Thanes T-01 à T-04. Trois proviennent des profanations récentes (T-01, T-02, T-03). Le quatrième (T-04) est un prélèvement ancien, réalisé il y a plusieurs années avant que la crise ne soit visible — Thade avait déjà commencé.",
              "Thade dit 'matériel' et jamais 'recherches'. Il choisit ses mots avec précision.",
            ],
            rappels: [
              "Thade ne ment jamais directement. Il omet, il cadre, il oriente.",
              "L'ordre de mission donne aux PJ un accès officiel au Cimetière et aux Terrasses.",
            ],
          },

          defis: [
            {
              competence: "Psychologie",
              dd: 15,
              reussite: "Thade cache quelque chose. Pas un mensonge, une omission soigneusement construite. Il parle des tombes comme de 'patrimoine' et non de 'sépultures'.",
              echec: "Thade semble sincère. Un homme brillant qui a survécu à une catastrophe et veut protéger sa cité.",
            },
            {
              competence: "Investigation",
              dd: 13,
              reussite: "Le coffret plombé est marqué de runes de conservation funéraire. Son contenu ressemble à des fragments d'os.",
              echec: "Le bureau est impeccable. Rien de suspect, sauf un parfum de lavande un peu trop intense.",
            },
          ],

          indices: [
            {
              indice: "Le coffret plombé",
              localisation: "Étagère du bureau de Thade",
              detection: "Investigation DD 13 ou Détection de la magie",
              information: "Fragments d'os conservés dans un liquide alchimique. Runes de préservation funéraire naine.",
              usage: "Premier indice que Thade s'intéresse aux tombes pour plus que des raisons patrimoniales.",
            },
            {
              indice: "Le choix de mots de Thade",
              localisation: "Conversation",
              detection: "Psychologie DD 15",
              information: "Thade dit 'matériel' et pas 'recherches'. Il évite tout mot reliant les sépultures à un fonctionnement.",
              usage: "Signal que Thade construit son discours. Pas une preuve, mais un motif de méfiance.",
            },
          ],

          guide_mj: {
            intention: "Établir Thade comme charismatique et crédible. Les PJ doivent vouloir travailler pour lui.",
            mise_en_place: "Thade reçoit les PJ seul, à la tombée du jour. Le moment est confidentiel.",
            deroulement: [
              "Thade accueille les PJ, les met à l'aise, propose du thé.",
              "Il expose le problème : profanations, clans méfiants, Conseil indifférent.",
              "Il offre un ordre de mission et une bourse. Précise : enquêter discrètement.",
              "Il répond aux questions avec calme. Se présente comme un survivant de Nyx, pas comme un coupable.",
            ],
            actions_utiles: [
              "Accepter la mission et prendre l'ordre de mission.",
              "Poser des questions sur l'Ordre de Nyx et la catastrophe.",
              "Demander à voir le Cimetière de nuit.",
            ],
            fronts_heritiers: [
              "Front 'Le Plan de Thade' — les PJ deviennent les yeux de Thade.",
              "Front 'Le Sceau qui cède' — les profanations sont le symptôme visible.",
            ],
            jeu_des_pnj: "Thade est poli, précis, jamais cruel. L'atrocité est dans l'efficacité, pas dans le ton.",
            escalade: "Si les PJ refusent, Thade n'insiste pas. Mais le lendemain, le Conseil publie un avis — les PJ se retrouvent sans accès au Cimetière.",
            sortie: "Les PJ quittent le bureau avec une mission et l'impression d'avoir rencontré un homme bon.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent savoir que Thade les envoie au Cimetière et que les profanations ciblent les tombes des Sept Thanes.",
            ne_pas_bloquer_sur_un_jet: "Même si les PJ échouent leur Psychologie, Thade leur donne la mission.",
            question_dramatique: "Les PJ peuvent-ils faire confiance à un homme qui ne ment jamais mais qui ne dit jamais toute la vérité ?",
          },

          transitions: {
            resume: "La scène se termine quand les PJ acceptent la mission et quittent le bureau.",
            reussite: "Les PJ partent avec la mission ET un doute.",
            echec: "Les PJ partent avec la mission et aucune méfiance. Ils sont des outils dociles.",
          },
        },

        {
          id: "s1_premiere_descente",
          titre: "Première Descente aux Terrasses",
          type: "Investigation",
          resume_mj:
            "Les PJ examinent les tombes profanées. Thorgar les accueille avec réserve. Les dalles portent des traces de prélèvement. Jaren Velt, étudiant de l'Université, est présent pour 'assister' — en réalité pour surveiller.",
          idLieu: "cimetiere_thanes",
          idsPnj: ["thorgar_pretre_nain", "jaren_velt"],

          format_livre: {
            ambiance:
              "Le Cimetière des Terrasses descend en gradins sur le flanc nord de la colline, comme un amphithéâtre taillé pour les morts. Des allées de pierre grise séparent les terrasses, bordées de lanternes funéraires au verre épais. L'air est froid — plus froid qu'il ne devrait l'être en cette saison, plus froid que dans les rues de la ville à cent mètres en contrebas. Le froid vient d'en dessous. Il remonte des fondations comme une respiration lente.\n\nUn prêtre nain attend près de l'allée centrale. Il porte un tablier de forge sous sa chasuble — un homme qui travaille le métal et la pierre avant de travailler l'âme. Thorgar. Il garde ces terrasses depuis que son maître est mort, et il accomplit les rites que son maître lui a transmis sans comprendre pourquoi.\n\nJaren Velt est déjà là. Il prend des notes sur un carnet relié cuir, accroupi près d'une dalle, l'air concentré d'un étudiant appliqué. Il est serviable, anxieux, et transmettra tout ce qu'il voit à Thade le soir même.",
            deroulement_narratif:
              "Thorgar accueille les PJ avec une réserve polie. Il accepte l'ordre de mission parce qu'il est officiel, mais il ne fait pas confiance aux humains de l'Université. Il les mène aux tombes profanées — trois des sept terrasses ont été touchées.\n\nLes dalles sont intactes. Les inscriptions sont lisibles. Mais les fondations ont été percées par en-dessous, avec des outils de précision. Des ciselets d'Université, pas des outils de vandale. Les passages sont étroits, nets, faits par quelqu'un qui connaît la pierre. Investigation DD 14 pour identifier les marques.\n\nLes restes prélevés portent des marques de rites funéraires nains très anciens — des runes gravées dans l'os lui-même. Médecine DD 12 pour les remarquer. Ces runes ne sont pas décoratives : ce sont des ancrages rituels. Thorgar peut les identifier si les PJ lui montrent, mais il ne sait plus ce qu'elles ancrent.\n\nJaren observe tout. Il prend des notes dans deux écritures — la sienne et une autre, plus ancienne. Certaines pages portent un cachet de Caldris. Discrétion DD 12 ou Vol DD 14 pour examiner le carnet sans qu'il remarque. S'il remarque, il devient nerveux et range le carnet.\n\nSi les PJ demandent à voir le Mausolée du Seuil, Thorgar hésite. Diplomatie DD 13 pour le convaincre. Le Mausolée est au centre du Cimetière, une construction basse en pierre sombre. La dalle centrale vibre. Les lanternes vacillent sans vent. Le courant d'air froid qui remonte du Puits de l'Abîme est perceptible à tous — pas besoin de jet.",
            notes_mj:
              "Thorgar parle peu et lentement. Il connaît les gestes mais pas leur sens. Sa frustration est palpable : il sent que quelque chose ne va pas, mais il ne peut pas le relier à un cadre explicite. Jaren est serviable, anxieux, et transmet ses notes à Thade le soir même. Si les PJ accusent Jaren sans preuve, Thorgar les fait expulser par les gardes du Temple.",
          },

          texte_a_lire:
            "Le Cimetière des Terrasses descend en gradins sur le flanc de la colline. L'air est froid, plus froid qu'il ne devrait l'être.\n\nUn prêtre nain vous attend près de l'allée centrale. Il porte un tablier de forge sous sa chasuble. « Vous êtes les envoyés de l'Université ? Je suis Thorgar. Je garde ces terrasses. Venez. »",

          objectif: "Examiner les tombes profanées, identifier la méthode des prélèvements et évaluer l'étendue des dégâts.",

          contexte_mj: {
            situation:
              "Trois des sept tombes ont été touchées. Les dalles sont intactes mais les fondations ont été percées avec des outils de précision. Jaren Velt prend des notes pour Thade.",
            secrets: [
              "Les passages ont été creusés avec des ciselets d'Université, pas des outils de vandale.",
              "Jaren travaille pour Thade. Il transmet tout ce que les PJ trouvent.",
              "Le froid près du Mausolée est un signe que le sceau cède. Thorgar le sait mais ne le dit pas aux étrangers.",
            ],
            rappels: [
              "Thorgar ne fait pas confiance aux humains de l'Université. Il accepte les PJ parce que l'ordre est officiel.",
              "Jaren est nerveux. Il a des notes médicales dans une écriture qui n'est pas la sienne.",
            ],
          },

          defis: [
            {
              competence: "Investigation",
              dd: 14,
              reussite: "Les passages ont été creusés avec des outils de précision — des ciselets d'Université. Quelqu'un qui connaît la pierre a fait ce travail.",
              echec: "Les tombes ont été forcées par en dessous. Difficile de dire avec quels outils.",
            },
            {
              competence: "Médecine",
              dd: 12,
              reussite: "Les restes prélevés portent des marques de rites funéraires nains très anciens — des runes gravées dans l'os.",
              echec: "Les ossements manquants étaient anciens. Rien de plus à dire.",
            },
            {
              competence: "Diplomatie",
              dd: 13,
              reussite: "Thorgar accepte de montrer le Mausolée du Seuil. Il ne dit pas pourquoi il est important, mais il les laisse ressentir le froid.",
              echec: "Thorgar refuse l'accès au Mausolée. « Ce n'est pas pour les étrangers. »",
            },
          ],

          indices: [
            {
              indice: "Outils d'Université",
              localisation: "Passages sous les dalles",
              detection: "Investigation DD 14",
              information: "Ciselets et marques de forage correspondent à du matériel d'Université.",
              usage: "Premier lien entre les profanations et l'Université.",
            },
            {
              indice: "Runes dans l'os",
              localisation: "Fragments d'os restants",
              detection: "Médecine DD 12 ou Connaissances (histoire) DD 14",
              information: "Les os portent des runes gravées dans le tissu osseux. Ce sont des ancrages rituels.",
              usage: "Comprendre que les Thanes ne sont pas des fondateurs ordinaires.",
            },
            {
              indice: "Le froid du Mausolée",
              localisation: "Mausolée du Seuil",
              detection: "Perception passive ou Investigation DD 10",
              information: "Courant d'air froid. Les lanternes funéraires vacillent.",
              usage: "Signe que quelque chose d'anormal se passe sous le Cimetière.",
            },
            {
              indice: "Les notes de Jaren",
              localisation: "Carnet de Jaren Velt",
              detection: "Discrétion DD 12 ou Vol DD 14",
              information: "Jaren prend des notes dans deux écritures. Certaines pages portent un cachet de Caldris.",
              usage: "Lien entre Jaren, l'Université et un commanditaire extérieur. Piste vers S-01 et Elian Voss.",
            },
          ],

          guide_mj: {
            intention: "Donner les premiers indices tangibles. Les PJ doivent sentir que les profanations ne sont pas ordinaires.",
            mise_en_place: "Fin d'après-midi. Thorgar attend. Jaren est déjà là, prenant des notes.",
            deroulement: [
              "Thorgar accueille les PJ et les mène aux tombes profanées.",
              "Les PJ examinent les dalles et les passages creusés.",
              "Jaren observe et prend des notes. Serviable mais nerveux.",
              "Si accès au Mausolée : les PJ ressentent le froid anormal.",
              "Thorgar répond avec des formules rituelles — il connaît les gestes mais pas leur sens.",
            ],
            actions_utiles: [
              "Examiner les outils utilisés.",
              "Parler à Jaren et observer son comportement.",
              "Demander à voir le Mausolée.",
              "Demander ce que signifient les runes sur les os.",
            ],
            fronts_heritiers: [
              "Front 'Le Sceau qui cède' — les PJ ont vu les dégâts de première main.",
              "Front 'Le Plan de Thade' — Jaren est un agent de Thade.",
            ],
            jeu_des_pnj: "Thorgar parle peu et lentement. Jaren est serviable, anxieux, et transmet ses notes à Thade le soir même.",
            escalade: "Si les PJ accusent sans preuve, Thorgar les fait expulser par les gardes du Temple.",
            sortie: "Les PJ quittent le Cimetière avec des indices, des questions et peut-être l'amitié prudente de Thorgar.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent comprendre que les profanations ciblent les Thanes et que les outils viennent de l'Université.",
            ne_pas_bloquer_sur_un_jet: "Même si Investigation échoue, Thorgar dit que trois tombes ont été touchées et les os prélevés.",
            question_dramatique: "Pourquoi quelqu'un volerait-il les os de fondateurs nains morts depuis des siècles ?",
          },

          transitions: {
            resume: "Les PJ quittent le Cimetière. Jaren se hâte vers l'Université pour faire son rapport.",
            reussite: "Les PJ ont identifié les outils, ressenti le froid et noté le comportement de Jaren.",
            echec: "Les PJ rapportent à Thade que le Cimetière a été vandalisé. Thade les envoie enquêter plus profondément.",
          },
        },

        {
          id: "s1_mort_jaren",
          titre: "La Mort de Jaren Velt",
          type: "Twist",
          resume_mj:
            "Le lendemain ou le surlendemain, Jaren est retrouvé mort dans le couloir du Pavillon Nord. Mort discrète, médicale. Une rune est gravée sur sa nuque. Le parfum de lavande flotte dans l'air.",
          idLieu: "pavillon_nord_couloir",
          idsPnj: [],

          format_livre: {
            ambiance:
              "L'aube. Le couloir du troisième étage du Pavillon Nord est éclairé par des lampes alchimiques qui n'ont pas encore été ajustées pour la journée. La lumière est jaune, irrégulière, elle fait des ombres longues. Le couloir sent la lavande — pas le parfum d'un bureau, la concentration d'un masque alchimique.\n\nJaren Velt est assis contre le mur, près d'une fenêtre. Ses yeux sont ouverts. Son visage est paisible — pas de douleur, pas de surprise. Son carnet est à ses côtés, ouvert à une page blanche. Aucune trace de sang, aucune trace de lutte. Le corps d'un homme en parfaite santé qui s'est arrêté.\n\nLe couloir est silencieux. Les autres étudiants ne sont pas encore levés. Les PJ ont été appelés — par qui ? Un message glissé sous leur porte, un mot anonyme : « Pavillon Nord. Troisième étage. Venez vite. »",
            deroulement_narratif:
              "Les PJ arrivent avant la garde si ils se dépêchent. C'est crucial : après le passage de la garde, le carnet sera confisqué et la scène sera nettoyée.\n\nLe corps de Jaren est intact. Médecine DD 14 : mort instantanée par arrêt cardiaque. Aucun poison, aucune blessure. Le corps d'un homme en parfaite santé dont le cœur a simplement cessé. La rune est gravée sur sa nuque — petite, précise, faite après la mort ou pendant. Connaissances (mystères) DD 16 : c'est une variante de Dissection à Distance, publiée par Thade Coren il y a six ans. La signature arcanique est identifiable.\n\nLe carnet est ouvert à une page blanche. Investigation DD 13 : les pages écrites ont été arrachées proprement. Quelqu'un a pris les notes après la mort. Les pages arrachées contenaient les notes sur S-01 et le cachet de Caldris. Qui a pris les notes ? Thade ? Elian Voss ? La réponse n'est pas immédiate — c'est une piste pour plus tard.\n\nLe parfum de lavande est le même que dans le bureau de Thade. Perception DD 10. Ce n'est pas une preuve — la lavande est utilisée dans tout l'Université — mais c'est un indice atmosphérique qui relie la scène à Thade dans l'esprit des PJ.\n\nLes PJ doivent décider : rapporter à Thade, cacher le carnet, ou chercher un autre allié. S'ils rapportent à Thade, il exprime sa tristesse avec une conviction parfaite. S'ils cachent le carnet, ils gardent un indice mais s'exposent à des soupçons. S'ils cherchent un autre allié, Olane est la meilleure option — mais ils ne la connaissent pas encore.",
            notes_mj:
              "Cette scène fait basculer la campagne. Jusqu'ici, les PJ étaient des enquêteurs. Maintenant, quelqu'un élimine les témoins gênants. Le ton change : l'enquête devient une course contre un adversaire invisible. Si les PJ accusent Thade ouvertement sans preuve, l'Université les fait taire par procédure. Le MJ doit laisser les PJ formuler leurs soupçons sans les valider ni les infirmer — la vérité viendra plus tard.",
          },

          texte_a_lire:
            "On vous trouve à l'aube. Jaren Velt est mort dans le couloir du troisième étage. Assis contre le mur, comme s'il s'était assoupi. Ses yeux sont ouverts. Son carnet est à ses côtés, ouvert à une page blanche. Aucune trace de sang, aucune trace de lutte.\n\nL'air sent la lavande.",

          objectif: "Déterminer la cause de la mort, récupérer les notes et décider quoi faire.",

          contexte_mj: {
            situation:
              "Jaren a été tué par Dissection à Distance — une variante publiée par Thade six ans plus tôt. Mort instantanée, médicale. Rune gravée sur la nuque.",
            secrets: [
              "Thade a fait tuer Jaren parce qu'il posait des questions sur le protocole S-01.",
              "La rune est la signature arcanique de Thade. Connaissances (mystères) DD 16.",
              "Le carnet a été vidé de ses pages écrites. Quelqu'un a pris les notes.",
            ],
            rappels: [
              "Le parfum de lavande est celui du bureau de Thade.",
              "Jaren avait un cachet de Caldris dans ses notes — lien vers Elian Voss.",
            ],
          },

          defis: [
            {
              competence: "Médecine",
              dd: 14,
              reussite: "Mort instantanée par arrêt cardiaque. Aucun poison, aucune blessure. Le corps d'un homme en parfaite santé qui s'est arrêté.",
              echec: "Mort naturelle, apparemment. Son cœur a lâché.",
            },
            {
              competence: "Connaissances (mystères)",
              dd: 16,
              reussite: "La rune est une variante de Dissection à Distance, publiée par Thade Coren il y a six ans. Sa signature arcanique.",
              echec: "Rune arcanique ancienne, difficile à déchiffrer. Ressemble à un glyphe de nécromancie.",
            },
            {
              competence: "Investigation",
              dd: 13,
              reussite: "Les pages écrites du carnet ont été arrachées proprement. Quelqu'un a pris les notes après la mort.",
              echec: "Le carnet est ouvert à une page blanche. Rien d'écrit.",
            },
          ],

          indices: [
            {
              indice: "La rune sur la nuque",
              localisation: "Nuque de Jaren",
              detection: "Connaissances (mystères) DD 16",
              information: "Variante de Dissection à Distance, publiée par Thade Corem. Signature identifiable.",
              usage: "Preuve que le meurtrier utilise les techniques de Thade.",
            },
            {
              indice: "Le parfum de lavande",
              localisation: "Couloir du Pavillon Nord",
              detection: "Perception DD 10",
              information: "Même parfum que dans le bureau de Thade Coren.",
              usage: "Indice atmosphérique reliant la scène à Thade.",
            },
            {
              indice: "Les pages arrachées",
              localisation: "Carnet de Jaren",
              detection: "Investigation DD 13",
              information: "Pages écrites arrachées après la mort. Les notes sur S-01 et le cachet de Caldris ont été prises.",
              usage: "Qui a pris les notes ? Thade ? Elian Voss ?",
            },
          ],

          guide_mj: {
            intention: "Faire basculer la campagne. Quelqu'un élimine les témoins gênants.",
            mise_en_place: "Les PJ sont appelés à l'aube. S'ils arrivent vite, avant la garde. Sinon, le carnet est confisqué.",
            deroulement: [
              "Les PJ arrivent et examinent le corps.",
              "Médecine pour la cause. Connaissances pour la rune. Investigation pour le carnet.",
              "Les PJ décident : rapporter à Thade, cacher, ou chercher un autre allié.",
            ],
            actions_utiles: [
              "Examiner le corps avant la garde.",
              "Cacher le carnet ou en copier les pages.",
              "Chercher des témoins.",
              "Comparer la rune avec les publications de Thade.",
            ],
            fronts_heritiers: [
              "Front 'Le Plan de Thade' — Thade élimine les témoins.",
              "Front 'Les Factions de la Crise' — la mort attire le Champion.",
            ],
            jeu_des_pnj: "Jaren est mort. Ses notes, contacts et cachet restent. Les PJ peuvent retrouver ses pas.",
            escalade: "Si les PJ accusent Thade ouvertement sans preuve, l'Université les fait taire par procédure.",
            sortie: "Les PJ quittent la scène avec un mort, une rune, un parfum et un carnet vide.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent savoir que Jaren est mort, que ce n'est pas naturel et qu'une rune est sur sa nuque.",
            ne_pas_bloquer_sur_un_jet: "Même si tous les jets échouent, les PJ voient le corps, le carnet vide et sentent la lavande.",
            question_dramatique: "Qui tue un étudiant sans laisser de trace — et pourquoi sent-on la lavande ?",
          },

          transitions: {
            resume: "Le corps de Jaren sera déclaré 'mort naturelle' par l'Université avant midi.",
            reussite: "Les PJ ont identifié la rune, le parfum et les pages arrachées. Assez pour soupçonner Thade.",
            echec: "Les PJ rapportent à Thade que Jaren est décédé. Thade exprime sa tristesse avec une conviction parfaite.",
          },
        },
      ],
    },

    // ── ACTE II — LA DÉCOUVERTE DU VERROU ──────────────────────────
    {
      titre: "Acte II — La Découverte du Verrou",
      stake: "Les PJ comprennent que les tombes des Thanes sont le verrou de la Spirale et que Thade prélève les ancrages.",
      location: "Temple-Forgeron, Archives de l'Université, Bureau d'Olane",

      scenes: [
        {
          id: "s1_temple_forgeron",
          titre: "Le Temple-Forgeron et les Rites Perdus",
          type: "Révélation",
          resume_mj:
            "Les PJ retournent voir Thorgar. S'ils ont gagné sa confiance, il parle des rites d'Edhrek-Murn — les gestes dont le sens s'est perdu. Les rites maintiennent le sceau. Personne ne sait plus pourquoi.",
          idLieu: "temple_forgeron",
          idsPnj: ["thorgar_pretre_nain"],

          format_livre: {
            ambiance:
              "Le Temple-Forgeron de Moradin est creusé dans la roche sous les Terrasses. On y descend par un escalier en spirale dont les marches sont polies par des siècles de pas nains. L'air vibre du martèlement de l'enclume sacrée — un rythme lent, régulier, qui sert de battement de cœur à la chapelle. Les murs sont couverts de bas-reliefs représentant des nains en posture de prière devant des tombes. Les visages des figures sont usés, effacés par le temps. Les inscriptions qui les accompagnaient sont illisibles.\n\nThorgar attend dans la chapelle souterraine, debout devant l'enclume. Il porte son tablier de forge. Ses mains sont posées à plat sur le métal, comme s'il puisait quelque chose dans la chaleur résiduelle. Quand les PJ entrent, il ne lève pas la tête immédiatement. Il finit un geste — un geste qui ressemble à une bénédiction mais qui n'en est pas une.",
            deroulement_narratif:
              "Thorgar parle lentement, comme un homme qui déballonne quelque chose qu'il n'a jamais formulé à voix haute. Ses maîtres lui ont transmis les gestes d'Edhrek-Murn. Sept gestes, un par Thane. Il les accomplit chaque nuit au Cimetière, sans comprendre ce qu'ils font. Il sait seulement que les nuits où il les accomplit, le froid recule. Les nuits où il ne les accomplit pas, le froid avance.\n\nDiplomatie DD 14 ou Persuasion DD 13 pour qu'il montre les gestes. Il les exécute devant les PJ — des postures de prière naine, mais avec des variations que Thorgar ne peut pas expliquer. Chaque geste correspond à une tombe. Chaque geste inclut le placement d'un fragment d'os — un fragment qui n'est plus là, parce que les profanations les ont pris.\n\nConnaissances (religion) DD 15 : les gestes sont des rites d'ancrage. Les os ne sont pas des restes — ce sont des supports rituels. Les runes dans l'os ne sont pas décoratives, ce sont des points de fixation. Les rites maintiennent le sceau en gardant les ancrages actifs. Sans les os, les rites sont vides. Sans les rites, les os sont inertes. Les deux ensemble maintiennent le verrou.\n\nThorgar ne connaît pas le mot « Spirale ». Il connaît le froid, les vibrations, le bourdonnement du Mausolée. Il sait que quelque chose remonte d'en-dessous. Il sait que les rites le repoussent. Il ne sait pas ce que c'est. Si les PJ lui disent, il ne réagit pas avec peur — il réagit avec colère. Pas contre les PJ. Contre l'idée que ses maîtres savaient et ne lui ont pas dit.\n\nSi les PJ proposent de restaurer les rites, Thorgar explique ce qu'il faut : les ossements, les gestes complets, et un prêtre qui connaît les sept postures. Il est le seul à connaître les sept postures. Sans lui, les rites meurent.",
            notes_mj:
              "Thorgar est le gardien d'un savoir qu'il ne comprend pas. Sa frustration est le cœur émotionnel de cette scène. Il accomplit des gestes chaque nuit sans savoir pourquoi, et le savoir qu'il protège est en train de s'effondrer sous ses pieds. Si les PJ le traitent avec respect, il devient un allié loyal. Si ils le méprisent ou le pressent, il se ferme et les rites restent un mystère.",
          },

          texte_a_lire:
            "Le Temple-Forgeron de Moradin est creusé dans la roche. Le martèlement de l'enclume accompagne les prières. Thorgar vous attend dans la chapelle souterraine, sous la forge.\n\n« Je vais vous dire ce que je sais. Mais je ne sais pas grand-chose. Mes maîtres m'ont transmis les gestes. Pas le sens. Les gestes maintiennent quelque chose. Les gestes oublés laissent quelque chose passer. »",

          objectif: "Apprendre ce que Thorgar sait des rites d'Edhrek-Murn et comprendre que les tombes servent à un système actif.",

          contexte_mj: {
            situation:
              "Thorgar connaît les gestes rituels mais pas leur fonction. Il sait que les rites d'Edhrek-Murn accompagnent les morts naines et que les Sept Thanes reçoivent des rites spéciaux. Les rites ont été simplifiés au fil des siècles.",
            secrets: [
              "Les rites d'Edhrek-Murn maintiennent le sceau. Chaque geste accomplit un ancrage. Chaque geste oublié affaiblit le verrou.",
              "Thorgar sent que quelque chose ne va pas. Le froid au Mausolée l'inquiète. Mais il ne peut pas relier ses sensations à un cadre explicite.",
              "Si les PJ ont vu les runes dans les os, Thorgar peut les identifier comme des runes d'ancrage.",
            ],
            rappels: [
              "Thorgar ne parlera qu'aux PJ qui ont fait preuve de respect au Cimetière.",
              "La chapelle souterraine est un lieu privé. Ce qui s'y dit ne sort pas.",
            ],
          },

          defis: [
            {
              competence: "Diplomatie",
              dd: 14,
              reussite: "Thorgar montre les gestes d'Edhrek-Murn lentement, en nommant chaque étape. Il ne sait pas ce que chaque geste fait, mais il sait l'ordre et la forme.",
              echec: "Thorgar parle de rites et de traditions, mais refuse de montrer les gestes à des non-nains.",
            },
            {
              competence: "Connaissances (religion)",
              dd: 15,
              reussite: "Les gestes ressemblent à des rites de fondation, pas des rites funéraires. On les accomplit pour maintenir une fonction que les morts assurent encore.",
              echec: "Les rites sont anciens et nains. Signification religieuse : honorer les défunts et maintenir la mémoire.",
            },
          ],

          indices: [
            {
              indice: "Les gestes d'Edhrek-Murn",
              localisation: "Chapelle sous la Forge",
              detection: "Diplomatie DD 14",
              information: "Rites de fondation, pas funéraires. Accomplis sur les tombes pour maintenir une fonction que les défunts assurent après la mort.",
              usage: "Comprendre que les Thanes sont utilisés, pas honorés. Leurs corps sont des ancrages actifs.",
            },
            {
              indice: "Les runes dans l'os",
              localisation: "Comparaison avec les fragments du Cimetière",
              detection: "Connaissances (religion) DD 15 ou Thorgar",
              information: "Les runes gravées dans les os correspondent aux runes d'ancrage d'Edhrek-Murn. Les os sont des composants d'un système.",
              usage: "Relier les profanations au sceau. Qui prend les os prend le verrou.",
            },
          ],

          guide_mj: {
            intention: "Révéler que les tombes sont un système fonctionnel, pas un monument.",
            mise_en_place: "Chapelle souterraine, lieu privé sous la forge. Ambiance intime et sombre.",
            deroulement: [
              "Thorgar parle des rites, de leur transmission et de leur dégradation.",
              "Si les PJ sont respectueux, il montre les gestes.",
              "Les PJ comparent les gestes avec les runes vues dans les os.",
              "Thorgar avoue qu'il ne comprend pas pourquoi le froid augmente.",
            ],
            actions_utiles: [
              "Demander à voir les gestes complets.",
              "Comparer les runes des os avec les runes des rites.",
              "Demander qui d'autre connaît ces rites.",
              "Proposer de restaurer les rites sur les tombes profanées.",
            ],
            fronts_heritiers: [
              "Front 'Le Sceau qui cède' — les PJ comprennent ce qu'est le sceau.",
              "Front 'La Cité sous pression' — la mémoire perdue est un enjeu direct.",
            ],
            jeu_des_pnj: "Thorgar parle lentement, avec des pauses. Sa frustration de prêtre qui accomplit des gestes sans comprendre est palpable.",
            escalade: "Si les PJ demandent de restaurer les rites, Thorgar accepte — mais il a besoin des ossements. Et les ossements ont été pris.",
            sortie: "Les PJ quittent le Temple avec un cadre : les tombes sont un verrou, les rites le maintiennent, les profanations le démontent.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent comprendre que les tombes sont un système d'ancrage actif.",
            ne_pas_bloquer_sur_un_jet: "Même si Diplomatie échoue, Thorgar dit que les rites existent et que les profanations les brisent.",
            question_dramatique: "Que se passe-t-il quand une cité oublie pourquoi elle enterre ses fondateurs ?",
          },

          transitions: {
            resume: "Thorgar raccompagne les PJ à la forge. Le bruit de l'enclume reprend.",
            reussite: "Les PJ ont vu les gestes, compris les runes et identifié le système.",
            echec: "Thorgar met les PJ sur la piste d'autres détenteurs de savoir : Brogar, les archives.",
          },
        },

        {
          id: "s1_archives_scellees",
          titre: "Les Archives Médicales Scellées",
          type: "Investigation",
          resume_mj:
            "Les PJ infiltrent ou obtiennent l'accès aux Archives Médicales Scellées. Ils y trouvent le dossier 'Coren, S. — 12-VAEL — Médical' qui révèle le protocole S-01 et son lien avec Sealine.",
          idLieu: "archives_scellees_universite",
          idsPnj: [],

          format_livre: {
            ambiance:
              "Les Archives Médicales Scellées occupent un sous-sol bas et voûté du Pavillon Sud de l'Université. On y accède par un escalier de service que les étudiants ignorent. L'air est sec, froid, saturé de l'odeur de cuir et de produits de conservation. Des armoires métalliques alignées par décennie, étiquetées au pochoir. Une lampe alchimique bourdonne au plafond, projetant une lumière blafarde qui ne rend justice à aucune couleur.\n\nLe registre des scellés est un cahier relié cuir, posé sur un pupitre à l'entrée. Les pages sont jaunies, l'écriture est celle d'un archiviste méthodique. Les entrées récentes sont rares — l'Université ne scelle plus beaucoup de dossiers. Les entrées de l'année de la catastrophe de Nyx sont nombreuses. L'une d'elles porte la mention : « Coren, S. — 12-VAEL — Médical — Scellé par ordre du Recteur. »",
            deroulement_narratif:
              "Les PJ peuvent obtenir l'accès de trois façons : par Olane (si ils l'ont déjà rencontrée), par Crochetage DD 15 sur la porte du sous-sol, ou par Discrétion DD 14 pour entrer par le réseau de service. Une fois à l'intérieur, le registre est accessible sans jet.\n\nLe dossier de Sealine est dans l'armoire de la décennie correspondante. Il est scellé par un sigil mineur — pas un sort de combat, juste un verrou arcanique. Connaissances (mystères) DD 12 ou Crochetage DD 13 pour l'ouvrir. Le sigil est de conception standard, pas la signature de Thade.\n\nLe dossier contient des notes médicales, des relevés de symptômes, et un document séparé : le protocole S-01. Médecine DD 15 pour comprendre les notes médicales : Sealine présentait des symptômes d'exposition planaire chronique — fatigue, vertiges, perceptions augmentées, sensibilité au froid. Le protocole S-01 est établi 28 jours avant la catastrophe de Nyx. Il porte la mention « littérature interdite » et « approche expérimentale ».\n\nLe nom S-01 n'est pas expliqué dans le dossier. Mais les PJ peuvent déduire : S pour Sealine, 01 pour premier patient. Le protocole décrit une méthode pour « stabiliser l'ancrage d'un sujet exposé à des flux planaires continus ». Le langage est clinique, détaché, mais l'auteur est clairement Thade — la signature arcanique sur le document correspond à celle de ses publications.\n\nSi les PJ ont vu la rune sur la nuque de Jaren, ils peuvent faire le lien : Thade a exploré la littérature interdite avant Nyx. Nyx n'était pas un accident — c'était une tentative de sauver Sealine qui a mal tourné. Le protocole S-01 est le point d'origine de tout.\n\nOlane peut confirmer si les PJ lui apportent le dossier. Elle dira : « Il n'a jamais cessé. Huit ans. Il n'a jamais cessé de chercher. »",
            notes_mj:
              "Le dossier S-01 est la révélation qui transforme Thade d'antagoniste abstrait en antagoniste tragique. Les PJ comprennent que tout ce qu'il fait — les profanations, la manipulation, le mensonge par omission — est motivé par l'amour pour Sealine et la culpabilité de Nyx. Cette compréhension ne l'excuse pas, mais elle complique le choix des PJ pour la suite.",
          },

          texte_a_lire:
            "Les Archives Médicales Scellées occupent un sous-sol bas et voûté. Des armoires métalliques alignées par décennie. Une lampe alchimique bourdonne au plafond.\n\nLe registre indique : « Coren, S. — 12-VAEL — Médical — Scellé par ordre du Recteur, année de la catastrophe de Nyx. »",

          objectif: "Trouver le dossier médical de Sealine Vael (inscrit sous Coren, S.) et comprendre ce qu'est le protocole S-01.",

          contexte_mj: {
            situation:
              "Les archives sont accessibles aux Maîtres et aux enquêteurs mandatés. L'ordre de Thade donne accès, mais le dossier de Sealine est scellé par le Recteur. Investigation ou Effraction pour le consulter.",
            secrets: [
              "Le dossier contient les notes de Thade sur la maladie de Sealine, puis le protocole S-01. Dernière entrée : 'Méthodes conventionnelles épuisées. Explorer la littérature interdite.' Plus tard : 'S-01 : protocole établi. Premier essai dans 28 jours.'",
              "S-01 = Sealine. Le protocole porte le nom de la patiente.",
              "Le dossier a été scellé par le Recteur, pas par Thade. Thade n'en a pas besoin — il a tout dans ses cahiers personnels.",
            ],
            rappels: [
              "Si les PJ ont vu le cachet de Caldris chez Jaren, ils peuvent relier S-01, Elian Voss et Caldris.",
              "Effraction DD 12 pour entrer de nuit sans autorisation.",
            ],
          },

          defis: [
            {
              competence: "Investigation",
              dd: 12,
              reussite: "Le dossier est dans l'armoire, derrière un sceau administratif ancien, facile à briser.",
              echec: "Le dossier est introuvable. Peut-être déplacé. Les PJ doivent chercher ailleurs.",
            },
            {
              competence: "Médecine",
              dd: 15,
              reussite: "La chronologie raconte une histoire : Sealine malade, Thade cherchant un remède, méthodes échouant, puis S-01 apparaît. Le protocole n'est pas un traitement — c'est un rituel.",
              echec: "Notes médicales techniques. La maladie est réelle, mais S-01 n'est pas clair.",
            },
          ],

          indices: [
            {
              indice: "Le protocole S-01",
              localisation: "Dossier médical de Sealine, dernière page",
              detection: "Médecine DD 15 ou Investigation DD 12",
              information: "S-01 = Sealine. Protocole établi 28 jours avant la catastrophe de Nyx.",
              usage: "La catastrophe n'était pas un accident — c'était une tentative de sauver Sealine qui a mal tourné.",
            },
            {
              indice: "La littérature interdite",
              localisation: "Note de Thade dans le dossier",
              detection: "Lecture directe",
              information: "'Méthodes conventionnelles épuisées. Explorer la littérature interdite.' Note antérieure à la catastrophe.",
              usage: "Thade n'a pas dérapé par accident — il a choisi de franchir la ligne.",
            },
          ],

          guide_mj: {
            intention: "Révéler le lien entre Thade, Sealine et la catastrophe de Nyx.",
            mise_en_place: "Archives de jour (ordre de mission) ou de nuit (effraction). Silencieux, poussiéreux.",
            deroulement: [
              "Localiser le dossier dans les armoires.",
              "Briser le sceau et lire le contenu.",
              "Médecine pour la chronologie.",
              "La dernière page révèle S-01 et la littérature interdite.",
            ],
            actions_utiles: [
              "Copier ou mémoriser le dossier.",
              "Chercher d'autres dossiers scellés de la même époque.",
              "Vérifier qui a demandé le scellement.",
              "Comparer S-01 avec le cachet de Caldris.",
            ],
            fronts_heritiers: [
              "Front 'Le Plan de Thade' — Thade cherche à rouvrir le seuil pour Sealine.",
              "Front 'Les Factions de la Crise' — le cachet mène à Elian Voss et Maelric.",
            ],
            jeu_des_pnj: "Aucun PNJ. Les archives parlent par elles-mêmes.",
            escalade: "Si les PJ sont surpris de nuit, l'Université ouvre une procédure. Olane peut couvrir.",
            sortie: "Les PJ quittent les archives avec le nom de Sealine, le protocole S-01 et la certitude que Nyx n'était pas un accident.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent savoir que S-01 = Sealine et que Thade a établi ce protocole avant Nyx.",
            ne_pas_bloquer_sur_un_jet: "Le nom 'S-01' et la référence à la 'littérature interdite' sont lisibles sans compétence médicale.",
            question_dramatique: "Jusqu'où irait un homme brillant pour sauver la personne qu'il aime ?",
          },

          transitions: {
            resume: "Les PJ referment le dossier et quittent les archives.",
            reussite: "Les PJ ont le protocole S-01, le nom de Sealine et le motif de Thade.",
            echec: "Les PJ ont trouvé un dossier scellé sans le déchiffrer. Olane peut les aider.",
          },
        },

        {
          id: "s1_bureau_olane",
          titre: "Le Bureau d'Olane",
          type: "Social",
          resume_mj:
            "Les PJ rencontrent Maëra Olane. Elle se doute de quelque chose depuis longtemps. Si les PJ viennent avec les indices des archives, elle s'ouvre et devient leur alliée.",
          idLieu: "salle_4b",
          idsPnj: ["maera_olane"],

          format_livre: {
            ambiance:
              "Le bureau d'Olane est à l'opposé de celui de Thade. Petit, modeste, encombré de dossiers annotés et de tasses de café d'orge vides. Les murs sont couverts de graphiques, de cartes de flux arcaniques, de notes manuscrites reliées par des fils de laine. Une fenêtre étroite donne sur la cour intérieure de l'Université, pas sur la Tour. Le bureau est en désordre organisé — Olane sait où est chaque chose, mais personne d'autre ne le saurait.\n\nOlane est assise derrière son bureau, un stylo dans une main, une tasse fumante dans l'autre. Elle est petite, nerveuse, les cheveux tirés en arrière. Des cernes profondes. Le regard de quelqu'un qui n'a pas dormi depuis des semaines — pas par insomnie, par inquiétude. Elle porte les vêtements d'un fonctionnaire de l'Université, mais le regard d'une femme qui ne croit plus en l'institution qu'elle sert.",
            deroulement_narratif:
              "Olane ne perd pas de temps. Si les PJ viennent avec des indices — la rune de Jaren, le dossier S-01, les outils d'Université — elle les écoute, elle vérifie, puis elle s'ouvre. Si les PJ viennent sans preuve, elle reste prudente : elle pose des questions, elle teste leur sérieux, elle ne révèle rien sans contrepartie.\n\nCe qu'Olane sait : les flux arcaniques de l'Université sont détournés. Pas par un étudiant, pas par un membre du Conseil. Par quelqu'un qui a un accès de haut niveau. Les relevés montrent une déviation vers la Tour Arcanique. Elle a essayé d'alerter le Conseil. Le Conseil a classé sa note comme « préoccupation technique ». Elle a essayé d'alerter le Recteur. Le Recteur lui a dit de se concentrer sur son travail.\n\nSi les PJ lui montrent le dossier S-01, Olane fait le lien. Elle dit : « Il n'a jamais cessé. Huit ans. Il n'a jamais cessé de chercher. » Elle ne dit pas le nom de Thade immédiatement — elle laisse les PJ le déduire. Puis elle confirme.\n\nOlane offre ce qu'elle peut : un accès institutionnel, une couverture légale, des données sur les flux. Elle ne peut pas affronter Thade publiquement — elle n'a pas de preuve directe, seulement des indices. Mais elle peut protéger les PJ si ils agissent discrètement. Elle peut ralentir les procédures. Elle peut acheter du temps.\n\nSi les PJ la protègent — en gardant son nom hors de leurs rapports, en ne révélant pas leur source — elle devient une alliée durable. Si ils la compromettent, Thade la fait muter ou réduire au silence en moins d'une semaine.",
            notes_mj:
              "Olane est le pont entre l'institution et la vérité. Sans elle, les PJ sont seuls contre l'Université. Avec elle, ils ont un pied dans le système. Le MJ doit jouer Olane comme une femme fatiguée mais lucide — pas une héroïne, pas une victime, mais une fonctionnaire qui a choisi son camp en silence depuis des mois.",
          },

          texte_a_lire:
            "Le bureau d'Olane est petit, modeste, encombré de dossiers annotés. Une tasse de café d'orge fume sur le coin du bureau.\n\n« Je sais pourquoi vous êtes là. Vous avez trouvé quelque chose. Ou vous soupçonnez quelque chose. Dans les deux cas, je veux l'entendre. »",

          objectif: "Gagner la confiance d'Olane, partager les indices et obtenir son aide.",

          contexte_mj: {
            situation:
              "Olane est rectrice et conseillère. Elle a remarqué les anomalies, les salles scellées, le comportement de Thade. Mais l'Université fait confiance à son membre le plus brillant. Olane est isolée.",
            secrets: [
              "Olane a essayé de lancer une enquête interne. L'Université l'a enterrée par procédure.",
              "Elle sait que les flux arcaniques sont détournés vers la Tour. Elle a les chiffres mais pas les preuves publiques.",
              "Olane ne sait pas ce qu'est S-01. Si les PJ lui montrent le dossier, elle fait le lien en quelques secondes.",
            ],
            rappels: [
              "Olane est un allié institutionnel, pas une combattante. Elle fournit accès, données et couverture légale.",
              "Si les PJ n'ont aucun indice, Olane ne s'ouvre pas. Trop à perdre.",
            ],
          },

          defis: [
            {
              competence: "Diplomatie",
              dd: 14,
              reussite: "Olane partage ses soupçons : flux détournés vers la Tour, salles scellées, Thade a restreint ses accès.",
              echec: "Olane reste prudente. 'Anomalies temporaires.' Elle ne confirme rien.",
            },
            {
              competence: "Persuasion",
              dd: 15,
              reussite: "Si les PJ montrent le dossier S-01, Olane le lit en silence puis dit : 'Il n'a jamais renoncé. Huit ans.' Elle devient une alliée déterminée.",
              echec: "Olane lit le dossier avec gravité mais demande du temps pour vérifier. Elle ne s'engage pas immédiatement.",
            },
          ],

          indices: [
            {
              indice: "Les flux détournés",
              localisation: "Chiffres d'Olane",
              detection: "Diplomatie DD 14",
              information: "Flux arcaniques de plusieurs bâtiments détournés vers la Tour. Salles scellées = zones de prélèvement.",
              usage: "La Tour devient un dispositif actif, pas juste un bâtiment de recherche.",
            },
            {
              indice: "L'isolement d'Olane",
              localisation: "Conversation",
              detection: "Perception DD 10",
              information: "Olane n'a plus accès à ses données. Ses collègues l'évitent. L'Université a enterré son enquête.",
              usage: "Thade ne tue pas tous ceux qui le gênent — il les neutralise institutionnellement.",
            },
          ],

          guide_mj: {
            intention: "Transformer Olane en alliée. Premier PNJ institutionnel qui aide de l'intérieur.",
            mise_en_place: "Olane reçoit les PJ dans son bureau, ferme la porte à clé. Confidentiel.",
            deroulement: [
              "Olane demande ce que les PJ ont trouvé.",
              "Si les PJ partagent, elle partage ses propres indices.",
              "Si les PJ montrent S-01, elle fait le lien avec Thade et Nyx.",
              "Olane propose son aide : accès, couverture, contacts au Conseil.",
            ],
            actions_utiles: [
              "Partager les indices des archives.",
              "Demander ce qu'elle sait sur la Tour.",
              "Demander une couverture institutionnelle.",
              "Proposer de rassembler des preuves publiques.",
            ],
            fronts_heritiers: [
              "Front 'Le Plan de Thade' — Olane est un obstacle pour Thade.",
              "Front 'La Cité sous pression' — Olane est le pont entre l'Université et le Conseil.",
            ],
            jeu_des_pnj: "Olane parle bas, vite, avec précision. Elle a peur pour l'Université, pas pour elle.",
            escalade: "Si les PJ mettent Olane en danger, Thade accélère son isolement. Les PJ doivent la protéger.",
            sortie: "Olane murmure : 'La Tour. Regardez la Tour.'",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent savoir qu'Olane peut être une alliée si on lui apporte des preuves.",
            ne_pas_bloquer_sur_un_jet: "Même si Diplomatie échoue, Olane dit que les flux sont anormaux et ses accès restreints.",
            question_dramatique: "Que fait un homme brillant quand une institution entière lui fait confiance aveuglément ?",
          },

          transitions: {
            resume: "Olane raccompagne les PJ. Avant de les laisser partir : 'La Tour. Regardez la Tour.'",
            reussite: "Les PJ ont une alliée, des données et un objectif : la Tour Arcanique.",
            echec: "Les PJ ont rencontré Olane sans obtenir sa confiance. Ils doivent trouver d'autres alliés.",
          },
        },
      ],
    },

    // ── ACTE III — LE TOURNANT ─────────────────────────────────────
    {
      titre: "Acte III — Le Tournant",
      stake: "Les PJ doivent choisir : servir Thade, le confronter, ou chercher la vérité ailleurs.",
      location: "Cimetière des Terrasses, Vieille Ville",

      scenes: [
        {
          id: "s1_retour_cimetiere",
          titre: "Le Retour au Cimetière",
          type: "Exploration",
          resume_mj:
            "Les PJ retournent au Cimetière de nuit. De nouvelles tombes ont été profanées. Cinq des sept Thanes sont touchés. Le Mausolée vibre. Le Puits de l'Abîme pulse d'un froid planaire.",
          idLieu: "mausolee_seuil",
          idsPnj: ["thorgar_pretre_nain"],

          format_livre: {
            ambiance:
              "Le Cimetière des Terrasses à la nuit tombée n'est plus le même lieu. Les lanternes funéraires vacillent sans vent — certaines sont éteintes, et les terrasses où elles manquent sont plongées dans une obscurité que les torches peinent à percer. Le froid a gagné. On voit sa souffle à chaque respiration. Les gradins de pierre sont couverts de givre par endroits, comme si le froid remontait non pas de l'air, mais de la pierre elle-même.\n\nLe Mausolée du Seuil est au centre, bas et sombre. La dalle centrale vibre — pas un tremblement, une pulsation lente, régulière, comme un cœur qui bat dans la fondation. Le bourdonnement du Puits de l'Abîme est audible à vingt mètres. Il n'est pas fort, mais il est partout. Il passe par les pieds, par les os, par les dents.\n\nThorgar attend au Mausolée. Il est épuisé. Les cernes d'un homme qui n'a pas dormi depuis des nuits. Il accomplit les rites chaque nuit, mais les gestes sont vides — les os ne sont plus là. Il dit : « C'est pire. Les runes changent. Les lanternes s'éteignent. Et le son... écoutez. »",
            deroulement_narratif:
              "Cinq des sept tombes sont touchées. Les deux dernières — T-06 et T-07 — sont intactes mais les passages creusés par en-dessous se rapprochent. Investigation DD 13 pour évaluer le rythme : un ou deux jours avant que les deux dernières tombes soient atteintes.\n\nLe Mausolée vibre. Perception DD 10 pour sentir la pulsation. Le Puits de l'Abîme pulse d'un froid planaire — le froid n'est plus naturel, il porte une texture, une épaisseur, comme si l'air était partiellement solide. Connaissances (mystères) DD 14 : c'est une empreinte planaire. La Spirale filtre. Pas une invasion, pas une rupture — une filtration lente, comme de l'eau qui s'infiltre par les fissures.\n\nThorgar montre les runes qui changent. Sur les tombes touchées, les runes d'ancrage se transforment — elles ne disparaissent pas, elles se réécrivent. Le nouveau motif est inconnu de Thorgar. Connaissances (mystères) DD 16 : les nouvelles runes sont des runes d'ouverture, pas d'ancrage. Quelqu'un ne se contente pas de briser le sceau — il le remplace par un autre système.\n\nSi les PJ proposent de protéger les deux dernières tombes, Thorgar explique ce qu'il faut : une garde permanente, la restauration des rites complets (qui nécessite les ossements), et un moyen de bloquer les passages par en-dessous. Les PJ peuvent se poster en sentinelles, mais le temps joue contre eux.\n\nSi les PJ interceptent des profanateurs sur place — voir la scène optionnelle « Interception de profanateurs ».",
            notes_mj:
              "Cette scène doit transmettre l'urgence. Le sceau n'est plus une abstraction — il est en train de céder sous les pieds des PJ. Le bourdonnement, le froid, les runes qui changent : tout est sensoriel, tout est immédiat. Les PJ doivent sentir que chaque jour compte. Le MJ peut faire avancer l'horloge du front « Le Sceau qui cède » d'un segment pendant cette scène pour souligner la pression.",
          },

          texte_a_lire:
            "Le Cimetière est silencieux à la nuit tombée. Les lanternes funéraires vacillent sans vent. Le froid gagne les gradins, les allées, les marches. Vous voyez votre souffle.\n\nThorgar vous attend au Mausolée. « C'est pire. Les runes changent. Les lanternes s'éteignent. Et le son... écoutez. »\n\nUn bourdonnement sourd remonte de la dalle centrale.",

          objectif: "Évaluer l'état du sceau, identifier les nouvelles profanations et comprendre que le verrou cède.",

          contexte_mj: {
            situation:
              "Cinq des sept tombes sont touchées. Le sceau ne tient plus que par deux ancrages. Le Puits de l'Abîme vibre — un bourdonnement sourd remonte des profondeurs.",
            secrets: [
              "Le bourdonnement est la Spirale qui presse le sceau. Plus le sceau cède, plus la Spirale filtre.",
              "Si les PJ descendent dans le Puits, ils sentent un froid planaire. Connaissances (mystères) DD 14 pour identifier une empreinte planaire.",
              "Thorgar accomplit les rites incomplets chaque nuit. Sans les ossements, les rites ne restaurent pas l'ancrage.",
            ],
            rappels: [
              "Les PJ peuvent croiser des agents de Thade ou des Endeuillés d'Edran Morn au Cimetière la nuit.",
              "Si les PJ ont restauré des rites avec Thorgar, le MJ retire un segment de l'horloge du Front 'Le Sceau qui cède'.",
            ],
          },

          defis: [
            {
              competence: "Investigation",
              dd: 14,
              reussite: "Cinq des sept tombes sont touchées. Les passages sont plus larges, plus récents. Toujours des outils d'Université.",
              echec: "Plus de tombes profanées. Difficile de dire combien dans l'obscurité.",
            },
            {
              competence: "Connaissances (mystères)",
              dd: 14,
              reussite: "Le bourdonnement est une empreinte planaire. La Spirale presse le sceau. Une force ancienne qui cherche à revenir.",
              echec: "Bourdonnement étrange et inquiétant. Peut-être un écho des anciens rites.",
            },
            {
              competence: "Athlétisme",
              dd: 12,
              reussite: "Les PJ descendent dans le Puits. Le froid augmente. À mi-chemin, un courant d'air planaire remonte des profondeurs.",
              echec: "La descente est trop difficile sans équipement. Les encoches sont trop éloignées.",
            },
          ],

          indices: [
            {
              indice: "Cinq tombes sur sept",
              localisation: "Terrasses des Sept Thanes",
              detection: "Investigation DD 14",
              information: "Le sceau ne tient plus que par deux ancrages. Le verrou est proche de la rupture.",
              usage: "Urgence : si les deux dernières tombes tombent, le sceau cède entièrement.",
            },
            {
              indice: "L'empreinte planaire",
              localisation: "Puits de l'Abîme",
              detection: "Connaissances (mystères) DD 14",
              information: "La Spirale n'envahit pas — elle filtre, lentement, par les fissures du verrou.",
              usage: "Comprendre la nature de la menace : pas une armée, une pression constante.",
            },
          ],

          guide_mj: {
            intention: "Faire sentir l'urgence. Le sceau cède. Les PJ doivent agir maintenant.",
            mise_en_place: "Nuit. Cimetière silencieux. Thorgar attend. Le froid et le bourdonnement font le travail atmosphérique.",
            deroulement: [
              "Thorgar mène les PJ aux nouvelles profanations.",
              "Les PJ examinent les tombes et constatent l'ampleur.",
              "Ils entrent dans le Mausolée et entendent le bourdonnement.",
              "S'ils descendent dans le Puits, ils sentent la Spirale.",
              "Thorgar demande de l'aide : il faut les ossements pour restaurer les rites.",
            ],
            actions_utiles: [
              "Compter les tombes touchées et évaluer l'état du sceau.",
              "Descendre dans le Puits de l'Abîme.",
              "Proposer à Thorgar de protéger les deux dernières tombes.",
              "Demander où les ossements pourraient avoir été emmenés.",
            ],
            fronts_heritiers: [
              "Front 'Le Sceau qui cède' — l'horloge est à l'étape 3 ou 4.",
              "Front 'Le Plan de Thade' — les ossements convergent vers la Tour.",
            ],
            jeu_des_pnj: "Thorgar est épuisé, inquiet, mais déterminé. Il accomplit les rites incomplets chaque nuit.",
            escalade: "Si les PJ rencontrent des agents de Thade ou des Endeuillés, la scène devient un conflit.",
            sortie: "Les PJ quittent le Cimetière avec une certitude : le sceau cède, le temps presse.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent comprendre que cinq tombes sur sept sont touchées et que le sceau est proche de la rupture.",
            ne_pas_bloquer_sur_un_jet: "Même si Investigation échoue, Thorgar dit que de nouvelles tombes ont été touchées et que le bourdonnement augmente.",
            question_dramatique: "Combien de temps avant que les deux derniers ancrages cèdent ?",
          },

          transitions: {
            resume: "Les PJ quittent le Cimetière. Le bourdonnement les suit jusqu'à la porte.",
            reussite: "Les PJ ont mesuré l'urgence. La prochaine étape : retrouver les ossements ou confronter Thade.",
            echec: "Les PJ ont senti le froid sans comprendre. Thorgar les met sur la piste de la Tour ou des égouts.",
          },
        },

        {
          id: "s1_rencontre_resistance",
          titre: "La Rencontre avec la Résistance",
          type: "Rencontre",
          resume_mj:
            "Les PJ découvrent la Résistance de la Vieille Ville — Mara, Ursula, le Collecteur et Sniv. Un réseau clandestin qui soigne les malades, cache les fugitifs et cherche la vérité sur Thade. Ils offrent aux PJ une alternative à l'Université.",
          idLieu: "maison_des_retours",
          idsPnj: ["mara_dirigeante", "ursula_fraternite", "le_collecteur", "sniv_kobold"],

          format_livre: {
            ambiance:
              "La Maison des Retours est cachée derrière une blanchisserie de la Vieille Ville. On y accède par une cour étroite, puis par un escalier qui descend sous le niveau de la rue. L'intérieur sent le savon, la soupe et la cire à briquet. Des lits alignés contre les murs, séparés par des rideaux faits de vieux draps. Des malades — pas des blessés, des malades. Les symptômes varient : fatigue, tremblements, perceptions augmentées, sensibilité au froid. Les mêmes symptômes que Sealine, huit ans plus tôt.\n\nMara attend au centre de la pièce, debout, les bras croisés. Elle est grande, mince, les cheveux courts. Le regard fatigué mais net d'une femme qui a choisi son camp il y a longtemps et qui n'en a jamais changé. Elle porte les vêtements d'une travailleuse de la Vieille Ville — pas une rebelle, pas une soldate, une femme qui soigne et qui cache.\n\nUrsula est près d'un lit, en train de changer un pansement. Le Collecteur est dans un coin, assis sur une caisse, un carnet sur les genoux. Sniv est invisible — un kobold qui se fond dans les ombres, mais dont les yeux brillent dans la pénombre.",
            deroulement_narratif:
              "Mara accueille les PJ avec une question : « Vous êtes les envoyés de l'Université ? Ou les envoyés de quelqu'un d'autre ? » La réponse détermine le ton de la conversation. Si les PJ disent qu'ils travaillent pour Thade, Mara ne les chasse pas — elle leur offre un repas et dit : « Mangez. Vous avez faim. Et pendant que vous mangez, écoutez. »\n\nMara explique ce qu'elle sait. La Résistance existe depuis la catastrophe de Nyx. Elle a commencé comme un réseau de soins — des soigneurs qui traitaient les malades que l'Université refusait. Puis elle est devenue un réseau d'information. Mara cherche la vérité sur Nyx depuis huit ans. Elle ne sait pas tout, mais elle sait que Thade n'a jamais accepté la mort de Sealine.\n\nLe Collecteur intervient si les PJ demandent des preuves. Il ouvre son carnet : des caisses d'os circulent dans les égouts. Elles portent un cachet de Caldris et un marquage d'Université. Elles convergent vers la Tour Arcanique par un réseau de passages sous les Terrasses. Renseignements DD 14 ou Diplomatie DD 13 pour qu'il donne les détails : les caisses passent la nuit, transportées par des agents que personne ne reconnaît.\n\nSniv propose de montrer les passages. Il parle peu, mais il connaît les égouts mieux que personne. Il a trouvé des passages récents — creusés dans la roche, pas dans la terre, avec des outils de précision. Les mêmes outils qu'au Cimetière.\n\nUrsula parle des malades. Elle dit : « Ce ne sont pas des malades ordinaires. Leurs symptômes ressemblent à ceux de l'année de Nyx. L'Université les ignore. Nous les soignons. » Si les PJ ont lu le dossier S-01, ils font le lien : les symptômes de Sealine, les symptômes des malades de la Vieille Ville, les symptômes de l'exposition planaire chronique.\n\nMara ne demande pas aux PJ de trahir Thade immédiatement. Elle dit : « Vous n'avez pas à choisir maintenant. Mais sachez que l'Université ne vous donnera pas la vérité. Nous, oui. »",
            notes_mj:
              "La Résistance n'est pas un groupe de rebelles romantiques. C'est un réseau de survie — des gens qui soignent, qui cachent, qui observent. Mara n'est pas une chef de guerre, c'est une organisatrice. Le Collecteur n'est pas un espion, c'est un récupérateur d'informations. Sniv n'est pas un scout, c'est un kobold qui connaît les tunnels. Chacun a un rôle, aucun n'est interchangeable. Le MJ doit jouer la Résistance comme une alternative crédible à l'Université — pas meilleure, différente.",
          },

          texte_a_lire:
            "La Maison des Retours est cachée derrière une blanchisserie de la Vieille Ville. Des lits alignés contre les murs, séparés par des rideaux faits de vieux draps. L'air sent le savon, la soupe et la cire à briquet.\n\nUne femme au regard fatigué mais net vous accueille. « Mara. Vous êtes les envoyés de l'Université ? Ou les envoyés de quelqu'un d'autre ? Dans les deux cas, asseyez-vous. Nous avons des choses à dire. »",

          objectif: "Rencontrer la Résistance, comprendre leur rôle et décider si les PJ s'allient avec eux.",

          contexte_mj: {
            situation:
              "La Résistance est un réseau clandestin : Mara dirige, Ursula soigne, le Collecteur renseigne, Sniv explore les égouts. Ils cachent les malades, les fugitifs et ceux que Thade a rendus invisibles. Ils savent que Thade est dangereux mais n'ont pas les preuves ni le pouvoir institutionnel pour agir.",
            secrets: [
              "Mara a perdu des gens dans la catastrophe de Nyx. Elle cherche la vérité depuis huit ans.",
              "Le Collecteur a des contacts dans les égouts et dans la pègre. Il sait que des fragments d'os circulent dans les réseaux clandestins — mais il ne sait pas d'où ils viennent.",
              "Sniv a exploré les égouts sous les Terrasses et a trouvé des passages récemment creusés entre le Cimetière et la Vieille Ville.",
            ],
            rappels: [
              "La Résistance ne fait pas confiance à l'Université. Si les PJ se présentent comme envoyés de Thade, ils seront éconduits.",
              "Si les PJ ont des indices (S-01, runes, cachet de Caldris), la Résistance peut les recouper avec ses propres informations.",
            ],
          },

          defis: [
            {
              competence: "Diplomatie",
              dd: 13,
              reussite: "Mara accepte de partager ce que la Résistance sait : des passages creusés sous le Cimetière, des fragments d'os qui circulent, des malades que l'Université refuse de soigner.",
              echec: "Mara reste méfiante. Elle offre un repas mais ne partage aucune information. « Revenez quand vous saurez de quel côté vous êtes. »",
            },
            {
              competence: "Renseignements",
              dd: 14,
              reussite: "Le Collecteur confirme que des fragments d'os ont été vus dans les égouts, transportés par des hommes de main de la pègre vers un destinataire inconnu. Le cachet de Caldris apparaît sur certaines caisses.",
              echec: "Le Collecteur a entendu des rumeurs sur des mouvements dans les égouts, mais rien de précis.",
            },
          ],

          indices: [
            {
              indice: "Les passages des égouts",
              localisation: "Témoignage de Sniv",
              detection: "Diplomatie DD 13 ou Discrétion DD 12",
              information: "Des passages récents relient le Cimetière aux égouts de la Vieille Ville. Quelqu'un transporte des ossements par ce réseau.",
              usage: "Piste concrète pour suivre les ossements depuis le Cimetière jusqu'à leur destinataire.",
            },
            {
              indice: "Le cachet de Caldris dans les égouts",
              localisation: "Témoignage du Collecteur",
              detection: "Renseignements DD 14",
              information: "Des caisses marquées du cachet de Caldris circulent dans les égouts. Elles contiennent des fragments d'os.",
              usage: "Relier les ossements des Thanes au protocole S-01 et à Elian Voss via Caldris.",
            },
          ],

          guide_mj: {
            intention: "Offrir aux PJ une alternative à l'Université. La Résistance donne accès aux égouts, à la pègre et aux malades — des pistes que l'Université ne peut pas fournir.",
            mise_en_place: "Les PJ sont amenés à la Maison des Retours par un contact (Ursula, Tibbet, ou un malade qu'ils ont aidé). Ambiance chaleureuse mais tendue.",
            deroulement: [
              "Mara accueille les PJ et leur demande de quel côté ils sont.",
              "Si les PJ partagent leurs indices, Mara partage les siens.",
              "Le Collecteur parle des caisses dans les égouts.",
              "Sniv propose de montrer les passages creusés sous le Cimetière.",
            ],
            actions_utiles: [
              "Partager les indices avec Mara.",
              "Demander au Collecteur ce qu'il sait des caisses de Caldris.",
              "Demander à Sniv de guider les PJ dans les égouts.",
              "Proposer une alliance entre les PJ et la Résistance.",
            ],
            fronts_heritiers: [
              "Front 'Les Factions de la Crise' — la Résistance est un acteur de la crise.",
              "Front 'Le Plan de Thade' — les égouts sont le chemin des ossements.",
            ],
            jeu_des_pnj: "Mara parle bas, avec l'autorité de quelqu'un qui a perdu et qui ne lâche pas. Le Collecteur est précis, transactionnel. Sniv est excité, nerveux, intelligent.",
            escalade: "Si les PJ trahissent la Résistance à Thade, Mara disparaît. Le réseau se replie. Les PJ perdent accès aux égouts et à la pègre.",
            sortie: "Les PJ quittent la Maison des Retours avec un guide (Sniv), une piste (les égouts) et un choix : allié de la Résistance ou agent de Thade.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent savoir que la Résistance existe et qu'elle a des informations sur les ossements.",
            ne_pas_bloquer_sur_un_jet: "Même si Diplomatie échoue, Mara offre un repas et dit que la Résistance existe. Les PJ peuvent revenir.",
            question_dramatique: "De quel côté êtes-vous ?",
          },

          transitions: {
            resume: "Les PJ quittent la Maison des Retours. Sniv les attend à la sortie, prêt à les guider dans les égouts.",
            reussite: "Les PJ ont un guide, une piste et un allié. Ils peuvent maintenant suivre les ossements depuis le Cimetière jusqu'à leur destinataire.",
            echec: "Les PJ ont rencontré la Résistance sans obtenir sa confiance. Ils savent que le réseau existe mais n'ont pas accès à ses ressources.",
          },
        },

        {
          id: "s1_choix",
          titre: "Le Choix",
          type: "Dilemme",
          resume_mj:
            "Les PJ ont assez d'indices pour comprendre : Thade prélève les ossements des Thanes pour ouvrir le seuil de la Spirale. Il le fait pour Sealine. Le sceau cède. Ils doivent choisir : rapporter leurs découvertes à Thade, le confronter, ou rejoindre la Résistance et protéger le sceau. Ce choix définit la suite de la campagne.",
          idLieu: "qg_resistance",
          idsPnj: ["mara_dirigeante", "thorgar_pretre_nain"],

          format_livre: {
            ambiance:
              "L'ancienne salle de filtration sous les égouts des Terrasses est sèche, voûtée, silencieuse. Un espace qui n'appartient ni à l'Université ni à la Résistance — un lieu neutre, choisi pour cette rencontre. La voûte est basse, les murs sont couverts de tuyaux rouillés qui ne servent plus. Une table de pierre occupe le centre. Deux chaises de chaque côté. Une lampe alchimique pose sur la table, projetant une lumière stable pour la première fois depuis des jours.\n\nMara et Thorgar se font face de chaque côté de la table. C'est la première fois qu'ils se rencontrent. Mara porte les vêtements de la Vieille Ville. Thorgar porte son tablier de forge. Ils n'ont rien en commun sauf ce qu'ils savent. Et ce qu'ils savent, c'est que le sceau cède et que quelqu'un doit agir.\n\nLes PJ entrent. La salle se tait. Tout le monde regarde les PJ. Parce que les PJ sont les seuls qui ont vu à la fois l'intérieur de l'Université et l'intérieur de la Résistance. Les seuls qui ont les preuves. Les seuls qui peuvent choisir.",
            deroulement_narratif:
              "Mara parle la première : « Nous savons maintenant. Thade prend les os. Thade ouvre le seuil. La question est : qu'allez-vous faire ? »\n\nThorgar prend le relais : « Les rites peuvent encore être restaurés. Si nous récupérons les os. Si nous protégeons les deux dernières tombes. Mais si vous choisissez le mauvais côté, tout est perdu. »\n\nLes PJ ont trois options principales :\n\n1. Rapporter à Thade. Les PJ retournent à l'Université et remettent leurs découvertes. Thade les remercie, confirme que les profanations sont l'œuvre de vandals ou d'un culte, et leur demande de protéger les deux dernières tombes. En réalité, il accélère ses prélèvements. Les PJ restent ses outils. Cette voie mène au Scénario 2 avec un retard critique et une compréhension incomplète.\n\n2. Confronter Thade. Les PJ vont voir Thade et lui présentent ce qu'ils savent. Thade ne nie pas. Il explique. Il parle de Sealine, de Nyx, de la littérature interdite, de l'amour qui a tout détruit. Il demande aux PJ de l'aider — pas par mensonge, par vérité. Il dit : « Je peux refermer le seuil. Je peux sauver Valombre. Mais il me faut les os. » Cette voie mène à un dilemme moral direct et à une confrontation qui peut être violente ou négociée.\n\n3. Rejoindre la Résistance. Les PJ choisissent de protéger le sceau avec Thorgar et la Résistance. Ils coupent les ponts avec l'Université. Thade devient un adversaire actif. Cette voie mène au Scénario 2 avec la Résistance comme alliée principale et l'Université comme terrain hostile.\n\nLe MJ ne doit pas pousser les PJ vers une option. Chaque choix est valide et ouvre une voie différente. Le choix peut être différé — les PJ peuvent demander du temps — mais pas évité. Si les PJ refusent de choisir, le temps passe, le sceau cède davantage, et le choix devient plus urgent à chaque session.",
            notes_mj:
              "C'est le moment pivot de la campagne. Tout ce qui suit dépend de ce choix. Le MJ doit laisser les PJ débattre entre eux, peser les options, formuler leurs doutes. Ne pas précipiter. Ne pas orienter. Si les PJ choisissent une quatrième voie — par exemple, tenter de parler à Thade ET protéger les tombes — c'est possible, mais difficile. Le MJ peut le permettre en créant une scène de négociation tendue où Thade accepte un compromis temporaire tout en continuant ses prélèvements en secret.",
          },

          texte_a_lire:
            "L'ancienne salle de filtration sous les égouts des Terrasses est sèche, voûtée, silencieuse. Mara et Thorgar se font face de chaque côté d'une table de pierre. C'est la première fois qu'ils se rencontrent.\n\nMara parle la première : « Nous savons maintenant. Thade prend les os. Thade ouvre le seuil. La question est : qu'allez-vous faire ? »\n\nThorgar regarde les PJ. « Les rites peuvent encore être restaurés. Si nous récupérons les os. Si nous protégeons les deux dernières tombes. Mais si vous choisissez le mauvais côté, tout est perdu. »",

          objectif: "Choisir le camp des PJ : servir Thade, le confronter, ou protéger le sceau avec la Résistance.",

          contexte_mj: {
            situation:
              "Les PJ ont les indices : S-01, les outils d'Université, les passages des égouts, les caisses de Caldris, le bourdonnement du Puits. Ils savent que Thade prélève les os pour ouvrir le seuil. Maintenant, ils doivent choisir.",
            secrets: [
              "Thade ne sait pas encore que les PJ ont rencontré la Résistance. Si les PJ rapportent tout à Thade, il saura et agira contre la Résistance.",
              "Thorgar peut restaurer les rites si les PJ récupèrent les ossements. Mais il faut agir avant que les deux dernières tombes tombent.",
              "Mara propose un plan : infiltrer les égouts, intercepter les caisses de Caldris, récupérer les os et les ramener au Cimetière.",
            ],
            rappels: [
              "Ce choix n'est pas définitif — les PJ peuvent changer de camp plus tard. Mais chaque choix a des conséquences immédiates.",
              "Si les PJ choisissent Thade, le Front 'Le Plan de Thade' avance. S'ils choisissent la Résistance, le Front 'Le Sceau qui cède' peut être ralenti.",
            ],
          },

          defis: [
            {
              competence: "Perspicacité",
              dd: 15,
              reussite: "Les PJ sentent que Mara et Thorgar disent la vérité. Pas toute la vérité — mais ce qu'ils savent, ils le disent honnêtement.",
              echec: "Difficile de savoir qui croire. Tout le monde a un agenda. L'Université, la Résistance, les nains. Les PJ doivent suivre leur instinct.",
            },
          ],

          guide_mj: {
            intention: "Forcer le choix. C'est le moment pivot de la campagne. Les PJ ne peuvent plus rester neutres.",
            mise_en_place: "QG de la Résistance dans les égouts. Mara et Thorgar face à face. Les PJ au centre.",
            deroulement: [
              "Mara expose la situation : Thade prend les os, le seuil s'ouvre.",
              "Thorgar confirme : les rites peuvent être restaurés si les os reviennent.",
              "Mara propose un plan : infiltrer les égouts, intercepter les caisses.",
              "Les PJ choisissent : Thade, la Résistance, ou une troisième voie.",
            ],
            actions_utiles: [
              "Accepter le plan de Mara et rejoindre la Résistance.",
              "Refuser et retourner à Thade avec les informations.",
              "Proposer une troisième voie : confronter Thade directement.",
              "Demander plus de temps pour réfléchir (avec conséquences : le sceau cède davantage).",
            ],
            fronts_heritiers: [
              "Tous les fronts sont concernés. Le choix des PJ détermine quelles horloges avancent et lesquelles ralentissent.",
            ],
            jeu_des_pnj: "Mara est directe, pragmatique. Thorgar est solennel, rituel. Les deux ont besoin des PJ.",
            escalade: "Si les PJ refusent de choisir, Mara les laisse partir mais prévient : « Le temps n'est pas votre allié. Chaque jour qui passe, une tombe de plus. »",
            sortie: "Les PJ quittent la salle avec un choix. Ce choix ouvre la porte du Scénario 2 — Les Masques de Nyx.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent comprendre que Thade prélève les os pour ouvrir le seuil et qu'ils doivent choisir leur camp.",
            ne_pas_bloquer_sur_un_jet: "Aucun jet ne peut empêcher le choix. Les PJ peuvent le reporter, mais pas l'éviter.",
            question_dramatique: "Allez-vous servir un homme qui ne ment jamais, ou combattre un homme que personne ne veut arrêter ?",
          },

          transitions: {
            resume: "Les PJ quittent la salle. Derrière eux, Mara et Thorgar restent silencieux. Le bruit de l'eau dans les égouts est le seul son.",
            reussite: "Les PJ ont choisi. La campagne bascule vers le Scénario 2.",
            echec: "Les PJ ont refusé de choisir. Le temps passe. Le sceau cède. La campagne bascule avec plus de pression et moins d'alliés.",
          },
        },
      ],
    },
  ],
};
