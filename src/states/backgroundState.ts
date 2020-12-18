import { CanvasElement } from '../objects/canvas';
import bgImageSrc from '../../assets/sprites/tileset_1/BG/BG.png';

export class BackgroundState {
    bgCanvas: CanvasElement;
    bgImage: HTMLImageElement;
    ctx: CanvasRenderingContext2D;

    constructor() {
        this.bgCanvas = new CanvasElement(innerWidth, innerHeight);
        this.ctx = this.bgCanvas.ctx;
        this.bgImage = new Image();
        this.bgImage.src = bgImageSrc;
    }
}
