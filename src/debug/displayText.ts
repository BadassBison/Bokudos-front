import { Point } from '../interfaces/point';

export class DisplayText {
    position: Point = { x: 0, y: 0 };
    font: string;
    text: string;

    constructor() {
        this.font = '11px serif';
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.font = this.font;
        ctx.strokeText(this.text, this.position.x, this.position.y);
    }

    setText(text: string) {
        this.text = text;
    }

    setfont(font: string) {
        this.font = font;
    }

    updatePosition(position: Point) {
        this.position.x = position.x;
        this.position.y = position.y;
    }
}
