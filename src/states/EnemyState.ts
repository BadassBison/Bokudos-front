import { AnimationTypes } from '../constants/animationTypes';
import { Box } from '../interfaces/box';
import { Point } from '../interfaces/point';
import { Velocity } from '../interfaces/velocity';
import { EnemyAnimations } from '../animations/enemyAnimations';

export class EnemyState {
    animations: EnemyAnimations;
    currentFrame: number;
    currentImage: HTMLImageElement;
    currentState: string;
    frameCount: number;
    frameDelay: number;
    framesPerAnimation: number;
    hitbox: Box;
    movingRight: boolean;
    position: Point;
    gravity: number;
    velocity: Velocity;
    terminalVelocity: number;
    SPRITE_SIZER: number;

    readonly HEIGHT_IN_UNITS: number = .8;

    constructor() {
        this.animations = new EnemyAnimations();
        this.currentFrame = 0;
        this.currentState = AnimationTypes.WALK_LEFT;
        this.frameCount = 0;
        this.frameDelay = 4;
        this.framesPerAnimation = 8;
        this.movingRight = false;
        this.position = { x: 19, y: 28 };
        this.gravity = .05;
        this.velocity = { dx: -.04, dy: 0 };
        this.terminalVelocity = .75;
    }
}
