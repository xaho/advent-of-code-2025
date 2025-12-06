import * as fs from 'node:fs';
import {process} from './process.js';
import * as assert from 'node:assert';

const input = fs.readFileSync('input.txt', 'utf8');
const example = fs.readFileSync('example.txt', 'utf8');
assert.equal(process(example), 3);
console.log(process(input));
