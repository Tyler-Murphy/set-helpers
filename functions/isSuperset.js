'use strict';
const every = require('./every.js');

module.exports = isSuperset;

/**
 * Returns true if the first set is a superset of the second, and false otherwise
 * @param {Set} set1
 * @param {Set} set2
 * @return {Boolean} true if set1 is a superset of set2, false otherwise
 */
function isSuperset(set1, set2) {
    return every(set2, value => set1.has(value));
}
