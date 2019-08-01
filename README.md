[![Build Status](https://travis-ci.org/chaika-design/isObject.svg?branch=master)](https://travis-ci.org/chaika-design/isObject)
[![codecov](https://codecov.io/gh/chaika-design/isObject/branch/master/graph/badge.svg)](https://codecov.io/gh/chaika-design/isObject)
[![MIT License](http://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/chaika-design/isObject/blob/master/package.json)

# isObject

`isObject( val: any ): Boolean` return `true` if val is Object.
Verifies if it not an array, null, Date, and Class Object.

## test

```sh
$ npm run test
```

## build

```sh
$ npm run build
```

## install

```sh
$ npm install isObject
```

## usage

```js
import isObject from 'isObject';
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

isObject("");
// => false
```

`Date`, `Symbol`, `Class object` return `false`

Date
```js
const date = new Date();
isObject(date);
// => false
```

Symbol
```js
const symbol1 = new Symbol();
isObject(symbol1);
// => false

const symbol2 = new Symbol( {} );
isObject(symbol2);
// => false
```

Class
```js
class MyClass {
  constructor() {}
};
const classObj = MyClass();
isObject(classObj);
// => false
```
