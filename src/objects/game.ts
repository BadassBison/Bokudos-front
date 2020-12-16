import { GameState } from '../states/gameState';
import { CanvasElement } from './canvas';
import { Background } from './background';

import '../styles.css';
// import { Box } from './box';
// import { BoxOptions } from '../interfaces/boxOptions';

import { Character } from './character';
import { DefaultCharacterOptions } from '../interfaces/characterOptions';

// @ts-ignore
import spriteImage from '~../../assets/sprites/skeleton.png';
// @ts-ignore
import crate from '../../assets/sprites/tileset_1/Object/Crate.png';
import { Ninja } from './ninja';
import { Platforms } from './platforms';
import { Stage } from './stage';
import { one } from '../stages/stage_1';
import {SettingsState} from "../states/settingsState";
import {DisplayText} from "./displayText";
import {GameView} from "./gameView";
import {Grid} from "./grid";

export class Game {
  private state: GameState;
  private settingsState: SettingsState;
  private gameView: GameView;

  constructor() {
    this.state = new GameState(innerWidth, innerHeight);
    this.state.canvas = new CanvasElement(innerWidth, innerHeight);
    this.state.background = new Background(innerWidth, innerHeight);
    this.settingsState = new SettingsState();
    this.gameView = new GameView(this.state.canvas.ctx);

    // const boxOptions: BoxOptions = {
    //   color: 'blue',
    //   height: 30,
    //   width: 30,
    //   position: { x: 100, y: 100 }
    // }
    // this.state.box = new Box(this.state.canvas.ctx, boxOptions);

    // const image = new Image();
    // image.src = spriteImage;
    // const characterOptions: DefaultCharacterOptions = {
    //   img: image,
    //   position: { x: 300, y: 300 },
    //   size: 1.5,
    // };
    // this.state.character = Character.defaultCharacterFactory(this.state.canvas.ctx, characterOptions);

    this.state.ninja = new Ninja(this.state.canvas.ctx, this.gameView);
    this.settingsState.cursorCoords = new DisplayText(this.state.canvas.ctx);
    this.settingsState.grid = new Grid(this.state.canvas.ctx, this.gameView);
    this.state.stage = new Stage(this.state.canvas.ctx, this.gameView, one);
  }

  // Updating the data, nothing with drawing/rendering
  update(): void {
    // this.state.box.update(this.state.keys);
    // this.state.character.update(this.state.keys);

    this.state.ninja.update(this.state.keys);
  }

  draw(): void {
    // TODO: Draw static images like the background to avoid rerendering
    // FIXME: When you add draw methods here, they do not render initially,
    // I think it is due to the images not having loaded yet
    this.drawEverything();
  }

  drawEverything(): void {
    requestAnimationFrame(() => {
      this.drawEverything();
    });

    this.refreshCanvas();
    this.update();

    this.state.stage.render();
    // this.state.box.draw();
    // this.state.character.draw();
    this.state.background.draw();
    this.state.ninja.draw();

    if(this.settingsState.debugMode) {
      this.settingsState.cursorCoords.draw();
      this.settingsState.grid.draw();
    }
  }

  refreshCanvas(): void {
    this.state.canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);

    // TODO: this will need to move slower than the foreground
    // this.state.bgCanvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
  }

  detectCollision(): void {
    const { x, y } = this.state.ninja.position;

  }

  getCanvas(): { [key: string]: HTMLCanvasElement } {
    return { canvas: this.state.canvas.canvasElement, bgCanvas: this.state.background.bgCanvas.canvasElement };
  }

  // EntryPoint
  run(): void {
    document.addEventListener('keydown', (evt: KeyboardEvent) => this.state.parseKey(evt.key, true));
    document.addEventListener('keyup', (evt: KeyboardEvent) => this.state.parseKey(evt.key, false));

    document.addEventListener('keyup', (evt: KeyboardEvent) => this.settingsState.parseKey(evt.key));

    document.addEventListener('mousemove', (evt: MouseEvent) => {
          this.settingsState.cursorCoords.updatePosition({x: evt.clientX, y: evt.clientY});
          const gameCoords = this.gameView.toGameCoordinates({x: evt.clientX, y: evt.clientY});
          const screenCoords = this.gameView.toScreenCoordinates(gameCoords);

          this.settingsState.cursorCoords.setText(
              "(" + gameCoords.x.toFixed(2) +", " + gameCoords.y.toFixed(2) + ")," +
              " (" + screenCoords.x.toFixed(0) +", " + screenCoords.y.toFixed(0) + ")");
    });

    window.addEventListener('resize', (ev => {
       this.state.canvas.canvasElement.height = innerHeight;
       this.state.canvas.canvasElement.width = innerWidth;
    }));
    this.draw();
  }


}
