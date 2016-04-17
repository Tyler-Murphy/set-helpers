'use strict';
module.exports = filter;

/**
 * Returns a new set with all values that cause the filter function to return
 * a truthy value
 * @param {Set} set
 * @param {iteratorCallback} filter - function which is passed the current
 *      value and the entire set
 * @return {boolean} filtered set
 */
function filter(set, filter) {
    let result = new Set;
    set.forEach(value => {
        if (filter(value, set)) result.add(value);
    });
    return result;
}
