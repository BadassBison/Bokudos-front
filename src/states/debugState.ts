import {Point} from '../interfaces/point';

export class DebugState {
    debugMode: boolean;
    hasMenuBtn: boolean;
    menuOpen: boolean;
    clickedPosition: Point;

    defaultColor: string;
    defaultLineWidth: number;

    gridEnabled: boolean;
    gridColor: string;
    gridLineWidth: number;

    gridCoordsEnabled: boolean;
    gridCoordsColor: string;
    gridCoordsFont: string;

    screenEdgeEnabled: boolean;
    screenEdgeColor: string;
    screenEdgeLineWidth: number;

    tileOutlinesEnabled: boolean;
    tileOutlinesColor: string;
    tileOutlinesLineWidth: number;

    collisionDetectionBoxEnabled: boolean;
    collisionDetectionBoxColor: string;
    collisionDetectionBoxLineWidth: number;

    hitboxEnabled: boolean;
    hitboxColor: string;
    hitboxLineWidth: number;

    ninjaGridOutlinesEnabled: boolean;
    ninjaGridOutlinesColor: string;
    ninjaGridOutlinesLineWidth: number;

    collisionsOutlinesEnabled: boolean;
    collisionsOutlinesColor: string;
    collisionsOutlinesLineWidth: number;

    boxAtClickColor: string;
    boxAtClickLineWidth: number;

    handleMouseMove: boolean;
    handleMouseClick: boolean;

    constructor(debugMode: boolean = false) {
        this.debugMode = debugMode;
        this.hasMenuBtn = debugMode;
        this.menuOpen = false;
        this.defaultColor = 'black';
        this.defaultLineWidth = 1;

        this.gridEnabled = false;
        this.gridColor = 'black';
        this.gridLineWidth = 1;

        this.gridCoordsEnabled = false;
        this.gridCoordsColor = 'black';
        this.gridCoordsFont = '12px serif';

        this.screenEdgeEnabled = false;
        this.screenEdgeColor = 'blue';
        this.screenEdgeLineWidth = 1;

        this.tileOutlinesEnabled = false;
        this.tileOutlinesColor = 'yellow';
        this.tileOutlinesLineWidth = 4;

        this.collisionDetectionBoxEnabled = false;
        this.collisionDetectionBoxColor = 'red';
        this.collisionDetectionBoxLineWidth = 4;

        this.hitboxEnabled = false;
        this.hitboxColor = 'white';
        this.hitboxLineWidth = 4;

        this.ninjaGridOutlinesEnabled = false;
        this.ninjaGridOutlinesColor = 'orange';
        this.ninjaGridOutlinesLineWidth = 2;

        this.collisionsOutlinesEnabled = false;
        this.collisionsOutlinesColor = 'purple';
        this.collisionsOutlinesLineWidth = 8;

        this.handleMouseMove = false;
        this.handleMouseClick = false;
    }
}
