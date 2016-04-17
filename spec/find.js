'use strict';
const test = require('tape');
const find = require('../index.js').find;

test('find', t => {
    t.equal(
        find(new Set([1, 2, 3, 4]), n => n % 2 === 0),
        2,
        'returns the first element satisfying the condition'
    );

    t.equal(
        find(new Set([1, 2, 3]), n => n > 5),
        undefined,
        'returns undefined if nothing satisfies the condition'
    );

    let set = new Set([1]);
    find(set, (value, entireSet) => {
        t.equal(set, entireSet, 'provides the entire set');
    });

    t.end();
});
