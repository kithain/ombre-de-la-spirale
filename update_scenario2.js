const fs = require('fs');
const path = require('path');

const filePath = String.raw`d:\script\Scénario\HTML\ombre-de-la-spirale\src\data\scenarios\scenario2_echo_des_profondeurs.js`;

const content = `export const scenario2 = {
  id: 2,
  title: "SCÉNARIO 2 : L'ÉCHO DES PROFONDEURS",
  level: "Niveaux 4-6",
  system: "D&D 3.5",
  synopsis:
    "La mine d'argent des nains est à l'arrêt : les mineurs prétendent que 'la pierre hurle'. Thade Coren, agissant comme expert arcanique pour la ville, engage les PJ pour stabiliser la mine à l'aide d'un cristal de résonance. En réalité, il les envoie charger ce cristal avec l'énergie de la Spirale pour ses propres fins.",

  acts: [
    {
      title: "ACTE 1 : LA GRÈVE DE LA PIOCHE",
      stake: "Négocier l'entrée dans la mine et accepter l'outil 'empoisonné' de Thade.",
      location: "Quartier du Savoir & Quartier des Mineurs.",
      scenes: [
        {
          title: "Scène 1 : Le Conseil de Crise",
          type: "Social",
          locationId: "universite_arcane",
          npcIds: ["durnik_chef_mineur", "thade_coren"],
          description: {
            sous_titre: "Une aide trop généreuse pour être honnête.",
            visuel: "Au centre du hall circulaire, sous une coupole de verre, le contraste est frappant. Un nain, couvert de poussière, semble faire tache au milieu des colonnes blanches. Face à lui, un mage d'une élégance glaciale, manipulant une pierre de cristal violette qui semble pulser au rythme d'un cœur.",
            audio: "Le cristal émet un bourdonnement basse fréquence presque imperceptible.",
            odeur: "L'odeur de lavande habituelle de Thade, mêlée à une odeur métallique.",
            lumiere: "Lumière zénithale froide tombant de la coupole.",
          },
          narration: {
            declencheur: "Les PJ viennent chercher des réponses sur la mort de Jaren ou sont convoqués.",
            texte_a_lire: \`Le hall majestueux de l’université résonne d’une dispute inhabituelle. Durnik, le chef des mineurs, pointe un doigt calleux vers un cristal que Thade Coren tient avec précaution.

- Durnik : « Par la barbe de mes ancêtres, Thade ! Ce caillou me donne la nausée ! Mes gars meurent là-dessous, ils deviennent fous, et toi tu restes là à nous vendre de la verroterie ? »

- Thade : (Apercevant les PJ, avec un sourire mielleux) « Ah, vous tombez à point nommé. Voici les aventuriers qui ont "nettoyé" le cimetière, Durnik. Un peu de tenue. 
(S'adressant aux PJ) Messieurs/Dames, le mal qui ronge la mine n'est pas de nature physique. Les mineurs ont dérangé quelque chose. Prenez ce Cristal de Stabilisation. Portez-le près de la faille, il absorbera les vibrations néfastes et protégera l'esprit des travailleurs. Considérez cela comme la contribution de l'Université pour la paix de Val-d'Ombre. »\`,
            contexte_mj: "Thade joue double jeu : il veut que les PJ descendent pour tester ses théories sur la Spirale et charger le cristal.",
            objectif: "Accepter la mission d'enquête et recevoir le 'Cristal de Résonance' (mouchard).",
          },
          mecaniques: {
            defis: [
              "Sens de la Magie (DD 18) : Le cristal appartient à l'école de l'Évocation et de la Nécromancie (étrange pour un outil de stabilisation).",
              "Psychologie (DD 20) : Thade semble sincère, mais son regard trahit une impatience dévorante."
            ],
            indices: ["Thade insiste pour que vous gardiez le cristal 'pour mesurer les vibrations'."],
            recompenses: "Le Cristal de Résonance (Objet de quête).",
          },
          transitions: {
            success: "Direction le quartier des mineurs pour enquêter.",
            fail: "Les PJ sont vus comme des agents du Conseil, complexifiant les interactions futures.",
          },
        },
        {
          title: "Scène 2 : Le Quartier Paralysé",
          type: "Investigation",
          locationId: "quartier_des_mineurs_place",
          npcIds: ["tenancier_taverne"],
          description: {
            sous_titre: "La peur se répand comme une traînée de poudre.",
            visuel: "Des familles chargent des charrettes à la hâte. Les volets sont clos. Sur la place, les outils sont abandonnés au sol.",
            audio: "Pleurs d'enfants, bruits de meubles traînés, silence pesant dans la taverne.",
            odeur: "Bière éventée et peur.",
            lumiere: "Intérieurs sombres, éclairés à la bougie pour économiser l'huile.",
          },
          narration: {
            declencheur: "Visite de la taverne ou déambulation dans les rues.",
            texte_a_lire: "Les rues sont anormalement calmes. À la taverne des 'Fumées Rouges', Mara essuie un comptoir vide. 'Ils disent que les murs saignent', murmure-t-elle sans lever les yeux.",
            contexte_mj: "Les rumeurs sont exagérées mais basées sur des faits réels (hallucinations causées par la proximité de la Spirale).",
            objectif: "Recueillir des rumeurs et comprendre la nature de la menace (psychique/sonique).",
          },
          mecaniques: {
            defis: [
              "Collecte d'informations (DD 10) : Apprendre les rumeurs ('ombres vivantes', 'chant de la pierre').",
              "Intimidation/Diplomatie (DD 14) : Convaincre un mineur de parler de ce qu'il a vu en bas."
            ],
            indices: ["Les mineurs les plus touchés saignent des oreilles.", "Le chant semble venir des niveaux les plus profonds."],
            recompenses: "Information sur l'accès condamné.",
          },
          transitions: {
            success: "Piste vers l'entrée de la mine.",
            fail: "Perte de temps, la nuit tombe et l'ambiance devient plus oppressante.",
          },
        },
        {
          title: "Scène 3 : Le Piquet de Grève",
          type: "Social",
          locationId: "entree_mine_valdombre",
          npcIds: ["durnik_chef_mineur"],
          description: {
            sous_titre: "Un mur de nains obstinés.",
            visuel: "Durnik et ses hommes bloquent l'immense grille de l'ascenseur avec des barricades de fortune.",
            audio: "Chants de grève graves et monotones, cliquetis d'armes prêtes.",
            odeur: "Huile de machine et tabac nain.",
            lumiere: "Les brasiers des gardes projettent des ombres dansantes sur le métal.",
          },
          narration: {
            declencheur: "Arrivée devant les grilles verrouillées de la mine.",
            texte_a_lire: "Durnik crache au sol et pointe la machinerie: « On ne descend plus. La roche pulse et mes gars voient des choses étranges. Le monte-charge est fonctionnel, mais le levier d'activation est dans la cabine de contrôle, de l'autre côté de la grille. Il ne reste personne pour aller l'enclencher. Si vous voulez descendre, c'est à vos risques et périls. On verrouille derrière vous. »",
            contexte_mj: "Durnik protège ses hommes. Il ne laissera passer que ceux qui prouvent qu'ils peuvent survivre et régler le problème.",
            objectif: "Convaincre Durnik de lever le barrage ou trouver un autre accès.",
          },
          mecaniques: {
            defis: [
              "Diplomatie (DD 15) : Convaincre Durnik que le cristal de Thade va régler le problème.",
              "Ingénierie / Mécanique (DD 14) : Comprendre que le mécanisme nécessite une pression constante sur le levier intérieur pour descendre en sécurité.",
              "Renseignement (DD 12) : Apprendre que trois mineurs ont disparu au niveau -8 après avoir 'entendu leur propre nom sortir du mur'."
            ],
            indices: ["Durnik a scellé le niveau -1 après que des 'choses' soient remontées."],
            recompenses: "Accès à la mine, respect des nains (si diplomatie).",
          },
          transitions: {
            success: "Durnik ouvre et active lui-même le monte-charge à vapeur.",
            fail: "Les PJ doivent s'introduire par un conduit d'aération dangereux (Test d'Escalade DD 15).",
          },
        },
        {
          title: "Scène 4 : La Cage",
          type: "Transition",
          locationId: "entree_mine_valdombre",
          npcIds: [],
          description: {
            sous_titre: "Une descente vers l'inconnu.",
            visuel: "Les parois de roche défilent à toute vitesse. L'obscurité se fait totale.",
            audio: "Le grincement assourdissant des chaînes, puis un silence lourd une fois au fond.",
            odeur: "L'air devient chaud, sec et métallique.",
            lumiere: "L'obscurité avale la lumière des torches à quelques mètres seulement.",
          },
          narration: {
            declencheur: "Activation du levier de descente.",
            texte_a_lire: "La cage descend, encore et encore. La température monte. Soudain, le mécanisme s'arrête avec un grand bruit métallique. Vous êtes seuls, pendus au bout d'une chaîne dans les entrailles du monde.",
            contexte_mj: "Huis clos pour mettre l'ambiance. Le cristal de Thade commence à luire faiblement.",
            objectif: "Arriver au niveau -1 sans céder à la panique.",
          },
          mecaniques: {
            defis: [
              "Constitution (DD 12) : Résister à la pression et à la chaleur croissante.",
              "Perception (DD 15) : Entendre un grattement sur le toit de la cage."
            ],
            indices: ["Le cristal de Thade pulse en rythme avec une vibration lointaine."],
            recompenses: "Aucune, survie.",
          },
          transitions: {
            success: "Arrivée au niveau -1, Acte 2.",
            fail: "Arrivée avec état 'Secoué' (-2 aux jets) pour le début de l'Acte 2.",
          },
        },
      ],
    },
    {
      title: "ACTE 2 : LES GALERIES SILENCIEUSES",
      stake: "Traverser la mine désertée et atteindre la faille de la Spirale.",
      location: "Niveaux inférieurs (Niveaux -1 à -7.) de la mine d'argent.",
      scenes: [
        {
          title: "Scène 1 : La Forge Désertée",
          type: "Investigation",
          locationId: "galeries_silencieuses",
          npcIds: [],
          description: {
            sous_titre: "Une vie interrompue.",
            visuel: "Tables renversées, enclumes froides, gamelles de ragoût moisies, comme si tout le monde s'était envolé.",
            audio: "Goutte-à-goutte incessant. Aucun bruit de vermine.",
            odeur: "Nourriture avariée et cette odeur d'ozone persistante.",
            lumiere: "Lumière des PJ uniquement. Les lampes murales sont brisées.",
          },
          narration: {
            declencheur: "Sortie de la cage.",
            texte_a_lire: "C'était la zone de repos du niveau -1. Les repas sont encore dans les assiettes. Aucune trace de combat, juste... une fuite éperdue. Une botte abandonnée gît au milieu de la pièce.",
            contexte_mj: "Les mineurs ont fui une vague de panique psychique. Pas de monstres ici, juste l'ambiance.",
            objectif: "Comprendre que la menace n'est pas (que) physique.",
          },
          mecaniques: {
            defis: [
              "Investigation (DD 13) : Trouver un journal de bord laissé par un contremaître.",
              "Art de la Magie (DD 15) : Le Cristal de Thade commence à luire plus fort (Indice : il se nourrit)."
            ],
            indices: ["Journal : 'Ils sont dans les murs. Ils chantent.'"],
            recompenses: "Carte mise à jour vers le niveau -7.",
          },
          transitions: {
            success: "Progression vers les niveaux inférieurs.",
            fail: "Progression lente, paranoïa croissante.",
          },
        },
        {
          title: "Scène 2 : Les Charognards d'Acier",
          type: "Combat",
          locationId: "galeries_silencieuses",
          npcIds: [],
          description: {
            sous_titre: "La faim des profondeurs.",
            visuel: "Des créatures aux carapaces métalliques rongent les rails de la mine.",
            audio: "Cliquetis d'antennes et bruits de mastication de métal.",
            odeur: "Acide et rouille.",
            lumiere: "Les reflets des carapaces dans le noir.",
          },
          narration: {
            declencheur: "Approche d'un dépôt de matériel.",
            texte_a_lire: "Le chemin est barré par des créatures ressemblant à des insectes géants. Elles ne mangent pas les corps... elles mangent les pioches et les rails. Et elles vous ont vus.",
            contexte_mj: "Monstres Rouilleurs (Rust Monsters) ou Ankhegs corrompus. Danger pour l'équipement des PJ.",
            objectif: "Traverser la zone ou éliminer la menace.",
          },
          mecaniques: {
            defis: [
              "Combat : Vaincre les Charognards (1 jeune oxydeur corrompu).",
              "Connaissance (Nature/Donjon) (DD 14) : Identifier les monstres rouilleurs et protéger ses armes."
            ],
            indices: ["Les créatures semblent fuir quelque chose venant du bas."],
            recompenses: "Minerais précieux (100 po) délaissés par les mineurs en fuite.",
          },
          transitions: {
            success: "Accès au niveau -5.",
            fail: "Perte d'équipement (armes/armures corrodées).",
          },
        },
        {
          title: "Scène 3 : La Poche de Gaz",
          type: "Piège",
          locationId: "galeries_silencieuses",
          npcIds: [],
          description: {
            sous_titre: "Un piège invisible.",
            visuel: "L'air ondule légèrement. Les flammes des torches virent au bleu.",
            audio: "Un sifflement léger sort d'une fissure.",
            odeur: "Œuf pourri (soufre) intense.",
            lumiere: "Faible, brumeuse.",
          },
          narration: {
            declencheur: "Arrivée au niveau -7.",
            texte_a_lire: "L'odeur vous prend à la gorge. Vos yeux piquent. Une nappe de gaz invisible stagne dans cette section du tunnel.",
            contexte_mj: "Zone de gaz explosif. Toute flamme nue provoque une explosion.",
            objectif: "Traverser sans faire sauter la galerie.",
          },
          mecaniques: {
            defis: [
              "Connaissance (Souterrains) / Survie (DD 15) : Identifier le gaz grisou.",
              "Dextérité / Discrétion (DD 12) : Se déplacer sans créer d'étincelles (armures métalliques)."
            ],
            indices: ["Un squelette d'oiseau (canari) dans une cage au sol."],
            recompenses: "Passage sécurisé.",
          },
          transitions: {
            success: "Accès au cul-de-sac du Géomètre.",
            fail: "Explosion (dégâts de feu, effondrement partiel).",
          },
        },
        {
          title: "Scène 4 : Le Journal du Géomètre",
          type: "Investigation",
          locationId: "galeries_silencieuses",
          npcIds: ["geometre_fou"],
          description: {
            sous_titre: "La logique face à la folie.",
            visuel: "Un campement de fortune. Un nain desséché est assis contre le mur, serrant un carnet.",
            audio: "Silence absolu, pesant.",
            odeur: "Poussière ancienne.",
            lumiere: "La lanterne du nain est éteinte depuis longtemps.",
          },
          narration: {
            declencheur: "Découverte du corps.",
            texte_a_lire: "C'est le géomètre disparu. Il n'a aucune blessure, mais sa gourde est pleine. Il est mort de soif... ou de peur de bouger.",
            contexte_mj: "Le géomètre a compris que la Spirale change la topologie. Il a préféré mourir sur place que de se perdre.",
            objectif: "Récupérer ses notes pour comprendre la suite.",
          },
          mecaniques: {
            defis: [
              "Fouille (DD 10) : Récupérer le journal.",
              "Linguistique / Intelligence (DD 14) : Décrypter les notes griffonnées frénétiquement."
            ],
            indices: ["Journal : 'La galerie s'allonge quand on ne la regarde pas.', 'La géométrie est un mensonge ici.'", "Carte du niveau -8 (le Mur Brisé)."],
            recompenses: "Bonus +2 aux jets de Survie dans la Spirale grâce aux notes.",
          },
          transitions: {
            success: "Piste vers le niveau -8.",
            fail: "Compréhension moindre des dangers à venir.",
          },
        },
        {
          title: "Scène 5 : Le Mur Brisé",
          type: "Découverte",
          locationId: "galeries_silencieuses",
          npcIds: [],
          description: {
            sous_titre: "Là où la mine s'arrête et où l'horreur commence.",
            visuel: "La roche grise naturelle s'arrête net. Devant vous, une paroi de matière obsidienne violette, lisse et huileuse. Elle est fissurée.",
            audio: "Un bourdonnement grave qui fait vibrer les dents.",
            odeur: "Ozone et sang.",
            lumiere: "Une lueur violette malsaine pulse depuis la fissure.",
          },
          narration: {
            declencheur: "Arrivée au bout de la galerie principale.",
            texte_a_lire: "Vous y êtes. La brèche. Les outils des mineurs gisent au sol, tordus comme s'ils avaient fondu. À travers la fissure dans la roche noire, vous apercevez... du vide. Et des escaliers qui descendent vers le haut.",
            contexte_mj: "Point de bascule vers l'Acte 3. Le cristal de Thade devient brûlant.",
            objectif: "Franchir la fissure.",
          },
          mecaniques: {
            defis: [
              "Volonté (DD 14) : Résister à l'envie de fuir face à l'aura surnaturelle.",
              "Connaissance (Arcanes/Plans) (DD 16) : Identifier la matière comme extra-planaire (Limbes/Far Realm)."
            ],
            indices: ["La roche n'est pas naturelle, c'est une 'peau' qui sépare les réalités."],
            recompenses: "Entrée dans la Spirale.",
          },
          transitions: {
            success: "Entrée dans l'Antichambre de la Folie (Acte 3).",
            fail: "Recul, nécessité de se regrouper avant de réessayer.",
          },
        },
      ],
    },
    {
      title: "ACTE 3 : L'ANTICHAMBRE DE LA FOLIE",
      stake: "Transition vers le surnaturel.",
      location: "Faille Mine/Spirale.",
      scenes: [
        {
          title: "Scène 1 : Les Runes d'Avertissement",
          type: "Lore",
          locationId: "galeries_silencieuses",
          npcIds: [],
          description: {
            sous_titre: "Les dernières protections ont cédé.",
            visuel: "D'anciennes plaques de métal nain encadrent la brèche, couvertes de runes martelées.",
            audio: "Crépitement d'énergie magique résiduelle.",
            odeur: "Métal chaud.",
            lumiere: "Les runes luisent faiblement puis s'éteignent.",
          },
          narration: {
            declencheur: "Examen de la fissure.",
            texte_a_lire: "Ce n'était pas juste une mine. C'était une prison. Les runes disent : 'Ici commence ce qui ne doit pas être. Ne creusez pas plus loin.' Quelqu'un a buriné les avertissements pour les rendre illisibles.",
            contexte_mj: "Preuve que le Conseil ou Thade savaient, ou que les anciens nains savaient. Sabotage évident.",
            objectif: "Comprendre l'origine du danger.",
          },
          mecaniques: {
            defis: [
              "Décryptage / Nain (DD 12) : Lire les runes endommagées.",
              "Investigation (DD 14) : Remarquer les traces de burin récentes."
            ],
            indices: ["Le sabotage est récent (quelques semaines, avant la grève)."],
            recompenses: "Preuve de la négligence criminelle.",
          },
          transitions: {
            success: "Passage de la brèche.",
            fail: "Passage sans comprendre l'historique.",
          },
        },
        {
          title: "Scène 2 : Les Gardiens de Pierre",
          type: "Combat",
          locationId: "galeries_silencieuses",
          npcIds: [],
          description: {
            sous_titre: "La roche se défend.",
            visuel: "Des amas de pierre se détachent des murs. Des veines violettes parcourent leur corps.",
            audio: "Grondement sourd, comme un éboulement contrôlé.",
            odeur: "Poussière de pierre.",
            lumiere: "Leurs yeux sont des failles lumineuses.",
          },
          narration: {
            declencheur: "Passage de la zone runique.",
            texte_a_lire: "Les rochers bougent. Des élémentaires de terre, corrompus par l'énergie de la Spirale, émergent. Ils ne semblent pas vous attaquer par devoir, mais par douleur. Ils sont fous.",
            contexte_mj: "Élémentaires de Terre corrompus. Ils attaquent tout ce qui bouge. Ils ne gardent pas, ils fuient la fissure.",
            objectif: "Survivre à l'assaut.",
          },
          mecaniques: {
            defis: [
              "Combat : Vaincre les Élémentaires corrompus.",
              "Empathie Sauvage / Magie (DD 18) : Calmer temporairement un élémentaire pour qu'il fuit."
            ],
            indices: ["Leur cœur est un éclat de cristal violet."],
            recompenses: "Éclats de cristal (composants magiques).",
          },
          transitions: {
            success: "La voie est libre.",
            fail: "Retraite forcée ou blessures graves.",
          },
        },
        {
          title: "Scène 3 : L'Appel de la Spirale",
          type: "Vision",
          locationId: "galeries_silencieuses",
          npcIds: [],
          description: {
            sous_titre: "Le regard de l'abîme.",
            visuel: "En touchant la roche noire de la fissure, la réalité ondule.",
            audio: "Le chant devient intelligible : des mots dans une langue inconnue mais compréhensible.",
            odeur: "Néant.",
            lumiere: "Flash psychique.",
          },
          narration: {
            declencheur: "Contact physique avec la brèche.",
            texte_a_lire: "Une vision vous traverse l'esprit. Un œil gigantesque, fait de géométrie impossible, vous observe. Vous vous sentez minuscule. Le Cristal de Thade dans votre poche devient brûlant, aspirant cette énergie.",
            contexte_mj: "Lien entre le Cristal de Thade et la Spirale. Le Cristal se 'charge'.",
            objectif: "Résister à l'assaut psychique.",
          },
          mecaniques: {
            defis: [
              "Volonté (DD 15) : Ne pas être étourdi par la vision.",
              "Connaissance (Mystères) (DD 16) : Comprendre que la Spirale est consciente."
            ],
            indices: ["Le Cristal de Thade agit comme une clé ou un siphon."],
            recompenses: "Information sur la nature consciente du donjon.",
          },
          transitions: {
            success: "Entrée lucide.",
            fail: "Entrée avec condition 'Hanté' (malus volonté).",
          },
        },
        {
          title: "Scène 4 : Le Passage",
          type: "Exploration",
          locationId: "galeries_silencieuses",
          npcIds: [],
          description: {
            sous_titre: "Là où le bas devient le haut.",
            visuel: "Vous traversez la fissure. Le sol devient plafond. Les perspectives s'inversent.",
            audio: "Craquement des articulations, vertige auditif.",
            odeur: "L'air est raréfié, chargé d'électricité.",
            lumiere: "Lumière ambiante diffuse sans source.",
          },
          narration: {
            declencheur: "Franchissement physique.",
            texte_a_lire: "Un pas. Deux pas. Le monde bascule. Vous ne descendez plus, vous... tombez vers le haut ? Non, la gravité a pivoté de 10 degrés. Vous marchez sur le mur, qui est maintenant le sol.",
            contexte_mj: "Transition vers les règles de la Spirale. Désorientation des joueurs.",
            objectif: "S'adapter à la nouvelle gravité.",
          },
          mecaniques: {
            defis: [
              "Acrobaties (DD 12) : Ne pas tomber lors du changement de gravité.",
              "Constitution (DD 10) : Résister à la nausée."
            ],
            indices: ["Les lois de la physique sont locales ici."],
            recompenses: "Accès à la Spirale proprement dite.",
          },
          transitions: {
            success: "Arrivée sur le Balcon.",
            fail: "Chute mineure (dégâts contondants).",
          },
        },
        {
          title: "Scène 5 : Le Balcon",
          type: "Cliffhanger",
          locationId: "spirale_balcon_inverse",
          npcIds: ["exploratrice_perdue"],
          description: {
            sous_titre: "Un panorama impossible.",
            visuel: "Une corniche de pierre donnant sur un vide infini... rempli de tours et d'escaliers flottants, la tête en bas.",
            audio: "Le vent des profondeurs hurle.",
            odeur: "Ozone pur.",
            lumiere: "Des nébuleuses violettes éclairent le vide.",
          },
          narration: {
            declencheur: "Arrivée sur la plateforme.",
            texte_a_lire: "Devant vous s'étend la Spirale. Un donjon inversé, creusé non dans la roche, mais dans la réalité. Sur la corniche, une silhouette humaine vous observe, épée au clair. C'est Lysa.",
            contexte_mj: "Lysa est une exploratrice perdue depuis des jours. Elle connaît les règles du Premier Cercle.",
            objectif: "Rencontrer Lysa et obtenir des infos.",
          },
          mecaniques: {
            defis: [
              "Diplomatie (DD 12) : Calmer Lysa qui est sur les nerfs.",
              "Perception (DD 10) : Voir le chemin qui continue le long d'une chaîne géante."
            ],
            indices: ["Lysa : 'Ne revenez jamais sur vos pas, le chemin change derrière vous.'"],
            recompenses: "Lysa rejoint le groupe (temporairement) ou donne sa carte.",
          },
          transitions: {
            success: "Début de l'Acte 4 avec un guide.",
            fail: "Début de l'Acte 4 seul.",
          },
        },
      ],
    },
    {
      title: "ACTE 4 : LE PREMIER CERCLE",
      stake: "Survie en milieu hostile.",
      location: "La Spirale (Haut).",
      scenes: [
        {
          title: "Scène 1 : L'Architecture Vivante",
          type: "Mécanique",
          locationId: "spirale_premier_cercle",
          npcIds: [],
          description: {
            sous_titre: "Le labyrinthe qui triche.",
            visuel: "Couloirs de pierre lisse qui semblent respirer. Les portes changent de place quand on ne les regarde pas.",
            audio: "Bruit de pierre qui frotte contre la pierre dans votre dos.",
            odeur: "Absence d'odeur, stérilité inquiétante.",
            lumiere: "Phosphorescence des murs.",
          },
          narration: {
            declencheur: "Exploration du premier couloir.",
            texte_a_lire: "Vous avancez dans le couloir. Vous vous retournez un instant... le chemin par lequel vous êtes venus a disparu. Il n'y a plus qu'un mur lisse. La Spirale se referme derrière vous.",
            contexte_mj: "Mécanique du donjon : pas de retour arrière simple. Il faut avancer. Règle : Si on quitte une salle, le couloir derrière change.",
            objectif: "Comprendre et accepter la règle du 'toujours tout droit'.",
          },
          mecaniques: {
            defis: [
              "Survie / Intelligence (DD 15) : Repérer les motifs récurrents pour ne pas tourner en rond.",
              "Cartographie (DD 20) : Essayer de tracer un plan (très difficile)."
            ],
            indices: ["Suivre le flux d'énergie violette mène au cœur."],
            recompenses: "Progression vers le centre.",
          },
          transitions: {
            success: "Progression fluide.",
            fail: "Errance, fatigue, jets de rencontre aléatoire.",
          },
        },
        {
          title: "Scène 2 : Les Anciens Mineurs",
          type: "Combat",
          locationId: "spirale_premier_cercle",
          npcIds: [],
          description: {
            sous_titre: "Ceux qui n'ont jamais remonté.",
            visuel: "Des silhouettes voûtées, portant des lambeaux de tenues de mineurs nains d'il y a un siècle.",
            audio: "'Creuser... encore... creuser...'",
            odeur: "Moisissure et vieux cuir.",
            lumiere: "Leurs yeux sont des orbites vides.",
          },
          narration: {
            declencheur: "Entrée dans une salle d'extraction ancienne.",
            texte_a_lire: "Ils frappent les murs avec des os ou des débris. Ce sont des goules, ou pire, des mineurs d'antan animés par la volonté du donjon. Ils se tournent vers vous, pioches levées.",
            contexte_mj: "Goules avec équipement de mineur (CA améliorée, attaques avec pioches).",
            objectif: "Survivre à l'embuscade.",
          },
          mecaniques: {
            defis: [
              "Combat : Vaincre les morts-vivants.",
              "Religion (DD 12) : Comprendre qu'ils ne sont pas des morts-vivants classiques, mais des 'marionnettes' de la Spirale."
            ],
            indices: ["Ils protègent l'accès à la Géode."],
            recompenses: "Vieux bijoux nains, potentiellement une arme magique mineure.",
          },
          transitions: {
            success: "Accès à la salle de la Géode.",
            fail: "Fuite, blessures.",
          },
        },
        {
          title: "Scène 3 : La Géode Chantante",
          type: "Objectif",
          locationId: "spirale_coeur_geode",
          npcIds: ["geode_avatar"],
          description: {
            sous_titre: "Le cœur du problème.",
            visuel: "Une immense caverne cristalline. Au centre, une géode de la taille d'une maison pulse violemment.",
            audio: "Le HURLEMENT. C'est ici. Le son est physique, il fait vibrer vos os.",
            odeur: "Air ionisé à l'extrême.",
            lumiere: "Éblouissante, violette et blanche.",
          },
          narration: {
            declencheur: "Entrée dans la salle.",
            texte_a_lire: "C'est la source du chant qui rend les mineurs fous. Une excroissance de la Spirale qui perce vers notre réalité. L'Avatar de la Géode se manifeste, une forme humanoïde faite de cristal tranchant.",
            contexte_mj: "Boss de l'acte. Le Cristal de Thade se met à vibrer si fort qu'il fait mal à tenir. Action : Détruire la géode ou la drainer.",
            objectif: "Neutraliser la Géode (la détruire ou la drainer avec le cristal).",
          },
          mecaniques: {
            defis: [
              "Combat : Affronter l'Avatar de la Géode.",
              "Arcanes (DD 16) : Utiliser le Cristal de Thade pour siphonner l'énergie au lieu de combattre (Action complexe).",
              "Volonté (DD 14) : Résister aux dégâts soniques par tour."
            ],
            indices: ["Thade voulait cette énergie. Le cristal est plein à craquer."],
            recompenses: "Cristal de Thade chargé (Objet clé). La mine se calme.",
          },
          transitions: {
            success: "La Géode s'éteint. La Spirale tremble (rejet).",
            fail: "Mort ou fuite sans résoudre le problème.",
          },
        },
        {
          title: "Scène 4 : Le Nettoyeur",
          type: "Rencontre",
          locationId: "spirale_premier_cercle",
          npcIds: ["cube_nettoyeur"],
          description: {
            sous_titre: "Le système immunitaire s'active.",
            visuel: "Un cube gélatineux ou une masse amorphe qui avance, dissolvant le sol derrière lui.",
            audio: "Succion humide.",
            odeur: "Acide pur.",
            lumiere: "Translucide, englobant les débris.",
          },
          narration: {
            declencheur: "Après avoir neutralisé la Géode.",
            texte_a_lire: "La Spirale réagit à l'agression. Quelque chose arrive dans le couloir pour 'nettoyer' l'infection... c'est-à-dire vous.",
            contexte_mj: "Course-poursuite ou combat désespéré. Le donjon veut les expulser. Système immunitaire du donjon.",
            objectif: "Fuir vers la sortie.",
          },
          mecaniques: {
            defis: [
              "Course-poursuite (Skill Challenge) : Acrobaties, Athlétisme, Survie.",
              "Combat : Ralentir le Nettoyeur."
            ],
            indices: ["Le chemin de retour est temporairement stable, comme si le donjon vous recrachait."],
            recompenses: "Survie.",
          },
          transitions: {
            success: "Retour à la fissure.",
            fail: "Dégâts d'acide, perte d'équipement.",
          },
        },
        {
          title: "Scène 5 : Le Rejet",
          type: "Fuite",
          locationId: "spirale_premier_cercle",
          npcIds: [],
          description: {
            sous_titre: "L'expulsion.",
            visuel: "La réalité se tord. La fissure est là, palpitante.",
            audio: "Le monde crie.",
            odeur: "Vide.",
            lumiere: "Stroboscopique.",
          },
          narration: {
            declencheur: "Arrivée à la fissure.",
            texte_a_lire: "Vous sautez à travers la brèche. La gravité s'inverse à nouveau brutalement. Vous vous écrasez sur le sol de pierre froide de la mine. Le silence revient. C'est fini... pour l'instant.",
            contexte_mj: "Retour brutal à la réalité. La Spirale tremble après la destruction de la géode. Les PJ sont meurtris mais vivants.",
            objectif: "Regagner la surface.",
          },
          mecaniques: {
            defis: [
              "Acrobaties (DD 12) : Atterrissage contrôlé.",
              "Vigueur (DD 12) : Ne pas être étourdi."
            ],
            indices: ["La fissure se referme partiellement, mais reste active."],
            recompenses: "Fin de l'Acte 4.",
          },
          transitions: {
            success: "Retour à la mine.",
            fail: "Dégâts de chute.",
          },
        },
      ],
    },
    {
      title: "ACTE 5 : LE SABOTAGE",
      stake: "Trahison et politique.",
      location: "Retour surface.",
      scenes: [
        {
          title: "Scène 1 : Retour en Terre Connue",
          type: "Répit",
          locationId: "mine_argent",
          npcIds: ["contremaitre_nain_mine"],
          description: {
            sous_titre: "Le calme avant la tempête.",
            visuel: "Le niveau -1 est calme. Grelm le contremaître vous attend, l'air soucieux.",
            audio: "Le bruit normal de la mine (gouttes d'eau) est revenu.",
            odeur: "Poussière familière.",
            lumiere: "Lanterne de Grelm.",
          },
          narration: {
            declencheur: "Arrivée au point de rendez-vous.",
            texte_a_lire: "'Vous êtes vivants ! Par la barbe de Moradin, le chant a cessé. Qu'avez-vous fait ?' Grelm semble soulagé, mais il regarde nerveusement vers l'ascenseur.",
            contexte_mj: "Mine stable. Le chant a cessé. Les PJ ont le Cristal chargé d'énergie. Grelm est honnête, mais il sait que des 'hommes du Conseil' sont descendus.",
            objectif: "Faire un rapport rapide et appeler l'ascenseur.",
          },
          mecaniques: {
            defis: [
              "Psychologie (DD 12) : Sentir l'inquiétude de Grelm.",
              "Diplomatie : Rassurer le nain."
            ],
            indices: ["Grelm : 'D'autres sont descendus après vous. Des mercenaires. Ils ont dit qu'ils venaient vous aider.'"],
            recompenses: "Information sur l'embuscade.",
          },
          transitions: {
            success: "Préparation au combat.",
            fail: "Surprise à la scène suivante.",
          },
        },
        {
          title: "Scène 2 : Les Secouristes",
          type: "Embuscade",
          locationId: "mine_argent",
          npcIds: [],
          description: {
            sous_titre: "Les nettoyeurs de Thade.",
            visuel: "Des hommes en armures légères, visages masqués, surgissent des ombres près de la cage.",
            audio: "Armes qu'on dégaine.",
            odeur: "Huile d'arme.",
            lumiere: "Ils ont brisé les lanternes environnantes.",
          },
          narration: {
            declencheur: "Approche de la cage.",
            texte_a_lire: "'Le Maître veut le cristal. Et pas de témoins.' Pas de négociation. Ils attaquent.",
            contexte_mj: "Mercenaires de Thade déguisés. Objectif : Récupérer le cristal, pas de témoins.",
            objectif: "Survivre et garder le cristal.",
          },
          mecaniques: {
            defis: [
              "Combat : Vaincre les mercenaires.",
              "Protection : Empêcher qu'ils ne tuent Grelm (témoin)."
            ],
            indices: ["Ils portent un sceau discret de la maison Coren."],
            recompenses: "Équipement de qualité, ordres écrits ('Récupérer le sujet, nettoyer la zone').",
          },
          transitions: {
            success: "Accès à la cage.",
            fail: "Capture (scénario alternatif) ou fuite difficile.",
          },
        },
        {
          title: "Scène 3 : L'Effondrement",
          type: "Catastrophe",
          locationId: "mine_argent",
          npcIds: [],
          description: {
            sous_titre: "Effacer les preuves.",
            visuel: "Des charges explosives sur les piliers de soutènement. La mèche brûle.",
            audio: "Sifflement de la mèche.",
            odeur: "Poudre noire.",
            lumiere: "L'étincelle qui court.",
          },
          narration: {
            declencheur: "Pendant ou après le combat.",
            texte_a_lire: "Le dernier mercenaire sourit en mourant. 'Pour Val-d'Ombre'. Il a activé les charges. La mine va s'effondrer sur la brèche... et sur vous.",
            contexte_mj: "Explosifs mercenaires sautent. Compte à rebours. Il faut fuir par la cage.",
            objectif: "Remonter avant l'explosion.",
          },
          mecaniques: {
            defis: [
              "Athlétisme (DD 12) : Courir vers la cage.",
              "Ingénierie (DD 15) : Tenter de désamorcer (risqué)."
            ],
            indices: ["Thade préfère détruire la mine que de laisser des preuves de la Spirale."],
            recompenses: "Survie in extremis.",
          },
          transitions: {
            success: "Remontée vers la surface.",
            fail: "Dégâts d'effondrement, ensevelissement partiel.",
          },
        },
        {
          title: "Scène 4 : Confrontation Surface",
          type: "Social",
          locationId: "quartier_des_mineurs_place",
          npcIds: ["durnik_chef_mineur", "thade_coren"],
          description: {
            sous_titre: "La vérité contre le pouvoir.",
            visuel: "La cage émerge dans la poussière. Durnik et Thade sont là, entourés de gardes et de mineurs.",
            audio: "Explosion sourde dans les profondeurs. Silence de la foule.",
            odeur: "Poussière qui remonte du puits.",
            lumiere: "Jour pâle, aveuglant après les profondeurs.",
          },
          narration: {
            declencheur: "Sortie de la cage.",
            texte_a_lire: "La terre tremble une dernière fois. La mine est scellée. Thade s'avance, visage inquiet (joué). 'Dieux merci, vous avez survécu à ce terrible accident. Avez-vous... les relevés ?'",
            contexte_mj: "Thade et Durnik présents. Thade retourne la situation (accuse le trauma des PJ). Il veut récupérer le cristal.",
            objectif: "Gérer la situation politique. Rendre le cristal ou le cacher ?",
          },
          mecaniques: {
            defis: [
              "Intimidation / Diplomatie (DD 16) : Révéler la trahison de Thade (difficile sans preuves tangibles).",
              "Bluff (DD 14) : Cacher le cristal ou mentir sur ce qui s'est passé.",
              "Psychologie : Voir que Thade est prêt à tout pour le cristal."
            ],
            indices: ["Thade perd son sang-froid si on refuse le cristal."],
            recompenses: "XP de fin de scénario, Réputation (Mineurs ou Conseil).",
          },
          transitions: {
            success: "Fin du scénario.",
            fail: "Thade récupère le cristal par la force ou la ruse, mais les PJ sont vivants.",
          },
        },
        {
          title: "Scène 5 : Le Fossé se creuse",
          type: "Conclusion",
          locationId: "quartier_des_mineurs_place",
          npcIds: [],
          description: {
            sous_titre: "Épilogue.",
            visuel: "Les mineurs regardent leur mine détruite. Thade repart vers la Tour des Mages.",
            audio: "Le vent tourne.",
            odeur: "Amertume.",
            lumiere: "Crépuscule.",
          },
          narration: {
            declencheur: "Départ des protagonistes.",
            texte_a_lire: "La grève est finie, car il n'y a plus de mine. Les Nains vous regardent avec respect, mais aussi tristesse. Thade a ce qu'il voulait, ou une partie. Et la Spirale... la Spirale est toujours là, juste sous vos pieds.",
            contexte_mj: "Grève finie mais mine sabotée. Nains blâment la magie, Mages blâment la mine. Thade a son énergie.",
            objectif: "Bilan.",
          },
          mecaniques: {
            defis: [],
            indices: ["Thade va utiliser l'énergie pour ouvrir un passage plus stable (Scénario 3/4)."],
            recompenses: "Montée de niveau.",
          },
          transitions: {
            success: "Vers Scénario 3.",
            fail: "Vers Scénario 3.",
          },
        },
      ],
    },
  ],
};
\`;

fs.writeFileSync(filePath, content, 'utf8');
console.log('File updated successfully');
