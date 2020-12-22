import { Point } from '../interfaces/point';
import { Dimensions } from '../interfaces/dimensions';
import { Line } from '../interfaces/line';
import { State } from '../states/rootState';

/*
 * These utilities are to be used within the rendering engine only
 */
export class RenderingUtilities {

    static setDimensions(minGameDimensions: Dimensions = { w: 12, h: 12 }) {
        // when we set the dimensions of the game, determine the pixelsPerUnit conversion for later use
        const dx = innerWidth / minGameDimensions.w;
        const dy = innerHeight / minGameDimensions.h;
        State.gameState.pixelsPerUnit = Math.min(dx, dy);
        State.gameState.gameUnitDimensions = {
            w: innerWidth / State.gameState.pixelsPerUnit,
            h: innerHeight / State.gameState.pixelsPerUnit
        };
        State.gameState.screenPixelDimensions = {
            w: innerWidth,
            h: innerHeight
        };
    }

    static toScreenCoordinates(gameCoords: Point): Point {
        return {
            x: (gameCoords.x - State.gameState.position.x) * State.gameState.pixelsPerUnit,
            y: ((State.gameState.position.y - gameCoords.y) * State.gameState.pixelsPerUnit) + State.gameState.screenPixelDimensions.h
        };
    }

    /**
     * When passing coordinates from the screen or click events, you should use event.clientX and event.clientY.
     * @param screenCoords
     */
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

}
