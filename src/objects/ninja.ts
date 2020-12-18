import { Keys } from '../interfaces/keys';

import { AnimationTypes } from '../constants/animationTypes';
import { Dimensions } from '../interfaces/dimensions';
import { State } from '../states/rootState';
import { NinjaState } from '../states/ninjaState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { UpdateObject } from '../interfaces/updateObject';

export class Ninja implements UpdateObject {
    state: NinjaState;

    constructor() {
        this.state = State.ninjaState;
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
            this.state.currentState = this.state.movingRight ? AnimationTypes.IDLE_RIGHT : AnimationTypes.IDLE_LEFT;
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
            this.state.movingRight = true;
            if (!this.state.jumping) { this.state.currentState = AnimationTypes.RUN_RIGHT; }
            this.state.position.x += this.state.speed;
        }

        if (left) {
            this.state.movingRight = false;
            if (!this.state.jumping) { this.state.currentState = AnimationTypes.RUN_LEFT; }
            this.state.position.x -= this.state.speed;
        }

        // FIXME: Delete this.state if block after collision detection is fixed
        if (up) {
            this.state.movingRight = true;
            if (!this.state.jumping) { this.state.currentState = AnimationTypes.RUN_RIGHT; }
            this.state.position.y += this.state.speed;
        }

        // TODO: may want to reconsider how this is being done... This is to center the view on the ninja
        State.gameState.position = { x: this.state.position.x - State.gameState.gameUnitDimensions.w / 2, y: this.state.position.y - 4 };
    }

    updateSprite() {
        this.state.frameCount++;
        this.state.frameCount %= this.state.frameDelay;

        if (this.state.frameCount === 0) {
            if (this.state.jumping) {
                this.state.currentFrame++;
                if (this.state.currentFrame >= this.state.framesPerAnimation) {
                    this.state.currentFrame %= this.state.framesPerAnimation;
                    this.state.jumping = false;
                }
            } else {
                this.state.currentFrame = (this.state.currentFrame + 1) % this.state.framesPerAnimation;
            }
            this.state.currentImage = this.state.animations.getAnimation(this.state.currentState).getImages()[this.state.currentFrame];
        }
    }

    // drawHitbox(box: any) {
    //     this.ctx.strokeStyle = 'yellow';
    //     this.ctx.strokeRect(
    //         box.position.x,
    //         box.position.y,
    //         box.dimensions.w,
    //         box.dimensions.h
    //     );
    //     this.ctx.strokeStyle = 'black';
    // }

    // drawCollisionDetectionBox(box: any) {
    //     this.ctx.strokeStyle = 'red';
    //     this.ctx.strokeRect(
    //         box.position.x - box.dimensions.w,
    //         box.position.y - box.dimensions.h / 2,
    //         box.dimensions.w * 3,
    //         box.dimensions.h * 2
    //     );
    //     this.ctx.strokeStyle = 'black';
    // }

    static draw() {
        const { x, y } = RenderingUtilities.toScreenCoordinates(State.ninjaState.position);
        const { w, h } = RenderingUtilities.toScreenDimensions(this.getSize());

        State.gameState.canvas.ctx.drawImage(
            State.ninjaState.currentImage, x, y, w, h
        );

        // this.drawHitbox(this.hitbox);
        // this.drawCollisionDetectionBox(this.hitbox);
    }

    static getSize(): Dimensions {
        return {
            w: State.ninjaState.currentImage.width / State.ninjaState.SPRITE_SIZER,
            h: State.ninjaState.currentImage.height / State.ninjaState.SPRITE_SIZER
        };
    }
}
