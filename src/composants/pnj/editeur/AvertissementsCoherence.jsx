import { memo } from "react";
import { AlertTriangle } from "lucide-react";

/**
 * AvertissementsCoherence — Liste des avertissements de cohérence D&D 3.5
 * @param {{ avertissements: object }} props
 */
const AvertissementsCoherence = memo(function AvertissementsCoherence({ avertissements }) {
  if (!avertissements || Object.keys(avertissements).length === 0) return null;

  return (
    <div className="space-y-1">
      {Object.entries(avertissements).map(([cle, msg]) => (
        <div key={cle} className="flex items-start gap-2 p-2.5 bg-amber-900/15 border border-amber-700/30 text-amber-300 text-xs">
          <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
          <span>{msg}</span>
        </div>
      ))}
    </div>
  );
});

export default AvertissementsCoherence;
