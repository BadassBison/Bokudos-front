import component from '../decorators/component';
import ComponentUtilities from '../utilites/componentUtilities';
import GameButton from './gameButton';

@component()
export default class StartScreenComponent extends HTMLElement {

  static selector = 'bokudos-start-screen';
  elementRef: HTMLElement;

  static register(): void {
    customElements.define(this.selector, this);
  }

  static buildComponent(): StartScreenComponent {
    return ComponentUtilities.ComponentBuilder<StartScreenComponent>(this.selector);
  }

  constructor() {
    super();
    this.elementRef = ComponentUtilities.parentInit(this);
    this.addTemplate(this.elementRef);
    this.addStyles(this.elementRef);
  }

  startButtonHandler(cb: any): void {
    const button = this.elementRef.querySelector('button');
    console.log('testing', button);
    button.addEventListener('click', () => cb());
  }

  addTemplate(element: HTMLElement): void {
    this.addTitle(element);
    this.addStartButton(element);
  }

  addStyles(element: HTMLElement): void {
    element.style.width = '100vw';
    element.style.height = '100vh';
    element.style.background = 'lightgray';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.justifyContent = 'space-around';
    element.style.alignItems = 'center';
  }

  addTitle(element: HTMLElement) {
    const title = ComponentUtilities.nodeBuilder('h1', 'Bokudos');
    element.appendChild(title);
  }

  addStartButton(element: HTMLElement) {
    const button = GameButton.buildComponent();
    button.addText('Start');
    element.appendChild(button.elementRef);
  }

  connectedCallback() {
    console.log('Added!');
  }

}
