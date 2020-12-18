import { Point } from './point';

export interface DetectionArea {
    topLeft: Point;
    topRight: Point;
    bottomLeft: Point;
    bottomRight: Point;
}