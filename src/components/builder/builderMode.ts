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
        this.handleMouseClick(evt, State.builderState.isClicked);
    }

    static handleMouseClick(evt: MouseEvent, isClicked: boolean) {
        State.builderState.isClicked = isClicked;
        if (State.builderState.handleMouseClick && isClicked) {
            State.builderState.clickedPosition = RenderingUtilities.toGameCoordinates({ x: evt.clientX, y: evt.clientY });
            State.builderState.clickedGridCoords = RenderingUtilities.toGameCoordsImgRoot(State.builderState.clickedPosition);
            this.checkRegion(State.builderState.clickedGridCoords);
            if (State.builderState.removingTiles) {
                this.deleteTileFromStage();
            } else {
                this.addTileToStage();
            }
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
        console.log('dimDelta', dimDelta);
        State.builderState.cameraSpeed += (dimDelta * 0.03);
        console.log('CameraSpeed', State.builderState.cameraSpeed);
    }

    static closeBuilderMode() {
        if (State.builderState.builderMode) {

            State.builderState.builderMode = false;
            State.builderState.handleMouseClick = false;
            State.builderState.builderEngine.stop();
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

    static addTileToStage() {
        const col = State.builderState.clickedGridCoords.x;
        const row = State.builderState.clickedGridCoords.y;
        const lookUpValue = this.getSelectedTileLookUpValue();

        const gridId = RenderingUtilities.stringifyColAndRow(col, row);
        const stageTile = new StageTile(row, col, lookUpValue);
        State.stageState.tiles.set(gridId, stageTile);
    }

    static deleteTileFromStage() {
        const col = State.builderState.clickedGridCoords.x;
        const row = State.builderState.clickedGridCoords.y;
        const lookUpValue = '00';

        const gridId = RenderingUtilities.stringifyColAndRow(col, row);
        const stageTile = new StageTile(row, col, lookUpValue);
        State.stageState.tiles.set(gridId, stageTile);
    }

    static cleanup() {
        if (State.builderState.builderMode) { this.closeBuilderMode(); }
    }
}
