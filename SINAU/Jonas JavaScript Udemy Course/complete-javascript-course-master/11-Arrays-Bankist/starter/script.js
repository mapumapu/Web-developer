'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // .textContent = ''

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov} EUR</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes} EUR`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcomes)} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((interest, i, arr) => {
      // console.log(arr);
      return interest >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);

  labelSumInterest.textContent = `${interest} EUR`;
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
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

//Event handler
let currentAccount;
let asd;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
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

    // update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Simple Array Methods
/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr);

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['f', 'g', 'h', 'i', 'j'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
console.log(letters);
*/

/////////////////////////////////////////////////
// The new 'at' Method
/////////////////////////////////////////////////
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
//old way
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

//new way
console.log(arr.at(-1));

//also work on string
console.log('aditya'.at(-2));
*/

/////////////////////////////////////////////////
// Looping Array: forEach
/////////////////////////////////////////////////
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements){
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----FOREACH----');
//argument forEach (element, index, array)
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
//0: function(200)
//1: function(450)
//2: function(400)
//...
*/

/////////////////////////////////////////////////
// forEach with Maps and Sets
/////////////////////////////////////////////////
/*
//Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, keys, map) {
  console.log(`${keys}: ${value}`);
});

//Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, keys, map) {
  console.log(`${keys}: ${value}`);
});
*/

/////////////////////////////////////////////////
// The Map Method
/////////////////////////////////////////////////
/*
const euroToUsd = 1.1;

//using map method

// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

//using arrow function
const movementsUSD = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementsUSD);

//using for
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`

  // if (mov > 0) {
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
);

console.log(movementsDescriptions);
*/

/////////////////////////////////////////////////
// The Filter Method
/////////////////////////////////////////////////
/*
//using filter method (regular function)
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

//using for of loop
const deposits2 = [];
for (const mov of movements) {
  if (mov > 0) {
    deposits2.push(mov);
  }
}
console.log(deposits2);

//using filter method (arrow function)
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

/////////////////////////////////////////////////
// The Reduce Method
/////////////////////////////////////////////////
/*
console.log(movements);
// accumulator is like a SNOWBALL
// using reduce method (regular function)
// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + curr;
// }, 160);

// using reduce method (arrow function)
const balance = movements.reduce((acc, curr) => acc + curr, 160);
console.log(balance);

//using for of loops
let balance2 = 160;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

/////////////////////////////////////////////////
// The Magic of Chaining Methods
/////////////////////////////////////////////////
/*
// PIPELINE
const euroToUsd = 1.1;
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);
*/

/////////////////////////////////////////////////
// The Find Method
/////////////////////////////////////////////////

/*
//its find the first value that match the condition
//only return value itself
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

//using find method
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

//using for of loops
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') console.log(acc);
}
*/

/////////////////////////////////////////////////
// The Some and Every Method
/////////////////////////////////////////////////
/*
// EQUALITY (include method)
console.log(movements);
console.log(movements.includes(-130));

// SOME: CONDITION (some method)
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

//EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/////////////////////////////////////////////////
// The flat and flatMap Method
/////////////////////////////////////////////////
/*
// 1 deep nested array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

// really deep nested array
// use parameter in flat method how deep is the array you wanna flatten
const arrDepp = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDepp.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//flatMap
const overallBalance2 = accounts
  .map(acc => acc.movements)
  .flatMap()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/

/////////////////////////////////////////////////
// Sorting arrays
/////////////////////////////////////////////////

/*
//This method mutate the original array
//sort()  method sorting based on string
// Strings
const owners = ['Mastuty', 'Ayu', 'Prasetya', 'Ningtyas', 'Aditya'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return < 0, A, B Ascending (small to large) (keep order)
// return > 0, B, A Descending (large to small) (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

//Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/

/////////////////////////////////////////////////
// More ways to creating and filling array
/////////////////////////////////////////////////
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//Exercise
const randomDiceRoll = Array.from(
  { length: 100 },
  (_, i) => Math.floor(Math.random() * 6) + 1
);
console.log(randomDiceRoll);

labelBalance.addEventListener('click', function () {
  //Array.from()
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('EUR', ''))
  );
  console.log(movementsUI);

  //Other ways
  const movementsUI2 = [...document.querySelectorAll('.movements__value')].map(
    el => Number(el.textContent.replace('EUR', ''))
  );

  console.log(movementsUI2);
});
*/

/////////////////////////////////////////////////
// Array method practice
/////////////////////////////////////////////////
/*
// 1.
// const bankDepositSum = accounts.map(acc => acc.movements).flat();
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// using filter
// const numDeposit1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// using reduce
const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposit1000);

// Prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      // sums[cur > 0 ? `deposits` : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title => This Is a Nice Title

const convertTitleCase = function (title) {
  const capitalized = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalized(word)))
    .join(' ');
  return capitalized(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
