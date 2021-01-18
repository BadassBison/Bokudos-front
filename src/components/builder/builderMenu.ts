import component from '../../decorators/component';
import RenderingUtilities from '../../utilites/renderingUtilities';
import { State } from '../../states/rootState';
import { MenuOptions } from '../../constants/menuOptions';
import { StageTile } from '../../objects/stageTile';
import { RegionApiHelpers } from '../../http/regionApiHelpers';
import { StageDto } from '../../interfaces/stageDto';
import { StageApiHelpers } from '../../http/stageApiHelpers';
import { RegionDto } from '../../interfaces/regionDto';
import ComponentUtilities from '../../utilites/componentUtilities';

@component()
export class BuilderMenu extends HTMLElement {

  static selector = 'bokudos-builder-menu';
  static type = 'menu';
  elementRef: HTMLElement;

  static register(): void {
    customElements.define(this.selector, this);
  }

  static buildComponent(): void {
    State.domState.builder.builderMenu = ComponentUtilities.ComponentBuilder<BuilderMenu>(this.selector);
  }

  constructor() {
    super();
    this.elementRef = ComponentUtilities.parentInit(this, BuilderMenu.type);
    State.builderState.builderMenuOpen = true;
    this.addTemplate(this.elementRef);
    this.addStyles(this.elementRef);
  }

  addTemplate(element: HTMLElement) {
    this.addTitle(element);
    this.addStageNameInput(element);
  }

  addStyles(element: HTMLElement) {
    element.style.background = 'rgb(211, 238, 247)';
    element.style.position = 'absolute';
    element.style.padding = '30px';
    element.style.top = '125px';
    element.style.left = '50px';
    element.style.width = '350px';
  }

  // TODO:
  addTitle(element: HTMLElement) {
    const title = ComponentUtilities.nodeBuilder('h1', 'Builder Menu');
    title.style.margin = '0 0 14px 0';
    element.appendChild(title);
  }

  // static addBuilderMenu() {

  //   this.addPlatformTileOptions(State.domState.builder.builderMenu);

  //   ComponentUtilities.appendNodeToBody(State.domState.builder.builderMenu);
  //   State.domState.builder.builderMenu.appendChild(this.addMenuButtons());
  // }

  // static removeBuilderMenu() {
  //   State.builderState.builderMenuOpen = false;
  //   if (State.domState.builder.builderMenu) {
  //     State.domState.builder.builderMenu.remove();
  //     State.domState.builder.builderMenu = null;
  //   }
  // }

  // static toggleBuilderMenu() {
  //   if (State.builderState.builderMenuOpen) {
  //     this.hideBuilderMenu();
  //   } else {
  //     this.showBuilderMenu();
  //   }
  // }

  // static hideBuilderMenu() {
  //   State.builderState.builderMenuOpen = false;
  //   State.domState.builder.builderMenu.classList.add('hidden');
  // }

  // static showBuilderMenu() {
  //   State.builderState.builderMenuOpen = true;
  //   State.domState.builder.builderMenu.classList.remove('hidden');
  // }

  addStageNameInput(element: HTMLElement) {
    const label = ComponentUtilities.nodeBuilder('label', 'Stage Name');
    const input = document.createElement('input');
    input.type = 'text';
    input.value = State.gameState.stageName;
    label.appendChild(input);
    label.style.display = 'flex';
    label.style.margin = '6px';
    label.style.justifyContent = 'space-between';
    label.style.fontSize = 'medium';
    element.appendChild(label);
  }

  // static addPlatformTileOptions(builder: HTMLElement): void {
  //   const wrapper = this.addWrapper(builder, 'Platform Tiles');

  //   const [option1, checkbox1] = this.addCheckbox('Show Grid');
  //   this.addShowGridCheckboxHandling(checkbox1 as HTMLInputElement);

  //   const [option2, checkbox2] = this.addCheckbox('Toggle Tile Selector');
  //   State.domState.builder.tileSelectorCheckbox = checkbox2 as HTMLInputElement;
  //   this.addTileCheckboxHandling(checkbox2);

  //   const [option3, checkbox3] = this.addCheckbox('Remove Tiles');
  //   State.domState.builder.removingTilesCheckbox = checkbox3 as HTMLInputElement;
  //   this.addDeleteTileCheckboxHandling(checkbox3);

  //   const [option4, clearButton] = this.addButton('Clear Stage');
  //   this.addClearStageClickHandling(clearButton);

  //   const [option5, button1, button2] = this.addButtons('Zoom');
  //   this.addZoomInClickHandling(button1);
  //   this.addZoomOutClickHandling(button2);

  //   ComponentUtilities.appendChildNodes(wrapper, [option1, option2, option3, option4, option5]);
  // }

  // static addWrapper(parentNode: HTMLElement, category: string = ''): HTMLElement {
  //   const wrapper = ComponentUtilities.nodeBuilder('div', '', ['wrapper']);
  //   if (category) {
  //     const title = ComponentUtilities.nodeBuilder('h3', category);
  //     wrapper.appendChild(title);
  //   }
  //   parentNode.appendChild(wrapper);

  //   return wrapper;
  // }

