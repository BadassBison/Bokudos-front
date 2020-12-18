import { DisplayText } from '../objects/displayText';
import { DebugGrid } from '../objects/debugGrid';

export class DebugState {
    debugMode: boolean;
    cursorCoords: DisplayText;
    grid: DebugGrid;

    constructor(debugMode: boolean = true) {
        this.debugMode = debugMode;
        this.cursorCoords = new DisplayText();
        new DebugGrid()
    }

    parseKey(key: string) {
        if (key === 'F9') {
            this.debugMode = !this.debugMode;
        }
    }
}
