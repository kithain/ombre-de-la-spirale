// Point d'entrée unique pour toutes les données
export { universeData } from './universe/universe';
export { scenariosData } from './scenarios/scenarios';
export { pnjPrincipaux } from './pnj/pnjPrincipaux';
export { pnjEnnemis } from './pnj/pnjEnnemis';
export { bestiaryData35FR as bestiaryData } from './bestiary/bestiary';
export { factionsData } from './pnj/factions';
export { antagonistData } from './pnj/antagonist';

// Utilitaires de données simplifiés
export { makeUniverseLink } from '../utils/dataLinks';

// Fonctions utilitaires de base (remplacement NpcService)
export const findNpcById = (id, npcs) => npcs?.find(npc => npc.id === id) || null;
export const findNpcByName = (name, npcs) => {
  const lower = name.toLowerCase();
  return npcs?.find(npc => npc.name?.toLowerCase() === lower) || null;
};
