import { useMemo } from 'react';
import { universeData } from '../../../data';

export function useUniverse() {
  const zones = useMemo(() => universeData.zones || [], []);
  
  // Toutes les locations aplaties
  const allLocations = useMemo(() => {
    return zones.flatMap(zone => 
      (zone.locations || []).map(loc => ({
        ...loc,
        zoneId: zone.id,
        zoneName: zone.name
      }))
    );
  }, [zones]);
  
  // Obtenir une zone par ID
  const getZoneById = (id) => {
    return zones.find(zone => zone.id === id) || null;
  };
  
  // Obtenir une location par ID
  const getLocationById = (id) => {
    return allLocations.find(loc => loc.id === id) || null;
  };
  
  // Obtenir les locations d'une zone
  const getLocationsByZone = (zoneId) => {
    const zone = getZoneById(zoneId);
    return zone?.locations || [];
  };
  
  // Obtenir les PNJ d'une location
  const getNpcsByLocation = (locationId) => {
    const location = getLocationById(locationId);
    return location?.npcs || [];
  };
  
  // Filtrer les zones par type ou tag
  const getZonesByType = (type) => {
    if (!type) return zones;
    return zones.filter(zone => zone.type === type);
  };
  
  // Rechercher dans zones/locations
  const searchUniverse = (query) => {
    if (!query.trim()) return { zones: [], locations: [] };
    
    const lowerQuery = query.toLowerCase();
    
    const matchedZones = zones.filter(zone => 
      zone.name?.toLowerCase().includes(lowerQuery) ||
      zone.details?.toLowerCase().includes(lowerQuery)
    );
    
    const matchedLocations = allLocations.filter(loc =>
      loc.name?.toLowerCase().includes(lowerQuery) ||
      loc.summary?.toLowerCase().includes(lowerQuery)
    );
    
    return { zones: matchedZones, locations: matchedLocations };
  };
  
  // Stats pour l'univers
  const stats = useMemo(() => ({
    totalZones: zones.length,
    totalLocations: allLocations.length,
    totalNpcs: allLocations.reduce((sum, loc) => sum + (loc.npcs?.length || 0), 0)
  }), [zones, allLocations]);
  
  return {
    // Données
    zones,
    allLocations,
    stats,
    
    // Accesseurs
    getZoneById,
    getLocationById,
    getLocationsByZone,
    getNpcsByLocation,
    
    // Filtres
    getZonesByType,
    searchUniverse
  };
}
