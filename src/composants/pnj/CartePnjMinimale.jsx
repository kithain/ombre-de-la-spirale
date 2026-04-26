import { useState, memo, useMemo } from "react";
import Carte from "../interface/Carte";
import { cc } from "../../utilitaires/combinerClasses";
import {
  analyserFp,
  obtenirBadgeCategorie,
} from "../../utilitaires/utilitairesPnj";
import { Heart, Zap, Swords, BookOpen } from "lucide-react";

// ─── Pure functions (domaine) — hors du composant ─────────────────────────

/**
 * Détermine le thème couleur d'un PNJ selon sa catégorie.
 * Pure function sans dépendance React.
 */
function resoudreTheme(pnj) {
  if (pnj.category === "allies") return "bleu";
  if (pnj.category === "ennemis") return "rouge";
  if (pnj.category === "monstres") {
    return pnj.est_ennemi === false ? "bleu" : "rouge";
  }
  return "defaut";
}

/**
 * Extrait les données d'affichage d'un PNJ (FP, initiales, stats).
 * Pure function — peut être testée indépendamment.
 */
function extraireDonneesAffichage(pnj) {
  const aNiveau =
    pnj.niveau !== undefined &&
    pnj.niveau !== null &&
    pnj.niveau !== 0 &&
    pnj.niveau !== "0";
  const texteNiveau = aNiveau ? analyserFp(pnj.niveau) : pnj.fp;
  return {
    etiquetteFp: aNiveau ? `Niv. ${texteNiveau}` : `FP ${texteNiveau}`,
    theme: resoudreTheme(pnj),
    initiative: pnj.ini || "+0",
    caTotal: pnj.ca?.total ?? "10",
    caContact: pnj.ca?.contact ?? "10",
    caDepourvu: pnj.ca?.pris_au_depourvu ?? (pnj.ca?.total ?? "10"),
    jsVig: pnj.js?.vig || "+0",
    jsRef: pnj.js?.ref || "+0",
    jsVol: pnj.js?.vol || "+0",
    attaque: pnj.attaque || "",
    initiales: pnj.nom?.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || '??',
  };
}

/**
 * Composant CartePnjMinimale - Carte compacte pour afficher un PNJ
 * Focus sur la lisibilité et l'allégeance (Allié/Ennemi)
 * @param {object} proprietes - Props du composant
 * @param {object} proprietes.pnj - Données du PNJ
 * @param {Function} proprietes.auClic - Callback lors du clic
 */
