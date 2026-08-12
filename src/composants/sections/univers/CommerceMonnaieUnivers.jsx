import { useMemo, useState } from "react";
import {
  Briefcase,
  Calculator,
  Coins,
  Gift,
  Home,
  Landmark,
  ScrollText,
  ShoppingCart,
  Wallet,
} from "lucide-react";
import Carte from "../../interface/Carte";
import { cc } from "../../../utilitaires/combinerClasses";

const FORMAT_NOMBRE = new Intl.NumberFormat("fr-FR", {
  maximumFractionDigits: 1,
});

const COLONNES_REVENUS = [
  { cle: "statut", titre: "Statut social", classeCellule: "font-medium text-content-primary" },
  { cle: "revenu", titre: "Revenu mensuel", classeCellule: "text-accent-light font-medium" },
  { cle: "equivalentPc", titre: "Équivalent" },
];

const COLONNES_SALAIRES = [
  { cle: "travail", titre: "Travail", classeCellule: "font-medium text-content-primary" },
  { cle: "salaire", titre: "Salaire par jour", classeCellule: "text-accent-light font-medium" },
  { cle: "equivalentPc", titre: "Équivalent" },
];

const COLONNES_PRIX = [
  { cle: "depense", titre: "Dépense", classeCellule: "font-medium text-content-primary" },
  { cle: "prix", titre: "Prix estimé", classeCellule: "text-accent-light font-medium" },
];

const COLONNES_ECHELLE = [
  { cle: "somme", titre: "Somme", classeCellule: "text-accent-light font-medium whitespace-nowrap" },
  { cle: "ressenti", titre: "Ressenti dans Valombre" },
];

const COLONNES_RECOMPENSES = [
  { cle: "type", titre: "Type de récompense", classeCellule: "font-medium text-content-primary" },
  { cle: "montant", titre: "Montant conseillé", classeCellule: "text-accent-light font-medium" },
];

function formaterNombre(nombre) {
  return FORMAT_NOMBRE.format(nombre);
}

function formaterPieces(montantPc) {
  const total = Math.max(0, Math.floor(montantPc));
  const po = Math.floor(total / 100);
  const pa = Math.floor((total % 100) / 10);
  const pc = total % 10;
  const morceaux = [];

  if (po) morceaux.push(`${po} Po`);
  if (pa) morceaux.push(`${pa} Pa`);
  if (pc || morceaux.length === 0) morceaux.push(`${pc} Pc`);

  return morceaux.join(" ");
}

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

