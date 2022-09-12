/**
 * LinkedListNode
 * @class
 *
 */
declare class LinkedListNode {
    private value;
    private next;
    /**
     * Create LinkedListNode
     * @param  {number|string|object | any} [param]
     * @param  {LinkedListNode} [next]
     */
    constructor(value: any, next: LinkedListNode);
    /**
     * @public
     * @param {any} [value]
     * @returns {LinkedListNode}
     */
    setValue(value: any): LinkedListNode;
    /**
     * @public
     * @returns {any}
     */
    getValue(): any;
    /**
     * @public
     * @param {LinkedListNode} [next]
     * @returns {LinkedListNode}
     */
    setNext(next: LinkedListNode): LinkedListNode;
    /**
     * @public
     * @returns {LinkedListNode}
     */
    getNext(): LinkedListNode;
    /**
     * @public
     * @returns {boolean}
     */
    hasNext(): boolean;
}

/**
 * @class
 * @default count = 0
 * @default head = null
 *
 */
declare class LinkedList {
    private count;
    private head;
    /**
     *
     * @returns {boolean}
     */
    isEmpty(): boolean;
    /**
     *
     * @returns {number}
     */
    size(): number;
    /**
     * Insert at head of linkedlist
     * @param {any} [value]
     * @returns {LinkedListNode}
     *
     */
    insertFirst(value: any): LinkedListNode;
    /**
     *Insert at last of linkedlist
     * @param {any} [value]
     * @param {LinkedListNode} [startingNode]
     * @returns {LinkedListNode}
     */
    insertLast(value: any, startingNode?: LinkedListNode): LinkedListNode;
    /**
     * Insert at index of linkedlist
     * @param {any} [value]
     * @param {number} [index]
     * @returns {LinkedListNode}
     */
    insertAt(value: any, index: number): LinkedListNode;
    /**
     * Removes head of linkedlist and returns the node
     * @returns {LinkedListNode}
     */
    removeFist(): LinkedListNode;
    /**
     * @returns {LinkedListNode}
     */
    removeLast(): LinkedListNode;
    /**
     * @param {number} index
     */
    removeAt(index: number): LinkedListNode;
    /**
     * clears all
     */
    clearAll(): void;
    /**
     * Traverses the list from beginning to end.
     * @public
     * @param {function} cb
     */
    forEach(cb: any): void;
    /**
     * Finds one node in the list based on a callback.
     * @public
     * @param {function} cb - callback should return true
     * @param {LinkedListNode} [startingNode]
     * @returns {LinkedListNode}
     */
    find(cb: any, startingNode?: LinkedListNode): LinkedListNode;
    /**
     * Filters the list based on a callback.
     * @public
     * @param {function} cb - callback should return true for required nodes.
     * @returns {LinkedList}
     */
    filter(cb: any): LinkedList;
    /**
     * Converts the linked list into an array.
     * @public
     * @returns {array}
     */
    toArray(): any[];
    /**
     * @public
     * @param {any} [value]
     * @param {any} [instance]
     * @returns {boolean}
     */
    isInstanceof(value: any, instance: any): boolean;
    /**
     * Creates a linked list from an array
     * @public
     * @static
     * @param {Array<any>} values
     * @return {LinkedList}
     */
    static fromArray(values: Array<any>): LinkedList;
}

/**
 * DoubleLinkedListNode
 * @class
 *
 */
