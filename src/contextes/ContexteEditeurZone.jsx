import { useState, useCallback } from "react";
import { ContexteEditeurZone } from "./ContexteEditeurZoneBase";
import { universeData } from "../data/universe/universe";
import { utiliserEditeurLieu } from "../hooks/utiliserEditeurLieu";
import { estModeEditeur, apiZones } from "../services/api";
import EditeurZone from "../composants/zones/EditeurZone";

/**
 * Slugifie un nom proposé (lowercase + ascii + underscores) pour en faire un id zone.
 * Renvoie "" si rien d'utilisable n'est extrait.
 */
function slugifierIdZone(brut) {
  if (typeof brut !== "string") return "";
  return brut
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 64);
}

/**
 * Contexte global pour ouvrir l'éditeur de zone
 * depuis n'importe quelle page, sans navigation.
 *
 * Pattern identique à ContexteEditeurPnj / ContexteEditeurLieu.
 */
/**
 * Trouve une zone par son ID dans universeData
 */
function trouverZoneParId(idZone) {
  return (universeData.zones || []).find((z) => z.id === idZone) || null;
}

/**
 * Callback de sauvegarde par défaut
 * Mode éditeur → API (écriture disque, locations préservées côté serveur)
 * Mode viewer  → mémoire + localStorage
 */
async function sauvegarderParDefaut(diff, brouillonComplet) {
  console.log("[EditeurZone] Diff sauvegardé :", diff);

  const zone = trouverZoneParId(brouillonComplet.id);
  if (!zone) {
    throw new Error(`Zone introuvable : ${brouillonComplet.id}`);
  }

  // 1. Mettre à jour la zone en mémoire (sauf locations qu'on ne touche pas ici)
  const { locations: _locations, ...champsSansLocations } = brouillonComplet;
  Object.assign(zone, champsSansLocations);

  // 2. Persister
  if (estModeEditeur()) {
    await apiZones.modifier(brouillonComplet.id, champsSansLocations);
    // Disque = source de vérité : purger un éventuel brouillon localStorage
    try {
      localStorage.removeItem(`zone_edit_${brouillonComplet.id}`);
    } catch { /* pas bloquant */ }
  } else {
    try {
      localStorage.setItem(
        `zone_edit_${brouillonComplet.id}`,
        JSON.stringify(champsSansLocations),
      );
    } catch { /* pas bloquant */ }
  }
}

/**
 * Fournisseur du contexte éditeur zone — à placer autour de <Outlet /> dans Disposition.jsx
 */
export function FournisseurEditeurZone({ surSauvegarde, children }) {
  const [editeurOuvert, definirEditeurOuvert] = useState(false);

  const editeur = utiliserEditeurLieu(null, {
    surSauvegarde: surSauvegarde || sauvegarderParDefaut,
  });

  const ouvrirEditeurZone = useCallback(
    (idZone) => {
      const zone = trouverZoneParId(idZone);
      if (!zone) {
        console.warn("[EditeurZone] Zone introuvable :", idZone);
        return;
      }
      // Charger une copie sans les locations (on ne les édite pas ici)
      const { locations: _locations, ...zoneSansLocations } = zone;
      editeur.charger({ ...zoneSansLocations, id: zone.id });
      definirEditeurOuvert(true);
    },
    [editeur],
  );

  const fermerEditeurZone = useCallback(() => {
    editeur.fermer();
    definirEditeurOuvert(false);
  }, [editeur]);

  /**
   * Crée une nouvelle zone via l'API et l'ajoute en mémoire.
   * @param {object} donneesInitiales - Champs (au minimum un id ou un name)
   * @returns {Promise<object|null>} La zone créée ou null en cas d'échec
   */
  const creerNouvelleZone = useCallback(async (donneesInitiales = {}) => {
    if (!estModeEditeur()) {
      console.warn("[EditeurZone] creerNouvelleZone : mode éditeur requis.");
      return null;
    }
    const idPropose =
      donneesInitiales.id ||
      slugifierIdZone(donneesInitiales.name) ||
      `zone_${Date.now()}`;
    const nouvelleZone = {
      id: idPropose,
      name: donneesInitiales.name || "Nouvelle zone",
      summary: donneesInitiales.summary || "",
      details: Array.isArray(donneesInitiales.details) ? donneesInitiales.details : [],
      locations: [],
      ...donneesInitiales,
      // Re-forcer l'id final (au cas où donneesInitiales.id écraserait)
      id: idPropose,
    };

    try {
      const reponse = await apiZones.creer(nouvelleZone);
      // Ajouter en mémoire pour que l'UI la voie immédiatement
      const enMemoire = { ...nouvelleZone, ...reponse.zone, locations: [] };
      if (!universeData.zones) universeData.zones = [];
      universeData.zones.push(enMemoire);
      console.log(`[EditeurZone] Zone créée : ${idPropose}`);
      return enMemoire;
    } catch (err) {
      console.error("[EditeurZone] Échec création zone :", err);
      throw err;
    }
  }, []);

  /**
   * Supprime la zone actuellement chargée dans l'éditeur via l'API.
   * Échoue (côté serveur) si la zone contient encore des lieux.
   */
  const supprimerZoneActive = useCallback(async () => {
    const idZone = editeur.brouillon?.id;
    if (!idZone) return false;
    if (!estModeEditeur()) {
      console.warn("[EditeurZone] supprimerZoneActive : mode éditeur requis.");
      return false;
    }
    try {
      await apiZones.supprimer(idZone);
      // Retirer de la mémoire
      if (Array.isArray(universeData.zones)) {
        const idx = universeData.zones.findIndex((z) => z.id === idZone);
        if (idx !== -1) universeData.zones.splice(idx, 1);
      }
      try {
        localStorage.removeItem(`zone_edit_${idZone}`);
      } catch { /* pas bloquant */ }
      console.log(`[EditeurZone] Zone supprimée : ${idZone}`);
      editeur.fermer();
      definirEditeurOuvert(false);
      return true;
    } catch (err) {
      console.error("[EditeurZone] Échec suppression zone :", err);
      throw err;
    }
  }, [editeur]);

  return (
    <ContexteEditeurZone.Provider
      value={{
        ouvrirEditeurZone,
        fermerEditeurZone,
        creerNouvelleZone,
        supprimerZoneActive,
      }}
    >
      {children}
      <EditeurZone
        estOuvert={editeurOuvert}
        fermer={fermerEditeurZone}
        editeur={editeur}
        surSupprimer={estModeEditeur() ? supprimerZoneActive : undefined}
      />
    </ContexteEditeurZone.Provider>
  );
}

export { utiliserEditeurZoneContexte } from "./ContexteEditeurZoneBase";
