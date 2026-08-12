export const universeCommerce = {
  titre: "Commerce & Monnaie",
  sousTitre:
    "Système monétaire simple pour les achats, salaires, dettes et récompenses à Valombre.",

  conversion: {
    pcParPa: 10,
    pcParPo: 100,
    pieces: [
      {
        code: "Pc",
        nom: "Pièce de cuivre",
        valeurPc: 1,
        usage: "Monnaie du quotidien, pain, soupe, bougie, petit pourboire.",
      },
      {
        code: "Pa",
        nom: "Pièce d'argent",
        valeurPc: 10,
        usage: "Monnaie du travail, repas correct, outils, petits services.",
      },
      {
        code: "Po",
        nom: "Pièce d'or",
        valeurPc: 100,
        usage: "Grosses dépenses, loyers, guildes, armes, dettes et récompenses.",
      },
    ],
  },

  reperes: [
    {
      valeur: "1 Po",
      equivalent: "10 Pa = 100 Pc",
      note: "Un gros achat pour le peuple, mais une petite ligne de compte pour une guilde.",
    },
    {
      valeur: "1 Pa",
      equivalent: "10 Pc",
      note: "Salaire d'une journée pauvre, repas correct ou petit service.",
    },
    {
      valeur: "1 Pc",
      equivalent: "1/10 journée pauvre",
      note: "Presque rien dans les Hauteurs, mais assez pour du pain ou une bougie.",
    },
  ],

  salairesReference: {
    salairePauvrePcJour: 10,
    hommePeupleStablePcMois: 300,
    repasSimplePc: 5,
    resume:
      "Le repère basique est la journée pauvre : 1 Pa par jour, soit 10 Pc. Un homme du peuple stable tourne autour de 3 Po par mois.",
  },

  revenusMensuels: [
    { statut: "Mendiant, malade, sans emploi fixe", revenu: "0 à 5 Pa", equivalentPc: "0 à 50 Pc" },
    { statut: "Misérable / travail très irrégulier", revenu: "5 à 12 Pa", equivalentPc: "50 à 120 Pc" },
    { statut: "Journalier pauvre", revenu: "1 à 2 Po", equivalentPc: "100 à 200 Pc" },
    { statut: "Homme du peuple stable", revenu: "2 à 4 Po", equivalentPc: "200 à 400 Pc" },
    { statut: "Ouvrier qualifié / mineur / bon domestique", revenu: "4 à 7 Po", equivalentPc: "400 à 700 Pc" },
    { statut: "Artisan installé / contremaître", revenu: "8 à 15 Po", equivalentPc: "800 à 1 500 Pc" },
    { statut: "Marchand confortable / notable local", revenu: "20 Po et plus", equivalentPc: "2 000 Pc et plus" },
  ],

  salairesJournaliers: [
    { travail: "Petit boulot, aide occasionnelle", salaire: "5 Pc à 1 Pa", equivalentPc: "5 à 10 Pc" },
    { travail: "Journalier pauvre", salaire: "1 Pa", equivalentPc: "10 Pc" },
    { travail: "Ouvrier régulier", salaire: "1 à 2 Pa", equivalentPc: "10 à 20 Pc" },
    { travail: "Mineur, artisan qualifié, garde expérimenté", salaire: "2 à 3 Pa", equivalentPc: "20 à 30 Pc" },
    { travail: "Spécialiste rare, scribe, mage mineur, maître artisan", salaire: "4 Pa à 1 Po", equivalentPc: "40 à 100 Pc" },
  ],

  prixQuotidien: [
    { depense: "Miche de pain", prix: "1 à 2 Pc" },
    { depense: "Bol de soupe", prix: "3 Pc" },
    { depense: "Repas simple", prix: "5 Pc" },
    { depense: "Repas correct en taverne", prix: "1 Pa" },
    { depense: "Bière ordinaire", prix: "1 à 2 Pc" },
    { depense: "Nuit dans une auberge pauvre", prix: "2 à 4 Pa" },
    { depense: "Nuit dans une auberge correcte", prix: "5 Pa à 1 Po" },
    { depense: "Loyer mensuel pauvre", prix: "1 à 2 Po" },
    { depense: "Loyer mensuel modeste", prix: "3 à 5 Po" },
    { depense: "Vêtement simple", prix: "5 Pa à 1 Po" },
    { depense: "Outil courant", prix: "2 à 8 Pa" },
    { depense: "Dague / couteau de combat", prix: "1 à 2 Po" },
    { depense: "Épée correcte", prix: "8 à 15 Po" },
  ],

  echelleValeur: [
    { somme: "1 Pc", ressenti: "Une petite pièce, utile pour du pain, une bougie ou un geste symbolique." },
    { somme: "5 Pc", ressenti: "Un petit repas ou une course simple." },
    { somme: "1 Pa", ressenti: "Une journée pauvre, un repas correct ou un petit service." },
    { somme: "5 Pa", ressenti: "Une somme utile pour un pauvre, un pot-de-vin mineur ou une dette de taverne." },
    { somme: "1 Po", ressenti: "Une grosse somme pour le peuple, plusieurs jours de travail." },
    { somme: "5 Po", ressenti: "Environ un à deux mois de vie modeste." },
    { somme: "20 Po", ressenti: "Récompense sérieuse, dette importante ou affaire de guilde." },
    { somme: "100 Po", ressenti: "Somme de notable, coffre de marchand ou paiement politique." },
  ],

  recompensesPj: [
    { type: "Petit service, renseignement, livraison", montant: "5 Pa à 1 Po" },
    { type: "Mission locale simple", montant: "2 à 5 Po" },
    { type: "Mission dangereuse de quartier", montant: "5 à 10 Po" },
    { type: "Enquête officielle pour une institution", montant: "10 à 25 Po par PJ" },
    { type: "Mission critique pour le Conseil, l'Université ou une guilde", montant: "25 à 100 Po selon l'enjeu" },
  ],

  notesAmbiance: [
    "Les pauvres comptent en cuivres.",
    "Les ouvriers et artisans comptent en argents.",
    "Les marchands, guildes, notables et institutions comptent en ors.",
    "Les dettes sont souvent plus importantes que les pièces réellement possédées.",
    "Le troc, les avances de salaire et les repas offerts font tenir beaucoup de quartiers.",
    "Dans la Vieille Ville, une pièce d'argent peut faire taire quelqu'un, acheter une information ou éviter une mauvaise nuit.",
    "Dans les Hauteurs, une pièce d'argent est souvent juste un pourboire.",
  ],
};

