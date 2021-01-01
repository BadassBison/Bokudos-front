import { StageTile } from '../objects/stageTile';
import { APIUtilities } from '../utilites/apiUtilities';
import { Region } from '../interfaces/region';
// import { stageOneTileList } from '../stages/stage_1';

export class StageState {

    tiles: Map<string, StageTile>;
    detectionTiles: StageTile[];
    collisionTiles: StageTile[];

    constructor() {
        this.tiles = new Map();
    }

    async tilePrep(): Promise<void> {
        const stageOne: Region[] = await APIUtilities.getRegionsForStage(1);
        const tileList: string[][] = [];
        stageOne[0].data.split('n').forEach(row => tileList.push(row.split(',')));

        for (let row = 0; row < tileList.length; row++) {
            for (let col = 0; col < tileList[row].length; col++) {
                const gridRow = tileList.length - row;
                this.tiles.set(`${col}-${gridRow}`, new StageTile(gridRow, col, tileList[row][col]));
            }
        }
    }
}
