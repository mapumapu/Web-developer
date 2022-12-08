'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 Enchanced object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

//Console log way
/*
const camelCase = function (text) {
  const textLower = text.toLowerCase().trim();
  const textSplit = textLower.split('_');
  
  for (let i = 1; i < textSplit.length; i++) {
    textSplit[i] = textSplit[i][0].toUpperCase() + textSplit[i].slice(i);
  }
  
  return textSplit.join('');
};
*/
//Data test
// console.log(camelCase('underscore_case'));
// console.log(camelCase('                  first_name            '));
// console.log(camelCase('Some_Variable                '));
// console.log(camelCase('          calculate_AGE '));
// console.log(camelCase('delayed_departure'));

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const textLowerSplit = text.toLowerCase().split('_');

  for (let i = 1; i < textLowerSplit.length; i++) {
    textLowerSplit[i] =
      textLowerSplit[i][0].toUpperCase() + textLowerSplit[i].slice(1);
  }

  const textJoin = textLowerSplit.join('');
  console.log(textJoin);
});

////////////////////////////////////////////////////////////////////////////////
// Working With String Part 3
////////////////////////////////////////////////////////////////////////////////

/*
//Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Aditya Prasetya'.split(' '));

const [firstName, lastName] = 'Aditya Prasetya'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const nameLower = name.toLowerCase();
  const names = nameLower.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  return namesUpper.join(' ');
};

console.log(capitalizeName('aditya prAsetya utaMa haiya'));

//Padding
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Aditya'.padStart(20, '+').padEnd(30, '+'));

//Real world example
const maskCreditCard = function (number) {
  const str = number + ''; //String(number)
  const last = str.slice(-4);

  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(8475956184519401));
console.log(maskCreditCard('8697351047596310'));

//Repeat
const message2 = 'Bad weather... All Departure Delayed... ';

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'haiya'.repeat(n)}`);
};

planesInLine(5);
planesInLine(10);
planesInLine(3);
*/

////////////////////////////////////////////////////////////////////////////////
// Working With String Part 2
////////////////////////////////////////////////////////////////////////////////

/*
const airline = 'Garuda Indonesia';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix Capitalization in name
const passenger = 'AditYa'; //Aditya
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const fixCapitalization = function (name) {
  const nameLower = name.toLowerCase();
  return nameLower[0].toUpperCase() + nameLower.slice(1);
};

console.log(fixCapitalization('mastutY'));

const fixCapitalizeEachWord = function (name) {
  const nameLower = name.toLowerCase();
  const nameSplit = nameLower.split(' ');

  for (let i = 0; i < nameSplit.length; i++) {
    nameSplit[i] = nameSplit[i][0].toUpperCase() + nameSplit[i].slice(1);
  }

  return nameSplit.join(' ');
};

console.log(fixCapitalizeEachWord('adItya prasetYa uTAma'));

//Comparing Email
const email = 'aditya@mapu.io';
const loginEmail = '   AdityA@Mapu.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//Replacing
const priceRupiah = 'Rp.900.123 ';
const priceDollar = priceRupiah.replace('Rp.', '$').replace(',', '.');
console.log(priceDollar);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate')); //It work!

console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const plane = 'B737 800';
console.log(plane.includes('B737'));
console.log(plane.includes('Airbus'));
console.log(plane.startsWith('B7'));

if (plane.startsWith('B') && plane.endsWith('800')) {
  console.log(`Part of the new Boeing Family`);
}

//Practice Exercise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();

  if (baggage.includes('pisau') || baggage.includes('pistol')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('ada laptop, makanan, dan Pisau');
checkBaggage('Kaos, camera');
checkBaggage('Pistol untuk perlindungan, snacks');
*/

////////////////////////////////////////////////////////////////////////////////
// Working With String Part 1
////////////////////////////////////////////////////////////////////////////////
/*

const airline = 'Garuda Indonesia';
const plane = 'B737-800';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Indonesia'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

//First Word
console.log(airline.slice(0, airline.indexOf(' ')));

//Last Word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('aditya'));
console.log(typeof new String('aditya'));
console.log(typeof new String('aditya').slice(1));
*/

