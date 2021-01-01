import { StageTile } from '../objects/stageTile';
import { RegionApiHelpers } from '../http/regionApiHelpers';
import { Region } from '../interfaces/region';
// import { stageOneTileList } from '../stages/stage_1';

export class StageState {

    static readonly regionSize = 100;
    tiles: Map<string, StageTile>;
    regions: string[];
    detectionTiles: StageTile[];
    collisionTiles: StageTile[];

    constructor() {
        this.tiles = new Map();
        this.regions = [];
    }

    // TODO: these methods should not belong in state
    async tilePrep(regionRow: number, regionColumn: number): Promise<void> {
        const region: Region = await RegionApiHelpers.getSpecificRegionForStage(1, regionRow, regionColumn);
        this.regions.push(`${regionColumn}-${regionRow}`);

        this.decodeStageData(region, regionRow, regionColumn);

    }

    async saveStage(): Promise<void> {
        this.regions.forEach((idx: string) => {
            const pos = idx.split('-');
            const regionColumn = Number(pos[0]);
            const regionRow = Number(pos[1]);

            const data = this.encodeStageData(regionRow, regionColumn);

            const region: Region = {
                stageId: 1,
                row: regionRow,
                column: regionColumn,
                data
            };

            RegionApiHelpers.addRegion(region);
        });
    }

    decodeStageData(region: Region, regionRow: number, regionColumn: number) {
        const tileList: string[][] = [];
        region.data.split('n').forEach(row => tileList.push(row.split(',')));

        for (let row = regionRow; row < regionRow + StageState.regionSize; row++) {
            for (let col = regionColumn; col < regionRow + StageState.regionSize; col++) {
                const gridRow = StageState.regionSize - row;
                this.tiles.set(`${col}-${gridRow}`, new StageTile(gridRow, col, tileList[row][col]));
            }
        }
    }

    encodeStageData(regionRow: number, regionColumn: number): string {
        let data = '';

        for (let row = regionRow; row < regionRow + StageState.regionSize; row++) {
            if (data.length !== 0) { data += 'n'; }

            for (let col = regionColumn; col < regionColumn + StageState.regionSize; col++) {
                if (data[data.length - 1] !== 'n' && data.length !== 0) { data += ','; }
                const gridRow = StageState.regionSize - row;
                const tile = this.tiles.get(`${col}-${gridRow}`);
                data += tile ? tile.lookupValue : '0';
            }
        }

        return data;
    }
}
