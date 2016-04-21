'use strict';
module.exports = intersection;

/**
 * Returns the intersection of values in all sets passed
 * @param {...Set} set
 * @return {Set} intersection of all provided sets
 */
function intersection() {
    let sets = Array.from(arguments),
        setSizes = sets.map(set => set.size),
        smallestSetIndex = setSizes.indexOf(Math.min.apply(Math, setSizes)),
        smallestSet = sets[smallestSetIndex],
        result = new Set(smallestSet);

    sets.splice(smallestSetIndex, 1);

    smallestSet.forEach(value => {
        for (let i = 0; i < sets.length; i += 1) {
            if (!sets[i].has(value)) {
                result.delete(value);
                break;
            }
        }
    });

    return result;
}
