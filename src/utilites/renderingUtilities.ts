import { Point } from '../interfaces/point';
import { Dimensions } from '../interfaces/dimensions';
import { Line } from '../interfaces/line';
import { State } from '../states/rootState';

export class RenderingUtilities {

    static setDimensions(gameUnitDimensions: Dimensions = { w: 22, h: 10 }) {
        State.gameState.gameUnitDimensions = { ...gameUnitDimensions };

        // when we set the dimensions of the game, determine the pixelsPerUnit conversion for later use
        const dx = innerWidth / gameUnitDimensions.w;
        const dy = innerHeight / gameUnitDimensions.h;
        State.gameState.pixelsPerUnit = Math.min(dx, dy);
        State.gameState.screenPixelDimensions = {
            w: gameUnitDimensions.w * State.gameState.pixelsPerUnit,
            h: gameUnitDimensions.h * State.gameState.pixelsPerUnit
        };
    }

    static toScreenCoordinates(gameCoords: Point): Point {
        return {
            x: gameCoords.x * State.gameState.pixelsPerUnit - State.gameState.position.x * State.gameState.pixelsPerUnit,
            y: -gameCoords.y * State.gameState.pixelsPerUnit + State.gameState.position.y * State.gameState.pixelsPerUnit + State.gameState.screenPixelDimensions.h
        };
    }

    static toGameCoordinates(screenCoords: Point): Point {
        return {
            x: screenCoords.x / State.gameState.pixelsPerUnit + State.gameState.position.x,
            y: -screenCoords.y / State.gameState.pixelsPerUnit + State.gameState.position.y + State.gameState.gameUnitDimensions.h
        };
    }

    static toScreenDimensions(gameDimensions: Dimensions): Dimensions {
        return {
            w: this.toPixels(gameDimensions.w),
            h: this.toPixels(gameDimensions.h)
        };
    }

    static toGameDimensions(screenDimensions: Dimensions): Dimensions {
        return {
            w: this.toUnits(screenDimensions.w),
            h: this.toUnits(screenDimensions.h)
        };
    }

    static toPixels(gameLength: number): number {
        return gameLength * State.gameState.pixelsPerUnit;
    }

    static toUnits(pixels: number): number {
        return pixels / State.gameState.pixelsPerUnit;
    }

    static isInView(point: Point, dimensions: Dimensions): boolean {
        // if (point.x + dimensions.w > this.p.x - this.d.w / 2 && x
        return false;
    }

    /**
     * Check to see where the point lies in regards to the line.
     * @param p Point to be checked against the line
     * @param l Line
     * @return 0 if point is on the line
     *         <0 if point is to the left of the line
     *         >0 if point is to the right of the line
     */
    static checkLine(p: Point, l: Line): number {
        return (l.p2.x - l.p1.x) * (p.y - l.p1.y) - (p.x - l.p1.x) * (l.p2.y - l.p1.y);
    }

}
