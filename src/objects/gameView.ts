import {Point} from "../interfaces/point";
import {Dimensions} from "../interfaces/dimensions";

export class GameView {
    private ctx: CanvasRenderingContext2D;
    private pixelsPerUnit: number;

    private p: Point = {x: 0, y: 0}; // the screen position indicates the coordinates of the center of the view in game coords
    private d: Dimensions; // d represents the dimensions of the view in game units
    private view: Dimensions;

    constructor(ctx: CanvasRenderingContext2D, d: Dimensions = {w: 40, h: 20}) {
        this.ctx = ctx;
        this.setDimensions(d);

        // Set the screen starting position at the bottom left of the screen so that we can start building the level from (0,0)
        this.setPosition({x:this.d.w/2, y:this.d.h/2});
    }

    setPosition(position: Point) {
        this.p = {...position};
    }

    getPosition() {
        return {...this.p};
    }

    getDimensions(): Dimensions {
        return {...this.d};
    }

    setDimensions(d: Dimensions) {
        this.d = {...d};

        // when we set the dimensions of the game, determine the pixelsPerUnit conversion for later use
        const dx = innerWidth / this.d.w;
        const dy = innerHeight / this.d.h;
        this.pixelsPerUnit = Math.min(dx, dy);
        this.view = {
            w: this.d.w * this.pixelsPerUnit,
            h: this.d.h * this.pixelsPerUnit
        };
    }

    getView() {
        return {...this.view};
    }

    toScreenCoordinates(gameCoords: Point): Point {
        return {
            x: gameCoords.x * this.pixelsPerUnit + this.view.w / 2 - this.p.x * this.pixelsPerUnit,
            y: -gameCoords.y * this.pixelsPerUnit + this.p.y * this.pixelsPerUnit + this.view.h / 2
        }
    }

    toGameCoordinates(screenCoords: Point): Point {
        return {
            x: screenCoords.x / this.pixelsPerUnit + this.p.x - this.d.w / 2,
            y: -screenCoords.y / this.pixelsPerUnit + this.p.y + this.d.h / 2
        }
    }

    toPixels(gameLength: number) {
        return gameLength * this.pixelsPerUnit;
    }

    toUnits(pixels: number) {
        return pixels / this.pixelsPerUnit;
    }

}
