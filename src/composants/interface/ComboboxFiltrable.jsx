import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { cc } from "../../utilitaires/combinerClasses";

/**
 * ComboboxFiltrable — Menu déroulant avec recherche intégrée
 *
 * Supporte :
 * - Options plates (string[])
 * - Options groupées ({ groupe: string, options: string[] }[])
 * - Options objets ({ code/value: string, label: string }[])
 * - Filtrage en temps réel
 * - Navigation clavier (↑↓ Enter Escape)
 *
 * @param {object} props
 * @param {string} props.placeholder - Texte du placeholder
 * @param {Array} props.options - Options plates ou groupées
 * @param {function} props.onSelect - Callback quand une option est sélectionnée
 * @param {string[]} [props.exclure] - Valeurs à exclure de la liste
 * @param {Object<string,string>} [props.optionsDesactivees] - Map valeur → raison : options affichées grisées, non sélectionnables
 * @param {string} [props.className] - Classes CSS additionnelles
 */
export default function ComboboxFiltrable({
  placeholder = "Rechercher…",
  options,
  onSelect,
  exclure = [],
  optionsDesactivees = {},
  className = "",
}) {
  const [ouvert, setOuvert] = useState(false);
  const [filtre, setFiltre] = useState("");
  const [indexActif, setIndexActif] = useState(-1);
  const refInput = useRef(null);
  const refListe = useRef(null);
  const refConteneur = useRef(null);

  // Normaliser les options en liste plate { value, label, groupe? }
  const optionsNormalisees = useMemo(() => {
    const result = [];
    if (!options || options.length === 0) return result;

    const premier = options[0];
    // Format groupé : { groupe: string, options: string[] }
    const estGroupe = typeof premier === "object" && premier.groupe && Array.isArray(premier.options);

    if (estGroupe) {
      for (const g of options) {
        for (const opt of g.options) {
          const val = typeof opt === "object" ? (opt.code || opt.value) : opt;
          const lab = typeof opt === "object" ? opt.label : opt;
          if (!exclure.includes(val)) {
            result.push({ value: val, label: lab, groupe: g.groupe });
          }
        }
      }
    } else {
      for (const opt of options) {
        const val = typeof opt === "object" ? (opt.code || opt.value) : opt;
        const lab = typeof opt === "object" ? opt.label : opt;
        const grp = typeof opt === "object" ? (opt.groupe || null) : null;
        if (!exclure.includes(val)) {
          result.push({ value: val, label: lab, groupe: grp });
        }
      }
    }
    return result;
  }, [options, exclure]);

  // Filtrer selon la saisie
  const optionsFiltrees = useMemo(() => {
    if (!filtre.trim()) return optionsNormalisees;
    const terme = filtre.toLowerCase().trim();
    return optionsNormalisees.filter(
      (o) => o.label.toLowerCase().includes(terme) || (o.groupe && o.groupe.toLowerCase().includes(terme))
    );
  }, [optionsNormalisees, filtre]);

  // Regrouper pour l'affichage
  const groupes = useMemo(() => {
    const map = new Map();
    for (const opt of optionsFiltrees) {
      const key = opt.groupe || "";
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(opt);
    }
    return map;
  }, [optionsFiltrees]);

  const selectionner = useCallback((val) => {
    onSelect(val);
    setFiltre("");
    setOuvert(false);
    setIndexActif(-1);
  }, [onSelect]);

  // Fermer au clic extérieur
  useEffect(() => {
    if (!ouvert) return;
    const handler = (e) => {
      if (refConteneur.current && !refConteneur.current.contains(e.target)) {
        setOuvert(false);
        setFiltre("");
        setIndexActif(-1);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ouvert]);

  // Focus l'input quand on ouvre
  useEffect(() => {
    if (ouvert && refInput.current) {
      refInput.current.focus();
    }
  }, [ouvert]);

  // Scroll l'élément actif en vue
  useEffect(() => {
    if (indexActif >= 0 && refListe.current) {
      const el = refListe.current.querySelector(`[data-index="${indexActif}"]`);
      if (el) el.scrollIntoView({ block: "nearest" });
    }
  }, [indexActif]);

  const gererClavier = useCallback((e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndexActif((prev) => Math.min(prev + 1, optionsFiltrees.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndexActif((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (indexActif >= 0 && indexActif < optionsFiltrees.length) {
        const opt = optionsFiltrees[indexActif];
        if (!optionsDesactivees[opt.value]) selectionner(opt.value);
      }
    } else if (e.key === "Escape") {
      setOuvert(false);
      setFiltre("");
      setIndexActif(-1);
    }
  }, [optionsFiltrees, indexActif, selectionner]);

  return (
    <div ref={refConteneur} className={cc("relative", className)}>
      {/* Bouton d'ouverture */}
      <button
        type="button"
        onClick={() => setOuvert(!ouvert)}
        className="input-forge w-full text-content bg-surface text-sm pr-8 appearance-none text-left flex items-center gap-2"
      >
        <Search size={12} className="text-content-muted flex-shrink-0" />
        <span className="text-content-muted truncate">{placeholder}</span>
        <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-content-muted" />
      </button>

      {/* Dropdown */}
      {ouvert && (
        <div className="absolute z-50 mt-1 w-full bg-surface-raised border border-surface-border shadow-xl max-h-64 flex flex-col">
          {/* Champ de recherche */}
          <div className="flex items-center gap-2 p-2 border-b border-surface-border">
            <Search size={14} className="text-content-muted flex-shrink-0" />
            <input
              ref={refInput}
              type="text"
              value={filtre}
              onChange={(e) => { setFiltre(e.target.value); setIndexActif(0); }}
              onKeyDown={gererClavier}
              placeholder="Filtrer…"
              className="flex-1 bg-transparent text-content text-sm outline-none placeholder:text-content-muted/50"
            />
            {filtre && (
              <button
                type="button"
                onClick={() => { setFiltre(""); setIndexActif(-1); }}
                className="text-content-muted hover:text-content"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Liste des résultats */}
          <div ref={refListe} className="overflow-y-auto flex-1">
            {optionsFiltrees.length === 0 ? (
              <p className="text-xs text-content-muted p-3 text-center">Aucun résultat</p>
            ) : (
              Array.from(groupes.entries()).map(([grp, opts]) => (
                <div key={grp || "__nogroup"}>
                  {grp && (
                    <p className="text-[10px] uppercase tracking-wider text-content-muted font-semibold px-3 py-1.5 bg-surface/50 sticky top-0">
                      {grp}
                    </p>
                  )}
                  {opts.map((opt) => {
                    const idx = optionsFiltrees.indexOf(opt);
                    const raisonDesac = optionsDesactivees[opt.value];
                    const desactive = !!raisonDesac;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        data-index={idx}
                        onClick={desactive ? undefined : () => selectionner(opt.value)}
                        onMouseEnter={() => !desactive && setIndexActif(idx)}
                        title={desactive ? raisonDesac : undefined}
                        className={cc(
                          "w-full text-left px-3 py-1.5 text-sm transition-colors",
                          desactive
                            ? "opacity-40 cursor-not-allowed text-content-muted"
                            : idx === indexActif
                              ? "bg-accent-muted/30 text-accent-light"
                              : "text-content-secondary hover:bg-surface/40",
                        )}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>

          {/* Compteur */}
          <div className="text-[10px] text-content-muted px-3 py-1 border-t border-surface-border bg-surface/30">
            {optionsFiltrees.length} / {optionsNormalisees.length} résultats
          </div>
        </div>
      )}
    </div>
  );
}
