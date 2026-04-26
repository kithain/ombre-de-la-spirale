/**
 * Scénario 1 - Acte 4 : Le Rituel de la Spirale
 * Laboratoire secret du Manoir Van Kel
 */

export const acte4 = {
  title: "ACTE 4 : LE RITUEL DE LA SPIRALE",
  stake:
    "Mettre fin aux activités du laboratoire et récupérer les résultats des recherches.",
  location: "Laboratoire secret du Manoir Van Kel.",
  scenes: [
    {
      title: "Scène 1 : L'Éveil Forcé",
      type: "Combat",
      image: "./images/scenes/manoir_hall.jpg",
      locationId: "manoir_hall",
      npcIds: ["ilse_nyx"],
      description: {
        resume:
          "Ilse tente de stabiliser une expérience nécromantique inachevée utilisant le corps de Jaren lorsque les PJ interviennent.",
        visuel:
          "Le hall luxueux est profané : un immense cercle de cendres et de sang séché entoure le corps de Jaren. Des fils d'énergie violacée relient le cadavre à des ancres d'argent plantées dans le sol.",
        audio:
          "Un bourdonnement grave qui fait vibrer les vitraux. Ilse hurle ses incantations pour couvrir le bruit de la magie qui s'emballe.",
        odeur: "Ozone (magie), fer (sang).",
        lumiere:
          "Des éclairs de magie noire qui illuminent par intermittence le grand escalier.",
      },
      narration: {
        declencheur: "Les PJ entrent dans le Hall.",
        texte_a_lire:
          "Ilse von Reiner lève les mains, ignorant les spasmes du cadavre à ses pieds. « Jaren n'était qu'un médiocre, un esprit faible qui s'est noyé dans ses propres peurs. Le Maître le savait, et je le savais aussi. Il n'était qu'un brouillon. Mais avec son sang et ma volonté, je vais enfin valider les théorie du Maître ! Admirez la naissance d'un dieu ! »",
        contexte_mj:
          "Ilse est pragmatique, elle considère Jaren comme une simple ressource magique. Elle traite la nécromancie comme une science exacte. Elle veut stabiliser Jaren pour prouver à Thade qu'elle est plus utile qu'un cadavre.",
        objectif: "Neutraliser Ilse avant qu'elle ne stabilise la créature.",
      },
      mecaniques: {
        defis: [
          "Combat : Ilse (Magicienne Niv 3) protégée par 2 Squelettes Instables (anciens serviteurs de Jaren qu'elle a asservis).",
          "Anomalie (DD 12) : À chaque tour, le rituel instable libère une onde. Quiconque est à découvert subit 1d4 dégâts de froid.",
        ],
        indices: [
          "Une note de Thade dans les poches d'Ilse : « Ilse, ne me décevez pas comme votre prédécesseur, ou ne revenez pas à l'Université. »",
        ],
        recompenses: "Bourse (40 po), Bague de protection +1, et les notes de recherche.",
      },
      transitions: {
        success:
          "Ilse s'écroule en maudissant l'incompétence de Jaren. Dans un dernier souffle magique, le cercle explose et le 'Sujet J-01' se lève, libéré de ses entraves.",
      },
    },
    {
      title: "Scène 2 : Le Sujet J-01",
      type: "Boss",
      image: "./images/scenes/jaren_le_maudit.jpg",
      locationId: "manoir_hall",
      npcIds: ["bleme_fp3"],
      description: {
        resume:
          "La dépouille réanimée de Jaren se libère du rituel et doit être détruite pour mettre fin à l'anomalie magique.",
        visuel:
          "Le corps de Jaren se redresse par saccades, comme une marionnette dont on tire brutalement les fils. La lueur qui s'échappe de ses orbites est blafarde, et sa peau se craquelle sous l'effet d'un froid surnaturel.",
        audio:
          "Le bruit sec des os qui se remettent en place et le sifflement de l'air qui s'échappe de ses poumons perforés. Aucun mot, juste un râle mécanique.",
        odeur: "Ozone et viande putride.",
      },
      narration: {
        declencheur: "la défaite d'Ilse.",
        texte_a_lire:
          "La chose qui fut Jaren ne hurle pas. Elle ne vous maudit pas. Elle avance simplement vers vous dans un silence terrifiant, chaque pas laissant une trace de givre sur le marbre du hall.",
        contexte_mj:
          "Jaren est incapable de reflechir son âme est en train d'être dévorée par le rituel incomplet.",
        objectif: "Détruire la dépouille de Jaren pour stopper l'anomalie.",
      },
      mecaniques: {
        defis: [
          "Aura de Froid : Toute personne au contact de Jaren subit des dégâts de froid au début de son tour (Jet de Réflexes DD 12 ou 1d4 dégâts).",
          "Éclats de glace : À 50% de ses PV, le corps de Jaren expulse des fragments d'os et de givre (Jet de Réflexes DD 13 ou 1d4 dégâts).",
        ],
        recompenses:
          "Bague de focalisation brisée, fragments d'une gemme d'âme (valeur 50 po).",
      },
      transitions: {
        success:
          "Le corps de Jaren s'effondre et se change instantanément en poussière givrée. Le silence revient dans le hall.",
      },
    },
    {
      title: "Scène 3 : Le Bilan du Maître",
      type: "Conclusion",
      image: "./images/scenes/thade_coren.jpg",
      locationId: "manoir_hall",
      npcIds: ["thade_coren"],
      description: {
        resume:
          "Thade Coren arrive pour évaluer les résultats et félicite les PJ pour leur travail, tout en dissimulant sa véritable implication.",
        visuel:
          "Thade examine les notes avec une satisfaction feinte. Il ne regarde pas les PJ directement.",
        audio:
          "Le silence du hall, seulement brisé par le crépitement des cendres qui se refroidissent.",
        odeur:
          "L'odeur âcre de la magie brute commence à s'estomper, remplacée par le parfum de la satisfaction.",
        lumiere: "La lueur violette des runes s'éteint progressivement.",
      },
      narration: {
        declencheur: "Arrivée de Thade.",
        texte_a_lire:
          "Thade se redresse lentement, un sourire énigmatique aux lèvres. « Excellent travail. Jaren était un échec, mais son sacrifice n'a pas été totalement inutile. Ses recherches sur la 'résonance planaire' ouvrent des perspectives fascinantes. Vous avez servi la ville avec discrétion et efficacité. Le Conseil vous en est reconnaissant. »\n\nIl vous tend une bourse. « Pour vos services. Et oubliez ce que vous avez vu ici. Les secrets de la magie ne sont pas faits pour les profanes. »",
        contexte_mj:
          "Thade récupère les notes cruciales et élimine les témoins gênants. Il donne aux PJ une prime généreuse pour s'assurer de leur silence et les remercier d'avoir 'nettoyé' l'affaire selon sa version des faits.",
        objectif: "Accepter la récompense et conclure le scénario.",
      },
      mecaniques: {
        defis: [
          "Bluff (DD 15) : Cacher la vérité sur la mort de Jaren et l'implication de Thade.",
          "Psychologie (DD 16) : Détecter que la satisfaction de Thade est feinte et cache une impatience sous-jacente.",
        ],
        indices: ["Les notes de Thade mentionnent des 'applications pratiques' de la résonance planaire."],
        recompenses:
          "500 po (groupe) + XP de scénario + Réputation +1 auprès du Conseil des Mages.",
      },
      transitions: {
        success:
          "Fin du Scénario 1. Les PJ sont récompensés mais ont vu une facette inquiétante du pouvoir de Thade.",
        fail:
          "Les PJ sont congédiés sans récompense et avec une mise en garde discrète de Thade.",
      },
    },
  ],
};
