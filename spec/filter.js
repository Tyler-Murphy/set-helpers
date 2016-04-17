'use strict';
const test = require('tape');
const filter = require('../index.js').filter;

test('filter', t => {
    t.looseEqual(
        filter(new Set([1, 2, 3, 4, 5]), n => n > 3),
        new Set([4, 5]),
        'removes every element causing the function to return false'
    );

    t.looseEqual(
        filter(new Set),
        new Set,
        'works for empty sets'
    );

    let set = new Set;
    filter(set, (value, entireSet) => {
        t.equal(set, entireSet, 'provides the entire set');
    });

    t.end();
});
