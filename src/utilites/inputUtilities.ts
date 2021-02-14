import { State } from '../states/rootState';
import { RenderingUtilities } from './renderingUtilities';

export class InputUtilities {
  static storeInput(key: string, pressed: boolean) {
    switch (key) {
      case 'ArrowUp': case 'w': case 'W': case ' ':
        State.gameState.keys.up = pressed;
        break;

      case 'ArrowDown': case 's': case 'S':
        State.gameState.keys.down = pressed;
        break;

      case 'ArrowLeft': case 'a': case 'A':
        State.gameState.keys.left = pressed;
        break;

      case 'ArrowRight': case 'd': case 'D':
        State.gameState.keys.right = pressed;
        break;

      case 'mousedown': case 'mouseup':
        State.gameState.keys.attack = pressed;
        break;

      case 'Shift':
        State.gameState.keys.shift = pressed;
        State.gameState.keys.glide = pressed;
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
