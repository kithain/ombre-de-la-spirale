import React, { useState, useEffect } from 'react';
import { 
  Sword, Shield, Heart, Zap, BookOpen, Map, 
  Save, RotateCcw, ChevronRight, Skull, AlertTriangle,
  User, Backpack, Scroll, Eye
} from 'lucide-react';

// Import des données de jeu
import { CHARACTER_CLASSES } from './data/characters';
import { COMMON_SCENES } from './data/gameData';

// Système de scènes et narration
const GAME_SCENES = {
  intro: {
    id: 'intro',
    title: "L'Ombre de la Spirale",
    text: `Val-d'Ombre, cité industrielle et gothique, étouffe sous la poussière de roche et les vapeurs métalliques. 
    
Vous venez d'arriver dans cette ville verticale accrochée à flanc de montagne, où les terrasses s'empilent dans la brume froide. L'air est saturé d'une odeur métallique provenant des forges naines du quartier bas.

Vous êtes à l'auberge "Le Pic Brisé", cherchant du travail. Un prêtre nain s'approche de votre table...`,
    choices: [
      { text: "Écouter le prêtre", next: 'scene_1_1', type: 'social' },
      { text: "L'ignorer et commander à boire", next: 'scene_1_alt', type: 'neutral' }
    ]
  },
  
  scene_1_1: {
    id: 'scene_1_1',
    title: "L'Offre du Prêtre",
    text: `Le prêtre nain, Thorgar, s'assoit lourdement en face de vous. Sa barbe tressée est ornée de runes de fer.

"Étranger, j'ai besoin de quelqu'un qui n'a pas peur du travail de nuit. Le cimetière en terrasse... des profanateurs s'attaquent aux tombes de nos ancêtres. La garde s'en moque, mais pour nous, c'est un sacrilège."

Il pose une bourse sur la table. "50 pièces d'or et une lettre de recommandation. Vous montez la garde cette nuit."`,
    choices: [
      { text: "Accepter la mission", next: 'scene_1_2', type: 'accept', reward: { gold: 50 } },
      { text: "Négocier un meilleur prix", next: 'scene_1_negotiate', type: 'social', skillCheck: { skill: 'cha', dc: 12 } },
      { text: "Demander plus d'informations", next: 'scene_1_info', type: 'investigation' }
    ]
  },

  scene_1_negotiate: {
    id: 'scene_1_negotiate',
    title: "Négociation",
    text: `Vous tentez de négocier un meilleur prix avec Thorgar...`,
    skillCheck: { skill: 'cha', dc: 12 },
    onSuccess: {
      text: `Thorgar grogne mais accepte. "75 pièces d'or. Pas un sou de plus. Vous êtes aussi têtu qu'un nain !"`,
      next: 'scene_1_2',
      reward: { gold: 75 }
    },
    onFailure: {
      text: `Thorgar secoue la tête. "50 pièces, c'est déjà généreux pour une nuit de garde. À prendre ou à laisser."`,
      next: 'scene_1_2',
      reward: { gold: 50 }
    }
  },

  scene_1_info: {
    id: 'scene_1_info',
    title: "Enquête préliminaire",
    text: `"Que voulez-vous savoir ?" demande Thorgar.

"Trois tombes ont été ouvertes ces deux dernières semaines. Toujours des sépultures récentes. Les corps ont disparu, mais bizarrement, les bijoux et objets de valeur sont restés. Ce ne sont pas des pilleurs ordinaires."

Il baisse la voix. "Et il y a ces rumeurs... sur la Spirale des Éons, la tour inversée sous la montagne. Certains disent qu'elle s'éveille."`,
    choices: [
      { text: "Accepter la mission", next: 'scene_1_2', type: 'accept', reward: { gold: 50 } },
      { text: "Refuser poliment", next: 'game_over_refuse', type: 'refuse' }
    ]
  },

  scene_1_2: {
    id: 'scene_1_2',
    title: "Le Cimetière en Terrasse",
    text: `La nuit tombe sur Val-d'Ombre. Vous gravissez les marches usées menant au cimetière en terrasse, accroché à la falaise comme une cicatrice de pierre.

La brume s'épaissit. Les statues gothiques semblent vous observer. Le froid mord vos joues. Vous trouvez un poste d'observation entre deux mausolées.

Soudain, vous entendez des bruits de pelles... Des silhouettes se déplacent près d'une tombe fraîche !`,
    choices: [
      { text: "S'approcher discrètement", next: 'scene_1_3_stealth', type: 'stealth', skillCheck: { skill: 'dex', dc: 13 } },
      { text: "Les interpeller directement", next: 'scene_1_3_direct', type: 'combat' },
      { text: "Observer et attendre", next: 'scene_1_3_observe', type: 'investigation' }
    ]
  },

  scene_1_3_stealth: {
    id: 'scene_1_3_stealth',
    title: "Approche furtive",
    skillCheck: { skill: 'dex', dc: 13 },
    onSuccess: {
      text: `Vous vous glissez silencieusement entre les tombes. Vous comptez 5 individus en robes sombres. Ils extraient un corps d'une tombe et le placent dans un sac imprégné d'herbes. 

Vous remarquez qu'ils portent des broches argentées avec une chouette stylisée. L'un d'eux murmure : "Le Maître sera content. Dépêchons-nous avant que..."

C'est le moment d'agir !`,
      next: 'combat_1',
      combatSetup: {
        enemies: [
          { name: "Profanateur", pv: 6, atk: 2, def: 11 },
          { name: "Profanateur", pv: 6, atk: 2, def: 11 },
          { name: "Apprenti mage", pv: 8, atk: 3, def: 12 }
        ],
        playerAdvantage: true
      }
    },
    onFailure: {
      text: `Vous marchez sur une branche morte. CRAC ! Tous les profanateurs se retournent vers vous !

"Intrus ! Aux armes !"`,
      next: 'combat_1',
      combatSetup: {
        enemies: [
          { name: "Profanateur", pv: 6, atk: 2, def: 11 },
          { name: "Profanateur", pv: 6, atk: 2, def: 11 },
          { name: "Profanateur", pv: 6, atk: 2, def: 11 },
          { name: "Apprenti mage", pv: 8, atk: 3, def: 12 }
        ],
        playerAdvantage: false
      }
    }
  },

  scene_1_3_direct: {
    id: 'scene_1_3_direct',
    title: "Confrontation directe",
    text: `"HALTE ! Au nom de la loi !" criez-vous en sortant votre arme.

Les profanateurs sursautent. Certains tentent de fuir, d'autres dégainent leurs armes. Un combat est inévitable !`,
    combatSetup: {
      enemies: [
        { name: "Profanateur", pv: 6, atk: 2, def: 11 },
        { name: "Profanateur", pv: 6, atk: 2, def: 11 },
        { name: "Apprenti mage", pv: 8, atk: 3, def: 12 }
      ],
      playerAdvantage: false
    },
    choices: [
      { text: "⚔️ Combattre !", next: 'combat_1', type: 'combat' }
    ]
  },

  combat_1: {
    id: 'combat_1',
    title: "Combat au Cimetière",
    type: 'combat',
    text: "Les profanateurs vous attaquent !",
    onVictory: 'scene_1_4',
    onDefeat: 'game_over_combat'
  },

  scene_1_4: {
    id: 'scene_1_4',
    title: "Après le Combat",
    text: `Les profanateurs sont vaincus ou en fuite. Vous fouillez les corps et la tombe profanée.

Vous trouvez :
- Une broche en argent avec une chouette stylisée
- Des sacs imprégnés d'herbes pour masquer l'odeur
- Le corps porte des traces de chirurgie post-mortem précise

Au loin, vous entendez des pas lourds. La Garde Urbaine arrive, attirée par le bruit du combat !`,
    reward: { 
      items: ['Broche de la Fraternité Nyx', 'Potion de soin mineure'],
      xp: 100
    },
    choices: [
      { text: "Attendre la garde et expliquer", next: 'scene_1_5_honest', type: 'social' },
      { text: "Fuir avant leur arrivée", next: 'scene_1_5_flee', type: 'stealth' }
    ]
  },

  scene_1_5_honest: {
    id: 'scene_1_5_honest',
    title: "L'Intervention de la Garde",
    text: `Le Capitaine de la Garde arrive avec six hommes. Il observe la scène avec méfiance.

"Qui êtes-vous ? Qu'est-ce qui s'est passé ici ?"

Avant que vous puissiez répondre, Thorgar arrive en courant, essoufflé.

"Capitaine ! C'est moi qui ai engagé cet aventurier. Ces scélérats profanaient nos tombes !"

Le Capitaine grogne. "Encore ces histoires de nains... Très bien. Mais la prochaine fois, prévenez la garde AVANT de faire justice vous-même."

Thorgar vous fait signe de le suivre.`,
    next: 'scene_2_1',
    reward: { reputation: { nains: 10, garde: -5 } },
    choices: [
      { text: "Suivre Thorgar", next: 'scene_2_1', type: 'continue' }
    ]
  },

  scene_2_1: {
    id: 'scene_2_1',
    title: "Le Temple-Forgeron",
    text: `Thorgar vous conduit au Temple-Forgeron, un bâtiment massif de pierre et de fer dans le quartier des mineurs. L'odeur de l'encens se mêle à celle du métal chaud.

"Vous avez bien travaillé," dit-il en vous remettant votre paiement. "Mais cette broche... je la reconnais. C'est le symbole de la Fraternité Nyx, un groupe d'étudiants mages."

Il crache par terre. "Les mages ! Toujours à jouer avec des forces qu'ils ne comprennent pas. Vous devriez enquêter à l'Université. Mais attention, ils protègent les leurs."

Il vous tend une lettre scellée. "Ceci vous ouvrira des portes. Soyez prudent."`,
    reward: { 
      items: ['Lettre de recommandation de Thorgar'],
      questUpdate: 'Enquêter sur la Fraternité Nyx à l\'Université'
    },
    choices: [
      { text: "Se rendre à l'Université", next: 'scene_2_2', type: 'investigation' },
      { text: "Se reposer à l'auberge d'abord", next: 'scene_2_rest', type: 'rest' }
    ]
  },

  scene_2_rest: {
    id: 'scene_2_rest',
    title: "Repos à l'Auberge",
    text: `Vous retournez au Pic Brisé et louez une chambre pour la nuit. Le sommeil vous gagne rapidement.

Vous rêvez d'une tour inversée qui s'enfonce dans les ténèbres, de couloirs qui changent, d'un œil gigantesque qui vous observe...

Vous vous réveillez en sursaut, couvert de sueur. L'aube se lève sur Val-d'Ombre.`,
    reward: { 
      heal: 'full',
      hint: 'Vous avez fait un rêve étrange sur la Spirale...'
    },
    next: 'scene_2_2',
    choices: [
      { text: "Se lever et partir", next: 'scene_2_2', type: 'continue' }
    ]
  },

  scene_2_2: {
    id: 'scene_2_2',
    title: "Le Quartier du Savoir",
    text: `Vous gravissez les terrasses jusqu'au Quartier du Savoir, à mi-hauteur de la ville. L'atmosphère change radicalement : le silence studieux remplace le vacarme des forges.

L'Université de Val-d'Ombre se dresse devant vous, une forteresse de connaissance aux tours élancées. Des étudiants en robes colorées vont et viennent.

À l'entrée, un garde vous barre le passage. "Vous avez une autorisation ?"`,
    choices: [
      { text: "Montrer la lettre de Thorgar", next: 'scene_2_3', type: 'social', requires: 'Lettre de recommandation de Thorgar' },
      { text: "Tenter de bluffer", next: 'scene_2_3_bluff', type: 'social', skillCheck: { skill: 'cha', dc: 15 } },
      { text: "Interroger les étudiants dehors", next: 'scene_2_3_students', type: 'investigation' }
    ]
  },

  scene_2_3_students: {
    id: 'scene_2_3_students',
    title: "Interrogatoire des Étudiants",
    text: `Vous abordez un groupe d'étudiants qui discutent près de la fontaine.

"La Fraternité Nyx ? Oh, ils ont été dissous il y a deux mois," dit une jeune elfe. "Conduite non académique, paraît-il. Le professeur Thade Coren a mené l'enquête personnellement."

Un autre étudiant ajoute à voix basse : "Leur chef, Jaren, était obsédé par la nécromancie. On dit qu'il a été expulsé mais qu'il est toujours en ville..."`,
    reward: { 
      knowledge: 'Fraternité Nyx dissoute par Thade Coren',
      knowledge2: 'Jaren, ancien chef, expulsé pour nécromancie'
    },
    next: 'scene_2_4',
    choices: [
      { text: "Continuer l'enquête", next: 'scene_2_4', type: 'continue' }
    ]
  },

  scene_2_4: {
    id: 'scene_2_4',
    title: "Le Professeur Thade Coren",
    text: `Un homme grand et mince s'approche de vous. Il porte une robe de mage noire ornée de runes argentées. Son visage est pâle, ses yeux d'un bleu glacial.

"Je suis le Professeur Thade Coren. J'ai entendu parler de l'incident au cimetière. Vous enquêtez sur mes anciens étudiants, n'est-ce pas ?"

Sa voix est calme, presque hypnotique.

"Jaren était brillant mais instable. Je l'ai expulsé pour avoir pratiqué la nécromancie. Si vous le cherchez, essayez la Vieille Ville, près des tanneries. Chambre 7 de l'auberge 'La Lune Noire'."

Il vous tend une petite fiole. "Prenez ceci. Une potion de protection. Jaren est dangereux."`,
    reward: { 
      items: ['Potion de protection (suspecte)', 'Adresse de Jaren'],
      suspicion: 'Thade semble trop serviable...'
    },
    choices: [
      { text: "Le remercier et partir", next: 'scene_3_1', type: 'accept' },
      { text: "Poser des questions sur la Spirale", next: 'scene_2_5_spirale', type: 'investigation' },
      { text: "Se méfier et refuser la potion", next: 'scene_2_5_refuse', type: 'suspicious' }
    ]
  },

  // Fin du Scénario 1
  scene_3_1: {
    id: 'scene_3_1',
    title: "Fin du Scénario 1 - Le Murmure des Os",
    text: `Vous vous dirigez vers la Vieille Ville, la broche de la Fraternité Nyx en poche et l'adresse de Jaren en tête.

**FÉLICITATIONS !**

Vous avez terminé le Scénario 1 : "Le Murmure des Os"

**Ce que vous avez découvert :**
- Des profanateurs volaient des corps au cimetière
- La Fraternité Nyx, un groupe d'étudiants mages, est impliquée
- Jaren, leur chef, a été expulsé de l'Université
- Le professeur Thade Coren semble en savoir plus qu'il ne le dit
- Une mystérieuse "Spirale des Éons" est mentionnée...

**L'aventure continue dans le Scénario 2 !**

Merci d'avoir joué ! 🎉`,
    reward: {
      xp: 200,
      gold: 100
    },
    choices: [
      { text: "🔄 Recommencer l'aventure", next: 'intro', type: 'restart' }
    ]
  },

  // Scènes du scénario 1 (suite)
  scene_1_5_flee: {
    id: 'scene_1_5_flee',
    title: "Fuite Discrète",
    text: `Vous décidez de partir avant l'arrivée de la garde. Vous empochez les preuves et disparaissez dans la brume.

Le lendemain, vous retrouvez Thorgar au Temple-Forgeron. Il vous remercie et vous paie, mais semble inquiet.

"La garde me pose des questions. Ils pensent que c'est moi qui ai engagé des mercenaires pour faire justice. Soyez prudent."`,
    reward: { 
      items: ['Broche de la Fraternité Nyx', 'Potion de soin mineure'],
      xp: 100,
      reputation: { nains: 15, garde: -10 }
    },
    next: 'scene_2_1',
    choices: [
      { text: "Aller au Temple-Forgeron", next: 'scene_2_1', type: 'continue' }
    ]
  },

  scene_1_3_observe: {
    id: 'scene_1_3_observe',
    title: "Observation Patiente",
    text: `Vous restez caché et observez attentivement. Les profanateurs travaillent vite, visiblement nerveux.

Vous comptez 4 personnes. Ils extraient un corps et le placent dans un sac. L'un d'eux porte une broche argentée avec une chouette.

Soudain, l'un d'eux regarde dans votre direction. "J'ai entendu quelque chose !"

Vous devez agir maintenant !`,
    combatSetup: {
      enemies: [
        { name: "Profanateur", pv: 6, atk: 2, def: 11 },
        { name: "Profanateur", pv: 6, atk: 2, def: 11 },
        { name: "Apprenti mage", pv: 8, atk: 3, def: 12 }
      ],
      playerAdvantage: false
    },
    choices: [
      { text: "Attaquer par surprise", next: 'combat_1', type: 'combat' },
      { text: "Tenter de les intimider", next: 'scene_1_3_intimidate', type: 'social', skillCheck: { skill: 'cha', dc: 14 } }
    ]
  },

  scene_1_3_intimidate: {
    id: 'scene_1_3_intimidate',
    title: "Intimidation",
    skillCheck: { skill: 'cha', dc: 14 },
    onSuccess: {
      text: `Vous sortez de l'ombre avec autorité. "La garde arrive ! Fuyez maintenant ou affrontez la justice !"

Votre voix résonne avec conviction. Les profanateurs paniquent et s'enfuient, abandonnant le corps et leurs outils.

Vous récupérez les preuves sans combat !`,
      next: 'scene_1_4',
      reward: { xp: 120 }
    },
    onFailure: {
      text: `"La garde arrive !" criez-vous, mais votre voix tremble.

Les profanateurs se regardent, puis l'un d'eux ricane. "Il est seul ! Attrapez-le !"`,
      next: 'combat_1',
      combatSetup: {
        enemies: [
          { name: "Profanateur", pv: 6, atk: 2, def: 11 },
          { name: "Profanateur", pv: 6, atk: 2, def: 11 },
          { name: "Apprenti mage", pv: 8, atk: 3, def: 12 }
        ],
        playerAdvantage: false
      }
    }
  },

  scene_2_3: {
    id: 'scene_2_3',
    title: "Entrée à l'Université",
    text: `Le garde examine la lettre de Thorgar et hoche la tête avec respect.

"Le Temple-Forgeron vous recommande. Très bien, vous pouvez entrer. Le bureau des archives est au deuxième étage."

Vous pénétrez dans l'Université. L'atmosphère est studieuse, presque oppressante. Des étudiants en robes colorées vous observent avec curiosité.`,
    choices: [
      { text: "Aller aux archives", next: 'scene_2_3_archives', type: 'investigation' },
      { text: "Interroger des étudiants", next: 'scene_2_3_students', type: 'social' }
    ]
  },

  scene_2_3_archives: {
    id: 'scene_2_3_archives',
    title: "Les Archives",
    text: `Les archives sont gardées par une vieille bibliothécaire elfe. Elle vous regarde par-dessus ses lunettes.

"La Fraternité Nyx ? Dissoute il y a deux mois. Pratiques non autorisées. Le professeur Thade Coren a mené l'enquête."

Elle vous tend un dossier. "Voici le rapport officiel. Le chef, Jaren, a été expulsé."`,
    reward: { 
      knowledge: 'Rapport officiel sur la Fraternité Nyx'
    },
    next: 'scene_2_4',
    choices: [
      { text: "Quitter les archives", next: 'scene_2_4', type: 'continue' }
    ]
  },

  scene_2_3_bluff: {
    id: 'scene_2_3_bluff',
    title: "Tentative de Bluff",
    skillCheck: { skill: 'cha', dc: 15 },
    onSuccess: {
      text: `"Je suis un nouvel assistant du professeur Thade Coren," mentez-vous avec assurance.

Le garde hésite, puis vous laisse passer. "Très bien, mais ne traînez pas."`,
      next: 'scene_2_3_archives'
    },
    onFailure: {
      text: `"Je suis... euh... un inspecteur," bégayez-vous.

Le garde fronce les sourcils. "Vous n'avez pas l'air d'un inspecteur. Circulez !"

Vous devez trouver une autre approche.`,
      next: 'scene_2_2'
    }
  },

  scene_2_5_spirale: {
    id: 'scene_2_5_spirale',
    title: "Questions sur la Spirale",
    text: `"Professeur, que savez-vous sur la Spirale des Éons ?"

Le visage de Thade se durcit imperceptiblement. "Des légendes de mineurs. Une tour inversée qui n'existe que dans les cauchemars. Pourquoi cette question ?"

Vous sentez qu'il en sait plus qu'il ne le dit.

"Concentrez-vous sur Jaren. C'est lui le danger réel."

Il vous tend la fiole. "Prenez ceci et allez-y."`,
    reward: { 
      items: ['Potion de protection (suspecte)', 'Adresse de Jaren'],
      suspicion: 'Thade a réagi étrangement à la mention de la Spirale...'
    },
    next: 'scene_3_1',
    choices: [
      { text: "Partir vers la Vieille Ville", next: 'scene_3_1', type: 'continue' }
    ]
  },

  scene_2_5_refuse: {
    id: 'scene_2_5_refuse',
    title: "Méfiance",
    text: `"Je préfère ne pas accepter de potions d'inconnus, même de professeurs respectés."

Thade hausse un sourcil, puis sourit froidement. "Prudent. C'est bien. Voici l'adresse de Jaren. Bonne chance."

Il range la fiole sans insister. Vous notez qu'il semble... soulagé ?`,
    reward: { 
      items: ['Adresse de Jaren'],
      suspicion: 'Pourquoi Thade semblait-il soulagé que vous refusiez la potion ?'
    },
    next: 'scene_3_1',
    choices: [
      { text: "Partir vers la Vieille Ville", next: 'scene_3_1', type: 'continue' }
    ]
  },

  // Fusionner avec les scènes communes
  ...COMMON_SCENES
};

export { CHARACTER_CLASSES, GAME_SCENES };
