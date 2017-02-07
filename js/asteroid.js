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

	this.game.physics.arcade.velocityFromAngle( angle, speed, this, body.velocity);

	this.angle = angle;

	this.body.gravity.set(gx, gy);
};

xSpaceShoot.AsteroidLaunch = {};

xSpaceShoot.AsteroidLaunch.Spawn = function(game) {
	Phaser.Group.call(this, game, game.world, 'Spawn', false, true, Phaser.Physics.ARCADE);
	this.speed = 500;

	for(var i=0; i<20; i++) {
		this.add(new xSpaceShoot.Asteroid(game, 'asteroid'), true);
	}
	return this;
};
xSpaceShoot.AsteroidLaunch.Spawn.prototype = Object.create(Phaser.Group.prototype);
xSpaceShoot.AsteroidLaunch.Spawn.prototype.constructor =
	xSpaceShoot.AsteroidLaunch.Spawn;
xSpaceShoot.AsteroidLaunch.Spawn.spawn = function() {
	if( this.game.time.time < this.nextSpawn) {
		return;
	}
	this.getFirstExists(false).spawn(x, y, 0, this.speed, 0, 0);
	this.nextSpawn = this.game.time.time + this.spawnRate;
};
