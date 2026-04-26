import { memo } from "react";
import { Wand2, Swords } from "lucide-react";
import { ESPACE_ALLONGE } from "../../../utilitaires/calculsDnD35";

/**
 * Composant BoutonAutoRemplir — Bouton global pour remplir tous les champs calculables.
 * Fonctionne en mode PNJ (logique de classes) et en mode Créature (DV raciaux SRD).
 */
const BoutonAutoRemplir = memo(function BoutonAutoRemplir({
  stats,
  statsCreature,
  estCreature,
  brouillon,
  modifierChamp,
  modifierChampImbrique,
}) {
  const actif = estCreature ? !!statsCreature?.typeConnu : !!(stats?.classeConnue);
  if (!actif) return null;

  const appliquerTout = () => {
    if (estCreature && statsCreature) {
      const sc = statsCreature;
      if (sc.pvMoyens != null) modifierChamp("pv", sc.pvMoyens);
      if (sc.bbaFormatte) modifierChamp("bba", sc.bbaFormatte);
      if (sc.lutteFormattee) modifierChamp("lutte", sc.lutteFormattee);
      if (sc.initiative != null) modifierChamp("ini", sc.initiative);
      if (sc.jsTotalFormatte) {
        modifierChampImbrique("js.vig", sc.jsTotalFormatte.vig);
        modifierChampImbrique("js.ref", sc.jsTotalFormatte.ref);
        modifierChampImbrique("js.vol", sc.jsTotalFormatte.vol);
      }
      if (sc.caContact != null) modifierChampImbrique("ca.contact", sc.caContact);
      if (sc.caPrisAuDepourvu != null) modifierChampImbrique("ca.pris_au_depourvu", sc.caPrisAuDepourvu);
      // Espace occupé (fixe par taille — identique haut/long)
      const espaceAttendu = ESPACE_ALLONGE[brouillon.taille];
      if (espaceAttendu) modifierChamp("espace", espaceAttendu.espace);
    } else if (stats) {
      if (stats.pvEstimes != null) modifierChamp("pv", stats.pvEstimes);
      if (stats.dvFormatte) modifierChamp("dv", stats.dvFormatte);
      if (stats.initiative) modifierChamp("ini", stats.initiative);
      if (stats.jsTotalFormatte) {
        modifierChampImbrique("js.vig", stats.jsTotalFormatte.vig);
        modifierChampImbrique("js.ref", stats.jsTotalFormatte.ref);
        modifierChampImbrique("js.vol", stats.jsTotalFormatte.vol);
      }
      if (stats.caContact != null) modifierChampImbrique("ca.contact", stats.caContact);
      if (stats.caPrisAuDepourvu != null && brouillon.ca?.total) {
        modifierChampImbrique("ca.pris_au_depourvu", stats.caPrisAuDepourvu);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={appliquerTout}
      className="btn-forge flex items-center gap-2 text-content !border-purple-600 hover:!border-purple-400 hover:!shadow-[0_0_15px_rgba(147,51,234,0.3)]"
    >
      {estCreature ? <Swords size={16} /> : <Wand2 size={16} />}
      {estCreature
        ? "Auto-remplir statistiques créature (DV raciaux)"
        : "Auto-remplir les calculs D&D 3.5"}
    </button>
  );
});

export default BoutonAutoRemplir;
