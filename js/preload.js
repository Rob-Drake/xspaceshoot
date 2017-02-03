var xSpaceShoot = xSpaceShoot || {};
xSpaceShoot.Preload = function(){};

xSpaceShoot.Preload.prototype = {
	preload: function() {
		//load game assets
		this.load.image('ship', 'image/ship.png');
		this.load.image('bullet', 'image/bullet.png');
	},
	create: function() {
		this.state.start('Game');
	}
};
