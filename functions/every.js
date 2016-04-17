'use strict';
module.exports = every;

/**
 * Returns true if every set element returns a truthy value when passed to the
 * provided filter function, and false otherwise
 * @param {Set} set
 * @param {iteratorCallback} filter - function which is passed the current
 *      value and the entire set
 * @return {boolean} whether every value matches the filter
 */
function every(set, filter) {
    for (let value of set.values()) {
        if (!filter(value, set)) return false;
    }
    return true;
}
