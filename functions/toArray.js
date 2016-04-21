'use strict';
module.exports = toArray;

/**
 * Turns a set into an array
 * @param {Set} set
 * @return {Array}
 */
function toArray(set) {
    let result = Array(set.size),
        i = 0;

    set.forEach(value => result[i++] = value);

    return result;
}
