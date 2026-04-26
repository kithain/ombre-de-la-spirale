import { memo } from "react";
import { Zap, Shield, Wand2 } from "lucide-react";
import SectionPnj from "../sections/SectionPnj";
import { ListeEditable } from "../champsFormulaire";
import ComboboxFiltrable from "../../interface/ComboboxFiltrable";
import { cc } from "../../../utilitaires/combinerClasses";
import { ATTAQUES_SPECIALES_COMMUNES, QUALITES_SPECIALES_COMMUNES } from "../../../data/constantesDnD35";
import { capaciteDejaPresente } from "./helpers";

/**
 * SectionCapacites — Traits de type créature, aptitudes automatiques, att_spe, qual_spe
 * @param {{ brouillon, traitsTypeCreature, aptitudesAuto, actionsSpeSuggerees, modifierElementTableau, ajouterElementTableau, supprimerElementTableau }} props
 */
const SectionCapacites = memo(function SectionCapacites({
  brouillon, traitsTypeCreature, aptitudesAuto, actionsSpeSuggerees,
  modifierElementTableau, ajouterElementTableau, supprimerElementTableau,
}) {
  const aTraitsType = traitsTypeCreature.qual_spe.length > 0 || traitsTypeCreature.att_spe.length > 0 || actionsSpeSuggerees.length > 0;
  const aAptitudesAuto = aptitudesAuto.att_spe.length > 0 || aptitudesAuto.qual_spe.length > 0;

  return (
    <SectionPnj titre="Capacités" icone={Zap}>
      <div className="space-y-6">
        {/* Traits automatiques du type de créature */}
        {aTraitsType && (
          <div className="p-3 bg-teal-900/10 border border-teal-800/20 space-y-3">
            <p className="text-xs font-semibold text-teal-300 flex items-center gap-1.5">
              <Shield size={12} />
              Traits de type — {brouillon.type}
            </p>

            {traitsTypeCreature.qual_spe.length > 0 && (
              <div>
                <p className="text-[10px] uppercase text-teal-400 mb-1">Qualités spéciales</p>
                <div className="flex flex-wrap gap-1">
                  {traitsTypeCreature.qual_spe.map((trait) => {
                    const dejaPresent = capaciteDejaPresente(brouillon.qual_spe || [], trait);
                    return (
                      <button
                        key={trait}
                        type="button"
                        disabled={dejaPresent}
                        onClick={() => ajouterElementTableau("qual_spe", trait)}
                        className={cc(
                          "text-[11px] px-2 py-0.5 border transition-colors",
                          dejaPresent
                            ? "bg-green-900/20 border-green-800/30 text-green-400/60 cursor-default"
                            : "bg-teal-900/30 border-teal-700/40 text-teal-200 hover:bg-teal-800/40 hover:border-teal-500/50",
                        )}
                        title={dejaPresent ? "Déjà présent" : "Cliquer pour ajouter"}
                      >
                        {dejaPresent ? "✓ " : "+ "}{trait}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {(traitsTypeCreature.att_spe.length > 0 || actionsSpeSuggerees.length > 0) && (
              <div>
                <p className="text-[10px] uppercase text-orange-400 mb-1">
                  Attaques spéciales{actionsSpeSuggerees.length > 0 ? " (fiche combat)" : ""}
                </p>
                <div className="flex flex-wrap gap-1">
                  {[...traitsTypeCreature.att_spe, ...actionsSpeSuggerees].map((action) => {
                    const dejaPresent = capaciteDejaPresente(brouillon.att_spe || [], action);
                    return (
                      <button
                        key={action}
                        type="button"
                        disabled={dejaPresent}
                        onClick={() => ajouterElementTableau("att_spe", action)}
                        className={cc(
                          "text-[11px] px-2 py-0.5 border transition-colors",
                          dejaPresent
                            ? "bg-green-900/20 border-green-800/30 text-green-400/60 cursor-default"
                            : "bg-orange-900/30 border-orange-700/40 text-orange-200 hover:bg-orange-800/40 hover:border-orange-500/50",
                        )}
                        title={dejaPresent ? "Déjà présent" : "Cliquer pour ajouter aux att_spe"}
                      >
                        {dejaPresent ? "✓ " : "+ "}{action}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                const existantsQual = brouillon.qual_spe || [];
                const existantsAtt = brouillon.att_spe || [];
                for (const trait of traitsTypeCreature.qual_spe) {
                  if (!capaciteDejaPresente(existantsQual, trait)) ajouterElementTableau("qual_spe", trait);
                }
                for (const action of [...traitsTypeCreature.att_spe, ...actionsSpeSuggerees]) {
                  if (!capaciteDejaPresente(existantsAtt, action)) ajouterElementTableau("att_spe", action);
                }
              }}
              className="text-[11px] px-2 py-1 bg-teal-800/30 border border-teal-600/40 text-teal-200 hover:bg-teal-700/40 transition-colors flex items-center gap-1"
            >
              <Shield size={10} />
              Ajouter tout (traits + attaques manquants)
            </button>
          </div>
        )}

        {/* Suggestions automatiques depuis classe + race */}
        {aAptitudesAuto && (
          <div className="p-3 bg-purple-900/10 border border-purple-800/20 space-y-3">
            <p className="text-xs font-semibold text-purple-300 flex items-center gap-1.5">
              <Wand2 size={12} />
              Aptitudes automatiques ({brouillon.classe}{brouillon.niveau ? ` ${brouillon.niveau}` : ""}{brouillon.type?.match(/\((.+)\)/) ? ` — ${brouillon.type.match(/\((.+)\)/)[1]}` : ""})
            </p>

            {aptitudesAuto.att_spe.length > 0 && (
              <div>
                <p className="text-[10px] uppercase text-purple-400 mb-1">Attaques spéciales</p>
                <div className="flex flex-wrap gap-1">
                  {aptitudesAuto.att_spe.map((apt) => {
                    const dejaPresent = capaciteDejaPresente(brouillon.att_spe || [], apt);
                    return (
                      <button
                        key={apt}
                        type="button"
                        disabled={dejaPresent}
                        onClick={() => ajouterElementTableau("att_spe", apt)}
                        className={cc(
                          "text-[11px] px-2 py-0.5 border transition-colors",
                          dejaPresent
                            ? "bg-green-900/20 border-green-800/30 text-green-400/60 cursor-default"
                            : "bg-purple-900/30 border-purple-700/40 text-purple-200 hover:bg-purple-800/40 hover:border-purple-500/50",
                        )}
                        title={dejaPresent ? "Déjà ajouté" : "Cliquer pour ajouter"}
                      >
                        {dejaPresent ? "✓ " : "+ "}{apt}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {aptitudesAuto.qual_spe.length > 0 && (
              <div>
                <p className="text-[10px] uppercase text-purple-400 mb-1">Qualités spéciales</p>
                <div className="flex flex-wrap gap-1">
                  {aptitudesAuto.qual_spe.map((apt) => {
                    const dejaPresent = capaciteDejaPresente(brouillon.qual_spe || [], apt);
                    return (
                      <button
                        key={apt}
                        type="button"
                        disabled={dejaPresent}
                        onClick={() => ajouterElementTableau("qual_spe", apt)}
                        className={cc(
                          "text-[11px] px-2 py-0.5 border transition-colors",
                          dejaPresent
                            ? "bg-green-900/20 border-green-800/30 text-green-400/60 cursor-default"
                            : "bg-purple-900/30 border-purple-700/40 text-purple-200 hover:bg-purple-800/40 hover:border-purple-500/50",
                        )}
                        title={dejaPresent ? "Déjà ajouté" : "Cliquer pour ajouter"}
                      >
                        {dejaPresent ? "✓ " : "+ "}{apt}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                const existantsAtt = brouillon.att_spe || [];
                const existantsQual = brouillon.qual_spe || [];
                for (const apt of aptitudesAuto.att_spe) {
                  if (!capaciteDejaPresente(existantsAtt, apt)) ajouterElementTableau("att_spe", apt);
                }
                for (const apt of aptitudesAuto.qual_spe) {
                  if (!capaciteDejaPresente(existantsQual, apt)) ajouterElementTableau("qual_spe", apt);
                }
              }}
              className="text-[11px] px-2 py-1 bg-purple-800/30 border border-purple-600/40 text-purple-200 hover:bg-purple-700/40 transition-colors flex items-center gap-1"
            >
              <Wand2 size={10} />
              Ajouter toutes les aptitudes manquantes
            </button>
          </div>
        )}

        {/* Attaques spéciales */}
        <div className="space-y-2">
          <ListeEditable
            etiquette="Attaques spéciales"
            elements={brouillon.att_spe}
            onModifier={(i, v) => modifierElementTableau("att_spe", i, v)}
            onAjouter={(v) => ajouterElementTableau("att_spe", v)}
            onSupprimer={(i) => supprimerElementTableau("att_spe", i)}
            placeholder="Description de l'attaque spéciale"
          />
          <ComboboxFiltrable
            placeholder="+ Ajouter depuis la liste SRD…"
            options={ATTAQUES_SPECIALES_COMMUNES}
            exclure={brouillon.att_spe || []}
            onSelect={(v) => ajouterElementTableau("att_spe", v)}
          />
        </div>

        {/* Qualités spéciales */}
        <div className="space-y-2">
          <ListeEditable
            etiquette="Qualités spéciales"
            elements={brouillon.qual_spe}
            onModifier={(i, v) => modifierElementTableau("qual_spe", i, v)}
            onAjouter={(v) => ajouterElementTableau("qual_spe", v)}
            onSupprimer={(i) => supprimerElementTableau("qual_spe", i)}
            placeholder="Description de la qualité spéciale"
          />
          <ComboboxFiltrable
            placeholder="+ Ajouter depuis la liste SRD…"
            options={QUALITES_SPECIALES_COMMUNES}
            exclure={brouillon.qual_spe || []}
            onSelect={(v) => ajouterElementTableau("qual_spe", v)}
          />
        </div>
      </div>
    </SectionPnj>
  );
});

export default SectionCapacites;
