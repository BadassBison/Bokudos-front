import component from '../decorators/component';
import ComponentUtilities from '../utilites/componentUtilities';

@component()
export default class GameButtonComponent extends HTMLElement {

  static selector = 'bokudos-button';
  static type = 'button';
  elementRef: HTMLElement;

  static register() {
    customElements.define(this.selector, this);
  }

  static buildComponent(): GameButtonComponent {
    const btnComponent = ComponentUtilities.ComponentBuilder<GameButtonComponent>(this.selector);
    return btnComponent;
  }

  constructor() {
    super();
    this.elementRef = ComponentUtilities.nodeBuilder(GameButtonComponent.type);
    this.addStyles();
  }

  addText(text: string) {
    this.elementRef.innerText = text;
  }

  addStyles() {
    this.elementRef.style.width = '100px';
    this.elementRef.style.height = '50px';
    this.elementRef.style.background = 'rgb(66, 184, 221)';
    this.elementRef.style.color = 'white';
    this.elementRef.style.borderRadius = '10px';
    this.elementRef.style.fontSize = 'large';
    this.elementRef.style.fontWeight = '500';
  }

}
