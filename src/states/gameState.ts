import { CanvasElement } from '../objects/canvas';
import { Point } from '../interfaces/point';
import { Keys } from '../interfaces/keys';
import { Dimensions } from '../interfaces/dimensions';
import { UpdateObject } from '../interfaces/updateObject';
import { RenderingEngine } from '../engines/renderingEngine';
import { PhysicsEngine } from '../engines/physicsEngine';

export class GameState {
    canvas: CanvasElement;
    assets: UpdateObject[];
    renderingEngine: RenderingEngine;
    physicsEngine: PhysicsEngine;
    keys: Keys;
    defaultFramesPerSecond: number;
    defaultFrameDelay: number;
    defaultGridDimensions: Dimensions;
    currentGridDimensions: Dimensions;
    framesPerSecond: number;
    gameUnit: number;
    screenHeight: number;
    screenWidth: number;
    pixelsPerUnit: number;
    position: Point; // the screen position indicates the coordinates of the center of the view in game coords
    gameUnitDimensions: Dimensions; // d represents the dimensions of the view in game units
    screenPixelDimensions: Dimensions;
    paused: boolean;
    defaultColor: string;
    defaultLineWidth: number;
    timeoutId: NodeJS.Timeout;

    stageId: number;
    stageName: string;
    gameId: number;
    userId: number;

    constructor() {
        this.keys = {
            up: false,
            down: false,
            left: false,
            right: false,
            space: false,
            shift: false
        };
        this.gameUnit = 1;
        this.screenWidth = innerWidth;
        this.screenHeight = innerHeight;
        this.canvas = new CanvasElement(innerWidth, innerHeight, 'canvas-fg');
        this.position = { x: 0, y: 0 };
        this.defaultFramesPerSecond = 60;
        this.defaultFrameDelay = 1000 / this.defaultFramesPerSecond;
        this.defaultGridDimensions = { w: 12, h: 12 };
        this.currentGridDimensions = this.defaultGridDimensions;
        this.framesPerSecond = this.defaultFramesPerSecond;
        this.paused = false;
        this.defaultColor = 'black';
        this.defaultLineWidth = 1;
        this.gameId = 1;
        this.stageId = 1;
        this.userId = 1;
    }
}
