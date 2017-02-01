var xSpaceShoot = xSpaceShoot || {};
xSpaceShoot.Preload = function(){};

xSpaceShoot.Preload.prototype = {
	preload: function() {
		//this.preloadBar=this.add.sprite(this.game.world.centerX, this.game.world.centerY,'preloadbar');
		//this.preloadBar.anchor.setTo(0.5);//this.preloadBar.scale.setTo(3)
		//this.load.setPreloadSprite(this.preloadBar);
		//load game assets
		this.load.image('ship', 'assets/image/ship.png');
		this.load.image('bullet', 'assets/image/bullet.png');
	},
	create: function() {
		this.state.start('Game');
	}
};
