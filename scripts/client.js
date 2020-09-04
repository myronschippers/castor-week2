// ----> hoisted things
// something = undefined
console.log('Hello Castor!!!');

const pets = 6;
const friendsPets = 6;

let mostPets;

if (pets > friendsPets) {
  mostPets = pets;
} // end if I have more pets than friend
else if (pets < friendsPets) {
  mostPets = friendsPets;
} // end if my friend has more pets
console.log('>>>>> mostPets:',mostPets);

// variables, declaration

// const
// let
// var - old school hoists

// var something = 'here';

let kittyKat = 'Fluffy';
console.log(kittyKat);
const dogo = 'Bowser';
console.log(dogo);

kittyKat = 'Toby';
console.log(kittyKat);

// values stored
// data type

// string
const stringVal = 'Birdy';
console.log('stringVal:', stringVal);

// number
let someNum = 3;
console.log('someNum:', someNum);
someNum = '3' * 2;
// *
// /
// -
console.log('someNum:', someNum);

// boolean - true or false
let boolTest = false;
console.log('boolTest:', boolTest);

// conditional statements
// if, else if, else

// = - for assignment

// == - only checks value
// === - checks value and type
// < - less than
// > - greater than
// <= - less than or equal
// >= - greater than or equal
// != - does not equal for value only
// !== - does not equal type and value
// ! - shorthand for falsy values

if (someNum !== '5') {
  console.log('Did I pass?');
} else if (someNum == '5') {
  console.log('Not the right type');
} else {
  console.log('FAILED');
}

if (!boolTest) {
  const doesntExist = false;
  console.log('Totes FALSE', doesntExist);
}
// console.log('doesntExist', doesntExist);
