import { State } from '../states/rootState';
import { Stage } from '../objects/stage';
import { Background } from '../objects/background';
import { DebugMode } from '../debug/debugMode';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { Keys } from '../interfaces/keys';
import { MenuOptions } from '../constants/menuOptions';

export class BuilderModeEngine {

  running: boolean;
  coordsEnabled: boolean;

  constructor() { }

  start() {
    RenderingUtilities.pauseGame(true);
    this.coordsEnabled = State.debugState.menuOptions[MenuOptions.COORDINATES].enabled;
    State.debugState.menuOptions[MenuOptions.COORDINATES].enabled = false;
    this.running = true;
    this.run();
  }

  run() {
    if (this.running) {
      setTimeout(() => {
        RenderingUtilities.refreshCanvas();

        Background.draw();
        Stage.draw();
        DebugMode.draw();
        this.moveStage(State.gameState.keys);

        this.run();
      }, 1000 / State.gameState.defaultFramesPerSecond);
    }
  }

  stop() {
    RenderingUtilities.pauseGame(false);
    State.debugState.menuOptions[MenuOptions.COORDINATES].enabled = this.coordsEnabled;
    this.running = false;
  }

  moveStage({ up, down, left, right }: Keys) {
    if (up) {
      State.gameState.position.y += 0.2;
    }
    if (down) {
      State.gameState.position.y -= 0.2;
    }
    if (left) {
      State.gameState.position.x -= 0.2;
    }
    if (right) {
      State.gameState.position.x += 0.2;
    }
  }
}
