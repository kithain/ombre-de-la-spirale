export const scenario5 = {
  id: 5,
  title: "SCÉNARIO 5 : L'AUBE DE SANG",
  level: "Niveaux 13-16",
  synopsis:
    "Retour surface après 1 mois. Val-d'Ombre est une nécropole. Assaut final.",
  acts: [
    {
      title: "ACTE 1 : LE RETOUR FRACASSANT",
      stake: "Tête de pont.",
      location: "Tour des Mages -> Ville.",
      scenes: [
        {
          title: "Scène 1 : Effet de Surprise",
          type: "Combat",
          locationId: "tour_des_mages",
          npcIds: ["thade_coren"],
          details: [
            "3 Lieutenants nécromanciens.",
            "Round de surprise complet.",
          ],
        },
        {
          title: "Scène 2 : Fuite Tactique",
          type: "Action",
          locationId: "tour_des_mages",
          npcIds: ["thade_coren"],
          details: [
            "Thade bombarde le plafond.",
            "Sauter par la fenêtre (Chute de plume).",
          ],
        },
        {
          title: "Scène 3 : Ville Morte",
          type: "Ambiance",
          locationId: "vieille_ville_ruelles",
          details: [
            "Cendres, silence, squelettes.",
            "1 mois a passé.",
          ],
        },
        {
          title: "Scène 4 : Dernier Carré",
          type: "Rencontre",
          locationId: "egouts_val_dombre",
          npcIds: ["thorgar_pretre_nain"],
          details: [
            "Guérilla naine dans les égouts.",
            "Thorgar assiégé au Temple.",
          ],
        },
        {
          title: "Scène 5 : Plan de Bataille",
          type: "Objectif",
          locationId: "temple_forgeron",
          npcIds: ["thorgar_pretre_nain", "durnik_chef_mineur"],
          details: [
            "Briser le siège pour créer une diversion.",
          ],
        },
      ],
    },
    {
      title: "ACTE 2 : LE RALLIEMENT",
      stake: "Bataille de masse.",
      location: "Parvis du Temple.",
      scenes: [
        {
          title: "Scène 1 : Le Siège",
          type: "Observation",
          locationId: "temple_forgeron",
          details: [
            "Milliers de zombies.",
            "Catapultes en os.",
          ],
        },
        {
          title: "Scène 2 : Entrée en Scène",
          type: "Combat",
          locationId: "temple_forgeron",
          npcIds: ["thorgar_pretre_nain", "durnik_chef_mineur"],
          details: [
            "Attaque par l'arrière.",
            "Sorts de zone majeurs.",
            "Cible : Artillerie.",
          ],
        },
        {
          title: "Scène 3 : Résurrection de l'Espoir",
          type: "Social",
          locationId: "temple_forgeron",
          npcIds: ["thorgar_pretre_nain", "durnik_chef_mineur"],
          details: [
            "Discours (DD 25).",
            "Cri : 'Pour la Pierre et le Sang !'.",
          ],
        },
        {
          title: "Scène 4 : Armement",
          type: "Logistique",
          locationId: "temple_forgeron",
          details: [
            "Armurerie sacrée ouverte.",
            "Marteau Tueur de mages, Potions.",
          ],
        },
        {
          title: "Scène 5 : La Charge",
          type: "Épique",
          locationId: "temple_forgeron",
          npcIds: ["thorgar_pretre_nain", "durnik_chef_mineur"],
          details: [
            "Sortie suicide des Nains.",
            "Voie dégagée vers la Tour.",
          ],
        },
      ],
    },
    {
      title: "ACTE 3 : L'ASCENSION INFERNALE",
      stake: "Dungeon crawl vertical.",
      location: "Tour des Mages.",
      scenes: [
        {
          title: "Scène 1 : Hall des Illusions",
          type: "Piège",
          locationId: "tour_des_mages",
          details: [
            "Mirage arcanique + Symboles de mort.",
            "Contre : Vision lucide.",
          ],
        },
        {
          title: "Scène 2 : Ménagerie",
          type: "Combat",
          locationId: "tour_des_mages",
          details: [
            "Escaliers en colimaçon.",
            "Ennemis : Bébilith ou Golem Mithral.",
          ],
        },
        {
          title: "Scène 3 : Salle des Portails",
          type: "Puzzle",
          locationId: "tour_des_mages",
          details: [
            "Téléporteurs multiples.",
            "Indice : Suivre le flux violet.",
          ],
        },
        {
          title: "Scène 4 : Les Otages",
          type: "Dilemme",
          locationId: "tour_des_mages",
          details: [
            "Anciens du Conseil zombifiés conscients.",
            "Ils supplient la mort.",
          ],
        },
        {
          title: "Scène 5 : L'Apprenti Favori",
          type: "Mini-Boss",
          locationId: "tour_des_mages",
          npcIds: ["kaelen_vampire"],
          details: [
            "Kaelen (Vampire Niv 12).",
            "Accès au toit.",
          ],
        },
      ],
    },
    {
      title: "ACTE 4 : LE SANCTUAIRE INTÉRIEUR",
      stake: "Pré-climax.",
      location: "Appartements de Thade.",
      scenes: [
        {
          title: "Scène 1 : Le Cœur du Mal",
          type: "Décor",
          locationId: "tour_des_mages",
          details: [
            "Bibliothèque en peau humaine.",
            "Vue panoramique.",
          ],
        },
        {
          title: "Scène 2 : Le Phylactère",
          type: "Révélation",
          locationId: "tour_des_mages",
          npcIds: ["thade_coren"],
          details: [
            "Phylactère = La Spirale.",
            "Tuer le corps le bannit seulement.",
          ],
        },
        {
          title: "Scène 3 : Festin des Héros",
          type: "Préparation",
          locationId: "tour_des_mages",
          details: [
            "Réserve de potions ultimes.",
            "Buffs de longue durée.",
          ],
        },
        {
          title: "Scène 4 : La Voix",
          type: "Social",
          locationId: "tour_des_mages",
          npcIds: ["thade_coren"],
          details: [
            "Projection de Thade.",
            "Offre d'alliance (Test Volonté).",
          ],
        },
        {
          title: "Scène 5 : L'Escalier",
          type: "Transition",
          locationId: "tour_des_mages",
          details: [
            "Échelle de lumière.",
            "Orage magique.",
          ],
        },
      ],
    },
    {
      title: "ACTE 5 : LE CRÉPUSCULE DES DIEUX",
      stake: "Boss Final.",
      location: "Toit de la Tour.",
      scenes: [
        {
          title: "Phase 1 : Le Sorcier",
          type: "Boss",
          locationId: "tour_des_mages_toit",
          npcIds: ["thade_coren"],
          details: [
            "Bouclier de force (4 pylônes à détruire).",
            "Bombardement à distance.",
          ],
        },
        {
          title: "Phase 2 : La Fusion",
          type: "Boss",
          locationId: "tour_des_mages_toit",
          npcIds: ["thade_coren"],
          details: [
            "Thade absorbe l'énergie (50% PV).",
            "Transformation : Monstre de pierre noire.",
          ],
        },
        {
          title: "Phase 3 : Le Chaos",
          type: "Twist",
          locationId: "tour_des_mages_toit",
          details: [
            "Intervention de la Spirale.",
            "Tentacules attaquent tout le monde.",
          ],
        },
        {
          title: "Scène 4 : Chute du Tyran",
          type: "Cinématique",
          locationId: "tour_des_mages_toit",
          details: [
            "Thade vaincu est aspiré par la Spirale.",
            "Il est 'digéré'.",
          ],
        },
        {
          title: "Scène 5 : Épilogue",
          type: "Conclusion",
          locationId: "tour_des_mages_toit",
          details: [
            "Soleil sur les ruines.",
            "Ville libre mais détruite.",
          ],
        },
      ],
    },
  ],
};
