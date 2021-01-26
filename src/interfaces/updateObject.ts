import { PositionData } from './positionData';

export interface UpdateObject {
    render(): void;
    getId(): string;
    setPositionData(state: PositionData): void;
}
