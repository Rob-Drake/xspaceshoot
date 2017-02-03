var xSpaceShoot = xSpaceShoot || {};

xSpaceShoot.Game = function() {};

xSpaceShoot.Game.prototype = {
	preload: function() {
		this.game.time.advancedTiming = true;
		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
		this.weapons = [];
		this.weapons.push(new xSpaceShoot.Weapon.SingleBullet(this.game));
		this.weapons.push(new xSpaceShoot.Weapon.ThreeWay(this.game));
		this.weapons.push(new xSpaceShoot.Weapon.EightWay(this.game));
		this.player = new xSpaceShoot.Player(this.game, 'ship');
		this.player.setWeapon(this.weapons[0]);
	},
	create: function() {
		this.game.add.existing(this.player);
	},
	update: function() {
		if(this.cursors.up.isDown) {
			this.player.moveUp();
		}
		if(this.cursors.right.isDown) {
			this.player.moveRight();
		}
		if(this.cursors.down.isDown) {
			this.player.moveDown();
		}
		if(this.cursors.left.isDown) {
			this.player.moveLeft();
		}
		if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			this.player.fire();
		}
	}
};
