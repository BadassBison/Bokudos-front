import sword_whip from '../../assets/sounds/SwordWhipFencing.wav';

import { SoundClip, SoundEngine } from '../engines/soundEngine';
import { SoundTypes } from '../constants/soundTypes';
import { State } from '../states/rootState';

export class NinjaSounds {
  sounds: { [index: string]: SoundClip } = {};

  constructor() {
    this.sounds[SoundTypes.SWORD_SWING] = SoundEngine.createSound(sword_whip);

    // connect sounds to sound effects channel
    const { soundEffectsChannel } = State.gameState;
    for (let key in this.sounds) {
      this.sounds[key].connect(soundEffectsChannel);
    }
  }

  getSound(soundName: string): SoundClip {
    return this.sounds[soundName] || null;
  }
}
