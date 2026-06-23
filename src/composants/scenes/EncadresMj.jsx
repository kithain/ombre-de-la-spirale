import { useState } from "react";
import { AlertOctagon, ChevronDown, X, Check } from "lucide-react";

function EncadresMj({ encadres }) {
  const [indexOuvert, definirIndexOuvert] = useState(null);

  if (!encadres?.length) return null;

  return (
    <div className="border border-red-900/40 bg-red-950/10 p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-4">
        <AlertOctagon size={16} className="text-red-400" />
        <h4 className="text-sm uppercase tracking-widest text-red-300 font-semibold">
          Encadrés MJ — Que faire si…
        </h4>
        <span className="text-xs text-content-subtle ml-auto">
          {encadres.length} situations
        </span>
      </div>

      <div className="space-y-2">
        {encadres.map((enc, i) => {
          const estOuvert = indexOuvert === i;
          return (
            <div
              key={enc.id || i}
              className="border border-surface-border bg-surface/60"
            >
              <button
                onClick={() => definirIndexOuvert(estOuvert ? null : i)}
                aria-expanded={estOuvert}
                className="w-full flex items-center gap-3 p-3 text-left hover:bg-surface-raised/40 transition-colors"
              >
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xs font-mono text-red-400 border border-red-800/40 bg-red-950/20">
                  {i + 1}
                </span>
                <span className="text-sm font-semibold text-content flex-1 min-w-0">
                  {enc.titre}
                </span>
                <ChevronDown
                  size={14}
                  className={`text-content-subtle flex-shrink-0 transition-transform ${estOuvert ? "rotate-180" : ""}`}
                />
              </button>

              {estOuvert && (
                <div className="px-3 pb-4 pt-1 space-y-3 border-t border-surface-border">
                  {/* Situation */}
                  <div className="pt-2">
                    <span className="text-xs uppercase tracking-wider text-content-subtle font-semibold">
                      Situation :{" "}
                    </span>
                    <span className="text-xs text-content-secondary leading-relaxed">
                      {enc.situation}
                    </span>
                  </div>

                  {/* Principe */}
                  <div className="p-2 border border-amber-800/30 bg-amber-950/10">
                    <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                      Principe :{" "}
                    </span>
                    <span className="text-xs text-content-secondary leading-relaxed">
                      {enc.principe}
                    </span>
                  </div>

                  {/* Procédure */}
                  {enc.proceder?.length > 0 && (
                    <div>
                      <span className="text-xs uppercase tracking-wider text-sky-300 font-semibold block mb-2">
                        Comment procéder
                      </span>
                      <ol className="space-y-2">
                        {enc.proceder.map((step, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2"
                          >
                            <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[10px] font-mono text-sky-400 border border-sky-800/40 bg-sky-950/20 mt-0.5">
                              {j + 1}
                            </span>
                            <div>
                              <span className="text-xs font-semibold text-content">
                                {step.etape}
                              </span>
                              <p className="text-xs text-content-secondary leading-relaxed mt-0.5">
                                {step.detail}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* À ne pas faire */}
                  {enc.a_ne_pas_faire && (
                    <div className="flex items-start gap-2 p-2 border border-red-800/30 bg-red-950/10">
                      <X size={12} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs uppercase tracking-wider text-red-300 font-semibold">
                          À ne pas faire :{" "}
                        </span>
                        <span className="text-xs text-content-secondary leading-relaxed">
                          {enc.a_ne_pas_faire}
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

export default EncadresMj;
