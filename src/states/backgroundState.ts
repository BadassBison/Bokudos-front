import { CanvasElement } from '../objects/canvas';

// @ts-ignore
import bgImageSrc from '../../assets/sprites/tileset_1/BG/BG.png';

export class BackgroundState {
    bgCanvas: CanvasElement;
    bgImage: HTMLImageElement;
    ctx: CanvasRenderingContext2D;

    constructor(width: number, height: number) {
        this.bgCanvas = new CanvasElement(width, height);
        this.ctx = this.bgCanvas.ctx;
        this.bgImage = new Image();
        this.bgImage.src = bgImageSrc;
    }
}
