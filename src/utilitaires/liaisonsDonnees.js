import { universeData } from "../data/universe/universe";
import { universeZones } from "../data/universe/universeZones";
import {
  tousLesPnj as tousPnj,
  chercherPnjParId as registreTrouverPnjParId,
  chercherPnjParNom as registreTrouverPnjParNom,
  obtenirPnjParIds,
} from "../data/npcRegistry";
import {
  obtenirIndexOccurrencesPnj,
  obtenirIndexPnjParLieu,
  obtenirIndexOccurrencesLieu,
  obtenirToutesLesScenes,
  invaliderIndex,
  obtenirCacheLieuxScenario,
  definirCacheLieuxScenario,
  invaliderCacheLieux,
} from "./indexScenario";

/**
 * Crée un lien vers la page Univers avec les paramètres appropriés.
 * @param {object} [params={}]
 * @param {string} [params.zoneId]
 * @param {string} [params.locId]
 * @param {string} [params.npcId]
 * @returns {string} URL du lien
 */
export function creerLienUnivers({ zoneId, locId, npcId } = {}) {
  const parametres = new URLSearchParams();
  if (zoneId) parametres.set("zone", zoneId);
  if (locId) parametres.set("loc", locId);
  if (npcId) parametres.set("pnj", npcId);
  const requete = parametres.toString();
  return requete ? `/univers?${requete}` : "/univers";
}

/**
 * Trouve un PNJ par ID et son emplacement dans l'univers.
 * @param {string} pnjId - ID du PNJ
 * @returns {{ pnj: object, lieu: object|null, zone: object|null, source: string }|null}
 */
export function trouverPnjParId(pnjId) {
  if (!pnjId) return null;
  const pnj = registreTrouverPnjParId(pnjId);
  if (!pnj) return null;

  // Chercher le lieu associé dans l'univers
  for (const zone of universeData.zones || []) {
    for (const lieu of zone.locations || []) {
      if ((lieu.npcIds || []).includes(pnjId)) {
        return { pnj, lieu, zone, source: pnj.source };
      }
    }
  }

  return { pnj, lieu: null, zone: null, source: pnj.source };
}

// Re-export obtenirToutesLesScenes pour les consommateurs existants
export { obtenirToutesLesScenes };

/**
 * Trouve toutes les occurrences d'un PNJ dans les scénarios
 * Utilise un index paresseux — O(1) après la première construction
 * @param {string} pnjId - ID du PNJ
 * @returns {Array} Liste des occurrences
 */
export function trouverOccurrencesPnj(pnjId) {
  return obtenirIndexOccurrencesPnj().get(pnjId) || [];
}

/**
 * Trouve tous les PNJ associés à un lieu dans les scénarios
 * Utilise un index paresseux — O(1) après la première construction
 * @param {string} idLieu - ID du lieu
 * @returns {Array} Liste des PNJ avec leurs occurrences
 */
export function trouverPnjParIdLieu(idLieu) {
  const cartePnj = obtenirIndexPnjParLieu().get(String(idLieu));
  return cartePnj ? Array.from(cartePnj.values()) : [];
}

/**
 * Trouve toutes les scènes où un lieu apparaît dans les scénarios
 * Utilise un index paresseux — O(1) après la première construction
 * @param {string} idLieu - ID du lieu
 * @returns {Array} Liste des occurrences de scènes
 */
export function trouverOccurrencesLieu(idLieu) {
  return obtenirIndexOccurrencesLieu().get(String(idLieu)) || [];
}

/**
 * Trouve un lieu par son ID
 * @param {string} idLieu - ID du lieu
 * @returns {object|null} Objet contenant le lieu et la zone
 */
export function trouverLieuParId(idLieu) {
  for (const zone of universeData.zones || []) {
    const lieu = (zone.locations || []).find((l) => l.id === idLieu);
    if (lieu) return { lieu, zone };
  }
  return null;
}

/**
 * Trouve le lien d'un PNJ par son nom
 * @param {string} nom - Nom du PNJ
 * @returns {string|null} URL du lien ou null
 */
export function trouverLienPnjParNom(nom) {
  const pnj = registreTrouverPnjParNom(nom);
  if (pnj) {
    const resultat = trouverPnjParId(pnj.id);
    if (resultat?.zone && resultat?.lieu) {
      return creerLienUnivers({
        zoneId: resultat.zone.id,
        locId: resultat.lieu.id,
        npcId: pnj.id,
      });
    }
  }
  return null;
}

/**
 * Récupère tous les PNJ associés à un lieu (via npcIds ou legacy npcs).
 * Définie plus bas dans le fichier (voir obtenirPnjPourLieu).
 */


/**
 * Retourne les scènes où un PNJ apparaît
 * @param {string} pnjId
 * @returns {Array} Sous-ensemble de obtenirToutesLesScenes()
 */
export function obtenirScenesPourPnj(pnjId) {
  return obtenirToutesLesScenes().filter((s) => s.npcIds.includes(pnjId));
}

/**
 * Ajoute un PNJ à une scène (modifie npcIds en place)
 * @param {string} sceneId - ex: "scenario1.1.1"
 * @param {string} pnjId
 */
export function ajouterPnjAScene(sceneId, pnjId) {
  if (!sceneId || !pnjId) return;
  const scene = obtenirToutesLesScenes().find((s) => s.id === sceneId);
  if (!scene) return;
  if (!scene._ref.npcIds) scene._ref.npcIds = [];
  if (!scene._ref.npcIds.includes(pnjId)) {
    scene._ref.npcIds.push(pnjId);
    scene.npcIds = [...scene._ref.npcIds];
    invaliderIndex("pnj");
  }
}

