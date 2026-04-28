/**
 * Scénario 3 - Acte 6 : La Fuite par l'Abîme
 * Égouts, Ville Morte, Cimetière, Entrée de la Spirale
 *
 * NOTE : cet acte remplace l'ancien acte6_chute_temple (qui contenait à tort
 * un combat final contre Thade transformé en liche, en contradiction directe
 * avec le climax du Scénario 5). Il fusionne aussi l'ancien acte7_descente_abime
 * en un acte unique de fuite, qui se conclut par le passage forcé dans la Spirale.
 *
 * Thade reste hors d'atteinte ici. Il n'apparaît que sous forme de projection
 * narquoise pour scellr le piège : Valombre est sa nécropole, et la seule
 * "sortie" est la Spirale — qu'il a délibérément laissée ouverte.
 */

export const acte6 = {
  title: "ACTE 6 : LA FUITE PAR L'ABÎME",
  stake:
    "Évacuer les survivants du Temple-Forgeron, traverser une ville devenue nécropole, et plonger dans la Spirale comme seule issue.",
  location: "Égouts, Rues de Valombre, Cimetière, Entrée de la Spirale.",
  scenes: [
    {
      title: "Scène 1 : Le Passage sous l'Autel",
      type: "Urgence / Skill Challenge",
      image: "./images/scenes/egouts_temple.jpg",
      locationId: "egouts_sous_temple",
      npcIds: ["durnik_chef_mineur", "thorgar_pretre_nain"],
      description: {
        resume:
          "Évacuation par le passage secret sous le Temple. Les égouts s'effondrent à mesure que le dôme presse la roche.",
        visuel:
          "Sous l'autel de Moradin, une dalle de granit est descellée. En dessous, un escalier en colimaçon, étroit, suintant. Les survivants — environ 50 nains et quelques humains — descendent en file. La pierre tremble. Au-dessus, on entend les béliers défoncer les portes du Temple.",
        audio:
          "Pleurs étouffés des enfants, ordres murmurés de Durnik, fracas du Temple qui cède au-dessus.",
        odeur: "Égouts, humidité, sueur de panique.",
        lumiere: "Torches vacillantes, à peine de quoi voir trois pas devant.",
      },
      narration: {
        declencheur: "Décision d'évacuer après l'apparition du dôme (fin Acte 5).",
        texte_a_lire:
          "Durnik soulève la dalle. « Passage des Premiers Mineurs. Mes ancêtres l'ont creusé. Il mène au cimetière par le vieux drain. Au-delà... » Il hésite. « Au-delà, il y a une fissure que personne n'a osé approcher depuis des siècles. Vos amis disparus dans la mine en sont peut-être sortis. C'est notre seule chance. »\n\nThorgar bénit la dalle d'un geste rapide. « Moradin nous excusera de désacraliser son autel. Allez. »",
        contexte_mj:
          "Skill challenge de groupe : guider une cinquantaine de survivants dans des égouts qui s'effondrent. Chaque échec coûte 1d4 réfugiés. Encourager les choix tactiques (qui porte les blessés ? qui ouvre la marche ?). Insister sur la dignité de la fuite : ce n'est pas une déroute, c'est un sauvetage organisé.",
        objectif: "Mener les survivants vers la sortie du cimetière.",
      },
      mecaniques: {
        defis: [
          "Skill Challenge : 5 succès avant 3 échecs.",
          "Athlétisme DD 13 : porter les blessés / dégager les éboulements.",
          "Connaissances (Souterrains) DD 14 : choisir la bonne galerie aux croisements.",
          "Diplomatie DD 12 : maintenir le calme de la colonne.",
          "Perception DD 14 : repérer les zombies qui rôdent dans les drains adjacents.",
        ],
        indices: [
          "Les égouts sont anciens — naines pré-fondation, plus solides que le reste.",
          "Une partie du chemin passe sous le cimetière. On entend des choses ramper au-dessus.",
          "Sniv le kobold (s'il a survécu au Sc.1) peut apparaître ici comme guide impromptu.",
        ],
        recompenses:
          "Selon le compteur : 80% / 60% / 40% / 20% des réfugiés survivent jusqu'au cimetière.",
      },
      transitions: {
        success: "La majorité des survivants atteint le drain du cimetière.",
        fail:
          "Lourdes pertes. Durnik est blessé en couvrant la retraite et restera en convalescence pour le Sc.5.",
      },
    },
    {
      title: "Scène 2 : Au-dessus, la Ville Morte",
      type: "Exploration / Horreur",
      image: "./images/scenes/ville_necropole.jpg",
      locationId: "rues_valombre_necropole",
      npcIds: [],
      description: {
        resume:
          "Une portion du parcours passe en surface, dans une ruelle étroite. Valombre s'est éteinte.",
        visuel:
          "Une petite cour intérieure entre deux maisons effondrées. Le ciel est devenu une coupole violette qui filtre toute lumière naturelle. Les rues principales, visibles au bout de la ruelle, sont traversées par des colonnes de cadavres marchant en rang, chaînés par paires, dirigés vers la Tour Arcanique.",
        audio:
          "Aucun cri. Un silence quasi-total, brisé par le claquement régulier des chaînes et le pas mort des colonnes.",
        odeur: "Brume violette acide, charogne, fer rouillé.",
        lumiere: "Crépuscule éternel, teinté de violet.",
      },
      narration: {
        declencheur: "Sortie temporaire en surface pour contourner un éboulement.",
        texte_a_lire:
          "Vous émergez dans une cour. Au bout de la ruelle, vous voyez la grande rue : une procession de morts marche au pas, enchaînés deux par deux, vers la Tour qui pulse à l'horizon. Personne ne vous voit. Personne n'a plus d'yeux pour voir. Sur un mur, une affiche officielle, encore fraîche : 'PROTECTORAT DE VALOMBRE — ORDRE PUBLIC RÉTABLI — TOUS LES CITOYENS LOYAUX SE PRÉSENTERONT À L'INSCRIPTION DE LA TOUR.'\n\nC'est signé : THADE COREN, PROTECTEUR.",
        contexte_mj:
          "Pas de combat, pas de jet — c'est une scène d'horreur PURE. Les PJ doivent VOIR ce que Thade a fait. Insister sur le fait qu'ici, l'horreur est ADMINISTRATIVE : Thade a légalisé la nécropole. Pas de purge sanglante visible — juste des affiches officielles, des listes, des colonnes. La banalité du mal.",
        objectif: "Comprendre l'ampleur de la chute. Replonger dans les égouts.",
      },
      mecaniques: {
        defis: [
          "Volonté DD 14 : ne pas céder au désespoir (échec = -1 à toutes les actions de l'acte).",
          "Discrétion DD 12 : retraverser la cour sans attirer l'attention des sentinelles.",
          "Investigation DD 13 : reconnaître un visage parmi les colonnes (PNJ familier — Mara ? Un mineur connu ?).",
        ],
        indices: [
          "Toutes les affiches sont signées 'Protecteur'. Thade s'est fait remettre le pouvoir LÉGALEMENT.",
          "Les colonnes vont vers la Tour : elle pompe quelque chose des morts.",
          "Reconnaître un visage = motivation supplémentaire pour le Sc.5 (lien personnel).",
        ],
        recompenses:
          "Détermination renforcée. Bonus narratif aux jets de Volonté du Sc.5 si la Volonté est réussie ici.",
      },
      transitions: {
        success: "Retour dans les égouts, plus déterminés que jamais.",
        fail:
          "Repérés par une sentinelle. Combat différé à la Scène 3 (cimetière).",
      },
    },
    {
      title: "Scène 3 : Le Cimetière des Sceaux Brisés",
      type: "Combat / Lore",
      image: "./images/scenes/cimetiere_maudit.jpg",
      locationId: "cimetiere_valombre",
      npcIds: ["thanes_morts_corrompus", "horde_morts_vivants"],
      description: {
        resume:
          "Le cimetière nain où tout a commencé (Sc.1) est devenu l'épicentre. Les Thanes profanés se sont relevés, mais ils gardent encore quelque chose des nains qu'ils étaient.",
        visuel:
          "Le cimetière des Terrasses, méconnaissable. Les tombes des Thanes sont éventrées de l'intérieur. Au centre, là où les profanations du Sc.1 ont commencé, une fissure violette pulse au sol — l'Entrée. Autour d'elle, six silhouettes en armures naines anciennes, droites, immobiles. Au loin, des hordes de morts-vivants ordinaires.",
        audio:
          "Les armures anciennes ne grincent pas. Les Thanes sont silencieux. Les hordes ordinaires grognent et claquent des dents.",
        odeur: "Terre, vieux fer, ozone près de la fissure.",
        lumiere: "Lune rouge filtrée par le dôme, lueur violette de la fissure.",
      },
      narration: {
        declencheur: "Sortie du drain dans le cimetière.",
        texte_a_lire:
          "Vous reconnaissez le cimetière. Là où Jaren creusait, il y a une vie. Sauf qu'à présent, c'est une plaie ouverte : une fissure violette dans le sol, qui pulse comme une artère. Et autour d'elle, six Thanes anciens en armure complète, immobiles, vous regardent. Ils ne chargent pas. Ils ATTENDENT.\n\nThorgar tombe à genoux : « Par Moradin. Ils savent encore qui ils sont. Coren n'a pas pu briser leur âme — seulement leurs sceaux. »",
        contexte_mj:
          "Révélation importante : les Thanes profanés au Sc.1 ne sont pas devenus de simples zombies. Leur âme résiste. Si les PJ les approchent avec respect (Religion, paroles correctes), ils peuvent les laisser passer ET tenir la fissure derrière eux le temps que les réfugiés s'échappent dans la Spirale. Sinon, combat très difficile. Les hordes ordinaires en fond de scène sont la pression temporelle.",
        objectif:
          "Faire passer les réfugiés par la fissure. Honorer ou combattre les Thanes.",
      },
      mecaniques: {
        defis: [
          "Connaissances (Religion) DD 16 : reconnaître le rite funéraire nain et le prononcer.",
          "Diplomatie DD 18 : parler aux Thanes (bonus +4 si Thorgar canalise une bénédiction).",
          "Combat alternatif : 6 Thanes Profanés (FP 7) — TRÈS difficile, à éviter.",
          "Combat secondaire : vagues de morts-vivants ordinaires (FP 1-2) qui arrivent par le portail du cimetière (3 succès en Combat / Discrétion / Tactique pour gagner du temps).",
          "Médecine + Athlétisme DD 12 : faire passer les réfugiés blessés par la fissure (1 jet par tranche de 10 réfugiés).",
        ],
        indices: [
          "Les Thanes répondent à leurs noms (gravés sur les tombes éventrées).",
          "Si honorés, ils GARDERONT la fissure derrière les PJ — empêchant Thade de la suivre.",
          "Sniv (si présent) peut traduire des bribes de nain ancien que les Thanes prononcent.",
          "Thorgar peut, en sacrifice, restaurer un sceau partiel sur la fissure (réduit la corruption pour le Sc.5, mais l'épuise).",
        ],
        recompenses:
          "Si Thanes honorés : la fissure est gardée derrière les PJ (bonus narratif Sc.5). Reconnaissance des Premiers Gardiens (lien direct avec Sc.4 Acte 3).",
      },
      transitions: {
        success: "Tous les survivants viables passent dans la Spirale.",
        fail:
          "Combat dévastateur. Pertes lourdes parmi les réfugiés. La fissure reste ouverte derrière eux.",
      },
    },
    {
      title: "Scène 4 : La Voix de la Tour",
      type: "Cinématique / Narration",
      image: "./images/scenes/dome_violet.jpg",
      locationId: "cimetiere_valombre_fissure",
      npcIds: ["thade_coren_projection"],
      description: {
        resume:
          "Au moment du saut, une projection de Thade s'adresse aux PJ. Pas de combat — un dernier acte de manipulation.",
        visuel:
          "À mi-chemin entre le sol et la fissure, une silhouette violette se condense dans l'air. Pas Thade en personne : une projection, transparente, sans poids. Il est calme, presque amical.",
        audio:
          "La voix de Thade arrive avec un léger décalage, comme une lettre lue à voix haute.",
        odeur: "L'odeur de la lavande de son bureau, transportée par la brume.",
        lumiere: "La projection émet une lueur violette douce.",
      },
      narration: {
        declencheur: "Au seuil de la fissure, juste avant le saut.",
        texte_a_lire:
          "« Vous y êtes. Bravo. Sincèrement. Je n'attendais pas que vous teniez aussi longtemps. »\n\nThade — sa projection — vous sourit. Il n'y a pas de menace. Juste une fatigue infinie.\n\n« La Spirale est ouverte. Je l'ai laissée ouverte POUR vous. Parce que tant que vous y êtes, je sais où vous êtes. Allez-y. Cherchez. Trouvez ce que vous voulez. Quand vous reviendrez, Valombre m'appartiendra entièrement, et vous serez les derniers témoins d'un monde qui n'existera plus. Je vous préparerai un thé. »\n\nLa projection s'efface lentement. La fissure pulse, attend.",
        contexte_mj:
          "AUCUN combat. C'est une scène de manipulation pure et de mise en place. Thade ne dit pas la vérité complète : il ignore que les Premiers Gardiens et Sealine attendent les PJ dans la Spirale (Sc.4). Il croit les envoyer mourir. C'est SON erreur. Les joueurs doivent ressentir cela — qu'ils vont apprendre quelque chose qu'il ignore.",
        objectif: "Sauter dans la Spirale.",
      },
      mecaniques: {
        defis: [
          "Psychologie DD 16 : sentir que Thade est SINCÈREMENT fatigué — il n'aime pas ce qu'il fait, il continue par compulsion.",
          "Volonté DD 12 : résister à l'envie de répliquer (un PJ qui parle à la projection ne reçoit aucune information utile).",
        ],
        indices: [
          "Thade ignore l'existence des Premiers Gardiens et de Sealine dans la Spirale.",
          "Il croit envoyer les PJ à la mort. C'est une faille exploitable.",
          "La fissure est ouverte VOLONTAIREMENT. Elle peut donc être refermée par Thade — mais seulement après le retour des PJ (cliffhanger Sc.4).",
        ],
        recompenses:
          "Information stratégique cruciale : Thade ne sait pas tout. Bonus narratif à toute action surprise au Sc.5.",
      },
      transitions: {
        success: "Saut dans la Spirale.",
      },
    },
    {
      title: "Scène 5 : Le Seuil",
      type: "Transition",
      image: "./images/scenes/entree_spirale.jpg",
      locationId: "entree_spirale",
      npcIds: [],
      description: {
        resume:
          "Plongée dans la Spirale. Fin du Scénario 3, transition vers le Scénario 4.",
        visuel:
          "La fissure violette, vue de près, est un puits sans fond qui descend dans une géométrie impossible. L'air autour d'elle vibre. Un par un, les survivants sautent. Les Thanes Profanés, derrière les PJ, referment leurs rangs autour de la fissure pour la garder.",
        audio:
          "Bourdonnement profond, vent d'un autre monde, écho des chants funéraires nains.",
        odeur: "Énergie sèche, ozone, quelque chose de plus ancien que la pierre.",
        lumiere: "Lueur violette aveuglante au cœur de la fissure.",
      },
      narration: {
        declencheur: "Plongée dans la fissure.",
        texte_a_lire:
          "Thorgar passe le premier, ses bénédictions à la main. Durnik suit avec les blessés. Mara — si elle a survécu — vous fait un signe avant de sauter. Vous êtes les derniers. Derrière vous, les Thanes Profanés se tournent vers la ville, hache levée, gardiens silencieux d'un seuil qu'ils ne laisseront plus franchir.\n\nVous sautez. La Spirale vous aspire. Le monde se retourne.",
        contexte_mj:
          "Fin du Scénario 3. Les PJ et les survivants entrent dans la Spirale et se retrouvent dans la chute du Sc.4 Acte 1. Insister sur la dignité du moment : ce n'est pas une défaite, c'est un repli stratégique. Ils reviendront.",
        objectif: "Entrer dans la Spirale.",
      },
      mecaniques: {
        defis: [
          "Volonté DD 13 : ne pas se laisser submerger par les visions du saut.",
          "Vigueur DD 12 : encaisser le choc dimensionnel.",
        ],
        indices: [
          "La Spirale conserve les visiteurs différemment du temps réel (graine pour la révélation 'un mois s'est écoulé' du Sc.4 Acte 5).",
          "Quelqu'un, dans la Spirale, attend ces visiteurs depuis longtemps.",
        ],
        recompenses: "Passage dans la Spirale. Fin du Scénario 3.",
      },
      transitions: {
        success: "Vers le Scénario 4 : L'Écosystème Aberrant.",
        fail: "Vers le Scénario 4, désorientés mais entrés.",
      },
    },
  ],
};
