'use strict';
const test = require('tape');
const intersection = require('../index.js').intersection;

test('intersection', t => {
    t.looseEqual(
        intersection(new Set([1, 2, 3]), new Set([4, 5, 6])),
        new Set,
        'returns an empty set when arguments have nothing in common'
    );

    t.looseEqual(
        intersection(new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([3, 4, 5])),
        new Set([3]),
        'returns a set with all shared elements'
    );

    t.end();
});
