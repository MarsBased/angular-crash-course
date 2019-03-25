/**
 * CONST and LET are new keywords to declare variables. They are block scoped.
 * VAR variables were function scoped.
 */

// You can NOT modify this
const myName = 'David';
myName = 'Peter'; // --> this throws an exception

// You CAN modify this
let surname = 'Garcia';
surname = 'Garmendia'; // --> that's fine

// You can NOT modify myAddress value
const myAddress = {
  street: '5th Avenue'
};

// BUT You can modify nested properties
myAddress.street = '742 Evergreen Terrace'; // --> OK

// Remember, CONST and LET are block-scoped
function blockFunction() {
  const a = 4;

  {
    const b = 6;

    console.log(b); // --> OK
  }

  console.log(a); // --> OK

  console.log(b); // --> EXCEPTION (b is not defined)
}
