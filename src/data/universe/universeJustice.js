export const universeJustice = {
  titre: "Justice de Valombre",
  sousTitre:
    "Une justice de rang et de coutume, rendue sous l’égide du Conseil, moins soucieuse des droits de chacun que des privilèges établis",

  vueEnsemble: [
    "Le Conseil administre les tribunaux, la Garde civique et les prisons. Il affirme garantir l’unité de la loi, mais doit composer avec les factions reconnues de Valombre.",
    "La loi ne s’applique pas de la même manière à tous. La réputation, la naissance, la profession, l’appartenance à une guilde et la présence d’un garant influencent fortement le sort d’une affaire.",
    "Dans les Terrasses, clans et guildes règlent encore de nombreux litiges selon leurs propres coutumes. L’Université, la Guilde Marchande et le clergé protègent eux aussi leurs membres et défendent leurs privilèges devant le Conseil.",
    "Lorsque les coutumes et les règles de plusieurs factions s’opposent, l’affaire est portée devant la Cour des Concordats. Les autorités concernées y plaident leurs droits avant qu’une décision ne soit rendue.",
  ],

  code: {
    nom: "Code de la Fondation",
    depositaire: "Grande Chancellerie de Valombre, Hôtel de Ville",
    principes: [
      "Quiconque rompt la paix de Valombre tombe sous le ban de la cité et encourt amende, fers, bannissement ou peine publique.",
      "Nul ne sera ouï en justice sans garant reconnu. À défaut de garant, la faute est tenue pour acquise jusqu’à preuve portée par autorité légitime.",
      "Maisons, guildes, clans, ordres et temples gardent leurs coutumes et jugent les leurs, pourvu qu’elles ne soient contraires au Code, aux édits du Conseil ni à la paix publique.",
      "Qui récidive après sentence est réputé rebelle à l’autorité de la cité, et sa peine sera accrue sur ses corps, biens ou droits.",
      "Nécromancie, relèvement des morts, contrainte des âmes, violation de sépulture ou ouverture illicite des corps sont crimes capitaux, punis de mort sans appel, rachat ni privilège.",
    ],
  },

  autorites: [
    {
      role: "Édits et ordonnances",
      autorite: "Conseil de Valombre",
      responsabilite:
        "Vote les édits, fixe les taxes, confirme les chartes et décide des mesures d’exception nécessaires au maintien de l’ordre.",
    },
    {
      role: "Gouvernement de la cité",
      autorite: "Bourgmestre Avel Ronce",
      responsabilite:
        "Préside le Conseil, promulgue ses décisions, veille à leur application et peut demander qu’une peine soit réduite ou qu’une affaire soit rejugée.",
    },
    {
      role: "Maintien de l’ordre",
      autorite: "Garde civique",
      responsabilite:
        "Patrouille dans les rues, surveille les portes et les marchés, disperse les troubles, arrête les suspects et exécute les décisions des cours.",
    },
    {
      role: "Prévôté",
      autorite: "Prévôt de Valombre",
      responsabilite:
        "Commande la Garde civique, reçoit les plaintes, ordonne les recherches et présente devant les échevins les affaires qui troublent la paix de la cité.",
    },
    {
      role: "Recherche des coupables",
      autorite: "Sergents de la Prévôté",
      responsabilite:
        "Interrogent les témoins, recherchent les fugitifs, inspectent les lieux et saisissent les objets pouvant servir de preuve.",
    },
    {
      role: "Justice ordinaire",
      autorite: "Banc des Échevins",
      responsabilite:
        "Réunit les échevins chargés de juger les dettes, les vols, les violences, les conflits de voisinage et les infractions commises dans les marchés.",
    },
    {
      role: "Conflits entre factions",
      autorite: "Cour des Concordats",
      responsabilite:
        "Examine les affaires dans lesquelles une coutume, une charte ou un privilège reconnu entre en conflit avec les édits du Conseil.",
    },
    {
      role: "Crimes majeurs",
      autorite: "Cour Souveraine de Valombre",
      responsabilite:
        "Juge les crimes contre le Conseil, les dignitaires, les institutions, les ouvrages vitaux et la sûreté de la cité.",
    },
    {
      role: "Geôles et châtiments",
      autorite: "Maître des Geôles",
      responsabilite:
        "Administre la Prison du Conseil, garde les prévenus et fait appliquer les peines de détention, de pilori, de fouet ou de remise aux corvées.",
    },
    {
      role: "Serments et registres",
      autorite: "Clergé de Saint-Aldric",
      responsabilite:
        "Tient les registres des naissances, des unions et des décès, reçoit certains serments et conserve les déclarations prononcées devant l’autel.",
    },
    {
      role: "Affaires magiques",
      autorite: "Université Arcanique",
      responsabilite:
        "Examine les phénomènes magiques, contrôle les pratiques reconnues et juge les fautes commises par ses membres dans l’enceinte de l’Université.",
    },
    {
      role: "Justice des Terrasses",
      autorite: "Clans et guildes naines",
      responsabilite:
        "Appliquent leurs coutumes dans les affaires familiales, minières, professionnelles et funéraires, tant qu’elles ne menacent pas la paix de Valombre.",
    },
  ],

  tribunaux: [
    {
      nom: "Cour des Échevins",
      competence:
        "Un échevin, assisté d’un greffier et parfois de deux notables du quartier, entend les affaires ordinaires : tapage, vol mineur, dettes, violences simples, dégradations, conflits de voisinage ect...",
      notes: [
        "Les audiences sont publiques, brèves et souvent réglées le jour même sur la place, dans une halle ou dans une salle de l’Hôtel de Ville.",
        "L’échevin tient compte du rang de l’accusé, de sa réputation, de ses antécédents et de la qualité des personnes qui acceptent de répondre de lui.",
        "La parole d’un officier, d’un maître de guilde, d’un prêtre ou d’un propriétaire reconnu pèse davantage que celle d’un inconnu.",
        "Un accusé sans protecteur peut être condamné sur des témoignages qui auraient seulement justifié une enquête contre un notable.",
      ],
    },
    {
      nom: "Cour des Concordats",
      competence:
        "Examine les affaires dans lesquelles une coutume de clan, une charte de guilde, un privilège universitaire ou un édit du Conseil se contredisent.",
      notes: [
        "La Cour est réunie spécialement pour chaque affaire. Elle comprend des magistrats du Conseil et des représentants reconnus des factions concernées.",
        "Chaque représentant expose les coutumes, les privilèges et les précédents qui soutiennent sa cause.",
        "La Cour cherche d’abord un arrangement qui préserve la paix entre les factions. Si aucun accord n’est trouvé, les magistrats rendent une décision au nom du Conseil.",
        "Elle peut ordonner une compensation, répartir les responsabilités, imposer un serment ou remettre l’accusé à sa propre faction pour qu’elle le juge selon ses usages.",
      ],
    },
    {
      nom: "Cour Souveraine de Valombre",
      competence:
        "Réunie pour les crimes les plus graves, elle juge les affaires qui menacent le Conseil, les institutions, les routes, les mines, les fondations ou la sûreté de Valombre.",
      notes: [
        "Elle rassemble les plus hauts magistrats de la cité, auxquels peuvent se joindre le bourgmestre, des conseillers et des dignitaires appelés à témoigner ou à donner leur avis.",
        "La composition de la Cour varie selon le rang de l’accusé et la nature du crime.",
        "Les audiences peuvent être fermées au public lorsque le Conseil invoque la sûreté de la cité.",
        "Une condamnation à mort doit être approuvée par une forte majorité des magistrats présents.",
        "Le bourgmestre peut réduire une peine, accorder un sursis ou ordonner un nouveau jugement lorsqu’il affirme que l’intérêt de Valombre l’exige.",
      ],
    },
  ],

  crimesMajeurs: [
    "Meurtre politique, meurtre multiple ou assassinat d’un officier en fonction",
    "Haute trahison et intelligence avec une puissance ennemie",
    "Tentative de coup d’État ou soulèvement armé contre le Conseil",
    "Corruption d’un magistrat, d’un conseiller ou d’un officier supérieur",
    "Capturer, tuer, maudire ou humilier officiellement un émissaire protégé.",
    "Manipuler magiquement un souverain, un conseil, une assemblée de nobles ou un conclave religieux.",
    "Crime grave commis dans l’exercice d’une charge publique",
  ],

  infractions: [
    {
      infraction: "Tapage, ivresse violente ou trouble public",
      peines:
        "Détention en geôle jusqu’au matin, amende, pilori ou quelques coups de bâton",
      aggravation:
        "Fouet public, expulsion du quartier ou interdiction de fréquenter les tavernes en cas de récidive",
    },
    {
      infraction: "Refus d’obéir à la Garde civique",
      peines:
        "Arrestation immédiate, amende, détention jusqu’à l’audience ou châtiment corporel",
      aggravation:
        "Corvées publiques, bannissement temporaire ou jugement pour rébellion si le refus provoque une émeute, une fuite ou des blessures",
    },
    {
      infraction: "Port d’arme dans un lieu interdit",
      peines:
        "Confiscation de l’arme, amende et inscription du contrevenant au registre de la prévôté",
      aggravation:
        "Pilori, fouet ou perte du droit de porter les armes si l’arme est tirée devant un magistrat, dans un sanctuaire ou au cours d’une audience",
    },
    {
      infraction: "Vol mineur",
      peines:
        "Restitution du bien et paiement de deux ou trois fois sa valeur, accompagnés du pilori ou du fouet",
      aggravation:
        "Marquage judiciaire, corvées prolongées ou bannissement en cas de récidive",
    },
    {
      infraction: "Cambriolage ou vol important",
      peines:
        "Restitution, confiscation des biens, fouet, corvées prolongées ou bannissement",
      aggravation:
        "Marquage ou mutilation en cas de récidive ; jugement pour sacrilège ou trahison si le vol vise un sanctuaire, le trésor public ou les défenses de la cité",
    },
    {
      infraction: "Agression sans arme",
      peines:
        "Compensation versée à la victime, paiement des soins, amende, coups de bâton ou pilori",
      aggravation:
        "Fouet, corvées ou bannissement temporaire si la victime est grièvement blessée ou placée sous la protection d’une institution",
    },
    {
      infraction: "Agression armée",
      peines:
        "Confiscation de l’arme, forte compensation, fouet, détention ou corvées prolongées",
      aggravation:
        "Marquage, bannissement ou perte définitive du droit de porter une arme en cas d’embuscade, de récidive ou d’attaque contre un officier",
    },
    {
      infraction: "Homicide involontaire",
      peines:
        "Prix du sang versé à la famille, perte de charge, corvées ou exil temporaire",
      aggravation:
        "Bannissement durable si le coupable refuse la compensation, dissimule les faits ou a fait preuve d’une négligence manifeste",
    },
    {
      infraction: "Meurtre",
      peines:
        "Pendaison pour les gens du commun, décapitation pour les personnes de haut rang, ou bannissement perpétuel accompagné de la confiscation des biens",
      aggravation:
        "Exécution publique, exposition du corps et suppression des honneurs funéraires en cas d’assassinat politique, de meurtre multiple ou de récidive",
    },
    {
      infraction: "Incendie volontaire",
      peines:
        "Confiscation des biens, fouet, corvées à vie, bannissement ou mort selon les dommages causés",
      aggravation:
        "Exécution si l’incendie provoque des morts ou vise délibérément un quartier, un marché, une mine, une porte ou un bâtiment public",
    },
    {
      infraction: "Faux mandat, faux registre ou contrefaçon d’un signe officiel",
      peines:
        "Pilori, marquage, perte de charge, confiscation des biens et corvées prolongées",
      aggravation:
        "Mutilation de la main ou peine capitale si le faux entraîne une condamnation injuste, une émeute, une trahison ou la mort d’une personne",
    },
    {
      infraction: "Corruption d’un fonctionnaire",
      peines:
        "Restitution des sommes reçues, confiscation, exposition publique, destitution ou bannissement",
      aggravation:
        "Jugement devant la Cour Souveraine, confiscation générale et perte de tous les privilèges si un magistrat, un conseiller ou un officier supérieur est impliqué",
    },
    {
      infraction: "Faux témoignage ou parjure",
      peines:
        "Amende, pilori, déclaration publique d’infamie et perte du droit de prêter serment devant un tribunal",
      aggravation:
        "Fouet, marquage, bannissement ou peine équivalente au tort causé si le mensonge entraîne la ruine, la mutilation ou la mort d’un innocent",
    },
    {
      infraction: "Contrebande ou fraude sur les taxes",
      peines:
        "Saisie de la cargaison, amende égale à plusieurs fois sa valeur, pilori ou fouet",
      aggravation:
        "Corvées prolongées, fermeture des entrepôts, interdiction de commerce ou bannissement si le trafic est organisé ou protégé par des fonctionnaires",
    },
    {
      infraction: "Rupture frauduleuse de contrat",
      peines:
        "Compensation fixée par la Guilde Marchande, saisie des garanties et suspension des droits commerciaux",
      aggravation:
        "Pilori, confiscation, exclusion définitive des marchés ou remise au Conseil si le contrat a été obtenu par menace, violence ou falsification",
    },
    {
      infraction: "Pratique médicale sans reconnaissance officielle",
      peines:
        "Fermeture du lieu, saisie du matériel, amende, pilori ou interdiction d’exercer",
      aggravation:
        "Fouet, marquage, bannissement ou jugement pour homicide si des patients ont été volontairement trompés, mutilés ou tués",
    },
    {
      infraction: "Magie dangereuse dans un lieu public",
      peines:
        "Saisie des composants, détention, amende et interdiction temporaire de pratiquer la magie",
      aggravation:
        "Confiscation des ouvrages, marquage, bannissement ou peine capitale si la magie provoque de nombreuses victimes ou menace un quartier entier",
    },
    {
      infraction: "Charme, domination ou altération de l’esprit sans autorisation",
      peines:
        "Détention, marquage judiciaire, confiscation des ouvrages, interdiction de pratiquer la magie ou bannissement",
      aggravation:
        "Jugement pour trahison si le sort vise un magistrat, un conseiller, un témoin sous protection ou permet de prendre le contrôle d’une institution",
    },
    {
      infraction: "Nécromancie pratiquée sur un cadavre sans autorisation",
      peines:
        "Confiscation des textes et instruments, fouet, marquage, détention ou bannissement",
      aggravation:
        "Peine capitale si le coupable relève un mort, profane plusieurs corps, provoque une contagion ou agit au service d’une organisation interdite",
    },
    {
      infraction: "Profanation d’une tombe",
      peines:
        "Restitution des biens, réparation rituelle, fouet, marquage, bannissement ou remise à la juridiction du clan lésé",
      aggravation:
        "Jugement devant la Cour Souveraine si la profanation vise une sépulture publique, un fondateur, un dignitaire ou menace la paix entre les communautés",
    },
    {
      infraction: "Intrusion dans une galerie condamnée",
      peines:
        "Amende, fouet, expulsion des Terrasses ou corvées imposées par la Guilde des Mineurs",
      aggravation:
        "Bannissement, confiscation du matériel ou jugement pour sabotage si l’intrusion met des mineurs en danger ou endommage une galerie",
    },
    {
      infraction: "Sabotage d’une mine, d’un aqueduc, d’une porte ou du Beffroi",
      peines:
        "Confiscation générale, corvées à vie, mise au ban ou mort",
      aggravation:
        "Exécution publique et suppression des privilèges du coupable si la cité, ses approvisionnements ou ses habitants ont été directement menacés",
    },
    {
      infraction: "Évasion ou aide apportée à un prisonnier",
      peines:
        "Marquage, reprise de la peine initiale, amende, détention ou corvées pour le complice",
      aggravation:
        "Bannissement ou jugement pour complicité de trahison si l’évasion libère un meurtrier, un espion, un traître ou un saboteur",
    },
    {
      infraction: "Espionnage pour une puissance étrangère",
      peines:
        "Confiscation des biens, détention, bannissement, mise au ban ou mort",
      aggravation:
        "Exécution publique et poursuite des complices si les actes ont été commis pendant une guerre, un siège ou une période de troubles",
    },
    {
      infraction: "Haute trahison",
      peines:
        "Confiscation générale, perte des titres et privilèges, mise au ban perpétuelle ou condamnation à mort",
      aggravation:
        "Les biens, charges et privilèges d’une famille, d’une maison ou d’une faction peuvent être saisis s’il est prouvé qu’elle a protégé le coupable ou profité du crime",
    },
    {
      infraction: "Atteinte aux fondations anciennes ou à un ouvrage interdit de la cité",
      peines:
        "Saisie des documents et instruments, détention au secret et jugement devant la Cour Souveraine",
      aggravation:
        "Peine capitale et confiscation générale si l’acte provoque un effondrement, ouvre un passage interdit ou crée un danger que les autorités ne peuvent contenir",
    },
  ],

  jurisdictions: [
    {
      nom: "Terrasses naines",
      autorite:
        "Durnik exerce son autorité sur les mines et les équipes qui y travaillent. Thorgar veille sur les rites, les sépultures et certains serments. Hessa Brunefer défend les droits et les coutumes des Terrasses devant le Conseil.",
      details: [
        "Les clans et les guildes règlent les héritages, les querelles familiales, les dettes de guilde, les accidents de mine, les manquements aux règles des galeries et les atteintes aux sépultures naines.",
        "Ils peuvent imposer une compensation, un serment de réparation, l’exclusion d’une guilde, la perte de certains droits ou l’exil des Terrasses.",
        "La Garde civique évite d’arrêter un nain dans les Terrasses sans en avertir les autorités locales, sauf s’il est pris sur le fait lors d’un crime grave.",
        "Si un clan refuse de livrer un accusé réclamé par le Conseil, l’affaire est portée devant la Cour des Concordats. Le Conseil peut alors imposer une amende collective, fermer un accès commercial ou suspendre certains privilèges.",
      ],
    },
    {
      nom: "Université Arcanique",
      autorite:
        "La rectrice et les maîtres exercent leur autorité sur les étudiants, les enseignants, les laboratoires et les savoirs placés sous la protection de l’Université.",
      details: [
        "L’Université peut suspendre un étudiant, retirer un titre, confisquer des recherches, fermer un laboratoire ou interdire à l’un de ses membres d’enseigner et de pratiquer la magie.",
        "Un membre de l’Université accusé d’une faute commise dans son enceinte est d’abord remis à ses maîtres, sauf en cas de meurtre, de trahison ou de danger manifeste pour la cité.",
        "L’Université cherche à juger ses membres à l’abri du public afin de préserver son prestige. Le Conseil intervient lorsqu’un habitant extérieur à l’institution a été lésé, qu’un dommage a été causé dans la ville ou que l’affaire menace l’ordre public.",
      ],
    },
    {
      nom: "Guilde Marchande",
      autorite:
        "Yselle Vaurin et les arbitres de la Guilde peuvent suspendre les droits d’un marchand, saisir ses garanties, fermer son comptoir ou l’exclure des marchés reconnus.",
      details: [
        "La Guilde tranche les querelles portant sur les contrats, les cargaisons, les poids et mesures, les faillites, les prêts, les lettres de crédit et les obligations entre maisons marchandes.",
        "Un marchand exclu de la Guilde ne peut plus faire reconnaître ses contrats, louer légalement un entrepôt ni participer aux grandes halles.",
        "Les affaires de violence, de corruption, de faux registres ou de fraude contre le Conseil sont remises aux magistrats de la cité.",
      ],
    },
    {
      nom: "Clergé de Saint-Aldric",
      autorite:
        "Géraud Veyre authentifie les serments, conserve les déclarations faites devant l’autel et peut demander qu’une querelle soit suspendue afin de permettre une médiation.",
      details: [
        "Le clergé tient les registres des naissances, des unions et des décès. Sa parole peut confirmer la réputation, la parenté ou les engagements publics d’une personne.",
        "Celui qui atteint une chapelle et réclame la protection de Saint-Aldric bénéficie du droit d’asile jusqu’au coucher du soleil suivant.",
        "Durant ce délai, la Garde civique ne peut l’emmener de force. Le réfugié doit toutefois accepter de comparaître devant un magistrat ou de quitter Valombre sous la protection du clergé.",
        "Le droit d’asile ne protège pas celui qui a commis un meurtre dans un lieu sacré, provoqué un incendie ou représente encore un danger immédiat.",
      ],
    },
    {
      nom: "Caldris",
      autorite:
        "Les ordres et mandats de Caldris ne possèdent aucune force dans Valombre. Ses représentants doivent demander au Conseil qu’un fugitif leur soit livré.",
      details: [
        "Un officier caldrisien ne peut arrêter, fouiller ou retenir quelqu’un dans la cité sans l’autorisation du Conseil et l’appui de la Garde civique.",
        "Le Conseil peut livrer un fugitif à Caldris pour préserver les routes, les traités ou les relations entre les deux puissances.",
        "Une arrestation menée sans autorisation constitue une atteinte aux droits de Valombre et une infraction faite au Conseil.",
        "Selon le rang de l’officier et l’importance de Caldris, le Conseil peut toutefois préférer des excuses officielles à une condamnation publique.",
      ],
    },
  ],
};
