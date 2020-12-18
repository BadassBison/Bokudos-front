import { State } from '../states/rootState';
import { StageTile } from './stageTile';
import { RenderingUtilities } from '../utilites/renderingUtilities';

export class Stage {

    static draw() {
        State.stageState.tiles.forEach((tile: StageTile) => {
            if (tile.lookupValue !== '00') {
                const { x, y } = RenderingUtilities.toScreenCoordinates({ x: tile.col, y: tile.row });
                State.gameState.canvas.ctx.drawImage(
                    State.stageState.platforms.imageMap.get(Number(tile.lookupValue)),
                    x,
                    y,
                    RenderingUtilities.toPixels(1),
                    RenderingUtilities.toPixels(1)
                );
            }
        });
    }
}
