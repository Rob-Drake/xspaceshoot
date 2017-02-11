var xSpaceShoot = xSpaceShoot || {};
xSpaceShoot.Preload = function(){};

xSpaceShoot.Preload.prototype = {
	preload: function() {
		//load game assets
		this.load.image('ship', 'image/ship.png');
		this.load.image('bullet', 'image/bullet.png');
		this.load.image('asteroid', 'image/asteroid.png');
		this.load.image('star', 'image/star.png');
	},
	create: function() {
		this.state.start('Game');
	}
};
