import { useState, memo, useMemo } from "react";
import Carte from "../interface/Carte";
import { cc } from "../../utilitaires/combinerClasses";
import { obtenirBadgeCategorie } from "../../utilitaires/utilitairesPnj";
import { urlImage } from "../../utilitaires/urlImage";
import { Heart, Swords, Shield, Tag, Zap } from "lucide-react";

function resoudreTheme(pnj) {
  if (pnj.categorie === "allies") return "bleu";
  if (pnj.categorie === "ennemis") return "rouge";
  if (pnj.categorie === "monstres") return "rouge";
  return "defaut";
}

// Valeurs courtes (chiffres bruts) pour la carte aide-mémoire.
function degatsCourt(degats) {
  return degats?.valeur != null ? String(degats.valeur) : "–";
}
function armureCourt(armure) {
  return String(armure?.valeur ?? 0);
}
function vieCourt(vie) {
  if (!vie) return "–";
  if (vie.type === "points" && vie.max != null) return `${vie.points ?? vie.max}/${vie.max}`;
  return String(vie.cases?.length ?? 0);
}

function extraireDonneesAffichage(pnj) {
  return {
    theme: resoudreTheme(pnj),
    initiales: pnj.nom?.split(" ").map((n) => n[0]).join("").substring(0, 2).toUpperCase() || "??",
    degats: degatsCourt(pnj.degats),
    armure: armureCourt(pnj.armure),
    vie: vieCourt(pnj.vie),
    impulsion: pnj.impulsion ?? null,
    etiquettes: pnj.etiquettes ?? [],
    role: pnj.role ?? null,
  };
}

const CartePnjMinimale = memo(function CartePnjMinimale({ pnj, auClic }) {
  const [estSurvole, definirEstSurvole] = useState(false);

  const {
    theme, initiales, degats, armure, vie, impulsion, etiquettes, role,
  } = useMemo(() => extraireDonneesAffichage(pnj), [pnj]);

  return (
    <Carte
      className={cc(
        "cursor-pointer transition-all duration-200 relative overflow-hidden flex flex-col bg-surface",
        "border-2 border-surface-border hover:border-accent-light/40",
        estSurvole && "scale-[1.01] shadow-2xl",
      )}
      onClick={auClic}
      onMouseEnter={() => definirEstSurvole(true)}
      onMouseLeave={() => definirEstSurvole(false)}
    >
      <div className="relative z-10 flex flex-col h-full p-3 sm:p-4 gap-3">
        {/* En-tête : image + identité */}
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            {pnj.image ? (
              <img
                src={urlImage(pnj.image)}
                alt={pnj.nom}
                className="w-24 aspect-[4/3] rounded-lg border-2 border-surface-border/40 object-cover shadow-sm"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : null}
            <div
              className={`w-24 aspect-[4/3] rounded-lg border-2 border-surface-border/40 items-center justify-center shadow-sm ${pnj.image ? "hidden" : "flex"}`}
              style={{
                background: `linear-gradient(135deg, ${theme === "bleu" ? "#1e3a8a" : theme === "rouge" ? "#7f1d1d" : "#374151"}, ${theme === "bleu" ? "#1e40af" : theme === "rouge" ? "#991b1b" : "#4b5563"})`,
              }}
            >
              <span className="text-white font-bold text-lg">{initiales}</span>
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-serif text-accent-light font-bold tracking-wide leading-tight line-clamp-2">
              {pnj.nom}
            </h3>
            {role && (
              <p className="mt-0.5 text-xs text-content-muted leading-snug line-clamp-2">{role}</p>
            )}
            {obtenirBadgeCategorie(pnj.categorie) && (
              <span
                className={cc(
                  "mt-1.5 inline-block px-2 py-0.5 text-[10px] font-bold border uppercase tracking-wider shadow-sm",
                  theme === "bleu" && "bg-blue-900/40 border-blue-500/50 text-blue-200",
                  theme === "rouge" && "bg-red-900/40 border-red-500/50 text-red-200",
                  theme === "defaut" && "bg-slate-800 border-slate-500 text-slate-200",
                )}
              >
                {obtenirBadgeCategorie(pnj.categorie).etiquette}
              </span>
            )}
          </div>
        </div>

        {/* Stats combat (chiffres bruts) */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          <BoiteStat etiquette="Dégâts" valeur={degats} icone={<Swords size={14} className="text-red-400" />} />
          <BoiteStat etiquette="Armure" valeur={armure} icone={<Shield size={14} className="text-blue-400" />} />
          <BoiteStat etiquette="Vie" valeur={vie} icone={<Heart size={14} className="text-green-400" />} />
        </div>

        {/* Impulsion (1 ligne) */}
        {impulsion && (
          <div className="flex items-start gap-2 px-3 py-2 border border-accent/20 bg-accent/5">
            <Zap size={12} className="mt-0.5 flex-shrink-0 text-accent-light" />
            <span className="text-xs text-content/90 leading-snug italic line-clamp-2">{impulsion}</span>
          </div>
        )}

        {/* Étiquettes (3 max) */}
        {etiquettes.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {etiquettes.slice(0, 3).map((t, i) => (
              <span key={i} className="text-[10px] px-1.5 py-0.5 bg-surface/60 border border-surface-border text-content-secondary flex items-center gap-1">
                <Tag size={8} />{t}
              </span>
            ))}
            {etiquettes.length > 3 && (
              <span className="text-[10px] text-content-muted self-center">+{etiquettes.length - 3}</span>
            )}
          </div>
        )}
      </div>
    </Carte>
  );
});

const BoiteStat = memo(({ etiquette, valeur, icone }) => (
  <div className="flex flex-col items-center py-2 border border-surface-border/40 bg-black/10">
    <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-content-subtle mb-1 tracking-wider opacity-80">
      {icone}
      <span>{etiquette}</span>
    </div>
    <div className="text-sm font-black text-content leading-none px-1">{valeur}</div>
  </div>
));
BoiteStat.displayName = "BoiteStat";

export default CartePnjMinimale;
