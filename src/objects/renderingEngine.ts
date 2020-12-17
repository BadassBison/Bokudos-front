import { State } from '../states/rootState';
import { Ninja } from './ninja';
import { Stage } from './stage';
import { Background } from './background';

export class RenderingEngine {

    constructor() { }

    run() {
        this.refreshCanvas();
        Background.draw();
        Stage.draw();
        Ninja.draw();

        // TODO: decouple the updating
        // this.update();
    }

    refreshCanvas(): void {
        State.gameState.canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
        State.backgroundState.bgCanvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
    }
}
