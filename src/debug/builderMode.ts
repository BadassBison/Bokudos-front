import { State } from '../states/rootState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { StageTile } from '../objects/stageTile';
import { DebugMode } from './debugMode';
import { RegionApiHelpers } from '../http/regionApiHelpers';
import { RegionDto } from '../interfaces/regionDto';
import { StageApiHelpers } from '../http/stageApiHelpers';
import { StageDto } from '../interfaces/stageDto';
import { MenuOptions } from '../constants/menuOptions';

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
        const builderBtn = RenderingUtilities.nodeBuilder('button', 'Builder', ['button', 'builderBtn']);
        builderBtn.addEventListener('click', () => this.toggleBuilderMode());
        RenderingUtilities.appendNodeToBody(builderBtn);
    }

    static removeBuilderButton() {
        const btn = document.querySelector('.builderBtn');
        if (btn) { btn.remove(); }
    }

    static activateBuilderButton() {
        const btn = document.querySelector('.builderBtn');
        if (btn) { btn.classList.add('active'); }
    }

    static deactivateBuilderButton() {
        const btn = document.querySelector('.builderBtn');
        if (btn) { btn.classList.remove('active'); }
    }

    static toggleBuilderMode() {
        if (State.builderState.builderMode) {
            this.toggleBuilderMenu();
        } else {
            this.openBuilderMode();
        }
    }

    static openBuilderMode() {
        DebugMode.resetState();
        State.builderState.builderMode = true;
        State.builderState.handleMouseClick = true;

        State.builderState.builderEngine.start();
        RenderingUtilities.panDimensionsInOrOut(18);
        this.activateBuilderButton();
        this.addBuilderMenu();
        this.openTileSelector();
    }

    static closeBuilderMode() {
        if (State.builderState.builderMode) {
            State.builderState.builderMode = false;
            State.builderState.builderEngine.stop();
            State.builderState.handleMouseClick = false;

            RenderingUtilities.setDimensions();
            this.deactivateBuilderButton();
            this.removeBuilderMenu();
            this.removeTileSelector();
            this.deleteTileMode(false);
        }
    }

    static addBuilderMenu() {
        State.builderState.builderMenuOpen = true;
        State.builderState.builderMenu = RenderingUtilities.nodeBuilder('content', '<h1 class="title">Builder Menu</h1>', ['builder-mode']);
        this.addPlatformTileOptions(State.builderState.builderMenu);
        RenderingUtilities.appendNodeToBody(State.builderState.builderMenu);
        State.builderState.builderMenu.appendChild(this.addMenuButtons());
    }

    static removeBuilderMenu() {
        State.builderState.builderMenuOpen = false;
        if (State.builderState.builderMenu) {
            State.builderState.builderMenu.remove();
            State.builderState.builderMenu = null;
        }
    }

    static toggleBuilderMenu() {
        if (State.builderState.builderMenuOpen) {
            this.hideBuilderMenu();
        } else {
            this.showBuilderMenu();
        }
    }

    static hideBuilderMenu() {
        State.builderState.builderMenuOpen = false;
        State.builderState.builderMenu.classList.add('hidden');
    }

    static showBuilderMenu() {
        State.builderState.builderMenuOpen = true;
        State.builderState.builderMenu.classList.remove('hidden');
    }

    static addMenuButtons(): HTMLElement {
        const menuButtonWrapper = RenderingUtilities.nodeBuilder('div', '', ['builder--button-wrapper']);
        RenderingUtilities.appendNodeToBody(menuButtonWrapper);

        const saveBtn = RenderingUtilities.nodeBuilder('button', 'Save', ['button', 'builder--saveBtn']);
        saveBtn.addEventListener('click', async () => await this.saveStage());
        menuButtonWrapper.appendChild(saveBtn);

        const publishBtn = RenderingUtilities.nodeBuilder('button', 'Publish', ['button', 'builder--publishBtn']);
        publishBtn.addEventListener('click', async () => await this.publishStage());
        menuButtonWrapper.appendChild(publishBtn);

        return menuButtonWrapper;
    }

    static async saveStage(): Promise<void> {
        console.log('Saving Stage');

        const requests: Promise<RegionDto>[] = [];

        State.stageState.regions.forEach((idx: string) => {
            const pos = idx.split('-');
            const regionColumn = Number(pos[0]);
            const regionRow = Number(pos[1]);
            requests.push(RegionApiHelpers.postRegion(regionRow, regionColumn));
        });
        Promise.all(requests);
    }

    static async publishStage(): Promise<void> {
        console.log('publishing Stage');

        await this.saveStage();

        const stage: StageDto = {
            name: 'Testing stage for publishing',
            stageId: State.gameState.defaultStageId,
            gameId: State.gameState.defaultGameId,
            userId: State.gameState.defaultUserId,
            published: true
        };
        await StageApiHelpers.updateStage(stage);
    }

    static addPlatformTileOptions(builder: HTMLElement): void {
        const wrapper = this.addWrapper(builder, 'Platform Tiles');

        const [option1, checkbox1] = this.addCheckbox('Show Grid');
        this.addShowGridCheckboxHandling(checkbox1 as HTMLInputElement);

        const [option2, checkbox2] = this.addCheckbox('Toggle Tile Selector');
        State.builderState.tileSelectorCheckbox = checkbox2 as HTMLInputElement;
        this.addTileCheckboxHandling(checkbox2);

        const [option3, checkbox3] = this.addCheckbox('Remove Tiles');
        State.builderState.removingTilesCheckbox = checkbox3 as HTMLInputElement;
        this.addDeleteTileCheckboxHandling(checkbox3);

        const [option4, clearButton] = this.addButton('Clear Stage');
        this.addClearStageClickHandling(clearButton);

        const [option5, button1, button2] = this.addButtons('Zoom');
        this.addZoomInClickHandling(button1);
        this.addZoomOutClickHandling(button2);

        RenderingUtilities.appendChildNodes(wrapper, [option1, option2, option3, option4, option5]);
    }

    static addWrapper(parentNode: HTMLElement, category: string = ''): HTMLElement {
        const wrapper = RenderingUtilities.nodeBuilder('div', '', ['wrapper']);
        if (category) {
            const title = RenderingUtilities.nodeBuilder('h3', category);
            wrapper.appendChild(title);
        }
        parentNode.appendChild(wrapper);

        return wrapper;
    }

    static addCheckbox(name: string): HTMLElement[] {
        const label = RenderingUtilities.nodeBuilder('label', `${name}`);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        label.appendChild(checkbox);

        return [label, checkbox];
    }

    static addButton(name: string): HTMLElement[] {
        const label = RenderingUtilities.nodeBuilder('label', `${name}`);
        const button = RenderingUtilities.nodeBuilder('button', `+`);
        label.appendChild(button);

        return [label, button];
    }

    static addButtons(name: string): HTMLElement[] {
        const label = RenderingUtilities.nodeBuilder('label', `${name}`);
        const button1 = RenderingUtilities.nodeBuilder('button', `+`);
        const button2 = RenderingUtilities.nodeBuilder('button', `-`);
        const btnWrapper = RenderingUtilities.nodeBuilder('span', '');
        btnWrapper.appendChild(button1);
        btnWrapper.appendChild(button2);
        label.appendChild(btnWrapper);

        return [label, button1, button2];
    }

    static addTileCheckboxHandling(checkbox: HTMLElement) {
        checkbox.addEventListener('change', () => {
            this.toggleTileSelector();
        });
    }

    static addDeleteTileCheckboxHandling(checkbox: HTMLElement) {
        checkbox.addEventListener('change', () => {
            if (!State.builderState.removingTiles) {
                this.deleteTileMode(true);
            } else {
                this.deleteTileMode(false);
            }
        });
    }

    static addClearStageClickHandling(button: HTMLElement) {
        button.addEventListener('click', () => {
            State.stageState.tiles.forEach((tile: StageTile) => {
                tile.lookupValue = '00';
            });
        });
    }

    static addZoomInClickHandling(button: HTMLElement) {
        button.addEventListener('click', () => {
            const { w, h } = State.gameState.currentGridDimensions;
            RenderingUtilities.setDimensions({ w: w - 1, h: h - 1 });
        });
    }

    static addZoomOutClickHandling(button: HTMLElement) {
        button.addEventListener('click', () => {
            const { w, h } = State.gameState.currentGridDimensions;
            RenderingUtilities.setDimensions({ w: w + 1, h: h + 1 });
        });
    }

    static addShowGridCheckboxHandling(checkbox: HTMLInputElement) {
        checkbox.checked = State.debugState.menuOptions[MenuOptions.GRID].enabled;

        checkbox.addEventListener('change', () => {
            State.debugState.menuOptions[MenuOptions.GRID].enabled = checkbox.checked;
        });
    }

    static openTileSelector(): void {
        State.builderState.tileSelectorOpen = true;
        State.builderState.tileSelectorCheckbox.checked = State.builderState.tileSelectorOpen;
        State.builderState.tileSelector = RenderingUtilities.nodeBuilder('content', '<h1 class="title">Tile Selector</h1>', ['builder--tile-selector']);
        this.addTiles(State.builderState.tileSelector);

        RenderingUtilities.appendNodeToBody(State.builderState.tileSelector);
    }

    static removeTileSelector() {
        if (State.builderState.tileSelector) {
            State.builderState.tileSelector.remove();
            State.builderState.tileSelector = null;
            State.builderState.tileSelectorOpen = false;
            State.builderState.tileSelectorCheckbox = null;
        }
    }

    static toggleTileSelector(): void {
        if (State.builderState.tileSelectorOpen) {
            State.builderState.tileSelector.classList.add('hidden');
            State.builderState.tileSelectorOpen = false;
        } else {
            State.builderState.tileSelector.classList.remove('hidden');
            State.builderState.tileSelectorOpen = true;
        }
        State.builderState.tileSelectorCheckbox.checked = State.builderState.tileSelectorOpen;
    }

    static addTiles(tileSelector: HTMLElement) {
        let imgRowWrapper: HTMLElement;
        for (let i = 1; i <= 18; i++) {
            const img = State.tileSetState.imageMap.get(i);
            img.classList.add('builder--tile-image');
            img.addEventListener('click', (evt: MouseEvent) => this.selectedTile(evt));
            img.id = `img-${i}`;
            img.alt = `Tile image ${i}`;

            if (i % 3 === 1) {
                imgRowWrapper = document.createElement('div');
                imgRowWrapper.classList.add('tile-selector-img-row');
                tileSelector.appendChild(imgRowWrapper);
            }
            imgRowWrapper.appendChild(img);
        }
        this.setActiveTile(State.tileSetState.imageMap.get(1));
    }

    static getSelectedTileLookUpValue(tile: HTMLElement): string {
        const tileId = State.builderState.selectedTile.id;
        return tileId.split('-')[1];
    }

    static setActiveTile(tile: HTMLElement): void {
        if (State.builderState.selectedTile) {
            State.builderState.selectedTile.classList.remove('active');
        }
        tile.classList.add('active');
        State.builderState.selectedTile = tile;
    }

    static selectedTile(evt: MouseEvent) {
        this.setActiveTile(evt.currentTarget as HTMLElement);
    }

    static addTileToStage() {
        const col = State.builderState.clickedGridCoords.x;
        const row = State.builderState.clickedGridCoords.y;
        const lookUpValue = this.getSelectedTileLookUpValue(State.builderState.selectedTile);

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

    static deleteTileMode(enabled: boolean) {
        State.builderState.removingTiles = enabled;
        const canvas = document.querySelector('#canvas-fg');
        if (enabled) {
            canvas.classList.add('removing-tiles');
        } else {
            canvas.classList.remove('removing-tiles');
        }
    }

    static cleanup() {
        if (State.builderState.builderMode) { this.closeBuilderMode(); }
        this.removeBuilderButton();
    }
}
