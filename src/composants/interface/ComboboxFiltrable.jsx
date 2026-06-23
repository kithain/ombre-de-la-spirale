import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { cc } from "../../utilitaires/combinerClasses";

/**
 * ComboboxFiltrable — Menu déroulant avec recherche intégrée
 *
 * Supporte :
 * - Options plates (string[])
 * - Options groupées ({ groupe: string, options: string[] }[])
 * - Options objets ({ code/valeur: string, etiquette: string }[])
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
  const [ouvert, definirOuvert] = useState(false);
  const [filtre, definirFiltre] = useState("");
  const [indexActif, definirIndexActif] = useState(-1);
  const referenceEntree = useRef(null);
  const referenceListe = useRef(null);
  const referenceConteneur = useRef(null);

  // Normaliser les options en liste plate { valeur, etiquette, groupe? }
  const optionsNormalisees = useMemo(() => {
    const resultat = [];
    if (!options || options.length === 0) return resultat;

    const premier = options[0];
    // Format groupé : { groupe: string, options: string[] }
    const estGroupe = typeof premier === "object" && premier.groupe && Array.isArray(premier.options);

    if (estGroupe) {
      for (const g of options) {
        for (const option of g.options) {
          const valeur = typeof option === "object" ? (option.code || option.valeur) : option;
          const etiquette = typeof option === "object" ? option.etiquette : option;
          if (!exclure.includes(valeur)) {
            resultat.push({ valeur: valeur, etiquette: etiquette, groupe: g.groupe });
          }
        }
      }
    } else {
      for (const option of options) {
        const valeur = typeof option === "object" ? (option.code || option.valeur) : option;
        const etiquette = typeof option === "object" ? option.etiquette : option;
        const grp = typeof option === "object" ? (option.groupe || null) : null;
        if (!exclure.includes(valeur)) {
          resultat.push({ valeur: valeur, etiquette: etiquette, groupe: grp });
        }
      }
    }
    return resultat;
  }, [options, exclure]);

  // Filtrer selon la saisie
  const optionsFiltrees = useMemo(() => {
    if (!filtre.trim()) return optionsNormalisees;
    const terme = filtre.toLowerCase().trim();
    return optionsNormalisees.filter(
      (o) => o.etiquette.toLowerCase().includes(terme) || (o.groupe && o.groupe.toLowerCase().includes(terme))
    );
  }, [optionsNormalisees, filtre]);

  // Regrouper pour l'affichage
  const groupes = useMemo(() => {
    const carte = new Map();
    for (const option of optionsFiltrees) {
      const cle = option.groupe || "";
      if (!carte.has(cle)) carte.set(cle, []);
      carte.get(cle).push(option);
    }
    return carte;
  }, [optionsFiltrees]);

  const selectionner = useCallback((valeur) => {
    onSelect(valeur);
    definirFiltre("");
    definirOuvert(false);
    definirIndexActif(-1);
  }, [onSelect]);

  // Fermer au clic extérieur
  useEffect(() => {
    if (!ouvert) return;
    const gestionnaire = (e) => {
      if (referenceConteneur.current && !referenceConteneur.current.contains(e.target)) {
        definirOuvert(false);
        definirFiltre("");
        definirIndexActif(-1);
      }
    };
    document.addEventListener("mousedown", gestionnaire);
    return () => document.removeEventListener("mousedown", gestionnaire);
  }, [ouvert]);

  // Focus l'input quand on ouvre
  useEffect(() => {
    if (ouvert && referenceEntree.current) {
      referenceEntree.current.focus();
    }
  }, [ouvert]);

  // Scroll l'élément actif en vue
  useEffect(() => {
    if (indexActif >= 0 && referenceListe.current) {
      const element = referenceListe.current.querySelector(`[data-index="${indexActif}"]`);
      if (element) element.scrollIntoView({ block: "nearest" });
    }
  }, [indexActif]);

  const gererClavier = useCallback((e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      definirIndexActif((precedent) => Math.min(precedent + 1, optionsFiltrees.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      definirIndexActif((precedent) => Math.max(precedent - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (indexActif >= 0 && indexActif < optionsFiltrees.length) {
        const option = optionsFiltrees[indexActif];
        if (!optionsDesactivees[option.valeur]) selectionner(option.valeur);
      }
    } else if (e.key === "Escape") {
      definirOuvert(false);
      definirFiltre("");
      definirIndexActif(-1);
    }
  }, [optionsFiltrees, indexActif, optionsDesactivees, selectionner]);

  return (
    <div ref={referenceConteneur} className={cc("relative", className)}>
      {/* Bouton d'ouverture */}
      <button
        type="button"
        onClick={() => definirOuvert(!ouvert)}
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
              ref={referenceEntree}
              type="text"
              value={filtre}
              onChange={(e) => { definirFiltre(e.target.value); definirIndexActif(0); }}
              onKeyDown={gererClavier}
              placeholder="Filtrer…"
              className="flex-1 bg-transparent text-content text-sm outline-none placeholder:text-content-muted/50"
            />
            {filtre && (
              <button
                type="button"
                onClick={() => { definirFiltre(""); definirIndexActif(-1); }}
                className="text-content-muted hover:text-content"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Liste des résultats */}
          <div ref={referenceListe} className="overflow-y-auto flex-1">
            {optionsFiltrees.length === 0 ? (
              <p className="text-xs text-content-muted p-3 text-center">Aucun résultat</p>
            ) : (
              Array.from(groupes.entries()).map(([grp, optionsGroupe]) => (
                <div key={grp || "__nogroup"}>
                  {grp && (
                    <p className="text-[10px] uppercase tracking-wider text-content-muted font-semibold px-3 py-1.5 bg-surface/50 sticky top-0">
                      {grp}
                    </p>
                  )}
                  {optionsGroupe.map((option) => {
                    const index = optionsFiltrees.indexOf(option);
                    const raisonDesac = optionsDesactivees[option.valeur];
                    const desactive = !!raisonDesac;
                    return (
                      <button
                        key={option.valeur}
                        type="button"
                        data-index={index}
                        onClick={desactive ? undefined : () => selectionner(option.valeur)}
                        onMouseEnter={() => !desactive && definirIndexActif(index)}
                        titre={desactive ? raisonDesac : undefined}
                        className={cc(
                          "w-full text-left px-3 py-1.5 text-sm transition-colors",
                          desactive
                            ? "opacity-40 cursor-not-allowed text-content-muted"
                            : index === indexActif
                              ? "bg-accent-muted/30 text-accent-light"
                              : "text-content-secondary hover:bg-surface/40",
                        )}
                      >
                        {option.etiquette}
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
