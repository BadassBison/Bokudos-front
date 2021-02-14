import { State } from '../states/rootState';
import ComponentUtilities from '../utilites/componentUtilities';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { DebugMode } from './debugMode';

export class PropertiesMenu {

  static addPropertiesButton() {
    const propertiesBtn = ComponentUtilities.nodeBuilder('button', 'Properties', ['button', 'propertiesBtn']);
    propertiesBtn.addEventListener('click', () => this.toggleProperties());
    ComponentUtilities.appendNodeToBody(propertiesBtn);
  }

  static removePropertiesButton() {
    const btn = document.querySelector('.propertiesBtn');
    btn.remove();
  }

  static activatePropertiesButton() {
    const btn = document.querySelector('.propertiesBtn');
    btn.classList.add('active');
  }

  static deactivatePropertiesButton() {
    const btn = document.querySelector('.propertiesBtn');
    btn.classList.remove('active');
  }

  static toggleProperties() {
    if (State.debugState.propertiesOpen) {
      this.closePropertyMenu();
    } else {
      this.openPropertyMenu();
    }
  }

  static openPropertyMenu() {
    DebugMode.resetState();
    State.debugState.propertiesOpen = true;
    this.activatePropertiesButton();
    const menu = ComponentUtilities.nodeBuilder('content', '<h1 class="title">Properties Menu</h1>', ['prop-menu']);
    this.addProperties(menu);
    ComponentUtilities.appendNodeToBody(menu);
  }

  static closePropertyMenu() {
    if (State.debugState.propertiesOpen) {
      State.debugState.propertiesOpen = false;
      this.deactivatePropertiesButton();
      const menu = document.querySelector('.prop-menu');
      menu.remove();
    }
  }

  static addProperties(menu: HTMLElement) {
    /**
     * These properties are all handled on server side now, so we need a different way to set these within the game.
     */
    // const input1 = this.addProperty(menu, 'Gravity', State.ninjaState.gravity);
    // input1.addEventListener('input', (evt) => {
    //   console.log((evt.target as HTMLInputElement).value);
    //   State.ninjaState.gravity = Number((evt.target as HTMLInputElement).value);
    // });
    //
    // const input2 = this.addProperty(menu, 'Movement Speed', State.ninjaState.movementSpeed);
    // input2.addEventListener('input', (evt) => {
    //   console.log((evt.target as HTMLInputElement).value);
    //   State.ninjaState.movementSpeed = Number((evt.target as HTMLInputElement).value);
    // });
    //
    // const input3 = this.addProperty(menu, 'Movement Acceleration', State.ninjaState.movementAcceleration);
    // input3.addEventListener('input', (evt) => {
    //   console.log((evt.target as HTMLInputElement).value);
    //   State.ninjaState.movementAcceleration = Number((evt.target as HTMLInputElement).value);
    // });
    //
    // const input4 = this.addProperty(menu, 'Jump Speed', State.ninjaState.jumpSpeed);
    // input4.addEventListener('input', (evt) => {
    //   console.log((evt.target as HTMLInputElement).value);
    //   State.ninjaState.jumpSpeed = Number((evt.target as HTMLInputElement).value);
    // });
  }

  static addProperty(menu: HTMLElement, name: string, value: number): HTMLElement {
    const wrapper = ComponentUtilities.nodeBuilder('div', '', ['wrapper']);
    const input = this.addInput(name, value);
    wrapper.appendChild(input);
    menu.appendChild(wrapper);

    return input;
  }

  static addInput(name: string, value: number): HTMLElement {
    const label = ComponentUtilities.nodeBuilder('label', name);
    const input = document.createElement('input');
    input.type = 'number';
    input.step = '0.01';
    input.value = value + '';

    label.appendChild(input);

    return label;
  }

  static cleanup() {
    if (State.debugState.propertiesOpen) { this.closePropertyMenu(); }
    this.removePropertiesButton();
  }

}