/**
 * Retire un PNJ d'une scène (modifie npcIds en place)
 * @param {string} sceneId - ex: "scenario1.1.1"
 * @param {string} pnjId
 */
export function retirerPnjDeScene(sceneId, pnjId) {
  if (!sceneId || !pnjId) return;
  const scene = obtenirToutesLesScenes().find((s) => s.id === sceneId);
  if (!scene || !Array.isArray(scene._ref.npcIds)) return;
  scene._ref.npcIds = scene._ref.npcIds.filter((id) => id !== pnjId);
  scene.npcIds = [...scene._ref.npcIds];
  invaliderIndex("pnj");
}

/**
 * Lie un lieu à une scène (modifie locationId en place)
 * @param {string} sceneId - ex: "scenario1.1.1"
 * @param {string} lieuId - ID du lieu
 */
export function lierLieuAScene(sceneId, lieuId) {
  const scene = obtenirToutesLesScenes().find((s) => s.id === sceneId);
  if (scene) {
    scene._ref.locationId = lieuId;
    invaliderIndex("lieu");
  }
}

/**
 * Délie un lieu d'une scène (met locationId à null)
 * @param {string} sceneId - ex: "scenario1.1.1"
 */
export function delierLieuDeScene(sceneId) {
  const scene = obtenirToutesLesScenes().find((s) => s.id === sceneId);
  if (scene) {
    scene._ref.locationId = null;
    invaliderIndex("lieu");
  }
}

/**
 * Retourne les scènes liées à un lieu (filtrées par locationId)
 * @param {string} lieuId - ID du lieu
 * @returns {Array} Sous-ensemble de obtenirToutesLesScenes()
 */
export function obtenirScenesPourLieu(lieuId) {
  return obtenirToutesLesScenes().filter(
    (s) => s._ref.locationId === lieuId,
  );
}

/**
 * Ajoute un nouveau lieu dans une zone de l'univers.
 * @param {string} zoneId - ID de la zone cible
 * @param {object} lieu - Objet lieu { id, name, summary, details, npcIds }
 * @returns {boolean} true si l'ajout a réussi
 */
export function ajouterLieu(zoneId, lieu) {
  if (!zoneId || !lieu?.id) {
    console.warn("[liaisonsDonnees] ajouterLieu : zoneId ou lieu.id manquant.");
    return false;
  }
  const zone = (universeData.zones || []).find((z) => z.id === zoneId);
  if (!zone) {
    console.warn(`[liaisonsDonnees] ajouterLieu : zone "${zoneId}" introuvable.`);
    return false;
  }
  if (!zone.locations) zone.locations = [];
  if (zone.locations.some((l) => l.id === lieu.id)) return false;
  zone.locations.push(lieu);
  invaliderCacheLieux();
  return true;
}

/**
 * Supprime un lieu d'une zone de l'univers.
 * @param {string} lieuId - ID du lieu à supprimer
 * @returns {boolean} true si la suppression a réussi
 */
export function supprimerLieu(lieuId) {
  if (!lieuId) return false;
  for (const zone of universeData.zones || []) {
    const idx = (zone.locations || []).findIndex((l) => l.id === lieuId);
    if (idx !== -1) {
      zone.locations.splice(idx, 1);
      // Persister la suppression + nettoyer l'édition
      try {
        const cle = "lieux_supprimes";
        const supprimes = JSON.parse(localStorage.getItem(cle) || "[]");
        if (!supprimes.includes(lieuId)) {
          supprimes.push(lieuId);
          localStorage.setItem(cle, JSON.stringify(supprimes));
        }
        localStorage.removeItem(`lieu_edit_${lieuId}`);
      } catch { /* pas bloquant */ }
      invaliderCacheLieux();
      return true;
    }
  }
  return false;
}

/**
 * Retourne les lieux du scénario au format groupé pour ComboboxFiltrable.
 * Chaque zone génère un groupe, chaque location une option { value: id, label: name }.
 * @returns {Array<{groupe: string, options: Array<{value: string, label: string}>}>}
 */
export function obtenirLieuxScenario() {
  const cache = obtenirCacheLieuxScenario();
  if (cache) return cache;
  const groupes = [];
  for (const zone of universeZones || []) {
    if (!zone.locations || zone.locations.length === 0) continue;
    groupes.push({
      groupe: zone.name || zone.id,
      options: zone.locations.map((loc) => ({
        value: loc.id,
        label: loc.name || loc.id,
      })),
    });
  }
  definirCacheLieuxScenario(groupes);
  return groupes;
}

/** Liste plate des IDs de lieux pour validation */
export function obtenirLieuxListePlate() {
  return obtenirLieuxScenario().flatMap((g) => g.options.map((o) => o.value));
}

/** Cherche le label d'un lieu par son ID */
export function obtenirNomLieu(lieuId) {
  for (const g of obtenirLieuxScenario()) {
    const found = g.options.find((o) => o.value === lieuId);
    if (found) return found.label;
  }
  return lieuId || "";
}

export function obtenirPnjPourLieu(lieu) {
  const resultat = [];
  const vus = new Set();

  // Nouveaux npcIds - utiliser le registre
  const pnjIdsResolus = obtenirPnjParIds(lieu.npcIds || []);
  pnjIdsResolus.forEach((pnj) => {
    if (!vus.has(pnj.id)) {
      resultat.push(pnj);
      vus.add(pnj.id);
    }
  });

  // Legacy npcs[] (fallback pour anciennes données)
  (lieu.npcs || []).forEach((pnj) => {
    if (pnj?.id && !vus.has(pnj.id)) {
      resultat.push(pnj);
      vus.add(pnj.id);
    }
  });

  return resultat;
}
