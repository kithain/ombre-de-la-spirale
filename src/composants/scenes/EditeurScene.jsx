import { useState, useMemo, useCallback } from "react";
import {
  X,
  FileText,
  BookOpen,
  ScrollText,
  Cog,
  ArrowRightLeft,
} from "lucide-react";
import Modale from "../interface/Modale";
import ComboboxFiltrable from "../interface/ComboboxFiltrable";
import { cc } from "../../utilitaires/combinerClasses";
import {
  ChampTexte,
  ChampSelection,
  ChampTextArea,
  ListeEditable,
} from "../pnj/champsFormulaire";
import { utiliserEditeurScenario } from "../../contextes/ContexteEditeurScenario";
import {
  obtenirLieuxScenario,
  obtenirNomLieu,
} from "../../utilitaires/liaisonsDonnees";
import { tousLesPnj } from "../../data/npcRegistry";

// ── Types de scène ──────────────────────────────────────────────────────────

const TYPES_SCENE = [
  { value: "Social", label: "Social" },
  { value: "Combat", label: "Combat" },
  { value: "Exploration", label: "Exploration" },
  { value: "Investigation", label: "Investigation" },
  { value: "Événement", label: "Événement" },
];

// ── Onglets ─────────────────────────────────────────────────────────────────

const ONGLETS = [
  { id: "general", label: "Général", icone: FileText },
  { id: "description", label: "Description", icone: BookOpen },
  { id: "narration", label: "Narration", icone: ScrollText },
  { id: "mecanique", label: "Mécanique", icone: Cog },
  { id: "transitions", label: "Transitions", icone: ArrowRightLeft },
];

// ── Composant principal ─────────────────────────────────────────────────────

