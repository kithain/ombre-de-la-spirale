import { Info } from "lucide-react";
import SectionPnj from "./SectionPnj";

function InfoTypePnj({ pnj }) {
  const type = pnj.type;
  const environment = pnj.environnement;
  const organization = pnj.organisation;
  const sourceBook = pnj.meta_mj?.reference_livre;

  if (!type && !environment && !organization && !sourceBook) return null;

  return (
    <SectionPnj titre="Type & Environnement" icone={Info}>
      <div className="space-y-2 text-sm">
        {type && (
          <p>
            <strong className="text-accent-light">Type :</strong> {type}
          </p>
        )}
        {environment && (
          <p>
            <strong className="text-accent-light">Environnement :</strong>{" "}
            {environment}
          </p>
        )}
        {organization && (
          <p>
            <strong className="text-accent-light">Organisation :</strong>{" "}
            {organization}
          </p>
        )}
        {sourceBook && (
          <p>
            <strong className="text-accent-light">Source :</strong> {sourceBook}
          </p>
        )}
      </div>
    </SectionPnj>
  );
}


export default InfoTypePnj;
