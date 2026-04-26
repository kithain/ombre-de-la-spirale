import { MapPin, Users, Layers, Compass } from "lucide-react";
import { obtenirPnjPourLieu } from "../../../utilitaires/liaisonsDonnees";

function StatsUnivers({ zones }) {
  const totalZones = zones.length;
  const totalLieux = zones.reduce(
    (acc, z) => acc + (z.locations?.length || 0),
    0,
  );
  const totalPnj = zones.reduce((acc, z) => {
    return (
      acc +
      (z.locations || []).reduce((locAcc, loc) => {
        return locAcc + obtenirPnjPourLieu(loc).length;
      }, 0)
    );
  }, 0);

  const stats = [
    {
      icone: Layers,
      etiquette: "Zones",
      valeur: totalZones,
      couleur: "text-purple-400",
    },
    {
      icone: MapPin,
      etiquette: "Lieux",
      valeur: totalLieux,
      couleur: "text-blue-400",
    },
    {
      icone: Users,
      etiquette: "PNJ",
      valeur: totalPnj,
      couleur: "text-green-400",
    },
    {
      icone: Compass,
      etiquette: "Secrets",
      valeur: "∞",
      couleur: "text-amber-400",
    },
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


export default StatsUnivers;
