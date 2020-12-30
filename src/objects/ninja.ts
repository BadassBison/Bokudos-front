import { Keys } from '../interfaces/keys';

import { AnimationTypes } from '../constants/animationTypes';
import { Dimensions } from '../interfaces/dimensions';
import { State } from '../states/rootState';
import { NinjaState } from '../states/ninjaState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { UpdateObject } from '../interfaces/updateObject';
import { CollisionUtilities } from '../utilites/collisionUtilities';

export class Ninja implements UpdateObject {
    state: NinjaState;

    constructor() {
        this.state = State.ninjaState;
    }

    updateProperties(keys: Keys): void {
        this.updatePosition(keys);
    }

    updateAnimation() {
        this.setCurrentAnimationState();
        this.updateSprite();
        this.draw();
    }

    updatePosition({ up, right, left, down }: Keys): void {
        const velocity = { dx: 0, dy: this.state.velocity.dy };
        if (up && !this.state.jumping && !this.state.jumpUsed) {
            velocity.dy += this.state.jumpSpeed;
        }
        if(right !== left) {
            velocity.dx = right ? this.state.movementSpeed : -this.state.movementSpeed;
        }
        if (velocity.dy > -this.state.terminalVelocity) {
            velocity.dy -= this.state.gravity;
        }

        const updatedVelocity = CollisionUtilities.collideWithTiles(this.state.hitbox, velocity);
        this.state.velocity = updatedVelocity;

        this.state.position.x += updatedVelocity.dx;
        this.state.position.y += updatedVelocity.dy;

        // To remove repetitive jumping when key is held
        this.state.jumpUsed = up;

        // TODO: may want to reconsider how this is being done... This is to center the view on the ninja
        State.gameState.position = { x: this.state.position.x - State.gameState.gameUnitDimensions.w / 2 + .5, y: this.state.position.y - 5 };
        this.updateHitboxAndCollisionDetectionBoxPositions();
    }

    setCurrentAnimationState() {
        // if the velocity is 0, keep the direction that the character was last facing
        if(this.state.velocity.dx !== 0) {
            this.state.movingRight = this.state.velocity.dx > 0;
        }
        if(this.state.velocity.dy === 0) {
            this.state.jumping = false;
        } else if (!this.state.jumping) {
            this.state.jumping = true;
            this.state.currentFrame = -1;
            this.state.currentState = this.state.movingRight ? AnimationTypes.JUMP_RIGHT : AnimationTypes.JUMP_LEFT;
        }

        if(!this.state.jumping) {
            if(this.state.velocity.dx === 0) {
                this.state.currentState = this.state.movingRight ? AnimationTypes.IDLE_RIGHT : AnimationTypes.IDLE_LEFT;
            } else {
                this.state.currentState = this.state.movingRight ? AnimationTypes.RUN_RIGHT : AnimationTypes.RUN_LEFT;
            }
        }
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
                }
            } else {
                this.state.currentFrame = (this.state.currentFrame + 1) % this.state.framesPerAnimation;
            }
            this.state.currentImage = this.state.animations.getAnimation(this.state.currentState).getImages()[this.state.currentFrame];
        }
    }

    draw() {
        const { x, y } = RenderingUtilities.toScreenCoordinates(State.ninjaState.position);
        const { w, h } = RenderingUtilities.toScreenDimensions(this.getSize());

        State.gameState.canvas.ctx.drawImage(
            State.ninjaState.currentImage, x, y, w, h
        );
    }

    getSize(): Dimensions {
        return {
            w: State.ninjaState.currentImage.width / State.ninjaState.SPRITE_SIZER,
            h: State.ninjaState.currentImage.height / State.ninjaState.SPRITE_SIZER
        };
    }
}
