import { useEffect, useState } from "react";
import { ChevronDown, Map, AlertTriangle, Pencil, Plus, Trash2, ArrowUp, ArrowDown, X } from "lucide-react";
import CarteScene from "./CarteScene";
import { utiliserEditeurScenario } from "../../../contextes/ContexteEditeurScenarioBase";
import { cc } from "../../../utilitaires/combinerClasses";

function AccordeonActe({ acte, idScenario, indexActe, estOuvert = false, auClic, titreSceneCible = "" }) {
  const {
    modeEdition,
    activerModeEdition,
    modifierChampActe,
    ajouterScene,
    supprimerScene,
    reordonnerScenes,
  } = utiliserEditeurScenario();

  const [editionActe, definirEditionActe] = useState(false);
  const [titreSceneOuverte, definirTitreSceneOuverte] = useState("");

  useEffect(() => {
    if (!estOuvert) return;
    const cible = acte.scenes?.find(
      (scene) => scene.title.toLowerCase() === titreSceneCible?.toLowerCase(),
    );
    if (cible) {
      definirTitreSceneOuverte(cible.title);
    }
  }, [estOuvert, acte.scenes, titreSceneCible]);

  return (
    <div className="border-l-2 border-surface-border ml-2 sm:ml-4 pl-3 sm:pl-6 relative pb-6 sm:pb-8 last:pb-0">
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-surface-overlay border-2 border-surface-border" />

      <div className="flex items-center gap-2 mb-2">
        <button
          onClick={auClic}
          aria-expanded={estOuvert}
          className="flex items-center gap-3 text-left group flex-1 min-w-0"
        >
          <h4 className="text-base sm:text-lg font-serif font-bold text-content-secondary group-hover:text-accent transition-colors truncate">
            {acte.title}
          </h4>
          <ChevronDown
            size={16}
            className={`text-content-subtle transition-transform duration-300 flex-shrink-0 ${estOuvert ? "rotate-180" : ""}`}
          />
        </button>
        <button
          type="button"
          onClick={() => { activerModeEdition(); definirEditionActe((v) => !v); }}
          className="p-1 border border-surface-border text-content-muted hover:text-accent-light hover:border-accent-dark transition-colors flex-shrink-0"
          title="Éditer l'acte"
        >
          <Pencil size={12} />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-4 text-[10px] sm:text-xs font-mono text-content-subtle mb-3 sm:mb-4 pl-1">
        <span className="flex items-center gap-1.5 bg-surface-raised px-2 py-1 border border-surface-border">
          <AlertTriangle className="w-4 h-4 text-accent-dark" />
          ENJEU : {acte.stake}
        </span>
        <span className="flex items-center gap-1.5 bg-surface-raised px-2 py-1 border border-surface-border">
          <Map className="w-4 h-4 text-blue-500" />
          LIEU : {acte.location}
        </span>
      </div>

      {/* Panneau d'\u00e9dition de l'acte */}
      {modeEdition && editionActe && (
        <div className="mb-4 p-3 border border-amber-700/30 bg-amber-900/10 space-y-3 animate-slideDown">
          <div className="flex items-center justify-between">
            <h5 className="text-xs font-semibold text-amber-300 uppercase tracking-wider">\u00c9dition de l'acte</h5>
            <button type="button" onClick={() => definirEditionActe(false)} className="p-1 text-content-muted hover:text-content">
              <X size={12} />
            </button>
          </div>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">Titre</label>
            <input
              type="text"
              value={acte.title || ""}
              onChange={(e) => modifierChampActe(idScenario, indexActe, "title", e.target.value)}
              className="input-forge w-full text-content text-sm"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">Enjeu</label>
            <textarea
              value={acte.stake || ""}
              onChange={(e) => modifierChampActe(idScenario, indexActe, "stake", e.target.value)}
              rows={2}
              className="input-forge w-full text-content text-sm resize-y"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">Lieu</label>
            <input
              type="text"
              value={acte.location || ""}
              onChange={(e) => modifierChampActe(idScenario, indexActe, "location", e.target.value)}
              className="input-forge w-full text-content text-sm"
            />
          </div>

          {/* Gestion des sc\u00e8nes */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">Sc\u00e8nes ({acte.scenes?.length || 0})</label>
              <button
                type="button"
                onClick={() => ajouterScene(idScenario, indexActe)}
                className="flex items-center gap-1 text-xs text-accent-light hover:text-accent transition-colors px-2 py-1 border border-dashed border-surface-border hover:border-accent-dark"
              >
                <Plus size={12} />
                Ajouter une sc\u00e8ne
              </button>
            </div>
            {(acte.scenes || []).map((scene, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 bg-surface/40 border border-surface-border">
                <span className="text-xs text-content-secondary flex-1 truncate">{scene.title}</span>
                <button
                  type="button"
                  onClick={() => reordonnerScenes(idScenario, indexActe, idx, idx - 1)}
                  disabled={idx === 0}
                  className="p-1 text-content-muted hover:text-content disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Monter"
                >
                  <ArrowUp size={12} />
                </button>
                <button
                  type="button"
                  onClick={() => reordonnerScenes(idScenario, indexActe, idx, idx + 1)}
                  disabled={idx === (acte.scenes?.length || 0) - 1}
                  className="p-1 text-content-muted hover:text-content disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Descendre"
                >
                  <ArrowDown size={12} />
                </button>
                <button
                  type="button"
                  onClick={() => { if (confirm(`Supprimer "${scene.title}" ?`)) supprimerScene(idScenario, indexActe, idx); }}
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
        <div className="grid grid-cols-1 gap-3 animate-slideDown">
          {(acte.scenes || []).map((scene, indexScene) => (
            <CarteScene
              key={`${scene.title}-${indexScene}`}
              scene={scene}
              idScenario={idScenario}
              indexActe={indexActe}
              indexScene={indexScene}
              estEtendue={titreSceneOuverte === scene.title}
              auClic={() =>
                definirTitreSceneOuverte((prev) =>
                  prev === scene.title ? "" : scene.title,
                )
              }
              surlignee={
                scene.title.toLowerCase() === titreSceneCible?.toLowerCase()
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}


export default AccordeonActe;
