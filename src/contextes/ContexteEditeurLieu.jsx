import { useState, useCallback } from "react";
import { ContexteEditeurLieu } from "./ContexteEditeurLieuBase";
import { trouverLieuParId, ajouterLieu, supprimerLieu } from "../utilitaires/liaisonsDonnees";
import { genererDetailsPreformates } from "../utilitaires/genererIdLieu";
import { utiliserEditeurLieu } from "../hooks/utiliserEditeurLieu";
import { estModeEditeur, apiLieux } from "../services/api";
import EditeurLieu from "../composants/lieux/EditeurLieu";

/**
 * Contexte global pour ouvrir l'éditeur de lieu
 * depuis n'importe quelle page, sans navigation.
 *
 * Pattern identique à ContexteEditeurPnj : fournisseur + hook + rendu interne.
 */
/**
 * Callback de sauvegarde par défaut
 * Mode éditeur → API (écriture disque)
 * Mode viewer  → mémoire + localStorage
 */
async function sauvegarderParDefaut(diff, brouillonComplet) {
  console.log("[EditeurLieu] Diff sauvegardé :", diff);

  // 1. Toujours mettre à jour en mémoire (session courante)
  const resultat = trouverLieuParId(brouillonComplet.id);
  if (!resultat) {
    throw new Error(`Lieu introuvable : ${brouillonComplet.id}`);
  }
  Object.assign(resultat.lieu, brouillonComplet);

  // 2. Persister
  if (estModeEditeur()) {
    await apiLieux.modifier(brouillonComplet.id, brouillonComplet);
    // Le disque est la source de vérité : on purge un éventuel brouillon
    // localStorage obsolète qui serait sinon réappliqué en mode viewer
    // (cf. universe.js > appliquerModificationsLocales) et écraserait
    // les nouvelles valeurs.
    try {
      localStorage.removeItem(`lieu_edit_${brouillonComplet.id}`);
    } catch { /* pas bloquant */ }
  } else {
    try {
      localStorage.setItem(`lieu_edit_${brouillonComplet.id}`, JSON.stringify(brouillonComplet));
    } catch { /* pas bloquant */ }
  }
}

/**
 * Callback de sauvegarde pour la création d'un nouveau lieu
 */
function creerSauvegardeCreation(zoneId) {
  return async function sauvegarderCreationLieu(diff, brouillonComplet) {
    console.log("[EditeurLieu] Nouveau lieu créé :", brouillonComplet);

    if (!brouillonComplet.id) {
      throw new Error("Le lieu doit avoir un ID unique.");
    }

    // 1. Ajouter en mémoire
    const ajoute = ajouterLieu(zoneId, brouillonComplet);
    if (!ajoute) {
      throw new Error(`Impossible d'ajouter le lieu (ID déjà existant ?) : ${brouillonComplet.id}`);
    }

    // 2. Persister
    if (estModeEditeur()) {
      await apiLieux.creer(zoneId, brouillonComplet);
    } else {
      try {
        localStorage.setItem(`lieu_edit_${brouillonComplet.id}`, JSON.stringify(brouillonComplet));
        const cleListe = "lieux_custom_ids";
        const existants = JSON.parse(localStorage.getItem(cleListe) || "[]");
        existants.push({ zoneId, lieuId: brouillonComplet.id });
        localStorage.setItem(cleListe, JSON.stringify(existants));
      } catch { /* pas bloquant */ }
    }
  };
}

/**
 * Fournisseur du contexte éditeur lieu — à placer autour de <Outlet /> dans Disposition.jsx
 * Rend l'EditeurLieu en interne quand un lieu est en cours d'édition.
 */
export function FournisseurEditeurLieu({ surSauvegarde, children }) {
  const [editeurOuvert, definirEditeurOuvert] = useState(false);
  const [zoneEditee, definirZoneEditee] = useState(null);
  const [estCreation, definirEstCreation] = useState(false);

  const editeur = utiliserEditeurLieu(null, {
    surSauvegarde: surSauvegarde || sauvegarderParDefaut,
  });

  // L'éditeur de création utilise un callback dynamique lié à la zone
  const [editeurCreation, definirEditeurCreation] = useState(null);

  const ouvrirEditeurLieu = useCallback(
    (idOuObjet) => {
      let lieu, zone;
      if (typeof idOuObjet === "string") {
        const resultat = trouverLieuParId(idOuObjet);
        if (!resultat) {
          console.warn("[EditeurLieu] Lieu introuvable :", idOuObjet);
          return;
        }
        lieu = resultat.lieu;
        zone = resultat.zone;
      } else {
        lieu = idOuObjet;
        zone = null;
      }

      definirEstCreation(false);
      editeur.charger(lieu);
      definirZoneEditee(zone);
      definirEditeurOuvert(true);
    },
    [editeur],
  );

  const creerNouveauLieu = useCallback(
    (zoneId, donneesInitiales = {}) => {
      if (!zoneId) {
        console.warn("[EditeurLieu] zoneId requis pour créer un lieu");
        return;
      }
      const id = donneesInitiales.id || `lieu_custom_${Date.now()}`;
      const nouveau = {
        id,
        name: donneesInitiales.name || "",
        summary: donneesInitiales.summary || "",
        details: donneesInitiales.details || genererDetailsPreformates(),
        npcIds: donneesInitiales.npcIds || [],
        ...donneesInitiales,
      };
      definirEstCreation(true);
      definirEditeurCreation({ zoneId });
      // Remplacer dynamiquement le callback de sauvegarde
      editeur.definirCallbackSauvegarde(creerSauvegardeCreation(zoneId));
      editeur.charger(nouveau);
      definirZoneEditee({ id: zoneId, name: zoneId });
      definirEditeurOuvert(true);
    },
    [editeur],
  );

  const supprimerLieuActif = useCallback(async () => {
    if (!editeur.brouillon?.id) return false;
    const lieuId = editeur.brouillon.id;

    // 1. Supprimer en mémoire
    const supprime = supprimerLieu(lieuId);
    if (!supprime) return false;

    // 2. Persister la suppression
    if (estModeEditeur()) {
      try {
        await apiLieux.supprimer(lieuId);
      } catch (e) {
        console.error("[EditeurLieu] Erreur suppression API:", e);
      }
    }

    console.log("[EditeurLieu] Lieu supprimé :", lieuId);
    editeur.fermer();
    editeur.definirCallbackSauvegarde(surSauvegarde || sauvegarderParDefaut);
    definirZoneEditee(null);
    definirEstCreation(false);
    definirEditeurCreation(null);
    definirEditeurOuvert(false);
    return true;
  }, [editeur, surSauvegarde]);

  const fermerEditeurLieu = useCallback(() => {
    editeur.fermer();
    // Restaurer le callback de sauvegarde par défaut
    editeur.definirCallbackSauvegarde(surSauvegarde || sauvegarderParDefaut);
    definirZoneEditee(null);
    definirEstCreation(false);
    definirEditeurCreation(null);
    definirEditeurOuvert(false);
  }, [editeur, surSauvegarde]);

  return (
    <ContexteEditeurLieu.Provider value={{ ouvrirEditeurLieu, fermerEditeurLieu, creerNouveauLieu, supprimerLieuActif }}>
      {children}
      <EditeurLieu
        estOuvert={editeurOuvert}
        fermer={fermerEditeurLieu}
        editeur={editeur}
        zone={zoneEditee}
        estCreation={estCreation}
        surSupprimer={supprimerLieuActif}
      />
    </ContexteEditeurLieu.Provider>
  );
}

export { utiliserEditeurLieuContexte } from "./ContexteEditeurLieuBase";
