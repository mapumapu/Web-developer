'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////
// Selecting, Creating and Deleting Elements
////////////////////////////////////////////
/*
console.log(document.documentElement); // select all element
console.log(document.head); // select head element
console.log(document.body); // select body element

const header = document.querySelector('.header'); // return first element that match the selector
const allSection = document.querySelectorAll('.section'); // return first element that match the selector
console.log(allSection);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// .insertAdjenctHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics'
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); //first child
header.append(message); //last child
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });
*/
////////////////////////////////////////////
// Styles, Attributes and Classes
////////////////////////////////////////////
/*
// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// add height to element
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// change color in css
// document.documentElement.style.setProperty('--color-primary', 'red');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src); //http://127.0.0.1:5500/starter/img/logo.png
console.log(logo.getAttribute('src')); //img/logo.png

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('A', 'B');
logo.classList.remove('A', 'B');
logo.classList.toggle('A');
logo.classList.contains('A');

// Don't use this
// logo.className = 'Adit'
*/

////////////////////////////////////////////
// Implementing Smooth Scrolling
////////////////////////////////////////////

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // Old ways
  // const section1Coordinate = section1.getBoundingClientRect();

  // Scrolling
  // window.scrollTo(
  //   section1Coordinate.left + window.pageXOffset,
  //   section1Coordinate.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: section1Coordinate.left + window.pageXOffset,
  //   top: section1Coordinate.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // logging for testing
  // console.log(section1Coordinate);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // New ways (only support modern browser)
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////
// Types of Events and Event Handlers
////////////////////////////////////////////
// see MDN doc for more events
// important is the mouse and the keyboard

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading');

  // h1.removeEventListener('mouseenter', alertH1);
};

// most used
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// old way
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading');
// };
