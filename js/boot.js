var xSpaceShoot = xSpaceShoot || {};

xSpaceShoot.Boot = function(){};

xSpaceShoot.Boot.prototype = {
	preload: function() {
		//this.load.image('preloadbar', 'assets/image/preloader-bar.png');
	},
	create: function() {
		this.game.stage.backgroundColor = '#000';
		//scaling options
		//this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		//game centered on screen
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.state.start('Preload');
	}
};
