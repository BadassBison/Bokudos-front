import BuilderMode from '../components/builder/builderMode';
import { BuilderModeEngine } from '../engines/builderModeEngine';
import { Point } from '../interfaces/point';

export class BuilderState {

    builderModeOn: boolean;
    builderModeInstance: BuilderMode;
    builderEngine: BuilderModeEngine;
    handleMouseClick: boolean;
    isClicked: boolean;
    clickedPosition: Point;
    clickedGridCoords: Point;

    builderMenuOpen: boolean;
    tileSelectorOpen: boolean;

    removingTiles: boolean;

    constructor() {
        this.builderModeOn = false;
        this.builderEngine = new BuilderModeEngine();
        this.builderMenuOpen = false;
        this.tileSelectorOpen = false;
        this.handleMouseClick = false;
        this.removingTiles = false;
    }

}
