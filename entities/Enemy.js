export default class Enemy {
    constructor(scene, x, y, baseDamage=3, health=20, inventory=['gold']) {
        this.scene = scene;
        this.sprite = null
        this.baseDamage = baseDamage;
        this.health = health;
        this.inventory = inventory;
    }
    create(){
        this.sprite = scene.physics.add.sprite(x, y, 'enemy');
    }

    update() {
        // Placeholder for AI/movement later
    }

    getBounds() {
        return this.sprite.getBounds();
    }
}