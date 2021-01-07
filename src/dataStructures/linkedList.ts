export class LinkedList {

  head: LLNode;
  tail: LLNode;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  increaseLength() {
    this.length++;
  }

  decreaseLength() {
    this.length--;
  }

  addToEnd(val: any) {
    const node = new LLNode(val);

    if (this.length === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }
    this.tail = node;
    this.increaseLength();
  }

  addToFront(val: any) {
    const node = new LLNode(val);

    if (this.length === 0) {
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
    }
    this.head = node;
    this.increaseLength();
  }

  removeFromEnd(): any {
    if (this.length === 0) {
      return null;
    }

    const node: LLNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.decreaseLength();
    return node.value;
  }

  removeFromFront(): any {
    if (this.length === 0) {
      return null;
    }

    const node: LLNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.decreaseLength();
    return node.value;
  }

  forEach(cb: LLIterator): void {
    if (!this.head) { return; }
    let node = this.head;
    while (node) {
      cb(node);
      node = node.next;
    }
  }
}

class LLNode {

  value: any;
  next: LLNode;
  prev: LLNode;

  constructor(val: any) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

export type LLIterator = (node: LLNode) => void;
