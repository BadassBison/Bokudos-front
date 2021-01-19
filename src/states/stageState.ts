import { StageDto } from '../interfaces/stageDto';
import { StageTile } from '../objects/stageTile';

export class StageState {

    tiles: Map<string, StageTile>;
    selectedStage: string;
    selectedStageId: number;
    stages: StageDto[];
    regions: Set<string>;
    regionSize: number;
    detectionTiles: StageTile[];
    collisionTiles: StageTile[];
    defaultStageName: string;
    defaultStageId: number;
    colRowSeparator: string;

    constructor() {
        this.tiles = new Map();
        this.regions = new Set();
        this.regionSize = 100;
        this.defaultStageName = 'Default';
        this.defaultStageId = 1;
        this.colRowSeparator = '|';
    }
}
