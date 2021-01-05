import { Keys } from '../interfaces/keys';

import { AnimationTypes } from '../constants/animationTypes';
import { Dimensions } from '../interfaces/dimensions';
import { State } from '../states/rootState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { UpdateObject } from '../interfaces/updateObject';
import { CollisionUtilities } from '../utilites/collisionUtilities';
import { EnemyState } from '../states/EnemyState';

export class Enemy implements UpdateObject {
    state: EnemyState;

    constructor() {
        this.state = State.enemyState;
    }

    updateStateAfterImagesLoad(): void {
        this.state.currentImage = this.state.animations
            .getAnimation(this.state.currentState)
            .getImages()[this.state.currentFrame];
        this.state.SPRITE_SIZER = this.state.currentImage.height / this.state.HEIGHT_IN_UNITS;

        this.state.hitbox = {
            position: {
                x: this.state.position.x,
                y: this.state.position.y
            },
            dimensions: {
                w: this.state.currentImage.width / this.state.SPRITE_SIZER,
                h: this.state.currentImage.height / this.state.SPRITE_SIZER
            }
        };
    }

    updateProperties(keys: Keys): void {
        this.updatePosition();
    }

    updateAnimation() {
        this.setCurrentAnimationState();
        this.updateSprite();
        this.draw();
    }

    updatePosition(): void {
        const velocity = { dx: this.state.velocity.dx, dy: this.state.velocity.dy };
        if (velocity.dy > -this.state.terminalVelocity) {
            velocity.dy -= this.state.gravity;
        }

        const updatedVelocity = CollisionUtilities.collideWithTiles(this.state.hitbox, velocity);

        // when enemies run into walls, they just turn around and walk the other direction
        if(this.state.velocity.dx !== updatedVelocity.dx) {
            this.state.velocity.dx = -this.state.velocity.dx;
        }
        this.state.velocity.dy = updatedVelocity.dy;

        this.state.position.x += updatedVelocity.dx;
        this.state.position.y += updatedVelocity.dy;

        this.updateHitboxAndCollisionDetectionBoxPositions();
    }

    setCurrentAnimationState() {
        // if the velocity is 0, keep the direction that the character was last facing
        if (this.state.velocity.dx !== 0) {
            this.state.movingRight = this.state.velocity.dx > 0;
        }
        this.state.currentState = this.state.movingRight ? AnimationTypes.WALK_RIGHT : AnimationTypes.WALK_LEFT;
    }

    updateHitboxAndCollisionDetectionBoxPositions() {
        this.state.hitbox.position = {
            x: this.state.position.x - this.state.hitbox.dimensions.w/2,
            y: this.state.position.y
        };
    }

    updateSprite() {
        this.state.frameCount++;
        this.state.frameCount %= this.state.frameDelay;

        if (this.state.frameCount === 0) {
            this.state.currentFrame = (this.state.currentFrame + 1) % this.state.framesPerAnimation;
            this.state.currentImage = this.state.animations.getAnimation(this.state.currentState).getImages()[this.state.currentFrame];
        }
    }

    draw() {
        const { x, y } = RenderingUtilities.toScreenCoordinates(this.state.position);
        const { w, h } = RenderingUtilities.toScreenDimensions(this.getSize());

        State.gameState.canvas.ctx.drawImage(
            this.state.currentImage, x - w/2, y, w, h
        );
    }

    getSize(): Dimensions {
        return {
            w: this.state.currentImage.width / this.state.SPRITE_SIZER,
            h: this.state.currentImage.height / this.state.SPRITE_SIZER
        };
    }
}
