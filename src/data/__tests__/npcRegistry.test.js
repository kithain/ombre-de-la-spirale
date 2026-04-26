import { describe, it, expect } from "vitest";
import { chercherPnjParId, tousLesPnj } from "../npcRegistry.js";

describe("npcRegistry — normalisation via creerPnj", () => {
  it("l'Ogre a modeEntite 'creature' explicite et tous les champs canoniques", () => {
    const ogre = chercherPnjParId("ogre");
    expect(ogre).not.toBeNull();

    // modeEntite explicite (Correction B)
    expect(ogre.modeEntite).toBe("creature");
    expect(Array.isArray(ogre.classes)).toBe(true);
    expect(ogre.ogas).toBeDefined();
    expect(ogre.ogas).toHaveProperty("occupation");
    expect(Array.isArray(ogre.bonus_actifs)).toBe(true);
    expect(ogre.sorts_prepares).toBeDefined();
    expect(typeof ogre.disposition).toBe("string");

    // Métadonnées préservées (non-canoniques)
    expect(ogre.category).toBe("monstres");
    expect(ogre.source).toBe("bestiary");
    expect(ogre.isMonster).toBe(true);

    // Données D&D 3.5 préservées
    expect(ogre.type).toBe("Géant");
    expect(ogre.taille).toBe("Grand");
    expect(ogre.carac.for).toBe(21);
  });

  it("le Zombie (Mort-vivant) a modeEntite 'creature', con:null préservé", () => {
    const zombie = chercherPnjParId("zombie_humain");
    expect(zombie).not.toBeNull();
    expect(zombie.modeEntite).toBe("creature");
    expect(zombie.carac.con).toBeNull();
    expect(zombie.carac.int).toBeNull();
    expect(Array.isArray(zombie.classes)).toBe(true);
    expect(zombie.ogas).toBeDefined();
  });

  it("le Kobold (guerrier 1) est un PNJ avec classe Homme d'armes", () => {
    const kobold = chercherPnjParId("kobold");
    expect(kobold).not.toBeNull();
    expect(kobold.classe).toBe("Homme d'armes");
    expect(kobold.niveau).toBe(1);
    expect(kobold.type).toBe("Humanoïde (Reptilien)");
  });

  it("le Gobelin (guerrier 1) est un PNJ avec classe Homme d'armes", () => {
    const gobelin = chercherPnjParId("gobelin");
    expect(gobelin).not.toBeNull();
    expect(gobelin.classe).toBe("Homme d'armes");
    expect(gobelin.niveau).toBe(1);
    expect(gobelin.type).toBe("Humanoïde (Gobelinoïde)");
  });

  it("le Troll (ennemi) a modeEntite 'creature'", () => {
    const troll = chercherPnjParId("troll");
    expect(troll).not.toBeNull();
    expect(troll.modeEntite).toBe("creature");
    expect(troll.type).toBe("Géant");
  });

  it("le Rat Géant (déjà complet dans la source) reste inchangé", () => {
    const rat = chercherPnjParId("rat_geant");
    expect(rat).not.toBeNull();
    expect(rat.modeEntite).toBe("creature");
    expect(rat.classes).toEqual([]);
    expect(rat.isMonster).toBe(true);
  });

  it("le Guerrier 1 (PNJ avec classe) a les champs canoniques", () => {
    const guerrier = chercherPnjParId("guerrier_1");
    expect(guerrier).not.toBeNull();
    expect(guerrier.classe).toBe("Guerrier");
    expect(guerrier.niveau).toBe(1);
    expect(Array.isArray(guerrier.classes)).toBe(true);
    expect(guerrier.ogas).toBeDefined();
  });

  it("toutes les créatures pures du bestiaire ont modeEntite 'creature' explicite", () => {
    const creatures = tousLesPnj.filter(
      (p) => p.isMonster === true && !p.classe,
    );
    expect(creatures.length).toBeGreaterThan(0);
    for (const c of creatures) {
      expect(c.modeEntite, `${c.id}: modeEntite manquant`).toBe("creature");
    }
  });

  it("tous les PNJ ont les champs canoniques de base", () => {
    for (const pnj of tousLesPnj) {
      expect(pnj.id, `PNJ sans id`).toBeTruthy();
      expect(typeof pnj.nom, `${pnj.id}: nom manquant`).toBe("string");
      expect(pnj.carac, `${pnj.id}: carac manquant`).toBeDefined();
      expect(Array.isArray(pnj.classes), `${pnj.id}: classes non-array`).toBe(true);
      expect(pnj.ogas, `${pnj.id}: ogas manquant`).toBeDefined();
      expect(Array.isArray(pnj.bonus_actifs), `${pnj.id}: bonus_actifs non-array`).toBe(true);
      expect(pnj.sorts_prepares, `${pnj.id}: sorts_prepares manquant`).toBeDefined();
    }
  });
});
