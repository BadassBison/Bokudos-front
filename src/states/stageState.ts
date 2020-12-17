import { Platforms } from '../objects/platforms';
import { StageTile } from '../objects/stageTile';

export class StageState {

    platforms: Platforms;
    tiles: Map<string, StageTile>;

    constructor(tileList: string[][]) {
        this.platforms = new Platforms();

        this.tiles = new Map();
        for (let row = 0; row < tileList.length; row++) {
            for (let col = 0; col < tileList[row].length; col++) {
                this.tiles.set(`${row}${col}`, new StageTile(tileList.length - row, col, tileList[row][col]));
            }
        }
    }
}
