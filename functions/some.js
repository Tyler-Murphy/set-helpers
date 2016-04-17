'use strict';
module.exports = some;

/**
 * Returns true if some set element returns a truthy value when passed to the
 * provided filter function, and false otherwise
 * @param {Set} set
 * @param {iteratorCallback} filter - function which is passed the current
 *      value and the entire set
 * @return {boolean} whether any values match the filter
 */
function some(set, filter) {
    for (let value of set.values()) {
        if (filter(value, set)) return true;
    }
    return false;
}
