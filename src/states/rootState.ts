import { GameState } from './gameState';
import { DebugState } from './debugState';
import { NinjaState } from './ninjaState';
import { StageState } from './stageState';
import { BackgroundState } from './backgroundState';

export const State: StateInterface = {
    backgroundState: new BackgroundState(innerWidth, innerHeight),
    debugState: new DebugState(),
    gameState: new GameState(innerWidth, innerHeight),
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
