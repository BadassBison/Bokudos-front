import { AnimationTypes } from '../constants/animationTypes';
import { EnemyAnimations } from '../animations/enemyAnimations';
import { PositionData } from '../interfaces/positionData';

export class EnemyState {
    animations: EnemyAnimations;
    currentFrame: number;
    currentImage: HTMLImageElement;
    currentAnimation: string;
    enemyId: string;
    frameCount: number;
    frameDelay: number;
    framesPerAnimation: number;
    movingRight: boolean;
    positionData: PositionData;

    constructor(enemyId: string) {
        this.animations = new EnemyAnimations();
        this.currentFrame = 0;
        this.currentAnimation = AnimationTypes.WALK_LEFT;
        this.enemyId = enemyId;
        this.frameCount = 0;
        this.frameDelay = 4;
        this.framesPerAnimation = 8;
        this.movingRight = false;
    }
}
