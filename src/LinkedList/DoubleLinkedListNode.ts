/**
 * DoubleLinkedListNode
 * @class
 *
 */
export default class DoubleLinkedListNode {
  private value: any;
  private next: DoubleLinkedListNode = null;
  private prev: DoubleLinkedListNode = null;
  /**
   * Create DoubleLinkedListNode
   * @param  {number|string|object | any} [param]
   * @param  {DoubleLinkedListNode} [next]
   */
  constructor(
    value: any,
    next: DoubleLinkedListNode,
    prev: DoubleLinkedListNode
  ) {
    this.next = next ? next : null;
    this.prev = prev ? prev : null;
    this.value = value;
  }

  /**
   * @public
   * @param {any} [value]
   * @returns {DoubleLinkedListNode}
   */
  setValue(value: any): DoubleLinkedListNode {
    this.value = value;
    return this;
  }

  /**
   * @public
   * @returns {any}
   */
  getValue(): any {
    return this.value;
  }

  /**
   * @public
   * @param {DoubleLinkedListNode} [next]
   * @returns {DoubleLinkedListNode}
   */
  setNext(next: DoubleLinkedListNode): DoubleLinkedListNode {
    if (next && !(next instanceof DoubleLinkedListNode)) {
      throw new Error("setNext expects a DoubleLinkedListNode or null");
    }
    this.next = next || null;
    return this;
  }

  /**
   * @public
   * @returns {DoubleLinkedListNode}
   */
  getNext(): DoubleLinkedListNode {
    return this.next;
  }

  /**
   * @public
   * @returns {boolean}
   */
  hasNext(): boolean {
    return this.next instanceof DoubleLinkedListNode;
  }
  /**
   * @public
   * @param {DoubleLinkedListNode} [prev]
   * @returns {DoubleLinkedListNode}
   */
  setPrev(prev: DoubleLinkedListNode): DoubleLinkedListNode {
    if (prev && !(prev instanceof DoubleLinkedListNode)) {
      throw new Error("setPrev expects a DoubleLinkedListNode or null");
    }
    this.prev = prev || null;
    return this;
  }

  /**
   * @public
   * @returns {DoubleLinkedListNode}
   */
  getPrev(): DoubleLinkedListNode {
    return this.prev;
  }

  /**
   * @public
   * @returns {boolean}
   */
  hasPrev(): boolean {
    return this.prev instanceof DoubleLinkedListNode;
  }
}
