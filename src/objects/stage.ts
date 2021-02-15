import { State } from '../states/rootState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { Point } from '../interfaces/point';

export class Stage {

    static draw() {
        const viewableStageGridArea = RenderingUtilities.viewableStageGridArea();
        const min: Point = {
            x: Math.floor(viewableStageGridArea.bottomLeft.x),
            y: Math.floor(viewableStageGridArea.bottomLeft.y)
        };
        const max: Point = {
            x: Math.ceil(viewableStageGridArea.topRight.x),
            y: Math.ceil(viewableStageGridArea.topRight.y)
        };

        for (let row = min.y; row <= max.y; row++) {
            for (let col = min.x; col <= max.x; col++) {
                const tile = State.stageState.tiles.get(RenderingUtilities.stringifyColAndRow(col, row));
                if (tile && tile.lookupValue !== '0' && tile.lookupValue !== '00') {
                    const { x, y } = RenderingUtilities.toScreenCoordinates({ x: tile.col, y: tile.row });

                    State.gameState.canvas.ctx.drawImage(
                        State.tileSetState.imageMap.get(Number(tile.lookupValue)),
                        x,
                        y,
                        RenderingUtilities.toPixels(1),
                        RenderingUtilities.toPixels(1)
                    );

                }
            }
        }
    }

}
