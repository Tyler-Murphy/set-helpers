'use strict';
const Benchmark = require('benchmark');
const range = require('lodash.range');

let setSizes = range(8).map(n => Math.pow(10, n));

setSizes.forEach(size => {
    let suite = new Benchmark.Suite,
        set = new Set(range(size));

    suite.add('for ... of', () => {
        for (let value of set) {}
    });

    suite.add('forEach', () => {
        set.forEach(value => {});
    });

    suite.on('cycle', event => console.log(event.target.toString()));

    console.log(`\nSet size: ${size}`);
    suite.run();
});
