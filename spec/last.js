'use strict';
const test = require('tape');
const last = require('../index.js').last;

test('last', t => {
    t.equal(last(new Set), [].slice(-1)[0]);
    t.equal(last(new Set([1, 2, 3])), 3);
    t.end();
});
