import { Keys } from '../interfaces/keys';

import { NinjaAnimations } from '../animations/ninjaAnimations';
import { AnimationTypes } from '../constants/animationTypes';

export class Ninja {
    ctx: CanvasRenderingContext2D;
    currentState: string;

    animations: NinjaAnimations;

    currentImage: HTMLImageElement;
    currentFrame: number;
    frameDelay: number;
    frameCount: number;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.currentFrame = 0;
        this.frameDelay = 6;
        this.frameCount = 0;
        this.animations = new NinjaAnimations();
        this.currentState = AnimationTypes.RUN;

        this.currentImage = this.animations.getAnimation(this.currentState).getImages()[this.currentFrame];

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
            0,
            0
        );
    }
}
