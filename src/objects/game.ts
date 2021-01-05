import { State } from '../states/rootState';
import { GameState } from '../states/gameState';
import { PhysicsEngine } from '../engines/physicsEngine';
import { RenderingEngine } from '../engines/renderingEngine';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { DebugMode } from '../debug/debugMode';
import { Ninja } from './ninja';
import { BuilderMode } from '../debug/builderMode';
import { RegionApiHelpers } from '../http/regionApiHelpers';
import { StageApiHelpers } from '../http/stageApiHelpers';
import '../styles.css';
import { Dimensions } from '../interfaces/dimensions';

export class Game {

  state: GameState;

  constructor() { }

  async buildState(): Promise<void> {
    await State.BuildState();
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
      case ' ':
        this.state.keys.up = pressed;
        break;

      case 'ArrowDown':
      case 's':
      case 'S':
        this.state.keys.down = pressed;
        break;

      case 'ArrowLeft':
      case 'a':
      case 'A':
        this.state.keys.left = pressed;
        break;

      case 'ArrowRight':
      case 'd':
      case 'D':
        this.state.keys.right = pressed;
        break;

      case 'mousedown':
      case 'mouseup':
        this.state.keys.attack = pressed;
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

  setupEventListeners(): void {
    document.addEventListener('keydown', (evt: KeyboardEvent) => this.parseKey(evt.key, true));
    document.addEventListener('keyup', (evt: KeyboardEvent) => this.parseKey(evt.key, false));

    const canvas = State.gameState.canvas.canvasElement;
    canvas.addEventListener('mousedown', (evt: MouseEvent) => this.parseKey(evt.type, true));canvas.addEventListener('mouseup', (evt: MouseEvent) => this.parseKey(evt.type, false));
    canvas.addEventListener('mousemove', (evt: MouseEvent) => DebugMode.handleMouseMove(evt));
    canvas.addEventListener('mousemove', (evt: MouseEvent) => BuilderMode.handleMouseMove(evt));
    canvas.addEventListener('mousedown', (evt: MouseEvent) => BuilderMode.handleMouseClick(evt, true));
    canvas.addEventListener('mouseup', (evt: MouseEvent) => BuilderMode.handleMouseClick(evt, false));

    window.onresize = () => RenderingUtilities.debounce(RenderingUtilities.resizeScreenDimensions, window);
  }

  setupWindowDebugObject(): void {
    (window as any).bokudos = {
      cycleFrames: (n: number) => RenderingUtilities.cycleFrames(n),
      pauseGame: (pause: boolean) => RenderingUtilities.pauseGame(pause),
      setDimensions: (dimensions: Dimensions) => RenderingUtilities.setDimensions(dimensions),
      panDimensions: (newSize: number) => RenderingUtilities.panDimensionsInOrOut(newSize),
      api: {
        getPublishedStages: () => StageApiHelpers.getPublishedStages(),
        getUserStages: (userId: number) => StageApiHelpers.getStagesByUser(userId),
        getStageById: (stageId: number) => StageApiHelpers.getStageById(stageId),
        searchStageByName: (searchTerm: string) => StageApiHelpers.searchStagesByName(searchTerm),
        getRegions: () => RegionApiHelpers.getRegions(),
        getAllRegionsForStage: (stageId: number) => RegionApiHelpers.getAllRegionsForStage(stageId),
        getRegionForStage: (stageId: number, row: number, column: number) => RegionApiHelpers.getRegionForStage(stageId, row, column)
      }
    };
  }

  setCanvas(): void {
    document.body.prepend(State.backgroundState.bgCanvas.canvasElement, State.gameState.canvas.canvasElement);
  }

  run(): void {

    setTimeout(() => {
      if (!this.state.paused) {
        this.state.renderingEngine.run();
        this.state.physicsEngine.run();
      }
      this.run();
    }, this.state.defaultFrameDelay);
  }

  static async start(): Promise<void> {
    const game = new Game();
    await game.buildState();
    game.setupEventListeners();
    game.setupWindowDebugObject();
    game.setCanvas();

    // FIXME: Hack to fix the rendering issue with the ninja on initial load before images have cached in the browser
    setTimeout(() => {
      // Waiting 300 ms so the images in the Ninja can load, then setting properties that depend on image data
      State.gameState.renderingEngine.prepare();
      game.run();
    }, 300);
  }
}
