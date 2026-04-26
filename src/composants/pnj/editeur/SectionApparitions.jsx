import { memo, useState, useMemo, useEffect, useCallback } from "react";
import { MapPin, X } from "lucide-react";
import ComboboxFiltrable from "../../interface/ComboboxFiltrable";
import SectionPnj from "../sections/SectionPnj";
import {
  obtenirToutesLesScenes,
  obtenirScenesPourPnj,
  ajouterPnjAScene,
  retirerPnjDeScene,
} from "../../../utilitaires/liaisonsDonnees";

/**
 * Composant SectionApparitions — Gère les scènes dans lesquelles le PNJ apparaît
 */
const SectionApparitions = memo(function SectionApparitions({ pnjId }) {
  const [scenesActuelles, definirScenesActuelles] = useState([]);
  const toutesLesScenes = useMemo(() => obtenirToutesLesScenes(), []);

  // Charger les scènes du PNJ
  useEffect(() => {
    definirScenesActuelles(obtenirScenesPourPnj(pnjId));
  }, [pnjId]);

  const idsActuels = useMemo(
    () => scenesActuelles.map((s) => s.id),
    [scenesActuelles],
  );

  // Options groupées par scénario pour le ComboboxFiltrable
  const optionsGroupees = useMemo(() => {
    const parScenario = new Map();
    for (const scene of toutesLesScenes) {
      const key = scene.titreScenario || scene.idScenario;
      if (!parScenario.has(key)) parScenario.set(key, []);
      parScenario.get(key).push(scene.id);
    }
    return Array.from(parScenario.entries()).map(([groupe, ids]) => ({
      groupe,
      options: ids,
    }));
  }, [toutesLesScenes]);

  // Labels pour le ComboboxFiltrable
  const optionsAvecLabels = useMemo(() => {
    return toutesLesScenes.map((s) => ({
      value: s.id,
      label: `${s.id} — ${s.titreScene || "Sans titre"}`,
      groupe: s.titreScenario || s.idScenario,
    }));
  }, [toutesLesScenes]);

  const handleAjouter = useCallback((sceneId) => {
    ajouterPnjAScene(sceneId, pnjId);
    definirScenesActuelles(obtenirScenesPourPnj(pnjId));
  }, [pnjId]);

  const handleRetirer = useCallback((sceneId) => {
    retirerPnjDeScene(sceneId, pnjId);
    definirScenesActuelles(obtenirScenesPourPnj(pnjId));
  }, [pnjId]);

  return (
    <SectionPnj titre="Apparitions" icone={MapPin}>
      <div className="space-y-3">
        {scenesActuelles.length === 0 ? (
          <p className="text-xs text-content-muted italic">Aucune apparition dans les scénarios.</p>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {scenesActuelles.map((scene) => (
              <span
                key={scene.id}
                className="inline-flex items-center gap-1 px-2 py-1 bg-accent-surface border border-accent-muted text-accent-light text-xs"
                title={`${scene.titreScenario} · ${scene.titreActe} · ${scene.titreScene}`}
              >
                <MapPin size={10} className="flex-shrink-0" />
                {scene.id}
                <button
                  type="button"
                  onClick={() => handleRetirer(scene.id)}
                  className="text-red-400 hover:text-red-300 ml-0.5"
                  aria-label={`Retirer de ${scene.titreScene}`}
                >
                  <X size={10} />
                </button>
              </span>
            ))}
          </div>
        )}
        <ComboboxFiltrable
          placeholder="+ Ajouter à une scène…"
          options={optionsAvecLabels}
          exclure={idsActuels}
          onSelect={handleAjouter}
        />
      </div>
    </SectionPnj>
  );
});

export default SectionApparitions;
