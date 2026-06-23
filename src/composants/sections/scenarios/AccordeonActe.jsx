import { useEffect, useState } from "react";
import { ChevronDown, Map, AlertTriangle } from "lucide-react";
import CarteScene from "./CarteScene";
import { sceneId } from "../../../utilitaires/sceneUtils";

function AccordeonActe({ acte, idScenario, indexActe, estOuvert = false, auClic, titreSceneCible = "" }) {
  const [idSceneOuverte, definirIdSceneOuverte] = useState("");

  useEffect(() => {
    if (!estOuvert) return;
    const cible = acte.scenes?.find(
      (scene) => sceneId(scene).toLowerCase() === titreSceneCible?.toLowerCase(),
    );
    if (cible) {
      definirIdSceneOuverte(sceneId(cible));
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
            {acte.titre}
          </h4>
          <ChevronDown
            size={16}
            className={`text-content-subtle transition-transform duration-300 flex-shrink-0 ${estOuvert ? "rotate-180" : ""}`}
          />
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

      {estOuvert && (
        <div className="grid grid-cols-1 gap-3 animate-slideDown">
          {(acte.scenes || []).map((scene, indexScene) => (
            <CarteScene
              key={`${sceneId(scene)}-${indexScene}`}
              scene={scene}
              idScenario={idScenario}
              indexActe={indexActe}
              indexScene={indexScene}
              estEtendue={idSceneOuverte === sceneId(scene)}
              auClic={() =>
                definirIdSceneOuverte((precedent) =>
                  precedent === sceneId(scene) ? "" : sceneId(scene),
                )
              }
              surlignee={
                sceneId(scene).toLowerCase() === titreSceneCible?.toLowerCase()
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}


export default AccordeonActe;
