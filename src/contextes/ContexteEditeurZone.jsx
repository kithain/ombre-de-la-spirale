import { useState, useCallback } from "react";
import { ContexteEditeurZone } from "./ContexteEditeurZoneBase";
import { universeData } from "../data/universe/universe";
import { utiliserEditeurLieu } from "../hooks/utiliserEditeurLieu";
import EditeurZone from "../composants/zones/EditeurZone";

/**
 * Contexte global pour ouvrir l'éditeur de zone
 * depuis n'importe quelle page, sans navigation.
 *
 * Pattern identique à ContexteEditeurPnj / ContexteEditeurLieu.
 */
/**
 * Trouve une zone par son ID dans universeData
 */
function trouverZoneParId(idZone) {
  return (universeData.zones || []).find((z) => z.id === idZone) || null;
}

/**
 * Callback de sauvegarde par défaut
 * Met à jour l'objet zone en mémoire + localStorage
 */
async function sauvegarderParDefaut(diff, brouillonComplet) {
  console.log("[EditeurZone] Diff sauvegardé :", diff);
  console.log("[EditeurZone] Objet complet :", brouillonComplet);

  const zone = trouverZoneParId(brouillonComplet.id);
  if (!zone) {
    throw new Error(`Zone introuvable : ${brouillonComplet.id}`);
  }

  // Copier les champs modifiés (sauf locations qu'on ne touche pas ici)
  const { locations, ...champsSansLocations } = brouillonComplet;
  Object.assign(zone, champsSansLocations);

  try {
    const cle = `zone_edit_${brouillonComplet.id}`;
    localStorage.setItem(cle, JSON.stringify(champsSansLocations));
  } catch {
    // localStorage plein ou indisponible — pas bloquant
  }
}

/**
 * Fournisseur du contexte éditeur zone — à placer autour de <Outlet /> dans Disposition.jsx
 */
export function FournisseurEditeurZone({ surSauvegarde, children }) {
  const [editeurOuvert, definirEditeurOuvert] = useState(false);

  const editeur = utiliserEditeurLieu(null, {
    surSauvegarde: surSauvegarde || sauvegarderParDefaut,
  });

  const ouvrirEditeurZone = useCallback(
    (idZone) => {
      const zone = trouverZoneParId(idZone);
      if (!zone) {
        console.warn("[EditeurZone] Zone introuvable :", idZone);
        return;
      }
      // Charger une copie sans les locations (on ne les édite pas ici)
      const { locations, ...zoneSansLocations } = zone;
      editeur.charger({ ...zoneSansLocations, id: zone.id });
      definirEditeurOuvert(true);
    },
    [editeur],
  );

  const fermerEditeurZone = useCallback(() => {
    editeur.fermer();
    definirEditeurOuvert(false);
  }, [editeur]);

  return (
    <ContexteEditeurZone.Provider value={{ ouvrirEditeurZone, fermerEditeurZone }}>
      {children}
      <EditeurZone
        estOuvert={editeurOuvert}
        fermer={fermerEditeurZone}
        editeur={editeur}
      />
    </ContexteEditeurZone.Provider>
  );
}

export { utiliserEditeurZoneContexte } from "./ContexteEditeurZoneBase";
