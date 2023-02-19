'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring Array
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [d, e, f] = arr;
console.log(d);
console.log(e);
console.log(f);

const [first, second] = restaurant.mainMenu; // only take the first 2 element
const [first2, , third] = restaurant.categories; // only take first and third element
console.log(first, second);
console.log(first2, third);
console.log(restaurant.mainMenu);

// Switching variable
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
[main, secondary] = [secondary, main]; // switching variable
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainMenu] = restaurant.order(2, 0);
console.log(starter, mainMenu);

// Nested Array Destructuring
const nested = [2, 3, [4, 5]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
