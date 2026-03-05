import MenuScene from './scenes/MenuScene.js';
import ExploreScene from './scenes/ExploreScene.js';
import BattleScene from './scenes/BattleScene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: [MenuScene, ExploreScene, BattleScene]
};

const game = new Phaser.Game(config);