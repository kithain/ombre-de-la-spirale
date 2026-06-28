import { MapPin, Users, Layers, Shield, Swords, AlertCircle } from "lucide-react";
import { compteursPnj } from "../../../data/npcRegistry";

function StatsUnivers({ zones }) {
  const totalZones = zones.length;
  const totalLieux = zones.reduce(
    (acc, z) => acc + (z.emplacements?.length || 0),
    0,
  );

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
      valeur: compteursPnj.all,
      couleur: "text-green-400",
    },
    {
      icone: Shield,
      etiquette: "Alliés",
      valeur: compteursPnj.allies,
      couleur: "text-blue-300",
    },
    {
      icone: Swords,
      etiquette: "Ennemis",
      valeur: compteursPnj.ennemis,
      couleur: "text-red-400",
    },
    {
      icone: AlertCircle,
      etiquette: "Neutres",
      valeur: compteursPnj.neutres,
      couleur: "text-yellow-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
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
