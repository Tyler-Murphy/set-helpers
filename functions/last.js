'use strict';
module.exports = last;

/**
 * Returns the last element of a set
 * @param {Set} set
 * @return {*} the set's last element
 */
function last(set) {
    let result;

    set.forEach(value => result = value);

    return result;
}
