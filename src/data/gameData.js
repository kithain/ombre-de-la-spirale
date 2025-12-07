// Scènes communes (game over, etc.)
const COMMON_SCENES = {
  game_over_combat: {
    id: 'game_over_combat',
    title: "Défaite",
    text: `Vous tombez, vaincu. Votre vision se brouille...

Tout devient noir.

GAME OVER`,
    choices: [
      { text: "Recommencer", next: 'intro', type: 'restart' }
    ]
  },

  game_over_refuse: {
    id: 'game_over_refuse',
    title: "Occasion Manquée",
    text: `Vous refusez poliment la mission de Thorgar. Il semble déçu mais ne vous retient pas.

Quelques jours plus tard, vous entendez parler d'une série de meurtres rituels dans la ville. La situation dégénère rapidement.

Sans votre intervention, les événements prennent une tournure catastrophique...

FIN (Mauvaise fin)`,
    choices: [
      { text: "Recommencer", next: 'intro', type: 'restart' }
    ]
  },

  scene_1_alt: {
    id: 'scene_1_alt',
    title: "Une Nuit Tranquille",
    text: `Vous ignorez le prêtre et commandez une bière. Il soupire et s'éloigne.

La soirée passe tranquillement. Vous entendez des rumeurs sur des profanations de tombes, mais ce n'est pas votre problème.

Le lendemain, vous apprenez qu'un autre groupe d'aventuriers a accepté la mission du prêtre nain. Ils ont disparu dans le cimetière...

Peut-être auriez-vous dû écouter Thorgar.

FIN (Mauvaise fin)`,
    choices: [
      { text: "Recommencer", next: 'intro', type: 'restart' }
    ]
  }
};

export { COMMON_SCENES };
