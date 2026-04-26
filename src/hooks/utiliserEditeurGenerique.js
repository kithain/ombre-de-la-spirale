/**
 * Hook générique d'édition — Base partagée entre tous les éditeurs (PNJ, Lieu, Zone).
 *
 * Responsabilité unique : gestion du cycle de vie d'un brouillon éditable :
 * - Immuabilité : l'original est gelé, le brouillon est un clone profond
 * - Single Source of Truth : le brouillon est la seule copie mutable
 * - Diff : calcul des champs modifiés pour envoi minimal
 * - Undo / Redo (historique limité à MAX_HISTORIQUE)
 * - États de sauvegarde : inactif, enCours, succes, erreur
 *
 * Les hooks spécialisés (utiliserEditeurPersonnage, utiliserEditeurLieu)
 * composent ce hook et y ajoutent leur logique métier spécifique.
 *
 * @module hooks/utiliserEditeurGenerique
 */
import { useState, useCallback, useRef, useMemo } from "react";
import {
  ETATS_SAUVEGARDE,
  clonerProfond,
  calculerDiff,
  pousserDansHistorique,
} from "./helpersEditeur";

/**
 * @param {object} options
 * @param {function} [options.surSauvegarde] - Callback async recevant (diff, brouillonComplet)
 * @param {function} [options.valider] - Validation complète avant sauvegarde → { valide, erreurs, avertissements }
 * @param {function} [options.validerChamp] - Validation en temps réel d'un champ unique → string|null
 * @param {string} [options.labelEntite="Entité"] - Label pour les messages (ex: "Personnage", "Lieu")
 * @returns {object} API de l'éditeur générique
 */
