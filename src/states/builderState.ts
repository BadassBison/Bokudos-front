import { BuilderModeEngine } from '../engines/builderModeEngine';
import { Point } from '../interfaces/point';

export class BuilderState {

    builderMode: boolean;
    builderEngine: BuilderModeEngine;
    handleMouseClick: boolean;
    isClicked: boolean;
    shiftClicked: boolean;
    dragging: boolean;
    clickedPosition: Point;
    clickedGridCoords: Point;
    saving: boolean;
    wheelEvtHandler: any;
    wheelSpeedReducer: number;
    cameraSpeed: number;

    builderMenuOpen: boolean;

    tileSelectorOpen: boolean;
    tileSelector?: HTMLElement;
    tileSelectorCheckbox: HTMLInputElement;
    selectedTile: HTMLElement;
    stageName: string;

    removingTiles: boolean;
    removingTilesCheckbox: HTMLInputElement;
    setStartScreen: any;
    showGrid: boolean;
    showRegions: boolean;
    keyListener: (evt: KeyboardEvent) => void;

    constructor() {
        this.builderMode = false;
        this.builderEngine = new BuilderModeEngine();
        this.builderMenuOpen = false;
        this.dragging = false;
        this.tileSelectorOpen = false;
        this.handleMouseClick = false;
        this.removingTiles = false;
        this.shiftClicked = false;
        this.showGrid = false;
        this.showRegions = false;
        this.wheelSpeedReducer = 6;
        this.cameraSpeed = 0.3;
    }

}
