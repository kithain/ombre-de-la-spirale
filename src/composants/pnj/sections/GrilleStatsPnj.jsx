import { Shield, Heart, Zap, Brain, ShieldOff, Sparkles } from "lucide-react";
import { analyserFp } from "../../../utilitaires/utilitairesPnj";

/**
 * Composant GrilleStatsPnj - Grille affichant les statistiques principales d'un PNJ
 * @param {object} proprietes - Props du composant
 * @param {object} proprietes.pnj - Données du PNJ
 */
function GrilleStatsPnj({ pnj }) {
  const caTotal = pnj.ca?.total;
  const caContact = pnj.ca?.contact;
  const caPrisAuDepourvu = pnj.ca?.pris_au_depourvu;
  const pv = pnj.pv;
  const fp = pnj.fp;
  const ini = pnj.ini;
  const rm = pnj.rm;
  const rd = pnj.rd;

  return (
    <div className="space-y-4 mb-6">
      {/* Stats principales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-surface/50 p-4 text-center border border-surface-border">
          <Shield className="w-6 h-6 mx-auto mb-2 text-accent-light" />
          <div className="font-bold text-accent-light text-lg">CA</div>
          <div className="text-xl">{caTotal ?? "–"}</div>
          {(caContact || caPrisAuDepourvu) && (
            <div className="text-xs text-content-muted mt-1">
              {caContact && <span>contact {caContact}</span>}
              {caContact && caPrisAuDepourvu && <span> / </span>}
              {caPrisAuDepourvu && <span>dép. {caPrisAuDepourvu}</span>}
            </div>
          )}
        </div>
        <div className="bg-surface/50 p-4 text-center border border-surface-border">
          <Heart className="w-6 h-6 mx-auto mb-2 text-red-400" />
          <div className="font-bold text-accent-light text-lg">PV</div>
          <div className="text-xl">{pv ?? "–"}</div>
        </div>
        <div className="bg-surface/50 p-4 text-center border border-surface-border">
          <Zap className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
          <div className="font-bold text-accent-light text-lg">Init</div>
          <div className="text-xl">{ini ?? "–"}</div>
        </div>
        <div className="bg-surface/50 p-4 text-center border border-surface-border">
          <Brain className="w-6 h-6 mx-auto mb-2 text-purple-400" />
          <div className="font-bold text-accent-light text-lg">
            {pnj.niveau ? "Niv" : "FP"}
          </div>
          <div className="text-xl">
            {pnj.niveau ? analyserFp(pnj.niveau) : (fp ?? "–")}
          </div>
        </div>
      </div>

      {/* RM et RD si présents */}
      {(rm || rd) && (
        <div className="flex flex-wrap gap-3">
          {rm && (
            <div className="flex items-center gap-2 bg-purple-900/20 text-purple-300 px-3 py-2 border border-purple-800/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">RM {rm}</span>
            </div>
          )}
          {rd && (
            <div className="flex items-center gap-2 bg-orange-900/20 text-orange-300 px-3 py-2 border border-orange-800/30">
              <ShieldOff className="w-4 h-4" />
              <span className="text-sm font-medium">RD {rd}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}


export default GrilleStatsPnj;
