import { Routable } from '../classes/routable';
import { playOptions } from './playOptions';

export interface SoundClip extends Routable {
  play(options?: playOptions): Promise<any>;
  stop(): Promise<any>;
}
