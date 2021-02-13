import { State } from '../states/rootState';
import { RenderingUtilities } from '../utilites/renderingUtilities';

export class InputUtilities {
  static keys = State.gameState.keys;
  
  static storeInput(key: string, pressed: boolean) {
    switch (key) {
      case 'ArrowUp' || 'w' || 'W' || ' ':
        this.keys.up = pressed;
        break;

      case 'ArrowDown' || 's' || 'S':
        this.keys.down = pressed;
        break;

      case 'ArrowLeft' || 'a' || 'A':
        this.keys.left = pressed;
        break;

      case 'ArrowRight' || 'd' || 'D':
        this.keys.right = pressed;
        break;

      case 'mousedown' || 'mouseup':
        this.keys.attack = pressed;
        break;

      case 'Shift':
        this.keys.shift = pressed;
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
