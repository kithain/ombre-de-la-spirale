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
        "bg-stone-950 border border-stone-800 p-4 rounded hover:border-amber-900/50 transition-colors group",
        highlight && "border-amber-700 shadow-[0_0_0_1px_rgba(217,119,6,0.35)]"
      )}
    >
      <div className="flex justify-between items-start mb-3 border-b border-stone-900 pb-2 gap-3">
        <div>
          <h5 className="font-serif font-bold text-stone-200 text-lg">{scene.title}</h5>
          {favorite && (
            <span className="text-xs text-amber-400 uppercase tracking-widest">Favori</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setFavorite((v) => !v)}
            className={cn(
              "text-xs px-2 py-1 rounded border transition-colors",
              favorite
                ? "border-amber-600 text-amber-300 bg-amber-900/20"
                : "border-stone-700 text-stone-400 hover:border-amber-700 hover:text-amber-300"
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
            className="flex gap-2 text-sm text-stone-400 group-hover:text-stone-300 transition-colors leading-relaxed"
          >
            <span className="text-stone-600 mt-1.5 w-1 h-1 rounded-full bg-stone-600 block flex-shrink-0 group-hover:bg-amber-700 transition-colors" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {(linkedLocation || linkedNpcs.length > 0) && (
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {linkedLocation && (
            <Link
              to={makeUniverseLink({ zoneId: linkedLocation.zone.id, locId: linkedLocation.loc.id })}
              className="inline-flex items-center gap-1 px-2 py-1 rounded border border-amber-800 text-amber-200 bg-amber-900/10 hover:bg-amber-900/20 transition-colors"
            >
              📍 {linkedLocation.loc.name}
            </Link>
          )}
          {linkedNpcs.map(({ npc, loc, zone }) => (
            <Link
              key={npc.id}
              to={makeUniverseLink({ zoneId: zone.id, locId: loc.id, npcId: npc.id })}
              className="inline-flex items-center gap-1 px-2 py-1 rounded border border-stone-700 text-stone-200 bg-stone-900/50 hover:border-amber-700 hover:text-amber-200 transition-colors"
            >
              👤 {npc.name}
            </Link>
          ))}
        </div>
      )}

      <div className="mt-4">
        <label className="text-xs uppercase tracking-widest text-stone-500 block mb-1">
          Notes MJ
        </label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full bg-stone-900 border border-stone-800 rounded p-2 text-sm text-stone-200 focus:border-amber-700 focus:outline-none"
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
