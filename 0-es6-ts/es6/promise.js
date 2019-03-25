/**
 * Promises are useful to run async code (HTTP Requests)
 */

fetch('/user/data')
  .then(user => console.log(user))
  .catch(err => console.log(err));

// We can create our own promises
const promise = new Promise((resolve, reject) => {
  try {
    resolve();
  } catch (ex) {
    reject(ex);
  }
});
