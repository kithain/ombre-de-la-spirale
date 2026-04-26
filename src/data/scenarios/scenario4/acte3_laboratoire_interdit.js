/**
 * Scénario 4 - Acte 3 : Le Laboratoire Interdit
 * Laboratoire Secret de Thade (Niveau -12)
 */

export const acte3 = {
  title: "ACTE 3 : LE LABORATOIRE INTERDIT",
  stake: "Découvrir le secret de l'immortalité de Thade.",
  location: "Laboratoire Secret de Thade (Niveau -12).",
  scenes: [
    {
      title: "Scène 1 : Le Sas Fortifié",
      type: "Infiltration / Combat",
      image: "./images/scenes/sas_labo.jpg",
      locationId: "spirale_labo_secret",
      npcIds: ["golems_fer"],
      description: {
        resume: "Infiltration du laboratoire fortifié de Thade",
        visuel:
          "Base fortifiée incrustée dans paroi Spirale. Porte technomagique, runes complexes. 2 Golems de Fer gardent.",
        audio: "Bourdonnement magique, pas lourds golems.",
        odeur: "Métal, magie.",
        lumiere: "Runes bleues pulsantes.",
      },
      narration: {
        declencheur: "Arrivée niveau -12.",
        texte_a_lire:
          "Vous trouvez une base fortifiée. Porte massive, runes complexes. Deux Golems de Fer gardent. C'est le laboratoire de Thade.",
        contexte_mj:
          "Infiltration ou combat. Porte : Désamorçage DD 22 ou mot de passe (trouvable journal Durin). Golems FP 9. Si alarme, renfort.",
        objectif: "Entrer dans laboratoire.",
      },
      mecaniques: {
        defis: [
          "Désamorçage DD 22 : ouvrir porte",
          "Combat : 2 Golems Fer FP 9",
          "Discrétion DD 18 : éviter alarme",
          "Mot passe dans journal Durin",
        ],
        indices: [
          "Runes = serrure magique",
          "Golems immunisés magie",
          "Alarme si échec",
        ],
        recompenses: "Accès laboratoire.",
      },
      transitions: {
        success: "Entrée discrète.",
        fail: "Combat, alarme déclenchée.",
      },
    },
    {
      title: "Scène 2 : La Bibliothèque des Âmes",
      type: "Lore / Horreur",
      image: "./images/scenes/bibliotheque_ames.jpg",
      locationId: "spirale_bibliotheque_ames",
      npcIds: [],
      description: {
        resume: "Découverte du secret d'immortalité de Thade",
        visuel:
          "Salle circulaire. Étagères avec bocaux de cristal contenant âmes lumineuses. Journal de Thade sur pupitre central.",
        audio: "Murmures âmes, silence oppressant.",
        odeur: "Ozone, quelque chose de brûlé.",
        lumiere: "Lueur des âmes prisonnières.",
      },
      narration: {
        declencheur: "Première salle labo.",
        texte_a_lire:
          "C'est froid, clinique. Des bocaux d'âmes étiquetés comme des spécimens de laboratoire. Le journal de Thade est ouvert :'Jour 847. Succès. J'ai remplacé mon cœur par un éclat de la Spirale. Je suis immortel. Tant que la Spirale existe, j'existe.'",
        contexte_mj:
          "Révélation majeure : Thade a fusionné avec la Spirale. Son cœur est un éclat. Pour le tuer, il faut détruire l'éclat OU la Spirale elle-même. Les âmes sont ses expériences.",
        objectif: "Lire journal, comprendre immortalité.",
      },
      mecaniques: {
        defis: [
          "Lecture journal : infos complètes",
          "Connaissance Arcanes DD 18 : comprendre processus",
          "Choix : libérer âmes ? (bon acte mais alarme)",
        ],
        indices: [
          "Cœur = éclat Spirale",
          "Immortel tant que Spirale existe",
          "Âmes = expériences ratées",
        ],
        recompenses: "Secret immortalité Thade.",
      },
      transitions: {
        success: "Infos obtenues.",
        fail: "Infos partielles.",
      },
    },
    {
      title: "Scène 3 : L'Usine à Horreurs",
      type: "Horreur / Sabotage",
      image: "./images/scenes/usine_soldats.jpg",
      locationId: "spirale_usine_clonage",
      npcIds: [],
      description: {
        resume: "Usine de production d'armée mort-vivante",
        visuel:
          "Chaîne montage macabre. Corps réassemblés, âmes implantées. Zombies améliorés, golems chair. Production masse.",
        audio: "Machines, gargouillements, cris étouffés.",
        odeur: "Chair, produits chimiques, mort.",
        lumiere: "Lueur verte malsaine.",
      },
      narration: {
        declencheur: "Salle suivante.",
        texte_a_lire:
          "Une usine. Thade crée son armée ici. Corps assemblés, âmes forcées dedans. Des centaines. Vous pouvez saboter.",
        contexte_mj:
          "Choix moral. Sabotage (Ingénierie DD 18) détruit usine, ralentit armée Thade. Mais déclenche alarme et combat. Ou passer discrètement.",
        objectif: "Saboter ou passer.",
      },
      mecaniques: {
        defis: [
          "Ingénierie DD 18 : sabotage",
          "Si sabotage : alarme, combat prototypes",
          "Discrétion DD 16 : passer sans être vu",
        ],
        indices: [
          "Usine crée armée",
          "Sabotage = avantage futur",
          "Alarme si sabotage",
        ],
        recompenses: "Si sabotage : armée Thade affaiblie.",
      },
      transitions: {
        success: "Sabotage ou passage.",
        fail: "Détectés, combat.",
      },
    },
    {
      title: "Scène 4 : Le Sujet Zéro",
      type: "Boss",
      image: "./images/scenes/sujet_zero.jpg",
      locationId: "spirale_salle_test",
      npcIds: ["sujet_zero"],
      description: {
        resume: "Combat contre le Sujet Zéro hybride",
        visuel:
          "Salle test. Créature enchaînée : fusion Troll/Démon. Sujet Zéro, prototype parfait de Thade. Vous entrez, chaînes se brisent.",
        audio: "Rugissement, chaînes brisées.",
        odeur: "Soufre, chair.",
        lumiere: "Rougeoyante, infernale.",
      },
      narration: {
        declencheur: "Salle gardien.",
        texte_a_lire:
          "Une créature massive. Troll/Démon fusionné. Sujet Zéro. Les chaînes se brisent. Il charge.",
        contexte_mj:
          "Boss FP 11. Régénération 10/round (feu/acide stop). Résistance magie 20. Attaques puissantes. Difficile.",
        objectif: "Vaincre Sujet Zéro.",
      },
      mecaniques: {
        defis: [
          "Combat : Sujet Zéro FP 11",
          "Régénération 10/round",
          "RM 20",
          "Feu/acide stop régénération",
        ],
        indices: ["Vulnérable feu/acide", "Très résistant", "Prototype Thade"],
        recompenses: "XP, accès armurerie.",
      },
      transitions: {
        success: "Sujet Zéro vaincu.",
        fail: "Fuite, contournement.",
      },
    },
    {
      title: "Scène 5 : L'Armurerie Interdite",
      type: "Récompense / Découverte",
      image: "./images/scenes/armurerie_secrete.jpg",
      locationId: "spirale_armurerie",
      npcIds: [],
      description: {
        resume: "Récupération du Cube Runique et armes puissantes",
        visuel:
          "Armurerie. Armes expérimentales, objets magiques dangereux. Au centre : Cube Runique, clé contrôle Spirale.",
        audio: "Bourdonnement magique.",
        odeur: "Ozone, métal.",
        lumiere: "Lueur objets magiques.",
      },
      narration: {
        declencheur: "Après Sujet Zéro.",
        texte_a_lire:
          "Armurerie de Thade. Armes puissantes. Au centre : Cube Runique. Xareth vous avait parlé de ça. C'est la clé pour contrôler les mécanismes de la Spirale.",
        contexte_mj:
          "Loot majeur. Cube Runique = clé Acte 4. Armes +2/+3, objets magiques. Les PJ peuvent s'équiper pour final.",
        objectif: "Récupérer Cube et équipement.",
      },
      mecaniques: {
        defis: [
          "Fouille : trouver meilleurs objets",
          "Connaissance Arcanes DD 16 : identifier Cube",
          "Choix : quels objets prendre ?",
        ],
        indices: [
          "Cube = clé contrôle",
          "Armes puissantes",
          "Équipement pour final",
        ],
        recompenses: "Cube Runique, armes +2/+3, objets magiques.",
      },
      transitions: {
        success: "PJ équipés, ont Cube.",
        fail: "Objets partiels.",
      },
    },
  ],
};
