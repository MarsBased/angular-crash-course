/**
 * We can avoid some arguments giving a default value
 */

function multiply(a, b = 10) {
  return a * b;
}

console.log(multiply(5, 2)); //--> 10
console.log(multiply(5)); //--> 50

// We usually prefer having the default argument at the end, but it's no mandatory
function multiply(a, b = 10, c) {
  return a * b * c;
}

console.log(multiply(5, 10, 2)); //--> 100
console.log(multiply(5, undefined, 2)); //--> 100
console.log(multiply(5, undefined, 1)); //--> 50

console.log(multiply(5, null, 1)); //--> Exception
console.log(multiply(5)); //--> Exception
