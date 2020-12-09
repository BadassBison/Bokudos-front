import { CanvasElement } from "./canvas"

export class Game {
  private canvas: CanvasElement;
  private canvasHtmlTag: HTMLCanvasElement;
  private boxX = 30;
  private boxY = 30;
  xSpeed = 0;
  ySpeed = 0;
  accel = 1;
  topSpeed = 5;

  constructor() {
    this.canvas = new CanvasElement(innerWidth, innerHeight);
    this.canvasHtmlTag = this.canvas.canvasElement;
    console.log('Game is running');
  }

  handleMouseMove(evt: MouseEvent): void {
    // this.boxX = evt.clientX;
    // this.boxY = evt.clientY;
  }

  handleKeyDown(evt: KeyboardEvent): void {
    switch (evt.key) {
      case 'ArrowUp':
        if (-this.ySpeed < this.topSpeed) {
          this.ySpeed -= this.accel
        } else {
          this.ySpeed++;
        }
        break;
        
      case 'ArrowRight':
        if (this.xSpeed < this.topSpeed) {
          this.xSpeed += this.accel 
        } else {
          this.xSpeed--;
        }
        break;
        
      case 'ArrowDown':
        if (this.ySpeed < this.topSpeed) { 
          this.ySpeed += this.accel 
        } else {
          this.ySpeed--;
        }
        break;
        
      case 'ArrowLeft':
        if (-this.xSpeed < this.topSpeed) { 
          this.xSpeed -= this.accel
        } else {
          this.xSpeed++;
        }
        break;
      
      default:
        break;
    }
  }

  handleKeyUp(evt: KeyboardEvent) {
    
  }

  refreshCanvas(): void {
    this.canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
  }

  draw(): void {
    this.refreshCanvas();
    this.boxX += this.xSpeed;
    this.boxY += this.ySpeed;
    this.canvas.ctx.fillStyle = 'blue';
    this.canvas.ctx.fillRect(this.boxX, this.boxY, 50, 50);

    requestAnimationFrame(() => {
      this.draw();
    })
  }

  // EntryPoint
  run(): HTMLCanvasElement {
    document.addEventListener("mousemove", (evt: MouseEvent) => this.handleMouseMove(evt))
    document.addEventListener("keydown", (evt: KeyboardEvent) => this.handleKeyDown(evt))
    document.addEventListener("keyup", (evt: KeyboardEvent) => this.handleKeyUp(evt))
    
    this.draw();
    return this.canvasHtmlTag;
  }
}
