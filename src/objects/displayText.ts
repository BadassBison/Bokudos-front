import {Point} from "../interfaces/point";

export class DisplayText {
    ctx: CanvasRenderingContext2D;
    position: Point = {x: 0, y:0};
    font: string = '11px serif';
    text: string;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    draw() {
        this.ctx.font = this.font;
        this.ctx.strokeText(this.text, this.position.x, this.position.y);
    }

    setText(text: string) {
        this.text = text;
    }

    setfont(font: string ) {
        this.font = font;
    }

    updatePosition(position: Point) {
        this.position.x = position.x;
        this.position.y = position.y;
    }
}
