/**
 * Scénario 3 - Acte 4 : La Nuit des Longs Couteaux
 * Rues de Valombre
 */

export const acte4 = {
  title: "ACTE 4 : LA NUIT DES LONGS COUTEAUX",
  stake:
    "Traverser une ville en guerre civile et rejoindre la résistance naine.",
  location: "Rues de Valombre (Nuit).",
  scenes: [
    {
      title: "Scène 1 : La Traversée du Quartier Artisan",
      type: "Infiltration / Discrétion",
      image: "./images/scenes/rafle_artisan.jpg",
      locationId: "quartier_artisan_patrouille",
      npcIds: ["patrouilles_mixtes", "automates_guilde"],
      description: {
        resume: "Infiltration du quartier artisan patrouillé",
        visuel:
          "Le quartier artisan est méconnaissable. Les ateliers sont scellés, les portes marquées du sceau de la Guilde. Des patrouilles mixtes (gardes humains et automates de combat) ratissent les rues. Des affiches avec les visages des PJ sont placardées partout. Des civils terrifiés se cachent derrière leurs volets.",
        audio:
          "Pas lourds des patrouilles, cliquetis mécaniques des automates, ordres aboyés, pleurs étouffés.",
        odeur: "Fumée de bois brûlé, huile des automates, peur.",
        lumiere:
          "Nuit noire. Seules les torches des patrouilles et les yeux lumineux des automates percent l'obscurité.",
      },
      narration: {
        declencheur:
          "Les PJ descendent des toits et doivent traverser le quartier artisan pour rejoindre le Temple-Forgeron.",
        texte_a_lire:
          "Vous descendez dans les ruelles du quartier artisan. Chaque ombre pourrait cacher une patrouille. Devant vous, un groupe de gardes accompagnés de deux automates de combat de la Guilde patrouille méthodiquement. Les automates scannent les façades avec leurs yeux de cristal rouge. L'un d'eux s'arrête, pivote vers votre position. A-t-il détecté quelque chose ? Vous retenez votre souffle. Après un moment qui semble durer une éternité, il reprend sa marche. Vous devez traverser trois rues principales pour atteindre le quartier nain. Chacune est patrouillée.",
        contexte_mj:
          "Scène d'infiltration tendue. Les PJ doivent éviter les patrouilles ou les neutraliser discrètement. Les automates sont difficiles à tromper (Perception +10). Si l'alarme est donnée, des renforts arrivent rapidement. Les PJ peuvent utiliser la magie, la discrétion, ou trouver des passages alternatifs.",
        objectif: "Traverser le quartier artisan sans être détectés.",
      },
      mecaniques: {
        defis: [
          "Discrétion (DD 16) : Se déplacer sans être vu par les patrouilles.",
          "Déplacement silencieux (DD 14) : Ne pas faire de bruit sur les pavés.",
          "Connaissance (Ingénierie) (DD 15) : Comprendre les patterns de détection des automates et les éviter.",
          "Bluff (DD 18) : Si repérés, se faire passer pour des citoyens loyaux (très difficile avec les affiches).",
          "Option magique : Invisibilité, Silence, Forme gazeuse facilitent grandement la traversée.",
        ],
        indices: [
          "Les automates détectent le mouvement et la chaleur. Rester immobile fonctionne.",
          "Des égouts offrent un passage alternatif, mais ils sont surveillés aussi.",
          "Un contact dans une maison pourrait offrir un refuge temporaire.",
        ],
        recompenses:
          "Traversée réussie. Si discrets : aucune alerte. Si détectés : poursuite dans la scène suivante.",
      },
      transitions: {
        success:
          "Les PJ atteignent la limite du quartier nain sans être détectés.",
        fail: "Les PJ sont repérés. Des renforts sont appelés et les poursuivent.",
      },
    },
    {
      title: "Scène 2 : L'Horreur de la Place des Exécutions",
      type: "Horreur / Révélation",
      image: "./images/scenes/necropole_brume.jpg",
      locationId: "place_executions_valombre",
      npcIds: ["capitaine_garde_urbaine", "executeur_masque"],
      description: {
        resume: "Thade transforme les nains exécutés en zombies",
        visuel:
          "La place centrale du quartier nain. Une scène d'horreur : des dizaines de nains enchaînés, à genoux. Des gardes en armure noire les exécutent un par un. Mais ce qui glace le sang, c'est ce qui suit : les corps ne restent pas morts. Une brume violette s'échappe de la Tour Arcanique au loin et enveloppe les cadavres. Ils se relèvent, transformés en zombies, et sont enchaînés pour former une armée mort-vivante.",
        audio:
          "Cris des condamnés, choc des lames, puis le silence de mort. Le grognement des zombies qui se lèvent. Une incantation nécromantique murmurée par un mage masqué.",
        odeur: "Sang, chair en décomposition accélérée, ozone nécromantique.",
        lumire:
          "Torches et la lueur violette malsaine de la brume nécromantique.",
      },
      narration: {
        declencheur:
          "Les PJ arrivent à la place et assistent à l'exécution et à la résurrection.",
        texte_a_lire:
          "Vous arrivez à la limite de la place et ce que vous voyez vous glace le sang. Des dizaines de nains, hommes, femmes, même des enfants, sont alignés, enchaînés. Un capitaine de la garde lit une proclamation : 'Par ordre de la Guilde des Mages, vous êtes reconnus coupables de conspiration contre Valombre. Sentence : mort.' Les exécutions commencent. Mais ce n'est pas le pire une brume violette s'infiltre dans les cadavres. Ils se relèvent, les yeux vides. Un mage masqué les enchaîne magiquement avant de noter des résultats sur un carnet. Vous réalisez avec horreur : Thade ne se contente pas de tuer les nains. Il les transforme en armée mort-vivante.",
        contexte_mj:
          "Révélation majeure : le plan de Thade est de transformer Valombre en nécropole et les nains en armée de zombies. La brume nécromantique vient de la Tour Arcanique où Thade effectue un rituel de masse. Les PJ doivent décider : intervenir (risqué, sauver quelques nains) ou continuer discrètement (pragmatique, mais moralement difficile).",
        objectif: "Comprendre le plan de Thade et décider d'intervenir ou non.",
      },
      mecaniques: {
        defis: [
          "Volonté (DD 16) : Résister à l'horreur de la scène (échec = état 'Secoué' pendant 1 heure).",
          "Connaissance (Religion/Arcanes) (DD 17) : Comprendre que c'est un rituel de masse. Thade canalise l'énergie de la Spirale pour créer des morts-vivants.",
          "Choix moral : Intervenir (combat difficile, sauver 2d6 nains) ou continuer (pas de combat, mais poids moral).",
          "Si intervention : Combat contre 1 Nécromancien (Ensorceleur 6) + 8 Zombies + 4 Gardes.",
        ],
        indices: [
          "La brume vient directement de la Tour Arcanique. Thade y effectue le rituel.",
          "Les zombies sont contrôlés magiquement. Détruire le nécromancien les libère (mais ils restent hostiles).",
          "Des survivants peuvent révéler que Durnik et Thorgar organisent la résistance au Temple-Forgeron.",
        ],
        recompenses:
          "Si intervention : 2d6 nains sauvés (alliés futurs). Informations sur le rituel. Si non : progression rapide mais culpabilité.",
      },
      transitions: {
        success: "Les PJ s'échappent de la place, avec ou sans avoir agi.",
        fail: "Les PJ sont repérés et doivent fuir sous le feu ennemi.",
      },
    },
    {
      title: "Scène 3 : L'Embuscade du Lieutenant",
      type: "Combat / Boss mineur",
      image: "./images/scenes/embuscade_nuit.jpg",
      locationId: "ruelle_sombre_valombre",
      npcIds: ["kael_ombrelame", "squelettes_geants"],
      description: {
        resume: "Embuscade de Kael Ombrelame dans la ruelle",
        visuel:
          "Une ruelle étroite, seul passage vers le Temple-Forgeron. Soudain, les ombres bougent. Un homme en robe noire émerge, flanqué de squelettes géants. Kael Ombrelame, lieutenant de Thade, nécromancien de talent. Il sourit : 'Le Maître savait que vous viendriez ici. Il m'a demandé de vous... accueillir.'",
        audio:
          "Cliquetis d'os, rire froid de Kael, incantations nécromantiques.",
        odeur: "Mort et magie noire.",
        lumiere:
          "Ténèbres magiques. Seuls les yeux verts des squelettes et l'aura noire de Kael brillent.",
      },
      narration: {
        declencheur: "Les PJ entrent dans la ruelle piège.",
        texte_a_lire:
          "Les ombres se solidifient. Kael Ombrelame barre la route. Il ne se présente pas. Il pointe simplement son bâton vers vous et murmure à ses squelettes : « Cibles prioritaires. Élimination. »",
        contexte_mj:
          "Boss fight mineur. Kael est un nécromancien niveau 8, dangereux mais pas imbattable. Il utilise des sorts de contrôle et de dégâts nécromantiques. Les squelettes géants sont des tanks. Kael fuit si réduit à moins de 20% PV, jurant de revenir. Les PJ peuvent l'interroger s'ils le capturent.",
        objectif: "Vaincre ou faire fuir Kael Ombrelame.",
      },
      mecaniques: {
        defis: [
          "Combat : Kael Ombrelame (Nécromancien 8) + 4 Squelettes Géants (FP 4 chacun).",
          "Kael utilise : Rayon d'affaiblissement, Toucher glacial, Animation des morts, Éclair.",
          "Tactique : Kael reste en arrière, les squelettes protègent. Il fuit via Porte dimensionnelle si en danger.",
          "Si capturé : Intimidation (DD 20) pour le faire parler. Révèle que Thade prépare 'l'Ascension' à la Tour.",
        ],
        indices: [
          "Kael porte un médaillon avec le sceau de Thade. Preuve de la connexion.",
          "Il mentionne 'l'Ascension' si interrogé. Thade veut devenir un liche ou pire.",
          "Les squelettes portent des armures de la garde de Valombre. Ce sont d'anciens soldats.",
        ],
        recompenses:
          "XP du combat. Médaillon de Kael (preuve). Informations sur le plan de Thade. Bâton de Kael (+2 aux jets de Nécromancie).",
      },
      transitions: {
        success: "Kael est vaincu ou fuit. La voie vers le Temple est libre.",
        fail: "Les PJ sont blessés et doivent se replier, cherchant un autre chemin.",
      },
    },
    {
      title: "Scène 4 : Le Dilemme de la Forge",
      type: "Choix moral / Action",
      image: "./images/scenes/forge_thorgar.jpg",
      locationId: "forge_annexe_thorgar",
      npcIds: ["thorgar_pretre_nain", "refugies_nains"],
      description: {
        resume: "Dilemme entre sauver les réfugiés ou les explosifs",
        visuel:
          "L'annexe de la forge de Thorgar, prêtre de Moradin. Le bâtiment est encerclé par des gardes et des zombies. À l'intérieur, Thorgar et une vingtaine de réfugiés nains (femmes, enfants, vieillards) sont piégés. Dans la cour, des caisses d'explosifs de mine et d'armes. Les deux sont précieux, mais les PJ ne peuvent pas tout sauver.",
        audio: "Cris des réfugiés, ordres des gardes, grondement des zombies.",
        odeur: "Poudre à canon, sueur, peur.",
        lumiere:
          "Feux des torches des assiégeants. L'intérieur de la forge est sombre.",
      },
      narration: {
        declencheur:
          "Les PJ arrivent près de la forge et constatent la situation.",
        texte_a_lire:
          "Vous apercevez la forge de Thorgar. Elle est encerclée. Une vingtaine de gardes et autant de zombies bloquent les issues. À l'intérieur, vous voyez des silhouettes : Thorgar et des réfugiés. Ils sont piégés. Mais ce n'est pas tout : dans la cour, vous voyez des caisses marquées 'EXPLOSIFS - MINE'. Des armes aussi. Durnik avait stocké du matériel ici pour la résistance. Vous réalisez : vous ne pouvez pas tout sauver. Soit vous créez une diversion pour évacuer les réfugiés (mais les gardes détruiront les explosifs), soit vous sécurisez les explosifs d'abord (mais les réfugiés risquent de mourir). Thorgar vous voit par une fenêtre. Il vous fait signe : 'Sauvez-les ! Les vies avant le matériel !' Mais sans explosifs, le Temple-Forgeron ne tiendra pas longtemps.",
        contexte_mj:
          "Dilemme moral classique. Les PJ doivent choisir entre sauver des vies (réfugiés) ou sécuriser des ressources (explosifs). Les deux options ont des conséquences. Sauver les réfugiés gagne la loyauté de Thorgar mais affaiblit la défense future. Sécuriser les explosifs permet de mieux défendre le Temple mais coûte des vies innocentes.",
        objectif:
          "Choisir entre sauver les réfugiés ou sécuriser les explosifs.",
      },
      mecaniques: {
        defis: [
          "OPTION A - Sauver les réfugiés : Créer une diversion (Bluff DD 16, ou sort de distraction). Combat contre 10 gardes pendant l'évacuation. Les réfugiés s'échappent, mais les explosifs sont détruits.",
          "OPTION B - Sécuriser les explosifs : Infiltration (Discrétion DD 18) pour voler les caisses. Les réfugiés sont massacrés. Thorgar survit mais est brisé moralement.",
          "OPTION C - Tenter les deux : Très difficile. Nécessite un plan élaboré et des jets réussis. Possible mais risqué.",
        ],
        indices: [
          "Thorgar est un prêtre puissant. Si sauvé, il sera un allié majeur.",
          "Les explosifs permettront de tenir le Temple plus longtemps et de créer des pièges.",
          "Les réfugiés incluent des artisans qui peuvent aider à fortifier le Temple.",
        ],
        recompenses:
          "OPTION A : Thorgar loyal + 20 réfugiés sauvés. OPTION B : Explosifs (avantage tactique) mais Thorgar distant. OPTION C : Tout, mais très difficile.",
      },
      transitions: {
        success:
          "Les PJ accomplissent leur choix et fuient vers le Temple-Forgeron.",
        fail: "Les PJ échouent et perdent les deux (réfugiés morts, explosifs détruits).",
      },
    },
    {
      title: "Scène 5 : Le Dernier Bastion",
      type: "Arrivée / Regroupement",
      image: "./images/scenes/temple_forteresse.jpg",
      locationId: "temple_forgeron_moradin",
      npcIds: ["thorgar_pretre_nain", "durnik_chef_mineur", "refugies_nains"],
      description: {
        resume: "Arrivée au Temple-Forgeron et regroupement",
        visuel:
          "Le Temple-Forgeron de Moradin, dieu nain de la forge et de la création. Une forteresse de pierre massive, barricadée. Des nains armés patrouillent les remparts. À l'intérieur, des centaines de réfugiés : familles, guerriers blessés, artisans. Durnik, le chef mineur, organise la défense. Thorgar (s'il a survécu) prie devant l'autel.",
        audio:
          "Prières naines, bruits de fortification, pleurs d'enfants, ordres tactiques.",
        odeur: "Encens de temple, sueur, métal forgé.",
        lumiere:
          "Torches et brasiers. L'autel de Moradin brille d'une lueur dorée rassurante.",
      },
      narration: {
        declencheur: "Les PJ arrivent au Temple-Forgeron.",
        texte_a_lire:
          "Vous franchissez les portes massives du Temple-Forgeron. À l'intérieur, c'est le chaos organisé. Des centaines de nains s'entassent : familles terrorisées, guerriers préparant leurs armes, prêtres soignant les blessés. Durnik vous voit et se précipite : 'Par la barbe de Moradin, vous êtes vivants ! On vous croyait morts à l'Hôtel de Ville.' Il vous serre dans ses bras. 'Bienvenue au dernier bastion libre de Valombre. Nous sommes encerclés, mais nous tiendrons.' Thorgar (si présent) s'approche : 'Vous avez fait ce que vous pouviez. Maintenant, nous devons nous préparer. Thade va venir. Et quand il viendra, ce sera avec toute son armée de morts.' Au loin, vous entendez le grondement d'une horde qui approche. Le siège va commencer.",
        contexte_mj:
          "Point de regroupement. Les PJ retrouvent des alliés (Durnik, Thorgar, réfugiés sauvés). C'est le moment de faire le point, de se reposer brièvement, et de préparer la défense. L'Acte 3 sera le siège du Temple. Les choix des PJ dans l'Acte 2 influencent les ressources disponibles.",
        objectif:
          "Se regrouper, partager les informations, et préparer la défense.",
      },
      mecaniques: {
        defis: [
          "Aucun défi immédiat. Scène de roleplay et de préparation.",
          "Les PJ peuvent partager ce qu'ils ont appris (rituel de Thade, zombies, plan de nécropole).",
          "Inventaire des ressources : Combien de combattants ? D'explosifs ? De nourriture ? D'issues de secours ?",
        ],
        indices: [
          "Durnik révèle qu'il y a un passage secret sous le Temple, menant aux égouts et au cimetière.",
          "Thorgar peut bénir les armes des PJ (+1 contre les morts-vivants pour 24h).",
          "Un éclaireur rapporte : 'Une armée de zombies approche. Des centaines. Peut-être des milliers. Ils seront là à l'aube.'",
        ],
        recompenses:
          "Repos court. Bénédictions de Thorgar. Informations tactiques. Préparation pour l'Acte 3.",
      },
      transitions: {
        success:
          "Les PJ sont prêts pour le siège. L'Acte 3 commence avec l'aube.",
        fail: "Les PJ sont épuisés et mal préparés. Le siège sera plus difficile.",
      },
    },
  ],
};
