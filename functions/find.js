'use strict';
module.exports = find;

/**
 * Returns the first set element causing the provided function to return truthy
 * when passed
 * @param {Set} set
 * @param {iteratorCallback} finder - function which is passed the current
 *      value and the entire set
 * @return {*} the first value found, or undefined of nothing was found
 */
function find(set, finder) {
    for (let value of set.values()) {
        if (finder(value, set)) return value;
    }
}