  // static addCheckbox(name: string): HTMLElement[] {
  //   const label = ComponentUtilities.nodeBuilder('label', `${name}`);
  //   const checkbox = document.createElement('input');
  //   checkbox.type = 'checkbox';
  //   label.appendChild(checkbox);

  //   return [label, checkbox];
  // }

  // static addButton(name: string): HTMLElement[] {
  //   const label = ComponentUtilities.nodeBuilder('label', `${name}`);
  //   const button = ComponentUtilities.nodeBuilder('button', `+`);
  //   label.appendChild(button);

  //   return [label, button];
  // }

  // static addButtons(name: string): HTMLElement[] {
  //   const label = ComponentUtilities.nodeBuilder('label', `${name}`);
  //   const button1 = ComponentUtilities.nodeBuilder('button', `+`);
  //   const button2 = ComponentUtilities.nodeBuilder('button', `-`);
  //   const btnWrapper = ComponentUtilities.nodeBuilder('span');
  //   btnWrapper.appendChild(button1);
  //   btnWrapper.appendChild(button2);
  //   label.appendChild(btnWrapper);

  //   return [label, button1, button2];
  // }

  // static addShowGridCheckboxHandling(checkbox: HTMLInputElement) {
  //   checkbox.checked = State.debugState.menuOptions[MenuOptions.GRID].enabled;

  //   checkbox.addEventListener('change', () => {
  //     State.debugState.menuOptions[MenuOptions.GRID].enabled = checkbox.checked;
  //   });
  // }

  // static addTileCheckboxHandling(checkbox: HTMLElement) {
  //   checkbox.addEventListener('change', () => {
  //     this.toggleTileSelector();
  //   });
  // }

  // static toggleTileSelector(): void {
  //   if (State.builderState.tileSelectorOpen) {
  //     State.domState.builder.tileSelector.classList.add('hidden');
  //     State.builderState.tileSelectorOpen = false;
  //   } else {
  //     State.domState.builder.tileSelector.classList.remove('hidden');
  //     State.builderState.tileSelectorOpen = true;
  //   }
  //   State.domState.builder.tileSelectorCheckbox.checked = State.builderState.tileSelectorOpen;
  // }

  // static addDeleteTileCheckboxHandling(checkbox: HTMLElement) {
  //   checkbox.addEventListener('change', () => {
  //     if (!State.builderState.removingTiles) {
  //       this.deleteTileMode(true);
  //     } else {
  //       this.deleteTileMode(false);
  //     }
  //   });
  // }

  // static deleteTileMode(enabled: boolean) {
  //   State.builderState.removingTiles = enabled;
  //   const canvas = document.querySelector('#canvas-fg');
  //   if (enabled) {
  //     canvas.classList.add('removing-tiles');
  //   } else {
  //     canvas.classList.remove('removing-tiles');
  //   }
  // }

  // static addClearStageClickHandling(button: HTMLElement) {
  //   button.addEventListener('click', () => {
  //     State.stageState.tiles.forEach((tile: StageTile) => {
  //       tile.lookupValue = '00';
  //     });
  //   });
  // }

  // static addZoomInClickHandling(button: HTMLElement) {
  //   button.addEventListener('click', () => {
  //     const { w, h } = State.gameState.currentGridDimensions;
  //     RenderingUtilities.setDimensions({ w: w - 1, h: h - 1 });
  //   });
  // }

  // static addZoomOutClickHandling(button: HTMLElement) {
  //   button.addEventListener('click', () => {
  //     const { w, h } = State.gameState.currentGridDimensions;
  //     RenderingUtilities.setDimensions({ w: w + 1, h: h + 1 });
  //   });
  // }

  // static addMenuButtons(): HTMLElement {
  //   const menuButtonWrapper = ComponentUtilities.nodeBuilder('div', '', ['builder--button-wrapper']);
  //   ComponentUtilities.appendNodeToBody(menuButtonWrapper);

  //   const saveBtn = ComponentUtilities.nodeBuilder('button', 'Save', ['button', 'builder--saveBtn']);
  //   saveBtn.addEventListener('click', async () => await this.saveStage());
  //   menuButtonWrapper.appendChild(saveBtn);

  //   const publishBtn = ComponentUtilities.nodeBuilder('button', 'Publish', ['button', 'builder--publishBtn']);
  //   publishBtn.addEventListener('click', async () => await this.publishStage());
  //   menuButtonWrapper.appendChild(publishBtn);

  //   return menuButtonWrapper;
  // }

  // static async saveStage(): Promise<void> {
  //   console.log('Saving Stage');

  //   const requests: Promise<RegionDto>[] = [];

  //   State.stageState.regions.forEach((idx: string) => {
  //     const pos = idx.split('-');
  //     const regionColumn = Number(pos[0]);
  //     const regionRow = Number(pos[1]);
  //     requests.push(RegionApiHelpers.postRegion(regionRow, regionColumn));
  //   });
  //   Promise.all(requests);
  // }

  // static async publishStage(): Promise<void> {
  //   console.log('publishing Stage');

  //   await this.saveStage();

  //   const stage: StageDto = {
  //     name: State.gameState.stageName,
  //     stageId: State.gameState.stageId,
  //     gameId: State.gameState.gameId,
  //     userId: State.gameState.userId,
  //     published: true
  //   };
  //   await StageApiHelpers.updateStage(stage);
  // }

}
