import { GameState } from './gameState';
import { DebugState } from './debugState';
import { NinjaState } from './ninjaState';
import { StageState } from './stageState';
import { BackgroundState } from './backgroundState';
import { TileSetState } from './tileSetState';
import { BuilderState } from './builderState';
import { RegionApiHelpers } from '../http/regionApiHelpers';
import { PerformanceState } from './performanceState';

export class State {
    static backgroundState: BackgroundState;
    static builderState: BuilderState;
    static debugState: DebugState;
    static gameState: GameState;
    static ninjaState: NinjaState;
    static performanceState: PerformanceState;
    static stageState: StageState;
    static tileSetState: TileSetState;

    static async BuildState() {
        this.backgroundState = new BackgroundState();
        this.builderState = new BuilderState();
        this.debugState = new DebugState();
        this.gameState = new GameState();
        this.tileSetState = new TileSetState();
        this.ninjaState = new NinjaState();
        this.stageState = new StageState();
        this.performanceState = new PerformanceState();

        await this.fetchData();
    }

    static async fetchData() {
        await RegionApiHelpers.getRegionForStage(this.gameState.stageId, 0, 0);
    }
}
