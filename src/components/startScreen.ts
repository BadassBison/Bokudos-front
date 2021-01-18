import component from '../decorators/component';
import { State } from '../states/rootState';
import ComponentUtilities from '../utilites/componentUtilities';
import BuilderMode from './builder/builderMode';
import GameButton from './gameButton';

@component()
export default class StartScreenComponent extends HTMLElement {

  static selector = 'bokudos-start-screen';
  elementRef: HTMLElement;

  static register(): void {
    customElements.define(this.selector, this);
  }

  static buildComponent(): void {
    State.domState.startScreen = ComponentUtilities.ComponentBuilder<StartScreenComponent>(this.selector);
  }

  constructor() {
    super();
    this.elementRef = ComponentUtilities.parentInit(this);
    this.addTemplate(this.elementRef);
    this.addStyles(this.elementRef);
  }

  addTemplate(element: HTMLElement): void {
    this.addTitle(element);
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
    State.domState.startScreen.remove();
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
      cb();
      this.removeStartScreen();
    });
  }

  addBuilderButton(element: HTMLElement) {
    const button = GameButton.buildComponent();
    button.addText('Builder');
    element.appendChild(button.elementRef);
    button.elementRef.addEventListener('click', () => {
      BuilderMode.buildComponent();
      this.removeStartScreen();
    });
  }

  connectedCallback() {
    console.log('Start Screen added to the DOM!');
    // TODO: Fetch stage data for default state
  }

}
