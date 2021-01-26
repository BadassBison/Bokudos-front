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
    // this.drawScreenEdge();
    // this.drawDetectedTileOutlines();
    // this.drawCollisionDetectionBox();
    // this.drawHitbox();
    // this.drawAttackHitbox();
    // this.drawEnemyHitbox();
    // this.drawCollisionsOutlines();
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

  static drawScreenEdge() {
    if (State.debugState.menuOptions[MenuOptions.SCREEN_EDGE].enabled) {
      State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.SCREEN_EDGE].color;
      State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.SCREEN_EDGE].lineWidth;

      const view = State.gameState.screenPixelDimensions;
      State.gameState.canvas.ctx.lineWidth = 2;
      State.gameState.canvas.ctx.beginPath();
      State.gameState.canvas.ctx.rect(0, 0, view.w, view.h);
      State.gameState.canvas.ctx.stroke();
    }
  }

  static drawDetectedTileOutlines() {
    if (State.debugState.menuOptions[MenuOptions.DETECTED_TILES].enabled) {
      State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.DETECTED_TILES].color;
      State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.DETECTED_TILES].lineWidth;

      State.stageState.detectionTiles.forEach((tile: StageTile) => {
        const dim = RenderingUtilities.toPixels(1);
        const pos = RenderingUtilities.toScreenCoordinates({ x: tile.col, y: tile.row });
        State.gameState.canvas.ctx.strokeRect(pos.x, pos.y, dim, dim);
      });
    }
  }

  static drawCollisionDetectionBox() {
    if (State.debugState.menuOptions[MenuOptions.DETECTION_BOX].enabled) {
      State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.DETECTION_BOX].color;
      State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.DETECTION_BOX].lineWidth;

      const box = State.ninjaState.collisionDetectionBox;
      const { x, y } = RenderingUtilities.toScreenCoordinates(box.position);
      const { w, h } = RenderingUtilities.toScreenDimensions(box.dimensions);
      State.gameState.canvas.ctx.strokeRect(x, y, w, h);
    }
  }

  // static drawHitbox() {
  //   if (State.debugState.menuOptions[MenuOptions.HITBOX].enabled) {
  //     State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.HITBOX].color;
  //     State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.HITBOX].lineWidth;
  //
  //     const box = State.ninjaState.hitbox;
  //     const { x, y } = RenderingUtilities.toScreenCoordinates(box.position);
  //     const { w, h } = RenderingUtilities.toScreenDimensions(box.dimensions);
  //     State.gameState.canvas.ctx.strokeRect(x, y, w, h);
  //   }
  // }

  // static drawAttackHitbox() {
  //   if (State.debugState.menuOptions[MenuOptions.ATTACK_HITBOX].enabled) {
  //     State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.ATTACK_HITBOX].color;
  //     State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.ATTACK_HITBOX].lineWidth;
  //
  //     const box = State.ninjaState.hitbox;
  //     if (State.ninjaState.attacking) {
  //
  //       let point: Point;
  //       let dimensions: Dimensions;
  //       if (State.ninjaState.movingRight) {
  //         point = RenderingUtilities.toScreenCoordinates({ x: box.position.x + box.dimensions.w - .5, y: box.position.y });
  //         dimensions = RenderingUtilities.toScreenDimensions({ w: 1, h: box.dimensions.h });
  //       } else {
  //         dimensions = RenderingUtilities.toScreenDimensions({ w: 1, h: box.dimensions.h });
  //         point = RenderingUtilities.toScreenCoordinates({ x: box.position.x - .5, y: box.position.y });
  //       }
  //       State.gameState.canvas.ctx.strokeRect(point.x, point.y, dimensions.w, dimensions.h);
  //     }
  //   }
  // }

  // static drawEnemyHitbox() {
  //   if (State.debugState.menuOptions[MenuOptions.ENEMY_HITBOX].enabled) {
  //     State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.ENEMY_HITBOX].color;
  //     State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.ENEMY_HITBOX].lineWidth;
  //
  //     const box = State.enemyState.hitbox;
  //     const { x, y } = RenderingUtilities.toScreenCoordinates(box.position);
  //     const { w, h } = RenderingUtilities.toScreenDimensions(box.dimensions);
  //     State.gameState.canvas.ctx.strokeRect(x, y, w, h);
  //   }
  // }

  static drawCollisionsOutlines() {
    if (State.debugState.menuOptions[MenuOptions.COLLISION_TILES].enabled) {
      State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.COLLISION_TILES].color;
      State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.COLLISION_TILES].lineWidth;

      const dim = RenderingUtilities.toPixels(1);
      State.stageState.collisionTiles.forEach((tile: StageTile) => {
        const tilePos = RenderingUtilities.toScreenCoordinates({ x: tile.col, y: tile.row });
        State.gameState.canvas.ctx.strokeRect(tilePos.x, tilePos.y, dim, dim);
      });
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
