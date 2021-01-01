import { GameState } from './gameState';
import { DebugState } from './debugState';
import { NinjaState } from './ninjaState';
import { StageState } from './stageState';
import { BackgroundState } from './backgroundState';
import { TileSetState } from './tileSetState';
import { BuilderState } from './builderState';

export class State {
    static backgroundState: BackgroundState;
    static builderState: BuilderState;
    static debugState: DebugState;
    static gameState: GameState;
    static ninjaState: NinjaState;
    static stageState: StageState;
    static tileSetState: TileSetState;

    static async BuildState() {
        this.backgroundState = new BackgroundState();
        this.builderState = new BuilderState();
        this.debugState = new DebugState();
        this.gameState = new GameState();
        this.ninjaState = new NinjaState();
        await this.ninjaState.loadAssets();
        this.stageState = new StageState();
        await this.stageState.tilePrep();
        this.tileSetState = new TileSetState();
    }
}

// export interface StateInterface {
//     backgroundState: BackgroundState;
//     builderState: BuilderState;
//     debugState: DebugState;
//     gameState: GameState;
//     ninjaState: NinjaState;
//     stageState: StageState;
//     tileSetState: TileSetState;
// }
