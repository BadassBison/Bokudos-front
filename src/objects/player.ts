import { Keys } from '../interfaces/keys';
import { Dimensions } from '../interfaces/dimensions';
import { State } from '../states/rootState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { PositionData } from '../interfaces/positionData';
import { PlayerState } from '../states/playerState';
import { UpdateObject } from '../interfaces/updateObject';
import { AnimationTypes } from '../constants/animationTypes';

export class Player implements UpdateObject {
    state: PlayerState;

    constructor(playerId: string) {
        this.state = new PlayerState(playerId);
    }

    getId(): string {
        return this.state.playerId;
    }

    render(): void {
        this.updateSprite();
        this.draw();
    }

    setPositionData(positionData: PositionData): void {
        this.state.positionData = positionData;
    }

    updateStateAfterImagesLoad(): void {
    }

    updateProperties(keys: Keys): void {
        this.updateAttackState(keys);
    }

    updateAnimation() {
    }

    updateAttackState({attack}: Keys): void {
        // indicate that we are starting the attack animation
        if (attack && !this.state.attacking && !this.state.attackUsed) {
            this.state.attacking = true;
            this.state.currentFrame = -1;
        }
        // we may want to add some kind of timer to prevent the user from attacking too fast
        this.state.attackUsed = attack;
    }

    getAnimationType(): string {
        const {direction, movement, action} = this.state.positionData.animation;
        return movement + (action != null ? '_' + action : '') + '_' + direction;
    }

    updateSprite() {
        this.state.currentImage = this.state.animations
            .getAnimation(this.getAnimationType()).getImages()[this.state.positionData.animation.frame];
    }

    draw() {
        if (this.state.positionData == null) {
            return;
        }
        if (this.state.SPRITE_SIZER == 0) {
            const image = this.state.animations.getAnimation(AnimationTypes.IDLE_RIGHT).getImages()[0];
            if (image && image.height > 0) {
                this.state.SPRITE_SIZER = image.height / this.state.positionData.height;
            } else {
                return;
            }
        }
        const {x, y} = RenderingUtilities.toScreenCoordinates({
            x: this.state.positionData.x,
            y: this.state.positionData.y
        });
        const {w, h} = RenderingUtilities.toScreenDimensions(this.getSize());
        State.gameState.canvas.ctx.drawImage(this.state.currentImage, x, y, w, h);
    }

    getSize(): Dimensions {
        return {
            w: this.state.currentImage.width / this.state.SPRITE_SIZER,
            h: this.state.currentImage.height / this.state.SPRITE_SIZER
        };
    }
}
