import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "../../ui/Card";
import { cn } from "../../../utils/cn";
import {
  findNpcsByLocationId,
  findNpcById,
  findNpcOccurrences,
  makeUniverseLink,
} from "../../../utils/dataLinks";

function LocationDetails({
  locations,
  selectedLocationId,
  onSelectLocation,
  selectedNpcId,
  onSelectNpc,
}) {
  const selectedLocation =
    locations.find((loc) => loc.id === selectedLocationId) || locations[0] || null;
  const baseNpcs = selectedLocation?.npcs || [];
  const linkedNpcs = selectedLocation ? findNpcsByLocationId(selectedLocation.id) : [];

  const antagonistUrl = (npcId) => `/antagoniste?pnj=${encodeURIComponent(npcId)}`;

  // Assurer que tous les PNJ liés (via scènes) sont présents dans la liste affichée
  const extraNpcs = linkedNpcs
    .map((entry) => findNpcById(entry.npcId)?.npc || null)
    .filter(Boolean);
  const npcs = Array.from(
    new Map([...baseNpcs, ...extraNpcs].map((npc) => [npc.id, npc])).values()
  );

  const selectedNpc = selectedNpcId ? npcs.find((npc) => npc.id === selectedNpcId) : null;
  const npcOccurrences = selectedNpc ? findNpcOccurrences(selectedNpc.id) : [];

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
                  <p className="text-content-muted text-xs mb-1">Détails du lieu (check-list)</p>
                  <ul className="space-y-1.5">
                    {selectedLocation.details?.map((detail, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-surface-border block flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {linkedNpcs.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="text-xs uppercase tracking-widest text-content-muted">
                      PNJ liés à ce lieu
                    </h5>
                    <ul className="space-y-2">
                      {linkedNpcs.map((entry) => {
                        const link = findNpcById(entry.npcId);
                        const label = link?.npc?.name || entry.npcId;
                        const href = null; // Lien univers redondant ici
                        return (
                          <li
                            key={entry.npcId}
                            className="bg-surface/50 border border-surface-border rounded px-3 py-2"
                          >
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-accent-light font-semibold">{label}</span>
                              <Link
                                to={antagonistUrl(entry.npcId)}
                                className="text-[11px] px-2 py-0.5 rounded border border-accent-muted text-accent-light bg-accent-surface hover:border-accent transition-colors"
                              >
                                Fiche (Antagoniste)
                              </Link>
                            </div>
                            {entry.occurrences?.length > 0 && (
                              <p className="mt-1 text-[11px] text-content-subtle">
                                {entry.occurrences.length} apparition{entry.occurrences.length > 1 ? "s" : ""}
                              </p>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <p className="text-sm text-content-subtle">Aucun lieu défini pour cette zone.</p>
        )}
      </Card>

      <Card>
        <h3 className="text-sm font-mono tracking-widest text-content-muted uppercase border-b border-surface-border pb-2 mb-4 flex items-center justify-between">
          <span>PNJ</span>
          {npcs.some((npc) => npc.isEnemy) && (
            <span className="text-[10px] px-2 py-1 rounded-full border border-red-700 text-red-300 bg-red-900/20 uppercase tracking-widest">
              Spoiler : Ennemis
            </span>
          )}
        </h3>

        {selectedLocation ? (
          npcs.length > 0 ? (
            <>
              <div className="space-y-2 mb-4">
                {npcs.map((npc) => (
                  <button
                    key={npc.id}
                    onClick={() => onSelectNpc(npc.id)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded border text-sm font-serif flex items-center justify-between gap-2 transition-colors",
                      selectedNpcId && selectedNpcId === npc.id
                        ? "bg-surface-raised border-accent-dark text-accent-light"
                        : "bg-surface/50 border-surface-border text-content-secondary hover:border-surface-border"
                    )}
                  >
                    <div>
                      <div className="font-semibold">{npc.name}</div>
                      <div className="text-xs text-content-muted">{npc.role}</div>
                    </div>
                    {npc.isEnemy && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full border border-red-700 text-red-300 bg-red-900/20 uppercase tracking-widest">
                        Spoiler
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {selectedNpcId && (
                <div className="space-y-3 text-sm text-content-secondary">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-serif text-accent">{selectedNpc?.name}</h4>
                    {selectedNpc?.id && (
                      <Link
                        to={antagonistUrl(selectedNpc.id)}
                        className="text-[11px] px-2 py-0.5 rounded border border-accent-muted text-accent-light bg-accent-surface hover:border-accent transition-colors"
                      >
                        Voir la fiche Antagoniste
                      </Link>
                    )}
                  </div>
                  <p className="text-content-muted text-xs mb-1">Détails PNJ (check-list)</p>
                  <ul className="space-y-1.5">
                    {selectedNpc?.details?.map((detail, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-surface-border block flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {npcOccurrences.length > 0 && (
                    <div className="space-y-2 pt-1">
                      <h5 className="text-[11px] uppercase tracking-widest text-content-muted">
                        Apparitions dans les scénarios
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {npcOccurrences.map((occ, idx) => (
                          <Link
                            key={`${selectedNpc.id}-${idx}-${occ.sceneTitle}`}
                            to={`/scenarios?scenario=${occ.scenarioId}&scene=${encodeURIComponent(
                              occ.sceneTitle
                            )}`}
                            className="px-3 py-1 rounded border border-accent-muted text-accent-light bg-accent-surface hover:bg-accent-surface text-[11px] uppercase tracking-wide transition-colors"
                            title={`${occ.scenarioTitle} · ${occ.actTitle} · ${occ.sceneTitle}`}
                          >
                            {occ.scenarioId}.{occ.actNumber}.{occ.sceneNumber} : {occ.sceneTitle}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <p className="text-sm text-content-subtle">
              Aucun PNJ défini pour ce lieu. Ajoute-les dans universeData si besoin.
            </p>
          )
        ) : (
          <p className="text-sm text-content-subtle">Sélectionne un lieu pour voir les PNJ associés.</p>
        )}
      </Card>
    </div>
  );
}

LocationDetails.propTypes = {
  locations: PropTypes.array.isRequired,
  selectedLocationId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelectLocation: PropTypes.func.isRequired,
  selectedNpcId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelectNpc: PropTypes.func.isRequired,
};

LocationDetails.defaultProps = {
  selectedLocationId: null,
  selectedNpcId: null,
};

export default LocationDetails;
