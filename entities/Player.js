export default class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.sprite = null
        this.speed = 200;
        this.health = 40;
        this.baseDamage = 5;
        this.inventory = [];
    }
    create(){
        this.sprite = scene.physics.add.sprite(x, y, 'player');
    }

    update(cursors) {
        this.sprite.setVelocity(0);

        if (cursors.left.isDown) this.sprite.setVelocityX(-this.speed);
        if (cursors.right.isDown) this.sprite.setVelocityX(this.speed);
        if (cursors.up.isDown) this.sprite.setVelocityY(-this.speed);
        if (cursors.down.isDown) this.sprite.setVelocityY(this.speed);
    }

    getBounds() {
        return this.sprite.getBounds();
    }
}