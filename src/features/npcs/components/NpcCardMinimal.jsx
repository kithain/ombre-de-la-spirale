import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Tag from '../../../components/ui/Tag';
import { cn } from '../../../utils/cn';
import { getCategoryBadge, getFpVariant } from '../../../utils/npcUtils';
import { ChevronRight, Sword, Shield, Heart } from 'lucide-react';

// Composant carte PNJ minimale avec badge de catégorie
function NpcCardMinimal({ npc, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Extraire le résumé/role
  const summary = npc.role || npc.description || npc.type || 'Personnage';
  const fp = npc.fp ?? npc.cr;
  
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-200 relative overflow-hidden",
        "border-2 border-transparent hover:border-accent-light/50",
        "hover:shadow-lg hover:transform hover:scale-[1.02]",
        isHovered && "shadow-xl border-accent-light/70"
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background subtil */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/10 to-transparent" />
      </div>
      
      {/* Contenu principal */}
      <div className="relative z-10 p-4">
        {/* Header avec nom et FP */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-serif text-accent-light font-bold truncate">
              {npc.name}
            </h3>
            {getCategoryBadge(npc.category) && (
              <div className={cn(
                "inline-flex items-center mt-1 px-2 py-0.5 text-xs rounded-full border",
                getCategoryBadge(npc.category).className
              )}>
                {getCategoryBadge(npc.category).label}
              </div>
            )}
          </div>
          {fp && (
            <Tag variant={getFpVariant(fp)} className="ml-2 text-sm font-bold flex-shrink-0">
              FP {fp}
            </Tag>
          )}
        </div>
        
        {/* Résumé */}
        <p className="text-sm text-content-secondary line-clamp-2 leading-relaxed">
          {summary}
        </p>
        
        {/* Indicateur de clic */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-surface-border/30">
          <div className="flex items-center gap-3 text-xs text-content-subtle">
            {npc.ca && (
              <div className="flex items-center gap-1">
                <Shield size={12} />
                <span>CA {typeof npc.ca === 'object' ? npc.ca?.total : npc.ca}</span>
              </div>
            )}
            {npc.pv && (
              <div className="flex items-center gap-1">
                <Heart size={12} />
                <span>PV {npc.pv}</span>
              </div>
            )}
          </div>
          <div className={cn(
            "flex items-center gap-1 text-xs text-accent-light transition-transform duration-200",
            isHovered && "transform translate-x-1"
          )}>
            <span>Voir détails</span>
            <ChevronRight size={14} />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default NpcCardMinimal;
