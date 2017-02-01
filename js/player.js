var xSpaceShoot = xSpaceShoot || {};

xSpaceShoot.Player = function(game, key) {
	Phaser.Sprite.call(this. game, 0, 0, key);
	this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
	this.anchor.set(0.5, 0.5);
};

xSpaceShoot.Player.prototype = Object.create(Phaser.Sprite.prototype);
xSpaceShoot.Player.prototype.constructor = xSpaceShoot.Player;

