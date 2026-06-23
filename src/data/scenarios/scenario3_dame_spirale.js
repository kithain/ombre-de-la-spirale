/**
 * Scénario 3 — La Dame de la Spirale
 *
 * L'apothéose. Les PJ montent au sommet de la Tour, affrontent
 * Thade dans le vortex, rencontrent Sealine et décident du sort
 * de la Spirale, de Thade et de Valombre.
 */
export const scenario3 = {
  id: "scenario3",
  titre: "La Dame de la Spirale",
  niveau: "Niveaux 9-12 · 4-6 séances · Acte III de la trilogie",

  vue_ensemble: {
    ton:
      "Apothéose tragique. Le thriller devient affrontement moral. L'horreur devient choix. Le ton est grave, lent, définitif — chaque mot compte parce que c'est le dernier. Pas de rebondissement : les PJ savent tout. Reste à décider. Et le prix de chaque décision est irréversible.",
    themes: [
      "L'amour comme catastrophe — Thade fait tout cela par amour. L'amour n'excuse rien, mais il explique tout.",
      "La vérité comme arme — les révélations accumulées pendant la campagne sont les armes les plus puissantes contre Thade. Les cahiers, l'annotation, les patients, les bocaux.",
      "Le choix irréversible — trois options, chacune avec un prix. Aucune option n'est pure. Aucune n'est sans prix. Le choix appartient aux PJ.",
      "L'épilogue comme miroir — le monde d'après reflète les alliances, les victimes et la décision finale. La campagne se termine sur ce que les PJ ont fait, pas sur ce qu'ils ont voulu.",
    ],
    question_dramatique:
      "Quand un homme a détruit un monde par amour, pouvez-vous le juger sans détruire ce qu'il aime ? Et si vous sauvez ce qu'il aime, que devient le monde ?",
    structure_narrative: [
      {
        phase: "1. Entrée dans le vortex",
        resume: "Les PJ franchissent la porte du sommet. Le ciel est violet. Le vortex bourdonne. Thade est là, les mains tendues vers la Larme. Pas de retour possible.",
      },
      {
        phase: "2. Combat contre Thade / vérités comme armes",
        resume: "Thade combat pour gagner du temps, pas pour tuer. Trois phases : Archimage Épuisé, Larme se Fissure, Épuisement. Chaque vérité sur Sealine fissure la Larme. Les PJ peuvent gagner par la parole autant que par la force.",
      },
      {
        phase: "3. Conversation avec Sealine",
        resume: "Sealine apparaît dans le vortex. Calme, lucide, présente. Elle sait tout. Elle ne demande rien. Elle explique les trois options et leurs prix. Le choix appartient aux PJ.",
      },
      {
        phase: "4. Choix final",
        resume: "Détruire la Larme (Sealine est perdue, le sceau se referme), détacher la Larme sans la briser (le seuil filtre, la Spirale persiste, Sealine revient), ou laisser Thade ouvrir le seuil (la Spirale déferle, le monde est transformé). Aucune option n'est pure. Aucune n'est sans prix.",
      },
      {
        phase: "5. Épilogue variable",
        resume: "Le monde d'après. Le MJ décrit les conséquences sur Valombre, les PNJ survivants, le ciel, les routes. Le décompte des victimes de la Tour détermine le ton. La campagne se termine sur ce que les PJ ont fait.",
      },
    ],
    pnj_cles: [
      {
        id: "thade_coren",
        nom: "Thade Coren",
        role: "Archimage au sommet. Combat par amour, pas par cruauté. Chaque vérité le blesse plus qu'un sort. S'effondre à la phase 3.",
      },
      {
        id: "sealine_coren",
        nom: "Sealine Vael",
        role: "La Dame de la Spirale. Apparaît dans le vortex. Calme, triste, lucide. Sait tout. Ne demande rien. Accepte le choix des PJ.",
      },
      {
        id: "magi_tuteur_loyal",
        nom: "Le Magi-Tuteur loyal",
        role: "Allié possible au sommet. Peut intervenir si les PJ ne l'ont pas attaqué dans la Tour. Témoin de la fin.",
      },
    ],
    lieux_cles: [
      {
        id: "sommet_tour_vortex",
        nom: "Sommet de la Tour Arcanique",
        role: "Plateforme circulaire, marbre clair, ciel violet. Le vortex au centre. La Larme au cœur. Le lieu du combat final et du choix.",
      },
      {
        id: "place_fondation",
        nom: "Place de la Fondation",
        role: "Lieu de l'épilogue. Les gens se rassemblent. Le ciel change. Le monde d'après commence ici.",
      },
    ],
    ce_que_les_pj_savent: [
      "Thade est dans le vortex au sommet de la Tour. Son corps est dans la cuve au 7e étage.",
      "La Larme de Vael est le catalyseur du rituel. Elle est au cœur du vortex.",
      "Thade et Elian ont reproduit S-01 sur des vivants après Sealine. Sealine a essayé de l'empêcher.",
      "Les cahiers bordeaux : Thade écrit à Sealine tous les jours depuis huit ans.",
      "Le décompte des victimes de la Tour déterminera le ton de l'épilogue.",
    ],
    ce_que_les_pj_doivent_decouvrir: [
      "Les vérités accumulées pendant la campagne sont des armes. Chaque vérité sur Sealine fissure la Larme.",
      "Sealine est présente dans le vortex. Elle est lucide. Elle sait tout.",
      "Le choix final a trois options, chacune avec un prix irréversible.",
      "Aucune option n'est pure. Aucune n'est sans prix. Il y a seulement le choix que les PJ assument.",
    ],
  },

  revelations_indispensables: [
    {
      id: "rev_verites_armes",
      titre: "Les vérités accumulées sont des armes",
      resume:
        "Chaque vérité découverte pendant la campagne — l'annotation de Sealine, les 50 patients d'Elian, les 7 bocaux, les cahiers bordeaux, les 142 consultations — fissure la Larme de Vael pendant le combat contre Thade. Les PJ peuvent gagner la phase 2 sans combattre, en parlant. Les vérités sont plus puissantes que les sorts.",
      sources: [
        "Cahiers bordeaux du Laboratoire de Verre (Scénario 2, Acte III).",
        "Annotation de Sealine sur le schéma de la Larme (Scénario 2, Acte II).",
        "Dossiers des patients et bocaux du laboratoire d'Elian Voss (Scénario 2, Acte II).",
        "Registre des 142 consultations de la Réserve Interdite (Scénario 2, Acte II).",
      ],
      declencheur: "Persuasion DD 18 pour lire un extrait des cahiers ou révéler une vérité à Thade pendant le combat. Chaque vérité réussie fissure la Larme.",
      plan_b:
        "Si les PJ n'ont pas les preuves matérielles, ils peuvent citer de mémoire ce qu'ils ont vu. Le MJ accorde un avantage de circonstance si les PJ décrivent ce qu'ils ont découvert. Le magi-tuteur peut aussi témoigner.",
      consequence_si_ratee:
        "Les PJ doivent vaincre Thade par la force seule. La phase 2 est plus longue et plus dangereuse. La Larme ne se fissure pas — le combat va jusqu'à l'épuisement de Thade.",
    },
    {
      id: "rev_sealine_presente",
      titre: "Sealine est présente dans le vortex",
      resume:
        "Sealine n'est pas un souvenir. Elle est là, dans le vortex, lucide et présente. Elle sait ce que Thade a fait. Elle sait ce qu'elle coûte. Elle ne demande rien — elle accepte. C'est elle qui explique les trois options aux PJ. C'est elle qui dit : « Vous devez décider. Pas lui. Pas moi. Vous. »",
      sources: [
        "Le vortex au sommet de la Tour (Scénario 3, phase 3 du combat).",
        "Sealine elle-même, quand elle apparaît après l'effondrement de Thade.",
      ],
      declencheur: "Automatique à la fin de la phase 3. Sealine apparaît que les PJ aient fissuré la Larme ou non.",
      plan_b: "Aucun plan B nécessaire. Sealine apparaît dans tous les cas. La question n'est pas si elle apparaît, mais ce que les PJ font de sa présence.",
      consequence_si_ratee:
        "Si les PJ attaquent Sealine ou ignorent sa présence, elle se retire dans le vortex. Le choix final devient plus confus — les PJ doivent décider sans ses explications. Le prix de chaque option est moins clair.",
    },
    {
      id: "rev_trois_options",
      titre: "Le choix final a trois options, chacune avec un prix",
      resume:
        "Détruire la Larme : Sealine est perdue, le sceau se referme, Valombre revient à la normale avec ses cicatrices. Détacher la Larme sans la briser : le seuil filtre, la Spirale persiste, Sealine revient fragile, Valombre apprend à vivre avec. Laisser Thade ouvrir le seuil : la Spirale déferle, Valombre est transformée, Thade rejoint Sealine — ou croit enfin l'atteindre. Le monde est différent. Aucune option n'est pure. Aucune n'est sans prix.",
      sources: [
        "Sealine explique les trois options pendant la conversation à trois.",
        "Art de la magie DD 18 pour analyser le vortex et confirmer les conséquences.",
      ],
      declencheur: "La conversation à trois (Scénario 3, scène 2). Sealine présente les options. Les PJ choisissent.",
      plan_b: "Si les PJ n'ont pas parlé à Sealine, le magi-tuteur ou Olane (par communication magique) peut expliquer les options. Mais l'explication est moins complète et moins personnelle.",
      consequence_si_ratee:
        "Si les PJ hésitent trop longtemps, le rituel s'accomplit seul. Le seuil s'ouvre. La Spirale déferle. C'est l'option 3 sans choix conscient — le pire scénario, car les PJ n'ont pas décidé.",
    },
    {
      id: "rev_decompte_victimes",
      titre: "Le décompte des victimes détermine le ton de l'épilogue",
      resume:
        "Le MJ a compté les victimes de la Tour pendant le Scénario 2. Étudiants charmés tués au lieu d'être libérés. Gardes piégés tués au lieu d'être évités. Créature de la Spirale tuée au lieu d'être retournée. Ce décompte détermine le ton de l'épilogue : lumineux, nuancé ou sombre. Valombre se souvient de ce que les PJ ont fait.",
      sources: [
        "Le décompte tenu par le MJ pendant l'Assaut de la Tour (Scénario 2, Acte III).",
        "Les PNJ survivants réagissent en fonction du décompte pendant l'épilogue.",
      ],
      declencheur: "Automatique pendant la scène d'épilogue (Scénario 3, scène 3).",
      plan_b: "Aucun plan B. Le décompte est ce qu'il est. Si le MJ n'a pas tenu de décompte, il évalue globalement : peu de victimes, moyen, ou beaucoup.",
      consequence_si_ratee:
        "Pas applicable. Le décompte n'est pas un jet — c'est un constat. Les conséquences sont narratives, pas mécaniques.",
    },
  ],

  fronts_actifs: [
    {
      id_front: "front_plan_thade",
      nom: "Le Plan de Thade — accomplissement",
      etat_initial:
        "Thade est au sommet de la Tour, connecté au vortex. La Larme de Vael est au cœur du vortex. Le rituel est en cours. Le ciel de Valombre vire au violet. L'horloge est à l'étape finale — si personne n'arrête Thade, le seuil s'ouvre.",
      manifestation_scenarios:
        "Le vortex bourdonne au sommet. Le ciel est violet. Le déphasage devient général. Des créatures de la Spirale apparaissent dans la Tour. Les routes de Valombre ne sont plus fiables.",
      interactions_scenes: [
        {
          scene: "Le Vortex",
          interaction:
            "Le combat contre Thade est le front. Chaque round rapproche le rituel de son accomplissement. Chaque vérité sur Sealine fissure la Larme et ralentit le rituel. Si les PJ détruisent le corps dans la cuve (Scénario 2), Thade est affaibli d'une phase.",
        },
        {
          scene: "La Conversation à Trois",
          interaction:
            "Le front se résout ici. Le choix des PJ détermine l'issue : le rituel s'arrête (Larme détruite), le rituel est partiellement accompli (Sealine sauvée), ou le rituel s'accomplit totalement (seuil ouvert).",
        },
      ],
      leviers_pj_scenario:
        "Les PJ peuvent : combattre Thade pour gagner du temps, utiliser les vérités comme armes pour fissurer la Larme, détruire le corps dans la cuve pour affaiblir Thade, ou parler à Sealine pour comprendre les options avant de choisir.",
    },
    {
      id_front: "front_sceau_qui_cede",
      nom: "Le Sceau qui cède",
      etat_initial:
        "Le sceau des Sept Thanes est au bord de la rupture. Les prélèvements, le rite inversé d'Edran Morn, et le rituel de Thade ont accumulé les fissures. Si le rituel s'accomplit, le sceau cède entièrement. Si la Larme est détruite, le sceau se referme. Si Sealine est sauvée, le sceau reste entrouvert.",
      manifestation_scenarios:
        "Les zones déphasées sont maintenant générales. Les routes mentent partout. Le ciel est violet. Les tombes des Thanes craquent. Les filaments planaires sont visibles dans toute la ville.",
      interactions_scenes: [
        {
          scene: "Le Vortex",
          interaction:
            "Le combat accélère ou ralentit la fissuration. Chaque vérité qui fissure la Larme ralentit le rituel. Chaque round perdu accélère le sceau vers la rupture.",
        },
        {
          scene: "Le Monde d'Après",
          interaction:
            "Le sort du sceau est révélé dans l'épilogue. Si la Larme est détruite, les tombes sont restaurées. Si Sealine est sauvée, le sceau reste entrouvert. Si le seuil s'ouvre, le sceau n'existe plus — la Spirale et Valombre fusionnent.",
        },
      ],
      leviers_pj_scenario:
        "Les PJ ne peuvent pas agir directement sur le sceau au Scénario 3. Le sort du sceau dépend entièrement du choix final. Les actions des Scénarios 1 et 2 (restauration des rites, arrêt du rite d'Edran) déterminent l'état initial du sceau au début du Scénario 3.",
    },
    {
      id_front: "front_cite_sous_pression",
      nom: "La Cité sous pression",
      etat_initial:
        "Valombre est en état d'urgence. Le déphasage général paralyse les routes. La garde est débordée. Le Conseil est impuissant. Les factions — Champion, Endeuillés, Résistance — attendent l'issue. Le ciel violet terrifie la population. L'horloge est à l'étape finale.",
      manifestation_scenarios:
        "Les rues sont vides. Les gens se barricadent. Le Champion harangue une foule terrifiée. Les Endeuillés, s'ils n'ont pas été dispersés, attendent le retour des morts. Mara et la Résistance préparent l'après.",
      interactions_scenes: [
        {
          scene: "Le Monde d'Après",
          interaction:
            "L'épilogue montre ce que devient la cité. Le Champion est discrédité ou renforcé selon le choix. Les Endeuillés se dispersent ou trouvent la paix. Mara reconstruit. Olane réforme. Thorgar restaure. Le décompte des victimes détermine si la cité fait confiance aux PJ ou les craint.",
        },
      ],
      leviers_pj_scenario:
        "Les PJ n'agissent pas sur la cité pendant le combat final. Leur influence sur la cité se manifeste dans l'épilogue, à travers les alliances construites pendant les Scénarios 1 et 2 et le décompte des victimes de la Tour.",
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
        titre: "Le Vortex",
        acte: "Acte I",
        statut: "obligatoire",
        axe: "Cosmique",
        dependances: ["L'Assaut de la Tour (Scénario 2)", "Le Laboratoire de Verre (Scénario 2)"],
        revele: ["Les vérités comme armes", "La Larme est le catalyseur", "Thade combat par amour, pas par cruauté"],
        note: "Le combat se déroule en 3 phases. Si les PJ ont détruit le corps dans la cuve, Thade est affaibli. Si les PJ ont les cahiers, ils peuvent les lire à Thade.",
      },
      {
        titre: "La Conversation à Trois",
        acte: "Acte I",
        statut: "obligatoire",
        axe: "Moral",
        dependances: ["Le Vortex (Thade doit être vaincu ou affaibli)"],
        revele: ["Sealine est présente et lucide", "Les trois options et leurs prix", "Le choix appartient aux PJ"],
        note: "Aucun jet. C'est une conversation et un choix. Sealine ne demande rien — elle accepte. Thade est brisé et ne combat plus.",
      },
      {
        titre: "Le Monde d'Après",
        acte: "Acte II",
        statut: "obligatoire",
        axe: "Épilogue",
        dependances: ["La Conversation à Trois (le choix final doit être fait)"],
        revele: ["Les conséquences du choix sur Valombre", "Le sort des PNJ survivants", "Le ton de l'épilogue selon le décompte des victimes"],
        note: "Narration pure. Pas de jets. Le MJ décrit les conséquences selon le choix, les alliances et le décompte. La campagne se termine ici.",
      },
    ],
  },

  synopsis:
    "Tout converge au sommet de la Tour Arcanique. Thade est dans le vortex, la Larme de Vael au creux de ses mains. La Spirale est à portée. Sealine l'attend de l'autre côté. Les PJ doivent monter, affronter l'archimage et décider : détruire la Larme, sauver Sealine, ou laisser Thade ouvrir le seuil. Chaque choix a un prix. La campagne se joue ici.",

  evenements_mondiaux: {
    chronologie_inevitable: [
      "Le vortex s'ouvre au sommet de la Tour. Le ciel de Valombre vire au violet.",
      "Le déphasage devient général. Les routes de Valombre ne sont plus fiables.",
      "La Spirale filtre par le vortex. Des créatures et des échos apparaissent dans la Tour.",
      "Si personne n'arrête le rituel, le seuil s'ouvre. La Spirale et Valombre fusionnent.",
    ],
    consequences_echecs: [
      "Si les PJ tardent : le rituel s'accomplit. Le seuil s'ouvre. Valombre et la Spirale fusionnent.",
      "Si les PJ détruisent la Larme sans parler à Sealine : Sealine est perdue. Thade devient un archimage brisé et dangereux.",
      "Si les PJ laissent Thade ouvrir le seuil : la Spirale déferle. Valombre est transformée. Thade franchit le seuil vers Sealine, mais ce qu'elle fera de lui appartient à l'épilogue. À quel prix ?",
      "Si les PJ tuent Thade sans résoudre la Larme : le vortex s'effondre. Le sceau se referme. Mais la Larme reste, et quelqu'un d'autre la trouvera.",
    ],
  },

  actes: [
    // ── ACTE I — LE SOMMET ─────────────────────────────────────────
    {
      titre: "Acte I — Le Sommet",
      stake: "Les PJ atteignent le sommet de la Tour et affrontent Thade dans le vortex.",
      location: "Sommet de la Tour Arcanique",

      scenes: [
        {
          id: "s3_vortex",
          titre: "Le Vortex",
          type: "Boss",
          resume_mj:
            "Les PJ atteignent le sommet. Plateforme circulaire, marbre clair, ciel violet. Au centre, le vortex : puits horizontal d'énergie. Au cœur, la Larme de Vael. Thade se tient devant, les mains tendues. Le combat se déroule en 3 phases : Archimage Épuisé, Larme se Fissure, Épuisement.",
          idLieu: "sommet_tour_vortex",
          idsPnj: ["thade_coren", "sealine_coren", "magi_tuteur_loyal"],

          format_livre: {
            ambiance:
              "Le sommet de la Tour Arcanique est une plateforme circulaire de marbre clair, ouverte sur le ciel. Pas de murs. Pas de toit. Le ciel est violet — pas le violet du crépuscule, un violet qui n'a rien à voir avec l'heure. L'air bourdonne. Pas un vent — une vibration, basse, continue, qui monte du centre de la plateforme. Au centre, le vortex : un puits horizontal d'énergie violette, tourbillonnant, qui ne mène nulle part et partout à la fois. Au cœur du vortex, quelque chose brille. Une larme. La Larme de Vael. Le sol est chaud sous les pieds. Les runes gravées dans le marbre brillent d'un or qui pulse au rythme du bourdonnement.",
            deroulement_narratif:
              "Thade se tient devant le vortex. Ses mains sont tendues. Son visage est paisible. Il ne regarde pas les PJ — il regarde le vortex. « Vous êtes venus », dit-il. « Je le savais. Je savais que vous viendriez. » Une pause. Puis : « Elle m'attend. »\n\nPhase 1 — Archimage Épuisé : Thade combat avec des sorts puissants mais il est épuisé par le rituel. Ses attaques sont prévisibles — Boule de feu, Rayon de givre, Mur de force. Il ne cherche pas à tuer. Il cherche à gagner du temps. Chaque round qu'il gagne rapproche le rituel de son accomplissement. Les PJ peuvent le combattre ou tenter de parler.\n\nPhase 2 — Larme se Fissure : Si les PJ ont détruit le corps dans la cuve, ou s'ils révèlent une vérité sur Sealine (les cahiers, l'annotation, les expériences, les patients, les bocaux), la Larme se fissure. Persuasion DD 18 pour lire un extrait des cahiers ou révéler une vérité. Chaque vérité réussie fissure la Larme un peu plus. Thade devient désespéré et imprévisible — ses sorts sont moins contrôlés, plus puissants, plus dangereux.\n\nPhase 3 — Épuisement : Thade s'effondre sur le marbre. Le vortex vacille. La Larme est fissurée mais pas détruite. Une forme se dessine dans l'énergie violette. Sealine. La conversation à trois commence.\n\nSi les PJ ont le magi-tuteur avec eux, il peut intervenir à la phase 2 — il dit à Thade : « Maître, arrêtez. Elle ne voudrait pas ça. » Thade hésite un round. Si les PJ ont détruit le corps dans la cuve (Scénario 2), Thade perd une phase de puissance — il passe directement à la phase 2 après 2 rounds au lieu de 4.",
            notes_mj:
              "Le combat n'est pas un combat standard — c'est une course contre le rituel. Le MJ doit tenir le décompte du nombre de rounds. Au round 5, le rituel est à moitié accompli. Au round 10, le rituel s'accomplit. Les PJ ne le savent pas exactement, mais le bourdonnement du vortex augmente d'intensité à chaque round. Les vérités sont les armes les plus puissantes : chaque vérité réussie (Persuasion DD 18) compte comme 2 rounds de combat. Les PJ peuvent gagner la phase 2 sans combattre — en parlant.",
          },

          texte_a_lire:
            "Le sommet de la Tour est ouvert sur le ciel. Le marbre est clair, presque blanc. L'air bourdonne. Un vortex se déploie au centre de la plateforme — un puits horizontal d'énergie violette, tourbillonnant, qui ne mène nulle part et partout à la fois. Au cœur du vortex, quelque chose brille. Une larme. La Larme de Vael.\n\nThade se tient devant le vortex. Ses mains sont tendues. Son visage est paisible. Il ne vous regarde pas. Il regarde le vortex.\n\n« Vous êtes venus », dit-il. « Je le savais. Je savais que vous viendriez. »\n\nUne pause. Puis : « Elle m'attend. »",

          objectif: "Arrêter le rituel de Thade et décider du sort de la Larme de Vael.",

          contexte_mj: {
            situation:
              "Thade est au sommet, connecté au vortex. La Larme de Vael est au cœur du vortex. Le rituel est en cours. Le combat se déroule en 3 phases. Chaque vérité sur Sealine fissure la Larme.",
            secrets: [
              "Phase 1 — Archimage Épuisé : Thade combat avec des sorts puissants mais il est épuisé par le rituel. Ses attaques sont prévisibles.",
              "Phase 2 — Larme se Fissure : Si les PJ ont détruit le corps dans la cuve, ou s'ils révèlent une vérité sur Sealine (les cahiers, l'annotation, les expériences), la Larme se fissure. Thade devient désespéré et imprévisible.",
              "Phase 3 — Épuisement : Thade s'effondre. Le vortex vacille. Sealine peut apparaître. La conversation à trois commence.",
              "Chaque vérité sur Sealine (l'annotation 'ne jamais alimenter avec des vivants', les 50 patients, les 7 bocaux) fissure la Larme un peu plus. Les PJ peuvent utiliser les vérités comme armes.",
            ],
            rappels: [
              "Thade ne veut pas tuer les PJ. Il veut les retarder. Chaque round qu'il gagne rapproche le rituel de son accomplissement.",
              "Si les PJ ont les cahiers du Laboratoire de Verre, ils peuvent les lire à Thade. Chaque lettre fissure la Larme.",
              "Le magi-tuteur loyal peut intervenir si les PJ ne l'ont pas attaqué dans la Tour.",
            ],
          },

          defis: [
            { competence: "Athlétisme", dd: 15, reussite: "Les PJ se frappent un chemin vers le vortex à travers les vents planaires.", echec: "Les vents repoussent les PJ. Ils doivent trouver une autre approche." },
            { competence: "Persuasion", dd: 18, reussite: "Les PJ lisent un extrait des cahiers ou révèlent une vérité sur Sealine. La Larme se fissure. Thade vacille.", echec: "Thade refuse d'écouter. « Vous ne comprenez pas. Vous n'avez jamais perdu quelqu'un. »" },
            { competence: "Art de la magie", dd: 18, reussite: "Les PJ identifient la structure du vortex. La Larme est le catalyseur. La retirer arrête le rituel mais libère l'énergie accumulée.", echec: "Le vortex est trop complexe. Impossible de savoir quoi faire sans risquer une catastrophe." },
          ],

          indices: [
            { indice: "Les vérités comme armes", localisation: "Cahiers, archives, laboratoire", detection: "Connaissances accumulées", information: "Chaque vérité sur Sealine fissure la Larme. L'annotation, les patients, les bocaux, les cahiers.", usage: "Les PJ peuvent gagner la phase 2 sans combattre — en parlant." },
            { indice: "La Larme de Vael", localisation: "Cœur du vortex", detection: "Art de la magie DD 18", information: "La Larme est le catalyseur. La retirer arrête le rituel. La détruire libère l'énergie. La laisser ouvre le seuil.", usage: "Le choix final dépend de ce que les PJ font de la Larme." },
          ],

          guide_mj: {
            intention: "Le combat final. 3 phases. Les vérités sur Sealine sont les armes les plus puissantes.",
            mise_en_place: "Sommet ouvert. Ciel violet. Vortex. Thade devant. Larme au centre.",
            deroulement: ["Phase 1 : combat arcanique. Thade puissant mais épuisé.", "Phase 2 : la Larme se fissure. Les PJ utilisent les vérités.", "Phase 3 : Thade s'effondre. Le vortex vacille. Sealine apparaît."],
            actions_utiles: ["Combattre Thade.", "Lire les cahiers à voix haute.", "Révéler les vérités sur Sealine.", "Tenter de détacher la Larme du vortex."],
            fronts_heritiers: ["Tous les fronts convergent ici."],
            jeu_des_pnj: "Thade ne combat pas par cruauté. Il combat parce que Sealine l'attend. Chaque vérité le blesse plus qu'un sort. Sealine, si elle apparaît, est calme, triste, lucide.",
            escalade: "Si les PJ tardent, le rituel s'accomplit. Le seuil s'ouvre. La Spirale déferle.",
            sortie: "Thade s'effondre. Le vortex vacille. Sealine apparaît dans le vortex. La conversation à trois commence.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent savoir que les vérités sur Sealine fissurent la Larme et que la Larme est le catalyseur.",
            ne_pas_bloquer_sur_un_jet: "Même si tous les jets échouent, le combat se déroule. Les PJ peuvent combattre Thade jusqu'à l'épuisement.",
            question_dramatique: "Pouvez-vous arrêter un homme qui ne fait tout cela que par amour ?",
          },

          transitions: {
            resume: "Thade s'effondre sur le marbre. Le vortex vacille. Une forme apparaît dans l'énergie violette.",
            reussite: "Les PJ ont vaincu Thade et fissuré la Larme. Sealine apparaît.",
            echec: "Les PJ ont vaincu Thade par la force, sans fissurer la Larme. Le vortex est instable. Sealine apparaît, mais la situation est plus dangereuse.",
          },
        },

        {
          id: "s3_conversation_trois",
          titre: "La Conversation à Trois",
          type: "Dilemme",
          resume_mj:
            "Sealine apparaît dans le vortex. Elle est calme, lucide, présente. Elle parle aux PJ et à Thade. Elle sait ce que Thade a fait. Elle sait ce qu'elle coûte. La conversation n'est pas un combat — c'est un choix. Trois options : détruire la Larme (Sealine est perdue, le sceau se referme), détacher la Larme sans la briser (le seuil reste entrouvert, la Spirale filtre, Sealine revient), ou laisser Thade ouvrir le seuil (la Spirale déferle, Thade franchit le seuil vers Sealine, Valombre est transformée).",
          idLieu: "sommet_tour_vortex",
          idsPnj: ["thade_coren", "sealine_coren"],

          format_livre: {
            ambiance:
              "Le vortex vacille. Le bourdonnement a diminué — pas disparu, mais atténué. Le ciel violet est toujours là, mais il tremble, comme s'il hésitait. Le marbre sous les pieds est chaud. Thade est au sol, genoux pliés, mains ouvertes. Il ne combat plus. Il regarde le vortex. La forme qui se dessine dans l'énergie violette prend des détails — une femme, des cheveux sombres, un visage calme, des vêtements simples. Elle ressemble à quelqu'un qui préparait le thé quand tout a basculé. L'air sent la lavande. Pas un parfum — une présence.",
            deroulement_narratif:
              "Sealine se matérialise dans le vortex. Elle ne flotte pas — elle se tient, comme si le vortex était une fenêtre et elle de l'autre côté. Elle regarde Thade. Elle regarde les PJ. Elle est calme.\n\n« Thade », dit-elle. Thade lève la tête. Ses yeux sont brisés. « Sealine. » « Je sais », dit-elle. « Je sais tout. Les patients. Les bocaux. La Larme. Je sais. » Un silence. Puis : « Et je sais pourquoi. »\n\nElle se tourne vers les PJ. « Vous devez décider. Pas lui. Pas moi. Vous. »\n\nSealine explique les trois options avec une clarté tranquille :\n1. Détruire la Larme. Le sceau se referme. Le déphasage s'arrête. Sealine disparaît. Thade est brisé mais vivant. Valombre revient à la normale — avec ses cicatrices.\n2. Détacher la Larme : extraire la Larme du vortex sans la briser. Sealine revient, fragile. Le seuil reste entrouvert. La Spirale filtre de manière permanente. Valombre apprend à vivre avec. Thade est jugé mais pas exécuté.\n3. Laisser Thade ouvrir le seuil. La Spirale déferle. Valombre et la Spirale fusionnent. Le ciel reste violet. Les routes mènent partout et nulle part. Thade franchit le seuil vers Sealine — mais ce qu'elle fera de lui appartient à l'épilogue. Le monde est différent. Pas meilleur, pas pire — différent.\n\nLes PJ peuvent parler à Sealine et à Thade avant de choisir. Sealine répond avec une honnêteté absolue. Thade ne parle que si on lui adresse la parole. Il dit : « Je voulais la ramener. C'est tout. Je voulais la ramener. »\n\nAucun jet. C'est une conversation et un choix. Le MJ laisse le silence s'installer après les explications. Les PJ décident quand ils sont prêts.",
            notes_mj:
              "Le MJ ne pousse pas les PJ vers une option. Les trois sont valides. Le MJ décrit les conséquences avec la même neutralité pour chaque option. Si les PJ hésitent, le MJ applique trois avertissements : 1) Le vortex pulse, la Larme brille plus fort. 2) Sealine prévient : « Le choix ne peut pas attendre. » 3) Thade tente de reprendre le contrôle ou la Larme s'ouvre d'elle-même. Après le troisième avertissement, le rituel s'accomplit seul — c'est l'option 3 sans choix conscient.",
          },

          texte_a_lire:
            "Une forme se dessine dans le vortex. D'abord un contour, puis des détails. Une femme. Cheveux sombres, visage calme, yeux qui ont vu plus que ce qu'un visage devrait porter. Elle porte des vêtements simples — une robe de maison, des chaussures plates. Elle ressemble à quelqu'un qui préparait le thé quand tout a basculé.\n\n« Thade », dit-elle.\n\nThade lève la tête. Ses yeux sont brisés. « Sealine. »\n\n« Je sais », dit-elle. « Je sais tout. Les patients. Les bocaux. La Larme. Je sais. »\n\nUn silence. Puis : « Et je sais pourquoi. »\n\nElle se tourne vers vous. « Vous devez décider. Pas lui. Pas moi. Vous. »",

          objectif: "Décider du sort de la Larme, de Sealine, de Thade et de Valombre.",

          contexte_mj: {
            situation:
              "Sealine est présente dans le vortex. Elle est lucide. Elle sait tout. Elle n'accuse pas Thade, mais elle ne veut pas qu'il ouvre le seuil. Le choix appartient aux PJ.",
            secrets: [
              "Sealine sait que Thade et Elian ont reproduit S-01 sur des vivants après elle. Elle lui pardonne mais ne l'absout pas.",
              "Si les PJ détruisent la Larme, Sealine disparaît. Le sceau se referme. Thade est brisé mais vivant.",
              "Si les PJ sauvent Sealine (détacher la Larme sans la briser), le seuil s'ouvre partiellement. La Spirale filtre de manière permanente. Sealine revient mais Valombre est changée.",
              "Si les PJ laissent Thade ouvrir le seuil, la Spirale déferle. Valombre et la Spirale fusionnent. Thade franchit le seuil vers Sealine, mais le monde est transformé.",
            ],
            rappels: [
              "Aucune option n'est pure. Aucune n'est sans prix.",
              "Sealine ne demande rien. Elle accepte ce que les PJ décident.",
              "Thade est brisé. Quelle que soit la décision, il ne combat plus.",
            ],
          },

          guide_mj: {
            intention: "Le choix final. Pas de combat. Une conversation. Le prix de chaque option doit être clair.",
            mise_en_place: "Sommet. Vortex vacillant. Sealine dans le vortex. Thade au sol. Les PJ debout.",
            deroulement: ["Sealine parle aux PJ.", "Elle explique les trois options.", "Les PJ discutent entre eux et avec Thade.", "Les PJ choisissent."],
            actions_utiles: ["Détruire la Larme.", "Détacher la Larme sans la briser.", "Laisser Thade ouvrir le seuil.", "Parler à Sealine et à Thade avant de choisir."],
            fronts_heritiers: ["Tous les fronts se résolvent ici."],
            jeu_des_pnj: "Sealine est calme, triste, lucide. Elle ne pleure pas. Elle a pleuré tout ce qu'elle pouvait pleurer. Thade est brisé. Il ne parle que si on lui adresse la parole.",
            escalade: "Pas d'escalade. C'est une conversation, pas un combat.",
            sortie: "Les PJ font leur choix. Les conséquences se déploient dans la scène d'épilogue.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent comprendre les trois options et leurs conséquences.",
            ne_pas_bloquer_sur_un_jet: "Aucun jet. C'est une conversation et un choix.",
            question_dramatique: "Que choisissez-vous quand aucune issue ne vous laisse innocent ?",
          },

          transitions: {
            resume: "Les PJ font leur choix. Le vortex réagit. Le monde change.",
            reussite: "Les PJ ont choisi en connaissance de cause. L'épilogue reflète leur décision.",
            echec: "Les PJ hésitent trop longtemps. Le rituel s'accomplit seul. Le seuil s'ouvre. La Spirale déferle.",
          },
        },
      ],
    },

    // ── ACTE II — L'ÉPILOGUE ───────────────────────────────────────
    {
      titre: "Acte II — L'Épilogue",
      stake: "Les conséquences du choix final se déploient sur Valombre.",
      location: "Valombre — lieux variés selon le choix",

      scenes: [
        {
          id: "s3_monde_apres",
          titre: "Le Monde d'Après",
          type: "Conclusion",
          resume_mj:
            "La scène d'épilogue varie selon le choix des PJ. Le MJ décrit les conséquences sur Valombre, les factions, les PNJ survivants et le monde. Cette scène n'a pas de jets — c'est une narration pure.",
          idLieu: "place_fondation",
          idsPnj: ["mara_dirigeante", "thorgar_pretre_nain", "maera_olane"],

          format_livre: {
            ambiance:
              "Le ciel de Valombre change. Lentement, imperceptiblement, mais il change. Les rues se réorganisent — ou retrouvent leur place, ou deviennent autre chose. Les gens sortent des maisons, lèvent les yeux, regardent. Sur la Place de la Fondation, la statue des Fondateurs est toujours là. Les bâtiments administratifs sont toujours là. Mais le ciel n'est plus le même. Et les gens le savent. L'air sent la pierre humide, le pain, la fumée — ou la lavande, selon le choix. La Place est pleine. Pas pour une émeute. Pas pour un discours. Pour voir. Pour comprendre. Pour décider ce qu'ils font maintenant.",
            deroulement_narratif:
              "Le MJ décrit les conséquences selon le choix des PJ :\n\nSi la Larme est détruite : le ciel reprend sa couleur normale. Le déphasage s'arrête. Les routes redeviennent fiables. Les tombes des Thanes sont restaurées — Thorgar confirme que le sceau est refermé. Thade est brisé, jugé ou exilé selon les alliances des PJ. Sealine est perdue. Valombre revient à la normale — mais avec les cicatrices. Les gens se souviennent de ce qui s'est passé.\n\nSi Sealine est sauvée : le ciel garde une teinte violacère, légère, permanente. Le déphasage persiste mais est gérable — certaines rues sont trompeuses, mais la plupart sont fiables. Sealine revient, fragile, silencieuse. Thade est jugé mais pas exécuté — les PJ peuvent témoigner. Valombre apprend à vivre avec la Spirale. Les gens savent que le monde a changé, mais il n'a pas fini.\n\nSi le seuil s'ouvre : le ciel est violet. Les routes mènent partout et nulle part. La Spirale déferle. Valombre est transformée. Thade franchit le seuil vers Sealine — ils disparaissent dans le vortex, ou ils restent, selon ce que les PJ ont dit et ce que Sealine décide. Le monde est différent. Pas meilleur, pas pire — différent. Les gens s'adaptent. La vie continue, mais pas comme avant.\n\nLes PNJ survivants apparaissent : Mara reconstruit. Thorgar restaure les rites. Olane réforme l'Université. Ursula soigne les blessés. Le Champion, s'il n'a pas été arrêté, profite du chaos ou est discrédité. Les Endeuillés, s'ils n'ont pas été dispersés, trouvent la paix ou disparaissent.\n\nLe décompte des victimes de la Tour détermine le ton : peu de victimes, l'épilogue est lumineux — les gens font confiance aux PJ. Beaucoup de victimes, l'épilogue est sombre — les gens craignent les PJ.\n\nLes PJ ont un dernier moment pour parler aux PNJ, visiter les lieux marquants, et décider de l'avenir de leurs personnages.",
            notes_mj:
              "Narration pure. Pas de jets. Le MJ décrit et les PJ réagissent. L'épilogue doit refléter les choix, les alliances et les pertes de toute la campagne. Le MJ peut demander aux PJ ce que leurs personnages font dans les semaines qui suivent. C'est la dernière scène de la campagne — elle mérite du temps et de l'attention.",
            matrice_epilogue: [
              {
                choix: "Larme détruite",
                sealine: "perdue",
                thade: "brisé / jugé / exilé",
                sceau: "refermé",
                valombre: "normale avec cicatrices",
                ton: "amer",
              },
              {
                choix: "Larme détachée (Sealine sauvée)",
                sealine: "revenue fragile",
                thade: "jugé, pas exécuté",
                sceau: "entrouvert",
                valombre: "changée mais vivable",
                ton: "mélancolique",
              },
              {
                choix: "Seuil ouvert",
                sealine: "réunie avec Thade ou disparue",
                thade: "accompli / perdu",
                sceau: "aboli",
                valombre: "fusionnée à la Spirale",
                ton: "mythique",
              },
            ],
          },

          texte_a_lire:
            "Le ciel de Valombre change. Lentement, imperceptiblement, mais il change. Les rues se réorganisent. Les gens s'arrêtent, lèvent les yeux, regardent. Quelque chose est arrivé — ou quelque chose est parti. Le monde n'est plus exactement celui qu'il était hier.\n\nSur la Place de la Fondation, les gens se rassemblent. Pas pour une émeute. Pas pour un discours. Pour voir. Pour comprendre. Pour décider ce qu'ils font maintenant.",

          objectif: "Voir les conséquences du choix final et clore la campagne.",

          contexte_mj: {
            situation:
              "Le MJ décrit les conséquences selon le choix : Si la Larme est détruite : le sceau se referme. Le déphasage s'arrête. Le froid cesse. Les tombes des Thanes sont restaurées. Thade est brisé, jugé ou exilé. Sealine est perdue. Valombre revient à la normale — mais avec les cicatrices. Si Sealine est sauvée : le seuil filtre. Le déphasage persiste mais est gérable. Sealine revient, fragile. Thade est jugé mais pas exécuté. Valombre apprend à vivre avec la Spirale. Si le seuil s'ouvre : la Spirale déferle. Valombre est transformée. Le ciel est violet. Les routes mènent partout et nulle part. Thade franchit le seuil vers Sealine. Le monde est différent. Pas meilleur, pas pire — différent.",
            secrets: [
              "Le décompte des victimes de la Tour détermine le ton de l'épilogue. Peu de victimes : l'épilogue est lumineux. Beaucoup de victimes : l'épilogue est sombre.",
              "Les PNJ survivants apparaissent : Mara, Thorgar, Olane, Ursula. Leur réaction dépend du choix et des relations construites pendant la campagne.",
              "Le Champion de la Bannière Pure, s'il n'a pas été arrêté, profite du chaos ou est discrédité selon le choix.",
            ],
            rappels: [
              "C'est une scène de narration. Pas de jets. Le MJ décrit et les PJ réagissent.",
              "L'épilogue doit refléter les choix, les alliances et les pertes de toute la campagne.",
            ],
          },

          guide_mj: {
            intention: "Clore la campagne avec les conséquences du choix final.",
            mise_en_place: "Place de la Fondation. Les gens rassemblés. Le ciel change.",
            deroulement: ["Le MJ décrit le changement du ciel et de la ville.", "Les PNJ survivants apparaissent et réagissent.", "Le sort de Thade et de Sealine est révélé.", "Les PJ ont un dernier moment pour interagir."],
            actions_utiles: ["Parler aux PNJ survivants.", "Visiter les lieux marquants de la campagne.", "Décider de l'avenir des PJ."],
            fronts_heritiers: ["Tous les fronts sont résolus."],
            jeu_des_pnj: "Mara reconstruit. Thorgar restaure les rites. Olane réforme l'Université. Ursula soigne les blessés. Chacun selon sa nature.",
            escalade: "Pas d'escalade. C'est la fin.",
            sortie: "La campagne est terminée. Les PJ quittent Valombre ou y restent. Le monde continue.",
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent voir les conséquences de leur choix.",
            ne_pas_bloquer_sur_un_jet: "Pas de jets. Narration pure.",
            question_dramatique: "Valombre survivra-t-elle à ce que vous avez fait ?",
          },

          transitions: {
            resume: "Le soleil se couche sur Valombre. Le ciel prend sa couleur définitive — normale, violette, ou entre les deux.",
            reussite: "La campagne se termine sur un épilogue qui reflète les choix des PJ.",
            echec: "La campagne se termine sur un épilogue plus sombre, mais qui reflète aussi les choix.",
          },
        },
      ],
    },
  ],

  encadres_mj: [
    {
      id: "enc_pj_tuent_thade_sans_parler",
      titre: "Que faire si les PJ tuent Thade sans utiliser les vérités",
      situation:
        "Les PJ combattent Thade par la force dès la phase 1, sans lire les cahiers ni révéler les vérités sur Sealine. Ils veulent en finir vite.",
      principe:
        "Thade peut être vaincu par la force. Ce n'est pas un échec — c'est un choix. Mais le combat est plus long, plus dangereux, et la Larme ne se fissure pas. Sealine apparaît quand même, mais la conversation est plus tendue.",
      proceder: [
        {
          etape: "Le combat se déroule normalement",
          detail:
            "Les trois phases se succèdent. Thade est puissant mais épuisé. Sans les vérités, la phase 2 est plus longue — Thade ne se désespère pas, il continue à combattre avec une régularité mécanique.",
        },
        {
          etape: "Sealine apparaît à la phase 3",
          detail:
            "Sealine apparaît, mais elle regarde les PJ avec une tristesse différente. Elle dit : « Vous l'avez arrêté. Mais vous ne savez pas pourquoi il a commencé. » Les PJ peuvent encore parler à Thade au sol.",
        },
        {
          etape: "Le choix reste le même",
          detail:
            "Les trois options sont toujours disponibles. Mais le contexte est différent : les PJ ont vaincu Thade par la force, sans comprendre. L'épilogue peut en tenir compte.",
        },
      ],
      a_ne_pas_faire: [
        "Ne pas punir les PJ pour avoir combattu. C'est un choix valide.",
        "Ne pas rendre le combat impossible. Thade est épuisé, pas invincible.",
        "Ne pas forcer les PJ à parler s'ils veulent combattre.",
      ],
    },
    {
      id: "enc_pj_veulent_sauver_sealine",
      titre: "Que faire si les PJ veulent sauver Sealine à tout prix",
      situation:
        "Les PJ sont décidés dès le début : ils veulent sauver Sealine. Ils ne veulent pas détruire la Larme ni laisser le seuil s'ouvrir. Ils veulent la troisième voie.",
      principe:
        "L'option 2 (détacher la Larme sans la briser) est valide. Mais le MJ doit s'assurer que les PJ comprennent le prix : le seuil reste entrouvert, la Spirale filtre, Valombre est changée. Ce n'est pas une fin heureuse.",
      proceder: [
        {
          etape: "Sealine explique le prix",
          detail:
            "Sealine dit : « Si vous me retirez du vortex, je reviendrai. Mais la porte ne se refermera pas. La Spirale continuera de filtrer. Valombre ne sera plus exactement ce qu'elle était. » Les PJ doivent entendre ça avant de choisir.",
        },
        {
          etape: "Le retrait de la Larme",
          detail:
            "Art de la magie DD 18 pour détacher la Larme sans la briser. Réussite : la Larme se détache du vortex. Sealine se matérialise pleinement. Le vortex se réduit mais ne disparaît pas. Échec : la Larme se fissure et se brise partiellement. Sealine revient mais le seuil est plus ouvert que prévu.",
        },
        {
          etape: "L'épilogue reflète le choix",
          detail:
            "Le ciel garde une teinte violacère. Les routes sont parfois trompeuses. Sealine est là, fragile, silencieuse. Thade est jugé. Valombre apprend à vivre avec la Spirale. Ce n'est pas une fin heureuse — c'est un nouveau commencement.",
        },
      ],
      a_ne_pas_faire: [
        "Ne pas transformer l'option 2 en solution parfaite. Elle a un prix.",
        "Ne pas empêcher les PJ de la choisir. C'est un choix valide.",
        "Ne pas oublier que Thade doit être jugé — les PJ ne décident pas seul de son sort.",
      ],
    },
    {
      id: "enc_pj_hesitent_trop_longtemps",
      titre: "Que faire si les PJ hésitent trop longtemps",
      situation:
        "Les PJ sont dans la conversation à trois. Sealine a expliqué les options. Les PJ discutent, débattent, ne se décident pas. Le temps passe.",
      principe:
        "Le rituel n'attend pas. Si les PJ hésitent trop longtemps, le rituel s'accomplit seul. C'est l'option 3 sans choix conscient.",
      proceder: [
        {
          etape: "Premier avertissement — le vortex pulse",
          detail:
            "Le bourdonnement du vortex augmente. La Larme brille plus fort. Le ciel s'assombrit. Le MJ décrit : « Vous sentez que le rituel approche de son accomplissement. »",
        },
        {
          etape: "Deuxième avertissement — Sealine prévient",
          detail:
            "Sealine dit : « Le temps presse. Si vous ne choisissez pas, le rituel s'accomplira seul. Ce ne sera pas votre choix — ce sera l'absence de choix. »",
        },
        {
          etape: "Troisième avertissement — la Larme s'ouvre d'elle-même",
          detail:
            "Thade tente de se relever ou la Larme s'ouvre d'elle-même. Le MJ décrit : « Le vortex s'élargit. La Larme pulse. C'est presque fini. » Si les PJ ne choisissent toujours pas, le rituel s'accomplit. Le seuil s'ouvre. La Spirale déferle. C'est l'option 3, mais sans décision consciente. L'épilogue est plus sombre — les PJ n'ont pas choisi, ils ont laissé faire.",
        },
      ],
      a_ne_pas_faire: [
        "Ne pas éterniser l'hésitation. Le MJ donne trois avertissements, puis le rituel s'accomplit.",
        "Ne pas punir les PJ avec un TPK. Le rituel s'accomplit, mais les PJ survivent.",
        "Ne pas forcer un choix avant les avertissements. Laisser le temps de la discussion.",
      ],
    },
    {
      id: "enc_pj_attaquent_sealine",
      titre: "Que faire si les PJ attaquent Sealine",
      situation:
        "Les PJ voient Sealine dans le vortex et l'attaquent. Ils la considèrent comme une créature de la Spirale, pas comme une personne.",
      principe:
        "Sealine ne combat pas. Elle se retire dans le vortex. Le choix final devient plus confus — les PJ doivent décider sans ses explications.",
      proceder: [
        {
          etape: "Sealine se retire",
          detail:
            "Sealine ne se défend pas. Elle dit : « Je ne suis pas votre ennemie. » Puis elle se retire dans le vortex. La Larme pulse. Le rituel continue.",
        },
        {
          etape: "Les options sont moins claires",
          detail:
            "Sans Sealine pour expliquer, les PJ doivent déduire les options par eux-mêmes. Art de la magie DD 18 pour analyser le vortex. Le magi-tuteur, s'il est présent, peut expliquer. Sinon, les PJ naviguent à l'aveugle.",
        },
        {
          etape: "L'épilogue en tient compte",
          detail:
            "Si les PJ détruisent la Larme, Sealine est perdue — ils l'ont attaquée puis détruite. Si les PJ sauvent Sealine, elle revient mais se méfie des PJ. Si le seuil s'ouvre, Sealine disparaît dans la Spirale. L'épilogue est plus sombre.",
        },
      ],
      a_ne_pas_faire: [
        "Ne pas rendre Sealine combattante. Elle ne combat pas.",
        "Ne pas punir les PJ avec un TPK. Les conséquences sont narratives.",
        "Ne pas empêcher les PJ de choisir. Les options sont toujours là, mais moins claires.",
      ],
    },
  ],

  aides_jeu: {
    indices_recap: [
      {
        scene: "Le Vortex",
        jet: "Persuasion DD 18",
        info: "Lire un extrait des cahiers ou révéler une vérité sur Sealine fissure la Larme. Chaque vérité compte comme 2 rounds de combat.",
      },
      {
        scene: "Le Vortex",
        jet: "Art de la magie DD 18",
        info: "Identifier la structure du vortex. La Larme est le catalyseur. La détacher arrête le rituel sans refermer complètement le seuil. La détruire libère l'énergie et referme le sceau. La laisser ouvre le seuil.",
      },
      {
        scene: "Le Vortex",
        jet: "Athlétisme DD 15",
        info: "Se frapper un chemin vers le vortex à travers les vents planaires.",
      },
      {
        scene: "La Conversation à Trois",
        jet: "Aucun jet",
        info: "Sealine explique les trois options. Le choix appartient aux PJ. Aucun jet nécessaire.",
      },
      {
        scene: "Le Monde d'Après",
        jet: "Aucun jet",
        info: "Narration pure. Le MJ décrit les conséquences selon le choix, les alliances et le décompte des victimes.",
      },
    ],
    pnj_recap: [
      {
        id: "thade_coren",
        nom: "Thade Coren",
        faction: "Université Arcanique (Archimage)",
        role_court: "Boss final / Homme brisé",
        apparition: "Acte I, scène 1",
        info_cle: "Combat par amour, pas par cruauté. Chaque vérité le blesse. S'effondre à la phase 3.",
        dd_clés: "Persuasion DD 18 pour les vérités. Athlétisme DD 15 pour les vents planaires.",
      },
      {
        id: "sealine_coren",
        nom: "Sealine Vael",
        faction: "La Spirale",
        role_court: "La Dame de la Spirale / Choix final",
        apparition: "Acte I, scène 2",
        info_cle: "Lucide, calme, présente. Sait tout. Ne demande rien. Explique les trois options.",
        dd_clés: "Aucun jet. C'est une conversation.",
      },
      {
        id: "magi_tuteur_loyal",
        nom: "Le Magi-Tuteur loyal",
        faction: "Université Arcanique (Allié)",
        role_court: "Témoin / Allié possible",
        apparition: "Acte I, scène 1 (si survivant)",
        info_cle: "Peut intervenir à la phase 2. Peut expliquer les options si Sealine est absente.",
        dd_clés: "Aucun jet. Son intervention est narrative.",
      },
    ],
    lieux_recap: [
      {
        id: "sommet_tour_vortex",
        nom: "Sommet de la Tour Arcanique",
        scenes: ["Le Vortex", "La Conversation à Trois"],
        info: "Plateforme circulaire, marbre clair, ciel violet. Vortex au centre. Larme au cœur. Lieu du combat final et du choix.",
      },
      {
        id: "place_fondation",
        nom: "Place de la Fondation",
        scenes: ["Le Monde d'Après"],
        info: "Lieu de l'épilogue. Les gens se rassemblent. Le ciel change. Le monde d'après commence ici.",
      },
    ],
    chronologie_recap: [
      "Les PJ franchissent la porte du sommet. Le ciel est violet.",
      "Phase 1 : Thade combat, épuisé mais puissant. Les PJ combattent ou parlent.",
      "Phase 2 : Les vérités fissurent la Larme. Thade devient désespéré.",
      "Phase 3 : Thade s'effondre. Sealine apparaît. La conversation à trois commence.",
      "Sealine explique les trois options. Les PJ choisissent.",
      "L'épilogue déploie les conséquences sur Valombre.",
    ],
  },
};
