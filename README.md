<h1 align="center">𝝺 fump</h1>
<div align="center">
  <strong>Useful collection of functional composition helper functions</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/fump">
    <img src="https://img.shields.io/npm/v/fump.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/fump">
  <img src="https://img.shields.io/npm/dm/fump.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/fump">
    <img src="https://img.shields.io/travis/tiaanduplessis/fump.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/tiaanduplessis/fump/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/fump.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/fump/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/fump.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/fump/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/fump.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20fump!%20https://github.com/tiaanduplessis/fump%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/fump.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">Tiaan</a> and <a href="https://github.com/tiaanduplessis/fump/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
	<li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
	<li><a href="#learning">Learning</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install fump
# OR
$ yarn add fump
```

## Usage

```js
import {
  compose,
  pipe,
  map,
  filter,
  reduce,
  curry,
  flatMap
} from 'fump'

// Do some magic

```

## API

### `.compose(functions)`

The function accepts one or more functions that are applied from **right to left** on a initial value. It Returns a function that accepts the initial value.

```js

const addFive = (a) => a + 5
const timesTwo = (a) => a * 2

const timesAndAdd = compose(addFive, timesTwo) // => Function

timesAndAdd(10) // => 25
```

### `.pipe`

The function provides the same functionality as the `compose` function, but the functions are applied to the initial value from **left to right**.

### `.map`

Function provides similar functionality to the [`Array.prototype.map()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map). It accepts a function as its argument and returns a function that accepts a object or array to map over.

```js
const timesTwo = x => x * 2
const arr = [1, 2, 3, 4]

map(timesTwo)(arr) // => [2, 4, 6, 8]

const addOne = x => x + 1
const obj = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
}

map(addOne)(obj) // => [ 2, 3, 4 ]
```

### `.filter`

Function provides similar functionality to the [`Array.prototype.filter()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). It accepts a predicate function as its argument and returns a function that accepts a object or array to filter.

```js
const moreThanTwo = x => x > 2
const arr = [1, 2, 3, 4]

filter(moreThanTwo)(arr) // => [ 3, 4 ]

const isEven = x => x % 2 === 0
const obj = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4
}

filter(isEven)(obj) // => [ 2, 4 ]
```

### `.reduce`

Function provides similar functionality to the [`Array.prototype.reduce()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). It accepts a function as its argument and returns a function that accepts a object or array to reduce.

```js
const add = (a, b) => a + b
const sum = reduce(add)
sum([1, 2, 3]) // => 6
```

### `.flatMap`

Function provides similar functionality to `map`, but flattens any of the callbacks returns.

```js
const fill = flatMap(x => new Array(x).fill(x))
fill([1, 2, 3]) // => [ 1, 2, 2, 3, 3, 3 ]
```

### `.curry`

See [learning](#Learning) section for more information about currying.

```js
const add = (a, b) => a + b
const addOne = curry(add)(1)
addOne(5) // => 6
```

## Learning

### Articles

- [Functional JavaScript: Decoupling methods from their objects](https://hackernoon.com/functional-javascript-decoupling-methods-from-their-objects-aa3ca13d7ae8)
- [Currying & Partial Application](https://medium.com/javascript-inside/currying-partial-application-f1365d5fad3f)
- [Why The Hipsters Compose Everything](https://medium.com/javascript-inside/why-the-hipsters-compose-everything-9b0aa247944a)
- [Functional JavaScript: Function Composition For Every Day Use.](https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10)

### Books

- [Mostly adequate guide to FP](https://github.com/MostlyAdequate/mostly-adequate-guide)
- [Functional-Light JavaScript](https://github.com/getify/Functional-Light-JS)

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

## License

MIT
