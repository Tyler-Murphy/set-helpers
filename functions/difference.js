'use strict';
module.exports = difference;

/**
 * Subtracts the second through nth set from the first set passed
 * @param {...Set} set
 * @return {Set} first set without elements that appear in subsequent sets
 */
function difference(set) {
    let result = new Set(set);

    for (let setIndex = 1; setIndex < arguments.length; setIndex += 1) {
        for (let value of arguments[setIndex].values()) {
            result.delete(value);
        }
    }

    return result;
}
