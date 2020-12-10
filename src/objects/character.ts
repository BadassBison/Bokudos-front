import { Keys } from "../interfaces/keys";
import { Point } from "../interfaces/point";

// @ts-ignore
import image from "../../assets/sprites/skeleton.png";

export class Character {
    ctx: CanvasRenderingContext2D;
    img: HTMLImageElement;
    position: Point;
    columns: number;
    rows: number;
    width: number;
    height: number;
    sheetWidth: number;
    sheetHeight: number;
    srcX: number;
    srcY: number;
    imagesLoaded: boolean;
    size: number;
    isMoving: boolean;
    currentFrame: number;
    frameCount: number;
    frameDelay: number;
    speed: number;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = image;
        this.position = { x: 300, y: 300 };
        this.sheetWidth = 576;
        this.sheetHeight = 256;
        this.columns = 9;
        this.rows = 4;
        this.width = this.sheetWidth / this.columns;
        this.height = this.sheetHeight / this.rows;
        this.srcX = 0;
        this.srcY = 2 * this.height;
        this.imagesLoaded = false;
        this.size = 1.5;
        this.isMoving = false;
        this.currentFrame = 0;
        this.frameCount = 0;
        this.frameDelay = 6;
        this.speed = 4;
    }

    update(keys: Keys): void {
        this.updateSprite();
        this.updatePosition(keys);
    }

    updatePosition({ up, right, down, left }: Keys): void {
        this.isMoving = up || right || down || left;

        if (up) {
            this.srcY = 0;
            this.position.y -= this.speed;
        }

        if (right) {
            this.srcY = 3 * this.height;
            this.position.x += this.speed;
        }

        if (down) {
            this.srcY = 2 * this.height;
            this.position.y += this.speed;
        }

        if (left) {
            this.srcY = 1 * this.height;
            this.position.x -= this.speed;
        }

        if (!this.isMoving) {
            this.srcX = 0;
        }
    }

    updateSprite() {
        this.frameCount++;
        this.frameCount %= this.frameDelay;

        if (this.frameCount === 0) {
            this.currentFrame = (this.currentFrame % (this.columns - 1)) + 1;
            this.srcX = this.currentFrame * this.width;
        }
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.srcX,
            this.srcY,
            this.width,
            this.height,
            this.position.x,
            this.position.y,
            this.width * this.size,
            this.height * this.size
        );
    }
}