/**
 * REST operator represent an undefined number of arguments as an array.
 * Converts arguments to array.
 */

function sum(...numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });

  return sum;
}

console.log(sum(1, 2, 3)); // --> 6
console.log(sum(1, 2, 3, 4)); // --> 10
