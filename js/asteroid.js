var xSpaceShoot = xSpaceShoot || {};

xSpaceShoot.Asteroid = function(game, key) {
	Phaser.Sprite.call(this, game, 0, 0, key);
	this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
	this.anchor.set(0.5, 0.5);

	this.checkWorldBounds = true;
	this.outOfBoundsKill = true;
	this.exists = false;

	this.tracking = false;
	this.scaleSpeed = 0;
};

xSpaceShoot.Asteroid.prototype = Object.create(Phaser.Sprite.prototype);
xSpaceShoot.Asteroid.prototype.constructor = xSpaceShoot.Asteroid;
xSpaceShoot.Asteroid.prototype.spawn = function(x, y, angle, speed, gx, xy) {
	gx = gx || 0;
	gy = gy || 0;

	this.reset(x, y);

	this.scale.set(1);

	this.game.physics.arcade.velocityFromAngle( x. y, angle, speed, gx, gy);

	this.angle = angle;

	this.body.gravity.set(gx, gy);
};

xSpaceShoot.Asteroid.prototype.setPosition = function( x, y) {
	this.x = x;
	this.y = y;
}

