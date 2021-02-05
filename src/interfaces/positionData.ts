import { AnimationData } from './animationData';

export interface PositionData {
    assetType: string;
    x: number;
    y: number;
    dx: number;
    dy: number;
    width: number;
    height: number;

    jumping: boolean;
    attacking: boolean;
    animation: AnimationData;
}
