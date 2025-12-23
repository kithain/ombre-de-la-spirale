import React from 'react';
import Card from '../../../components/ui/Card';
import Tag from '../../../components/ui/Tag';
import { cn } from '../../../utils/cn';

function NpcCard({ npc, isOpen, onClick }) {
  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all duration-200",
        isOpen && "ring-2 ring-accent-light shadow-glow"
      )}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-serif text-accent-light">{npc.name}</h3>
          {npc.role && (
            <p className="text-sm text-content-secondary mt-1">{npc.role}</p>
          )}
        </div>
        {npc.fp && (
          <Tag variant={getFpVariant(npc.fp)}>
            FP {npc.fp}
          </Tag>
        )}
      </div>
      
      {isOpen && <NpcDetails npc={npc} />}
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

function NpcDetails({ npc }) {
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
    <div className="mt-4 space-y-3 text-sm">
      {/* Informations de base */}
      <div className="space-y-2 text-[12px] text-content-secondary">
        {/* Ligne 1: Type, Taille, Alignement */}
        <p className="text-accent-light uppercase tracking-wider">
          {taille && <span>{taille} </span>}
          {type && <span>{type}</span>}
          {alignement && <span className="text-content-muted normal-case"> ({alignement})</span>}
        </p>

        {/* Ligne 2: DV, PV, Init, Sens, Vitesses */}
        <p><span className="text-content-muted">DV :</span> {dv ?? '–'} {pv !== undefined ? `(${pv} pv)` : ''}</p>
        <p><span className="text-content-muted">Init :</span> {ini ?? '–'} ; <span className="text-content-muted">Sens :</span> {sens ?? '–'}</p>
        <p><span className="text-content-muted">Vitesses :</span> {vit ?? '–'}</p>

        {/* Ligne 3: CA */}
        <p><span className="text-content-muted">CA :</span> {ca ?? '–'}</p>

        {/* Ligne 4: Attaques */}
        <p><span className="text-content-muted">Attaque :</span> {attaque ?? '–'}</p>
        {fullAttack && <p><span className="text-content-muted">Att. complète :</span> {fullAttack}</p>}
        <p><span className="text-content-muted">ABB/Lutte :</span> {abb ?? '–'} / {grp ?? '–'}</p>
        <p><span className="text-content-muted">Espace/Allonge :</span> {espace ?? '–'} / {allonge ?? '–'}</p>

        {/* Ligne 5: Attaques spéciales & Qualités spéciales */}
        {Array.isArray(attSpe) && attSpe.length > 0 && <p><span className="text-content-muted">Att. spé. :</span> {attSpe.join(" · ")}</p>}
        {Array.isArray(qualites) && qualites.length > 0 && <p><span className="text-content-muted">Qualités spé. :</span> {qualites.join(" · ")}</p>}

        {/* Ligne 6: JS */}
        <p><span className="text-content-muted">JS :</span> {js ? (typeof js === "string" ? js : `Vig ${js.vig || js.fort}, Réf ${js.réf ?? js.ref}, Vol ${js.vol || js.will}`) : '–'}</p>

        {/* Ligne 7: Caractéristiques */}
        {carac && <p><span className="text-content-muted">Carac :</span> For {typeof carac.for === 'number' ? carac.for : carac.str || '–'}, Dex {typeof carac.dex === 'number' ? carac.dex : carac.dex || '–'}, Con {typeof carac.con === 'number' ? carac.con : carac.con || '–'}, Int {typeof carac.int === 'number' ? carac.int : carac.int || '–'}, Sag {typeof carac.sag === 'number' ? carac.sag : carac.wis || '–'}, Cha {typeof carac.cha === 'number' ? carac.cha : carac.cha || '–'}</p>}

        {/* Ligne 8: Compétences & Dons */}
        {competences && (
          <p>
            <span className="text-content-muted">Compétences :</span> {competences}
          </p>
        )}
        {dons && (
          <p>
            <span className="text-content-muted">Dons :</span> {dons}
          </p>
        )}

        {/* Ligne 9: Environnement, Organisation, FP, Butin */}
        <p><span className="text-content-muted">Environnement :</span> {env ?? '–'}</p>
        <p><span className="text-content-muted">Organisation :</span> {orga ?? '–'}</p>
        <p><span className="text-content-muted">FP :</span> {fp ?? '–'} ; <span className="text-content-muted">Butin :</span> {butin ?? '–'}</p>

        {/* Ligne 10: Tactiques */}
        {tactiques && (
          <p>
            <span className="text-content-muted">Tactiques :</span> {tactiques}
          </p>
        )}
      </div>

      {/* Description et rôle */}
      {!npc.tactical && (npc.role || npc.description) && (
        <div className="text-sm text-content-secondary space-y-1">
          <h4 className="text-xs uppercase tracking-widest text-content-subtle">Présentation</h4>
          <p>{npc.role || npc.description}</p>
        </div>
      )}

      {/* Détails additionnels */}
      {npc.details?.length > 0 && (
        <div className="space-y-1">
          <h4 className="text-xs uppercase tracking-widest text-content-subtle">Caractéristiques</h4>
          <ul className="space-y-1 text-sm text-content-secondary">
            {npc.details.map((d, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="mt-1 w-1 h-1 rounded-full bg-text-content-subtle block flex-shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NpcCard;
