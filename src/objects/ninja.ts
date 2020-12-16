import { Keys } from '../interfaces/keys';

import { NinjaAnimations } from '../animations/ninjaAnimations';
import { AnimationTypes } from '../constants/animationTypes';
import { Point } from '../interfaces/point';
import {GameView} from "./gameView";

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
    gameView: GameView;
    jumping: boolean;
    movingRight: boolean;
    position: Point;
    size: number;
    speed: number;

    constructor(ctx: CanvasRenderingContext2D, gameView: GameView) {
        this.animations = new NinjaAnimations();
        this.attacking = false;
        this.ctx = ctx;
        this.currentFrame = 0;
        this.currentImage = this.animations.getAnimation(this.currentState).getImages()[this.currentFrame];
        this.currentState = AnimationTypes.IDLE_RIGHT;
        this.falling = false;
        this.frameCount = 0;
        this.frameDelay = 6;
        this.framesPerAnimation = 10;
        this.gameView = gameView;
        this.jumping = false;
        this.movingRight = true;
        this.position = { x: 3, y: 6 };
        this.size = 0.15;
        this.speed = .25;
    }

    update(keys: Keys): void {
        this.updatePosition(keys);
        this.updateSprite();
    }

    updatePosition({ up, right, left }: Keys): void {
        if (!right && !left && !this.jumping) {
            this.currentState = this.movingRight ? AnimationTypes.IDLE_RIGHT : AnimationTypes.IDLE_LEFT;
        }

        if (up && !this.jumping) {
            this.jumping = true;
            this.currentFrame = -1;
            this.currentState = this.movingRight ? AnimationTypes.JUMP_RIGHT : AnimationTypes.JUMP_LEFT;
        }

        if (this.jumping) {
            if (this.currentFrame < 2) {
                this.position.y += .25;
            } else if (this.currentFrame < 4) {
                this.position.y += .125;
            } else if (this.currentFrame >= 8) {
                this.position.y -= .25;
            } else if (this.currentFrame >= 6) {
                this.position.y -= .125;
            }
        }

        if (right) {
            this.movingRight = true;
            if (!this.jumping) { this.currentState = AnimationTypes.RUN_RIGHT; }
            this.position.x += this.speed;
        }

        if (left) {
            this.movingRight = false;
            if (!this.jumping) { this.currentState = AnimationTypes.RUN_LEFT; }
            this.position.x -= this.speed;
        }
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
        const dimensions = this.gameView.getDimensions();
        this.gameView.setPosition({x: this.position.x - dimensions.w/2, y: this.position.y - 4});
        const screenPosition = this.gameView.toScreenCoordinates(this.position);
        this.ctx.drawImage(
            this.currentImage,
            screenPosition.x,
            screenPosition.y,
            this.currentImage.width * this.size,
            this.currentImage.height * this.size
        );

        this.drawHitbox(screenPosition);
    }

    drawHitbox(position: Point) {
        this.ctx.strokeRect(
            position.x,
            position.y,
            this.currentImage.width * this.size,
            this.currentImage.height * this.size
        );
    }
}
