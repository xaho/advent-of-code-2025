import * as fs from 'node:fs';
import {process} from './process.js';
import * as assert from 'node:assert';

const input = fs.readFileSync('input.txt', 'utf8');
const example = fs.readFileSync('example.txt', 'utf8');
assert.equal(process(example), 13);
console.log(process(input));

assert.equal(process(example, true), 43);
console.log(process(input, true));