import { SoundClip } from '../interfaces/soundClip';
import { SoundEffect } from './soundEffect';
import { Routable } from './routable';
import { playOptions } from './soundEffect';

export class PolyphonicSoundEffect extends Routable implements SoundClip {
  path: string;

  private playedSounds: SoundEffect[] = [];

  constructor(ctx: AudioContext, path: string) {
    super(ctx);

    this.path = path;
  }

  play(options?: playOptions): Promise<any> {
    const sound = new SoundEffect(this.ctx, this.path);
    sound.connect(this);

    // store sound instance so it can be stopped
    this.playedSounds.push(sound);

    return sound.play(options).then(e => {
      this.playedSounds.shift();
      return e;
    });
  }

  stop(): Promise<any> {
    return Promise.all(this.playedSounds.map(sound => sound.stop())).then();
  }
}
