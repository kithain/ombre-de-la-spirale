import { useMemo } from 'react';
import { factionsData } from '../../../data';

export function useFactions() {
  const factions = useMemo(() => factionsData || [], []);
  
  // Obtenir une faction par ID
  const getFactionById = (id) => {
    return factions.find(faction => faction.id === id) || null;
  };
  
  // Obtenir une faction par nom
  const getFactionByName = (name) => {
    const lowerName = name.toLowerCase();
    return factions.find(faction => 
      faction.name?.toLowerCase() === lowerName
    ) || null;
  };
  
  // Filtrer les factions par type
  const getFactionsByType = (type) => {
    if (!type) return factions;
    return factions.filter(faction => faction.type === type);
  };
  
  // Obtenir les membres d'une faction
  const getFactionMembers = (factionId) => {
    const faction = getFactionById(factionId);
    return faction?.members || [];
  };
  
  // Obtenir la hiérarchie d'une faction
  const getFactionHierarchy = (factionId) => {
    const faction = getFactionById(factionId);
    return faction?.hierarchy || [];
  };
  
  // Rechercher dans les factions
  const searchFactions = (query) => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    return factions.filter(faction =>
      faction.name?.toLowerCase().includes(lowerQuery) ||
      faction.type?.toLowerCase().includes(lowerQuery) ||
      faction.desc?.toLowerCase().includes(lowerQuery)
    );
  };
  
  // Obtenir tous les types de factions disponibles
  const factionTypes = useMemo(() => {
    const types = [...new Set(factions.map(f => f.type).filter(Boolean))];
    return types;
  }, [factions]);
  
  // Obtenir les factions avec des hiérarchies
  const getFactionsWithHierarchy = () => {
    return factions.filter(faction => faction.hierarchy && faction.hierarchy.length > 0);
  };
  
  // Obtenir tous les membres de toutes les factions
  const getAllMembers = () => {
    return factions.flatMap(faction => 
      (faction.members || []).map(member => ({
        ...member,
        factionId: faction.id,
        factionName: faction.name
      }))
    );
  };
  
  // Trouver un membre dans toutes les factions
  const findMember = (memberId) => {
    const allMembers = getAllMembers();
    return allMembers.find(member => member.id === memberId) || null;
  };
  
  // Obtenir les factions d'un membre
  const getMemberFactions = (memberId) => {
    return factions.filter(faction =>
      faction.members?.some(member => member.id === memberId)
    );
  };
  
  // Stats sur les factions
  const stats = useMemo(() => ({
    totalFactions: factions.length,
    totalMembers: factions.reduce((sum, f) => sum + (f.members?.length || 0), 0),
    factionsWithHierarchy: factions.filter(f => f.hierarchy?.length > 0).length,
    factionTypesCount: factionTypes.length
  }), [factions, factionTypes]);
  
  return {
    // Données
    factions,
    factionTypes,
    stats,
    
    // Accesseurs
    getFactionById,
    getFactionByName,
    getFactionMembers,
    getFactionHierarchy,
    
    // Filtres et recherche
    getFactionsByType,
    searchFactions,
    getFactionsWithHierarchy,
    
    // Gestion des membres
    getAllMembers,
    findMember,
    getMemberFactions
  };
}
