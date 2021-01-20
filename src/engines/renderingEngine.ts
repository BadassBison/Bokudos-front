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

        for (const asset of State.gameState.assets) {
            asset.updateAnimation(State.gameState.keys);
        }

        DebugMode.draw();
    }

    /**
     * To invoke property updates after images are loaded
     */
    prepare() {
        for (const asset of State.gameState.assets) {
            asset.updateStateAfterImagesLoad();
        }
    }
}
