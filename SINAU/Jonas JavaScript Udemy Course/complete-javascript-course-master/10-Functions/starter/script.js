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

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  //1.
  registerNewAnswer: function () {
    //1.1
    const answer = Number(
      prompt(`${this.question}\n${this.options.join('\n')}`)
    );
    console.log(answer);

    //1.2
    if (typeof answer === 'number' && answer < this.answers.length) {
      this.answers[answer]++;
    }

    //Better
    //typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++

    //4.
    this.displayResult();
    this.displayResult('string');
  },

  //3.
  displayResult: function (type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll result are ${this.answers.join(', ')}`);
    }
  },
};

//2.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//5. Bonus
poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] });
