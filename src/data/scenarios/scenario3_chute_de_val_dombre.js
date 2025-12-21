export const scenario3 = {
  id: 3,
  title: "SCÉNARIO 3 : LA CHUTE DE VAL-D'OMBRE",
  level: "Niveaux 7-9",
  synopsis:
    "Thade orchestre la 'Nuit des Longs Couteaux'. Les PJ, ennemis publics, doivent fuir dans la Spirale.",
  acts: [
    {
      title: "ACTE 1 : L'ASSASSINAT",
      stake: "Déclencheur politique.",
      location: "Hôtel de Ville.",
      scenes: [
        {
          title: "Scène 1 : Le Sommet Sanglant",
          type: "Tension",
          locationId: "hotel_de_ville_conseil",
          npcIds: ["bourgmestre_valdombre", "grand_pretre_nain", "thade_coren", "secretaire_bourgmestre"],
          details: [
            "Bourgmestre, Grand Prêtre nain, PJ.",
            "Thade présent, silencieux.",
          ],
        },
        {
          title: "Scène 2 : Le Sang",
          type: "Event",
          locationId: "hotel_de_ville_valdombre",
          npcIds: ["grand_pretre_nain"],
          details: [
            "Le Grand Prêtre meurt (magie noire).",
            "Coupable désigné : un apprenti mage sous charme.",
          ],
        },
        {
          title: "Scène 3 : Bataille du Conseil",
          type: "Combat",
          locationId: "hotel_de_ville_valdombre",
          details: [
            "Chaos total. Nains en rage vs Gardes mages.",
            "Protéger le Bourgmestre.",
          ],
        },
        {
          title: "Scène 4 : L'Évacuation",
          type: "Fuite",
          locationId: "hotel_de_ville_valdombre",
          npcIds: ["thade_coren"],
          details: [
            "Bâtiment en feu. Sortie par les toits.",
            "Thade disparaît.",
          ],
        },
        {
          title: "Scène 5 : La Loi Martiale",
          type: "Conséquence",
          locationId: "hotel_de_ville_valdombre",
          details: [
            "Annonce : 'Les Nains ont trahi'.",
            "Couvre-feu immédiat.",
          ],
        },
      ],
    },
    {
      title: "ACTE 2 : LA NUIT DES LONGS COUTEAUX",
      stake: "Purge et révélation.",
      location: "Rues (Nuit).",
      scenes: [
        {
          title: "Scène 1 : La Rafle",
          type: "Discrétion",
          locationId: "quartier_artisan_patrouille",
          npcIds: ["chef_bandes_ruelles"],
          details: [
            "Rejoindre une planque au milieu des ateliers mis sous scellés.",
            "Patrouilles mixtes : gardes humains + automates de la Guilde.",
          ],
        },
        {
          title: "Scène 2 : L'Éveil de la Nécropole",
          type: "Horreur",
          locationId: "rues_valdombre_brume",
          npcIds: ["capitaine_garde_urbaine", "geolier_principal"],
          details: [
            "Rafle des nains.",
            "Les morts se relèvent immédiatement en Zombies.",
          ],
        },
        {
          title: "Scène 3 : L'Embuscade",
          type: "Combat",
          locationId: "rues_valdombre_nuit",
          npcIds: ["assassin_masque"],
          details: [
            "Lieutenant de Thade (Nécro Niv 8) + Squelettes géants.",
          ],
        },
        {
          title: "Scène 4 : Le Dilemme de Thorgar",
          type: "Choix",
          locationId: "forge_thorgar_refuge",
          npcIds: ["thorgar_pretre_nain"],
          details: [
            "Thorgar est encerclé dans son annexe de forge.",
            "Sauver les réfugiés enfermés ou récupérer des ressources.",
          ],
        },
        {
          title: "Scène 5 : Le Temple-Forteresse",
          type: "Regroupement",
          locationId: "temple_forgeron",
          npcIds: ["thorgar_pretre_nain", "durnik_guilde_mineurs"],
          details: [
            "Dernier bastion libre.",
            "Réfugiés barricadés.",
          ],
        },
      ],
    },
    {
      title: "ACTE 3 : LA RÉSISTANCE",
      stake: "Siège.",
      location: "Temple-Forgeron.",
      scenes: [
        {
          title: "Scène 1 : Fortification",
          type: "Stratégie",
          locationId: "temple_moradin_enceinte",
          npcIds: ["thorgar_pretre_nain", "durnik_guilde_mineurs"],
          details: [
            "Organiser la défense intérieure.",
            "Atout : Explosifs de mine stockés dehors.",
          ],
        },
        {
          title: "Scène 2 : La Sortie Commando",
          type: "Action",
          locationId: "egouts_val_dombre",
          npcIds: ["sniv_kobold"],
          details: [
            "Récupérer les explosifs.",
            "Sorts : Invisibilité / Forme gazeuse.",
          ],
        },
        {
          title: "Scène 3 : Le Traître",
          type: "Sabotage",
          locationId: "temple_forgeron",
          npcIds: ["capitaine_garde_temple"],
          details: [
            "Un réfugié désactive les glyphes.",
            "Neutralisation requise.",
          ],
        },
        {
          title: "Scène 4 : L'Assaut Final",
          type: "Bataille",
          locationId: "temple_moradin_parvis",
          details: [
            "Wargame simplifié.",
            "Ennemis : Béliers osseux, Wraiths.",
          ],
        },
        {
          title: "Scène 5 : Le Dôme",
          type: "Magie",
          locationId: "temple_forgeron",
          details: [
            "Dôme violet isole la ville.",
            "Plus de téléportation vers l'extérieur.",
          ],
        },
      ],
    },
    {
      title: "ACTE 4 : LE RITUEL DE LA BRUME",
      stake: "Comprendre le but.",
      location: "Hauteurs Brumeuses.",
      scenes: [
        {
          title: "Scène 1 : La Tour",
          type: "Observation",
          locationId: "tour_arcanique_brume",
          details: [
            "Faisceau d'énergie Mine-Tour-Spirale.",
            "Thade transforme la ville en nécropole.",
          ],
        },
        {
          title: "Scène 2 : Contre-Attaque",
          type: "Infiltration",
          locationId: "tour_arcanique_brume",
          details: [
            "Frapper la source (pylône d'énergie).",
            "Ville méconnaissable (brume acide).",
          ],
        },
        {
          title: "Scène 3 : L'Abomination",
          type: "Boss",
          locationId: "tour_arcanique_brume",
          details: [
            "Gardien du pylône : Golem de chair avancé.",
          ],
        },
        {
          title: "Scène 4 : La Projection",
          type: "Face à Face",
          locationId: "tour_arcanique_brume",
          npcIds: ["thade_coren"],
          details: [
            "Image géante de Thade.",
            "Il lance un sort Niv 8 (Météores) sur le quartier.",
          ],
        },
        {
          title: "Scène 5 : L'Échec",
          type: "Retraite",
          locationId: "tour_arcanique_brume",
          details: [
            "Temple en feu.",
            "Seule issue : L'accès secret du Cimetière.",
          ],
        },
      ],
    },
    {
      title: "ACTE 5 : LA FUITE VERS LE BAS",
      stake: "Quitter la ville.",
      location: "Vers le Cimetière.",
      scenes: [
        {
          title: "Scène 1 : Le Gantelet",
          type: "Course",
          locationId: "rues_valdombre_nuit",
          details: [
            "Skill challenge à travers les ruines.",
            "Horde de zombies.",
          ],
        },
        {
          title: "Scène 2 : Le Sacrifice de Durnik",
          type: "Sacrifice",
          locationId: "mausolee_pont_secret",
          npcIds: ["durnik_chef_mineur"],
          details: [
            "Gargouille bloque le passage.",
            "Durnik se sacrifie en faisant sauter le pont.",
          ],
        },
        {
          title: "Scène 3 : Gardiens du Seuil",
          type: "Combat",
          locationId: "mausolee_seuil",
          details: [
            "Mausolée secret.",
            "4 Chevaliers de la mort.",
          ],
        },
        {
          title: "Scène 4 : L'Abîme",
          type: "Action",
          locationId: "puits_spirale_abime",
          details: [
            "Ouvrir la porte scellée.",
            "Puits noir insondable.",
          ],
        },
        {
          title: "Scène 5 : La Chute",
          type: "Conclusion",
          locationId: "mausolee_seuil",
          npcIds: ["thade_coren"],
          details: [
            "Thade arrive.",
            "Sauter dans le vide de la Spirale.",
          ],
        },
      ],
    },
  ],
};
