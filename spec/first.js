'use strict';
const test = require('tape');
const first = require('../index.js').first;

test('first', t => {
    t.equal(first(new Set), [][0]);
    t.equal(first(new Set([1, 2, 3])), 1);
    t.end();
});
