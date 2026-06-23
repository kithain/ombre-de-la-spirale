import {
  BookOpen,
  Compass,
  Eye,
  HelpCircle,
  MapPin,
  Users,
  Layers,
  TrendingUp,
} from "lucide-react";

function VueEnsembleScenario({ vue }) {
  if (!vue) return null;

  return (
    <div className="space-y-6">
      {/* Ton & question dramatique */}
      <div className="border border-surface-border bg-surface-raised/50 p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-accent" />
          <h4 className="text-sm uppercase tracking-widest text-accent font-semibold">
            Vue d'ensemble
          </h4>
        </div>
        <p className="text-sm text-content-secondary italic leading-relaxed mb-4">
          {vue.tone || vue.ton}
        </p>
        <div className="flex items-start gap-2 border-t border-surface-border pt-3">
          <HelpCircle size={15} className="text-accent-muted flex-shrink-0 mt-0.5" />
          <p className="text-sm text-content font-serif leading-relaxed">
            {vue.question_dramatique}
          </p>
        </div>
      </div>

      {/* Thèmes */}
      {vue.themes?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {vue.themes.map((theme, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1.5 border border-accent-muted/30 bg-accent-surface/20 text-content-secondary italic"
            >
              {theme}
            </span>
          ))}
        </div>
      )}

      {/* Ce que les PJ savent / doivent découvrir */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vue.ce_que_les_pj_savent?.length > 0 && (
          <div className="border border-surface-border bg-surface/60 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Eye size={14} className="text-emerald-400" />
              <h5 className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                Ce que les PJ savent en entrant
              </h5>
            </div>
            <ul className="space-y-1.5">
              {vue.ce_que_les_pj_savent.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-content-secondary leading-relaxed pl-3 border-l border-emerald-700/30"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {vue.ce_que_les_pj_doivent_decouvrir?.length > 0 && (
          <div className="border border-surface-border bg-surface/60 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Compass size={14} className="text-amber-400" />
              <h5 className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
                Ce que les PJ doivent découvrir
              </h5>
            </div>
            <ul className="space-y-1.5">
              {vue.ce_que_les_pj_doivent_decouvrir.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-content-secondary leading-relaxed pl-3 border-l border-amber-700/30"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Structure des actes */}
      {((vue.structure || vue.structure_narrative)?.length > 0) && (
        <div className="border border-surface-border bg-surface/60 p-4">
          <div className="flex items-center gap-2 mb-3">
            <Layers size={14} className="text-indigo-400" />
            <h5 className="text-xs uppercase tracking-widest text-indigo-300 font-semibold">
              Structure narrative
            </h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {(vue.structure || vue.structure_narrative).map((acte, i) => (
              <div
                key={i}
                className="border border-surface-border bg-surface-raised/40 p-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-content-subtle">
                    {i + 1}/{(vue.structure || vue.structure_narrative).length}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 border border-accent-muted/30 text-accent-muted uppercase tracking-wider">
                    {acte.severite}
                  </span>
                </div>
                <h6 className="text-sm font-serif font-bold text-content mb-1">
                  {acte.acte}
                </h6>
                <p className="text-xs text-content-secondary leading-relaxed mb-2">
                  {acte.resume}
                </p>
                <span className="text-[10px] text-content-subtle font-mono">
                  {acte.scenes} scènes
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PNJ clés & Lieux clés */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {vue.pnj_cles?.length > 0 && (
          <div className="border border-surface-border bg-surface/60 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Users size={14} className="text-rose-400" />
              <h5 className="text-xs uppercase tracking-widest text-rose-300 font-semibold">
                PNJ clés
              </h5>
            </div>
            <ul className="space-y-2">
              {vue.pnj_cles.map((pnj, i) => (
                <li key={i} className="text-sm">
                  <span className="font-semibold text-content">{pnj.nom}</span>
                  <p className="text-xs text-content-secondary leading-relaxed mt-0.5">
                    {pnj.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {vue.lieux_cles?.length > 0 && (
          <div className="border border-surface-border bg-surface/60 p-4">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={14} className="text-sky-400" />
              <h5 className="text-xs uppercase tracking-widest text-sky-300 font-semibold">
                Lieux clés
              </h5>
            </div>
            <ul className="space-y-2">
              {vue.lieux_cles.map((lieu, i) => (
                <li key={i} className="text-sm">
                  <span className="font-semibold text-content">{lieu.nom}</span>
                  <p className="text-xs text-content-secondary leading-relaxed mt-0.5">
                    {lieu.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default VueEnsembleScenario;