declare class DoubleLinkedListNode {
    private value;
    private next;
    private prev;
    /**
     * Create DoubleLinkedListNode
     * @param  {number|string|object | any} [param]
     * @param  {DoubleLinkedListNode} [next]
     */
    constructor(value: any, next: DoubleLinkedListNode, prev: DoubleLinkedListNode);
    /**
     * @public
     * @param {any} [value]
     * @returns {DoubleLinkedListNode}
     */
    setValue(value: any): DoubleLinkedListNode;
    /**
     * @public
     * @returns {any}
     */
    getValue(): any;
    /**
     * @public
     * @param {DoubleLinkedListNode} [next]
     * @returns {DoubleLinkedListNode}
     */
    setNext(next: DoubleLinkedListNode): DoubleLinkedListNode;
    /**
     * @public
     * @returns {DoubleLinkedListNode}
     */
    getNext(): DoubleLinkedListNode;
    /**
     * @public
     * @returns {boolean}
     */
    hasNext(): boolean;
    /**
     * @public
     * @param {DoubleLinkedListNode} [prev]
     * @returns {DoubleLinkedListNode}
     */
    setPrev(prev: DoubleLinkedListNode): DoubleLinkedListNode;
    /**
     * @public
     * @returns {DoubleLinkedListNode}
     */
    getPrev(): DoubleLinkedListNode;
    /**
     * @public
     * @returns {boolean}
     */
    hasPrev(): boolean;
}

/**
 * @class
 *
 */
declare class DoubleLinkedList {
    private head;
    private tail;
    private count;
    /**
     *
     * @returns {boolean}
     */
    isEmpty(): boolean;
    /**
     *
     * @returns {number}
     */
    size(): number;
    /** O(1)
     * @param {any} [value]
     * @return {DoubleLinkedListNode}
     */
    insertFirst(value: any): DoubleLinkedListNode;
    /** O(1)
     * @param {any} [value]
     * @return {DoubleLinkedListNode}
     */
    insertLast(value: any): DoubleLinkedListNode;
    /**
     * O(n)
     * @param {any} value
     * @param {number} index
     * @returns {DoubleLinkedListNode}
     */
    insertAt(value: any, index: number): DoubleLinkedListNode;
    /**
     * @returns {DoubleLinkedListNode}
     */
    removeFirst(): DoubleLinkedListNode;
    /**
     * @returns {DoubleLinkedListNode}
     */
    removeLast(): DoubleLinkedListNode;
    /**
     * @param {number} [index]
     * @returns {DoubleLinkedListNode}
     */
    removeAt(index: number): DoubleLinkedListNode;
    /**
     * Removes a node from the list by its reference.
     * @public
     * @param {DoubleLinkedListNode} node
     * @returns {DoubleLinkedListNode}
     */
    remove(node: any): any;
    /**
     * Removes all nodes based on a callback.
     * @public
     * @param {function} cb - if cb returns true
     * @returns {number} number of removed nodes
     */
    removeEach(cb: any): number;
    /**
     * Traverses the list from beginning to end.
     * @public
     * @param {function} cb
     */
    forEach(cb: any): void;
    /**
     * Traverses the list backward from end to beginning
     * @public
     * @param {function} cb
     */
    forEachReverse(cb: any): void;
    /**
     * Finds a node in the list using a callback
     * @public
     * @param {function} cb
     * @param {DoubleLinkedListNode} [startingNode]
     * @returns {DoubleLinkedListNode}
     */
    find(cb: any, startingNode?: DoubleLinkedListNode): DoubleLinkedListNode;
    /**
     * Finds a node in the list using a callback in reverse order
     * @public
     * @param {function} cb
     * @param {DoubleLinkedListNode} [startingNode]
     * @returns {DoubleLinkedListNode}
     */
    findReverse(cb: any, startingNode?: DoubleLinkedListNode): DoubleLinkedListNode;
    /**
     * Filters the list based on a callback.
     * @public
     * @param {function} cb
     * @returns {LinkedList}
     */
    filter(cb: any): DoubleLinkedList;
    /**
     * Returns the head node.
     * @public
     * @returns {DoubleLinkedListNode}
     */
    _head(): DoubleLinkedListNode;
    /**
     * Returns the tail node.
     * @public
     * @returns {DoubleLinkedListNode}
     */
    _tail(): DoubleLinkedListNode;
    /**
     * Converts the doubly linked list into an array.
     * @public
     * @returns {array}
     */
    toArray(): any[];
    /**
     * Clears the list
     * @public
     */
    clear(): void;
    /**
     * Creates a doubly linked list from an array
     * @public
     * @static
     * @param {array} values
     * @return {DoublyLinkedList}
     */
    static fromArray(values: any): DoubleLinkedList;
}

