import { memo } from "react";
import {
  VARIANTES_ETIQUETTES,
  ETIQUETTE_PAR_DEFAUT,
} from "../../utilitaires/constantes";
import { cc } from "../../utilitaires/combinerClasses";

/**
 * Composant Etiquette - Badge/Tag stylisé avec variantes de couleur
 * @param {object} proprietes - Props du composant
 * @param {string} proprietes.type - Type de l'étiquette (détermine la couleur)
 * @param {string} proprietes.variante - Variante de style
 * @param {React.ReactNode} proprietes.enfants - Contenu de l'étiquette
 * @param {string} proprietes.nomClasse - Classes CSS additionnelles
 */
const Etiquette = memo(function Etiquette({ type = "", variante = "", children = null, nomClasse = "" }) {
  const style = VARIANTES_ETIQUETTES[variante || type] || ETIQUETTE_PAR_DEFAUT;

  return (
    <span className={cc("tag-base", style, nomClasse)}>
      {children || variante || type}
    </span>
  );
});

export default Etiquette;
