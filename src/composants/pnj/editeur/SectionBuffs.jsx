import { memo, useMemo } from "react";
import { Zap, Plus, Trash2 } from "lucide-react";
import SectionPnj from "../sections/SectionPnj";
import { cc } from "../../../utilitaires/combinerClasses";
import { calculerBuffsSuggeres } from "../../../data/buffsDnD35";

/**
 * Composant SectionBuffs — Bonus actifs éditables + suggestions automatiques
 * Extrait de EditeurPersonnage pour SRP.
 */
const SectionBuffs = memo(function SectionBuffs({ brouillon, modifierChamp }) {
  const buffsActifs = brouillon.bonus_actifs || [];

  const nomsActifs = useMemo(
    () => buffsActifs.map((b) => b.nom),
    [buffsActifs],
  );

  const suggestions = useMemo(
    () => calculerBuffsSuggeres(brouillon).filter((s) => !nomsActifs.includes(s.nom)),
    [brouillon, nomsActifs],
  );

  return (
    <SectionPnj titre="Bonus actifs" icone={Zap}>
      <div className="space-y-3">
        {/* Buffs actifs (éditables) */}
        {buffsActifs.map((buff, i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-2 p-2 bg-emerald-900/10 border border-emerald-800/30">
            <input
              type="text"
              value={buff.nom || ""}
              onChange={(e) => {
                const nv = [...buffsActifs];
                nv[i] = { ...nv[i], nom: e.target.value };
                modifierChamp("bonus_actifs", nv);
              }}
              className="input-forge text-sm flex-1"
              placeholder="Nom du buff"
            />
            <input
              type="text"
              value={buff.effet || ""}
              onChange={(e) => {
                const nv = [...buffsActifs];
                nv[i] = { ...nv[i], effet: e.target.value };
                modifierChamp("bonus_actifs", nv);
              }}
              className="input-forge text-sm flex-[2]"
              placeholder="Effet"
            />
            <input
              type="text"
              value={buff.duree || ""}
              onChange={(e) => {
                const nv = [...buffsActifs];
                nv[i] = { ...nv[i], duree: e.target.value };
                modifierChamp("bonus_actifs", nv);
              }}
              className="input-forge text-sm w-32"
              placeholder="Durée"
            />
            <button
              type="button"
              onClick={() => {
                const nv = [...buffsActifs];
                nv.splice(i, 1);
                modifierChamp("bonus_actifs", nv);
              }}
              className="p-1 text-red-400 hover:text-red-300 self-center"
              title="Désactiver ce buff"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}

        {/* Suggestions automatiques (sorts préparés + aptitudes de classe) */}
        {suggestions.length > 0 && (
          <div className="space-y-1.5">
            <p className="text-[10px] uppercase tracking-wider text-content-muted font-semibold">
              Buffs disponibles — cliquer pour activer
            </p>
            {suggestions.map((s) => (
              <button
                key={s.nom}
                type="button"
                onClick={() => {
                  modifierChamp("bonus_actifs", [
                    ...buffsActifs,
                    { nom: s.nom, effet: s.effet, duree: s.duree },
                  ]);
                }}
                className="w-full text-left p-2 border border-dashed border-surface-border/60 bg-surface/20 hover:bg-emerald-900/15 hover:border-emerald-700/40 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Plus size={12} className="text-content-muted group-hover:text-emerald-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-content-secondary group-hover:text-emerald-300">{s.nom}</span>
                  <span className={cc(
                    "text-[9px] px-1 py-0.5 border",
                    s.source === "sort" ? "bg-blue-900/20 border-blue-800/30 text-blue-400" : "bg-amber-900/20 border-amber-800/30 text-amber-400",
                  )}>
                    {s.source === "sort" ? "Sort" : "Classe"}
                  </span>
                </div>
                <p className="text-[10px] text-content-muted mt-0.5 ml-5">{s.effet} — {s.duree}</p>
              </button>
            ))}
          </div>
        )}

        {/* Ajout manuel */}
        <button
          type="button"
          onClick={() => {
            modifierChamp("bonus_actifs", [...buffsActifs, { nom: "", effet: "", duree: "" }]);
          }}
          className="text-xs px-3 py-1.5 bg-surface border border-surface-border text-content-secondary hover:text-content hover:border-accent-muted transition-colors flex items-center gap-1"
        >
          <Plus size={12} />
          Ajouter un buff manuellement
        </button>
      </div>
    </SectionPnj>
  );
});

export default SectionBuffs;
