/**
 * Scénario 5 - Acte 3 : L'Apothéose du Vide
 * Sommet de la Tour Arcanique
 *
 * NOTE : version étoffée intégrant la lore du Sc.4 Acte 3 (Vestiges Oubliés).
 * Le combat final ne porte plus uniquement sur la puissance brute de Thade,
 * mais sur le levier émotionnel découvert dans la Spirale : Sealine, sa femme,
 * existe encore comme écho dans la Cathédrale des Soupirs. La "Larme de
 * Sealine" (le Cristal saturé du Sc.2) est l'ancre planaire de Thade. La
 * briser, c'est le couper de sa source de pouvoir.
 */

export const acte3 = {
  title: "ACTE 3 : L'APOTHÉOSE DU VIDE",
  stake:
    "Confronter Thade Coren au sommet de la Tour, briser la Larme de Sealine pour le couper de la Spirale, et refermer définitivement la faille planaire au-dessus de Valombre.",
  location: "Sommet de la Tour Arcanique — Vortex de la Spirale.",
  scenes: [
    {
      title: "Scène 1 : Le Trône de Sang",
      type: "Cinématique / Confrontation verbale",
      image: "./images/scenes/throne_sang.jpg",
      locationId: "tour_sommet",
      npcIds: ["thade_coren_dieu"],
      description: {
        resume:
          "Thade attend les PJ au sommet, surplombant le vortex. Avant le combat, une dernière conversation décide du ton de la confrontation.",
        visuel:
          "Le toit de la Tour n'existe plus. C'est une plateforme circulaire de marbre noir flottant dans le vortex de la Spirale, qui s'ouvre en entonnoir au-dessus de Valombre. Au centre, Thade flotte à un mètre du sol, nimbé d'une lumière noire qui n'éclaire rien. À ses pieds, le Cristal saturé du Sc.2 — la 'Larme de Sealine' — pulse lentement, désormais incrusté dans une monture d'argent gravée du nom 'SEALINE COREN, AIMÉE'.",
        audio:
          "Le chant grave de l'univers qui se déchire, comme une corde de violoncelle sous tension extrême. La voix de Thade arrive sans qu'il bouge les lèvres.",
        odeur: "Vide. Pas même de l'ozone. L'absence d'odeur fait peur.",
        lumiere:
          "Étoiles noires (étoiles dont la lumière a été inversée) tournent au-dessus de la plateforme. Pas de soleil.",
      },
      narration: {
        declencheur: "Arrivée des PJ au sommet après l'Acte 2.",
        texte_a_lire:
          "Thade ouvre les yeux. Ils contiennent des galaxies entières, lentes, mortes. « Enfin. Les témoins de ma naissance. Vous avez été utiles, à vrai dire. Le Cristal de la mine. L'élimination de mes outils défaillants. Et même cette petite excursion dans la Spirale — saviez-vous que personne, avant vous, n'en était jamais revenu ? »\n\nIl regarde la Larme, à ses pieds. Sa voix vacille un instant.\n\n« Encore quelques minutes. Quand le rituel sera complet, je vais... la ramener. Vraiment, cette fois. Pas juste un fragment dans un vitrail. Toute. Comme avant. Et le prix... » Il fait un geste vers Valombre, à ses pieds, sous le dôme. « ... le prix sera payé une fois pour toutes. »",
        contexte_mj:
          "Moment AVANT le combat. C'est ici que les leviers narratifs accumulés pendant la campagne se posent sur la table. Si les PJ ont parlé à Sealine (Sc.4 Acte 3 Scène 4), ils savent que Thade ignore qu'elle existe encore comme écho. Le révéler peut briser sa volonté avant le combat (test de Volonté pour Thade, géré en narration). S'ils ont obtenu la phrase de brisure du Codex (Sc.4 Acte 3 Scène 3), ils peuvent la prononcer pour fragiliser le bouclier de la Larme. Encourager les joueurs à utiliser la conversation comme une vraie arme.",
        objectif:
          "Préparer le combat en utilisant les leviers narratifs accumulés.",
      },
      mecaniques: {
        defis: [
          "Diplomatie/Bluff DD 22 : faire douter Thade. Réussite = il commence le combat avec une phase de moins ou un sort majeur perdu.",
          "Connaissance (Arcanes) DD 16 : confirmer que la Larme est l'ancre planaire et qu'elle doit être brisée pour finir Thade.",
          "Psychologie DD 14 : comprendre que Thade est sincèrement convaincu qu'il va ramener Sealine.",
          "Levier narratif (si Sealine a parlé aux PJ au Sc.4) : révéler à Thade qu'elle existe encore comme écho et qu'elle a demandé à briser la Larme. Réussite automatique de l'effet 'Doute' en début de combat.",
          "Levier narratif (Allié spectral du Thane si présent) : il avance d'un pas et prononce le serment ancien, donnant +2 à toutes les attaques contre Thade pendant 3 rounds.",
        ],
        indices: [
          "La Larme est ÉMOTIONNELLEMENT investie. Elle peut être affaiblie par un acte de compassion, pas seulement par la force.",
          "Thade a peur d'une seule chose : que sa mémoire de Sealine soit fausse.",
          "La phrase du Codex (Sc.4) prononcée à voix haute crée une fissure visible dans la Larme.",
        ],
        recompenses:
          "Initiative au combat. Bonus narratifs cumulables selon les leviers utilisés.",
      },
      transitions: {
        success: "Le combat commence avec un avantage tactique pour les PJ.",
        fail: "Le combat commence à pleine puissance pour Thade.",
      },
    },
    {
      title: "Scène 2 : Le Combat des Deux Mondes",
      type: "Boss Final",
      image: "./images/scenes/combat_final.jpg",
      locationId: "tour_sommet_vortex",
      npcIds: ["thade_coren_dieu"],
      description: {
        resume:
          "Duel final contre Thade en trois phases. Le décor alterne entre la plateforme matérielle et l'intérieur du vortex.",
        visuel:
          "Phase 1 — la plateforme de la Tour, marbre noir, étoiles inversées. Phase 2 — Thade fusionne avec la Larme, son corps devient cristallin, des éclats violets s'échappent à chaque mouvement. Phase 3 — la plateforme se fissure et tombe en morceaux dans le vortex ; les PJ et Thade combattent dans l'apesanteur, sur des fragments flottants, autour de la Larme suspendue.",
        audio:
          "Phase 1 — incantations articulées, sorts qui frappent comme des cloches. Phase 2 — bourdonnement cristallin, voix de Thade dédoublée. Phase 3 — silence du vide, ponctué uniquement par la respiration des PJ et le pulse de la Larme.",
        odeur: "Ozone, puis cristal chauffé, puis rien.",
        lumiere: "Stroboscopique, alternant lumière noire et flashs violets aveuglants.",
      },
      narration: {
        declencheur: "Premier sort lancé.",
        texte_a_lire:
          "Thade lève la main. Le combat commence sans préambule. Vous sentez immédiatement que ce n'est plus un mage. C'est une volonté qui modifie la réalité localement, et qui en paie le prix en stabilité mentale.\n\nÀ chaque phase, le terrain change. À chaque phase, Thade perd un peu plus son humanité — et un peu plus sa puissance, paradoxalement, parce que ce qui le tenait debout, c'était justement cette humanité.",
        contexte_mj:
          "Combat en 3 PHASES distinctes, chacune avec une mécanique unique :\n\n• PHASE 1 — L'ARCHIMAGE (PV : 100) : Thade lance des sorts de haut niveau (Désintégration, Vitesse, Mur de Force). Combat classique. Si le 'Doute' a été infligé Scène 1, il rate son premier sort.\n\n• PHASE 2 — L'AVATAR DE LA LARME (PV : 80, déclenchement à 50% PV Phase 1) : Thade fusionne avec le Cristal. Il devient résistant à tout sauf les attaques magiques ou les armes +2. Ses attaques sont maintenant des éclats de cristal qui causent des dégâts perforants ET psychiques. RD 10 contre les armes non-magiques. Le sauvetage des nains (Sc.5 Acte 2 Scène 2) le prive de cette régénération cristalline (Phase 2 raccourcie à 40 PV).\n\n• PHASE 3 — LE VIDE (PV : 60, déclenchement à 0 PV Phase 2) : Thade devient intangible, une silhouette d'ombre. Seules deux choses peuvent l'atteindre : (a) frapper la Larme directement (qui est protégée par un bouclier brisable avec la phrase du Codex) ; (b) un acte de compassion qui rappelle son humanité (RP).\n\nTerrain : changement de gravité chaque round à partir de Phase 2 (Acrobaties DD 14).",
        objectif: "Vaincre Thade dans les trois phases, ou briser la Larme.",
      },
      mecaniques: {
        defis: [
          "Phase 1 : Combat classique vs Archimage 12 (sorts : Désintégration, Vitesse, Mur de Force, Boule de Feu). PV : 100.",
          "Phase 2 : Combat vs Avatar Cristallin. RD 10 contre non-magique. Attaques d'éclats : 2d8 + 1d6 psychique. PV : 80 (40 si nains sauvés au Sc.5 Acte 2).",
          "Phase 3 : Thade intangible. Cibler la Larme (CA 22, 50 PV, bouclier dissipable par Codex DD 18). Acrobaties DD 14 chaque round (apesanteur).",
          "Levier 'Allié spectral du Thane' : +2 attaque contre Thade durant 3 rounds, à déclencher au choix.",
          "Levier 'Acte de compassion' (Phase 3) : un PJ qui parle de Sealine, mentionne sa libération, ou propose à Thade de la rejoindre dans la mort, force Thade à un test de Volonté DD 22. Échec = il s'expose une round (CA -5).",
          "Le Cristal saturé du Sc.2 que portent les PJ peut être utilisé en Phase 3 pour briser le bouclier de la Larme automatiquement (Scène 3).",
        ],
        indices: [
          "Plus Thade utilise la Larme, plus il s'éloigne de sa propre humanité — donc de la possibilité de ramener Sealine.",
          "La Larme pulse plus fort quand Thade subit une émotion forte (peur, regret).",
          "À la fin de chaque phase, Thade prononce une phrase de Sealine qu'il ne se souvenait plus avoir entendue. C'est un signe que la Larme se vide.",
        ],
        recompenses:
          "Phase 1 défaite : Thade est blessé, vulnérable. Phase 2 défaite : armure cristalline en récompense (composant). Phase 3 défaite : Thade s'effondre, mais le vortex reste actif (Scène 3).",
      },
      transitions: {
        success: "Thade s'effondre. Le vortex commence à s'élargir.",
        fail:
          "Si tous les PJ tombent : un PJ qui a touché Sealine peut être ramené à 1 PV pour la Scène 3 (intervention de l'écho).",
      },
    },
    {
      title: "Scène 3 : L'Effondrement du Vortex",
      type: "Sacrifice / Choix Final",
      image: "./images/scenes/effondrement_vortex.jpg",
      locationId: "tour_sommet_destruction",
      npcIds: ["echo_sealine"],
      description: {
        resume:
          "Thade vaincu, le vortex devient instable et menace d'engloutir Valombre. Pour le refermer, il faut briser la Larme — mais l'écho de Sealine apparaît, et un dernier choix se présente.",
        visuel:
          "La plateforme se réduit à quelques fragments. Le vortex grossit, aspire les débris du dôme qui s'effondre. Au centre, la Larme flotte seule, fissurée, palpitante. Devant elle, une silhouette translucide, douce — Sealine, l'écho que les PJ ont rencontré dans la Cathédrale, est venue. Elle attend.",
        audio:
          "Hurlement d'agonie de la réalité, mais étrangement étouffé. Au premier plan, la voix de Sealine, qui parle aux PJ comme à de vieux amis.",
        odeur: "Néant, puis lavande à mesure que Sealine se manifeste.",
        lumiere:
          "Noir total alternant avec des flashs blancs de plus en plus longs. La silhouette de Sealine est dorée, stable.",
      },
      narration: {
        declencheur: "Défaite de Thade.",
        texte_a_lire:
          "Thade gît sur le dernier fragment, immobile. La Larme flotte au-dessus de lui, fissurée. Le vortex s'élargit — il va engloutir la Tour, puis la ville, puis tout. Vous comprenez : briser la Larme dans le vortex refermera la faille, mais l'onde de choc sera dévastatrice. Vous risquez d'y rester.\n\nUne lumière douce vous fait tourner la tête. Sealine. Pas son image dans un vitrail — son écho, libre, à un pas de vous, paisible. Elle vous sourit comme à des amis qui auraient enfin réussi un travail difficile.\n\n« Merci. Vraiment. Maintenant, finissez. Mais... je peux choisir où ALLER quand vous briserez la Larme. Soit je pars en paix, et Thade meurt définitivement avec moi. Soit je reste un instant de plus, et je peux retenir le pire de l'onde de choc. Mais alors, mon écho s'éteindra dans la souffrance, comme la première fois. À vous de choisir. »",
        contexte_mj:
          "DERNIER CHOIX MORAL de la campagne. Trois options pour les PJ :\n\n(A) Sealine part en paix : la Larme brise proprement, Thade meurt en paix lui aussi. Onde de choc = dégâts massifs aux PJ (5d6 chacun, Volonté DD 24 ou conscience perdue ; un PJ peut tomber).\n\n(B) Sealine retient l'onde : aucun PJ ne tombe. Mais Sealine s'éteint dans la souffrance — c'est un acte cruel envers un fragment d'âme innocent. Conséquence morale forte.\n\n(C) Un PJ se sacrifie en remplaçant Sealine : il sert d'ancre humaine pour absorber l'onde. Il meurt OU il survit avec une marque permanente (perte d'un niveau, ou d'un point permanent de Constitution). Sealine part en paix. Thade meurt en paix. Cette option est la plus 'héroïque' au sens classique.\n\nLaisser le RP guider la décision. Pas de bonne réponse mécanique unique.",
        objectif: "Choisir comment briser la Larme et qui paie le prix.",
      },
      mecaniques: {
        defis: [
          "Volonté DD 14 : décider sous la pression du vortex qui s'élargit.",
          "Action : briser la Larme (jet contre CA 22, 1 PV restant ou 'attaque automatique').",
          "Option A — Sealine part : 5d6 dégâts à chaque PJ, Volonté DD 24 ou inconscience.",
          "Option B — Sealine retient : aucun dégât, mais malus moral durable (-2 à toutes les actions du dernier épilogue).",
          "Option C — Sacrifice d'un PJ : Volonté DD 22 pour rester conscient, Vigueur DD 20 ou mort. Si survie : -1 niveau permanent OU -2 Constitution permanente.",
        ],
        indices: [
          "Sealine est SINCÈRE. Elle ne ment pas et ne manipule pas. Ses trois options sont équivalentes pour elle.",
          "Chaque option laisse une trace narrative dans l'épilogue (Scène 4) : la ville se reconstruit différemment, les PNJ alliés réagissent différemment.",
          "L'allié spectral du Thane, s'il est présent, peut s'offrir comme alternative à un sacrifice de PJ (option D bonus).",
        ],
        recompenses:
          "Le vortex se referme. Le dôme tombe. Selon l'option : santé des PJ, dignité de Sealine, ou héroïsme classique.",
      },
      transitions: {
        success: "Explosion blanche. Silence.",
      },
    },
    {
      title: "Scène 4 : L'Aube Grise",
      type: "Épilogue",
      image: "./images/scenes/epilogue_fin.jpg",
      locationId: "ruines_tour",
      npcIds: ["mara_dirigeante", "thorgar_pretre_nain", "durnik_chef_mineur"],
      description: {
        resume:
          "Épilogue. Thade est vaincu. La Spirale est close. Valombre commence à se reconstruire. Conséquences variables selon les choix.",
        visuel:
          "Vous vous réveillez sur les décombres de la Tour, qui s'est effondrée sur elle-même. Le ciel est dégagé : un vrai ciel, pas violet. Le soleil se lève. Mara, Thorgar et Durnik vous trouvent — vivants, fatigués, marqués. Autour, les survivants sortent des caves et des refuges, hébétés.",
        audio:
          "Oiseaux. Cloche d'un Temple lointain qui sonne pour la première fois depuis des semaines. Une vieille femme qui pleure, doucement.",
        odeur: "Matin frais. Pierre humide. Café préparé par quelqu'un, quelque part — la vie reprend.",
        lumiere: "Dorée, oblique, neuve.",
      },
      narration: {
        declencheur: "Réveil après l'effondrement.",
        texte_a_lire:
          "C'est fini. Le dôme est parti. La Spirale est close — pour combien de temps, personne ne le sait. Valombre est en ruine, mais libre. Mara s'avance, le visage marqué de cendres et d'espoir mêlés : « Il y a tant à reconstruire. Et il faudra raconter ce qui s'est passé. La vraie version. Sinon les prochains Thade nous trouveront sans défense. »\n\nThorgar pose la main sur l'épaule du PJ qui a le plus changé : « Tu portes encore une marque de la Spirale. Elle ne partira pas. Vis avec, ou apprends-en. C'est ton choix maintenant. »\n\nDurnik, plus pragmatique, sort une bouteille : « On vous appelle 'Les Gardiens du Vide' dans la rue. Buvez avec moi. Demain, on creuse les fondations. »",
        contexte_mj:
          "Épilogue ouvert. Adapter selon les choix accumulés tout au long des 5 scénarios :\n• Si Mara a survécu : elle devient bourgmestre intérimaire.\n• Si Sniv a été épargné : il revient comme messager imprévu, vivant à présent dans les égouts publiquement.\n• Si Xareth a été allié : sa boutique apparaît mystérieusement dans une ruelle de Valombre quelques mois plus tard.\n• Si l'Allié spectral du Thane est resté avec les PJ : il prend congé en s'inclinant et retourne au Sanctuaire.\n• Si un PJ s'est sacrifié (Option C) : sa mémoire est gravée sur le nouveau Temple.\n• Le Cristal de Thade (Larme) : ses fragments deviennent des reliques. Un fragment subsiste, caché. Graine pour une suite éventuelle.",
        objectif: "Récolter les conséquences des choix de la campagne et clore l'histoire.",
      },
      mecaniques: {
        defis: [],
        indices: [
          "Thade est définitivement vaincu — son corps physique a été détruit dans le vortex.",
          "La Spirale demeure, scellée mais existante. Une lueur violette persiste très loin sous la mine.",
          "Un des PJ porte encore les motifs de la Spirale sous la peau (Sc.4 Acte 2 Scène 5). Cosmétique, mais permanent.",
          "Sealine, selon le choix : libre, sacrifiée, ou remplacée. Sa trace varie en conséquence.",
        ],
        recompenses:
          "Titre : 'Les Gardiens du Vide'. Récompenses majeures (or, terre, reconnaissance officielle). Passage final au niveau 11. Fin de la campagne — ou ouverture vers une suite.",
      },
      transitions: {
        success: "Crédits. Fin de la campagne 'L'Ombre de la Spirale'.",
      },
    },
  ],
};
