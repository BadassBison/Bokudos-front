export interface SoundClip {
  play(options?: object): Promise<any>;
  stop(): Promise<any>;
}
