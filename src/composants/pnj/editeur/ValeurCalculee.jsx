import { memo } from "react";
import { Calculator } from "lucide-react";
import { cc } from "../../../utilitaires/combinerClasses";

/**
 * Composant ValeurCalculee — Affiche une valeur calculée à côté d'un champ
 * avec un bouton pour appliquer la valeur suggérée
 */
const ValeurCalculee = memo(function ValeurCalculee({ label, valeur, onAppliquer, actuelle }) {
  if (valeur === null || valeur === undefined) return null;
  const valStr = String(valeur);
  const actStr = String(actuelle ?? "");
  const estDifferent = actStr !== valStr && actStr !== "";
  const estVide = actStr === "" || actuelle === null || actuelle === undefined;

  return (
    <div className="flex items-center gap-1.5 mt-1">
      <span className={cc(
        "text-xs",
        estVide ? "text-green-400" : estDifferent ? "text-amber-400" : "text-content-subtle",
      )}>
        <Calculator size={10} className="inline mr-0.5" />
        {label} : <strong>{valStr}</strong>
      </span>
      {(estVide || estDifferent) && onAppliquer && (
        <button
          type="button"
          onClick={() => onAppliquer(valeur)}
          className="text-[10px] px-1.5 py-0.5 bg-accent-muted/40 text-accent-light border border-accent-dark/40 hover:bg-accent-muted/60 transition-colors"
          title="Appliquer cette valeur calculée"
        >
          Appliquer
        </button>
      )}
    </div>
  );
});

export default ValeurCalculee;
