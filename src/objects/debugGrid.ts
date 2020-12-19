import { State } from '../states/rootState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { StageTile } from './stageTile';

export class DebugGrid {

    static draw() {
        State.gameState.canvas.ctx.lineWidth = 3;

        const position = State.gameState.position;
        const gameUnitDimensions = State.gameState.gameUnitDimensions;

        for (let row = position.y; row <= position.y + gameUnitDimensions.h + 1; row++) {
            for (let col = position.x - 1; col <= position.x + gameUnitDimensions.w; col++) {
                this.drawGrid(Math.round(row), Math.round(col));
            }
        }

        this.drawScreenEdge('blue');
        this.drawTileOutlines('yellow');
        this.drawCollisionDetectionBox('red');
        this.drawHitbox('white');
        this.resetCtx();
    }

    static drawGrid(row: number, col: number) {
        const position = RenderingUtilities.toScreenCoordinates({ x: col, y: row });
        State.gameState.canvas.ctx.strokeRect(
            position.x,
            position.y,
            RenderingUtilities.toPixels(1),
            RenderingUtilities.toPixels(1)
        );
    }

    static drawScreenEdge(color: string) {
        State.gameState.canvas.ctx.strokeStyle = color;

        const view = State.gameState.screenPixelDimensions;
        State.gameState.canvas.ctx.lineWidth = 2;
        State.gameState.canvas.ctx.beginPath();
        State.gameState.canvas.ctx.rect(0, 0, view.w, view.h);
        State.gameState.canvas.ctx.stroke();
    }

    static drawTileOutlines(color: string) {
        State.gameState.canvas.ctx.strokeStyle = color;

        State.stageState.detectionTiles.forEach((tile: StageTile) => {
            const dim = RenderingUtilities.toPixels(1);
            const pos = RenderingUtilities.toScreenCoordinates({ x: tile.col, y: tile.row });
            State.gameState.canvas.ctx.strokeRect(pos.x, pos.y, dim, dim);
        });
    }

    static drawCollisionDetectionBox(color: string) {
        State.gameState.canvas.ctx.strokeStyle = color;

        const box = State.ninjaState.collisionDetectionBox;
        const { x, y } = RenderingUtilities.toScreenCoordinates(box.position);
        const { w, h } = RenderingUtilities.toScreenDimensions(box.dimensions);
        State.gameState.canvas.ctx.strokeRect(x, y, w, h);
    }

    static drawHitbox(color: string) {
        State.gameState.canvas.ctx.strokeStyle = color;

        const box = State.ninjaState.hitbox;
        const { x, y } = RenderingUtilities.toScreenCoordinates(box.position);
        const { w, h } = RenderingUtilities.toScreenDimensions(box.dimensions);
        State.gameState.canvas.ctx.strokeRect(x, y, w, h);
    }

    static resetCtx() {
        State.gameState.canvas.ctx.strokeStyle = 'black';
        State.gameState.canvas.ctx.lineWidth = 1;
    }
}
