import { StageTile } from '../objects/stageTile';
import { RegionApiHelpers } from '../http/regionApiHelpers';
import { RegionDto } from '../interfaces/regionDto';
// import { stageOneTileList } from '../stages/stage_1';

export class StageState {

    tiles: Map<string, StageTile>;
    regions: string[];
    regionSize: number;
    detectionTiles: StageTile[];
    collisionTiles: StageTile[];

    constructor() {
        this.tiles = new Map();
        this.regions = [];
        this.regionSize = 100;
    }
}
