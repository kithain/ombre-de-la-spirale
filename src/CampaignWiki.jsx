import React, { useState } from "react";
import {
  BookOpen,
  Users,
  Skull,
  Map,
  ChevronDown,
  ChevronRight,
  Scroll,
  Shield,
  Hexagon,
  Sparkles,
  Sword,
  Eye,
  MessageSquare,
  AlertTriangle,
  HelpCircle,
  Anchor,
  ArrowUp,
} from "lucide-react";

// --- DONNÉES FIDÈLES AU TEXTE ORIGINAL ---



// --- DONNÉES FIDÈLES AU TEXTE ORIGINAL ---

const CAMPAIGN_DATA = {
  universe: {
    title: "Le Monde de l'Ombre",
    intro: "Val-d’Ombre, cité industrielle et gothique, étouffe sous la poussière de roche et les vapeurs métalliques.",
    sections: [
      {
        title: "Atmosphère Générale",
        content: [
          "Val-d’Ombre est une cité industrielle et gothique accrochée à flanc de montagne.",
          "L’air y est saturé de poussière de roche, brume froide, odeur métallique des forges.",
          "C’est une ville de verticalité, de terrasses, de fumées et d’ombres."
        ]
      },
      {
        title: "La Spirale des Éons",
        content: [
          "Tour inversée titanesque qui s’enfonce dans la croûte terrestre.",
          "Non pas construite, mais « poussée » depuis une autre réalité.",
          "Architecture vivante : les couloirs changent si on les quitte trop longtemps.",
          "Le Secret : Thade veut s'y brancher pour figer sa conscience et devenir immortel."
        ]
      }
    ],
    locations: [
      { name: "Quartier des Mineurs", desc: "Niveau du sol. Bruyant, vivant. Territoire des Nains. Abrite le Temple-Forgeron." },
      { name: "Quartier du Savoir", desc: "Mi-hauteur. Université, Tour des Mages. Silence studieux et complots académiques." },
      { name: "Hauteurs Brumeuses", desc: "Sommet. Résidences nobles, Manoir du Bourgmestre. Loin de la suie." },
      { name: "Cimetière en Terrasse", desc: "Nécropole étagée à flanc de falaise. Contient l'accès secret à la Spirale." },
      { name: "La Mine d'Argent", desc: "Poumon économique. Niveau -8 scellé par les Nains (Le Seuil)." }
    ]
  },
  factions: [
    {
      name: "Le Conseil (Politique)",
      type: "Administration",
      desc: "Le Bourgmestre est un humain honnête mais dépassé. Il est obsédé par le maintien de la paix entre Nains et Mages pour que le commerce tourne.",
      icon: Users,
      color: "text-blue-400 border-blue-900 bg-blue-950/30"
    },
    {
      name: "La Guilde des Mineurs",
      type: "Gardiens Nains",
      desc: "Dirigée par le Grand Maître et Haut Clerc. Ils savent intuitivement que la montagne est « malade ». Pour eux, creuser trop profond est un suicide et une trahison.",
      icon: Shield,
      color: "text-amber-500 border-amber-900 bg-amber-950/30"
    },
    {
      name: "La Guilde des Mages",
      type: "Les Ambitieux",
      desc: "Prestige intellectuel et force militaire. Officiellement contre la nécromancie, mais Thade Coren a infiltré le Cercle Intérieur et radicalise les étudiants.",
      icon: Sparkles,
      color: "text-purple-400 border-purple-900 bg-purple-950/30"
    }
  ],
  antagonist: {
    name: "Thade Coren",
    title: "L'Architecte de l'Éternité",
    quote: "« La mort n’est pas une tragédie, c’est un défaut de conception du système. »",
    evolution: [
      { lvl: "SCÉNARIO 1", title: "L'Enquêteur", desc: "Masque : Serviable, froid, académique. Objectif : Tester les PJ et récupérer les restes/artefacts saisis." },
      { lvl: "SCÉNARIO 2", title: "Le Manipulateur", desc: "Masque : Médiateur. Actions : Fournit le cristal mouchard aux PJ. Force l'ouverture des mines profondes." },
      { lvl: "SCÉNARIO 3", title: "Le Tyran", desc: "Le masque tombe. Fait assassiner le chef nain. Utilise la nécromancie pour 'rétablir l'ordre'." },
      { lvl: "SCÉNARIO 4-5", title: "L'Entité", desc: "Fusionné avec la Spirale. Ne parle plus comme un homme ('Nous'). Veut figer la ville dans l'éternité." }
    ]
  },
  scenarios: [
    {
      id: 1,
      title: "SCÉNARIO 1 : LE MURMURE DES OS",
      level: "Niveaux 1-3",
      synopsis: "Des tombes sont profanées. Ce qui ressemble à du pillage cache les expériences d'une cabale d'apprentis dirigée en sous-main par Thade Coren.",
      acts: [
        {
          title: "ACTE 1 : L'INCIDENT DU CIMETIÈRE",
          stake: "Accroche de l'aventure et premier combat.",
          location: "Auberge « Le Pic Brisé » et le Cimetière.",
          scenes: [
            { 
              title: "Scène 1 : L'Offre du Prêtre", 
              type: "Social", 
              details: [
                "À l'auberge, Thorgar (prêtre nain du Temple-Forgeron) engage les PJ.",
                "Mission : Monter la garde au cimetière cette nuit.",
                "Contexte : La garde s'en moque ('ce ne sont que des os'), mais pour les nains, c'est un sacrilège.",
                "Récompense : Or et une lettre de recommandation."
              ]
            },
            { 
              title: "Scène 2 : La Veillée Brumeuse", 
              type: "Ambiance", 
              details: [
                "Ambiance : Brume épaisse, statues gothiques, froid mordant.",
                "Tests : Détection / Perception pour voir des ombres bouger.",
                "Tests : Discrétion pour ne pas se faire repérer."
              ]
            },
            { 
              title: "Scène 3 : Les Pilleurs", 
              type: "Combat", 
              details: [
                "Ennemis : Groupe de 4-5 bandits humains (Guerriers/Roublards niv 1).",
                "Action : Ils commencent à creuser une tombe récente.",
                "Comportement : Ils fuient s'ils sont submergés.",
                "Indice : Ils n'emportent pas les bijoux, mais les corps entiers dans des sacs imprégnés d'herbes (pour l'odeur)."
              ]
            },
            { 
              title: "Scène 4 : L'Anomalie", 
              type: "Investigation", 
              details: [
                "Inspection : Corps portant des traces de chirurgie post-mortem précise.",
                "Loot clé : Une broche en argent avec un sigle partiel (chouette stylisée).",
                "Signification : Symbole d'une fraternité d'étudiants mages."
              ]
            },
            { 
              title: "Scène 5 : L'Intervention de la Garde", 
              type: "Conflit", 
              details: [
                "Action : La Garde Urbaine arrive, attirée par le bruit.",
                "Problème : Le Capitaine veut arrêter les PJ pour 'trouble à l'ordre public'.",
                "Résolution : Thorgar intervient pour les innocenter.",
                "Tension : Palpable entre l'autorité humaine et la religion naine."
              ]
            }
          ]
        },
        {
          title: "ACTE 2 : LA PISTE ARCANIQUE",
          stake: "Enquête urbaine et introduction de Thade Coren.",
          location: "Quartier du Savoir et Université.",
          scenes: [
            { 
              title: "Scène 1 : Le Conseil de Thorgar", 
              type: "Social", 
              details: [
                "Thorgar identifie la broche comme un objet de mage.",
                "Il refuse d'aller voir la Guilde lui-même ('Ils mentiront').",
                "Il envoie les PJ enquêter à l'Université."
              ]
            },
            { 
              title: "Scène 2 : Les Portes du Savoir", 
              type: "Investigation", 
              details: [
                "Action : Interroger des étudiants ou entrer à l'Université.",
                "Test : Renseignements / Diplomatie.",
                "Info : La broche appartient à la fraternité 'Nyx', dissoute il y a deux mois pour 'conduite non académique'."
              ]
            },
            { 
              title: "Scène 3 : Le Professeur Thade Coren", 
              type: "Rencontre Clé", 
              details: [
                "Rencontre : Thade invite les PJ dans son bureau.",
                "Attitude : Serviable, sévère mais juste.",
                "Manipulation : Il dénonce l'ancien chef de la fraternité, Jaren. 'Arrêtez-le avant qu'il ne souille la réputation de la Magie.'",
                "Aide : Il donne l'adresse de la planque de Jaren."
              ]
            },
            { 
              title: "Scène 4 : Le Taudis de l'Apprenti", 
              type: "Exploration", 
              details: [
                "Lieu : Vieille Ville, chambre insalubre.",
                "Danger : La porte est piégée (Glyphe mineur ou mécanique).",
                "Indices : Notes délirantes sur 'La Spirale qui chante' et plans des égouts."
              ]
            },
            { 
              title: "Scène 5 : Le Gardien Laissé Derrière", 
              type: "Combat", 
              details: [
                "Ennemi : Squelette ou Petit Élémentaire invoqué par une rune.",
                "Cliffhanger : Les plans montrent que Jaren opère sous un vieux manoir abandonné, accessible via les égouts."
              ]
            }
          ]
        },
        {
          title: "ACTE 3 : LES ÉGOUTS ET LES OUBLIÉS",
          stake: "Dungeon crawl (Niveau 2) et ambiance horrifique.",
          location: "Les Égouts / Connexion mines.",
          scenes: [
            { title: "Scène 1 : La Descente", type: "Exploration", details: ["Entrée par une grille rouillée.", "Ambiance : Sombre, humide, pestilentiel. Gestion de la lumière nécessaire."] },
            { title: "Scène 2 : La Faune Locale", type: "Combat", details: ["Ennemis : Rats géants ou nuées de chauves-souris.", "Danger : Risque de Fièvre des égouts."] },
            { title: "Scène 3 : L'Ossuaire Clandestin", type: "Indice", details: ["Zone sèche avec des os rongés (restes d'expériences).", "Indice : Rune tracée au sang (Test Mystères/Religion). Tentative maladroite de nécromancie."] },
            { title: "Scène 4 : Le Kobold Égaré", type: "Social", details: ["Rencontre : Sniv, vieux kobold terrifié par 'les hommes en robes'.", "Aide : Peut guider les PJ contre nourriture."] },
            { title: "Scène 5 : La Porte Scellée", type: "Action", details: ["Sous le manoir. Porte en fer renforcée.", "Gardes : 2 mercenaires humains.", "Choix : Combat, Bluff ou Infiltration."] }
          ]
        },
        {
          title: "ACTE 4 : LE MANOIR ABANDONNÉ",
          stake: "Le cœur du culte. Tactique et magie.",
          location: "Sous-sol du manoir.",
          scenes: [
            { title: "Scène 1 : L'Antichambre", type: "Infiltration", details: ["Ancien cellier transformé en labo.", "Décor : Fioles bouillonnantes, odeur de formol."] },
            { title: "Scène 2 : Les Expériences Ratées", type: "Combat", details: ["Ennemis : Zombies (lents mais résistants).", "Horreur : Ce sont les cadavres volés au cimetière (possibilité de reconnaître un nom)."] },
            { title: "Scène 3 : La Bibliothèque Interdite", type: "Énigme", details: ["Livre de comptes protégé par un piège magique.", "Preuve : Jaren achète des composants très chers (financés par qui ?).", "Loot : Parchemins (Niv 1) et potions."] },
            { title: "Scène 4 : Les Prisonniers", type: "Tension", details: ["Deux mendiants vivants, ligotés, prêts au sacrifice.", "Chrono : Les chants rituels commencent à côté."] },
            { title: "Scène 5 : Le Seuil du Rituel", type: "Préparation", details: ["Porte entrouverte, lumière violette.", "Les PJ ont 1 round pour se buffer."] }
          ]
        },
        {
          title: "ACTE 5 : LE BOUC ÉMISSAIRE",
          stake: "Boss final et montée de niveau.",
          location: "Salle de bal souterraine.",
          scenes: [
            { title: "Scène 1 : Le Rituel de Jaren", type: "Boss", details: ["Jaren (Nécromancien Niv 3) + 4 Squelettes archers.", "Dialogue : 'Le Maître sera fier ! La Spirale m'a choisi !'", "Terrain : Tables d'opération (couverture)."] },
            { title: "Scène 2 : Surcharge", type: "Twist", details: ["À 50% PV de Jaren : onde de choc magique.", "Effet : Squelettes deviennent Enragés (+Attaque, -CA)."] },
            { title: "Scène 3 : L'Arrivée du Sauveur", type: "Dénouement", details: ["Thade Coren entre avec des gardes.", "Action : Il neutralise Jaren avec un sort impressionnant.", "Dialogue : 'Pauvre fou... tu as joué avec des forces qui te dépassent.'"] },
            { title: "Scène 4 : Le Nettoyage", type: "Indice", details: ["Thade saisit tout le matériel 'pour sécurité'.", "Test (Psychologie/Perception DD 20) : Thade empoche le journal de recherche avec soin, contrairement à son dégoût affiché."] },
            { title: "Scène 5 : Héros de Val-d'Ombre", type: "Conclusion", details: ["Retour surface. Bourgmestre soulagé, Thorgar content.", "Thade félicite les PJ.", "Gain : Passage Niveau 3."] }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "SCÉNARIO 2 : L'ÉCHO DES PROFONDEURS",
      level: "Niveaux 4-6",
      synopsis: "Grève des mineurs car 'la pierre hurle'. La mine a percé la paroi de la Spirale. Exploration souterraine.",
      acts: [
        {
          title: "ACTE 1 : LA GRÈVE DE LA PIOCHE",
          stake: "Social et tension politique.",
          location: "Quartier des Mineurs.",
          scenes: [
            { title: "Scène 1 : Le Conseil de Crise", type: "Social", details: ["Hôtel de Ville. Revenus gelés.", "Thade remet un 'Cristal de Résonance' aux PJ (en fait un mouchard)."] },
            { title: "Scène 2 : Le Quartier Paralysé", type: "Ambiance", details: ["Silence inhabituel. Familles prêtes à fuir.", "Rumeurs : 'Les murs saignent', 'Ombres vivantes'."] },
            { title: "Scène 3 : Le Piquet de Grève", type: "Négociation", details: ["Durnik (chef mineur) bloque l'entrée.", "Test (Diplomatie/Bluff) : Convaincre de laisser passer des étrangers."] },
            { title: "Scène 4 : L'Équipement", type: "Préparation", details: ["Durnik prévient : 'On ferme la porte blindée derrière vous'.", "Matériel : Lampes, cordes, carte sommaire."] },
            { title: "Scène 5 : La Cage", type: "Transition", details: ["Descente interminable dans le monte-charge.", "Obscurité totale, chaleur. Huis clos."] }
          ]
        },
        {
          title: "ACTE 2 : LES GALERIES SILENCIEUSES",
          stake: "Exploration et dangers naturels.",
          location: "Niveaux -1 à -7.",
          scenes: [
            { title: "Scène 1 : La Cantine Désertée", type: "Exploration", details: ["Repas à moitié finis.", "Pas de combat, mais traces de panique."] },
            { title: "Scène 2 : Les Charognards", type: "Combat", details: ["Ennemis : Monstres rouilleurs (Rust Monsters) ou Ankhegs.", "Danger : Destruction de l'équipement des PJ."] },
            { title: "Scène 3 : La Poche de Gaz", type: "Piège", details: ["Niveau -7. Odeur d'œuf pourri.", "Test : Gaz explosif. Interdiction d'utiliser du feu."] },
            { title: "Scène 4 : Le Journal du Géomètre", type: "Investigation", details: ["Cadavre mort de soif avec une gourde pleine.", "Journal : 'La galerie s'allonge quand on ne la regarde pas'."] },
            { title: "Scène 5 : Le Mur Brisé", type: "Découverte", details: ["Niveau -8. Une galerie s'arrête sur une roche noire vitrifiée.", "Fissure avec lueur violette : Entrée de la Spirale."] }
          ]
        },
        {
          title: "ACTE 3 : L'ANTICHAMBRE DE LA FOLIE",
          stake: "Transition vers le surnaturel.",
          location: "Faille Mine/Spirale.",
          scenes: [
            { title: "Scène 1 : Les Runes d'Avertissement", type: "Lore", details: ["Runes de confinement naines martelées/sabotées.", "Décryptage : 'Ici commence ce qui ne doit pas être'."] },
            { title: "Scène 2 : Les Gardiens de Pierre", type: "Combat", details: ["Ennemis : Élémentaires de Terre corrompus (veines violettes).", "Comportement : Ils ne gardent pas, ils fuient la fissure."] },
            { title: "Scène 3 : L'Appel de la Spirale", type: "Vision", details: ["Vision d'un œil gigantesque en touchant la roche noire.", "Le Cristal de Thade vibre et chauffe."] },
            { title: "Scène 4 : Le Passage", type: "Exploration", details: ["Entrer dans la fissure.", "Physique : La gravité pivote de 10 degrés."] },
            { title: "Scène 5 : Le Balcon", type: "Cliffhanger", details: ["Corniche donnant sur le vide.", "Vue sur le Super Donjon inversé."] }
          ]
        },
        {
          title: "ACTE 4 : LE PREMIER CERCLE",
          stake: "Survie en milieu hostile.",
          location: "La Spirale (Haut).",
          scenes: [
            { title: "Scène 1 : L'Architecture Vivante", type: "Mécanique", details: ["Règle : Si on quitte une salle, le couloir derrière change."] },
            { title: "Scène 2 : Les Anciens Mineurs", type: "Combat", details: ["Ennemis : Goules en armures naines rouillées.", "Dialogue : 'Creuser... creuser...'."] },
            { title: "Scène 3 : La Géode Chantante", type: "Objectif", details: ["Source du trouble : excroissance cristalline.", "Le Cristal de Thade aspire cette énergie.", "Action : Détruire la géode."] },
            { title: "Scène 4 : Le Nettoyeur", type: "Rencontre", details: ["Ennemi : Cube gélatineux ou Gibbering Mouther.", "Rôle : Système immunitaire du donjon."] },
            { title: "Scène 5 : Le Rejet", type: "Fuite", details: ["La Spirale tremble après la destruction de la géode.", "Skill Challenge : Courir vers la fissure avant fermeture."] }
          ]
        },
        {
          title: "ACTE 5 : LE SABOTAGE",
          stake: "Trahison et politique.",
          location: "Retour surface.",
          scenes: [
            { title: "Scène 1 : Retour en Terre Connue", type: "Répit", details: ["Mine stable. Le chant a cessé.", "Les PJ ont le Cristal chargé d'énergie."] },
            { title: "Scène 2 : Les Secouristes", type: "Embuscade", details: ["Mercenaires de Thade déguisés.", "Objectif : Récupérer le cristal, pas de témoins."] },
            { title: "Scène 3 : L'Effondrement", type: "Catastrophe", details: ["Explosifs mercenaires sautent.", "Fuite désespérée vers le monte-charge."] },
            { title: "Scène 4 : Confrontation Surface", type: "Social", details: ["Thade et Durnik présents.", "Thade retourne la situation (accuse le trauma des PJ).", "Il récupère le cristal."] },
            { title: "Scène 5 : Le Fossé se creuse", type: "Conclusion", details: ["Grève finie mais mine sabotée.", "Nains blâment la magie, Mages blâment la mine.", "Thade a son énergie."] }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "SCÉNARIO 3 : LA CHUTE DE VAL-D'OMBRE",
      level: "Niveaux 7-9",
      synopsis: "Thade orchestre la 'Nuit des Longs Couteaux'. Les PJ, ennemis publics, doivent fuir dans la Spirale.",
      acts: [
        {
          title: "ACTE 1 : L'ASSASSINAT",
          stake: "Déclencheur politique.",
          location: "Hôtel de Ville.",
          scenes: [
            { title: "Scène 1 : Le Sommet", type: "Tension", details: ["Bourgmestre, Grand Prêtre nain, PJ.", "Thade présent, silencieux."] },
            { title: "Scène 2 : Le Sang", type: "Event", details: ["Le Grand Prêtre meurt (magie noire).", "Coupable désigné : un apprenti mage sous charme."] },
            { title: "Scène 3 : Bataille du Conseil", type: "Combat", details: ["Chaos total. Nains en rage vs Gardes mages.", "Protéger le Bourgmestre."] },
            { title: "Scène 4 : L'Évacuation", type: "Fuite", details: ["Bâtiment en feu. Sortie par les toits.", "Thade disparaît."] },
            { title: "Scène 5 : La Loi Martiale", type: "Conséquence", details: ["Annonce : 'Les Nains ont trahi'.", "Couvre-feu immédiat."] }
          ]
        },
        {
          title: "ACTE 2 : LA NUIT DES LONGS COUTEAUX",
          stake: "Purge et révélation.",
          location: "Rues (Nuit).",
          scenes: [
            { title: "Scène 1 : Infiltration", type: "Discrétion", details: ["Rejoindre une planque.", "Patrouilles : Golems de chair."] },
            { title: "Scène 2 : La Purge", type: "Horreur", details: ["Rafle des nains.", "Les morts se relèvent immédiatement en Zombies."] },
            { title: "Scène 3 : L'Embuscade", type: "Combat", details: ["Lieutenant de Thade (Nécro Niv 8) + Squelettes géants."] },
            { title: "Scène 4 : Dilemme", type: "Choix", details: ["Thorgar est encerclé ailleurs.", "Sauver l'allié ou se reposer ?"] },
            { title: "Scène 5 : Le Temple-Forteresse", type: "Regroupement", details: ["Dernier bastion libre.", "Réfugiés barricadés."] }
          ]
        },
        {
          title: "ACTE 3 : LA RÉSISTANCE",
          stake: "Siège.",
          location: "Temple-Forgeron.",
          scenes: [
            { title: "Scène 1 : Conseil de Guerre", type: "Stratégie", details: ["Organiser la défense.", "Atout : Explosifs de mine stockés dehors."] },
            { title: "Scène 2 : La Sortie Commando", type: "Action", details: ["Récupérer les explosifs.", "Sorts : Invisibilité / Forme gazeuse."] },
            { title: "Scène 3 : Le Traître", type: "Sabotage", details: ["Un réfugié désactive les glyphes.", "Neutralisation requise."] },
            { title: "Scène 4 : Première Vague", type: "Bataille", details: ["Wargame simplifié.", "Ennemis : Béliers osseux, Wraiths."] },
            { title: "Scène 5 : Le Dôme", type: "Magie", details: ["Dôme violet isole la ville.", "Plus de téléportation vers l'extérieur."] }
          ]
        },
        {
          title: "ACTE 4 : LE RITUEL DE LA BRUME",
          stake: "Comprendre le but.",
          location: "Hauteurs Brumeuses.",
          scenes: [
            { title: "Scène 1 : La Tour", type: "Observation", details: ["Faisceau d'énergie Mine-Tour-Spirale.", "Thade transforme la ville en nécropole."] },
            { title: "Scène 2 : Contre-Attaque", type: "Infiltration", details: ["Frapper la source (pylône d'énergie).", "Ville méconnaissable (brume acide)."] },
            { title: "Scène 3 : L'Abomination", type: "Boss", details: ["Gardien du pylône : Golem de chair avancé."] },
            { title: "Scène 4 : La Projection", type: "Face à Face", details: ["Image géante de Thade.", "Il lance un sort Niv 8 (Météores) sur le quartier."] },
            { title: "Scène 5 : L'Échec", type: "Retraite", details: ["Temple en feu.", "Seule issue : L'accès secret du Cimetière."] }
          ]
        },
        {
          title: "ACTE 5 : LA FUITE VERS LE BAS",
          stake: "Quitter la ville.",
          location: "Vers le Cimetière.",
          scenes: [
            { title: "Scène 1 : Le Gantelet", type: "Course", details: ["Skill challenge à travers les ruines.", "Horde de zombies."] },
            { title: "Scène 2 : Le Pont", type: "Sacrifice", details: ["Gargouille bloque le passage.", "Durnik se sacrifie en faisant sauter le pont."] },
            { title: "Scène 3 : Gardiens du Seuil", type: "Combat", details: ["Mausolée secret.", "4 Chevaliers de la mort."] },
            { title: "Scène 4 : L'Abîme", type: "Action", details: ["Ouvrir la porte scellée.", "Puits noir insondable."] },
            { title: "Scène 5 : La Chute", type: "Conclusion", details: ["Thade arrive.", "Sauter dans le vide de la Spirale."] }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "SCÉNARIO 4 : LE LABYRINTHE VIVANT",
      level: "Niveaux 10-12",
      synopsis: "Survie dans la Spirale. Comprendre l'immortalité de Thade. Pirater le système de transport.",
      acts: [
        {
          title: "ACTE 1 : LA CHUTE ET LE RÉVEIL",
          stake: "Survie immédiate.",
          location: "Zone de Déchets.",
          scenes: [
            { title: "Scène 1 : Atterrissage", type: "Cinématique", details: ["Gravité s'inverse.", "Dégâts : 4d6 + Test Vigueur (Nausée)."] },
            { title: "Scène 2 : Silence des Pierres", type: "Exploration", details: ["Îles flottantes, brume violette.", "Règle : Ne pas dormir (l'île se désagrège)."] },
            { title: "Scène 3 : Charognards", type: "Combat", details: ["Ennemis : Destrachans ou Prédateurs éthérés.", "Terrain : Sol instable."] },
            { title: "Scène 4 : Le Bivouac", type: "Découverte", details: ["Squelette nain ancien.", "Loot : Bouteille d'air infini.", "Note : 'La tour bouge'."] },
            { title: "Scène 5 : Le Shift", type: "Twist", details: ["Après repos dans une grotte, la sortie donne sur un couloir de marbre.", "La géographie a changé."] }
          ]
        },
        {
          title: "ACTE 2 : L'ÉCOSYSTÈME ABERRANT",
          stake: "Adaptation.",
          location: "Couloirs de chair.",
          scenes: [
            { title: "Scène 1 : Salle de la Gravité", type: "Piège", details: ["Gravité change chaque round.", "Combat vs Gargouilles de cristal."] },
            { title: "Scène 2 : Le Marchand Fou", type: "Rencontre", details: ["Mercane ou Diable exilé.", "Monnaie : Souvenirs, PV permanents.", "Info : Labo plus bas."] },
            { title: "Scène 3 : Murs ont des oreilles", type: "Horreur", details: ["Murs de chair, yeux.", "Ennemi : Gibbering Mouther colossal."] },
            { title: "Scène 4 : Miroir du Regret", type: "Puzzle", details: ["Le reflet ne bouge pas.", "Solution : 'Donner' une faiblesse/aveu au reflet."] },
            { title: "Scène 5 : L'Ascenseur", type: "Transition", details: ["Vis sans fin géante.", "Sauter dessus (Acrobatie) pour descendre."] }
          ]
        },
        {
          title: "ACTE 3 : LE LABORATOIRE SECRET",
          stake: "Révélation.",
          location: "Base fortifiée dans la paroi.",
          scenes: [
            { title: "Scène 1 : Le Sas", type: "Infiltration", details: ["Porte technomagique.", "Gardes : 2 Golems de fer."] },
            { title: "Scène 2 : Bibliothèque des Âmes", type: "Lore", details: ["Bocaux d'âmes.", "Journal : Thade remplace son cœur par un éclat de la Spirale."] },
            { title: "Scène 3 : Salle de Production", type: "Horreur", details: ["Usine à soldats (cadavres réassemblés).", "Possibilité de sabotage."] },
            { title: "Scène 4 : Le Prototype", type: "Combat", details: ["Gardien : Sujet Zéro (Troll/Démon).", "Capacités : Régénération + Résistance magie."] },
            { title: "Scène 5 : Armurerie", type: "Récompense", details: ["Objets dangereux.", "Loot clé : Clé de contrôle (Cube runique)."] }
          ]
        },
        {
          title: "ACTE 4 : LE MÉCANISME",
          stake: "Contrôle.",
          location: "Salle des Engrenages.",
          scenes: [
            { title: "Scène 1 : Rouages du Monde", type: "Environnement", details: ["Engrenages géants dans le vide.", "Bruit assourdissant (Malus écoute/sorts)."] },
            { title: "Scène 2 : La Traversée", type: "Skill", details: ["Sauts d'engrenage en engrenage.", "Mephits vapeur/feu."] },
            { title: "Scène 3 : Le Contremaître", type: "Combat", details: ["Inevitable (Construct de Loi).", "Négociation possible (Thade est une menace)."] },
            { title: "Scène 4 : Sabotage du Flux", type: "Action", details: ["Couper l'énergie vers la surface.", "Effet : Affaiblit Thade pour le final."] },
            { title: "Scène 5 : Le Portail", type: "Objectif", details: ["Plateforme de téléportation.", "Hacking : Inverser vers 'Sortie : Tour des Mages'."] }
          ]
        },
        {
          title: "ACTE 5 : L'ASCENSION",
          stake: "Sortie.",
          location: "Tunnel de téléportation.",
          scenes: [
            { title: "Scène 1 : Garde d'Élite", type: "Combat", details: ["2 Démons des ombres.", "Chrono avant purge de la salle."] },
            { title: "Scène 2 : Téléportation", type: "Cinématique", details: ["Vitesse lumière vers le haut.", "Aperçus des niveaux précédents."] },
            { title: "Scène 3 : Le Blocage", type: "Obstacle", details: ["Thade tente de bloquer.", "Duel de Volonté."] },
            { title: "Scène 4 : Vision", type: "Info", details: ["Aperçu de Val-d'Ombre en ruine.", "Bonus moral."] },
            { title: "Scène 5 : Irruption", type: "Cliffhanger", details: ["Explosion du sol de la Tour des Mages.", "Arrivée au milieu du QG ennemi."] }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "SCÉNARIO 5 : L'AUBE DE SANG",
      level: "Niveaux 13-16",
      synopsis: "Retour surface après 1 mois. Val-d'Ombre est une nécropole. Assaut final.",
      acts: [
        {
          title: "ACTE 1 : LE RETOUR FRACASSANT",
          stake: "Tête de pont.",
          location: "Tour des Mages -> Ville.",
          scenes: [
            { title: "Scène 1 : Effet de Surprise", type: "Combat", details: ["3 Lieutenants nécromanciens.", "Round de surprise complet."] },
            { title: "Scène 2 : Fuite Tactique", type: "Action", details: ["Thade bombarde le plafond.", "Sauter par la fenêtre (Chute de plume)."] },
            { title: "Scène 3 : Ville Morte", type: "Ambiance", details: ["Cendres, silence, squelettes.", "1 mois a passé."] },
            { title: "Scène 4 : Dernier Carré", type: "Rencontre", details: ["Guérilla naine dans les égouts.", "Thorgar assiégé au Temple."] },
            { title: "Scène 5 : Plan de Bataille", type: "Objectif", details: ["Briser le siège pour créer une diversion."] }
          ]
        },
        {
          title: "ACTE 2 : LE RALLIEMENT",
          stake: "Bataille de masse.",
          location: "Parvis du Temple.",
          scenes: [
            { title: "Scène 1 : Le Siège", type: "Observation", details: ["Milliers de zombies.", "Catapultes en os."] },
            { title: "Scène 2 : Entrée en Scène", type: "Combat", details: ["Attaque par l'arrière.", "Sorts de zone majeurs.", "Cible : Artillerie."] },
            { title: "Scène 3 : Résurrection de l'Espoir", type: "Social", details: ["Discours (DD 25).", "Cri : 'Pour la Pierre et le Sang !'."] },
            { title: "Scène 4 : Armement", type: "Logistique", details: ["Armurerie sacrée ouverte.", "Marteau Tueur de mages, Potions."] },
            { title: "Scène 5 : La Charge", type: "Épique", details: ["Sortie suicide des Nains.", "Voie dégagée vers la Tour."] }
          ]
        },
        {
          title: "ACTE 3 : L'ASCENSION INFERNALE",
          stake: "Dungeon crawl vertical.",
          location: "Tour des Mages.",
          scenes: [
            { title: "Scène 1 : Hall des Illusions", type: "Piège", details: ["Mirage arcanique + Symboles de mort.", "Contre : Vision lucide."] },
            { title: "Scène 2 : Ménagerie", type: "Combat", details: ["Escaliers en colimaçon.", "Ennemis : Bébilith ou Golem Mithral."] },
            { title: "Scène 3 : Salle des Portails", type: "Puzzle", details: ["Téléporteurs multiples.", "Indice : Suivre le flux violet."] },
            { title: "Scène 4 : Les Otages", type: "Dilemme", details: ["Anciens du Conseil zombifiés conscients.", "Ils supplient la mort."] },
            { title: "Scène 5 : L'Apprenti Favori", type: "Mini-Boss", details: ["Kaelen (Vampire Niv 12).", "Accès au toit."] }
          ]
        },
        {
          title: "ACTE 4 : LE SANCTUAIRE INTÉRIEUR",
          stake: "Pré-climax.",
          location: "Appartements de Thade.",
          scenes: [
            { title: "Scène 1 : Le Cœur du Mal", type: "Décor", details: ["Bibliothèque en peau humaine.", "Vue panoramique."] },
            { title: "Scène 2 : Le Phylactère", type: "Révélation", details: ["Phylactère = La Spirale.", "Tuer le corps le bannit seulement."] },
            { title: "Scène 3 : Festin des Héros", type: "Préparation", details: ["Réserve de potions ultimes.", "Buffs de longue durée."] },
            { title: "Scène 4 : La Voix", type: "Social", details: ["Projection de Thade.", "Offre d'alliance (Test Volonté)."] },
            { title: "Scène 5 : L'Escalier", type: "Transition", details: ["Échelle de lumière.", "Orage magique."] }
          ]
        },
        {
          title: "ACTE 5 : LE CRÉPUSCULE DES DIEUX",
          stake: "Boss Final.",
          location: "Toit de la Tour.",
          scenes: [
            { title: "Phase 1 : Le Sorcier", type: "Boss", details: ["Bouclier de force (4 pylônes à détruire).", "Bombardement à distance."] },
            { title: "Phase 2 : La Fusion", type: "Boss", details: ["Thade absorbe l'énergie (50% PV).", "Transformation : Monstre de pierre noire."] },
            { title: "Phase 3 : Le Chaos", type: "Twist", details: ["Intervention de la Spirale.", "Tentacules attaquent tout le monde."] },
            { title: "Scène 4 : Chute du Tyran", type: "Cinématique", details: ["Thade vaincu est aspiré par la Spirale.", "Il est 'digéré'."] },
            { title: "Scène 5 : Épilogue", type: "Conclusion", details: ["Soleil sur les ruines.", "Ville libre mais détruite."] }
          ]
        }
      ]
    }
  ]
};

// --- COMPOSANTS UI ---

const TabButton = ({ active, label, icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 px-6 py-4 font-serif text-lg transition-all duration-300 relative overflow-hidden group ${
      active
        ? 'text-amber-400 bg-stone-900 border-b-2 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
        : 'text-stone-500 hover:text-stone-300 hover:bg-stone-900/50 border-b-2 border-transparent'
    }`}
  >
    <Icon size={20} className={`transition-transform duration-300 ${active ? 'scale-110 text-amber-500' : 'group-hover:text-stone-400'}`} />
    <span className="relative z-10">{label}</span>
    {active && <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent" />}
  </button>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-stone-900 border border-stone-800 rounded-sm p-6 shadow-xl relative overflow-hidden ${className}`}>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-stone-700 to-transparent opacity-50"></div>
    {children}
  </div>
);

const SectionTitle = ({ title, icon: Icon, subtitle }) => (
  <div className="mb-8 border-b border-stone-800 pb-4">
    <h2 className="text-3xl font-serif text-stone-200 flex items-center gap-3">
      {Icon && <Icon className="text-amber-600" size={28} />}
      {title}
    </h2>
    {subtitle && <p className="text-stone-500 mt-2 font-serif italic">{subtitle}</p>}
  </div>
);

const Tag = ({ type }) => {
  const styles = {
    Combat: "bg-red-900/30 text-red-400 border-red-900",
    Social: "bg-blue-900/30 text-blue-400 border-blue-900",
    Exploration: "bg-green-900/30 text-green-400 border-green-900",
    Ambiance: "bg-stone-700/30 text-stone-400 border-stone-700",
    Indice: "bg-amber-900/30 text-amber-400 border-amber-900",
    Boss: "bg-red-950 text-red-500 border-red-600 font-bold animate-pulse",
    Tension: "bg-orange-900/30 text-orange-400 border-orange-900",
    Magie: "bg-purple-900/30 text-purple-400 border-purple-900",
    Twist: "bg-pink-900/30 text-pink-400 border-pink-900",
    Préparation: "bg-cyan-900/30 text-cyan-400 border-cyan-900",
  };
  
  const defaultStyle = "bg-stone-800 text-stone-400 border-stone-700";

  return (
    <span className={`text-xs px-2 py-1 rounded border uppercase tracking-wider font-semibold ${styles[type] || defaultStyle}`}>
      {type}
    </span>
  );
};

// --- VUES DU CONTENU ---

const UniverseView = () => (
  <div className="space-y-8 animate-fadeIn text-stone-300">
    <SectionTitle title={CAMPAIGN_DATA.universe.title} icon={Map} subtitle={CAMPAIGN_DATA.universe.intro} />
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {CAMPAIGN_DATA.universe.sections.map((section, idx) => (
        <Card key={idx}>
          <h3 className="text-xl font-serif text-amber-500 mb-4 border-l-2 border-amber-700 pl-3">{section.title}</h3>
          <ul className="space-y-2">
            {section.content.map((point, i) => (
              <li key={i} className="flex gap-2 text-lg text-stone-300">
                <span className="text-amber-700 mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-700 block flex-shrink-0"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Card>
      ))}
      
      <div className="lg:col-span-2">
        <h3 className="text-stone-400 font-serif uppercase tracking-widest text-sm border-b border-stone-800 pb-2 mb-4">Lieux Clés</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CAMPAIGN_DATA.universe.locations.map((loc, i) => (
            <div key={i} className="bg-stone-900/50 p-4 border border-stone-800 hover:border-stone-600 transition-colors group">
              <span className="font-serif text-lg text-stone-200 block group-hover:text-amber-500 transition-colors">{loc.name}</span>
              <span className="text-sm text-stone-500 mt-1 block leading-snug">{loc.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const FactionsView = () => (
  <div className="space-y-8 animate-fadeIn">
    <SectionTitle title="Forces en Présence" icon={Users} subtitle="L'équilibre précaire de Val-d'Ombre" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {CAMPAIGN_DATA.factions.map((faction, idx) => (
        <div key={idx} className={`relative p-6 border-2 rounded-lg bg-stone-900/80 ${faction.color}`}>
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-stone-950 p-2 rounded-full border border-stone-800">
            <faction.icon size={32} />
          </div>
          <h3 className="text-xl font-serif font-bold text-center mt-6 mb-2">{faction.name}</h3>
          <p className="text-center text-xs uppercase tracking-widest opacity-70 mb-4">{faction.type}</p>
          <p className="text-sm text-center opacity-90 leading-relaxed">{faction.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const AntagonistView = () => (
  <div className="space-y-8 animate-fadeIn">
    <SectionTitle title={CAMPAIGN_DATA.antagonist.name} icon={Skull} subtitle={CAMPAIGN_DATA.antagonist.title} />
    
    <div className="relative bg-stone-900 border border-purple-900/30 p-8 rounded-lg overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-900/10 blur-3xl rounded-full pointer-events-none"></div>
      
      <blockquote className="text-center text-2xl font-serif italic text-purple-300 mb-12 relative z-10">
        {CAMPAIGN_DATA.antagonist.quote}
      </blockquote>
      
      <div className="space-y-0 relative z-10">
        {CAMPAIGN_DATA.antagonist.evolution.map((step, idx) => (
          <div key={idx} className="flex gap-6 items-start group">
            <div className="flex flex-col items-center min-w-[60px]">
              <div className="text-xs font-bold text-stone-500 mb-2 whitespace-nowrap">{step.lvl}</div>
              <div className="w-3 h-3 rounded-full bg-purple-600 border border-stone-950 shadow-[0_0_10px_rgba(147,51,234,0.5)] group-hover:scale-125 transition-transform"></div>
              {idx !== CAMPAIGN_DATA.antagonist.evolution.length - 1 && (
                <div className="w-px h-20 bg-stone-800 my-2"></div>
              )}
            </div>
            <div className="pb-8">
              <h4 className="text-xl font-serif text-stone-200 group-hover:text-purple-400 transition-colors">{step.title}</h4>
              <p className="text-stone-400 mt-2 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SceneCard = ({ scene }) => (
  <div className="bg-stone-950 border border-stone-800 p-4 rounded hover:border-amber-900/50 transition-colors group">
    <div className="flex justify-between items-start mb-3 border-b border-stone-900 pb-2">
      <h5 className="font-serif font-bold text-stone-200 text-lg">{scene.title}</h5>
      <Tag type={scene.type} />
    </div>
    
    <ul className="space-y-1.5">
      {scene.details.map((detail, i) => (
        <li key={i} className="flex gap-2 text-sm text-stone-400 group-hover:text-stone-300 transition-colors leading-relaxed">
          <span className="text-stone-600 mt-1.5 w-1 h-1 rounded-full bg-stone-600 block flex-shrink-0 group-hover:bg-amber-700 transition-colors"></span>
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ActAccordion = ({ act, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-l-2 border-stone-800 ml-4 pl-6 relative pb-8 last:pb-0">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-800 border-2 border-stone-600"></div>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 w-full text-left group mb-2"
      >
        <h4 className="text-lg font-serif font-bold text-stone-300 group-hover:text-amber-500 transition-colors">
          {act.title}
        </h4>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={16} className="text-stone-600" />
        </div>
      </button>

      {/* Metadonnées de l'Acte */}
      <div className="flex flex-wrap gap-4 text-xs font-mono text-stone-500 mb-4 pl-1">
        <span className="flex items-center gap-1.5 bg-stone-900 px-2 py-1 rounded border border-stone-800">
          <AlertTriangle size={12} className="text-amber-700" />
          ENJEU : {act.stake}
        </span>
        <span className="flex items-center gap-1.5 bg-stone-900 px-2 py-1 rounded border border-stone-800">
          <Map size={12} className="text-blue-900" />
          LIEU : {act.location}
        </span>
      </div>

      {isOpen && (
        <div className="grid grid-cols-1 gap-3 animate-slideDown">
          {act.scenes.map((scene, i) => (
            <SceneCard key={i} scene={scene} />
          ))}
        </div>
      )}
    </div>
  );
};

const ScenarioRow = ({ scenario }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`mb-6 border border-stone-800 bg-stone-900 rounded-lg overflow-hidden transition-all duration-500 ${expanded ? 'shadow-[0_0_30px_rgba(0,0,0,0.5)] border-stone-700' : 'hover:border-stone-700'}`}>
      <div 
        onClick={() => setExpanded(!expanded)}
        className="p-6 cursor-pointer flex items-center justify-between bg-gradient-to-r from-stone-900 to-stone-800 group"
      >
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 flex items-center justify-center bg-stone-950 border border-stone-700 rounded-full font-serif font-bold text-xl text-amber-600 shadow-inner group-hover:text-amber-400 group-hover:border-amber-900 transition-all">
            {scenario.id}
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-stone-200 group-hover:text-amber-100 transition-colors">{scenario.title}</h3>
            <span className="text-sm text-stone-500 font-mono tracking-wider">{scenario.level}</span>
          </div>
        </div>
        <div className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
          <ChevronDown className="text-stone-500" />
        </div>
      </div>

      {expanded && (
        <div className="p-6 border-t border-stone-800 bg-stone-950/50">
          <div className="mb-8 p-4 bg-amber-950/10 border border-amber-900/30 rounded italic text-stone-400 text-sm leading-relaxed max-w-3xl mx-auto text-center font-serif">
            {scenario.synopsis}
          </div>
          
          <div className="space-y-2">
            {scenario.acts.map((act, idx) => (
              <ActAccordion key={idx} act={act} defaultOpen={idx === 0} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ScenariosView = () => (
  <div className="space-y-8 animate-fadeIn">
    <SectionTitle title="Le Livre des Scénarios" icon={Scroll} subtitle="L'ascension de l'Ombre : Acte par Acte" />
    <div>
      {CAMPAIGN_DATA.scenarios.map(scenario => (
        <ScenarioRow key={scenario.id} scenario={scenario} />
      ))}
    </div>
  </div>
);

// --- APP PRINCIPALE ---

export default function CampaignWiki() {
  const [activeTab, setActiveTab] = useState('scenarios'); // Default to Scenarios for review

  const renderContent = () => {
    switch(activeTab) {
      case 'universe': return <UniverseView />;
      case 'factions': return <FactionsView />;
      case 'antagonist': return <AntagonistView />;
      case 'scenarios': return <ScenariosView />;
      default: return <UniverseView />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-amber-900 selection:text-white pb-20">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{backgroundImage: 'radial-gradient(circle at 50% 0%, #451a03 0%, transparent 50%)'}}></div>
      
      {/* Header */}
      <header className="bg-stone-900/90 border-b border-stone-800 p-8 shadow-2xl relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-700 tracking-tight mb-2 drop-shadow-sm">
            L'Ombre de la Spirale
          </h1>
          <div className="flex items-center gap-3 text-stone-500 text-sm tracking-widest uppercase">
            <span className="h-px w-8 bg-stone-700"></span>
            <span>Grimoire du Maître</span>
            <span className="h-px w-8 bg-stone-700"></span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-stone-900 border-b border-stone-800 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-center overflow-x-auto">
          <TabButton 
            active={activeTab === 'universe'} 
            onClick={() => setActiveTab('universe')} 
            label="Univers" 
            icon={Map} 
          />
          <TabButton 
            active={activeTab === 'factions'} 
            onClick={() => setActiveTab('factions')} 
            label="Factions" 
            icon={Shield} 
          />
          <TabButton 
            active={activeTab === 'antagonist'} 
            onClick={() => setActiveTab('antagonist')} 
            label="Antagoniste" 
            icon={Skull} 
          />
          <TabButton 
            active={activeTab === 'scenarios'} 
            onClick={() => setActiveTab('scenarios')} 
            label="Scénarios" 
            icon={BookOpen} 
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6 md:p-10 relative z-0">
        {renderContent()}
      </main>
      
    </div>
  );
}