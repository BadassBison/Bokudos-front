import { State } from '../states/rootState';
import { Stage } from '../objects/stage';
import { DebugMode } from '../debug/debugMode';
import { RenderingUtilities } from '../utilites/renderingUtilities';

export class RenderingEngine {

    /**
     * To render all the entities that get drawn in the canvas
     */
    run() {
        RenderingUtilities.refreshCanvas();
        Stage.draw();

        if(State.gameState.assetMap != null) {
            State.gameState.assetMap.forEach(value => value.render());
        }

        DebugMode.draw();
    }
}
