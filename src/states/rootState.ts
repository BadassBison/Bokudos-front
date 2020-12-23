import { GameState } from './gameState';
import { DebugState } from './debugState';
import { NinjaState } from './ninjaState';
import { StageState } from './stageState';
import { BackgroundState } from './backgroundState';

/*
 * This state is a global object. The parent of the state should only mutate its state and no other
 */
export const State: StateInterface = {
    backgroundState: new BackgroundState(),
    debugState: new DebugState(),
    gameState: new GameState(),
    ninjaState: new NinjaState(),
    stageState: new StageState()
};

export interface StateInterface {
    backgroundState: BackgroundState;
    debugState: DebugState;
    gameState: GameState;
    ninjaState: NinjaState;
    stageState: StageState;
}
