import { CanvasElement } from '../objects/canvas';
import { Point } from '../interfaces/point';
import { Keys } from '../interfaces/keys';
import { Dimensions } from '../interfaces/dimensions';
import { UpdateObject } from '../interfaces/updateObject';
import { RenderingEngine } from '../engines/renderingEngine';
import { AudioChannel, SoundEngine } from '../engines/soundEngine';

export class GameState {
    canvas: CanvasElement;
    assetMap: Map<string, UpdateObject>;
    renderingEngine: RenderingEngine;
    keys: Keys;
    defaultFramesPerSecond: number;
    defaultFrameDelay: number;
    minimumDimension: number;
    defaultGridDimensions: Dimensions;
    currentGridDimensions: Dimensions;
    framesPerSecond: number;
    gameUnit: number;
    screenHeight: number;
    screenWidth: number;
    pixelsPerUnit: number;
    position: Point; // the screen position indicates the coordinates of the center of the view in game coords
    gameUnitDimensions: Dimensions; // d represents the dimensions of the view in game units
    screenPixelDimensions: Dimensions;
    paused: boolean;
    defaultColor: string;
    defaultLineWidth: number;
    timeoutId: NodeJS.Timeout;
    soundEffectsChannel: AudioChannel;

    stageId: number;
    stageName: string;
    gameId: number;
    userId: number;

    constructor() {
        this.keys = {
            up: false,
            down: false,
            left: false,
            right: false,
            shift: false,
            attack: false,
            glide: false
        };
        this.gameUnit = 1;
        this.screenWidth = innerWidth;
        this.screenHeight = innerHeight;
        this.canvas = new CanvasElement(innerWidth, innerHeight, 'canvas-fg');
        this.position = { x: 0, y: 0 };
        this.defaultFramesPerSecond = 60;
        this.defaultFrameDelay = 1000 / this.defaultFramesPerSecond;
        this.minimumDimension = 10;
        this.defaultGridDimensions = { w: 14, h: 14 };
        this.currentGridDimensions = this.defaultGridDimensions;
        this.framesPerSecond = this.defaultFramesPerSecond;
        this.paused = false;
        this.defaultColor = 'black';
        this.defaultLineWidth = 1;
        this.gameId = 1;
        this.stageId = 1;
        this.userId = 1;

        const speakers = SoundEngine.getSpeakers();
        this.soundEffectsChannel = SoundEngine.createChannel();
        this.soundEffectsChannel.connect(speakers);
    }
}
