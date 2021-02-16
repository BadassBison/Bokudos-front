import { RenderingUtilities } from '../../utilites/renderingUtilities';
import { State } from '../../states/rootState';
import { MenuOptions } from '../../constants/menuOptions';
import { StageTile } from '../../objects/stageTile';
import { RegionApiHelpers } from '../../http/regionApiHelpers';
import { StageDto } from '../../interfaces/stageDto';
import { StageApiHelpers } from '../../http/stageApiHelpers';
import { RegionDto } from '../../interfaces/regionDto';
import ComponentUtilities from '../../utilites/componentUtilities';
import { BuilderMode } from './builderMode';

// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Node
export class BuilderMenu {

  static addBuilderMenu() {
    State.builderState.builderMenuOpen = true;
    State.domState.builderMode.builderMenuWrapper = ComponentUtilities.nodeBuilder('div', '', ['builder-mode']);
    State.domState.builderMode.builderMenuContent = ComponentUtilities.nodeBuilder('div', '<h1 class="title">Builder Menu</h1>', ['builder--builderMenu-content']);

    this.addStagesDropdown();
    this.addPlatformTileOptions(State.domState.builderMode.builderMenuContent);

    State.domState.builderMode.builderMenuWrapper.appendChild(State.domState.builderMode.builderMenuContent);
    State.domState.builderMode.builderMenuWrapper.appendChild(this.addMenuButtons());
    ComponentUtilities.appendNodeToBody(State.domState.builderMode.builderMenuWrapper);
  }

  static removeBuilderMenu() {
    State.builderState.builderMenuOpen = false;
    if (State.domState.builderMode.builderMenuWrapper) {
      State.domState.builderMode.builderMenuWrapper.remove();
      State.domState.builderMode.builderMenuWrapper = null;
      State.domState.builderMode.builderMenuContent = null;
      State.domState.builderMode.builderMenuButtons = null;
      State.domState.builderMode.savingStageButtons = null;
    }
  }

  static toggleBuilderMenu() {
    if (State.builderState.builderMenuOpen) {
      this.hideBuilderMenu();
    } else {
      this.showBuilderMenu();
    }
  }

  static hideBuilderMenu() {
    State.builderState.builderMenuOpen = false;
    State.domState.builderMode.builderMenuWrapper.classList.add('hidden');
  }

  static showBuilderMenu() {
    State.builderState.builderMenuOpen = true;
    State.domState.builderMode.builderMenuWrapper.classList.remove('hidden');
  }

  static addStagesDropdown() {
    State.domState.builderMode.stageDropdown = ComponentUtilities.nodeBuilder('select') as HTMLSelectElement;

    const defaultOption = ComponentUtilities.nodeBuilder('option', 'Default Stage') as HTMLOptionElement;
    defaultOption.value = '1';
    State.domState.builderMode.stageDropdown.append(defaultOption);

    for (const stage of State.stageState.stages) {
      const stageOption = ComponentUtilities.nodeBuilder('option', stage.name) as HTMLOptionElement;
      stageOption.value = stage.stageId + '';
      State.domState.builderMode.stageDropdown.append(stageOption);
    }
    const label = ComponentUtilities.nodeBuilder('label', 'Stages ');
    label.append(State.domState.builderMode.stageDropdown);

    State.domState.builderMode.builderMenuContent.appendChild(label);
    State.domState.builderMode.stageDropdown.style.width = '150px';

    State.domState.builderMode.stageDropdown.addEventListener('change', () => {
      const id: string = State.domState.builderMode.stageDropdown.value;
      if (id === '-' || Number(id) === State.stageState.selectedStageId) { return; }
      State.stageState.selectedStageId = Number(id);
      State.gameState.stageId = Number(id);
      State.stageState.tiles = new Map();
      RegionApiHelpers.getAllRegionsForStage(Number(id));
      State.domState.builderMode.stageDropdown.blur();
    });
  }

