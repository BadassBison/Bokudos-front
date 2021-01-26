import { Direction } from '../enums/direction';
import { Movement } from '../enums/movement';
import { Action } from '../enums/action';

export interface AnimationData {
    direction: Direction;
    movement: Movement;
    action: Action
    frame: number;
}
