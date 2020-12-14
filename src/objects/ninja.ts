import { Keys } from '../interfaces/keys';

import { NinjaAnimations } from '../animations/ninjaAnimations';
import { AnimationTypes } from '../constants/animationTypes';
import { Point } from '../interfaces/point';

export class Ninja {
    animations: NinjaAnimations;
    ctx: CanvasRenderingContext2D;
    currentFrame: number;
    currentImage: HTMLImageElement;
    currentState: string;
    frameCount: number;
    frameDelay: number;
    position: Point;

    constructor(ctx: CanvasRenderingContext2D) {
        this.animations = new NinjaAnimations();
        this.ctx = ctx;
        this.currentFrame = 0;
        this.currentImage = this.animations.getAnimation(this.currentState).getImages()[this.currentFrame];
        this.currentState = AnimationTypes.IDLE;
        this.frameCount = 0;
        this.frameDelay = 6;
        this.position = { x: 200, y: innerHeight - 200 };
    }

    update(keys: Keys): void {
        this.updateSprite();
        this.updatePosition(keys);
    }

    updatePosition({ right, left }: Keys): void {

        if (right) {
        }

        if (left) {
        }

    }

    updateSprite() {
        this.frameCount++;
        this.frameCount %= this.frameDelay;

        if (this.frameCount === 0) {
            this.currentFrame = (this.currentFrame + 1) % 10;
            this.currentImage = this.animations.getAnimation(this.currentState).getImages()[this.currentFrame];
        }
    }

    draw() {
        this.ctx.drawImage(
            this.currentImage,
            this.position.x,
            this.position.y,
            this.currentImage.width * 0.20,
            this.currentImage.height * 0.20
        );
    }
}
