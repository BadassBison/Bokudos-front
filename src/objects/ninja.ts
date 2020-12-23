import { Keys } from '../interfaces/keys';

import { AnimationTypes } from '../constants/animationTypes';
import { Dimensions } from '../interfaces/dimensions';
import { State } from '../states/rootState';
import { NinjaState } from '../states/ninjaState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { UpdateObject } from '../interfaces/updateObject';
import { CollisionUtilities } from "../utilites/collisionUtilities";

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

        let velocity = { dx: 0, dy: 0 };

        if (right) {
            this.state.movingRight = true;
            if (!this.state.jumping) { this.state.currentState = AnimationTypes.RUN_RIGHT; }
            velocity.dx += this.state.speed;
        }

        if (left) {
            this.state.movingRight = false;
            if (!this.state.jumping) { this.state.currentState = AnimationTypes.RUN_LEFT; }
            velocity.dx -= this.state.speed;
        }

        // FIXME: Delete this.state if block after collision detection is fixed
        if (up) {
            this.state.movingRight = true;
            if (!this.state.jumping) { this.state.currentState = AnimationTypes.RUN_RIGHT; }
            velocity.dy += this.state.speed;
        }

        // FIXME: Delete this.state if block after collision detection is fixed
        if (down) {
            this.state.movingRight = true;
            if (!this.state.jumping) { this.state.currentState = AnimationTypes.RUN_LEFT; }
            velocity.dy -= this.state.speed;
        }

        const updatedVelocity = CollisionUtilities.collideWithTiles(this.state.hitbox, velocity);

        this.state.position.x += updatedVelocity.dx;
        this.state.position.y += updatedVelocity.dy;

        // TODO: may want to reconsider how this is being done... This is to center the view on the ninja
        State.gameState.position = { x: this.state.position.x - State.gameState.gameUnitDimensions.w / 2 + .5, y: this.state.position.y - 5 };
        this.updateHitboxAndCollisionDetectionBoxPositions();
    }

    updateHitboxAndCollisionDetectionBoxPositions() {
        this.state.hitbox.position = {
            x: this.state.position.x,
            y: this.state.position.y - this.state.hitboxOffset.h
        };
        this.state.collisionDetectionBox.position = {
            x: this.state.position.x - 2,
            y: this.state.position.y + 2
        };
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

    static draw() {
        const { x, y } = RenderingUtilities.toScreenCoordinates(State.ninjaState.position);
        const { w, h } = RenderingUtilities.toScreenDimensions(this.getSize());

        State.gameState.canvas.ctx.drawImage(
            State.ninjaState.currentImage, x, y, w, h
        );
    }

    static getSize(): Dimensions {
        return {
            w: State.ninjaState.currentImage.width / State.ninjaState.SPRITE_SIZER,
            h: State.ninjaState.currentImage.height / State.ninjaState.SPRITE_SIZER
        };
    }
}
