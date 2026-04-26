import { useMemo } from "react";
import { ScrollText } from "lucide-react";
import Modale from "../interface/Modale";
import {
  calculerStatistiques,
  calculerStatistiquesCreature,
  extraireTypeBase,
  PROGRESSION_TYPES,
  parserDV,
  calculerPointsAchat,
} from "../../utilitaires/calculsDnD35";
import {
  obtenirAptitudesClasse,
  obtenirTraitsRaciaux,
  obtenirTraitsType,
} from "../../data/constantesDnD35";
import {
  calculerEmplacementsSorts,
  estLanceurDeSorts,
} from "../../data/sortsDnD35";
import {
  IndicateurDiff,
  BarreEtatSauvegarde,
  BoutonAutoRemplir,
  EditeurCompetences,
  EditeurDons,
  SectionApparitions,
  SectionSorts,
  SectionBuffs,
  AvertissementsCoherence,
  SectionIdentite,
  SectionStatsCombat,
  SectionCaracteristiques,
  SectionCapacites,
  SectionTactiqueNarratif,
  SectionOgas,
  SectionQuetesAnnexes,
  BarreActions,
  versTexteCapacite,
} from "./editeur";
import SectionPnj from "./sections/SectionPnj";

/**
 * Composant EditeurPersonnage — Éditeur complet de personnage/monstre
 *
 * @param {object} props
 * @param {boolean} props.estOuvert - L'éditeur est-il visible
 * @param {function} props.fermer - Callback de fermeture
 * @param {object} props.editeur - Objet retourné par utiliserEditeurPersonnage
 */
