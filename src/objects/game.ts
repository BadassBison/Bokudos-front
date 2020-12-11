import { GameState } from '../states/gameState';
import { CanvasElement } from './canvas';

// import { Box } from './box';
// import { BoxOptions } from '../interfaces/boxOptions';

import { Character } from './character';
import { DefaultCharacterOptions } from '../interfaces/characterOptions';

// @ts-ignore
import spriteImage from '~../../assets/sprites/skeleton.png';
// @ts-ignore
import crate from '../../assets/sprites/tileset_1/Object/Crate.png';
import { Ninja } from './ninja';

export class Game {
  private state: GameState;

  constructor() {
    this.state = new GameState(innerWidth, innerHeight);
    this.state.canvas = new CanvasElement(innerWidth, innerHeight);

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

    this.state.ninja = new Ninja(this.state.canvas.ctx);
  }

  // Updating the data, nothing with drawing/rendering
  update(): void {
    // this.state.box.update(this.state.keys);
    // this.state.character.update(this.state.keys);

    this.state.ninja.update(this.state.keys);
  }

  draw(): void {
    requestAnimationFrame(() => {
      this.refreshCanvas();
      this.update();
      // this.state.box.draw();

      // this.state.character.draw();
      this.state.ninja.draw();

      this.draw();
    });
  }

  private refreshCanvas(): void {
    this.state.canvas.ctx.clearRect(0, 0, innerWidth, innerHeight);
  }

  // EntryPoint
  run(): HTMLCanvasElement {
    document.addEventListener('keydown', (evt: KeyboardEvent) => this.state.parseKey(evt.key, true));
    document.addEventListener('keyup', (evt: KeyboardEvent) => this.state.parseKey(evt.key, false));

    this.draw();
    return this.state.canvas.canvasElement;
  }
}
