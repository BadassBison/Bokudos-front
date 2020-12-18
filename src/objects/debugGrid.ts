import {State} from "../states/rootState";
import {RenderingUtilities} from "../utilites/renderingUtilities";

export class DebugGrid {

    static draw() {
        const position = State.gameState.position;
        const gameUnitDimensions = State.gameState.gameUnitDimensions;

        for (let row = position.y; row <= position.y + gameUnitDimensions.h + 1; row++) {
            for (let col = position.x - 1; col <= position.x + gameUnitDimensions.w; col++) {
                this.drawGrid(Math.round(row), Math.round(col));
            }
        }
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
