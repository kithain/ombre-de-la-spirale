import { memo, useMemo, useCallback } from "react";
import { Plus, X, AlertTriangle } from "lucide-react";
import ComboboxFiltrable from "../../interface/ComboboxFiltrable";
import { cc } from "../../../utilitaires/combinerClasses";
import {
  DONS_TOUS,
  PREREQUIS_DONS,
  verifierPrerequis,
  calculerEmplacementsDons,
} from "../../../data/constantesDnD35";

/**
 * Composant EditeurDons — Édite les dons sous forme de tags sélectionnables
 * Stocke au format chaîne "Robustesse, Vigilance" pour compatibilité
 */
const EditeurDons = memo(function EditeurDons({ valeur, onChange, brouillon, stats }) {
  const donsParsees = useMemo(() => {
    if (!valeur || typeof valeur !== "string") return [];
    return valeur.split(",").map((s) => s.trim()).filter(Boolean);
  }, [valeur]);

  const reconstruire = useCallback((liste) => {
    onChange(liste.join(", "));
  }, [onChange]);

  const ajouterDon = useCallback((nom) => {
    if (!nom || donsParsees.includes(nom)) return;
    reconstruire([...donsParsees, nom]);
  }, [donsParsees, reconstruire]);

  const retirerDon = useCallback((index) => {
    reconstruire(donsParsees.filter((_, i) => i !== index));
  }, [donsParsees, reconstruire]);

  // Vérifier les prérequis de chaque don
  const prereqsParDon = useMemo(() => {
    if (!brouillon) return {};
    const bba = stats?.bba ?? null;
    const map = {};
    for (const don of donsParsees) {
      map[don] = verifierPrerequis(don, brouillon, bba);
    }
    return map;
  }, [donsParsees, brouillon, stats?.bba]);

  // Dons avec prérequis non satisfaits (pour les griser dans la combobox)
  const donsInaccessibles = useMemo(() => {
    if (!brouillon) return {};
    const bba = stats?.bba ?? null;
    const resultat = {};
    for (const nomDon of Object.keys(PREREQUIS_DONS)) {
      if (donsParsees.includes(nomDon)) continue;
      const { valide, manquants } = verifierPrerequis(nomDon, brouillon, bba);
      if (!valide) {
        resultat[nomDon] = `Prérequis : ${manquants.join(" · ")}`;
      }
    }
    return resultat;
  }, [brouillon, stats?.bba, donsParsees]);

  // Calculer les emplacements de dons attendus
  const emplacementsDons = useMemo(() => {
    if (!brouillon?.classe || !brouillon?.niveau) return null;
    const estHumain = (brouillon.type || "").toLowerCase().includes("humain");
    return calculerEmplacementsDons(brouillon.classe, brouillon.niveau, estHumain);
  }, [brouillon?.classe, brouillon?.niveau, brouillon?.type]);

  const donsManquants = emplacementsDons ? Math.max(0, emplacementsDons.total - donsParsees.length) : 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">
          Dons
        </label>
        {emplacementsDons && (
          <span
            className={cc(
              "text-[10px] px-1.5 py-0.5 border",
              donsManquants > 0
                ? "bg-amber-900/20 border-amber-700/40 text-amber-300"
                : donsParsees.length > emplacementsDons.total
                  ? "bg-red-900/20 border-red-700/40 text-red-300"
                  : "bg-surface/40 border-surface-border text-content-muted",
            )}
            title={emplacementsDons.detail.join("\n")}
          >
            {donsParsees.length} / {emplacementsDons.total} dons
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {donsParsees.map((don, i) => {
          const prereq = prereqsParDon[don];
          const invalide = prereq && !prereq.valide;
          return (
            <span
              key={`${don}-${i}`}
              className={cc(
                "inline-flex items-center gap-1 text-xs px-2 py-1 border",
                invalide
                  ? "bg-red-900/20 border-red-700/40 text-red-300"
                  : "bg-surface/60 border-surface-border text-content-secondary",
              )}
              title={invalide ? `Prérequis manquants : ${prereq.manquants.join(", ")}` : ""}
            >
              {invalide && <AlertTriangle size={10} className="text-red-400 flex-shrink-0" />}
              {don}
              <button
                type="button"
                onClick={() => retirerDon(i)}
                className="text-red-400 hover:text-red-300 ml-0.5"
                aria-label={`Retirer ${don}`}
              >
                <X size={10} />
              </button>
            </span>
          );
        })}
        {/* Emplacements vides pour les dons manquants */}
        {Array.from({ length: donsManquants }).map((_, i) => (
          <span
            key={`vide-${i}`}
            className="inline-flex items-center gap-1 text-xs px-2 py-1 border border-dashed border-amber-700/50 text-amber-400/70 bg-amber-900/10"
          >
            <Plus size={10} />
            Don à choisir
          </span>
        ))}
      </div>
      <ComboboxFiltrable
        placeholder="+ Ajouter un don…"
        options={DONS_TOUS}
        exclure={donsParsees}
        optionsDesactivees={donsInaccessibles}
        onSelect={ajouterDon}
      />
    </div>
  );
});

export default EditeurDons;
