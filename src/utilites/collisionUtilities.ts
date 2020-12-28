import {Point} from "../interfaces/point";
import {Box} from "../interfaces/box";
import {State} from "../states/rootState";
import {Velocity} from "../interfaces/velocity";
import {StageTile} from "../objects/stageTile";

export class CollisionUtilities {

    /**
     * Given a hitbox and a velocity, return the resulted velocity after colliding with any tiles.
     * @param hitbox hitbox of the moving character or other object
     * @param initialVelocity this contains the vertical and horizontal speed components (dx and dy)
     * @return updated velocity after physics from collided tiles have been applied to the initial velocity
     */
    static collideWithTiles(hitbox: Box, initialVelocity: Velocity): Velocity {
        const velocity = {...initialVelocity}; // create a copy of the velocity so that we can maintain the original

        const topLeft: Point = {...hitbox.position};
        const bottomRight: Point = {
            x: hitbox.position.x + hitbox.dimensions.w,
            y: hitbox.position.y - hitbox.dimensions.h
        };
        const tiles = this.getTilesInDetectionArea(State.ninjaState.collisionDetectionBox);
        let modification: number;

        for (const tile of tiles) {
            // if moving to the right, check tiles to the right of the hitbox
            if (velocity.dx > 0) {
                // check the alignment of the box to ensure its in the same vertical space
                if (this.hasOverlap(bottomRight.y, topLeft.y, tile.row - 1, tile.row)) {
                    // if the box will be moved beyond the tile boundaries, then update the velocity based off of tile physics
                    if (this.hasOverlap(bottomRight.x, bottomRight.x + velocity.dx, tile.col, tile.col + 1)) {
                        modification = (bottomRight.x + velocity.dx - tile.col);
                        // console.log("wall: " + tile.col.toFixed(2));
                        // console.log("New Position: " + (bottomRight.x + velocity.dx).toFixed(2));
                        // console.log("DX Dif: " + modification.toFixed(2));
                        velocity.dx -= modification;
                    }
                }
            } else if (velocity.dx < 0) {
                // check the alignment of the box to ensure its in the same vertical space
                if (this.hasOverlap(bottomRight.y, topLeft.y, tile.row - 1, tile.row)) {
                    // if the box will be moved beyond the tile boundaries, then update the velocity based off of tile physics
                    if (this.hasOverlap(topLeft.x + velocity.dx, topLeft.x, tile.col, tile.col + 1)) {
                        modification = (tile.col + 1) - (topLeft.x + velocity.dx);
                        // console.log("wall: " + (tile.col + 1).toFixed(2));
                        // console.log("New Position: " + (topLeft.x + velocity.dx).toFixed(2));
                        // console.log("DX Dif: " + modification.toFixed(2));
                        velocity.dx += modification;
                    }
                }
            }

            // if moving up, check tiles above the hitbox
            if (velocity.dy > 0) {
                // check the alignment of the box to ensure its in the same horizontal space
                if (this.hasOverlap(topLeft.x, bottomRight.x, tile.col, tile.col + 1)) {
                    // if the box will be moved beyond the tile boundaries, then update the velocity based off of tile physics
                    if (this.hasOverlap(topLeft.y, topLeft.y + velocity.dy, tile.row - 1 , tile.row)) {
                        modification =  topLeft.y + velocity.dy - (tile.row -1);
                        // console.log("wall: " + (tile.row - 1).toFixed(2));
                        // console.log("New Position: " + (topLeft.y + velocity.dy).toFixed(2));
                        // console.log("DX Dif: " + modification.toFixed(2));
                        velocity.dy -= modification;
                    }
                }
            } else if (velocity.dy < 0) {
                // check the alignment of the box to ensure its in the same horizontal space
                if (this.hasOverlap(topLeft.x, bottomRight.x, tile.col, tile.col + 1)) {
                    // if the box will be moved beyond the tile boundaries, then update the velocity based off of tile physics
                    if (this.hasOverlap(bottomRight.y + velocity.dy, bottomRight.y, tile.row - 1 , tile.row)) {
                        modification = (tile.row) - (bottomRight.y + velocity.dy);
                        // console.log("wall: " + tile.row.toFixed(2));
                        // console.log("New Position: " + (bottomRight.y + velocity.dy).toFixed(2));
                        // console.log("DX Dif: " + modification.toFixed(2));
                        velocity.dy += modification;
                        if(Math.abs(velocity.dy) < 0.00001) {
                            velocity.dy = 0;
                        }
                    }
                }
            }
        }

        return velocity;
    }

    /**
     * Check to see if two ranges overlap
     * Requires range a to follow: a1 < a2
     * and range b to follow and b1 < b2
     */
    static hasOverlap(a1: number, a2: number, b1: number, b2: number): boolean {
        return Math.max(a1, b1) < Math.min(a2, b2);
    }

    /**
     * Returns an array of tiles that are within the given box that are not empty tiles.
     * @param box
     */
    static getTilesInDetectionArea(box: Box): StageTile[] {
        const detectionTiles: StageTile[] = [];

        const top = Math.floor(box.position.y);
        const bottom = Math.floor(box.position.y - box.dimensions.h);
        const left = Math.floor(box.position.x);
        const right = Math.floor(box.position.x + box.dimensions.w);

        for (let row = bottom + 1; row <= top + 1; row++) {
            for (let col = left; col <= right; col++) {
                if (row < 0 || col < 0) {
                    continue;
                }
                const tile = State.stageState.tiles.get(`${col}-${row}`);
                if (tile && tile.lookupValue !== '00') {
                    detectionTiles.push(tile);
                }
            }
        }
        return detectionTiles;
    }

}
