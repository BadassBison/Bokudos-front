import {State} from "../states/rootState";
import {RenderingUtilities} from "../utilites/renderingUtilities";

export class DebugGrid {

    static draw() {
        const position = State.gameState.position;
        const gameUnitDimensions = State.gameState.screenPixelDimensions;
        const view = State.gameState.screenPixelDimensions;

        for (let row = position.y; row <= position.y + gameUnitDimensions.h + 1; row++) {
            for (let col = position.x - 1; col <= position.x + gameUnitDimensions.w; col++) {
                this.drawGrid(Math.round(row), Math.round(col));
            }
        }

        State.gameState.canvas.ctx.strokeStyle = 'blue';
        State.gameState.canvas.ctx.lineWidth = 2;
        State.gameState.canvas.ctx.beginPath();
        State.gameState.canvas.ctx.rect(0, 0, view.w, view.h);
        State.gameState.canvas.ctx.stroke();
        State.gameState.canvas.ctx.strokeStyle = 'black';
    }

    static drawGrid(row: number, col: number) {
        const position = RenderingUtilities.toScreenCoordinates({x: col, y: row});
        State.gameState.canvas.ctx.strokeRect(
            position.x,
            position.y,
            RenderingUtilities.toPixels(1),
            RenderingUtilities.toPixels(1)
        );
    }
}
