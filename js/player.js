var xSpaceShoot = xSpaceShoot || {};

xSpaceShoot.Player = function(game, key, weap) {
	Phaser.Sprite.call(this. game, 0, 0, key);
	this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
	this.anchor.set(0.5, 0.5);
	this.weapon = weap;
};

xSpaceShoot.Player.prototype = Object.create(Phaser.Sprite.prototype);
xSpaceShoot.Player.prototype.constructor = xSpaceShoot.Player;

xSpaceShoot.Player.prototype.setWeapon = function(weap) {
	this.weapon = weap;
};

xSpaceShoot.Player.prototype.fire = function() {
	this.weapon.fire(); 	//look up parameters needed
};
