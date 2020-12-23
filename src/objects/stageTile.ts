export class StageTile {
    row: number;
    col: number;
    lookupValue: string;
    collision: boolean;

    constructor(row: number, col: number, lookupValue: string) {
        this.row = row;
        this.col = col;
        this.lookupValue = lookupValue;
        this.collision = false;
    }
}
