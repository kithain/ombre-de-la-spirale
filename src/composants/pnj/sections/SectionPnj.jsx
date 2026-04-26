
/**
 * Composant SectionPnj - Section générique pour afficher des informations de PNJ
 * @param {object} proprietes - Props du composant
 * @param {string} proprietes.titre - Titre de la section
 * @param {React.ComponentType} proprietes.icone - Composant d'icône
 * @param {React.ReactNode} proprietes.children - Contenu de la section
 * @param {string} proprietes.className - Classes CSS additionnelles
 */
function SectionPnj({ titre, icone: Icone, children, className = "" }) {
  return (
    <div className={`mb-6 ${className}`}>
      <h3 className="text-lg font-serif text-accent-light font-bold mb-3 flex items-center gap-2">
        {Icone && <Icone size={18} />}
        {titre}
      </h3>
      <div className="bg-surface/30 p-4 border border-surface-border">
        {children}
      </div>
    </div>
  );
}


export default SectionPnj;
