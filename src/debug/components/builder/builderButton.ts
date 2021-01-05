import { RenderingUtilities } from '../../../utilites/renderingUtilities';
import { State } from '../../../states/rootState';

// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Node
export class BuilderButton {

  static init(eventHandler: any) {
    this.createBuilderButton();
    this.addBuilderButtonToBody();
    this.addEventListener(eventHandler);
  }

  static activateBuilderButton() {
    if (State.builderState.builderBtn) {
      State.builderState.builderBtn.classList.add('active');
    }
  }

  static deactivateBuilderButton() {
    if (State.builderState.builderBtn) {
      State.builderState.builderBtn.classList.remove('active');
    }
  }

  static removeBuilderButton() {
    if (State.builderState.builderBtn) {
      State.builderState.builderBtn.remove();
      State.builderState.builderBtn = null;
    }
  }

  private static createBuilderButton(): void {
    State.builderState.builderBtn = RenderingUtilities.nodeBuilder('button', 'Builder', ['button', 'builderBtn']);
  }

  private static addBuilderButtonToBody() {
    RenderingUtilities.appendNodeToBody(State.builderState.builderBtn);
  }

  private static addEventListener(eventHandler: any) {
    State.builderState.builderBtn.addEventListener('click', () => eventHandler());
  }
}
