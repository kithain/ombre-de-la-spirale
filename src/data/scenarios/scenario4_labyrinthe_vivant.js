export const scenario4 = {
  id: 4,
  title: "SCÉNARIO 4 : LE LABYRINTHE VIVANT",
  level: "Niveaux 10-12",
  synopsis:
    "Survie dans la Spirale. Comprendre l'immortalité de Thade. Pirater le système de transport.",
  acts: [
    {
      title: "ACTE 1 : LA CHUTE ET LE RÉVEIL",
      stake: "Survie immédiate.",
      location: "Zone de Déchets.",
      scenes: [
        {
          title: "Scène 1 : Atterrissage",
          type: "Cinématique",
          locationId: "spirale_zone_dechets",
          details: [
            "Gravité s'inverse.",
            "Dégâts : 4d6 + Test Vigueur (Nausée).",
          ],
        },
        {
          title: "Scène 2 : Silence des Pierres",
          type: "Exploration",
          locationId: "spirale_zone_dechets",
          details: [
            "Îles flottantes, brume violette.",
            "Règle : Ne pas dormir (l'île se désagrège).",
          ],
        },
        {
          title: "Scène 3 : Charognards",
          type: "Combat",
          locationId: "spirale_zone_dechets",
          details: [
            "Ennemis : Destrachans ou Prédateurs éthérés.",
            "Terrain : Sol instable.",
          ],
        },
        {
          title: "Scène 4 : Le Bivouac",
          type: "Découverte",
          locationId: "spirale_zone_dechets",
          details: [
            "Squelette nain ancien.",
            "Loot : Bouteille d'air infini.",
            "Note : 'La tour bouge'.",
          ],
        },
        {
          title: "Scène 5 : Le Shift",
          type: "Twist",
          details: [
            "Après repos dans une grotte, la sortie donne sur un couloir de marbre.",
            "La géographie a changé.",
          ],
        },
      ],
    },
    {
      title: "ACTE 2 : L'ÉCOSYSTÈME ABERRANT",
      stake: "Adaptation.",
      location: "Couloirs de chair.",
      scenes: [
        {
          title: "Scène 1 : Salle de la Gravité",
          type: "Piège",
          locationId: "spirale_couloirs_chair",
          details: [
            "Gravité change chaque round.",
            "Combat vs Gargouilles de cristal.",
          ],
        },
        {
          title: "Scène 2 : Le Marchand Fou",
          type: "Rencontre",
          locationId: "spirale_couloirs_chair",
          npcIds: ["marchand_fou_mercane"],
          details: [
            "Mercane ou Diable exilé.",
            "Monnaie : Souvenirs, PV permanents.",
            "Info : Labo plus bas.",
          ],
        },
        {
          title: "Scène 3 : Murs ont des oreilles",
          type: "Horreur",
          locationId: "spirale_couloirs_chair",
          details: [
            "Murs de chair, yeux.",
            "Ennemi : Gibbering Mouther colossal.",
          ],
        },
        {
          title: "Scène 4 : Miroir du Regret",
          type: "Puzzle",
          locationId: "spirale_couloirs_chair",
          details: [
            "Le reflet ne bouge pas.",
            "Solution : 'Donner' une faiblesse/aveu au reflet.",
          ],
        },
        {
          title: "Scène 5 : L'Ascenseur",
          type: "Transition",
          locationId: "spirale_couloirs_chair",
          details: [
            "Vis sans fin géante.",
            "Sauter dessus (Acrobatie) pour descendre.",
          ],
        },
      ],
    },
    {
      title: "ACTE 3 : LE LABORATOIRE SECRET",
      stake: "Révélation.",
      location: "Base fortifiée dans la paroi.",
      scenes: [
        {
          title: "Scène 1 : Le Sas",
          type: "Infiltration",
          locationId: "spirale_labo_secret",
          details: [
            "Porte technomagique.",
            "Gardes : 2 Golems de fer.",
          ],
        },
        {
          title: "Scène 2 : Bibliothèque des Âmes",
          type: "Lore",
          locationId: "spirale_labo_secret",
          details: [
            "Bocaux d'âmes.",
            "Journal : Thade remplace son cœur par un éclat de la Spirale.",
          ],
        },
        {
          title: "Scène 3 : Salle de Production",
          type: "Horreur",
          locationId: "spirale_labo_secret",
          details: [
            "Usine à soldats (cadavres réassemblés).",
            "Possibilité de sabotage.",
          ],
        },
        {
          title: "Scène 4 : Le Prototype",
          type: "Combat",
          locationId: "spirale_labo_secret",
          npcIds: ["sujet_zero"],
          details: [
            "Gardien : Sujet Zéro (Troll/Démon).",
            "Capacités : Régénération + Résistance magie.",
          ],
        },
        {
          title: "Scène 5 : Armurerie",
          type: "Récompense",
          locationId: "spirale_labo_secret",
          details: [
            "Objets dangereux.",
            "Loot clé : Clé de contrôle (Cube runique).",
          ],
        },
      ],
    },
    {
      title: "ACTE 4 : LE MÉCANISME",
      stake: "Contrôle.",
      location: "Salle des Engrenages.",
      scenes: [
        {
          title: "Scène 1 : Rouages du Monde",
          type: "Environnement",
          locationId: "spirale_salle_engrenages",
          details: [
            "Engrenages géants dans le vide.",
            "Bruit assourdissant (Malus écoute/sorts).",
          ],
        },
        {
          title: "Scène 2 : La Traversée",
          type: "Skill",
          locationId: "spirale_salle_engrenages",
          details: [
            "Sauts d'engrenage en engrenage.",
            "Mephits vapeur/feu.",
          ],
        },
        {
          title: "Scène 3 : Le Contremaître",
          type: "Combat",
          locationId: "spirale_salle_engrenages",
          npcIds: ["inevitable_contremetre"],
          details: [
            "Inevitable (Construct de Loi).",
            "Négociation possible (Thade est une menace).",
          ],
        },
        {
          title: "Scène 4 : Sabotage du Flux",
          type: "Action",
          locationId: "spirale_salle_engrenages",
          details: [
            "Couper l'énergie vers la surface.",
            "Effet : Affaiblit Thade pour le final.",
          ],
        },
        {
          title: "Scène 5 : Le Portail",
          type: "Objectif",
          locationId: "spirale_salle_engrenages",
          details: [
            "Plateforme de téléportation.",
            "Hacking : Inverser vers 'Sortie : Tour des Mages'.",
          ],
        },
      ],
    },
    {
      title: "ACTE 5 : L'ASCENSION",
      stake: "Sortie.",
      location: "Tunnel de téléportation.",
      scenes: [
        {
          title: "Scène 1 : Garde d'Élite",
          type: "Combat",
          locationId: "spirale_tunnel_teleport",
          details: [
            "2 Démons des ombres.",
            "Chrono avant purge de la salle.",
          ],
        },
        {
          title: "Scène 2 : Téléportation",
          type: "Cinématique",
          locationId: "spirale_tunnel_teleport",
          details: [
            "Vitesse lumière vers le haut.",
            "Aperçus des niveaux précédents.",
          ],
        },
        {
          title: "Scène 3 : Le Blocage",
          type: "Obstacle",
          locationId: "spirale_tunnel_teleport",
          npcIds: ["thade_coren"],
          details: [
            "Thade tente de bloquer.",
            "Duel de Volonté.",
          ],
        },
        {
          title: "Scène 4 : Vision",
          type: "Info",
          locationId: "spirale_tunnel_teleport",
          details: [
            "Aperçu de Val-d'Ombre en ruine.",
            "Bonus moral.",
          ],
        },
        {
          title: "Scène 5 : Irruption",
          type: "Cliffhanger",
          locationId: "spirale_tunnel_teleport",
          details: [
            "Explosion du sol de la Tour des Mages.",
            "Arrivée au milieu du QG ennemi.",
          ],
        },
      ],
    },
  ],
};
