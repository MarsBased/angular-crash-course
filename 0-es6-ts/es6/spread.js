/**
 * The SPREAD operator converts an array to a number of arguments.
 * Converts an array to arguments.
 */

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // --> 6
