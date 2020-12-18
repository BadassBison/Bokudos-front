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
    RenderingUtilities.setDimensions();
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

    window.addEventListener('resize', (ev => {
      State.gameState.canvas.canvasElement.height = innerHeight;
      State.gameState.canvas.canvasElement.width = innerWidth;
      State.backgroundState.bgCanvas.canvasElement.height = innerHeight;
      State.backgroundState.bgCanvas.canvasElement.width = innerWidth;
      RenderingUtilities.setDimensions();
    }));
  }
}
