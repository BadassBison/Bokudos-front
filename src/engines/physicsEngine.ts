import { State } from '../states/rootState';
import { UpdateObject } from '../interfaces/updateObject';

export class PhysicsEngine {
    run() {
        State.gameState.assets.forEach((asset: UpdateObject) => {
            asset.updateProperties(State.gameState.keys);
        });
    }
}
