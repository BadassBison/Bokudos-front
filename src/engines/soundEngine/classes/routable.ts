import { SoundEngine } from "../soundEngine";

export class Routable {
  ctx: AudioContext;
  gainNode: GainNode;

  protected FADE_DEFAULT = .015;

  constructor(ctx: AudioContext) {
    this.ctx = ctx;
    this.gainNode = ctx.createGain();
  }

  /**
   * Connect to destination
   * @param destination Where audio gets routed to
   * @return Destination to allow for chaining
   */
  connect(destination: Routable | AudioNode): AudioNode {
    if (destination instanceof Routable) {
      this.gainNode.connect(destination.gainNode);
      return destination.gainNode;
    } else if (destination instanceof AudioNode) {
      this.gainNode.connect(destination);
      return destination;
    }
  }

  /**
   * Disconnect from destination
   * @param destination Where audio is currently routed to
   */
  disconnect(destination: Routable | AudioNode): void {
    if (destination instanceof Routable) {
      this.gainNode.disconnect(destination.gainNode);
    } else if (destination instanceof AudioNode) {
      this.gainNode.disconnect(destination);
    }
  }

  /**
   * Gets gainNode volume
   * @return Volume
   */
  get volume(): number {
    return this.gainNode.gain.value;
  }

  /**
   * Sets the volume level
   * @param volume Volume level between 0 and 1
   */
  set volume(volume: number) {
    const { gain } = this.gainNode;

    // clamp volume between 0 and 1
    volume = Math.min(Math.max(volume, 0), 1);

    gain.value = volume;
  }

  /**
   * Smooth fade to target volume
   * @param volume  Target volume between 0 and 1
   * @param seconds Duration of fade in seconds
   */
  fadeTo(volume: number, seconds = this.FADE_DEFAULT): void {
    const { currentTime } = this.ctx;
    const { gain } = this.gainNode;
    
    // clamp volume between 0 and 1
    volume = Math.min(Math.max(volume, 0), 1);

    gain.exponentialRampToValueAtTime(Math.max(volume, .001), currentTime + seconds);
    gain.setTargetAtTime(volume, currentTime + seconds, 0.5); // fade remaining amount
  }
}
