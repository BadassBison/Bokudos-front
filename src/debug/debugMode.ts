import { State } from '../states/rootState';
import { DebugMenu } from './debugMenu';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { StageTile } from '../objects/stageTile';
import { MenuOptions } from '../constants/menuOptions';
import { PropertiesMenu } from './propertiesMenu';
import { Point } from '../interfaces/point';
import { Dimensions } from '../interfaces/dimensions';

export class DebugMode {

  static draw() {
    if (State.debugState.debugMode) {
      if (!State.debugState.hasButtons) {
        State.debugState.hasButtons = true;
        DebugMenu.addMenuButton();
        PropertiesMenu.addPropertiesButton();
      }
      const position = State.gameState.position;
      const gameUnitDimensions = State.gameState.gameUnitDimensions;

      if (State.debugState.menuOptions[MenuOptions.GRID].enabled) {
        const startingRow = Math.floor(position.y);
        const endingRow = Math.ceil(position.y + gameUnitDimensions.h);
        const startingCol = Math.floor(position.x);
        const endingCol = Math.floor(position.x + gameUnitDimensions.w);

        for (let row = startingRow; row <= endingRow; row++) {
          for (let col = startingCol; col <= endingCol; col++) {
            // TODO: change color for regions
            this.drawGrid(row, col);
            this.drawGridCoords(row, col);
          }
        }
      }

      if (!State.builderState.builderMode) {
        this.drawDebugGraphics();
      }

    } else if (State.debugState.hasButtons) {
      this.debugModeCleanUp();
    }
  }

  static drawDebugGraphics() {
    this.resetCtx();
  }

  static drawGrid(row: number, col: number) {
    State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.GRID].color;
    State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.GRID].lineWidth;

    const position = RenderingUtilities.toScreenCoordinates({ x: col, y: row });
    State.gameState.canvas.ctx.strokeRect(
      position.x,
      position.y,
      RenderingUtilities.toPixels(1),
      RenderingUtilities.toPixels(1)
    );
  }

  static drawGridCoords(row: number, col: number) {
    if (State.debugState.menuOptions[MenuOptions.COORDINATES].enabled) {
      State.gameState.canvas.ctx.fillStyle = State.debugState.menuOptions[MenuOptions.COORDINATES].color;
      State.gameState.canvas.ctx.font = State.debugState.menuOptions[MenuOptions.COORDINATES].font;

      const { x, y } = RenderingUtilities.toScreenCoordinates({ x: col, y: row });
      const pixelOffset = 4;
      State.gameState.canvas.ctx.fillText(`(${col}, ${row})`, x + pixelOffset, y - pixelOffset);
    }
  }

  static resetCtx() {
    State.gameState.canvas.ctx.strokeStyle = State.gameState.defaultColor;
    State.gameState.canvas.ctx.lineWidth = State.gameState.defaultLineWidth;
  }

  static handleMouseMove(evt: MouseEvent) {
    if (State.debugState.handleMouseMove) {
      const { x, y } = RenderingUtilities.toGameCoordinates({ x: evt.clientX, y: evt.clientY });
      // console.log(`(${Math.floor(x)}, ${Math.floor(y)})`);
    }
  }

  // TODO: Move this with the properties
  static addFramesPerSecondOption(): HTMLElement {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const fpsLabel = document.createElement('label');
    fpsLabel.innerHTML = 'FPS &nbsp;';

    const fpsInput = document.createElement('input');
    fpsInput.type = 'range';
    fpsInput.max = '60';
    fpsInput.min = '0';
    fpsInput.value = State.gameState.framesPerSecond.toString();

    fpsInput.addEventListener('change', () => {
      State.gameState.framesPerSecond = Number(fpsInput.value);
    });
    fpsLabel.appendChild(fpsInput);
    wrapper.appendChild(fpsLabel);

    return wrapper;
  }

  static resetState() {
    DebugMenu.closeMenu();
    PropertiesMenu.closePropertyMenu();
  }

  static debugModeCleanUp() {
    State.debugState.hasButtons = false;
    DebugMenu.cleanup();
    PropertiesMenu.cleanup();
  }
}
