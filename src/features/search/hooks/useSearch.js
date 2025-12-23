import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { universeData, scenariosData, factionsData } from '../../../data';

// Index de recherche simplifié
const buildSearchIndex = () => {
  const entries = [];
  
  // Univers (zones, lieux, PNJ)
  universeData.zones?.forEach(zone => {
    entries.push({
      type: 'Zone',
      title: zone.name,
      description: zone.details,
      path: `/univers?zone=${zone.id}`
    });
    
    zone.locations?.forEach(loc => {
      entries.push({
        type: 'Lieu',
        title: loc.name,
        description: loc.summary,
        path: `/univers?zone=${zone.id}&loc=${loc.id}`
      });
      
      loc.npcs?.forEach(npc => {
        entries.push({
          type: 'PNJ',
          title: npc.name,
          description: npc.role,
          path: `/univers?zone=${zone.id}&loc=${loc.id}&pnj=${npc.id}`
        });
      });
    });
  });
  
  // Scénarios
  scenariosData?.forEach(scenario => {
    entries.push({
      type: 'Scénario',
      title: scenario.title,
      description: scenario.synopsis,
      path: `/scenarios/${scenario.id}`
    });
  });
  
  // Factions
  factionsData?.forEach(faction => {
    entries.push({
      type: 'Faction',
      title: faction.name,
      description: faction.desc,
      path: '/factions'
    });
  });
  
  return entries;
};

export function useSearch() {
  const [term, setTerm] = useState('');
  
  const searchEngine = useMemo(() => {
    const entries = buildSearchIndex();
    const fuse = new Fuse(entries, {
      threshold: 0.3,
      keys: ['title', 'description', 'type']
    });
    return { entries, fuse };
  }, []);
  
  const results = useMemo(() => {
    if (!term.trim()) return [];
    return searchEngine.fuse.search(term).map(r => r.item);
  }, [term, searchEngine]);
  
  return {
    term,
    setTerm,
    results,
    clear: () => setTerm('')
  };
}
