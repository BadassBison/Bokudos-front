import { State } from '../states/rootState';
import { Ninja } from '../objects/ninja';
import { Stage } from '../objects/stage';
import { Background } from '../objects/background';
import { DebugMode } from '../objects/debugMode';

export class RenderingEngine {

    constructor() { }

    run() {
        this.refreshCanvas();
        Background.draw();
        Stage.draw();
        Ninja.draw();

        DebugMode.draw();
    }

    refreshCanvas(): void {
        State.gameState.canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
        State.backgroundState.bgCanvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
    }
}
