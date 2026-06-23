import { useState } from "react";
import { Lightbulb, ChevronDown, AlertTriangle, MapPin, Dices, LifeBuoy } from "lucide-react";

function RevelationsIndispensables({ revelations }) {
  const [indexOuvert, definirIndexOuvert] = useState(null);

  if (!revelations?.length) return null;

  return (
    <div className="border border-amber-900/40 bg-amber-950/10 p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb size={16} className="text-amber-400" />
        <h4 className="text-sm uppercase tracking-widest text-amber-300 font-semibold">
          Révélations indispensables
        </h4>
        <span className="text-xs text-content-subtle ml-auto">
          {revelations.length} révélations
        </span>
      </div>

      <div className="space-y-2">
        {revelations.map((rev, i) => {
          const estOuvert = indexOuvert === i;
          return (
            <div
              key={rev.id || i}
              className="border border-surface-border bg-surface/60"
            >
              <button
                onClick={() => definirIndexOuvert(estOuvert ? null : i)}
                aria-expanded={estOuvert}
                className="w-full flex items-center gap-3 p-3 text-left hover:bg-surface-raised/40 transition-colors"
              >
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xs font-mono text-amber-400 border border-amber-800/40 bg-amber-950/20">
                  {i + 1}
                </span>
                <span className="text-sm font-semibold text-content flex-1 min-w-0">
                  {rev.titre}
                </span>
                <ChevronDown
                  size={14}
                  className={`text-content-subtle flex-shrink-0 transition-transform ${estOuvert ? "rotate-180" : ""}`}
                />
              </button>

              {estOuvert && (
                <div className="px-3 pb-4 pt-1 space-y-3 border-t border-surface-border">
                  <p className="text-sm text-content-secondary leading-relaxed pt-2">
                    {rev.resume}
                  </p>

                  {rev.sources?.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <MapPin size={12} className="text-sky-400" />
                        <span className="text-xs uppercase tracking-wider text-sky-300 font-semibold">
                          Sources
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {rev.sources.map((source, j) => (
                          <li
                            key={j}
                            className="text-xs text-content-secondary leading-relaxed pl-3 border-l border-sky-800/30"
                          >
                            {source}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {rev.declencheur && (
                    <div className="flex items-start gap-2">
                      <Dices size={12} className="text-violet-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-violet-300 font-semibold">
                          Déclencheur :{" "}
                        </span>
                        <span className="text-xs text-content-secondary">
                          {rev.declencheur}
                        </span>
                      </div>
                    </div>
                  )}

                  {rev.plan_b && (
                    <div className="flex items-start gap-2 p-2 border border-emerald-800/30 bg-emerald-950/10">
                      <LifeBuoy size={12} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                          Plan B :{" "}
                        </span>
                        <span className="text-xs text-content-secondary leading-relaxed">
                          {rev.plan_b}
                        </span>
                      </div>
                    </div>
                  )}

                  {rev.consequence_si_ratee && (
                    <div className="flex items-start gap-2 p-2 border border-red-800/30 bg-red-950/10">
                      <AlertTriangle size={12} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-red-300 font-semibold">
                          Si ratée :{" "}
                        </span>
                        <span className="text-xs text-content-secondary leading-relaxed">
                          {rev.consequence_si_ratee}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RevelationsIndispensables;
