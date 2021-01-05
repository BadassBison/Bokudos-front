import left1 from '../../assets/sprites/enemy/left_1.png';
import left2 from '../../assets/sprites/enemy/left_2.png';
import left3 from '../../assets/sprites/enemy/left_3.png';
import left4 from '../../assets/sprites/enemy/left_4.png';
import left5 from '../../assets/sprites/enemy/left_5.png';
import left6 from '../../assets/sprites/enemy/left_6.png';
import left7 from '../../assets/sprites/enemy/left_7.png';
import left8 from '../../assets/sprites/enemy/left_8.png';

import right1 from '../../assets/sprites/enemy/right_1.png';
import right2 from '../../assets/sprites/enemy/right_2.png';
import right3 from '../../assets/sprites/enemy/right_3.png';
import right4 from '../../assets/sprites/enemy/right_4.png';
import right5 from '../../assets/sprites/enemy/right_5.png';
import right6 from '../../assets/sprites/enemy/right_6.png';
import right7 from '../../assets/sprites/enemy/right_7.png';
import right8 from '../../assets/sprites/enemy/right_8.png';

import { ImageBuilder } from './imageBuilder';
import { AnimationTypes } from '../constants/animationTypes';

export class EnemyAnimations {
    animations: { [index: string]: ImageBuilder } = {};

    constructor() {
        this.animations[AnimationTypes.WALK_LEFT] = new ImageBuilder([left1, left2, left3, left4, left5, left6, left7, left8]);
        this.animations[AnimationTypes.WALK_RIGHT] = new ImageBuilder([right1, right2, right3, right4, right5, right6, right7, right8]);
    }

    getAnimation(animationState: string): ImageBuilder {
        if (this.animations[animationState]) {
            return this.animations[animationState];
        }
        return this.animations[AnimationTypes.IDLE_RIGHT];
    }

    getAnimationTypes(): string[] {
        return Object.keys(this.animations).map(key => {
            return key;
        });
    }
}
