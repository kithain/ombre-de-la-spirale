import { useState } from "react";
import { Download, Upload, Trash2 } from "lucide-react";

function GestionNotes() {
  const [message, definirMessage] = useState("");

  const exporterNotes = () => {
    const donnees = {
      notes: {},
      favoris: {},
      dateExport: new Date().toISOString(),
      version: "1.0",
    };

    for (let i = 0; i < localStorage.length; i++) {
      const cle = localStorage.key(i);
      if (cle.startsWith("scene-note-")) {
        const valeur = localStorage.getItem(cle);
        if (valeur) {
          donnees.notes[cle.replace("scene-note-", "")] = valeur;
        }
      } else if (cle.startsWith("scene-fav-")) {
        const valeur = localStorage.getItem(cle);
        if (valeur === "true") {
          donnees.favoris[cle.replace("scene-fav-", "")] = true;
        }
      }
    }

    const blob = new Blob([JSON.stringify(donnees, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const lien = document.createElement("a");
    lien.href = url;
    lien.download = `notes-mj-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
    URL.revokeObjectURL(url);

    const nbNotes = Object.keys(donnees.notes).length;
    const nbFavoris = Object.keys(donnees.favoris).length;
    definirMessage(
      `✅ Export réussi : ${nbNotes} note(s) et ${nbFavoris} favori(s)`,
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

        if (!donnees.notes && !donnees.favoris) {
          definirMessage("❌ Format de fichier invalide");
          setTimeout(() => definirMessage(""), 3000);
          return;
        }

        let nbNotesImportees = 0;
        let nbFavorisImportes = 0;

        if (donnees.notes) {
          Object.entries(donnees.notes).forEach(([titre, contenu]) => {
            localStorage.setItem(`scene-note-${titre}`, contenu);
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
      if (cle.startsWith("scene-note-") || cle.startsWith("scene-fav-")) {
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
          title="Exporter toutes les notes et favoris"
        >
          <Download size={16} />
          Exporter
        </button>

        <label className="flex items-center gap-2 px-3 py-2 bg-blue-900/20 border border-blue-800/30 text-blue-300 hover:bg-blue-900/30 transition-colors text-sm cursor-pointer">
          <Upload size={16} />
          Importer
          <input
            type="file"
            accept=".json"
            onChange={importerNotes}
            className="hidden"
          />
        </label>

        <button
          onClick={supprimerToutesLesNotes}
          className="flex items-center gap-2 px-3 py-2 bg-red-900/20 border border-red-800/30 text-red-300 hover:bg-red-900/30 transition-colors text-sm"
          title="Supprimer toutes les notes et favoris"
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
    </div>
  );
}

export default GestionNotes;
