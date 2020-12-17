import { Game } from './objects/game';

const game = new Game();
const { canvas, bgCanvas } = game.getCanvas();
document.body.prepend(bgCanvas, canvas);
game.start();
