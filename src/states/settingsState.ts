import {DisplayText} from "../objects/displayText";
import {Grid} from "../objects/grid";

export class SettingsState {
    debugMode: boolean = true;
    cursorCoords: DisplayText;
    grid: Grid;

    parseKey(key: string) {
        if (key === 'F9') {
            this.debugMode = !this.debugMode;
        }
    }
}
