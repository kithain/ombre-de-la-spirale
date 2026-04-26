import { BookOpen } from "lucide-react";
import SectionPnj from "./SectionPnj";

function CompetencesPnj({ pnj }) {
  const competences = pnj.competences;

  if (!competences || competences === "—") return null;

  // Gérer les différents formats
  const isString = typeof competences === "string";
  const isArray = Array.isArray(competences);
  const isObject = !isString && !isArray && typeof competences === "object";

  return (
    <SectionPnj titre="Compétences" icone={BookOpen}>
      <div className="text-sm">
        {isString && <p>{competences}</p>}
        {isArray && <p>{competences.join(", ")}</p>}
        {isObject && (
          <div className="flex flex-wrap gap-2">
            {Object.entries(competences).map(([nom, valeur]) => (
              <span
                key={nom}
                className="bg-surface/50 px-2 py-1 border border-surface-border"
              >
                {nom} <span className="text-accent-light">+{valeur}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </SectionPnj>
  );
}


export default CompetencesPnj;
