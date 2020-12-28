import { Keys } from './keys';

export interface UpdateObject {
    updateProperties(keys: Keys): void;
    updateAnimation(keys: Keys): void;
}
