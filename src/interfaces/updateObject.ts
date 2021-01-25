import { Keys } from './keys';
import { PositionData } from './positionData';

export interface UpdateObject {
    updateStateAfterImagesLoad(): void;
    updateProperties(keys: Keys): void;
    updateAnimation(keys: Keys): void;

    render(): void;
    getId(): string;
    setPositionData(state: PositionData): void;
}
