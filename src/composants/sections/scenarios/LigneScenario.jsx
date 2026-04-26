import { useEffect, useRef, useState } from "react";
import { ChevronDown, Pencil, Plus, Trash2, ArrowUp, ArrowDown, X, Undo2 } from "lucide-react";
import AccordeonActe from "./AccordeonActe";
import { utiliserEtatPersistant } from "../../../hooks/utiliserEtatPersistant";
import { utiliserEditeurScenario } from "../../../contextes/ContexteEditeurScenarioBase";
import { cc } from "../../../utilitaires/combinerClasses";

function LigneScenario({ scenario, estOuvert, auClic, titreSceneCible = "" }) {
  const {
    modeEdition,
    estModifie,
    modifierChampScenario,
    ajouterActe,
    supprimerActe,
    reordonnerActes,
    sauvegarder,
    annulerModifications,
  } = utiliserEditeurScenario();

  const [editionScenario, definirEditionScenario] = useState(false);

  const [titreActeOuvert, definirTitreActeOuvert] = utiliserEtatPersistant(
    `scenario-open-act-${scenario.id}`,
    "",
  );
  const aInitialiseActe = useRef(false);
  const modifie = estModifie(scenario.id);

  useEffect(() => {
    if (estOuvert && typeof window !== "undefined") {
      window.localStorage.setItem("current-scenario", String(scenario.id));
    }
  }, [estOuvert, scenario.id]);

  useEffect(() => {
    if (!estOuvert) return;
    if (aInitialiseActe.current) return;
    const acteCible = scenario.acts.find((acte) =>
      acte.scenes?.some(
        (scene) => scene.title.toLowerCase() === titreSceneCible.toLowerCase(),
      ),
    );
    if (acteCible) {
      definirTitreActeOuvert(acteCible.title);
      aInitialiseActe.current = true;
      return;
    }
    if (!titreActeOuvert && scenario.acts[0]) {
      definirTitreActeOuvert(scenario.acts[0].title);
      aInitialiseActe.current = true;
    }
  }, [
    estOuvert,
    scenario.acts,
    titreSceneCible,
    titreActeOuvert,
    definirTitreActeOuvert,
  ]);

  return (
    <div className={cc(
      "border bg-surface/60 overflow-hidden transition-all duration-300",
      modifie ? "border-amber-700/50" : "border-surface-border hover:border-surface-border",
    )}>
      <div
        role="button"
        tabIndex={0}
        onClick={auClic}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); auClic(); } }}
        aria-expanded={estOuvert}
        className="p-3 sm:p-6 cursor-pointer flex items-center justify-between bg-gradient-to-r from-surface-raised to-surface-overlay group"
      >
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center bg-surface border border-surface-border font-serif font-bold text-lg sm:text-xl text-accent shadow-inner group-hover:text-accent group-hover:border-accent-muted transition-all">
            {scenario.id}
          </div>
          <div className="min-w-0">
            <h3 className="text-lg sm:text-2xl font-serif font-bold text-content group-hover:text-accent-light transition-colors truncate">
              {scenario.title}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-content-subtle font-mono tracking-wider">
                {scenario.level}
              </span>
              {modifie && (
                <span className="text-[10px] px-1.5 py-0.5 bg-amber-900/30 border border-amber-700/40 text-amber-300 uppercase tracking-wider font-semibold">
                  Modifié
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {modeEdition && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); definirEditionScenario((v) => !v); }}
              className="p-1.5 border border-surface-border text-content-muted hover:text-accent-light hover:border-accent-dark transition-colors"
              title="Éditer le scénario"
            >
              <Pencil size={14} />
            </button>
          )}
          <ChevronDown
            size={16}
            className={`text-content-subtle transition-transform duration-300 ${estOuvert ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {/* Panneau d'édition du scénario */}
      {modeEdition && editionScenario && estOuvert && (
        <div className="p-3 sm:p-6 border-t border-amber-700/30 bg-amber-900/10 space-y-4 animate-slideDown">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-amber-300 uppercase tracking-wider">Édition du scénario</h4>
            <div className="flex items-center gap-2">
              {modifie && (
                <button
                  type="button"
                  onClick={() => annulerModifications(scenario.id)}
                  className="text-xs flex items-center gap-1 px-2 py-1 border border-surface-border text-content-muted hover:text-red-300 hover:border-red-700/50 transition-colors"
                  title="Annuler toutes les modifications"
                >
                  <Undo2 size={12} />
                  Réinitialiser
                </button>
              )}
              <button
                type="button"
                onClick={() => definirEditionScenario(false)}
                className="p-1 text-content-muted hover:text-content"
              >
                <X size={14} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">Titre</label>
              <input
                type="text"
                value={scenario.title || ""}
                onChange={(e) => modifierChampScenario(scenario.id, "title", e.target.value)}
                className="input-forge w-full text-content"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">Niveau</label>
              <input
                type="text"
                value={scenario.level || ""}
                onChange={(e) => modifierChampScenario(scenario.id, "level", e.target.value)}
                className="input-forge w-full text-content"
                placeholder="Niveaux 1-3"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">Système</label>
              <input
                type="text"
                value={scenario.system || ""}
                onChange={(e) => modifierChampScenario(scenario.id, "system", e.target.value)}
                className="input-forge w-full text-content"
                placeholder="D&D 3.5"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">Synopsis</label>
            <textarea
              value={scenario.synopsis || ""}
              onChange={(e) => modifierChampScenario(scenario.id, "synopsis", e.target.value)}
              rows={3}
              className="input-forge w-full text-content resize-y"
            />
          </div>

          {/* Gestion des actes */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">Actes ({scenario.acts?.length || 0})</label>
              <button
                type="button"
                onClick={() => ajouterActe(scenario.id)}
                className="flex items-center gap-1 text-xs text-accent-light hover:text-accent transition-colors px-2 py-1 border border-dashed border-surface-border hover:border-accent-dark"
              >
                <Plus size={12} />
                Ajouter un acte
              </button>
            </div>
            {(scenario.acts || []).map((acte, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 bg-surface/40 border border-surface-border">
                <span className="text-xs text-content-secondary flex-1 truncate">{acte.title}</span>
                <button
                  type="button"
                  onClick={() => reordonnerActes(scenario.id, idx, idx - 1)}
                  disabled={idx === 0}
                  className="p-1 text-content-muted hover:text-content disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Monter"
                >
                  <ArrowUp size={12} />
                </button>
                <button
                  type="button"
                  onClick={() => reordonnerActes(scenario.id, idx, idx + 1)}
                  disabled={idx === (scenario.acts?.length || 0) - 1}
                  className="p-1 text-content-muted hover:text-content disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Descendre"
                >
                  <ArrowDown size={12} />
                </button>
                <button
                  type="button"
                  onClick={() => { if (confirm(`Supprimer "${acte.title}" ?`)) supprimerActe(scenario.id, idx); }}
                  className="p-1 text-red-400 hover:text-red-300"
                  title="Supprimer"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {estOuvert && (
        <div className="p-3 sm:p-6 border-t border-surface-border bg-surface/50">
          <div className="mb-4 sm:mb-8 p-3 sm:p-4 italic text-content-muted text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto text-center font-serif">
            {scenario.synopsis}
          </div>

          <div className="space-y-2">
            {(scenario.acts || []).map((acte, indexActe) => (
              <AccordeonActe
                key={`${acte.title}-${indexActe}`}
                acte={acte}
                idScenario={scenario.id}
                indexActe={indexActe}
                estOuvert={titreActeOuvert === acte.title}
                auClic={() =>
                  definirTitreActeOuvert((prev) =>
                    prev === acte.title ? "" : acte.title,
                  )
                }
                titreSceneCible={titreSceneCible}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


export default LigneScenario;
