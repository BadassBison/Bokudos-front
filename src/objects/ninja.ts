import { Keys } from '../interfaces/keys';

import { NinjaAnimations } from '../animations/ninjaAnimations';
import { AnimationTypes } from '../constants/animationTypes';
import { Point } from '../interfaces/point';

export class Ninja {
    animations: NinjaAnimations;
    attacking: boolean;
    ctx: CanvasRenderingContext2D;
    currentFrame: number;
    currentImage: HTMLImageElement;
    currentState: string;
    falling: boolean;
    frameCount: number;
    frameDelay: number;
    framesPerAnimation: number;
    jumping: boolean;
    position: Point;
    size: number;
    speed: number;

    constructor(ctx: CanvasRenderingContext2D) {
        this.animations = new NinjaAnimations();
        this.attacking = false;
        this.ctx = ctx;
        this.currentFrame = 0;
        this.currentImage = this.animations.getAnimation(this.currentState).getImages()[this.currentFrame];
        this.currentState = AnimationTypes.IDLE;
        this.falling = false;
        this.frameCount = 0;
        this.frameDelay = 6;
        this.framesPerAnimation = 10;
        this.jumping = false;
        this.position = { x: 200, y: innerHeight - 400 };
        this.size = 0.15;
        this.speed = 3;
    }

    update(keys: Keys): void {
        this.updatePosition(keys);
        this.updateSprite();
    }

    updatePosition({ up, right, left }: Keys): void {
        if (!right && !left && !this.jumping) {
            this.currentState = AnimationTypes.IDLE;
        }

        if (up && !this.jumping) {
            this.jumping = true;
            this.currentFrame = -1;
            this.currentState = AnimationTypes.JUMP;
        }

        if (this.jumping) {
            if (this.currentFrame < 2) {
                this.position.y -= 3;
            } else if (this.currentFrame < 4) {
                this.position.y -= 2;
            } else if (this.currentFrame >= 8) {
                this.position.y += 3;
            } else if (this.currentFrame >= 6) {
                this.position.y += 2;
            }
        }

        if (right) {
            if (!this.jumping) { this.currentState = AnimationTypes.RUN; }
            this.position.x += this.speed;
        }

        if (left) {
            if (!this.jumping) { this.currentState = AnimationTypes.RUNL; }
            this.position.x -= this.speed;
        }

        // console.log('position', this.position);
    }

    updateSprite() {
        this.frameCount++;
        this.frameCount %= this.frameDelay;

        if (this.frameCount === 0) {
            if (this.jumping) {
                this.currentFrame++;
                if (this.currentFrame >= this.framesPerAnimation) {
                    this.currentFrame %= this.framesPerAnimation;
                    this.jumping = false;
                }
            } else {
                this.currentFrame = (this.currentFrame + 1) % this.framesPerAnimation;
            }
            this.currentImage = this.animations.getAnimation(this.currentState).getImages()[this.currentFrame];
        }
    }

    draw() {
        this.ctx.drawImage(
            this.currentImage,
            this.position.x,
            this.position.y,
            this.currentImage.width * this.size,
            this.currentImage.height * this.size
        );

        this.drawHitbox();
    }

    drawHitbox() {
        this.ctx.strokeRect(
            this.position.x,
            this.position.y,
            this.currentImage.width * this.size,
            this.currentImage.height * this.size
        );
    }
}
