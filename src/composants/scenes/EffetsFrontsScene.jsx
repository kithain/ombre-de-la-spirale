import { Clock, TrendingUp, AlertTriangle } from "lucide-react";
import { obtenirEffetsFronts } from "../../data/scenarios/effetsFronts";

/**
 * Composant EffetsFrontsScene - Affiche les effets de fronts/horloges
 * qui peuvent être déclenchés par la scène courante.
 */
function EffetsFrontsScene({ scene }) {
  const id = scene?.id || scene?.titre || "";
  const effets = obtenirEffetsFronts(id);

  if (effets.length === 0) return null;

  return (
    <div className="border border-amber-900/40 bg-amber-950/10 p-3">
      <div className="flex items-center gap-2 mb-2">
        <Clock size={14} className="text-amber-400" />
        <h5 className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
          Effets sur les fronts
        </h5>
      </div>
      <div className="space-y-2">
        {effets.map((effet, i) => (
          <div
            key={`${effet.frontId}-${effet.horlogeId}-${i}`}
            className="border-l-2 border-amber-700/40 pl-3 py-1"
          >
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp size={12} className="text-amber-400 flex-shrink-0" />
              <span className="text-xs font-mono text-amber-200">
                {effet.frontId}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 border border-amber-700/50 text-amber-300 bg-amber-900/20 uppercase tracking-wide">
                {effet.effet}
              </span>
            </div>
            <p className="text-xs text-content-secondary leading-relaxed mb-1">
              <span className="text-amber-400/70 font-semibold">Déclencheur : </span>
              {effet.declencheur}
            </p>
            <p className="text-xs text-content-secondary leading-relaxed">
              <AlertTriangle size={11} className="inline text-amber-400/70 mr-1" />
              {effet.consequence}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EffetsFrontsScene;
