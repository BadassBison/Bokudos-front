import { StageTile } from '../objects/stageTile';
import { stageOneTileList } from '../stages/stage_1';

export class StageState {

    tiles: Map<string, StageTile>;
    detectionTiles: StageTile[];
    collisionTiles: StageTile[];

    constructor() {
        this.tiles = new Map();
        for (let row = 0; row < stageOneTileList.length; row++) {
            for (let col = 0; col < stageOneTileList[row].length; col++) {
                const gridRow = stageOneTileList.length - row;
                this.tiles.set(`${col}-${gridRow}`, new StageTile(gridRow, col, stageOneTileList[row][col]));
            }
        }
    }
}
