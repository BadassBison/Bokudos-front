import { BoxOptions } from '../interfaces/boxOptions';
import { Keys } from '../interfaces/keys';
import { Point } from '../interfaces/point';

export class Box {
    // Immutable
    color: string;
    ctx: CanvasRenderingContext2D;
    height: number;
    options: BoxOptions;
    width: number;

    // Mutable
    acceleration: number;
    deceleration: number;
    position: Point;
    speedLimit: number;
    xSpeed: number;
    ySpeed: number;

    constructor(ctx: CanvasRenderingContext2D, options: BoxOptions) {
        this.ctx = ctx;
        this.position = options.position;
        this.color = options.color;
        this.height = options.height;
        this.width = options.width;
        this.options = options;

        this.xSpeed = 0;
        this.ySpeed = 0;
        this.acceleration = 0.4;
        this.deceleration = 0.2;
        this.speedLimit = 5;
    }

    update(keys: Keys): void {
        this.updateSpeed(keys);
        this.updatePosition();
    }

    updateSpeed({ up, right, down, left }: Keys): void {
        if (up) {
            if (-this.ySpeed < this.speedLimit) this.ySpeed -= this.acceleration;
        } else {
            if (this.ySpeed < 0) {
                this.ySpeed += this.deceleration;
                if (Math.abs(this.ySpeed) < this.deceleration) this.ySpeed = 0;
            }
        }

        if (right) {
            if (this.xSpeed < this.speedLimit) this.xSpeed += this.acceleration;
        } else {
            if (this.xSpeed > 0) {
                this.xSpeed -= this.deceleration;
                if (Math.abs(this.xSpeed) < this.deceleration) this.xSpeed = 0;
            }
        }

        if (down) {
            if (this.ySpeed < this.speedLimit) this.ySpeed += this.acceleration;
        } else {
            if (this.ySpeed > 0) {
                this.ySpeed -= this.deceleration;
                if (Math.abs(this.ySpeed) < this.deceleration) this.ySpeed = 0;
            }
        }

        if (left) {
            if (-this.xSpeed < this.speedLimit) this.xSpeed -= this.acceleration;
        } else {
            if (this.xSpeed < 0) {
                this.xSpeed += this.deceleration;
                if (Math.abs(this.xSpeed) < this.deceleration) this.xSpeed = 0;
            }
        }
    }

    updatePosition(): void {
        this.position.x += this.xSpeed;
        this.position.y += this.ySpeed;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}