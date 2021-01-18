import StartScreenComponent from './startScreen';
import GameButtonComponent from './gameButton';

export default class ComponentRegistry {
  static registerComponents() {
    StartScreenComponent.register();
    GameButtonComponent.register();
  }
}