  static addPlatformTileOptions(builder: HTMLElement): void {
    const wrapper = this.addWrapper(builder, 'Platform Tiles');

    const [option1a, checkbox1a] = this.addCheckbox('Show Grid');
    this.addShowGridCheckboxHandling(checkbox1a as HTMLInputElement);

    const [option1b, checkbox1b] = this.addCheckbox('Show Regions');
    this.addShowRegionsCheckboxHandling(checkbox1b as HTMLInputElement);

    const [option2, checkbox2] = this.addCheckbox('Toggle Tile Selector');
    State.builderState.tileSelectorCheckbox = checkbox2 as HTMLInputElement;
    this.addTileCheckboxHandling(checkbox2);

    const [option3, checkbox3] = this.addCheckbox('Remove Tiles');
    State.builderState.removingTilesCheckbox = checkbox3 as HTMLInputElement;
    this.addDeleteTileCheckboxHandling(checkbox3);

    const [option4, clearButton] = this.addButton('Clear Stage');
    this.addClearStageClickHandling(clearButton);

    const [option5, button1, button2] = this.addButtons('Zoom');
    this.addZoomInClickHandling(button1);
    this.addZoomOutClickHandling(button2);

    ComponentUtilities.appendChildNodes(wrapper, [option1a, option1b, option2, option3, option4, option5]);
  }

  static addWrapper(parentNode: HTMLElement, category: string = ''): HTMLElement {
    const wrapper = ComponentUtilities.nodeBuilder('div', '', ['wrapper']);
    if (category) {
      const title = ComponentUtilities.nodeBuilder('h3', category);
      wrapper.appendChild(title);
    }
    parentNode.appendChild(wrapper);

    return wrapper;
  }

  static addCheckbox(name: string): HTMLElement[] {
    const label = ComponentUtilities.nodeBuilder('label', `${name}`);
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);

