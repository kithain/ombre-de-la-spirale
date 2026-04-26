import { memo } from "react";
import { Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { cc } from "../../../utilitaires/combinerClasses";

/**
 * Composant BarreEtatSauvegarde — Barre d'état loading/success/error
 */
const BarreEtatSauvegarde = memo(function BarreEtatSauvegarde({ etat, message, ETATS }) {
  if (etat === ETATS.INACTIF && !message) return null;

  const config = {
    [ETATS.EN_COURS]: {
      classe: "bg-blue-900/20 border-blue-700/30 text-blue-300",
      icone: <Loader2 size={16} className="animate-spin" />,
    },
    [ETATS.SUCCES]: {
      classe: "bg-green-900/20 border-green-700/30 text-green-300",
      icone: <CheckCircle size={16} />,
    },
    [ETATS.ERREUR]: {
      classe: "bg-red-900/20 border-red-700/30 text-red-300",
      icone: <AlertTriangle size={16} />,
    },
    [ETATS.INACTIF]: {
      classe: "bg-surface/30 border-surface-border text-content-muted",
      icone: null,
    },
  };

  const c = config[etat] || config[ETATS.INACTIF];

  return (
    <div className={cc("flex items-center gap-2 p-3 border text-sm", c.classe)}>
      {c.icone}
      <span>{message}</span>
    </div>
  );
});

export default BarreEtatSauvegarde;
