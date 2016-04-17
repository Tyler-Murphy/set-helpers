'use strict';
module.exports = map;

/**
 * Returns a new set created by calling a provided function with every element
 * in the set.
 * @param {Set} set - starting set
 * @param {iteratorCallback} mapper - map function, which is passed the
 *      current value and the entire set
 * @return {Set} mapped set
 */
function map(set, mapper) {
    let result = new Set;
    set.forEach(value => result.add(mapper(value, set)));
    return result;
};
