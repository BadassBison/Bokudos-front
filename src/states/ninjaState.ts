import { NinjaAnimations } from '../animations/ninjaAnimations';
import { AnimationTypes } from '../constants/animationTypes';
import { Box } from '../interfaces/box';
import { Dimensions } from '../interfaces/dimensions';
import { Point } from '../interfaces/point';
import { Velocity } from '../interfaces/velocity';

export class NinjaState {
    animations: NinjaAnimations;
    attacking: boolean;
    attackUsed: boolean;
    collisionDetectionBox: Box;
    currentFrame: number;
    currentImage: HTMLImageElement;
    currentState: string;
    falling: boolean;
    frameCount: number;
    frameDelay: number;
    framesPerAnimation: number;
    hitbox: Box;
    hitboxOffset: Dimensions;
    jumping: boolean;
    jumpUsed: boolean;
    movingRight: boolean;
    position: Point;
    movementSpeed: number;
    movementAcceleration: number;
    // TODO: Gravity should be in the gameState, and it should effect a characters mass
    gravity: number;
    velocity: Velocity;
    terminalVelocity: number;
    jumpSpeed: number;
    SPRITE_SIZER: number;

    readonly HEIGHT_IN_UNITS: number = 2;

    constructor() {
        this.animations = new NinjaAnimations();
        this.attacking = false;
        this.attackUsed = false;
        this.currentFrame = 0;
        this.currentState = AnimationTypes.IDLE_RIGHT;
        this.falling = false;
        this.frameCount = 0;
        this.frameDelay = 4;
        this.framesPerAnimation = 10;
        this.jumping = false;
        this.movingRight = true;
        this.position = { x: 18, y: 7 };
        this.movementSpeed = .25;
        this.movementAcceleration = .01;
        this.gravity = .05;
        this.velocity = { dx: 0, dy: 0 };
        this.terminalVelocity = .75;
        this.jumpSpeed = .75;

        this.hitboxOffset = {
            w: .25,
            h: .25
        };
    }
}
