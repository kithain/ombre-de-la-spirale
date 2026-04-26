/**
 * Scénario 4 - Acte 4 : Le Cœur Mécanique
 * Profondeurs de la Spirale
 */

export const acte4 = {
  title: "ACTE 4 : LE CŒUR MÉCANIQUE",
  stake: "Atteindre le centre de contrôle et pirater la Spirale pour rentrer.",
  location: "Le Cœur Mécanique.",
  scenes: [
    {
      title: "Scène 1 : Les Engrenages Infinis",
      type: "Action / Plateforme",
      image: "./images/scenes/engrenages_geants.jpg",
      locationId: "spirale_mecanisme",
      npcIds: [],
      description: {
        resume: "Traversée dangereuse des mécanismes planaires.",
        visuel:
          "Des roues dentées de la taille d'une ville tournent dans le vide. Il faut sauter de l'une à l'autre.",
        audio: "Grincement titanesque.",
        odeur: "Huile et fer.",
        lumiere: "Étincelles.",
      },
      narration: {
        declencheur: "Descente vers le Cœur.",
        texte_a_lire:
          "Vous êtes dans la machine. Tout ici est mortel. Un faux pas et vous êtes broyé.",
        contexte_mj: "Série de jets d'Athlétisme et de Réflexes.",
        objectif: "Atteindre la salle de contrôle.",
      },
      mecaniques: {
        defis: [
          "Athlétisme (DD 16) : Sauter.",
          "Réflexes (DD 15) : Éviter les pistons.",
        ],
        indices: ["Suivez le conduit d'énergie principal."],
        recompenses: "Arrivée au Contremaître.",
      },
      transitions: {
        success: "Salle de contrôle en vue.",
      },
    },
    {
      title: "Scène 2 : Le Contremaître",
      type: "Social / Combat",
      image: "./images/scenes/kolyarut.jpg",
      locationId: "salle_controle",
      npcIds: ["kolyarut_gardien"],
      description: {
        resume: "Le Gardien de la Loi révèle que Thade a affaibli la Spirale.",
        visuel:
          "Un automate parfait, le Kolyarut. Il ne vous attaque pas immédiatement.",
        audio: "Voix métallique parfaite.",
        odeur: "Ordre.",
        lumiere: "Blanche.",
      },
      narration: {
        declencheur: "Entrée salle de contrôle.",
        texte_a_lire:
          "« Intrus détectés. Analyse... Vous n'êtes pas avec le Traître Thade. Il a volé l'énergie de la structure. L'effondrement est imminent. »",
        contexte_mj:
          "Le Kolyarut veut restaurer l'ordre. Thade est le chaos. Il peut aider les PJ s'ils promettent d'arrêter Thade.",
        objectif: "Négocier l'accès au portail.",
      },
      mecaniques: {
        defis: [
          "Diplomatie (DD 18) : Prouver ses intentions.",
          "Combat (si échec) : Kolyarut (FP 12, très dur).",
        ],
        indices: [
          "Thade utilise l'énergie pour devenir un dieu, ce qui détruira la Spirale et Valombre.",
        ],
        recompenses: "Accès au terminal.",
      },
      transitions: {
        success: "Accès au piratage.",
      },
    },
    {
      title: "Scène 3 : Le Piratage Dimensionnel",
      type: "Puzzle / Combat",
      image: "./images/scenes/piratage_portail.jpg",
      locationId: "terminal_spirale",
      npcIds: ["defenses_immunitaires"],
      description: {
        resume: "Utilisation du Cube pour ouvrir un portail.",
        visuel:
          "Interface holographique complexe. Des drones de défense attaquent.",
        audio: "Alarmes.",
        odeur: "Chaleur électronique.",
        lumiere: "Rouge clignotant.",
      },
      narration: {
        declencheur: "Activation du terminal.",
        texte_a_lire:
          "Vous insérez le Cube. Le système résiste. 'Violation de protocole.' Des drones sortent des murs.",
        contexte_mj: "Un PJ pirate (Int) pendant que les autres défendent.",
        objectif: "Ouvrir le portail vers Valombre.",
      },
      mecaniques: {
        defis: [
          "Informatique/Arcanes (DD 18) : 3 succès nécessaires.",
          "Combat : Drones de défense (nuées).",
        ],
        indices: ["Ciblez les coordonnées de la Tour de Thade."],
        recompenses: "Portail ouvert.",
      },
      transitions: {
        success: "Le portail s'ouvre. Fin de l'Acte 4.",
      },
    },
  ],
};
