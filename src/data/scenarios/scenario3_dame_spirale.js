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
      "La maîtrise comme catastrophe — Thade fait tout cela pour contrôler ce qu'il n'a fait qu'apercevoir à Nyx. Le deuil n'excuse rien, mais il a donné une forme intime à son obsession.",
      "La vérité comme arme — les révélations accumulées pendant la campagne sont les armes les plus puissantes contre Thade. Les cahiers, l'annotation, les patients, les bocaux.",
      "Le choix irréversible — trois options, chacune avec un prix. Aucune option n'est pure. Aucune n'est sans prix. Le choix appartient aux PJ.",
      "L'épilogue comme miroir — le monde d'après reflète les alliances, les victimes et la décision finale. La campagne se termine sur ce que les PJ ont fait, pas sur ce qu'ils ont voulu.",
    ],
    question_dramatique:
      "Quand un homme a détruit un monde pour prouver qu'il peut maîtriser l'inmaîtrisable, pouvez-vous l'arrêter sans répéter sa violence ? Et si la morte à qui il écrivait n'était pas morte, que devient le jugement ?",
    structure_narrative: [
      {
        phase: "1. Entrée dans le vortex",
        resume: "Les PJ franchissent la porte du sommet. Le ciel est violet. Le vortex bourdonne. Thade est là, les mains tendues vers la Larme. Pas de retour possible.",
      },
      {
        phase: "2. Combat contre Thade / vérités comme armes",
        resume: "Thade combat pour gagner du temps, pas pour tuer. Trois phases : Archimage épuisé, Larme se fissure, Épuisement. Chaque vérité sur Sealine fissure la Larme. Les PJ peuvent gagner par la parole autant que par la force.",
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
        role: "Archimage au sommet. Combat par maîtrise, pas par cruauté. Chaque vérité le blesse plus qu'un sort parce qu'elle montre le coût humain de sa méthode. S'effondre à la phase 3.",
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
      "Les cahiers bordeaux : Thade écrit à Sealine tous les jours depuis une trentaine d'années.",
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
      declencheur: "Persuasion Difficile pour lire un extrait des cahiers ou révéler une vérité à Thade pendant le combat. Chaque vérité réussie fissure la Larme.",
      plan_b:
        "Si les PJ n'ont pas les preuves matérielles, ils peuvent citer de mémoire ce qu'ils ont vu. Le MJ accorde un avantage de circonstance si les PJ décrivent ce qu'ils ont découvert. Le magi-tuteur peut aussi témoigner.",
      consequence_si_ratee:
        "Les PJ doivent vaincre Thade par la force seule. La phase 2 est plus longue et plus dangereuse. La Larme ne se fissure pas — le combat va jusqu'à l'épuisement de Thade.",
    },
    {
      id: "rev_sealine_presente",
      titre: "Sealine est présente dans le vortex",
      resume:
        "Sealine est là, dans le vortex, lucide et présente. Elle sait ce que Thade a fait. Elle sait ce qu'elle coûte. Elle accepte. C'est elle qui explique les trois options aux PJ. C'est elle qui dit : « Vous devez décider. Pas lui. Pas moi. Vous. »",
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
        "Art de la magie Difficile pour analyser le vortex et confirmer les conséquences.",
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
        "Pas applicable. Le décompte est un constat. Les conséquences sont narratives, pas mécaniques.",
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
        revele: ["Les vérités comme armes", "La Larme est le catalyseur", "Thade combat par maîtrise, pas par cruauté"],
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
    "Tout converge au sommet de la Tour Arcanique. Thade est dans le vortex, la Larme de Vael au creux de ses mains. La Spirale est à portée. Thade croit tenir enfin le pouvoir qui lui a échappé à Nyx. Les PJ doivent monter, affronter l'archimage et décider : détruire la Larme, sauver Sealine lorsqu'elle apparaît, ou laisser Thade ouvrir le seuil. Chaque choix a un prix. La campagne se joue ici.",

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
      "Si les PJ laissent Thade ouvrir le seuil : la Spirale déferle. Valombre est transformée. Thade franchit un passage qu'il croit maîtriser ; ce que Sealine fera de lui appartient à l'épilogue. À quel prix ?",
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
            "Les PJ atteignent le sommet. Plateforme circulaire, marbre clair, ciel violet. Au centre, le vortex : puits horizontal d'énergie. Au cœur, la Larme de Vael. Thade se tient devant, les mains tendues. Le combat se déroule en 3 phases : Archimage épuisé, Larme se fissure, Épuisement.",
          idLieu: "sommet_tour_vortex",
          idsPnj: ["thade_coren", "sealine_coren", "magi_tuteur_loyal"],

          format_livre: {
            ambiance:
              "Le sommet de la Tour Arcanique est une plateforme circulaire de marbre clair, ouverte sur le ciel. Pas de murs. Pas de toit. Le ciel est violet — pas le violet du crépuscule, un violet qui n'a rien à voir avec l'heure. L'air bourdonne. Pas un vent — une vibration, basse, continue, qui monte du centre de la plateforme. Au centre, le vortex : un puits horizontal d'énergie violette, tourbillonnant, qui ne mène nulle part et partout à la fois. Au cœur du vortex, quelque chose brille. Une larme. La Larme de Vael. Le sol est chaud sous les pieds. Les runes gravées dans le marbre brillent d'un or qui pulse au rythme du bourdonnement.",
            deroulement_narratif:
              "Thade se tient devant le vortex. Ses mains sont tendues. Son visage est paisible. Il ne regarde pas les PJ — il regarde le vortex. « Vous êtes venus », dit-il. « Je le savais. Je savais que vous viendriez. » Une pause. Puis : « Cette fois, le seuil obéira. »\n\nSi les PJ ont écrit dans le cahier du Laboratoire de Verre, Thade peut faire référence à leurs mots : « Vous m'avez écrit. J'ai lu. Vous ne comprenez pas. Mais je ne vous en veux pas. »\n\nPhase 1 — Archimage épuisé : Thade combat avec des sorts puissants mais il est épuisé par le rituel. Ses attaques sont prévisibles — Boule de feu, Rayon de givre, Mur de force. Il ne cherche pas à tuer. Il cherche à gagner du temps. Chaque round qu'il gagne rapproche le rituel de son accomplissement. Les PJ peuvent le combattre ou tenter de parler.\n\nL'environnement réagit au combat. Le vortex pulse à chaque sort lancé. Les runes dans le marbre brillent plus fort quand Thade attaque. Les vents planaires — des courants d'air qui viennent du vortex — poussent les PJ vers le bord de la plateforme. Athlétisme Moyen pour résister. Si un PJ tombe du bord, il ne meurt pas — il flotte dans l'air violet pendant un round avant d'être rejeté sur la plateforme. Le sommet est déphasé : la chute ne suit pas les règles normales.\n\nPhase 2 — Larme se fissure : Si les PJ ont détruit le corps dans la cuve, ou s'ils révèlent une vérité sur Sealine (les cahiers, l'annotation, les expériences, les patients, les bocaux), la Larme se fissure. Persuasion Difficile pour lire un extrait des cahiers ou révéler une vérité. Chaque vérité réussie fissure la Larme un peu plus. Thade devient désespéré et imprévisible — ses sorts sont moins contrôlés, plus puissants, plus dangereux.\n\nSi les PJ ont le magi-tuteur avec eux, il peut intervenir à la phase 2 — il dit à Thade : « Maître, arrêtez. Elle ne voudrait pas ça. » Thade hésite un round. Si les PJ ont détruit le corps dans la cuve (Scénario 2), Thade perd une phase de puissance — il passe directement à la phase 2 après 2 rounds au lieu de 4.\n\nSi les PJ n'ont aucune vérité (pas de cahiers, pas de schéma, pas de bocaux, pas de patients) : le combat se déroule par la force seule. Thade s'épuise au round 8-10. La Larme ne se fissure pas. Sealine apparaît mais le vortex est instable. Le MJ peut utiliser les répliques de Thade pour révéler l'information manquante — Thade dit : « Vous ne savez même pas ce que j'ai fait. Vous ne savez pas pour les patients. Pour les bocaux. » C'est une dernière chance pour les PJ de comprendre.\n\nPhase 3 — Épuisement : Thade s'effondre sur le marbre. Le vortex vacille. La Larme est fissurée mais pas détruite. Une forme se dessine dans l'énergie violette. Sealine. La conversation à trois commence.\n\nSi les PJ ont le magi-tuteur avec eux, il s'approche de Thade au sol. Il dit : « Maître. C'est fini. » Thade ne répond pas. Le magi-tuteur pleure en silence.",
            notes_mj:
              "Le combat n'est pas un combat standard — c'est une course contre le rituel. Le MJ doit tenir le décompte du nombre de rounds. Au round 5, le rituel est à moitié accompli. Au round 10, le rituel s'accomplit. Les PJ ne le savent pas exactement, mais le bourdonnement du vortex augmente d'intensité à chaque round. Les vérités sont les armes les plus puissantes : chaque vérité réussie (Persuasion Difficile) compte comme 2 rounds de combat. Les PJ peuvent gagner la phase 2 sans combattre — en parlant.\n\nModularité selon le nombre de PJ :\n- 1 PJ : Thade a 2 rounds de phase 1 au lieu de 4 (ou 1 si le corps est détruit). Les vents planaires sont affaiblis — Athlétisme Moyen avec circonstance favorable. Une seule vérité suffit pour passer à la phase 2. Les sorts de Thade sont moins puissants (dés réduits ou un sort par round au lieu de deux). Le rituel s'accomplit au round 8 au lieu de 10.\n- 2 PJ : Thade a 3 rounds de phase 1. Athlétisme Moyen. Deux vérités suffisent pour la phase 2. Rituel au round 9.\n- 3-4 PJ : règles standards. 4 rounds de phase 1 (2 si corps détruit). Trois vérités pour la phase 2. Rituel au round 10.\n\nDans tous les cas, les vérités sont plus puissantes que les sorts. Un PJ seul peut gagner en parlant. Le combat n'est pas obligatoire — c'est la parole qui fissure la Larme.",
          },

          texte_a_lire:
            "Le sommet de la Tour est ouvert sur le ciel. Le marbre est clair, presque blanc. L'air bourdonne. Un vortex se déploie au centre de la plateforme — un puits horizontal d'énergie violette, tourbillonnant, qui ne mène nulle part et partout à la fois. Au cœur du vortex, quelque chose brille. Une larme. La Larme de Vael.\n\nThade se tient devant le vortex. Ses mains sont tendues. Son visage est paisible. Il ne vous regarde pas. Il regarde le vortex.\n\n« Vous êtes venus », dit-il. « Je le savais. Je savais que vous viendriez. »\n\nUne pause. Puis : « Cette fois, le seuil obéira. »",

          objectif: "Arrêter le rituel de Thade et décider du sort de la Larme de Vael.",

          contexte_mj: {
            situation:
              "Thade est au sommet, connecté au vortex. La Larme de Vael est au cœur du vortex. Le rituel est en cours. Le combat se déroule en 3 phases. Chaque vérité sur Sealine fissure la Larme.",
            secrets: [
              "Phase 1 — Archimage épuisé : Thade combat avec des sorts puissants mais il est épuisé par le rituel. Ses attaques sont prévisibles.",
              "Phase 2 — Larme se fissure : Si les PJ ont détruit le corps dans la cuve, ou s'ils révèlent une vérité sur Sealine (les cahiers, l'annotation, les expériences), la Larme se fissure. Thade devient désespéré et imprévisible.",
              "Phase 3 — Épuisement : Thade s'effondre. Le vortex vacille. Sealine peut apparaître. La conversation à trois commence.",
              "Chaque vérité sur Sealine (l'annotation 'ne jamais alimenter avec des vivants', les 50 patients, les 7 bocaux) fissure la Larme un peu plus. Les PJ peuvent utiliser les vérités comme armes.",
            ],
            rappels: [
              "Thade veut retarder les PJ. Chaque round qu'il gagne rapproche le rituel de son accomplissement.",
              "Si les PJ ont les cahiers du Laboratoire de Verre, ils peuvent les lire à Thade. Chaque lettre fissure la Larme.",
              "Le magi-tuteur loyal peut intervenir si les PJ ne l'ont pas attaqué dans la Tour.",
            ],
          },

          defis: [
            { competence: "Athlétisme", difficulte: "Moyen", reussite: "Les PJ se frappent un chemin vers le vortex à travers les vents planaires.", echec: "Les vents repoussent les PJ. Ils doivent trouver une autre approche." },
            { competence: "Persuasion", difficulte: "Difficile", reussite: "Les PJ lisent un extrait des cahiers ou révèlent une vérité sur Sealine. La Larme se fissure. Thade vacille.", echec: "Thade refuse d'écouter. « Vous ne comprenez pas. Vous n'avez jamais perdu quelqu'un. »" },
            { competence: "Art de la magie", difficulte: "Difficile", reussite: "Les PJ identifient la structure du vortex. La Larme est le catalyseur. La retirer arrête le rituel mais libère l'énergie accumulée.", echec: "Le vortex est trop complexe. Impossible de savoir quoi faire sans risquer une catastrophe." },
          ],

          indices: [
            { indice: "Les vérités comme armes", localisation: "Cahiers, archives, laboratoire", detection: "Connaissances accumulées", information: "Chaque vérité sur Sealine fissure la Larme. L'annotation, les patients, les bocaux, les cahiers.", usage: "Les PJ peuvent gagner la phase 2 sans combattre — en parlant." },
            { indice: "La Larme de Vael", localisation: "Cœur du vortex", detection: "Art de la magie Difficile", information: "La Larme est le catalyseur. La retirer arrête le rituel. La détruire libère l'énergie. La laisser ouvre le seuil.", usage: "Le choix final dépend de ce que les PJ font de la Larme." },
          ],

          guide_mj: {
            intention: "Le combat final. 3 phases. Les vérités sur Sealine sont les armes les plus puissantes.",
            mise_en_place: "Sommet ouvert. Ciel violet. Vortex. Thade devant. Larme au centre. Le MJ décrit l'environnement avant que Thade ne parle — la chaleur du sol, les runes qui pulsent, le bourdonnement.",
            deroulement: [
              "Phase 1 : combat arcanique. Thade puissant mais épuisé. Vents planaires. 4 rounds (2 si corps détruit).",
              "Phase 2 : la Larme se fissure. Les PJ utilisent les vérités. Persuasion Difficile. Chaque vérité a un effet narratif et mécanique spécifique (voir deroulement_detaile).",
              "Si les PJ n'ont pas de vérités : Thade révèle l'information manquante dans ses répliques. Dernière chance de comprendre.",
              "Phase 3 : Thade s'effondre. Le vortex vacille. Sealine apparaît.",
              "Le magi-tuteur, s'il est présent, intervient à la phase 2 et pleure à la phase 3.",
            ],
            actions_utiles: [
              "Combattre Thade (force brute — plus long, plus dangereux).",
              "Lire les cahiers à voix haute (Persuasion Difficile).",
              "Révéler les vérités sur Sealine (annotation, patients, bocaux, cahiers, S-01, 142 consultations).",
              "Tenter de détacher la Larme du vortex (Art de la magie Difficile).",
              "Utiliser le magi-tuteur pour intervenir (il dit à Thade d'arrêter).",
              "Si les PJ ont écrit dans le cahier : faire référence à leurs mots.",
            ],
            fronts_heritiers: ["Tous les fronts convergent ici."],
            jeu_des_pnj: "Thade combat pour prouver qu'il maîtrise enfin la Spirale. Chaque vérité le blesse plus qu'un sort parce qu'elle rappelle les vies broyées par sa méthode. Sealine, si elle apparaît, est calme, triste, lucide. Le magi-tuteur, s'il est présent, est déchiré entre loyauté et vérité — il intervient à la phase 2 puis pleure à la phase 3.",
            escalade: "Si les PJ tardent, le rituel s'accomplit. Le seuil s'ouvre. La Spirale déferle. Le bourdonnement augmente à chaque round — le MJ le décrit.",
            sortie: "Thade s'effondre. Le vortex vacille. Sealine apparaît dans le vortex. La conversation à trois commence.",
            deroulement_detaile: {
              phase_1_archimage_epuise: {
                duree: "4 rounds (2 si le corps dans la cuve a été détruit)",
                rythme: "Thade encaisse et riposte. Il ne bouge pas du vortex. Les PJ doivent traverser les vents planaires pour l'atteindre.",
                rounds: [
                  {
                    round: 1,
                    action_thade: "Mur de force entre lui et les PJ. Boule de feu sur le premier PJ qui traverse.",
                    replique: "« Vous ne comprenez pas ce que vous interrompez. Personne ne peut comprendre. »",
                    indice_mj: "Le bourdonnement du vortex augmente. Décrivez-le aux PJ.",
                  },
                  {
                    round: 2,
                    action_thade: "Rayon de givre sur le groupe. Contresort si un PJ lance un sort d'interruption.",
                    replique: "« Je n'ai plus besoin de vous convaincre. J'ai besoin de temps. »",
                    indice_mj: "Si un PJ tente de parler, Thade écoute une action puis riposte. Il ne peut pas s'empêcher d'écouter.",
                  },
                  {
                    round: 3,
                    action_thade: "Rayon de givre + Boule de feu en chaîne. Thade montre des signes de fatigue — ses sorts sont moins précis.",
                    replique: "« J'ai vu cela une seule fois. Une seule. Trente ans pour que cela ne m'échappe plus jamais. »",
                    indice_mj: "C'est le moment où les PJ peuvent basculer vers la parole. Si un PJ commence à lire les cahiers ou à citer une vérité, passez à la phase 2.",
                  },
                  {
                    round: 4,
                    action_thade: "Mur de force renforcé. Thade tremble. L'épuisement est visible.",
                    replique: "« Je suis si proche. Si proche. Ne me faites pas ça. »",
                    indice_mj: "Dernier round de la phase 1. Si les PJ n'ont pas encore parlé, le vortex pulse plus fort. Le rituel approche de la moitié.",
                  },
                ],
                transition_vers_phase_2: "Si un PJ lit un extrait des cahiers, cite l'annotation de Sealine, mentionne les patients ou les bocaux, ou révèle toute vérité accumulée pendant la campagne. Persuasion Difficile. Succès → la Larme se fissure. Passer à la phase 2. Échec → Thade secoue la tête et continue de combattre. Le PJ peut réessayer au round suivant.",
              },
              phase_2_larme_se_fissure: {
                duree: "Variable — jusqu'à 3 vérités réussies ou l'épuisement de Thade",
                rythme: "Thade alterne entre ripostes magiques et tentatives de maintenir le rituel. Chaque vérité le déstabilise davantage. Ses sorts deviennent imprévisibles.",
                verites_specifiques: [
                  {
                    verite: "L'annotation de Sealine sur le schéma de la Larme",
                    source: "Scénario 2 — Laboratoire d'Elian Voss",
                    contenu: "« Ne jamais alimenter cela avec des vivants. » Écriture de Sealine.",
                    effet_mecanique: "Persuasion Difficile. Succès : la Larme se fissure. Thade hurle : « Elle ne savait pas ! Elle ne savait pas ce que ça coûterait ! » Il perd sa prochaine action. Le vortex vacille.",
                    effet_narratif: "Thade est blessé par les mots de Sealine elle-même. C'est la vérité la plus dévastatrice — c'est elle qui le nie.",
                  },
                  {
                    verite: "Les 50 patients stabilisés d'Elian Voss",
                    source: "Scénario 2 — Laboratoire d'Elian Voss",
                    contenu: "Cinquante patients. Des reproductions du protocole S-01. Des noms, des dates, des dosages. Le cachet de Caldris sur chaque dossier.",
                    effet_mecanique: "Persuasion Difficile. Succès : la Larme se fissure davantage. Thade : « J'ai essayé de les sauver. Tous. J'ai essayé. » Sa voix se brise. Il lance un sort imprévisible — Rayon de givre dévié qui frappe un pilier au lieu des PJ.",
                    effet_narratif: "Thade justifie. Mais sa justification sonne creux même à ses propres oreilles.",
                  },
                  {
                    verite: "Les 7 bocaux — les échecs d'Elian",
                    source: "Scénario 2 — Laboratoire d'Elian Voss",
                    contenu: "Sept bocaux. Sept échecs. Sept corps qui n'ont pas survécu au transit.",
                    effet_mecanique: "Persuasion Difficile. Succès : la Larme se fissure gravement. Thade s'arrête de combattre pendant un round. Il murmure : « Sept. Ils étaient sept. » Le vortex tremble. C'est la vérité qui brise sa résistance.",
                    effet_narratif: "Les sept bocaux sont le prix humain du rituel. Thade ne peut pas les nier. Il ne peut pas les justifier. Il peut seulement les porter.",
                  },
                  {
                    verite: "Les cahiers bordeaux — une trentaine d'années de lettres à Sealine",
                    source: "Scénario 2 — Laboratoire de Verre",
                    contenu: "Thade écrit à Sealine tous les jours depuis une trentaine d'années. Des lettres qu'elle ne lira jamais. Ou qu'il croit qu'elle lira.",
                    effet_mecanique: "Persuasion Difficile. Succès : la Larme se fissure. Thade ne riposte pas. Il dit, doucement : « Vous avez lu mes lettres. » Pas de colère. De la honte. Il baisse les mains un instant.",
                    effet_narratif: "Les cahiers révèlent l'homme derrière l'archimage. Thade est un homme qui n'a pas su laisser partir quelqu'un.",
                  },
                  {
                    verite: "Le protocole S-01 — Sealine était la première patiente",
                    source: "Scénario 1 — Archives Médicales Scellées",
                    contenu: "S-01 = Sealine. Le protocole a été établi 28 jours avant la catastrophe de Nyx. « Méthodes conventionnelles épuisées. Explorer la littérature interdite. »",
                    effet_mecanique: "Persuasion Difficile. Succès : la Larme se fissure. Thade : « J'ai commencé parce qu'elle mourait. J'ai continué parce que personne d'autre n'osait regarder. » Il ne combat pas ce round.",
                    effet_narratif: "L'origine de tout. Thade regrette que le protocole n'ait pas tenu, puis refuse d'admettre que l'échec aurait dû l'arrêter.",
                  },
                  {
                    verite: "Les 142 consultations de la Réserve Interdite",
                    source: "Scénario 2 — Réserve de Recherche Interdite",
                    contenu: "Cent quarante-deux consultations étalées sur une trentaine d'années. Seuils planaires, rituels de transit, littérature interdite.",
                    effet_mecanique: "Persuasion Difficile. Succès : la Larme se fissure légèrement. Thade : « Chaque livre. Chaque page. Pour ne plus subir. » Il lance un sort affaibli — Boule de feu qui s'éteint à mi-chemin.",
                    effet_narratif: "La préparation méthodique. Thade n'a pas dérapé — il a planifié. Pendant une trentaine d'années.",
                  },
                ],
                reactions_thade_par_round: {
                  apres_1e_verite: "Thade vacille. Ses sorts deviennent moins précis. Il crie : « Vous n'étiez pas là ! Vous n'avez pas vu ce que le seuil contenait ! »",
                  apres_2e_verite: "Thade pleure. Il ne le cache pas. Ses larmes tombent sur le marbre. Il combat encore, mais ses gestes sont lents. « J'ai repris chaque calcul. Chaque variable. Et le coût restait là. Toujours. »",
                  apres_3e_verite: "Thade s'arrête. Ses mains tombent. Le vortex vacille. La Larme est fissurée. Il murmure : « Sealine… pardon. » Il s'effondre. Passer à la phase 3.",
                },
                si_aucune_verite_reussie: "Si les PJ combattent sans parler, Thade s'épuise au round 8-10. Le rituel s'accomplit au round 10. Les PJ doivent vaincre Thade avant. Sans vérités, la Larme ne se fissure pas — Sealine apparaît mais le vortex est instable et dangereux.",
              },
              phase_3_epuisement: {
                duree: "1-2 rounds de transition narrative",
                rythme: "Plus de combat. Thade est au sol. Le vortex vacille. La Larme est fissurée (si les PJ ont parlé) ou intacte (s'ils n'ont que combattu).",
                deroulement: [
                  "Thade s'effondre sur le marbre. Ses mains sont ouvertes. Il ne combat plus.",
                  "Le vortex vacille. Le bourdonnement diminue. La Larme pulse — fissurée ou intacte.",
                  "Si la Larme est fissurée : une forme se dessine dans l'énergie. Sealine. Sa silhouette prend des détails — cheveux sombres, visage calme, vêtements simples.",
                  "Si la Larme est intacte : le vortex est instable. Des filaments planaires fouettent l'air. Sealine apparaît, mais la plateforme est dangereuse.",
                  "Thade lève la tête. Il voit Sealine. Il ne dit rien. Il pleure en silence.",
                  "Transition vers la scène s3_conversation_trois.",
                ],
                replique_thade: "« Sealine… je t'ai retrouvée. » (Voix brisée. Pas de triomphe. De la fatigue.)",
                replique_sealine: "« Thade. » (Un seul mot. Pas de colère. Pas de pardon. Un constat.)",
              },
            },
          },

          reperes_de_jeu: {
            indice_indispensable: "Les PJ doivent savoir que les vérités sur Sealine fissurent la Larme et que la Larme est le catalyseur.",
            ne_pas_bloquer_sur_un_jet: "Même si tous les jets échouent, le combat se déroule. Les PJ peuvent combattre Thade jusqu'à l'épuisement.",
            question_dramatique: "Pouvez-vous arrêter un homme qui a confondu comprendre, contrôler et avoir raison ?",
          },

          transitions: {
            resume: "Thade s'effondre sur le marbre. Le vortex vacille. Une forme apparaît dans l'énergie violette.",
            reussite: "Les PJ ont vaincu Thade et fissuré la Larme. Sealine apparaît.",
            echec: "Les PJ ont vaincu Thade par la force, sans fissurer la Larme. Le vortex est instable. Sealine apparaît, mais la situation est plus dangereuse.",
          },

          navigation: {
            indice_indispensable: "Les PJ doivent savoir que les vérités sur Sealine fissurent la Larme et que la Larme est le catalyseur du rituel.",
            consequence_si_manque: "Sans les vérités, les PJ doivent vaincre Thade par la force. La Larme ne se fissure pas. Sealine apparaît mais le vortex est instable et dangereux. La conversation à trois est plus tendue.",
            pnj_alternatifs: ["magi_tuteur_loyal — peut intervenir à la phase 2 et témoigner des vérités sur Sealine", "sealine_coren — apparaît automatiquement à la phase 3, que les PJ aient fissuré la Larme ou non"],
            front_si_ignore: "Le Plan de Thade — si les PJ tardent, le rituel s'accomplit au round 10. Le seuil s'ouvre. La Spirale déferle. Le Sceau qui cède — le sceau cède entièrement sans intervention.",
            scenes_alternatives: [],
            sorties_jouables: [
              {
                condition: "Les PJ ont vaincu Thade (vérités ou force)",
                sceneId: "s3_conversation_trois",
                type: "indice_principal",
                moteur: "Thade s'effondre. Sealine apparaît. La conversation à trois commence.",
                accroche_mj: "Thade est au sol. Le vortex vacille. Une forme se dessine dans l'énergie. Sealine. Elle vous regarde. Elle dit : 'Vous devez décider. Pas lui. Pas moi. Vous.'",
                consequence_si_refus: "Si les PJ ne passent pas à la conversation, le rituel s'accomplit. Le seuil s'ouvre.",
              },
              {
                condition: "Les PJ ont fissuré la Larme avec les vérités",
                sceneId: "s3_conversation_trois",
                type: "reussite",
                moteur: "La Larme est fissurée. Sealine apparaît dans un vortex affaibli. La conversation est plus claire.",
                accroche_mj: "La Larme est fissurée. Le vortex vacille mais ne s'effondre pas. Sealine est là, calme, lucide. Elle sait tout. Elle vous attend. La conversation peut commencer.",
                consequence_si_refus: "Si les PJ ne passent pas à la conversation, le rituel s'accomplit malgré la fissure.",
              },
              {
                condition: "Les PJ ont vaincu Thade par la force sans vérités (échec)",
                sceneId: "s3_conversation_trois",
                type: "echec",
                moteur: "La Larme est intacte. Le vortex est instable. Sealine apparaît mais la situation est dangereuse.",
                accroche_mj: "Thade est au sol. Mais la Larme n'est pas fissurée. Le vortex est instable — des filaments planaires fouettent l'air. Sealine apparaît, mais elle regarde les PJ avec une tristesse différente. 'Vous l'avez arrêté. Mais vous ne savez pas pourquoi il a commencé.' La conversation commence dans la tension.",
                consequence_si_refus: "Si les PJ ne passent pas à la conversation, le vortex s'effondre. Le sceau se referme brutalement. Sealine est perdue.",
              },
              {
                condition: "Le rituel s'accomplit (round 10 atteint)",
                sceneId: "s3_monde_apres",
                type: "urgence_front",
                moteur: "Le rituel s'accomplit sans intervention. Le seuil s'ouvre. La Spirale déferle.",
                accroche_mj: "Le bourdonnement atteint son paroxysme. La Larme brille d'un éclat aveuglant. Le vortex s'élargit. Le ciel vire au violet profond. C'est trop tard. Le seuil s'ouvre. La Spirale déferle sur Valombre.",
                consequence_si_refus: "Si le rituel s'accomplit, les PJ n'ont plus de choix. L'épilogue est sombre — ils n'ont pas décidé.",
              },
              {
                condition: "Le Magi-Tuteur est vivant et accompagne les PJ",
                sceneId: "s3_conversation_trois",
                type: "pnj",
                moteur: "Le Magi-Tuteur peut intervenir à la phase 2 et pleurer à la phase 3.",
                accroche_mj: "Le Magi-Tuteur regarde Thade au sol. Il pleure en silence. Il dit : 'Maître… arrêtez. Elle ne voudrait pas ça.' Puis il se tourne vers les PJ. 'Je suis désolé. Je n'ai pas su l'arrêter plus tôt.' Il reste à genoux près de Thade.",
                consequence_si_refus: "Si le Magi-Tuteur est mort, les PJ n'ont pas de témoin ni de guide pour la conversation.",
              },
              {
                condition: "Les PJ veulent tenter de détacher la Larme pendant le combat",
                sceneId: "s3_conversation_trois",
                type: "libre",
                moteur: "Art de la magie Difficile pour analyser le vortex. La Larme peut être détachée mais c'est délicat.",
                accroche_mj: "Vous voyez la Larme au cœur du vortex. Elle pulse. Si vous la détachez maintenant, le rituel s'arrête. Mais c'est délicat. Un échec et la Larme se brise. Art de la magie Difficile.",
                consequence_si_refus: "Si les PJ ne tentent pas de détacher la Larme, le combat continue jusqu'à l'épuisement de Thade ou l'accomplissement du rituel.",
              },
            ],
            fallback_mj: "Le Vortex est le combat final. Il n'y a pas d'alternative — les PJ doivent affronter Thade. Les vérités accumulées pendant la campagne sont les armes les plus puissantes. Si les PJ n'ont pas de vérités, Thade révèle l'information manquante dans ses répliques (phase 1, round 3). Le Magi-Tuteur peut témoigner s'il est vivant. Le combat se déroule en 3 phases dans tous les cas. Sealine apparaît à la phase 3, que les PJ aient fissuré la Larme ou non.",
            objectif_scene: "Vaincre Thade Coren au sommet de la Tour. Utiliser les vérités accumulées pendant la campagne pour fissurer la Larme de Vael et affaiblir Thade.",
            pression: "Le rituel s'accomplit au round 10. Si les PJ tardent, le seuil s'ouvre et la Spirale déferle. Le Sceau qui cède arrive à son terme. Chaque round compte.",
            actions_pj_attendues: ["combattre Thade (force brute)", "utiliser les vérités comme armes (Persuasion Difficile)", "détacher la Larme de Vael pendant le combat", "protéger le Magi-Tuteur s'il est présent"],
            sorties_possibles: ["vers s3_conversation_trois (Thade vaincu, Sealine apparaît)", "vers s3_monde_apres (rituel accompli — le seuil s'ouvre)"],
            si_les_pj_bloquent: "Pas d'alternative au combat. Si les PJ n'ont pas de vérités, Thade révèle l'information manquante dans ses répliques. Le Magi-Tuteur peut témoigner. Sealine apparaît à la phase 3 dans tous les cas.",
            conditions_sortie: [
              "Les PJ ont vaincu Thade (par les vérités ou par la force) — Sealine apparaît.",
              "OU le rituel s'accomplit au round 10 — le seuil s'ouvre, la Spirale déferle.",
              "OU les PJ détachent la Larme pendant le combat — le rituel est interrompu.",
            ],
            transition_defaut: "Thade s'effondre. Le vortex vacille. Et puis elle apparaît. Sealine. Pas un souvenir. Elle est là. Elle regarde les PJ. Elle dit : « Vous devez décider. Pas lui. Pas moi. Vous. »",
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
              "Sealine se matérialise dans le vortex. Elle ne flotte pas — elle se tient, comme si le vortex était une fenêtre et elle de l'autre côté. Elle regarde Thade. Elle regarde les PJ. Elle est calme.\n\n« Thade », dit-elle. Thade lève la tête. Ses yeux sont brisés. « Sealine. » Un silence impossible. Puis il murmure : « Je croyais que tu étais morte. »\n\n« Je sais », dit-elle. « Je sais tout. Les patients. Les bocaux. La Larme. Je sais. » Un silence. Puis : « Et je sais pourquoi. »\n\nElle se tourne vers les PJ. « Vous devez décider. Pas lui. Pas moi. Vous. »\n\nSealine explique les trois options avec une clarté tranquille :\n1. Détruire la Larme. Le sceau se referme. Le déphasage s'arrête. Sealine disparaît. Thade est brisé mais vivant. Valombre revient à la normale — avec ses cicatrices.\n2. Détacher la Larme : extraire la Larme du vortex sans la briser. Sealine revient, fragile. Le seuil reste entrouvert. La Spirale filtre de manière permanente. Valombre apprend à vivre avec. Thade est jugé mais pas exécuté.\n3. Laisser Thade ouvrir le seuil. La Spirale déferle. Valombre et la Spirale fusionnent. Le ciel reste violet. Les routes mènent partout et nulle part. Thade franchit un seuil qu'il croit maîtriser — mais ce que Sealine fera de lui appartient à l'épilogue. Le monde est différent. Pas meilleur, pas pire — différent.\n\nLes PJ peuvent parler à Sealine et à Thade avant de choisir. Sealine répond avec une honnêteté absolue. Thade ne parle que si on lui adresse la parole. Il murmure : « Je croyais qu'elle était morte. Je voulais que le seuil m'obéisse. C'est tout ce qu'il me restait. »\n\nSi les PJ demandent à Sealine ce qu'elle veut : elle dit : « Je ne veux rien. J'ai accepté ce qui m'est arrivé. Si vous me détruisez, je disparaîtrai. Si vous me ramenez, je reviendrai. Si vous ouvrez le seuil, je serai là. Mais je ne demande rien. C'est votre choix. » Elle ne pleure pas. Elle a pleuré tout ce qu'elle pouvait pleurer.\n\nSi les PJ demandent à Sealine si elle pardonne à Thade : elle dit : « Je pardonne. Mais pardonner ne veut pas dire oublier. Les sept bocaux. Les cinquante patients. Les trente ans de mensonge. Je pardonne parce que je comprends. Mais je ne veux pas que ce pardon devienne une permission. »\n\nSi les PJ demandent à Thade s'il regrette : il dit : « Je regrette les bocaux. Je regrette les patients. Je regrette les étudiants dans la Tour. Je ne regrette pas d'avoir essayé de comprendre. Si j'avais maîtrisé le seuil à Nyx, personne ne serait mort. » Un silence. Puis : « Mais je ne l'ai pas maîtrisé. »\n\nSi les PJ demandent ce qui se passe si personne ne choisit : Sealine dit : « Le rituel s'accomplit seul. Le seuil s'ouvre. Ce n'est pas l'option 3 que vous auriez choisie — c'est l'option 3 sans choix. »\n\nSi le magi-tuteur est présent : il ne parle pas pendant la conversation. Il est à genoux près de Thade. Il pleure en silence. Si les PJ lui demandent son avis, il dit : « Je ne peux pas choisir. C'est votre responsabilité. Mais si vous détruisez la Larme… Thade ne s'en remettra pas. »\n\nAucun jet. C'est une conversation et un choix. Le MJ laisse le silence s'installer après les explications. Les PJ décident quand ils sont prêts.",
            notes_mj:
              "Le MJ ne pousse pas les PJ vers une option. Les trois sont valides. Le MJ décrit les conséquences avec la même neutralité pour chaque option. Si les PJ hésitent, le MJ applique trois avertissements : 1) Le vortex pulse, la Larme brille plus fort. 2) Sealine prévient : « Le choix ne peut pas attendre. » 3) Thade tente de reprendre le contrôle ou la Larme s'ouvre d'elle-même. Après le troisième avertissement, le rituel s'accomplit seul — c'est l'option 3 sans choix conscient.",
          },

          texte_a_lire:
            "Une forme se dessine dans le vortex. D'abord un contour, puis des détails. Une femme. Cheveux sombres, visage calme, yeux qui ont vu plus que ce qu'un visage devrait porter. Elle porte des vêtements simples — une robe de maison, des chaussures plates. Elle ressemble à quelqu'un qui préparait le thé quand tout a basculé.\n\n« Thade », dit-elle.\n\nThade lève la tête. Ses yeux sont brisés. « Sealine. »\n\n« Je sais », dit-elle. « Je sais tout. Les patients. Les bocaux. La Larme. Je sais. »\n\nUn silence. Puis : « Et je sais pourquoi. »\n\nElle se tourne vers vous. « Vous devez décider. Pas lui. Pas moi. Vous. »",

          objectif: "Décider du sort de la Larme, de Sealine, de Thade et de Valombre.",

          contexte_mj: {
            situation:
              "Sealine est présente dans le vortex. Elle est lucide. Elle sait tout. Elle n'accuse pas Thade, mais elle refuse qu'il ouvre le seuil. Le choix appartient aux PJ.",
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
            mise_en_place: "Sommet. Vortex vacillant. Sealine dans le vortex. Thade au sol. Les PJ debout. Le magi-tuteur, s'il est présent, à genoux près de Thade.",
            deroulement: [
              "Sealine parle aux PJ. Elle explique les trois options.",
              "Les PJ peuvent poser des questions à Sealine (ce qu'elle veut, si elle pardonne).",
              "Les PJ peuvent poser des questions à Thade (s'il regrette).",
              "Le magi-tuteur, s'il est présent, ne parle que si on lui demande son avis.",
              "Les PJ discutent entre eux.",
              "Les PJ choisissent.",
            ],
            actions_utiles: [
              "Détruire la Larme (sceau refermé, Sealine perdue, Thade brisé).",
              "Détacher la Larme sans la briser (Sealine revient, seuil entrouvert, Valombre changée).",
              "Laisser Thade ouvrir le seuil (Spirale déferle, monde transformé).",
              "Parler à Sealine avant de choisir (elle répond avec honnêteté absolue).",
              "Parler à Thade avant de choisir (il ne parle que si on lui adresse la parole).",
              "Demander au magi-tuteur son avis (il dit que c'est la responsabilité des PJ).",
            ],
            fronts_heritiers: ["Tous les fronts se résolvent ici."],
            jeu_des_pnj: "Sealine est calme, triste, lucide. Elle ne pleure pas. Elle a pleuré tout ce qu'elle pouvait pleurer. Thade est brisé. Il ne parle que si on lui adresse la parole. Le magi-tuteur, s'il est présent, pleure en silence à genoux près de Thade. Il ne parle que si on lui demande son avis.",
            escalade: "Pas d'escalade. C'est une conversation, pas un combat. Si les PJ hésitent trop longtemps, trois avertissements puis le rituel s'accomplit seul (option 3 sans choix conscient).",
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

          navigation: {
            indice_indispensable: "Les PJ doivent comprendre les trois options et leurs conséquences irréversibles avant de choisir.",
            consequence_si_manque: "Si les PJ choisissent sans comprendre les conséquences, l'épilogue peut les surprendre. Sealine explique les options avec clarté. Le Magi-Tuteur peut compléter si les PJ attaquent Sealine ou ignorent ses explications.",
            pnj_alternatifs: ["magi_tuteur_loyal — peut expliquer les options si Sealine est ignorée ou attaquée", "maera_olane — par communication magique, peut fournir un contexte sur les seuils si les PJ n'ont pas Sealine"],
            front_si_ignore: "Tous les fronts — si les PJ hésitent, le rituel s'accomplit seul après trois avertissements. C'est l'option 3 sans choix conscient. L'épilogue est plus sombre.",
            scenes_alternatives: [],
            sorties_jouables: [
              {
                condition: "Les PJ choisissent de détruire la Larme",
                sceneId: "s3_monde_apres",
                type: "indice_principal",
                moteur: "Le sceau se referme. Sealine est perdue. Thade est brisé. Valombre revient à la normale avec ses cicatrices.",
                accroche_mj: "Vous brisez la Larme. Le vortex s'effondre. Sealine vous regarde une dernière fois. Elle ne dit rien. Elle disparaît. Le ciel reprend sa couleur. Le bourdonnement cesse. C'est fini.",
                consequence_si_refus: "Si les PJ ne détruisent pas la Larme, le rituel continue.",
              },
              {
                condition: "Les PJ choisissent de détacher la Larme sans la briser",
                sceneId: "s3_monde_apres",
                type: "reussite",
                moteur: "Le seuil reste entrouvert. Sealine revient fragile. La Spirale filtre. Valombre apprend à vivre avec.",
                accroche_mj: "Vous détachez la Larme du vortex. Elle flotte entre vos mains, intacte. Sealine se matérialise pleinement. Elle est là. Fragile. Silencieuse. Le vortex se réduit mais ne disparaît pas. Le ciel garde une teinte violacère. Valombre est changée. Mais vivante.",
                consequence_si_refus: "Si les PJ ne détachent pas la Larme, le rituel continue.",
              },
              {
                condition: "Les PJ choisissent de laisser Thade ouvrir le seuil",
                sceneId: "s3_monde_apres",
                type: "libre",
                moteur: "La Spirale déferle. Valombre est transformée. Thade franchit le seuil vers Sealine. Le monde est différent.",
                accroche_mj: "Vous reculez. Thade se relève. Il tend les mains vers la Larme. Le vortex s'élargit. Le ciel vire au violet profond. La Spirale déferle sur Valombre. Thade franchit le seuil. Sealine est là, mais elle ne l'attendait pas comme une récompense. Le monde n'est plus le même. Pas meilleur. Pas pire. Différent.",
                consequence_si_refus: "Si les PJ ne laissent pas Thade ouvrir le seuil, le rituel continue jusqu'à ce qu'ils choisissent.",
              },
              {
                condition: "Les PJ hésitent trop longtemps (échec)",
                sceneId: "s3_monde_apres",
                type: "echec",
                moteur: "Le rituel s'accomplit seul. Le seuil s'ouvre. La Spirale déferle sans choix conscient.",
                accroche_mj: "Le vortex pulse. La Larme brille plus fort. Sealine dit : 'Le temps presse. Si vous ne choisissez pas, le rituel s'accomplira seul.' Puis : 'Ce ne sera pas votre choix — ce sera l'absence de choix.' Le vortex s'élargit. C'est trop tard. Le seuil s'ouvre. La Spirale déferle. Vous n'avez pas choisi. Vous avez laissé faire.",
                consequence_si_refus: "L'épilogue est plus sombre — les PJ n'ont pas décidé.",
              },
              {
                condition: "Les PJ attaquent Sealine",
                sceneId: "s3_monde_apres",
                type: "echec",
                moteur: "Sealine se retire dans le vortex. Les options sont moins claires. Les PJ doivent déduire par eux-mêmes.",
                accroche_mj: "Sealine ne se défend pas. Elle dit : 'Je ne suis pas votre ennemie.' Puis elle se retire dans le vortex. La Larme pulse. Le rituel continue. Sans Sealine, vous devez déduire les options par vous-mêmes. Art de la magie Difficile pour analyser le vortex. Le Magi-Tuteur peut aider s'il est là.",
                consequence_si_refus: "Si les PJ attaquent Sealine puis détruisent la Larme, Sealine est perdue. Si le seuil s'ouvre, Sealine disparaît dans la Spirale. L'épilogue est plus sombre.",
              },
              {
                condition: "Les PJ veulent parler à Thade avant de choisir",
                sceneId: "s3_monde_apres",
                type: "libre",
                moteur: "Thade ne parle que si on lui adresse la parole. Il murmure : 'Je croyais qu'elle était morte. Je voulais que le seuil m'obéisse.'",
                accroche_mj: "Thade est au sol. Il ne regarde pas les PJ. Il regarde le vortex. Si vous lui parlez, il répond. 'Je croyais qu'elle était morte. Je voulais que le seuil m'obéisse. C'est tout ce qu'il me restait.' Sa voix est brisée. Il ne combat plus. Il ne justifie plus. Il attend.",
                consequence_si_refus: "Si les PJ ne parlent pas à Thade, ils choisissent sans entendre sa perspective.",
              },
            ],
            fallback_mj: "La Conversation à Trois est le choix final. Il n'y a pas d'alternative — les PJ doivent choisir. Si les PJ hésitent, trois avertissements puis le rituel s'accomplit seul (option 3 sans choix conscient). Si les PJ attaquent Sealine, elle se retire et les options deviennent moins claires. Le Magi-Tuteur peut expliquer si Sealine est absente. Dans tous les cas, l'épilogue suit le choix (ou l'absence de choix).",
            objectif_scene: "Décider du sort de la Larme de Vael, de Sealine, de Thade et de Valombre. Trois options irréversibles. Le choix définit l'épilogue.",
            pression: "Trois avertissements puis le rituel s'accomplit seul (option 3 sans choix conscient). Chaque hésitation rapproche du point de non-retour. Le vortex pulse.",
            actions_pj_attendues: ["écouter Sealine expliquer les trois options", "poser des questions sur les conséquences de chaque option", "éventuellement parler à Thade au sol", "choisir : détruire la Larme, détacher la Larme, ou laisser Thade ouvrir le seuil"],
            sorties_possibles: ["vers s3_monde_apres (détruire la Larme — Sealine perdue, sceau refermé)", "vers s3_monde_apres (détacher la Larme — Sealine revient, seuil entrouvert)", "vers s3_monde_apres (laisser Thade ouvrir — Spirale déferle)", "vers s3_monde_apres (hésiter — rituel accompli seul)"],
            si_les_pj_bloquent: "Pas d'alternative au choix. Si les PJ hésitent, trois avertissements puis le rituel s'accomplit seul. Si les PJ attaquent Sealine, elle se retire et les options deviennent moins claires. Le Magi-Tuteur peut expliquer si Sealine est absente.",
            conditions_sortie: [
              "Les PJ ont choisi de détruire la Larme.",
              "OU les PJ ont choisi de détacher la Larme.",
              "OU les PJ ont choisi de laisser Thade ouvrir le seuil.",
              "OU les PJ ont hesité — le rituel s'accomplit seul (option 3 sans choix conscient).",
            ],
            transition_defaut: "Le choix est fait. Le vortex réagit. La Larme, Sealine, Thade — tout bascule. Le monde d'après commence.",
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
              "Le MJ décrit les conséquences selon le choix des PJ :\n\nSi la Larme est détruite : le ciel reprend sa couleur normale. Le déphasage s'arrête. Les routes redeviennent fiables. Les tombes des Thanes sont restaurées — Thorgar confirme que le sceau est refermé. Thade est brisé, jugé ou exilé selon les alliances des PJ. Sealine est perdue. Valombre revient à la normale — mais avec les cicatrices. Les gens se souviennent de ce qui s'est passé.\n\n  Mara reconstruit. Elle dit : « On a perdu des gens. On a perdu du temps. Mais on est encore là. » Elle travaille avec les PJ si le décompte des victimes est bas. Elle les évite si le décompte est élevé.\n  Thorgar restaure les rites funéraires. Il dit : « Le sceau est refermé. Les morts peuvent reposer. » Si les PJ ont tué des étudiants dans la Tour, il ajoute : « Pas tous. »\n  Olane réforme l'Université. Elle ferme la Réserve de Recherche Interdite pendant un an. Elle dit : « On a fermé les yeux trop longtemps. Plus jamais. »\n  Ursula soigne les blessés — les étudiants charmés qui se réveillent, les gardes piégés qui s'effondrent.\n  Le Champion de la Bannière Pure, s'il n'a pas été arrêté, est discrédité — le ciel redevient normal, sa rhétorique de la menace ne tient plus. Il se retire ou devient une voix marginale.\n  Les Endeuillés, s'ils n'ont pas été dispersés, trouvent la paix — les tombes sont restaurées, le sceau est refermé. Ils se dispersent d'eux-mêmes.\n  Elian Voss, s'il a été retourné et est vivant, témoigne au procès de Thade. S'il est mort ou absent, les preuves matérielles suffisent mais le procès est moins personnel.\n  Le magi-tuteur, s'il a survécu, devient le gardien de la Tour. Il dit : « Je garderai la Tour vide. Pour que personne ne recommence. »\n\nSi Sealine est sauvée : le ciel garde une teinte violacère, légère, permanente. Le déphasage persiste mais est gérable — certaines rues sont trompeuses, mais la plupart sont fiables. Sealine revient, fragile, silencieuse. Thade est jugé mais pas exécuté — les PJ peuvent témoigner. Valombre apprend à vivre avec la Spirale. Les gens savent que le monde a changé, mais il n'a pas fini.\n\n  Mara reconstruit et adapte. Elle dit : « La ville est différente. On s'adapte. On s'est toujours adaptés. » Elle cartographie les rues trompeuses.\n  Thorgar accepte le changement avec réticence. Il dit : « Le sceau n'est pas refermé. Mais il n'est pas ouvert non plus. C'est… entre les deux. » Il adapte les rites funéraires pour les morts qui ne reposent plus tout à fait.\n  Olane réforme l'Université et ouvre un département d'études planaires. Elle dit : « Si la Spirale est là, autant la comprendre. »\n  Sealine vit en retrait. Elle parle peu. Elle mange. Elle dort. Elle marche dans les rues. Mais elle n'est plus tout à fait là. Les PJ peuvent la visiter.\n  Thade est jugé. Le procès est complexe — il a sauvé Sealine, mais il a tué sept personnes dans les bocaux et manipulé cinquante patients. Le MJ décide du verdict selon les alliances des PJ.\n  Le Champion, s'il n'a pas été arrêté, profite du chaos — la Spirale filtre, la ville est changée, sa rhétorique trouve un nouveau public. Il devient une voix politique.\n  Les Endeuillés, s'ils n'ont pas été dispersés, ne trouvent pas la paix — le seuil est entrouvert, les morts ne reposent pas tout à fait. Certains rejoignent le Champion. D'autres fondent un culte de la Spirale.\n\nSi le seuil s'ouvre : le ciel est violet. Les routes mènent partout et nulle part. La Spirale déferle. Valombre est transformée. Thade franchit le seuil vers Sealine — ils disparaissent dans le vortex, ou ils restent, selon ce que les PJ ont dit et ce que Sealine décide. Le monde est différent. Pas meilleur, pas pire — différent. Les gens s'adaptent. La vie continue, mais pas comme avant.\n\n  Mara reconstruit dans un monde nouveau. Elle dit : « Les rues changent. Les gens changent. Mais on reconstruit toujours. » Elle devient une leader dans une ville qui n'a plus de cartes fixes.\n  Thorgar est perdu. Les rites funéraires ne fonctionnent plus — les morts ne reposent pas, ils errent. Il dit : « Je ne sais plus comment prier. » Il peut devenir un guide spirituel pour les vivants, ou se retirer.\n  Olane embrasse le nouveau monde. Elle dit : « La Spirale est là. Ce n'est plus de la théorie. C'est la réalité. » Elle devient une chercheuse planaire de premier plan.\n  Le Champion, s'il n'a pas été arrêté, est discrédité ou transformé — le monde qu'il connaissait n'existe plus. Sa rhétorique n'a plus de sens. Il disparaît ou s'adapte.\n  Les Endeuillés, s'ils n'ont pas été dispersés, sont les mieux adaptés au nouveau monde — ils attendaient les morts. Les morts sont là. Mais ce ne sont pas les morts qu'ils attendaient.\n  Sealine et Thade : si Sealine décide de rester avec Thade, ils disparaissent dans le vortex. Si Sealine décide de revenir, Thade franchit le seuil seul. Le MJ décide selon ce que les PJ ont dit pendant la conversation à trois.\n\nLe décompte des victimes de la Tour détermine le ton : peu de victimes, l'épilogue est lumineux — les gens font confiance aux PJ. Beaucoup de victimes, l'épilogue est sombre — les gens craignent les PJ. Le MJ peut décrire une scène sur la Place de la Fondation où les gens réagissent aux PJ : sourires et gratitude si le décompte est bas, regards fuyants et murmures si le décompte est élevé.\n\nLes PJ ont un dernier moment pour parler aux PNJ, visiter les lieux marquants, et décider de l'avenir de leurs personnages.\n\nFils non résolus (le MJ décide lesquels activer selon la campagne) :\n- Que devient Caldris ? La cité qui fournissait le matériel interdit n'a pas été confrontée. Si les PJ ont le cachet de Caldris et les preuves, une expédition diplomatique ou militaire est possible.\n- Que devient la Réserve de Recherche Interdite ? Olane la ferme ou la réforme. Mais les ouvrages sont toujours là. Quelqu'un d'autre pourrait les consulter.\n- Que devient le protocole S-01 ? Les recherches de Thade existent. Elian Voss les connaît. Si Elian est vivant, il peut les détruire ou les préserver.\n- Que devient la Larme de Vael ? Si elle est détruite, ses fragments restent. Si elle est détachée, elle est entre les mains de Sealine. Si le seuil s'ouvre, elle est dans la Spirale.\n- Que devient le magi-tuteur ? S'il a survécu, il garde la Tour ou part. Il porte le témoignage.",
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
                syndicat: "Le Syndicat survit. Les institutions s'effondrent, le Syndicat reste. Le Collecteur possède toujours ses dettes. Brek contrôle toujours les égouts. La Vieille Ville lui appartient un peu plus.",
              },
              {
                choix: "Larme détachée (Sealine sauvée)",
                sealine: "revenue fragile",
                thade: "jugé, pas exécuté",
                sceau: "entrouvert",
                valombre: "changée mais vivable",
                ton: "mélancolique",
                syndicat: "Le Syndicat s'adapte. Le déphasage persistant crée de nouvelles routes, de nouveaux besoins, de nouvelles dettes. Le Collecteur monétise la Spirale comme il a monétisé la crise. Si les PJ ont convaincu Brek de rompre avec le Collecteur, le Syndicat est affaibli. Sinon, il prospère.",
              },
              {
                choix: "Seuil ouvert",
                sealine: "réunie avec Thade ou disparue",
                thade: "accompli / perdu",
                sceau: "aboli",
                valombre: "fusionnée à la Spirale",
                ton: "mythique",
                syndicat: "Le Syndicat exploite le nouveau monde. Les routes mènent partout et nulle part — le Syndicat vend des guides. La Spirale transforme la ville — le Syndicat vend des protections. Le Collecteur ne prend pas le Conseil. Il n'en a pas besoin. Tout le monde lui doit quelque chose.",
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
              "Le Syndicat : si les PJ ont convaincu Brek de rompre avec le Collecteur, le Syndicat est affaibli et la Vieille Ville respire. Si les PJ ont payé le Collecteur ou accumulé des dettes, le Collecteur apparaît dans l'épilogue pour réclamer. Si les PJ ont ignoré le Syndicat, il est devenu le pouvoir réel de la Vieille Ville.",
            ],
            rappels: [
              "C'est une scène de narration. Pas de jets. Le MJ décrit et les PJ réagissent.",
              "L'épilogue doit refléter les choix, les alliances et les pertes de toute la campagne.",
            ],
          },

          guide_mj: {
            intention: "Clore la campagne avec les conséquences du choix final.",
            mise_en_place: "Place de la Fondation. Les gens rassemblés. Le ciel change. Le MJ décrit le changement en premier — le ciel, l'air, les rues — puis les PNJ un par un.",
            deroulement: [
              "Le MJ décrit le changement du ciel et de la ville selon le choix.",
              "Les PNJ survivants apparaissent et réagissent (Mara, Thorgar, Olane, Ursula, Champion, Endeuillés, Elian, magi-tuteur).",
              "Le sort de Thade et de Sealine est révélé.",
              "Le décompte des victimes détermine le ton (lumineux ou sombre).",
              "Le Syndicat : le MJ décrit ce que devient le Syndicat selon les choix des PJ (affaibli, prospère, ou intouchable).",
              "Les PJ ont un dernier moment pour interagir avec les PNJ.",
              "Le MJ peut évoquer les fils non résolus (Caldris, Réserve, S-01, Larme, magi-tuteur).",
              "Les PJ décident de l'avenir de leurs personnages.",
            ],
            actions_utiles: [
              "Parler aux PNJ survivants (Mara, Thorgar, Olane, Ursula).",
              "Visiter les lieux marquants de la campagne (Tour, Terrasses, Archives, Réserve).",
              "Décider de l'avenir des PJ (rester, partir, reconstruire, explorer).",
              "Si Elian est vivant : assister à son témoignage ou à son procès.",
              "Si le magi-tuteur a survécu : lui parler de la Tour.",
              "Si Sealine est revenue : la visiter.",
            ],
            fronts_heritiers: ["Tous les fronts sont résolus. Les fils non résolus sont des pistes pour le MJ, pas des obligations."],
            jeu_des_pnj: "Mara reconstruit. Thorgar restaure ou s'adapte. Olane réforme. Ursula soigne. Chacun selon sa nature et selon le choix. Le Champion est discrédité ou renforcé. Les Endeuillés trouvent la paix ou non. Elian témoigne ou disparaît. Le magi-tuteur garde la Tour ou part. Le Collecteur, si le Syndicat est intact, apparaît pour réclamer ses dettes ou proposer de nouveaux arrangements. Brek, si les PJ l'ont convaincu, a quitté les égouts ou travaille pour la garde. Les hommes de main se dispersent ou se regroupent sous un nouveau chef.",
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

          navigation: {
            indice_indispensable: "Les PJ doivent voir les conséquences de leur choix sur Valombre, les PNJ survivants et le monde.",
            consequence_si_manque: "Pas applicable — l'épilogue est une narration pure. Le MJ décrit les conséquences selon le choix, les alliances et le décompte des victimes. Il n'y a pas d'indice à manquer.",
            pnj_alternatifs: ["mara_dirigeante — reconstruit la ville, réagit selon le décompte des victimes", "thorgar_pretre_nain — restaure les rites funéraires ou s'adapte à la Spirale", "maera_olane — réforme l'Université ou garde la Tour"],
            front_si_ignore: "Tous les fronts sont résolus. Les fils non résolus (Caldris, Réserve, S-01, Larme, magi-tuteur) sont des pistes pour le MJ, pas des obligations.",
            scenes_alternatives: [],
            sorties_jouables: [
              {
                condition: "Larme détruite — épilogue amer",
                sceneId: "fin_campagne",
                type: "indice_principal",
                moteur: "Le sceau se referme. Le déphasage s'arrête. Sealine est perdue. Thade est brisé. Valombre revient à la normale avec ses cicatrices.",
                accroche_mj: "Le ciel reprend sa couleur. Le déphasage s'arrête. Les routes redeviennent fiables. Les tombes des Thanes sont restaurées. Thorgar confirme que le sceau est refermé. Thade est brisé, jugé ou exilé. Sealine est perdue. Valombre revient à la normale — mais avec les cicatrices. Les gens se souviennent.",
                consequence_si_refus: "Pas applicable — c'est la fin de la campagne.",
              },
              {
                condition: "Sealine sauvée — épilogue mélancolique",
                sceneId: "fin_campagne",
                type: "reussite",
                moteur: "Le seuil reste entrouvert. La Spirale filtre. Sealine revient fragile. Thade est jugé. Valombre apprend à vivre avec.",
                accroche_mj: "Le ciel garde une teinte violacère, légère, permanente. Le déphasage persiste mais est gérable. Sealine est là, fragile, silencieuse. Thade est jugé mais pas exécuté. Valombre apprend à vivre avec la Spirale. C'est un nouveau commencement.",
                consequence_si_refus: "Pas applicable — c'est la fin de la campagne.",
              },
              {
                condition: "Seuil ouvert — épilogue mythique",
                sceneId: "fin_campagne",
                type: "libre",
                moteur: "La Spirale déferle. Valombre est transformée. Le ciel est violet. Les routes mènent partout et nulle part. Thade franchit le seuil.",
                accroche_mj: "Le ciel est violet. Les routes de Valombre mènent partout et nulle part. La Spirale et la ville fusionnent. Thade a franchi le seuil qu'il croyait maîtriser. Sealine était là, mais pas comme une promesse. Le monde est différent. Pas meilleur. Pas pire. Différent. Et les gens apprennent à vivre dans ce monde nouveau.",
                consequence_si_refus: "Pas applicable — c'est la fin de la campagne.",
              },
              {
                condition: "Rituel accompli sans choix (échec)",
                sceneId: "fin_campagne",
                type: "echec",
                moteur: "Le seuil s'ouvre sans décision consciente. L'épilogue est plus sombre — les PJ n'ont pas choisi, ils ont laissé faire.",
                accroche_mj: "Le ciel est violet. La Spirale déferle. Mais les PJ n'ont pas choisi. Ils ont laissé faire. L'épilogue est plus sombre. Les PNJ survivants regardent les PJ avec déception ou incompréhension. Mara dit : 'Vous aviez le choix. Vous n'avez pas choisi.' Valombre est transformée — mais les PJ portent le poids de l'absence de décision.",
                consequence_si_refus: "Pas applicable — c'est la fin de la campagne.",
              },
              {
                condition: "Les PJ veulent parler aux PNJ survivants",
                sceneId: "fin_campagne",
                type: "pnj",
                moteur: "Mara, Thorgar, Olane, Ursula réagissent selon le choix et les alliances.",
                accroche_mj: "Les PNJ survivants sont sur la Place. Mara reconstruit. Thorgar restaure ou s'adapte. Olane réforme. Ursula soigne. Chacun selon sa nature et selon votre choix. Allez leur parler. C'est la dernière fois.",
                consequence_si_refus: "Si les PJ ne parlent pas aux PNJ, l'épilogue est plus distant mais se déroule quand même.",
              },
              {
                condition: "Les PJ veulent visiter les lieux marquants",
                sceneId: "fin_campagne",
                type: "libre",
                moteur: "La Tour, les Terrasses, les Archives, la Réserve — les lieux de la campagne.",
                accroche_mj: "Les lieux de votre campagne sont là. La Tour, silencieuse ou bourdonnante selon le choix. Les Terrasses, ouvertes ou fermées. Les Archives, scellées ou ouvertes. La Réserve, interdite ou réformée. Visitez-les une dernière fois. Le monde continue.",
                consequence_si_refus: "Si les PJ ne visitent pas les lieux, l'épilogue est plus abstrait mais se déroule quand même.",
              },
            ],
            fallback_mj: "Le Monde d'Après est la scène finale. Il n'y a pas d'alternative — la campagne se termine ici. Le MJ décrit les conséquences selon le choix, les alliances et le décompte des victimes. Les PNJ survivants apparaissent et réagissent. Les PJ ont un dernier moment pour interagir. C'est la fin — elle mérite du temps et de l'attention.",
            objectif_scene: "Voir les conséquences du choix final sur Valombre. L'épilogue reflète les décisions, les alliances et les pertes de toute la campagne.",
            pression: "Aucune pression mécanique. La pression est narrative : les PJ vivent avec les conséquences de leurs choix. Le MJ décrit et les PJ réagissent.",
            actions_pj_attendues: ["écouter l'épilogue décrit par le MJ", "parler aux PNJ survivants", "visiter les lieux marquants de la campagne", "décrire ce que leurs personnages font dans les semaines qui suivent"],
            sorties_possibles: ["vers fin_campagne (l'épilogue se conclut)"],
            si_les_pj_bloquent: "Scène finale. Narration pure. Pas d'alternative. La campagne se termine ici. Le MJ peut demander aux PJ ce que leurs personnages font dans les semaines qui suivent.",
            conditions_sortie: [
              "Le MJ a décrit l'épilogue correspondant au choix final.",
              "OU les PJ ont dit adieu aux PNJ survivants et aux lieux marquants.",
              "OU les PJ ont décrit ce que leurs personnages font dans les semaines qui suivent.",
            ],
            transition_defaut: "L'épilogue se conclut. Les PJ quittent Valombre ou y restent. La Spirale est refermée, ou elle filtre encore. Le monde d'après est à eux. Fin de la campagne.",
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
        "Thade peut être vaincu par la force. C'est un choix. Mais le combat est plus long, plus dangereux, et la Larme ne se fissure pas. Sealine apparaît quand même, mais la conversation est plus tendue.",
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
            "Art de la magie Difficile pour détacher la Larme sans la briser. Réussite : la Larme se détache du vortex. Sealine se matérialise pleinement. Le vortex se réduit mais ne disparaît pas. Échec : la Larme se fissure et se brise partiellement. Sealine revient mais le seuil est plus ouvert que prévu.",
        },
        {
          etape: "L'épilogue reflète le choix",
          detail:
            "Le ciel garde une teinte violacère. Les routes sont parfois trompeuses. Sealine est là, fragile, silencieuse. Thade est jugé. Valombre apprend à vivre avec la Spirale. C'est un nouveau commencement.",
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
            "Sans Sealine pour expliquer, les PJ doivent déduire les options par eux-mêmes. Art de la magie Difficile pour analyser le vortex. Le magi-tuteur, s'il est présent, peut expliquer. Sinon, les PJ naviguent à l'aveugle.",
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
        jet: "Persuasion Difficile",
        info: "Lire un extrait des cahiers ou révéler une vérité sur Sealine fissure la Larme. Chaque vérité compte comme 2 rounds de combat.",
      },
      {
        scene: "Le Vortex",
        jet: "Art de la magie Difficile",
        info: "Identifier la structure du vortex. La Larme est le catalyseur. La détacher arrête le rituel sans refermer complètement le seuil. La détruire libère l'énergie et referme le sceau. La laisser ouvre le seuil.",
      },
      {
        scene: "Le Vortex",
        jet: "Athlétisme Moyen",
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
        info_cle: "Combat par maîtrise, pas par cruauté. Chaque vérité le blesse. S'effondre à la phase 3.",
        difficultes_cles: "Persuasion Difficile pour les vérités. Athlétisme Moyen pour les vents planaires.",
      },
      {
        id: "sealine_coren",
        nom: "Sealine Vael",
        faction: "La Spirale",
        role_court: "La Dame de la Spirale / Choix final",
        apparition: "Acte I, scène 2",
        info_cle: "Lucide, calme, présente. Sait tout. Ne demande rien. Explique les trois options.",
        difficultes_cles: "Aucun jet. C'est une conversation.",
      },
      {
        id: "magi_tuteur_loyal",
        nom: "Le Magi-Tuteur loyal",
        faction: "Université Arcanique (Allié)",
        role_court: "Témoin / Allié possible",
        apparition: "Acte I, scène 1 (si survivant)",
        info_cle: "Peut intervenir à la phase 2. Peut expliquer les options si Sealine est absente.",
        difficultes_cles: "Aucun jet. Son intervention est narrative.",
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

    preuves_transportables: [
      {
        objet: "Cahiers bordeaux (lettres à Sealine)",
        scene: "Le Laboratoire de Verre (Scénario 2)",
        type: "Physique — emportable (volumineux)",
        description: "Une trentaine d'années de lettres de Thade à Sealine. La plume écrit en temps réel.",
        utilisable_pour: "Arme pendant le combat. Lire un extrait fissure la Larme. Persuasion Difficile.",
      },
      {
        objet: "Schéma de la Larme avec annotation de Sealine",
        scene: "Le Laboratoire d'Elian Voss (Scénario 2)",
        type: "Physique — emportable",
        description: "« Ne jamais alimenter cela avec des vivants. » Écriture de Sealine.",
        utilisable_pour: "Arme pendant le combat. La vérité la plus dévastatrice — c'est Sealine elle-même qui le nie.",
      },
      {
        objet: "Dossiers des patients d'Elian (copie partielle)",
        scene: "Le Laboratoire d'Elian Voss (Scénario 2)",
        type: "Physique — copie, emportable",
        description: "Cinquante patients stabilisés. Noms, dates, dosages. Cachet de Caldris.",
        utilisable_pour: "Arme pendant le combat. Prouver le coût humain du rituel.",
      },
      {
        objet: "Registre des 142 consultations (copie)",
        scene: "La Réserve de Recherche Interdite (Scénario 2)",
        type: "Physique — copie, emportable",
        description: "142 séances de Thade étalées sur une trentaine d'années. La préparation méthodique.",
        utilisable_pour: "Arme pendant le combat. Prouver que Thade a choisi, pas dérapé.",
      },
      {
        objet: "Trace scellée du 6e étage (relevé)",
        scene: "L'Assaut de la Tour (Scénario 2)",
        type: "Physique — relevé/copie, emportable",
        description: "Équation préliminaire de S-01 datée de l'année de Nyx. Avant la disparition de Sealine.",
        utilisable_pour: "Arme pendant le combat. Prouver que les recherches précèdent la perte.",
      },
    ],

    pnj_allies: [
      {
        id: "magi_tuteur_loyal",
        nom: "Le Magi-Tuteur loyal",
        lieu: "Sommet de la Tour (si survivant de l'Assaut)",
        disponibilite: "Si les PJ ne l'ont pas attaqué au 4e étage de la Tour.",
        apporte: "Intervention à la phase 2 : « Maître, arrêtez. Elle ne voudrait pas ça. » Thade hésite un round.",
        mobilisable: "Peut expliquer les options si Sealine est absente. Témoin de la fin.",
      },
      {
        id: "sealine_coren",
        nom: "Sealine Vael",
        lieu: "Dans le vortex",
        disponibilite: "Phase 3, après l'effondrement de Thade.",
        apporte: "Explication des trois options et de leurs prix. Honnêteté absolue. Ne demande rien.",
        mobilisable: "Pas mobilisable au combat. Sa présence est narrative et morale.",
      },
    ],

    symptomes_fronts: [
      {
        front: "Tous les fronts convergent",
        symptomes: [
          { etape: "Le ciel", signe: "Le ciel de Valombre vire au violet. Pas le crépuscule — un violet qui n'a rien à voir avec l'heure." },
          { etape: "Les routes", signe: "Les routes de Valombre ne sont plus fiables. Le déphasage est général." },
          { etape: "La cité", signe: "Les rues sont vides. Les gens se barricadent. La garde est débordée. Le Conseil est impuissant." },
          { etape: "Les factions", signe: "Le Champion harangue une foule terrifiée. Les Endeuillés attendent le retour des morts. Mara prépare l'après." },
          { etape: "La Tour", signe: "Le bourdonnement du vortex vibre dans toute la Tour. La lavande saturée. Le cristal qui pousse." },
        ],
      },
    ],

    fils_non_resolus: [
      {
        fil: "Le sort exact de Thade après la brisure de la Larme",
        pistes: [
          "Thade est jugé par le Conseil. Olane témoigne. Les PJ peuvent plaider pour ou contre. Le MJ décide de la sentence : exil, emprisonnement, ou liberté surveillée.",
          "Thade est brisé mais libre. Il disparaît dans la Vieille Ville. Les PJ croisent sa trace plus tard — ou jamais.",
          "Thade se retire à Caldris. Il y a des gens qui le protègent encore. Il continue d'écrire à Sealine.",
          "Thade demande à être exilé dans la Spirale. Si le seuil est entrouvert, il peut y aller. Sealine décide de ce qu'elle fait de lui.",
        ],
        note_mj: "Le sort de Thade dépend du choix final, des alliances des PJ et du décompte des victimes. Le MJ choisit la fin qui convient le mieux à sa table.",
      },
      {
        fil: "La responsabilité officielle de l'Université",
        pistes: [
          "Olane mène une réforme interne. L'Université reconnaît sa négligence. Des safeguards sont mis en place. Mais l'institution survit.",
          "Le Conseil dissout l'Université temporairement. Les maîtres sont auditionnés. L'Université renaît sous nouvelle direction.",
          "L'Université refuse toute responsabilité. Thade est désigné comme un cas isolé. Olane démissionne.",
          "L'Université est tenue responsable. Des sanctions de Caldris. L'indépendance de Valombre est réduite.",
        ],
        note_mj: "La responsabilité de l'Université dépend du choix final et de l'influence des PJ au Conseil. Le MJ décide.",
      },
      {
        fil: "Les patients du protocole S-01 et l'effacement administratif",
        pistes: [
          "Elian Voss (si survivant) fournit la liste des patients. Olane ouvre un registre public. Les patients sont reconnus et soignés.",
          "Les dossiers sont détruits par l'Université pour éviter le scandale. Les patients restent anonymes et sans suivi.",
          "Mara et la Résistance retrouvent les patients un par un. La protection est clandestine mais réelle.",
          "Les patients se manifestent eux-mêmes après la stabilisation. Ils réclament reconnaissance et soins.",
        ],
        note_mj: "La protection des patients dépend d'Elian (viviant ou mort), d'Olane (en fonction ou écartée) et de Mara (active ou clandestine).",
      },
      {
        fil: "Le réseau de la Résistance après la crise",
        pistes: [
          "Mara négocie une reconnaissance officielle. La Résistance devient un réseau de soins et de renseignement civique.",
          "La Résistance reste clandestine. Elle ne fait pas confiance à l'institution. Elle continue dans l'ombre.",
          "La Résistance se dissout. Sa mission est accomplie. Ses membres retournent à leur vie.",
          "La Résistance est persécutée sous la loi martiale (si votée). Mara continue malgré tout.",
        ],
        note_mj: "L'avenir de la Résistance dépend du choix final, du vote du Conseil et de la relation des PJ avec Mara.",
      },
      {
        fil: "La pression politique de Caldris malgré la stabilisation",
        pistes: [
          "Caldris retire son ultimatum après la stabilisation. Les relations commerciales reprennent normalement.",
          "Caldris maintient une pression. Les Pierres du Traité sont renégociées. Valombre perd en autonomie.",
          "Caldris envoie un nouveau représentant. Il veut comprendre ce qui s'est passé. Les PJ doivent expliquer.",
          "Caldris profite du chaos pour annexer des territoires. Valombre est affaiblie.",
        ],
        note_mj: "L'attitude de Caldris dépend du choix final et de la gestion du Conseil par les PJ.",
      },
      {
        fil: "Les tombes restaurées et les dégâts déjà faits",
        pistes: [
          "Thorgar restaure les rites. Les tombes sont scellées à nouveau. Mais les mineurs se souviennent du froid.",
          "Les tombes sont restaurées mais les runes ont changé. Le sceau fonctionne différemment. Thorgar surveille.",
          "Cinq tombes sur sept sont restaurées. Deux restent ouvertes. Le sceau est partiel. Le déphasage persiste faiblement.",
          "Les tombes sont restaurées. Les clans nains pardonnent lentement. La confiance revient avec le temps.",
        ],
        note_mj: "L'état des tombes dépend du nombre de tombes touchées pendant la campagne et du choix final.",
      },
    ],
  },
};
