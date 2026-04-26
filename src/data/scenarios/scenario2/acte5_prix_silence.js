/**
 * Scénario 2 - Acte 5 : Le Prix du Silence
 * Remontée vers la surface
 */

export const acte5 = {
  title: "ACTE 5 : LE PRIX DU SILENCE",
  stake:
    "Remonter à la surface avec le cristal et gérer les conséquences de l'intervention de Thade Coren.",
  location: "Remontée vers la surface.",
  scenes: [
    {
      title: "Scène 1 : La Trappe de l'Ascenseur",
      type: "Répit",
      image: "./images/scenes/grelm_cage_ascenseur.jpg",
      locationId: "mine_argent",
      npcIds: ["contremaitre_nain_mine"],
      description: {
        resume:
          "Regroupement des PJ près de l'ascenseur et constat d'une présence hostile dans les niveaux supérieurs.",
        visuel:
          "Le niveau -1 est plongé dans le noir. Grelm est prostré près du levier d'appel de la cage d'ascenseur.",
        audio:
          "Le silence est revenu, mais on entend des bruits de pas lourds dans les étages supérieurs.",
        odeur: "Huile de lanterne et sueur froide.",
        lumiere: "Une seule lanterne posée au sol.",
      },
      narration: {
        declencheur: "Retour au point de jonction de l'ascenseur.",
        texte_a_lire:
          "Vous émergez des profondeurs. Le chant a cessé, mais l'ambiance est plus lourde qu'à votre départ. Grelm vous attend, livide. Il murmure : 'Des hommes sont descendus. Ils ne ressemblaient pas à des mineurs. Ils ont pris le contrôle de la salle des machines au-dessus.'",
        contexte_mj:
          "Grelm a peur. Les mercenaires de Thade ont été envoyés pour s'assurer que personne ne remonte avec des questions ou le cristal.",
        objectif: "Préparer la remontée.",
      },
      mecaniques: {
        defis: [
          "Sens de la Magie (DD 12) : Sentir que le cristal de Thade émet une chaleur intense, presque radioactive.",
          "Diplomatie (DD 10) : Convaincre Grelm de vous aider à débloquer l'ascenseur.",
        ],
        indices: ["Des câbles de communication ont été sectionnés."],
        recompenses: "Information sur la position des mercenaires.",
      },
      transitions: {
        success: "Le groupe active l'ascenseur en restant discret.",
        fail: "L'ascenseur grince bruyamment, alertant l'étage supérieur.",
      },
    },
    {
      title: "Scène 2 : Les Agents de Nettoyage",
      type: "Combat",
      image: "./images/scenes/mercenaires_thade.jpg",
      locationId: "mine_argent",
      npcIds: [],
      description: {
        resume:
          "Confrontation avec des mercenaires envoyés pour récupérer le cristal et éliminer les témoins.",
        visuel:
          "Trois hommes en cuir sombre barrent l'accès à la sortie. Ils portent des arbalètes chargées.",
        audio: "Le cliquetis des mécanismes de tir.",
        odeur: "Métal froid.",
        lumiere: "Lumière grise venant du puits de jour.",
      },
      narration: {
        declencheur: "Arrivée à la plateforme intermédiaire.",
        texte_a_lire:
          "La cage d'ascenseur s'arrête. Un homme masqué s'avance sur la passerelle. 'Donnez-nous l'artefact et on vous laisse une chance de fuir par les tunnels de service.' Son ton est plat, professionnel. Il n'est pas là pour discuter, mais pour récupérer la batterie de son maître.",
        contexte_mj:
          "Ce sont des professionnels, pas des brutes. Ils visent les mains ou les jambes pour immobiliser, sauf si les PJ ripostent mortellement.",
        objectif: "Passer de force ou par la ruse.",
      },
      mecaniques: {
        defis: [
          "Combat : 3 Mercenaires (Stats de Roublards/Guerriers niv 4).",
          "Intimidation (DD 18) : Les faire douter de leur contrat.",
        ],
        indices: ["Ils portent le blason de la famille Coren dissimulé sous leurs manteaux."],
        recompenses: "Leurs ordres écrits : 'Récupérer le cristal, condamner le puits.'",
      },
      transitions: {
        success: "Accès au dernier niveau avant la surface.",
        fail: "Le combat s'éternise alors que des bruits d'explosions retentissent.",
      },
    },
    {
      title: "Scène 3 : La Mine s'écroule",
      type: "Action / Catastrophe",
      image: "./images/scenes/effondrement_mine.jpg",
      locationId: "mine_argent",
      npcIds: [],
      description: {
        resume:
          "Effondrement contrôlé de la mine déclenché pour sceller définitivement la zone inférieure.",
        visuel:
          "La poussière tombe du plafond. Des charges de poudre noire explosent sur les piliers de soutien.",
        audio: "Un grondement qui couvre tous les cris.",
        odeur: "Soufre et roche broyée.",
        lumiere: "La lumière du jour vacille à travers les décombres.",
      },
      narration: {
        declencheur: "Mort du chef mercenaire ou tentative de fuite.",
        texte_a_lire:
          "Thade n'a pas seulement envoyé des hommes, il a piégé la mine. Des détonations sourdes font trembler les murs. Il veut enterrer la brèche, le cristal et vous avec. Les piliers cèdent les uns après les autres. Le puits principal est votre seule chance.",
        contexte_mj: "C'est une épreuve de vitesse pure. La mine devient un piège mortel.",
        objectif: "Sortir avant d'être enterré vivant.",
      },
      mecaniques: {
        defis: [
          "Réflexes (DD 15) : Éviter les chutes de pierres (2d6 dégâts).",
          "Athlétisme (DD 14) : Grimper les dernières échelles alors que l'ascenseur lâche.",
        ],
        indices: ["La sortie est presque obstruée par la poussière."],
        recompenses: "Survie.",
      },
      transitions: {
        success: "Les PJ jaillissent à l'air libre, couverts de poussière.",
        fail: "Les PJ sortent blessés et perdent une partie de leur inventaire.",
      },
    },
    {
      title: "Scène 4 : La Place du Conseil",
      type: "Social / Confrontation",
      image: "./images/scenes/confrontation_surface.jpg",
      locationId: "quartier_des_mineurs_place",
      npcIds: ["durnik_chef_mineur", "thade_coren"],
      description: {
        resume:
          "Affrontement verbal entre les PJ, Thade Coren et les représentants des mineurs concernant la responsabilité des événements.",
        visuel:
          "Une foule de mineurs et de gardes de la ville entourent le puits fumant. Thade est là, l'air faussement accablé.",
        audio: "Le brouhaha d'une foule en colère et inquiète.",
        odeur: "L'air frais de la surface, mêlé à la fumée.",
        lumiere: "Le soleil couchant, rouge et bas.",
      },
      narration: {
        declencheur: "Sortie du puits devant la foule.",
        texte_a_lire:
          "La poussière retombe. Thade est là, entouré de gardes. Il tend simplement la main, le visage fermé. « Le dispositif. Donnez-le moi. C'est une propriété de l'Université, et vu les dégâts que vous avez causés, c'est la seule chose qui vous évitera la prison. »",
        contexte_mj:
          "Thade joue la comédie devant les témoins. Si les PJ l'accusent sans preuves (ordres écrits), il les fera passer pour des traumatisés délirants. Durnik observe la scène, prêt à intervenir.",
        objectif: "Révéler la vérité ou négocier sa survie.",
      },
      mecaniques: {
        defis: [
          "Bluff (DD 15) : Cacher le fait que le cristal est chargé.",
          "Diplomatie (DD 17) : Convaincre Durnik et la foule que Thade a provoqué l'explosion.",
        ],
        indices: ["Thade a les mains qui tremblent légèrement : il a peur que vous parliez."],
        recompenses: "Soutien des mineurs (Réputation +2).",
      },
      transitions: {
        success: "Thade est forcé de battre en retraite, discrédité.",
        fail: "Thade récupère le cristal et les PJ passent pour des parias.",
      },
    },
    {
      title: "Scène 5 : Lendemain d'Explosion",
      type: "Épilogue",
      image: "./images/scenes/epilogue_mine.jpg",
      locationId: "quartier_des_mineurs_place",
      npcIds: [],
      description: {
        resume:
          "Clôture de l'affaire de la mine et mise en place des conséquences à moyen terme pour les PJ et la ville.",
        visuel:
          "Le puits de la mine est un tas de gravats. Les mineurs se dispersent en silence.",
        audio: "Le sifflement du vent dans les structures abandonnées.",
        odeur: "Poussière et défaite.",
        lumiere: "La nuit tombe sur Valombre.",
      },
      narration: {
        declencheur: "Départ de la place.",
        texte_a_lire:
          "La mine d'argent est fermée pour de bon. Thade est parti, mais son ombre plane toujours sur l'Université. Vous avez empêché le chant de rendre la ville folle, mais à quel prix ? Le cristal, s'il est toujours en votre possession, pulse doucement dans le noir. Ce n'était que le début.",
        contexte_mj:
          "La mine est scellée, mais la Spirale n'est pas détruite. Thade a besoin de cette énergie pour une étape ultérieure. Les PJ sont maintenant des cibles ou des alliés dangereux.",
        objectif: "Bilan des gains et préparation de la suite.",
      },
      mecaniques: {
        defis: [],
        indices: ["Le cristal semble attirer d'autres énergies planaires."],
        recompenses: "Gain de niveau (Passage au niveau 5 ou 6).",
      },
      transitions: {
        success: "Fin du Scénario 2. Vers le Scénario 3.",
        fail: "Fin du Scénario 2. Vers le Scénario 3.",
      },
    },
  ],
};
