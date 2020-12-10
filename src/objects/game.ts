import { GameState } from "../states/gameState";
import { CanvasElement } from "./canvas"

import { Box } from "./box";
import { BoxOptions } from "../interfaces/boxOptions";


export class Game {
  private state: GameState;

  constructor() {
    this.state = new GameState(innerWidth, innerHeight);
    this.state.canvas = new CanvasElement(innerWidth, innerHeight);

    const boxOptions: BoxOptions = {
      color: 'blue',
      height: 30,
      width: 30,
      position: { x: 100, y: 100 }
    }
    this.state.box = new Box(this.state.canvas.ctx, boxOptions)
  }

  // Updating the data, nothing with drawing/rendering
  update(): void {
    this.state.box.update(this.state.keys);
  }

  draw(): void {
    requestAnimationFrame(() => {
      this.refreshCanvas();
      this.update();
      this.state.box.draw();

      this.draw();
    });
  }

  private refreshCanvas(): void {
    this.state.canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
  }

  // EntryPoint
  run(): HTMLCanvasElement {
    document.addEventListener("keydown", (evt: KeyboardEvent) => this.state.parseKey(evt.key, true))
    document.addEventListener("keyup", (evt: KeyboardEvent) => this.state.parseKey(evt.key, false))

    this.draw();
    return this.state.canvas.canvasElement;
  }
}
