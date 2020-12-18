import {State} from '../states/rootState';
import {Ninja} from '../objects/ninja';
import {Stage} from '../objects/stage';
import {Background} from '../objects/background';
import {DebugGrid} from '../objects/debugGrid';

export class RenderingEngine {

    constructor() { }

    run() {
        this.refreshCanvas();
        Background.draw();
        Stage.draw();
        Ninja.draw();

        // TODO: this is causing slowness right now. disabling until it is resolved.
        // if(State.debugState.debugMode) {
        //     DebugGrid.draw();
        // }

        // TODO: decouple the updating
        // this.update();
    }

    refreshCanvas(): void {
        State.gameState.canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
        State.backgroundState.bgCanvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
    }
}
