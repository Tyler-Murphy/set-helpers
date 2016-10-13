[![Build Status](https://travis-ci.org/Tyler-Murphy/set-helpers.svg?branch=master)](https://travis-ci.org/Tyler-Murphy/set-helpers)

This implements many array methods that are missing for `Set`s, like `map`, `reduce`, and `every`. It also adds some `Set`-specific functions like `intersection`. The complete list is in `functions/`.

Almost everything is done with `Set` operations. There are no conversions to arrays and back.

# Install

```
npm install --save set-helpers
```

# Use

Functions can be used as-is or added to the `Set` prototype.

As-is:

```javascript
const setHelpers = require('set-helpers');
setHelpers.intersection(new Set([1, 2, 3]), new Set([0, 2, 6]));
```

Prototype:

```javascript
require('set-helpers')({ extendPrototype: true });
(new Set([1, 2, 3])).intersection(new Set([0, 2, 6]));
```

A combination of both:

```javascript
const setHelpers = require('set-helpers')({ extendPrototype: true });
setHelpers.join(new Set([1, 2, 3]));
(new Set([1, 2, 3])).join();
```

Selectively extending the prototype:

```javascript
require('set-helpers')({ extendPrototype: ['reduce'] });
Set.prototype.reduce;  // => [Function]
Set.prototype.map;     // => undefined
```

# [API](api.md)
