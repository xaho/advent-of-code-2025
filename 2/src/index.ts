import * as fs from 'node:fs';
import {process} from './process.js';
import * as assert from 'node:assert';

const input = fs.readFileSync('input.txt', 'utf8');
assert.deepEqual(process(fs.readFileSync('example.txt', 'utf8')), {invalidIds: 1227775554, part2: 4174379265});

console.log(process(input));