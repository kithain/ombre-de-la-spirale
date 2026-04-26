import { useState, useMemo, useCallback, useEffect, startTransition } from "react";
import Fuse from "fuse.js";
import { universeData, scenariosData, factionsData } from "../data";
import { tousLesPnj } from "../data/npcRegistry";

/**
 * Construit l'index de recherche à partir de toutes les données du jeu
 * @returns {Array} Liste d'entrées recherchables
 */
const construireIndexRecherche = () => {
  const entrees = [];

  // Univers (zones, lieux, PNJ)
  universeData.zones?.forEach((zone) => {
    entrees.push({
      type: "Zone",
      titre: zone.name,
      description: zone.details,
      chemin: `/univers?zone=${zone.id}`,
    });

    zone.locations?.forEach((lieu) => {
      entrees.push({
        type: "Lieu",
        titre: lieu.name,
        description: lieu.summary,
        chemin: `/univers?zone=${zone.id}&loc=${lieu.id}`,
      });

      lieu.npcs?.forEach((pnj) => {
        entrees.push({
          type: "PNJ",
          titre: pnj.name,
          description: pnj.role,
          chemin: `/univers?zone=${zone.id}&loc=${lieu.id}&pnj=${pnj.id}`,
        });
      });
    });
  });

  // Scénarios
  scenariosData?.forEach((scenario) => {
    entrees.push({
      type: "Scénario",
      titre: scenario.title,
      description: scenario.synopsis,
      chemin: `/scenarios/${scenario.id}`,
    });
  });

  // Factions
  factionsData?.forEach((faction) => {
    entrees.push({
      type: "Faction",
      titre: faction.name,
      description: faction.desc,
      chemin: "/factions",
    });
  });


  // Tous les PNJ (normalisés via npcRegistry)
  tousLesPnj.forEach((pnj) => {
    const typeLabel =
      pnj.category === "monstres" ? "Créature" :
      pnj.category === "ennemis" ? "Ennemi" : "PNJ";
    entrees.push({
      type: typeLabel,
      titre: pnj.nom,
      description: `${pnj.classe || ""} - ${pnj.niveau ?? pnj.fp ?? ""}`.replace(/^\s*-\s*$/, ""),
      chemin: `/univers?pnj=${pnj.id}`,
    });
  });

  return entrees;
};

/**
 * Hook pour gérer la recherche globale dans l'application
 * @returns {object} { terme, definirTerme, resultats, effacer }
 */
export function utiliserRecherche() {
  const [terme, definirTerme] = useState("");

  // Index Fuse.js construit de façon différée après le premier paint.
  // startTransition marque la mise à jour comme non-urgente : React peut
  // interrompre le re-render si une interaction prioritaire arrive.
  const [moteurRecherche, definirMoteurRecherche] = useState(null);

  useEffect(() => {
    startTransition(() => {
      const entrees = construireIndexRecherche();
      const fuse = new Fuse(entrees, {
        threshold: 0.3,
        keys: ["titre", "description", "type"],
      });
      definirMoteurRecherche({ entrees, fuse });
    });
  }, []);

  const resultats = useMemo(() => {
    if (!terme.trim() || !moteurRecherche) return [];
    return moteurRecherche.fuse.search(terme).map((r) => r.item);
  }, [terme, moteurRecherche]);

  const effacer = useCallback(() => definirTerme(""), []);

  return {
    terme,
    definirTerme,
    resultats,
    effacer,
  };
}
