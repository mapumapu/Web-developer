'use strict';

/*
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's vaiable
      const firstName = 'Mapu';
      const str = `Oh, and you're a millenial,  ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // Reassignin outer scope's variable
      output = 'NEW OUTPUT';
    }
    // console.log(str);
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Adit';
calcAge(1996);
*/

/*
//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Adit';
let job = 'Frond End Developer';
const year = 1996;

//Function
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example
console.log(numProduct);
if (!numProduct) deleteShoppingCart();

var numProduct = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

// console.log(this);

/*
const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  // console.log(this);
};

calcAge(1996);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  // console.log(this);
};

calcAgeArrow(1996);

const adit = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

adit.calcAge();

const mastuty = {
  year: 1997,
};

mastuty.calcAge = adit.calcAge;
mastuty.calcAge();

const f = adit.calcAge;
f();
*/

//Regular Functions vs Arrow Functions

// var firstName = 'Mastuty';

/*
const adit = {
  firstName: 'adit',
  year: 1996,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

adit.greet();
adit.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 3);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

// addArrow(2, 5, 2);
*/

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Adit',
  age: 26,
};

const friend = me;
friend.age = 25;
console.log('Friend:', friend);
console.log('Me:', me);
*/

// Primitive types
let lastName = 'Ningtyas';
let oldLastName = lastName;
lastName = 'Prasetya';

console.log(lastName);
console.log(oldLastName);

// Reference types
const mastuty = {
  firstName: 'Mastuty',
  lastName: 'Ningtyas',
  age: 25,
};

const marriedMastuty = mastuty;
marriedMastuty.lastName = 'Prasetya';
console.log('Before Marriage:', mastuty);
console.log('After Marriage:', marriedMastuty);

// marriedMastuty = {}

//Copying objects
const mastuty2 = {
  firstName: 'Mastuty',
  lastName: 'Ningtyas',
  age: 25,
  family: ['Bapak', 'Ibu'],
};

const mastutyCopy = Object.assign({}, mastuty2);
mastutyCopy.lastName = 'Prasetya';
console.log('Before Marriage:', mastuty2);
console.log('After Marriage:', mastutyCopy);

mastutyCopy.family.push('Rega (Anak)');
mastutyCopy.family.push('Adit');
