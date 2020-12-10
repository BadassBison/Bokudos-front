import { CanvasElement } from '../objects/canvas';
import { Point } from '../interfaces/point';
import { Keys } from '../interfaces/keys';
import { Box } from '../objects/box';

export class GameState {
    box: Box;
    canvas: CanvasElement;
    gamePaused: boolean;
    gameRunning: boolean;
    keys: Keys;
    playerPosition: Point;
    screenHeight: number;
    screenWidth: number;

    constructor(width: number, height: number) {
        this.keys = {
            up: false,
            down: false,
            left: false,
            right: false,
            space: false,
            shift: false
        }
        this.screenWidth = width;
        this.screenHeight = height;
        this.playerPosition = {
            x: width / 2,
            y: height / 2
        }
        console.log('gameState');
    }

    parseKey(key: string, pressed: boolean) {
        switch (key) {
            case "ArrowUp":
            case "w":
                if (pressed && !this.keys.up || !pressed && this.keys.up) {
                    this.keys.up = pressed;
                }
                break;

            case "ArrowDown":
            case "s":
                if (pressed && !this.keys.down || !pressed && this.keys.down) {
                    this.keys.down = pressed;
                }
                break;

            case "ArrowLeft":
            case "a":
                if (pressed && !this.keys.left || !pressed && this.keys.left) {
                    this.keys.left = pressed;
                }
                break;

            case "ArrowRight":
            case "d":
                if (pressed && !this.keys.right || !pressed && this.keys.right) {
                    this.keys.right = pressed;
                }
                break;

            case " ":
                if (pressed && !this.keys.space || !pressed && this.keys.space) {
                    this.keys.space = pressed;
                }
                break;

            case "Shift":
                if (pressed && !this.keys.shift || !pressed && this.keys.shift) {
                    this.keys.shift = pressed;
                }
                break;
        }
    }
}