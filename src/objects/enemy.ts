import { AnimationTypes } from '../constants/animationTypes';
import { State } from '../states/rootState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { EnemyState } from '../states/EnemyState';
import { PositionData } from '../interfaces/positionData';
import { UpdateObject } from '../interfaces/updateObject';
import { MenuOptions } from '../constants/menuOptions';
import { Dimensions } from '../interfaces/dimensions';
import { Point } from '../interfaces/point';

export class Enemy implements UpdateObject {
    state: EnemyState;

    constructor(enemyId: string) {
        this.state = new EnemyState(enemyId);
    }

    setPositionData(positionData: PositionData): void {
        this.state.positionData = positionData;
    }

    render(): void {
        this.setCurrentAnimationState();
        this.updateSprite();
        this.draw();
    }

    getId(): string {
        return this.state.enemyId;
    }

    setCurrentAnimationState() {
        // if the velocity is 0, keep the direction that the character was last facing
        if (this.state.positionData.dx !== 0) {
            this.state.movingRight = this.state.positionData.dx > 0;
        }
        this.state.currentAnimation = this.state.movingRight ? AnimationTypes.WALK_RIGHT : AnimationTypes.WALK_LEFT;
    }

    updateSprite() {
        this.state.frameCount++;
        this.state.frameCount %= this.state.frameDelay;

        if (this.state.frameCount === 0) {
            this.state.currentFrame = (this.state.currentFrame + 1) % this.state.framesPerAnimation;
            this.state.currentImage = this.state.animations.getAnimation(this.state.currentAnimation).getImages()[this.state.currentFrame];
        } else if (this.state.currentImage == null) {
            this.state.currentImage = this.state.animations
                .getAnimation(this.state.currentAnimation)
                .getImages()[this.state.currentFrame];
        }
    }

    draw() {
        if (this.state.positionData == null) {
            return;
        }
        const { x, y } = RenderingUtilities.toScreenCoordinates({x: this.state.positionData.x, y: this.state.positionData.y});
        const { w, h } = RenderingUtilities.toScreenDimensions({w: this.state.positionData.width, h: this.state.positionData.height});
        if (!State.debugState.debugMode || State.debugState.menuOptions[MenuOptions.ENEMY_SPRITES].enabled) {
            State.gameState.canvas.ctx.drawImage(this.state.currentImage, x, y, w, h);
        }
        this.drawOutline({ x, y }, { w, h });
        this.drawHitbox({ x, y }, { w, h });
    }

    drawOutline(point: Point, dimensions: Dimensions) {
        if (State.debugState.debugMode && State.debugState.menuOptions[MenuOptions.ENEMY_OUTLINE].enabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.ENEMY_OUTLINE].color;
            State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.ENEMY_OUTLINE].lineWidth;
            State.gameState.canvas.ctx.strokeRect(point.x, point.y, dimensions.w, dimensions.h);
        }
    }

    drawHitbox(point: Point, dimensions: Dimensions) {
        if (State.debugState.debugMode && State.debugState.menuOptions[MenuOptions.ENEMY_HITBOX].enabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.ENEMY_HITBOX].color;
            State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.ENEMY_HITBOX].lineWidth;
            State.gameState.canvas.ctx.strokeRect(point.x, point.y, dimensions.w, dimensions.h);
        }
    }
}
