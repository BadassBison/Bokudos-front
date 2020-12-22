import { State } from '../states/rootState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { StageTile } from './stageTile';

export class DebugMode {

    static draw() {
        if (State.debugState.debugMode) {
            if (!State.debugState.hasMenuBtn) { this.addMenuButton(); }
            const position = State.gameState.position;
            const gameUnitDimensions = State.gameState.gameUnitDimensions;

            if (State.debugState.gridEnabled) {
                const startingRow = Math.floor(position.y);
                const endingRow =  Math.ceil(position.y + gameUnitDimensions.h);
                const startingCol = Math.floor(position.x);
                const endingCol = Math.floor(position.x + gameUnitDimensions.w);
                // console.log("Rendering Grid: " + startingCol + ", " + startingRow + " ---> " + endingCol + ", " + endingRow);
                for (let row = startingRow; row <= endingRow; row++) {
                    for (let col = startingCol; col <= endingCol; col++) {
                        this.drawGrid(row, col);
                        this.drawGridCoords(row, col);
                    }
                }
            }

            this.drawScreenEdge();
            this.drawTileOutlines();
            this.drawCollisionDetectionBox();
            this.drawHitbox();
            this.drawCollisionsOutlines();
            this.drawNinjaGridOutlines();
            if (State.debugState.clickedPosition) {
                this.drawBoxAtClick();
            }
            this.resetCtx();
        } else if (State.debugState.hasMenuBtn) {
            this.debugModeCleanUp();
        }
    }

    static drawGrid(row: number, col: number) {
        State.gameState.canvas.ctx.strokeStyle = State.debugState.gridColor;
        State.gameState.canvas.ctx.lineWidth = State.debugState.gridLineWidth;

        const position = RenderingUtilities.toScreenCoordinates({ x: col, y: row });
        State.gameState.canvas.ctx.strokeRect(
            position.x,
            position.y,
            RenderingUtilities.toPixels(1),
            RenderingUtilities.toPixels(1)
        );
    }

    static drawGridCoords(row: number, col: number) {
        if (State.debugState.gridCoordsEnabled) {
            State.gameState.canvas.ctx.fillStyle = State.debugState.gridCoordsColor;
            State.gameState.canvas.ctx.font = State.debugState.gridCoordsFont;

            const { x, y } = RenderingUtilities.toScreenCoordinates({ x: col, y: row });
            const pixelOffset = 4;
            State.gameState.canvas.ctx.fillText(`(${col}, ${row})`, x + pixelOffset, y - pixelOffset);
        }
    }

    static drawScreenEdge() {
        if (State.debugState.screenEdgeEnabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.screenEdgeColor;
            State.gameState.canvas.ctx.lineWidth = State.debugState.screenEdgeLineWidth;

            const view = State.gameState.screenPixelDimensions;
            State.gameState.canvas.ctx.lineWidth = 2;
            State.gameState.canvas.ctx.beginPath();
            State.gameState.canvas.ctx.rect(0, 0, view.w, view.h);
            State.gameState.canvas.ctx.stroke();
        }
    }

    static drawTileOutlines() {
        if (State.debugState.tileOutlinesEnabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.tileOutlinesColor;
            State.gameState.canvas.ctx.lineWidth = State.debugState.tileOutlinesLineWidth;

            State.stageState.detectionTiles.forEach((tile: StageTile) => {
                const dim = RenderingUtilities.toPixels(1);
                const pos = RenderingUtilities.toScreenCoordinates({ x: tile.col, y: tile.row });
                State.gameState.canvas.ctx.strokeRect(pos.x, pos.y, dim, dim);
            });
        }
    }

    static drawCollisionDetectionBox() {
        if (State.debugState.collisionDetectionBoxEnabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.collisionDetectionBoxColor;
            State.gameState.canvas.ctx.lineWidth = State.debugState.collisionDetectionBoxLineWidth;

            const box = State.ninjaState.collisionDetectionBox;
            const { x, y } = RenderingUtilities.toScreenCoordinates(box.position);
            const { w, h } = RenderingUtilities.toScreenDimensions(box.dimensions);
            State.gameState.canvas.ctx.strokeRect(x, y, w, h);
        }
    }

    static drawHitbox() {
        if (State.debugState.hitboxEnabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.hitboxColor;
            State.gameState.canvas.ctx.lineWidth = State.debugState.hitboxLineWidth;

            const box = State.ninjaState.hitbox;
            const { x, y } = RenderingUtilities.toScreenCoordinates(box.position);
            const { w, h } = RenderingUtilities.toScreenDimensions(box.dimensions);
            State.gameState.canvas.ctx.strokeRect(x, y, w, h);
        }
    }

    static drawCollisionsOutlines() {
        if (State.debugState.collisionsOutlinesEnabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.collisionsOutlinesColor;
            State.gameState.canvas.ctx.lineWidth = State.debugState.collisionsOutlinesLineWidth;

            const dim = RenderingUtilities.toPixels(1);
            State.stageState.collisionTiles.forEach((tile: StageTile) => {
                const tilePos = RenderingUtilities.toScreenCoordinates({ x: tile.col, y: tile.row });
                State.gameState.canvas.ctx.strokeRect(tilePos.x, tilePos.y, dim, dim);
            });
        }
    }

    static drawNinjaGridOutlines() {
        if (State.debugState.ninjaGridOutlinesEnabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.ninjaGridOutlinesColor;
            State.gameState.canvas.ctx.lineWidth = State.debugState.ninjaGridOutlinesLineWidth;

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

    static drawBoxAtClick() {
        State.gameState.canvas.ctx.strokeStyle = State.debugState.boxAtClickColor;
        State.gameState.canvas.ctx.lineWidth = State.debugState.boxAtClickLineWidth;

        const dim = RenderingUtilities.toPixels(1);
        const { x, y } = RenderingUtilities.toScreenCoordinates(State.debugState.clickedPosition);
        State.gameState.canvas.ctx.strokeRect(x, y, dim, dim);
    }

    static resetCtx() {
        State.gameState.canvas.ctx.strokeStyle = State.debugState.defaultColor;
        State.gameState.canvas.ctx.lineWidth = State.debugState.defaultLineWidth;
    }

    // TODO: To send the grid coord data
    // FIXME: Currently the conversion from pixels to grid coords is incorrect
    static handleMouseMove(evt: MouseEvent) {
        if (State.debugState.handleMouseMove) {
            const { x, y } = RenderingUtilities.toGameCoordinates({ x: evt.clientX, y: evt.clientY });
            console.log(`(${Math.floor(x)}, ${Math.floor(y)})`);
        }
    }

    // TODO: To be used to get data from the clicked grid coord
    static handleMouseClick(evt: MouseEvent) {
        if (State.debugState.handleMouseClick) {
            State.debugState.clickedPosition = RenderingUtilities.toGameCoordinates({ x: evt.clientX, y: evt.clientY });
            const {x, y} = State.debugState.clickedPosition;
            console.log(`Clicked: (${Math.floor(x)}, ${Math.floor(y)})`);
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
        menu.appendChild(this.addGridOptions());
        menu.appendChild(this.addGridCoordOptions());
        menu.appendChild(this.addScreenEdgeOptions());
        menu.appendChild(this.addTileOutlinesOptions());
        menu.appendChild(this.addCollisionDetectionBoxOptions());
        menu.appendChild(this.addHitboxOptions());
        menu.appendChild(this.addNinjaGridOutlinesOptions());
        menu.appendChild(this.addCollisionsOutlinesOptions());
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
        this.removeMenuBtn();
        if (State.debugState.menuOpen) { this.removeMenu(); }
    }

}
