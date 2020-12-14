import { Keys } from '../interfaces/keys';
import { Point } from '../interfaces/point';
import { DefaultCharacterOptions, CharacterOptions } from '../interfaces/characterOptions';

export class Character {
    ctx: CanvasRenderingContext2D;
    img: HTMLImageElement;
    position: Point;
    columns: number;
    rows: number;
    width: number;
    height: number;
    srcX: number;
    srcY: number;
    imagesLoaded: boolean;
    size: number;
    isMoving: boolean;
    currentFrame: number;
    frameCount: number;
    frameDelay: number;
    speed: number;
    diagSpeed: number;
    options: CharacterOptions;

    static defaultCharacterFactory(ctx: CanvasRenderingContext2D, options: DefaultCharacterOptions): Character {
        const columns = 9;
        const rows = 4;
        const spriteWidth = options.img.width / columns;
        const spriteHeight = options.img.height / rows;

        const characterOptions: CharacterOptions = {
            img: options.img,
            position: options.position,
            columns,
            rows,
            spriteWidth,
            spriteHeight,
            srcX: 0,
            srcY: 2 * spriteHeight,
            size: 1.5,
            speed: 4,
            frameDelay: 6,
        };

        return new Character(ctx, characterOptions);
    }

    constructor(ctx: CanvasRenderingContext2D, options: CharacterOptions) {
        this.ctx = ctx;
        this.img = options.img;
        this.position = options.position;
        this.size = options.size;
        this.speed = options.speed;
        this.diagSpeed = Math.sin(0.25 * Math.PI) * options.speed;
        this.columns = options.columns;
        this.rows = options.rows;
        this.width = options.spriteWidth;
        this.height = options.spriteHeight;
        this.srcX = options.srcX;
        this.srcY = options.srcY;
        this.frameDelay = options.frameDelay;
        this.currentFrame = 0;
        this.frameCount = 0;
    }

    update(keys: Keys): void {
        this.updateSprite();
        this.updatePosition(keys);
    }

    updatePosition({ up, right, down, left }: Keys): void {
        this.isMoving = up || right || down || left;
        let isDiag = up !== down && left !== right;
        let speed = isDiag ? this.diagSpeed : this.speed;

        if (up) {
            this.srcY = 0;
            this.position.y -= speed;
        }

        if (right) {
            this.srcY = 3 * this.height;
            this.position.x += speed;
        }

        if (down) {
            this.srcY = 2 * this.height;
            this.position.y += speed;
        }

        if (left) {
            this.srcY = 1 * this.height;
            this.position.x -= speed;
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