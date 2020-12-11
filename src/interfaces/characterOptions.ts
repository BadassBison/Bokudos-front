import { Point } from "./point";

export class CharacterOptions {
    img: HTMLImageElement
    position: Point;
    size: number;
    speed: number;
    columns: number;
    rows: number;
    spriteWidth: number;
    spriteHeight: number;
    srcX: number;
    srcY: number;
    frameDelay: number
}

export class DefaultCharacterOptions {
    img: HTMLImageElement
    position: Point;
    size: number;
}