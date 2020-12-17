import { DisplayText } from '../objects/displayText';
import { Grid } from '../objects/grid';

export class DebugState {
    debugMode: boolean;
    cursorCoords: DisplayText;
    grid: Grid;

    constructor(debugMode: boolean = true) {
        this.debugMode = debugMode;
        this.cursorCoords = new DisplayText();
        new Grid()
    }

    parseKey(key: string) {
        if (key === 'F9') {
            this.debugMode = !this.debugMode;
        }
    }
}
