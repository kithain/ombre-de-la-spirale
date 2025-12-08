import React from "react";
import PropTypes from "prop-types";
import Card from "../../ui/Card";
import { cn } from "../../../utils/cn";

function ZoneList({ zones, selectedZoneId, onSelect }) {
  return (
    <Card>
      <h3 className="text-sm font-mono tracking-widest text-content-muted uppercase border-b border-surface-border pb-2 mb-4">
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
                ? "bg-accent-surface border-accent-dark text-accent-light"
                : "bg-surface/50 border-surface-border text-content-secondary hover:border-surface-border"
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
