/**
 * Interfaces is like creating types.
 */

interface Person {
  name: string;
  age: number;
}

interface Address {
  street: string;
  city: string;
  zipCode?: number;
  coordinates: Coordinates;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface User {
  id: number;
  address: Address;
  person: Person;
}

const user = {
  id: 1,
  address: {
    street: '5th Avenue',
    city: 'New York',
    coordinates: {
      latitude: -30,
      longitude: 2
    }
  }
};
