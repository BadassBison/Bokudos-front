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

        const halfWidth = d.w/2;
        const halfHeight = d.h/2;

        for(let row = p.y - halfHeight; row <= p.y + halfHeight + 1; row++) {
            for(let col = p.x - halfWidth-1; col <= p.x + halfWidth; col++) {
                this.drawGrid(Math.round(row), Math.round(col));
            }
        }

        this.drawLine({x: 0, y: 10}, {x: 0, y: -10});
        this.drawLine({x: -10, y: 0}, {x: 10, y: 0});

        this.ctx.strokeStyle = "red";
        this.ctx.beginPath();
        const center = this.gameView.toScreenCoordinates(p);
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
        const s1 = this.gameView.toScreenCoordinates(p1);
        const s2 = this.gameView.toScreenCoordinates(p2);

        this.ctx.beginPath();
        this.ctx.moveTo(s1.x, s1.y);
        this.ctx.lineTo(s2.x, s2.y);
        this.ctx.stroke();
    }

    drawGrid(row: number, col: number) {
        const position = this.gameView.toScreenCoordinates({x: col, y: row});
        this.ctx.strokeRect(
            position.x,
            position.y,
            this.gameView.toPixels(1),
            this.gameView.toPixels(1)
        );
    }
}