function EditeurScene() {
  const {
    sceneEditee,
    fermerEditeurScene,
    modifierChampScene,
    modifierChampSceneImbrique,
    obtenirBrouillon,
  } = utiliserEditeurScenario();

  const [ongletActif, definirOngletActif] = useState("general");

  // Récupérer la scène depuis le brouillon
  const scene = useMemo(() => {
    if (!sceneEditee) return null;
    const { idScenario, indexActe, indexScene } = sceneEditee;
    const brouillon = obtenirBrouillon(idScenario);
    return brouillon?.acts?.[indexActe]?.scenes?.[indexScene] || null;
  }, [sceneEditee, obtenirBrouillon]);

  // Raccourcis pour modifier les champs
  const modChamp = useCallback(
    (champ, valeur) => {
      if (!sceneEditee) return;
      const { idScenario, indexActe, indexScene } = sceneEditee;
      modifierChampScene(idScenario, indexActe, indexScene, champ, valeur);
    },
    [sceneEditee, modifierChampScene],
  );

  const modImbrique = useCallback(
    (parent, sousChamp, valeur) => {
      if (!sceneEditee) return;
      const { idScenario, indexActe, indexScene } = sceneEditee;
      modifierChampSceneImbrique(idScenario, indexActe, indexScene, parent, sousChamp, valeur);
    },
    [sceneEditee, modifierChampSceneImbrique],
  );

  // Helpers pour les listes dans mecaniques
  const modifierElementListe = useCallback(
    (champParent, champListe, index, valeur) => {
      if (!scene) return;
      const liste = [...(scene[champParent]?.[champListe] || [])];
      liste[index] = valeur;
      modImbrique(champParent, champListe, liste);
    },
    [scene, modImbrique],
  );

  const ajouterElementListe = useCallback(
    (champParent, champListe, valeur) => {
      if (!scene) return;
      const liste = [...(scene[champParent]?.[champListe] || [])];
      liste.push(valeur);
      modImbrique(champParent, champListe, liste);
    },
    [scene, modImbrique],
  );

  const supprimerElementListe = useCallback(
    (champParent, champListe, index) => {
      if (!scene) return;
      const liste = [...(scene[champParent]?.[champListe] || [])];
      liste.splice(index, 1);
      modImbrique(champParent, champListe, liste);
    },
    [scene, modImbrique],
  );

  // Options PNJ pour le multi-select
  const optionsPnj = useMemo(
    () => tousLesPnj.map((p) => ({ value: p.id, label: `${p.nom || p.id} (${p.category || ""})` })),
    [],
  );

  // Lieux groupés
  const optionsLieux = useMemo(() => obtenirLieuxScenario(), []);

  if (!sceneEditee || !scene) return null;

  const estOuverte = !!sceneEditee;

  return (
    <Modale
      estOuverte={estOuverte}
      fermer={fermerEditeurScene}
      titre={`Éditer : ${scene.title || "Sans titre"}`}
      sousTitre={scene.type || ""}
      maxWidth="max-w-5xl"
    >
      <div className="space-y-4">
        {/* Barre d'onglets */}
        <div className="flex flex-wrap gap-1 border-b border-surface-border pb-2">
          {ONGLETS.map((onglet) => {
            const Icone = onglet.icone;
            const actif = ongletActif === onglet.id;
            return (
              <button
                key={onglet.id}
                type="button"
                onClick={() => definirOngletActif(onglet.id)}
                className={cc(
                  "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors border",
                  actif
                    ? "bg-accent-muted/30 text-accent-light border-accent-dark"
                    : "text-content-muted border-transparent hover:text-content hover:border-surface-border",
                )}
              >
                <Icone size={14} />
                {onglet.label}
              </button>
            );
          })}
        </div>

        {/* ── Onglet Général ───────────────────────────────────────────── */}
        {ongletActif === "general" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ChampTexte
                etiquette="Titre"
                valeur={scene.title}
                onChange={(v) => modChamp("title", v)}
                placeholder="Titre de la scène"
              />
              <ChampSelection
                etiquette="Type"
                valeur={scene.type}
                onChange={(v) => modChamp("type", v)}
                options={TYPES_SCENE}
              />
              <ChampTexte
                etiquette="Image"
                valeur={scene.image}
                onChange={(v) => modChamp("image", v)}
                placeholder="./images/scenes/nom.jpg"
              />
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">
                  Lieu
                </label>
                <ComboboxFiltrable
                  placeholder={scene.locationId ? obtenirNomLieu(scene.locationId) : "Sélectionner un lieu…"}
                  options={optionsLieux}
                  onSelect={(v) => modChamp("locationId", v)}
                />
                {scene.locationId && (
                  <div className="flex items-center gap-1 text-xs text-accent-light">
                    <span>{obtenirNomLieu(scene.locationId)}</span>
                    <button
                      type="button"
                      onClick={() => modChamp("locationId", "")}
                      className="text-red-400 hover:text-red-300"
                    >
                      <X size={10} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* PNJ multi-select */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-content-muted font-semibold">
                PNJ présents
              </label>
              {(scene.npcIds || []).length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {scene.npcIds.map((id, i) => {
                    const pnj = tousLesPnj.find((p) => p.id === id);
                    return (
                      <span
                        key={`${id}-${i}`}
                        className="inline-flex items-center gap-1 text-xs px-2 py-1 bg-surface/60 border border-surface-border text-content-secondary"
                      >
                        {pnj?.nom || id}
                        <button
                          type="button"
                          onClick={() => modChamp("npcIds", scene.npcIds.filter((_, j) => j !== i))}
                          className="text-red-400 hover:text-red-300 ml-0.5"
                        >
                          <X size={10} />
                        </button>
                      </span>
                    );
                  })}
                </div>
              )}
              <ComboboxFiltrable
                placeholder="+ Ajouter un PNJ…"
                options={optionsPnj}
                exclure={scene.npcIds || []}
                onSelect={(v) => modChamp("npcIds", [...(scene.npcIds || []), v])}
              />
            </div>
          </div>
        )}

        {/* ── Onglet Description ───────────────────────────────────────── */}
        {ongletActif === "description" && (
          <div className="space-y-4 animate-fadeIn">
            <ChampTextArea
              etiquette="Résumé"
              valeur={scene.description?.resume}
              onChange={(v) => modImbrique("description", "resume", v)}
              lignes={3}
              placeholder="Résumé de la scène…"
            />
            <ChampTextArea
              etiquette="Visuel"
              valeur={scene.description?.visuel}
              onChange={(v) => modImbrique("description", "visuel", v)}
              lignes={3}
              placeholder="Description visuelle…"
            />
            <ChampTextArea
              etiquette="Audio"
              valeur={scene.description?.audio}
              onChange={(v) => modImbrique("description", "audio", v)}
              lignes={2}
              placeholder="Ambiance sonore…"
            />
            <ChampTextArea
              etiquette="Odeur"
              valeur={scene.description?.odeur}
              onChange={(v) => modImbrique("description", "odeur", v)}
              lignes={2}
              placeholder="Odeurs présentes…"
            />
            <ChampTextArea
              etiquette="Lumière"
              valeur={scene.description?.lumiere}
              onChange={(v) => modImbrique("description", "lumiere", v)}
              lignes={2}
              placeholder="Conditions de lumière…"
            />
          </div>
        )}

        {/* ── Onglet Narration ─────────────────────────────────────────── */}
        {ongletActif === "narration" && (
          <div className="space-y-4 animate-fadeIn">
            <ChampTextArea
              etiquette="Déclencheur"
              valeur={scene.narration?.declencheur}
              onChange={(v) => modImbrique("narration", "declencheur", v)}
              lignes={2}
              placeholder="Qu'est-ce qui déclenche la scène…"
            />
            <ChampTextArea
              etiquette="Texte à lire"
              valeur={scene.narration?.texte_a_lire}
              onChange={(v) => modImbrique("narration", "texte_a_lire", v)}
              lignes={5}
              placeholder="Texte narratif à lire aux joueurs…"
            />
            <ChampTextArea
              etiquette="Contexte MJ"
              valeur={scene.narration?.contexte_mj}
              onChange={(v) => modImbrique("narration", "contexte_mj", v)}
              lignes={4}
              placeholder="Notes et conseils pour le MJ…"
            />
            <ChampTextArea
              etiquette="Objectif"
              valeur={scene.narration?.objectif}
              onChange={(v) => modImbrique("narration", "objectif", v)}
              lignes={2}
              placeholder="Objectif principal de la scène…"
            />
          </div>
        )}

        {/* ── Onglet Mécanique ─────────────────────────────────────────── */}
        {ongletActif === "mecanique" && (
          <div className="space-y-4 animate-fadeIn">
            <ListeEditable
              etiquette="Défis"
              elements={scene.mecaniques?.defis || []}
              onModifier={(i, v) => modifierElementListe("mecaniques", "defis", i, v)}
              onAjouter={(v) => ajouterElementListe("mecaniques", "defis", v)}
              onSupprimer={(i) => supprimerElementListe("mecaniques", "defis", i)}
              placeholder="Diplomatie (DD 15) : …"
            />
            <ListeEditable
              etiquette="Indices"
              elements={scene.mecaniques?.indices || []}
              onModifier={(i, v) => modifierElementListe("mecaniques", "indices", i, v)}
              onAjouter={(v) => ajouterElementListe("mecaniques", "indices", v)}
              onSupprimer={(i) => supprimerElementListe("mecaniques", "indices", i)}
              placeholder="Indice découvrable…"
            />
            <ChampTextArea
              etiquette="Récompenses"
              valeur={scene.mecaniques?.recompenses}
              onChange={(v) => modImbrique("mecaniques", "recompenses", v)}
              lignes={2}
              placeholder="XP, objets, avantages…"
            />
          </div>
        )}

        {/* ── Onglet Transitions ───────────────────────────────────────── */}
        {ongletActif === "transitions" && (
          <div className="space-y-4 animate-fadeIn">
            <ChampTextArea
              etiquette="Succès"
              valeur={scene.transitions?.success}
              onChange={(v) => modImbrique("transitions", "success", v)}
              lignes={3}
              placeholder="Que se passe-t-il en cas de succès…"
            />
            <ChampTextArea
              etiquette="Échec"
              valeur={scene.transitions?.fail}
              onChange={(v) => modImbrique("transitions", "fail", v)}
              lignes={3}
              placeholder="Que se passe-t-il en cas d'échec…"
            />
          </div>
        )}
      </div>
    </Modale>
  );
}

export default EditeurScene;
