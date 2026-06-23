import { useState } from "react";
import {
  ListTree,
  ChevronDown,
  Lock,
  Shuffle,
  Circle,
  ArrowRight,
  Sparkles,
  Lightbulb,
} from "lucide-react";

const STATUT_CONFIG = {
  obligatoire: {
    icon: Lock,
    label: "Obligatoire",
    couleur: "text-red-300 border-red-800/40 bg-red-950/20",
  },
  obligatoire_flexible: {
    icon: Shuffle,
    label: "Obligatoire flexible",
    couleur: "text-amber-300 border-amber-800/40 bg-amber-950/20",
  },
  optionnel: {
    icon: Circle,
    label: "Optionnel",
    couleur: "text-emerald-300 border-emerald-800/40 bg-emerald-950/20",
  },
};

function ScenesStructure({ structure }) {
  const [showOptionnelles, setShowOptionnelles] = useState(false);

  if (!structure) return null;

  return (
    <div className="border border-surface-border bg-surface/60 p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-4">
        <ListTree size={16} className="text-sky-400" />
        <h4 className="text-sm uppercase tracking-widest text-sky-300 font-semibold">
          Structure des scènes
        </h4>
      </div>

      {/* Légende */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(structure.legende || {}).map(([key, desc]) => {
          const cfg = STATUT_CONFIG[key];
          if (!cfg) return null;
          const Icon = cfg.icon;
          return (
            <span
              key={key}
              className={`text-[10px] px-2 py-1 border ${cfg.couleur} flex items-center gap-1.5`}
              title={desc}
            >
              <Icon size={10} />
              {cfg.label}
            </span>
          );
        })}
      </div>

      {/* Scènes principales */}
      <div className="space-y-2">
        {(structure.scenes || []).map((scene, i) => {
          const cfg = STATUT_CONFIG[scene.statut] || STATUT_CONFIG.optionnel;
          const Icon = cfg.icon;
          return (
            <div
              key={i}
              className="border border-surface-border bg-surface-raised/30 p-3"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-xs font-mono text-content-subtle border border-surface-border bg-surface">
                  {scene.ordre}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h5 className="text-sm font-semibold text-content">
                      {scene.titre}
                    </h5>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 border ${cfg.couleur} flex items-center gap-1`}
                    >
                      <Icon size={9} />
                      {cfg.label}
                    </span>
                    <span className="text-[10px] text-content-subtle font-mono">
                      {scene.acte}
                    </span>
                  </div>

                  {scene.revele?.length > 0 && (
                    <div className="flex items-start gap-1.5 mb-1.5">
                      <Sparkles size={11} className="text-violet-400 flex-shrink-0 mt-0.5" />
                      <div className="flex flex-wrap gap-1">
                        {scene.revele.map((rev, j) => (
                          <span
                            key={j}
                            className="text-[11px] text-content-secondary px-1.5 py-0.5 bg-violet-950/20 border border-violet-800/20"
                          >
                            {rev}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {scene.dependances?.length > 0 && (
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <ArrowRight size={11} className="text-content-subtle flex-shrink-0" />
                      <span className="text-[11px] text-content-subtle">
                        Dépend de : {scene.dependances.join(", ")}
                      </span>
                    </div>
                  )}

                  {scene.flexible && (
                    <p className="text-xs text-content-muted italic leading-relaxed mt-1">
                      {scene.flexible}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scènes optionnelles */}
      {structure.scenes_optionnelles?.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setShowOptionnelles((v) => !v)}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-300 font-semibold hover:text-emerald-200 transition-colors"
          >
            <ChevronDown
              size={14}
              className={`transition-transform ${showOptionnelles ? "rotate-180" : ""}`}
            />
            Scènes optionnelles ({structure.scenes_optionnelles.length})
          </button>

          {showOptionnelles && (
            <div className="mt-2 space-y-2">
              {structure.scenes_optionnelles.map((scene, i) => (
                <div
                  key={i}
                  className="border border-emerald-800/20 bg-emerald-950/5 p-3"
                >
                  <h5 className="text-sm font-semibold text-content mb-1">
                    {scene.titre}
                  </h5>
                  <p className="text-xs text-content-secondary leading-relaxed mb-2">
                    {scene.description}
                  </p>
                  {scene.declencheur && (
                    <p className="text-[11px] text-content-muted">
                      <span className="text-emerald-400 font-semibold">
                        Déclencheur :{" "}
                      </span>
                      {scene.declencheur}
                    </p>
                  )}
                  {scene.apport && (
                    <p className="text-[11px] text-content-muted mt-0.5">
                      <span className="text-violet-400 font-semibold">
                        Apport :{" "}
                      </span>
                      {scene.apport}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ScenesStructure;
