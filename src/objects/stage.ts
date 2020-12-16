import {GridTile} from './gridTile';
import {Platforms} from './platforms';
import {GameView} from "./gameView";

export class Stage {

    ctx: CanvasRenderingContext2D;
    gameView: GameView;
    platforms: Platforms;
    tiles: GridTile[];

    constructor(ctx: CanvasRenderingContext2D, gameView: GameView, tileList: string[][]) {
        this.ctx = ctx;
        this.gameView = gameView;
        this.platforms = new Platforms();

        this.tiles = [];
        for (let row = 0; row < tileList.length; row++) {
            for (let col = 0; col < tileList[row].length; col++) {
                this.tiles.push(new GridTile(tileList.length - row, col, tileList[row][col]));
            }
        }
    }

    render() {
        for (const tile of this.tiles) {
            if (tile.lookupValue !== '00') {
                const position = this.gameView.toScreenCoordinates({x: tile.col, y: tile.row});
                this.ctx.drawImage(
                    this.platforms.imageMap.get(Number(tile.lookupValue)),
                    position.x,
                    position.y,
                    this.gameView.toPixels(1),
                    this.gameView.toPixels(1)
                );
            }
        }
    }
}
