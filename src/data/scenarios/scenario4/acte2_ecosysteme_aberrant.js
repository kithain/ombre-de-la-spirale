/**
 * Scénario 4 - Acte 2 : L'Écosystème Aberrant
 * Couloirs de Chair et Zones Organiques
 */

export const acte2 = {
  title: "ACTE 2 : L'ÉCOSYSTÈME ABERRANT",
  stake: "S'adapter aux lois impossibles et progresser vers les profondeurs.",
  location: "Couloirs de Chair et Zones Organiques.",
  scenes: [
    {
      title: "Scène 1 : La Salle de Gravité Variable",
      type: "Combat / Environnement",
      image: "./images/scenes/salle_gravite.jpg",
      locationId: "spirale_couloirs_chair",
      npcIds: ["gargouilles_cristal"],
      description: {
        resume: "Combat avec gravité changeante contre gargouilles",
        visuel:
          "Grande salle cubique, murs de cristal. La gravité change chaque round : sol, plafond, murs latéraux. Des Gargouilles de cristal volent, immunisées à ces changements.",
        audio: "Bourdonnement quand gravité change, cris gargouilles.",
        odeur: "Ozone, cristal.",
        lumiere: "Reflets kaléidoscopiques.",
      },
      narration: {
        declencheur: "Entrée dans couloir marbre.",
        texte_a_lire:
          "Vous entrez dans une salle cubique aux murs de cristal. Soudain, la gravité bascule. Vous tombez vers le plafond. Puis vers un mur. Chaque round, la direction change. Des Gargouilles de cristal vous attaquent, parfaitement adaptées.",
        contexte_mj:
          "Combat avec gravité changeante. Chaque round, jet 1d6 : 1-2 sol, 3-4 plafond, 5 mur gauche, 6 mur droit. Acrobaties DD 14 pour ne pas tomber. Gargouilles immunisées.",
        objectif: "Vaincre gargouilles et traverser.",
      },
      mecaniques: {
        defis: [
          "Combat : 4 Gargouilles Cristal FP 7",
          "Gravité change chaque round",
          "Acrobaties DD 14 : rester stable",
          "Sorts vol/lévitation très utiles",
        ],
        indices: [
          "Gargouilles immunisées gravité",
          "Cristaux murs = points d'ancrage",
          "Sortie en face",
        ],
        recompenses: "XP, adaptation gravité variable.",
      },
      transitions: {
        success: "Traversée réussie.",
        fail: "PJ blessés par chutes.",
      },
    },
    {
      title: "Scène 2 : Le Marchand de l'Impossible",
      type: "Rencontre / RP",
      image: "./images/scenes/marchand_souvenirs.jpg",
      locationId: "spirale_carrefour_mercane",
      npcIds: ["xareth_mercane"],
      description: {
        resume: "Rencontre avec Xareth le marchand Mercane",
        visuel:
          "Carrefour de couloirs. Un être étrange : Xareth, Mercane exilé. Échoppe flottante avec objets impossibles. Il sourit : 'Bienvenue, voyageurs. Tout se vend ici.'",
        audio: "Tintement objets magiques, voix mélodieuse Xareth.",
        odeur: "Encens exotique, magie.",
        lumiere: "Lueur dorée échoppe.",
      },
      narration: {
        declencheur: "Arrivée carrefour.",
        texte_a_lire:
          "Au milieu du néant, un être à la peau bleue, vêtu de soie, trie des fioles. Ilse tiens dans ce qui ressemble a une échoppe. « L'or n'a pas de cours ici. Je prends ce qui est réel. Un souvenir d'enfance, la maîtrise d'une langue, un an de votre espérance de vie. Choisissez vite, la réalité va bientôt changer de forme. »",
        contexte_mj:
          "Rencontre unique. Xareth vend objets magiques puissants contre souvenirs (perte compétence), PV max permanents, ou années vie. Donne info : laboratoire Thade plus bas. Peut être allié si bien traité.",
        objectif: "Négocier, obtenir infos.",
      },
      mecaniques: {
        defis: [
          "Diplomatie DD 16 : négocier",
          "Psychologie DD 18 : comprendre motivations",
          "Choix : acheter objets ? Prix élevé",
        ],
        indices: [
          "Labo Thade niveau -12",
          "Xareth exilé, hait Thade",
          "Peut devenir allié",
        ],
        recompenses: "Infos, objets magiques (si achat).",
      },
      transitions: {
        success: "Alliance ou commerce.",
        fail: "Xareth indifférent.",
      },
    },
    {
      title: "Scène 3 : Les Couloirs Vivants",
      type: "Horreur / Combat",
      image: "./images/scenes/couloirs_chair.jpg",
      locationId: "spirale_couloirs_chair",
      npcIds: ["gibbering_mouther_colossal"],
      description: {
        resume: "Couloirs de chair vivante et Gibbering Mouther",
        visuel:
          "Couloirs de chair pulsante. Yeux partout. Bouches murmurent. Au bout, une masse : Gibbering Mouther colossal, fusion de victimes.",
        audio: "Murmures incessants, gargouillements.",
        odeur: "Chair, bile.",
        lumiere: "Lueur organique malsaine.",
      },
      narration: {
        declencheur: "Progression forcée.",
        texte_a_lire:
          "Les couloirs changent. Marbre devient chair. Murs pulsent. Yeux vous fixent. Bouches murmurent vos peurs. Au bout, une abomination : masse de chair avec dizaines bouches et yeux. Gibbering Mouther colossal.",
        contexte_mj:
          "Combat horreur. Mouther FP 10. Murmures = confusion (Volonté DD 16). Terrain difficile (chair glissante). Feu efficace.",
        objectif: "Vaincre ou fuir Mouther.",
      },
      mecaniques: {
        defis: [
          "Combat : Gibbering Mouther Colossal FP 10",
          "Murmures : Volonté DD 16 ou Confusion 1 round",
          "Terrain glissant : Acrobaties DD 12",
          "Feu : dégâts x1.5",
        ],
        indices: [
          "Vulnérable feu",
          "Murmures = attaque mentale",
          "Yeux murs observent",
        ],
        recompenses: "XP, traversée zone organique.",
      },
      transitions: {
        success: "Mouther vaincu.",
        fail: "Fuite, contournement.",
      },
    },
    {
      title: "Scène 4 : Le Miroir des Regrets",
      type: "Puzzle / Psychologique",
      image: "./images/scenes/miroir_regret.jpg",
      locationId: "spirale_salle_miroirs",
      npcIds: [],
      description: {
        resume: "Miroirs exigent d'avouer ses faiblesses",
        visuel:
          "Salle miroirs. Reflets ne bougent pas, vous fixent. Pour passer, porte demande : 'Donnez ce que vous cachez.'",
        audio: "Silence oppressant, échos pensées.",
        odeur: "Rien, vide.",
        lumiere: "Reflets argentés.",
      },
      narration: {
        declencheur: "Salle bloque passage.",
        texte_a_lire:
          "Vos reflets ne bougent pas en même temps que vous. Ils vous regardent avec mépris. Vous sentez une pression psychique intense, comme si votre propre esprit essayait de vous expulser. Pour briser la boucle, il faut lâcher du lest : un secret, une honte, quelque chose de lourd.",
        contexte_mj:
          "Puzzle psychologique. Chaque PJ doit avouer une faiblesse/regret à voix haute. Roleplay important. Si refus, reflet attaque (clone hostile). Si aveu sincère, porte s'ouvre.",
        objectif: "Avouer faiblesse ou combattre reflet.",
      },
      mecaniques: {
        defis: [
          "Roleplay : avouer faiblesse/regret",
          "Si refus : combat clone (stats identiques)",
          "Psychologie DD 14 : comprendre test",
          "Bluff DD 20 : mentir (difficile, reflet sait)",
        ],
        indices: ["Test sincérité", "Reflets = vous", "Spirale teste valeur"],
        recompenses: "Passage, développement perso.",
      },
      transitions: {
        success: "Aveux, porte ouvre.",
        fail: "Combat reflets.",
      },
    },
    {
      title: "Scène 5 : La Vis Descendante",
      type: "Action / Transition",
      image: "./images/scenes/vis_geante.jpg",
      locationId: "spirale_puits_vis",
      npcIds: [],
      description: {
        resume: "Descente sur la vis géante tournante",
        visuel:
          "Puits immense. Vis géante tourne lentement, descendant. Seul moyen progresser : sauter dessus et descendre avec elle.",
        audio: "Grincement mécanique, écho profond.",
        odeur: "Métal, huile.",
        lumire: "Obscurité en bas, lueur en haut.",
      },
      narration: {
        declencheur: "Fin couloirs organiques.",
        texte_a_lire:
          "Vous arrivez à un puits. Une vis géante, large de 10m, tourne lentement, descendant dans l'obscurité. Thorgar : 'C'est le seul chemin.' Vous devez sauter dessus et descendre.",
        contexte_mj:
          "Skill challenge. Acrobaties DD 14 pour sauter sur vis. Puis descente 10 minutes. Dangers : créatures volantes, pièges mécaniques. Arrivée niveau laboratoire.",
        objectif: "Descendre sur vis.",
      },
      mecaniques: {
        defis: [
          "Acrobaties DD 14 : sauter sur vis",
          "Équilibre DD 12 : rester stable pendant descente",
          "Perception DD 16 : détecter dangers",
          "Combat possible : Mephits vapeur",
        ],
        indices: [
          "Vis mène laboratoire",
          "Descente longue",
          "Dangers en route",
        ],
        recompenses: "Arrivée niveau -12, laboratoire.",
      },
      transitions: {
        success: "Descente réussie.",
        fail: "Chute partielle, dégâts.",
      },
    },
  ],
};
