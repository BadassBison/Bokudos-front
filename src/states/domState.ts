import StartScreenComponent from '../components/startScreen';

export default class DomState {
  startScreen: {
    startScreenComponent: StartScreenComponent
    stageDropdown: HTMLSelectElement;
  };
  builderMode: {
    builderMenuWrapper: HTMLElement;
    builderMenuContent: HTMLElement;
    builderMenuButtons: HTMLElement;
    savingStageButtons: HTMLElement;
    stageDropdown: HTMLSelectElement;
    tileSelector: HTMLElement;
  };

  constructor() {
    this.startScreen = {
      startScreenComponent: null,
      stageDropdown: null
    };

    this.builderMode = {
      builderMenuWrapper: null,
      builderMenuContent: null,
      builderMenuButtons: null,
      savingStageButtons: null,
      stageDropdown: null,
      tileSelector: null
    };
  }
}
