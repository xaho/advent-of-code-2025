import * as fs from 'node:fs';
import {part2, process} from './process.js';
import * as assert from 'node:assert';

const input = fs.readFileSync('input.txt', 'utf8');
const example = fs.readFileSync('example.txt', 'utf8');
assert.equal(process(example).splits, 21);
console.log(process(input));

assert.equal(part2(example), 40);
console.log(part2(input));
