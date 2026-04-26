
/**
 * Composant SectionScene - Section générique pour afficher des informations de scène
 * @param {object} proprietes - Props du composant
 * @param {string} proprietes.titre - Titre de la section
 * @param {React.ReactNode} proprietes.enfants - Contenu de la section
 * @param {string} proprietes.nomClasse - Classes CSS additionnelles
 */
function SectionScene({ titre, children, nomClasse = "bg-surface-raised/40" }) {
  return (
    <div className={`mt-3 border border-surface-border p-3 ${nomClasse}`}>
      <h6 className="text-xs font-mono uppercase tracking-widest text-content-subtle mb-1">
        {titre}
      </h6>
      {children}
    </div>
  );
}


export default SectionScene;
