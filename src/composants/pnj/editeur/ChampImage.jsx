import { memo } from "react";
import { ImageIcon, Upload } from "lucide-react";
import { apiImages, estModeEditeur } from "../../../services/api";

/**
 * ChampImage — Prévisualisation + champ texte + bouton import d'image
 * @param {{ valeur: string|null, nom: string, onChange: function }} props
 */
const ChampImage = memo(function ChampImage({ valeur, nom, onChange }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">
        Image
      </label>
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 rounded-lg border-2 border-surface-border/40 overflow-hidden flex-shrink-0 bg-black/20 flex items-center justify-center">
          {valeur ? (
            <img
              src={valeur}
              alt={nom}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          ) : (
            <ImageIcon size={20} className="text-content-muted/40" />
          )}
        </div>
        <div className="flex-1 space-y-1.5">
          <input
            type="text"
            value={valeur || ""}
            onChange={(e) => onChange(e.target.value || null)}
            placeholder="/images/monstres/nom.jpg"
            className="input-forge text-sm w-full"
          />
          {estModeEditeur() && (
            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-accent-light/30 bg-accent-light/10 text-accent-light hover:bg-accent-light/20 cursor-pointer transition-colors">
              <Upload size={12} />
              Importer…
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/svg+xml"
                className="hidden"
                onChange={async (e) => {
                  const fichier = e.target.files?.[0];
                  if (!fichier) return;
                  try {
                    const { chemin } = await apiImages.uploader(fichier);
                    onChange(chemin);
                  } catch (err) {
                    console.error("[upload]", err);
                    alert(`Erreur upload : ${err.message}`);
                  }
                  e.target.value = "";
                }}
              />
            </label>
          )}
        </div>
      </div>
    </div>
  );
});

export default ChampImage;