    return [label, checkbox];
  }

  static addButton(name: string): HTMLElement[] {
    const label = ComponentUtilities.nodeBuilder('label', `${name}`);
    const button = ComponentUtilities.nodeBuilder('button', `+`);
    label.appendChild(button);

    return [label, button];
  }

  static addButtons(name: string): HTMLElement[] {
    const label = ComponentUtilities.nodeBuilder('label', `${name}`);
    const button1 = ComponentUtilities.nodeBuilder('button', `+`);
    const button2 = ComponentUtilities.nodeBuilder('button', `-`);
    const btnWrapper = ComponentUtilities.nodeBuilder('span');
    btnWrapper.appendChild(button1);
    btnWrapper.appendChild(button2);
    label.appendChild(btnWrapper);

    return [label, button1, button2];
  }

  static addShowGridCheckboxHandling(checkbox: HTMLInputElement) {
    checkbox.checked = State.builderState.showGrid;

    checkbox.addEventListener('change', () => {
      State.builderState.showGrid = checkbox.checked;
    });
  }

  static addShowRegionsCheckboxHandling(checkbox: HTMLInputElement) {
    checkbox.checked = State.builderState.showRegions;

    checkbox.addEventListener('change', () => {
      State.builderState.showRegions = checkbox.checked;
    });
  }

  static addTileCheckboxHandling(checkbox: HTMLElement) {
    checkbox.addEventListener('change', () => {
      this.toggleTileSelector();
    });
  }

  static toggleTileSelector(): void {
    if (State.builderState.tileSelectorOpen) {
      State.builderState.tileSelector.classList.add('hidden');
      State.builderState.tileSelectorOpen = false;
    } else {
      State.builderState.tileSelector.classList.remove('hidden');
      State.builderState.tileSelectorOpen = true;
    }
    State.builderState.tileSelectorCheckbox.checked = State.builderState.tileSelectorOpen;
  }

  static addDeleteTileCheckboxHandling(checkbox: HTMLElement) {
    checkbox.addEventListener('change', () => {
      if (!State.builderState.removingTiles) {
        this.deleteTileMode(true);
      } else {
        this.deleteTileMode(false);
      }
    });
  }

  static deleteTileMode(enabled: boolean) {
    State.builderState.removingTiles = enabled;
    const canvas = document.querySelector('#canvas-fg');
    if (enabled) {
      canvas.classList.add('removing-tiles');
    } else {
      canvas.classList.remove('removing-tiles');
    }
  }

  static addClearStageClickHandling(button: HTMLElement) {
    button.addEventListener('click', () => {
      State.stageState.tiles.forEach((tile: StageTile) => {
        tile.lookupValue = '00';
      });
    });
  }

  static addZoomInClickHandling(button: HTMLElement) {
    button.addEventListener('click', () => {
      const { w, h } = State.gameState.currentGridDimensions;
      RenderingUtilities.setDimensions({ w: w - 1, h: h - 1 });
    });
  }

  static addZoomOutClickHandling(button: HTMLElement) {
    button.addEventListener('click', () => {
      const { w, h } = State.gameState.currentGridDimensions;
      RenderingUtilities.setDimensions({ w: w + 1, h: h + 1 });
    });
  }

  static addMenuButtons(): HTMLElement {
    const menuButtonWrapper = ComponentUtilities.nodeBuilder('div', '', ['builder--button-wrapper']);
    ComponentUtilities.appendNodeToBody(menuButtonWrapper);

    const newStageBtn = ComponentUtilities.nodeBuilder('button', 'New', ['button', 'builder--newStageBtn']);
    newStageBtn.addEventListener('click', async () => await this.newStage());
    menuButtonWrapper.appendChild(newStageBtn);

    const saveBtn = ComponentUtilities.nodeBuilder('button', 'Update', ['button', 'builder--updateBtn']);
    saveBtn.addEventListener('click', async () => await this.updateStage());
    menuButtonWrapper.appendChild(saveBtn);

    const publishBtn = ComponentUtilities.nodeBuilder('button', 'Publish', ['button', 'builder--publishBtn']);
    publishBtn.addEventListener('click', async () => await this.publishStage());
    menuButtonWrapper.appendChild(publishBtn);

    const playBtn = ComponentUtilities.nodeBuilder('button', 'Play', ['button', 'builder--playBtn']);
    playBtn.addEventListener('click', () => this.play());
    menuButtonWrapper.appendChild(playBtn);

    return menuButtonWrapper;
  }

  static async newStage(): Promise<void> {
    console.log('Creating a new stage');
    State.builderState.saving = true;

    const newStageWrapper = ComponentUtilities.nodeBuilder('div', 'New Stage Name: ', ['builder--newStageDiv']);
    const stageNameInput = ComponentUtilities.nodeBuilder('input') as HTMLInputElement;

    const buttonsWrapper = ComponentUtilities.nodeBuilder('div', '', ['builder--newStageButtonsWrapper']);
    const saveStageButton = ComponentUtilities.nodeBuilder('button', 'Save', ['button', 'builder--saveBtn']);
    const cancelStageButton = ComponentUtilities.nodeBuilder('button', 'Cancel', ['button', 'builder--cancelBtn']);
    newStageWrapper.appendChild(stageNameInput);
    newStageWrapper.appendChild(buttonsWrapper);
    buttonsWrapper.appendChild(saveStageButton);
    buttonsWrapper.appendChild(cancelStageButton);
    State.domState.builderMode.builderMenuWrapper.appendChild(newStageWrapper);

    stageNameInput.addEventListener('keyup', () => {
      State.builderState.stageName = stageNameInput.value;
    });

    saveStageButton.addEventListener('click', async () => {
      console.log('Saving Stage');
      const stage = {
        name: State.builderState.stageName,
        userId: State.gameState.userId,
        gameId: State.gameState.gameId,
        published: false
      };
      const stageResult = await StageApiHelpers.addStage(stage);
      State.builderState.saving = false;
      newStageWrapper.remove();

      State.gameState.stageId = stageResult.stageId;

      const newOption = ComponentUtilities.nodeBuilder('option', stageResult.name) as HTMLOptionElement;
      newOption.value = stageResult.stageId + '';
      State.domState.builderMode.stageDropdown.append(newOption);
      State.domState.builderMode.stageDropdown.value = newOption.value;

      await this.updateStage();
    });

    cancelStageButton.addEventListener('click', () => {
      newStageWrapper.remove();
      State.builderState.saving = false;
    });

  }

  static async updateStage(): Promise<void> {
    console.log('Updating Stage');

    const requests: Promise<RegionDto>[] = [];

    State.stageState.regions.forEach((idx: string) => {
      const pos = idx.split(State.stageState.colRowSeparator);
      const regionColumn = Number(pos[0]);
      const regionRow = Number(pos[1]);
      requests.push(RegionApiHelpers.postRegion(regionRow, regionColumn));
    });
    await Promise.all(requests);
  }

  static async publishStage(): Promise<void> {
    console.log('publishing Stage');

    await this.updateStage();

    const stage: StageDto = {
      name: State.gameState.stageName,
      stageId: State.gameState.stageId,
      gameId: State.gameState.gameId,
      userId: State.gameState.userId,
      published: true
    };
    await StageApiHelpers.updateStage(stage);
  }

  static play(): void {
    console.log('Play button');
    BuilderMode.closeBuilderMode();
    State.builderState.setStartScreen();
  }

}
