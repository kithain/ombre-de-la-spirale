import React from "react";
import { Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { factionsData } from "../../data/pnj/factions";
import SectionTitle from "../ui/SectionTitle";
import GenericCard from "../ui/GenericCard";
import GenericList from "../ui/GenericList";
import { findNpcById, makeUniverseLink } from "../../utils/dataLinks";

function FactionsView() {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6 animate-fadeIn">
      <SectionTitle
        title={t("factions.title")}
        icon={Shield}
        subtitle={t("factions.subtitle")}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {factionsData.map((faction) => (
          <GenericCard 
            key={faction.name}
            className={faction.color}
            title={faction.name}
            subtitle={faction.type}
            icon={faction.icon && <faction.icon size={20} className={faction.color.split(" ")[0]} />}
          >
            <p className="text-sm text-content-secondary leading-relaxed">{faction.desc}</p>
            
            {faction.hierarchy?.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-xs uppercase tracking-wide text-content-muted">
                  {t("factions.hierarchy")}
                </h4>
                <GenericList
                  items={faction.hierarchy}
                  renderItem={(item) => (
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-accent-light">{item.role}</span>
                      {item.npcId && (() => {
                        const npcLink = findNpcById(item.npcId);
                        const label = npcLink?.npc?.name || item.npcId;
                        const href = npcLink ? makeUniverseLink({ 
                          zoneId: npcLink.zone.id, 
                          locId: npcLink.loc.id, 
                          npcId: item.npcId 
                        }) : null;
                        
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
                  )}
                />
              </div>
            )}
            {faction.npcIds?.length > 0 && (
              <div className="mt-3">
                <h4 className="text-xs uppercase tracking-wide text-content-muted">
                  {t("factions.npcs")}
                </h4>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {faction.npcIds.map((npcId) => {
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
          </GenericCard>
        ))}
      </div>
    </div>
  );
}

export default FactionsView;
