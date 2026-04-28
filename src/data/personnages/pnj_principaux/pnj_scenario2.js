/**
 * PNJ Scénario 2 : L'Écho des Profondeurs
 * Personnages liés au Quartier des Mineurs et aux tunnels
 */

export const pnjScenario2Raw = [
  {
    id: "durnik_chef_mineur",
    nom: "Durnik, chef de la Guilde des Mineurs",
    classe: "Expert",
    niveau: 5,
    taille: "Moyen",
    type: "Humanoïde (humain)",
    alignement: "NB",
    fp: 5,
    environnement: "Quartier des Mineurs, tunnels supérieurs",
    organisation: "Avec 2-4 gardes de mine",
    ini: "+1",
    sens: "Détection +5",
    ca: { total: 17, contact: 11, pris_au_depourvu: 16 },
    pv: 32,
    dv: "5d6+10",
    js: { vig: "+4", ref: "+2", vol: "+5" },
    vit: "9 m",
    attaque: "hache de mine +7 (1d10+3 tranchant)",
    att_outrance: "hache de mine +7/+2 (1d10+3)",
    espace: "1,5 m",
    allonge: "1,5 m",
    att_spe: [
      "Cri d'alarme 1/j (Intimidation de masse, test VS Volonté DD 14 : secoué 1d4 rd)",
    ],
    qual_spe: [
      "Résistance à la fatigue (tests Con pour marches forcées +4)",
    ],
    carac: { for: 16, dex: 12, con: 16, int: 10, sag: 12, cha: 12 },
    competences: "Escalade +9, Survie +7, Intimidation +8, Artisanat (mines) +9",
    dons: "Attaque en puissance, Science de l'initiative, Robustesse",
    tactiques:
      "Se place en avant dans les tunnels minés, fait reculer les PJ s'ils menacent les mineurs ; accepte de négocier si preuve de complot.",
    butin: "Hache lourde runique, carnet de codes des tunnels, pierre de tonnerre",
    disposition: "neutre",
    est_ennemi: false,
    role: "Chef de guilde, ouvre ou ferme l'accès aux mines.",
    details: [
      "Motivation : Protéger les mineurs de la 'pierre malade' et des décisions du Conseil.",
      "Attitude : Bourru mais honnête. Respecte les PJ qui prennent des risques pour les siens.",
      "Utilisation : Donneur de quêtes pour les scénarios liés à la Mine et à la Spirale.",
      "Test social : Difficile à convaincre si les PJ sont trop proches des Mages ou du Conseil.",
      "Au Pont Secret : Résolu à mourir pour gagner du temps lors de l'évacuation (sacrifice héroïque).",
    ],
    meta_mj: {
      reference_livre:
        "Bestiaire : Dossier 'Durnik, chef des mineurs' (Actes 2-3)",
      contexte_scenario:
        "Acte 2 : surveille les accès aux tunnels supérieurs. Utilise son terrain pour créer des goulots d'étranglement et protéger les mineurs.",
    },
    fiche_combat: {
      sorts: [],
      actions_spe: [
        {
          nom: "Cri d'alarme",
          details:
            "1/j, effectue un test de Volonté DD 14 pour retirer les PJ du support moral (-1 moral, secoué 1d4 tours).",
        },
      ],
      dons_tactiques: [
        {
          nom: "Attaque en puissance",
          details: "Maximise les dégâts avec sa hache pour punir les intrus.",
        },
        {
          nom: "Robustesse",
          details: "Reste au contact même quand les tunnels s'effondrent.",
        },
      ],
      resume_tactique:
        "Se place devant les berges minées, frappe en première ligne, puis recule derrière des arcs de pierres. Fait reculer les PJ quand deux gardes tombent.",
    },
    ogas: {
      occupation:
        "Dirige la Guilde des Mineurs et protège les tunnels supérieurs",
      objectif: "Protéger ses mineurs de la 'pierre malade' et des décisions dangereuses du Conseil",
      attitude:
        "Bourru mais honnête, respecte ceux qui prennent des risques pour les siens",
      enjeu:
        "Risque la vie de ses mineurs et la fermeture des mines ; peut sauver ses hommes par l'évacuation",
    },
    quetesAnnexes: [
      {
        id: "durnik_pierre_malade",
        titre: "La Pierre Malade",
        description: "Des mineurs tombent malades après avoir extrait un minerai étrange aux reflets violets. Durnik demande aux PJ d'enquêter sur la source de cette corruption dans les tunnels profonds.",
        statut: "disponible",
        recompenses: "300 XP, Accès aux tunnels profonds, Hache de mine runique (prêt), 150 po",
        conditions: "Avoir gagné la confiance de Durnik (test social réussi)",
        difficulte: "Difficile",
        scenario: 2,
      },
      {
        id: "durnik_evacuation",
        titre: "Le Plan d'Évacuation",
        description: "Durnik prépare un plan d'évacuation secret pour ses mineurs en cas de catastrophe. Il a besoin que les PJ sécurisent trois points de sortie dans les tunnels supérieurs.",
        statut: "disponible",
        recompenses: "250 XP, Loyauté de la Guilde des Mineurs, Pierre de tonnerre",
        conditions: "Avoir terminé 'La Pierre Malade'",
        difficulte: "Moyenne",
        scenario: 2,
      },
    ],
  },
  {
    id: "tenancier_taverne",
    nom: "Mara, des Fumées Rouges",
    classe: "Expert",
    niveau: 4,
    taille: "Moyen",
    type: "Humanoïde (humain)",
    alignement: "NB",
    fp: 3,
    environnement: "Quartier des Mineurs – Taverne des Fumées Rouges",
    organisation: "Solitaire (avec personnel)",
    ini: "+0",
    sens: "Psychologie +8",
    ca: { total: 12, contact: 10, pris_au_depourvu: 12 },
    pv: 22,
    dv: "4d6+4",
    js: { vig: "+2", ref: "+1", vol: "+5" },
    vit: "9 m",
    attaque: "Gourdin +3 (1d6+1)",
    att_outrance: "Gourdin +3 (1d6+1)",
    espace: "1,5 m",
    allonge: "1,5 m",
    att_spe: [],
    qual_spe: [
      "Réseau des mineurs (+4 Collecte d'infos dans le quartier)",
    ],
    carac: { for: 12, dex: 10, con: 12, int: 12, sag: 14, cha: 14 },
    competences:
      "Psychologie +8, Diplomatie +9, Profession (aubergiste) +10, Intimidation +6",
    dons: "Volonté de fer, Négociateur",
    tactiques:
      "Utilise sa réputation pour calmer les bagarres. Sort son gourdin 'Brise-Crâne' si nécessaire.",
    butin: "Caisse de la taverne, clé du puits secondaire.",
    disposition: "neutre",
    est_ennemi: false,
    role: "Tenancière respectée, point d'info central du quartier minier.",
    details: [
      "Motivation : Protéger 'ses' mineurs et garder son établissement debout.",
      "Attitude : Maternelle mais ferme. Ne s'en laisse pas compter par les mages.",
      "Lien : Possède les clés d'accès aux puits secondaires (Scénario 2).",
    ],
    ogas: {
      occupation:
        "Gère la Taverne des Fumées Rouges et écoute les conversations des mineurs",
      objectif: "Protéger 'ses' mineurs et maintenir son établissement debout",
      attitude:
        "Maternelle mais ferme, ne se laisse pas intimider par les mages",
      enjeu:
        "Risque de perdre son établissement et de voir ses mineurs en danger ; peut devenir une alliée clé",
    },
    quetesAnnexes: [
      {
        id: "mara_puits",
        titre: "Le Puits Secondaire",
        description: "Mara possède les clés d'un puits secondaire menant aux tunnels inférieurs. Elle accepte de les prêter si les PJ éliminent un groupe de contrebandiers qui menace sa taverne.",
        statut: "disponible",
        recompenses: "200 XP, Clé du puits secondaire, Accès aux tunnels inférieurs, 80 po",
        conditions: "Avoir aidé Mara avec un problème mineur (bagarre ou dette)",
        difficulte: "Moyenne",
        scenario: 2,
      },
    ],
  },
];
