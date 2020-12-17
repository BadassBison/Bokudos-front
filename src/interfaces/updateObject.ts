import { Keys } from './keys';

export interface UpdateObject {
    update(keys: Keys): void;
}
