export default class BattleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BattleScene' });
    }

    preload() {
        // Load assets
        this.load.image('player', 'assets/player.png');
        this.load.image('enemy', 'assets/enemy.png');
    }

    create() {
        // Create battle scene
        this.add.text(400, 200, 'Battle!', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        // Add player and enemy sprites
    }
}