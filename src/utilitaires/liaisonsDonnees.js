import { universeData } from "../data/universe/universe";
import {
  chercherPnjParId as registreTrouverPnjParId,
  obtenirPnjParIds,
} from "../data/npcRegistry";
import {
  obtenirIndexOccurrencesPnj,
  obtenirIndexPnjParLieu,
  obtenirIndexOccurrencesLieu,
} from "./indexScenario";

/**
 * Crée un lien vers la page Univers avec les paramètres appropriés.
 * @param {object} [params={}]
 * @param {string} [params.idZone]
 * @param {string} [params.idLieu]
 * @param {string} [params.idPnj]
 * @returns {string} URL du lien
 */
export function creerLienUnivers({ idZone, idLieu, idPnj } = {}) {
  const parametres = new URLSearchParams();
  if (idZone) parametres.set("zone", idZone);
  if (idLieu) parametres.set("loc", idLieu);
  if (idPnj) parametres.set("pnj", idPnj);
  const requete = parametres.toString();
  return requete ? `/univers?${requete}` : "/univers";
}

/**
 * Trouve un PNJ par ID et son emplacement dans l'univers.
 * @param {string} pnjId - ID du PNJ
 * @returns {{ pnj: object, lieu: object|null, zone: object|null, origine: string }|null}
 */
export function trouverPnjParId(pnjId) {
  if (!pnjId) return null;
  const pnj = registreTrouverPnjParId(pnjId);
  if (!pnj) return null;

  // Chercher le lieu associé dans l'univers
  for (const zone of universeData.zones || []) {
    for (const lieu of zone.emplacements || []) {
      if ((lieu.idsPnj || []).includes(pnjId)) {
        return { pnj, lieu, zone, origine: pnj.origine };
      }
    }
  }

  return { pnj, lieu: null, zone: null, origine: pnj.origine };
}

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
    const lieu = (zone.emplacements || []).find((l) => l.id === idLieu);
    if (lieu) return { lieu, zone };
  }
  return null;
}

export function obtenirPnjPourLieu(lieu) {
  const resultat = [];
  const vus = new Set();

  // Nouveaux idsPnj - utiliser le registre
  const pnjIdsResolus = obtenirPnjParIds(lieu.idsPnj || []);
  pnjIdsResolus.forEach((pnj) => {
    if (!vus.has(pnj.id)) {
      resultat.push(pnj);
      vus.add(pnj.id);
    }
  });

  // Ancien format pnjs[] (solution de repli pour anciennes données)
  (lieu.pnjs || []).forEach((pnj) => {
    if (pnj?.id && !vus.has(pnj.id)) {
      resultat.push(pnj);
      vus.add(pnj.id);
    }
  });

  return resultat;
}
