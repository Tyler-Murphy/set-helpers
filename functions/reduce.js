'use strict';
module.exports = reduce;

/**
 * Reduces a set to a single value based on the provided reduction function
 * and optional initial value.
 * @param {Set} set - starting set
 * @param {reduceCallback} reducer - reduction function, which is passed the reduced
 *      value, current value, and entire set, in that order
 * @param {*} [initialValue] - first value used for the reduced value passed
 *      to reducer - the first value from the set will be used if not provided
 * @return {*} reduced value
 */
function reduce(set, reducer, initialValue) {
    let setValues = set.values(),
        reducedValue = initialValue !== undefined ? initialValue : setValues.next().value;

    for (let value of setValues) {
        reducedValue = reducer(reducedValue, value, set);
    }

    return reducedValue;
}