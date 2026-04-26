import { memo } from "react";
import { Brain } from "lucide-react";
import SectionPnj from "../sections/SectionPnj";
import { ChampTexte } from "../champsFormulaire";
import { CARACS_VALIDES } from "../../../utilitaires/validationPersonnage";
import { formaterModificateur } from "../../../utilitaires/calculsDnD35";
import { NOMS_CARACS } from "./helpers";

/**
 * SectionCaracteristiques — Grid des 6 caractéristiques avec modificateurs et points d'achat
 * @param {{ brouillon, stats, pointsAchat, modifierChampImbrique, erreurs }} props
 */
const SectionCaracteristiques = memo(function SectionCaracteristiques({
  brouillon, stats, pointsAchat, modifierChampImbrique, erreurs,
}) {
  return (
    <SectionPnj titre="Caractéristiques" icone={Brain}>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {CARACS_VALIDES.map((stat) => (
          <div key={stat}>
            <ChampTexte
              etiquette={NOMS_CARACS[stat]}
              valeur={brouillon.carac?.[stat]}
              onChange={(v) => modifierChampImbrique(`carac.${stat}`, v)}
              type="number"
              erreur={stat === CARACS_VALIDES[0] ? erreurs.carac : undefined}
            />
            {stats?.modificateurs?.[stat] !== null && stats?.modificateurs?.[stat] !== undefined && (
              <p className="text-center text-xs mt-1 font-mono text-accent-light">
                {formaterModificateur(stats.modificateurs[stat])}
              </p>
            )}
            {pointsAchat && pointsAchat.details[stat] !== null && (
              <p className="text-center text-[10px] mt-0.5 text-content-muted">
                {pointsAchat.details[stat]} pt{pointsAchat.details[stat] !== 1 ? "s" : ""}
              </p>
            )}
          </div>
        ))}
      </div>
      {pointsAchat && (
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xs text-content-muted">Points d&apos;achat :</span>
          <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
            pointsAchat.budget === "standard"  ? "bg-green-900/40 text-green-300" :
            pointsAchat.budget === "héros"      ? "bg-blue-900/40 text-blue-300" :
            pointsAchat.budget === "héroïque"   ? "bg-purple-900/40 text-purple-300" :
                                                  "bg-red-900/40 text-red-300"
          }`}>
            {pointsAchat.total} pts — {pointsAchat.budget}
          </span>
          <span className="text-[10px] text-content-muted">(SRD : 25 std · 28 héros · 32 héroïque)</span>
        </div>
      )}
    </SectionPnj>
  );
});

export default SectionCaracteristiques;
