import { useMemo, useState, useCallback, useEffect } from "react";
import {
  Save,
  RotateCcw,
  X,
  CheckCircle,
  Loader2,
  MapPin,
  User,
  Plus,
  Trash2,
  Undo2,
  Redo2,
  ScrollText,
  Film,
  AlertTriangle,
} from "lucide-react";
import Modale from "../interface/Modale";
import ComboboxFiltrable from "../interface/ComboboxFiltrable";
import SectionPnj from "../pnj/sections/SectionPnj";
import { cc } from "../../utilitaires/combinerClasses";
import { genererIdLieu, CATEGORIES_DETAILS_LIEU } from "../../utilitaires/genererIdLieu";
import { tousLesPnj, obtenirPnjParIds } from "../../data/npcRegistry";
import {
  obtenirToutesLesScenes,
  obtenirScenesPourLieu,
  ajouterPnjAScene,
  retirerPnjDeScene,
  lierLieuAScene,
  delierLieuDeScene,
} from "../../utilitaires/liaisonsDonnees";

/**
 * Composant EditeurLieu — Modale d'édition complète d'un lieu
 */
function EditeurLieu({ estOuvert, fermer, editeur, zone, estCreation = false, surSupprimer }) {
  const [confirmationSuppression, definirConfirmationSuppression] = useState(false);

  const {
    brouillon,
    estActif,
    etatSauvegarde,
    messageSauvegarde,
    aDesModifications,
    sauvegarder,
    reinitialiser,
    modifierChamp,
    annuler,
    refaire,
    peutAnnuler,
    peutRefaire,
    ETATS_SAUVEGARDE,
  } = editeur;

  if (!estOuvert || !estActif || !brouillon) return null;

  const enCoursDeSauvegarde = etatSauvegarde === ETATS_SAUVEGARDE.EN_COURS;

  const badge = (
    <>
      {zone && (
        <div className="px-3 py-1 text-sm border border-accent-muted text-accent-light bg-accent-surface">
          {zone.name}
        </div>
      )}
    </>
  );

  return (
    <Modale
      estOuverte={estOuvert}
      fermer={fermer}
      titre={estCreation ? `Création — ${brouillon.name || "Nouveau lieu"}` : `Édition — ${brouillon.name || brouillon.id}`}
      sousTitre={estCreation ? "Remplir les informations du nouveau lieu" : "Modifier les informations, résidents, visiteurs et scènes liées"}
      badge={badge}
    >
      <div className="space-y-2">
        {/* ===== INFORMATIONS GÉNÉRALES ===== */}
        <SectionInfoGenerales brouillon={brouillon} modifierChamp={modifierChamp} estCreation={estCreation} />

        {/* ===== DÉTAILS ===== */}
        <SectionDetails brouillon={brouillon} modifierChamp={modifierChamp} />

        {/* ===== PNJ RÉSIDENTS ===== */}
        <SectionResidents brouillon={brouillon} modifierChamp={modifierChamp} />

        {/* ===== PNJ VISITEURS ===== */}
        <SectionVisiteurs lieuId={brouillon.id} />

        {/* ===== SCÈNES LIÉES ===== */}
        <SectionScenesLiees lieuId={brouillon.id} />

        {/* ===== MESSAGE DE SAUVEGARDE ===== */}
        {messageSauvegarde && (
          <div
            className={cc(
              "flex items-center gap-2 px-3 py-2 text-sm border",
              etatSauvegarde === ETATS_SAUVEGARDE.SUCCES
                ? "border-green-700 text-green-300 bg-green-900/20"
                : etatSauvegarde === ETATS_SAUVEGARDE.ERREUR
                  ? "border-red-700 text-red-300 bg-red-900/20"
                  : "border-surface-border text-content-muted",
            )}
          >
            {etatSauvegarde === ETATS_SAUVEGARDE.SUCCES && <CheckCircle size={14} />}
            {etatSauvegarde === ETATS_SAUVEGARDE.ERREUR && <AlertTriangle size={14} />}
            {messageSauvegarde}
          </div>
        )}

        {/* ===== BARRE D'ACTIONS ===== */}
        <div className="sticky bottom-0 bg-surface-raised/95 backdrop-blur-sm border-t border-surface-border p-4 -mx-3 sm:-mx-6 -mb-3 sm:-mb-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={sauvegarder}
            disabled={enCoursDeSauvegarde || !aDesModifications}
            className={cc(
              "btn-forge flex items-center gap-2 text-content",
              aDesModifications && !enCoursDeSauvegarde
                ? "!border-green-600 hover:!border-green-400 hover:!shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                : "opacity-50 cursor-not-allowed",
            )}
          >
            {enCoursDeSauvegarde ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Save size={16} />
            )}
            {enCoursDeSauvegarde ? "Sauvegarde…" : "Sauvegarder"}
          </button>

          <button
            type="button"
            onClick={annuler}
            disabled={enCoursDeSauvegarde || !peutAnnuler}
            className={cc(
              "btn-forge flex items-center gap-1.5 text-content !px-2.5",
              !peutAnnuler && "opacity-50 cursor-not-allowed",
            )}
            title="Annuler (Ctrl+Z)"
          >
            <Undo2 size={15} />
          </button>

          <button
            type="button"
            onClick={refaire}
            disabled={enCoursDeSauvegarde || !peutRefaire}
            className={cc(
              "btn-forge flex items-center gap-1.5 text-content !px-2.5",
              !peutRefaire && "opacity-50 cursor-not-allowed",
            )}
            title="Refaire (Ctrl+Y)"
          >
            <Redo2 size={15} />
          </button>

          <button
            type="button"
            onClick={reinitialiser}
            disabled={enCoursDeSauvegarde || !aDesModifications}
            className={cc(
              "btn-forge flex items-center gap-2 text-content",
              !aDesModifications && "opacity-50 cursor-not-allowed",
            )}
          >
            <RotateCcw size={16} />
            Réinitialiser
          </button>

          {!estCreation && surSupprimer && (
            !confirmationSuppression ? (
              <button
                type="button"
                onClick={() => definirConfirmationSuppression(true)}
                disabled={enCoursDeSauvegarde}
                className="btn-forge flex items-center gap-2 text-red-400 !border-red-800 hover:!border-red-600 hover:!shadow-[0_0_15px_rgba(239,68,68,0.2)]"
              >
                <Trash2 size={16} />
                Supprimer
              </button>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1.5 border border-red-700 bg-red-900/20">
                <AlertTriangle size={14} className="text-red-400 flex-shrink-0" />
                <span className="text-xs text-red-300">Confirmer la suppression ?</span>
                <button
                  type="button"
                  onClick={() => { surSupprimer(); definirConfirmationSuppression(false); }}
                  className="btn-forge text-xs !px-2 !py-1 text-red-300 !border-red-600 hover:!border-red-400"
                >
                  Oui, supprimer
                </button>
                <button
                  type="button"
                  onClick={() => definirConfirmationSuppression(false)}
                  className="btn-forge text-xs !px-2 !py-1 text-content"
                >
                  Annuler
                </button>
              </div>
            )
          )}

          <button
            type="button"
            onClick={fermer}
            disabled={enCoursDeSauvegarde}
            className="btn-forge flex items-center gap-2 text-content ml-auto"
          >
            <X size={16} />
            Fermer
          </button>
        </div>
      </div>
    </Modale>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Sous-composants internes
// ─────────────────────────────────────────────────────────────────────

/**
 * Section Informations générales (name, summary)
 */
function SectionInfoGenerales({ brouillon, modifierChamp, estCreation = false }) {
  const [idManuel, definirIdManuel] = useState(false);

  const handleChangerNom = useCallback(
    (nom) => {
      modifierChamp("name", nom);
      // Auto-générer l'ID en mode création, sauf si l'utilisateur a modifié l'ID manuellement
      if (estCreation && !idManuel) {
        const idGenere = genererIdLieu(nom);
        if (idGenere) {
          modifierChamp("id", idGenere);
        }
      }
    },
    [modifierChamp, estCreation, idManuel],
  );

  const handleChangerId = useCallback(
    (val) => {
      definirIdManuel(true);
      modifierChamp("id", val);
    },
    [modifierChamp],
  );

  return (
    <SectionPnj titre="Informations générales" icone={MapPin}>
      <div className="space-y-3">
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">
            Nom du lieu
          </label>
          <input
            type="text"
            value={brouillon.name || ""}
            onChange={(e) => handleChangerNom(e.target.value)}
            className="input-forge w-full text-content"
            placeholder="Nom du lieu"
          />
        </div>
        {estCreation && (
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-content-muted font-semibold flex items-center gap-2">
              ID
              {!idManuel && brouillon.id && (
                <span className="text-[10px] normal-case tracking-normal font-normal text-accent-light">
                  (auto-généré)
                </span>
              )}
            </label>
            <input
              type="text"
              value={brouillon.id || ""}
              onChange={(e) => handleChangerId(e.target.value)}
              className="input-forge w-full text-content font-mono text-xs"
              placeholder="id_snake_case"
            />
          </div>
        )}
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">
            Résumé
          </label>
          <textarea
            value={brouillon.summary || ""}
            onChange={(e) => modifierChamp("summary", e.target.value)}
            rows={2}
            className="input-forge w-full text-content resize-y"
            placeholder="Résumé du lieu"
          />
        </div>
      </div>
    </SectionPnj>
  );
}

/**
 * Section Détails (tableau de strings éditables)
 */
function SectionDetails({ brouillon, modifierChamp }) {
  const details = brouillon.details || [];

  // Détecter si un détail correspond à une catégorie préformatée
  const obtenirCategorie = useCallback((detail) => {
    for (const cat of CATEGORIES_DETAILS_LIEU) {
      if (detail.startsWith(`${cat.label} : `) || detail === `${cat.label} : `) {
        return cat;
      }
    }
    return null;
  }, []);

  const modifierDetail = useCallback(
    (index, valeur) => {
      const nv = [...details];
      nv[index] = valeur;
      modifierChamp("details", nv);
    },
    [details, modifierChamp],
  );

  const ajouterDetail = useCallback(() => {
    modifierChamp("details", [...details, ""]);
  }, [details, modifierChamp]);

  const ajouterDetailCategorie = useCallback(
    (label) => {
      modifierChamp("details", [...details, `${label} : `]);
    },
    [details, modifierChamp],
  );

  const supprimerDetail = useCallback(
    (index) => {
      const nv = [...details];
      nv.splice(index, 1);
      modifierChamp("details", nv);
    },
    [details, modifierChamp],
  );

  // Catégories déjà utilisées (pour le menu "+ Catégorie")
  const categoriesUtilisees = useMemo(() => {
    const used = new Set();
    for (const d of details) {
      for (const cat of CATEGORIES_DETAILS_LIEU) {
        if (d.startsWith(`${cat.label} : `)) used.add(cat.label);
      }
    }
    return used;
  }, [details]);

  const categoriesDisponibles = useMemo(
    () => CATEGORIES_DETAILS_LIEU.filter((c) => !categoriesUtilisees.has(c.label)),
    [categoriesUtilisees],
  );

  return (
    <SectionPnj titre="Détails" icone={ScrollText}>
      <div className="space-y-2">
        {details.map((detail, idx) => {
          const cat = obtenirCategorie(detail);
          return (
            <div key={idx} className="flex items-start gap-2">
              {cat ? (
                <div className="flex-1 space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-accent-light font-semibold">
                    {cat.label}
                  </span>
                  <textarea
                    value={detail.slice(`${cat.label} : `.length)}
                    onChange={(e) => modifierDetail(idx, `${cat.label} : ${e.target.value}`)}
                    rows={1}
                    className="input-forge w-full text-sm text-content resize-y"
                    placeholder={cat.placeholder}
                  />
                </div>
              ) : (
                <textarea
                  value={detail}
                  onChange={(e) => modifierDetail(idx, e.target.value)}
                  rows={1}
                  className="input-forge flex-1 text-sm text-content resize-y"
                  placeholder="Détail du lieu…"
                />
              )}
              <button
                type="button"
                onClick={() => supprimerDetail(idx)}
                className="p-1.5 text-red-400 hover:text-red-300 mt-1"
                title="Supprimer ce détail"
              >
                <Trash2 size={14} />
              </button>
            </div>
          );
        })}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={ajouterDetail}
            className="text-xs px-3 py-1.5 bg-surface border border-surface-border text-content-secondary hover:text-content hover:border-accent-muted transition-colors flex items-center gap-1"
          >
            <Plus size={12} />
            Détail libre
          </button>
          {categoriesDisponibles.map((cat) => (
            <button
              key={cat.label}
              type="button"
              onClick={() => ajouterDetailCategorie(cat.label)}
              className="text-xs px-3 py-1.5 bg-accent-surface border border-accent-muted text-accent-light hover:border-accent transition-colors flex items-center gap-1"
            >
              <Plus size={12} />
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </SectionPnj>
  );
}

/**
 * Section PNJ résidents — Gère lieu.npcIds[]
 */
function SectionResidents({ brouillon, modifierChamp }) {
  const npcIds = brouillon.npcIds || [];
  const residents = useMemo(() => obtenirPnjParIds(npcIds), [npcIds]);

  // Options pour le combobox : tous les PNJ, excluant ceux déjà résidents
  const optionsPnj = useMemo(() => {
    return tousLesPnj.map((pnj) => ({
      value: pnj.id,
      label: `${pnj.nom || pnj.id}${pnj.role ? ` — ${pnj.role}` : ""}`,
    }));
  }, []);

  const ajouterResident = useCallback(
    (pnjId) => {
      if (!npcIds.includes(pnjId)) {
        modifierChamp("npcIds", [...npcIds, pnjId]);
      }
    },
    [npcIds, modifierChamp],
  );

  const retirerResident = useCallback(
    (pnjId) => {
      modifierChamp(
        "npcIds",
        npcIds.filter((id) => id !== pnjId),
      );
    },
    [npcIds, modifierChamp],
  );

  return (
    <SectionPnj titre="PNJ résidents" icone={User}>
      <div className="space-y-3">
        {residents.length === 0 ? (
          <p className="text-xs text-content-muted italic">Aucun résident.</p>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {residents.map((pnj) => (
              <span
                key={pnj.id}
                className="inline-flex items-center gap-1 px-2 py-1 bg-accent-surface border border-accent-muted text-accent-light text-xs"
              >
                <User size={10} className="flex-shrink-0" />
                {pnj.nom || pnj.id}
                {pnj.est_ennemi && (
                  <span className="text-[10px] px-1 py-0.5 border border-red-700 text-red-300 bg-red-900/20 uppercase tracking-wide">
                    E
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => retirerResident(pnj.id)}
                  className="text-red-400 hover:text-red-300 ml-0.5"
                  aria-label={`Retirer ${pnj.nom}`}
                >
                  <X size={10} />
                </button>
              </span>
            ))}
          </div>
        )}
        <ComboboxFiltrable
          placeholder="+ Ajouter un résident…"
          options={optionsPnj}
          onSelect={ajouterResident}
          exclure={npcIds}
        />
      </div>
    </SectionPnj>
  );
}

/**
 * Section PNJ visiteurs — PNJ qui apparaissent dans des scènes liées à ce lieu
 * mais qui ne sont pas dans npcIds[]
 */
function SectionVisiteurs({ lieuId }) {
  const [scenesLiees, definirScenesLiees] = useState([]);
  const toutesLesScenes = useMemo(() => obtenirToutesLesScenes(), []);

  // Rafraîchir les scènes liées
  const rafraichir = useCallback(() => {
    definirScenesLiees(obtenirScenesPourLieu(lieuId));
  }, [lieuId]);

  useEffect(() => {
    rafraichir();
  }, [rafraichir]);

  // PNJ résidents (pour exclusion)
  // On relit le lieu courant pour avoir les npcIds frais
  const npcIdsResidents = useMemo(() => {
    // Chercher dans les scènes liées n'a pas besoin de ça — on le lit directement
    // On passe par l'import car le brouillon peut ne pas être dispo ici
    // On utilise un Set pour les comparaisons rapides
    return new Set();
  }, []);

  // Construire la map visiteur → scènes
  const visiteursMap = useMemo(() => {
    const map = new Map(); // pnjId → Set<sceneId>
    for (const scene of scenesLiees) {
      for (const pnjId of scene.npcIds || []) {
        if (!map.has(pnjId)) map.set(pnjId, new Set());
        map.get(pnjId).add(scene.id);
      }
    }
    return map;
  }, [scenesLiees]);

  const visiteursList = useMemo(() => {
    const pnjIds = Array.from(visiteursMap.keys());
    const pnjData = obtenirPnjParIds(pnjIds);
    return pnjData.map((pnj) => ({
      ...pnj,
      scenes: Array.from(visiteursMap.get(pnj.id) || []),
    }));
  }, [visiteursMap]);

  // Options PNJ pour le combobox d'ajout
  const optionsPnj = useMemo(() => {
    return tousLesPnj.map((pnj) => ({
      value: pnj.id,
      label: `${pnj.nom || pnj.id}${pnj.role ? ` — ${pnj.role}` : ""}`,
    }));
  }, []);

  // Options scènes filtrées sur celles liées à ce lieu
  const optionsScenesLiees = useMemo(() => {
    return scenesLiees.map((s) => ({
      value: s.id,
      label: `${s.id} — ${s.titreScene || "Sans titre"}`,
      groupe: s.titreScenario || s.idScenario,
    }));
  }, [scenesLiees]);

  // État pour l'ajout en 2 étapes : PNJ puis scène
  const [pnjEnAttente, definirPnjEnAttente] = useState(null);

  const handleSelectPnj = useCallback((pnjId) => {
    definirPnjEnAttente(pnjId);
  }, []);

  const handleSelectScene = useCallback(
    (sceneId) => {
      if (pnjEnAttente) {
        ajouterPnjAScene(sceneId, pnjEnAttente);
        definirPnjEnAttente(null);
        rafraichir();
      }
    },
    [pnjEnAttente, rafraichir],
  );

  const handleRetirerVisiteur = useCallback(
    (pnjId, sceneId) => {
      retirerPnjDeScene(sceneId, pnjId);
      rafraichir();
    },
    [rafraichir],
  );

  const pnjEnAttenteData = useMemo(() => {
    if (!pnjEnAttente) return null;
    const data = obtenirPnjParIds([pnjEnAttente]);
    return data[0] || { id: pnjEnAttente, nom: pnjEnAttente };
  }, [pnjEnAttente]);

  return (
    <SectionPnj titre="PNJ visiteurs" icone={User}>
      <div className="space-y-3">
        <p className="text-[10px] uppercase tracking-widest text-content-muted">
          PNJ apparaissant dans les scènes de ce lieu (non résidents)
        </p>

        {visiteursList.length === 0 && !pnjEnAttente ? (
          <p className="text-xs text-content-muted italic">Aucun visiteur dans les scènes liées.</p>
        ) : (
          <div className="space-y-2">
            {visiteursList.map((pnj) => (
              <div
                key={pnj.id}
                className="bg-surface/50 border border-surface-border px-3 py-2 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <User size={12} className="text-accent-light flex-shrink-0" />
                  <span className="text-sm font-semibold text-accent-light">
                    {pnj.nom || pnj.id}
                  </span>
                  {pnj.est_ennemi && (
                    <span className="text-[10px] px-1.5 py-0.5 border border-red-700 text-red-300 bg-red-900/20 uppercase tracking-wide">
                      Ennemi
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1">
                  {pnj.scenes.map((sceneId) => (
                    <span
                      key={`${pnj.id}-${sceneId}`}
                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent-surface border border-accent-muted text-accent-light text-[10px] uppercase tracking-wide"
                    >
                      <Film size={8} className="flex-shrink-0" />
                      {sceneId}
                      <button
                        type="button"
                        onClick={() => handleRetirerVisiteur(pnj.id, sceneId)}
                        className="text-red-400 hover:text-red-300 ml-0.5"
                        aria-label={`Retirer de ${sceneId}`}
                      >
                        <X size={8} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Ajout visiteur en 2 étapes */}
        {!pnjEnAttente ? (
          <ComboboxFiltrable
            placeholder="+ Ajouter un visiteur (choisir le PNJ)…"
            options={optionsPnj}
            onSelect={handleSelectPnj}
          />
        ) : (
          <div className="space-y-2 border border-accent-muted p-3 bg-accent-surface/30">
            <div className="flex items-center justify-between">
              <p className="text-xs text-accent-light">
                <span className="font-semibold">{pnjEnAttenteData?.nom || pnjEnAttente}</span>
                {" → Choisir la scène :"}
              </p>
              <button
                type="button"
                onClick={() => definirPnjEnAttente(null)}
                className="text-content-muted hover:text-content"
                title="Annuler"
              >
                <X size={14} />
              </button>
            </div>
            {optionsScenesLiees.length === 0 ? (
              <p className="text-xs text-content-muted italic">
                Aucune scène liée à ce lieu. Liez d'abord une scène dans la section ci-dessous.
              </p>
            ) : (
              <ComboboxFiltrable
                placeholder="Choisir la scène…"
                options={optionsScenesLiees}
                onSelect={handleSelectScene}
              />
            )}
          </div>
        )}
      </div>
    </SectionPnj>
  );
}

/**
 * Section Scènes liées — Scènes où locationId === lieu.id
 */
function SectionScenesLiees({ lieuId }) {
  const [scenesLiees, definirScenesLiees] = useState([]);
  const toutesLesScenes = useMemo(() => obtenirToutesLesScenes(), []);

  const rafraichir = useCallback(() => {
    definirScenesLiees(obtenirScenesPourLieu(lieuId));
  }, [lieuId]);

  useEffect(() => {
    rafraichir();
  }, [rafraichir]);

  // Options pour le combobox : toutes les scènes, groupées par scénario
  const optionsAvecLabels = useMemo(() => {
    return toutesLesScenes.map((s) => ({
      value: s.id,
      label: `${s.id} — ${s.titreScene || "Sans titre"}`,
      groupe: s.titreScenario || s.idScenario,
    }));
  }, [toutesLesScenes]);

  const idsActuels = useMemo(
    () => scenesLiees.map((s) => s.id),
    [scenesLiees],
  );

  const handleLier = useCallback(
    (sceneId) => {
      lierLieuAScene(sceneId, lieuId);
      rafraichir();
    },
    [lieuId, rafraichir],
  );

  const handleDelier = useCallback(
    (sceneId) => {
      delierLieuDeScene(sceneId);
      rafraichir();
    },
    [rafraichir],
  );

  return (
    <SectionPnj titre="Scènes liées" icone={Film}>
      <div className="space-y-3">
        {scenesLiees.length === 0 ? (
          <p className="text-xs text-content-muted italic">Aucune scène liée à ce lieu.</p>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {scenesLiees.map((scene) => (
              <span
                key={scene.id}
                className="inline-flex items-center gap-1 px-2 py-1 bg-accent-surface border border-accent-muted text-accent-light text-xs"
                title={`${scene.titreScenario} · ${scene.titreActe} · ${scene.titreScene}`}
              >
                <Film size={10} className="flex-shrink-0" />
                {scene.id}
                <button
                  type="button"
                  onClick={() => handleDelier(scene.id)}
                  className="text-red-400 hover:text-red-300 ml-0.5"
                  aria-label={`Délier de ${scene.titreScene}`}
                >
                  <X size={10} />
                </button>
              </span>
            ))}
          </div>
        )}
        <ComboboxFiltrable
          placeholder="+ Lier une scène à ce lieu…"
          options={optionsAvecLabels}
          onSelect={handleLier}
          exclure={idsActuels}
        />
      </div>
    </SectionPnj>
  );
}

export default EditeurLieu;
