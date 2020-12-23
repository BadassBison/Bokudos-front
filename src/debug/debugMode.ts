import { State } from '../states/rootState';
import { DebugMenu } from './debugMenu';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { StageTile } from '../objects/stageTile';
import { MenuOptions } from '../constants/menuOptions';
import { BuilderMode } from './builderMode';

export class DebugMode {

    static draw() {
        if (State.debugState.debugMode) {
            if (!State.debugState.hasButtons) {
                DebugMenu.addMenuButton();
                BuilderMode.addBuilderButton();
            }
            const position = State.gameState.position;
            const gameUnitDimensions = State.gameState.gameUnitDimensions;

            if (State.debugState.menuOptions[MenuOptions.GRID].enabled) {
                const startingRow = Math.floor(position.y);
                const endingRow = Math.ceil(position.y + gameUnitDimensions.h);
                const startingCol = Math.floor(position.x);
                const endingCol = Math.floor(position.x + gameUnitDimensions.w);

                for (let row = startingRow; row <= endingRow; row++) {
                    for (let col = startingCol; col <= endingCol; col++) {
                        this.drawGrid(row, col);
                        this.drawGridCoords(row, col);
                    }
                }
            }

            this.drawScreenEdge();
            this.drawDetectedTileOutlines();
            this.drawCollisionDetectionBox();
            this.drawHitbox();
            this.drawCollisionsOutlines();
            this.drawNinjaGridOutlines();
            // if (State.builderState.clickedPosition) {
            //     BuilderMode.drawTileAtClickedPosition();
            // }
            this.resetCtx();
        } else if (State.debugState.hasButtons) {
            this.debugModeCleanUp();
        }
    }

