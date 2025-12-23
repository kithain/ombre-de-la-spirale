import { useNpcs } from '../../features/npcs/hooks/useNpcs';
import { useUniverse } from '../../features/universe/hooks/useUniverse';
import { useScenarios } from '../../features/scenarios/hooks/useScenarios';
import { useFactions } from '../../features/factions/hooks/useFactions';

/**
 * Hook unifié qui donne accès à toutes les données du jeu
 * Évite d'importer plusieurs hooks dans les composants
 */
export function useGameData() {
  const npcsData = useNpcs();
  const universeData = useUniverse();
  const scenariosData = useScenarios();
  const factionsData = useFactions();
  
  // Stats globales du jeu
  const globalStats = {
    npcs: npcsData.stats || { total: npcsData.npcs?.length || 0 },
    universe: universeData.stats,
    scenarios: scenariosData.stats,
    factions: factionsData.stats
  };
  
  // Recherche globale (toutes catégories)
  const searchAll = (query) => {
    if (!query.trim()) return { npcs: [], zones: [], locations: [], scenarios: [], scenes: [], factions: [] };
    
    const lowerQuery = query.toLowerCase();
    
    return {
      npcs: npcsData.npcs?.filter(npc => 
        npc.name?.toLowerCase().includes(lowerQuery) ||
        npc.role?.toLowerCase().includes(lowerQuery)
      ) || [],
      zones: universeData.searchUniverse(query).zones,
      locations: universeData.searchUniverse(query).locations,
      scenarios: scenariosData.searchScenarios(query).scenarios,
      scenes: scenariosData.searchScenarios(query).scenes,
      factions: factionsData.searchFactions(query)
    };
  };
  
  // Obtenir un élément par ID peu importe son type
  const getById = (id, type) => {
    switch (type) {
      case 'npc':
        return npcsData.getNpcById(id);
      case 'zone':
        return universeData.getZoneById(id);
      case 'location':
        return universeData.getLocationById(id);
      case 'scenario':
        return scenariosData.getScenarioById(id);
      case 'faction':
        return factionsData.getFactionById(id);
      default:
        return null;
    }
  };
  
  // Liens entre entités
  const getConnections = (entityId, entityType) => {
    const connections = [];
    
    switch (entityType) {
      case 'npc':
        // Scènes où le PNJ apparaît
        const scenes = scenariosData.getScenesWithNpc(entityId);
        connections.push(...scenes.map(scene => ({
          type: 'scene',
          id: scene.title,
          title: scene.title,
          scenario: scene.scenarioTitle
        })));
        
        // Locations où le PNJ réside
        const locations = universeData.allLocations.filter(loc =>
          loc.npcIds?.includes(entityId) || loc.npcs?.some(npc => npc.id === entityId)
        );
        connections.push(...locations.map(loc => ({
          type: 'location',
          id: loc.id,
          title: loc.name,
          zone: loc.zoneName
        })));
        break;
        
      case 'location':
        // PNJ dans cette location
        const npcs = universeData.getNpcsByLocation(entityId);
        connections.push(...npcs.map(npc => ({
          type: 'npc',
          id: npc.id,
          title: npc.name,
          role: npc.role
        })));
        
        // Scènes dans cette location
        const locationScenes = scenariosData.getScenesByLocation(entityId);
        connections.push(...locationScenes.map(scene => ({
          type: 'scene',
          id: scene.title,
          title: scene.title,
          scenario: scene.scenarioTitle
        })));
        break;
    }
    
    return connections;
  };
  
  return {
    // Données brutes
    ...npcsData,
    ...universeData,
    ...scenariosData,
    ...factionsData,
    
    // Stats globales
    globalStats,
    
    // Utilitaires
    searchAll,
    getById,
    getConnections
  };
}
