import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Skull, Filter, Users, Swords, Ghost, Search } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import NpcCardMinimal from '../../features/npcs/components/NpcCardMinimal';
import NpcDetailModal from '../../features/npcs/components/NpcDetailModal';
import { useNpcs } from '../../features/npcs/hooks/useNpcs';
import Tag from '../ui/Tag';
import { cn } from '../../utils/cn';
import { parseFp } from '../../utils/npcUtils';

function AntagonistView() {
  const [selectedNpc, setSelectedNpc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState('all');
  const [fpFilter, setFpFilter] = useState('all');
  const [specificFp, setSpecificFp] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams();
  
  const { npcs, getNpcsByCategory, categories } = useNpcs();
  
  // Gestion des paramètres URL
  useEffect(() => {
    const pnjId = searchParams.get('pnj');
    if (pnjId) {
      const npc = npcs.find(n => n.id === pnjId);
      if (npc) {
        setSelectedNpc(npc);
        setIsModalOpen(true);
        // Déterminer la catégorie du PNJ
        if (npc.category) {
          setCategory(npc.category);
        }
      }
    }
  }, [searchParams, npcs]);
  
  // Filtrage combiné
  const filteredNpcs = React.useMemo(() => {
    let filtered = getNpcsByCategory(category);
    
    // Filtrer par FP Spécifique
    if (specificFp.trim()) {
      const targetFp = parseFp(specificFp);
      // Si c'est un nombre valide, on filtre
      if (!isNaN(targetFp) && targetFp > 0) {
        filtered = filtered.filter(npc => {
          const fp = parseFp(npc.fp || npc.cr);
          return Math.abs(fp - targetFp) < 0.01; // Comparaison approximative pour les floats
        });
      } else {
        // Sinon on essaie de matcher la string exacte (ex: "1/4")
        filtered = filtered.filter(npc => 
          String(npc.fp || npc.cr) === specificFp.trim()
        );
      }
    } 
    // Sinon Filtrer par Plage de FP
    else if (fpFilter !== 'all') {
      filtered = filtered.filter(npc => {
        const fp = parseFp(npc.fp || npc.cr);
        switch (fpFilter) {
          case 'lt1': return fp < 1;
          case '1-2': return fp >= 1 && fp <= 2;
          case '3-4': return fp >= 3 && fp <= 4;
          case '5-6': return fp >= 5 && fp <= 6;
          case '7-9': return fp >= 7 && fp <= 9;
          case '10+': return fp >= 10;
          default: return true;
        }
      });
    }
    
    // Filtrer par recherche
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(npc => 
        npc.name?.toLowerCase().includes(query) ||
        npc.role?.toLowerCase().includes(query) ||
        npc.type?.toLowerCase().includes(query) ||
        npc.environment?.toLowerCase().includes(query) ||
        npc.organization?.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [category, fpFilter, searchQuery, getNpcsByCategory]);
  
  const categoryConfig = {
    all: { icon: Users, label: 'Tous', color: 'bg-gray-600' },
    allies: { icon: Users, label: 'Alliés', color: 'bg-blue-600' },
    ennemis: { icon: Swords, label: 'Ennemis', color: 'bg-red-600' },
    monstres: { icon: Ghost, label: 'Monstres', color: 'bg-purple-600' }
  };
  
  const fpConfig = {
    all: { label: 'Tous', color: 'bg-gray-500' },
    lt1: { label: '< 1', color: 'bg-green-600' },
    '1-2': { label: '1-2', color: 'bg-green-500' },
    '3-4': { label: '3-4', color: 'bg-yellow-600' },
    '5-6': { label: '5-6', color: 'bg-yellow-500' },
    '7-9': { label: '7-9', color: 'bg-orange-500' },
    '10+': { label: '10+', color: 'bg-red-600' }
  };
  
  const fpOptions = ['all', 'lt1', '1-2', '3-4', '5-6', '7-9', '10+'];

  const handleNpcClick = (npc) => {
    setSelectedNpc(npc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNpc(null);
  };
  
  return (
    <div className="space-y-8">
      {/* Header avec titre et stats */}
      <SectionTitle icon={Skull} title="Antagonistes & PNJ">
        <div className="flex items-center gap-4">
          <div className="text-sm text-content-subtle">
            {filteredNpcs.length} / {npcs.length} PNJ
          </div>
        </div>
      </SectionTitle>
      
      {/* Panneau de filtres amélioré */}
      <div className="bg-surface-raised/50 rounded-xl p-6 border border-surface-border/50 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <Filter size={20} className="text-accent-light" />
          <h3 className="text-lg font-serif text-accent-light">Filtres</h3>
        </div>
        
        {/* Barre de recherche */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-content-subtle" size={18} />
            <input
              type="text"
              placeholder="Rechercher un PNJ, un type, un lieu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-surface border border-surface-border rounded-lg text-content placeholder:text-content-subtle focus:outline-none focus:ring-2 focus:ring-accent-light/50 focus:border-accent-light"
            />
          </div>
        </div>
        
        {/* Filtres par catégorie */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-content mb-3">Catégorie</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => {
              const config = categoryConfig[cat];
              const Icon = config.icon;
              const isActive = category === cat;
              
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200",
                    isActive 
                      ? `${config.color} text-white border-transparent shadow-lg transform scale-105` 
                      : "bg-surface border-surface-border text-content hover:border-accent-light/50 hover:shadow-md"
                  )}
                >
                  <Icon size={16} />
                  <span className="font-medium">{config.label}</span>
                  {cat !== 'all' && (
                    <span className="ml-1 text-xs opacity-75">
                      ({npcs.filter(n => n.category === cat).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Filtres par FP */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-content">Puissance (FP)</h4>
            <div className="flex items-center gap-2">
               <span className="text-xs text-content-subtle">FP Exact :</span>
               <input 
                 type="text" 
                 placeholder="ex: 1/4" 
                 value={specificFp}
                 onChange={(e) => {
                   setSpecificFp(e.target.value);
                   if (e.target.value) setFpFilter('all'); // Désactiver le filtre de plage si FP spécifique
                 }}
                 className="w-16 px-2 py-1 text-sm bg-surface border border-surface-border rounded focus:border-accent-light focus:outline-none"
               />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {fpOptions.map(fp => {
              const config = fpConfig[fp];
              const isActive = fpFilter === fp && !specificFp;
              
              return (
                <button
                  key={fp}
                  onClick={() => {
                    setFpFilter(fp);
                    setSpecificFp(''); // Désactiver le FP spécifique
                  }}
                  className={cn(
                    "px-3 py-1.5 rounded-lg border text-sm transition-all duration-200 font-medium",
                    isActive 
                      ? `${config.color} text-white border-transparent shadow-md transform scale-105` 
                      : "bg-surface border-surface-border text-content hover:border-accent-light/50 hover:shadow-sm"
                  )}
                >
                  {config.label}
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Bouton de réinitialisation */}
        {(category !== 'all' || fpFilter !== 'all' || searchQuery || specificFp) && (
          <div className="mt-4 pt-4 border-t border-surface-border/50">
            <button
              onClick={() => {
                setCategory('all');
                setFpFilter('all');
                setSpecificFp('');
                setSearchQuery('');
              }}
              className="text-sm text-content-subtle hover:text-accent-light transition-colors"
            >
              Réinitialiser tous les filtres
            </button>
          </div>
        )}
      </div>
      
      {/* Grille des PNJ */}
      {filteredNpcs.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredNpcs.map(npc => (
            <NpcCardMinimal
              key={`${npc.source}-${npc.id}`}
              npc={npc}
              onClick={() => handleNpcClick(npc)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-surface-raised rounded-full mb-4 border border-surface-border">
            <Skull size={32} className="text-content-subtle" />
          </div>
          <h3 className="text-lg font-serif text-content mb-2">Aucun PNJ trouvé</h3>
          <p className="text-content-subtle">
            {searchQuery 
              ? `Aucun résultat pour "${searchQuery}" avec les filtres actuels`
              : "Aucun PNJ ne correspond aux filtres sélectionnés"
            }
          </p>
          {(category !== 'all' || fpFilter !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setCategory('all');
                setFpFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 text-accent-light hover:text-accent-light/80 transition-colors"
            >
              Afficher tous les PNJ
            </button>
          )}
        </div>
      )}

      {/* Modal de détail */}
      <NpcDetailModal
        npc={selectedNpc}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default AntagonistView;
