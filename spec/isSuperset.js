'use strict';
const test = require('tape');
const isSuperset = require('../index.js').isSuperset;

test('isSuperset', t => {
    t.equal(isSuperset(new Set, new Set), true);
    t.equal(isSuperset(new Set([1, 2, 3]), new Set([1, 2, 3])), true);
    t.equal(isSuperset(new Set([1, 2, 3]), new Set), true);
    t.equal(isSuperset(new Set([1, 2, 3]), new Set([1])), true);
    t.equal(isSuperset(new Set, new Set([1, 2, 3])), false);
    t.equal(isSuperset(new Set([1]), new Set([1, 2, 3])), false);
    t.equal(isSuperset(new Set([0]), new Set([1, 2, 3])), false);
    t.end();
});
