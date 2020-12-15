import {Point} from "../interfaces/point";

export class GameView {
    private aspectRatio = 16/9;
    // width:

    private p: Point = {x: 0, y: 0}; // the screen position indicates the coordinates of the center of the view in game coords
    private w: number; // w represents the width of the view in game units
    private h: number; // h represents the height of the view in game units

    constructor(width: number = 20, height: number = 20) {
        this.w = width;
        this.h = height;
    }

    setPosition(position: Point) {
        this.p = {...position};
    }

    getPosition() {
        return {...this.p};
    }

    getDimensions() {
        return {w: this.w, h: this.h};
    }

    convertToScreenCoords(gameCoords: Point) : Point {
        return {
            x: (gameCoords.x + this.w/2 - this.p.x)/this.w * innerWidth,
            y: (this.h/2 -gameCoords.y - this.p.y)/this.h * innerHeight
        }
    }

    convertToGameCoordinates(screenCoords: Point): Point {
        return {
            x: screenCoords.x/innerWidth * this.w + this.p.x - this.w/2,
            y:this.h / 2 - this.p.y - screenCoords.y/innerHeight * this.h
        }
    }

}
