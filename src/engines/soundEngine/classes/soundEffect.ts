import { SoundClip } from '../interfaces/soundClip';
import { Routable } from './routable';
import { playOptions } from '../interfaces/playOptions';

export class SoundEffect extends Routable implements SoundClip {
  path: string;
  audio: HTMLAudioElement;
  source: MediaElementAudioSourceNode;
  gainNode: GainNode;

  constructor(ctx: AudioContext, path: string) {
    super(ctx);

    this.path = path;

    this.audio = new Audio(path);
    this.audio.loop = false;
    this.source = ctx.createMediaElementSource(this.audio);
    this.source.connect(this.gainNode);
  }

  play(options: playOptions = {} as playOptions): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.audio.addEventListener('ended', () => resolve());
        this.audio.currentTime = 0;
        this.audio.play();
        this.fadeTo(options.volume || 1); // fade to prevent clicks/pops
      }, options.delay * 1000 || 0)
    });
  }

  stop(): Promise<void> {
    return new Promise(resolve => {
      this.fadeTo(0); // fade to prevent clicks/pops

      setTimeout(() => {
        this.audio.pause();
        this.audio.currentTime = 0;
        resolve();
      }, this.FADE_DEFAULT * 1000);
    });
  }
}
