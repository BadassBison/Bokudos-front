export class DebugState {
    debugMode: boolean;

    constructor(debugMode: boolean = false) {
        this.debugMode = debugMode;
    }

    parseKey(key: string) {
        if (key === 'F9') {
            this.debugMode = !this.debugMode;
        }
    }
}
