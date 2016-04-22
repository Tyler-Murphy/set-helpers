'use strict';
const every = require('./every.js');

module.exports = isSubset;

/**
 * Returns true if the first set is a subset of the second, and false otherwise
 * @param {Set} set1
 * @param {Set} set2
 * @return {Boolean} true if set1 is a subset of set2, false otherwise
 */
function isSubset(set1, set2) {
    return every(set1, value => set2.has(value));
}
