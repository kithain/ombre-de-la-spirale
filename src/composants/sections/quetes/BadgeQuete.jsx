import { cc } from "../../../utilitaires/combinerClasses";

const CONFIGS = {
  difficulte: {
    Facile: "bg-green-900/40 border-green-500/50 text-green-200",
    Moyenne: "bg-yellow-900/40 border-yellow-500/50 text-yellow-200",
    Difficile: "bg-orange-900/40 border-orange-500/50 text-orange-200",
    "Très difficile": "bg-red-900/40 border-red-500/50 text-red-200",
  },
  statut: {
    disponible: "bg-blue-900/40 border-blue-500/50 text-blue-200",
    "en cours": "bg-amber-900/40 border-amber-500/50 text-amber-200",
    terminée: "bg-emerald-900/40 border-emerald-500/50 text-emerald-200",
  },
  allegiance: {
    bleu: "bg-blue-900/40 border-blue-500/50 text-blue-200",
    rouge: "bg-red-900/40 border-red-500/50 text-red-200",
  },
};

const LABELS = {
  allegiance: { bleu: "Allié", rouge: "Ennemi" },
};

const CLASSES_DEFAUT = "bg-slate-800 border-slate-500 text-slate-200";

/**
 * Composant BadgeQuete - Badge générique réutilisable pour quêtes
 * @param {object} proprietes - Props du composant
 * @param {"difficulte"|"statut"|"allegiance"} proprietes.type - Type de badge
 * @param {string} proprietes.valeur - Valeur à afficher et à résoudre
 * @param {string} proprietes.etiquette - Texte affiché (optionnel, sinon déduit)
 * @param {string} proprietes.nomClasse - Classes CSS additionnelles
 */
function BadgeQuete({ type, valeur, etiquette, nomClasse }) {
  const palette = CONFIGS[type] || {};
  const classes = palette[valeur] || CLASSES_DEFAUT;
  const texte = etiquette || LABELS[type]?.[valeur] || valeur || "Inconnu";

  return (
    <span
      className={cc(
        "px-2 py-0.5 text-[10px] sm:text-xs font-bold border uppercase tracking-wider",
        classes,
        nomClasse,
      )}
    >
      {texte}
    </span>
  );
}

export default BadgeQuete;
