export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
        // Load assets here
        this.load.image('player', 'assets/player.png');
        this.load.image('enemy', 'assets/enemy.png');
        this.load.image('map', 'assets/map.png');
    }

    create() {
        // Create menu elements
        this.add.text(400, 300, 'Skeleton RPG', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        this.add.text(400, 350, 'Press SPACE to start', { fontSize: '16px', fill: '#fff' }).setOrigin(0.5);

        this.input.keyboard.on('keydown-SPACE', () => {
            this.scene.start('ExploreScene');
        });
    }
}