function TableauSimple({ colonnes, lignes, largeurMin = "min-w-[520px]" }) {
  return (
    <div className="overflow-x-auto border border-surface-border bg-surface/30">
      <table className={cc("w-full text-left text-sm", largeurMin)}>
        <thead className="bg-surface-raised/80 text-content-muted uppercase text-[11px]">
          <tr>
            {colonnes.map((colonne) => (
              <th key={colonne.cle} className="px-3 sm:px-4 py-3 font-medium">
                {colonne.titre}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lignes.map((ligne, index) => (
            <tr
              key={`${ligne[colonnes[0].cle]}-${index}`}
              className="border-t border-surface-border/70 odd:bg-surface/20"
            >
              {colonnes.map((colonne) => (
                <td
                  key={colonne.cle}
                  className={cc(
                    "px-3 sm:px-4 py-3 align-top text-content-secondary whitespace-normal break-words",
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

function PanneauStat({ etiquette, valeur, detail }) {
  return (
    <div className="border border-surface-border bg-surface/50 p-3">
      <p className="text-xs uppercase text-content-muted mb-1">{etiquette}</p>
      <p className="text-lg sm:text-xl font-serif text-accent-light">{valeur}</p>
      {detail && <p className="text-xs text-content-muted mt-1">{detail}</p>}
    </div>
  );
}

function CommerceMonnaieUnivers({ commerce }) {
  const [montantPc, definirMontantPc] = useState("100");

  const totalPc = Math.max(0, Number.parseInt(montantPc || "0", 10) || 0);

  const equivalences = useMemo(() => {
    const { salairePauvrePcJour, hommePeupleStablePcMois, repasSimplePc } =
      commerce.salairesReference;

    return [
      {
        etiquette: "Conversion",
        valeur: formaterPieces(totalPc),
        detail: `${formaterNombre(totalPc)} Pc au total`,
      },
      {
        etiquette: "Salaire pauvre",
        valeur: `${formaterNombre(totalPc / salairePauvrePcJour)} jour(s)`,
        detail: `Base : ${formaterPieces(salairePauvrePcJour)} par jour`,
      },
      {
        etiquette: "Vie stable",
        valeur: `${formaterNombre(totalPc / hommePeupleStablePcMois)} mois`,
        detail: `Base : ${formaterPieces(hommePeupleStablePcMois)} par mois`,
      },
      {
        etiquette: "Repas simples",
        valeur: `${formaterNombre(totalPc / repasSimplePc)} repas`,
        detail: `Base : ${formaterPieces(repasSimplePc)} le repas`,
      },
    ];
  }, [commerce.salairesReference, totalPc]);

  if (!commerce) return null;

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      <Carte>
        <TitreBloc
          icone={Coins}
          titre={commerce.titre}
          sousTitre={commerce.sousTitre}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {commerce.conversion.pieces.map((piece) => (
            <div
              key={piece.code}
              className="border border-surface-border bg-surface/50 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-2xl font-serif text-accent-light">
                  {piece.code}
                </span>
                <span className="text-xs text-content-muted">
                  {piece.valeurPc} Pc
                </span>
              </div>
              <h4 className="text-sm font-medium text-content-primary mt-2">
                {piece.nom}
              </h4>
              <p className="text-sm text-content-secondary mt-2 leading-relaxed">
                {piece.usage}
              </p>
            </div>
          ))}
        </div>
      </Carte>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Carte className="xl:col-span-1">
          <TitreBloc
            icone={Calculator}
            titre="Convertisseur rapide"
            sousTitre="Entre une somme en cuivres pour obtenir son poids en jeu."
          />
          <label className="block">
            <span className="text-xs uppercase text-content-muted">
              Montant en Pc
            </span>
            <input
              type="number"
              min="0"
              step="1"
              value={montantPc}
              onChange={(event) => definirMontantPc(event.target.value)}
              className="mt-2 w-full bg-surface-raised border border-surface-border px-3 py-2 text-content focus:border-accent-dark focus:outline-none"
            />
          </label>
          <p className="mt-3 text-sm text-content-secondary leading-relaxed">
            {commerce.salairesReference.resume}
          </p>
        </Carte>

        <Carte className="xl:col-span-2">
          <TitreBloc
            icone={Wallet}
            titre="Équivalences MJ"
            sousTitre="Pour savoir immédiatement si une somme est ridicule, correcte ou énorme."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
            {equivalences.map((equivalence) => (
              <PanneauStat key={equivalence.etiquette} {...equivalence} />
            ))}
          </div>
        </Carte>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {commerce.reperes.map((repere) => (
          <div
            key={repere.valeur}
            className="border border-accent-muted/40 bg-accent-surface/40 p-4"
          >
            <p className="text-2xl font-serif text-accent-light">
              {repere.valeur}
            </p>
            <p className="text-sm text-content-primary mt-1">{repere.equivalent}</p>
            <p className="text-sm text-content-secondary mt-3 leading-relaxed">
              {repere.note}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Carte>
          <TitreBloc
            icone={Briefcase}
            titre="Revenus mensuels"
            sousTitre="Combien gagne un habitant selon sa place sociale."
          />
          <TableauSimple colonnes={COLONNES_REVENUS} lignes={commerce.revenusMensuels} />
        </Carte>

        <Carte>
          <TitreBloc
            icone={Landmark}
            titre="Salaires journaliers"
            sousTitre="Le repère principal : 1 Pa par jour pour une journée pauvre."
          />
          <TableauSimple colonnes={COLONNES_SALAIRES} lignes={commerce.salairesJournaliers} />
        </Carte>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Carte>
          <TitreBloc
            icone={ShoppingCart}
            titre="Prix du quotidien"
            sousTitre="Repas, logement, outils et dépenses ordinaires."
          />
          <TableauSimple
            colonnes={COLONNES_PRIX}
            lignes={commerce.prixQuotidien}
            largeurMin="min-w-[420px]"
          />
        </Carte>

        <Carte>
          <TitreBloc
            icone={Gift}
            titre="Récompenses pour les PJ"
            sousTitre="Montants qui restent lisibles à la table sans casser l'économie."
          />
          <TableauSimple
            colonnes={COLONNES_RECOMPENSES}
            lignes={commerce.recompensesPj}
            largeurMin="min-w-[460px]"
          />
        </Carte>
      </div>

      <Carte>
        <TitreBloc
          icone={ScrollText}
          titre="Échelle de valeur"
          sousTitre="Ce que les sommes représentent socialement à Valombre."
        />
        <TableauSimple
          colonnes={COLONNES_ECHELLE}
          lignes={commerce.echelleValeur}
          largeurMin="min-w-[560px]"
        />
      </Carte>

      <Carte>
        <TitreBloc
          icone={Home}
          titre="Ambiance économique"
          sousTitre="Comment faire sentir la monnaie sans compter chaque pièce."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {commerce.notesAmbiance.map((note) => (
            <div
              key={note}
              className="border border-surface-border bg-surface/40 px-3 py-2 text-sm text-content-secondary"
            >
              {note}
            </div>
          ))}
        </div>
      </Carte>
    </div>
  );
}

export default CommerceMonnaieUnivers;

