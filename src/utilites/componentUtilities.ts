export default class ComponentUtilities {

  static parentInit<T extends HTMLElement>(context: T): HTMLElement {
    context.attachShadow({ mode: 'open' });
    const wrapper = this.nodeBuilder('div');
    context.shadowRoot.appendChild(wrapper);
    return wrapper;
  }

  static ComponentBuilder<T>(type: string): T {
    const component = customElements.get(type);
    return new component();
  }

  static nodeBuilder(type: string, content: string = '', classList: string[] = []): HTMLElement {
    const node = document.createElement(type);
    node.innerHTML = content;
    node.classList.add(...classList);

    return node;
  }

  static destroyNodes(nodes: HTMLElement[]) {
    nodes.forEach((node: HTMLElement) => { node.remove(); });
  }

  static prependNodeToBody(node: HTMLElement): void {
    const body = document.querySelector('body');
    body.prepend(node);
  }

  static appendNodeToBody(node: HTMLElement): void {
    const body = document.querySelector('body');
    body.appendChild(node);
  }

  static appendChildNodes(parent: HTMLElement, children: HTMLElement[]): HTMLElement {
    for (const child of children) {
      parent.appendChild(child);
    }

    return parent;
  }

}
