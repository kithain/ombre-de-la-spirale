import React from "react";
import { Shield } from "lucide-react";
import { factionsData } from "../../data/pnj/factions";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { findNpcById, makeUniverseLink } from "../../utils/dataLinks";

function FactionsView() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionTitle
        title="Factions"
        icon={Shield}
        subtitle="Les forces en présence à Val-d'Ombre"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {factionsData.map((faction, idx) => (
          <Card key={idx} className={`border ${faction.color} bg-opacity-40`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-surface-border">
                {faction.icon && <faction.icon size={20} className={faction.color.split(" ")[0]} />}
              </div>
              <div>
                <h3 className="text-sm font-serif text-content">{faction.name}</h3>
                <p className="text-[11px] uppercase tracking-widest text-content-subtle">{faction.type}</p>
              </div>
            </div>
            <p className="text-sm text-content-secondary leading-relaxed">{faction.desc}</p>
            {faction.hierarchy?.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-xs uppercase tracking-wide text-content-muted">Hiérarchie</h4>
                <ul className="space-y-2">
                  {faction.hierarchy.map((item, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-sm text-content bg-surface-raised/70 border border-surface-border rounded px-3 py-2"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-accent-light">{item.role}</span>
                        {item.npcId && (() => {
                          const npcLink = findNpcById(item.npcId);
                          const label = npcLink?.npc?.name || item.npcId;
                          const href = npcLink ? makeUniverseLink({ zoneId: npcLink.zone.id, locId: npcLink.loc.id, npcId: item.npcId }) : null;
                          return href ? (
                            <a
                              href={href}
                              title={item.npcId}
                              className="text-sm text-content underline decoration-accent/60 decoration-dotted underline-offset-4 hover:text-accent-light transition-colors"
                            >
                              {label}
                            </a>
                          ) : (
                            <span className="text-sm text-content" title={item.npcId}>
                              {label}
                            </span>
                          );
                        })()}
                      </div>
                      {item.notes && <p className="text-content-muted text-xs mt-1 leading-relaxed">{item.notes}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {faction.npcs?.length > 0 && (
              <div className="mt-3">
                <h4 className="text-xs uppercase tracking-wide text-content-muted">PNJ</h4>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {faction.npcs.map((npcId) => {
                    const npcLink = findNpcById(npcId);
                    const label = npcLink?.npc?.name || npcId;
                    const href = npcLink ? makeUniverseLink({ zoneId: npcLink.zone.id, locId: npcLink.loc.id, npcId }) : null;
                    return href ? (
                      <a
                        key={npcId}
                        href={href}
                        title={npcId}
                        className="text-[11px] text-accent-light bg-accent-surface border border-accent-muted/40 rounded px-2 py-1 tracking-wide hover:border-accent transition-colors"
                      >
                        {label}
                      </a>
                    ) : (
                      <span
                        key={npcId}
                        title={npcId}
                        className="text-[11px] text-accent-light bg-accent-surface border border-accent-muted/40 rounded px-2 py-1 tracking-wide"
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FactionsView;
