'use strict';
module.exports = intersection;

/**
 * Returns the intersection of values in all sets passed
 * @param {...Set} set
 * @return {Set} intersection of all provided sets
 */
function intersection() {
    let setSizes = Array.prototype.map.call(arguments, set => set.size),
        smallestSetIndex = setSizes.indexOf(Math.min.apply(Math, setSizes)),
        smallestSet = arguments[smallestSetIndex],
        result = new Set;

    for (let value of smallestSet.values()) {
        let valueInAllSets = true;
        for (let setIndex = 0; setIndex < arguments.length; setIndex += 1) {
            if (!arguments[setIndex].has(value)) {
                valueInAllSets = false;
                break;
            }
        }
        if (valueInAllSets) result.add(value);
    }

    return result;
}
