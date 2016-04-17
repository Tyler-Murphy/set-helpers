'use strict';
module.exports = union;

/**
 * Returns a set containing the union of all sets passed
 * @param {...Set} set
 * @return {Set} union of all sets provided
 */
function union() {
    let result = new Set;

    for (let setIndex = 0; setIndex < arguments.length; setIndex += 1) {
        for (let value of arguments[setIndex].values()) {
            result.add(value);
        }
    }

    return result;
}
