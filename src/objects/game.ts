import { State } from '../states/rootState';
import { GameState } from '../states/gameState';
import { PhysicsEngine } from '../engines/physicsEngine';
import { RenderingEngine } from '../engines/renderingEngine';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { DebugMode } from '../debug/debugMode';
import { Ninja } from './ninja';
import { BuilderMode } from '../debug/builderMode';
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

      case 'Escape':
        if (pressed) {
          const paused = !State.gameState.paused;
          RenderingUtilities.pauseGame(paused);
        }
        break;
    }
  }

  getCanvas(): { [key: string]: HTMLCanvasElement } {
    return { canvas: State.gameState.canvas.canvasElement, bgCanvas: State.backgroundState.bgCanvas.canvasElement };
  }

  run(): void {
    // TODO: Division is costly, better we calculate this only when the fps changes
    const delay = this.state.framesPerSecond > 0 ? 1000 / this.state.framesPerSecond : 0;
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

    const canvas = State.gameState.canvas.canvasElement;
    canvas.addEventListener('mousemove', (evt: MouseEvent) => DebugMode.handleMouseMove(evt));
    canvas.addEventListener('click', (evt: MouseEvent) => BuilderMode.handleMouseClick(evt));

    window.addEventListener('resize', (ev => {
      State.gameState.canvas.canvasElement.height = innerHeight;
      State.gameState.canvas.canvasElement.width = innerWidth;
      State.backgroundState.bgCanvas.canvasElement.height = innerHeight;
      State.backgroundState.bgCanvas.canvasElement.width = innerWidth;
      RenderingUtilities.setDimensions();
      if (this.state.paused) {
        this.state.renderingEngine.run();
      }
    }));

    (window as any).cycleFrames = (n: number) => RenderingUtilities.cycleFrames(n);
    (window as any).pauseGame = (pause: boolean) => RenderingUtilities.pauseGame(pause);

    this.run();
  }
}
