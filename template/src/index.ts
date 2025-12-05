import * as fs from 'fs';
import {process} from './process.js';
import * as assert from 'node:assert';

const input = fs.readFileSync('input.txt', 'utf8');
assert.equal(process(input), 0);