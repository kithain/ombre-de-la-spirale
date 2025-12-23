import React, { useState } from 'react';
import Card from '../../../components/ui/Card';
import Tag from '../../../components/ui/Tag';
import { cn } from '../../../utils/cn';
import { ChevronDown, ChevronUp, Sword, Shield, Heart, Brain, Zap } from 'lucide-react';

function NpcCardEnhanced({ npc, isOpen, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-300 relative overflow-hidden",
        "border-2 border-transparent hover:border-accent-light/30",
        isOpen && "ring-2 ring-accent-light shadow-glow border-accent-light/50",
        isHovered && "transform scale-[1.02] shadow-xl"
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-light/20 to-transparent" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Header */}
      <div className="relative z-10 flex items-start justify-between p-4 pb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-serif text-accent-light font-bold">{npc.name}</h3>
            {npc.isMonster && (
              <div className="px-2 py-1 bg-red-900/30 text-red-300 text-xs rounded-full border border-red-800/50">
                Monstre
              </div>
            )}
          </div>
          {npc.role && (
            <p className="text-sm text-content-secondary italic">{npc.role}</p>
          )}
        </div>
        <div className="flex flex-col items-end gap-2">
          {npc.fp && (
            <Tag variant={getFpVariant(npc.fp)} className="text-sm font-bold">
              FP {npc.fp}
            </Tag>
          )}
          <div className="flex items-center gap-1 text-xs text-content-subtle">
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            <span>{isOpen ? 'Réduire' : 'Détails'}</span>
          </div>
        </div>
      </div>
      
      {/* Quick stats preview */}
      {!isOpen && (
        <div className="relative z-10 px-4 pb-3 flex items-center gap-4 text-xs text-content-subtle">
          <div className="flex items-center gap-1">
            <Shield size={12} />
            <span>CA {typeof npc.ca === 'object' ? npc.ca?.total : npc.ca || npc.ac?.total || npc.ac || '–'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart size={12} />
            <span>PV {npc.pv ?? npc.hp ?? '–'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Sword size={12} />
            <span>{npc.attaque || npc.attack || '–'}</span>
          </div>
        </div>
      )}
      
      {/* Detailed content */}
      {isOpen && <NpcDetailsEnhanced npc={npc} />}
    </Card>
  );
}

function getFpVariant(fp) {
  const num = parseFloat(fp);
  if (num >= 10) return "Boss";
  if (num >= 7) return "Combat";
  if (num >= 4) return "Tension";
  return "Social";
}

function NpcDetailsEnhanced({ npc }) {
  // Extraire les champs du bestiaire/PNJ
  const ca = typeof npc.ca === 'object' ? npc.ca?.total : npc.ca || npc.ac?.total || npc.ac;
  const pv = npc.pv ?? npc.hp;
  const fp = npc.fp ?? npc.cr;
  const attaque = npc.attaque || npc.attack;
  const fullAttack = npc.fullAttack || npc.att_complete;
  const qualites = npc.qual_spé || npc.qualites || npc.specialQualities || npc.special_qualites || [];
  const attSpe = npc.att_spé || npc.specialAttacks || npc.attacks_speciales || [];
  const env = npc.environnement || npc.environment;
  const orga = npc.organisation || npc.organization;
  const sens = npc.sens || npc.senses;
  const ini = npc.ini || npc.initiative;
  const dv = npc.dv || npc.hd;
  const js = npc.js || npc.saves;
  const vit = npc.vit || npc.speed;
  const abb = npc.abb || npc.bab;
  const grp = npc.grp || npc.grapple;
  const espace = npc.espace || npc.space;
  const allonge = npc.allonge || npc.reach;
  const competences = npc.compétences || npc.competences || npc.skills;
  const dons = npc.dons || npc.feats;
  const tactiques = npc.tactiques || npc.tactics;
  const butin = npc.butin || npc.loot;
  const carac = npc.carac || npc.abilities;
  const taille = npc.taille || npc.size;
  const type = npc.type;
  const alignement = npc.alignment || npc.alignement;
  
  return (
    <div className="relative z-10 mt-4 space-y-4 text-sm border-t border-surface-border/50 pt-4">
      {/* Header stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        <div className="bg-surface-raised/50 rounded-lg p-2 text-center border border-surface-border/30">
          <Shield className="w-4 h-4 mx-auto mb-1 text-accent-light" />
          <div className="font-bold text-accent-light">CA</div>
          <div>{ca ?? '–'}</div>
        </div>
        <div className="bg-surface-raised/50 rounded-lg p-2 text-center border border-surface-border/30">
          <Heart className="w-4 h-4 mx-auto mb-1 text-red-400" />
          <div className="font-bold text-accent-light">PV</div>
          <div>{pv ?? '–'}</div>
        </div>
        <div className="bg-surface-raised/50 rounded-lg p-2 text-center border border-surface-border/30">
          <Zap className="w-4 h-4 mx-auto mb-1 text-yellow-400" />
          <div className="font-bold text-accent-light">Init</div>
          <div>{ini ?? '–'}</div>
        </div>
        <div className="bg-surface-raised/50 rounded-lg p-2 text-center border border-surface-border/30">
          <Brain className="w-4 h-4 mx-auto mb-1 text-purple-400" />
          <div className="font-bold text-accent-light">FP</div>
          <div>{fp ?? '–'}</div>
        </div>
      </div>

      {/* Type et alignement */}
      <div className="bg-surface-raised/30 rounded-lg p-3 border border-surface-border/30">
        <p className="text-accent-light uppercase tracking-wider text-xs font-bold mb-1">
          {taille && <span>{taille} </span>}
          {type && <span>{type}</span>}
          {alignement && <span className="text-content-muted normal-case"> ({alignement})</span>}
        </p>
        <div className="flex gap-4 text-xs text-content-secondary">
          <span><span className="text-content-muted">DV :</span> {dv ?? '–'}</span>
          <span><span className="text-content-muted">Vit :</span> {vit ?? '–'}</span>
          <span><span className="text-content-muted">Sens :</span> {sens ?? '–'}</span>
        </div>
      </div>

      {/* Combat */}
      <div className="space-y-2">
        <h4 className="text-xs uppercase tracking-widest text-content-subtle font-bold flex items-center gap-2">
          <Sword size={12} />
          Combat
        </h4>
        <div className="bg-surface-raised/30 rounded-lg p-3 border border-surface-border/30 space-y-2 text-xs">
          <p><span className="text-content-muted">Attaque :</span> {attaque ?? '–'}</p>
          {fullAttack && <p><span className="text-content-muted">Att. complète :</span> {fullAttack}</p>}
          <div className="flex gap-4">
            <span><span className="text-content-muted">ABB :</span> {abb ?? '–'}</span>
            <span><span className="text-content-muted">Lutte :</span> {grp ?? '–'}</span>
            <span><span className="text-content-muted">Espace :</span> {espace ?? '–'}</span>
            <span><span className="text-content-muted">Allonge :</span> {allonge ?? '–'}</span>
          </div>
        </div>
      </div>

      {/* Capacités spéciales */}
      {(Array.isArray(attSpe) && attSpe.length > 0) && (
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-widest text-content-subtle font-bold">Attaques spéciales</h4>
          <div className="bg-surface-raised/30 rounded-lg p-3 border border-surface-border/30">
            <div className="flex flex-wrap gap-2">
              {attSpe.map((att, idx) => (
                <span key={idx} className="px-2 py-1 bg-red-900/20 text-red-300 text-xs rounded border border-red-800/30">
                  {att}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {(Array.isArray(qualites) && qualites.length > 0) && (
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-widest text-content-subtle font-bold">Qualités spéciales</h4>
          <div className="bg-surface-raised/30 rounded-lg p-3 border border-surface-border/30">
            <div className="flex flex-wrap gap-2">
              {qualites.map((qual, idx) => (
                <span key={idx} className="px-2 py-1 bg-blue-900/20 text-blue-300 text-xs rounded border border-blue-800/30">
                  {qual}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* JS */}
      {js && (
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-widest text-content-subtle font-bold">Jets de sauvegarde</h4>
          <div className="bg-surface-raised/30 rounded-lg p-3 border border-surface-border/30 text-xs">
            {typeof js === "string" ? js : (
              <div className="flex gap-4">
                <span><span className="text-content-muted">Vig :</span> {js.vig || js.fort || '–'}</span>
                <span><span className="text-content-muted">Réf :</span> {(js.réf ?? js.ref) || '–'}</span>
                <span><span className="text-content-muted">Vol :</span> {js.vol || js.will || '–'}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Caractéristiques */}
      {carac && (
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-widest text-content-subtle font-bold">Caractéristiques</h4>
          <div className="bg-surface-raised/30 rounded-lg p-3 border border-surface-border/30">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-xs text-center">
              <div>
                <div className="font-bold text-accent-light">FOR</div>
                <div>{typeof carac.for === 'number' ? carac.for : carac.str || '–'}</div>
              </div>
              <div>
                <div className="font-bold text-accent-light">DEX</div>
                <div>{typeof carac.dex === 'number' ? carac.dex : carac.dex || '–'}</div>
              </div>
              <div>
                <div className="font-bold text-accent-light">CON</div>
                <div>{typeof carac.con === 'number' ? carac.con : carac.con || '–'}</div>
              </div>
              <div>
                <div className="font-bold text-accent-light">INT</div>
                <div>{typeof carac.int === 'number' ? carac.int : carac.int || '–'}</div>
              </div>
              <div>
                <div className="font-bold text-accent-light">SAG</div>
                <div>{typeof carac.sag === 'number' ? carac.sag : carac.wis || '–'}</div>
              </div>
              <div>
                <div className="font-bold text-accent-light">CHA</div>
                <div>{typeof carac.cha === 'number' ? carac.cha : carac.cha || '–'}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compétences et dons */}
      {(competences || dons) && (
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-widest text-content-subtle font-bold">Formation</h4>
          <div className="bg-surface-raised/30 rounded-lg p-3 border border-surface-border/30 space-y-2 text-xs">
            {competences && (
              <p><span className="text-content-muted">Compétences :</span> {competences}</p>
            )}
            {dons && (
              <p><span className="text-content-muted">Dons :</span> {dons}</p>
            )}
          </div>
        </div>
      )}

      {/* Informations */}
      <div className="space-y-2">
        <h4 className="text-xs uppercase tracking-widest text-content-subtle font-bold">Informations</h4>
        <div className="bg-surface-raised/30 rounded-lg p-3 border border-surface-border/30 space-y-2 text-xs">
          <div className="flex gap-4">
            <span><span className="text-content-muted">Environnement :</span> {env ?? '–'}</span>
            <span><span className="text-content-muted">Organisation :</span> {orga ?? '–'}</span>
          </div>
          <div className="flex gap-4">
            <span><span className="text-content-muted">FP :</span> {fp ?? '–'}</span>
            <span><span className="text-content-muted">Butin :</span> {butin ?? '–'}</span>
          </div>
          {tactiques && (
            <p><span className="text-content-muted">Tactiques :</span> {tactiques}</p>
          )}
        </div>
      </div>

      {/* Description et rôle */}
      {!npc.tactical && (npc.role || npc.description) && (
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-widest text-content-subtle font-bold">Présentation</h4>
          <div className="bg-surface-raised/30 rounded-lg p-3 border border-surface-border/30 text-sm text-content-secondary">
            <p>{npc.role || npc.description}</p>
          </div>
        </div>
      )}

      {/* Détails additionnels */}
      {npc.details?.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs uppercase tracking-widest text-content-subtle font-bold">Caractéristiques</h4>
          <div className="bg-surface-raised/30 rounded-lg p-3 border border-surface-border/30">
            <ul className="space-y-2 text-sm text-content-secondary">
              {npc.details.map((d, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-light block flex-shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NpcCardEnhanced;
