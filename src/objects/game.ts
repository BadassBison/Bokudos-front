import { State } from '../states/rootState';
import { GameState } from '../states/gameState';
import { RenderingEngine } from '../engines/renderingEngine';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { DebugMode } from '../debug/debugMode';
import { RegionApiHelpers } from '../http/regionApiHelpers';
import { StageApiHelpers } from '../http/stageApiHelpers';
import '../styles.css';
import { Dimensions } from '../interfaces/dimensions';
import { GameSocket } from '../sockets/gameSocket';
import { GameApiHelpers } from '../http/gameApiHelpers';
import { GameDto } from '../interfaces/gameDto';
import { PlayerApiHelpers } from '../http/playerApiHelpers';
import { PlayerDto } from '../interfaces/playerDto';
import ComponentUtilities from '../utilites/componentUtilities';
import ComponentRegistry from '../components/componentRegistry';
import StartScreenComponent from '../components/startScreen';
import { Background } from './background';
import { InputUtilities } from '../utilites/inputUtilities';

export class Game {

  state: GameState;
  server: GameSocket;

  constructor() {
    this.state = State.gameState;
    this.state.renderingEngine = new RenderingEngine();
    RenderingUtilities.setDimensions();
  }

  parseKey(key: string, pressed: boolean) {
    InputUtilities.storeInput(key, pressed);
    this.server.sendKeys(this.state.keys);
  }

  setupEventListeners(): void {
    window.onresize = () => RenderingUtilities.debounce(RenderingUtilities.resizeScreenDimensions, window);

    document.addEventListener('keydown', (evt: KeyboardEvent) => this.parseKey(evt.key, true));
    document.addEventListener('keyup', (evt: KeyboardEvent) => this.parseKey(evt.key, false));

    const canvas = State.gameState.canvas.canvasElement;
    canvas.addEventListener('mousemove', (evt: MouseEvent) => DebugMode.handleMouseMove(evt));
    canvas.addEventListener('mousedown', (evt: MouseEvent) => { if (evt.button === 0) { this.parseKey(evt.type, true); } });
    canvas.addEventListener('mouseup', (evt: MouseEvent) => { if (evt.button === 0) { this.parseKey(evt.type, false); } });

  }

  setupWindowDebugObject(): void {
    (window as any).bokudos = {
      avgFrameTime: () => State.performanceState.calculateAverageFrameTime(),
      watchFrameTimes: () => State.performanceState.watchAvgFrameTime(),
      stopWatchingFrameTimes: () => State.performanceState.stopWatching(),
      cycleFrames: (n: number) => RenderingUtilities.cycleFrames(n),
      pauseGame: (pause: boolean) => RenderingUtilities.pauseGame(pause),
      setDimensions: (dimensions: Dimensions) => RenderingUtilities.setDimensions(dimensions),
      state: State.allStates(),
      zoom: (newSize: number) => RenderingUtilities.zoomDimensionsInOrOut(newSize),
      api: {
        getPublishedStages: () => StageApiHelpers.getPublishedStages(),
        getUserStages: (userId: number) => StageApiHelpers.getStagesByUser(userId),
        getStageById: (stageId: number) => StageApiHelpers.getStageById(stageId),
        searchStageByName: (searchTerm: string) => StageApiHelpers.searchStagesByName(searchTerm),
        getRegions: () => RegionApiHelpers.getRegions(),
        getAllRegionsForStage: (stageId: number) => RegionApiHelpers.getAllRegionsForStage(stageId),
        getNeighboringRegionsForStage: (stageId: number, regionRow: number, regionColumn: number) => RegionApiHelpers.getNeighboringRegionsForStage(stageId, regionRow, regionColumn),
        getRegionForStage: (stageId: number, row: number, column: number) => RegionApiHelpers.getRegionForStage(stageId, row, column)
      }
    };
  }

  setCanvas(): void {
    document.body.prepend(State.backgroundState.bgCanvas.canvasElement, State.gameState.canvas.canvasElement);
    Background.draw();
  }

  setStartScreen(): void {
    StartScreenComponent.buildComponent();
    ComponentUtilities.appendNodeToBody(State.domState.startScreen.startScreenComponent);
    State.domState.startScreen.startScreenComponent.startButtonHandler(() => { this.beginRun(); });
  }

  beginRun() {

    GameApiHelpers.findGame().then((gameDto: GameDto) => {
      PlayerApiHelpers.joinGame(gameDto.gameId, 'Test User').then((playerDto: PlayerDto) => {
            this.server.connect(gameDto, playerDto);
          }
      );
    });

    this.run();
  }

  run(): void {

    setTimeout(() => {
      if (!this.state.paused) {
        this.state.renderingEngine.run();
      }
      this.run();
    }, this.state.defaultFrameDelay);

    State.performanceState.addFrameTime(performance.now());
  }

  static async start(): Promise<void> {
    await State.buildState();
    const game = new Game();
    ComponentRegistry.registerComponents();
    game.setupEventListeners();
    game.setupWindowDebugObject();
    game.setCanvas();

    game.server = new GameSocket();

    game.setStartScreen();
    State.builderState.setStartScreen = () => game.setStartScreen();

    // TODO: why are we loading this at the bottom?
    Background.loadImage();
  }
}
