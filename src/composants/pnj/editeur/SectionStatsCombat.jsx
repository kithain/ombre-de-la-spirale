import { memo } from "react";
import { Shield } from "lucide-react";
import SectionPnj from "../sections/SectionPnj";
import { ChampTexte, ChampSelection } from "../champsFormulaire";
import ValeurCalculee from "./ValeurCalculee";
import BanniereBBA from "./BanniereBBA";
import { VITESSES, ESPACES, ALLONGES } from "../../../data/constantesDnD35";

/**
 * SectionStatsCombat — PV/DV, Initiative, Vitesse, CA, Espace/Allonge, Attaques, JS
 * @param {{ brouillon, stats, statsCreature, estCreature, modifierChamp, modifierChampImbrique, erreurs }} props
 */
const SectionStatsCombat = memo(function SectionStatsCombat({
  brouillon, stats, statsCreature, estCreature, modifierChamp, modifierChampImbrique, erreurs,
}) {
  return (
    <SectionPnj titre="Statistiques de combat" icone={Shield}>
      <BanniereBBA stats={stats} statsCreature={statsCreature} estCreature={estCreature} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <ChampTexte
            etiquette="PV"
            valeur={brouillon.pv}
            onChange={(v) => modifierChamp("pv", v)}
            type="number"
            erreur={erreurs.pv}
          />
          <ValeurCalculee
            label="Estimé"
            valeur={estCreature ? statsCreature?.pvMoyens : stats?.pvEstimes}
            actuelle={brouillon.pv}
            onAppliquer={(v) => modifierChamp("pv", v)}
          />
        </div>
        <div>
          <ChampTexte
            etiquette="DV"
            valeur={brouillon.dv}
            onChange={(v) => modifierChamp("dv", v)}
            placeholder="Ex: 6d8+24"
          />
          <ValeurCalculee
            label="Calculé"
            valeur={!estCreature ? stats?.dvFormatte : null}
            actuelle={brouillon.dv}
            onAppliquer={(v) => modifierChamp("dv", v)}
          />
        </div>
        <div>
          <ChampTexte
            etiquette="Initiative"
            valeur={brouillon.ini}
            onChange={(v) => modifierChamp("ini", v)}
            placeholder="Ex: +1"
          />
          <ValeurCalculee
            label="mod Dex"
            valeur={estCreature ? statsCreature?.initiative : stats?.initiative}
            actuelle={brouillon.ini}
            onAppliquer={(v) => modifierChamp("ini", v)}
          />
        </div>
        <ChampSelection
          etiquette="Vitesse"
          valeur={brouillon.vit}
          onChange={(v) => modifierChamp("vit", v)}
          options={VITESSES}
          placeholder="— Vitesse —"
        />
      </div>

      {/* Classe d'armure */}
      <div className="mt-4">
        <p className="text-xs uppercase tracking-wider text-content-muted font-semibold mb-2">
          Classe d&apos;armure
        </p>
        <div className="grid grid-cols-3 gap-4">
          <ChampTexte
            etiquette="CA Total"
            valeur={brouillon.ca?.total}
            onChange={(v) => modifierChampImbrique("ca.total", v)}
            type="number"
            erreur={erreurs.ca}
          />
          <div>
            <ChampTexte
              etiquette="CA Contact"
              valeur={brouillon.ca?.contact}
              onChange={(v) => modifierChampImbrique("ca.contact", v)}
              type="number"
            />
            <ValeurCalculee
              label="Calculé"
              valeur={estCreature ? statsCreature?.caContact : stats?.caContact}
              actuelle={brouillon.ca?.contact}
              onAppliquer={(v) => modifierChampImbrique("ca.contact", v)}
            />
          </div>
          <div>
            <ChampTexte
              etiquette="CA Dépourvu"
              valeur={brouillon.ca?.pris_au_depourvu}
              onChange={(v) => modifierChampImbrique("ca.pris_au_depourvu", v)}
              type="number"
            />
            <ValeurCalculee
              label="Calculé"
              valeur={estCreature ? statsCreature?.caPrisAuDepourvu : stats?.caPrisAuDepourvu}
              actuelle={brouillon.ca?.pris_au_depourvu}
              onAppliquer={(v) => modifierChampImbrique("ca.pris_au_depourvu", v)}
            />
          </div>
        </div>
      </div>

      {/* Espace & Allonge */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <ChampSelection
          etiquette="Espace occupé"
          valeur={brouillon.espace}
          onChange={(v) => modifierChamp("espace", v)}
          options={ESPACES}
          placeholder="— Espace —"
        />
        <ChampSelection
          etiquette="Allonge"
          valeur={brouillon.allonge}
          onChange={(v) => modifierChamp("allonge", v)}
          options={ALLONGES}
          placeholder="— Allonge —"
        />
      </div>

      {/* Attaques */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChampTexte
          etiquette="Attaque"
          valeur={brouillon.attaque}
          onChange={(v) => modifierChamp("attaque", v)}
          placeholder="Ex: épée longue +8 (1d8+3)"
        />
        <ChampTexte
          etiquette="Attaque à outrance"
          valeur={brouillon.att_outrance}
          onChange={(v) => modifierChamp("att_outrance", v)}
          placeholder="Ex: épée longue +8/+3 (1d8+3)"
        />
      </div>

      {/* Jets de sauvegarde */}
      <div className="mt-4">
        <p className="text-xs uppercase tracking-wider text-content-muted font-semibold mb-2">
          Jets de sauvegarde
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <ChampTexte
              etiquette="Vigueur"
              valeur={brouillon.js?.vig}
              onChange={(v) => modifierChampImbrique("js.vig", v)}
              placeholder="+0"
            />
            <ValeurCalculee
              label="Calculé"
              valeur={estCreature ? statsCreature?.jsTotalFormatte?.vig : stats?.jsTotalFormatte?.vig}
              actuelle={brouillon.js?.vig}
              onAppliquer={(v) => modifierChampImbrique("js.vig", v)}
            />
          </div>
          <div>
            <ChampTexte
              etiquette="Réflexes"
              valeur={brouillon.js?.ref}
              onChange={(v) => modifierChampImbrique("js.ref", v)}
              placeholder="+0"
            />
            <ValeurCalculee
              label="Calculé"
              valeur={estCreature ? statsCreature?.jsTotalFormatte?.ref : stats?.jsTotalFormatte?.ref}
              actuelle={brouillon.js?.ref}
              onAppliquer={(v) => modifierChampImbrique("js.ref", v)}
            />
          </div>
          <div>
            <ChampTexte
              etiquette="Volonté"
              valeur={brouillon.js?.vol}
              onChange={(v) => modifierChampImbrique("js.vol", v)}
              placeholder="+0"
            />
            <ValeurCalculee
              label="Calculé"
              valeur={estCreature ? statsCreature?.jsTotalFormatte?.vol : stats?.jsTotalFormatte?.vol}
              actuelle={brouillon.js?.vol}
              onAppliquer={(v) => modifierChampImbrique("js.vol", v)}
            />
          </div>
        </div>
      </div>
    </SectionPnj>
  );
});

export default SectionStatsCombat;
