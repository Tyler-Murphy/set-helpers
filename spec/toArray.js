'use strict';
const test = require('tape');
const toArray = require('../index.js').toArray;

test('toArray', t => {
    t.looseEqual(
        toArray(new Set([1, 2, 3])),
        [1, 2, 3]
    );

    t.end();
});