function EditeurPersonnage({ estOuvert, fermer, editeur, estCreation = false }) {
  const {
    brouillon,
    erreurs,
    etatSauvegarde,
    messageSauvegarde,
    diff,
    aDesModifications,
    nombreModifications,
    modifierChamp,
    modifierChampImbrique,
    modifierElementTableau,
    ajouterElementTableau,
    supprimerElementTableau,
    reinitialiser,
    sauvegarder,
    avertissements,
    annuler,
    refaire,
    peutAnnuler,
    peutRefaire,
    ETATS_SAUVEGARDE: ETATS,
  } = editeur;

  const enCoursDeSauvegarde = etatSauvegarde === ETATS.EN_COURS;

  const estCreature = useMemo(() => {
    if (!brouillon) return false;
    if (brouillon.modeEntite === "creature") return true;
    if (brouillon.modeEntite === "pnj") return false;
    const typeBase = extraireTypeBase(brouillon.type || "");
    return !brouillon.classe && !!PROGRESSION_TYPES[typeBase];
  }, [brouillon?.modeEntite, brouillon?.classe, brouillon?.type]);

  const stats = useMemo(() => calculerStatistiques(brouillon), [brouillon]);

  const statsCreature = useMemo(() =>
    (estCreature && brouillon) ? calculerStatistiquesCreature(brouillon) : null,
    [estCreature, brouillon]
  );

  const dvParse = useMemo(() =>
    (estCreature && brouillon) ? parserDV(brouillon.dv || "") : null,
    [estCreature, brouillon?.dv]
  );

  const pointsAchat = useMemo(() =>
    brouillon?.carac ? calculerPointsAchat(brouillon.carac) : null,
    [brouillon?.carac]
  );

  const aptitudesAuto = useMemo(() => {
    if (!brouillon) return { qual_spe: [], att_spe: [] };
    const classeApt = obtenirAptitudesClasse(brouillon.classe, brouillon.niveau);
    const raceApt = obtenirTraitsRaciaux(brouillon.type);
    return {
      qual_spe: [...raceApt.qual_spe, ...classeApt.qual_spe],
      att_spe: [...raceApt.att_spe, ...classeApt.att_spe],
    };
  }, [brouillon?.classe, brouillon?.niveau, brouillon?.type]);

  const traitsTypeCreature = useMemo(() => {
    if (!brouillon?.type) return { qual_spe: [], att_spe: [] };
    return obtenirTraitsType(brouillon.type);
  }, [brouillon?.type]);

  const actionsSpeSuggerees = useMemo(() => {
    if (!brouillon?.fiche_combat?.actions_spe) return [];
    return brouillon.fiche_combat.actions_spe.map(versTexteCapacite).filter(Boolean);
  }, [brouillon?.fiche_combat?.actions_spe]);

  const emplacementsSorts = useMemo(() => {
    if (!brouillon?.classe || !brouillon?.niveau) return null;
    if (!estLanceurDeSorts(brouillon.classe)) return null;
    const modCarac = stats?.modificateurs?.[
      brouillon.classe === "Magicien" ? "int"
        : (brouillon.classe === "Ensorceleur" || brouillon.classe === "Barde") ? "cha"
        : "sag"
    ];
    return calculerEmplacementsSorts(brouillon.classe, brouillon.niveau, modCarac);
  }, [brouillon?.classe, brouillon?.niveau, stats?.modificateurs]);

  const sensParsees = useMemo(() => {
    if (!brouillon?.sens || typeof brouillon.sens !== "string") return [];
    return brouillon.sens.split(",").map((s) => s.trim()).filter(Boolean);
  }, [brouillon?.sens]);

  const badge = useMemo(() => {
    if (!aDesModifications) return null;
    return (
      <span className="tag-base bg-amber-800/40 text-amber-200 border border-amber-700/40 ml-auto">
        {nombreModifications} modif.
      </span>
    );
  }, [aDesModifications, nombreModifications]);

  if (!brouillon) return null;

  return (
    <Modale
      estOuverte={estOuvert}
      fermer={fermer}
      titre={estCreation ? `Création — ${brouillon.nom || "Nouveau PNJ"}` : `Éditer : ${brouillon.nom || "Sans nom"}`}
      sousTitre={brouillon.role || brouillon.classe || ""}
      badge={badge}
      maxWidth="max-w-5xl"
    >
      <div className="space-y-6">
        <BarreEtatSauvegarde etat={etatSauvegarde} message={messageSauvegarde} ETATS={ETATS} />
        <IndicateurDiff diff={diff} nombreModifications={nombreModifications} />
        <AvertissementsCoherence avertissements={avertissements} />
        <BoutonAutoRemplir
          stats={stats}
          statsCreature={statsCreature}
          estCreature={estCreature}
          brouillon={brouillon}
          modifierChamp={modifierChamp}
          modifierChampImbrique={modifierChampImbrique}
        />

        <SectionIdentite
          brouillon={brouillon}
          erreurs={erreurs}
          modifierChamp={modifierChamp}
          modifierChampImbrique={modifierChampImbrique}
          estCreature={estCreature}
          statsCreature={statsCreature}
          dvParse={dvParse}
        />

        <SectionStatsCombat
          brouillon={brouillon}
          stats={stats}
          statsCreature={statsCreature}
          estCreature={estCreature}
          modifierChamp={modifierChamp}
          modifierChampImbrique={modifierChampImbrique}
          erreurs={erreurs}
        />

        <SectionCaracteristiques
          brouillon={brouillon}
          stats={stats}
          pointsAchat={pointsAchat}
          modifierChampImbrique={modifierChampImbrique}
          erreurs={erreurs}
        />

        <SectionCapacites
          brouillon={brouillon}
          traitsTypeCreature={traitsTypeCreature}
          aptitudesAuto={aptitudesAuto}
          actionsSpeSuggerees={actionsSpeSuggerees}
          modifierElementTableau={modifierElementTableau}
          ajouterElementTableau={ajouterElementTableau}
          supprimerElementTableau={supprimerElementTableau}
        />

        <SectionPnj titre="Compétences &amp; Dons" icone={ScrollText}>
          <div className="space-y-6">
            <EditeurCompetences
              valeur={brouillon.competences}
              onChange={(v) => modifierChamp("competences", v)}
              brouillon={brouillon}
              stats={stats}
            />
            <EditeurDons
              valeur={brouillon.dons}
              onChange={(v) => modifierChamp("dons", v)}
              brouillon={brouillon}
              stats={stats}
            />
          </div>
        </SectionPnj>

        <SectionSorts
          emplacementsSorts={emplacementsSorts}
          brouillon={brouillon}
          modifierChamp={modifierChamp}
        />

        <SectionTactiqueNarratif
          brouillon={brouillon}
          sensParsees={sensParsees}
          modifierChamp={modifierChamp}
          modifierElementTableau={modifierElementTableau}
          ajouterElementTableau={ajouterElementTableau}
          supprimerElementTableau={supprimerElementTableau}
        />

        <SectionOgas
          brouillon={brouillon}
          modifierChampImbrique={modifierChampImbrique}
        />

        <SectionBuffs brouillon={brouillon} modifierChamp={modifierChamp} />

        <SectionQuetesAnnexes brouillon={brouillon} modifierChamp={modifierChamp} />

        {brouillon.id && <SectionApparitions pnjId={brouillon.id} />}

        <BarreActions
          enCoursDeSauvegarde={enCoursDeSauvegarde}
          aDesModifications={aDesModifications}
          peutAnnuler={peutAnnuler}
          peutRefaire={peutRefaire}
          onSauvegarder={sauvegarder}
          onAnnuler={annuler}
          onRefaire={refaire}
          onReinitialiser={reinitialiser}
          onFermer={fermer}
        />
      </div>
    </Modale>
  );
}

export default EditeurPersonnage;
