/**
 * @class
 *
 * Last in last out
 * example booking a ticket fro trian etc
 * it is a linear data structure like array unlike array insertion happens at last end and delettion happens at start
 */
export default class Queue {
  private elements: Array<number | string | object | any> = [];
  private _offset: number = 0;

  /**
   * Creates a Queue.
   * @param {array} [elements]
   */
  constructor(elements: Array<number | string | object | any>) {
    this.elements = !!elements && elements?.length ? elements : [];
  }
  /**
   * Checks if the queue is empty.
   * @public
   * @returns {boolean}
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * Returns the number of elements in the queue.
   * @public
   * @returns {number}
   */
  size() {
    return this.elements.length - this._offset;
  }
  /**
   * Returns the back element of the queue.
   * @public
   * @returns {number|string|object|any}
   */
  back() {
    return this.size() > 0 ? this.elements[this.size() - 1] : null;
  }
  /**
   * Returns the front element of the queue.
   * @public
   * @returns {number|string|object|any}
   */
  front() {
    return this.size() ? this.elements[0] : null;
  }
  /**
   * Returns the remaining elements as an array with deep clone from queue.
   * @public
   * @returns {Array<number | string | object | any>}
   */
  toArray() {
    return JSON.parse(JSON.stringify(this.elements.slice(this._offset)));
  }

  /**
   * Clears all the elements in the queue
   * @public
   *
   */

  clearAll() {
    this.elements = [];
  }

  /**
   * Creates a shallow copy from the queue.
   * @public
   * @return {Queue}
   */
  clone() {
    return new Queue(this.toArray());
  }

  /**
   * Adds an element to the back of the queue.
   * @public
   * @param {number|string|object|any} [element]
   *
   */
  enqueue(element: any) {
    this.elements.push(element);
    return this;
  }
  /**
   * Adds an element to the back of the queue.
   * @public
   * @param {number|string|object|any} element
   */
  push(element) {
    return this.enqueue(element);
  }
  /**
   *
   * @returns {number|string|object|any}
   */
  dequeue() {
    if (this.isEmpty()) return null;
    const first = this.front();
    this._offset += 1;
    if (this._offset * 2 < this.elements.length) return first;
    // only remove dequeued elements when reaching half size
    // to decrease latency of shifting elements.
    this.elements = this.elements.slice(this._offset);
    this._offset = 0;
    return first;
  }
  /**
   * Removes and returns the first element in the queue using shift O(n).
   * @public
   * @returns {number|string|object|any}
   */
  pop() {
    return this.dequeue();
  }

  /**
   * Creates a queue from an existing array with deepclone
   * @public
   * @static
   * @param {Array<number|string|object|any>} [elements]
   * @return {Queue}
   */
  static fromArray(elements: Array<number | string | object | any>) {
    return new Queue(JSON.parse(JSON.stringify(elements)));
  }
}
