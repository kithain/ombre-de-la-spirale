import { useState, useMemo, useCallback, useEffect } from "react";
import Fuse from "fuse.js";

/**
 * Construit l'index de recherche à partir de toutes les données du jeu.
 *
 * Les données (scénarios, PNJ, univers…) sont chargées via import() dynamique
 * pour qu'elles ne soient pas embarquées dans le bundle d'entrée : l'index est
 * construit après le premier affichage, sans bloquer le chargement initial.
 * @returns {Promise<Array>} Liste d'entrées recherchables
 */
const construireIndexRecherche = async () => {
  const [
    { universeData, scenariosData, factionsData, frontsData, couchesCampagneData },
    { tousLesPnj, chercherPnjParId },
  ] = await Promise.all([
    import("../data/indexDonnees"),
    import("../data/npcRegistry"),
  ]);

  const entrees = [];
  const pnjIdsIndexes = new Set();

  // Univers (zones, lieux, PNJ)
  universeData.zones?.forEach((zone) => {
    entrees.push({
      type: "Zone",
      titre: zone.nom,
      description: zone.details,
      chemin: `/univers?zone=${zone.id}`,
    });

    zone.emplacements?.forEach((lieu) => {
      entrees.push({
        type: "Lieu",
        titre: lieu.nom,
        description: lieu.resume,
        chemin: `/univers?zone=${zone.id}&loc=${lieu.id}`,
      });

      (lieu.idsPnj || []).forEach((pnjId) => {
        const pnj = chercherPnjParId(pnjId);
        if (!pnj) return;
        pnjIdsIndexes.add(pnjId);
        entrees.push({
          type: "PNJ",
          titre: pnj.nom,
          description: pnj.impulsion || pnj.role || "",
          chemin: `/univers?zone=${zone.id}&loc=${lieu.id}&pnj=${pnj.id}`,
        });
      });
    });
  });

  // Scénarios
  scenariosData?.forEach((scenario) => {
    entrees.push({
      type: "Scénario",
      titre: scenario.titre,
      description: scenario.synopsis,
      chemin: `/scenarios/${scenario.id}`,
    });
  });

  // Fronts et menaces
  frontsData?.forEach((front) => {
    entrees.push({
      type: "Front",
      titre: front.nom,
      description: `${front.enjeu} ${front.questionDramatique || ""} ${(front.signesVisibles || []).join(" ")} ${(front.leviersPJ || []).join(" ")}`,
      chemin: `/scenarios/${front.id}`,
    });

    front.menaces?.forEach((menace) => {
      entrees.push({
        type: "Menace",
        titre: menace.nom,
        description: `${menace.objectifFinal} ${menace.noteMJ || ""}`,
        chemin: `/scenarios/${front.id}`,
      });
    });
  });

  // Couches de campagne
  couchesCampagneData?.forEach((couche) => {
    entrees.push({
      type: "Front",
      titre: couche.nom,
      description: `${couche.enjeu} ${couche.questionDramatique || ""} ${(couche.signesVisibles || []).join(" ")}`,
      chemin: `/scenarios/${couche.id}`,
    });

    couche.menaces?.forEach((menace) => {
      entrees.push({
        type: "Menace",
        titre: menace.nom,
        description: `${menace.objectifFinal} ${menace.noteMJ || ""}`,
        chemin: `/scenarios/${couche.id}`,
      });
    });
  });

  // Factions
  factionsData?.forEach((faction) => {
    entrees.push({
      type: "Faction",
      titre: faction.nom,
      description: faction.description,
      chemin: "/factions",
    });
  });


  // Tous les PNJ (normalisés via npcRegistry)
  // Skip those already indexed via universe zones to avoid duplicates
  tousLesPnj.forEach((pnj) => {
    if (pnjIdsIndexes.has(pnj.id)) return;
    const typeLabel =
      pnj.categorie === "monstres" ? "Créature" :
      pnj.categorie === "ennemis" ? "Ennemi" : "PNJ";
    entrees.push({
      type: typeLabel,
      titre: pnj.nom,
      description: pnj.impulsion || pnj.role || "",
      chemin: `/antagoniste?pnj=${pnj.id}`,
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

  // Index Fuse.js construit de façon différée après le premier rendu.
  // Les données sont chargées via import() dynamique : elles ne sont donc pas
  // dans le bundle d'entrée et n'arrivent qu'après le premier affichage.
  const [moteurRecherche, definirMoteurRecherche] = useState(null);

  useEffect(() => {
    let actif = true;
    construireIndexRecherche().then((entrees) => {
      if (!actif) return;
      const fuse = new Fuse(entrees, {
        threshold: 0.3,
        keys: ["titre", "description", "type"],
      });
      definirMoteurRecherche({ entrees, fuse });
    });
    return () => {
      actif = false;
    };
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
