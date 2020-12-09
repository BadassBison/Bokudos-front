import {CanvasElement} from "./canvas"
import {Box} from "./box";

export class Game {
  private readonly canvas: CanvasElement;
  private readonly canvasHtmlTag: HTMLCanvasElement;

  private box: Box;

  constructor() {
    this.canvas = new CanvasElement(innerWidth, innerHeight);
    this.canvasHtmlTag = this.canvas.canvasElement;
    this.box = new Box(this.canvas.ctx);
    console.log('Game is running');
  }

  refreshCanvas(): void {
    this.canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
  }

  draw(): void {
    this.refreshCanvas();
    this.canvas.ctx.fillStyle = 'blue';
    this.canvas.ctx.fillRect(0, 0, innerWidth, innerHeight);

    this.box.draw();

    setTimeout(() => {
      this.draw();
    }, 1000 / 60);
  }

  updatePositions(): void {
    this.box.updatePosition();

    setTimeout(() => {
      this.updatePositions();
    }, 1000 / 60);
  }

  handleMouseMove(mouseEvent: MouseEvent): void {
    // console.log({mouseEvent});
    // this.boxX = mouseEvent.clientX;
    // this.boxY = mouseEvent.clientY;
  }

  handleMouseKeyDown(keyboardEvent: KeyboardEvent): void {
    this.box.handleMouseKeyDown(keyboardEvent);
  }

  handleMouseKeyUp(keyboardEvent: KeyboardEvent): void {
    this.box.handleMouseKeyUp(keyboardEvent);
  }

  // EntryPoint
  run(): HTMLCanvasElement {
    document.addEventListener("mousemove", (event: MouseEvent) => this.handleMouseMove(event));
    document.addEventListener("keydown", (event: KeyboardEvent) => this.handleMouseKeyDown(event));
    document.addEventListener("keyup", (event: KeyboardEvent) => this.handleMouseKeyUp(event));

    // start position update loop
    this.updatePositions();

    // set render loop
    this.draw(); // initial draw

    return this.canvasHtmlTag;
  }
}
