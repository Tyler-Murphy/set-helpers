'use strict';
require('../index.js')({ extendPrototype: ['map'] });
const Benchmark = require('benchmark');
const range = require('lodash.range');

let setSizes = range(7).map(n => Math.pow(10, n));

setSizes.forEach(size => {
    let suite = new Benchmark.Suite,
        array = range(size),
        set = new Set(array);

    suite.add('Array#map', () => {
        array.map(value => value);
    });

    suite.add('Set#map', () => {
        set.map(value => value);
    });

    suite.on('cycle', event => console.log(event.target.toString()));

    console.log(`\nElements: ${size}`);
    suite.run();
});
