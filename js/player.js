var xSpaceShoot = xSpaceShoot || {};

xSpaceShoot.Player = function(game, key) {
	Phaser.Sprite.call(this, game, 128, 256, key);
	this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
	this.anchor.set(0.5, 0.5);
};

xSpaceShoot.Player.prototype = Object.create(Phaser.Sprite.prototype);
xSpaceShoot.Player.prototype.constructor = xSpaceShoot.Player;

xSpaceShoot.Player.prototype.setWeapon = function(weap) {
	this.weapon = weap;
};

xSpaceShoot.Player.prototype.fire = function() {
	this.weapon.fire(this);
};

xSpaceShoot.Player.prototype.moveDown = function() {
	this.position.y += 5;
};

xSpaceShoot.Player.prototype.moveUp = function() {
	this.position.y -= 5;
};

xSpaceShoot.Player.prototype.moveRight = function() {
	this.position.x += 5;
};

xSpaceShoot.Player.prototype.moveLeft = function() {
	this.position.x -= 5;
};
