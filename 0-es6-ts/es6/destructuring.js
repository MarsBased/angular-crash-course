/**
 * Extract from an array or an object specific  properties/values
 */

const myLocation = {
  latitude: 42,
  longitude: 2,
  radius: 100,
  city: 'Barcelona'
};

const { latitude, longitude } = myLocation;
console.log(latitude); // --> 42
console.log(longitude); // --> 2

// You can use arrays too
const participants = ['David', 'Peter', 'Kent'];
const [firstParticipant, secondParticipant] = participants;

console.log(firstParticipant); //--> David
console.log(secondParticipant); //--> Peter

// Extra: combine with rest operator to remove properties
const { city, ...myLocationWithoutCity } = myLocation;
console.log(myLocationWithoutCity); //-->  { latitude: 42, longitude: 2, radius: 100 }
