import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ActAccordion from "./ActAccordion";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

function ScenarioRow({ scenario, isOpen, onToggle, targetSceneTitle }) {
  const [openActTitle, setOpenActTitle] = useLocalStorage(
    `scenario-open-act-${scenario.id}`,
    ""
  );

  useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      window.localStorage.setItem("current-scenario", String(scenario.id));
    }
  }, [isOpen, scenario.id]);

  // Ensure an act is open: target scene takes precedence, else persisted, else first act.
  useEffect(() => {
    if (!isOpen) return;
    const actWithTarget = scenario.acts.find((act) =>
      act.scenes?.some(
        (scene) => scene.title.toLowerCase() === targetSceneTitle.toLowerCase()
      )
    );
    if (actWithTarget) {
      setOpenActTitle(actWithTarget.title);
      return;
    }
    if (!openActTitle && scenario.acts[0]) {
      setOpenActTitle(scenario.acts[0].title);
    }
  }, [isOpen, scenario.acts, targetSceneTitle, openActTitle, setOpenActTitle]);

  return (
    <div className="border border-stone-800 bg-stone-950/60 rounded-lg overflow-hidden transition-all duration-300 hover:border-stone-600">
      <div
        onClick={onToggle}
        className="p-6 cursor-pointer flex items-center justify-between bg-gradient-to-r from-stone-900 to-stone-800 group"
      >
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 flex items-center justify-center bg-stone-950 border border-stone-700 rounded-full font-serif font-bold text-xl text-amber-600 shadow-inner group-hover:text-amber-400 group-hover:border-amber-900 transition-all">
            {scenario.id}
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-stone-200 group-hover:text-amber-100 transition-colors">
              {scenario.title}
            </h3>
            <span className="text-sm text-stone-500 font-mono tracking-wider">{scenario.level}</span>
          </div>
        </div>
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <span className="text-stone-500">▼</span>
        </div>
      </div>

      {isOpen && (
        <div className="p-6 border-t border-stone-800 bg-stone-950/50">
          <div className="mb-8 p-4 bg-amber-950/10 border border-amber-900/30 rounded italic text-stone-400 text-sm leading-relaxed max-w-3xl mx-auto text-center font-serif">
            {scenario.synopsis}
          </div>

          <div className="space-y-2">
            {scenario.acts.map((act, idx) => (
              <ActAccordion
                key={idx}
                act={act}
                isOpen={openActTitle === act.title}
                onToggle={() =>
                  setOpenActTitle((prev) => (prev === act.title ? "" : act.title))
                }
                targetSceneTitle={targetSceneTitle}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

ScenarioRow.propTypes = {
  scenario: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    level: PropTypes.string,
    synopsis: PropTypes.string,
    acts: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  targetSceneTitle: PropTypes.string,
};

ScenarioRow.defaultProps = {
  targetSceneTitle: "",
};

export default ScenarioRow;
