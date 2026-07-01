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
import { frontsData, couchesCampagneData } from "../data/scenarios/fronts";
import { effetsFrontsParScene } from "../data/scenarios/effetsFronts";

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

/**
 * Trouve les fronts liés à un PNJ, en distinguant :
 * - frontsDirects : le PNJ est référencé dans forcesActives ou menaces du front
 * - frontsViaScenes : le PNJ apparaît dans une scène qui a des effets sur ce front
 * @param {string} pnjId - ID du PNJ
 * @returns {{ frontsDirects: Array, frontsViaScenes: Array }}
 */
export function trouverFrontsLiesPnj(pnjId) {
  if (!pnjId) return { frontsDirects: [], frontsViaScenes: [] };

  const tousLesFronts = [...frontsData, ...couchesCampagneData];
  const frontsDirects = [];
  const idsFrontsDirects = new Set();

  for (const front of tousLesFronts) {
    let estDirect = false;

    for (const force of front.forcesActives || []) {
      if ((force.idsPnj || []).includes(pnjId)) {
        estDirect = true;
        break;
      }
    }

    if (!estDirect) {
      for (const menace of front.menaces || []) {
        if ((menace.idsPnj || []).includes(pnjId)) {
          estDirect = true;
          break;
        }
      }
    }

    if (estDirect) {
      frontsDirects.push({ id: front.id, nom: front.nom, type: front.type });
      idsFrontsDirects.add(front.id);
    }
  }

  const occurrences = trouverOccurrencesPnj(pnjId);
  const frontsViaScenesMap = new Map();

  for (const occ of occurrences) {
    const effets = effetsFrontsParScene[occ.idScene] || [];
    for (const effet of effets) {
      if (!idsFrontsDirects.has(effet.frontId) && !frontsViaScenesMap.has(effet.frontId)) {
        const front = tousLesFronts.find((f) => f.id === effet.frontId);
        if (front) {
          frontsViaScenesMap.set(effet.frontId, {
            id: front.id,
            nom: front.nom,
            type: front.type,
            scenes: [occ.titreScene],
          });
        }
      } else if (frontsViaScenesMap.has(effet.frontId)) {
        const entry = frontsViaScenesMap.get(effet.frontId);
        if (!entry.scenes.includes(occ.titreScene)) {
          entry.scenes.push(occ.titreScene);
        }
      }
    }
  }

  const frontsViaScenes = Array.from(frontsViaScenesMap.values());

  return { frontsDirects, frontsViaScenes };
}

/**
 * Calcule l'usage narratif d'un PNJ à partir de ses liens de données.
 * - "scene" : présent ou impliqué dans au moins une scène
 * - "levier" : lié à un front ou un lieu, mais pas scénarisé
 * - "contexte" : aucun lien connu — PNJ d'ambiance ou d'improvisation
 * @param {string} pnjId - ID du PNJ
 * @returns {"scene"|"levier"|"contexte"}
 */
export function calculerUsageNarratif(pnjId) {
  if (!pnjId) return "contexte";

  const occurrences = trouverOccurrencesPnj(pnjId);
  if (occurrences.length > 0) return "scene";

  const { frontsDirects, frontsViaScenes } = trouverFrontsLiesPnj(pnjId);
  if (frontsDirects.length > 0 || frontsViaScenes.length > 0) return "levier";

  for (const zone of universeData.zones || []) {
    for (const lieu of zone.emplacements || []) {
      if ((lieu.idsPnj || []).includes(pnjId)) return "levier";
    }
  }

  return "contexte";
}
