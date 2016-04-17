'use strict';
const test = require('tape');
const some = require('../index.js').some;

test('some', t => {
    t.equal(
        some(new Set, () => false),
        [].some(() => false),
        'matches empty array behavior when empty'
    );

    t.equal(
        some(new Set([1, 2, 3]), n => n < 2),
        true,
        'returns true if any element meets the condition'
    );

    t.equal(
        some(new Set([1, 2, 3]), n => n < 1),
        false,
        'returns false if no elements meet the condition'
    );

    let set = new Set([1, 2, 3]);
    some(set, (value, entireSet) => {
        t.equal(entireSet, set, 'provides the entire set');
        return false;
    });

    t.end();
});
