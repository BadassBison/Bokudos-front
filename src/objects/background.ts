import { State } from '../states/rootState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { Dimensions } from '../interfaces/dimensions';

export class Background {
    static draw() {
        const { width } = State.backgroundState.bgCanvas.canvasElement;
        const scale = State.backgroundState.bgImage.height / State.gameState.gameUnitDimensions.h;
        const { w, h } = RenderingUtilities.toScreenDimensions(this.getSize(scale));

        for (let dx = 0; dx < width / w; dx++) {
            State.backgroundState.ctx.drawImage(State.backgroundState.bgImage, dx * w, 0, w, h);
        }
    }

    static getSize(scale: number): Dimensions {
        return {
            w: State.backgroundState.bgImage.width / scale,
            h: State.backgroundState.bgImage.height / scale
        };
    }
}
