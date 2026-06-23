import { useState } from "react";
import { Swords, ChevronDown, Clock, Wrench, ArrowRight } from "lucide-react";

function FrontsActifsScenario({ fronts }) {
  const [indexOuvert, definirIndexOuvert] = useState(null);

  if (!fronts?.length) return null;

  return (
    <div className="border border-violet-900/40 bg-violet-950/10 p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-4">
        <Swords size={16} className="text-violet-400" />
        <h4 className="text-sm uppercase tracking-widest text-violet-300 font-semibold">
          Fronts actifs pendant ce scénario
        </h4>
        <span className="text-xs text-content-subtle ml-auto">
          {fronts.length} fronts
        </span>
      </div>

      <div className="space-y-2">
        {fronts.map((front, i) => {
          const estOuvert = indexOuvert === i;
          return (
            <div
              key={front.id_front || i}
              className="border border-surface-border bg-surface/60"
            >
              <button
                onClick={() => definirIndexOuvert(estOuvert ? null : i)}
                aria-expanded={estOuvert}
                className="w-full flex items-center gap-3 p-3 text-left hover:bg-surface-raised/40 transition-colors"
              >
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xs font-mono text-violet-400 border border-violet-800/40 bg-violet-950/20">
                  {i + 1}
                </span>
                <span className="text-sm font-semibold text-content flex-1 min-w-0">
                  {front.nom}
                </span>
                <ChevronDown
                  size={14}
                  className={`text-content-subtle flex-shrink-0 transition-transform ${estOuvert ? "rotate-180" : ""}`}
                />
              </button>

              {estOuvert && (
                <div className="px-3 pb-4 pt-1 space-y-3 border-t border-surface-border">
                  {/* État initial */}
                  <div className="flex items-start gap-2 pt-2">
                    <Clock size={12} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                        État initial :{" "}
                      </span>
                      <span className="text-xs text-content-secondary leading-relaxed">
                        {front.etat_initial}
                      </span>
                    </div>
                  </div>

                  {/* Manifestation */}
                  <p className="text-sm text-content-secondary leading-relaxed">
                    {front.manifestation_scenarios}
                  </p>

                  {/* Interactions par scène */}
                  {front.interactions_scenes?.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <ArrowRight size={12} className="text-sky-400" />
                        <span className="text-xs uppercase tracking-wider text-sky-300 font-semibold">
                          Interactions scène par scène
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {front.interactions_scenes.map((inter, j) => (
                          <li
                            key={j}
                            className="text-xs leading-relaxed pl-3 border-l border-sky-800/30"
                          >
                            <span className="font-semibold text-content">
                              {inter.scene}
                            </span>
                            <span className="text-content-secondary">
                              {" — "}
                              {inter.interaction}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Leviers PJ */}
                  {front.leviers_pj_scenario && (
                    <div className="flex items-start gap-2 p-2 border border-emerald-800/30 bg-emerald-950/10">
                      <Wrench size={12} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                          Leviers PJ :{" "}
                        </span>
                        <span className="text-xs text-content-secondary leading-relaxed">
                          {front.leviers_pj_scenario}
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

export default FrontsActifsScenario;
