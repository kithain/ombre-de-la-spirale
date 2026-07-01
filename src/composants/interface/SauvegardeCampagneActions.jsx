import { useState } from "react";
import { Download, Upload } from "lucide-react";
import {
  creerSauvegardeCampagne,
  restaurerSauvegardeCampagne,
  telechargerJson,
} from "../../utilitaires/sauvegardeCampagne";

function SauvegardeCampagneActions({ className = "", compacte = false, surMessage }) {
  const [message, definirMessage] = useState("");

  const notifier = (texte, recharge = false) => {
    definirMessage(texte);
    surMessage?.(texte);

    setTimeout(() => {
      definirMessage("");
      if (recharge) window.location.reload();
    }, recharge ? 2000 : 3000);
  };

  const exporterSauvegardeCampagne = () => {
    const donnees = creerSauvegardeCampagne();

    telechargerJson(
      `sauvegarde-campagne-${new Date().toISOString().split("T")[0]}.json`,
      donnees,
    );

    notifier(
      `Sauvegarde campagne exportee : ${Object.keys(donnees.stockage).length} cle(s)`,
    );
  };

  const importerSauvegardeCampagne = (event) => {
    const fichier = event.target.files[0];
    if (!fichier) return;

    const lecteur = new FileReader();
    lecteur.onload = (e) => {
      try {
        const donnees = JSON.parse(e.target.result);
        const nbClesImportees = restaurerSauvegardeCampagne(donnees);
        notifier(`Sauvegarde campagne importee : ${nbClesImportees} cle(s)`, true);
      } catch (erreur) {
        console.error("Erreur import sauvegarde campagne:", erreur);
        notifier("Erreur lors de l'import de la sauvegarde campagne");
      }
    };
    lecteur.readAsText(fichier);
    event.target.value = "";
  };

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={exporterSauvegardeCampagne}
          className="flex items-center gap-2 px-3 py-2 bg-emerald-900/20 border border-emerald-800/30 text-emerald-300 hover:bg-emerald-900/30 transition-colors text-sm"
          title="Exporter toute la sauvegarde de campagne"
        >
          <Download size={16} />
          {compacte ? "Exporter" : "Exporter sauvegarde"}
        </button>

        <label className="flex items-center gap-2 px-3 py-2 bg-cyan-900/20 border border-cyan-800/30 text-cyan-300 hover:bg-cyan-900/30 transition-colors text-sm cursor-pointer">
          <Upload size={16} />
          {compacte ? "Importer" : "Importer sauvegarde"}
          <input
            type="file"
            accept=".json"
            onChange={importerSauvegardeCampagne}
            className="hidden"
          />
        </label>
      </div>

      {message && (
        <div className="mt-2 text-xs text-content-secondary bg-surface p-2 border border-surface-border animate-fadeIn">
          {message}
        </div>
      )}
    </div>
  );
}

export default SauvegardeCampagneActions;
