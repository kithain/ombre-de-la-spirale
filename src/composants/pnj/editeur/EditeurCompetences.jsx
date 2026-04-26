import { memo, useMemo, useCallback } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import ComboboxFiltrable from "../../interface/ComboboxFiltrable";
import { cc } from "../../../utilitaires/combinerClasses";
import {
  COMPETENCES,
  calculerPointsCompetences,
} from "../../../data/constantesDnD35";

/**
 * Composant EditeurCompetences — Édite les compétences sous forme nom + bonus
 * Stocke au format chaîne "Diplomatie +6, Psychologie +5" pour compatibilité
 */
const EditeurCompetences = memo(function EditeurCompetences({ valeur, onChange, brouillon, stats }) {
  const competencesParsees = useMemo(() => {
    if (!valeur || typeof valeur !== "string") return [];
    return valeur.split(",").map((s) => s.trim()).filter(Boolean).map((s) => {
      const match = s.match(/^(.+?)\s*([+-]\d+)$/);
      return match ? { nom: match[1].trim(), bonus: match[2] } : { nom: s, bonus: "+0" };
    });
  }, [valeur]);

  // Calcul des points de compétences attendus
  const pointsComp = useMemo(() => {
    if (!brouillon?.classe || !brouillon?.niveau) return null;
    return calculerPointsCompetences(brouillon.classe, brouillon.niveau, stats?.modificateurs?.int ?? 0);
  }, [brouillon?.classe, brouillon?.niveau, stats?.modificateurs?.int]);

  // Somme approximative des rangs actuels (bonus parsés)
  const rangsActuels = useMemo(() => {
    return competencesParsees.reduce((sum, c) => sum + Math.abs(parseInt(c.bonus, 10) || 0), 0);
  }, [competencesParsees]);

  const reconstruire = useCallback((liste) => {
    onChange(liste.map((c) => `${c.nom} ${c.bonus}`).join(", "));
  }, [onChange]);

  const ajouterCompetence = useCallback((nom) => {
    if (!nom) return;
    const existe = competencesParsees.some((c) => c.nom === nom);
    if (!existe) reconstruire([...competencesParsees, { nom, bonus: "+0" }]);
  }, [competencesParsees, reconstruire]);

  const modifierBonus = useCallback((index, bonus) => {
    const copie = [...competencesParsees];
    copie[index] = { ...copie[index], bonus };
    reconstruire(copie);
  }, [competencesParsees, reconstruire]);

  const retirerCompetence = useCallback((index) => {
    reconstruire(competencesParsees.filter((_, i) => i !== index));
  }, [competencesParsees, reconstruire]);

  const nomsUtilises = competencesParsees.map((c) => c.nom);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">
          Compétences
        </label>
        {pointsComp && (() => {
          const restants = pointsComp.total - rangsActuels;
          return (
            <span className={cc(
              "text-[10px] px-1.5 py-0.5 border",
              rangsActuels > pointsComp.total
                ? "bg-red-900/20 border-red-700/40 text-red-300"
                : restants > 0
                  ? "bg-amber-900/20 border-amber-700/40 text-amber-300"
                  : "bg-surface/40 border-surface-border text-content-muted",
            )}>
              ~{rangsActuels} / {pointsComp.total} rangs ({pointsComp.parNiveau}/niv)
              {restants > 0 && ` — ${restants} à allouer`}
            </span>
          );
        })()}
      </div>
      {competencesParsees.length > 0 && (
        <div className="space-y-1">
          {competencesParsees.map((comp, i) => {
            const val = parseInt(comp.bonus, 10) || 0;
            return (
              <div key={`${comp.nom}-${i}`} className="flex items-center gap-2">
                <span className="text-sm text-content-secondary flex-1 truncate">{comp.nom}</span>
                <div className="inline-flex items-center border border-surface-border">
                  <button
                    type="button"
                    onClick={() => modifierBonus(i, `+${val - 1}`)}
                    className="px-1.5 py-0.5 text-content-muted hover:text-red-300 hover:bg-red-900/20 transition-colors"
                    aria-label={`Diminuer ${comp.nom}`}
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-10 text-center text-sm font-mono text-content select-none bg-surface/40">
                    {val >= 0 ? `+${val}` : val}
                  </span>
                  <button
                    type="button"
                    onClick={() => modifierBonus(i, `+${val + 1}`)}
                    className="px-1.5 py-0.5 text-content-muted hover:text-emerald-300 hover:bg-emerald-900/20 transition-colors"
                    aria-label={`Augmenter ${comp.nom}`}
                  >
                    <Plus size={12} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => retirerCompetence(i)}
                  className="p-1 text-red-400 hover:text-red-300"
                  aria-label={`Retirer ${comp.nom}`}
                >
                  <Trash2 size={12} />
                </button>
              </div>
            );
          })}
        </div>
      )}
      <ComboboxFiltrable
        placeholder="+ Ajouter une compétence…"
        options={COMPETENCES.map((c) => ({ value: c.nom, label: `${c.nom} (${c.carac})` }))}
        exclure={nomsUtilises}
        onSelect={ajouterCompetence}
      />
    </div>
  );
});

export default EditeurCompetences;
