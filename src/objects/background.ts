import { State } from '../states/rootState';

export class Background {
    static draw() {
        const { width, height } = State.backgroundState.bgCanvas.canvasElement;
        State.backgroundState.ctx.drawImage(State.backgroundState.bgImage, 0, 0, width, height);
    }
}
