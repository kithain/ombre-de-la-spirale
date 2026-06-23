import {
  AlertTriangle,
  BadgeCheck,
  BellRing,
  FileText,
  Gavel,
  Landmark,
  Scale,
  ScrollText,
  ShieldCheck,
} from "lucide-react";
import Carte from "../../interface/Carte";
import { cc } from "../../../utilitaires/combinerClasses";

const COLONNES_AUTORITES = [
  { cle: "role", titre: "Fonction", classeCellule: "font-medium text-content-primary" },
  { cle: "autorite", titre: "Autorité", classeCellule: "text-accent-light" },
  { cle: "responsabilite", titre: "Responsabilité" },
];

const COLONNES_INFRACTIONS = [
  { cle: "infraction", titre: "Infraction", classeCellule: "font-medium text-content-primary" },
  { cle: "peines", titre: "Peine habituelle" },
  { cle: "aggravation", titre: "Aggravation possible" },
];

const STYLES_PRESSION = [
  "border-surface-border bg-surface/40 text-content-secondary",
  "border-blue-800/40 bg-blue-950/20 text-blue-200",
  "border-yellow-800/40 bg-yellow-950/20 text-yellow-100",
  "border-orange-800/50 bg-orange-950/20 text-orange-100",
  "border-red-800/50 bg-red-950/25 text-red-100",
  "border-accent-dark bg-accent-surface text-accent-light",
];

function TitreBloc({ icone: Icone, titre, sousTitre }) {
  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="p-2 bg-accent-surface border border-accent-muted">
        <Icone className="w-5 h-5 text-accent-light" />
      </div>
      <div>
        <h3 className="text-lg font-serif text-accent-light">{titre}</h3>
        {sousTitre && (
          <p className="text-sm text-content-muted mt-1">{sousTitre}</p>
        )}
      </div>
    </div>
  );
}

