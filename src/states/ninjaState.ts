import { NinjaAnimations } from '../animations/ninjaAnimations';
import { AnimationTypes } from '../constants/animationTypes';
import { Box } from '../interfaces/box';
import { Dimensions } from '../interfaces/dimensions';
import { PlatformSides } from '../interfaces/platformSides';
import { Point } from '../interfaces/point';

export class NinjaState {
    animations: NinjaAnimations;
    attacking: boolean;
    collisionDetectionBox: Box;
    currentFrame: number;
    currentImage: HTMLImageElement;
    currentState: string;
    falling: boolean;
    frameCount: number;
    frameDelay: number;
    framesPerAnimation: number;
    hitbox: Box;
    jumping: boolean;
    movingRight: boolean;
    position: Point;
    size: number;
    speed: number;
    walls: PlatformSides;

    readonly HEIGHT_IN_UNITS: number = 2;
    readonly SPRITE_SIZER: number;

    constructor() {
        this.animations = new NinjaAnimations();
        this.attacking = false;
        this.currentFrame = 0;
        this.currentImage = this.animations.getAnimation(this.currentState).getImages()[this.currentFrame];
        this.currentState = AnimationTypes.IDLE_RIGHT;
        this.falling = false;
        this.frameCount = 0;
        this.frameDelay = 6;
        this.framesPerAnimation = 10;
        this.jumping = false;
        this.movingRight = true;
        this.position = { x: 3, y: 6 };
        this.size = 0.15;
        this.speed = .25;
        this.SPRITE_SIZER = this.currentImage.height / this.HEIGHT_IN_UNITS;

        this.hitbox = {
            position: this.position,
            dimensions: {
                w: this.currentImage.width / this.SPRITE_SIZER,
                h: this.currentImage.height / this.SPRITE_SIZER
            }
        };

        this.collisionDetectionBox = {
            position: { x: this.position.x - 2, y: this.position.y + 2 },
            dimensions: {
                w: this.currentImage.width / this.SPRITE_SIZER + 4,
                h: this.currentImage.height / this.SPRITE_SIZER + 4
            }
        };

        this.walls = { top: false, right: false, bottom: false, left: false }
    }
}