    static drawGrid(row: number, col: number) {
        State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.GRID].color;
        State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.GRID].lineWidth;

        const position = RenderingUtilities.toScreenCoordinates({ x: col, y: row });
        State.gameState.canvas.ctx.strokeRect(
            position.x,
            position.y,
            RenderingUtilities.toPixels(1),
            RenderingUtilities.toPixels(1)
        );
    }

    static drawGridCoords(row: number, col: number) {
        if (State.debugState.menuOptions[MenuOptions.COORDINATES].enabled) {
            State.gameState.canvas.ctx.fillStyle = State.debugState.menuOptions[MenuOptions.COORDINATES].color;
            State.gameState.canvas.ctx.font = State.debugState.menuOptions[MenuOptions.COORDINATES].font;

            const { x, y } = RenderingUtilities.toScreenCoordinates({ x: col, y: row });
            const pixelOffset = 4;
            State.gameState.canvas.ctx.fillText(`(${col}, ${row})`, x + pixelOffset, y - pixelOffset);
        }
    }

    static drawScreenEdge() {
        if (State.debugState.menuOptions[MenuOptions.SCREEN_EDGE].enabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.SCREEN_EDGE].color;
            State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.SCREEN_EDGE].lineWidth;

            const view = State.gameState.screenPixelDimensions;
            State.gameState.canvas.ctx.lineWidth = 2;
            State.gameState.canvas.ctx.beginPath();
            State.gameState.canvas.ctx.rect(0, 0, view.w, view.h);
            State.gameState.canvas.ctx.stroke();
        }
    }

    static drawDetectedTileOutlines() {
        if (State.debugState.menuOptions[MenuOptions.DETECTED_TILES].enabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.DETECTED_TILES].color;
            State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.DETECTED_TILES].lineWidth;

            State.stageState.detectionTiles.forEach((tile: StageTile) => {
                const dim = RenderingUtilities.toPixels(1);
                const pos = RenderingUtilities.toScreenCoordinates({ x: tile.col, y: tile.row });
                State.gameState.canvas.ctx.strokeRect(pos.x, pos.y, dim, dim);
            });
        }
    }

    static drawCollisionDetectionBox() {
        if (State.debugState.menuOptions[MenuOptions.DETECTION_BOX].enabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.DETECTION_BOX].color;
            State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.DETECTION_BOX].lineWidth;

            const box = State.ninjaState.collisionDetectionBox;
            const { x, y } = RenderingUtilities.toScreenCoordinates(box.position);
            const { w, h } = RenderingUtilities.toScreenDimensions(box.dimensions);
            State.gameState.canvas.ctx.strokeRect(x, y, w, h);
        }
    }

    static drawHitbox() {
        if (State.debugState.menuOptions[MenuOptions.HITBOX].enabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.HITBOX].color;
            State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.HITBOX].lineWidth;

            const box = State.ninjaState.hitbox;
            const { x, y } = RenderingUtilities.toScreenCoordinates(box.position);
            const { w, h } = RenderingUtilities.toScreenDimensions(box.dimensions);
            State.gameState.canvas.ctx.strokeRect(x, y, w, h);
        }
    }

    static drawCollisionsOutlines() {
        if (State.debugState.menuOptions[MenuOptions.COLLISION_TILES].enabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.COLLISION_TILES].color;
            State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.COLLISION_TILES].lineWidth;

            const dim = RenderingUtilities.toPixels(1);
            State.stageState.collisionTiles.forEach((tile: StageTile) => {
                const tilePos = RenderingUtilities.toScreenCoordinates({ x: tile.col, y: tile.row });
                State.gameState.canvas.ctx.strokeRect(tilePos.x, tilePos.y, dim, dim);
            });
        }
    }

    static drawNinjaGridOutlines() {
        if (State.debugState.menuOptions[MenuOptions.CHARACTER_TILES].enabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.CHARACTER_TILES].color;
            State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.CHARACTER_TILES].lineWidth;

            const dim = RenderingUtilities.toPixels(1);
            const characterCol1 = Math.floor(State.ninjaState.hitbox.position.x);
            const characterCol2 = Math.floor(State.ninjaState.hitbox.position.x + State.ninjaState.hitbox.dimensions.w);
            const characterRow1 = Math.floor(State.ninjaState.hitbox.position.y + .95);
            const characterRow2 = Math.floor(State.ninjaState.hitbox.position.y - State.ninjaState.hitbox.dimensions.h + 1);
            for (let col = characterCol1; col <= characterCol2; col++) {
                for (let row = characterRow1; row >= characterRow2; row--) {
                    const { x, y } = RenderingUtilities.toScreenCoordinates({ x: col, y: row });
                    State.gameState.canvas.ctx.strokeRect(x, y, dim, dim);
                }
            }
        }
    }

    static resetCtx() {
        State.gameState.canvas.ctx.strokeStyle = State.debugState.defaultColor;
        State.gameState.canvas.ctx.lineWidth = State.debugState.defaultLineWidth;
    }

    static handleMouseMove(evt: MouseEvent) {
        if (State.debugState.handleMouseMove) {
            const { x, y } = RenderingUtilities.toGameCoordinates({ x: evt.clientX, y: evt.clientY });
            // console.log(`(${Math.floor(x)}, ${Math.floor(y)})`);
        }
    }

    static addMenuButton() {
        State.debugState.hasMenuBtn = true;
        const menuBtn = document.createElement('button');
        menuBtn.classList.add('menuBtn');
        menuBtn.innerHTML = 'Menu';
        menuBtn.addEventListener('click', () => this.toggleMenu());
        const body = document.querySelector('body');
        body.appendChild(menuBtn);
    }

    static removeMenuBtn() {
        State.debugState.hasMenuBtn = false;
        const menuBtn = document.querySelector('.menuBtn');
        menuBtn.removeEventListener('click', () => { });
        menuBtn.remove();
    }

    static toggleMenu() {
        if (State.debugState.menuOpen) {
            this.removeMenu();
        } else {
            this.openMenu();
        }
    }

    static openMenu() {
        State.debugState.menuOpen = true;
        const menu = document.createElement('content');
        menu.classList.add('menu');
        menu.innerHTML = '<h1 class="title">Menu</h1>';
        this.addMenuOptions(menu);
        const body = document.querySelector('body');
        body.appendChild(menu);
    }

    static removeMenu() {
        // TODO: Removed nodes still remain in memory, not sure if they are gargabe collected when there is no pointer
        // TODO: If they stick around with no pointer, the listeners will as well, each open and close will duplicate nodes

        State.debugState.menuOpen = false;
        const menu = document.querySelector('.menu');
        // menu.removeEventListener('click', () => { });
        menu.remove();
    }

    static addMenuOptions(menu: HTMLElement) {
        menu.appendChild(this.addFramesPerSecondOption());
        menu.appendChild(this.addGridOptions());
        menu.appendChild(this.addGridCoordOptions());
        menu.appendChild(this.addScreenEdgeOptions());
        menu.appendChild(this.addTileOutlinesOptions());
        menu.appendChild(this.addCollisionDetectionBoxOptions());
        menu.appendChild(this.addHitboxOptions());
        menu.appendChild(this.addNinjaGridOutlinesOptions());
        menu.appendChild(this.addCollisionsOutlinesOptions());
    }

    static addFramesPerSecondOption(): HTMLElement {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        const fpsLabel = document.createElement('label');
        fpsLabel.innerHTML = 'FPS &nbsp;';

        const fpsInput = document.createElement('input');
        fpsInput.type = 'range';
        fpsInput.max = "60";
        fpsInput.min = "0";
        fpsInput.value = State.gameState.framesPerSecond.toString();

        fpsInput.addEventListener('change', () => {
            State.gameState.framesPerSecond = Number(fpsInput.value);
        });
        fpsLabel.appendChild(fpsInput);
        wrapper.appendChild(fpsLabel);

        return wrapper;
    }

    static addGridOptions(): HTMLElement {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        const gridToggleLabel = document.createElement('label');
        gridToggleLabel.innerHTML = 'Grid &nbsp;';

        const gridToggle = document.createElement('input');
        gridToggle.type = 'checkbox';
        gridToggle.checked = State.debugState.gridEnabled;

        gridToggle.addEventListener('change', () => {
            State.debugState.gridEnabled = gridToggle.checked;
        });
        gridToggleLabel.appendChild(gridToggle);
        wrapper.appendChild(gridToggleLabel);

        return wrapper;
    }

    static addGridCoordOptions() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        const gridCoordsToggleLabel = document.createElement('label');
        gridCoordsToggleLabel.innerHTML = 'Coordinates &nbsp;';

        const gridCoordsToggle = document.createElement('input');
        gridCoordsToggle.type = 'checkbox';
        gridCoordsToggle.checked = State.debugState.gridCoordsEnabled;

        gridCoordsToggle.addEventListener('change', () => {
            State.debugState.gridCoordsEnabled = gridCoordsToggle.checked;
        });

        gridCoordsToggleLabel.appendChild(gridCoordsToggle);
        wrapper.appendChild(gridCoordsToggleLabel);

        return wrapper;
    }

    static addScreenEdgeOptions() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        const screenEdgeToggleLabel = document.createElement('label');
        screenEdgeToggleLabel.innerHTML = 'Screen Edge &nbsp;';

        const screenEdgeToggle = document.createElement('input');
        screenEdgeToggle.type = 'checkbox';
        screenEdgeToggle.checked = State.debugState.screenEdgeEnabled;

        screenEdgeToggle.addEventListener('change', () => {
            State.debugState.screenEdgeEnabled = screenEdgeToggle.checked;
        });

        screenEdgeToggleLabel.appendChild(screenEdgeToggle);
        wrapper.appendChild(screenEdgeToggleLabel);

        return wrapper;
    }

    static addTileOutlinesOptions() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        const tileOutlinesToggleLabel = document.createElement('label');
        tileOutlinesToggleLabel.innerHTML = 'Detected Tiles &nbsp;';

        const tileOutlinesToggle = document.createElement('input');
        tileOutlinesToggle.type = 'checkbox';
        tileOutlinesToggle.checked = State.debugState.tileOutlinesEnabled;

        tileOutlinesToggle.addEventListener('change', () => {
            State.debugState.tileOutlinesEnabled = tileOutlinesToggle.checked;
        });

        tileOutlinesToggleLabel.appendChild(tileOutlinesToggle);
        wrapper.appendChild(tileOutlinesToggleLabel);

        return wrapper;
    }

    static addCollisionDetectionBoxOptions() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        const collisionDetectionBoxToggleLabel = document.createElement('label');
        collisionDetectionBoxToggleLabel.innerHTML = 'Collision Detection Box &nbsp;';

        const collisionDetectionBoxToggle = document.createElement('input');
        collisionDetectionBoxToggle.type = 'checkbox';
        collisionDetectionBoxToggle.checked = State.debugState.collisionDetectionBoxEnabled;

        collisionDetectionBoxToggle.addEventListener('change', () => {
            State.debugState.collisionDetectionBoxEnabled = collisionDetectionBoxToggle.checked;
        });

        collisionDetectionBoxToggleLabel.appendChild(collisionDetectionBoxToggle);
        wrapper.appendChild(collisionDetectionBoxToggleLabel);

        return wrapper;
    }

    static addHitboxOptions() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        const hitboxToggleLabel = document.createElement('label');
        hitboxToggleLabel.innerHTML = 'Hitbox &nbsp;';

        const hitboxToggle = document.createElement('input');
        hitboxToggle.type = 'checkbox';
        hitboxToggle.checked = State.debugState.hitboxEnabled;

        hitboxToggle.addEventListener('change', () => {
            State.debugState.hitboxEnabled = hitboxToggle.checked;
        });

        hitboxToggleLabel.appendChild(hitboxToggle);
        wrapper.appendChild(hitboxToggleLabel);

        return wrapper;
    }

    static addNinjaGridOutlinesOptions() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        const ninjaGridOutlinesToggleLabel = document.createElement('label');
        ninjaGridOutlinesToggleLabel.innerHTML = 'Grid Position Boxes &nbsp;';

        const ninjaGridOutlinesToggle = document.createElement('input');
        ninjaGridOutlinesToggle.type = 'checkbox';
        ninjaGridOutlinesToggle.checked = State.debugState.ninjaGridOutlinesEnabled;

        ninjaGridOutlinesToggle.addEventListener('change', () => {
            State.debugState.ninjaGridOutlinesEnabled = ninjaGridOutlinesToggle.checked;
        });

        ninjaGridOutlinesToggleLabel.appendChild(ninjaGridOutlinesToggle);
        wrapper.appendChild(ninjaGridOutlinesToggleLabel);

        return wrapper;
    }

    static addCollisionsOutlinesOptions() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        const collisionsOutlinesToggleLabel = document.createElement('label');
        collisionsOutlinesToggleLabel.innerHTML = 'Collision Tiles &nbsp;';

        const collisionsOutlinesToggle = document.createElement('input');
        collisionsOutlinesToggle.type = 'checkbox';
        collisionsOutlinesToggle.checked = State.debugState.collisionsOutlinesEnabled;

        collisionsOutlinesToggle.addEventListener('change', () => {
            State.debugState.collisionsOutlinesEnabled = collisionsOutlinesToggle.checked;
        });

        collisionsOutlinesToggleLabel.appendChild(collisionsOutlinesToggle);
        wrapper.appendChild(collisionsOutlinesToggleLabel);

        return wrapper;
    }

    static debugModeCleanUp() {
        DebugMenu.removeMenuButton();
        if (State.debugState.menuOpen) { DebugMenu.removeMenu(); }
    }
}
