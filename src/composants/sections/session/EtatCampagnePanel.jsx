import { useMemo, useState } from "react";
import {
  Archive,
  CheckSquare,
  GitBranch,
  Package,
  RotateCcw,
  Shield,
  Skull,
  Users,
} from "lucide-react";
import { utiliserEtatCampagne } from "../../../hooks/utiliserEtatCampagne";

const ONGLETS = [
  { id: "indices", etiquette: "Indices", icone: CheckSquare },
  { id: "preuves", etiquette: "Preuves", icone: Package },
  { id: "fronts", etiquette: "Fronts", icone: Skull },
  { id: "allies", etiquette: "Alliés", icone: Shield },
  { id: "victimes", etiquette: "Victimes", icone: Users },
  { id: "choix", etiquette: "Choix", icone: GitBranch },
];

const STATUTS_ALLIES = [
  "inconnu",
  "contact",
  "allie",
  "alliee",
  "temoin",
  "epargne",
  "revenue_fragile",
  "perdu",
  "mort",
];

const STATUTS_FRONTS = [
  "actif",
  "contenu",
  "stable",
  "reconstruction",
  "residuel",
  "stabilise_entrouvert",
  "résolu",
  "epilogue",
];

function Compteur({ valeur, total }) {
  return (
    <span className="text-[10px] px-2 py-0.5 border border-surface-border text-content-muted bg-surface/60">
      {valeur}/{total}
    </span>
  );
}

function LigneCase({ coche, onChange, titre, sousTitre }) {
  return (
    <label className="flex items-start gap-2 p-2 border border-surface-border bg-surface/50 cursor-pointer hover:border-accent-muted/50 transition-colors">
      <input
        type="checkbox"
        checked={!!coche}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 accent-emerald-600"
      />
      <span className="min-w-0">
        <span className="block text-xs font-semibold text-content">{titre}</span>
        {sousTitre && (
          <span className="block text-[11px] text-content-muted leading-relaxed">
            {sousTitre}
          </span>
        )}
      </span>
    </label>
  );
}

