import StartScreenComponent from '../components/startScreen';

export default class DomState {
  startScreen: StartScreenComponent;
  builder: {
    builderMenu: HTMLElement;
    builderMenuButtons: HTMLElement;
    removingTilesCheckbox: HTMLInputElement;
    selectedTile: HTMLElement;
    tileSelector: HTMLElement;
    tileSelectorCheckbox: HTMLInputElement;
  };

  constructor() { }
}
