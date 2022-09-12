import LinkedListNode from "./LinkedListNode";
/**
 * @class
 * @default count = 0
 * @default head = null
 *
 */

export default class LinkedList {
  private count: number = 0;
  private head: LinkedListNode = null;
  /**
   *
   * @returns {boolean}
   */
  isEmpty(): boolean {
    return this.head === null;
  }
  /**
   *
   * @returns {number}
   */
  size(): number {
    return this.count;
  }

  /**
   * Insert at head of linkedlist
   * @param {any} [value]
   * @returns {LinkedListNode}
   *
   */
  insertFirst(value: any): LinkedListNode {
    return this.insertAt(value, 0);
  }
  /**
   *Insert at last of linkedlist
   * @param {any} [value]
   * @param {LinkedListNode} [startingNode]
   * @returns {LinkedListNode}
   */
  insertLast(value: any, startingNode?: LinkedListNode): LinkedListNode {
    if (!startingNode) return this.insertAt(value, this.count);
    else {
      let current = startingNode;
      while (current.hasNext()) {
        current = current?.getNext();
      }
      current.setNext(new LinkedListNode(value, null));
      this.count += 1;
      return current.getNext();
    }
  }

  /**
   * Insert at index of linkedlist
   * @param {any} [value]
   * @param {number} [index]
   * @returns {LinkedListNode}
   */
  insertAt(value: any, index: number): LinkedListNode {
    if (index > this.count) {
      throw new Error(
        `.insertAt expects a index number <= linked list size ${this.count}`
      );
    } else if (index < 0) {
      throw new Error(
        `.insertAt expects a  index number >=0 a& <= linked list size ${this.count} `
      );
    }
    if (index === 0) {
      this.head = new LinkedListNode(value, this.head);
      this.count += 1;
      return this.head;
    } else {
      let current: LinkedListNode = this.head;
      let prev: LinkedListNode = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.getNext();
      }
      prev.setNext(new LinkedListNode(value, current));
      this.count++;
      return prev.getNext();
    }
  }

  /**
   * Removes head of linkedlist and returns the node
   * @returns {LinkedListNode}
   */
  removeFist(): LinkedListNode {
    return this.removeAt(0);
  }

  /**
   * @returns {LinkedListNode}
   */
  removeLast(): LinkedListNode {
    return this.removeAt(this.count - 1);
  }
  /**
   * @param {number} index
   */
  removeAt(index: number): LinkedListNode {
    if (index > this.count) {
      throw new Error(
        `.insertAt expects a index number <= linked list size ${this.count}`
      );
    } else if (index < 0) {
      throw new Error(
        `.insertAt expects a  index number >=0 a& <= linked list size ${this.count} `
      );
    }
    if (this.isEmpty()) {
      return null;
    }
    if (index === 0) {
      let current = this.head;
      this.head = current.getNext();
      this.count--;
      return current.setNext(null);
    } else {
      let current: LinkedListNode = this.head;
      let prev: LinkedListNode = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.getNext();
      }
      prev.setNext(current?.hasNext() ? current.getNext() : null);
      this.count--;
      return prev.getNext();
    }
  }
  /**
   * clears all
   */
  clearAll() {
    this.head = null;
    this.count = 0;
  }

  /**
   * Traverses the list from beginning to end.
   * @public
   * @param {function} cb
   */
  forEach(cb) {
    if (typeof cb !== "function") {
      throw new Error(".forEach(cb) expects a callback");
    }

    let current = this.head;
    let index = 0;
    while (current instanceof LinkedListNode) {
      cb(current, index);
      index += 1;
      current = current.getNext();
    }
  }
  /**
   * Finds one node in the list based on a callback.
   * @public
   * @param {function} cb - callback should return true
   * @param {LinkedListNode} [startingNode]
   * @returns {LinkedListNode}
   */
  find(cb, startingNode = this.head) {
    if (typeof cb !== "function") {
      throw new Error(".find(cb) expects a callback");
    }
    if (startingNode && !this.isInstanceof(startingNode, LinkedListNode)) {
      throw new Error(".find(cb) expects to start from a LinkedListNode");
    }

    let current = startingNode;
    while (this.isInstanceof(current, LinkedListNode)) {
      if (cb(current)) {
        return current;
      }
      current = current.getNext();
    }
    return null;
  }

  /**
   * Filters the list based on a callback.
   * @public
   * @param {function} cb - callback should return true for required nodes.
   * @returns {LinkedList}
   */
  filter(cb) {
    if (typeof cb !== "function") {
      throw new Error(".filter(cb) expects a callback");
    }
    let last = null;
    const result = new LinkedList();
    this.forEach((node, index) => {
      if (!cb(node, index)) return;
      last = result.insertLast(node.getValue(), last);
    });
    return result;
  }
  /**
   * Converts the linked list into an array.
   * @public
   * @returns {array}
   */
  toArray() {
    const result = [];
    this.forEach((node) => result.push(node.getValue()));
    return result;
  }
  /**
   * @public
   * @param {any} [value]
   * @param {any} [instance]
   * @returns {boolean}
   */
  isInstanceof(value: any, instance: any): boolean {
    return value instanceof instance;
  }

  /**
   * Creates a linked list from an array
   * @public
   * @static
   * @param {Array<any>} values
   * @return {LinkedList}
   */
  static fromArray(values: Array<any>) {
    if (!Array.isArray(values)) {
      throw new Error("cannot create LinkedList from none-array values");
    }
    const linkedList = new LinkedList();
    let lastInserted = null;
    values.forEach((value) => {
      lastInserted = linkedList.insertLast(value, lastInserted);
    });
    return linkedList;
  }
}
