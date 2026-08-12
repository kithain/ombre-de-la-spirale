export const registrePatientsElianVoss = {
  id: "registre_patients_elian_voss",
  titre: "Registre des 50 patients d'Elian Voss",
  scene: "s2_laboratoire_elian",
  type: "Registre médical - copie emportable",
  resume:
    "Cinquante patients stabilisés ces dernières années par des dérivés du protocole S-01, bien après la catastrophe de Nyx. Chaque dossier porte un cachet de Caldris, une date, un dosage et une piste de localisation.",
  colonnes: ["Code", "Patient", "Origine", "Admission", "Indication", "Dosage", "Résultat", "Localisation"],
  procedureSuivi: {
    id: "procedure_suivi_patients_elian",
    declencheur: "Les PJ récupèrent ou copient le registre dans le laboratoire d'Elian Voss.",
    objectif: "Transformer le registre en suivi patient par patient sans résoudre automatiquement les 50 destins.",
    statuts: ["a_localiser", "localise", "protege", "temoin", "soins", "disparu", "decede"],
    priorites: ["critique", "haute", "normale"],
    etapes: [
      {
        id: "copier",
        action: "Copier le registre complet",
        resolution: "Lecture directe si les PJ fouillent les cinquante dossiers ; sinon copie partielle marquée dans les preuves.",
      },
      {
        id: "triage",
        action: "Trier les patients par risque",
        resolution: "Médecine Moyen ou aide d'Elian/Olane. Les disparus, dépendants au sérum, patients chez les Endeuillés et témoins institutionnels passent en priorité haute.",
      },
      {
        id: "protection",
        action: "Choisir qui protéger d'abord",
        resolution: "Une scène de suivi couvre 3 patients, ou 5 si les PJ mobilisent Ursula, Mara, Olane ou Hessa.",
      },
      {
        id: "temoignage",
        action: "Obtenir des témoignages exploitables",
        resolution: "Un patient protégé peut devenir témoin si son état le permet et si les PJ évitent la pression de Caldris, Thade ou des factions locales.",
      },
    ],
    impacts: [
      "3 patients protégés donnent un avantage narratif au Conseil ou au jugement de Thade.",
      "1 patient critique abandonné avance le front des factions si les PJ ont ignoré la piste après récupération.",
      "10 patients stabilisés et documentés transforment les dossiers d'Elian en preuve publique robuste.",
    ],
  },
  lignes: [
    { code: "S-01/R-01", patient: "Mira Veylan", origine: "Caldris, faubourg des Verriers", admission: "17 Rochepluie 812", indication: "Fièvres de seuil après rituel de sauvetage", dosage: "0,4 mesure, trois nuits", resultat: "Stabilisée, migraines violettes", localisation: "Maison des Retours, sous le nom Mira V." },
    { code: "S-01/R-02", patient: "Orel Dast", origine: "Caldris, hospice Saint-Orme", admission: "19 Rochepluie 812", indication: "Coma planaire intermittent", dosage: "0,3 mesure, cinq nuits", resultat: "Stabilisé, amnésie partielle", localisation: "Hospice d'Ursula, registre des patients muets" },
    { code: "S-01/R-03", patient: "Selma Brant", origine: "Caldris, docks de l'Estuaire", admission: "21 Rochepluie 812", indication: "Corps froid sans cause médicale", dosage: "0,5 mesure, deux nuits", resultat: "Stabilisée, peau translucide par crises", localisation: "Atelier de tissage Vaurin, ouvrière cachée" },
    { code: "S-01/R-04", patient: "Joric Almen", origine: "Caldris, compagnie minière Greyfoss", admission: "26 Rochepluie 812", indication: "Contamination des profondeurs", dosage: "0,6 mesure, deux nuits", resultat: "Stabilisé, tremblements", localisation: "Terrasses, dortoir des carriers blessés" },
    { code: "S-01/R-05", patient: "Aline Meraut", origine: "Caldris, quartier des Cloches", admission: "02 Brumelune 812", indication: "Âme retenue après malédiction", dosage: "0,2 mesure, sept nuits", resultat: "Stabilisée, voix doublée", localisation: "Vieille Ville, chambre louée par Mara" },
    { code: "S-01/R-06", patient: "Taven Lorsk", origine: "Caldris, prison civile", admission: "04 Brumelune 812", indication: "Convulsions au contact d'argent rituel", dosage: "0,5 mesure, quatre nuits", resultat: "Stabilisé, agressivité nocturne", localisation: "Disparu, dernière trace chez le Collecteur" },
    { code: "S-01/R-07", patient: "Nessa Toril", origine: "Caldris, clinique des Sceaux", admission: "08 Brumelune 812", indication: "Dégagement d'écho planaire", dosage: "0,4 mesure, six nuits", resultat: "Stabilisée, sommeil sans rêve", localisation: "Maison des Retours, aile des longues convalescences" },
    { code: "S-01/R-08", patient: "Bren Orvane", origine: "Caldris, régiment des routes", admission: "11 Brumelune 812", indication: "Blessure qui refuse de cicatriser", dosage: "0,7 mesure, deux nuits", resultat: "Stabilisé, cicatrice lumineuse", localisation: "Garde privée d'Yselle, sous faux contrat" },
    { code: "S-01/R-09", patient: "Lysa Cormeil", origine: "Caldris, orphelinat du Pont-Neuf", admission: "14 Brumelune 812", indication: "Absences de plusieurs heures", dosage: "0,2 mesure, dix nuits", resultat: "Stabilisée, répète les derniers mots entendus", localisation: "Refuge d'Ursula, protégée par Sœur Alix" },
    { code: "S-01/R-10", patient: "Eram Fol", origine: "Caldris, marché couvert", admission: "17 Brumelune 812", indication: "Vieillissement accéléré par crise", dosage: "0,5 mesure, trois nuits", resultat: "Stabilisé, âge apparent fixe", localisation: "Caldris, renvoyé avec lettre scellée" },
    { code: "S-01/R-11", patient: "Perrin Hald", origine: "Caldris, atelier d'horlogerie", admission: "20 Brumelune 812", indication: "Désynchronisation du pouls", dosage: "0,4 mesure, quatre nuits", resultat: "Stabilisé, retard d'une respiration", localisation: "Valombre, employé aux entrepôts pleins" },
    { code: "S-01/R-12", patient: "Maude Sere", origine: "Caldris, hospice Saint-Orme", admission: "23 Brumelune 812", indication: "Crises de froid interne", dosage: "0,3 mesure, six nuits", resultat: "Stabilisée, insensible à la douleur froide", localisation: "Maison des Retours, dortoir nord" },
    { code: "S-01/R-13", patient: "Ilan Rocq", origine: "Caldris, mine de Bel-Fond", admission: "27 Brumelune 812", indication: "Poussière noire dans les poumons", dosage: "0,6 mesure, trois nuits", resultat: "Stabilisé, souffle sifflant", localisation: "Terrasses, service de Durnik" },
    { code: "S-01/R-14", patient: "Doria Vask", origine: "Caldris, quartier des Tanneurs", admission: "01 Neigebas 812", indication: "Mains traversant les objets fins", dosage: "0,5 mesure, cinq nuits", resultat: "Stabilisée, doigts engourdis", localisation: "Vieille Ville, cache de Mara" },
    { code: "S-01/R-15", patient: "Savin Ker", origine: "Caldris, garnison fluviale", admission: "03 Neigebas 812", indication: "Rêves partagés par une escouade", dosage: "0,4 mesure, quatre nuits", resultat: "Stabilisé, cauchemars collectifs", localisation: "Auberge du Pic Brisé, chambre 6" },
    { code: "S-01/R-16", patient: "Éline Borel", origine: "Caldris, temple de l'Aube", admission: "06 Neigebas 812", indication: "Âme accrochée au corps mourant", dosage: "0,2 mesure, douze nuits", resultat: "Stabilisée, pouls très faible", localisation: "Hospice Saint-Aldric, sous surveillance" },
    { code: "S-01/R-17", patient: "Marn Ostel", origine: "Caldris, route des carrières", admission: "10 Neigebas 812", indication: "Membre absent encore douloureux", dosage: "0,3 mesure, sept nuits", resultat: "Stabilisé, membre fantôme visible en magie", localisation: "Terrasses, proche de Kessak" },
    { code: "S-01/R-18", patient: "Talya Renn", origine: "Caldris, rue des Lanternes", admission: "13 Neigebas 812", indication: "Voix d'un mort dans la gorge", dosage: "0,4 mesure, six nuits", resultat: "Stabilisée, aphonie volontaire", localisation: "Cercle des Endeuillés, entrée récente" },
    { code: "S-01/R-19", patient: "Bastian Neuf", origine: "Caldris, asile du Vent", admission: "17 Neigebas 812", indication: "Panique au contact des miroirs", dosage: "0,5 mesure, trois nuits", resultat: "Stabilisé, refuse son reflet", localisation: "Disparu après interrogatoire d'Elian" },
    { code: "S-01/R-20", patient: "Clara Sonn", origine: "Caldris, quartier des Écluses", admission: "20 Neigebas 812", indication: "Respiration uniquement près d'eau courante", dosage: "0,4 mesure, cinq nuits", resultat: "Stabilisée, toux saline", localisation: "Vieille Ville, blanchisserie de couverture" },
    { code: "S-01/R-21", patient: "Rovan Delle", origine: "Caldris, maison des vétérans", admission: "24 Neigebas 812", indication: "Blessure maudite de champ de bataille", dosage: "0,7 mesure, trois nuits", resultat: "Stabilisé, douleur contenue", localisation: "Garde de nuit aux entrepôts" },
    { code: "S-01/R-22", patient: "Ania Volsk", origine: "Caldris, port sec", admission: "28 Neigebas 812", indication: "Perte de poids sans amaigrissement", dosage: "0,3 mesure, huit nuits", resultat: "Stabilisée, marche trop légèrement", localisation: "Maison des Retours, aide aux cuisines" },
    { code: "S-01/R-23", patient: "Loïc Tern", origine: "Caldris, atelier des Cartes", admission: "02 Givremont 813", indication: "Dessine des lieux jamais vus", dosage: "0,4 mesure, cinq nuits", resultat: "Stabilisé, orientation faussée", localisation: "Chez Odran Bellec, comme copiste" },
    { code: "S-01/R-24", patient: "Vera Noll", origine: "Caldris, hospice Saint-Orme", admission: "05 Givremont 813", indication: "Sang trop froid pour coaguler", dosage: "0,5 mesure, trois nuits", resultat: "Stabilisée, fragilité sévère", localisation: "Refuge d'Ursula, lit réservé" },
    { code: "S-01/R-25", patient: "Garin Pelt", origine: "Caldris, mine de Bel-Fond", admission: "08 Givremont 813", indication: "Entend les galeries parler", dosage: "0,6 mesure, quatre nuits", resultat: "Stabilisé, acouphènes de pierre", localisation: "Terrasses, équipe de Brogar" },
    { code: "S-01/R-26", patient: "Noela Cendre", origine: "Caldris, quartier des Fourneaux", admission: "12 Givremont 813", indication: "Brûlures qui refroidissent", dosage: "0,4 mesure, six nuits", resultat: "Stabilisée, peau marquée", localisation: "Vieille Ville, soins par Fendrel" },
    { code: "S-01/R-27", patient: "Edrik Savel", origine: "Caldris, bureau des messagers", admission: "15 Givremont 813", indication: "Revient toujours au même carrefour", dosage: "0,5 mesure, quatre nuits", resultat: "Stabilisé, peur des routes", localisation: "Valombre, messager bloqué" },
    { code: "S-01/R-28", patient: "Lina Verch", origine: "Caldris, maison marchande Verch", admission: "18 Givremont 813", indication: "Sommeil de trois jours par crise", dosage: "0,3 mesure, neuf nuits", resultat: "Stabilisée, dette de famille", localisation: "Chez Yselle, dossier financier caché" },
    { code: "S-01/R-29", patient: "Tomas Rael", origine: "Caldris, couvent des Soigneurs", admission: "22 Givremont 813", indication: "Prières répondues par une autre voix", dosage: "0,2 mesure, dix nuits", resultat: "Stabilisé, mutisme religieux", localisation: "Chapelle de Saint-Aldric, protégé par Alix" },
    { code: "S-01/R-30", patient: "Méline Auvray", origine: "Caldris, théâtre des Brumes", admission: "26 Givremont 813", indication: "Change de timbre selon la lumière", dosage: "0,4 mesure, cinq nuits", resultat: "Stabilisée, identité fragile", localisation: "Vieille Ville, troupe itinérante bloquée" },
    { code: "S-01/R-31", patient: "Borin Stal", origine: "Caldris, forge contractuelle", admission: "01 Fonteclaire 813", indication: "Main prise dans un métal rituel", dosage: "0,6 mesure, quatre nuits", resultat: "Stabilisé, main grise", localisation: "Temple-Forgeron, demande audience" },
    { code: "S-01/R-32", patient: "Iris Dorne", origine: "Caldris, hospice Saint-Orme", admission: "04 Fonteclaire 813", indication: "Voit des silhouettes dans les murs", dosage: "0,3 mesure, huit nuits", resultat: "Stabilisée, dessins obsessifs", localisation: "Maison des Retours, salle basse" },
    { code: "S-01/R-33", patient: "Hadrien Sol", origine: "Caldris, milice des portes", admission: "08 Fonteclaire 813", indication: "Trou noir de mémoire après veille", dosage: "0,5 mesure, cinq nuits", resultat: "Stabilisé, mémoire fragile", localisation: "Patrouille mixte, faux dossier médical" },
    { code: "S-01/R-34", patient: "Sela Vorne", origine: "Caldris, quartier des Drapiers", admission: "11 Fonteclaire 813", indication: "Ombre retardée d'un pas", dosage: "0,4 mesure, six nuits", resultat: "Stabilisée, honte sociale", localisation: "Cache du Collecteur, dette ouverte" },
    { code: "S-01/R-35", patient: "Pavel Rem", origine: "Caldris, caravane Rem", admission: "15 Fonteclaire 813", indication: "Peau couverte de givre au soleil", dosage: "0,6 mesure, trois nuits", resultat: "Stabilisé, ne sort plus le jour", localisation: "Entrepôts, dort dans une caisse vide" },
    { code: "S-01/R-36", patient: "Hélia Brume", origine: "Caldris, port sec", admission: "19 Fonteclaire 813", indication: "Disparitions de quelques secondes", dosage: "0,5 mesure, cinq nuits", resultat: "Stabilisée, clignements planaires", localisation: "Vieille Ville, surveillée par Mara" },
    { code: "S-01/R-37", patient: "Nolann Crais", origine: "Caldris, hospice militaire", admission: "23 Fonteclaire 813", indication: "Aucune douleur, aucune peur", dosage: "0,7 mesure, deux nuits", resultat: "Stabilisé, émoussement émotionnel", localisation: "Garde privée caldrisienne, possible danger" },
    { code: "S-01/R-38", patient: "Diane Perle", origine: "Caldris, joaillerie Perle", admission: "27 Fonteclaire 813", indication: "Larmes cristallines et convulsions", dosage: "0,3 mesure, six nuits", resultat: "Stabilisée, yeux sensibles", localisation: "Quartier marchand, sous protection familiale" },
    { code: "S-01/R-39", patient: "Malon Grève", origine: "Caldris, route des ponts", admission: "02 Hautesève 813", indication: "N'entend plus les voix vivantes", dosage: "0,4 mesure, sept nuits", resultat: "Stabilisé, lit sur les lèvres", localisation: "Cercle des Endeuillés, recruté par Edran" },
    { code: "S-01/R-40", patient: "Ombeline Sarn", origine: "Caldris, maison de change Sarn", admission: "06 Hautesève 813", indication: "Nombres qui changent sur les livres", dosage: "0,5 mesure, quatre nuits", resultat: "Stabilisée, erreurs comptables", localisation: "Guilde Marchande, preuve contre Yselle" },
    { code: "S-01/R-41", patient: "Rikard Lume", origine: "Caldris, atelier des Verriers", admission: "10 Hautesève 813", indication: "Corps visible à travers les reflets", dosage: "0,4 mesure, cinq nuits", resultat: "Stabilisé, évite le verre", localisation: "Université, employé temporaire" },
    { code: "S-01/R-42", patient: "Sabine Tolf", origine: "Caldris, pension des veuves", admission: "14 Hautesève 813", indication: "Croit entendre son mari mort", dosage: "0,3 mesure, huit nuits", resultat: "Stabilisée, deuil exploitable", localisation: "Endeuillés, non radicalisée" },
    { code: "S-01/R-43", patient: "Cyr Marest", origine: "Caldris, cave des apothicaires", admission: "18 Hautesève 813", indication: "Résiste aux narcotiques ordinaires", dosage: "0,6 mesure, trois nuits", resultat: "Stabilisé, dépendance au sérum", localisation: "Chez Fendrel, traitement de sevrage" },
    { code: "S-01/R-44", patient: "Dalia Fane", origine: "Caldris, orphelinat du Pont-Neuf", admission: "22 Hautesève 813", indication: "Langage inconnu pendant les crises", dosage: "0,2 mesure, neuf nuits", resultat: "Stabilisée, phrases de Spirale", localisation: "Maison des Retours, protégée par Ursula" },
    { code: "S-01/R-45", patient: "Anton Grey", origine: "Caldris, régiment frontalier", admission: "26 Hautesève 813", indication: "Blessure ouverte sans saignement", dosage: "0,7 mesure, trois nuits", resultat: "Stabilisé, fatigue extrême", localisation: "Pavillon Nord, garde malade caché" },
    { code: "S-01/R-46", patient: "Élise Monr", origine: "Caldris, quartier des Copistes", admission: "30 Hautesève 813", indication: "Écrit pendant son sommeil", dosage: "0,4 mesure, six nuits", resultat: "Stabilisée, textes exploitables", localisation: "Réserve interdite, dossier confisqué" },
    { code: "S-01/R-47", patient: "Viktor Aume", origine: "Caldris, prison civile", admission: "04 Brumepale 813", indication: "Réanimation incomplète après pendaison", dosage: "0,8 mesure, deux nuits", resultat: "Stabilisé, état moral instable", localisation: "Disparu, possible main d'œuvre du Syndicat" },
    { code: "S-01/R-48", patient: "Liora Nac", origine: "Caldris, hospice Saint-Orme", admission: "08 Brumepale 813", indication: "Entend la mer dans les murs", dosage: "0,3 mesure, sept nuits", resultat: "Stabilisée, calme inquiétant", localisation: "Chez Sœur Alix, soins discrets" },
    { code: "S-01/R-49", patient: "Mathis Oran", origine: "Caldris, maison des routes", admission: "12 Brumepale 813", indication: "Ne reconnaît plus les distances", dosage: "0,5 mesure, cinq nuits", resultat: "Stabilisé, utile pour prouver le déphasage", localisation: "Entrepôts, témoignage disponible" },
    { code: "S-01/R-50", patient: "Ysmaë Roncelet", origine: "Caldris, clinique des Sceaux", admission: "16 Brumepale 813", indication: "Cœur qui bat en contretemps", dosage: "0,4 mesure, six nuits", resultat: "Stabilisée, pouls de la Larme", localisation: "Laboratoire d'Elian, dernier dossier ouvert" },
  ],
};

export const suiviPatientsElianInitial = registrePatientsElianVoss.lignes.map((ligne) => ({
  id: ligne.code,
  nom: ligne.patient,
  origine: ligne.origine,
  localisation: ligne.localisation,
  statutInitial: statutInitialPatient(ligne.localisation),
  prioriteInitiale: prioritePatient(ligne),
  piste: ligne.localisation,
}));

function statutInitialPatient(localisation) {
  if (localisation.startsWith("Disparu")) return "disparu";
  return "a_localiser";
}

function prioritePatient(ligne) {
  const texte = `${ligne.resultat} ${ligne.localisation}`.toLowerCase();
  if (
    texte.includes("fragilité") ||
    texte.includes("témoignage") ||
    texte.includes("preuve") ||
    texte.includes("confisqué") ||
    texte.includes("dernier dossier")
  ) {
    return "critique";
  }
  if (
    texte.includes("disparu") ||
    texte.includes("dépendance") ||
    texte.includes("danger") ||
    texte.includes("endeuillés")
  ) {
    return "haute";
  }
  return "normale";
}
