export const CLES_SAUVEGARDE_CAMPAGNE = [
  "campaign-state-v1",
  "session-scenario",
  "session-scene",
  "session-note-rapide",
  "derniere-route",
  "current-scenario",
  "front-open-active",
  "scenario-open-active",
  "universe-zone",
  "universe-loc",
  "universe-pnj",
  "universe-tab",
];

export const PREFIXES_SAUVEGARDE_CAMPAGNE = [
  "scene-note-",
  "scene-fav-",
  "front-clock-",
  "front-note-",
  "scenario-open-act-",
  "quete-pnj-",
];

export function estCleSauvegardeCampagne(cle) {
  if (typeof cle !== "string") return false;

  return (
    CLES_SAUVEGARDE_CAMPAGNE.includes(cle) ||
    PREFIXES_SAUVEGARDE_CAMPAGNE.some((prefixe) => cle.startsWith(prefixe))
  );
}

export function telechargerJson(nomFichier, donnees) {
  const blob = new Blob([JSON.stringify(donnees, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const lien = document.createElement("a");
  lien.href = url;
  lien.download = nomFichier;
  document.body.appendChild(lien);
  lien.click();
  document.body.removeChild(lien);
  URL.revokeObjectURL(url);
}

export function collecterStockageCampagne(stockageLocal = localStorage) {
  const stockage = {};

  for (let i = 0; i < stockageLocal.length; i++) {
    const cle = stockageLocal.key(i);
    if (!estCleSauvegardeCampagne(cle)) continue;
    stockage[cle] = stockageLocal.getItem(cle);
  }

  return stockage;
}

export function creerSauvegardeCampagne() {
  const stockage = collecterStockageCampagne();

  return {
    type: "ombre-de-la-spirale-sauvegarde-campagne",
    version: "3.0",
    dateExport: new Date().toISOString(),
    stockage,
    resume: {
      nombreCles: Object.keys(stockage).length,
      clesDirectes: CLES_SAUVEGARDE_CAMPAGNE,
      prefixes: PREFIXES_SAUVEGARDE_CAMPAGNE,
    },
  };
}

export function restaurerSauvegardeCampagne(donnees, stockageLocal = localStorage) {
  if (
    donnees?.type !== "ombre-de-la-spirale-sauvegarde-campagne" ||
    !donnees.stockage ||
    typeof donnees.stockage !== "object"
  ) {
    throw new Error("Format de sauvegarde campagne invalide");
  }

  let nbClesImportees = 0;

  Object.entries(donnees.stockage).forEach(([cle, valeur]) => {
    if (!estCleSauvegardeCampagne(cle) || valeur === null) return;
    stockageLocal.setItem(cle, String(valeur));
    nbClesImportees++;
  });

  return nbClesImportees;
}
