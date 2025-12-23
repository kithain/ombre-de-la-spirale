import { useMemo } from 'react';
import { pnjPrincipaux, pnjEnnemis, bestiaryData } from '../../../data';

export function useNpcs() {
  const npcs = useMemo(() => {
    const allNpcs = [];
    
    // PNJ principaux
    pnjPrincipaux?.forEach(npc => {
      allNpcs.push({ ...npc, category: 'allies', source: 'principaux' });
    });
    
    // PNJ ennemis
    pnjEnnemis?.forEach(npc => {
      allNpcs.push({ ...npc, category: 'ennemis', source: 'ennemis' });
    });
    
    // Monstres du bestiaire
    bestiaryData?.forEach(monster => {
      allNpcs.push({ 
        ...monster, 
        category: 'monstres', 
        source: 'bestiary',
        isMonster: true 
      });
    });
    
    return allNpcs;
  }, []);
  
  const getNpcById = (id) => {
    return npcs.find(npc => npc.id === id) || null;
  };
  
  const getNpcsByCategory = (category) => {
    if (category === 'all') return npcs;
    return npcs.filter(npc => npc.category === category);
  };
  
  const getNpcsByFp = (fpFilter) => {
    if (fpFilter === 'all') return npcs;
    
    return npcs.filter(npc => {
      const fp = parseFloat(npc.fp || npc.cr || 0);
      switch (fpFilter) {
        case 'low': return fp < 4;
        case 'mid': return fp >= 4 && fp < 7;
        case 'high': return fp >= 7 && fp < 10;
        case 'boss': return fp >= 10;
        default: return true;
      }
    });
  };
  
  return {
    npcs,
    getNpcById,
    getNpcsByCategory,
    getNpcsByFp,
    categories: ['all', 'allies', 'ennemis', 'monstres'],
    fpFilters: ['all', 'low', 'mid', 'high', 'boss']
  };
}
