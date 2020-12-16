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

        // console.log("p: " + this.p.x + ", " + this.p.y);
        // console.log("d: " + this.d.w + ", " + this.d.h);
        // console.log("v: " + this.view.w + ", " + this.view.h);
        //
        // console.log('Testing Screen Conversions:');
        // this.testToScreen({x: 0, y: 0});
        // this.testToScreen({x: -5, y: 0});
        // this.testToScreen({x: 5, y: 0});
        // this.testToScreen({x: 5, y: 5});
        // this.testToScreen({x: 5, y: -5});
        // this.testToScreen({x: -5, y: -5});
        // this.testToScreen({x: 0, y: -5});
        //
        // console.log('Testing Game Conversions:');
        // this.testToGame({x: 500, y: 250});
        // this.testToGame({x: 500, y: 125});
        // this.testToGame({x: 375, y: 125});
        // this.testToGame({x: 625, y: 125});
        // this.testToGame({x: 625, y: 0});
        // this.testToGame({x: 625, y: 250});
        // this.testToGame({x: 375, y: 250});
        // this.testToGame({x: 500, y: 250});
    }

    testToGame(screenPoint: Point) {
        const gamePoint = this.convertToGameCoordinates(screenPoint);
        // console.log(screenPoint.x + ", " + screenPoint.y + " ---> " + gamePoint.x + ", " + gamePoint.y);
    }

    testToScreen(gamePoint: Point) {
        const screenPoint = this.convertToScreenCoords(gamePoint);
        // console.log(gamePoint.x + ", " + gamePoint.y + " ---> " + screenPoint.x + ", " + screenPoint.y);
    }

    setPosition(position: Point) {
        this.p = {...position};
        // console.log("New Game Position is: " + this.p.x.toFixed(2) + ", " + this.p.y.toFixed(2));

        const center = this.convertToScreenCoords(position);
        // console.log("p: " + this.p.x.toFixed(2) + ", " + this.p.y.toFixed(2));
        // console.log("center: " + center.x.toFixed(2) + ", " + center.y.toFixed(2));
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
        this.pixelsPerUnit = Math.min(dx, dy);
        this.view = {
            w: this.d.w * this.pixelsPerUnit,
            h: this.d.h * this.pixelsPerUnit
        };
        // console.log("Pixels Per Unit: " + this.pixelsPerUnit);
        // console.log("Game View: " + this.view.w + " x " + this.view.h);
    }

    getView() {
        return {...this.view};
    }

    convertToScreenCoords(gameCoords: Point): Point {
        return {
            x: gameCoords.x * this.pixelsPerUnit + this.view.w / 2 - this.p.x * this.pixelsPerUnit,
            y: -gameCoords.y * this.pixelsPerUnit + this.p.y * this.pixelsPerUnit + this.view.h / 2
        }
    }

    convertToGameCoordinates(screenCoords: Point): Point {
        return {
            x: screenCoords.x / this.pixelsPerUnit + this.p.x - this.d.w / 2,
            y: -screenCoords.y / this.pixelsPerUnit + this.p.y + this.d.h / 2
        }
    }

}
