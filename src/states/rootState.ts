import { GameState } from './gameState';
import { DebugState } from './debugState';
import { NinjaState } from './ninjaState';
import { StageState } from './stageState';
import { BackgroundState } from './backgroundState';
import { TileSetState } from './tileSetState';
import { BuilderState } from './builderState';
import { RegionApiHelpers } from '../http/regionApiHelpers';
import { PerformanceState } from './performanceState';
import { EnemyState } from './EnemyState';
import DomState from './domState';

export class State {
    static backgroundState: BackgroundState;
    static builderState: BuilderState;
    static debugState: DebugState;
    static domState: DomState;
    static gameState: GameState;
    static ninjaState: NinjaState;
    static performanceState: PerformanceState;
    static stageState: StageState;
    static tileSetState: TileSetState;
    static enemyState: EnemyState;

    static async buildState() {
        this.backgroundState = new BackgroundState();
        this.builderState = new BuilderState();
        this.debugState = new DebugState();
        this.domState = new DomState();
        this.gameState = new GameState();
        this.tileSetState = new TileSetState();
        this.ninjaState = new NinjaState();
        this.stageState = new StageState();
        this.performanceState = new PerformanceState();
        this.enemyState = new EnemyState();
    }

    static allStates() {
        return {
            backgroundState: this.backgroundState,
            builderState: this.builderState,
            debugState: this.debugState,
            domState: this.domState,
            gameState: this.gameState,
            tileSetState: this.tileSetState,
            ninjaState: this.ninjaState,
            stageState: this.stageState,
            performanceState: this.performanceState,
            enemyState: this.enemyState
        };
    }

}
