import { RenderingUtilities } from '../../utilites/renderingUtilities';
import { State } from '../../states/rootState';
import { DebugMode } from '../../debug/debugMode';
import { BuilderMenu } from './builderMenu';
import { TileBuilder } from './tileBuilder';
import { StageTile } from '../../objects/stageTile';
import { Point } from '../../interfaces/point';

export class BuilderMode {

    static handleMouseMove(evt: MouseEvent) {
        // TODO: add movement with a click and drag
        if(!State.builderState.dragging) {
            this.handleMouseClick(evt, State.builderState.isClicked);
        }
    }

    static handleMouseClick(evt: MouseEvent, isClicked: boolean) {
        if(State.builderState.handleMouseClick && State.builderState.shiftClicked && !State.builderState.isClicked && isClicked) {
            State.builderState.isClicked = isClicked;
            State.builderState.dragging = true;

            State.builderState.clickedPosition = RenderingUtilities.toGameCoordinates({ x: evt.clientX, y: evt.clientY });
            State.builderState.clickedGridCoords = RenderingUtilities.toGameCoordsImgRoot(State.builderState.clickedPosition);
            return;
        } else if(State.builderState.handleMouseClick && State.builderState.dragging && State.builderState.isClicked && !isClicked) {
            State.builderState.isClicked = isClicked;
            State.builderState.shiftClicked = false;
            State.builderState.dragging = false;

            const endPoint = RenderingUtilities.toGameCoordinates({ x: evt.clientX, y: evt.clientY });
            const endGameCoords = RenderingUtilities.toGameCoordsImgRoot(endPoint);

            if(State.builderState.removingTiles || evt.button === 2) {
                this.removeTilesToStage(State.builderState.clickedGridCoords, endGameCoords);
            } else {
                this.addTilesToStage(State.builderState.clickedGridCoords, endGameCoords);
            }
            return;
        }

        State.builderState.isClicked = isClicked;
        if (State.builderState.handleMouseClick && isClicked) {
            State.builderState.clickedPosition = RenderingUtilities.toGameCoordinates({ x: evt.clientX, y: evt.clientY });
            State.builderState.clickedGridCoords = RenderingUtilities.toGameCoordsImgRoot(State.builderState.clickedPosition);
            this.checkRegion(State.builderState.clickedGridCoords);
            if (State.builderState.removingTiles || evt.button === 2) {
                this.deleteTileFromStage(State.builderState.clickedGridCoords);
            } else {
                this.addTileToStage(State.builderState.clickedGridCoords);
            }
        }
    }

    static handleKeyPress(key: string, pressed: boolean) {
        if('Shift' === key) {
            State.builderState.shiftClicked = pressed;
        }
    }

    static checkRegion(coords: Point): void {
        const regionIdx = RenderingUtilities.getRegion(coords);
        if (!State.stageState.regions.has(regionIdx)) {
            State.stageState.regions.add(regionIdx);
        }
    }

    static openBuilderMode() {
        DebugMode.resetState();

        State.builderState.builderMode = true;
        State.builderState.handleMouseClick = true;
        State.builderState.builderEngine.start();

        RenderingUtilities.zoomDimensionsInOrOut(18);
        BuilderMenu.addBuilderMenu();
        TileBuilder.openTileSelector();

        State.builderState.keyListener = (evt: KeyboardEvent) => this.handleKeyPress(evt.key, true);
        document.addEventListener('keydown', State.builderState.keyListener);
        document.addEventListener('keyup', State.builderState.keyListener);

        State.gameState.canvas.canvasElement.addEventListener('mousemove', (evt: MouseEvent) => this.handleMouseMove(evt));
        State.gameState.canvas.canvasElement.addEventListener('mousedown', (evt: MouseEvent) => this.handleMouseClick(evt, true));
        State.gameState.canvas.canvasElement.addEventListener('mouseup', (evt: MouseEvent) => this.handleMouseClick(evt, false));
        State.gameState.canvas.canvasElement.addEventListener('wheel', (evt: WheelEvent) => {
            const { w } = State.gameState.currentGridDimensions;
            const newDimension = w + evt.deltaY / State.builderState.wheelSpeedReducer;
            const adjustedDimension = Math.max(newDimension, State.gameState.minimumDimension);
            this.updateCameraSpeed(adjustedDimension);
            RenderingUtilities.setDimensions({
                w: adjustedDimension,
                h: adjustedDimension
            });
        });
    }

    static updateCameraSpeed(newDim: number): void {
        const currentDim = State.gameState.currentGridDimensions.w;
        const dimDelta = newDim - currentDim;
        State.builderState.cameraSpeed += (dimDelta * 0.03);
    }

    static closeBuilderMode() {
        if (State.builderState.builderMode) {

            State.builderState.builderMode = false;
            State.builderState.handleMouseClick = false;
            State.builderState.builderEngine.stop();

            document.removeEventListener('keydown', State.builderState.keyListener);
            document.removeEventListener('keyup', State.builderState.keyListener);

            State.gameState.canvas.canvasElement.removeEventListener('mousemove', () => console.log('Removing mousemove evt listener'));
            State.gameState.canvas.canvasElement.removeEventListener('mousedown', () => console.log('Removing mousedown evt listener'));
            State.gameState.canvas.canvasElement.removeEventListener('mouseup', () => console.log('Removing mouseup evt listener'));
            State.gameState.canvas.canvasElement.removeEventListener('wheel', () => console.log('Removing wheel evt listener'));

            BuilderMenu.removeBuilderMenu();
            BuilderMenu.deleteTileMode(false);
            TileBuilder.removeTileSelector();

            RenderingUtilities.setDimensions();
        }
    }

    static getSelectedTileLookUpValue(): string {
        const tileId = State.builderState.selectedTile.id;
        return tileId.split('-')[1];
    }

    static addTilesToStage(pointA: Point, pointB: Point) {
        this.updateTilesToStage(pointA, pointB, this.getSelectedTileLookUpValue());
    }

    static removeTilesToStage(pointA: Point, pointB: Point) {
        this.updateTilesToStage(pointA, pointB, '00');
    }

    static updateTilesToStage(pointA: Point, pointB: Point, tileValue: string) {
        for(let col = Math.min(pointA.x, pointB.x); col < Math.max(pointA.x, pointB.x); col++) {
            for(let row = Math.min(pointA.y, pointB.y); row < Math.max(pointA.y, pointB.y); row++) {
                this.updateTile({x: col, y: row}, tileValue);
            }
        }
    }

    static addTileToStage(point: Point) {
        this.updateTile(point, this.getSelectedTileLookUpValue());
    }

    static deleteTileFromStage(point: Point) {
        this.updateTile(point, '00');
    }

    static updateTile(point: Point, tileValue: string) {
        const col = point.x;
        const row = point.y;

        const gridId = RenderingUtilities.stringifyColAndRow(col, row);
        const stageTile = new StageTile(row, col, tileValue);
        State.stageState.tiles.set(gridId, stageTile);
    }

    static cleanup() {
        if (State.builderState.builderMode) { this.closeBuilderMode(); }
    }
}
