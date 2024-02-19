

import GameLoop from './gameLoop.js'
function main(output) {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 640;

  function Camera(x,y,scene) {
    this.x = x;
    this.y = y;
    this.w = 640;
    this.h = 640;
    this.scene = scene;
  }
  function Game() {
    this.camera = new Camera(0, 0, this);
  }

  function Controls() {
    this.codes  = {
      37: 'left',
      39: 'right',
      38: 'forward',
      40: 'backward',
      32: 'fire'
    };
    this.states = {
      'left': false,
      'right': false,
      'forward': false,
      'backward': false,
      'fire' : false
    };
    document.addEventListener('keydown', this.onKey.bind(this, true), false);
    document.addEventListener('keyup', this.onKey.bind(this, false), false);
  }


  Controls.prototype.onKey = function(val, e) {
    const state = this.codes[e.keyCode];
    if (typeof state === 'undefined') return;
    this.states[state] = val;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
  };



  var controls = new Controls();
  let scenes = {}
  scenes['win'] = new Game(screen, controls);
  let current_scene = 'sceneName';
  const loop = new GameLoop();
  loop.start(function frame(time) {
    current_scene = scenes[current_scene].render(time);
  });
  output.appendChild(canvas)
}












export default main;
