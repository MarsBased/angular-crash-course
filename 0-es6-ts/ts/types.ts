/**
 * Types in TypeScript are defined after the : symbol
 */
() => {
  let address: string;
  address = '5th Avenue';

  let zipCode: number;
  zipCode = 90210;

  let isHidden: boolean;
  isHidden = true;

  let unknow: any;
  unknow = 1;
  unknow = 'Test';

  let fruits: string[];
  fruits = ['apple', 'orange', 'banana'];
};

// Infering type
() => {
  const address = '5th Avenue';
  const zipCode = 90210;
  const isHidden = true;
  const fruits = ['apples', 'oranges', 'bananas'];

  (fruit: string): string => {
    return `I like ${fruit}`;
  };
};
