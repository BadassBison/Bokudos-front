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

    updateStateAfterImagesLoad(): void {

        this.state.currentImage = this.state.animations
            .getAnimation(this.state.currentState)
            .getImages()[this.state.currentFrame];

        this.state.SPRITE_SIZER = this.state.currentImage.height / this.state.HEIGHT_IN_UNITS;

        this.state.hitbox = {
            position: {
                x: this.state.position.x,
                y: this.state.position.y - this.state.hitboxOffset.h
            },
            dimensions: {
                w: this.state.currentImage.width / this.state.SPRITE_SIZER + this.state.hitboxOffset.w,
                h: this.state.currentImage.height / this.state.SPRITE_SIZER - this.state.hitboxOffset.h
            }
        };

        this.state.collisionDetectionBox = {
            position: { x: this.state.position.x - 2, y: this.state.position.y + 2 },
            dimensions: {
                w: this.state.currentImage.width / this.state.SPRITE_SIZER + 4,
                h: this.state.currentImage.height / this.state.SPRITE_SIZER + 4
            }
        };
    }

    updateProperties(keys: Keys): void {
        this.updatePosition(keys);
        this.updateAttackState(keys);
    }

    updateAnimation() {
        this.setCurrentAnimationState();
        this.updateSprite();
        this.draw();
    }

    updateAttackState({attack}: Keys): void {
        // indicate that we are starting the attack animation
        if(attack && !this.state.attacking && !this.state.attackUsed) {
            this.state.attacking = true;
            this.state.currentFrame = -1;
        }
        // we may want to add some kind of timer to prevent the user from attacking too fast
        this.state.attackUsed = attack;
    }

    updatePosition({ up, right, left }: Keys): void {
        const velocity = { dx: 0, dy: this.state.velocity.dy };
        if (up && !this.state.jumping && !this.state.jumpUsed) {
            velocity.dy += this.state.jumpSpeed;
        }
        if (right !== left) {
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
        State.gameState.position = { x: this.state.position.x - State.gameState.gameUnitDimensions.w / 2, y: this.state.position.y - 5 };
        this.updateHitboxAndCollisionDetectionBoxPositions();
    }

    setCurrentAnimationState() {
        if(this.state.attacking && this.state.currentFrame === this.state.framesPerAnimation-1) {
            this.state.attacking = false;
        }

        // if the velocity is 0, keep the direction that the character was last facing
        if (this.state.velocity.dx !== 0) {
            this.state.movingRight = this.state.velocity.dx > 0;
        }
        if (this.state.velocity.dy === 0) {
            this.state.jumping = false;
        } else if (!this.state.jumping) {
            this.state.jumping = true;
            if(this.state.attacking) {
                this.state.currentState = this.state.movingRight ? AnimationTypes.JUMP_ATTACK_RIGHT : AnimationTypes.JUMP_ATTACK_LEFT;
            } else {
                this.state.currentFrame = -1;
                this.state.currentState = this.state.movingRight ? AnimationTypes.JUMP_RIGHT : AnimationTypes.JUMP_LEFT;
            }
        }

        if (!this.state.jumping) {
            if(this.state.attacking) {
                this.state.currentState = this.state.movingRight ? AnimationTypes.ATTACK_RIGHT : AnimationTypes.ATTACK_LEFT;
            } else if (this.state.velocity.dx === 0) {
                this.state.currentState = this.state.movingRight ? AnimationTypes.IDLE_RIGHT : AnimationTypes.IDLE_LEFT;
            } else {
                this.state.currentState = this.state.movingRight ? AnimationTypes.RUN_RIGHT : AnimationTypes.RUN_LEFT;
            }
        } else if(this.state.attacking) {
            this.state.currentState = this.state.movingRight ? AnimationTypes.JUMP_ATTACK_RIGHT : AnimationTypes.JUMP_ATTACK_LEFT;
        }
    }

    updateHitboxAndCollisionDetectionBoxPositions() {
        this.state.hitbox.position = {
            x: this.state.position.x - this.state.hitbox.dimensions.w/2,
            y: this.state.position.y - this.state.hitboxOffset.h
        };
        this.state.collisionDetectionBox.position = {
            x: this.state.position.x - 2 - this.state.hitbox.dimensions.w/2,
            y: this.state.position.y + 2
        };
    }

    updateSprite() {
        this.state.frameCount++;
        this.state.frameCount %= this.state.frameDelay;

        if (this.state.frameCount === 0) {
            // when jumping, we don't want to cycle through the animations, and instead just stay on the last frame (may want a separate falling animation later)
            if(!this.state.jumping || this.state.currentFrame + 1 < this.state.framesPerAnimation) {
                this.state.currentFrame = (this.state.currentFrame + 1) % this.state.framesPerAnimation;
            }
            this.state.currentImage = this.state.animations.getAnimation(this.state.currentState).getImages()[this.state.currentFrame];
        }
    }

    draw() {
        const { x, y } = RenderingUtilities.toScreenCoordinates(State.ninjaState.position);
        const { w, h } = RenderingUtilities.toScreenDimensions(this.getSize());

        State.gameState.canvas.ctx.drawImage(
            State.ninjaState.currentImage, x - w/2, y, w, h
        );
    }

    getSize(): Dimensions {
        return {
            w: State.ninjaState.currentImage.width / State.ninjaState.SPRITE_SIZER,
            h: State.ninjaState.currentImage.height / State.ninjaState.SPRITE_SIZER
        };
    }
}
