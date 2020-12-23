import { State } from '../states/rootState';
import { GameState } from '../states/gameState';
import { PhysicsEngine } from '../engines/physicsEngine';
import { RenderingEngine } from '../engines/renderingEngine';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { DebugMode } from './debugMode';
import { Ninja } from './ninja';
import '../styles.css';

export class Game {

  state: GameState;

  constructor() {
    this.state = State.gameState;
    this.state.assets = [new Ninja()];
    this.state.renderingEngine = new RenderingEngine();
    this.state.physicsEngine = new PhysicsEngine();
    RenderingUtilities.setDimensions();
  }

  parseKey(key: string, pressed: boolean) {
    switch (key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        if (pressed && !this.state.keys.up || !pressed && this.state.keys.up) {
          this.state.keys.up = pressed;
        }
        break;

      case 'ArrowDown':
      case 's':
      case 'S':
        if (pressed && !this.state.keys.down || !pressed && this.state.keys.down) {
          this.state.keys.down = pressed;
        }
        break;

      case 'ArrowLeft':
      case 'a':
      case 'A':
        if (pressed && !this.state.keys.left || !pressed && this.state.keys.left) {
          this.state.keys.left = pressed;
        }
        break;

      case 'ArrowRight':
      case 'd':
      case 'D':
        if (pressed && !this.state.keys.right || !pressed && this.state.keys.right) {
          this.state.keys.right = pressed;
        }
        break;

      case ' ':
        if (pressed && !this.state.keys.space || !pressed && this.state.keys.space) {
          this.state.keys.space = pressed;
        }
        break;

      case 'Shift':
        if (pressed && !this.state.keys.shift || !pressed && this.state.keys.shift) {
          this.state.keys.shift = pressed;
        }
        break;

      case 'F9':
        if (pressed) { State.debugState.debugMode = !State.debugState.debugMode; }
        break;
      case 'F10':
        if (pressed) {
          State.debugState.debugMode = true;
          State.debugState.gridEnabled = true;
          State.debugState.gridCoordsEnabled = true;
          State.debugState.screenEdgeEnabled = true;
          State.debugState.tileOutlinesEnabled = true;
          State.debugState.collisionDetectionBoxEnabled = true;
          State.debugState.hitboxEnabled = true;
          State.debugState.ninjaGridOutlinesEnabled = true;
          State.debugState.collisionsOutlinesEnabled = true;
        }
        break;
      case 'Escape':
        if(pressed && !State.gameState.paused) {
          State.gameState.framesPerSecond = 0;
        } else if (pressed && State.gameState.paused) {
          State.gameState.framesPerSecond = State.gameState.defaultFramesPerSecond;
        }
        break;
    }
  }

  getCanvas(): { [key: string]: HTMLCanvasElement } {
    return { canvas: State.gameState.canvas.canvasElement, bgCanvas: State.backgroundState.bgCanvas.canvasElement };
  }

  run(): void {
    const delay = this.state.framesPerSecond > 0 ?  1000 / this.state.framesPerSecond : 0;
    this.state.paused = delay <= 0;
    setTimeout(() => {
      if (!this.state.paused) {
        this.state.renderingEngine.run();
        this.state.physicsEngine.run();
      }
      this.run();
    }, delay);
  }

  start(): void {
    document.addEventListener('keydown', (evt: KeyboardEvent) => this.parseKey(evt.key, true));
    document.addEventListener('keyup', (evt: KeyboardEvent) => this.parseKey(evt.key, false));
    document.addEventListener('mousemove', (evt: MouseEvent) => {
      if (State.debugState.debugMode) { DebugMode.handleMouseMove(evt); }
    });
    document.addEventListener('click', (evt: MouseEvent) => {
      if (State.debugState.debugMode) { DebugMode.handleMouseClick(evt); }
    });

    window.addEventListener('resize', (ev => {
      State.gameState.canvas.canvasElement.height = innerHeight;
      State.gameState.canvas.canvasElement.width = innerWidth;
      State.backgroundState.bgCanvas.canvasElement.height = innerHeight;
      State.backgroundState.bgCanvas.canvasElement.width = innerWidth;
      RenderingUtilities.setDimensions();
      if(this.state.paused) {
        this.state.renderingEngine.run();
      }
    }));

    this.run();
  }
}
