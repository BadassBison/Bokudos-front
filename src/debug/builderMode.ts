import { RenderingUtilities } from '../utilites/renderingUtilities';
import { State } from '../states/rootState';
import { DebugMode } from './debugMode';
import { BuilderButton } from './components/builder/builderButton';
import { BuilderMenu } from './components/builder/builderMenu';
import { TileBuilder } from './components/builder/tileBuilder';
import { StageTile } from '../objects/stageTile';

export class BuilderMode {

    static handleMouseMove(evt: MouseEvent) {
        this.handleMouseClick(evt, State.builderState.isClicked);
    }

    static handleMouseClick(evt: MouseEvent, isClicked: boolean) {
        State.builderState.isClicked = isClicked;
        if (State.builderState.handleMouseClick && isClicked) {
            State.builderState.clickedPosition = RenderingUtilities.toGameCoordinates({ x: evt.clientX, y: evt.clientY });
            State.builderState.clickedGridCoords = RenderingUtilities.toGameCoordsImgRoot(State.builderState.clickedPosition);
            if (State.builderState.removingTiles) {
                this.deleteTileFromStage();
            } else {
                this.addTileToStage();
            }
        }
    }

    static addBuilderButton() {
        BuilderButton.init(this.toggleBuilderMode);
    }

    static toggleBuilderMode() {
        if (State.builderState.builderMode) {
            BuilderMenu.toggleBuilderMenu();
        } else {
            BuilderMode.openBuilderMode();
        }
    }

    static openBuilderMode() {
        DebugMode.resetState();

        State.builderState.builderMode = true;
        State.builderState.handleMouseClick = true;
        State.builderState.builderEngine.start();

        RenderingUtilities.zoomDimensionsInOrOut(18);
        BuilderButton.activateBuilderButton();
        BuilderMenu.addBuilderMenu();
        TileBuilder.openTileSelector();
    }

    static closeBuilderMode() {
        if (State.builderState.builderMode) {

            State.builderState.builderMode = false;
            State.builderState.handleMouseClick = false;
            State.builderState.builderEngine.stop();

            BuilderButton.deactivateBuilderButton();
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

        const gridId = `${col}-${row}`;
        const stageTile = new StageTile(row, col, lookUpValue);
        State.stageState.tiles.set(gridId, stageTile);
    }

    static deleteTileFromStage() {
        const col = State.builderState.clickedGridCoords.x;
        const row = State.builderState.clickedGridCoords.y;
        const lookUpValue = '00';

        const gridId = `${col}-${row}`;
        const stageTile = new StageTile(row, col, lookUpValue);
        State.stageState.tiles.set(gridId, stageTile);
    }

    static cleanup() {
        if (State.builderState.builderMode) { this.closeBuilderMode(); }
        BuilderButton.removeBuilderButton();
    }
}
