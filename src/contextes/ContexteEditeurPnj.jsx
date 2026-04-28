import { useState, useCallback } from "react";
import { ContexteEditeurPnj } from "./ContexteEditeurPnjBase";
import { chercherPnjParId, mettreAJourPnj, ajouterPnj } from "../data/npcRegistry";
import { creerPnj } from "../data/personnages/pnjTemplate";
import { utiliserEditeurPersonnage } from "../hooks/utiliserEditeurPersonnage";
import { estModeEditeur, apiPnj } from "../services/api";
import EditeurPersonnage from "../composants/pnj/EditeurPersonnage";

/**
 * Contexte global pour ouvrir l'éditeur de personnage/monstre
 * depuis n'importe quelle page, sans navigation.
 *
 * Pattern identique à ContexteModalePnj : fournisseur + hook + rendu interne.
 */
/**
 * Callback de sauvegarde par défaut
 * Mode éditeur → API (écriture disque)
 * Mode viewer  → mémoire + localStorage
 */
async function sauvegarderParDefaut(diff, brouillonComplet) {
  console.log("[EditeurPnj] Diff sauvegardé :", diff);

  // 1. Toujours mettre à jour en mémoire (session courante)
  const misAJour = mettreAJourPnj(brouillonComplet.id, brouillonComplet);
  if (!misAJour) {
    throw new Error(`PNJ introuvable dans le registre : ${brouillonComplet.id}`);
  }

  // 2. Persister
  if (estModeEditeur()) {
    await apiPnj.modifier(brouillonComplet.id, brouillonComplet);
    // Le disque est maintenant la source de vérité : on purge un éventuel
    // brouillon localStorage devenu obsolète (sinon il serait réappliqué
    // en mode viewer et écraserait les nouvelles valeurs).
    try {
      localStorage.removeItem(`pnj_edit_${brouillonComplet.id}`);
    } catch { /* pas bloquant */ }
  } else {
    try {
      localStorage.setItem(`pnj_edit_${brouillonComplet.id}`, JSON.stringify(brouillonComplet));
    } catch { /* pas bloquant */ }
  }
}

/**
 * Callback de sauvegarde pour la création d'un nouveau PNJ
 */
async function sauvegarderCreation(diff, brouillonComplet) {
  console.log("[EditeurPnj] Nouveau PNJ créé :", brouillonComplet);

  if (!brouillonComplet.id) {
    throw new Error("Le PNJ doit avoir un ID unique.");
  }

  // 1. Ajouter au registre en mémoire
  const ajoute = ajouterPnj(brouillonComplet);
  if (!ajoute) {
    throw new Error(`Impossible d'ajouter le PNJ (ID déjà existant ?) : ${brouillonComplet.id}`);
  }

  // 2. Persister
  if (estModeEditeur()) {
    await apiPnj.creer(brouillonComplet);
    try {
      localStorage.removeItem(`pnj_edit_${brouillonComplet.id}`);
    } catch { /* pas bloquant */ }
  } else {
    try {
      localStorage.setItem(`pnj_edit_${brouillonComplet.id}`, JSON.stringify(brouillonComplet));
    } catch { /* pas bloquant */ }
  }
}

/**
 * Fournisseur du contexte éditeur — à placer autour de <Outlet /> dans Disposition.jsx
 * Rend l'EditeurPersonnage en interne quand un PNJ est en cours d'édition.
 *
 * @param {object} props
 * @param {function} [props.surSauvegarde] - Callback custom de sauvegarde (remplace le défaut)
 * @param {React.ReactNode} props.children
 */
export function FournisseurEditeurPnj({ surSauvegarde, children }) {
  const [editeurOuvert, definirEditeurOuvert] = useState(false);
  const [estCreation, definirEstCreation] = useState(false);

  const editeur = utiliserEditeurPersonnage(null, {
    surSauvegarde: surSauvegarde || sauvegarderParDefaut,
  });

  const editeurCreation = utiliserEditeurPersonnage(null, {
    surSauvegarde: sauvegarderCreation,
  });

  const ouvrirEditeur = useCallback(
    (idOuObjet) => {
      const personnage =
        typeof idOuObjet === "string"
          ? chercherPnjParId(idOuObjet)
          : idOuObjet;

      if (!personnage) {
        console.warn("[EditeurPnj] Personnage introuvable :", idOuObjet);
        return;
      }

      definirEstCreation(false);
      editeur.charger(personnage);
      definirEditeurOuvert(true);
    },
    [editeur],
  );

  const creerNouveauPnj = useCallback(
    (donneesInitiales = {}) => {
      const id = donneesInitiales.id || `pnj_custom_${Date.now()}`;
      const nouveau = creerPnj({
        ...donneesInitiales,
        id,
        nom: donneesInitiales.nom || "Nouveau PNJ",
        category: donneesInitiales.category || "allies",
        source: "custom",
      });
      definirEstCreation(true);
      editeurCreation.charger(nouveau);
      definirEditeurOuvert(true);
    },
    [editeurCreation],
  );

  const fermerEditeur = useCallback(() => {
    if (estCreation) {
      editeurCreation.fermer();
    } else {
      editeur.fermer();
    }
    definirEstCreation(false);
    definirEditeurOuvert(false);
  }, [editeur, editeurCreation, estCreation]);

  const editeurActif = estCreation ? editeurCreation : editeur;

  return (
    <ContexteEditeurPnj.Provider value={{ ouvrirEditeur, fermerEditeur, creerNouveauPnj }}>
      {children}
      <EditeurPersonnage
        estOuvert={editeurOuvert}
        fermer={fermerEditeur}
        editeur={editeurActif}
        estCreation={estCreation}
      />
    </ContexteEditeurPnj.Provider>
  );
}

export { utiliserEditeurPnj } from "./ContexteEditeurPnjBase";
