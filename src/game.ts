import { CanvasElement } from "./canvas"

export class Game {
  private canvas: CanvasElement;
  private canvasHtmlTag: HTMLCanvasElement;

  constructor() {
    this.canvas = new CanvasElement(innerWidth, innerHeight);
    this.canvasHtmlTag = this.canvas.canvasElement;
    console.log('Game is running');
  }

  // EntryPoint
  run(): HTMLCanvasElement {
    // this.draw();
    return this.canvasHtmlTag;
  }
}
