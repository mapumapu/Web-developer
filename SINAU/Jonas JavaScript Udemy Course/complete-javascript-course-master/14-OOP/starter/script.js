'use strict';

/////////////////////////////////////////////
// Constructor Functions and the 'new' Operator
/////////////////////////////////////////////
/*
const Person = function (firstName, birthYear) {
  // console.log(this);

  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER do this
  // Never create a function inside of constructuor function
  // this.calcAge = function () {
  //   console.log(2022 - this.birthYear);
  // };
};

const adit = new Person('Aditya', 1996);
console.log(adit);

const mastuty = new Person('Mastuty', 1997);
console.log(mastuty);

// how this work behind the scene
// 1. New empty object is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automaticly return {}

console.log(adit instanceof Person);
*/

/////////////////////////////////////////////
// Prototypes
/////////////////////////////////////////////
/*
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

adit.calcAge(); //25
mastuty.calcAge(); //26

// to see the prototype(blueprint)
console.log(adit.__proto__);
console.log(adit.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(adit)); //true
console.log(Person.prototype.isPrototypeOf(mastuty)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false
//.prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(adit.species, mastuty.species);

console.log(adit.hasOwnProperty('firstName'));
console.log(adit.hasOwnProperty('species'));
*/

/////////////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
/////////////////////////////////////////////
/*
console.log(adit.__proto__);

// Object.prototype (top of prototype chain)
console.log(adit.__proto__.__proto__);
console.log(adit.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor);

const arr = [3, 4, 5, 1, 3, 5, 2, 25, 2];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/
/////////////////////////////////////////////
// ES6 Classes
/////////////////////////////////////////////
/*
// class expression
// const PersonClass = class {}

// class declaration
class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  fullName;

  // Method will be added to .prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  // set a property that already exist
  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //static method
  static hey() {
    console.log('Hey Haiya');
    console.log(this);
  }
}

//static method
PersonClass.hey();

const aditClass = new PersonClass('Aditya Prasetya', 1996);
console.log(aditClass);
aditClass.calcAge();
console.log(aditClass.age);

console.log(aditClass.__proto__ === PersonClass.prototype); //true

// creating new method outside also works
// PersonClass.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
aditClass.greet();

// 1. Classes are not hoisted
// 2. Classes are first-class citizen
// 3. Classess area executed in strict mode
*/

/////////////////////////////////////////////
// Setters and Getters
/////////////////////////////////////////////

/*
const account = {
  owner: 'adit',
  movements: [123, 345, 1234, 5843],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); //5843
account.latest = 50;
console.log(account.movements); //add 50 in movements array
*/

/////////////////////////////////////////////
// Object.create
/////////////////////////////////////////////
// in Object.create we manually set the prototype of the object
// in constructor function or class we set the prototype at the beginning

/*
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  // initialize the prototype
  // do this instead
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

//set manually the prototype of the object
//you should not do like this
steven.name = 'Steven';
steven.birthYear = 1991;

steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1923);
sarah.calcAge();
*/

/////////////////////////////////////////////
// Constructor Functions and the new Operator
/////////////////////////////////////////////
/////////////////////////////////////////////
// Constructor Functions and the new Operator
/////////////////////////////////////////////
/////////////////////////////////////////////
// Constructor Functions and the new Operator
/////////////////////////////////////////////
/////////////////////////////////////////////
// Constructor Functions and the new Operator
/////////////////////////////////////////////
