import { CanvasElement } from './canvas';

// @ts-ignore
import bgImageSrc from '../../assets/sprites/tileset_1/BG/BG.png';

export class Background {
    bgCanvas: CanvasElement;
    bgImage: HTMLImageElement;
    ctx: CanvasRenderingContext2D;

    constructor(width: number, height: number) {
        this.bgCanvas = new CanvasElement(width, height);
        this.ctx = this.bgCanvas.ctx;
        this.bgImage = new Image(width);
        this.bgImage.src = bgImageSrc;
    }

    draw() {
        const { width, height } = this.bgCanvas.canvasElement;
        this.ctx.drawImage(this.bgImage, 0, 0, width, height);
    }
}
