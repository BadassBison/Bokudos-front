import { State } from '../states/rootState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { DebugMenu } from './debugMenu';
import { StageTile } from '../objects/stageTile';

export class BuilderMode {

    static handleMouseClick(evt: MouseEvent) {
        if (State.builderState.handleMouseClick) {
            State.builderState.clickedPosition = RenderingUtilities.toGameCoordinates({ x: evt.clientX, y: evt.clientY });
            State.builderState.clickedGridCoords = RenderingUtilities.toGameCoordsImgRoot(State.builderState.clickedPosition);
            if (State.builderState.removingTiles) {
                this.removeTileFromStage();
            } else {
                this.addTileToStage();
            }
        }
    }

    static addBuilderButton() {
        const builderBtn = document.createElement('button');
        builderBtn.classList.add('button', 'builderBtn');
        builderBtn.innerHTML = 'Builder';
        builderBtn.addEventListener('click', () => this.toggleBuilder());
        builderBtn.addEventListener('mouseenter', () => {
            State.builderState.handleMouseClick = false;
        });
        builderBtn.addEventListener('mouseleave', () => {
            if (State.builderState.tileSelectorOpen || State.builderState.removingTiles) {
                State.builderState.handleMouseClick = true;
            }
        });

        const body = document.querySelector('body');
        body.appendChild(builderBtn);
    }

    static removeBuilderButton() {
        const btn = document.querySelector('.builderBtn');
        btn.remove();
    }

    static toggleBuilder() {
        if (State.builderState.builderMode) {
            this.closeBuilderMode();
        } else {
            this.openBuilderMode();
        }
    }

    static openBuilderMode() {
        if (State.debugState.menuOpen) {
            DebugMenu.removeMenu();
        }
        State.builderState.builderMode = true;

        const btn = document.querySelector('.builderBtn');
        btn.classList.add('active');

        const builder = document.createElement('content');
        builder.classList.add('builder-mode');
        builder.innerHTML = '<h1 class="title">Builder Mode</h1>';
        this.addBuilderOptions(builder);
        const body = document.querySelector('body');
        body.appendChild(builder);

        builder.addEventListener('mouseenter', () => {
            State.builderState.handleMouseClick = false;
        });
        builder.addEventListener('mouseleave', () => {
            if (State.builderState.tileSelectorOpen || State.builderState.removingTiles) {
                State.builderState.handleMouseClick = true;
            }
        });
    }

    static closeBuilderMode() {
        State.builderState.builderMode = false;
        State.builderState.handleMouseClick = false;
        State.builderState.removingTiles = false;

        const btn = document.querySelector('.builderBtn');
        btn.classList.remove('active');

        const builderMode = document.querySelector('.builder-mode');
        builderMode.remove();

        if (State.builderState.tileSelectorOpen) {
            this.closeTileSelector();
        }
    }

    static addBuilderOptions(builder: HTMLElement) {
        this.addBuilderOption(builder, 'Platform Tiles', ['Add Tiles', 'Remove Tiles']);
    }

    static addBuilderOption(builder: HTMLElement, category: string, optionNames: string[]) {
        const wrapper = this.addWrapper(category);
        const button1 = this.addButton(optionNames[0]);
        this.addTileClickHandling(button1.childNodes);
        const button2 = this.addButton(optionNames[1]);
        this.removeTileClickHandling(button2.childNodes);
        wrapper.appendChild(button1);
        wrapper.appendChild(button2);
        builder.appendChild(wrapper);

        return builder;
    }

    static addWrapper(category: string): HTMLElement {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        const title = document.createElement('h3');
        title.innerText = category;
        wrapper.appendChild(title);

        return wrapper;
    }

    static addButton(name: string): HTMLElement {
        const label = document.createElement('label');
        label.innerHTML = `${name} &nbsp;`;

        const button = document.createElement('button');
        button.innerHTML = '+';

        label.appendChild(button);

        return label;
    }

    static addTileClickHandling(children: NodeListOf<ChildNode>) {
        children.forEach((button: HTMLElement) => {
            button.addEventListener('click', () => {
                if (!State.builderState.tileSelectorOpen) {
                    this.openTileSelector();
                    this.removeTileMode(false);
                    State.builderState.removingTiles = false;
                } else {
                    this.closeTileSelector();
                }
            });
        });
    }

    static removeTileClickHandling(children: NodeListOf<ChildNode>) {
        children.forEach((button: HTMLElement) => {
            button.addEventListener('click', () => {
                if (!State.builderState.removingTiles) {
                    this.removeTileMode(true);
                    this.closeTileSelector();
                } else {
                    this.removeTileMode(false);
                }
            });
        });
    }

    static openTileSelector() {
        State.builderState.tileSelectorOpen = true;

        const tileSelector = document.createElement('content');
        tileSelector.classList.add('builder--tile-selector');
        tileSelector.innerHTML = '<h1 class="title">Tile Selector</h1>';
        this.addTiles(tileSelector);
        const body = document.querySelector('body');
        body.appendChild(tileSelector);

        tileSelector.addEventListener('mouseenter', () => {
            State.builderState.handleMouseClick = false;
        });
        tileSelector.addEventListener('mouseleave', () => {
            State.builderState.handleMouseClick = true;
        });
    }

    static closeTileSelector() {
        if (State.builderState.tileSelectorOpen) {
            State.builderState.tileSelectorOpen = false;

            const tileSelector = document.querySelector('.builder--tile-selector');
            tileSelector.remove();
        }
    }

    static addTiles(tileSelector: HTMLElement) {
        for (let i = 1; i <= 18; i++) {
            const img = State.tileSetState.imageMap.get(i);
            img.classList.add('builder--tile-image');
            img.addEventListener('click', (evt: MouseEvent) => this.selectedTile(evt));
            img.id = `img-${i}`;
            tileSelector.appendChild(img);
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

    static removeTileFromStage() {
        const col = State.builderState.clickedGridCoords.x;
        const row = State.builderState.clickedGridCoords.y;
        const lookUpValue = '00';

        const gridId = `${col}-${row}`;
        const stageTile = new StageTile(row, col, lookUpValue);
        State.stageState.tiles.set(gridId, stageTile);
    }

    static removeTileMode(enabled: boolean) {
        State.builderState.removingTiles = enabled;
        const canvas = document.querySelector('#canvas-fg');
        if (enabled) {
            canvas.classList.add('removing-tiles');
        } else {
            canvas.classList.remove('removing-tiles');
        }
    }

    static cleanup() {
        State.builderState.builderMode = false;
        State.builderState.handleMouseClick = false;
        State.builderState.removingTiles = false;
        this.removeBuilderButton();
        this.closeTileSelector();
    }
}
