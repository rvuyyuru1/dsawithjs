# dsawithjs

Data structures with js

## Installation

```sh
npm install dsawithjs

```

or

```sh
yarn add dsawithjs

```

## Usage

```javascript
import { Queue } from "dsawithjs";
let q1 = new Queue([1, 1, 23, 4]);

// empty queue
const queue = new Queue<number>();

// from an array
const queue = new Queue<number>([1, 2, 3]);

// empty queue
const queue = Queue.fromArray<number>([]);

// with elements
const list = [10, 3, 8, 40, 1];
const queue = Queue.fromArray<number>(list);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
