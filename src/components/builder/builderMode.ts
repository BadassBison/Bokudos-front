import RenderingUtilities from '../../utilites/renderingUtilities';
import { State } from '../../states/rootState';
import { BuilderMenu } from './builderMenu';
import { TileBuilder } from './tileBuilder';
import { StageTile } from '../../objects/stageTile';

import component from '../../decorators/component';
import ComponentUtilities from '../../utilites/componentUtilities';

@component()
export default class BuilderMode extends HTMLElement {

    static selector = 'bokudos-builder-mode';
    elementRef: HTMLElement;

    static register() {
        customElements.define(this.selector, this);
    }

    static buildComponent() {
        State.builderState.builderModeInstance = ComponentUtilities.ComponentBuilder<BuilderMode>(this.selector);
    }

    constructor() {
        super();
        this.elementRef = ComponentUtilities.parentInit(this);
        this.startBuilderMode();
        this.addTemplate(this.elementRef);
        this.addStyles(this.elementRef);
    }

    startBuilderMode() {
        State.builderState.builderModeOn = true;
        State.builderState.handleMouseClick = true;
        State.builderState.builderEngine.start();
        RenderingUtilities.zoomDimensionsInOrOut(18);
    }

    addTemplate(element: HTMLElement) {
        // TODO: make menu a component
        BuilderMenu.buildComponent();

        // TODO: make tileBuilder a component
        TileBuilder.openTileSelector();
    }

    addStyles(element: HTMLElement) {}

    handleMouseMove(evt: MouseEvent) {
        this.handleMouseClick(evt, State.builderState.isClicked);
    }

    handleMouseClick(evt: MouseEvent, isClicked: boolean) {
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

    getSelectedTileLookUpValue(): string {
        const tileId = State.domState.builder.selectedTile.id;
        return tileId.split('-')[1];
    }

    addTileToStage() {
        const col = State.builderState.clickedGridCoords.x;
        const row = State.builderState.clickedGridCoords.y;
        const lookUpValue = this.getSelectedTileLookUpValue();

        const gridId = `${col}-${row}`;
        const stageTile = new StageTile(row, col, lookUpValue);
        State.stageState.tiles.set(gridId, stageTile);
    }

    deleteTileFromStage() {
        const col = State.builderState.clickedGridCoords.x;
        const row = State.builderState.clickedGridCoords.y;
        const lookUpValue = '00';

        const gridId = `${col}-${row}`;
        const stageTile = new StageTile(row, col, lookUpValue);
        State.stageState.tiles.set(gridId, stageTile);
    }

    static closeBuilderMode() {
        if (State.builderState.builderModeOn) {

            State.builderState.builderModeOn = false;
            State.builderState.handleMouseClick = false;
            State.builderState.builderEngine.stop();

            // BuilderMenu.removeBuilderMenu();
            // BuilderMenu.deleteTileMode(false);
            TileBuilder.removeTileSelector();

            RenderingUtilities.setDimensions();
        }
    }

    static cleanup() {
        if (State.builderState.builderModeOn) { this.closeBuilderMode(); }
    }
}
