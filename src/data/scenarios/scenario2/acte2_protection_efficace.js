/**
 * Scénario 2 - Acte 2 : La Protection Efficace
 * Hôtel de Ville & Rues de Valombre
 */

export const acte2 = {
  title: "ACTE 2 : LA PROTECTION EFFICACE",
  stake:
    "Convaincre le Conseil du danger et repousser l'attaque de la Fraternité de Nyx.",
  location: "Hôtel de Ville & Rues de Valombre.",
  scenes: [
    {
      title: "Scène 1 : Le Conseil de Crise",
      type: "Social",
      image: "./images/scenes/conseil_ville.jpg",
      locationId: "hotel_de_ville_conseil",
      npcIds: ["bourgmestre_valombre", "thade_coren", "thorgar_pretre_nain"],
      description: {
        resume:
          "Thade demande aux PJ de témoigner devant le Conseil concernant la menace de Nyx.",
        visuel:
          "La grande table du Conseil. Le Bourgmestre, sceptique. Thade, grave. Thorgar, méfiant.",
        audio: "Murmures, grattements de plumes.",
        odeur: "Cire et vieux bois.",
        lumiere: "Soleil matinal à travers les hautes fenêtres.",
      },
      narration: {
        declencheur: "Début de la séance.",
        texte_a_lire:
          "Thade se lève. « Messieurs, la ville est infestée. Ces braves aventuriers ont démantelé une cellule hier soir. Dites-leur ce que vous avez vu. Dites-leur ce qu'Ursula préparait. » Tous les regards se tournent vers vous.",
        contexte_mj:
          "Les PJ doivent convaincre le Conseil que la menace est réelle et imminente.",
        objectif:
          "Réussir le test de Persuasion pour valider les mesures de sécurité de Thade.",
      },
      mecaniques: {
        defis: [
          "Diplomatie (DD 14) : Décrire la scène du rituel avec conviction.",
          "Intimidation (DD 16) : Faire peur aux conseillers hésitants.",
        ],
        indices: ["Thorgar vote contre, se méfiant de Thade, mais est mis en minorité."],
        recompenses:
          "Le Conseil vote les pleins pouvoirs temporaires à Thade pour la sécurité magique.",
      },
      transitions: {
        success: "L'alerte est donnée juste avant l'attaque.",
        fail:
          "Le Conseil hésite, l'attaque surviendra avec un effet de surprise (malus au prochain combat).",
      },
    },
    {
      title: "Scène 2 : L’Attaque Prévue",
      type: "Combat",
      image: "./images/scenes/attaque_banque.jpg",
      locationId: "place_marche",
      npcIds: ["cultiste_nyx_elite", "ombre_zombie"],
      description: {
        resume:
          "Une cellule de Nyx frappe un point stratégique (la Banque ou les Archives). Les PJ interviennent.",
        visuel:
          "Explosion magique sur la place. Des ombres s'animent et attaquent les passants. Des cultistes encagoulés sortent de la foule.",
        audio: "Cris de panique, détonations.",
        odeur: "Poudre noire et magie corrompue.",
        lumiere: "Fumée noire et éclairs violets.",
      },
      narration: {
        declencheur: "L'alarme retentit.",
        texte_a_lire:
          "« C'est exactement comme Thade l'avait prédit ! » hurle un garde. Les cultistes de Nyx surgissent, invoquant des ombres pour semer le chaos. Vous êtes les seuls à pouvoir les arrêter rapidement.",
        contexte_mj:
          "L'attaque est réelle, mais Thade l'a laissée se produire pour prouver qu'il avait raison. Les PJ doivent limiter les dégâts.",
        objectif: "Repousser l'assaut et sauver les civils.",
      },
      mecaniques: {
        defis: [
          "Combat : 2 Cultistes d'élite (Magiciens niv 2) + 3 Ombres Zombies.",
          "Sauvetage : Empêcher les civils d'être tués (compteur de tours).",
        ],
        indices: ["L'un des cultistes porte une carte avec l'itinéraire des patrouilles (fournie par qui ?)."],
        recompenses: "Gratitude publique.",
      },
      transitions: {
        success: "La menace est contenue.",
        fail:
          "Lourdes pertes civiles, Thade utilise cela pour justifier des mesures encore plus drastiques.",
      },
    },
    {
      title: "Scène 3 : Les Contre-Mesures",
      type: "Ambiance",
      image: "./images/scenes/couvre_feu.jpg",
      locationId: "rues_valombre",
      npcIds: ["garde_ville"],
      description: {
        resume: "Mise en place de l'état d'urgence : couvre-feu, arrestations.",
        visuel:
          "Des affiches 'COUVRE-FEU' sont placardées. La milice patrouille. Des citoyens sont arrêtés arbitrairement.",
        audio: "Bottes qui marchent au pas. Portes enfoncées.",
        odeur: "Peur et soumission.",
        lumiere: "Crépuscule sinistre.",
      },
      narration: {
        declencheur: "Soir de l'attaque.",
        texte_a_lire:
          "La ville a changé de visage. La peur règne. Thade a obtenu ce qu'il voulait : le contrôle. Les gens murmurent que Nyx est partout. On arrête les 'suspects' - souvent des pauvres ou des étrangers.",
        contexte_mj:
          "Montrer le glissement autoritaire. Les PJ peuvent se sentir coupables d'avoir aidé à cela.",
        objectif: "Observer les conséquences.",
      },
      mecaniques: {
        defis: [],
        indices: ["Certains arrêtés n'ont aucun lien avec Nyx, mais sont des opposants politiques."],
        recompenses: "Aucune.",
      },
      transitions: { success: "Transition vers la scène suivante." },
    },
    {
      title: "Scène 4 : La Spirale Mentionnée",
      type: "Révélation",
      image: "./images/scenes/conference_spirale.jpg",
      locationId: "bureau_thade_coren",
      npcIds: ["thade_coren"],
      description: {
        resume: "Thade révèle l'existence de la Spirale comme source du pouvoir de Nyx.",
        visuel:
          "Thade montre un cristal qui pulse bizarrement. Il a l'air inquiet (comédie).",
        audio: "Le bourdonnement du cristal.",
        odeur: "Ozone.",
        lumiere: "Lueur violette du cristal.",
      },
      narration: {
        declencheur: "Convocation par Thade.",
        texte_a_lire:
          "« L'attaque d'aujourd'hui n'était qu'une diversion. Le vrai danger est souterrain. Il y a une... anomalie énergétique sous la mine. Ils l'appellent la Spirale. C'est de là qu'ils tirent leur magie noire. Nous devons la contenir avant qu'elle ne dévore la ville. »",
        contexte_mj:
          "Thade introduit le concept de la Spirale pour envoyer les PJ en mission suicide/récupération.",
        objectif: "Accepter la mission de confinement.",
      },
      mecaniques: {
        defis: [
          "Savoir Arcanique (DD 18) : Le terme 'Spirale' est lié à des légendes interdites de prison dimensionnelle.",
        ],
        indices: ["Thade ne dit pas toute la vérité sur la nature de la Spirale."],
        recompenses: "Accès à l'Acte 3.",
      },
      transitions: { success: "Fin de l'Acte 2." },
    },
  ],
};
