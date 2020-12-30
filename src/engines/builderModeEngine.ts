import { State } from '../states/rootState';
import { Stage } from '../objects/stage';
import { Background } from '../objects/background';
import { DebugMode } from '../debug/debugMode';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { Keys } from '../interfaces/keys';

export class BuilderModeEngine {

  running: boolean;

  constructor() { }

  start() {
    RenderingUtilities.pauseGame(true);
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
