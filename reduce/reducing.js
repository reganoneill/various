'use strict';

const fs = require('fs');

var readFile = fs.readFileSync('files.txt', 'utf-8')
  .trim()
  .split('\n')
  .map( line => line.split('  '))
  .reduce((acc, curr) => {
    acc[curr[0]] = acc[curr[0]] || [];
    acc[curr[0]].push({
      name: curr[1],
      price: curr[2],
      quantity: curr[3]
    });
    return acc;
  }, {});

console.log('readFile', JSON.stringify(readFile, null, 4));
