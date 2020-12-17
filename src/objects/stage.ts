import { StageTile } from './stageTile';
import { Platforms } from './platforms';
import { GameView } from './gameView';

export class Stage {

    ctx: CanvasRenderingContext2D;
    gameView: GameView;
    platforms: Platforms;
    tiles: Map<string, StageTile>;

    constructor(ctx: CanvasRenderingContext2D, gameView: GameView, tileList: string[][]) {
        this.ctx = ctx;
        this.gameView = gameView;
        this.platforms = new Platforms();

        this.tiles = new Map();
        for (let row = 0; row < tileList.length; row++) {
            for (let col = 0; col < tileList[row].length; col++) {
                this.tiles.set(`${row}${col}`, new StageTile(tileList.length - row, col, tileList[row][col]));
            }
        }
    }

    render() {
        this.tiles.forEach((tile: StageTile) => {
            if (tile.lookupValue !== '00') {
                const position = this.gameView.toScreenCoordinates({ x: tile.col, y: tile.row });
                // TODO: console

                this.ctx.drawImage(
                    this.platforms.imageMap.get(Number(tile.lookupValue)),
                    position.x,
                    position.y,
                    this.gameView.toPixels(1),
                    this.gameView.toPixels(1)
                );
            }
        });
    }
}
