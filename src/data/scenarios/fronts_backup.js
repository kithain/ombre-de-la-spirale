import {
  Skull,
  Eye,
  Flag,
  Scale,
  Pickaxe,
  Compass,
} from "lucide-react";

/**
 * Catégories autorisées pour le champ `categorie` d'une Menace.
 */
export const CATEGORIES_MENACE = Object.freeze({
  "Le Cerveau": {
    etiquette: "L'Ambitieux / Le Cerveau",
    couleur: "text-purple-300 border-purple-800/60 bg-purple-950/30",
  },
  "Le Fléau": {
    etiquette: "La Force Brute / Le Fléau",
    couleur: "text-red-300 border-red-800/60 bg-red-950/30",
  },
  "L'Institution": {
    etiquette: "L'Institution / L'Allié ambigu",
    couleur: "text-blue-300 border-blue-800/60 bg-blue-950/30",
  },
  "La Force Environnementale": {
    etiquette: "La Force Environnementale",
    couleur: "text-emerald-300 border-emerald-800/60 bg-emerald-950/30",
  },
});

export const frontsData = [
  // ─────────────────────────────────────────────────────────────
  // FRONT 1 — LE RETOUR IMPOSSIBLE
  // Thade Coren détourne l'Université, la Larme de Vael et la Tour
  // afin de rouvrir le seuil et de ramener Sealine.
  // ─────────────────────────────────────────────────────────────
  {
    id: "front_retour_impossible",
    nom: "Le Retour impossible",
    type: "Front central",
    icone: Skull,
    couleur: "text-violet-300 border-violet-900 bg-violet-950/30",

    enjeu:
      "Thade Coren utilise l'autorité de l'Université, les fragments de la Larme de Vael et les dispositifs de la Tour Arcanique pour forcer une ouverture vers la Spirale. S'il réussit, il ramènera peut-être Sealine, mais transformera Valombre en ancre d'un passage que nul ne saura refermer.",

    description:
      "Depuis huit ans, Thade rassemble les fragments de la Larme, étudie les faiblesses du seuil et instrumentalise les survivants de Nyx. Son plan ne dépend plus seulement de l'affaiblissement des tombes : la Tour devient une machine capable de concentrer artificiellement les flux de la Spirale. Le Front progresse donc même si les PJ protègent les mines ou stabilisent temporairement le sceau. Pour l'arrêter, il faut briser son dispositif, retourner ses soutiens ou l'amener à renoncer lui-même au retour de Sealine.",

    menaces: [
      {
        id: "menace_thade_architecte",
        nom: "Thade Coren, l'Architecte du Retour",
        categorie: "Le Cerveau",
        nature:
          "Mage souverain qui rationalise chaque atrocité comme une nécessité et opère dans le cadre légal jusqu'à ce que le cadre ne suffise plus.",
        objectifFinal:
          "Thade concentre la Larme reconstituée au sommet de la Tour, ouvre le vortex et franchit le seuil pour en extraire Sealine — sacrifiant la stabilité de Valombre et son propre corps comme ancre planaire.",
        idsPnj: ["thade_coren"],
        horloge: {
          taille: 4,
          etapes: [
            {
              titre: "Les composants sont réunis",
              indice:
                "Les prélèvements funéraires, les protocoles de Nyx et les instruments réquisitionnés convergent vers les laboratoires de la Tour. Les assistants de Thade ne savent pas ce qu'ils assemblent, mais chaque livraison réduit ce qui lui manque encore.",
            },
            {
              titre: "La Tour alimente la Larme",
              indice:
                "Les flux arcaniques de plusieurs bâtiments sont détournés vers la Tour. Des cours sont annulés, des salles sont scellées et les protections ordinaires de l'Université deviennent instables.",
            },
            {
              titre: "La Tour passe sous contrôle",
              indice:
                "Les accès sont verrouillés, les communications sont filtrées et les défenseurs de la Tour obéissent à des ordres qu'ils ne peuvent plus discuter. La cuve de cristal et les dispositifs du sommet fonctionnent en continu.",
            },
            {
              titre: "Le vortex s'ouvre",
              indice:
                "Un bourdonnement traverse les Hauteurs, le ciel prend une teinte violette et la Larme devient visible au cœur du vortex. Thade n'a plus besoin d'autorisation, d'assistants ni de dissimulation : le retour a commencé.",
            },
          ],
        },
      },

      {
        id: "menace_larme_vael",
        nom: "La Larme de Vael",
        categorie: "La Force Environnementale",
        nature:
          "Fragment planaire qui accumule les résonances, attire la magie environnante et impose progressivement à la Tour la géométrie de la Spirale.",
        objectifFinal:
          "La Larme se fissure et devient elle-même une ouverture permanente. Même si Thade tombe, le vortex continue de croître jusqu'à ce que la Tour et les quartiers voisins soient absorbés ou transformés.",
        idsPnj: ["thade_coren", "sealine_coren"],
        horloge: {
          taille: 3,
          etapes: [
            {
              titre: "La résonance s'accumule",
              indice:
                "Les objets enchantés dérivent légèrement vers la Tour, les sorts de détection renvoient des échos contradictoires et les mages ressentent une seconde pulsation derrière leur propre magie.",
            },
            {
              titre: "La géométrie se déforme",
              indice:
                "Des couloirs rejoignent des pièces qu'ils ne devraient pas toucher, les fenêtres montrent parfois un ciel laiteux et certains étages semblent plus vastes à l'intérieur qu'à l'extérieur.",
            },
            {
              titre: "La Larme se fissure",
              indice:
                "Une ligne lumineuse traverse l'artefact. Chaque pulsation ouvre brièvement une vue sur la Spirale et arrache de la matière à la Tour. Le phénomène se poursuit désormais sans intervention de Thade.",
            },
          ],
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // FRONT 2 — L'OMBRE DE NYX
  // Les différents cercles clandestins liés au nom de Nyx
  // convergent vers une crise : le protocole S-01, les Endeuillés
  // radicalisés et le Syndicat qui tire profit du chaos.
  // ─────────────────────────────────────────────────────────────
  {
    id: "front_ombre_nyx",
    nom: "L'Ombre de Nyx",
    type: "Front de factions",
    icone: Eye,
    couleur: "text-red-300 border-red-900 bg-red-950/30",

    enjeu:
      "Les cercles de Nyx ne forment pas un ennemi unique mais un tissu de groupes aux motivations contradictoires : des soignants clandestins sincères, un chercheur prêt à tout pour prouver sa méthode, des endeuillés qui glissent vers le fanatisme. Si aucune main ne les sépare, ils vont se détruire mutuellement — ou déclencher une répression aveugle qui frappera aussi les innocents.",

    description:
      "Depuis la catastrophe qui a dispersé l'Ordre de Nyx originel, le nom est devenu un abri pour tous ceux que les institutions n'accueillent pas : Ursula soigne les pauvres dans sa cave, Elian Voss poursuit son protocole S-01 sur des patients non consentants, Edran Morn rassemble des familles endeuillées autour de pratiques de plus en plus radicales. Ces trois cercles se connaissent à peine et ne partagent aucune doctrine. Mais ils partagent le même nom — et les autorités ne feront pas la distinction si une étincelle met le feu.",

    menaces: [
      {
        id: "menace_elian_protocole",
        nom: "Elian Voss et le Protocole S-01",
        categorie: "Le Cerveau",
        nature:
          "Chercheur qui justifie ses crimes par ses résultats et force ses interlocuteurs à choisir entre ses morts et les leurs.",
        objectifFinal:
          "Elian détruit tous les registres du protocole S-01, efface les preuves des patients non consentants et transmet ses données à un commanditaire extérieur — dont le cachet de Caldris sur ses notes laisse supposer l'identité — rendant toute responsabilisation impossible.",
        idsPnj: ["elian_voss"],
        horloge: {
          taille: 3,
          etapes: [
            {
              titre: "Les dossiers « stabilisés »",
              indice:
                "Ursula reçoit des patients qu'elle ne reconnaît pas, accompagnés de notes médicales dans une écriture inconnue. Plusieurs familles de la Vieille Ville cherchent un proche « suivi par un médecin discret » dont elles ont perdu le contact.",
            },
            {
              titre: "Le laboratoire est exposé",
              indice:
                "Quelqu'un a forcé l'entrée du laboratoire sous l'amphithéâtre. Les bocaux opaques ont disparu mais les dossiers sont encore là. Elian change de cache et commence à effacer ses traces méthodiquement.",
            },
            {
              titre: "Les preuves sont détruites",
              indice:
                "Elian brûle les registres principaux et quitte la Vieille Ville. Il ne reste que les deux dossiers cachés sous la plaque et la liste partielle des patients. Sans intervention, la vérité sur S-01 disparaît avec lui.",
            },
          ],
        },
      },

      {
        id: "menace_endeuilles_radicalisation",
        nom: "Les Endeuillés d'Edran Morn",
        categorie: "Le Fléau",
        nature:
          "Meneur capable d'hésiter si ses actes menacent directement des vivants, mais que la douleur collective de son cercle pousse vers des décisions irréparables.",
        objectifFinal:
          "Les Endeuillés, convaincus que les institutions abandonnent leurs morts, pratiquent un rite de communication avec les défunts dans le Cimetière des Terrasses — perturbant directement le sceau des Thanes et déclenchant une réaction planaire qu'ils ne comprennent pas.",
        idsPnj: ["edran_morn"],
        horloge: {
          taille: 4,
          etapes: [
            {
              titre: "Le cercle absorbe les isolés",
              indice:
                "Les familles endeuillées quittent progressivement les réseaux d'entraide ordinaires pour rejoindre Edran. Le groupe devient assez vaste pour protéger ses membres, cacher ses déplacements et imposer sa version des événements.",
            },
            {
              titre: "Les pratiques interdites deviennent la norme",
              indice:
                "Les symboles et fragments de textes de Nyx ne servent plus seulement à soutenir le deuil : ils deviennent des instructions. Ceux qui refusent ces méthodes sont accusés d'abandonner une seconde fois les morts.",
            },
            {
              titre: "Le sceau est perturbé",
              indice:
                "Un premier rite accompli près des tombes laisse des marques durables : runes altérées, froid persistant et réactions dans le Mausolée du Seuil. Le lieu exact peut changer selon les actions des PJ, mais le verrou a été touché.",
            },
            {
              titre: "La brèche involontaire",
              indice:
                "Un rite plus ambitieux ouvre une fissure planaire. Une présence de la Spirale franchit le seuil et les Endeuillés perdent le contrôle de ce qu'ils ont appelé. Edran doit alors fuir, négocier ou assumer les victimes.",
            },
          ],
        },
      },

      {
        id: "menace_syndicat_instrumentalisation",
        nom: "Le Syndicat des Brumes, prestataire de l'ombre",
        categorie: "L'Institution",
        nature:
          "Réseau criminel qui ne prend pas parti mais vend des services à tous les cercles clandestins, rendant chaque escalade un peu plus facile qu'elle ne devrait l'être.",
        objectifFinal:
          "Le Syndicat a accumulé assez de preuves compromettantes sur les institutions, les familles marchandes et certains fonctionnaires pour devenir intouchable — et commence à le faire savoir, transformant ses dettes en protection politique permanente.",
        idsPnj: ["le_collecteur", "contremaite_egouts", "hommes_main_pegre"],
        horloge: {
          taille: 3,
          etapes: [
            {
              titre: "Les routes s'ouvrent",
              indice:
                "Des passages récemment bouchés dans les égouts sous la Vieille Ville sont dégagés. Brek multiplie les équipes de nuit. Des marchandises sans étiquette apparaissent dans les réserves de plusieurs boutiques du Centre Civique.",
            },
            {
              titre: "Le Collecteur monte en gamme",
              indice:
                "Le Collecteur n'accepte plus de contrats ordinaires. Il traite désormais avec des intermédiaires portant des sceaux institutionnels. Odran Bellec remarque des anomalies dans les registres horaires du Beffroi — des cloches ont sonné à des heures non consignées.",
            },
            {
              titre: "Les reconnaissances de dette circulent",
              indice:
                "Des copies de documents compromettants arrivent entre les mains de conseillers, d'un chanoine et d'un délégué nain. Le message est implicite : le Syndicat sait. Personne ne souhaite vérifier combien il sait exactement.",
            },
          ],
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // FRONT 3 — LA BANNIÈRE ET L'ULTIMATUM
  // Caldris observe Valombre se fragiliser et prépare une
  // intervention qui lui permettrait de contrôler les routes
  // orientales — au nom de la sécurité.
  // ─────────────────────────────────────────────────────────────
  {
    id: "front_banniere_ultimatum",
    nom: "La Bannière et l'Ultimatum",
    type: "Front extérieur",
    icone: Flag,
    couleur: "text-sky-300 border-sky-900 bg-sky-950/30",

    enjeu:
      "Caldris n'est pas un ennemi déclaré — c'est une puissance frontalière qui regarde Valombre vaciller et calcule le moment où intervenir deviendra plus rentable qu'attendre. Si Valombre ne produit pas rapidement une preuve de stabilité convaincante, Caldris imposera une quarantaine, puis une tutelle, puis quelque chose qu'on n'appelle pas encore une occupation.",

    description:
      "L'émissaire Maelric est à Valombre pour obtenir des réponses simples à des questions complexes. Il est arrivé par les Pierres du Traité — un vieux dispositif diplomatique datant du traité entre Caldris et Valombre, deux ancrages rituels permettant le passage de porteurs assermentés munis d'un mandat officiel et accompagnés d'un mage de frontière. Ce n'est pas un portail confortable : les émissaires arrivent pâles, saignants du nez, avec des souvenirs incomplets du trajet. Ils peuvent entrer, mais pas ouvrir la route aux marchands, aux armées ou aux réfugiés. Caldris est donc la seule puissance extérieure à savoir que Valombre ne répond plus normalement au monde. Maelric représente un gouvernement qui voit les routes commerciales orientales se dégrader, des rumeurs souterraines filtrer jusqu'aux cols et une cité incapable d'expliquer ce qui se passe sous ses rues. Le Champion de la Bannière Pure, lui, est venu avec une conviction : Valombre a failli à son rôle de verrou, et les héritiers de la Marche Extérieure doivent achever ce que la cité ne peut plus faire elle-même. Ces deux hommes ne se concertent pas toujours. Mais ils se renforcent mutuellement.",

    menaces: [
      {
        id: "menace_emissaire_maelric",
        nom: "L'Émissaire Maelric, la Pression Diplomatique",
        categorie: "L'Institution",
        nature:
          "Représentant courtois et sincèrement inquiet qui réduit les vérités complexes en preuves exploitables et en délais.",
        objectifFinal:
          "Maelric obtient du Conseil une reconnaissance officielle de l'incapacité de Valombre à gérer la crise souterraine, ouvrant la voie à une mission d'inspection caldrisienne permanente sur les routes et les mines — avec pouvoirs de suspension des convois.",
        idsPnj: ["envoye_caldris"],
        horloge: {
          taille: 3,
          etapes: [
            {
              titre: "L'ultimatum est formalisé",
              indice:
                "Caldris exige une preuve de stabilité dans un délai court et inscrit cette demande dans le cadre du Traité des Routes Orientales. Le Conseil ne peut plus traiter la crise comme une affaire strictement intérieure.",
            },
            {
              titre: "Les sanctions commencent",
              indice:
                "Faute de réponse crédible, des convois sont retenus, inspectés ou détournés. La Guilde Marchande perd de l'argent chaque jour et pousse le Conseil à accepter des conditions qu'il aurait refusées en temps normal.",
            },
            {
              titre: "La quarantaine est imposée",
              indice:
                "Les routes orientales sont classées à risque et des officiers caldrisiens contrôlent les passages hors de l'autorité de Valombre. La cité ne choisit plus qui ou quoi franchit sa frontière.",
            },
          ],
        },
      },

      {
        id: "menace_champion_banniere",
        nom: "Le Champion de la Bannière Pure",
        categorie: "Le Fléau",
        nature:
          "Chevalier qui croit réellement en sa mission purificatrice, respecte les engagements tenus, méprise les demi-vérités et peut rallier la foule si on le laisse faire.",
        objectifFinal:
          "Le Champion obtient un soutien populaire suffisant dans Valombre elle-même — parmi les habitants effrayés par les rumeurs souterraines — pour légitimer une purge des « cercles de Nyx » qui touchera indistinctement coupables et innocents.",
        idsPnj: ["champion_banniere_pure"],
        horloge: {
          taille: 4,
          etapes: [
            {
              titre: "Le Champion obtient une victoire publique",
              indice:
                "Une intervention visible — sauvetage, arrestation ou protection d'un quartier — lui permet de se présenter comme l'homme qui agit pendant que les institutions hésitent. La forme exacte dépend de la situation créée en jeu.",
            },
            {
              titre: "Les opposants sont forcés de se déclarer",
              indice:
                "Le Champion impose un choix public à un PJ, un prêtre, un représentant de Nyx ou un conseiller. Toute nuance devient suspecte et le silence est présenté comme une complicité.",
            },
            {
              titre: "Une milice se forme autour de la Bannière",
              indice:
                "Des habitants, gardes isolés et dévots rejoignent spontanément sa cause. Les intimidations et marquages se multiplient sans qu'il ait besoin d'ordonner chaque action.",
            },
            {
              titre: "La purge commence",
              indice:
                "La milice frappe plusieurs refuges réels ou supposés de Nyx. Les lieux précis dépendent des informations accumulées, mais les malades, les innocents et les coupables sont désormais traités de la même manière.",
            },
          ],
        },
      },

      {
        id: "menace_reputation_valombre",
        nom: "La Réputation de Valombre",
        categorie: "La Force Environnementale",
        nature:
          "Érosion lente et cumulative de la confiance que les institutions, les marchands et les alliés accordent encore à la cité.",
        objectifFinal:
          "Valombre perd suffisamment de crédit diplomatique et commercial pour que ses institutions ne puissent plus négocier de leur propre autorité — les guildes étrangères refusent les lettres de crédit, les clans nains reconsidèrent leur statut dans la cité et le Conseil ne peut plus voter sans caution caldrisienne.",
        idsPnj: ["yselle_vaurin", "hessa_brunefer"],
        horloge: {
          taille: 3,
          etapes: [
            {
              titre: "Les rumeurs franchissent les portes",
              indice:
                "Deux convois extérieurs annulent leur étape à Valombre « pour raisons sanitaires ». Odran Bellec note que les déclarations de cargaison des maisons extérieures sont en baisse. Des voyageurs de passage posent des questions précises sur « ce qui se passe sous la ville ».",
            },
            {
              titre: "Les maisons se couvrent",
              indice:
                "Plusieurs grandes maisons marchandes de Valombre commencent à déplacer leurs réserves vers des entrepôts extérieurs. Yselle Vaurin convoque une session d'urgence de la Guilde. Les lettres de crédit émises depuis la cité subissent une décote informelle.",
            },
            {
              titre: "L'isolement institutionnel",
              indice:
                "La Guilde Marchande suspend officiellement ses garanties sur les contrats liés aux mines. Le Conseil ne peut plus présenter un budget équilibré. Les ambassades de deux cités alliées réduisent leur personnel à Valombre.",
            },
          ],
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // FRONT 4 — LA CITÉ QUI OUBLIE
  // Les institutions humaines de Valombre ont oublié pourquoi
  // elles existent. Ce qu'elles appellent ordre est une façade
  // sous laquelle personne ne veut regarder.
  // ─────────────────────────────────────────────────────────────
  {
    id: "front_cite_qui_oublie",
    nom: "La Cité qui Oublie",
    type: "Front antagoniste",
    icone: Scale,
    couleur: "text-stone-300 border-stone-700 bg-stone-950/30",

    enjeu:
      "Les institutions de Valombre — le Conseil, l'Université, le Clergé — fonctionnent encore, mais elles ont perdu la mémoire de ce qu'elles gardent. Leurs rituels sont là, leurs titres sont là, leurs archives sont là. Mais la signification profonde de leur rôle a été effacée par des siècles de routine. Cet oubli est ce qui a permis à Thade d'agir en pleine lumière sans que personne ne pose la bonne question.",

    description:
      "Le Conseil vote, l'Université enseigne, le Clergé officie. En apparence, Valombre est une cité en ordre. Mais le Conseil ralentit chaque décision urgente par des procédures conçues pour un monde sans Spirale. L'Université déférait à Thade parce qu'il était le plus brillant et le plus titré de ses membres. Le Clergé tient les registres des morts sans savoir que sept de ces morts sont le fondement du sceau. La loi martiale, quand elle arrive, n'arrangera rien : elle donnera une apparence d'action à des gens qui ne savent pas contre quoi ils agissent.",

    menaces: [
      {
        id: "menace_conseil_dysfonctionnel",
        nom: "Le Conseil, la Machine à Retarder",
        categorie: "L'Institution",
        nature:
          "Corps gouvernant dont la procédure est conçue pour produire du consensus, pas de la décision — et qui se paralyse dès que l'urgence dépasse ses cadres habituels.",
        objectifFinal:
          "Face à la crise, le Conseil vote une loi martiale partielle qui suspend les droits des communautés clandestines, ferme les accès miniers et place les Terrasses sous tutelle civile — au moment précis où la coopération des nains et de Nyx serait indispensable pour refermer le sceau.",
        idsPnj: ["avel_ronce", "patrouille_mixte_conseil", "hessa_brunefer"],
        horloge: {
          taille: 4,
          etapes: [
            {
              titre: "La crise est enterrée sous la procédure",
              indice:
                "Commissions, expertises et conflits de compétence retardent toute action concrète. Les responsables disposent de temps pour déplacer des preuves et les dangers continuent d'avancer sans réponse coordonnée.",
            },
            {
              titre: "Le Conseil cherche un responsable",
              indice:
                "Pour rassurer la population et les marchés, les débats se déplacent vers la désignation d'un coupable : Nyx, les clans, l'Université ou des agents étrangers. Les informations qui compliquent ce récit sont écartées.",
            },
            {
              titre: "Les Terrasses sont placées sous contrôle",
              indice:
                "Les accès miniers sont fermés ou confiés à des gardes civiques. Les autorités naines perdent la maîtrise de leurs propres galeries et cessent de partager leurs plans, leurs équipes et leurs connaissances.",
            },
            {
              titre: "Thade reçoit les pouvoirs d'urgence",
              indice:
                "Le Conseil remet la gestion de la crise arcanique à Thade ou à une structure qu'il contrôle. Les décisions peuvent désormais être prises sans débat, et les opposants deviennent légalement des obstacles à la sécurité publique.",
            },
          ],
        },
      },

      {
        id: "menace_universite_deference",
        nom: "L'Université, l'Angle Mort",
        categorie: "L'Institution",
        nature:
          "Institution compétente et bien intentionnée qui a développé une confiance aveugle en son membre le plus brillant et qui manque de mécanismes pour questionner l'autorité interne. Son angle mort est aggravé par le déphasage : l'Université cherche un phénomène magique dans Valombre, alors que le phénomène est Valombre elle-même. Ses sorts de détection fonctionnent à l'intérieur du référentiel déphasé, ses instruments sont pris dans la même dérive, et ses mesures restent cohérentes parce que tout ce qu'elle mesure est déphasé avec elle.",
        objectifFinal:
          "Quand la vérité sur Thade émerge, l'Université choisit de la gérer en interne pour protéger sa réputation — effaçant des preuves, retardant les alertes et couvrant involontairement la fuite de Thade vers la Tour. Les hypothèses venant des nains, de Nyx ou de Caldris sont jugées politiquement suspectes, et les mages qui doutent — comme Olane — manquent de preuves publiques.",
        idsPnj: ["maera_olane", "magi_tuteur_loyal", "jaren_velt"],
        horloge: {
          taille: 3,
          etapes: [
            {
              titre: "Olane est isolée",
              indice:
                "Ses accès sont restreints, ses demandes restent sans réponse et ses collègues sont encouragés à traiter ses soupçons comme une rivalité personnelle. Les témoins hésitent désormais à lui parler ouvertement.",
            },
            {
              titre: "L'enquête est confisquée",
              indice:
                "Les incidents, les effets de Jaren et les réquisitions de Thade sont absorbés par une procédure interne. Les preuves ne disparaissent pas encore, mais seules des personnes loyales à l'institution peuvent les consulter.",
            },
            {
              titre: "La couverture institutionnelle",
              indice:
                "L'Université produit une version officielle qui minimise les faits, retarde l'alerte et protège la Tour. Les expertises contradictoires sont déplacées, invalidées ou retirées des archives accessibles.",
            },
          ],
        },
      },

      {
        id: "menace_memoire_perdue",
        nom: "La Mémoire Perdue de Valombre",
        categorie: "La Force Environnementale",
        nature:
          "Érosion culturelle et historique qui a rendu la cité incapable de reconnaître le verrou qu'elle garde — et donc incapable de le défendre consciemment.",
        objectifFinal:
          "La crise se résout ou échoue sans que Valombre ait jamais réellement compris ce qu'elle gardait. Les gestes anciens restent des gestes. Les rites des Thanes restent des cérémonies. Rien ne change structurellement, et la prochaine génération sera aussi aveugle que celle-ci.",
        idsPnj: ["thorgar_pretre_nain", "geraud_veyre", "brogar_eclaireur"],
        horloge: {
          taille: 3,
          etapes: [
            {
              titre: "Les derniers dépositaires disparaissent",
              indice:
                "Un ancien meurt, perd la mémoire, est arrêté ou devient incapable de transmettre son savoir. Brogar, Thorgar et les vieux archivistes ne sont pas interchangeables : chaque absence supprime une partie différente du chemin vers le sens du rite.",
            },
            {
              titre: "Les traces sont dispersées",
              indice:
                "Des registres sont transférés, saisis, mal reclassés ou séparés de leurs clés de lecture. Les copies existent encore, mais plus personne ne peut réunir assez rapidement les fragments pour comprendre le sceau avant la prochaine aggravation.",
            },
            {
              titre: "Le rite est mutilé",
              indice:
                "La prochaine cérémonie est simplifiée pour des raisons de sécurité, de temps ou de doctrine. Un geste indispensable n'est plus accompli, une formule est remplacée et le verrou perd l'une de ses dernières protections culturelles.",
            },
          ],
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // FRONT 5 — LES PROFONDEURS ABANDONNÉES
  // Le verrou, les galeries et la vie des Terrasses continuent de
  // se dégrader même si le plan personnel de Thade est interrompu.
  // ─────────────────────────────────────────────────────────────
  {
    id: "front_profondeurs_abandonnees",
    nom: "Les Profondeurs abandonnées",
    type: "Front souterrain",
    icone: Pickaxe,
    couleur: "text-amber-300 border-amber-900 bg-amber-950/30",

    enjeu:
      "Les tombes des Sept Thanes, les galeries profondes et l'économie des Terrasses forment un seul système fragile. Si le sceau continue de céder, la Spirale absorbera les niveaux inférieurs tandis que la fermeture de la mine ruinera les clans et coupera Valombre de ceux qui connaissent encore ses fondations.",

    description:
      "Les profondeurs ne sont pas seulement le décor du plan de Thade. Elles possèdent leur propre dynamique : les prélèvements ont déjà endommagé le verrou, les anomalies modifient les galeries et chaque mesure de sécurité isole davantage les communautés naines. Même après la chute de Thade, le froid, les déformations et les effondrements demeureront. Les PJ doivent donc protéger les vivants, restaurer les ancrages et empêcher que la peur ne transforme une fermeture temporaire en abandon définitif.",

    menaces: [
      {
        id: "menace_profanation_thanes",
        nom: "La Profanation du Sceau",
        categorie: "La Force Environnementale",
        nature:
          "Érosion progressive du verrou à mesure que les ossements des Thanes sont prélevés, déplacés ou privés des rites qui maintiennent leur fonction.",
        objectifFinal:
          "Les sept tombes sont suffisamment perturbées pour que le sceau cède de lui-même : la Spirale filtre dans les galeries sans qu'il soit possible de la contenir par les moyens ordinaires.",
        idsPnj: ["thorgar_pretre_nain", "durnik_chef_mineur"],
        horloge: {
          taille: 3,
          etapes: [
            {
              titre: "Les ancrages perdent leur stabilité",
              indice:
                "Le froid et les vibrations ne se limitent plus à une seule tombe. Les runes changent, les lanternes funéraires s'éteignent et les rites ordinaires ne suffisent plus à rétablir le calme.",
            },
            {
              titre: "Le Mausolée réagit",
              indice:
                "La dalle centrale se déplace, les anneaux du Puits de l'Abîme vibrent et des fissures apparaissent dans les murs. Chaque nouvelle perturbation se transmet désormais aux autres tombes.",
            },
            {
              titre: "Le réseau d'ancrage se rompt",
              indice:
                "Les sept tombes cessent d'agir comme un ensemble. Une lumière remonte du puits et les protections locales deviennent indépendantes, instables et impossibles à restaurer par un seul rite.",
            },
          ],
        },
      },

      {
        id: "menace_spirale_expansion",
        nom: "La Spirale en Expansion",
        categorie: "La Force Environnementale",
        nature:
          "Puissance ancienne qui occupe le vide laissé par le sceau affaibli, sans intention humaine mais avec des effets cohérents et croissants.",
        objectifFinal:
          "La Spirale absorbe des sections entières des galeries inférieures et commence à modifier les personnes, les distances et la matière qui y restent piégées.",
        idsPnj: ["creature_spirale_cooptee", "sealine_coren"],
        horloge: {
          taille: 3,
          etapes: [
            {
              titre: "Les galeries changent de mesure",
              indice:
                "Les trajets s'allongent, les cartes deviennent contradictoires et la lumière éclaire moins loin. Les équipes ne peuvent plus garantir qu'un chemin emprunté à l'aller existera encore au retour.",
            },
            {
              titre: "Les lois physiques divergent",
              indice:
                "Le poids, la chute, le son et l'orientation varient d'une galerie à l'autre. Des présences planaires franchissent les zones déformées et les méthodes minières ordinaires deviennent dangereuses.",
            },
            {
              titre: "Les profondeurs sont absorbées",
              indice:
                "Des sections complètes cessent d'appartenir à la mine. Elles ouvrent directement sur les plaines de la Spirale, emportant outils, structures et personnes avec elles.",
            },
          ],
        },
      },

      {
        id: "menace_abandon_mine",
        nom: "L'Abandon de la Mine",
        categorie: "L'Institution",
        nature:
          "Réaction de survie des guildes et des autorités qui ferme les accès plus vite qu'elle ne résout les causes, jusqu'à rendre tout retour impossible.",
        objectifFinal:
          "La Mine d'Argent est officiellement abandonnée, les Terrasses sont évacuées et Valombre perd à la fois sa principale richesse, ses ouvriers les plus compétents et l'accès aux fondations du sceau.",
        idsPnj: ["durnik_chef_mineur", "garde_portail_mine", "torm_garde_mine", "kessak_mineur"],
        horloge: {
          taille: 3,
          etapes: [
            {
              titre: "Les équipes refusent la descente",
              indice:
                "Les rotations sont interrompues, des mineurs quittent leur poste et les contremaîtres ne peuvent plus constituer d'équipes complètes. Les niveaux profonds restent sans surveillance ni entretien.",
            },
            {
              titre: "Les accès sont condamnés",
              indice:
                "La Guilde, le Conseil ou les deux ferment les cages et murent les passages. Les routes officielles disparaissent, laissant les contrebandiers et les anomalies contrôler les seuls accès restants.",
            },
            {
              titre: "Les Terrasses sont évacuées",
              indice:
                "Des fissures atteignent les bâtiments, les stocks sont déplacés et les familles quittent le quartier. La fermeture temporaire devient un abandon politique et économique que personne ne sait inverser.",
            },
          ],
        },
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // FRONT 6 — LE DÉPHASAGE
  // Valombre n'est plus tout à fait dans le monde matériel.
  // La Spirale a déplacé l'ancrage de la cité entière depuis
  // l'explosion de Nyx. De l'intérieur, tout semble normal.
  // De l'extérieur, la cité devient impossible à atteindre.
  // ─────────────────────────────────────────────────────────────
  {
    id: "front_dephasage",
    nom: "Le Déphasage",
    type: "Front planaire",
    icone: Compass,
    couleur: "text-indigo-300 border-indigo-900 bg-indigo-950/30",

    enjeu:
      "Valombre n'attend pas d'être piégée : elle l'est déjà. Depuis l'explosion magique de Nyx, la Spirale n'a pas envahi la cité — elle a légèrement déplacé son ancrage. La cité, les mines, les routes proches et une partie des cols sont prises dans un voile de continuité. De l'intérieur, tout semble encore fonctionner. De l'extérieur, Valombre devient difficile à atteindre, puis presque impossible. Le déphasage ne coupe pas brutalement la ville : il remplace les ruptures par des explications plausibles. Si les PJ ne comprennent pas que la cité est déjà déconnectée du monde, toutes leurs décisions stratégiques reposent sur une carte qui ment.",

    description:
      "Le déphasage est le résultat indirect de la catastrophe de Nyx. L'explosion n'a pas seulement brisé l'Ordre et dispersé Sealine au-delà du seuil : elle a légèrement déplacé l'ancrage planaire de Valombre entière. La Spirale n'a pas envahi — elle a glissé. La cité est encore là, ses rues, ses mines, ses tours, ses entrepôts. Mais elle n'est plus tout à fait raccordée au reste du monde. Ce n'est pas une bulle visible. C'est pire : le monde continue de mentir à ceux qui vivent dedans. Un marchand reporte son départ à cause de la brume, d'un contrôle de Caldris, d'un pont abîmé, d'une taxe. Un messager revient en jurant qu'il a roulé toute la journée, alors qu'il n'a fait qu'une boucle autour des mêmes bornes. Une lettre arrive, mais elle reprend des formules anciennes, des nouvelles vagues, des signatures attendues. Les gens ne voient pas que plus personne n'entre ou ne sort. Ils voient que les routes sont difficiles en ce moment. Et Valombre est déjà faite pour avaler ce genre de déni : le Conseil ralentit tout, la Guilde Marchande protège les apparences, l'Université classe les anomalies comme incidents locaux, les nains se concentrent sur les mines, et la population accepte les silences tant que les salaires tombent.",

    menaces: [
      {
        id: "menace_dephasage_ancrage",
        nom: "Le Glissement de l'Ancrage",
        categorie: "La Force Environnementale",
        nature:
          "Déplacement planaire progressif qui désaccorde Valombre du monde matériel sans rupture visible, remplaçant les coupures par des explications plausibles et des boucles de route.",
        objectifFinal:
          "Valombre bascule entièrement hors du monde matériel. Les routes cessent de mener quelque part, les lettres ne portent plus que des formules répétées, et ceux qui tentent de partir reviennent sans s'en rendre compte. La cité devient un fragment dérivant entre le monde et la Spirale, sans que personne à l'intérieur ne comprenne ce qui s'est produit.",
        idsPnj: ["creature_spirale_cooptee", "sealine_coren"],
        horloge: {
          taille: 4,
          etapes: [
            {
              titre: "Les routes mentent doucement",
              indice:
                "Les délais de voyage s'allongent sans raison claire. Un messager jure avoir roulé toute la journée mais n'a fait qu'une boucle autour des mêmes bornes. Les marchands reportent leurs départs pour des raisons plausibles : brume, contrôle de Caldris, pont abîmé, taxe, convoi en retard. Personne ne voit que plus personne n'entre vraiment.",
            },
            {
              titre: "Les lettres se répètent",
              indice:
                "Deux lettres venues de cités différentes utilisent exactement la même phrase. Une correspondance arrive avec des nouvelles vagues, des formules anciennes, des signatures attendues. Les registres de la Guilde montrent des cargaisons « arrivées » que personne n'a vu passer les portes.",
            },
            {
              titre: "Les stocks s'accumulent",
              indice:
                "Les entrepôts de minerai exporté ne se vident plus assez vite, mais les paiements continuent — en lettres de crédit de plus en plus bizarres. Les mêmes maisons marchandes achètent pour un convoi qui ne part jamais vraiment. Les délais de paiement s'allongent et les garanties sont suspendues.",
            },
            {
              titre: "Les routes ramènent au même point",
              indice:
                "Une route extérieure ramène toujours au même pont, à la même borne, au même corbeau mort. Ceux qui tentent de partir à pied ou à cheval reviennent sans s'en rendre compte. La cité n'est plus raccordée au réseau de routes du monde matériel.",
            },
          ],
        },
      },

      {
        id: "menace_dephasage_revelation",
        nom: "La Révélation par étapes",
        categorie: "Le Cerveau",
        nature:
          "Processus de découverte qui confronte les PJ à l'impossibilité de quitter Valombre et à la vérité que la cité est déjà piégée — non pas par un siège visible, mais par un déphasage que personne n'a remarqué.",
        objectifFinal:
          "Les PJ comprennent que Valombre n'attend pas d'être piégée : elle l'est déjà. Cette révélation transforme toutes leurs hypothèses stratégiques — les routes ne sont pas difficiles, elles sont coupées ; le commerce ne ralentit pas, il n'existe plus ; Caldris ne menace pas, elle observe un phénomène qu'elle ne peut pas expliquer publiquement.",
        idsPnj: ["envoye_caldris", "maera_olane", "hessa_brunefer"],
        horloge: {
          taille: 6,
          etapes: [
            {
              titre: "Anomalie faible",
              indice:
                "Un marchand dit attendre un convoi « arrivé hier », mais personne ne l'a vu aux portes. Les gardes n'ont pas enregistré d'entrée. Le marchand insiste, vérifie ses registres, finit par admettre que les documents sont « un peu bizarres ».",
            },
            {
              titre: "Anomalie administrative",
              indice:
                "Deux lettres venues de cités différentes utilisent exactement la même phrase, comme si elles avaient été rédigées par la même main — ou par aucune. Odran Bellec remarque que les horloges du Beffroi et d'une tour extérieure ne correspondent plus, mais attribue l'écart à un défaut de mécanisme.",
            },
            {
              titre: "Anomalie naine",
              indice:
                "Les stocks de minerai exporté ne diminuent plus assez vite, mais les paiements continuent. Durnik ou Hessa remarque que les entrepôts sont pleins, que les lettres de crédit sont étranges, et que les maisons marchandes achètent pour des convois qui ne partent jamais. Les nains soupçonnent d'abord une manœuvre de la Guilde Marchande.",
            },
            {
              titre: "Anomalie physique",
              indice:
                "Une route extérieure ramène toujours au même pont, à la même borne, au même corbeau mort. Un éclaireur nain ou un PJ qui tente de quitter Valombre revient sans s'en rendre compte, persuadé d'avoir voyagé pendant des heures. Les cartes deviennent contradictoires.",
            },
            {
              titre: "Preuve de Caldris",
              indice:
                "Maelric montre une carte extérieure où Valombre n'est plus atteignable depuis des semaines. Les routes qui y mènent existent encore sur le papier, mais les convois et les messagers caldrisiens reviennent systématiquement sans avoir atteint la cité. Caldris sait que quelque chose de fondamental a changé.",
            },
            {
              titre: "Vérité finale",
              indice:
                "La cité n'attend pas d'être piégée : elle l'est déjà. Le déphasage n'est pas une menace future mais un fait accompli depuis l'explosion de Nyx. Toutes les explications plausibles — brume, taxes, routes instables, contrôles — étaient le mensonge du monde, pas la vérité. Les PJ doivent désormais décider quoi faire d'une cité qui ne sait pas qu'elle a déjà quitté le monde.",
            },
          ],
        },
      },
    ],
  },

];