////////////////////////////////////////////////////////////////////////////////
// Maps: Iteration
////////////////////////////////////////////////////////////////////////////////

/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

console.log(question);

//Convert object to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

//Bad
console.log(answer === 3 ? question.get(true) : question.get(false));

//Better
console.log(question.get(question.get('correct') === answer));

//Convert map to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

////////////////////////////////////////////////////////////////////////////////
// Maps: Fundamental
////////////////////////////////////////////////////////////////////////////////

/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

////////////////////////////////////////////////////////////////////////////////
// Sets (Unique Values)
////////////////////////////////////////////////////////////////////////////////
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissoto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Adit'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Rissoto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Aditya Prasetya').size);
*/

////////////////////////////////////////////////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries
////////////////////////////////////////////////////////////////////////////////

/*
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

////////////////////////////////////////////////////////////////////////////////
// Optional Chaining (?.)
////////////////////////////////////////////////////////////////////////////////

/*
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

//WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method not exist');

//Arrays
const user = [{ name: 'Adit', email: 'haiya@yahoo.com' }];
// const user = [];

//optional chaining
console.log(user[0]?.name ?? 'empty');

//old way
if (user.length > 0) console.log(user[0].name);
else console.log('empty');
*/

////////////////////////////////////////////////////////////////////////////////
// For-Of Loops
////////////////////////////////////////////////////////////////////////////////

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//Regular 'For Loops'
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

console.log(`###############################`);

//'For-Of-Loops'
for (const item of menu) console.log(item);

console.log(`###############################`);

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

console.log(`###############################`);

//With destructuring array
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(`###############################`);

//what in the menu.entries()
console.log(...menu.entries());
*/

////////////////////////////////////////////////////////////////////////////////
// Logical Assignment Operators
////////////////////////////////////////////////////////////////////////////////
/*

const rest1 = {
  name: 'Capri',
  // numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'La Piaza',
  owner: 'Maputo',
};

// OR Assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

//Nullish assignment operator (null or undefined)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && 'Anonymous';
// rest2.owner = rest2.owner && 'Anonymous';
rest1.owner &&= 'Anonymous';
rest2.owner &&= 'Anonymous';

console.log(rest1);
console.log(rest2);
*/

////////////////////////////////////////////////////////////////////////////////
// The Nullish Coalescing Operator
////////////////////////////////////////////////////////////////////////////////
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

////////////////////////////////////////////////////////////////////////////////
// Short Circuiting (&& and ||)
////////////////////////////////////////////////////////////////////////////////
/*
console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

// ////////////////////////////////////////////////////////////////////////////////
// Rest Pattern and Parameters
// ////////////////////////////////////////////////////////////////////////////////

/*
//1. Destructuring

//SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rissoto, ...othersFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, rissoto, othersFood);

//Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 4, 6, 7, 8, 1, 2, 2, 3);

const x = [2, 3, 5, 7, 8];
add(...x);

restaurant.orderPizza('onions', 'meat', 'cocain');

////////////////////////////////////////////////////////////////////////////////
Spread Operator (...)
////////////////////////////////////////////////////////////////////////////////

/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Nasi Goreng'];
console.log(newMenu);

//Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterable: arrays, string, maps, sets. NOT objects
const str = 'Adit';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} prasetya`);

//Real World Example
const ingredients = [
  // prompt("Let's make pasta! Ingredients 1 ?"),
  // prompt('Ingredients 2 ?'),
  // prompt('Ingredients 3 ?'),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Object
const newRestaurant = { foundedIn: 2025, ...restaurant, founder: 'Maputo' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Maputo Restaurant';
console.log(restaurantCopy.name);
console.log(restaurant.name);


////////////////////////////////////////////////////////////////////////////////
Destructuring Objects
////////////////////////////////////////////////////////////////////////////////

restaurant.orderDelivery({
  time: '22:30',
  address: 'Permata Icon',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Permata Icon',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starter = [] } = restaurant;

console.log(menu, starter);

//Mutating variables
let a = 111;
let b = 123;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
/*);
/*

////////////////////////////////////////////////////////////////////////////////
Destructuring Array
////////////////////////////////////////////////////////////////////////////////

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
