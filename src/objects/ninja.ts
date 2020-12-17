import { Keys } from '../interfaces/keys';

import { NinjaAnimations } from '../animations/ninjaAnimations';
import { AnimationTypes } from '../constants/animationTypes';
import { Point } from '../interfaces/point';
import { GameView } from './gameView';
import { Dimensions } from '../interfaces/dimensions';

export class Ninja {
    animations: NinjaAnimations;
    attacking: boolean;

    // TODO: 
    collisionDetectionBox: any;

    ctx: CanvasRenderingContext2D;
    currentFrame: number;
    currentImage: HTMLImageElement;
    currentState: string;
    falling: boolean;
    frameCount: number;
    frameDelay: number;
    framesPerAnimation: number;

    // TODO:
    hitbox: any;

    gameView: GameView;
    jumping: boolean;
    movingRight: boolean;
    position: Point;
    screenPosition: Point;
    screenDimensions: Dimensions;
    size: number;
    speed: number;

    readonly HEIGHT_IN_UNITS: number = 2;
    readonly SPRITE_SIZER: number;

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
        this.SPRITE_SIZER = this.currentImage.height / this.HEIGHT_IN_UNITS;

        this.hitbox = {
            position: this.gameView.toScreenCoordinates(this.position),
            dimensions: this.screenDimensions = this.gameView.toScreenDimensions(this.getSize())
        };

        this.collisionDetectionBox = {
            position: this.gameView.toScreenCoordinates(this.position),
            dimensions: this.screenDimensions = this.gameView.toScreenDimensions(this.getSize())
        };
    }

    update(keys: Keys): void {
        this.updatePosition(keys);
        this.updateSprite();
    }

    updatePosition({ up, right, left, down }: Keys): void {
        // FIXME: this is commented out to add up and down movement
        // if (!right && !left && !this.jumping) {
        //     this.currentState = this.movingRight ? AnimationTypes.IDLE_RIGHT : AnimationTypes.IDLE_LEFT;
        // }

        // FIXME: this is temp for up and down movement for collision testing
        if (!right && !left && !up && !down) {
            this.currentState = this.movingRight ? AnimationTypes.IDLE_RIGHT : AnimationTypes.IDLE_LEFT;
        }

        // TODO: Used for jumping
        // if (up && !this.jumping) {
        //     this.jumping = true;
        //     this.currentFrame = -1;
        //     this.currentState = this.movingRight ? AnimationTypes.JUMP_RIGHT : AnimationTypes.JUMP_LEFT;
        // }

        // TODO: Used for jumping
        // if (this.jumping) {
        //     if (this.currentFrame < 2) {
        //         this.position.y += .25;
        //     } else if (this.currentFrame < 4) {
        //         this.position.y += .125;
        //     } else if (this.currentFrame >= 8) {
        //         this.position.y -= .25;
        //     } else if (this.currentFrame >= 6) {
        //         this.position.y -= .125;
        //     }
        // }

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

        // FIXME: Delete this if block after collision detection is fixed
        if (up) {
            this.movingRight = true;
            if (!this.jumping) { this.currentState = AnimationTypes.RUN_RIGHT; }
            this.position.y += this.speed;
        }

        // FIXME: Delete this if block after collision detection is fixed
        if (down) {
            this.movingRight = false;
            if (!this.jumping) { this.currentState = AnimationTypes.RUN_LEFT; }
            this.position.y -= this.speed;
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
        console.log('p', this.position);
        // TODO: Decouple everything not related to drawing into separate methods
        this.screenPosition = this.gameView.toScreenCoordinates(this.position);
        this.screenDimensions = this.gameView.toScreenDimensions(this.getSize());

        const dimensions = this.gameView.getDimensions();
        this.gameView.setPosition({ x: this.position.x - dimensions.w / 2, y: this.position.y - 4 });

        this.ctx.drawImage(
            this.currentImage,
            this.screenPosition.x,
            this.screenPosition.y,
            this.screenDimensions.w,
            this.screenDimensions.h
        );

        // console.log(this.screenDimensions);

        this.drawHitbox(this.hitbox);
        this.drawCollisionDetectionBox(this.hitbox);
    }

    getSize(): Dimensions {
        return {
            w: this.currentImage.width / this.SPRITE_SIZER,
            h: this.currentImage.height / this.SPRITE_SIZER
        };
    }

    drawHitbox(box: any) {
        this.ctx.strokeStyle = 'yellow';
        this.ctx.strokeRect(
            box.position.x,
            box.position.y,
            box.dimensions.w,
            box.dimensions.h
        );
        this.ctx.strokeStyle = 'black';
    }

    drawCollisionDetectionBox(box: any) {
        this.ctx.strokeStyle = 'red';
        this.ctx.strokeRect(
            box.position.x - box.dimensions.w,
            box.position.y - box.dimensions.h / 2,
            box.dimensions.w * 3,
            box.dimensions.h * 2
        );
        this.ctx.strokeStyle = 'black';
    }
}
