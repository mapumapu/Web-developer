'use strict';

// #########################################################
// Default Parameters
// #########################################################

/*
const bookings = [];

const createBooking = function (
  flightNumb,
  numPassengers = 1,
  price = 199 * numPassengers //must define before
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199

  const booking = {
    flightNumb,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('GA123');
createBooking('GA123', 2, 800);
createBooking('GA123', 2);
createBooking('GA123', 5);

createBooking('GA123', undefined, 1000);
*/

// #########################################################
// How Passing Arguments Works: Value vs Reference
// #########################################################

/*
const flight = 'GA123';
const adit = {
  name: 'Aditya Prasetya',
  passport: 12344356789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'GA999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 12344356789) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, adit);
// console.log(flight);
// console.log(adit);

// Is the same as doing
// const flightNum = flight;
// const passenger = adit;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(adit);
checkIn(flight, adit);
// console.log(adit);
*/

// #########################################################
// Functions Accepting Callback functions
// #########################################################

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

//JS uses callback all the time
const high5 = function () {
  console.log('Hey');
};

document.body.addEventListener('click', high5);

['Adit', 'Mastuty', 'Anak kami'].forEach(high5);
*/

// #########################################################
// Functions returning functions
// #########################################################

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Adit');
greeterHey('Mastuty');

greet('Hello')('Adit');

//Challenge

// const greet2 = greeting =>
//   function (name) {
//     console.log(`${greeting} ${name}`);
//   };

const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet2('Hi')('Adit');
*/

// #########################################################
// Call, Apply, and Bind Method
// #########################################################

/*
const garudaIndonesia = {
  airline: 'Garuda Indonesia',
  iataCode: 'GA',
  bookings: [],

  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

garudaIndonesia.book(123, 'Aditya Prasetya');
garudaIndonesia.book(123, 'Mastuty Ayu');
console.log(garudaIndonesia);

const citilink = {
  airline: 'Citilink',
  iataCode: 'QG',
  bookings: [],
};

const book = garudaIndonesia.book;

// Does NOT work
// book(123, 'Aditya Mastuty');

// Call method
book.call(citilink, 123, 'Aditya Mastuty');
console.log(citilink);

book.call(garudaIndonesia, 123, 'Prasetya Ningtyas');
console.log(garudaIndonesia);

const lionAir = {
  airline: 'Lion Air',
  iataCode: 'JT',
  bookings: [],
};

book.call(lionAir, 123, 'Utama Mastuty');

// Apply method
const flightData = [583, 'Aditya Mastuty'];
book.apply(lionAir, flightData);
console.log(lionAir);

// Same as apply method
book.call(lionAir, ...flightData);

// Bind method
// book.call(citilink, 123, 'Aditya Mastuty');

const bookCitilink = book.bind(citilink);
const bookGarudaIndonesia = book.bind(garudaIndonesia);
const bookLionAir = book.bind(lionAir);

bookCitilink(123, 'Aditya Utama');

const bookCitilink123 = book.bind(citilink, 123);
bookCitilink123('Aditya');
bookCitilink123('Mastuty');

// With Event Listener
garudaIndonesia.planes = 300;
garudaIndonesia.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// garudaIndonesia.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', garudaIndonesia.buyPlane.bind(garudaIndonesia));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.12);
// addVAT = value => value + value * 0.12

console.log(addVAT(100));
console.log(addVAT(23));

//Challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.12);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

// #########################################################
// Immediately Invoked Function Expressions(IIFE)
// #########################################################

/*
const runOnce = function () {
  console.log(`This will never run again`);
};

runOnce();

//IIFE
(function () {
  console.log(`This will never run again`);
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log(`This will ALSO never run again`))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);
*/

// #########################################################
// Closures
// #########################################################

/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

//More Closures Example
//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//Re-assigning f function
h();
f();

console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log(`HAIYA`);
// }, 1000);

const perGroup = 1000
boardPassengers(180, 3);
*/
