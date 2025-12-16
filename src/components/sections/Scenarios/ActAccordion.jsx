import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SceneCard from "./SceneCard";

function ActAccordion({ act, isOpen, onToggle, targetSceneTitle }) {
  const [openSceneTitle, setOpenSceneTitle] = useState("");

  // Auto-open target scene, else first scene.
  useEffect(() => {
    if (!isOpen) return;
    const target = act.scenes?.find(
      (scene) => scene.title.toLowerCase() === targetSceneTitle?.toLowerCase()
    );
    if (target) {
      setOpenSceneTitle(target.title);
      return;
    }
    if (!openSceneTitle && act.scenes?.[0]) {
      setOpenSceneTitle(act.scenes[0].title);
    }
  }, [isOpen, act.scenes, targetSceneTitle, openSceneTitle]);

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-blue-500"
            aria-hidden="true"
          >
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
            <line x1="8" x2="8" y1="2" y2="18" />
            <line x1="16" x2="16" y1="6" y2="22" />
          </svg>
          LIEU : {act.location}
        </span>
      </div>

      {isOpen && (
        <div className="grid grid-cols-1 gap-3 animate-slideDown">
          {act.scenes.map((scene, i) => (
            <SceneCard
              key={i}
              scene={scene}
              expanded={openSceneTitle === scene.title}
              onToggle={() =>
                setOpenSceneTitle((prev) => (prev === scene.title ? "" : scene.title))
              }
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
