import { Keys } from './keys';

export interface UpdateObject {
    updateStateAfterImagesLoad(): void;
    updateProperties(keys: Keys): void;
    updateAnimation(keys: Keys): void;
}
