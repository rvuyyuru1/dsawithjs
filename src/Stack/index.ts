/**
 * @class
 *
 * Last in First out
 * example stack of books in box, etc
 * it is a linear data structure like array unlike array insertion and removes happens only in single end
 */
export default class Stack {
  private elements: Array<number | string | object | any> = [];
  /**
   * Creates a stack.
   * @param {array} [elements]
   */
  constructor(elements: Array<number | string | object | any>) {
    this.elements = !!elements && elements?.length ? elements : [];
  }
  /**
   * Checks if the stack is empty.
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Returns the number of elements in the stack.
   * @public
   * @returns {number}
   */
  size() {
    return this.elements.length;
  }

  /**
   * Returns the top element in the stack.
   * @public
   * @returns {number|string|object|any}
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements[this.size() - 1];
  }
  /**
   * Returns the remaining elements as an array with deep clone (structuredClone).
   * @public
   * @returns {Array<number | string | object | any>}
   */
  toArray() {
    return JSON.parse(JSON.stringify(this.elements.slice()));
  }

  /**
   * Clears all the elements in the stack
   * @public
   *
   */

  clearAll() {
    this.elements = [];
  }

  /**
   * Creates a shallow copy from the stack.
   * @public
   * @return {Stack}
   */
  clone() {
    return new Stack(this.elements.slice());
  }

  /**
   * Creates a deep copy from the stack.
   * @public
   * @return {Stack}
   */
  deepclone() {
    return new Stack(this.toArray());
  }

  /**
   * Inset element  into stack
   * @public
   * @param {number|string|object|any} [element]
   *
   */
  push(element: any) {
    this.elements.push(element);
    return this;
  }
  /**
   * Removes and returns the top element in the stack.
   * @public
   * @returns {number|string|object|any}
   */
  pop() {
    if (this.isEmpty()) return null;
    return this.elements.pop();
  }

  /**
   * Creates a stack from an existing array with deepclone
   * @public
   * @static
   * @param {Array<number | string | object | any>} [elements]
   * @return {Stack}
   */
  static fromArray(elements: Array<number | string | object | any>) {
    return new Stack(JSON.parse(JSON.stringify(elements)));
  }
}
