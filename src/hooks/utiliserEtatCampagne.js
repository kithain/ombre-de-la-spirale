import { useCallback, useMemo } from "react";
import { etatCampagneInitial } from "../data/scenarios/etatCampagne";
import { utiliserEtatPersistant } from "./utiliserEtatPersistant";

const CLE_ETAT_CAMPAGNE = "campaign-state-v1";

function objetParId(elements, fabriqueValeur) {
  return Object.fromEntries(elements.map((element) => [element.id, fabriqueValeur(element)]));
}

function creerEtatVide() {
  return {
    version: etatCampagneInitial.version,
    indices: objetParId(etatCampagneInitial.indices, (indice) => indice.statutInitial === "obtenu"),
    preuves: objetParId(etatCampagneInitial.preuves, (preuve) => preuve.statutInitial === "obtenue"),
    allies: objetParId(etatCampagneInitial.allies, (allie) => allie.statutInitial || "inconnu"),
    fronts: objetParId(etatCampagneInitial.fronts, (front) => ({
      segment: front.segmentInitial || 0,
      statut: front.statutInitial || "actif",
    })),
    victimes: objetParId(etatCampagneInitial.victimes, (victime) => victime.valeurInitiale || 0),
    patients: objetParId(etatCampagneInitial.patients, (patient) => ({
      statut: patient.statutInitial || "a_localiser",
      priorite: patient.prioriteInitiale || "normale",
      note: "",
    })),
    choix: objetParId(etatCampagneInitial.choix, (choix) => choix.valeurInitiale || ""),
  };
}

function fusionnerEtat(etat) {
  const base = creerEtatVide();
  return {
    ...base,
    ...etat,
    indices: { ...base.indices, ...(etat?.indices || {}) },
    preuves: { ...base.preuves, ...(etat?.preuves || {}) },
    allies: { ...base.allies, ...(etat?.allies || {}) },
    fronts: { ...base.fronts, ...(etat?.fronts || {}) },
    victimes: { ...base.victimes, ...(etat?.victimes || {}) },
    patients: { ...base.patients, ...(etat?.patients || {}) },
    choix: { ...base.choix, ...(etat?.choix || {}) },
  };
}

export function utiliserEtatCampagne() {
  const [etatStocke, definirEtatStocke] = utiliserEtatPersistant(
    CLE_ETAT_CAMPAGNE,
    creerEtatVide(),
  );

  const etat = useMemo(() => fusionnerEtat(etatStocke), [etatStocke]);

  const definirIndice = useCallback((id, obtenu) => {
    definirEtatStocke((etatPrecedent) => {
      const etatFusionne = fusionnerEtat(etatPrecedent);
      return {
        ...etatFusionne,
        indices: { ...etatFusionne.indices, [id]: obtenu },
      };
    });
  }, [definirEtatStocke]);

  const definirPreuve = useCallback((id, obtenue) => {
    definirEtatStocke((etatPrecedent) => {
      const etatFusionne = fusionnerEtat(etatPrecedent);
      return {
        ...etatFusionne,
        preuves: { ...etatFusionne.preuves, [id]: obtenue },
      };
    });
  }, [definirEtatStocke]);

  const definirAllie = useCallback((id, statut) => {
    definirEtatStocke((etatPrecedent) => {
      const etatFusionne = fusionnerEtat(etatPrecedent);
      return {
        ...etatFusionne,
        allies: { ...etatFusionne.allies, [id]: statut },
      };
    });
  }, [definirEtatStocke]);

  const definirFront = useCallback((id, miseAJour) => {
    definirEtatStocke((etatPrecedent) => {
      const etatFusionne = fusionnerEtat(etatPrecedent);
      return {
        ...etatFusionne,
        fronts: {
          ...etatFusionne.fronts,
          [id]: { ...etatFusionne.fronts[id], ...miseAJour },
        },
      };
    });
  }, [definirEtatStocke]);

  const definirVictime = useCallback((id, valeur) => {
    definirEtatStocke((etatPrecedent) => {
      const etatFusionne = fusionnerEtat(etatPrecedent);
      return {
        ...etatFusionne,
        victimes: { ...etatFusionne.victimes, [id]: Math.max(0, Number(valeur) || 0) },
      };
    });
  }, [definirEtatStocke]);

  const definirPatient = useCallback((id, miseAJour) => {
    definirEtatStocke((etatPrecedent) => {
      const etatFusionne = fusionnerEtat(etatPrecedent);
      return {
        ...etatFusionne,
        patients: {
          ...etatFusionne.patients,
          [id]: { ...etatFusionne.patients[id], ...miseAJour },
        },
      };
    });
  }, [definirEtatStocke]);

  const definirChoix = useCallback((id, valeur) => {
    definirEtatStocke((etatPrecedent) => {
      const etatFusionne = fusionnerEtat(etatPrecedent);
      return {
        ...etatFusionne,
        choix: { ...etatFusionne.choix, [id]: valeur },
      };
    });
  }, [definirEtatStocke]);

  const reinitialiserEtatCampagne = useCallback(() => {
    definirEtatStocke(creerEtatVide());
  }, [definirEtatStocke]);

  return {
    definition: etatCampagneInitial,
    etat,
    definirIndice,
    definirPreuve,
    definirAllie,
    definirFront,
    definirVictime,
    definirPatient,
    definirChoix,
    reinitialiserEtatCampagne,
  };
}

export { creerEtatVide as creerEtatCampagneInitial };
