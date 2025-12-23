import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "../../ui/Card";
import { cn } from "../../../utils/cn";
import {
  findNpcsByLocationId,
  findNpcById,
  findNpcOccurrences,
  getNpcsForLocation,
} from "../../../utils/dataLinks";

function LocationDetails({
  locations,
  selectedLocationId,
  onSelectLocation,
}) {
  const selectedLocation =
    locations.find((loc) => loc.id === selectedLocationId) || locations[0] || null;
  
  const antagonistUrl = (npcId) => `/antagoniste?pnj=${encodeURIComponent(npcId)}`;

  // PNJ résidents (npcIds + fallback legacy npcs[])
  const residentNpcs = selectedLocation ? getNpcsForLocation(selectedLocation) : [];
  const residents = residentNpcs.map((npc) => ({
    ...npc,
    occurrences: findNpcOccurrences(npc.id),
  }));

  // PNJ visiteurs (apparitions via scénarios mais non résidents)
  const visitorEntries = selectedLocation ? findNpcsByLocationId(selectedLocation.id) : [];
  const residentIds = new Set(residentNpcs.map((npc) => npc.id));
  
  // Filtrer les visiteurs qui sont déjà résidents (priorité aux résidents)
  const visitors = visitorEntries
    .filter((entry) => !residentIds.has(entry.npcId))
    .map((entry) => {
      const npcLink = findNpcById(entry.npcId);
      const npcData = npcLink?.npc;
      return {
        id: entry.npcId,
        name: npcData?.name || entry.npcId,
        role: npcData?.role || "",
        isEnemy: npcData?.isEnemy ?? npcData?.est_ennemi ?? false,
        occurrences: entry.occurrences || [],
      };
    });

  const NpcCard = ({ npc, isResident }) => (
    <div className="bg-surface/50 border border-surface-border rounded px-3 py-2 space-y-2">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-accent-light">{npc.name}</span>
            {npc.isEnemy && (
              <span className="text-[10px] px-1.5 py-0.5 rounded border border-red-700 text-red-300 bg-red-900/20 uppercase tracking-wide">
                Ennemi
              </span>
            )}
          </div>
          {npc.role && <p className="text-xs text-content-muted">{npc.role}</p>}
        </div>
        {npc.id && (
          <Link
            to={antagonistUrl(npc.id)}
            className="text-[10px] px-2 py-1 rounded border border-accent-muted text-accent-light bg-accent-surface hover:border-accent transition-colors"
          >
            Fiche
          </Link>
        )}
      </div>

      {isResident && npc.details && npc.details.length > 0 && (
        <ul className="space-y-1 mt-2">
          {npc.details.map((detail, idx) => (
            <li key={idx} className="flex gap-2 text-xs text-content-secondary">
              <span className="mt-1 w-1 h-1 rounded-full bg-surface-border block flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}

      {npc.occurrences && npc.occurrences.length > 0 && (
        <div className="pt-1">
          <p className="text-[10px] uppercase tracking-widest text-content-muted mb-1.5">
            Apparitions dans les scénarios
          </p>
          <div className="flex flex-wrap gap-2">
            {npc.occurrences.map((occ, idx) => (
              <Link
                key={`${npc.id}-${idx}-${occ.sceneTitle}`}
                to={`/scenarios?scenario=${occ.scenarioId}&scene=${encodeURIComponent(
                  occ.sceneTitle
                )}`}
                className="px-2 py-1 rounded border border-accent-muted text-accent-light bg-accent-surface hover:bg-accent-surface/80 text-[10px] uppercase tracking-wide transition-colors"
                title={`${occ.scenarioTitle} · ${occ.actTitle} · ${occ.sceneTitle}`}
              >
                {occ.scenarioId}.{occ.actNumber}.{occ.sceneNumber}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-sm font-mono tracking-widest text-content-muted uppercase border-b border-surface-border pb-2 mb-4">
          Lieux marquants
        </h3>

        {locations.length > 0 ? (
          <>
            <div className="space-y-2 mb-4">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => onSelectLocation(loc.id)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded border text-sm font-serif transition-colors",
                    selectedLocation && selectedLocation.id === loc.id
                      ? "bg-surface-raised border-accent-dark text-accent-light"
                      : "bg-surface/50 border-surface-border text-content-secondary hover:border-surface-border"
                  )}
                >
                  <div className="font-semibold">{loc.name}</div>
                  <div className="text-xs text-content-muted line-clamp-1">{loc.summary}</div>
                </button>
              ))}
            </div>

            {selectedLocation && (
              <div className="space-y-4 text-sm text-content-secondary">
                <div className="space-y-3">
                  <h4 className="font-serif text-accent">{selectedLocation.name}</h4>
                  <p className="text-content-muted text-xs mb-1">Détails du lieu</p>
                  <ul className="space-y-1.5">
                    {selectedLocation.details?.map((detail, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-surface-border block flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </>
        ) : (
          <p className="text-sm text-content-subtle">Aucun lieu défini pour cette zone.</p>
        )}
      </Card>

      <Card>
        <div className="space-y-6">
          {/* Section PNJ Résidents */}
          <div>
            <h3 className="text-sm font-mono tracking-widest text-content-muted uppercase border-b border-surface-border pb-2 mb-4 flex items-center justify-between">
              <span>PNJ résidents</span>
            </h3>
            {selectedLocation ? (
              residents.length > 0 ? (
                <div className="space-y-3">
                  {residents.map((npc) => (
                    <NpcCard key={npc.id} npc={npc} isResident={true} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-content-subtle">Aucun résident répertorié.</p>
              )
            ) : (
              <p className="text-sm text-content-subtle">Sélectionnez un lieu.</p>
            )}
          </div>

          {/* Section PNJ Visiteurs */}
          {visitors.length > 0 && (
            <div>
              <h3 className="text-sm font-mono tracking-widest text-content-muted uppercase border-b border-surface-border pb-2 mb-4">
                PNJ visiteurs
              </h3>
              <div className="space-y-3">
                {visitors.map((visitor) => (
                  <NpcCard key={visitor.id} npc={visitor} isResident={false} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

LocationDetails.propTypes = {
  locations: PropTypes.array.isRequired,
  selectedLocationId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelectLocation: PropTypes.func.isRequired,
};

LocationDetails.defaultProps = {
  selectedLocationId: null,
};

export default LocationDetails;
