import * as fs from 'fs';
import {process} from './process.js';
import * as assert from 'node:assert';

assert.equal(process(fs.readFileSync('example.txt', 'utf8')), 357);
const input = fs.readFileSync('input.txt', 'utf8');
console.log(process(input));