import { useState } from "react";
import {
  HelpCircle,
  Users,
  MapPin,
  Clock,
  Search,
  ChevronDown,
  Package,
  Shield,
  Eye,
  GitBranch,
  AlertCircle,
} from "lucide-react";

function AidesJeuScenario({ aides }) {
  const [onglet, definirOnglet] = useState("indices");

  if (!aides) return null;

  const ongletsBase = [
    { id: "indices", label: "Indices", icon: Search },
    { id: "pnj", label: "PNJ", icon: Users },
    { id: "lieux", label: "Lieux", icon: MapPin },
    { id: "chronologie", label: "Chronologie", icon: Clock },
  ];
  const ongletsSupp = [
    { id: "preuves", label: "Preuves", icon: Package },
    { id: "allies", label: "Alliés", icon: Shield },
    { id: "symptomes", label: "Symptômes", icon: Eye },
    { id: "consequences", label: "Choix", icon: GitBranch },
    { id: "fils", label: "Fils ouverts", icon: AlertCircle },
  ];
  const onglets = [
    ...ongletsBase,
    ...ongletsSupp.filter((t) => {
      if (t.id === "preuves") return !!aides.preuves_transportables;
      if (t.id === "allies") return !!aides.pnj_allies;
      if (t.id === "symptomes") return !!aides.symptomes_fronts;
      if (t.id === "consequences") return !!aides.consequences_choix;
      if (t.id === "fils") return !!aides.fils_non_resolus;
      return false;
    }),
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

      {/* Preuves transportables */}
      {onglet === "preuves" && aides.preuves_transportables && (
        <div className="space-y-2">
          {aides.preuves_transportables.map((preuve, i) => (
            <div
              key={i}
              className="border border-surface-border bg-surface/60 p-3"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-content">
                  {preuve.objet}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 border border-emerald-800/30 bg-emerald-950/20 text-emerald-300">
                  {preuve.type}
                </span>
              </div>
              <p className="text-[10px] text-content-subtle font-mono mb-1">
                {preuve.scene}
              </p>
              <p className="text-xs text-content-secondary leading-relaxed mb-1.5">
                {preuve.description}
              </p>
              <p className="text-[11px] text-amber-300">
                → {preuve.utilisable_pour}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* PNJ alliés mobilisables */}
      {onglet === "allies" && aides.pnj_allies && (
        <div className="space-y-2">
          {aides.pnj_allies.map((allie, i) => (
            <div
              key={i}
              className="border border-surface-border bg-surface/60 p-3"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-content">
                  {allie.nom}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 border border-sky-800/30 bg-sky-950/20 text-sky-300">
                  {allie.lieu}
                </span>
              </div>
              <p className="text-xs text-content-secondary mb-1">
                <span className="text-content-subtle">Dispo : </span>
                {allie.disponibilite}
              </p>
              <p className="text-xs text-content-secondary leading-relaxed mb-1">
                {allie.apporte}
              </p>
              <p className="text-[11px] text-emerald-300">
                ⚔ {allie.mobilisable}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Symptômes des fronts */}
      {onglet === "symptomes" && aides.symptomes_fronts && (
        <div className="space-y-3">
          {aides.symptomes_fronts.map((front, i) => (
            <div
              key={i}
              className="border border-surface-border bg-surface/60 p-3"
            >
              <h5 className="text-sm font-semibold text-rose-300 mb-2">
                {front.front}
              </h5>
              <ul className="space-y-1">
                {front.symptomes.map((symptome, j) => (
                  <li
                    key={j}
                    className="text-xs text-content-secondary leading-relaxed pl-3 border-l border-rose-700/20"
                  >
                    <span className="text-rose-400 font-mono text-[10px]">
                      {symptome.etape}
                    </span>{" "}
                    — {symptome.signe}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Conséquences des choix */}
      {onglet === "consequences" && aides.consequences_choix && (
        <div className="space-y-2">
          {aides.consequences_choix.map((choix, i) => (
            <div
              key={i}
              className="border border-surface-border bg-surface/60 p-3"
            >
              <h5 className="text-sm font-semibold text-violet-300 mb-2">
                {choix.choix}
              </h5>
              <p className="text-xs text-content-secondary mb-1">
                <span className="text-content-subtle">Immédiat : </span>
                {choix.consequence_immediate}
              </p>
              <p className="text-xs text-content-secondary mb-1">
                <span className="text-content-subtle">Long terme : </span>
                {choix.consequence_long_terme}
              </p>
              <p className="text-[11px] text-amber-300">
                ⚡ {choix.impact_front}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Fils non résolus */}
      {onglet === "fils" && aides.fils_non_resolus && (
        <div className="space-y-3">
          {aides.fils_non_resolus.map((fil, i) => (
            <div
              key={i}
              className="border border-surface-border bg-surface/60 p-3"
            >
              <h5 className="text-sm font-semibold text-amber-300 mb-2">
                {fil.fil}
              </h5>
              <ul className="space-y-1 mb-2">
                {fil.pistes.map((piste, j) => (
                  <li
                    key={j}
                    className="text-xs text-content-secondary leading-relaxed pl-3 border-l border-amber-700/20"
                  >
                    {piste}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-content-subtle italic">
                {fil.note_mj}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AidesJeuScenario;
