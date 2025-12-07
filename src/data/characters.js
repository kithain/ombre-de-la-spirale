import { Sword, Zap, Eye, Shield } from 'lucide-react';

// Système de personnage
const CHARACTER_CLASSES = {
  guerrier: {
    name: "Guerrier",
    icon: Sword,
    stats: { pv: 20, force: 16, dex: 12, con: 14, int: 8, sag: 10, cha: 10 },
    skills: ["Combat au corps à corps", "Endurance"],
    equipment: ["Épée longue", "Armure de plaques", "Bouclier", "Potion de soin mineure"],
    abilities: [
      { name: "Coup puissant", description: "Attaque dévastatrice (+50% dégâts)", cooldown: 3, currentCooldown: 0 },
      { name: "Second souffle", description: "Récupère 25% PV max", cooldown: 0, uses: 1, currentUses: 1 },
      { name: "Posture défensive", description: "Réduit 50% dégâts ce tour", cooldown: 4, currentCooldown: 0 }
    ]
  },
  mage: {
    name: "Mage",
    icon: Zap,
    stats: { pv: 14, force: 8, dex: 12, con: 10, int: 16, sag: 14, cha: 10 },
    skills: ["Sorts d'attaque", "Connaissance arcanique"],
    equipment: ["Bâton", "Robe de mage", "Grimoire", "Potion de soin mineure"],
    spells: [
      { name: "Projectile magique", damage: "3d4+3", cost: 0, description: "Missiles magiques infaillibles" },
      { name: "Boule de feu", damage: "3d6", cost: 1, description: "Explosion de flammes (tous les ennemis)" },
      { name: "Éclair", damage: "4d6", cost: 1, description: "Foudre dévastatrice (1 ennemi)" }
    ],
    mana: 3
  },
  roublard: {
    name: "Roublard",
    icon: Eye,
    stats: { pv: 16, force: 10, dex: 16, int: 12, sag: 12, cha: 14, con: 10 },
    skills: ["Discrétion", "Crochetage", "Persuasion"],
    equipment: ["Dagues", "Armure de cuir", "Outils de voleur", "Potion de soin mineure"],
    abilities: [
      { name: "Attaque sournoise", description: "Dégâts doublés (1ère attaque)", cooldown: 0, uses: 1, currentUses: 1 },
      { name: "Esquive acrobatique", description: "Évite toutes les attaques ce tour", cooldown: 4, currentCooldown: 0 },
      { name: "Poison de lame", description: "3 dégâts/tour pendant 3 tours", cooldown: 5, currentCooldown: 0 }
    ]
  },
  clerc: {
    name: "Clerc",
    icon: Shield,
    stats: { pv: 18, force: 12, dex: 10, con: 12, int: 10, sag: 16, cha: 14 },
    skills: ["Soins", "Protection divine"],
    equipment: ["Masse d'armes", "Cotte de mailles", "Symbole sacré", "Potion de soin mineure", "Potion de soin mineure"],
    spells: [
      { name: "Mot de guérison", damage: "2d8+3", cost: 0, description: "Soigne le clerc", type: "heal" },
      { name: "Flamme sacrée", damage: "2d8", cost: 1, description: "Feu divin (1 ennemi)", type: "attack" },
      { name: "Esprit gardien", damage: "1d6", cost: 1, description: "Bouclier spirituel (réduit dégâts)", type: "buff" }
    ],
    mana: 3
  }
};

export { CHARACTER_CLASSES };
