/**
 * Scénario 2 - Acte 1 : La Fraternité de Nyx
 * Auberge & Bas Quartiers
 */

export const acte1 = {
  title: "ACTE 1 : LA FRATERNITÉ DE NYX",
  stake:
    "Enquêter sur la société secrète mentionnée par Thade et infiltrer leur rituel.",
  location: "Auberge & Bas Quartiers.",
  scenes: [
    {
      title: "Scène 1 : Le Repas Silencieux",
      type: "Social",
      image: "./images/scenes/diner_thade.jpg",
      locationId: "auberge_pic_brise",
      npcIds: ["thade_coren"],
      description: {
        resume:
          "Dîner avec Thade Coren qui met les PJ sur la piste d'une société secrète.",
        visuel:
          "Une salle privée d'un restaurant huppé. Thade mange avec une précision chirurgicale. L'ambiance est feutrée mais tendue.",
        audio: "Le tintement de l'argenterie sur la porcelaine. Thade parle bas.",
        odeur: "Vin épicé et rôti de gibier.",
        lumiere: "Bougies parfumées.",
      },
      narration: {
        declencheur: "Invitation de Thade après le Scénario 1.",
        texte_a_lire:
          "Thade essuie ses lèvres. « Jaren n'était qu'un symptôme. Il existe une... organisation. La Fraternité de Nyx. Ils recrutent parmi les déçus, les ambitieux. J'ai cru comprendre qu'une de leurs cellules se réunit ce soir. Une certaine 'Ursula' serait impliquée. Je ne peux pas intervenir officiellement sans preuves. Mais vous... vous avez déjà prouvé votre discrétion. »",
        contexte_mj:
          "Thade manipule les PJ pour qu'ils éliminent une cellule rivale ou gênante, tout en testant leur loyauté.",
        objectif: "Obtenir les informations sur le lieu de rendez-vous.",
      },
      mecaniques: {
        defis: [
          "Psychologie (DD 15) : Sentir que Thade en sait plus qu'il ne le dit sur Ursula.",
          "Diplomatie (DD 12) : Obtenir des détails sur les signes de reconnaissance (Lanternes Noires).",
        ],
        indices: ["Lieu : 'Suivez les lanternes noires dans les bas quartiers.'"],
        recompenses: "Avance de 50 po.",
      },
      transitions: {
        success: "Les PJ partent pour les bas quartiers.",
        fail:
          "Thade leur donne l'info avec mépris : 'Je pensais que vous étiez plus perspicaces.'",
      },
    },
    {
      title: "Scène 2 : Le Salon des Lanternes Noires",
      type: "Investigation",
      image: "./images/scenes/bas_quartiers_nuit.jpg",
      locationId: "bas_quartiers",
      npcIds: ["citoyen_suspect"],
      description: {
        resume: "Enquête dans les ruelles pour localiser le lieu exact du rituel.",
        visuel:
          "Des ruelles sombres, brumeuses. Des lanternes peintes en noir émettent une lueur violette à peine visible.",
        audio: "Bruits de pas furtifs, chuchotements derrière les volets.",
        odeur: "Charbon et humidité.",
        lumiere: "Très faible, ombres longues.",
      },
      narration: {
        declencheur: "Arrivée dans la zone indiquée.",
        texte_a_lire:
          "Les bas quartiers semblent déserts. Pourtant, vous sentez des regards. Sur certaines portes, des lanternes ont été grossièrement peintes en noir. C'est un jeu de piste macabre.",
        contexte_mj:
          "Les cultistes utilisent un code visuel pour se guider. Les PJ doivent le décrypter.",
        objectif: "Trouver la cave où se tient la réunion.",
      },
      mecaniques: {
        defis: [
          "Investigation (DD 14) : Suivre le motif des lanternes noires.",
          "Discrétion (DD 13) : Ne pas alerter les guetteurs.",
          "Intimidation (DD 15) : Faire parler un passant effrayé.",
        ],
        indices: ["Les lanternes convergent vers une ancienne tannerie abandonnée."],
        recompenses: "Effet de surprise pour la scène suivante.",
      },
      transitions: {
        success: "Les PJ trouvent l'entrée secrète.",
        fail: "Les PJ trouvent l'entrée mais tombent dans une embuscade (2 gardes).",
      },
    },
    {
      title: "Scène 3 : Le Rituel Interrompu",
      type: "Combat",
      image: "./images/scenes/rituel_nyx.jpg",
      locationId: "tannerie_abandonnee",
      npcIds: ["ursula_cultiste", "cultiste_nyx", "cultiste_nyx"],
      description: {
        resume:
          "Intervention pendant une messe noire. Combat contre Ursula et ses adeptes.",
        visuel:
          "Une cave voutée. Des cultistes en robes sombres entourent un autel improvisé. Ursula, une femme aux cheveux blancs, lève une dague sacrificielle.",
        audio: "Chants discordants en langue abyssale.",
        odeur: "Encens lourd et sang.",
        lumiere: "Lueur rougeoyante de l'autel.",
      },
      narration: {
        declencheur: "Les PJ entrent dans la cave.",
        texte_a_lire:
          "Ursula se fige. « Les chiens de garde de l'Université ! Frères, ne les laissez pas souiller ce lieu sacré ! Nyx, guide nos lames ! »",
        contexte_mj:
          "Ursula est une fanatique. Elle préfère mourir que de se rendre. Le rituel visait à contacter une entité, mais il échoue à cause de l'interruption.",
        objectif: "Vaincre Ursula et sécuriser les preuves.",
      },
      mecaniques: {
        defis: [
          "Combat : Ursula (Prêtresse niv 3) + 4 Cultistes.",
          "Mysticisme (DD 14) : Reconnaître que le rituel n'est pas nécromantique, mais dimensionnel (lien avec la Spirale).",
        ],
        indices: ["Documents mentionnant une 'Attaque Prévue' sur un point stratégique de la ville."],
        recompenses: "Dague rituelle, documents codés, XP.",
      },
      transitions: { success: "Les PJ récupèrent les preuves et retournent voir Thade." },
    },
    {
      title: "Scène 4 : Le Rapport de Thade",
      type: "Conclusion",
      image: "./images/scenes/rapport_thade.jpg",
      locationId: "bureau_thade_coren",
      npcIds: ["thade_coren"],
      description: {
        resume:
          "Thade analyse les documents trouvés et prépare son discours pour le Conseil.",
        visuel: "Thade lit les documents avec avidité. Il sourit.",
        audio: "Le feu qui crépite.",
        odeur: "Papier vieux.",
        lumiere: "Chaude et rassurante.",
      },
      narration: {
        declencheur: "Retour au bureau de Thade.",
        texte_a_lire:
          "« Ursula... Une perte tragique, mais nécessaire. Ces documents... Regardez. Ils planifiaient une attaque massive. Grâce à vous, nous avons une preuve. La Fraternité de Nyx est une menace existentielle pour Valombre. Demain, je présenterai ceci au Conseil. Préparez-vous à témoigner. »",
        contexte_mj:
          "Thade utilise la menace réelle (mais exagérée par lui) de Nyx pour consolider son pouvoir.",
        objectif: "Accepter de soutenir Thade devant le Conseil.",
      },
      mecaniques: {
        defis: ["Psychologie (DD 16) : Thade semble presque trop content de cette menace."],
        indices: ["Thade mentionne 'La Spirale' pour la première fois comme un phénomène lié à ces cultistes."],
        recompenses: "Accès à l'Acte 2.",
      },
      transitions: { success: "Fin de l'Acte 1." },
    },
  ],
};
