import { playOptions } from './playOptions';

export interface SoundClip {
  play(options: playOptions): Promise<any>;
  stop(): Promise<any>;
}
