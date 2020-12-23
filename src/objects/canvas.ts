export class CanvasElement {
  canvasElement: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(width: number, height: number, id: string) {
    this.canvasElement = document.createElement('canvas');
    this.canvasElement.id = id;
    this.canvasElement.width = width;
    this.canvasElement.height = height;
    this.ctx = this.canvasElement.getContext('2d');
  }
}
