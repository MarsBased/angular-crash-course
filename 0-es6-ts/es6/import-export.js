/**
 * ES6 Modules allow us to organize our code better
 */

// File file1.js
export function double(array) {
  return array.map(x => x * 2);
}

// File file2.js
import { double } from './file1';

console.log(double([1, 2, 3])); //--> [2,4,6]

// We can export default
// File file1.js
export default function double(array) {
  return array.map(x => x * 2);
}

// File file2.js
import double from './file1';

console.log(double([1, 2, 3])); //--> [2,4,6]
