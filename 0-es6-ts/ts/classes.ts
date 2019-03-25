/**
 * TypeScript Classes
 */
class Person {
  name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getNextYearAge(): number {
    return this.age + 1;
  }

  get introduce(): string {
    return `I'm ${name} and I'm ${age} years old`;
  }

  set fullname(fullname: string) {
    this.name = fullname.split(' ')[0];
  }
}

const person = new Person('Peter', 40);
console.log(person.name); //--> Peter
console.log(person.age); //--> Exception
console.log(person.getNextYearAge()); //--> 41
console.log(person.introduce); // I'm Peter and I'm 41 years old
person.fullname = 'Rober Smith';

class PersonWithAddress {
  address: string;

  constructor(public name, private age) {
    this.initAddress();
  }

  private initAddress() {
    this.address = '';
  }
}
