import { useState } from "react";
import { Download, Upload, Trash2 } from "lucide-react";
import {
  CLES_SAUVEGARDE_CAMPAGNE,
  PREFIXES_SAUVEGARDE_CAMPAGNE,
  collecterStockageCampagne,
  estCleSauvegardeCampagne,
  telechargerJson,
} from "../../../utilitaires/sauvegardeCampagne";

function GestionNotes() {
  const [message, definirMessage] = useState("");

  const exporterNotes = () => {
    const donnees = {
      notes: {},
      favoris: {},
      notesFronts: {},
      horlogesFronts: {},
      dateExport: new Date().toISOString(),
      version: "2.0",
    };

    for (let i = 0; i < localStorage.length; i++) {
      const cle = localStorage.key(i);
      const valeur = localStorage.getItem(cle);
      if (cle.startsWith("scene-note-")) {
        if (valeur) donnees.notes[cle.replace("scene-note-", "")] = valeur;
      } else if (cle.startsWith("scene-fav-")) {
        if (valeur === "true") donnees.favoris[cle.replace("scene-fav-", "")] = true;
      } else if (cle.startsWith("front-note-")) {
        if (valeur) donnees.notesFronts[cle.replace("front-note-", "")] = valeur;
      } else if (cle.startsWith("front-clock-")) {
        if (valeur) donnees.horlogesFronts[cle.replace("front-clock-", "")] = valeur;
      }
    }

    telechargerJson(
      `notes-mj-${new Date().toISOString().split("T")[0]}.json`,
      donnees,
    );

    const nbNotes = Object.keys(donnees.notes).length;
    const nbFavoris = Object.keys(donnees.favoris).length;
    definirMessage(
      `✅ Export réussi : ${nbNotes} note(s) et ${nbFavoris} favori(s)`,
    );
    setTimeout(() => definirMessage(""), 3000);
  };

  const exporterSauvegardeCampagne = () => {
    const stockage = collecterStockageCampagne();
    const donnees = {
      type: "ombre-de-la-spirale-sauvegarde-campagne",
      version: "3.0",
      dateExport: new Date().toISOString(),
      stockage,
      resume: {
        nombreCles: Object.keys(stockage).length,
        clesDirectes: CLES_SAUVEGARDE_CAMPAGNE,
        prefixes: PREFIXES_SAUVEGARDE_CAMPAGNE,
      },
    };

    telechargerJson(
      `sauvegarde-campagne-${new Date().toISOString().split("T")[0]}.json`,
      donnees,
    );

    definirMessage(
      `✅ Sauvegarde campagne exportée : ${Object.keys(stockage).length} clé(s)`,
    );
    setTimeout(() => definirMessage(""), 3000);
  };

  const importerNotes = (event) => {
    const fichier = event.target.files[0];
    if (!fichier) return;

    const lecteur = new FileReader();
    lecteur.onload = (e) => {
      try {
        const donnees = JSON.parse(e.target.result);

        if (
          !donnees.notes &&
          !donnees.favoris &&
          !donnees.notesFronts &&
          !donnees.horlogesFronts
        ) {
          definirMessage("❌ Format de fichier invalide");
          setTimeout(() => definirMessage(""), 3000);
          return;
        }

        let nbNotesImportees = 0;
        let nbFavorisImportes = 0;

        if (donnees.notes) {
          Object.entries(donnees.notes).forEach(([titre, content]) => {
            localStorage.setItem(`scene-note-${titre}`, content);
            nbNotesImportees++;
          });
        }

        if (donnees.favoris) {
          Object.entries(donnees.favoris).forEach(([titre, valeur]) => {
            if (valeur) {
              localStorage.setItem(`scene-fav-${titre}`, "true");
              nbFavorisImportes++;
            }
          });
        }

        if (donnees.notesFronts) {
          Object.entries(donnees.notesFronts).forEach(([id, content]) => {
            localStorage.setItem(`front-note-${id}`, content);
            nbNotesImportees++;
          });
        }

        if (donnees.horlogesFronts) {
          Object.entries(donnees.horlogesFronts).forEach(([id, valeur]) => {
            localStorage.setItem(`front-clock-${id}`, valeur);
          });
        }

        definirMessage(
          `✅ Import réussi : ${nbNotesImportees} note(s) et ${nbFavorisImportes} favori(s)`,
        );
        setTimeout(() => {
          definirMessage("");
          window.location.reload();
        }, 2000);
      } catch (erreur) {
        console.error("Erreur import:", erreur);
        definirMessage("❌ Erreur lors de l'import du fichier");
        setTimeout(() => definirMessage(""), 3000);
      }
    };
    lecteur.readAsText(fichier);
    event.target.value = "";
  };

  const importerSauvegardeCampagne = (event) => {
    const fichier = event.target.files[0];
    if (!fichier) return;

    const lecteur = new FileReader();
    lecteur.onload = (e) => {
      try {
        const donnees = JSON.parse(e.target.result);

        if (
          donnees.type !== "ombre-de-la-spirale-sauvegarde-campagne" ||
          !donnees.stockage ||
          typeof donnees.stockage !== "object"
        ) {
          definirMessage("❌ Format de sauvegarde campagne invalide");
          setTimeout(() => definirMessage(""), 3000);
          return;
        }

        let nbClesImportees = 0;

        Object.entries(donnees.stockage).forEach(([cle, valeur]) => {
          if (!estCleSauvegardeCampagne(cle) || valeur === null) return;
          localStorage.setItem(cle, String(valeur));
          nbClesImportees++;
        });

        definirMessage(
          `✅ Sauvegarde campagne importée : ${nbClesImportees} clé(s)`,
        );
        setTimeout(() => {
          definirMessage("");
          window.location.reload();
        }, 2000);
      } catch (erreur) {
        console.error("Erreur import sauvegarde campagne:", erreur);
        definirMessage("❌ Erreur lors de l'import de la sauvegarde campagne");
        setTimeout(() => definirMessage(""), 3000);
      }
    };
    lecteur.readAsText(fichier);
    event.target.value = "";
  };

  const supprimerToutesLesNotes = () => {
    if (
      !window.confirm(
        "⚠️ Êtes-vous sûr de vouloir supprimer TOUTES les notes et favoris ? Cette action est irréversible.",
      )
    ) {
      return;
    }

    let nbSuppressions = 0;
    const clesASupprimer = [];

    for (let i = 0; i < localStorage.length; i++) {
      const cle = localStorage.key(i);
      if (
        cle.startsWith("scene-note-") ||
        cle.startsWith("scene-fav-") ||
        cle.startsWith("front-note-") ||
        cle.startsWith("front-clock-")
      ) {
        clesASupprimer.push(cle);
      }
    }

    clesASupprimer.forEach((cle) => {
      localStorage.removeItem(cle);
      nbSuppressions++;
    });

    definirMessage(`✅ ${nbSuppressions} élément(s) supprimé(s)`);
    setTimeout(() => {
      definirMessage("");
      window.location.reload();
    }, 1500);
  };

  return (
    <div className="bg-surface-raised border border-surface-border p-4 mb-6">
      <h3 className="text-sm font-semibold text-content-secondary mb-3 flex items-center gap-2">
        <span>📝</span>
        Gestion des Notes MJ
      </h3>

      <div className="flex flex-wrap gap-2 mb-3">
        <button
          onClick={exporterNotes}
          className="flex items-center gap-2 px-3 py-2 bg-accent-surface border border-accent-muted text-accent-light hover:bg-accent-dark hover:text-white transition-colors text-sm"
          titre="Exporter toutes les notes et favoris"
        >
          <Download size={16} />
          Exporter notes
        </button>

        <label className="flex items-center gap-2 px-3 py-2 bg-blue-900/20 border border-blue-800/30 text-blue-300 hover:bg-blue-900/30 transition-colors text-sm cursor-pointer">
          <Upload size={16} />
          Importer notes
          <input
            type="file"
            accept=".json"
            onChange={importerNotes}
            className="hidden"
          />
        </label>

        <button
          onClick={exporterSauvegardeCampagne}
          className="flex items-center gap-2 px-3 py-2 bg-emerald-900/20 border border-emerald-800/30 text-emerald-300 hover:bg-emerald-900/30 transition-colors text-sm"
          titre="Exporter toute la sauvegarde de campagne"
        >
          <Download size={16} />
          Exporter sauvegarde campagne
        </button>

        <label className="flex items-center gap-2 px-3 py-2 bg-cyan-900/20 border border-cyan-800/30 text-cyan-300 hover:bg-cyan-900/30 transition-colors text-sm cursor-pointer">
          <Upload size={16} />
          Importer sauvegarde campagne
          <input
            type="file"
            accept=".json"
            onChange={importerSauvegardeCampagne}
            className="hidden"
          />
        </label>

        <button
          onClick={supprimerToutesLesNotes}
          className="flex items-center gap-2 px-3 py-2 bg-red-900/20 border border-red-800/30 text-red-300 hover:bg-red-900/30 transition-colors text-sm"
          titre="Supprimer toutes les notes et favoris"
        >
          <Trash2 size={16} />
          Tout supprimer
        </button>
      </div>

      {message && (
        <div className="text-xs text-content-secondary bg-surface p-2 border border-surface-border animate-fadeIn">
          {message}
        </div>
      )}

      <p className="text-xs text-content-subtle mt-2">
        💡 Les notes sont stockées localement dans votre navigateur.
        Exportez-les régulièrement pour les sauvegarder.
      </p>
      <p className="text-xs text-content-subtle mt-1">
        La sauvegarde campagne transfere aussi progression, scene active, onglets, horloges et etat global entre localhost, GitHub Pages et un autre ordinateur.
      </p>
    </div>
  );
}

export default GestionNotes;
