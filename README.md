[![NPM version](https://badgen.net/npm/v/@kikiki_kiki/is-object)](https://www.npmjs.com/package/@kikiki_kiki/is-object)
![Build Status](https://github.com/KiKiKi-KiKi/isObject/actions/workflows/build.yml/badge.svg?branch=main)
[![coverage](https://kikiki-kiki.github.io/isObject/badges.svg)](https://github.com/KiKiKi-KiKi/isObject/actions)
[![MIT License](http://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/KiKiKi-KiKi/isObject/blob/master/package.json)

# isObject

```typescript
function isObject(value?: unknown): value is Record<string, unknown>;
```

Determine if the parameter is Object (`{}`). Verifies if it not an array, `null`, `function`, `Date`, `RegExp`, `Symbol` and `Class Object`.

## :rocket: install

```sh
$ npm install @kikiki_kiki/is-object
```

## :rabbit: usage

```js
import isObject from '@kikiki_kiki/is-object';
```

## :rotating_light: test

```sh
$ npm run test
```

```js
isObject({});
// => true

isObject([]);
// => false

isObject(null);
// => false

isObject(undefined);
// => false

isObject(true);
// => false
isObject(false);
// => false

isObject(NaN);
// => false

isObject(1);
// => false
isObject(-1);
// => false

isObject('');
// => false
```

`function`, `Date`, `RegExp`, `Symbol`, `Class object` return `false`

function

```js
const func = function () {
  return true;
};
isObject(func);
// => false
```

Date

```js
const date = new Date();
isObject(date);
// => false
```

RegExp

```js
const regex1 = /\w+/;
expect(isObject(regex1)).toBe(false);
// => false

const regex2 = new RegExp('\\w+');
expect(isObject(regex2)).toBe(false);
// => false
```

Symbol

```js
const symbol1 = Symbol();
isObject(symbol1);
// => false

const symbol2 = Symbol({});
isObject(symbol2);
// => false
```

Class

```js
class MyClass {
  constructor() {}
}
const classObj = new MyClass();
isObject(classObj);
// => false
```
