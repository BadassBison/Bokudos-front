export class CanvasElement {
  canvasElement: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(width: number, height: number, id: string) {
    this.canvasElement = document.createElement('canvas');
    this.canvasElement.id = id;
    this.canvasElement.width = width;
    this.canvasElement.height = height;
    this.canvasElement.oncontextmenu = () => false; // disabling context menu for right click, as the right click may become a key-binding in future (throwing daggers)
    this.ctx = this.canvasElement.getContext('2d');
  }
}
