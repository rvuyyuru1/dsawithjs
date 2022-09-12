/**
 * LinkedListNode
 * @class
 *
 */
export default class LinkedListNode {
  private value: any;
  private next: LinkedListNode = null;
  /**
   * Create LinkedListNode
   * @param  {number|string|object | any} [param]
   * @param  {LinkedListNode} [next]
   */
  constructor(value: any, next: LinkedListNode) {
    this.next = next ? next : null;
    this.value = value;
  }

  /**
   * @public
   * @param {any} [value]
   * @returns {LinkedListNode}
   */
  setValue(value: any): LinkedListNode {
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
   * @param {LinkedListNode} [next]
   * @returns {LinkedListNode}
   */
  setNext(next: LinkedListNode): LinkedListNode {
    if (next && !(next instanceof LinkedListNode)) {
      throw new Error("setNext expects a LinkedListNode or null");
    }
    this.next = next || null;
    return this;
  }

  /**
   * @public
   * @returns {LinkedListNode}
   */
  getNext(): LinkedListNode {
    return this.next;
  }

  /**
   * @public
   * @returns {boolean}
   */
  hasNext(): boolean {
    return this.next instanceof LinkedListNode;
  }
}
