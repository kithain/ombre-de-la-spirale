import { memo } from "react";
import { GitCompareArrows } from "lucide-react";

/**
 * Composant IndicateurDiff — Badge montrant le nombre de modifications
 */
const IndicateurDiff = memo(function IndicateurDiff({ diff, nombreModifications }) {
  if (nombreModifications === 0) return null;

  const champsModifies = Object.keys(diff);

  return (
    <div className="bg-amber-900/20 border border-amber-700/30 p-3 space-y-2">
      <div className="flex items-center gap-2 text-amber-300 text-sm font-semibold">
        <GitCompareArrows size={14} />
        {nombreModifications} champ{nombreModifications > 1 ? "s" : ""} modifié{nombreModifications > 1 ? "s" : ""}
      </div>
      <div className="flex flex-wrap gap-1">
        {champsModifies.map((champ) => (
          <span
            key={champ}
            className="text-xs px-2 py-0.5 bg-amber-800/30 text-amber-200 border border-amber-700/40"
          >
            {champ}
          </span>
        ))}
      </div>
    </div>
  );
});

export default IndicateurDiff;
