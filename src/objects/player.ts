import { Dimensions } from '../interfaces/dimensions';
import { State } from '../states/rootState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { PositionData } from '../interfaces/positionData';
import { PlayerState } from '../states/playerState';
import { UpdateObject } from '../interfaces/updateObject';
import { AnimationTypes } from '../constants/animationTypes';
import { MenuOptions } from '../constants/menuOptions';
import { Point } from '../interfaces/point';

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
        const currentRegion = RenderingUtilities.getRegion({ x: positionData.x, y: positionData.y });
        if (!this.state.currentRegion || this.state.currentRegion !== currentRegion) {
            this.state.currentRegion = currentRegion;
            // FIXME: Commented out for the pres
            // const [ regionColumn, regionRow ] = RenderingUtilities.splitRegionString(currentRegion);
            // RegionApiHelpers.getNeighboringRegionsForStage(State.gameState.stageId, Number(regionRow), Number(regionColumn));
        }
    }

    getAnimationType(): string {
        const {direction, movement, action} = this.state.positionData.animation;
        const test = movement + (action != null ? '_' + action : '') + '_' + direction;
        // console.log(test);
        return test;
    }

    updateSprite() {
        this.state.currentImage = this.state.animations
            .getAnimation(this.getAnimationType()).getImages()[this.state.positionData.animation.frame];
    }

    draw() {
        if (this.state.positionData === null) {
            return;
        }

        const {x, y} = RenderingUtilities.toScreenCoordinates({
            x: this.state.positionData.x,
            y: this.state.positionData.y
        });
        const size = this.getSize();
        const spritePoint = RenderingUtilities.toScreenCoordinates({
            x: this.state.positionData.x - (size.w/2) + (this.state.positionData.width/2),
            y: this.state.positionData.y
        });

        const {w, h} = RenderingUtilities.toScreenDimensions(this.getSize());
        if (!State.debugState.debugMode || State.debugState.menuOptions[MenuOptions.PLAYER_SPRITES].enabled) {
            if (this.state.SPRITE_SIZER === 0) {
                const image = this.state.animations.getAnimation(AnimationTypes.IDLE_RIGHT).getImages()[0];
                if (image && image.height > 0) {
                    this.state.SPRITE_SIZER = image.height / this.state.positionData.height;
                } else {
                    return;
                }
            }
            State.gameState.canvas.ctx.drawImage(this.state.currentImage, spritePoint.x, spritePoint.y, w, h);
        }
        this.drawOutline(spritePoint, {w, h});
        this.drawHitbox({x, y});
    }

    getSize(): Dimensions {
        return {
            w: this.state.currentImage.width / this.state.SPRITE_SIZER,
            h: this.state.currentImage.height / this.state.SPRITE_SIZER
        };
    }

    drawOutline(point: Point, dimensions: Dimensions) {
        if (State.debugState.debugMode && State.debugState.menuOptions[MenuOptions.PLAYER_OUTLINE].enabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.PLAYER_OUTLINE].color;
            State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.PLAYER_OUTLINE].lineWidth;
            State.gameState.canvas.ctx.strokeRect(point.x, point.y, dimensions.w, dimensions.h);
        }
    }

    drawHitbox(point: Point) {
        if (State.debugState.debugMode && State.debugState.menuOptions[MenuOptions.HITBOX].enabled) {
            State.gameState.canvas.ctx.strokeStyle = State.debugState.menuOptions[MenuOptions.HITBOX].color;
            State.gameState.canvas.ctx.lineWidth = State.debugState.menuOptions[MenuOptions.HITBOX].lineWidth;
            const {w, h} = RenderingUtilities.toScreenDimensions({
                w: this.state.positionData.width,
                h: this.state.positionData.height
            });
            State.gameState.canvas.ctx.strokeRect(point.x, point.y, w, h);
        }
    }
}
