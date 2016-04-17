'use strict';
const test = require('tape');
const index = require('../index.js');

test('index', t => {
    t.equal(
        typeof index,
        'function',
        'is a function'
    );

    t.equal(
        index(),
        index,
        'returns itself when called, so can be used whether called or not'
    );

    index({ extendPrototype: ['find'] });
    t.equal(
        typeof Set.prototype.find,
        'function',
        'can selectively extend the prototype'
    );

    index({ extendPrototype: true });
    t.equal(
        typeof Set.prototype.intersection,
        'function',
        'can add all methods to the prototype'
    );

    t.looseEqual(
        (new Set([1, 2, 3])).difference(new Set([1, 3])),
        new Set([2]),
        'adds usable methods to the prototype'
    );

    t.end();
});
