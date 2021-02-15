import { State } from '../states/rootState';
import { Stage } from '../objects/stage';
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

        Stage.draw();
        this.drawGrid();
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
    if (!State.builderState.saving) {
      if (up) {
        State.gameState.position.y += State.builderState.cameraSpeed;
      }
      if (down) {
        State.gameState.position.y -= State.builderState.cameraSpeed;
      }
      if (left) {
        State.gameState.position.x -= State.builderState.cameraSpeed;
      }
      if (right) {
        State.gameState.position.x += State.builderState.cameraSpeed;
      }
    }
  }

  drawGrid() {
    if (State.builderState.showGrid || State.builderState.showRegions) {
      const position = State.gameState.position;
      const gameUnitDimensions = State.gameState.gameUnitDimensions;
      const startingRow = Math.floor(position.y);
      const endingRow = Math.ceil(position.y + gameUnitDimensions.h);
      const startingCol = Math.floor(position.x);
      const endingCol = Math.floor(position.x + gameUnitDimensions.w);

      for (let row = startingRow; row <= endingRow; row++) {
        for (let col = startingCol; col <= endingCol; col++) {
            if (State.builderState.showGrid) {
              this.drawGridOutlines(row, col);
              if (State.gameState.currentGridDimensions.w < 20) { this.drawGridCoords(row, col); }
            }
            if (State.builderState.showRegions) { this.drawRegionOutline(row, col); }
        }
      }
    }
  }

  drawGridOutlines(row: number, col: number) {
    State.gameState.canvas.ctx.strokeStyle = 'black';
    State.gameState.canvas.ctx.lineWidth = 1;

    const position = RenderingUtilities.toScreenCoordinates({ x: col, y: row });
    State.gameState.canvas.ctx.strokeRect(
      position.x,
      position.y,
      RenderingUtilities.toPixels(1),
      RenderingUtilities.toPixels(1)
    );
  }

  drawGridCoords(row: number, col: number) {
    const { x, y } = RenderingUtilities.toScreenCoordinates({ x: col, y: row });
    const pixelOffset = 4;
    State.gameState.canvas.ctx.fillText(`(${col}, ${row})`, x + pixelOffset, y - pixelOffset);
  }

  drawRegionOutline(row: number, col: number) {
    const regionSize = State.stageState.regionSize;
    let gridInPixels: number;

    const isRowBoundary = row % regionSize === 0;
    if (isRowBoundary) {
      State.gameState.canvas.ctx.strokeStyle = 'blue';
      State.gameState.canvas.ctx.lineWidth = 3;
      const position = RenderingUtilities.toScreenCoordinates({ x: col, y: row });

      if (!gridInPixels) {
        gridInPixels = RenderingUtilities.toPixels(State.gameState.currentGridDimensions.w);
      }

      State.gameState.canvas.ctx.beginPath();
      State.gameState.canvas.ctx.moveTo(position.x, position.y);
      State.gameState.canvas.ctx.lineTo(position.x + gridInPixels, position.y);
      State.gameState.canvas.ctx.stroke();
    }

    const isColBoundary = col % regionSize === 0;
    if (isColBoundary) {
      State.gameState.canvas.ctx.strokeStyle = 'blue';
      State.gameState.canvas.ctx.lineWidth = 3;
      const position = RenderingUtilities.toScreenCoordinates({ x: col, y: row });

      if (!gridInPixels) {
        gridInPixels = RenderingUtilities.toPixels(State.gameState.currentGridDimensions.w);
      }

      State.gameState.canvas.ctx.beginPath();
      State.gameState.canvas.ctx.moveTo(position.x, position.y);
      State.gameState.canvas.ctx.lineTo(position.x, position.y + gridInPixels);
      State.gameState.canvas.ctx.stroke();
    }

  }
}
