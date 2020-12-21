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
    gameUnit: number;
    screenHeight: number;
    screenWidth: number;
    pixelsPerUnit: number;
    position: Point; // the screen position indicates the coordinates of the center of the view in game coords
    gameUnitDimensions: Dimensions; // d represents the dimensions of the view in game units
    screenPixelDimensions: Dimensions;

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
        this.canvas = new CanvasElement(innerWidth, innerHeight);
        this.position = { x: 0, y: 0 };
    }
}
