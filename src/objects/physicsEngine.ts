import { State } from '../states/rootState';
import { UpdateObject } from '../interfaces/updateObject';

export class PhysicsEngine {

    assets: UpdateObject[];

    constructor(assets: UpdateObject[]) {
        this.assets = assets;
    }

    run() {
        this.assets.forEach((asset: UpdateObject) => {
            asset.update(State.gameState.keys);
        });
    }
}