/**
 * @class
 *
 * Last in last out
 * example booking a ticket fro trian etc
 * it is a linear data structure like array unlike array insertion happens at last end and delettion happens at start
 */
declare class Queue {
    private elements;
    private _offset;
    /**
     * Creates a Queue.
     * @param {array} [elements]
     */
    constructor(elements: Array<number | string | object | any>);
    /**
     * Checks if the queue is empty.
     * @public
     * @returns {boolean}
     */
    isEmpty(): boolean;
    /**
     * Returns the number of elements in the queue.
     * @public
     * @returns {number}
     */
    size(): number;
    /**
     * Returns the back element of the queue.
     * @public
     * @returns {number|string|object|any}
     */
    back(): any;
    /**
     * Returns the front element of the queue.
     * @public
     * @returns {number|string|object|any}
     */
    front(): any;
    /**
     * Returns the remaining elements as an array with deep clone from queue.
     * @public
     * @returns {Array<number | string | object | any>}
     */
    toArray(): any;
    /**
     * Clears all the elements in the queue
     * @public
     *
     */
    clearAll(): void;
    /**
     * Creates a shallow copy from the queue.
     * @public
     * @return {Queue}
     */
    clone(): Queue;
    /**
     * Adds an element to the back of the queue.
     * @public
     * @param {number|string|object|any} [element]
     *
     */
    enqueue(element: any): this;
    /**
     * Adds an element to the back of the queue.
     * @public
     * @param {number|string|object|any} element
     */
    push(element: any): this;
    /**
     *
     * @returns {number|string|object|any}
     */
    dequeue(): any;
    /**
     * Removes and returns the first element in the queue using shift O(n).
     * @public
     * @returns {number|string|object|any}
     */
    pop(): any;
    /**
     * Creates a queue from an existing array with deepclone
     * @public
     * @static
     * @param {Array<number|string|object|any>} [elements]
     * @return {Queue}
     */
    static fromArray(elements: Array<number | string | object | any>): Queue;
}

/**
 * @class
 *
 * Last in First out
 * example stack of books in box, etc
 * it is a linear data structure like array unlike array insertion and removes happens only in single end
 */
declare class Stack {
    private elements;
    /**
     * Creates a stack.
     * @param {array} [elements]
     */
    constructor(elements: Array<number | string | object | any>);
    /**
     * Checks if the stack is empty.
     * @public
     * @returns {boolean}
     */
    isEmpty(): boolean;
    /**
     * Returns the number of elements in the stack.
     * @public
     * @returns {number}
     */
    size(): number;
    /**
     * Returns the top element in the stack.
     * @public
     * @returns {number|string|object|any}
     */
    peek(): any;
    /**
     * Returns the remaining elements as an array with deep clone (structuredClone).
     * @public
     * @returns {Array<number | string | object | any>}
     */
    toArray(): any;
    /**
     * Clears all the elements in the stack
     * @public
     *
     */
    clearAll(): void;
    /**
     * Creates a shallow copy from the stack.
     * @public
     * @return {Stack}
     */
    clone(): Stack;
    /**
     * Creates a deep copy from the stack.
     * @public
     * @return {Stack}
     */
    deepclone(): Stack;
    /**
     * Inset element  into stack
     * @public
     * @param {number|string|object|any} [element]
     *
     */
    push(element: any): this;
    /**
     * Removes and returns the top element in the stack.
     * @public
     * @returns {number|string|object|any}
     */
    pop(): any;
    /**
     * Creates a stack from an existing array with deepclone
     * @public
     * @static
     * @param {Array<number | string | object | any>} [elements]
     * @return {Stack}
     */
    static fromArray(elements: Array<number | string | object | any>): Stack;
}

export { DoubleLinkedList, DoubleLinkedListNode, LinkedList, LinkedListNode, Queue, Stack };