function EtatCampagnePanel() {
  const [onglet, definirOnglet] = useState("indices");
  const {
    definition,
    etat,
    definirIndice,
    definirPreuve,
    definirAllie,
    definirFront,
    definirVictime,
    definirChoix,
    reinitialiserEtatCampagne,
  } = utiliserEtatCampagne();

  const totaux = useMemo(() => {
    const indicesObtenus = definition.indices.filter((indice) => etat.indices[indice.id]).length;
    const preuvesObtenues = definition.preuves.filter((preuve) => etat.preuves[preuve.id]).length;
    const victimes = Object.values(etat.victimes).reduce((total, valeur) => total + (Number(valeur) || 0), 0);
    return { indicesObtenus, preuvesObtenues, victimes };
  }, [definition, etat]);

  return (
    <div className="border border-cyan-900/40 bg-cyan-950/10 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <Archive size={14} className="text-cyan-400" />
          <h4 className="text-xs uppercase tracking-widest text-cyan-300 font-semibold">
            État de campagne
          </h4>
        </div>
        <button
          type="button"
          onClick={reinitialiserEtatCampagne}
          className="inline-flex items-center gap-1 text-[10px] px-2 py-1 border border-surface-border text-content-muted hover:text-content hover:border-accent-muted transition-colors"
        >
          <RotateCcw size={11} />
          Réinitialiser
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="border border-surface-border bg-surface/50 p-2">
          <div className="text-[10px] uppercase tracking-widest text-content-subtle">Indices</div>
          <div className="text-sm font-mono text-content">{totaux.indicesObtenus}/{definition.indices.length}</div>
        </div>
        <div className="border border-surface-border bg-surface/50 p-2">
          <div className="text-[10px] uppercase tracking-widest text-content-subtle">Preuves</div>
          <div className="text-sm font-mono text-content">{totaux.preuvesObtenues}/{definition.preuves.length}</div>
        </div>
        <div className="border border-surface-border bg-surface/50 p-2">
          <div className="text-[10px] uppercase tracking-widest text-content-subtle">Victimes</div>
          <div className="text-sm font-mono text-content">{totaux.victimes}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mb-3 border-b border-surface-border">
        {ONGLETS.map(({ id, etiquette, icone: Icone }) => (
          <button
            key={id}
            type="button"
            onClick={() => definirOnglet(id)}
            className={`flex items-center gap-1 px-2 py-1.5 text-[11px] font-semibold transition-colors border-b-2 ${
              onglet === id
                ? "text-cyan-300 border-cyan-400"
                : "text-content-subtle border-transparent hover:text-content-muted"
            }`}
          >
            <Icone size={12} />
            {etiquette}
          </button>
        ))}
      </div>

      {onglet === "indices" && (
        <div className="space-y-2">
          <div className="flex justify-end">
            <Compteur valeur={totaux.indicesObtenus} total={definition.indices.length} />
          </div>
          {definition.indices.map((indice) => (
            <LigneCase
              key={indice.id}
              coche={etat.indices[indice.id]}
              onChange={(valeur) => definirIndice(indice.id, valeur)}
              titre={indice.nom}
              sousTitre={indice.resume}
            />
          ))}
        </div>
      )}

      {onglet === "preuves" && (
        <div className="space-y-2">
          <div className="flex justify-end">
            <Compteur valeur={totaux.preuvesObtenues} total={definition.preuves.length} />
          </div>
          {definition.preuves.map((preuve) => (
            <LigneCase
              key={preuve.id}
              coche={etat.preuves[preuve.id]}
              onChange={(valeur) => definirPreuve(preuve.id, valeur)}
              titre={preuve.nom}
              sousTitre={preuve.usage}
            />
          ))}
        </div>
      )}

      {onglet === "fronts" && (
        <div className="space-y-2">
          {definition.fronts.map((front) => {
            const valeur = etat.fronts[front.id] || {};
            return (
              <div key={front.id} className="border border-surface-border bg-surface/50 p-2 space-y-2">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="text-xs font-semibold text-content">{front.nom}</div>
                    <div className="text-[11px] text-content-muted leading-relaxed">{front.resume}</div>
                  </div>
                  <span className="text-[10px] font-mono text-content-subtle">
                    {front.horlogeId}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-content-subtle">
                    Segment
                    <input
                      type="number"
                      min="0"
                      max={front.max}
                      value={valeur.segment ?? 0}
                      onChange={(e) => definirFront(front.id, { segment: Number(e.target.value) })}
                      className="mt-1 w-full bg-surface-raised border border-surface-border p-1.5 text-xs text-content focus:border-accent-dark focus:outline-none"
                    />
                  </label>
                  <label className="text-[10px] uppercase tracking-widest text-content-subtle">
                    Statut
                    <select
                      value={valeur.statut || "actif"}
                      onChange={(e) => definirFront(front.id, { statut: e.target.value })}
                      className="mt-1 w-full bg-surface-raised border border-surface-border p-1.5 text-xs text-content focus:border-accent-dark focus:outline-none"
                    >
                      {STATUTS_FRONTS.map((statut) => (
                        <option key={statut} value={statut}>{statut}</option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {onglet === "allies" && (
        <div className="space-y-2">
          {definition.allies.map((allie) => (
            <div key={allie.id} className="border border-surface-border bg-surface/50 p-2 space-y-2">
              <div>
                <div className="text-xs font-semibold text-content">{allie.nom}</div>
                <div className="text-[11px] text-content-muted leading-relaxed">{allie.role}</div>
              </div>
              <select
                value={etat.allies[allie.id] || "inconnu"}
                onChange={(e) => definirAllie(allie.id, e.target.value)}
                className="w-full bg-surface-raised border border-surface-border p-1.5 text-xs text-content focus:border-accent-dark focus:outline-none"
              >
                {STATUTS_ALLIES.map((statut) => (
                  <option key={statut} value={statut}>{statut}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}

      {onglet === "victimes" && (
        <div className="space-y-2">
          {definition.victimes.map((victime) => (
            <label
              key={victime.id}
              className="grid grid-cols-[1fr_5rem] items-center gap-2 border border-surface-border bg-surface/50 p-2"
            >
              <span className="text-xs font-semibold text-content">{victime.nom}</span>
              <input
                type="number"
                min="0"
                value={etat.victimes[victime.id] ?? 0}
                onChange={(e) => definirVictime(victime.id, e.target.value)}
                className="bg-surface-raised border border-surface-border p-1.5 text-xs text-content focus:border-accent-dark focus:outline-none"
              />
            </label>
          ))}
        </div>
      )}

      {onglet === "choix" && (
        <div className="space-y-3">
          {definition.choix.map((choix) => (
            <div key={choix.id} className="border border-surface-border bg-surface/50 p-2">
              <div className="text-xs font-semibold text-content mb-2">{choix.nom}</div>
              <select
                value={etat.choix[choix.id] || ""}
                onChange={(e) => definirChoix(choix.id, e.target.value)}
                className="w-full bg-surface-raised border border-surface-border p-1.5 text-xs text-content focus:border-accent-dark focus:outline-none"
              >
                {choix.options.map((option) => (
                  <option key={option.id} value={option.id}>{option.nom}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EtatCampagnePanel;
