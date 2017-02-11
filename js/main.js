/*
 * Change this file to be compatible with test
 */

var xSpaceShoot = xSpaceShoot || {};
xSpaceShoot.game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');
xSpaceShoot.game.state.add('Boot', xSpaceShoot.Boot);
xSpaceShoot.game.state.add('Preload', xSpaceShoot.Preload);
xSpaceShoot.game.state.add('Game', xSpaceShoot.Game);
xSpaceShoot.game.state.add('gameOver', xSpaceShoot.gameOver);
xSpaceShoot.game.state.start('Boot');
