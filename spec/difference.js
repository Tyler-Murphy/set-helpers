'use strict';
const test = require('tape');
const difference = require('../index.js').difference;

test('difference', t => {
    t.looseEqual(
        difference(new Set([1, 2, 3]), new Set([0, 2, 4])),
        new Set([1, 3]),
        'removes elements from the first set passed'
    );

    t.looseEqual(
        difference(new Set([1, 2, 3]), new Set([1]), new Set([2, 4, 3])),
        new Set(),
        'accepts many sets to subtract from the first'
    );

    t.looseEqual(
        difference(new Set(), new Set([1, 2, 3])),
        new Set(),
        'works for empty sets'
    );

    t.looseEqual(
        difference(new Set(['a', 'b', 'c'])),
        new Set(),
        'works with just one argument'
    )

    t.end();
});