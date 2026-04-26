import { universeMeta } from "./universeMeta";
import { universeZones } from "./universeZones";

export const universeData = {
  ...universeMeta,
  zones: universeZones,
};

// ─── Restauration des modifications localStorage au chargement ─────────
// En mode éditeur, les données viennent directement des fichiers source (via HMR).
// En mode viewer, on restaure les modifications sauvegardées dans localStorage.
(function appliquerModificationsLocales() {
  // Ne pas appliquer en mode éditeur (les fichiers source sont la vérité)
  if (import.meta.env.VITE_APP_MODE === "editeur") return;

  try {
    // 1. Supprimer les lieux marqués comme supprimés
    const supprimes = JSON.parse(localStorage.getItem("lieux_supprimes") || "[]");
    if (supprimes.length > 0) {
      const setSupprimes = new Set(supprimes);
      for (const zone of universeData.zones) {
        if (!zone.locations) continue;
        zone.locations = zone.locations.filter((l) => !setSupprimes.has(l.id));
      }
    }

    // 2. Réinjecter les lieux custom créés par l'utilisateur
    const lieuxCustom = JSON.parse(localStorage.getItem("lieux_custom_ids") || "[]");
    for (const { zoneId, lieuId } of lieuxCustom) {
      if (supprimes.includes(lieuId)) continue;
      const donnees = localStorage.getItem(`lieu_edit_${lieuId}`);
      if (!donnees) continue;
      const lieu = JSON.parse(donnees);
      const zone = universeData.zones.find((z) => z.id === zoneId);
      if (!zone) continue;
      if (!zone.locations) zone.locations = [];
      if (zone.locations.some((l) => l.id === lieuId)) continue;
      zone.locations.push(lieu);
    }

    // 3. Appliquer les éditions sauvegardées sur les lieux existants
    for (const zone of universeData.zones) {
      if (!zone.locations) continue;
      for (let i = 0; i < zone.locations.length; i++) {
        const loc = zone.locations[i];
        const donnees = localStorage.getItem(`lieu_edit_${loc.id}`);
        if (donnees) {
          try {
            Object.assign(loc, JSON.parse(donnees));
          } catch { /* JSON invalide, on ignore */ }
        }
      }
    }
  } catch {
    // localStorage indisponible — on continue avec les données source
  }
})();
