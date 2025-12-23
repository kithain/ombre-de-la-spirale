import React from 'react';
import { Link } from 'react-router-dom';
import { X, Sword, Shield, Heart, Brain, Zap, Users, Ghost } from 'lucide-react';
import Tag from '../../../components/ui/Tag';
import { cn } from '../../../utils/cn';
import { getCategoryBadge, getFpVariant } from '../../../utils/npcUtils';
import { findNpcOccurrences } from '../../../utils/dataLinks';

function NpcDetailModal({ npc, isOpen, onClose }) {
  if (!isOpen || !npc) return null;

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

  // Récupérer les apparitions dans les scénarios
  const occurrences = findNpcOccurrences(npc.id);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-surface-raised rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-surface-border">
          
          {/* Header */}
          <div className="relative bg-gradient-to-r from-accent-light/20 to-accent-light/5 p-6 border-b border-surface-border">
            {/* Bouton fermer */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-surface/80 hover:bg-surface border border-surface-border transition-colors"
            >
              <X size={20} className="text-content" />
            </button>
            
            {/* Titre et FP */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-serif text-accent-light font-bold">{npc.name}</h1>
                  {getCategoryBadge(npc.category) && (
                    <div className={cn(
                      "px-3 py-1 text-sm rounded-full border",
                      getCategoryBadge(npc.category).className
                    )}>
                      {getCategoryBadge(npc.category).label}
                    </div>
                  )}
                </div>
                <p className="text-lg text-content-secondary italic">{npc.role || npc.description}</p>
              </div>
              {fp && (
                <Tag variant={getFpVariant(fp)} className="text-lg font-bold">
                  FP {fp}
                </Tag>
              )}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            
            {/* Stats principales */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-surface/50 rounded-lg p-4 text-center border border-surface-border">
                <Shield className="w-6 h-6 mx-auto mb-2 text-accent-light" />
                <div className="font-bold text-accent-light text-lg">CA</div>
                <div className="text-xl">{ca ?? '–'}</div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 text-center border border-surface-border">
                <Heart className="w-6 h-6 mx-auto mb-2 text-red-400" />
                <div className="font-bold text-accent-light text-lg">PV</div>
                <div className="text-xl">{pv ?? '–'}</div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 text-center border border-surface-border">
                <Zap className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                <div className="font-bold text-accent-light text-lg">Init</div>
                <div className="text-xl">{ini ?? '–'}</div>
              </div>
              <div className="bg-surface/50 rounded-lg p-4 text-center border border-surface-border">
                <Brain className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                <div className="font-bold text-accent-light text-lg">FP</div>
                <div className="text-xl">{fp ?? '–'}</div>
              </div>
            </div>

            {/* Type et alignement */}
            <div className="bg-surface/30 rounded-lg p-4 mb-6 border border-surface-border">
              <p className="text-accent-light uppercase tracking-wider text-sm font-bold mb-2">
                {taille && <span>{taille} </span>}
                {type && <span>{type}</span>}
                {alignement && <span className="text-content-muted normal-case"> ({alignement})</span>}
              </p>
              <div className="flex gap-6 text-sm text-content-secondary">
                <span><span className="text-content-muted font-medium">DV :</span> {dv ?? '–'}</span>
                <span><span className="text-content-muted font-medium">Vit :</span> {vit ?? '–'}</span>
                <span><span className="text-content-muted font-medium">Sens :</span> {sens ?? '–'}</span>
              </div>
            </div>

            {/* Combat */}
            <div className="mb-6">
              <h3 className="text-lg font-serif text-accent-light font-bold mb-3 flex items-center gap-2">
                <Sword size={18} />
                Combat
              </h3>
              <div className="bg-surface/30 rounded-lg p-4 border border-surface-border space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-content-muted font-medium">Attaque :</span>
                  <span className="font-medium">{attaque ?? '–'}</span>
                </div>
                {fullAttack && (
                  <div className="flex justify-between items-center">
                    <span className="text-content-muted font-medium">Att. complète :</span>
                    <span className="font-medium">{fullAttack}</span>
                  </div>
                )}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-content-muted font-medium">ABB :</span> {abb ?? '–'}
                  </div>
                  <div>
                    <span className="text-content-muted font-medium">Lutte :</span> {grp ?? '–'}
                  </div>
                  <div>
                    <span className="text-content-muted font-medium">Espace :</span> {espace ?? '–'}
                  </div>
                  <div>
                    <span className="text-content-muted font-medium">Allonge :</span> {allonge ?? '–'}
                  </div>
                </div>
              </div>
            </div>

            {/* Capacités spéciales */}
            {(Array.isArray(attSpe) && attSpe.length > 0) && (
              <div className="mb-6">
                <h3 className="text-lg font-serif text-accent-light font-bold mb-3">Attaques spéciales</h3>
                <div className="bg-surface/30 rounded-lg p-4 border border-surface-border">
                  <div className="flex flex-wrap gap-2">
                    {attSpe.map((att, idx) => (
                      <span key={idx} className="px-3 py-1 bg-red-900/20 text-red-300 text-sm rounded border border-red-800/30">
                        {att}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {(Array.isArray(qualites) && qualites.length > 0) && (
              <div className="mb-6">
                <h3 className="text-lg font-serif text-accent-light font-bold mb-3">Qualités spéciales</h3>
                <div className="bg-surface/30 rounded-lg p-4 border border-surface-border">
                  <div className="flex flex-wrap gap-2">
                    {qualites.map((qual, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-900/20 text-blue-300 text-sm rounded border border-blue-800/30">
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* JS */}
            {js && (
              <div className="mb-6">
                <h3 className="text-lg font-serif text-accent-light font-bold mb-3">Jets de sauvegarde</h3>
                <div className="bg-surface/30 rounded-lg p-4 border border-surface-border">
                  {typeof js === "string" ? js : (
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-content-muted font-medium">Vig</div>
                        <div className="text-lg font-bold">{js.vig || js.fort || '–'}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-content-muted font-medium">Réf</div>
                        <div className="text-lg font-bold">{(js.réf ?? js.ref) || '–'}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-content-muted font-medium">Vol</div>
                        <div className="text-lg font-bold">{js.vol || js.will || '–'}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Caractéristiques */}
            {carac && (
              <div className="mb-6">
                <h3 className="text-lg font-serif text-accent-light font-bold mb-3">Caractéristiques</h3>
                <div className="bg-surface/30 rounded-lg p-4 border border-surface-border">
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
                    <div>
                      <div className="font-bold text-accent-light text-lg">FOR</div>
                      <div className="text-lg">{typeof carac.for === 'number' ? carac.for : carac.str || '–'}</div>
                    </div>
                    <div>
                      <div className="font-bold text-accent-light text-lg">DEX</div>
                      <div className="text-lg">{typeof carac.dex === 'number' ? carac.dex : carac.dex || '–'}</div>
                    </div>
                    <div>
                      <div className="font-bold text-accent-light text-lg">CON</div>
                      <div className="text-lg">{typeof carac.con === 'number' ? carac.con : carac.con || '–'}</div>
                    </div>
                    <div>
                      <div className="font-bold text-accent-light text-lg">INT</div>
                      <div className="text-lg">{typeof carac.int === 'number' ? carac.int : carac.int || '–'}</div>
                    </div>
                    <div>
                      <div className="font-bold text-accent-light text-lg">SAG</div>
                      <div className="text-lg">{typeof carac.sag === 'number' ? carac.sag : carac.wis || '–'}</div>
                    </div>
                    <div>
                      <div className="font-bold text-accent-light text-lg">CHA</div>
                      <div className="text-lg">{typeof carac.cha === 'number' ? carac.cha : carac.cha || '–'}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Compétences et dons */}
            {(competences || dons) && (
              <div className="mb-6">
                <h3 className="text-lg font-serif text-accent-light font-bold mb-3">Formation</h3>
                <div className="bg-surface/30 rounded-lg p-4 border border-surface-border space-y-3">
                  {competences && (
                    <div>
                      <span className="text-content-muted font-medium">Compétences :</span>
                      <p className="mt-1">{competences}</p>
                    </div>
                  )}
                  {dons && (
                    <div>
                      <span className="text-content-muted font-medium">Dons :</span>
                      <p className="mt-1">{dons}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Informations */}
            <div className="mb-6">
              <h3 className="text-lg font-serif text-accent-light font-bold mb-3">Informations</h3>
              <div className="bg-surface/30 rounded-lg p-4 border border-surface-border space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-content-muted font-medium">Environnement :</span> {env ?? '–'}
                  </div>
                  <div>
                    <span className="text-content-muted font-medium">Organisation :</span> {orga ?? '–'}
                  </div>
                  <div>
                    <span className="text-content-muted font-medium">FP :</span> {fp ?? '–'}
                  </div>
                  <div>
                    <span className="text-content-muted font-medium">Butin :</span> {butin ?? '–'}
                  </div>
                </div>
                {tactiques && (
                  <div>
                    <span className="text-content-muted font-medium">Tactiques :</span>
                    <p className="mt-1">{tactiques}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Apparitions dans les scénarios */}
            {occurrences && occurrences.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-serif text-accent-light font-bold mb-3">Apparitions dans les scénarios</h3>
                <div className="bg-surface/30 rounded-lg p-4 border border-surface-border">
                  <div className="flex flex-wrap gap-2">
                    {occurrences.map((occ, idx) => (
                      <Link
                        key={idx}
                        to={`/scenarios?scenario=${occ.scenarioId}&scene=${encodeURIComponent(occ.sceneTitle)}`}
                        className="px-3 py-1.5 rounded border border-accent-muted/30 text-accent-light bg-accent-surface/20 hover:bg-accent-surface/40 text-sm transition-colors flex items-center gap-2"
                        title={`${occ.scenarioTitle} · ${occ.actTitle} · ${occ.sceneTitle}`}
                      >
                        <span className="font-mono font-bold text-accent-light/70">{occ.scenarioId}.{occ.actNumber}.{occ.sceneNumber}</span>
                        <span className="text-xs truncate max-w-[200px]">{occ.sceneTitle}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Description détaillée */}
            {npc.details?.length > 0 && (
              <div>
                <h3 className="text-lg font-serif text-accent-light font-bold mb-3">Caractéristiques</h3>
                <div className="bg-surface/30 rounded-lg p-4 border border-surface-border">
                  <ul className="space-y-3">
                    {npc.details.map((d, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-accent-light block flex-shrink-0" />
                        <span className="text-content-secondary">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NpcDetailModal;
