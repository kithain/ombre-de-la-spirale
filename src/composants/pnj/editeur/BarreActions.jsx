import { memo } from "react";
import { Save, RotateCcw, X, Loader2, Undo2, Redo2 } from "lucide-react";
import { cc } from "../../../utilitaires/combinerClasses";

/**
 * BarreActions — Footer sticky : Sauvegarder / Annuler / Refaire / Réinitialiser / Fermer
 * @param {{ enCoursDeSauvegarde, aDesModifications, peutAnnuler, peutRefaire, onSauvegarder, onAnnuler, onRefaire, onReinitialiser, onFermer }} props
 */
const BarreActions = memo(function BarreActions({
  enCoursDeSauvegarde, aDesModifications, peutAnnuler, peutRefaire,
  onSauvegarder, onAnnuler, onRefaire, onReinitialiser, onFermer,
}) {
  return (
    <div className="sticky bottom-0 bg-surface-raised/95 backdrop-blur-sm border-t border-surface-border p-4 -mx-3 sm:-mx-6 -mb-3 sm:-mb-6 flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={onSauvegarder}
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
        onClick={onAnnuler}
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
        onClick={onRefaire}
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
        onClick={onReinitialiser}
        disabled={enCoursDeSauvegarde || !aDesModifications}
        className={cc(
          "btn-forge flex items-center gap-2 text-content",
          !aDesModifications && "opacity-50 cursor-not-allowed",
        )}
      >
        <RotateCcw size={16} />
        Réinitialiser
      </button>

      <button
        type="button"
        onClick={onFermer}
        disabled={enCoursDeSauvegarde}
        className="btn-forge flex items-center gap-2 text-content ml-auto"
      >
        <X size={16} />
        Fermer
      </button>
    </div>
  );
});

export default BarreActions;
