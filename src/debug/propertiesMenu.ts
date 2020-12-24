import { State } from '../states/rootState';

export class PropertiesMenu {

  static addPropertiesButton() {
    const propertiesBtn = document.createElement('button');
    propertiesBtn.classList.add('button', 'propertiesBtn');
    propertiesBtn.innerHTML = 'Properties';
    propertiesBtn.addEventListener('click', () => this.toggleProperties());
    propertiesBtn.addEventListener('mouseenter', () => {
      State.builderState.handleMouseClick = false;
    });
    propertiesBtn.addEventListener('mouseleave', () => {
      State.builderState.handleMouseClick = true;
    });
    const body = document.querySelector('body');
    body.appendChild(propertiesBtn);
  }

  static removePropertiesButton() { }

  static toggleProperties() {
    if (State.debugState.propertiesOpen) {
      this.removeProperties();
    } else {
      this.openProperties();
    }
  }

  static openProperties() { }

  static removeProperties() { }

  static addProperties(propList: HTMLElement) { }

  static addProperty(propList: HTMLElement, name: string): HTMLElement {
    return propList;
  }

}
