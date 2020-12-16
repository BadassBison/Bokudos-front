import {Point} from "../interfaces/point";
import {Dimensions} from "../interfaces/dimensions";
import {Line} from "../interfaces/line";

export class GameView {
    private ctx: CanvasRenderingContext2D;
    private pixelsPerUnit: number;

    private p: Point = {x: 0, y: 0}; // the screen position indicates the coordinates of the center of the view in game coords
    private d: Dimensions; // d represents the dimensions of the view in game units
    private view: Dimensions;

    constructor(ctx: CanvasRenderingContext2D, d: Dimensions = {w: 40, h: 20}) {
        this.ctx = ctx;
        this.setDimensions(d);
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
            x: gameCoords.x * this.pixelsPerUnit - this.p.x * this.pixelsPerUnit,
            y: -gameCoords.y * this.pixelsPerUnit + this.p.y * this.pixelsPerUnit + this.view.h
        }
    }

    toGameCoordinates(screenCoords: Point): Point {
        return {
            x: screenCoords.x / this.pixelsPerUnit + this.p.x,
            y: -screenCoords.y / this.pixelsPerUnit + this.p.y + this.d.h
        }
    }

    toPixels(gameLength: number): number {
        return gameLength * this.pixelsPerUnit;
    }

    toUnits(pixels: number): number {
        return pixels / this.pixelsPerUnit;
    }

    isInView(point: Point, dimensions: Dimensions): boolean {
        // if (point.x + dimensions.w > this.p.x - this.d.w / 2 && x
        return false
    }

    /**
     * Check to see where the point lies in regards to the line.
     * @param p Point to be checked against the line
     * @param l Line
     * @return 0 if point is on the line
     *         <0 if point is to the left of the line
     *         >0 if point is to the right of the line
     */
    checkLine(p: Point, l: Line): number {
        return (l.p2.x - l.p1.x) * (p.y - l.p1.y) - (p.x - l.p1.x) * (l.p2.y - l.p1.y)
    }

}
