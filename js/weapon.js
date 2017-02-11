var xSpaceShoot = xSpaceShoot || {};

xSpaceShoot.Bullet = function(game, key) {
    Phaser.Sprite.call(this, game, 0, 0, key);
    this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;

    this.anchor.set(0.5);

    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
    this.exists = false;

    this.tracking = false;
    this.scaleSpeed = 0;
};

xSpaceShoot.Bullet.prototype = Object.create(Phaser.Sprite.prototype);
xSpaceShoot.Bullet.prototype.constructor = xSpaceShoot.Bullet;

xSpaceShoot.Bullet.prototype.fire = function( x, y, angle, speed, gx, gy) {
    gx = gx || 0;
    gy = gy || 0;

    this.reset(x, y);
    this.scale.set(1);

    this.game.physics.arcade.velocityFromAngle( angle, speed, this.body.velocity);

    this.angle = angle;

    this.body.gravity.set(gx, gy);

};

xSpaceShoot.Weapon = {};

//Single bullet weapon
xSpaceShoot.Weapon.SingleBullet = function(game) {
	Phaser.Group.call(this, game, game.world, 'Single Bullet', false, true, Phaser.Physics.ARCADE);

	this.nextFire = 0;
	this.bulletSpeed = 600;
	this.fireRate = 100;

	for( var i=0; i<64; i++) {
		this.add(new xSpaceShoot.Bullet(game, "bullet"), true);
	}

	return this;
};

xSpaceShoot.Weapon.SingleBullet.prototype =	Object.create(Phaser.Group.prototype);
xSpaceShoot.Weapon.SingleBullet.prototype.constructor =
	xSpaceShoot.Weapon.SingleBullet;

xSpaceShoot.Weapon.SingleBullet.prototype.fire = function(source) {

	if(this.game.time.time < this.nextFire) {
		return;
	}
	var x = source.x + 10;
	var y = source.y + 10;
	var shot = this.getFirstExists(false)
	shot.scale = source.scale.x;
	shot.fire(x, y, 0, this.bulletSpeed, 0, 0);
	this.nextFire = this.game.time.time + this.fireRate;
};

// 3-way shot up, forward, down
xSpaceShoot.Weapon.ThreeWay = function(game) {
	Phaser.Group.call(this, game, game.world, 'Three Way', false, true, Phaser.Physics.ARCADE);

	this.nextFire = 0;
	this.bulletSpeed = 600;
	this.fireRate = 100;

	for(var i = 0; i < 96; i++) {
		this.add(new xSpaceShoot.Bullet(game, 'bullet'), true);
	}

	return this;
};

xSpaceShoot.Weapon.ThreeWay.prototype = Object.create(Phaser.Group.prototype);
xSpaceShoot.Weapon.ThreeWay.prototype.constructor = xSpaceShoot.Weapon.ThreeWay;
xSpaceShoot.Weapon.ThreeWay.prototype.fire = function(source) {

	if(this.game.time.time < this.nextFire) {
		return;
	}

	var x = source.x + 10;
	var y = source.y + 10;
	this.getFirstExists(false).fire(x, y, 315, this.bulletSpeed, 0, 0);
	this.getFirstExists(false).fire(x, y, 0, this.bulletSpeed, 0, 0);
	this.getFirstExists(false).fire(x, y, 45, this.bulletSpeed, 0, 0);

	this.nextFire = this.game.time.time + this.fireRate;
};

xSpaceShoot.Weapon.EightWay = function(game) {
	Phaser.Group.call(this, game, game.world, 'Eight Way', false, true, Phaser.Physics.ARCADE);

	this.nextFire = 0;
	this.bulletSpeed = 600;
	this.fireRate = 100;

	for(var i = 0; i<256; i++) {
		this.add(new xSpaceShoot.Bullet(game, 'bullet'), true);
	}
	return this;
};
xSpaceShoot.Weapon.EightWay.prototype = Object.create(Phaser.Group.prototype);
xSpaceShoot.Weapon.EightWay.prototype.constructor = xSpaceShoot.Weapon.EightWay;

xSpaceShoot.Weapon.EightWay.prototype.fire = function(source) {
	if(this.game.time.time < this.nextFire) {
		return;
	}

	var x = source.x + 16;
	var y = source.y + 10;

	this.getFirstExists(false).fire(x, y, 0, this.bulletSpeed, 0, 0);
	this.getFirstExists(false).fire(x, y, 45, this.bulletSpeed, 0, 0);
	this.getFirstExists(false).fire(x, y, 90, this.bulletSpeed, 0, 0);
	this.getFirstExists(false).fire(x, y, 135, this.bulletSpeed, 0, 0);
	this.getFirstExists(false).fire(x, y, 180, this.bulletSpeed, 0, 0);
	this.getFirstExists(false).fire(x, y, 225, this.bulletSpeed, 0, 0);
	this.getFirstExists(false).fire(x, y, 270, this.bulletSpeed, 0, 0);
	this.getFirstExists(false).fire(x, y, 315, this.bulletSpeed, 0, 0);
};
