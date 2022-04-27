import { argv } from 'process';
import { Add } from './api/add.js';
import { Subtract } from './api/subtract.js';
import { Multiply } from './api/multiply.js';
import { Divide } from './api/divide.js';

const a = Number(argv[2]) || 1;
const b = Number(argv[3]) || 1;

console.log(`${a} + ${b} = ${Add(a, b)}` );
console.log(`${a} - ${b} = ${Subtract(a, b)}` );
console.log(`${a} * ${b} = ${Multiply(a, b)}` );
console.log(`${a} / ${b} = ${Divide(a, b)}` );