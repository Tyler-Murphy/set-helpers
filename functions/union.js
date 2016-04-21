'use strict';
module.exports = union;

/**
 * Returns a set containing the union of all sets passed
 * @param {...Set} set
 * @return {Set} union of all sets provided
 */
function union() {
    let result = new Set;

    Array.from(arguments).forEach(set => {
        set.forEach(value => result.add(value));
    });

    return result;
}
