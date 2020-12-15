import {Point} from "../interfaces/point";
import {Dimensions} from "../interfaces/dimensions";

export class GameView {
    private ctx: CanvasRenderingContext2D;
    private aspectRatio: number;

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

        // when we set the dimensions of the game, we also need to update the view so that we ensure to display the entire game
        const dx = innerWidth / this.d.w;
        const dy = innerHeight / this.d.h;
        this.aspectRatio = Math.min(dx, dy);
        this.view = {
            w: this.d.w * this.aspectRatio,
            h: this.d.h * this.aspectRatio
        }
    }

    convertToScreenCoords(gameCoords: Point): Point {
        return {
            x: (gameCoords.x + this.d.w / 2 - this.p.x) / this.d.w * this.view.w,
            y: (this.d.h / 2 - gameCoords.y - this.p.y) / this.d.h * this.view.h
        }
    }

    convertToGameCoordinates(screenCoords: Point): Point {
        return {
            x: screenCoords.x / this.view.w * this.d.w + this.p.x - this.d.w / 2,
            y: this.d.h / 2 - this.p.y - screenCoords.y / this.view.h * this.d.h
        }
    }

}
