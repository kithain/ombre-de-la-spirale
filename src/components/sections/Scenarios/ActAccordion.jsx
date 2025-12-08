import React from "react";
import PropTypes from "prop-types";
import SceneCard from "./SceneCard";

function ActAccordion({ act, isOpen, onToggle, targetSceneTitle }) {
  const containsTarget = act.scenes?.some(
    (scene) => scene.title.toLowerCase() === targetSceneTitle?.toLowerCase()
  );

  return (
    <div className="border-l-2 border-surface-border ml-4 pl-6 relative pb-8 last:pb-0">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-surface-overlay border-2 border-surface-border" />

      <button
        onClick={onToggle}
        className="flex items-center gap-3 w-full text-left group mb-2"
      >
        <h4 className="text-lg font-serif font-bold text-content-secondary group-hover:text-accent transition-colors">
          {act.title}
        </h4>
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <span className="text-content-subtle">▼</span>
        </div>
      </button>

      <div className="flex flex-wrap gap-4 text-xs font-mono text-content-subtle mb-4 pl-1">
        <span className="flex items-center gap-1.5 bg-surface-raised px-2 py-1 rounded border border-surface-border">
          <span className="text-accent-dark">⚠</span>
          ENJEU : {act.stake}
        </span>
        <span className="flex items-center gap-1.5 bg-surface-raised px-2 py-1 rounded border border-surface-border">
          <span className="text-blue-500">📍</span>
          LIEU : {act.location}
        </span>
      </div>

      {isOpen && (
        <div className="grid grid-cols-1 gap-3 animate-slideDown">
          {act.scenes.map((scene, i) => (
            <SceneCard
              key={i}
              scene={scene}
              highlight={scene.title.toLowerCase() === targetSceneTitle?.toLowerCase()}
            />
          ))}
        </div>
      )}
    </div>
  );
}

ActAccordion.propTypes = {
  act: PropTypes.shape({
    title: PropTypes.string.isRequired,
    stake: PropTypes.string,
    location: PropTypes.string,
    scenes: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  targetSceneTitle: PropTypes.string,
};

ActAccordion.defaultProps = {
  isOpen: false,
  targetSceneTitle: "",
};

export default ActAccordion;
