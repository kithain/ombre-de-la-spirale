import { universeData } from "../data/universe/universe";
import { scenariosData } from "../data/scenarios/scenarios";

export function makeUniverseLink({ zoneId, locId, npcId }) {
  const params = new URLSearchParams();
  if (zoneId) params.set("zone", zoneId);
  if (locId) params.set("loc", locId);
  if (npcId) params.set("pnj", npcId);
  const query = params.toString();
  return query ? `/univers?${query}` : "/univers";
}

export function findNpcById(npcId) {
  for (const zone of universeData.zones || []) {
    for (const loc of zone.locations || []) {
      const npc = (loc.npcs || []).find((n) => n.id === npcId);
      if (npc) {
        return { npc, loc, zone };
      }
    }
  }
  return null;
}

export function findNpcOccurrences(npcId) {
  const occurrences = [];
  for (const scenario of scenariosData || []) {
    for (const [actIndex, act] of (scenario.acts || []).entries()) {
      for (const [sceneIndex, scene] of (act.scenes || []).entries()) {
        if (Array.isArray(scene.npcIds) && scene.npcIds.includes(npcId)) {
          occurrences.push({
            scenarioId: scenario.id,
            scenarioTitle: scenario.title,
            actTitle: act.title,
            actNumber: actIndex + 1,
            sceneNumber: sceneIndex + 1,
            sceneTitle: scene.title,
          });
        }
      }
    }
  }
  return occurrences;
}

export function findNpcsByLocationId(locationId) {
  const map = new Map();
  for (const scenario of scenariosData || []) {
    for (const [actIndex, act] of (scenario.acts || []).entries()) {
      for (const [sceneIndex, scene] of (act.scenes || []).entries()) {
        if (scene.locationId && String(scene.locationId) === String(locationId)) {
          (scene.npcIds || []).forEach((npcId) => {
            const existing = map.get(npcId) || {
              npcId,
              occurrences: [],
            };
            existing.occurrences.push({
              scenarioId: scenario.id,
              scenarioTitle: scenario.title,
              actTitle: act.title,
              actNumber: actIndex + 1,
              sceneNumber: sceneIndex + 1,
              sceneTitle: scene.title,
            });
            map.set(npcId, existing);
          });
        }
      }
    }
  }
  return Array.from(map.values());
}

export function findLocationById(locId) {
  for (const zone of universeData.zones || []) {
    const loc = (zone.locations || []).find((l) => l.id === locId);
    if (loc) return { loc, zone };
  }
  return null;
}

export function findNpcLinkByName(name) {
  const lower = name.toLowerCase();
  for (const zone of universeData.zones || []) {
    for (const loc of zone.locations || []) {
      const npc = (loc.npcs || []).find((n) => n.name.toLowerCase() === lower);
      if (npc) {
        return makeUniverseLink({ zoneId: zone.id, locId: loc.id, npcId: npc.id });
      }
    }
  }
  return null;
}
