import {State} from '../states/rootState';
import {RenderingEngine} from '../engines/renderingEngine';
import {PhysicsEngine} from '../engines/physicsEngine';
import {RenderingUtilities} from '../utilites/renderingUtilities';
import {Ninja} from './ninja';
import {UpdateObject} from '../interfaces/updateObject';
import '../styles.css';


export class Game {

  assets: UpdateObject[];
  renderingEngine: RenderingEngine;
  physicsEngine: PhysicsEngine;

  constructor() {
    this.assets = [new Ninja()];
    this.renderingEngine = new RenderingEngine();
    this.physicsEngine = new PhysicsEngine(this.assets);
    RenderingUtilities.setDimensions({ w: 22, h: 10 });
  }

  getCanvas(): { [key: string]: HTMLCanvasElement } {
    return { canvas: State.gameState.canvas.canvasElement, bgCanvas: State.backgroundState.bgCanvas.canvasElement };
  }

  run(): void {
    requestAnimationFrame(() => {
      this.renderingEngine.run();
      this.physicsEngine.run();
      this.run();
    });
  }

  start(): void {
    this.run();

    document.addEventListener('keydown', (evt: KeyboardEvent) => State.gameState.parseKey(evt.key, true));
    document.addEventListener('keyup', (evt: KeyboardEvent) => State.gameState.parseKey(evt.key, false));

    document.addEventListener('keyup', (evt: KeyboardEvent) => State.debugState.parseKey(evt.key));

    document.addEventListener('mousemove', (evt: MouseEvent) => {
      State.debugState.cursorCoords.updatePosition({ x: evt.clientX, y: evt.clientY });
      const gameCoords = RenderingUtilities.toGameCoordinates({ x: evt.clientX, y: evt.clientY });
      const screenCoords = RenderingUtilities.toScreenCoordinates(gameCoords);

      State.debugState.cursorCoords.setText(
        `(${gameCoords.x.toFixed(2)}, ${gameCoords.y.toFixed(2)}), ` +
        `(${screenCoords.x.toFixed(0)}, ${screenCoords.y.toFixed(0)})`
      );
    });

    window.addEventListener('resize', (ev => {
      State.gameState.canvas.canvasElement.height = innerHeight;
      State.gameState.canvas.canvasElement.width = innerWidth;
    }));
  }
}
