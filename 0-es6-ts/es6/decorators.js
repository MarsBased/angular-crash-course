/**
 * Decorators allow us to componse functions
 */

//Eg. If we want to perform an action every second
function doEverySecond() {
  console.log('1 second');
}

setTimeout(() => doEverySecond(), 1000);

// Using decorators we can compose and reuse the setimeout function
function timeout(milliseconds = 0) {
  return function(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function() {
      setTimeout(() => {
        originalMethod.apply(this, arguments);
      }, milliseconds);
    };

    return descriptor;
  };
}

@timeout(1000)
function doEverySecond() {
  console.log('1 second');
}
