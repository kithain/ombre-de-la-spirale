import { useState } from "react";
import {
  HelpCircle,
  Users,
  MapPin,
  Clock,
  Search,
  ChevronDown,
} from "lucide-react";

function AidesJeuScenario({ aides }) {
  const [onglet, definirOnglet] = useState("indices");

  if (!aides) return null;

  const onglets = [
    { id: "indices", label: "Indices", icon: Search },
    { id: "pnj", label: "PNJ", icon: Users },
    { id: "lieux", label: "Lieux", icon: MapPin },
    { id: "chronologie", label: "Chronologie", icon: Clock },
  ];

  return (
    <div className="border border-sky-900/40 bg-sky-950/10 p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle size={16} className="text-sky-400" />
        <h4 className="text-sm uppercase tracking-widest text-sky-300 font-semibold">
          Aides de jeu
        </h4>
      </div>

      {/* Onglets */}
      <div className="flex flex-wrap gap-1 mb-4 border-b border-surface-border">
        {onglets.map((tab) => {
          const Icon = tab.icon;
          const estActif = onglet === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => definirOnglet(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-colors border-b-2 ${
                estActif
                  ? "text-sky-300 border-sky-400"
                  : "text-content-subtle border-transparent hover:text-content-muted"
              }`}
            >
              <Icon size={12} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Indices */}
      {onglet === "indices" && aides.indices_recap && (
        <div className="space-y-2">
          {aides.indices_recap.map((indice, i) => (
            <div
              key={i}
              className="border border-surface-border bg-surface/60 p-3"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-content">
                  {indice.indice}
                </span>
                <span className="text-[10px] text-content-subtle font-mono">
                  {indice.scene}
                </span>
              </div>
              <p className="text-xs text-content-secondary leading-relaxed mb-1.5">
                {indice.info}
              </p>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-1.5 py-0.5 border border-violet-800/30 bg-violet-950/20 text-violet-300">
                  {indice.jet}
                </span>
                <span className="text-content-muted italic">
                  → {indice.pointeur}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PNJ */}
      {onglet === "pnj" && aides.pnj_recap && (
        <div className="space-y-2">
          {aides.pnj_recap.map((pnj, i) => (
            <div
              key={i}
              className="border border-surface-border bg-surface/60 p-3"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-content">
                  {pnj.nom}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 border border-rose-800/30 bg-rose-950/20 text-rose-300">
                  {pnj.faction}
                </span>
              </div>
              <p className="text-xs text-content-secondary mb-1">
                <span className="text-content-subtle">Rôle : </span>
                {pnj.role_court}
              </p>
              <p className="text-xs text-content-secondary mb-1">
                <span className="text-content-subtle">Apparition : </span>
                {pnj.apparition}
              </p>
              <p className="text-xs text-content-secondary leading-relaxed mb-1">
                {pnj.info_cle}
              </p>
              <p className="text-[11px] text-violet-300">
                {pnj.dd_clés}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Lieux */}
      {onglet === "lieux" && aides.lieux_recap && (
        <div className="space-y-2">
          {aides.lieux_recap.map((lieu, i) => (
            <div
              key={i}
              className="border border-surface-border bg-surface/60 p-3"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-content">
                  {lieu.nom}
                </span>
              </div>
              <p className="text-xs text-sky-300 mb-1">{lieu.zone}</p>
              <p className="text-xs text-content-secondary italic leading-relaxed mb-1.5">
                {lieu.ambiance}
              </p>
              {lieu.scenes?.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {lieu.scenes.map((scene, j) => (
                    <span
                      key={j}
                      className="text-[10px] px-1.5 py-0.5 border border-surface-border text-content-subtle"
                    >
                      {scene}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Chronologie */}
      {onglet === "chronologie" && aides.chronologie && (
        <div className="space-y-3">
          {aides.chronologie.map((phase, i) => (
            <div
              key={i}
              className="border border-surface-border bg-surface/60 p-3"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[10px] font-mono text-amber-400 border border-amber-800/40 bg-amber-950/20">
                  {i + 1}
                </span>
                <h5 className="text-sm font-semibold text-content">
                  {phase.phase}
                </h5>
              </div>
              <ul className="space-y-1">
                {phase.evenements.map((event, j) => (
                  <li
                    key={j}
                    className="text-xs text-content-secondary leading-relaxed pl-3 border-l border-amber-700/20"
                  >
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AidesJeuScenario;