const CartePnjMinimale = memo(function CartePnjMinimale({ pnj, auClic }) {
  const [estSurvole, definirEstSurvole] = useState(false);

  // Mémoiser l'extraction des données — ne recalcule que si pnj change
  const {
    etiquetteFp, theme, initiative,
    caTotal, caContact, caDepourvu,
    jsVig, jsRef, jsVol, attaque, initiales,
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
      <div className="relative z-10 flex flex-col h-full">
        {/* IMAGE 64x64px - Coin supérieur gauche */}
        <div className="absolute top-2 left-2 z-20">
          {pnj.image ? (
            <img
              src={pnj.image}
              alt={pnj.nom}
              className="w-16 h-16 rounded-lg border-2 border-surface-border/40 object-cover shadow-sm"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          {/* Placeholder avec initiales si pas d'image ou erreur de chargement */}
          <div
            className={`w-16 h-16 rounded-lg border-2 border-surface-border/40 bg-surface flex items-center justify-center shadow-sm ${pnj.image ? 'hidden' : 'flex'}`}
            style={{
              background: `linear-gradient(135deg, ${theme === 'bleu' ? '#1e3a8a' : theme === 'rouge' ? '#7f1d1d' : '#374151'}, ${theme === 'bleu' ? '#1e40af' : theme === 'rouge' ? '#991b1b' : '#4b5563'})`
            }}
          >
            <span className="text-white font-bold text-base">
              {initiales}
            </span>
          </div>
        </div>

        {/* NOM - Décalé pour laisser place à l'image */}
        <div className="pt-3 sm:pt-4 px-3 sm:px-4 pb-1.5 sm:pb-2 pl-20 sm:pl-24">
          <h3 className="text-base sm:text-xl font-serif text-accent-light font-bold text-center tracking-wide leading-tight">
            {pnj.nom}
          </h3>
          {/* CONTEXTE SCENARIO - Pour le MJ */}
          {pnj.meta_mj?.contexte_scenario && (
            <div className="mt-2 flex items-start gap-2 text-xs text-content-subtle leading-relaxed">
              <BookOpen size={12} className="text-accent-light/60 mt-0.5 flex-shrink-0" />
              <span className="line-clamp-2">{pnj.meta_mj.contexte_scenario}</span>
            </div>
          )}
        </div>

        {/* HEADER : Les seuls éléments colorés (Badges) */}
        <div className="px-3 sm:px-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 sm:pt-4">
            {/* Initiative (Neutre) */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-content-subtle font-bold text-xs sm:text-sm">
              <Zap size={15} className="text-accent-light" />
              <span>{initiative} Init</span>
            </div>

            <div className="flex items-center gap-2">
              {/* Badge Catégorie : Bleu ou Rouge */}
              {obtenirBadgeCategorie(pnj.category) && (
                <span
                  className={cc(
                    "px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold border uppercase tracking-wider shadow-sm",
                    theme === "bleu" &&
                      "bg-blue-900/40 border-blue-500/50 text-blue-200",
                    theme === "rouge" &&
                      "bg-red-900/40 border-red-500/50 text-red-200",
                    theme === "defaut" &&
                      "bg-slate-800 border-slate-500 text-slate-200",
                  )}
                >
                  {obtenirBadgeCategorie(pnj.category).label}
                </span>
              )}

              {/* Tag Niveau : Aligné sur la couleur du thème */}
              <span
                className={cc(
                  "px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold border uppercase tracking-wider shadow-sm",
                  theme === "bleu" &&
                    "bg-blue-900/40 border-blue-500/50 text-blue-200",
                  theme === "rouge" &&
                    "bg-red-900/40 border-red-500/50 text-red-200",
                  theme === "defaut" &&
                    "bg-slate-800 border-slate-500 text-slate-200",
                )}
              >
                {etiquetteFp}
              </span>
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-5 pt-2 sm:pt-3 space-y-3 sm:space-y-5">
          {/* GRILLES DE STATS (Entièrement Neutres pour la lisibilité) */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
            <BoiteStat etiquette="CA" valeur={caTotal} />
            <BoiteStat etiquette="Contact" valeur={caContact} />
            <BoiteStat etiquette="Dépourvu" valeur={caDepourvu} />
            <BoiteStat etiquette="Vig" valeur={jsVig} />
            <BoiteStat etiquette="Réf" valeur={jsRef} />
            <BoiteStat etiquette="Vol" valeur={jsVol} />
          </div>

          {/* ATTAQUE (Sobre) */}
          {attaque && (
            <div className="px-3 py-2.5 border border-surface-border/40 bg-black/10">
              <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-content-subtle mb-1.5 opacity-80">
                <Swords size={14} />
                <span>Attaque</span>
              </div>
              <div className="text-sm font-medium text-content leading-snug">
                {attaque}
              </div>
            </div>
          )}

          {/* FOOTER */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-2">
              {pnj.pv && (
                <>
                  <Heart size={18} className="text-red-500 fill-red-500/10" />
                  <span className="font-bold text-base text-content">
                    {pnj.pv}{" "}
                    <span className="text-xs text-content-subtle font-normal">
                      PV
                    </span>
                  </span>
                </>
              )}
            </div>
            {pnj.classe && (
              <div className="text-sm font-medium text-content leading-snug">
                {pnj.classe}
              </div>
            )}
          </div>
        </div>
      </div>
    </Carte>
  );
});

/**
 * Composant BoiteStat - Affiche une statistique dans une boîte
 */
const BoiteStat = memo(({ etiquette, valeur }) => (
  <div className="flex flex-col items-center py-2 border border-surface-border/40 bg-black/10">
    <div className="text-[10px] uppercase font-bold text-content-subtle mb-1 tracking-wider opacity-80">
      {etiquette}
    </div>
    <div className="text-base font-black text-content leading-none">
      {valeur}
    </div>
  </div>
));
BoiteStat.displayName = "BoiteStat";

export default CartePnjMinimale;
