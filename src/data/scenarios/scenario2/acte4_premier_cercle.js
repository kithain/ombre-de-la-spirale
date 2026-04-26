/**
 * Scénario 2 - Acte 4 : Le Premier Cercle
 * La Spirale (Périphérie)
 */

export const acte4 = {
  title: "ACTE 4 : LE PREMIER CERCLE",
  stake:
    "Extraire une charge d'énergie exploitable depuis la Spirale et quitter la zone avant la fermeture des protocoles de confinement.",
  location: "La Spirale (Périphérie).",
  scenes: [
    {
      title: "Scène 1 : La Géométrie Changeante",
      type: "Mécanique",
      image: "./images/scenes/architecture_vivante.jpg",
      locationId: "spirale_premier_cercle",
      npcIds: [],
      description: {
        resume:
          "Progression dans une structure instable où l'architecture se modifie continuellement.",
        visuel:
          "Des couloirs de métal gris et de pierre polie. Les angles ne semblent pas droits. Derrière vous, les portes s'effacent pour devenir des murs lisses.",
        audio:
          "Un grondement sourd, comme des plaques de métal qui glissent les unes sur les autres.",
        odeur: "Air froid, sec, sans aucune particule.",
        lumiere: "Une lueur bleutée provient des jointures entre les murs.",
      },
      narration: {
        declencheur: "Début de la progression dans la Spirale.",
        texte_a_lire:
          "Ce n'est pas un donjon classique. Les couloirs se réorganisent selon une logique qui vous échappe. Si vous quittez une salle des yeux, elle n'est plus la même quand vous vous retournez. La seule chose stable est la vibration de plus en plus forte du cristal de Thade, qui semble pointé vers le centre comme une boussole.",
        contexte_mj:
          "La prison change de configuration pour désorienter les prisonniers. Règle MJ : Le retour en arrière est impossible. Chaque porte franchie est définitive.",
        objectif: "Ne pas perdre le nord magique.",
      },
      mecaniques: {
        defis: ["Intelligence (DD 14) : Comprendre que la structure suit le mouvement du cristal."],
        indices: ["Le sol vibre différemment à mesure qu'on approche du centre."],
        recompenses: "null",
      },
      transitions: {
        success: "Le groupe arrive à la zone d'extraction.",
        fail:
          "Errance : le groupe arrive fatigué (malus de -2 en Initiative pour la scène suivante).",
      },
    },
    {
      title: "Scène 2 : Les Forçats de Pierre",
      type: "Combat",
      image: "./images/scenes/goules_mineurs.jpg",
      locationId: "spirale_premier_cercle",
      npcIds: [
        "elementaire_terre_petit",
        "elementaire_terre_petit",
        "elementaire_terre_petit",
        "elementaire_terre_petit",
      ],
      description: {
        resume:
          "Combat contre des entités animées issues d'anciens prisonniers ou intrus absorbés par la Spirale.",
        visuel:
          "Des corps de nains, momifiés par l'air sec, sont incrustés dans les murs ou le plafond. Certains s'agitent mécaniquement.",
        audio: "Le bruit sec d'os qui s'entrechoquent.",
        odeur: "Poussière et cuir séché.",
        lumiere: "Lumière violette s'échappant de leurs bouches ouvertes.",
      },
      narration: {
        declencheur: "Entrée dans une grande salle de stockage.",
        texte_a_lire:
          "Vous trouvez des mineurs, mais pas ceux de votre époque. Ces cadavres portent des outils vieux de plusieurs siècles.",
        contexte_mj:
          "Ce sont des 'coquilles' vides. Ils n'ont aucune volonté propre, ils sont des extensions du système de défense.",
        objectif: "Éliminer les obstacles physiques.",
      },
      mecaniques: {
        defis: [
          "Combat : 4 Marionnettes de la Spirale (Stats de Zombies, mais vitesse normale).",
          "Savoir (Plans) (DD 13) : Comprendre qu'ils sont alimentés par la Géode proche.",
        ],
        indices: ["Une lumière violette relie les créatures au couloir suivant."],
        recompenses: "Une clé naine ancienne (objet de collection, 100 po).",
      },
      transitions: {
        success: "Accès au cœur de la prison.",
        fail: "Le combat s'éternise, les PJ perdent des ressources (potions/sorts).",
      },
    },
    {
      title: "Scène 3 : La Géode de Confinement",
      type: "Objectif",
      image: "./images/scenes/geode_chantante.jpg",
      locationId: "spirale_coeur_geode",
      npcIds: [
        "geode_avatar",
        "elementaire_terre_petit",
        "elementaire_terre_petit",
        "zombie_humain",
        "zombie_humain",
      ],
      description: {
        resume:
          "Extraction d'énergie depuis la géode centrale afin de saturer le cristal de Thade.",
        visuel:
          "Un cristal titanesque, haut de dix mètres, suspendu au-dessus d'un gouffre. Des éclairs violets frappent les parois régulièrement.",
        audio: "Un bourdonnement si grave qu'il fait vibrer la cage thoracique.",
        odeur: "Ozone saturé (piquant le nez).",
        lumiere: "Flashs violets aveuglants.",
      },
      narration: {
        declencheur: "Arrivée dans la salle centrale.",
        texte_a_lire:
          "C'est ici. La source de tout. Un cristal massif qui semble pomper l'énergie du vide pour maintenir la prison. Votre cristal de Thade devient presque blanc de chaleur. Pour calmer la mine en haut, il faut vous approcher assez près pour charger votre cristal avec l'énergie de la géode. Mais attention : plus vous vous approchez, plus le rayonnement est dangereux. C'est comme un réacteur nucléaire - il faut trouver la bonne distance pour charger rapidement sans mourir.",
        contexte_mj:
          "La Géode est un réacteur énergétique statique. Les PJ doivent gérer leur distance pour charger le cristal tout en survivant aux dégâts de rayonnement. Pas de combat direct, c'est un défi d'endurance et de positionnement.",
        objectif:
          "Charger le cristal de Thade au maximum (10 charges) tout en survivant au rayonnement.",
      },
      mecaniques: {
        defis: [
          "PRESSION ENNEMIE : Vagues de créatures attirées par l'énergie\n• Rounds 1-3 : 2 Élémentaires Terre (Petit) - FP 1 chacun\n• Rounds 4-6 : 2 Zombies humains - FP 0.5 chacun\n• Apparition des parois pour interrompre le chargement\n• Les créatures apparaissent chaque début de round\n• Objectif : distraire les PJ pendant la charge\n\n",
          "RAYONNEMENT : Dégâts d'énergie par round selon distance\n• Zone critique (0-9m) : 2d6 dégâts (Vig DD 14 pour demi)\n• Zone modérée (9-18m) : 1d6 dégâts (Vig DD 14 pour demi)\n• Zone sécurisée (18m+) : 0 dégât (hors de portée)\n• Surchauffe : +1d6 tous les 3 rounds cumulatifs\n• Le rayonnement affecte toutes les créatures dans la zone\n\n",
          "RECHARGE : Taux de charge du cristal selon distance\n• Zone critique (0-9m) : 1 charge/round (10 rounds = objectif)\n• Zone modérée (9-18m) : 0.5 charge/round (20 rounds = objectif)\n• Zone sécurisée (18m+) : 0 charge (trop loin)\n• La charge s'accumule dans le cristal de Thade\n• Objectif final : 10 charges pour saturer le cristal\n\n",
          "MAINTIEN : Action requise chaque round\n• Utilisation d'objet DD 16 pour maintenir la connexion\n• Succès : charge selon zone de distance\n• Échec critique (1-5) : pas de charge + projection 2d6 dégâts\n• Échec normal (6-15) : pas de charge cette round\n• Un seul PJ peut charger à la fois\n• L'action de charge occupe toute la round\n\n",
        ],
        indices: [
          "Le cristal de Thade pulse plus fort quand il se charge.",
          "L'air vibre plus intensément près de la géode.",
          "Les éclairs violets deviennent plus fréquents avec la surchauffe.",
        ],
        recompenses: "Le Cristal de Thade est 'Saturé' (10 charges).",
      },
      transitions: {
        success: "L'énergie est absorbée. La lumière baisse. Le calme revient.",
        fail: "La géode explose partiellement : les PJ sont projetés (2d6 dégâts).",
      },
    },
    {
      title: "Scène 4 : Le Protocole de Purge",
      type: "Fuite",
      image: "./images/scenes/cube_nettoyeur.jpg",
      locationId: "spirale_premier_cercle",
      npcIds: ["cube_gelatineux"],
      description: {
        resume:
          "Fuite des PJ face à un système de maintenance automatique déclenché après l'extraction énergétique.",
        visuel:
          "Une masse translucide et visqueuse remplit tout le couloir derrière vous, dissolvant le métal et la pierre sur son passage.",
        audio: "Un sifflement acide et une succion lourde.",
        odeur: "Vinaigre et produits chimiques.",
        lumiere: "La masse émet une faible lueur verdâtre.",
      },
      narration: {
        declencheur: "Début du retour après l'objectif.",
        texte_a_lire:
          "Le drainage de l'énergie a déclenché une alerte. La prison tente de se 'nettoyer'. Une masse de maintenance arrive pour dissoudre tout ce qui ne devrait pas être ici : vous y compris. Il n'y a pas de discussion possible avec cette chose. Courez.",
        contexte_mj:
          "C'est une course-poursuite. Si la masse rattrape un PJ, il subit des dégâts d'acide massifs.",
        objectif: "Atteindre la sortie avant d'être rattrapé.",
      },
      mecaniques: {
        defis: [
          "Course (Skill Challenge) : 3 succès avant 3 échecs (Athlétisme, Acrobaties, Perception).",
          "Dégâts d'environnement : Les débris qui tombent.",
        ],
        indices: ["La masse ralentit quand elle doit dissoudre des obstacles plus gros."],
        recompenses: "Survie.",
      },
      transitions: { success: "Le groupe voit la fissure de sortie.", fail: "Un PJ est blessé ou mort." },
    },
    {
      title: "Scène 5 : L'Expulsion",
      type: "Épilogue",
      image: "./images/scenes/breche_spirale.jpg",
      locationId: "spirale_premier_cercle",
      npcIds: [],
      description: {
        resume:
          "Retour des PJ dans la mine et fermeture progressive de la faille planaire.",
        visuel:
          "La faille violette vers la mine. De l'autre côté, la pierre grise familière et la poussière.",
        audio: "Le silence soudain après le chaos.",
        odeur: "L'odeur de la terre et de l'humidité de la mine.",
        lumiere: "La lumière faible des lanternes restées de l'autre côté.",
      },
      narration: {
        declencheur: "Traversée de la fissure dans le sens inverse.",
        texte_a_lire:
          "Vous plongez à travers la déchirure. La sensation d'apesanteur s'arrête net. Vous vous écrasez sur le sol dur du niveau -8. Derrière vous, la faille se rétracte et devient une simple ligne sombre sur le mur. Le calme est revenu dans la mine. Le cristal de Thade brille maintenant d'une lueur constante, froide et terrifiante.",
        contexte_mj:
          "Les PJ ont réussi. Ils sont de nouveau dans la réalité physique. La menace immédiate est passée, mais ils portent maintenant une source d'énergie instable.",
        objectif: "Reprendre ses esprits.",
      },
      mecaniques: {
        defis: ["Vigueur (DD 12) : Ne pas s'évanouir sous le choc thermique."],
        indices: ["Le cristal de Thade pèse beaucoup plus lourd qu'avant."],
        recompenses: "Fin de l'Acte 4. Gain d'XP.",
      },
      transitions: { success: "Vers l'Acte 5 : La Remontée.", fail: "Vers l'Acte 5, mais avec un PJ inconscient." },
    },
  ],
};
