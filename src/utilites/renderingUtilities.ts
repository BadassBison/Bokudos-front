import { Point } from '../interfaces/point';
import { Dimensions } from '../interfaces/dimensions';
import { State } from '../states/rootState';
import { GridArea } from '../interfaces/gridArea';

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
        State.backgroundState.bgCanvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
    }

    static nodeBuilder(type: string, content: string, classList: string[] = []): HTMLElement {
        const node = document.createElement(type);
        node.innerHTML = content;
        node.classList.add(...classList);

        return node;
    }

    static appendNodeToBody(node: HTMLElement): void {
        const body = document.querySelector('body');
        body.appendChild(node);
    }

    static appendChildNodes(parent: HTMLElement, children: HTMLElement[]): HTMLElement {
        for (const child of children) {
            parent.appendChild(child);
        }

        return parent;
    }

    static viewableStageGridArea(): GridArea {
        const topLeftPixels: Point = { x: 0, y: 0 };
        const topRightPixels: Point = { x: innerWidth, y: 0 };
        const bottomLeftPixels: Point = { x: 0, y: innerHeight };
        const bottomRightPixels: Point = { x: innerWidth, y: innerHeight };

        const topLeftGridUnits = this.toGameCoordinates(topLeftPixels);
        const topRightGridUnits = this.toGameCoordinates(topRightPixels);
        const bottomLeftGridUnits = this.toGameCoordinates(bottomLeftPixels);
        const bottomRightGridUnits = this.toGameCoordinates(bottomRightPixels);

        const viewableGridArea: GridArea = {
            topLeft: topLeftGridUnits,
            topRight: topRightGridUnits,
            bottomLeft: bottomLeftGridUnits,
            bottomRight: bottomRightGridUnits
        };
        return viewableGridArea;
    }

    /**
     * Center the screen horizontally and 5 units up from the bottom.
     * @param point
     */
    static setScreenPositionFromCenter(point: Point) {
        State.gameState.position = { x: point.x - State.gameState.gameUnitDimensions.w / 2, y: point.y - 5 };
    }

}
