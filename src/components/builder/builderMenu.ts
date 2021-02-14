import { RenderingUtilities } from '../../utilites/renderingUtilities';
import { State } from '../../states/rootState';
import { MenuOptions } from '../../constants/menuOptions';
import { StageTile } from '../../objects/stageTile';
import { RegionApiHelpers } from '../../http/regionApiHelpers';
import { StageDto } from '../../interfaces/stageDto';
import { StageApiHelpers } from '../../http/stageApiHelpers';
import { RegionDto } from '../../interfaces/regionDto';
import ComponentUtilities from '../../utilites/componentUtilities';

// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Node
export class BuilderMenu {

  static init(eventHandler: any) {

  }

  static addBuilderMenu() {
    State.builderState.builderMenuOpen = true;
    State.domState.builderMenu = ComponentUtilities.nodeBuilder('content', '<h1 class="title">Builder Menu</h1>', ['builder-mode']);

    this.addStagesDropdown();
    this.addPlatformTileOptions(State.domState.builderMenu);

    ComponentUtilities.appendNodeToBody(State.domState.builderMenu);
    State.domState.builderMenu.appendChild(this.addMenuButtons());
  }

  static removeBuilderMenu() {
    State.builderState.builderMenuOpen = false;
    if (State.domState.builderMenu) {
      State.domState.builderMenu.remove();
      State.domState.builderMenu = null;
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
    State.domState.builderMenu.classList.add('hidden');
  }

  static showBuilderMenu() {
    State.builderState.builderMenuOpen = true;
    State.domState.builderMenu.classList.remove('hidden');
  }

  static addStagesDropdown() {
    State.domState.stageDropdown = ComponentUtilities.nodeBuilder('select') as HTMLSelectElement;
    
    const defaultOption = ComponentUtilities.nodeBuilder('option', 'Default Stage') as HTMLOptionElement;
    defaultOption.value = '1';
    State.domState.stageDropdown.append(defaultOption);

    for (const stage of State.stageState.stages) {
      const stageOption = ComponentUtilities.nodeBuilder('option', stage.name) as HTMLOptionElement;
      stageOption.value = stage.stageId + '';
      State.domState.stageDropdown.append(stageOption);
    }
    const label = ComponentUtilities.nodeBuilder('label', 'Stages ');
    label.append(State.domState.stageDropdown);

    State.domState.builderMenu.appendChild(label);
    State.domState.stageDropdown.style.width = '150px';

    State.domState.stageDropdown.addEventListener('change', () => {
      const id: string = State.domState.stageDropdown.value;
      if (id === '-' || Number(id) === State.stageState.selectedStageId) { return; }
      State.stageState.selectedStageId = Number(id);
      State.gameState.stageId = Number(id);
      RegionApiHelpers.getAllRegionsForStage(Number(id));
    });
  }

  static addPlatformTileOptions(builder: HTMLElement): void {
    const wrapper = this.addWrapper(builder, 'Platform Tiles');

    const [option1, checkbox1] = this.addCheckbox('Show Grid');
    this.addShowGridCheckboxHandling(checkbox1 as HTMLInputElement);

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

    ComponentUtilities.appendChildNodes(wrapper, [option1, option2, option3, option4, option5]);
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
    checkbox.checked = State.debugState.menuOptions[MenuOptions.GRID].enabled;

    checkbox.addEventListener('change', () => {
      State.debugState.menuOptions[MenuOptions.GRID].enabled = checkbox.checked;
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

    return menuButtonWrapper;
  }

  static async newStage(): Promise<void> {
    console.log('Creating a new stage');

    const newStageWrapper = ComponentUtilities.nodeBuilder('div', 'New Stage Name: ', ['builder--newStageDiv']);
    const stageNameInput = ComponentUtilities.nodeBuilder('input') as HTMLInputElement;
    const saveStageButton = ComponentUtilities.nodeBuilder('button', 'Save', ['button', 'builder--saveBtn']);
    newStageWrapper.appendChild(stageNameInput);
    newStageWrapper.appendChild(saveStageButton);
    ComponentUtilities.appendNodeToBody(newStageWrapper);
    
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
      State.gameState.stageId = stageResult.stageId;
      await this.updateStage();
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

}
