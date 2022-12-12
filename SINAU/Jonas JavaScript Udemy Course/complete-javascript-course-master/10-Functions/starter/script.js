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
