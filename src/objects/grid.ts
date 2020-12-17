import { GameView } from './gameView';

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

        for (let row = p.y; row <= p.y + d.h + 1; row++) {
            for (let col = p.x - 1; col <= p.x + d.w; col++) {
                this.drawGrid(Math.round(row), Math.round(col));
            }
        }

        this.ctx.strokeStyle = 'blue';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.rect(0, 0, view.w, view.h);
        this.ctx.stroke();
        this.ctx.strokeStyle = 'black';
    }

    drawGrid(row: number, col: number) {
        const position = this.gameView.toScreenCoordinates({ x: col, y: row });
        this.ctx.strokeRect(
            position.x,
            position.y,
            this.gameView.toPixels(1),
            this.gameView.toPixels(1)
        );
    }
}
