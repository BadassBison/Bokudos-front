import { State } from '../states/rootState';
import { Ninja } from '../objects/ninja';
import { Stage } from '../objects/stage';
import { Background } from '../objects/background';
import { DebugMode } from '../debug/debugMode';
import { RenderingUtilities } from '../utilites/renderingUtilities';

export class RenderingEngine {

    constructor() { }

    run() {
        RenderingUtilities.refreshCanvas();

        Background.draw();
        Stage.draw();

        for (const asset of State.gameState.assets) {
            asset.updateAnimation(State.gameState.keys);
        }

        DebugMode.draw();
    }
}
