/**
 * Arrow functions conserve a reference to this, and are easier to write
 */

// Normal function
var sum = function(x, y) {
  return x + y;
};

// Arrow function
const sum = (x, y) => x + y;

// OR

const sum = (x, y) => {
  return x + y;
};

// ---

const array = [1, 2, 3];
const double = array.map(x => x * 2);

console.log(double); //--> [2,4,6]

// ---
setTimeout(() => alert('1 second'), 1000);