export function utiliserEditeurGenerique(options = {}) {
  const {
    surSauvegarde,
    valider,
    validerChamp,
    labelEntite = "Entité",
  } = options;

  // Ref stable pour le callback de sauvegarde (évite les re-renders inutiles).
  // NE PAS auto-sync depuis les options à chaque render :
  // definirCallbackSauvegarde() est l'unique API de mutation.
  const surSauvegardeRef = useRef(surSauvegarde);

  // Référence immuable à l'original (gelé)
  const originalRef = useRef(null);

  // Brouillon : state React (déclenche les re-renders) + ref miroir (lecture synchrone
  // dans les callbacks sans créer de dépendance instable sur le state).
  const [brouillon, _definirBrouillonState] = useState(null);
  const brouillonRef = useRef(null);

  /**
   * Wrapper autour de setState : met à jour le state ET la ref miroir de façon atomique.
   * Accepte une valeur directe ou un updater fonctionnel (comme useState natif).
   */
  const definirBrouillon = useCallback((valOuUpdater) => {
    const suivant =
      typeof valOuUpdater === "function"
        ? valOuUpdater(brouillonRef.current)
        : valOuUpdater;
    brouillonRef.current = suivant;
    _definirBrouillonState(suivant);
  }, []);

  // État de la sauvegarde
  const [etatSauvegarde, definirEtatSauvegarde] = useState(ETATS_SAUVEGARDE.INACTIF);
  const [messageSauvegarde, definirMessageSauvegarde] = useState("");

  // Erreurs de validation par champ
  const [erreurs, definirErreurs] = useState({});

  // ─── Undo / Redo (gestion synchrone — plus de useEffect) ───────────
  const historiqueRef = useRef([]);
  const indexHistRef = useRef(-1);

  // Exposer peutAnnuler/peutRefaire comme state pour déclencher les re-renders
  const [peutAnnuler, definirPeutAnnuler] = useState(false);
  const [peutRefaire, definirPeutRefaire] = useState(false);

  const annuler = useCallback(() => {
    if (indexHistRef.current <= 0) return;
    indexHistRef.current -= 1;
    definirBrouillon(clonerProfond(historiqueRef.current[indexHistRef.current]));
    definirPeutAnnuler(indexHistRef.current > 0);
    definirPeutRefaire(true);
  }, [definirBrouillon]);

  const refaire = useCallback(() => {
    if (indexHistRef.current >= historiqueRef.current.length - 1) return;
    indexHistRef.current += 1;
    definirBrouillon(clonerProfond(historiqueRef.current[indexHistRef.current]));
    definirPeutAnnuler(true);
    definirPeutRefaire(indexHistRef.current < historiqueRef.current.length - 1);
  }, [definirBrouillon]);

  // Indique si l'éditeur est actif (une entité est chargée)
  const estActif = brouillon !== null;

  /**
   * Charge une entité dans l'éditeur.
   * Clone profondément et gèle l'original.
   * @param {object} entite - Objet à éditer
   */
  const charger = useCallback((entite) => {
    if (!entite) return;
    const clone = clonerProfond(entite);
    originalRef.current = Object.freeze(clonerProfond(entite));
    historiqueRef.current = [clonerProfond(clone)];
    indexHistRef.current = 0;
    definirBrouillon(clone);
    definirErreurs({});
    definirEtatSauvegarde(ETATS_SAUVEGARDE.INACTIF);
    definirMessageSauvegarde("");
    definirPeutAnnuler(false);
    definirPeutRefaire(false);
  }, [definirBrouillon]);

  /** Réinitialise l'état de sauvegarde si on modifie après un succès/erreur */
  const reinitialiserEtatSiTermine = useCallback(() => {
    definirEtatSauvegarde((prev) =>
      prev === ETATS_SAUVEGARDE.SUCCES || prev === ETATS_SAUVEGARDE.ERREUR
        ? ETATS_SAUVEGARDE.INACTIF
        : prev,
    );
  }, []);

  /**
   * Met à jour un champ simple du brouillon.
   * Pousse l'état résultant dans l'historique de façon synchrone.
   * Callback stable (pas de dépendance sur le state brouillon grâce à brouillonRef).
   * @param {string} champ
   * @param {*} valeur
   */
  const modifierChamp = useCallback((champ, valeur) => {
    const prev = brouillonRef.current;
    if (!prev) return;
    const suivant = { ...prev, [champ]: valeur };

    const taille = pousserDansHistorique(suivant, historiqueRef, indexHistRef);
    definirBrouillon(suivant);
    definirPeutAnnuler(taille > 1);
    definirPeutRefaire(false);

    if (validerChamp) {
      const erreur = validerChamp(champ, valeur);
      definirErreurs((prev) => {
        if (erreur) return { ...prev, [champ]: erreur };
        const { [champ]: _, ...reste } = prev;
        return reste;
      });
    }

    reinitialiserEtatSiTermine();
  }, [definirBrouillon, validerChamp, reinitialiserEtatSiTermine]);

  /**
   * Met à jour un champ imbriqué (ex: "ca.total", "carac.for", "a.b.c").
   * Supporte une profondeur arbitraire. Single-pass : une seule mise à jour d'état.
   * Callback stable (pas de dépendance sur le state brouillon grâce à brouillonRef).
   * @param {string} chemin - Chemin séparé par des points
   * @param {*} valeur
   */
  const modifierChampImbrique = useCallback((chemin, valeur) => {
    const parties = chemin.split(".");
    if (parties.length < 2) {
      modifierChamp(parties[0], valeur);
      return;
    }

    const prev = brouillonRef.current;
    if (!prev) return;

    // Construction récursive immuable pour profondeur arbitraire
    const construire = (obj, segments, val) => {
      const [cle, ...reste] = segments;
      if (reste.length === 0) return { ...obj, [cle]: val };
      return { ...obj, [cle]: construire(obj[cle] ?? {}, reste, val) };
    };

    const suivant = construire(prev, parties, valeur);

    const taille = pousserDansHistorique(suivant, historiqueRef, indexHistRef);
    definirBrouillon(suivant);
    definirPeutAnnuler(taille > 1);
    definirPeutRefaire(false);

    // Validation sur la valeur calculée — aucun effet de bord dans un updater
    if (validerChamp) {
      const erreur = validerChamp(parties[0], suivant[parties[0]]);
      definirErreurs((prevErr) => {
        if (erreur) return { ...prevErr, [parties[0]]: erreur };
        const { [parties[0]]: _, ...reste } = prevErr;
        return reste;
      });
    }

    reinitialiserEtatSiTermine();
  }, [modifierChamp, definirBrouillon, validerChamp, reinitialiserEtatSiTermine]);

  /**
   * Met à jour un élément dans un tableau (ex: att_spe[0], details[2]).
   * Callback stable (utilise brouillonRef).
   * @param {string} champ - Nom du champ tableau
   * @param {number} index - Index de l'élément
   * @param {*} valeur
   */
  const modifierElementTableau = useCallback((champ, index, valeur) => {
    const prev = brouillonRef.current;
    if (!prev) return;
    const tableau = Array.isArray(prev[champ]) ? [...prev[champ]] : [];
    tableau[index] = valeur;
    const suivant = { ...prev, [champ]: tableau };
    const taille = pousserDansHistorique(suivant, historiqueRef, indexHistRef);
    definirBrouillon(suivant);
    definirPeutAnnuler(taille > 1);
    definirPeutRefaire(false);
  }, [definirBrouillon]);

  /**
   * Ajoute un élément à un tableau.
   * Callback stable (utilise brouillonRef).
   * @param {string} champ
   * @param {*} valeur
   */
  const ajouterElementTableau = useCallback((champ, valeur) => {
    const prev = brouillonRef.current;
    if (!prev) return;
    const tableau = Array.isArray(prev[champ]) ? [...prev[champ], valeur] : [valeur];
    const suivant = { ...prev, [champ]: tableau };
    const taille = pousserDansHistorique(suivant, historiqueRef, indexHistRef);
    definirBrouillon(suivant);
    definirPeutAnnuler(taille > 1);
    definirPeutRefaire(false);
  }, [definirBrouillon]);

  /**
   * Supprime un élément d'un tableau par index.
   * Callback stable (utilise brouillonRef).
   * @param {string} champ
   * @param {number} index
   */
  const supprimerElementTableau = useCallback((champ, index) => {
    const prev = brouillonRef.current;
    if (!prev) return;
    const tableau = Array.isArray(prev[champ])
      ? prev[champ].filter((_, i) => i !== index)
      : [];
    const suivant = { ...prev, [champ]: tableau };
    const taille = pousserDansHistorique(suivant, historiqueRef, indexHistRef);
    definirBrouillon(suivant);
    definirPeutAnnuler(taille > 1);
    definirPeutRefaire(false);
  }, [definirBrouillon]);

  /** Réinitialise le brouillon à l'original */
  const reinitialiser = useCallback(() => {
    if (!originalRef.current) return;
    const clone = clonerProfond(originalRef.current);
    historiqueRef.current = [clonerProfond(clone)];
    indexHistRef.current = 0;
    definirBrouillon(clone);
    definirErreurs({});
    definirEtatSauvegarde(ETATS_SAUVEGARDE.INACTIF);
    definirMessageSauvegarde("");
    definirPeutAnnuler(false);
    definirPeutRefaire(false);
  }, [definirBrouillon]);

  /** Ferme l'éditeur (décharge l'entité) */
  const fermer = useCallback(() => {
    originalRef.current = null;
    historiqueRef.current = [];
    indexHistRef.current = -1;
    definirBrouillon(null);
    definirErreurs({});
    definirEtatSauvegarde(ETATS_SAUVEGARDE.INACTIF);
    definirMessageSauvegarde("");
    definirPeutAnnuler(false);
    definirPeutRefaire(false);
  }, [definirBrouillon]);

  // Diff calculé (mémorisé) — dépend du state brouillon pour la réactivité UI
  const diff = useMemo(
    () => calculerDiff(originalRef.current, brouillon),
    [brouillon],
  );

  // Indique si le brouillon a été modifié
  const aDesModifications = useMemo(
    () => Object.keys(diff).length > 0,
    [diff],
  );

  // Nombre de champs modifiés
  const nombreModifications = useMemo(
    () => Object.keys(diff).length,
    [diff],
  );

  /**
   * Sauvegarde le brouillon.
   * Lit l'état via brouillonRef pour garantir la fraîcheur des données,
   * indépendamment du cycle de rendu React.
   * @returns {Promise<boolean>}
   */
  const sauvegarder = useCallback(async () => {
    const brouillonCourant = brouillonRef.current;
    if (!brouillonCourant) return false;

    // Validation complète (optionnelle)
    if (valider) {
      const resultat = valider(brouillonCourant);
      if (!resultat.valide) {
        definirErreurs(resultat.erreurs || {});
        definirEtatSauvegarde(ETATS_SAUVEGARDE.ERREUR);
        definirMessageSauvegarde("Erreurs de validation, veuillez corriger les champs.");
        return false;
      }
    }

    const diffCourant = calculerDiff(originalRef.current, brouillonCourant);
    if (!Object.keys(diffCourant).length) {
      definirMessageSauvegarde("Aucune modification à sauvegarder.");
      return false;
    }

    definirEtatSauvegarde(ETATS_SAUVEGARDE.EN_COURS);
    definirMessageSauvegarde("");

    try {
      if (surSauvegardeRef.current) {
        await surSauvegardeRef.current(diffCourant, clonerProfond(brouillonCourant));
      }

      // Mettre à jour l'original avec le brouillon sauvegardé
      originalRef.current = Object.freeze(clonerProfond(brouillonCourant));
      definirEtatSauvegarde(ETATS_SAUVEGARDE.SUCCES);
      definirMessageSauvegarde(`${labelEntite} sauvegardé avec succès.`);
      return true;
    } catch (erreur) {
      definirEtatSauvegarde(ETATS_SAUVEGARDE.ERREUR);
      definirMessageSauvegarde(
        erreur?.message || "Erreur lors de la sauvegarde.",
      );
      return false;
    }
  }, [valider, labelEntite]);

  /**
   * Remplace dynamiquement le callback de sauvegarde.
   * Utile pour le mode création où le callback diffère.
   * @param {function} nouveauCallback
   */
  const definirCallbackSauvegarde = useCallback((nouveauCallback) => {
    surSauvegardeRef.current = nouveauCallback;
  }, []);

  return {
    // État
    brouillon,
    estActif,
    erreurs,
    etatSauvegarde,
    messageSauvegarde,

    // Diff
    diff,
    aDesModifications,
    nombreModifications,

    // Actions
    charger,
    modifierChamp,
    modifierChampImbrique,
    modifierElementTableau,
    ajouterElementTableau,
    supprimerElementTableau,
    reinitialiser,
    sauvegarder,
    fermer,
    annuler,
    refaire,
    peutAnnuler,
    peutRefaire,

    // Callback dynamique (remplace l'ancienne ref exposée)
    definirCallbackSauvegarde,

    // Validation
    definirErreurs,

    // Constantes
    ETATS_SAUVEGARDE,
  };
}
