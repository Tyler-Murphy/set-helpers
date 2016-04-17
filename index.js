'use strict';
const path = require('path');
const fs = require('fs');

const functionDirectoryPath = path.join(__dirname, 'functions');
const dotJsMatcher = /\.js$/;
const exportNames = fs.readdirSync(functionDirectoryPath)
.filter(name => dotJsMatcher.test(name))
.map(name => name.replace(dotJsMatcher, ''));

/**
 * The main export, which has every function in functions/ added as a property
 * @param {Object} [options] - settings for the import
 * @param {(String|Boolean)} options.extendPrototype - If true, all functions
 *      in functions/ are added to the Set prototype. If an array, only the
 *      names specified in the array are added to the prototype
 * @return {Function} self
 */
function handleExport(options) {
    if (options && options.extendPrototype) {
        let extensions = options.extendPrototype.forEach ? options.extendPrototype : exportNames;
        extensions.forEach(name => {
            extendSetPrototype(name, handleExport[name]);
        });
    }
    return handleExport;
}

/**
 * Adds a function to the Set prototype so that the set instance is passed as
 * the first argument.
 * @param {String} name - name of the prototype method
 * @param {Function} method
 */
function extendSetPrototype(name, method) {
    Set.prototype[name] = function() {
        let argumentArray = Array.prototype.slice.call(arguments, 0)
        argumentArray.unshift(this);
        return method.apply(null, argumentArray);
    };
}

exportNames.forEach(name => {
    handleExport[name] = require(path.join(functionDirectoryPath, name));
});

module.exports = handleExport;
