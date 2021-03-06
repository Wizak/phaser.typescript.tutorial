/// <reference path="../lib/typings/phaser.d.ts"/>

module spriteClass {

  export class Game extends Phaser.Game {

    /**
     * Phaser.Game Constructor
     * @param  {number|string}      width               [<optional>; default: 800; width of game in pixels]
     * @param  {number|string}      height              [<optional>; default: 600; width of game in pixels]
     * @param  {number}             renderer            [<optional>; default: Phaser.AUTO]
     * @param  {string|HTMLElement} parent              [<optional>]
     * @param  {object}             state               [<optional>; default: null]
     * @param  {boolean}            transparent         [<optional>; default: false]
     * @param  {boolean}            antialias           [<optional>; default: true]
     * @param  {object}             physicsConfig       [<optional>; default: null]
     */
  	constructor(width: number | string, height: number | string, transparent: boolean, antialias: boolean) {
  		super(width,
        height,
        Phaser.AUTO,
        'spriteClass',
        null,
        transparent,
        antialias);

      /*
       * Phaser.StateManager.add -> Create GameState State
       */
      this.state.add('GameState', GameState, false);

      /*
       * Load up the GameState State
       */
      this.state.start('GameState');
    }
  }
}

// when the page has finished loading, create our game
window.onload = () => {
  var game = new spriteClass.Game(800, 600, false, false);
}
