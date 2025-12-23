import { universeData, scenariosData, pnjPrincipaux, pnjEnnemis, bestiaryData } from '../data';
import { findNpcById as findNpcInData, findNpcByName as findNpcByNameInData } from '../data';

export function makeUniverseLink({ zoneId, locId, npcId }) {
  const params = new URLSearchParams();
  if (zoneId) params.set("zone", zoneId);
  if (locId) params.set("loc", locId);
  if (npcId) params.set("pnj", npcId);
  const query = params.toString();
  return query ? `/univers?${query}` : "/univers";
}

/**
 * Trouve un PNJ par ID dans les données unifiées
 */
export function findNpcById(npcId) {
  // Combiner toutes les sources de PNJ
  const allNpcs = [
    ...(pnjPrincipaux || []).map(npc => ({ ...npc, source: 'principaux' })),
    ...(pnjEnnemis || []).map(npc => ({ ...npc, source: 'ennemis' })),
    ...(bestiaryData || []).map(npc => ({ ...npc, source: 'bestiary' }))
  ];
  
  const npc = findNpcInData(npcId, allNpcs);
  if (!npc) return null;
  
  // Chercher le lieu associé dans universe
  for (const zone of universeData.zones || []) {
    for (const loc of zone.locations || []) {
      if ((loc.npcIds || []).includes(npcId)) {
        return { npc, loc, zone, source: npc.source };
      }
    }
  }
  
  return { npc, loc: null, zone: null, source: npc.source };
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
  // Combiner toutes les sources de PNJ
  const allNpcs = [
    ...(pnjPrincipaux || []),
    ...(pnjEnnemis || []),
    ...(bestiaryData || [])
  ];
  
  const npc = findNpcByNameInData(name, allNpcs);
  if (npc) {
    const result = findNpcById(npc.id);
    if (result?.zone && result?.loc) {
      return makeUniverseLink({ zoneId: result.zone.id, locId: result.loc.id, npcId: npc.id });
    }
  }
  return null;
}

/**
 * Récupère tous les PNJ associés à un lieu (via npcIds ou legacy npcs)
 */
export function getNpcsForLocation(location) {
  const npcs = [];
  const seen = new Set();
  
  // Combiner toutes les sources de PNJ
  const allNpcs = [
    ...(pnjPrincipaux || []),
    ...(pnjEnnemis || []),
    ...(bestiaryData || [])
  ];
  
  // Nouveaux npcIds
  (location.npcIds || []).forEach((id) => {
    if (!seen.has(id)) {
      const npc = findNpcInData(id, allNpcs);
      if (npc) {
        npcs.push(npc);
        seen.add(id);
      }
    }
  });
  
  // Legacy npcs[] (fallback)
  (location.npcs || []).forEach((npc) => {
    if (npc?.id && !seen.has(npc.id)) {
      npcs.push(npc);
      seen.add(npc.id);
    }
  });
  
  return npcs;
}
