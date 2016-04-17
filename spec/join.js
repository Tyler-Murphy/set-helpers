'use strict';
const test = require('tape');
const join = require('../index.js').join;

test('join', t => {
    t.equal(join(new Set([1, 2, 3])), '1,2,3', 'uses a comma to join by default');
    t.equal(join(new Set([1, 2, 3]), ' #'), '1 #2 #3', 'allows other join strings');
    t.end();
});
