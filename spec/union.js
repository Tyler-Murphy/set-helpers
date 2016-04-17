'use strict';
const test = require('tape');
const union = require('../index.js').union;

test('union', t => {
    t.looseEqual(
        union(new Set([1, 2, 3]), new Set([4, 5, 6])),
        new Set([1, 2, 3, 4, 5, 6]),
        'returns a set containing all values from all arguments'
    );

    t.looseEqual(
        union(new Set([1]), new Set([1]), new Set([2]), new Set([3])),
        new Set([1, 2, 3]),
        'works for many arguments'
    );

    t.looseEqual(
        union(new Set, new Set, new Set),
        new Set,
        'works for empty sets'
    );

    t.end();
});
