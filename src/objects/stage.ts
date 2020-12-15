import { GridTile } from './gridTile';
import { Platforms } from './platforms';

export class Stage {

    ctx: CanvasRenderingContext2D;
    platforms: Platforms;
    tiles: GridTile[];
    tileWidth: number;
    tileHeight: number;

    constructor(ctx: CanvasRenderingContext2D, tileList: string[][]) {
        this.ctx = ctx;
        this.platforms = new Platforms();

        this.tiles = [];
        for (let row = 0; row < tileList.length; row++) {
            for (let col = 0; col < tileList[row].length; col++) {
                this.tiles.push(new GridTile(row, col, tileList[row][col]));
            }
        }

        this.tileWidth = (innerWidth / tileList[0].length);
        this.tileHeight = (innerHeight / tileList.length);
    }

    render() {
        for (const tile of this.tiles) {
            if (tile.lookupValue !== '00') {
                this.ctx.drawImage(
                    this.platforms.imageMap.get(Number(tile.lookupValue)),
                    this.tileWidth * tile.col,
                    this.tileHeight * tile.row,
                    this.tileWidth,
                    this.tileHeight
                );
            }
            // this.drawGrid(tile.row, tile.col);
        }
    }

    drawGrid(row: number, col: number) {
        this.ctx.strokeRect(
            col * this.tileWidth,
            row * this.tileHeight,
            this.tileWidth,
            this.tileHeight
        );
    }
}
