import DoubleLinkedListNode from "./DoubleLinkedListNode";

/**
 * @class
 *
 */
export default class DoubleLinkedList {
  private head: DoubleLinkedListNode = null;
  private tail: DoubleLinkedListNode = null;
  private count: number = 0;

  /**
   *
   * @returns {boolean}
   */
  isEmpty(): boolean {
    return this.head === null && this.tail === null;
  }
  /**
   *
   * @returns {number}
   */
  size(): number {
    return this.count;
  }

  /** O(1)
   * @param {any} [value]
   * @return {DoubleLinkedListNode}
   */
  insertFirst(value: any): DoubleLinkedListNode {
    let linkNode = new DoubleLinkedListNode(value, null, this.head);
    if (this.isEmpty()) {
      this.head = linkNode;
      this.tail = this.head;
    } else {
      this.head.setPrev(linkNode);
      this.head = linkNode;
    }
    this.count++;
    return this.head;
  }

  /** O(1)
   * @param {any} [value]
   * @return {DoubleLinkedListNode}
   */
  insertLast(value: any): DoubleLinkedListNode {
    if (this.isEmpty()) {
      this.insertFirst(value);
    } else {
      let linkNode = new DoubleLinkedListNode(value, this.tail, null);
      this.tail.setNext(linkNode);
      this.tail = linkNode;
      this.count++;
    }
    return this.tail;
  }
  /**
   * O(n)
   * @param {any} value
   * @param {number} index
   * @returns {DoubleLinkedListNode}
   */
  insertAt(value: any, index: number): DoubleLinkedListNode {
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
      return this.insertFirst(value);
    } else if (index === this.count) {
      return this.insertLast(value);
    } else {
      let newNode = new DoubleLinkedListNode(value, null, null);
      let prev: DoubleLinkedListNode = null;
      let current = this.head;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.getNext();
      }
      newNode.setNext(current);
      newNode.setPrev(prev);
      prev.setNext(newNode);
      current.setPrev(newNode);
      this.count++;
      return newNode;
    }
  }

  /**
   * @returns {DoubleLinkedListNode}
   */
  removeFirst(): DoubleLinkedListNode {
    if (this.isEmpty()) return null;
    let removeNode = this.head;
    if (this.head.hasNext()) {
      this.head = this.head.getNext();
      this.head.setPrev(null);
    } else {
      this.head = null;
      this.tail = null;
    }
    this.count -= 1;
    return removeNode.setNext(null);
  }
  /**
   * @returns {DoubleLinkedListNode}
   */
  removeLast(): DoubleLinkedListNode {
    if (this.isEmpty()) return null;
    let removeNode = this.tail;
    if (this.tail.hasPrev()) {
      this.tail = this.tail.getPrev();
      this.tail.setNext(null);
    } else {
      this.tail = null;
      this.head = null;
    }
    this.count--;
    return removeNode.setPrev(null);
  }

  /**
   * @param {number} [index]
   * @returns {DoubleLinkedListNode}
   */
  removeAt(index: number): DoubleLinkedListNode {
    if (index > this.count) {
      throw new Error(
        `.removeAt expects a index number <= linked list size ${this.count}`
      );
    } else if (index < 0) {
      throw new Error(
        `.removeAt expects a  index number >=0 a& <= linked list size ${this.count} `
      );
    }
    if (this.isEmpty()) {
      return null;
    }

    if (index === 0) {
      return this.removeFirst();
    } else if (index === this.count - 1) {
      return this.removeLast();
    } else {
      let start = 0;
      let last = this.size() - 1;
      let mid = Math.round((start + last) / 2);
      if (index <= mid) {
        // from start
        let position = index;
        let current = this.head;
        for (let i = 0; i < position; i++) {
          current = current.getNext();
        }
        return this.remove(current);
      } else {
        // from end
        let position = last - index;
        let current = this.tail;
        for (let i = 0; i < position; i++) {
          current = current.getPrev();
        }
        return this.remove(current);
      }
    }
  }

  /**
   * Removes a node from the list by its reference.
   * @public
   * @param {DoubleLinkedListNode} node
   * @returns {DoubleLinkedListNode}
   */
  remove(node) {
    if (node && !(node instanceof DoubleLinkedListNode)) {
      throw new Error("remove: expects a DoubleLinkedListNode node");
    }

    if (!node) {
      return null;
    }

    if (!node.hasPrev()) {
      return this.removeFirst();
    }

    if (!node.hasNext()) {
      return this.removeLast();
    }

    node.getPrev().setNext(node.getNext());
    node.getNext().setPrev(node.getPrev());
    this.count -= 1;
    return node.setPrev(null).setNext(null);
  }

  /**
   * Removes all nodes based on a callback.
   * @public
   * @param {function} cb - if cb returns true
   * @returns {number} number of removed nodes
   */
  removeEach(cb) {
    if (typeof cb !== "function") {
      throw new Error(".removeEach(cb) expects a callback");
    }
    let removedCount = 0;
    let position = 0;
    let current = this.head;
    while (current instanceof DoubleLinkedListNode) {
      if (cb(current, position)) {
        const next = current.getNext();
        this.remove(current);
        removedCount += 1;
        current = next;
      } else {
        current = current.getNext();
      }
      position += 1;
    }
    return removedCount;
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
    let position = 0;
    while (current instanceof DoubleLinkedListNode) {
      cb(current, position);
      position += 1;
      current = current.getNext();
    }
  }

  /**
   * Traverses the list backward from end to beginning
   * @public
   * @param {function} cb
   */
  forEachReverse(cb) {
    if (typeof cb !== "function") {
      throw new Error(".forEachReverse(cb) expects a callback");
    }

    let current = this.tail;
    let position = this.count - 1;
    while (current instanceof DoubleLinkedListNode) {
      cb(current, position);
      position -= 1;
      current = current.getPrev();
    }
  }

  /**
   * Finds a node in the list using a callback
   * @public
   * @param {function} cb
   * @param {DoubleLinkedListNode} [startingNode]
   * @returns {DoubleLinkedListNode}
   */
  find(cb, startingNode = this.head) {
    if (typeof cb !== "function") {
      throw new Error(".find(cb) expects a callback");
    }

    if (startingNode && !(startingNode instanceof DoubleLinkedListNode)) {
      throw new Error(".find(cb) expects to start from a DoubleLinkedListNode");
    }

    let current = startingNode;
    while (current instanceof DoubleLinkedListNode) {
      if (cb(current)) {
        return current;
      }
      current = current.getNext();
    }
    return null;
  }

  /**
   * Finds a node in the list using a callback in reverse order
   * @public
   * @param {function} cb
   * @param {DoubleLinkedListNode} [startingNode]
   * @returns {DoubleLinkedListNode}
   */
  findReverse(cb, startingNode = this.tail) {
    if (typeof cb !== "function") {
      throw new Error(".findReverse(cb) expects a callback");
    }

    if (startingNode && !(startingNode instanceof DoubleLinkedListNode)) {
      throw new Error(
        ".findReverse(cb) expects to start from a DoubleLinkedListNode"
      );
    }

    let current = startingNode;
    while (current instanceof DoubleLinkedListNode) {
      if (cb(current)) {
        return current;
      }
      current = current.getPrev();
    }
    return null;
  }

  /**
   * Filters the list based on a callback.
   * @public
   * @param {function} cb
   * @returns {LinkedList}
   */
  filter(cb) {
    if (typeof cb !== "function") {
      throw new Error(".filter(cb) expects a callback");
    }

    const result = new DoubleLinkedList();
    this.forEach((node, position) => {
      if (!cb(node, position)) return;
      result.insertLast(node.getValue());
    });
    return result;
  }

  /**
   * Returns the head node.
   * @public
   * @returns {DoubleLinkedListNode}
   */
  _head() {
    return this.head;
  }

  /**
   * Returns the tail node.
   * @public
   * @returns {DoubleLinkedListNode}
   */
  _tail() {
    return this.tail;
  }

  /**
   * Converts the doubly linked list into an array.
   * @public
   * @returns {array}
   */
  toArray() {
    const result = [];
    this.forEach((node) => result.push(node.getValue()));
    return result;
  }

  /**
   * Clears the list
   * @public
   */
  clear() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  /**
   * Creates a doubly linked list from an array
   * @public
   * @static
   * @param {array} values
   * @return {DoublyLinkedList}
   */
  static fromArray(values) {
    if (!Array.isArray(values)) {
      throw new Error("cannot create DoublyLinkedList from none-array values");
    }
    const doublyLinkedList = new DoubleLinkedList();
    values.forEach((value) => {
      doublyLinkedList.insertLast(value);
    });
    return doublyLinkedList;
  }
}
