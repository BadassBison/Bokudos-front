import {GameView} from "./gameView";
import {Point} from "../interfaces/point";

export class Grid {
    ctx: CanvasRenderingContext2D;
    gameView: GameView;

    constructor(ctx: CanvasRenderingContext2D, gameView: GameView) {
        this.ctx = ctx;
        this.gameView = gameView;
    }

    draw() {
        const p = this.gameView.getPosition();
        const d = this.gameView.getDimensions();
        const view = this.gameView.getView();

        const halfWidth = view.w/2;
        const halfHeight = view.h/2;

        // draw vertical lines
        // for (let x = p.x - halfWidth; x <= p.x + halfWidth; x++) {
        //     const p1: Point = {x: Math.round(x), y: p.y + halfHeight};
        //     const p2: Point = {x: Math.round(x), y: p.y - halfHeight};
        //     this.drawLine(p1, p2);
        // }
        //
        // // draw horizontal lines
        // for (let y = p.y - halfHeight; y <= p.y + halfHeight; y++) {
        //     const p1: Point = {x: p.x - halfWidth, y: Math.round(y)};
        //     const p2: Point = {x: p.y + halfWidth, y: Math.round(y)};
        //     this.drawLine(p1, p2);
        // }

        this.drawLine({x: 0, y: 10}, {x: 0, y: -10});
        this.drawLine({x: -10, y: 0}, {x: 10, y: 0});

        this.ctx.strokeStyle = "red";
        this.ctx.beginPath();
        const center = this.gameView.convertToScreenCoords(p);
        // console.log("p: " + p.x + ", " + p.y);
        // console.log("center: " + center.x + ", " + center.y);
        this.ctx.rect(center.x -50, center.y-50, 100, 100);
        this.ctx.stroke();
        this.ctx.strokeStyle = "black";

        this.ctx.strokeStyle = "blue";
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.rect(0, 0, view.w, view.h);
        this.ctx.stroke();
        this.ctx.strokeStyle = "black";
    }

    drawLine(p1: Point, p2: Point) {
        const s1 = this.gameView.convertToScreenCoords(p1);
        const s2 = this.gameView.convertToScreenCoords(p2);

        this.ctx.beginPath();
        this.ctx.moveTo(s1.x, s1.y);
        this.ctx.lineTo(s2.x, s2.y);
        this.ctx.stroke();
    }
}
