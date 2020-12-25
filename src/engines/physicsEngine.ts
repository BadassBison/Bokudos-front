import { State } from '../states/rootState';
import { UpdateObject } from '../interfaces/updateObject';
import { GridArea } from '../interfaces/gridArea';

export class PhysicsEngine {

    detectionArea: GridArea;

    constructor() {
    }

    run() {
        this.detectCollision();
        State.gameState.assets.forEach((asset: UpdateObject) => {
            asset.updateProperties(State.gameState.keys);
        });
    }

    detectCollision() {
        this.getTilesInDetectionArea();
        State.stageState.collisionTiles = [];
        const tilesToCheck = State.stageState.detectionTiles;
        const hitbox = State.ninjaState.hitbox;

        for (const tile of tilesToCheck) {

            if (hitbox.position.x <= tile.col + 1.0 &&                     // TL.x of hitbox < TR.x of tile
                hitbox.position.x + hitbox.dimensions.w >= tile.col &&   // TR.x of hitbox > TL.x of tile
                hitbox.position.y + 1 >= tile.row &&                     // TL.y of hitbox < BL.y of tile
                hitbox.position.y - hitbox.dimensions.h <= tile.row) {   // BL.y of hitbox > TL.y of tile
                State.stageState.collisionTiles.push(tile);
            }
        }
    }

    getDetectionArea(): void {
        const box = State.ninjaState.collisionDetectionBox;
        this.detectionArea = {
            topLeft: box.position,
            topRight: {
                x: box.position.x + box.dimensions.w,
                y: box.position.y
            },
            bottomLeft: {
                x: box.position.x,
                y: box.position.y - box.dimensions.h
            },
            bottomRight: {
                x: box.position.x + box.dimensions.w,
                y: box.position.y - box.dimensions.h
            }
        };
    }

    getTilesInDetectionArea(): void {
        this.getDetectionArea();
        State.stageState.detectionTiles = [];

        const topLeftY = Math.floor(this.detectionArea.topLeft.y);
        const bottomLeftY = Math.floor(this.detectionArea.bottomLeft.y);
        const topLeftX = Math.floor(this.detectionArea.topLeft.x);
        const topRightX = Math.floor(this.detectionArea.topRight.x);

        for (let row = bottomLeftY + 1; row <= topLeftY + 1; row++) {
            for (let col = topLeftX; col <= topRightX; col++) {
                if (row < 0 || col < 0) { continue; }

                const tile = State.stageState.tiles.get(`${col}-${row}`);
                if (tile && tile.lookupValue !== '00') {
                    State.stageState.detectionTiles.push(tile);
                }
            }
        }
    }
}
