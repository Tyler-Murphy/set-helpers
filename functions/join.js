// 'use strict';
const toArray = require('./toArray.js');

module.exports = join;

/**
 * Joins the set elements using the provided separator, or a comma if no
 * separator is provided
 * @param {Set} set
 * @param {*} [separator = ','] - separator, which is passed to Array.prototype.join
 *
 */
function join(set, separator) {
    return toArray(set).join(separator);
}
