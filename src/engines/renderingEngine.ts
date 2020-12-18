import { State } from '../states/rootState';
import { Ninja } from '../objects/ninja';
import { Stage } from '../objects/stage';
import { Background } from '../objects/background';
import { DebugGrid } from '../objects/debugGrid';

export class RenderingEngine {

    constructor() { }

    run() {
        this.refreshCanvas();
        Background.draw();
        Stage.draw();
        Ninja.draw();

        if (State.debugState.debugMode) {
            DebugGrid.draw();
        }
    }

    refreshCanvas(): void {
        State.gameState.canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
        State.backgroundState.bgCanvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
    }
}
