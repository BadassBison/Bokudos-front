import component from '../decorators/component';
import { RegionApiHelpers } from '../http/regionApiHelpers';
import { StageApiHelpers } from '../http/stageApiHelpers';
import { StageDto } from '../interfaces/stageDto';
import { State } from '../states/rootState';
import ComponentUtilities from '../utilites/componentUtilities';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { BuilderMode } from './builder/builderMode';
import GameButton from './gameButton';

@component()
export default class StartScreenComponent extends HTMLElement {

  static selector = 'bokudos-start-screen';
  elementRef: HTMLElement;

  static register(): void {
    customElements.define(this.selector, this);
  }

  static buildComponent(): void {
    State.domState.startScreen.startScreenComponent = ComponentUtilities.ComponentBuilder<StartScreenComponent>(this.selector);
  }

  constructor() {
    super();
    this.elementRef = ComponentUtilities.parentInit(this);
    this.addTemplate(this.elementRef);
    this.addStyles(this.elementRef);
  }

  addTemplate(element: HTMLElement): void {
    this.addTitle(element);
    this.addStageDropdown(element);
    this.addButtons(element);
  }

  addStyles(element: HTMLElement): void {
    element.style.width = '100vw';
    element.style.height = '100vh';
    element.style.position = 'absolute';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.justifyContent = 'space-around';
    element.style.alignItems = 'center';
  }

  removeStartScreen() {
    State.domState.startScreen.startScreenComponent.remove();
  }

  addTitle(element: HTMLElement) {
    const title = ComponentUtilities.nodeBuilder('h1', 'Bokudos');
    element.appendChild(title);
  }

  addButtons(element: HTMLElement) {
    const wrapper = ComponentUtilities.nodeBuilder('div');
    this.addStartButton(wrapper);
    this.addBuilderButton(wrapper);
    element.appendChild(wrapper);
    wrapper.style.width = '30vw';
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'space-between';
  }

  addStartButton(element: HTMLElement) {
    const button = GameButton.buildComponent();
    button.addText('Start');
    button.elementRef.id = 'start-btn';
    element.appendChild(button.elementRef);
  }

  startButtonHandler(cb: any): void {
    const button: HTMLElement = this.elementRef.querySelector('#start-btn');
    button.addEventListener('click', () => {
      const id = State.stageState.selectedStageId;
      // Must explicitly say no null or undefined because '0' and 0 are falsy values
      if (id === null || id === undefined) { return; }

      // TODO: Add starting position to RenderingUtilities
      State.gameState.position = { x: 0, y: 1000 };
      RenderingUtilities.setDimensions({ w: 24, h: 24 });
      RenderingUtilities.zoomDimensionsInOrOut(14);
      cb();
      this.removeStartScreen();
    });
  }

  addBuilderButton(element: HTMLElement) {
    const button = GameButton.buildComponent();
    button.addText('Builder');
    element.appendChild(button.elementRef);
    button.elementRef.addEventListener('click', async () => {
      await RegionApiHelpers.getAllRegionsForDefaultStage();
      await StageApiHelpers.getStagesByUser(State.gameState.userId);
      BuilderMode.openBuilderMode();
      this.removeStartScreen();
    });
  }

  addStageDropdown(element: HTMLElement) {
    const label = ComponentUtilities.nodeBuilder('label', 'Stages ');
    State.domState.startScreen.stageDropdown = ComponentUtilities.nodeBuilder('select') as HTMLSelectElement;
    const blankOption = ComponentUtilities.nodeBuilder('option', '-');
    State.domState.startScreen.stageDropdown.append(blankOption);
    label.append(State.domState.startScreen.stageDropdown);
    State.domState.startScreen.stageDropdown.style.width = '100px';
    element.appendChild(label);

    State.domState.startScreen.stageDropdown.addEventListener('change', (evt) => {

      const id = Number(State.domState.startScreen.stageDropdown.value);
      State.stageState.selectedStageId = id;
      State.gameState.stageId = id;
      RegionApiHelpers.getRegionForStage(id, 0, 0);
    });
  }

  async connectedCallback() {
    State.stageState.stages = await StageApiHelpers.getPublishedStages();
    State.stageState.stages.forEach((opt: StageDto) => {
      const stageItem: HTMLOptionElement = ComponentUtilities.nodeBuilder('option') as HTMLOptionElement;
      stageItem.value = opt.stageId + '';
      stageItem.innerText = `${opt.name}`;
      State.domState.startScreen.stageDropdown.append(stageItem as HTMLElement);
    });
  }

}
