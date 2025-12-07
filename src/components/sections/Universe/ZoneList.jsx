import React from "react";
import PropTypes from "prop-types";
import Card from "../../ui/Card";
import { cn } from "../../../utils/cn";

function ZoneList({ zones, selectedZoneId, onSelect }) {
  return (
    <Card>
      <h3 className="text-sm font-mono tracking-widest text-stone-400 uppercase border-b border-stone-800 pb-2 mb-4">
        Zones de Val-d&apos;Ombre
      </h3>
      <div className="space-y-2 mb-4">
        {zones.map((zone) => (
          <button
            key={zone.id}
            onClick={() => onSelect(zone.id)}
            className={cn(
              "w-full text-left px-3 py-2 rounded border text-sm font-serif transition-colors",
              selectedZoneId === zone.id
                ? "bg-amber-900/20 border-amber-700 text-amber-300"
                : "bg-stone-950/50 border-stone-800 text-stone-300 hover:border-stone-600"
            )}
          >
            {zone.name}
          </button>
        ))}
      </div>
    </Card>
  );
}

ZoneList.propTypes = {
  zones: PropTypes.array.isRequired,
  selectedZoneId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func.isRequired,
};

ZoneList.defaultProps = {
  selectedZoneId: null,
};

export default ZoneList;
