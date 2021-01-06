import { LinkedList } from './linkedList';

export class Queue {

  store: LinkedList;
  limit: number;
  get size(): number { return this.store.length; }

  constructor(limit: number = 1000) {
    this.store = new LinkedList();
    this.limit = limit;
  }

  add(val: any) {
    if (this.store.length >= this.limit) {
      this.store.removeFromFront();
    }
    this.store.addToEnd(val);
  }

  remove(): any {
    return this.store.removeFromFront();
  }

  setLimit(limit: number): void {
    this.limit = limit;
  }

}


