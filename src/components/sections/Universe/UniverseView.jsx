import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Map } from "lucide-react";
import { universeData } from "../../../data/universe/universe";
import SectionTitle from "../../ui/SectionTitle";
import Card from "../../ui/Card";
import ZoneList from "./ZoneList";
import LocationDetails from "./LocationDetails";
import { usePersistentState } from "../../../hooks/usePersistentState";

import { getNpcsForLocation } from "../../../utils/dataLinks";

function UniverseView() {
  const zones = universeData.zones || [];
  const [selectedZoneId, setSelectedZoneId] = usePersistentState(
    "universe-zone",
    zones[0]?.id || null
  );
  const [selectedLocationId, setSelectedLocationId] = usePersistentState("universe-loc", null);
  const [selectedNpcId, setSelectedNpcId] = usePersistentState("universe-pnj", null);
  const [searchParams] = useSearchParams();

  const selectedZone = zones.find((z) => z.id === selectedZoneId) || zones[0] || null;
  const locations = selectedZone?.locations || [];

  useEffect(() => {
    const zoneParam = searchParams.get("zone");
    const locParam = searchParams.get("loc");
    const npcParam = searchParams.get("pnj");

    if (zoneParam) {
      const zone = zones.find((z) => String(z.id) === zoneParam);
      if (zone) {
        setSelectedZoneId(zone.id);
        if (locParam) {
          const loc = zone.locations?.find((l) => String(l.id) === locParam);
          setSelectedLocationId(loc ? loc.id : null);
          if (loc && npcParam) {
            // Utiliser getNpcsForLocation pour récupérer la liste complète (npcIds + legacy)
            const locationNpcs = getNpcsForLocation(loc);
            const npc = locationNpcs.find((n) => String(n.id) === npcParam);
            setSelectedNpcId(npc ? npc.id : null);
          } else {
            setSelectedNpcId(null);
          }
        } else {
          setSelectedLocationId(null);
          setSelectedNpcId(null);
        }
      }
    }
  }, [searchParams, zones]);

  const handleSelectZone = (zoneId) => {
    setSelectedZoneId(zoneId);
    setSelectedLocationId(null);
    setSelectedNpcId(null);
  };

  const handleSelectLocation = (locationId) => {
    setSelectedLocationId(locationId);
    setSelectedNpcId(null);
  };

  const handleSelectNpc = (npcId) => {
    setSelectedNpcId((current) => (current === npcId ? null : npcId));
  };

  return (
    <div className="space-y-8 animate-fadeIn text-content-secondary">
      <SectionTitle
        title={universeData.title}
        icon={Map}
        subtitle={universeData.intro}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Atmosphère générale */}
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {universeData.sections.map((section, idx) => (
            <Card key={idx}>
              <h3 className="text-xl font-serif text-accent mb-4 border-l-2 border-accent-dark pl-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.content.map((point, i) => (
                  <li key={i} className="flex gap-2 text-lg text-content-secondary">
                    <span className="text-accent-dark mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-dark block flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Colonne 1 : Zones */}
        <ZoneList zones={zones} selectedZoneId={selectedZoneId} onSelect={handleSelectZone} />

        {/* Colonnes 2 & 3 : Lieux et PNJ */}
        <div className="lg:col-span-2">
          <LocationDetails
            locations={locations}
            selectedLocationId={selectedLocationId}
            onSelectLocation={handleSelectLocation}
            selectedNpcId={selectedNpcId}
            onSelectNpc={handleSelectNpc}
          />
        </div>
      </div>
    </div>
  );
}

export default UniverseView;
