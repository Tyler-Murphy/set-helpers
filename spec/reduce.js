'use strict';
const test = require('tape');
const reduce = require('../index.js').reduce;

test('reduce', t => {
    t.equal(reduce(new Set([1, 2, 3]), (a, b) => a + b), 6, 'works');

    t.equal(
        reduce(new Set, (a, b) => a + b, 0),
        0,
        'returns the initial value for empty sets'
    );

    t.equal(
        reduce(new Set, undefined),
        undefined,
        'returns undefined for empty sets with no initial value'
    );

    let set = new Set([1, 2, 3]);
    reduce(set, (reducedValue, value, entireSet) => {
        t.equal(set, entireSet, 'passes the entire set');
    });
    
    t.end();
});
