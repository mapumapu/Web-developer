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
// Inheritance Between "Classes": Constructor Functions
/////////////////////////////////////////////

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const aditya = new Student('Aditya', 1996, 'Sistem Informasi');
aditya.introduce();
aditya.calcAge();

console.log(aditya.__proto__);
console.log(aditya.__proto__.__proto__);

console.log(aditya instanceof Student);
console.log(aditya instanceof Person);
console.log(aditya instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

/////////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes
/////////////////////////////////////////////

/*
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

  // static method
  static hey() {
    console.log('Hey Haiya');
    console.log(this);
  }
}

// Inheritance
class StudentClass extends PersonClass {
  constructor(fullName, birthYear, course) {
    // Always need to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2022 - this.birthYear
      } years old, but as a student I feel more like ${
        2022 - this.birthYear + 10
      }`
    );
  }
}

const mastuty = new StudentClass('Mastuty', 1997, 'Sistem Informasi');
mastuty.introduce();
mastuty.calcAge();
*/

/////////////////////////////////////////////
// Inheritance Between "Classes": Object.create
/////////////////////////////////////////////

/*
const PersonPrototype = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonPrototype);

const StudentPrototype = Object.create(PersonPrototype);

StudentPrototype.init = function (firstName, birthYear, course) {
  PersonPrototype.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentPrototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentPrototype);
jay.init('Jay', 1993, 'Sisfor');
jay.introduce();
jay.calcAge();
*/

/////////////////////////////////////////////
// Another Class Example
/////////////////////////////////////////////
// Encapsulation: Protected Properties and Methods
/////////////////////////////////////////////
// Encapsulation: Private Class Fields and Methods
/////////////////////////////////////////////

/*
// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// (there is also the static version)

class Account {
  // 1. Public fields (instances)
  locale = navigator.language;

  // 2. Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening and account, ${owner}`);
  }

  // 3. Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    // for chaining
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    // for chaining
    return this;
  }

  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan Approved`);
      // for chaining
      return this;
    }
  }

  static helper() {
    console.log(`Help!`);
  }

  // 4. Private methods
  // #approveLoan(value) {
  _approveLoan(value) {
    return true;
  }
}

const acc1 = new Account('Aditya', 'IDR', 9999);

// acc1.movements.push(2500);
// acc1.movements.push(-1500);
acc1.deposit(2500);
acc1.withdraw(1400);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoad(1000));

/////////////////////////////////////////////
// Chaining Methods
/////////////////////////////////////////////

acc1.deposit(300).deposit(500).withdraw(123).requestLoan(1999).withdraw(4000);
console.log(acc1.getMovements());
*/
