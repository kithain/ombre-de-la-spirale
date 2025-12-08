import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Tag from "../../ui/Tag";
import { cn } from "../../../utils/cn";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { findLocationById, findNpcById, makeUniverseLink } from "../../../utils/dataLinks";

function SceneCard({ scene, highlight }) {
  const [note, setNote] = useLocalStorage(`scene-note-${scene.title}`, "");
  const [favorite, setFavorite] = useLocalStorage(
    `scene-fav-${scene.title}`,
    false
  );

  const linkedLocation = scene.locationId ? findLocationById(scene.locationId) : null;
  const linkedNpcs = Array.isArray(scene.npcIds)
    ? scene.npcIds
        .map((id) => findNpcById(id))
        .filter(Boolean)
    : [];

  return (
    <div
      className={cn(
        "bg-surface border border-surface-border p-4 rounded hover:border-accent-muted transition-colors group",
        highlight && "border-accent-dark shadow-[0_0_0_1px_rgba(217,119,6,0.35)]"
      )}
    >
      <div className="flex justify-between items-start mb-3 border-b border-surface-border pb-2 gap-3">
        <div>
          <h5 className="font-serif font-bold text-content text-lg">{scene.title}</h5>
          {favorite && (
            <span className="text-xs text-accent uppercase tracking-widest">Favori</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setFavorite((v) => !v)}
            className={cn(
              "text-xs px-2 py-1 rounded border transition-colors",
              favorite
                ? "border-accent text-accent-light bg-accent-surface"
                : "border-surface-border text-content-muted hover:border-accent-dark hover:text-accent-light"
            )}
          >
            ★
          </button>
          <Tag type={scene.type} />
        </div>
      </div>
      <ul className="space-y-1.5">
        {scene.details.map((detail, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm text-content-muted group-hover:text-content-secondary transition-colors leading-relaxed"
          >
            <span className="text-content-subtle mt-1.5 w-1 h-1 rounded-full bg-surface-border block flex-shrink-0 group-hover:bg-accent-dark transition-colors" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {(linkedLocation || linkedNpcs.length > 0) && (
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {linkedLocation && (
            <Link
              to={makeUniverseLink({ zoneId: linkedLocation.zone.id, locId: linkedLocation.loc.id })}
              className="inline-flex items-center gap-1 px-2 py-1 rounded border border-accent-muted text-accent-light bg-accent-surface hover:bg-accent-surface transition-colors"
            >
              📍 {linkedLocation.loc.name}
            </Link>
          )}
          {linkedNpcs.map(({ npc, loc, zone }) => (
            <Link
              key={npc.id}
              to={makeUniverseLink({ zoneId: zone.id, locId: loc.id, npcId: npc.id })}
              className="inline-flex items-center gap-1 px-2 py-1 rounded border border-surface-border text-content bg-surface-raised/50 hover:border-accent-dark hover:text-accent-light transition-colors"
            >
              👤 {npc.name}
            </Link>
          ))}
        </div>
      )}

      <div className="mt-4">
        <label className="text-xs uppercase tracking-widest text-content-subtle block mb-1">
          Notes MJ
        </label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full bg-surface-raised border border-surface-border rounded p-2 text-sm text-content focus:border-accent-dark focus:outline-none"
          rows={3}
          placeholder="Notes, rappels, ajustements..."
        />
      </div>
    </div>
  );
}

SceneCard.propTypes = {
  scene: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  highlight: PropTypes.bool,
};

SceneCard.defaultProps = {
  highlight: false,
};

export default SceneCard;
