/**
 * Composants de formulaire réutilisables pour l'éditeur de PNJ.
 *
 * Extraits d'EditeurPersonnage.jsx pour respecter le principe SRP (Single Responsibility).
 * Chaque composant gère un type d'input spécifique avec le style « forge ».
 */
import { memo, useCallback, useId } from "react";
import { AlertTriangle, ChevronDown, X, Plus, Trash2 } from "lucide-react";
import { cc } from "../../utilitaires/combinerClasses";

// ─── Composants internes mutualisés (non exportés) ───────────────────────

function AffichageErreur({ erreur }) {
  if (!erreur) return null;
  return (
    <p className="text-xs text-red-400 flex items-center gap-1">
      <AlertTriangle size={12} />
      {erreur}
    </p>
  );
}

function LabelChamp({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs uppercase tracking-wider text-content-muted font-semibold"
    >
      {children}
    </label>
  );
}

// ─── Composants exportés ──────────────────────────────────────────────

/**
 * ChampTexte — Input texte/number stylisé forge
 */
export const ChampTexte = memo(function ChampTexte({
  etiquette, valeur, onChange, erreur, type = "text", placeholder = "", disabled = false
}) {
  const id = useId();
  const gererChangement = useCallback(
    (e) => onChange(
      type === "number"
        ? (e.target.value === "" ? null : Number(e.target.value))
        : e.target.value
    ),
    [onChange, type],
  );

  return (
    <div className="space-y-1">
      <LabelChamp htmlFor={id}>{etiquette}</LabelChamp>
      <input
        id={id}
        type={type}
        value={valeur ?? ""}
        onChange={gererChangement}
        placeholder={placeholder}
        disabled={disabled}
        className={cc(
          "input-forge w-full text-content",
          erreur && "!border-red-500/70 !shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),0_0_10px_rgba(239,68,68,0.2)]",
          disabled && "opacity-50 cursor-not-allowed",
        )}
      />
      <AffichageErreur erreur={erreur} />
    </div>
  );
});

/**
 * ChampSelection — Select stylisé forge
 * Supporte les options simples (string[]) ou groupées ({ groupe, options }[])
 */
export const ChampSelection = memo(function ChampSelection({
  etiquette, valeur, onChange, options, erreur, placeholder = "— Choisir —"
}) {
  const id = useId();
  const estGroupe = options.length > 0 && typeof options[0] === "object" && options[0].groupe;
  const gererChangement = useCallback((e) => onChange(e.target.value), [onChange]);

  return (
    <div className="space-y-1">
      <LabelChamp htmlFor={id}>{etiquette}</LabelChamp>
      <div className="relative">
        <select
          id={id}
          value={valeur ?? ""}
          onChange={gererChangement}
          className="input-forge w-full text-content bg-surface pr-8 appearance-none"
        >
          <option value="">{placeholder}</option>
          {estGroupe
            ? options.map((g) => (
                <optgroup key={g.groupe} label={g.groupe}>
                  {g.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </optgroup>
              ))
            : options.map((opt) => {
                const val = typeof opt === "object" ? opt.code || opt.value : opt;
                const label = typeof opt === "object" ? opt.label : opt;
                return <option key={val} value={val}>{label}</option>;
              })
          }
        </select>
        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-content-muted pointer-events-none" />
      </div>
      <AffichageErreur erreur={erreur} />
    </div>
  );
});

/**
 * SelecteurMultiple — Sélection de plusieurs valeurs depuis une liste officielle.
 * Affiche les éléments sélectionnés comme des tags et un menu déroulant pour en ajouter.
 */
export const SelecteurMultiple = memo(function SelecteurMultiple({
  etiquette, valeurs, onChange, optionsGroupees, optionsPlates, placeholder = "Ajouter…"
}) {
  const id = useId();
  const liste = valeurs || [];

  const ajouter = useCallback((val) => {
    if (val && !liste.includes(val)) onChange([...liste, val]);
  }, [liste, onChange]);

  const retirer = useCallback((index) => {
    onChange(liste.filter((_, i) => i !== index));
  }, [liste, onChange]);

  const gererAjout = useCallback(
    (e) => { ajouter(e.target.value); e.target.value = ""; },
    [ajouter],
  );

  const estGroupe = optionsGroupees && optionsGroupees.length > 0;

  return (
    <div className="space-y-2">
      <LabelChamp htmlFor={id}>{etiquette}</LabelChamp>
      {liste.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {liste.map((val, i) => (
            <span
              key={`${val}-${i}`}
              className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-surface/60 border border-surface-border text-content-secondary"
            >
              {val}
              <button
                type="button"
                onClick={() => retirer(i)}
                className="text-red-400 hover:text-red-300 ml-0.5"
                aria-label={`Retirer ${val}`}
              >
                <X size={10} />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="relative">
        <select
          id={id}
          value=""
          onChange={gererAjout}
          className="input-forge w-full text-content bg-surface text-sm pr-8 appearance-none"
        >
          <option value="">{placeholder}</option>
          {estGroupe
            ? optionsGroupees.map((g) => (
                <optgroup key={g.groupe} label={g.groupe}>
                  {g.options
                    .filter((o) => !liste.includes(o))
                    .map((o) => <option key={o} value={o}>{o}</option>)
                  }
                </optgroup>
              ))
            : (optionsPlates || []).filter((o) => !liste.includes(o)).map((o) => (
                <option key={o} value={o}>{o}</option>
              ))
          }
        </select>
        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-content-muted pointer-events-none" />
      </div>
    </div>
  );
});

/**
 * ChampTextArea — Textarea stylisé forge
 */
export const ChampTextArea = memo(function ChampTextArea({
  etiquette, valeur, onChange, lignes = 3, placeholder = ""
}) {
  const id = useId();
  const gererChangement = useCallback((e) => onChange(e.target.value), [onChange]);

  return (
    <div className="space-y-1">
      <LabelChamp htmlFor={id}>{etiquette}</LabelChamp>
      <textarea
        id={id}
        value={valeur ?? ""}
        onChange={gererChangement}
        rows={lignes}
        placeholder={placeholder}
        className="input-forge w-full text-content resize-y"
      />
    </div>
  );
});

/**
 * ListeEditable — Liste de chaînes éditable avec ajout/suppression
 */
export const ListeEditable = memo(function ListeEditable({
  etiquette, elements, onModifier, onAjouter, onSupprimer, placeholder = ""
}) {
  const gererAjout = useCallback(() => onAjouter(""), [onAjouter]);

  return (
    <div className="space-y-2">
      <LabelChamp>{etiquette}</LabelChamp>
      {(elements || []).map((element, index) => (
        <div key={index} className="flex gap-2 items-start">
          <textarea
            value={typeof element === "string" ? element : JSON.stringify(element)}
            onChange={(e) => onModifier(index, e.target.value)}
            rows={2}
            className="input-forge flex-1 text-content text-sm resize-y"
            placeholder={placeholder}
          />
          <button
            type="button"
            onClick={() => onSupprimer(index)}
            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 border border-surface-border transition-colors flex-shrink-0"
            aria-label="Supprimer"
          >
            <Trash2 size={14} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={gererAjout}
        className="flex items-center gap-1 text-xs text-accent-light hover:text-accent transition-colors px-2 py-1 border border-dashed border-surface-border hover:border-accent-dark"
      >
        <Plus size={12} />
        Ajouter
      </button>
    </div>
  );
});
