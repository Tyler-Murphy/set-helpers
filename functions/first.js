'use strict';
module.exports = first;

/**
 * Returns the first element of a set
 * @param {Set} set
 * @return {*} the set's first element
 */
function first(set) {
    return set.values().next().value;
}
