import Fuse from "fuse.js";
import { universeData } from "../data/universe/universe";
import { scenariosData } from "../data/scenarios/scenarios";
import { factionsData } from "../data/pnj/factions";
import { antagonistData } from "../data/pnj/antagonist";

const toText = (value) => {
  if (Array.isArray(value)) return value.filter(Boolean).join(" · ");
  return value || "";
};

export function buildSearchIndex() {
  const entries = [];

  // Zones, lieux, PNJ
  (universeData.zones || []).forEach((zone) => {
    entries.push({
      type: "Zone",
      title: toText(zone.name),
      description: toText(zone.details),
      path: `/univers?zone=${zone.id}`,
    });

    (zone.locations || []).forEach((loc) => {
      entries.push({
        type: "Lieu",
        title: toText(loc.name),
        description: toText(loc.summary),
        path: `/univers?zone=${zone.id}&loc=${loc.id}`,
      });

      (loc.npcs || []).forEach((npc) => {
        entries.push({
          type: "PNJ",
          title: toText(npc.name),
          description: toText(npc.role),
          path: `/univers?zone=${zone.id}&loc=${loc.id}&pnj=${npc.id}`,
        });
      });
    });
  });

  // Factions
  (factionsData || []).forEach((faction, idx) => {
    entries.push({
      type: "Faction",
      title: toText(faction.name),
      description: toText(`${faction.type || ""} · ${faction.desc || ""}`.trim()),
      path: "/factions",
      order: idx,
    });
  });

  // Antagoniste
  if (antagonistData) {
    entries.push({
      type: "Antagoniste",
      title: toText(antagonistData.name),
      description: toText(antagonistData.title),
      path: "/antagoniste",
    });
    (antagonistData.evolution || []).forEach((step, idx) => {
      entries.push({
        type: "Antagoniste",
        title: toText(step.title),
        description: toText(`${step.lvl || ""} · ${step.desc || ""}`.trim()),
        path: "/antagoniste",
        order: idx,
      });
    });
  }

  // Scénarios + scènes
  (scenariosData || []).forEach((scenario) => {
    entries.push({
      type: "Scénario",
      title: toText(scenario.title),
      description: toText(scenario.synopsis),
      path: `/scenarios/${scenario.id}`,
    });

    (scenario.acts || []).forEach((act) => {
      (act.scenes || []).forEach((scene) => {
        entries.push({
          type: "Scène",
          title: toText(scene.title),
          description: toText([act.title, ...(scene.details || [])]),
          path: `/scenarios/${scenario.id}?scene=${encodeURIComponent(scene.title)}`,
        });
      });
    });
  });

  return entries;
}

export function buildSearchEngine() {
  const entries = buildSearchIndex();
  const fuse = new Fuse(entries, {
    includeScore: false,
    threshold: 0.35,
    ignoreLocation: true,
    // Extended search not needed here; disabling avoids pathological recursion in some inputs
    useExtendedSearch: false,
    keys: [
      { name: "title", weight: 0.6 },
      { name: "description", weight: 0.25 },
      { name: "type", weight: 0.15 },
    ],
  });
  return { entries, fuse };
}

export function filterSearch(term, fuse) {
  const q = term.trim();
  if (!fuse || q.length < 2) return [];
  return fuse.search(q).map((res) => res.item);
}
