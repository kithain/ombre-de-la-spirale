import { useCallback } from "react";
import {
  Save,
  RotateCcw,
  X,
  CheckCircle,
  Loader2,
  MapPin,
  ScrollText,
  Plus,
  Trash2,
  Undo2,
  Redo2,
  AlertTriangle,
} from "lucide-react";
import Modale from "../interface/Modale";
import SectionPnj from "../pnj/sections/SectionPnj";
import { cc } from "../../utilitaires/combinerClasses";

/**
 * Composant EditeurZone — Modale d'édition des champs d'une zone univers
 * (name, summary, details)
 */
function EditeurZone({ estOuvert, fermer, editeur, surSupprimer }) {
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

  // Hook DOIT être appelé avant tout return conditionnel.
  // Si brouillon est null on lit des valeurs vides — la fonction ne sera
  // jamais invoquée puisqu'on retourne null juste après.
  const idBrouillon = brouillon?.id || "";
  const nomBrouillon = brouillon?.name || "";
  const gererSuppression = useCallback(async () => {
    if (!surSupprimer) return;
    const nom = nomBrouillon || idBrouillon;
    const confirme = window.confirm(
      `Supprimer définitivement la zone "${nom}" ?\n\n` +
      `Le fichier universeZone_${idBrouillon}.js sera retiré du disque et l'index universeZones.js mis à jour.\n\n` +
      `Si la zone contient encore des lieux, la suppression sera refusée — supprimez/déplacez les lieux d'abord.`,
    );
    if (!confirme) return;
    try {
      await surSupprimer();
    } catch (err) {
      window.alert(`Suppression refusée : ${err.message}`);
    }
  }, [surSupprimer, idBrouillon, nomBrouillon]);

  if (!estOuvert || !estActif || !brouillon) return null;

  const enCoursDeSauvegarde = etatSauvegarde === ETATS_SAUVEGARDE.EN_COURS;

  return (
    <Modale
      estOuverte={estOuvert}
      fermer={fermer}
      titre={`Édition — ${brouillon.name || brouillon.id}`}
      sousTitre="Modifier les informations de la zone"
    >
      <div className="space-y-2">
        {/* ===== INFORMATIONS GÉNÉRALES ===== */}
        <SectionInfoZone brouillon={brouillon} modifierChamp={modifierChamp} />

        {/* ===== DÉTAILS ===== */}
        <SectionDetailsZone brouillon={brouillon} modifierChamp={modifierChamp} />

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

          {surSupprimer && (
            <button
              type="button"
              onClick={gererSuppression}
              disabled={enCoursDeSauvegarde}
              className="btn-forge flex items-center gap-2 text-content !border-red-700 hover:!border-red-500 hover:!shadow-[0_0_15px_rgba(239,68,68,0.3)] ml-auto"
              title="Supprimer cette zone (refusé si elle contient des lieux)"
            >
              <Trash2 size={16} />
              Supprimer
            </button>
          )}

          <button
            type="button"
            onClick={fermer}
            disabled={enCoursDeSauvegarde}
            className={cc(
              "btn-forge flex items-center gap-2 text-content",
              !surSupprimer && "ml-auto",
            )}
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
function SectionInfoZone({ brouillon, modifierChamp }) {
  return (
    <SectionPnj titre="Informations générales" icone={MapPin}>
      <div className="space-y-3">
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">
            Nom de la zone
          </label>
          <input
            type="text"
            value={brouillon.name || ""}
            onChange={(e) => modifierChamp("name", e.target.value)}
            className="input-forge w-full text-content"
            placeholder="Nom de la zone"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">
            Résumé
          </label>
          <textarea
            value={brouillon.summary || ""}
            onChange={(e) => modifierChamp("summary", e.target.value)}
            rows={3}
            className="input-forge w-full text-content resize-y"
            placeholder="Résumé de la zone"
          />
        </div>
      </div>
    </SectionPnj>
  );
}

/**
 * Section Détails (tableau de strings éditables)
 */
function SectionDetailsZone({ brouillon, modifierChamp }) {
  const details = brouillon.details || [];

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

  const supprimerDetail = useCallback(
    (index) => {
      const nv = [...details];
      nv.splice(index, 1);
      modifierChamp("details", nv);
    },
    [details, modifierChamp],
  );

  return (
    <SectionPnj titre="Détails" icone={ScrollText}>
      <div className="space-y-2">
        {details.length === 0 && (
          <p className="text-xs text-content-muted italic">Aucun détail.</p>
        )}
        {details.map((detail, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <textarea
              value={detail}
              onChange={(e) => modifierDetail(idx, e.target.value)}
              rows={1}
              className="input-forge flex-1 text-sm text-content resize-y"
              placeholder="Ex: Ambiance : description…"
            />
            <button
              type="button"
              onClick={() => supprimerDetail(idx)}
              className="p-1.5 text-red-400 hover:text-red-300 mt-1"
              title="Supprimer ce détail"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={ajouterDetail}
          className="text-xs px-3 py-1.5 bg-surface border border-surface-border text-content-secondary hover:text-content hover:border-accent-muted transition-colors flex items-center gap-1"
        >
          <Plus size={12} />
          Ajouter un détail
        </button>
      </div>
    </SectionPnj>
  );
}

export default EditeurZone;
