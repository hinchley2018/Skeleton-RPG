import Player from '../entities/Player.js';
import Enemy from '../entities/Enemy.js';
export default class ExploreScene extends Phaser.Scene {
    constructor() {
        super({ key: 'ExploreScene' });
    }

    preload() {
        // Load assets
        this.load.image('player', 'assets/player.png');
        this.load.image('enemy', 'assets/enemy.png');
        this.load.image('map', 'assets/map.png');
    }

    create() {
        // Create explore scene
        this.add.image(400, 300, 'map');
        // Add player and enemies
        this.cursors = this.input.keyboard.createCursorKeys();

        // player
        this.player = new Player(this, 400, 300);

        // enemies
        this.enemies = [];
        for(let i=0;i<3;i++){
            const x = Phaser.Math.Between(50,750);
            const y = Phaser.Math.Between(50,550);
            this.enemies.push(new Enemy(this,x,y));
        }

        // collision check
        this.physics.add.overlap(
            this.player.sprite,
            this.enemies.map(e => e.sprite),
            (playerSprite, enemySprite) => {
                const enemy = this.enemies.find(e => e.sprite === enemySprite);
                this.scene.start('Battle', { player: this.player, enemy: enemy, exploreScene: this });
            }
        );
    }

    update() {
        this.player.update(this.cursors);
        this.enemies.forEach(e => e.update());
    }
}