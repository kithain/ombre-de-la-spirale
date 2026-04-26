/**
 * Scénario 1 - Acte 3 : Les Égouts et le Labyrinthe
 * Égouts de Valombre & Fondations du vieux manoir
 */

export const acte3 = {
  title: "ACTE 3 : LES ÉGOUTS ET LE LABYRINTHE",
  stake:
    "Accéder au laboratoire souterrain associé à Jaren en suivant les indices disponibles.",
  location: "Égouts de Valombre & Fondations du vieux manoir.",
  scenes: [
    {
      title: "Scène 1 : Le Kobold Témoin",
      type: "Social",
      image: "./images/scenes/sniv_kobold.jpg",
      locationId: "egouts_croisement",
      npcIds: ["sniv_kobold"],
      description: {
        resume:
          "Un kobold informe les PJ qu'une nouvelle responsable a pris le contrôle du laboratoire et décrit les changements récents.",
        visuel:
          "Des tunnels de briques suintantes. Deux petits yeux jaunes brillent de terreur dans un conduit de trop-plein.",
        audio: "Le clapotis de l'eau noire.",
        odeur: "Soufre, eaux croupie.",
        lumiere: "La lumière des PJ projette des ombres déformées sur les murs incurvés.",
      },
      narration: {
        declencheur: "Les PJ entendent des pleurs étouffés derrière une grille de fer.",
        texte_a_lire:
          "« Pas taper ! Sniv rien fait ! La femme... la sorcière aux yeux fous ! Elle est arrivée et l'autre... le Maître Jaren... il ne vient plus. Il ne donne plus d'ordres. Elle est pire ! Elle a pris les autres... mais les frères reviennent jamais. Pourquoi ils reviennent jamais ?»",
        contexte_mj:
          "Sniv a vu la transition de pouvoir. Il servait Jaren, mais Kaela a pris le relais avec une cruauté décuplée pour finir le rituel. Il est traumatisé par le changement de régime.",
        objectif:
          "Calmer Sniv pour obtenir des informations sur les pièges et l'entrée du manoir.",
      },
      mecaniques: {
        defis: [
          "Diplomatie (DD 12) : Calmer Sniv (lui offrir de la nourriture réduit le DD à 10).",
          "Intimidation (DD 15) : Le forcer à parler, mais il risque de s'enfuir à la première occasion.",
        ],
        indices: [
          "Sniv révèle : « Elle dit que Jaren était trop mou. Elle dit que le Maître sera fier d'elle quand le Conseil brûlera. »",
        ],
        recompenses:
          "Arrivée Furtive : Ils commencent la scène suivante en mode Discrétion avec un bonus de +2 ou un avantage, car ils arrivent par un endroit que les gardes de Kaela ne surveillent pas.",
      },
      transitions: {
        success: "Sniv guide les PJ vers la porte du manoir (Scène 2).",
        fail:
          "Sniv s'enfuit dans les tuyaux. Les PJ doivent naviguer à l'aveugle (Survie DD 15) pour éviter de se perdre.",
      },
    },
    {
      title: "Scène 2 : La Porte du Manoir Englouti",
      type: "Combat",
      image: "./images/scenes/egouts_entree_manoir.jpg",
      locationId: "egouts_entree_manoir",
      npcIds: ["squelettes_nains_gardiens"],
      description: {
        resume:
          "Les PJ affrontent des gardiens squelettiques protégeant l'accès au laboratoire dissimulé sous le manoir.",
        visuel:
          "Au détour d'un conduit effondré, la brique suintante laisse place à une arche, sculptée de runes naines martelées. Une lourde porte en fer forgé, barre le passage. Deux gardiens squelettiques, drapés dans leurs armures, montent la garde.",
        odeur:
          "L'air devient soudainement sec, froid tranche avec la puanteur des égouts.",
        lumiere: "Une lueur violette instable filtre à travers le trou de la serrure.",
        audio:
          "Le cliquetis des os et un bourdonnement sourd, comme un battement de cœur, qui émane de derriere la porte.",
      },
      narration: {
        declencheur: "Les PJ arrivent à portée de vue de la porte.",
        texte_a_lire:
          "Ces gardiens ne sont pas des serviteurs anonymes. Sur leurs plastrons brisés, vous reconnaissez les blasons des clans fondateurs de Valombre. À votre approche, leurs orbites vides s'allument d'une lueur haineuse, et ils lèvent leurs haches de guerre dans un silence de mort.",
        contexte_mj:
          "C'est un combat symbolique. Les PJ voient ici le résultat direct des profanations. La porte est scellée magiquement et réagit à la broche de la Fraternité Nyx.",
        objectif: "Vaincre les gardiens pour accéder au mécanisme de la porte.",
      },
      mecaniques: {
        defis: [
          "Combat : 2 Squelettes de Thanes (Guerriers Nains élites, CA 16, RD 5/Contondant). Ils utilisent des tactiques militaires coordonnées.",
          "Savoir Arcanique (DD 14) : Remarquer que le flux magique de la porte répond à la signature de la broche de Nyx.",
        ],
        indices: [
          "Sur le bouclier de l'un d'eux, une gravure récente et grossière : « Nyx » par-dessus les runes anciennes.",
        ],
        recompenses:
          "Armes de maître (Haches naines) et ouverture de la porte grâce à la broche.",
      },
      transitions: {
        success: "La porte s'ouvre sur un escalier montant vers le laboratoire (Acte 4).",
        fail:
          "Le combat dure trop longtemps. L'alarme est donnée et l'Acte 4 commence en alerte maximale.",
      },
    },
  ],
};
