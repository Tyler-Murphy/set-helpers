'use strict';
const test = require('tape');
const every = require('../index.js').every;

test('every', t => {
    t.equal(
        every(new Set, () => false),
        [].every(() => false),
        'matches empty array behavior when empty'
    );

    t.equal(
        every(new Set([1, 2, 3]), n => n < 5),
        true,
        'returns true if every element meets the condition'
    );

    t.equal(
        every(new Set([1, 2, 3]), n => n < 2.5),
        false,
        'returns false if any elements do not meet the condition'
    );

    let set = new Set([1, 2, 3]);
    every(set, (value, entireSet) => {
        t.equal(entireSet, set, 'provides the entire set');
        return false;
    });

    t.end();
});
