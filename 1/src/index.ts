import * as fs from 'fs';
import {process} from './process.js';
import * as assert from 'assert';

assert.deepEqual(process(fs.readFileSync('example.txt', 'utf8')), {atZero: 3, passedZero: 6});
assert.equal(process('R1000').passedZero, 10);
const input = fs.readFileSync('input.txt', 'utf8')
console.log(process(input));