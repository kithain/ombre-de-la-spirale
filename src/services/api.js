/**
 * Service API — Client HTTP pour le mode édition.
 *
 * En mode éditeur (VITE_APP_MODE=editeur), les sauvegardes passent par
 * le serveur Express qui écrit directement sur le disque.
 *
 * En mode viewer, ces fonctions ne sont jamais appelées.
 */

const BASE = "/api";

/**
 * @returns {boolean} true si l'app est en mode édition
 */
export function estModeEditeur() {
  return import.meta.env.VITE_APP_MODE === "editeur";
}

/**
 * @returns {boolean} true si l'app est en mode viewer (lecture seule)
 */
export function estModeViewer() {
  return !estModeEditeur();
}

// ─── Helpers ─────────────────────────────────────────────────────────

/** Délai maximal pour les requêtes API (ms) */
const TIMEOUT_MS = 15_000;

async function requete(methode, url, body = null) {
  const controleur = new AbortController();
  const minuterie = setTimeout(() => controleur.abort(), TIMEOUT_MS);

  const options = {
    method: methode,
    headers: { "Content-Type": "application/json" },
    signal: controleur.signal,
  };
  if (body) options.body = JSON.stringify(body);

  let res;
  try {
    res = await fetch(`${BASE}${url}`, options);
  } catch (erreur) {
    clearTimeout(minuterie);
    if (erreur.name === "AbortError") {
      throw new Error(`Requête ${methode} ${url} expirée après ${TIMEOUT_MS / 1000}s`);
    }
    throw new Error(`Réseau indisponible : ${erreur.message}`);
  } finally {
    clearTimeout(minuterie);
  }

  // Lire le corps en texte d'abord (certaines réponses n'ont pas de body JSON)
  const texte = await res.text();
  let data = {};
  if (texte) {
    try {
      data = JSON.parse(texte);
    } catch {
      // Réponse non-JSON (ex: texte brut, HTML d'erreur serveur)
      if (!res.ok) throw new Error(`Erreur ${res.status} : ${texte.slice(0, 200)}`);
      data = { raw: texte };
    }
  }

  if (!res.ok) {
    throw new Error(data.error || `Erreur ${res.status}`);
  }
  return data;
}

// ─── API Lieux ───────────────────────────────────────────────────────

export const apiLieux = {
  /** Lister tous les lieux groupés par zone */
  lister: () => requete("GET", "/lieux"),

  /** Mettre à jour un lieu existant */
  modifier: (id, lieu) => requete("PUT", `/lieux/${encodeURIComponent(id)}`, lieu),

  /** Créer un nouveau lieu dans une zone */
  creer: (zoneId, lieu) => requete("POST", "/lieux", { zoneId, lieu }),

  /** Supprimer un lieu */
  supprimer: (id) => requete("DELETE", `/lieux/${encodeURIComponent(id)}`),
};

// ─── API PNJ ─────────────────────────────────────────────────────────

export const apiPnj = {
  /** Lister tous les PNJ groupés par fichier */
  lister: () => requete("GET", "/pnj"),

  /** Mettre à jour un PNJ existant */
  modifier: (id, pnj) => requete("PUT", `/pnj/${encodeURIComponent(id)}`, pnj),

  /** Créer un nouveau PNJ */
  creer: (pnj, fichierCible = undefined) =>
    requete("POST", "/pnj", { pnj, fichierCible }),

  /** Supprimer un PNJ */
  supprimer: (id) => requete("DELETE", `/pnj/${encodeURIComponent(id)}`),

  /** Déplacer un PNJ vers un autre fichier source */
  deplacer: (id, fichierCible) =>
    requete("PUT", `/pnj/${encodeURIComponent(id)}/deplacer`, { fichierCible }),
};

// ─── API Images ──────────────────────────────────────────────────────────────

export const apiImages = {
  /**
   * Uploader une image dans /public/images/monstres/
   * @param {File} fichier - Fichier image sélectionné
   * @returns {Promise<{ok: boolean, chemin: string}>}
   */
  uploader: async (fichier) => {
    const formData = new FormData();
    formData.append("image", fichier);

    const controleur = new AbortController();
    const minuterie = setTimeout(() => controleur.abort(), TIMEOUT_MS);

    let res;
    try {
      res = await fetch(`${BASE}/images/upload`, {
        method: "POST",
        body: formData,
        signal: controleur.signal,
      });
    } catch (erreur) {
      clearTimeout(minuterie);
      if (erreur.name === "AbortError") {
        throw new Error("Upload expiré après 15s");
      }
      throw new Error(`Réseau indisponible : ${erreur.message}`);
    } finally {
      clearTimeout(minuterie);
    }

    let data;
    const texte = await res.text();
    try {
      data = texte ? JSON.parse(texte) : {};
    } catch {
      throw new Error(`Réponse non-JSON du serveur : ${texte.slice(0, 200)}`);
    }
    if (!res.ok) throw new Error(data.error || `Erreur ${res.status}`);
    return data;
  },
};

// ─── API Zones ────────────────────────────────────────────────────────────────

export const apiZones = {
  /** Lister les zones (métadonnées sans locations) */
  lister: () => requete("GET", "/zones"),

  /** Créer une nouvelle zone (génère un fichier universeZone_<id>.js + maj du barrel) */
  creer: (zone) => requete("POST", "/zones", { zone }),

  /** Mettre à jour les métadonnées d'une zone (locations préservées côté serveur) */
  modifier: (id, zone) => requete("PUT", `/zones/${encodeURIComponent(id)}`, zone),

  /** Supprimer une zone (refusée si elle contient encore des lieux) */
  supprimer: (id) => requete("DELETE", `/zones/${encodeURIComponent(id)}`),
};

// ─── API Scénarios ────────────────────────────────────────────────────────────

export const apiScenarios = {
  /**
   * Sauvegarder un scénario sur disque (actes + metadata).
   * @param {number} id - ID du scénario (entier)
   * @param {object} scenario - Brouillon complet du scénario
   */
  modifier: (id, scenario) => requete("PUT", `/scenarios/${encodeURIComponent(id)}`, scenario),
};
