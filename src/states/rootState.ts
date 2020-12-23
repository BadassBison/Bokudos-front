import { GameState } from './gameState';
import { DebugState } from './debugState';
import { NinjaState } from './ninjaState';
import { StageState } from './stageState';
import { BackgroundState } from './backgroundState';
import { TileSetState } from './tileSetState';
import { BuilderState } from './builderState';

/*
 * This state is a global object. The parent of the state should only mutate its state and no other
 */
export const State: StateInterface = {
    backgroundState: new BackgroundState(),
    builderState: new BuilderState(),
    debugState: new DebugState(),
    gameState: new GameState(),
    ninjaState: new NinjaState(),
    stageState: new StageState(),
    tileSetState: new TileSetState()
};

export interface StateInterface {
    backgroundState: BackgroundState;
    builderState: BuilderState;
    debugState: DebugState;
    gameState: GameState;
    ninjaState: NinjaState;
    stageState: StageState;
    tileSetState: TileSetState;
}
