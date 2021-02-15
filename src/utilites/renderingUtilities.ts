import { Point } from '../interfaces/point';
import { Dimensions } from '../interfaces/dimensions';
import { State } from '../states/rootState';
import { GridArea } from '../interfaces/gridArea';
import { Background } from '../objects/background';

/*
 * These utilities are to be used within the rendering engine only
 */
export class RenderingUtilities {

    static setDimensions(minGameDimensions: Dimensions = State.gameState.defaultGridDimensions) {
        this.stopCurrentZoom();

        // when we set the dimensions of the game, determine the pixelsPerUnit conversion for later use
        State.gameState.currentGridDimensions = minGameDimensions;

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

    /**
     *
     * @param newSize
     */
    static zoomDimensionsInOrOut(newSize: number) {
        this.stopCurrentZoom();
        const adjustmentValue = 0.025;
        const zoomDelay = 10;
        const curDim = State.gameState.currentGridDimensions;
        if (Math.abs(curDim.h - newSize) <= adjustmentValue) {
            this.setDimensions({ w: newSize, h: newSize });
            State.gameState.timeoutId = null;
        } else if (curDim.h - newSize > 0) {
            this.setDimensions({ w: curDim.w - adjustmentValue, h: curDim.h - adjustmentValue });
            State.gameState.timeoutId = setTimeout(() => this.zoomDimensionsInOrOut(newSize), zoomDelay);
        } else {
            this.setDimensions({ w: curDim.w + adjustmentValue, h: curDim.h + adjustmentValue });
            State.gameState.timeoutId = setTimeout(() => this.zoomDimensionsInOrOut(newSize), zoomDelay);
        }
    }

    static stopCurrentZoom() {
        if (State.gameState.timeoutId) {
            clearTimeout(State.gameState.timeoutId);
            State.gameState.timeoutId = null;
        }
    }

    static toScreenCoordinates(gameCoords: Point): Point {
        return {
            x: (gameCoords.x - State.gameState.position.x) * State.gameState.pixelsPerUnit,
            y: ((State.gameState.position.y - gameCoords.y) * State.gameState.pixelsPerUnit) + State.gameState.screenPixelDimensions.h
        };
    }

    /**
     * When passing coordinates from the screen or click events, you should use event.clientX and event.clientY.
     */
    static toGameCoordinates({ x: cltX, y: cltY }: Point): Point {
        return {
            x: cltX / State.gameState.pixelsPerUnit + State.gameState.position.x,
            y: -cltY / State.gameState.pixelsPerUnit + State.gameState.position.y + State.gameState.gameUnitDimensions.h
        };
    }

    /**
     * Will return the root of the grid position for rendering imgs in a grid space
     * e.g. { x: 3.86, y: 2.13 } => { x: 3, y: 3}
     */
    static toGameCoordsImgRoot({ x, y }: Point): Point {
        return {
            x: Math.floor(x),
            y: Math.ceil(y)
        };
    }

    static getRegion({ x, y }: Point): string {
        const regionColumn = Math.floor(x / State.stageState.regionSize);
        const regionRow = Math.floor(y / State.stageState.regionSize);
        return `${regionColumn}${State.stageState.colRowSeparator}${regionRow}`;
    }

    static splitRegionString(region: string): string[] {
        return region.split(State.stageState.colRowSeparator);
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

    static gridAxisOfPosition(position: Point): Point {
        const { x, y } = position;
        const gridX = Math.floor(x);
        const gridY = Math.floor(y);
        return { x: gridX, y: gridY };
    }

    static pauseGame(pause: boolean): void {
        State.gameState.paused = pause;
        if (State.gameState.paused) {
            State.gameState.framesPerSecond = 0;
        } else {
            State.gameState.framesPerSecond = State.gameState.defaultFramesPerSecond;
        }
    }

    static cycleFrames(n: number, fps = State.gameState.defaultFramesPerSecond) {
        if (!State.gameState.paused) {
            console.error('Game must be paused to cycle frames');
            return;
        }

        if (n === 0) { return; }
        setTimeout(() => {
            State.gameState.renderingEngine.run();
            this.cycleFrames(n - 1);
        }, 1000 / fps);
    }

    static refreshCanvas(): void {
        State.gameState.canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
    }

    static viewableStageGridArea(): GridArea {
        const { x, y } = State.gameState.position;
        const { w, h } = State.gameState.gameUnitDimensions;
        const topLeftGridUnits = { x, y: y + h };
        const topRightGridUnits = { x: x + w, y: y + h };
        const bottomLeftGridUnits = State.gameState.position;
        const bottomRightGridUnits = { x: x + w, y };

        const viewableGridArea: GridArea = {
            topLeft: topLeftGridUnits,
            topRight: topRightGridUnits,
            bottomLeft: bottomLeftGridUnits,
            bottomRight: bottomRightGridUnits
        };
        return viewableGridArea;
    }

    static async loadImages(images: HTMLImageElement[]) {
        return new Promise((resolve, reject) => {
            for (const img of images) {
                img.onload = () => resolve(img);
                img.onerror = reject;
            }
        });
    }

    static async resizeScreenDimensions() {
        State.gameState.canvas.canvasElement.height = innerHeight;
        State.gameState.canvas.canvasElement.width = innerWidth;
        State.backgroundState.bgCanvas.canvasElement.height = innerHeight;
        State.backgroundState.bgCanvas.canvasElement.width = innerWidth;
        RenderingUtilities.setDimensions(State.gameState.currentGridDimensions);
        Background.draw();
        if (State.gameState.paused && !State.builderState.builderMode) {
            State.gameState.renderingEngine.run();
        }
    }

    static debounce(method: any, scope: any) {
        clearTimeout(method._tId);
        method._tId = setTimeout(() => {
            method.call(scope);
        }, 400);
    }

    /**
     * Center the screen horizontally and 5 units up from the bottom.
     * @param point
     */
    static setScreenPositionFromCenter(point: Point) {
        State.gameState.position = { x: point.x - State.gameState.gameUnitDimensions.w / 2, y: point.y - 5 };
    }

    static stringifyColAndRow(col: number, row: number): string {
        return `${col}${State.stageState.colRowSeparator}${row}`;
    }

}
