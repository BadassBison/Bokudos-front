import { State } from '../states/rootState';
import { RenderingUtilities } from '../utilites/renderingUtilities';

export class InputUtilities {
  static storeInput(key: string, pressed: boolean) {
    switch (key) {
      case 'ArrowUp' || 'w' || 'W' || ' ':
        State.gameState.keys.up = pressed;
        break;

      case 'ArrowDown' || 's' || 'S':
        State.gameState.keys.down = pressed;
        break;

      case 'ArrowLeft' || 'a' || 'A':
        State.gameState.keys.left = pressed;
        break;

      case 'ArrowRight' || 'd' || 'D':
        State.gameState.keys.right = pressed;
        break;

      case 'mousedown' || 'mouseup':
        State.gameState.keys.attack = pressed;
        break;

      case 'Shift':
        State.gameState.keys.shift = pressed;
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
}
