import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Skull, Filter } from 'lucide-react';
import SectionTitle from '../../components/ui/SectionTitle';
import NpcCard from './components/NpcCard';
import { useNpcs } from './hooks/useNpcs';

function AntagonistView() {
  const [openId, setOpenId] = useState(null);
  const [category, setCategory] = useState('allies');
  const [fpFilter, setFpFilter] = useState('all');
  const [searchParams] = useSearchParams();
  
  const { npcs, getNpcsByCategory, getNpcsByFp, categories, fpFilters } = useNpcs();
  
  // Gestion des paramètres URL
  useEffect(() => {
    const pnjId = searchParams.get('pnj');
    if (pnjId) {
      setOpenId(pnjId);
      // Déterminer la catégorie du PNJ
      const npc = npcs.find(n => n.id === pnjId);
      if (npc && npc.category) {
        setCategory(npc.category);
      }
    }
  }, [searchParams, npcs]);
  
  // Filtrage
  const filteredNpcs = React.useMemo(() => {
    let filtered = getNpcsByCategory(category);
    filtered = getNpcsByFp(fpFilter);
    return filtered;
  }, [category, fpFilter, getNpcsByCategory, getNpcsByFp]);
  
  return (
    <div className="space-y-8">
      <SectionTitle icon={Skull} title="Antagonistes & PNJ">
        <div className="flex items-center gap-4">
          {/* Filtre par catégorie */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-1 rounded-md bg-surface-raised border border-surface-border text-sm"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'allies' ? 'Alliés' : cat === 'ennemis' ? 'Ennemis' : 'Monstres'}
              </option>
            ))}
          </select>
          
          {/* Filtre par FP */}
          <select
            value={fpFilter}
            onChange={(e) => setFpFilter(e.target.value)}
            className="px-3 py-1 rounded-md bg-surface-raised border border-surface-border text-sm"
          >
            {fpFilters.map(fp => (
              <option key={fp} value={fp}>
                {fp === 'all' ? 'Tous les FP' : 
                 fp === 'low' ? 'FP 1-3' :
                 fp === 'mid' ? 'FP 4-6' :
                 fp === 'high' ? 'FP 7-9' : 'FP 10+ (Boss)'}
              </option>
            ))}
          </select>
        </div>
      </SectionTitle>
      
      {/* Grille des PNJ */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredNpcs.map(npc => (
          <NpcCard
            key={`${npc.source}-${npc.id}`}
            npc={npc}
            isOpen={openId === npc.id}
            onClick={() => setOpenId(openId === npc.id ? null : npc.id)}
          />
        ))}
      </div>
      
      {filteredNpcs.length === 0 && (
        <div className="text-center py-12 text-content-muted">
          <Skull size={48} className="mx-auto mb-4 opacity-50" />
          <p>Aucun PNJ trouvé pour ces filtres</p>
        </div>
      )}
    </div>
  );
}

export default AntagonistView;
