import { AudioChannel } from './classes/audioChannel';
import { PolyphonicSoundEffect } from './classes/polyphonicSoundEffect';
import { SoundEffect } from './classes/soundEffect';

export class SoundEngine {
  private static ctx: AudioContext;

  static getContext(): AudioContext {
    if (!SoundEngine.ctx) {
      SoundEngine.ctx = new AudioContext();
    }

    return SoundEngine.ctx;
  }

  static getSpeakers(): AudioNode {
    const ctx = SoundEngine.getContext();
    return ctx.destination;
  }

  static createChannel(): AudioChannel {
    const ctx = SoundEngine.getContext();
    return new AudioChannel(ctx);
  }

  static createSound(path: string, polyphonic = true): SoundEffect | PolyphonicSoundEffect {
    const ctx = SoundEngine.getContext();

    if (polyphonic) {
      return new PolyphonicSoundEffect(ctx, path);
    }

    return new SoundEffect(ctx, path);
  }
}
