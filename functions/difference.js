'use strict';
module.exports = difference;

/**
 * Subtracts the second through nth set from the first set passed
 * @param {...Set} set
 * @return {Set} first set without elements that appear in subsequent sets
 */
function difference(set) {
    let result = new Set(set);

    Array.from(arguments).slice(1).forEach(set => {
        set.forEach(value => result.delete(value));
    });

    return result;
}