function ListePoints({ points, dense = false }) {
  return (
    <ul className={cc(dense ? "space-y-1.5" : "space-y-2.5")}>
      {points.map((point, index) => (
        <li key={index} className="flex gap-2 text-sm text-content-secondary">
          <span className="mt-2 w-1.5 h-1.5 bg-accent-dark block flex-shrink-0" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

function TableauSimple({ colonnes, lignes, largeurMin }) {
  return (
    <div className="overflow-x-auto border border-surface-border bg-surface/30">
      <table className={cc("w-full text-left text-sm", largeurMin)}>
        <thead className="bg-surface-raised/80 text-content-muted uppercase tracking-widest text-[11px]">
          <tr>
            {colonnes.map((colonne) => (
              <th key={colonne.cle} className="px-4 py-3 font-medium">
                {colonne.titre}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lignes.map((ligne, index) => (
            <tr
              key={`${ligne.role || ligne.infraction || index}-${index}`}
              className="border-t border-surface-border/70 odd:bg-surface/20"
            >
              {colonnes.map((colonne) => (
                <td
                  key={colonne.cle}
                  className={cc(
                    "px-2 sm:px-4 py-3 align-top text-content-secondary whitespace-normal break-words",
                    colonne.classeCellule,
                  )}
                >
                  {ligne[colonne.cle]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function JusticeUnivers({ justice }) {
  if (!justice) return null;

  return (
    <div className="space-y-6 sm:space-y-8">
      <Carte>
        <TitreBloc
          icone={Scale}
          titre={justice.titre}
          sousTitre={justice.sousTitre}
        />
        <div className="space-y-3">
          {justice.vueEnsemble.map((paragraphe, index) => (
            <p key={index} className="text-sm sm:text-base text-content-secondary leading-relaxed">
              {paragraphe}
            </p>
          ))}
        </div>
      </Carte>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Carte className="lg:col-span-1">
          <TitreBloc
            icone={ScrollText}
            titre={justice.code.nom}
            sousTitre={justice.code.depositaire}
          />
          <ListePoints points={justice.code.principes} />
        </Carte>

        <Carte className="lg:col-span-2">
          <TitreBloc
            icone={Landmark}
            titre="Qui exerce la justice ?"
            sousTitre="La garde arrête, les magistrats jugent, les institutions protègent leurs chartes."
          />
          <TableauSimple
            colonnes={COLONNES_AUTORITES}
            lignes={justice.autorites}
          />
        </Carte>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {justice.tribunaux.map((tribunal) => (
          <Carte key={tribunal.nom}>
            <TitreBloc icone={Gavel} titre={tribunal.nom} />
            <p className="text-sm text-content-secondary mb-4">
              {tribunal.competence}
            </p>
            <ListePoints points={tribunal.notes} dense />
          </Carte>
        ))}
      </div>

      <Carte>
        <TitreBloc
          icone={AlertTriangle}
          titre="Crimes relevant de la Cour Souveraine"
          sousTitre="Les affaires qui menacent le gouvernement, les institutions ou la sûreté de Valombre."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {justice.crimesMajeurs.map((crime) => (
            <div
              key={crime}
              className="border border-surface-border bg-surface/40 px-3 py-2 text-sm text-content-secondary"
            >
              {crime}
            </div>
          ))}
        </div>
      </Carte>

      <Carte>
        <TitreBloc
          icone={FileText}
          titre="Table des Crimes et châtiments"
          sousTitre="Les peines indiquées correspondent aux usages les plus courants. Elles varient selon la gravité des faits, le rang du coupable, le statut de la victime et les protections dont chacun bénéficie."
        />
        <TableauSimple
          colonnes={COLONNES_INFRACTIONS}
          lignes={justice.infractions}
        />
      </Carte>

      <div>
        <div className="flex items-center gap-2 sm:gap-4 mb-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
          <h2 className="text-base sm:text-xl font-serif text-accent-light whitespace-nowrap">
            Juridictions particulières
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {justice.jurisdictions.map((juridiction) => (
            <Carte key={juridiction.nom}>
              <TitreBloc
                icone={ShieldCheck}
                titre={juridiction.nom}
                sousTitre={juridiction.autorite}
              />
              <ListePoints points={juridiction.details} />
            </Carte>
          ))}
        </div>
      </div>

      {justice.etatUrgence && (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <Carte>
            <TitreBloc
              icone={BellRing}
              titre={justice.etatUrgence.nom}
              sousTitre={justice.etatUrgence.duree}
            />
            <ListePoints points={justice.etatUrgence.mesures} />
          </Carte>

          <Carte>
            <TitreBloc
              icone={AlertTriangle}
              titre="Détournement possible"
              sousTitre="Ce que Thade, un Conseil paniqué ou une loi martiale corrompue peuvent faire de la procédure."
            />
            <ListePoints points={justice.etatUrgence.detournements} />
          </Carte>
        </div>
      )}

      {justice.niveauxPression && (
        <div>
          <div className="flex items-center gap-2 sm:gap-4 mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
            <h2 className="text-base sm:text-xl font-serif text-accent-light whitespace-nowrap">
              Pression judiciaire des PJ
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {justice.niveauxPression.map((niveau) => (
              <Carte
                key={niveau.niveau}
                variante="plat"
                className={cc("border", STYLES_PRESSION[niveau.niveau])}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4" />
                    <h3 className="text-base font-serif text-current">
                      Niveau {niveau.niveau}
                    </h3>
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-current">
                    {niveau.etiquette}
                  </span>
                </div>
                <p className="text-sm text-content-secondary">
                  {niveau.situation}
                </p>
              </Carte>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="border border-green-800/40 bg-green-950/20 p-4">
              <h3 className="text-sm font-serif text-green-200 mb-2">
                Faire baisser la pression
              </h3>
              <p className="text-sm text-content-secondary">
                {justice.actionsPression.reduire}
              </p>
            </div>
            <div className="border border-red-800/40 bg-red-950/20 p-4">
              <h3 className="text-sm font-serif text-red-200 mb-2">
                Faire monter la pression
              </h3>
              <p className="text-sm text-content-secondary">
                {justice.actionsPression.augmenter}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JusticeUnivers;
