import { memo } from "react";
import { Swords } from "lucide-react";
import SectionPnj from "../sections/SectionPnj";
import { ChampTextArea, SelecteurMultiple, ListeEditable } from "../champsFormulaire";
import { SENS } from "../../../data/constantesDnD35";

/**
 * SectionTactiqueNarratif — Tactiques, Butin, Sens & Perceptions, Détails narratifs
 * @param {{ brouillon, sensParsees, modifierChamp, modifierElementTableau, ajouterElementTableau, supprimerElementTableau }} props
 */
const SectionTactiqueNarratif = memo(function SectionTactiqueNarratif({
  brouillon, sensParsees, modifierChamp, modifierElementTableau, ajouterElementTableau, supprimerElementTableau,
}) {
  return (
    <SectionPnj titre="Tactique & Narratif" icone={Swords}>
      <div className="space-y-4">
        <ChampTextArea
          etiquette="Tactiques"
          valeur={brouillon.tactiques}
          onChange={(v) => modifierChamp("tactiques", v)}
          lignes={3}
          placeholder="Comportement tactique en combat"
        />
        <ChampTextArea
          etiquette="Butin"
          valeur={brouillon.butin}
          onChange={(v) => modifierChamp("butin", v)}
          placeholder="Équipement et objets"
        />
        <SelecteurMultiple
          etiquette="Sens & Perceptions"
          valeurs={sensParsees}
          onChange={(v) => modifierChamp("sens", v.join(", "))}
          optionsPlates={SENS}
          placeholder="+ Ajouter un sens…"
        />
        <ListeEditable
          etiquette="Détails narratifs"
          elements={brouillon.details}
          onModifier={(i, v) => modifierElementTableau("details", i, v)}
          onAjouter={(v) => ajouterElementTableau("details", v)}
          onSupprimer={(i) => supprimerElementTableau("details", i)}
          placeholder="Détail narratif"
        />
      </div>
    </SectionPnj>
  );
});

export default SectionTactiqueNarratif;
