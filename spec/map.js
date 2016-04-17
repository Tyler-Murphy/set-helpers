'use strict';
const test = require('tape');
const map = require('../index.js').map;

test('map', t => {
    t.looseEqual(map(new Set, () => 1), new Set, 'works for empty sets');
    t.looseEqual(map(new Set([0, 1]), n => n + 1), new Set([1, 2]), 'maps set values');

    let set = new Set([1, 2, 3]);
    map(set, (value, entireSet) => {
        t.equal(set, entireSet, 'passes the entire set');
    });
    
    t.end();
});
