import { memo } from "react";
import { ScrollText, Plus, Trash2 } from "lucide-react";
import SectionPnj from "../sections/SectionPnj";

/**
 * SectionQuetesAnnexes — Liste des quêtes annexes liées à ce PNJ
 * @param {{ brouillon: object, modifierChamp: function }} props
 */
const SectionQuetesAnnexes = memo(function SectionQuetesAnnexes({ brouillon, modifierChamp }) {
  return (
    <SectionPnj titre="Quêtes annexes" icone={ScrollText}>
      <div className="space-y-4">
        {(brouillon.quetesAnnexes || []).map((quete, i) => (
          <div key={i} className="p-3 bg-surface/30 border border-surface-border/50 space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={quete.titre || ""}
                onChange={(e) => {
                  const nv = [...(brouillon.quetesAnnexes || [])];
                  nv[i] = { ...nv[i], titre: e.target.value };
                  modifierChamp("quetesAnnexes", nv);
                }}
                className="input-forge text-sm flex-1 font-semibold"
                placeholder="Titre de la quête"
              />
              <select
                value={quete.difficulte || ""}
                onChange={(e) => {
                  const nv = [...(brouillon.quetesAnnexes || [])];
                  nv[i] = { ...nv[i], difficulte: e.target.value };
                  modifierChamp("quetesAnnexes", nv);
                }}
                className="input-forge text-xs w-28"
              >
                <option value="">Difficulté</option>
                <option value="Facile">Facile</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Difficile">Difficile</option>
                <option value="Très difficile">Très difficile</option>
              </select>
              <select
                value={quete.statut || ""}
                onChange={(e) => {
                  const nv = [...(brouillon.quetesAnnexes || [])];
                  nv[i] = { ...nv[i], statut: e.target.value };
                  modifierChamp("quetesAnnexes", nv);
                }}
                className="input-forge text-xs w-28"
              >
                <option value="">Statut</option>
                <option value="disponible">Disponible</option>
                <option value="en_cours">En cours</option>
                <option value="terminee">Terminée</option>
                <option value="echouee">Échouée</option>
              </select>
              <button
                type="button"
                onClick={() => {
                  const nv = [...(brouillon.quetesAnnexes || [])];
                  nv.splice(i, 1);
                  modifierChamp("quetesAnnexes", nv);
                }}
                className="p-1 text-red-400 hover:text-red-300"
              >
                <Trash2 size={14} />
              </button>
            </div>
            <textarea
              value={quete.description || ""}
              onChange={(e) => {
                const nv = [...(brouillon.quetesAnnexes || [])];
                nv[i] = { ...nv[i], description: e.target.value };
                modifierChamp("quetesAnnexes", nv);
              }}
              rows={2}
              className="input-forge text-sm w-full resize-y"
              placeholder="Description de la quête"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                value={quete.recompenses || ""}
                onChange={(e) => {
                  const nv = [...(brouillon.quetesAnnexes || [])];
                  nv[i] = { ...nv[i], recompenses: e.target.value };
                  modifierChamp("quetesAnnexes", nv);
                }}
                className="input-forge text-xs"
                placeholder="Récompenses"
              />
              <input
                type="text"
                value={quete.conditions || ""}
                onChange={(e) => {
                  const nv = [...(brouillon.quetesAnnexes || [])];
                  nv[i] = { ...nv[i], conditions: e.target.value };
                  modifierChamp("quetesAnnexes", nv);
                }}
                className="input-forge text-xs"
                placeholder="Conditions de déclenchement"
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            const nv = [...(brouillon.quetesAnnexes || []), {
              id: `quete_${Date.now()}`,
              titre: "",
              description: "",
              statut: "disponible",
              recompenses: "",
              conditions: "",
              difficulte: "Moyenne",
              scenario: 1,
            }];
            modifierChamp("quetesAnnexes", nv);
          }}
          className="text-xs px-3 py-1.5 bg-surface border border-surface-border text-content-secondary hover:text-content hover:border-accent-muted transition-colors flex items-center gap-1"
        >
          <Plus size={12} />
          Ajouter une quête
        </button>
      </div>
    </SectionPnj>
  );
});

export default SectionQuetesAnnexes;
