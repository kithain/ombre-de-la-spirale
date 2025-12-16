export const scenario1 = {
  id: 1,
  title: "SCÉNARIO 1 : LE MURMURE DES OS",
  level: "Niveaux 1-3",
  synopsis:
    "Une série de profanations frappe le cimetière. Ce qui ressemble à du pillage cache les expériences ratées d'un étudiant manipulé par son professeur, Thade Coren, qui cherche à effacer ses traces en utilisant les aventuriers.",
  acts: [
    {
      title: "ACTE 1 : L'INCIDENT DU CIMETIÈRE",
      stake: "Comprendre que ce n'est pas un simple pillage, mais un vol de composants.",
      location: "Auberge « Le Pic Brisé ».",
      scenes: [
        {
          title: "Scène 1 : L'Offre du Prêtre",
          type: "Social",
          locationId: "auberge_pic_brise",
          npcIds: ["thorgar_pretre_nain", "brand_aubergiste"],
          description: {
            sous_titre:
              "L'auberge est un bastion de tradition naine. Ici, on respecte la bière et les ancêtres.",
            visuel:
              "Poutres basses en chêne noirci, fumée de pipe épaisse, éclats de voix graves. Un panneau « MAGIE INTERDITE » est cloué au mur.",
            audio: "Le choc des chopes, le crépitement du feu, et le silence soudain quand les PJ entrent.",
            odeur: "Bière brune, viande rôtie et sueur.",
            lumiere: "Tamisée par la fumée, foyer central ardent.",
          },
          narration: {
            declencheur: "Thorgar fait signe aux PJ de s'approcher.",
            texte_a_lire:
              "Le prêtre nain a les yeux cernés. « Le cimetière a été profané. Les autorités locales et la garde s'en moquent, ce ne sont que des os pour eux, mais pour les nains, c'est un sacrilège. Retrouvez les coupables. »",
            contexte_mj:
              "Insister sur le dégoût des nains. Ce n'est pas une question d'argent, mais d'honneur. Thorgar paie bien car il est désespéré.",
            objectif: "Accepter le contrat : surveiller le cimetière cette nuit.",
          },
          mecaniques: {
            defis: [
              "Diplomatie (DD 15) : Négocier une avance pour 'équipement spécial'.",              
            ],
            indices: ["Les tombes visées sont celles de guerriers robustes uniquement."],
            recompenses: "200 à 300 po (groupe) + Amulette de protection contre les morts-vivants (1 usage).",
          },
          transitions: {
            success: "Départ pour le cimetière à la tombée de la nuit.",
            fail: "Thorgar accepte à contre-coeur mais sans avance.",
          },
        },
        {
          title: "Scène 2 : Un Cimetière dans la Brume",
          type: "Ambiance",
          locationId: "cimetiere_terrasse",
          npcIds: ["gardien_cimetiere"],
          description: {
            sous_titre: "Une nuit sans lune sur les terrasses funéraires.",
            visuel: "Le cimetière est un dédale de tombes en terrasse. Une lanterne solitaire oscille près d'un mausolée, tenue par une silhouette massive.",
            audio: "Le vent siffle dans les décorations en pierre.",
            odeur: "Terre humide et ozone (magie résiduelle sur DD15).",
            lumiere: "Très faible, lanternes nécessaires.",
          },
          narration: {
            declencheur: "Les PJ entrent dans le cimetière.",
            texte_a_lire:
              "Le cliquetis d'une arme qu'on recharge résonne dans le brouillard. Une silhouette massive barre le chemin, une arbalette à la main. « Un pas de plus et je vous tue ! » L'homme a les traits tirés par des nuits sans sommeil. Il vous jauge rapidement. « Vous n'avez pas l'air de pilleurs de tombes... Vous êtes avec le prêtre ?",
            contexte_mj:
              "Le Gardien (NB) est à bout de nerfs. Il connaît le cimetière par cœur. Si les PJ le calment, il devient un atout tactique majeur pour l'embuscade.",
            objectif: "Gagner la confiance du Gardien et positionner l'embuscade.",
          },
          mecaniques: {
            defis: [
              "Diplomatie (DD 13) : Calmer le gardien. Réussite : Il partage ses 'Connaissances (religion)' et indique l'emplacement exact de la prochaine cible.",
              "Tactique (Intelligence ou Survie DD 14) : Identifier les meilleurs angles d'attaque parmi les tombes.",
            ],
            indices: [
              "Le Gardien confirme : « Ils ne prennent pas les bijoux. Ils cherchent des os spécifiques. Ça sent la sorcellerie. »",
              "Terrain : Il indique une crypte ouverte qui offre un couvert total."
            ],
            recompenses: "Avantage tactique pour la Scène 3 (Round de surprise automatique ou position surélevée). Si Diplomatie réussie : Le Gardien rejoint le combat (Allié CR 3).",
          },
          transitions: {
            success: "Les PJ sont en place. Les mercenaires arrivent (Lancement de la Scène 3 avec Surprise).",
            fail: "Le Gardien, méfiant, fait du bruit ou refuse d'aider. Le combat de la Scène 3 commence sans effet de surprise.",
          },
        },
        {
          title: "Scène 3 : Les Pilleurs",
          type: "Combat",
          locationId: "cimetiere_terrasse",
          npcIds: ["etudiant_renvoye", "gardien_cimetiere", "brutes_cimetiere"],
          description: {
            sous_titre: "L'embuscade près de la crypte ouverte.",
            visuel: "Trois hommes de main creusent frénétiquement tandis qu'une silhouette en robe (un étudiant) supervise nerveusement, tenant une lampe-tempête.",
            audio: "Les chuchotements paniqués de l'étudiant : « Plus vite ! Plus vite ! »",
            odeur: "Terre humide et ozone (magie résiduelle sur DD15).",
            lumiere: "La lanterne de l'étudiant éclaire l'intérieur de la tombe.",
          },
          narration: {
            declencheur: "Les PJ lancent l'assaut (bénéficiant de la Surprise si gagnée en Scène 2).",
            texte_a_lire:
              "À votre signal, le chaos éclate. Surpris, les mercenaires tirent leurs armes. L'étudiant, lui, lâche sa lanterne et recule, terrifié. Il ne semble pas vouloir se battre, mais protège une sacoche en cuir comme si sa vie en dépendait.",
            contexte_mj:[
              "L'étudiant est un membre junior de la Fraternité Nyx. Les hommes de main sont des brutes payées pour creuser. Si le Gardien est présent (Scène 2), il cible prioritairement les brutes avec son arbalète.",
              "IMPORTANT : L'étudiant (stats faibles) se rendra dès qu'il est blessé ou que ses gardes tombent. Il suppliera pour sa vie. IL EST VITAL QU'IL SOIT CAPTURÉ VIVANT pour la scène suivante."],
            objectif: "Vaincre les mercenaires et capturer l'étudiant pour l'interroger.",
          },
          mecaniques: {
            defis: [
              "Intimidation (DD 12) : Pour forcer l'étudiant à se rendre sans combattre.",
              "Dans tout les cas les brutes engagent le combat.",
              "Magie instable : À chaque sort lancé par l'étudiant, il y a 20% de chances qu'un effet secondaire (brouillard, froid soudain) affecte la zone.",
            ],
            indices: [
              "Comportement : L'étudiant est terrifié par quelque chose de bien pire que vous.",
              "Sur l'étudiant : Une broche en argent terni représentant une chouette (Symbole de la fraternité Nyx).",
              "La Sacoche : Contient des outils chirurgicaux (estampillés 'Propriété de l'Université') et une liste de courses macabre : 'Sujet A (Nain, robuste) - 2 fémurs nains, 1 crâne intact.",
            ],
            recompenses:
              "La broche (Clé pour l'Acte 2 et 3) et les outils (Preuve pour l'enquête).",
          },
          transitions: {
            success:
              "Le calme revient. Les brutes sont mortes ou prisonnières. L'étudiant est à genoux, pleurant, prêt à être interrogé (Scène 4).",
            fail:
              "L'étudiant parvient à s'enfuir dans la brume grâce à un sort de diversion, mais il laisse tomber la broche dans sa panique.",
          },
        },
        {
          title: "Scène 4 : L'Autopsie du Crime",
          type: "Investigation",
          locationId: "cimetiere_terrasse",
          description: {
            sous_titre: "Le corps nain n'a pas été pillé, il a été prélevé.",
            visuel: "Le cercueil ouvert révèle un squelette auquel il manque la jambe droite.",
            audio: "Le vent se calme.",
            odeur: "Pas d'odeur de pourriture, mais une odeur d'alcool médical.",
            lumiere: "Lumière des lanternes des PJ sur les os.",
          },
          narration: {
            declencheur: "Examen de la scène après combat.",
            texte_a_lire:
              "L'os n'a pas été brisé. Il a été scié avec une précision chirurgicale. Et une rune a été peinte sur le front du cadavre.",
            contexte_mj:
              "C'est la preuve clé : ce n'est pas du pillage, c'est de la nécromancie académique.",
            objectif: "Confirmer la piste universitaire.",
          },
          mecaniques: {
            defis: ["Médecine (DD 14) : Reconnaitre une découpe faite par un étudiant en anatomie.", "Arcanes (DD 15) : La rune sert à 'préserver' la fraîcheur de l'os."],
            indices: ["Lien direct vers le Quartier du Savoir."],
            recompenses: "XP d'enquête.",
          },
          transitions: {
            success: "Retour voir Thorgar puis direction l'Université (Acte 2).",
          },
        },
      ],
    },
    {
      title: "ACTE 2 : LA PISTE ARCANIQUE",
      stake: "Identifier le commanditaire et se faire manipuler par Thade.",
      location: "Université de Magie.",
      scenes: [
        {
          title: "Scène 1 : La Fraternité Dissoute",
          type: "Investigation",
          locationId: "quartier_du_savoir_universite",
          npcIds: ["etudiant_bavard"],
          description: {
            sous_titre: "L'Université est un labyrinthe de pierre blanche et de secrets.",
            visuel: "Étudiants en robes colorées, tours vertigineuses.",
            audio: "Cloches, débats philosophiques.",
            odeur: "Encre et vieux papier.",
            lumiere: "Lumineuse et arrogante.",
          },
          narration: {
            declencheur: "Les PJ montrent la broche ou posent des questions.",
            texte_a_lire:
              "Un étudiant blêmit en voyant la broche. « C'est à la fraternité Nyx. Ils ont été renvoyés il y a deux mois par le Professeur Coren pour... des expériences instables. »",
            contexte_mj:
              "Orienter les PJ vers Thade Coren comme étant la figure d'autorité qui a 'puni' ces élèves.",
            objectif: "Obtenir une audience avec Thade Coren.",
          },
          mecaniques: {
            defis: ["Diplomatie (DD 13) pour trouver le bureau de Coren."],
            indices: ["Rumeur : Le chef de la fraternité, Jaren, jurait qu'il réussirait 'Le Grand Œuvre' pour prouver sa valeur."],
            recompenses: "Localisation du bureau de Thade.",
          },
          transitions: {
            success: "Rencontre avec Thade (Scène 2).",
          },
        },
        {
          title: "Scène 2 : Le Professeur Bienveillant",
          type: "Rencontre Clé",
          locationId: "bureau_thade_coren",
          npcIds: ["thade_coren"],
          description: {
            sous_titre: "Le bureau d'un homme d'ordre et de loi magique.",
            visuel: "Tout est parfaitement rangé. Thade est calme, élégant, inquiétant de maîtrise.",
            audio: "Le grattement d'une plume, le tic-tac d'une horloge.",
            odeur: "Cire chaude et lavande.",
            lumiere: "Rayons de soleil filtrés par des vitraux.",
          },
          narration: {
            declencheur: "Entrée dans le bureau.",
            texte_a_lire:
              "Thade soupire en voyant la broche. « Jaren... Ce garçon est brillant mais obsédé. J'ai dû le renvoyer. S'il profane des tombes, il est allé trop loin. Je ne peux pas impliquer l'Université officiellement, ce serait un scandale. »",
            contexte_mj:
              "Thade ment par omission. Il a poussé Jaren à bout et veut maintenant l'éliminer sans se salir les mains. Il donne l'adresse de la planque.",
            objectif: "Recevoir la mission de neutraliser Jaren.",
          },
          mecaniques: {
            defis: ["Psychologie (DD 18) : Thade semble sincère, mais il cache une certaine... satisfaction.", "Négociation : Il offre une prime personnelle de 100 po."],
            indices: ["Il insiste pour qu'on lui rapporte les notes de Jaren 'pour les détruire en sécurité'."],
            recompenses: "Adresse du Taudis de Jaren + 1 Parchemin de Dissipation de la Magie.",
          },
          transitions: {
            success: "Vers le Taudis (Scène 3).",
          },
        },
        {
          title: "Scène 3 : La Descente aux Enfers",
          type: "Exploration",
          locationId: "vieille_ville_taudis_jaren",
          description: {
            sous_titre: "La planque de Jaren est vide, mais donne accès aux souterrains.",
            visuel: "Des schémas délirants sur les murs. Un tapis repoussé révèle une trappe vers les égouts.",
            audio: "Gouttes d'eau lointaines venant de la trappe.",
            odeur: "Moisissure et cette odeur chimique persistante.",
            lumiere: "Pénombre.",
          },
          narration: {
            declencheur: "Fouille de la chambre.",
            texte_a_lire:
              "Sur le mur, une phrase écrite au charbon : « LA SPIRALE CHANTE, ET JE DOIS LUI RÉPONDRE. »",
            contexte_mj:
              "Jaren n'est plus là, il est descendu dans les fondations de la ville.",
            objectif: "Entrer dans les égouts.",
          },
          mecaniques: {
            defis: ["Fouille (DD 12) : Trouver le plan du 'Manoir Souterrain'."],
            indices: ["Le plan indique une entrée via les égouts vers un ancien manoir englouti."],
            recompenses: "Passage vers l'Acte 3.",
          },
          transitions: {
            success: "Descente dans les égouts (Acte 3).",
          },
        },
      ],
    },
    {
      title: "ACTE 3 : LES ÉGOUTS ET LE LABYRINTHE",
      stake: "Survivre à l'environnement et trouver l'entrée du repaire.",
      location: "Égouts de Val-d'Ombre.",
      scenes: [
        {
          title: "Scène 1 : Le Kobold Témoin",
          type: "Social/Indice",
          locationId: "egouts_croisement",
          npcIds: ["sniv_kobold"],
          description: {
            sous_titre: "Un habitant des profondeurs qui a tout vu.",
            visuel: "Sniv est caché dans un tuyau, terrifié.",
            audio: "Claquement de dents.",
            odeur: "Eaux usées.",
            lumiere: "Lampe à huile faible.",
          },
          narration: {
            declencheur: "Les PJ entendent des pleurs.",
            texte_a_lire:
              "« L'homme en robe violette... il parle aux os ! Il a emmené mes amis ! »",
            contexte_mj:
              "Jaren utilise des kobolds comme main-d'œuvre sacrifiable pour ses rituels.",
            objectif: "Se faire guider par Sniv.",
          },
          mecaniques: {
            defis: ["Persuasion (DD 12) avec de la nourriture."],
            indices: ["Sniv prévient : « Gardiens en os qui cliquettent devant la porte. »"],
            recompenses: "Sniv montre un raccourci évitant un piège.",
          },
          transitions: {
            success: "Arrivée rapide au Manoir.",
          },
        },
        {
          title: "Scène 2 : La Porte du Manoir Englouti",
          type: "Combat",
          locationId: "egouts_entree_manoir",
          description: {
            sous_titre: "Une porte noble en fer forgé, incongrue au milieu des égouts.",
            visuel: "Deux squelettes de nains (reconnus grâce à l'Acte 1) montent la garde.",
            audio: "Le cliquetis des os sur le pavé humide.",
            odeur: "L'air est soudainement sec et froid.",
            lumiere: "Une lueur violette filtre sous la porte.",
          },
          narration: {
            declencheur: "Approche de la porte.",
            texte_a_lire:
              "Vous reconnaissez les tatouages claniques sur les os des gardiens. Ce sont les ancêtres volés, forcés de servir.",
            contexte_mj:
              "Combat émotionnel. Si les PJ ont identifié les tombes profanées dans l'Acte 1, ils reconnaissent ici les noms gravés sur les plaques d'armure des squelettes.",
            objectif: "Forcer l'entrée.",
          },
          mecaniques: {
            defis: ["Combat contre Squelettes Guerriers (CA élevée)."],
            indices: ["La porte est protégée par un glyphe que la broche de Nyx (trouvée Acte 1) peut ouvrir sans déclencher l'alarme."],
            recompenses: "Accès à l'Acte 4.",
          },
          transitions: {
            success: "Entrée dans le Manoir (Acte 4).",
          },
        },
      ],
    },
    {
      title: "ACTE 4 : LE RITUEL DE LA SPIRALE",
      stake: "Arrêter Jaren et découvrir la trahison.",
      location: "Laboratoire secret du Manoir.",
      scenes: [
        {
          title: "Scène 1 : Le Laboratoire",
          type: "Exploration",
          locationId: "manoir_labo",
          description: {
            sous_titre: "Un mélange de science et de folie.",
            visuel: "Des tables de dissection, des bocaux, et au fond, une immense spirale d'os assemblés.",
            audio: "Un bourdonnement grave qui fait vibrer les dents.",
            odeur: "Ozone brûlant.",
            lumiere: "Pulsations violettes.",
          },
          narration: {
            declencheur: "Entrée dans la salle principale.",
            texte_a_lire:
              "Jaren est au centre, hurlant une incantation. La spirale d'os commence à tourner sur elle-même. Il a l'air épuisé, maniaque.",
            contexte_mj:
              "Jaren n'est pas un maître du mal, il est dépassé par ce qu'il a invoqué.",
            objectif: "Interrompre le rituel.",
          },
        },
        {
          title: "Scène 2 : Jaren le Maudit",
          type: "Boss",
          locationId: "manoir_labo",
          npcIds: ["jaren_apprenti"],
          description: {
            sous_titre: "Le combat final... ou presque.",
            visuel: "Jaren s'entoure d'un bouclier d'os flottants.",
            audio: "« Le Maître avait promis ! La puissance devait être mienne ! »",
            odeur: "Soufre.",
          },
          narration: {
            declencheur: "Le combat commence.",
            texte_a_lire:
              "Jaren crie : « Thade a dit que la Spirale m'obéirait ! Pourquoi elle me brûle ?! »",
            contexte_mj:
              "C'est l'indice crucial : Thade n'a pas juste 'renvoyé' Jaren, il lui a donné le rituel sachant qu'il était défectueux.",
            objectif: "Vaincre Jaren (Nécromancien Niv 3).",
          },
          mecaniques: {
            defis: ["Esquiver les éclats d'os (JdS Réflexes).", "Convaincre Jaren qu'il a été trahi (Diplomatie DD 20 en plein combat pour le stopper 1 tour)."],
            recompenses: "Butin de boss.",
          },
          transitions: {
            success: "Jaren tombe à genoux, vaincu.",
          },
        },
        {
          title: "Scène 3 : Le Nettoyage de Thade",
          type: "Twist/Conclusion",
          locationId: "manoir_labo",
          npcIds: ["thade_coren"],
          description: {
            sous_titre: "Le véritable maître arrive.",
            visuel: "Thade apparaît dans un éclair de téléportation, impeccable, deux gardes arcaniques avec lui.",
            audio: "Un silence de mort instantané.",
            odeur: "Le parfum de lavande de Thade masque l'odeur de soufre.",
          },
          narration: {
            declencheur: "Dès que Jaren est vaincu ou tente de se rendre.",
            texte_a_lire:
              "Un rayon vert frappe Jaren en pleine poitrine avant qu'il ne puisse parler. Il tombe en poussière. Thade s'avance en applaudissant lentement. « Beau travail. Vous avez nettoyé le désordre de ce fou. L'Université vous remercie. »",
            contexte_mj:
              "Thade vient de tuer le témoin. Il récupère le livre de rituel et la spirale d'os.",
            objectif: "Confronter Thade ou accepter l'argent et se taire.",
          },
          mecaniques: {
            defis: ["Psychologie (DD 15) : Comprendre que Thade a tout orchestré.", "Intimidation/Attaque : Thade est trop fort (Niv 10+), il se téléporte s'il est menacé, devenant un ennemi récurrent."],
            recompenses: "Récompense promise + Bonus si les PJ ne posent pas de questions.",
          },
          transitions: {
            success: "Fin du scénario. Les PJ ont résolu l'affaire, mais un goût amer reste.",
          },
          details: [
            "Conclusion : Thorgar est satisfait du retour des os, mais inquiet de l'implication des mages.",
            "Ouverture : Thade Coren est maintenant un antagoniste connu pour la campagne.",
          ],
        },
      ],
    },
  ],
};