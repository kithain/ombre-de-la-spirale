import { Crosshair } from "lucide-react";
import SectionPnj from "./SectionPnj";

function TactiquePnj({ pnj }) {
  const tactiques = pnj.tactiques;
  const ficheCombat = pnj.fiche_combat;

  if (!tactiques && !ficheCombat) return null;

  return (
    <SectionPnj titre="Tactique" icone={Crosshair}>
      <div className="space-y-3 text-sm">
        {typeof tactiques === "string" && tactiques && (
          <p>{tactiques}</p>
        )}
        {ficheCombat?.resume_tactique && (
          <p>
            <strong className="text-accent-light">Résumé tactique :</strong>{" "}
            {ficheCombat.resume_tactique}
          </p>
        )}
        {ficheCombat?.sorts?.length > 0 && (
          <div>
            <strong className="text-accent-light block mb-1">Sorts :</strong>
            <ul className="list-disc ml-4 space-y-1">
              {ficheCombat.sorts.map((s, idx) => (
                <li key={idx}>
                  <strong>{s.nom}</strong> — {s.details}
                </li>
              ))}
            </ul>
          </div>
        )}
        {ficheCombat?.actions_spe?.length > 0 && (
          <div>
            <strong className="text-accent-light block mb-1">Actions spéciales :</strong>
            <ul className="list-disc ml-4 space-y-1">
              {ficheCombat.actions_spe.map((a, idx) => (
                <li key={idx}>
                  {typeof a === "string" ? a : <><strong>{a.nom}</strong> — {a.details}</>}
                </li>
              ))}
            </ul>
          </div>
        )}
        {ficheCombat?.dons_tactiques?.length > 0 && (
          <div>
            <strong className="text-accent-light block mb-1">Dons tactiques :</strong>
            <ul className="list-disc ml-4 space-y-1">
              {ficheCombat.dons_tactiques.map((d, idx) => (
                <li key={idx}>
                  {typeof d === "string" ? d : <><strong>{d.nom}</strong> — {d.details}</>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </SectionPnj>
  );
}


export default TactiquePnj;
