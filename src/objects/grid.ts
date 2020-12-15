import {GameView} from "./gameView";
import {Point} from "../interfaces/point";

export class Grid {
    ctx: CanvasRenderingContext2D;
    view: GameView;

    constructor(ctx: CanvasRenderingContext2D, gameView: GameView) {
        this.ctx = ctx;
        this.view = gameView;
    }

    draw() {
        const p = this.view.getPosition();
        const d = this.view.getDimensions();
        // draw vertical lines
        for (let x = p.x - d.w / 2; x <= p.x + d.w / 2; x++) {
            const p1: Point = {x: x, y: p.y + d.h / 2};
            const p2: Point = {x: x, y: p.y - d.h / 2};
            this.drawLine(p1, p2);
        }

        // draw horizontal lines
        for (let y = p.y - d.h / 2; y <= p.y + d.h / 2; y++) {
            const p1: Point = {x: p.x - d.w / 2, y: y};
            const p2: Point = {x: p.y + d.w / 2, y: y};
            this.drawLine(p1, p2);
        }
    }

    drawLine(p1: Point, p2: Point) {
        const s1 = this.view.convertToScreenCoords(p1);
        const s2 = this.view.convertToScreenCoords(p2);

        this.ctx.beginPath();
        this.ctx.moveTo(s1.x, s1.y);
        this.ctx.lineTo(s2.x, s2.y);
        this.ctx.stroke();
    }
}
