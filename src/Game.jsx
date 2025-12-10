import React, { useState, useEffect } from 'react';
import { 
  Sword, Shield, Heart, Zap, BookOpen, Map, 
  Save, RotateCcw, ChevronRight, Skull, AlertTriangle,
  User, Backpack, Scroll, Eye, X, Check, Dices
} from 'lucide-react';
import { CHARACTER_CLASSES, GAME_SCENES } from './GameEngine';

const Game = () => {
  // État du jeu
  const [gameState, setGameState] = useState('menu'); // menu, character_creation, playing, combat
  const [character, setCharacter] = useState(null);
  const [currentScene, setCurrentScene] = useState('intro');
  const [inventory, setInventory] = useState([]);
  const [gameLog, setGameLog] = useState([]);
  const [currentCombat, setCurrentCombat] = useState(null);
  const [showCharacterSheet, setShowCharacterSheet] = useState(false);
  
  // État pour la création de personnage
  const [selectedClass, setSelectedClass] = useState(null);
  const [characterName, setCharacterName] = useState('');
  
  // État pour le ciblage des sorts
  const [selectedSpell, setSelectedSpell] = useState(null);

  // Réinitialiser les états de création quand on quitte l'écran de création
  useEffect(() => {
    if (gameState !== 'character_creation') {
      setSelectedClass(null);
      setCharacterName('');
    }
  }, [gameState]);

  // Fonction pour lancer un dé
  const rollDice = (sides = 20) => {
    return Math.floor(Math.random() * sides) + 1;
  };

  // Fonction pour faire un test de compétence
  const skillCheck = (skill, dc) => {
    const roll = rollDice(20);
    const modifier = Math.floor((character.stats[skill] - 10) / 2);
    const total = roll + modifier;
    
    addToLog(`🎲 Test de ${skill.toUpperCase()}: ${roll} + ${modifier} = ${total} (DC ${dc})`);
    
    return {
      success: total >= dc,
      roll,
      modifier,
      total
    };
  };

  // Ajouter au journal
  const addToLog = (message) => {
    setGameLog(prev => [...prev, { text: message, timestamp: Date.now() }]);
  };

  // Créer un personnage
  const createCharacter = (className, name) => {
    const classData = CHARACTER_CLASSES[className];
    const newCharacter = {
      name,
      class: className,
      level: 1,
      xp: 0,
      stats: { ...classData.stats },
      currentPv: classData.stats.pv,
      maxPv: classData.stats.pv,
      skills: [...classData.skills],
      equipment: [...classData.equipment],
      gold: 0,
      // Ajouter mana et sorts pour les classes magiques
      ...(classData.spells && {
        spells: [...classData.spells],
        currentMana: classData.mana,
        maxMana: classData.mana
      }),
      // Ajouter capacités pour les classes martiales
      ...(classData.abilities && {
        abilities: classData.abilities.map(a => ({ ...a }))
      })
    };
    
    setCharacter(newCharacter);
    setGameState('playing');
    setCurrentScene('intro');
    addToLog(`⚔️ ${name} le ${classData.name} commence son aventure !`);
    
    // Réinitialiser les états de création
    setSelectedClass(null);
    setCharacterName('');
  };

  // Gérer les choix du joueur
  const handleChoice = (choice) => {
    const scene = GAME_SCENES[currentScene];
    
    // Gérer le redémarrage du jeu
    if (choice.type === 'restart') {
      setCharacter(null);
      setInventory([]);
      setGameLog([]);
      setCurrentScene('intro');
      setGameState('character_creation');
      return;
    }
    
    // Vérifier si un objet est requis
    if (choice.requires && !inventory.includes(choice.requires)) {
      addToLog(`❌ Vous avez besoin de : ${choice.requires}`);
      return;
    }

    // Gérer les tests de compétence
    if (choice.skillCheck) {
      const result = skillCheck(choice.skillCheck.skill, choice.skillCheck.dc);
      const nextScene = GAME_SCENES[choice.next];
      
      if (result.success && nextScene.onSuccess) {
        addToLog(`✅ Succès ! ${nextScene.onSuccess.text}`);
        applyRewards(nextScene.onSuccess.reward);
        
        if (nextScene.onSuccess.next) {
          const targetScene = GAME_SCENES[nextScene.onSuccess.next];
          setCurrentScene(nextScene.onSuccess.next);
          
          if (nextScene.onSuccess.combatSetup && targetScene?.type === 'combat') {
            startCombat(nextScene.onSuccess.combatSetup);
          }
        }
      } else if (!result.success && nextScene.onFailure) {
        addToLog(`❌ Échec... ${nextScene.onFailure.text}`);
        applyRewards(nextScene.onFailure.reward);
        
        if (nextScene.onFailure.next) {
          const targetScene = GAME_SCENES[nextScene.onFailure.next];
          setCurrentScene(nextScene.onFailure.next);
          
          if (nextScene.onFailure.combatSetup && targetScene?.type === 'combat') {
            startCombat(nextScene.onFailure.combatSetup);
          }
        }
      }
      return;
    }

    // Appliquer les récompenses
    if (choice.reward) {
      applyRewards(choice.reward);
    }

    // Gérer les combats
    if (choice.next) {
      const nextScene = GAME_SCENES[choice.next];
      
      // Si la prochaine scène est un combat
      if (nextScene?.type === 'combat') {
        setCurrentScene(choice.next);
        
        // Chercher le combatSetup dans la scène actuelle
        const currentSceneData = GAME_SCENES[currentScene];
        if (currentSceneData.combatSetup) {
          startCombat(currentSceneData.combatSetup);
        } else {
          addToLog(`⚠️ Erreur : Configuration de combat manquante`);
        }
      } else {
        // Scène normale
        setCurrentScene(choice.next);
      }
    }

    addToLog(`➡️ ${choice.text}`);
  };

  // Appliquer les récompenses
  const applyRewards = (reward) => {
    if (!reward) return;

    if (reward.gold) {
      setCharacter(prev => ({
        ...prev,
        gold: prev.gold + reward.gold
      }));
      addToLog(`💰 +${reward.gold} pièces d'or`);
    }

    if (reward.items) {
      setInventory(prev => [...prev, ...reward.items]);
      reward.items.forEach(item => addToLog(`🎒 Objet obtenu : ${item}`));
    }

    if (reward.xp) {
      setCharacter(prev => ({
        ...prev,
        xp: prev.xp + reward.xp
      }));
      addToLog(`⭐ +${reward.xp} XP`);
    }

    if (reward.heal === 'full') {
      setCharacter(prev => ({
        ...prev,
        currentPv: prev.maxPv
      }));
      addToLog(`❤️ PV restaurés`);
    }
  };

  // Démarrer un combat
  const startCombat = (combatSetup) => {
    setCurrentCombat({
      enemies: combatSetup.enemies.map((e, i) => ({ ...e, id: i, currentPv: e.pv })),
      playerAdvantage: combatSetup.playerAdvantage || false,
      turn: 0
    });
    
    // Réinitialiser les uses des capacités
    if (character.abilities) {
      setCharacter(prev => ({
        ...prev,
        abilities: prev.abilities.map(a => ({
          ...a,
          currentUses: a.uses || a.currentUses
        }))
      }));
    }
    
    setGameState('combat');
    addToLog(`⚔️ COMBAT ! ${combatSetup.enemies.length} ennemis`);
  };

  // Combat - Attaque du joueur
  const playerAttack = (enemyId) => {
    const enemy = currentCombat.enemies.find(e => e.id === enemyId && e.currentPv > 0);
    if (!enemy) return;

    const attackRoll = rollDice(20);
    const attackBonus = Math.floor((character.stats.force - 10) / 2);
    const totalAttack = attackRoll + attackBonus;

    addToLog(`🎲 Attaque: ${attackRoll} + ${attackBonus} = ${totalAttack} vs DEF ${enemy.def}`);

    if (totalAttack >= enemy.def || attackRoll === 20) {
      const damage = rollDice(8) + attackBonus;
      enemy.currentPv -= damage;
      addToLog(`⚔️ Vous infligez ${damage} dégâts à ${enemy.name} !`);

      if (enemy.currentPv <= 0) {
        addToLog(`💀 ${enemy.name} est vaincu !`);
      }
    } else {
      addToLog(`❌ Attaque manquée !`);
    }

    // Vérifier si tous les ennemis sont vaincus
    const aliveEnemies = currentCombat.enemies.filter(e => e.currentPv > 0);
    if (aliveEnemies.length === 0) {
      endCombat(true);
      return;
    }

    // Tour des ennemis
    enemiesTurn();
  };

  // Tour des ennemis
  const enemiesTurn = () => {
    setTimeout(() => {
      // Vérifier que le combat est toujours en cours
      if (!currentCombat || !character) return;
      
      const aliveEnemies = currentCombat.enemies.filter(e => e.currentPv > 0);
      let totalDamage = 0;
      
      // Esquive acrobatique - évite toutes les attaques
      if (character.dodgeActive) {
        addToLog(`🤸 Esquive acrobatique ! Toutes les attaques sont évitées !`);
        setCharacter(prev => ({
          ...prev,
          dodgeActive: false,
          // Décrémenter les cooldowns
          abilities: prev.abilities ? prev.abilities.map(a => ({
            ...a,
            currentCooldown: Math.max(0, (a.currentCooldown || 0) - 1)
          })) : undefined
        }));
        
        setCurrentCombat(prev => {
          if (!prev) return null;
          return {
            ...prev,
            turn: prev.turn + 1
          };
        });
        return;
      }
      
      aliveEnemies.forEach(enemy => {
        // Appliquer poison
        if (enemy.poisoned && enemy.poisoned > 0) {
          enemy.currentPv = Math.max(0, enemy.currentPv - enemy.poisonDamage);
          addToLog(`☠️ ${enemy.name} subit ${enemy.poisonDamage} dégâts de poison`);
          enemy.poisoned--;
          
          if (enemy.currentPv <= 0) {
            addToLog(`💀 ${enemy.name} succombe au poison !`);
            return;
          }
        }
        
        if (enemy.currentPv <= 0) return;
        
        const attackRoll = rollDice(20);
        const totalAttack = attackRoll + enemy.atk;
        const playerDef = 10 + Math.floor((character.stats.dex - 10) / 2);

        addToLog(`🎲 ${enemy.name} attaque: ${attackRoll} + ${enemy.atk} = ${totalAttack} vs DEF ${playerDef}`);

        if (totalAttack >= playerDef || attackRoll === 20) {
          const damage = rollDice(6) + 2;
          totalDamage += damage;
          addToLog(`💥 ${enemy.name} vous inflige ${damage} dégâts !`);
        } else {
          addToLog(`🛡️ Vous esquivez l'attaque de ${enemy.name} !`);
        }
      });

      // Appliquer posture défensive
      if (character.defensiveStance) {
        totalDamage = Math.floor(totalDamage * 0.5);
        addToLog(`🛡️ Posture défensive ! Dégâts réduits de 50%`);
      }

      // Appliquer le bouclier spirituel si actif
      let finalDamage = totalDamage;
      if (character.shieldActive && character.shieldValue) {
        const reduction = Math.min(totalDamage, character.shieldValue);
        finalDamage = totalDamage - reduction;
        addToLog(`🛡️ Esprit gardien absorbe ${reduction} dégâts !`);
      }

      // Appliquer tous les dégâts et vérifier la défaite
      const newPv = Math.max(0, character.currentPv - finalDamage);
      setCharacter(prev => ({
        ...prev,
        currentPv: newPv,
        shieldActive: false,
        shieldValue: 0,
        defensiveStance: false,
        // Décrémenter les cooldowns
        abilities: prev.abilities ? prev.abilities.map(a => ({
          ...a,
          currentCooldown: Math.max(0, (a.currentCooldown || 0) - 1)
        })) : undefined
      }));

      // Vérifier si le joueur est vaincu
      if (newPv <= 0) {
        endCombat(false);
        return;
      }

      setCurrentCombat(prev => {
        if (!prev) return null;
        return {
          ...prev,
          turn: prev.turn + 1
        };
      });
    }, 1000);
  };

  // Fin du combat
  const endCombat = (victory) => {
    setCurrentCombat(null);

    if (victory) {
      addToLog(`🎉 VICTOIRE !`);
      const scene = GAME_SCENES[currentScene];
      if (scene.onVictory) {
        setCurrentScene(scene.onVictory);
      }
      setGameState('playing');
    } else {
      addToLog(`💀 DÉFAITE...`);
      const scene = GAME_SCENES[currentScene];
      const defeatScene = scene.onDefeat || 'game_over_combat';
      setCurrentScene(defeatScene);
      setGameState('playing');
    }
  };

  // Lancer un sort (mage et clerc)
  const castSpell = (spell, targetEnemyId = null) => {
    if (!character.spells || character.currentMana < spell.cost) {
      addToLog(`❌ Pas assez de mana !`);
      return;
    }

    // Consommer le mana
    setCharacter(prev => ({
      ...prev,
      currentMana: prev.currentMana - spell.cost
    }));

    addToLog(`✨ ${character.name} lance ${spell.name} !`);

    // Calculer les dégâts/soins
    const diceMatch = spell.damage.match(/(\d+)d(\d+)(\+\d+)?/);
    if (!diceMatch) return;

    const numDice = parseInt(diceMatch[1]);
    const diceSize = parseInt(diceMatch[2]);
    const bonus = diceMatch[3] ? parseInt(diceMatch[3]) : 0;
    
    let totalValue = bonus;
    for (let i = 0; i < numDice; i++) {
      totalValue += rollDice(diceSize);
    }

    // Gérer les différents types de sorts
    if (spell.type === 'heal') {
      // Sort de soin
      setCharacter(prev => ({
        ...prev,
        currentPv: Math.min(prev.maxPv, prev.currentPv + totalValue)
      }));
      addToLog(`💚 Soin de ${totalValue} PV !`);
      
      // Tour des ennemis après le soin
      enemiesTurn();
      return;
    }

    if (spell.type === 'buff') {
      // Esprit gardien - réduit les dégâts du prochain tour
      setCharacter(prev => ({
        ...prev,
        shieldActive: true,
        shieldValue: totalValue
      }));
      addToLog(`🛡️ Bouclier spirituel activé ! Réduit ${totalValue} dégâts au prochain tour`);
      
      // Tour des ennemis
      enemiesTurn();
      return;
    }

    // Sorts d'attaque
    if (spell.name === "Boule de feu") {
      // Attaque de zone - tous les ennemis
      const updatedEnemies = currentCombat.enemies.map(e => ({
        ...e,
        currentPv: e.currentPv > 0 ? Math.max(0, e.currentPv - totalValue) : e.currentPv
      }));
      
      setCurrentCombat(prev => ({
        ...prev,
        enemies: updatedEnemies
      }));
      
      addToLog(`🔥 Boule de feu ! ${totalValue} dégâts à tous les ennemis !`);
      
      // Vérifier victoire avec les ennemis mis à jour
      const aliveEnemies = updatedEnemies.filter(e => e.currentPv > 0);
      if (aliveEnemies.length === 0) {
        endCombat(true);
        return;
      }
    } else {
      // Attaque ciblée
      const enemy = currentCombat.enemies.find(e => e.id === targetEnemyId && e.currentPv > 0);
      if (!enemy) return;

      enemy.currentPv = Math.max(0, enemy.currentPv - totalValue);
      
      if (spell.type === 'attack' && spell.name === "Flamme sacrée") {
        addToLog(`🔥 Flamme sacrée ! ${totalValue} dégâts à ${enemy.name} !`);
      } else {
        addToLog(`⚡ ${totalValue} dégâts à ${enemy.name} !`);
      }

      if (enemy.currentPv <= 0) {
        addToLog(`💀 ${enemy.name} est vaincu !`);
      }
      
      // Vérifier victoire
      const aliveEnemies = currentCombat.enemies.filter(e => e.currentPv > 0);
      if (aliveEnemies.length === 0) {
        endCombat(true);
        return;
      }
    }

    // Tour des ennemis
    enemiesTurn();
  };

  // Utiliser une capacité spéciale
  const useAbility = (ability, targetEnemyId = null) => {
    if (!character.abilities) return;
    
    const abilityIndex = character.abilities.findIndex(a => a.name === ability.name);
    if (abilityIndex === -1) return;
    
    const currentAbility = character.abilities[abilityIndex];
    
    // Vérifier cooldown
    if (currentAbility.currentCooldown > 0) {
      addToLog(`❌ ${ability.name} en recharge (${currentAbility.currentCooldown} tours)`);
      return;
    }
    
    // Vérifier uses
    if (currentAbility.uses !== undefined && currentAbility.currentUses <= 0) {
      addToLog(`❌ ${ability.name} déjà utilisé ce combat`);
      return;
    }
    
    addToLog(`💪 ${character.name} utilise ${ability.name} !`);
    
    // Appliquer l'effet selon la capacité
    if (ability.name === "Coup puissant") {
      // Attaque avec +50% dégâts
      const enemy = currentCombat.enemies.find(e => e.id === targetEnemyId && e.currentPv > 0);
      if (!enemy) return;
      
      const attackRoll = rollDice(20);
      const attackBonus = Math.floor((character.stats.force - 10) / 2);
      const totalAttack = attackRoll + attackBonus;
      
      if (totalAttack >= enemy.def || attackRoll === 20) {
        const baseDamage = rollDice(8) + attackBonus;
        const damage = Math.floor(baseDamage * 1.5);
        enemy.currentPv = Math.max(0, enemy.currentPv - damage);
        addToLog(`⚔️ COUP PUISSANT ! ${damage} dégâts à ${enemy.name} !`);
        
        if (enemy.currentPv <= 0) {
          addToLog(`💀 ${enemy.name} est vaincu !`);
        }
      } else {
        addToLog(`❌ Attaque manquée !`);
      }
      
      // Cooldown
      setCharacter(prev => ({
        ...prev,
        abilities: prev.abilities.map((a, i) => 
          i === abilityIndex ? { ...a, currentCooldown: a.cooldown } : a
        )
      }));
      
    } else if (ability.name === "Second souffle") {
      const heal = Math.floor(character.maxPv * 0.25);
      setCharacter(prev => ({
        ...prev,
        currentPv: Math.min(prev.maxPv, prev.currentPv + heal),
        abilities: prev.abilities.map((a, i) => 
          i === abilityIndex ? { ...a, currentUses: 0 } : a
        )
      }));
      addToLog(`💚 Second souffle ! +${heal} PV`);
      
    } else if (ability.name === "Posture défensive") {
      setCharacter(prev => ({
        ...prev,
        defensiveStance: true,
        abilities: prev.abilities.map((a, i) => 
          i === abilityIndex ? { ...a, currentCooldown: a.cooldown } : a
        )
      }));
      addToLog(`🛡️ Posture défensive activée ! -50% dégâts ce tour`);
      
    } else if (ability.name === "Attaque sournoise") {
      const enemy = currentCombat.enemies.find(e => e.id === targetEnemyId && e.currentPv > 0);
      if (!enemy) return;
      
      const attackRoll = rollDice(20);
      const attackBonus = Math.floor((character.stats.dex - 10) / 2);
      const totalAttack = attackRoll + attackBonus;
      
      if (totalAttack >= enemy.def || attackRoll === 20) {
        const baseDamage = rollDice(6) + attackBonus;
        const damage = baseDamage * 2;
        enemy.currentPv = Math.max(0, enemy.currentPv - damage);
        addToLog(`🗡️ ATTAQUE SOURNOISE ! ${damage} dégâts à ${enemy.name} !`);
        
        if (enemy.currentPv <= 0) {
          addToLog(`💀 ${enemy.name} est vaincu !`);
        }
      }
      
      setCharacter(prev => ({
        ...prev,
        abilities: prev.abilities.map((a, i) => 
          i === abilityIndex ? { ...a, currentUses: 0 } : a
        )
      }));
      
    } else if (ability.name === "Esquive acrobatique") {
      setCharacter(prev => ({
        ...prev,
        dodgeActive: true,
        abilities: prev.abilities.map((a, i) => 
          i === abilityIndex ? { ...a, currentCooldown: a.cooldown } : a
        )
      }));
      addToLog(`🤸 Esquive acrobatique ! Évite toutes les attaques ce tour`);
      
    } else if (ability.name === "Poison de lame") {
      const enemy = currentCombat.enemies.find(e => e.id === targetEnemyId && e.currentPv > 0);
      if (!enemy) return;
      
      enemy.poisoned = 3;
      enemy.poisonDamage = 3;
      addToLog(`☠️ ${enemy.name} est empoisonné ! 3 dégâts/tour pendant 3 tours`);
      
      setCharacter(prev => ({
        ...prev,
        abilities: prev.abilities.map((a, i) => 
          i === abilityIndex ? { ...a, currentCooldown: a.cooldown } : a
        )
      }));
    }
    
    // Vérifier victoire
    const aliveEnemies = currentCombat.enemies.filter(e => e.currentPv > 0);
    if (aliveEnemies.length === 0) {
      endCombat(true);
      return;
    }
    
    // Tour des ennemis
    enemiesTurn();
  };

  // Utiliser une potion
  const usePotion = () => {
    const potionIndex = inventory.findIndex(item => item.includes('Potion de soin'));
    if (potionIndex !== -1) {
      const heal = rollDice(8) + 4;
      setCharacter(prev => ({
        ...prev,
        currentPv: Math.min(prev.maxPv, prev.currentPv + heal)
      }));
      setInventory(prev => prev.filter((_, i) => i !== potionIndex));
      addToLog(`🧪 Vous buvez une potion et récupérez ${heal} PV`);
    }
  };

  // Rendu du menu principal
  const renderMenu = () => (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-serif text-amber-500 mb-4 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            L'Ombre de la Spirale
          </h1>
          <p className="text-xl text-stone-400 italic">Un RPG narratif gothique</p>
        </div>

        <div className="bg-stone-900 border-2 border-amber-900/50 rounded-lg p-8 shadow-2xl">
          <div className="space-y-4">
            <button
              onClick={() => setGameState('character_creation')}
              className="w-full bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700 text-amber-100 font-serif text-xl py-4 px-6 rounded transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-amber-900/50"
            >
              <Sword size={24} />
              Nouvelle Partie
            </button>

            <button
              className="w-full bg-stone-800 hover:bg-stone-700 text-stone-300 font-serif text-xl py-4 px-6 rounded transition-all duration-300 flex items-center justify-center gap-3 opacity-50 cursor-not-allowed"
              disabled
            >
              <Save size={24} />
              Charger (Bientôt disponible)
            </button>

            <button
              onClick={() => window.location.href = '/'}
              className="w-full bg-stone-800 hover:bg-stone-700 text-stone-300 font-serif text-xl py-4 px-6 rounded transition-all duration-300 flex items-center justify-center gap-3"
            >
              <BookOpen size={24} />
              Retour au Wiki
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-stone-500 text-sm">
          <p>Basé sur la campagne "Ombre de la Spirale"</p>
          <p className="mt-2">⚠️ Version Alpha - Scénario 1 uniquement</p>
        </div>
      </div>
    </div>
  );

  // Rendu de la création de personnage
  const renderCharacterCreation = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 p-4">
        <div className="max-w-6xl mx-auto py-8">
          <h2 className="text-4xl font-serif text-amber-500 text-center mb-8">
            Création de Personnage
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {Object.entries(CHARACTER_CLASSES).map(([key, classData]) => {
              const Icon = classData.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedClass(key)}
                  className={`bg-stone-900 border-2 p-6 rounded-lg transition-all duration-300 ${
                    selectedClass === key
                      ? 'border-amber-500 shadow-lg shadow-amber-900/50'
                      : 'border-stone-800 hover:border-stone-700'
                  }`}
                >
                  <Icon size={48} className={`mx-auto mb-4 ${
                    selectedClass === key ? 'text-amber-500' : 'text-stone-500'
                  }`} />
                  <h3 className="text-xl font-serif text-amber-400 mb-2">{classData.name}</h3>
                  <div className="text-sm text-stone-400 space-y-1">
                    <p>PV: {classData.stats.pv}</p>
                    <p>FOR: {classData.stats.force} | DEX: {classData.stats.dex}</p>
                    <p>INT: {classData.stats.int} | SAG: {classData.stats.sag}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {selectedClass && (
            <div className="bg-stone-900 border-2 border-amber-900/50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-serif text-amber-400 mb-4">
                {CHARACTER_CLASSES[selectedClass].name}
              </h3>
              
              <div className="mb-6">
                <h4 className="text-lg text-stone-300 mb-2">Compétences:</h4>
                <ul className="list-disc list-inside text-stone-400">
                  {CHARACTER_CLASSES[selectedClass].skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg text-stone-300 mb-2">Équipement de départ:</h4>
                <ul className="list-disc list-inside text-stone-400">
                  {CHARACTER_CLASSES[selectedClass].equipment.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <label className="block text-stone-300 mb-2">Nom du personnage:</label>
                <input
                  type="text"
                  value={characterName}
                  onChange={(e) => setCharacterName(e.target.value)}
                  placeholder="Entrez un nom..."
                  className="w-full bg-stone-800 border border-stone-700 text-stone-200 px-4 py-2 rounded focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          )}

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setGameState('menu')}
              className="bg-stone-800 hover:bg-stone-700 text-stone-300 font-serif text-lg py-3 px-8 rounded transition-all duration-300"
            >
              Retour
            </button>
            <button
              onClick={() => {
                if (selectedClass && characterName.trim()) {
                  createCharacter(selectedClass, characterName.trim());
                }
              }}
              disabled={!selectedClass || !characterName.trim()}
              className="bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700 text-amber-100 font-serif text-lg py-3 px-8 rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Check size={20} />
              Commencer l'Aventure
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Rendu du jeu principal
  const renderGame = () => {
    const scene = GAME_SCENES[currentScene];
    
    if (!scene) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-400 text-xl">Erreur : Scène "{currentScene}" introuvable</p>
            <button
              onClick={() => setCurrentScene('intro')}
              className="mt-4 bg-amber-900 hover:bg-amber-800 text-amber-100 px-6 py-2 rounded"
            >
              Retour au début
            </button>
          </div>
        </div>
      );
    }

    // Pour les scènes de game over, afficher sans header
    const isGameOver = currentScene.includes('game_over') || currentScene.includes('scene_1_alt');
    
    if (isGameOver || !character) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            <div className="bg-stone-900 border-2 border-red-900 rounded-lg p-8 shadow-2xl">
              <h2 className="text-4xl font-serif text-red-500 mb-6 text-center">{scene.title}</h2>
              <div className="text-stone-300 leading-relaxed whitespace-pre-line mb-8 text-center">
                {scene.text}
              </div>
              {scene.choices && (
                <div className="space-y-3">
                  {scene.choices.map((choice, index) => (
                    <button
                      key={index}
                      onClick={() => handleChoice(choice)}
                      className="w-full bg-stone-800 hover:bg-amber-900/30 border border-stone-700 hover:border-amber-800 text-stone-200 p-4 rounded transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>{choice.text}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950">
        {/* Header */}
        <div className="bg-stone-900 border-b border-stone-800 p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <h3 className="text-xl font-serif text-amber-400">{character.name}</h3>
                <p className="text-sm text-stone-500">
                  {CHARACTER_CLASSES[character.class].name} - Niveau {character.level}
                </p>
              </div>
              
              <div className="flex items-center gap-2 bg-red-950/30 border border-red-900 px-4 py-2 rounded">
                <Heart size={20} className="text-red-500" />
                <span className="text-red-400 font-bold">
                  {character.currentPv} / {character.maxPv}
                </span>
              </div>

              {character.spells && (
                <div className="flex items-center gap-2 bg-blue-950/30 border border-blue-900 px-4 py-2 rounded">
                  <Zap size={20} className="text-blue-500" />
                  <span className="text-blue-400 font-bold">
                    {character.currentMana} / {character.maxMana}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 bg-amber-950/30 border border-amber-900 px-4 py-2 rounded">
                <span className="text-amber-500">💰</span>
                <span className="text-amber-400 font-bold">{character.gold} PO</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowCharacterSheet(!showCharacterSheet)}
                className="bg-stone-800 hover:bg-stone-700 text-stone-300 p-2 rounded transition-all"
                title="Fiche de personnage"
              >
                <User size={20} />
              </button>
              <button
                onClick={usePotion}
                disabled={!inventory.some(item => item.includes('Potion de soin'))}
                className="bg-stone-800 hover:bg-stone-700 text-stone-300 p-2 rounded transition-all disabled:opacity-30"
                title="Utiliser une potion"
              >
                🧪
              </button>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="max-w-7xl mx-auto p-4 grid lg:grid-cols-3 gap-4">
          {/* Colonne principale - Scène */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-stone-900 border border-stone-800 rounded-lg p-6 shadow-xl">
              <h2 className="text-3xl font-serif text-amber-500 mb-4">{scene.title}</h2>
              <div className="text-stone-300 leading-relaxed whitespace-pre-line mb-6">
                {scene.text}
              </div>

              {scene.choices && (
                <div className="space-y-3">
                  <div className="border-t border-stone-800 pt-4">
                    <p className="text-stone-500 text-sm mb-3">Que faites-vous ?</p>
                  </div>
                  {scene.choices.map((choice, index) => (
                    <button
                      key={index}
                      onClick={() => handleChoice(choice)}
                      className="w-full bg-stone-800 hover:bg-amber-900/30 border border-stone-700 hover:border-amber-800 text-stone-200 text-left p-4 rounded transition-all duration-300 flex items-center justify-between group"
                    >
                      <span>{choice.text}</span>
                      <ChevronRight size={20} className="text-stone-600 group-hover:text-amber-500 transition-colors" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Colonne latérale - Journal */}
          <div className="space-y-4">
            <div className="bg-stone-900 border border-stone-800 rounded-lg p-4 shadow-xl">
              <h3 className="text-xl font-serif text-amber-400 mb-3 flex items-center gap-2">
                <Scroll size={20} />
                Journal
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {gameLog.slice(-15).reverse().map((log, index) => (
                  <div key={`log-${log.timestamp}-${index}`} className="text-sm text-stone-400 border-b border-stone-800 pb-2">
                    {log.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-stone-900 border border-stone-800 rounded-lg p-4 shadow-xl">
              <h3 className="text-xl font-serif text-amber-400 mb-3 flex items-center gap-2">
                <Backpack size={20} />
                Inventaire
              </h3>
              <div className="space-y-1">
                {inventory.length === 0 ? (
                  <p className="text-stone-500 text-sm italic">Vide</p>
                ) : (
                  inventory.map((item, index) => (
                    <div key={index} className="text-sm text-stone-300 bg-stone-800 p-2 rounded">
                      {item}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Rendu du combat
  const renderCombat = () => {
    if (!currentCombat) return null;

    const aliveEnemies = currentCombat.enemies.filter(e => e.currentPv > 0);

    return (
      <div className="min-h-screen bg-gradient-to-b from-red-950 via-stone-900 to-stone-950">
        {/* Header combat */}
        <div className="bg-stone-900 border-b-2 border-red-900 p-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif text-red-500 text-center flex items-center justify-center gap-3">
              <Sword size={32} className="animate-pulse" />
              COMBAT
              <Skull size={32} className="animate-pulse" />
            </h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-4 grid lg:grid-cols-3 gap-4">
          {/* Zone de combat */}
          <div className="lg:col-span-2 space-y-4">
            {/* Joueur */}
            <div className="bg-stone-900 border-2 border-green-900 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-serif text-green-400">{character.name}</h3>
                  <p className="text-stone-500">{CHARACTER_CLASSES[character.class].name}</p>
                </div>
                <div className="text-right space-y-2">
                  <div className="flex items-center gap-2">
                    <Heart size={24} className="text-red-500" />
                    <span className="text-2xl font-bold text-red-400">
                      {character.currentPv} / {character.maxPv}
                    </span>
                  </div>
                  <div className="w-48 bg-stone-800 rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-red-600 to-red-500 h-full transition-all duration-500"
                      style={{ width: `${(character.currentPv / character.maxPv) * 100}%` }}
                    />
                  </div>
                  {character.spells && (
                    <>
                      <div className="flex items-center gap-2">
                        <Zap size={20} className="text-blue-500" />
                        <span className="text-xl font-bold text-blue-400">
                          {character.currentMana} / {character.maxMana}
                        </span>
                      </div>
                      <div className="w-48 bg-stone-800 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-600 to-blue-500 h-full transition-all duration-500"
                          style={{ width: `${(character.currentMana / character.maxMana) * 100}%` }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Sorts du mage/clerc */}
              {character.spells && (
                <div className="border-t border-stone-700 pt-4">
                  <h4 className="text-sm font-serif text-blue-400 mb-2">
                    ✨ Sorts disponibles
                    {selectedSpell && <span className="text-yellow-400 ml-2">→ Cliquez sur un ennemi</span>}
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {character.spells.map((spell, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          // Sorts sans ciblage (zone, soin, buff)
                          if (spell.name === "Boule de feu" || spell.type === "heal" || spell.type === "buff") {
                            castSpell(spell);
                            setSelectedSpell(null);
                          } else {
                            // Sorts ciblés : active le mode ciblage
                            setSelectedSpell(spell);
                          }
                        }}
                        disabled={character.currentMana < spell.cost}
                        className={`p-2 rounded text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
                          selectedSpell?.name === spell.name
                            ? 'bg-yellow-600 border-2 border-yellow-400 text-yellow-100 animate-pulse'
                            : 'bg-blue-900/30 hover:bg-blue-800/50 border border-blue-800 text-blue-300'
                        }`}
                        title={spell.description}
                      >
                        <div className="font-bold">{spell.name}</div>
                        <div className="text-xs">{spell.damage}</div>
                        <div className="text-xs text-blue-500">Mana: {spell.cost}</div>
                      </button>
                    ))}
                  </div>
                  {selectedSpell && (
                    <button
                      onClick={() => setSelectedSpell(null)}
                      className="mt-2 w-full bg-red-900/30 hover:bg-red-800/50 border border-red-800 text-red-300 p-2 rounded text-sm"
                    >
                      ❌ Annuler
                    </button>
                  )}
                </div>
              )}
              
              {/* Capacités du guerrier/roublard */}
              {character.abilities && (
                <div className="border-t border-stone-700 pt-4 mt-4">
                  <h4 className="text-sm font-serif text-orange-400 mb-2">
                    💪 Capacités spéciales
                    {selectedSpell && <span className="text-yellow-400 ml-2">→ Cliquez sur un ennemi</span>}
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {character.abilities.map((ability, index) => {
                      const isOnCooldown = ability.currentCooldown > 0;
                      const noUses = ability.uses !== undefined && ability.currentUses <= 0;
                      const isDisabled = isOnCooldown || noUses;
                      const needsTarget = ability.name === "Coup puissant" || ability.name === "Attaque sournoise" || ability.name === "Poison de lame";
                      
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            if (needsTarget) {
                              // Capacités ciblées : active le mode ciblage
                              setSelectedSpell(ability);
                            } else {
                              // Capacités sans ciblage : lance immédiatement
                              useAbility(ability);
                              setSelectedSpell(null);
                            }
                          }}
                          disabled={isDisabled}
                          className={`p-2 rounded text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
                            selectedSpell?.name === ability.name
                              ? 'bg-yellow-600 border-2 border-yellow-400 text-yellow-100 animate-pulse'
                              : 'bg-orange-900/30 hover:bg-orange-800/50 border border-orange-800 text-orange-300'
                          }`}
                          title={ability.description}
                        >
                          <div className="font-bold">{ability.name}</div>
                          <div className="text-xs">{ability.description}</div>
                          {isOnCooldown && (
                            <div className="text-xs text-red-400">CD: {ability.currentCooldown}</div>
                          )}
                          {noUses && (
                            <div className="text-xs text-red-400">Utilisé</div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {selectedSpell && character.abilities.some(a => a.name === selectedSpell.name) && (
                    <button
                      onClick={() => setSelectedSpell(null)}
                      className="mt-2 w-full bg-red-900/30 hover:bg-red-800/50 border border-red-800 text-red-300 p-2 rounded text-sm"
                    >
                      ❌ Annuler
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Ennemis */}
            <div className="space-y-3">
              <h3 className="text-xl font-serif text-red-400 flex items-center gap-2">
                <Skull size={20} />
                Ennemis ({aliveEnemies.length})
              </h3>
              {currentCombat.enemies.map(enemy => (
                <div 
                  key={enemy.id}
                  className={`bg-stone-900 border-2 rounded-lg p-4 transition-all ${
                    enemy.currentPv > 0 
                      ? selectedSpell
                        ? 'border-yellow-600 hover:border-yellow-400 cursor-crosshair animate-pulse'
                        : 'border-red-900 hover:border-red-700 cursor-pointer'
                      : 'border-stone-800 opacity-50'
                  }`}
                  onClick={() => {
                    if (enemy.currentPv <= 0) return;
                    
                    if (selectedSpell) {
                      // Vérifier si c'est un sort ou une capacité
                      if (character.spells && character.spells.some(s => s.name === selectedSpell.name)) {
                        // C'est un sort
                        castSpell(selectedSpell, enemy.id);
                      } else if (character.abilities && character.abilities.some(a => a.name === selectedSpell.name)) {
                        // C'est une capacité
                        useAbility(selectedSpell, enemy.id);
                      }
                      setSelectedSpell(null);
                    } else {
                      // Attaque normale
                      playerAttack(enemy.id);
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-serif text-red-400">{enemy.name}</h4>
                      <p className="text-sm text-stone-500">DEF {enemy.def} | ATK +{enemy.atk}</p>
                    </div>
                    <div className="text-right">
                      {enemy.currentPv > 0 ? (
                        <>
                          <div className="flex items-center gap-2 mb-1">
                            <Heart size={20} className="text-red-500" />
                            <span className="text-xl font-bold text-red-400">
                              {enemy.currentPv} / {enemy.pv}
                            </span>
                          </div>
                          <div className="w-32 bg-stone-800 rounded-full h-3 overflow-hidden">
                            <div 
                              className="bg-red-600 h-full transition-all duration-500"
                              style={{ width: `${(enemy.currentPv / enemy.pv) * 100}%` }}
                            />
                          </div>
                        </>
                      ) : (
                        <span className="text-stone-600 text-xl">💀 VAINCU</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Journal de combat */}
          <div className="bg-stone-900 border border-stone-800 rounded-lg p-4">
            <h3 className="text-xl font-serif text-amber-400 mb-3 flex items-center gap-2">
              <Scroll size={20} />
              Journal de Combat
            </h3>
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {gameLog.slice(-20).reverse().map((log, index) => (
                <div key={`combat-log-${log.timestamp}-${index}`} className="text-sm text-stone-400 border-b border-stone-800 pb-2">
                  {log.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Rendu principal
  return (
    <>
      {gameState === 'menu' && renderMenu()}
      {gameState === 'character_creation' && renderCharacterCreation()}
      {gameState === 'playing' && renderGame()}
      {gameState === 'combat' && renderCombat()}
    </>
  );
};

export default Game;
