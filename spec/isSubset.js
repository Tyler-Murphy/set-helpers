'use strict';
const test = require('tape');
const isSubset = require('../index.js').isSubset;

test('isSubset', t => {
    t.equal(isSubset(new Set, new Set), true);
    t.equal(isSubset(new Set([1, 2, 3]), new Set([1, 2, 3])), true);
    t.equal(isSubset(new Set([1, 2, 3]), new Set), false);
    t.equal(isSubset(new Set([1, 2, 3]), new Set([1])), false);
    t.equal(isSubset(new Set, new Set([1, 2, 3])), true);
    t.equal(isSubset(new Set([1]), new Set([1, 2, 3])), true);
    t.equal(isSubset(new Set([0]), new Set([1, 2, 3])), false);
    t.end();
});
