import { memo } from "react";
import {
  Heart, Swords, Shield, Tag, Sparkles,
  BookOpen, Eye, Target, User, Zap, FileText, Landmark,
} from "lucide-react";
import { cc } from "../../utilitaires/combinerClasses";
import { formaterDegats, formaterArmure, formaterVie } from "../../data/personnages/pnjTemplate";
import { urlImage } from "../../utilitaires/urlImage";
import ApparitionsPnj from "./ApparitionsPnj";
import FrontsLiesPnj from "./FrontsLiesPnj";
import { calculerUsageNarratif } from "../../utilitaires/liaisonsDonnees";

// ─── Blocs PBTA ──────────────────────────────────────

function BlocImpulsion({ impulsion }) {
  if (!impulsion) return null;
  return (
    <div className="bg-accent/10 border border-accent/30 p-4">
      <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-accent-light mb-2 tracking-wider">
        <Zap size={14} />
        <span>Impulsion</span>
      </div>
      <p className="text-content font-medium leading-relaxed italic">{impulsion}</p>
    </div>
  );
}

function GrilleCombat({ degats, armure, vie }) {
  const elements = [
    {
      etiquette: "Dégâts",
      valeur: formaterDegats(degats),
      icone: Swords,
      couleur: "text-red-400",
    },
    {
      etiquette: "Armure",
      valeur: formaterArmure(armure),
      icone: Shield,
      couleur: "text-blue-400",
    },
    {
      etiquette: "Vie",
      valeur: formaterVie(vie) || "–",
      icone: Heart,
      couleur: "text-green-400",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-2">
      {elements.map((element) => (
        <div key={element.etiquette} className="bg-surface/50 p-3 text-center border border-surface-border">
          <element.icone className={`w-5 h-5 mx-auto mb-1.5 ${element.couleur}`} />
          <div className="text-[10px] uppercase font-bold text-content-subtle tracking-wider">{element.etiquette}</div>
          <div className="text-base font-black text-content mt-0.5">{element.valeur}</div>
        </div>
      ))}
    </div>
  );
}

function ListeEtiquettes({ etiquettes }) {
  if (!etiquettes?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {etiquettes.map((tag, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-surface/60 border border-surface-border text-content-secondary"
        >
          <Tag size={10} className="text-accent-light/60" />
          {tag}
        </span>
      ))}
    </div>
  );
}

function ListeActionsMJ({ actions }) {
  if (!actions?.length) return null;
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-content-subtle tracking-wider opacity-80">
        <Sparkles size={14} />
        <span>Actions MJ</span>
      </div>
      <div className="space-y-1.5">
        {actions.map((action, i) => (
          <div key={i} className="flex items-start gap-2 text-sm">
            <span className="text-accent-light mt-0.5">•</span>
            <span className="text-content">{action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfilNarratif({ interpretation, description }) {
  const lignes = [
    interpretation?.accroche && { etiquette: "Accroche", valeur: interpretation.accroche, icone: Eye },
    interpretation?.objectif && { etiquette: "Objectif", valeur: interpretation.objectif, icone: Target },
    interpretation?.attitude && { etiquette: "Attitude", valeur: interpretation.attitude, icone: User },
  ].filter(Boolean);

  return (
    <div className="space-y-3">
      {description && (
        <div className="text-sm text-content/80 leading-relaxed italic border-l-2 border-accent/30 pl-3">
          {description}
        </div>
      )}
      {lignes.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-content-subtle tracking-wider opacity-80">
            <BookOpen size={14} />
            <span>Profil narratif</span>
          </div>
          <div className="space-y-2">
            {lignes.map((l, i) => (
              <div key={i} className="flex items-start gap-2.5 bg-surface/30 p-2.5 border border-surface-border/40 text-sm">
                <l.icone size={14} className="mt-0.5 flex-shrink-0 text-accent-light/70" />
                <div>
                  <span className="text-accent-light/70 text-xs uppercase font-bold tracking-wider">{l.etiquette}</span>
                  <p className="text-content leading-snug mt-0.5">{l.valeur}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NotesMj({ notes }) {
  if (!notes) return null;
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-content-subtle tracking-wider opacity-80">
        <FileText size={14} />
        <span>Notes</span>
      </div>
      <p className="text-sm text-content/80 leading-relaxed whitespace-pre-wrap">{notes}</p>
    </div>
  );
}

function formaterFamilleNaine(familleNaine) {
  if (!familleNaine) return "";
  if (typeof familleNaine === "string") return familleNaine;
  return [familleNaine.lignee, familleNaine.maison]
    .filter(Boolean)
    .join(" — ");
}

// ─── Composant principal ─────────────────────────────

const STYLES_USAGE_NARRATIF = {
  scene: { label: "Scène", classe: "border-accent/40 bg-accent/10 text-accent-light" },
  levier: { label: "Levier", classe: "border-amber-700/40 bg-amber-950/30 text-amber-300" },
  contexte: { label: "Contexte", classe: "border-surface-border bg-surface/40 text-content-subtle" },
};

function BadgeUsageNarratif({ pnj }) {
  const niveau = pnj.usageNarratif || calculerUsageNarratif(pnj.id);
  const style = STYLES_USAGE_NARRATIF[niveau];
  if (!style) return null;

  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-[10px] uppercase font-bold text-content-subtle tracking-wider opacity-80">
        Usage
      </span>
      <span className={`inline-flex items-center gap-1.5 px-2 py-1 border ${style.classe}`}>
        <Sparkles size={12} />
        {style.label}
      </span>
    </div>
  );
}

const FichePnj = memo(function FichePnj({ pnj }) {
  if (!pnj) return null;

  return (
    <div className="space-y-6">
      {pnj.image && (
        <div className="flex justify-center">
          <img
            src={urlImage(pnj.image)}
            alt={pnj.nom}
            className="w-full max-w-[360px] aspect-[4/3] rounded border border-surface-border shadow-lg object-cover"
          />
        </div>
      )}

      {(pnj.race || pnj.faction || pnj.familleNaine) && (
        <div className="flex flex-wrap items-center gap-3 text-xs text-content-subtle">
          {pnj.race && (
            <span className="inline-flex items-center gap-1.5 bg-surface/40 border border-surface-border px-2 py-1">
              <User size={12} className="text-accent-light/60" />
              {pnj.race}
            </span>
          )}
          {pnj.faction && (
            <span className="inline-flex items-center gap-1.5 bg-surface/40 border border-surface-border px-2 py-1">
              <Shield size={12} className="text-accent-light/60" />
              {pnj.faction}
            </span>
          )}
          {pnj.familleNaine && (
            <span
              className="inline-flex items-center gap-1.5 bg-surface/40 border border-surface-border px-2 py-1"
              title={pnj.familleNaine.role || ""}
            >
              <Landmark size={12} className="text-accent-light/60" />
              {formaterFamilleNaine(pnj.familleNaine)}
            </span>
          )}
        </div>
      )}

      <BadgeUsageNarratif pnj={pnj} />

      <BlocImpulsion impulsion={pnj.impulsion} />

      <GrilleCombat degats={pnj.degats} armure={pnj.armure} vie={pnj.vie} />

      <ListeEtiquettes etiquettes={pnj.etiquettes} />

      <ListeActionsMJ actions={pnj.actionsMJ} />

      <ProfilNarratif interpretation={pnj.interpretation} description={pnj.description} />

      <NotesMj notes={pnj.notes} />

      <ApparitionsPnj pnjId={pnj.id} />

      <FrontsLiesPnj pnjId={pnj.id} />
    </div>
  );
});

export default FichePnj;
