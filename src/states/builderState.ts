import { Point } from '../interfaces/point';

export class BuilderState {

    builderMode: boolean;
    tileSelectorOpen: boolean;
    selectedTile: HTMLElement;
    handleMouseClick: boolean;
    clickedPosition: Point;
    clickedGridCoords: Point;
    removingTiles: boolean;

    constructor() {
        this.builderMode = false;
        this.tileSelectorOpen = false;
        this.handleMouseClick = false;
        this.removingTiles = false;
    }

}
