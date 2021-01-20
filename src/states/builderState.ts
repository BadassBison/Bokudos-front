import { BuilderModeEngine } from '../engines/builderModeEngine';
import { Point } from '../interfaces/point';

export class BuilderState {

    builderMode: boolean;
    builderEngine: BuilderModeEngine;
    handleMouseClick: boolean;
    isClicked: boolean;
    clickedPosition: Point;
    clickedGridCoords: Point;

    builderMenuOpen: boolean;

    tileSelectorOpen: boolean;
    tileSelector?: HTMLElement;
    tileSelectorCheckbox: HTMLInputElement;
    selectedTile: HTMLElement;

    removingTiles: boolean;
    removingTilesCheckbox: HTMLInputElement;

    constructor() {
        this.builderMode = false;
        this.builderEngine = new BuilderModeEngine();
        this.builderMenuOpen = false;
        this.tileSelectorOpen = false;
        this.handleMouseClick = false;
        this.removingTiles = false;
    }

}
