import {
  Skull,
  Eye,
  Scale,
  Pickaxe,
  Compass,
} from "lucide-react";

/**
 * Catégories autorisées pour le champ `categorie` d'une Menace.
 */
export const CATEGORIES_MENACE = Object.freeze({
  "L'Architecte": {
    etiquette: "L'Ambitieux / L'Architecte",
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

/**
 * Guide des Fronts — version refondue.
 *
 * Chaque front est une machine à scènes, pas une machine à catastrophes.
 * La question n'est pas « que se passe-t-il si l'horloge se remplit ? »
 * mais « comment ce front entre-t-il en scène à la prochaine session ? »
 *
 * Structure d'un front :
 * - questionDramatique : la question centrale qui donne au front sa tension.
 * - forcesActives : 2-3 acteurs qui poussent le front, avec leur rôle.
 * - signesVisibles : ce que les PJ peuvent observer sans enquête parfaite.
 * - scenesJouables : au moins 6 idées de scènes (2 enquête, 2 RP, 2 action).
 * - leviersPJ : comment les PJ peuvent ralentir, inverser ou exploiter le front.
 * - menaces : une horloge principale (6 segments) + menaces secondaires
 *   sans horloge indépendante (elles créent des scènes, pas de la pression).
 *
 * Types d'avancement des horloges :
 * A — Antagoniste : un PNJ pousse l'horloge. Avance hors-champ : oui.
 * B — Environnemental : un phénomène avance seul. Avance hors-champ : oui.
 * C — Découverte : n'avance que par l'enquête des PJ. Avance hors-champ : non.
 *
 * Règles :
 * - Une horloge remplie réalise son objectifFinal. La conséquence est durable.
 * - Le MJ peut retirer un segment si les PJ inversent la situation.
 * - Les liens automatiques entre horloges sont réduits au minimum.
 *   Un front n'accélère un autre front que si cela crée une scène jouable.
 */

export const frontsData = [
  // ─────────────────────────────────────────────────────────────
  // FRONT 1 — LE PLAN DE THADE
  // Thade Coren détourne l'Université, la Larme de Vael et la Tour
  // pour rouvrir le seuil et ramener Sealine. Absorbe l'ancien
  // Front 1 (Thade, Larme, Loyalistes) + l'Université (Olane).
  // ─────────────────────────────────────────────────────────────
  {
    id: "front_plan_thade",
    nom: "Le Plan de Thade",
    type: "Front antagoniste",
    icone: Skull,
    couleur: "text-violet-300 border-violet-900 bg-violet-950/30",

    enjeu:
      "Thade Coren utilise l'autorité de l'Université, les fragments de la Larme de Vael et les dispositifs de la Tour Arcanique pour forcer une ouverture vers la Spirale. S'il réussit, il ramènera peut-être Sealine, mais transformera Valombre en ancre d'un passage que nul ne saura refermer.",

    description:
      "Depuis huit ans, Thade rassemble les fragments de la Larme, étudie les faiblesses du seuil et instrumentalise les survivants de Nyx. Son plan ne dépend plus seulement de l'affaiblissement des tombes : la Tour devient une machine capable de concentrer artificiellement les flux de la Spirale. Pour l'arrêter, il faut briser son dispositif, retourner ses soutiens ou l'amener à renoncer lui-même au retour de Sealine.",

    questionDramatique:
      "Les PJ peuvent-ils révéler le vrai projet de Thade avant que l'Université ne devienne son rempart ?",

    forcesActives: [
      {
        nom: "Thade Coren",
        idsPnj: ["thade_coren"],
        role: "Architecte du plan. Opère dans le cadre légal jusqu'à ce que le cadre ne suffise plus. Poli, précis, jamais cruel — l'atrocité est dans l'efficacité, pas dans le ton.",
      },
      {
        nom: "Les Loyalistes de la Tour",
        idsPnj: ["magi_tuteur_loyal", "jaren_velt"],
        role: "Obstacle institutionnel retournable. Verrouillent la Tour par obéissance, pas par fanatisme. Leur fidélité tient à la carrière et au déni.",
      },
    ],

    signesVisibles: [
      "Des salles sont scellées pour « travaux » ou « sécurité » sans explication.",
      "Les flux arcaniques de plusieurs bâtiments sont détournés vers la Tour.",
      "Les communications vers et depuis la Tour passent par un secrétariat qui filtre les priorités.",
      "Des prélèvements funéraires et des instruments réquisitionnés convergent vers les laboratoires de la Tour.",
      "Les objets enchantés dérivent légèrement vers la Tour et les sorts de détection renvoient des échos contradictoires.",
    ],

    scenesJouables: {
      enquete: [
        "Suivre la trace des prélèvements funéraires jusqu'aux laboratoires de la Tour (Jaren Velt comme piste).",
        "Retrouver Olane et comprendre pourquoi ses accès ont été restreints — elle a les chiffres mais pas les preuves publiques.",
      ],
      roleplay: [
        "Confronter un maître arcaniste loyaliste : il défend l'Université avant de comprendre qu'elle est parasitée.",
        "Négocier avec Thade lui-même : courtois, lucide, il justifie chaque étape comme une nécessité.",
      ],
      action: [
        "Infiltrer les niveaux scellés de la Tour pendant que les gardes sont en rotation.",
        "Extraire Olane de l'Université avant que ses preuves ne soient confisquées par une procédure interne.",
      ],
    },

    leviersPJ: [
      "Retourner les Loyalistes en prouvant ce que Thade assemble réellement.",
      "Protéger Olane et ses preuves pour maintenir l'enquête interne ouverte.",
      "Démontrer publiquement la vérité pour forcer l'Université à agir contre Thade.",
      "Confronter Thade avec Sealine elle-même (si les PJ ont atteint la Spirale) pour l'amener à renoncer.",
    ],

    menaces: [
      // ── Horloge principale ──
      {
        id: "menace_retour_sealine",
        nom: "Le Retour de Sealine",
        categorie: "L'Architecte",
        nature:
          "Thade rassemble les composants, détourne les flux et verrouille la Tour pour ouvrir le vortex.",
        objectifFinal:
          "Thade concentre la Larme reconstituée au sommet de la Tour, ouvre le vortex et franchit le seuil pour en extraire Sealine — sacrifiant la stabilité de Valombre et son propre corps comme ancre planaire.",
        idsPnj: ["thade_coren"],
        avancement: {
          type: "A",
          declencheurPrincipal: "Thade accomplit une étape de son plan (réunion des composants, alimentation de la Tour, verrouillage, ouverture du vortex).",
          declencheurSecondaire: "Un échec PJ significatif ou une couverture institutionnelle peut accélérer l'étape.",
          avanceHorsChamp: true,
          avanceParEnquete: false,
        },
        conséquenceRemplissage: "Le vortex s'ouvre au sommet de la Tour. Thade franchit le seuil et Valombre devient une ancre planaire.",
        annulation: "Extrêmement difficile : il faut refermer le vortex depuis l'intérieur de la Tour, avec un coût planaire majeur.",
        horloge: {
          taille: 6,
          etapes: [
            {
              titre: "Thade récupère les derniers composants",
              indice:
                "Les prélèvements funéraires, les protocoles de Nyx et les instruments réquisitionnés convergent vers les laboratoires de la Tour. Les assistants ne savent pas ce qu'ils assemblent, mais chaque livraison réduit ce qui manque encore.",
            },
            {
              titre: "Les flux de l'Université sont détournés",
              indice:
                "Les flux arcaniques de plusieurs bâtiments sont détournés vers la Tour. Des cours sont annulés, des salles sont scellées et les protections ordinaires de l'Université deviennent instables.",
            },
            {
              titre: "Olane est isolée",
              indice:
                "Ses accès sont restreints, ses demandes restent sans réponse et ses collègues sont encouragés à traiter ses soupçons comme une rivalité personnelle. Les témoins hésitent à lui parler ouvertement.",
            },
            {
              titre: "La Tour est placée sous autorité spéciale",
              indice:
                "Les accès sont verrouillés, les communications filtrées et les défenseurs obéissent à des ordres qu'ils ne peuvent plus discuter. La cuve de cristal et les dispositifs du sommet fonctionnent en continu.",
            },
            {
              titre: "La Larme est alimentée",
              indice:
                "Une ligne lumineuse traverse l'artefact. Les objets enchantés dérivent vers la Tour, les sorts renvoient des échos contradictoires et les mages ressentent une seconde pulsation derrière leur propre magie. Des couloirs rejoignent des pièces qu'ils ne devraient pas toucher.",
            },
            {
              titre: "Le vortex s'ouvre",
              indice:
                "Un bourdonnement traverse les Hauteurs, le ciel prend une teinte violette et la Larme devient visible au cœur du vortex. Thade n'a plus besoin d'autorisation, d'assistants ni de dissimulation : le retour a commencé.",
            },
          ],
        },
      },

      // ── Menace secondaire : obstacle social, pas d'horloge ──
      {
        id: "menace_loyalistes_tour",
        nom: "Les Loyalistes de la Tour",
        categorie: "L'Institution",
        nature:
          "Assistants, mages subalternes et gardes de la Tour qui obéissent aux ordres de Thade sans comprendre ce qu'ils assemblent.",
        objectifFinal:
          "Les Loyalistes verrouillent la Tour au point qu'aucune intervention extérieure ne peut y pénétrer sans un assaut ouvert.",
        idsPnj: ["magi_tuteur_loyal", "jaren_velt"],
        noteMJ:
          "Les Loyalistes sont un obstacle à l'échelle des PJ, pas un boss. Ils peuvent être retournés, convaincus, intimidés ou contournés. Si les PJ leur démontrent ce que Thade assemble réellement, ils peuvent changer de camp. Si les PJ les ignorent, ils rendent l'assaut final beaucoup plus difficile.",
        conséquenceRemplissage: "La Tour est verrouillée. Pénétrer suppose un assaut ouvert, une infiltration difficile ou une trahison interne.",
        annulation: "Possible : si les PJ retournent un ou plusieurs Loyalistes, démontrent la vérité sur le dispositif, ou offrent une alternative institutionnelle crédible.",
      },

      // ── Menace secondaire : danger magique, pas d'horloge ──
      {
        id: "menace_larme_vael",
        nom: "La Larme de Vael",
        categorie: "La Force Environnementale",
        nature:
          "Fragment planaire qui accumule les résonances et produit des anomalies magiques croissantes dans la Tour.",
        objectifFinal:
          "La Larme se fissure et devient une ouverture permanente, même si Thade tombe.",
        idsPnj: ["thade_coren"],
        noteMJ:
          "La Larme est un danger qui produit des scènes : anomalies magiques, déformations géométriques, échos contradictoires. Elle n'a pas d'horloge propre — elle suit l'horloge principale. Aux étapes 4 et 5, les anomalies deviennent visibles pour tout mage passant près de la Tour.",
        conséquenceRemplissage: "La Larme se fissure et devient une ouverture permanente. Le vortex continue de croître sans Thade.",
        annulation: "Difficile : il faut extraire ou sceller la Larme, ce qui suppose d'avoir neutralisé le contrôle de la Tour.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // FRONT 2 — LES FACTIONS DE LA CRISE
  // Les cercles clandestins de Nyx, la pression de Caldris et le
  // Champion de la Bannière Pure convergent vers une crise unique.
  // Absorbe l'ancien Front 2 (Ombre de Nyx) + Front 3 (Bannière).
  // ─────────────────────────────────────────────────────────────
  {
    id: "front_factions_crise",
    nom: "Les Factions de la Crise",
    type: "Front de factions",
    icone: Eye,
    couleur: "text-red-300 border-red-900 bg-red-950/30",

    enjeu:
      "Les cercles de Nyx, la pression caldrisienne et le Champion de la Bannière Pure ne forment pas un ennemi unique mais un tissu de factions aux motivations contradictoires qui se renforcent mutuellement par la peur. Si aucune main ne les sépare, elles vont se détruire mutuellement — ou déclencher une répression aveugle qui frappera aussi les innocents.",

    description:
      "Depuis la catastrophe qui a dispersé l'Ordre de Nyx originel, le nom est devenu un abri pour tous ceux que les institutions n'accueillent pas : Ursula soigne les pauvres dans sa cave, Elian Voss poursuit son protocole S-01 sur des patients non consentants, Edran Morn rassemble des familles endeuillées autour de pratiques de plus en plus radicales. Parallèlement, l'émissaire Maelric représente un gouvernement qui voit les routes commerciales se dégrader et une cité incapable d'expliquer ce qui se passe sous ses rues. Le Champion de la Bannière Pure, lui, est venu avec une conviction : Valombre a failli à son rôle de verrou. Ces factions ne se concertent pas, mais elles se renforcent mutuellement par la peur.",

    questionDramatique:
      "Les PJ peuvent-ils séparer les innocents des coupables avant que la peur ne transforme chaque cercle en ennemi public ?",

    forcesActives: [
      {
        nom: "Elian Voss",
        idsPnj: ["elian_voss"],
        role: "Chercheur qui justifie ses crimes par ses résultats. Efface ses traces et prépare sa fuite avec un commanditaire caldrisien.",
      },
      {
        nom: "Edran Morn et les Endeuillés",
        idsPnj: ["edran_morn"],
        role: "Meneur capable d'hésiter si ses actes menacent des vivants, mais que la douleur collective pousse vers des décisions irréparables.",
      },
      {
        nom: "Le Champion de la Bannière Pure",
        idsPnj: ["champion_banniere_pure"],
        role: "Chevalier qui croit en sa mission purificatrice. Rassemble une milice autour de la peur des cercles de Nyx.",
      },
    ],

    signesVisibles: [
      "Des familles endeuillées quittent les réseaux d'entraide ordinaires pour rejoindre Edran Morn.",
      "Des patients arrivent chez Ursula avec des notes médicales dans une écriture inconnue.",
      "Le Champion tient des discours publics sur les « cercles de Nyx » et rassemble des partisans visibles.",
      "Des convois extérieurs annulent leur étape à Valombre « pour raisons sanitaires ».",
      "Des passages dans les égouts sont dégagés et des marchandises sans étiquette apparaissent dans les réserves.",
    ],

    scenesJouables: {
      enquete: [
        "Enquêter sur les patients « stabilisés » d'Elian Voss : retrouver les familles qui cherchent un proche disparu.",
        "Identifier le commanditaire caldrisien d'Elian via le cachet sur ses notes — lien avec Maelric ?",
      ],
      roleplay: [
        "Confronter Edran Morn : le convaincre que les rites qu'il pratique menacent directement le sceau des Thanes.",
        "Débattre publiquement avec le Champion de la Bannière Pure : démontrer que ses accusations frappent les innocents autant que les coupables.",
      ],
      action: [
        "Infiltrer le laboratoire d'Elian sous l'amphithéâtre avant qu'il n'efface les preuves du protocole S-01.",
        "Intervenir physiquement quand la milice du Champion attaque un refuge supposé de Nyx.",
      ],
    },

    leviersPJ: [
      "Retourner Edran Morn en démontrant le danger des rites sur le sceau.",
      "Détruire ou sécuriser les preuves du protocole S-01 avant qu'Elian ne les efface.",
      "Démontrer publiquement les mensonges du Champion pour briser sa base populaire.",
      "Produire une preuve de stabilité crédible pour calmer la pression de Maelric et du Conseil.",
      "Négocier avec Maelric : c'est un homme rationnel qui cherche des réponses, pas un ennemi.",
    ],

    menaces: [
      // ── Horloge principale : la radicalisation globale ──
      {
        id: "menace_radicalisation_cercles",
        nom: "La Confusion des Cercles",
        categorie: "L'Institution",
        nature:
          "Crise collective où les cercles de Nyx, les autorités, Caldris, le Champion et le Syndicat se renforcent mutuellement par la peur, les accusations publiques et les preuves partielles.",
        objectifFinal:
          "La peur impose sa propre logique : les institutions, la milice et les factions clandestines cessent de distinguer innocents, coupables, malades, chercheurs et fanatiques. La purge, la répression ou la fuite éclate publiquement.",
        idsPnj: [
          "elian_voss",
          "edran_morn",
          "champion_banniere_pure",
          "envoye_caldris",
          "le_collecteur",
        ],
        avancement: {
          type: "A",
          declencheurPrincipal: "L'une des factions actives franchit un seuil sans être contrée par les PJ.",
          declencheurSecondaire: "La pression caldrisienne ou un incident public peut accélérer la crise.",
          avanceHorsChamp: true,
          avanceParEnquete: false,
        },
        conséquenceRemplissage: "La crise éclate publiquement : purge, répression ou fuite. Les innocents et les coupables sont frappés ensemble.",
        annulation: "Possible : si les PJ séparent les factions, retournent un meneur ou offrent une alternative crédible à la peur.",
        horloge: {
          taille: 6,
          etapes: [
            {
              titre: "Les cercles s'organisent",
              indice:
                "Elian Voss reçoit des patients « stabilisés » avec des notes dans une écriture inconnue. Edran Morn absorbe les familles isolées. Le Champion tient ses premiers discours publics. Chaque faction prend confiance en son propre cadre.",
            },
            {
              titre: "Les premiers signes deviennent visibles",
              indice:
                "Ursula reçoit des patients qu'elle ne reconnaît pas. Des familles cherchent un proche disparu. Le Champion obtient une victoire publique — sauvetage ou arrestation. Des passages dans les égouts sont dégagés.",
            },
            {
              titre: "La peur monte",
              indice:
                "Le Champion impose un choix public : pour ou contre Nyx. Edran introduit des pratiques interdites dans son cercle. Elian commence à effacer ses traces. Les convois extérieurs annulent leur étape à Valombre.",
            },
            {
              titre: "La pression caldrisienne se formalise",
              indice:
                "Maelric obtient un ultimatum du Conseil. Des convois sont retenus. La Guilde Marchande perd de l'argent. Le Conseil cherche un coupable. Les maisons marchandes déplacent leurs réserves.",
            },
            {
              titre: "L'affrontement devient inévitable",
              indice:
                "Une milice se forme autour du Champion. Les Endeuillés pratiquent un rite près des tombes. Elian prépare sa fuite. Les reconnaissances de dette du Syndicat circulent. Chaque faction est prête à frapper.",
            },
            {
              titre: "La crise éclate",
              indice:
                "La purge, la répression ou la fuite se déclenche. Les innocents et les coupables sont frappés ensemble. Valombre devient la cité qui a laissé la peur décider à la place de la justice.",
            },
          ],
        },
      },

      // ── Menace secondaire : Edran Morn, pas d'horloge ──
      {
        id: "menace_endeuilles_radicalisation",
        nom: "Les Endeuillés d'Edran Morn",
        categorie: "Le Fléau",
        nature:
          "Meneur capable d'hésiter si ses actes menacent directement des vivants, mais que la douleur collective de son cercle pousse vers des décisions irréparables.",
        objectifFinal:
          "Les Endeuillés pratiquent un rite de communication avec les défunts dans le Cimetière des Terrasses — perturbant directement le sceau des Thanes.",
        idsPnj: ["edran_morn"],
        noteMJ:
          "Edran est retournable. Si les PJ démontrent le danger des rites sur le sceau, il peut changer de cap. Sans horloge propre : sa radicalisation suit l'horloge principale. Aux étapes 3 et 5, il est en scène.",
        conséquenceRemplissage: "Une brèche planaire s'ouvre au Cimetière des Terrasses. Une présence de la Spirale franchit le seuil.",
        annulation: "Possible avant l'étape 5 : si les PJ retournent Edran, séparent le cercle ou démontrent le danger.",
      },

      // ── Menace secondaire : le Syndicat, pas d'horloge ──
      {
        id: "menace_syndicat_instrumentalisation",
        nom: "Le Syndicat des Brumes",
        categorie: "L'Institution",
        nature:
          "Réseau criminel qui vend des services à tous les cercles clandestins, rendant chaque escalade un peu plus facile.",
        objectifFinal:
          "Le Syndicat accumule assez de preuves compromettantes pour devenir intouchable politiquement.",
        idsPnj: ["le_collecteur", "contremaite_egouts", "hommes_main_pegre"],
        noteMJ:
          "Le Syndicat est un facilitateur, pas un moteur. Il crée des scènes (contrebande, chantage, égouts) mais n'a pas d'horloge propre. Il profite du chaos généré par les autres factions.",
        conséquenceRemplissage: "Le Syndicat devient intouchable. Ses reconnaissances de dette lui assurent une protection permanente.",
        annulation: "Difficile : détruire les copies compromettantes ou retourner suffisamment de débiteurs.",
      },

      // ── Menace secondaire : Maelric, pas d'horloge ──
      {
        id: "menace_emissaire_maelric",
        nom: "L'Émissaire Maelric",
        categorie: "L'Institution",
        nature:
          "Représentant courtois et sincèrement inquiet qui réduit les vérités complexes en preuves exploitables et en délais.",
        objectifFinal:
          "Maelric obtient du Conseil une reconnaissance officielle de l'incapacité de Valombre, ouvrant la voie à une quarantaine caldrisienne.",
        idsPnj: ["envoye_caldris"],
        noteMJ:
          "Maelric est un négociateur, pas un ennemi. Il peut être retourné avec une preuve de stabilité crédible. Sa pression suit l'horloge principale (étape 4). C'est aussi un témoin clé du déphasage.",
        conséquenceRemplissage: "La quarantaine est imposée. Des officiers caldrisiens contrôlent les passages hors de l'autorité de Valombre.",
        annulation: "Possible avant l'étape 5 : produire une preuve de stabilité crédible ou retourner Maelric.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // FRONT 3 — LA CITÉ SOUS PRESSION
  // Le Conseil, l'Université et le Clergé fonctionnent encore,
  // mais ils ont perdu la mémoire de ce qu'ils gardent. Absorbe
  // l'ancien Front 4 (Cité qui Oublie) + réputation + Conseil.
  // ─────────────────────────────────────────────────────────────
  {
    id: "front_cite_sous_pression",
    nom: "La Cité sous pression",
    type: "Front institutionnel",
    icone: Scale,
    couleur: "text-stone-300 border-stone-700 bg-stone-950/30",

    enjeu:
      "Les institutions de Valombre — le Conseil, l'Université, le Clergé — fonctionnent encore, mais elles ont perdu la mémoire de ce qu'elles gardent. Leurs rituels sont là, leurs titres sont là, leurs archives sont là. Mais la signification profonde de leur rôle a été effacée par des siècles de routine. Cet oubli est ce qui a permis à Thade d'agir en pleine lumière sans que personne ne pose la bonne question.",

    description:
      "Le Conseil vote, l'Université enseigne, le Clergé officie. En apparence, Valombre est une cité en ordre. Mais le Conseil ralentit chaque décision urgente par des procédures conçues pour un monde sans Spirale. L'Université déférait à Thade parce qu'il était le plus brillant et le plus titré de ses membres. Le Clergé tient les registres des morts sans savoir que sept de ces morts sont le fondement du sceau. La loi martiale, quand elle arrive, n'arrangera rien : elle donnera une apparence d'action à des gens qui ne savent pas contre quoi ils agissent.",

    questionDramatique:
      "Les PJ peuvent-ils empêcher le Conseil de remettre les pouvoirs d'urgence à Thade (ou un équivalent) avant que les institutions ne se retournent contre ceux qui veulent sauver la cité ?",

    forcesActives: [
      {
        nom: "Le Conseil",
        idsPnj: ["avel_ronce", "patrouille_mixte_conseil", "hessa_brunefer"],
        role: "Corps gouvernant qui enterre la crise sous la procédure, cherche un coupable, puis remet les pouvoirs d'urgence à qui paraît le plus capable d'agir.",
      },
      {
        nom: "L'Université",
        idsPnj: ["maera_olane", "magi_tuteur_loyal", "jaren_velt"],
        role: "Institution compétente mais aveugle à son propre angle mort. Couvre Thade par déférence, isole Olane par réflexe corporatiste.",
      },
    ],

    signesVisibles: [
      "Les débats du Conseil s'enlisent dans des commissions et des conflits de compétence.",
      "Des rumeurs publiques désignent Nyx, les clans ou l'Université comme responsables de la crise.",
      "Les accès miniers sont fermés ou confiés à des gardes civiques.",
      "Olane n'a plus accès à ses données et ses collègues évitent de lui parler.",
      "Des cérémonies religieuses sont simplifiées « pour des raisons de sécurité ».",
    ],

    scenesJouables: {
      enquete: [
        "Retrouver des archives dispersées qui expliquent le rôle véritable du sceau et des Thanes.",
        "Investiguer les coulisses du Conseil : quels conseillers sont influençables, quels liens avec Thade ou Caldris ?",
      ],
      roleplay: [
        "Convaincre un conseiller clé de ne pas voter la loi martiale ou les pouvoirs d'urgence.",
        "Affronter le corps enseignant de l'Université : Olane a raison, mais prouver publiquement est un défi institutionnel.",
      ],
      action: [
        "Empêcher l'arrestation d'un détenteur de savoir (Brogar, Thorgar) par les gardes du Conseil.",
        "Protéger des archives menacées de saisie ou de destruction par une procédure interne.",
      ],
    },

    leviersPJ: [
      "Influencer le vote du Conseil en retournant des conseillers ou en offrant une réponse crédible à la crise.",
      "Soutenir Olane publiquement pour empêcher l'Université de couvrir Thade.",
      "Retrouver et rassembler les fragments de savoir dispersés pour restaurer la mémoire du sceau.",
      "Protéger les détenteurs de savoir menacés (Brogar, Thorgar, vieux archivistes).",
      "Démontrer que la loi martiale aggraverait la crise au lieu de la résoudre.",
    ],

    menaces: [
      // ── Horloge principale : la dérive institutionnelle ──
      {
        id: "menace_derive_institutionnelle",
        nom: "Le Conseil, la Machine à Retarder",
        categorie: "L'Institution",
        nature:
          "Corps gouvernant dont la procédure est conçue pour produire du consensus, pas de la décision — et qui se paralyse dès que l'urgence dépasse ses cadres habituels.",
        objectifFinal:
          "Face à la crise, le Conseil vote une loi martiale partielle qui suspend les droits des communautés clandestines, ferme les accès miniers et place les Terrasses sous tutelle civile — au moment précis où la coopération des nains et de Nyx serait indispensable pour refermer le sceau.",
        idsPnj: ["avel_ronce", "patrouille_mixte_conseil", "hessa_brunefer"],
        avancement: {
          type: "A",
          declencheurPrincipal: "Le Conseil enterre la crise, cherche un coupable, puis remet les pouvoirs d'urgence.",
          declencheurSecondaire: "La pression de Caldris (menace_emissaire_maelric) et la peur publique accélèrent les votes.",
          avanceHorsChamp: true,
          avanceParEnquete: false,
        },
        noteMJ:
          "Si Thade est déjà neutralisé au moment de l'étape 6, remplacer par : « Le Conseil remet les pouvoirs de crise à une structure contrôlée par l'Université ou l'armée. » L'effet reste similaire : les opposants deviennent légalement des obstacles.",
        conséquenceRemplissage: "Le Conseil remet les pouvoirs d'urgence à Thade (ou une structure équivalente). Les opposants deviennent légalement des obstacles à la sécurité publique.",
        annulation: "Possible avant l'étape 6 : si les PJ influencent le vote, retournent des conseillers ou offrent une réponse crédible à la crise. Après l'étape 6, il faut une manœuvre politique majeure pour inverser la loi.",
        horloge: {
          taille: 6,
          etapes: [
            {
              titre: "La crise est enterrée sous la procédure",
              indice:
                "Commissions, expertises et conflits de compétence retardent toute action concrète. Les responsables disposent de temps pour déplacer des preuves et les dangers continuent d'avancer sans réponse coordonnée.",
            },
            {
              titre: "Les experts sont mis en concurrence",
              indice:
                "L'Université, la Guilde Marchande et les autorités naines produisent des rapports contradictoires sur la nature de la crise. Chacun défend son cadre d'analyse et disqualifie les autres. Les PJ peuvent exploiter ces divisions ou tenter de produire un consensus.",
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
              titre: "Les pouvoirs d'urgence sont débattus",
              indice:
                "Le Conseil examine des propositions de loi martiale partielle, de tutelle sur les Terrasses et de transfert de l'autorité arcanique. Les débats sont vifs mais le sens général est clair : il faut quelqu'un capable de décider seul. Les PJ ont encore une fenêtre pour influencer le vote.",
            },
            {
              titre: "Thade reçoit les pouvoirs d'urgence",
              indice:
                "Le Conseil remet la gestion de la crise arcanique à Thade ou à une structure qu'il contrôle. Les décisions peuvent désormais être prises sans débat, et les opposants deviennent légalement des obstacles à la sécurité publique.",
            },
          ],
        },
      },

      // ── Menace secondaire : l'Université, pas d'horloge ──
      {
        id: "menace_universite_deference",
        nom: "L'Université, l'Angle Mort",
        categorie: "L'Institution",
        nature:
          "Institution compétente et bien intentionnée qui a développé une confiance aveugle en son membre le plus brillant. Son angle mort est aggravé par le déphasage : l'Université cherche un phénomène magique dans Valombre, alors que le phénomène est Valombre elle-même.",
        objectifFinal:
          "Quand la vérité sur Thade émerge, l'Université choisit de la gérer en interne pour protéger sa réputation — effaçant des preuves, retardant les alertes et couvrant involontairement la fuite de Thade vers la Tour.",
        idsPnj: ["maera_olane", "magi_tuteur_loyal", "jaren_velt"],
        noteMJ:
          "L'Université crée des scènes (isoler Olane, confisquer l'enquête, produire une version officielle) mais n'a pas d'horloge propre. Sa dérive suit l'horloge principale : aux étapes 2 et 3, l'Université est en scène. Si les PJ sont membres de l'Université, cette menace interagit directement avec leurs accès et leur statut.",
        conséquenceRemplissage: "L'Université produit une version officielle qui minimise les faits, retarde l'alerte et protège la Tour. Les preuves sont déplacées, Olane n'a plus de recours interne.",
        annulation: "Possible avant l'étape 3 : si les PJ rassemblent des preuves publiques, retournent un membre influent du corps enseignant ou alertent une autorité externe.",
      },

      // ── Menace secondaire : la mémoire perdue, pas d'horloge ──
      {
        id: "menace_memoire_perdue",
        nom: "La Mémoire Perdue de Valombre",
        categorie: "La Force Environnementale",
        nature:
          "Érosion culturelle et historique qui a rendu la cité incapable de reconnaître le verrou qu'elle garde — et donc incapable de le défendre consciemment.",
        objectifFinal:
          "La crise se résout ou échoue sans que Valombre ait jamais réellement compris ce qu'elle gardait. Les gestes anciens restent des gestes. Les rites des Thanes restent des cérémonies. Rien ne change structurellement, et la prochaine génération sera aussi aveugle que celle-ci.",
        idsPnj: ["thorgar_pretre_nain", "geraud_veyre", "brogar_eclaireur"],
        noteMJ:
          "La mémoire perdue crée des scènes (protéger un détenteur de savoir, retrouver des archives dispersées, empêcher la simplification d'un rite) mais n'a pas d'horloge propre. C'est un fil conducteur qui traverse tout le front : chaque étape de l'horloge principale peut s'accompagner d'une perte de savoir. Si les PJ retrouvent des fragments ou protègent un détenteur, le MJ peut retirer l'effet narratif sans toucher l'horloge principale.",
        conséquenceRemplissage: "Le rite est mutilé. Un geste indispensable n'est plus accompli, une formule est remplacée. Le verrou perd l'une de ses dernières protections culturelles.",
        annulation: "Possible : si les PJ retrouvent des fragments dispersés, protègent un détenteur menacé ou restaurent un rite avant qu'il ne soit simplifié.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // FRONT 4 — LE SCEAU QUI CÈDE
  // Le verrou, les galeries et la vie des Terrasses forment un
  // seul système fragile. Absorbe l'ancien Front 5 (Profondeurs
  // abandonnées) : profanation, Spirale, abandon de la mine.
  // ─────────────────────────────────────────────────────────────
  {
    id: "front_sceau_qui_cede",
    nom: "Le Sceau qui cède",
    type: "Front souterrain",
    icone: Pickaxe,
    couleur: "text-amber-300 border-amber-900 bg-amber-950/30",

    enjeu:
      "Les tombes des Sept Thanes, les galeries profondes et l'économie des Terrasses forment un seul système fragile. Si le sceau continue de céder, la Spirale absorbera les niveaux inférieurs tandis que la fermeture de la mine ruinera les clans et coupera Valombre de ceux qui connaissent encore ses fondations.",

    description:
      "Les profondeurs ne sont pas seulement le décor du plan de Thade. Elles possèdent leur propre dynamique : les prélèvements ont déjà endommagé le verrou, les anomalies modifient les galeries et chaque mesure de sécurité isole davantage les communautés naines. Même après la chute de Thade, le froid, les déformations et les effondrements demeureront.",

    questionDramatique:
      "Les PJ peuvent-ils maintenir les galeries ouvertes et le sceau stable assez longtemps pour que les clans nains et les institutions coopèrent ?",

    forcesActives: [
      {
        nom: "La Spirale",
        idsPnj: ["creature_spirale_cooptee"],
        role: "Puissance ancienne qui occupe le vide laissé par le sceau affaibli, sans intention humaine mais avec des effets cohérents et croissants.",
      },
      {
        nom: "Les autorités minières",
        idsPnj: ["durnik_chef_mineur", "garde_portail_mine", "torm_garde_mine", "kessak_mineur"],
        role: "Réaction de survie qui ferme les accès plus vite qu'elle ne résout les causes, jusqu'à rendre tout retour impossible.",
      },
    ],

    signesVisibles: [
      "Le froid et les vibrations ne se limitent plus à une seule tombe.",
      "Les trajets s'allongent, les cartes deviennent contradictoires et la lumière éclaire moins loin.",
      "Les rotations minières sont interrompues et des mineurs quittent leur poste.",
      "Les runes changent, les lanternes funéraires s'éteignent et les rites ordinaires ne suffisent plus.",
      "Des fissures atteignent les bâtiments des Terrasses.",
    ],

    scenesJouables: {
      enquete: [
        "Explorer les tombes pour évaluer l'état du sceau et identifier quels ancrages sont encore récupérables.",
        "Suivre les anomalies dans les galeries : trajets qui s'allongent, cartes contradictoires, présences planaires.",
      ],
      roleplay: [
        "Convaincre Durnik et les mineurs de ne pas abandonner les galeries en démontrant que le sceau peut encore être restauré.",
        "Négocier avec Hessa Brunefer pour maintenir l'accès des Terrasses malgré la peur.",
      ],
      action: [
        "Accompagner une équipe de mineurs dans les niveaux profonds pour restaurer un ancrage.",
        "Repousser une présence de la Spirale qui a franchi une zone déformée.",
      ],
    },

    leviersPJ: [
      "Restaurer les ancrages en replaçant les ossements et en accomplissant les rites complets.",
      "Maintenir les galeries ouvertes en rassurant les mineurs et en restaurant la sécurité.",
      "Empêcher l'évacuation des Terrasses en offrant une alternative crédible à la peur.",
      "Neutraliser les sources d'alimentation du sceau : les prélèvements de Thade, les rites des Endeuillés, la mutilation du rite.",
    ],

    menaces: [
      // ── Horloge principale : la rupture du sceau ──
      {
        id: "menace_profanation_thanes",
        nom: "La Profanation du Sceau",
        categorie: "La Force Environnementale",
        nature:
          "Érosion progressive du verrou à mesure que les ossements des Thanes sont prélevés, déplacés ou privés des rites qui maintiennent leur fonction.",
        objectifFinal:
          "Les sept tombes sont suffisamment perturbées pour que le sceau cède de lui-même : la Spirale filtre dans les galeries sans qu'il soit possible de la contenir par les moyens ordinaires.",
        idsPnj: ["thorgar_pretre_nain", "durnik_chef_mineur"],
        avancement: {
          type: "B",
          declencheurPrincipal: "Érosion du sceau qui avance seule.",
          declencheurSecondaire: "Les prélèvements de Thade, les rites des Endeuillés et la mutilation du rite accélèrent l'horloge.",
          avanceHorsChamp: true,
          avanceParEnquete: false,
        },
        conséquenceRemplissage: "Le sceau cède. La Spirale filtre dans les galeries sans qu'il soit possible de la contenir par les moyens ordinaires.",
        annulation: "Possible : si les PJ restaurent les ancrages, replacent les ossements ou accomplissent le rite complet, le MJ retire des segments.",
        horloge: {
          taille: 6,
          etapes: [
            {
              titre: "Les ancrages perdent leur stabilité",
              indice:
                "Le froid et les vibrations ne se limitent plus à une seule tombe. Les runes changent, les lanternes funéraires s'éteignent et les rites ordinaires ne suffisent plus à rétablir le calme.",
            },
            {
              titre: "Les galeries changent de mesure",
              indice:
                "Les trajets s'allongent, les cartes deviennent contradictoires et la lumière éclaire moins loin. Les équipes ne peuvent plus garantir qu'un chemin emprunté à l'aller existera encore au retour.",
            },
            {
              titre: "Le Mausolée réagit",
              indice:
                "La dalle centrale se déplace, les anneaux du Puits de l'Abîme vibrent et des fissures apparaissent dans les murs. Chaque nouvelle perturbation se transmet désormais aux autres tombes.",
            },
            {
              titre: "Les équipes refusent la descente",
              indice:
                "Les rotations sont interrompues, des mineurs quittent leur poste et les contremaîtres ne peuvent plus constituer d'équipes complètes. Les niveaux profonds restent sans surveillance ni entretien.",
            },
            {
              titre: "Les lois physiques divergent",
              indice:
                "Le poids, la chute, le son et l'orientation varient d'une galerie à l'autre. Des présences planaires franchissent les zones déformées et les méthodes minières ordinaires deviennent dangereuses.",
            },
            {
              titre: "Le réseau d'ancrage se rompt",
              indice:
                "Les sept tombes cessent d'agir comme un ensemble. Une lumière remonte du puits et les protections locales deviennent indépendantes, instables et impossibles à restaurer par un seul rite. Des sections complètes cessent d'appartenir à la mine.",
            },
          ],
        },
      },

      // ── Menace secondaire : l'abandon de la mine, pas d'horloge ──
      {
        id: "menace_abandon_mine",
        nom: "L'Abandon de la Mine",
        categorie: "L'Institution",
        nature:
          "Réaction de survie des guildes et des autorités qui ferme les accès plus vite qu'elle ne résout les causes, jusqu'à rendre tout retour impossible.",
        objectifFinal:
          "La Mine d'Argent est officiellement abandonnée, les Terrasses sont évacuées et Valombre perd à la fois sa principale richesse, ses ouvriers les plus compétents et l'accès aux fondations du sceau.",
        idsPnj: ["durnik_chef_mineur", "garde_portail_mine", "torm_garde_mine", "kessak_mineur"],
        noteMJ:
          "L'abandon de la mine crée des scènes (mineurs qui refusent de descendre, accès condamnés, évacuation des Terrasses) mais n'a pas d'horloge propre. Il suit l'horloge principale : aux étapes 4 et 6, la peur pousse à l'abandon. Si les PJ restaurent la sécurité ou rassurent les mineurs, le MJ peut annuler l'effet narratif.",
        conséquenceRemplissage: "La Mine d'Argent est officiellement abandonnée, les Terrasses évacuées. Valombre perd sa principale richesse et l'accès aux fondations du sceau.",
        annulation: "Possible avant l'étape 6 : si les PJ restaurent la sécurité dans les galeries, rassurent les mineurs ou offrent une alternative économique.",
      },
    ],
  },
];

/**
 * Couche de campagne — Le Déphasage.
 *
 * Le déphasage n'est pas un front jouable au même titre que les autres :
 * c'est une couche de campagne qui modifie le contexte global. Il se
 * révèle par l'enquête, pas par la pression d'un antagoniste.
 *
 * Le MJ peut utiliser menace_dephasage_ancrage comme horloge de fond
 * (avance hors-champ, type B) et menace_dephasage_revelation comme
 * track de découverte (avance par enquête, type C).
 */
export const couchesCampagneData = [
  // ─────────────────────────────────────────────────────────────
  // COUCHE 1 — LE DÉPHASAGE
  // Valombre n'est plus tout à fait dans le monde matériel.
  // La Spirale a déplacé l'ancrage de la cité entière depuis
  // l'explosion de Nyx. De l'intérieur, tout semble normal.
  // De l'extérieur, la cité devient impossible à atteindre.
  // ─────────────────────────────────────────────────────────────
  {
  id: "front_dephasage",
  nom: "Le Déphasage",
  type: "Couche de campagne",
  icone: Compass,
  couleur: "text-indigo-300 border-indigo-900 bg-indigo-950/30",

  enjeu:
    "Valombre n'attend pas d'être piégée : elle l'est déjà. Depuis l'explosion magique de Nyx, la Spirale n'a pas envahi la cité — elle a légèrement déplacé son ancrage. La cité, les mines, les routes proches et une partie des cols sont prises dans un voile de continuité. De l'intérieur, tout semble encore fonctionner. De l'extérieur, Valombre devient difficile à atteindre, puis presque impossible. Le déphasage ne coupe pas brutalement la ville : il remplace les ruptures par des explications plausibles. Si les PJ ne comprennent pas que la cité est déjà déconnectée du monde, toutes leurs décisions stratégiques reposent sur une carte qui ment.",

  description:
    "Le déphasage est le résultat indirect de la catastrophe de Nyx. L'explosion n'a pas seulement brisé l'Ordre et dispersé Sealine au-delà du seuil : elle a légèrement déplacé l'ancrage planaire de Valombre entière. La Spirale n'a pas envahi — elle a glissé. La cité est encore là, ses rues, ses mines, ses tours, ses entrepôts. Mais elle n'est plus tout à fait raccordée au reste du monde. Ce n'est pas une bulle visible. C'est pire : le monde continue de mentir à ceux qui vivent dedans. Un marchand reporte son départ à cause de la brume, d'un contrôle de Caldris, d'un pont abîmé, d'une taxe. Un messager revient en jurant qu'il a roulé toute la journée, alors qu'il n'a fait qu'une boucle autour des mêmes bornes. Une lettre arrive, mais elle reprend des formules anciennes, des nouvelles vagues, des signatures attendues. Les gens ne voient pas que plus personne n'entre ou ne sort. Ils voient que les routes sont difficiles en ce moment.",

  questionDramatique:
    "Les PJ peuvent-ils comprendre que Valombre est déjà déconnectée du monde avant que toutes leurs décisions ne reposent sur une carte qui ment ?",

  forcesActives: [
    {
      nom: "La Spirale",
      idsPnj: ["creature_spirale_cooptee"],
      role: "Puissance planaire qui a glissé l'ancrage de Valombre sans l'envahir. Le déphasage progresse seul, hors-champ.",
    },
  ],

  signesVisibles: [
    "Les délais de voyage s'allongent sans raison claire.",
    "Des lettres venues de cités différentes utilisent exactement la même phrase.",
    "Les entrepôts de minerai exporté ne se vident plus assez vite, mais les paiements continuent.",
    "Une route extérieure ramène toujours au même pont, à la même borne, au même corbeau mort.",
    "Les gardes n'ont pas enregistré d'entrée pour des convois « arrivés hier ».",
  ],

  scenesJouables: {
    enquete: [
      "Investiguer les anomalies administratives : lettres en double, cargaisons fantômes, horloges désynchronisées.",
      "Suivre une route extérieure et découvrir qu'elle ramène au même point.",
    ],
    roleplay: [
      "Interroger Maelric sur ce que Caldris sait vraiment de l'inaccessibilité de Valombre.",
      "Confronter Olane ou Hessa avec les anomalies et les forcer à admettre que leurs instruments sont pris dans la même dérive.",
    ],
    action: [
      "Tenter de quitter Valombre à pied ou à cheval et découvrir la boucle.",
      "Accompagner un éclaireur nain qui cartographie les limites du déphasage.",
    ],
  },

  leviersPJ: [
    "Comprendre le déphasage en réunissant les preuves des anomalies (track de découverte).",
    "Utiliser la révélation pour changer les hypothèses stratégiques de tous les acteurs (Conseil, Caldris, nains).",
    "Réancrer Valombre en refermant le seuil ET en restaurant le sceau — un projet de campagne, pas une action unique.",
  ],

  menaces: [
    {
      id: "menace_dephasage_ancrage",
      nom: "Le Glissement de l'Ancrage",
      categorie: "La Force Environnementale",
      nature:
        "Déplacement planaire progressif qui désaccorde Valombre du monde matériel sans rupture visible, remplaçant les coupures par des explications plausibles et des boucles de route.",
      objectifFinal:
        "Valombre bascule entièrement hors du monde matériel. Les routes cessent de mener quelque part, les lettres ne portent plus que des formules répétées, et ceux qui tentent de partir reviennent sans s'en rendre compte. La cité devient un fragment dérivant entre le monde et la Spirale, sans que personne à l'intérieur ne comprenne ce qui s'est produit.",
      idsPnj: ["creature_spirale_cooptee"],
      avancement: {
        type: "B",
        declencheurPrincipal: "Le déphasage progresse seul, hors-champ, depuis l'explosion de Nyx.",
        declencheurSecondaire: "L'ouverture du seuil par Thade ou la rupture du sceau accélèrent le déphasage.",
        avanceHorsChamp: true,
        avanceParEnquete: false,
      },
      conséquenceRemplissage: "Valombre bascule entièrement hors du monde matériel. Les routes cessent de mener quelque part, les lettres ne portent plus que des formules répétées, ceux qui tentent de partir reviennent sans s'en rendre compte.",
      annulation: "Extrêmement difficile : il faut réancrer Valombre dans le monde matériel, ce qui suppose de refermer le seuil ET de restaurer le sceau. Une horloge d'inversion taille 6+ est nécessaire.",
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
      type: "decouverte",
      categorie: "La Force Environnementale",
      nature:
        "Processus de découverte qui confronte les PJ à l'impossibilité de quitter Valombre et à la vérité que la cité est déjà piégée — non pas par un siège visible, mais par un déphasage que personne n'a remarqué.",
      objectifFinal:
        "Les PJ comprennent que Valombre n'attend pas d'être piégée : elle l'est déjà. Cette révélation transforme toutes leurs hypothèses stratégiques — les routes ne sont pas difficiles, elles sont coupées ; le commerce ne ralentit pas, il n'existe plus ; Caldris ne menace pas, elle observe un phénomène qu'elle ne peut pas expliquer publiquement.",
      noteMJ:
        "Cette horloge est un track de découverte, pas une menace active. Elle n'avance jamais par elle-même. Le MJ coche un segment uniquement quand les PJ investiguent les anomalies du déphasage et obtiennent une information correspondant à l'étape. Les PNJ listés (Maelric, Olane, Hessa) sont des sources d'information, pas des moteurs.",
      idsPnj: ["envoye_caldris", "maera_olane", "hessa_brunefer"],
      avancement: {
        type: "C",
        declencheurPrincipal: "Les PJ investiguent les anomalies du déphasage et obtiennent une information correspondant à l'étape.",
        declencheurSecondaire: "Un PNJ listé (Maelric, Olane, Hessa) apporte une information clé qui débloque une étape.",
        avanceHorsChamp: false,
        avanceParEnquete: true,
      },
      conséquenceRemplissage: "Les PJ comprennent que Valombre est déjà piégée. Toutes leurs hypothèses stratégiques sont renversées : les routes sont coupées, le commerce n'existe plus, Caldris observe un phénomène qu'elle ne peut expliquer publiquement.",
      annulation: "Non applicable : on ne peut pas oublier une révélation. Une fois le track rempli, la connaissance est permanente.",
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
