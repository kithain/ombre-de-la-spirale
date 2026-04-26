import { FileText } from "lucide-react";
import SectionPnj from "./SectionPnj";

function InfoPnj({ pnj }) {
  const langues = pnj.langues || pnj.languages;
  const equipement = pnj.equipement || pnj.equipment || pnj.gear;
  const tresor = pnj.tresor || pnj.treasure;

  if (!langues && !equipement && !tresor) return null;

  return (
    <SectionPnj titre="Informations" icone={FileText}>
      <div className="space-y-2 text-sm">
        {langues && (
          <p>
            <strong className="text-accent-light">Langues : </strong>
            {Array.isArray(langues) ? langues.join(", ") : langues}
          </p>
        )}
        {equipement && (
          <p>
            <strong className="text-accent-light">Équipement : </strong>
            {Array.isArray(equipement) ? equipement.join(", ") : equipement}
          </p>
        )}
        {tresor && (
          <p>
            <strong className="text-accent-light">Trésor : </strong>
            {tresor}
          </p>
        )}
      </div>
    </SectionPnj>
  );
}


export default InfoPnj;
