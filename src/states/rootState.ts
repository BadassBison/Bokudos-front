import { GameState } from './gameState';
import { DebugState } from './debugState';
import { StageState } from './stageState';
import { BackgroundState } from './backgroundState';
import { TileSetState } from './tileSetState';
import { BuilderState } from './builderState';
import { PerformanceState } from './performanceState';
import DomState from './domState';

export class State {
    static backgroundState: BackgroundState;
    static builderState: BuilderState;
    static debugState: DebugState;
    static domState: DomState;
    static gameState: GameState;
    static performanceState: PerformanceState;
    static stageState: StageState;
    static tileSetState: TileSetState;

    static async buildState() {
        this.backgroundState = new BackgroundState();
        this.builderState = new BuilderState();
        this.debugState = new DebugState();
        this.domState = new DomState();
        this.gameState = new GameState();
        this.tileSetState = new TileSetState();
        this.stageState = new StageState();
        this.performanceState = new PerformanceState();
    }

    static allStates() {
        return {
            backgroundState: this.backgroundState,
            builderState: this.builderState,
            debugState: this.debugState,
            domState: this.domState,
            gameState: this.gameState,
            tileSetState: this.tileSetState,
            stageState: this.stageState,
            performanceState: this.performanceState
        };
    }

}
