///////////////////////////////////////
// Exporting and Importing in ES6 Modules
///////////////////////////////////////

// Importing module
// import { addToCart, totalPrice as price, qty } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, qty);

console.log('Importing module');
// // console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, qty } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('bread', 2);
add('pizza', 5);
add('oranges', 2);

console.log(cart);

///////////////////////////////////////
// Top-Level await (ES2022)
///////////////////////////////////////

/*
// console.log('Start fecthing');
// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await response.json();
// console.log(data);
// console.log('Somewhat');

const getLastPost = async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

///////////////////////////////////////
// The Module Pattern
///////////////////////////////////////

/*
const ShoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 124;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart(shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart.addToCart('apple', 4);
ShoppingCart.addToCart('pizza', 2);
console.log(ShoppingCart);
console.log(ShoppingCart.shippingCost);
*/

///////////////////////////////////////
// CommonJS Modules
///////////////////////////////////////

/*
// will work on node.js
// Export
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart(shipping cost is ${shippingCost})`
  );
};

// Import
const { addToCart } = require('./shoppingCart.js')
*/

///////////////////////////////////////
// Introduction to NPM
///////////////////////////////////////

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'pizza', quantity: 5 },
    { product: 'bread', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateCloneDeep = cloneDeep(state);
console.log(stateCloneDeep);

const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);

// if (module.hot) {
//   module.hot.accept();
// }
