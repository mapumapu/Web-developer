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
