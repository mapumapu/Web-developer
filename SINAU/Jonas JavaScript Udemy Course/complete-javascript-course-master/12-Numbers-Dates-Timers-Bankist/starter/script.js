'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-11-01T10:17:24.185Z',
    '2022-11-08T14:11:59.604Z',
    '2022-12-23T17:01:17.194Z',
    '2022-12-24T23:36:17.929Z',
    '2022-12-28T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  // .textContent = ''

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formatMovement = formatCurrency(mov, acc.locale, acc.currency);

    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div><div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formatMovement}</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${formatCurrency(
    incomes,
    acc.locale,
    acc.currency
  )}`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${formatCurrency(
    Math.abs(outcomes),
    acc.locale,
    acc.currency
  )}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((interest, i, arr) => {
      // console.log(arr);
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = `${formatCurrency(
    interest.toFixed(2),
    acc.locale,
    acc.currency
  )}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const ticktock = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //When time is 0 second, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    //Decrease 1 second
    time--;
  };

  // Set time to 5 minutes
  let time = 120;

  //Call the timer every second
  ticktock();
  const timer = setInterval(ticktock, 1000);
  return timer;
};

//Event handler
let currentAccount, timer;

//FAKE ALWAYS LOGIN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //create current date and time
    // experimenting with API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', //bisa long jg
      year: 'numeric',
      // weekday: 'long',
    };

    // const locale = navigator.language;
    // console.log(locale); //en-US

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minute = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minute}`;

    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //Add load date
      currentAccount.movementsDates.push(new Date().toISOString());

      //update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    //The findIndex method
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // delete account
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
// Converting and Checking Numbers
/////////////////////////////////////////////////
/*
console.log(23 === 23.0); //true
// Base 10 - 0 to 9
// Binary base 2 - 0 1
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

// convert string to number
console.log(Number('23'));
// more simple
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('     2.5rem     '));
console.log(Number.parseFloat('2.5rem'));

// old school way
// console.log(parseFloat('2.5rem'));

// Check if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20x')); //true
console.log(Number.isNaN(23 / 0)); //false

// Check if value is real number not string
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite('20x')); //false //NaN
console.log(Number.isFinite(23 / 0)); //false //Infinity

console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false
*/

/////////////////////////////////////////////////
// Math and Rounding
/////////////////////////////////////////////////
/*
//Math
//Sqrt(square root)
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2

//Max
console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); //23
console.log(Math.max(5, 18, '23px', 11, 2)); //NaN

//Min
console.log(Math.min(5, 18, 23, 11, 2)); //2

//Math PI
console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.15

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
//0...1 -> 0...(max-min) -> min...max
console.log(randomInt(10, 20));

//Rounding integers
//trunc
console.log(Math.trunc(23.3)); //23

//round
console.log(Math.round(23.2)); //23
console.log(Math.round(23.6)); //24

//ceil
console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.6)); //24

//floor
console.log(Math.floor(23.3)); //23
console.log(Math.floor('23.6')); //23

console.log(Math.trunc(23.3));

//floor better than trunc
console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24

//rounding decimals

//toFixed always return string
console.log((2.7).toFixed(0)); //3(string)
console.log((2.7).toFixed(3)); //2.700(string)
console.log((2.345).toFixed(2)); //2.35(string)
console.log(+(2.345).toFixed(2)); //2.35(number)
*/

/////////////////////////////////////////////////
// The Remainder Operator
/////////////////////////////////////////////////
/*
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isGenap = n => n % 2 === 0;
console.log(isGenap(8));
console.log(isGenap(23));
console.log(isGenap(214));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0 2 4 6
    //every second time
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';

    // 0 3 6 9
    //every third time
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
*/

/////////////////////////////////////////////////
// Numeric Separators
/////////////////////////////////////////////////
/*
// to make the code easier to read
// 287,460,000,000
// const diameter = 287460000000;
const diameter = 287_460_000_000; // number separator _
console.log(diameter);

const priceCents = 345_99;
console.log(priceCents);

const transferFee1 = 15_00; //1500
const transferFee2 = 1_500; //1500

const PI = 3.14_15;
console.log(PI);

console.log(Number('230_000')); //NaN
console.log(parseInt('230_000')); //230
//only use on number dont use on string
*/

/////////////////////////////////////////////////
// Working with BigInt
/////////////////////////////////////////////////
/*
console.log(2 ** 53 - 1); //9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(32145234523452345234523452345n);
console.log(BigInt(32145234523));

// Operations
console.log(10000n + 10000n);
console.log(12312312312312312312312313n + 12312313n);

const huge = 234512345234523452345n;
const num = 23;
// console.log(huge * num); //error
console.log(huge * BigInt(num)); //12312312312312312324624626n
//cannot mix BigInt with other types

// Exceptions
console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(20n === '20'); //false
console.log(typeof 20n); //bigint

console.log(huge + 'is BIG');

//Divisions
console.log(10n / 3n); //3n ,cut the decimal part
console.log(10 / 3); 
*/

/////////////////////////////////////////////////
// Creating Dates
/////////////////////////////////////////////////

// Create a date
/*
const now = new Date();
console.log(now);

console.log(new Date('Dec 29 2022 19:19:23'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); // Nov 19
console.log(new Date(2037, 10, 31)); //Dec 1
// month in javascript is based on 0

console.log(new Date(0)); //Thu Jan 01 1970 07:00:00
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //Sun Jan 04 1970 07:00:00
*/
/*
// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
//Thu Nov 19 2037 15:23:00
console.log(future);
console.log(future.getFullYear()); //2037
//never use getYear()
console.log(future.getMonth()); //10 (NOV)
console.log(future.getDate()); //19
console.log(future.getDay()); //4
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //0
console.log(future.toISOString()); //2037-11-19T08:23:00.000Z
console.log(future.getTime()); //2142231780000

console.log(new Date(2142231780000)); //Thu Nov 19 2037 15:23:00

console.log(Date.now()); //timestamp now

future.setFullYear(2040);
console.log(future);
*/

/////////////////////////////////////////////////
// Operations with Dates
/////////////////////////////////////////////////
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future); //timestamp in milisecond 2142231780000

const calcDaysPassed1 = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed1(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1); //10 days
*/

/////////////////////////////////////////////////
//  Internationalizing Dates (Intl)
/////////////////////////////////////////////////
/*
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', //bisa long jg
  year: 'numeric',
  weekday: 'long',
};

const locale = navigator.language;
console.log(locale); //en-US

console.log(new Intl.DateTimeFormat(locale, options).format(now));
console.log(new Intl.DateTimeFormat('id-ID', options).format(now));
*/

/////////////////////////////////////////////////
//  Internationalizing Numbers (Intl)
/////////////////////////////////////////////////
/*
const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR', //not define by the country, define manually
  // useGrouping: false,
};

console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Indonesia: ', new Intl.NumberFormat('id-ID', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log(
  'Browser Default: ',
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/

/////////////////////////////////////////////////
//  Timers: setTimeout and setInterval
/////////////////////////////////////////////////

/*
// setTimeout
// only execute once
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients //ing1 ing2
); //call after 3 second

console.log('Waiting...');

//clear timeout if include spinach in it
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  console.log(
    new Intl.DateTimeFormat(navigator.language, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(new Date())
  );
}, 1000); //executing every 1 second
*/
