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
	},
	create: function() {
		this.player = this.game.add.sprite(128, 256, 'ship');
		this.player.anchor.setTo(0.5, 0.5);
		this.player.checkWorldBounds = true;
	},
	update: function() {
		if(this.cursors.up.isDown) {
			this.player.y -= 1;
		}
		if(this.cursors.right.isDown) {
			this.player.x += 1;
		}
		if(this.cursors.down.isDown) {
			this.player.y += 1;
		}
		if(this.cursors.left.isDown) {
			this.player.x -= 1;
		}
		if(this.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
			this.weapons[1].fire(this.player);
		}
	}
};
