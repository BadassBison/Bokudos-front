import { Dimensions } from '../interfaces/dimensions';
import { Point } from '../interfaces/point';
export class Grid {

    constructor() { }

    draw(ctx: CanvasRenderingContext2D, position: Point, gameUnitDimensions: Dimensions, cb: any) {
        // const view = this.gameView.getView();

        for (let row = position.y; row <= position.y + gameUnitDimensions.h + 1; row++) {
            for (let col = position.x - 1; col <= position.x + gameUnitDimensions.w; col++) {
                this.drawGrid(Math.round(row), Math.round(col), cb);
            }
        }

        // this.ctx.strokeStyle = 'blue';
        // this.ctx.lineWidth = 2;
        // this.ctx.beginPath();
        // this.ctx.rect(0, 0, view.w, view.h);
        // this.ctx.stroke();
        // this.ctx.strokeStyle = 'black';
    }

    // drawGrid() {

    // }

    drawGrid(row: number, col: number, cb: any) {
        const position = cb({ x: col, y: row });
        // this.ctx.strokeRect(
        //     position.x,
        //     position.y,
        //     this.gameView.toPixels(1),
        //     this.gameView.toPixels(1)
        // );
    }
}
