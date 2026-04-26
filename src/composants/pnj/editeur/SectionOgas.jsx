import { memo } from "react";
import { Heart } from "lucide-react";
import SectionPnj from "../sections/SectionPnj";
import { ChampTextArea } from "../champsFormulaire";

/**
 * SectionOgas — Occupation, Objectif, Attitude, Enjeu
 * Rendu conditionnel : ne s'affiche que si brouillon.ogas est défini.
 * @param {{ brouillon: object, modifierChampImbrique: function }} props
 */
const SectionOgas = memo(function SectionOgas({ brouillon, modifierChampImbrique }) {
  if (!brouillon.ogas) return null;

  return (
    <SectionPnj titre="OGAS (Occupation, Objectif, Attitude, Enjeu)" icone={Heart}>
      <div className="space-y-4">
        <ChampTextArea
          etiquette="Occupation"
          valeur={brouillon.ogas?.occupation}
          onChange={(v) => modifierChampImbrique("ogas.occupation", v)}
          lignes={2}
        />
        <ChampTextArea
          etiquette="Objectif"
          valeur={brouillon.ogas?.objectif}
          onChange={(v) => modifierChampImbrique("ogas.objectif", v)}
          lignes={2}
        />
        <ChampTextArea
          etiquette="Attitude"
          valeur={brouillon.ogas?.attitude}
          onChange={(v) => modifierChampImbrique("ogas.attitude", v)}
          lignes={2}
        />
        <ChampTextArea
          etiquette="Enjeu"
          valeur={brouillon.ogas?.enjeu}
          onChange={(v) => modifierChampImbrique("ogas.enjeu", v)}
          lignes={2}
        />
      </div>
    </SectionPnj>
  );
});

export default SectionOgas;
