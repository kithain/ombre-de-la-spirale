import { ScrollText, Users, Swords, BookMarked } from "lucide-react";

/**
 * Composant StatistiquesQuetes - Grille de statistiques des quêtes annexes
 * @param {object} proprietes - Props du composant
 * @param {number} proprietes.totalQuetes - Nombre total de quêtes
 * @param {number} proprietes.nbAllies - Nombre de PNJ alliés avec quêtes
 * @param {number} proprietes.nbEnnemis - Nombre de PNJ ennemis avec quêtes
 * @param {number} proprietes.nbScenarios - Nombre de scénarios couverts
 */
function StatistiquesQuetes({ totalQuetes, nbAllies, nbEnnemis, nbScenarios }) {
  const stats = [
    { icone: ScrollText, valeur: totalQuetes, etiquette: "Quêtes totales", couleur: "text-accent-light" },
    { icone: Users, valeur: nbAllies, etiquette: "PNJ Alliés", couleur: "text-blue-400" },
    { icone: Swords, valeur: nbEnnemis, etiquette: "PNJ Ennemis", couleur: "text-red-400" },
    { icone: BookMarked, valeur: nbScenarios, etiquette: "Scénarios", couleur: "text-amber-400" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map(({ icone: Icone, etiquette, valeur, couleur }) => (
        <div
          key={etiquette}
          className="bg-surface/50 border border-surface-border p-4 text-center"
        >
          <Icone className={`w-5 h-5 mx-auto mb-2 ${couleur}`} />
          <div className="text-2xl font-bold text-content-primary">
            {valeur}
          </div>
          <div className="text-xs text-content-muted uppercase tracking-wider">
            {etiquette}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatistiquesQuetes;
