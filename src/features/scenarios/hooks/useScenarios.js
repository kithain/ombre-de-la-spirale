import { useMemo } from 'react';
import { scenariosData } from '../../../data';

export function useScenarios() {
  const scenarios = useMemo(() => scenariosData || [], []);
  
  // Toutes les scènes aplaties avec référence à leur scénario
  const allScenes = useMemo(() => {
    return scenarios.flatMap(scenario =>
      (scenario.acts || []).flatMap((act, actIndex) =>
        (act.scenes || []).map(scene => ({
          ...scene,
          scenarioId: scenario.id,
          scenarioTitle: scenario.title,
          actId: `act${actIndex + 1}`,
          actTitle: act.title,
          actIndex: actIndex + 1
        }))
      )
    );
  }, [scenarios]);
  
  // Obtenir un scénario par ID
  const getScenarioById = (id) => {
    return scenarios.find(scenario => scenario.id === id) || null;
  };
  
  // Obtenir une scène par titre
  const getSceneByTitle = (scenarioId, sceneTitle) => {
    const scenario = getScenarioById(scenarioId);
    if (!scenario) return null;
    
    for (const act of scenario.acts || []) {
      const scene = act.scenes?.find(s => s.title === sceneTitle);
      if (scene) return { ...scene, scenarioId, actTitle: act.title };
    }
    return null;
  };
  
  // Obtenir tous les actes d'un scénario
  const getActsByScenario = (scenarioId) => {
    const scenario = getScenarioById(scenarioId);
    return scenario?.acts || [];
  };
  
  // Obtenir les scènes d'un acte
  const getScenesByAct = (scenarioId, actIndex) => {
    const acts = getActsByScenario(scenarioId);
    const act = acts[actIndex];
    return act?.scenes || [];
  };
  
  // Filtrer les scénarios par type/tag
  const getScenariosByType = (type) => {
    if (!type) return scenarios;
    return scenarios.filter(scenario => scenario.type === type);
  };
  
  // Rechercher dans scénarios/scènes
  const searchScenarios = (query) => {
    if (!query.trim()) return { scenarios: [], scenes: [] };
    
    const lowerQuery = query.toLowerCase();
    
    const matchedScenarios = scenarios.filter(scenario => 
      scenario.title?.toLowerCase().includes(lowerQuery) ||
      scenario.synopsis?.toLowerCase().includes(lowerQuery)
    );
    
    const matchedScenes = allScenes.filter(scene =>
      scene.title?.toLowerCase().includes(lowerQuery) ||
      scene.mecaniques?.some(mec => mec.toLowerCase().includes(lowerQuery))
    );
    
    return { scenarios: matchedScenarios, scenes: matchedScenes };
  };
  
  // Obtenir les scènes avec des PNJ spécifiques
  const getScenesWithNpc = (npcId) => {
    return allScenes.filter(scene => 
      scene.npcIds?.includes(npcId)
    );
  };
  
  // Obtenir les scènes dans des lieux spécifiques
  const getScenesByLocation = (locationId) => {
    return allScenes.filter(scene => 
      scene.locationId === locationId
    );
  };
  
  // Stats sur les scénarios
  const stats = useMemo(() => ({
    totalScenarios: scenarios.length,
    totalActs: scenarios.reduce((sum, sc) => sum + (sc.acts?.length || 0), 0),
    totalScenes: allScenes.length,
    totalMechanics: allScenes.reduce((sum, sc) => sum + (sc.mecaniques?.length || 0), 0)
  }), [scenarios, allScenes]);
  
  // Types de scénarios disponibles
  const scenarioTypes = useMemo(() => {
    const types = [...new Set(scenarios.map(sc => sc.type).filter(Boolean))];
    return types;
  }, [scenarios]);
  
  return {
    // Données
    scenarios,
    allScenes,
    stats,
    scenarioTypes,
    
    // Accesseurs
    getScenarioById,
    getSceneByTitle,
    getActsByScenario,
    getScenesByAct,
    
    // Filtres et recherche
    getScenariosByType,
    searchScenarios,
    getScenesWithNpc,
    getScenesByLocation
  };
}
