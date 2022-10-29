/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Aditya");
console.log(26);

let firstName = "Aditya";
console.log(firstName);

let aditya_mastuty = "jodoh";
let $function = 100;
let PI = 3.1415;
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Aditya");

javascriptIsFun = "WHAT";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1996;
console.log(typeof year);

console.log(typeof null);
*/

/*
let year = 26;
year = 22;
console.log(year);

const birthYear = 1996;
// birthYear = 1997;
console.log(birthYear);

// const job;

var job = "mekanik";
job = "programmer";
*/

/*
console.log(ageAdit * 2, ageAdit / 10, 2 ** 3);
//2 ** 3 means to the power of 3 = 2 * 2 * 2

const firstName = "Aditya";
const lastName = "Prasetya";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1
x--; //
console.log(x);

//Comparasion operators
console.log(ageAdit > ageMastuty);
// <, >, <=, >=
console.log(ageMastuty >= 18);

const isFullAge = ageMastuty >= 18;


*/
/*
const nowYear = 2022;
const ageAdit = nowYear - 1996;
const ageMastuty = nowYear - 1997;

console.log(nowYear - 1996 > nowYear - 1997);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageAdit + ageMastuty) / 2;
console.log(ageAdit, ageMastuty, averageAge);
*/

/*
const firstName = "Aditya";
const job = "Programmer";
const birthYear = 1996;
const year = 2024;

const aditya =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + " !";
console.log(aditya);

const adityaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
console.log(adityaNew);

console.log(`Just regular shit`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines
what 
the 
fuck`);
*/

/*
const age = 15;

if (age >= 18) {
  console.log(`You can start driving license :)`);
} else {
  const yearsLeft = 18 - age;
  console.log(`You are too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`${century} century`);
*/

/*
const inputYear = "1996";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number("adit"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion

console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("I am " + String(23) + " years old");

console.log("23" - "10" - 3); //10
console.log("23" + "10" + 3); //23103
console.log("23" * "2");  //46
console.log("23" / "2");  //11.5

let n = "1" + 1; //11
n = n - 1;  
console.log(n); //10
*/

// 5 Falsy values : 0, '', undefined, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log(`dont sped it all`);
} else {
  console.log(`u should get a job`);
}

const money2 = 100;
if (money2) {
  console.log(`dont sped it all`);
} else {
  console.log(`u should get a job`);
}

let height;
if (height) {
  console.log(`height defined`);
} else {
  console.log(`height undefined`);
}
*/

/*
const age = 18;
if (age === 18) console.log(`you just become an adult (strict)`);

const age1 = "18";
if (age1 == 18) console.log(`you just become an adult (loose)`);

//if you can, always use === (the strict)

const favourite = Number(prompt("whats your fav number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log(`cool`);
} else if (favourite === 7) {
  console.log(`7 is also cool`);
} else if (favourite === 9) {
  console.log(`9 also cool`);
} else {
  console.log(`not 23 or 7 or 9`);
}

if (favourite !== 23) console.log(`why not 23`);
*/

// const hasDriversLincense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLincense && hasGoodVision);
// console.log(hasDriversLincense || hasGoodVision);
// console.log(!hasDriversLincense);

// if (hasDriversLincense && hasGoodVision) {
//   console.log("You able to drive");
// } else {
//   console.log("someone else should drive");
// }

// const isTired = false;
// console.log(hasDriversLincense || hasGoodVision || isTired);

// if (hasDriversLincense && hasGoodVision && !isTired) {
//   console.log("You able to drive");
// } else {
//   console.log("someone else should drive");
// }

/*
const day = "saturday";

switch (day) {
  case "monday":
    console.log("Nen");
    console.log("en");
    break;
  case "tuesday":
    console.log("Nen1");
    break;
  case "wednesday":
  case "thurday":
    console.log("Nen2");
    break;
  case "friday":
    console.log(`Nen3`);
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy Nen4");
    break;
  default:
    console.log("Not valid day");
}

if (day === "monday") {
  console.log("Nen");
  console.log("en");
} else if (day === "tuesday") {
  console.log("Nen1");
} else if (day === "wednesday" || day === "thurday") {
  console.log("Nen2");
} else if (day === "friday") {
  console.log("Nen3");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy Nen4");
} else {
  console.log("not valid day");
}
*/

/*
//expression produce value
3 + 4;
1991;
true && false && !false;

//statement sentence to translate action
if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Adit";
console.log(`I'm ${2037 - 1996} years old ${me}`);
*/

const age = 23;
//not so much use
age >= 18
  ? console.log("I like to drink Nenen")
  : console.log("I like to drink milk");

const drink = age >= 18 ? "Nenen" : "Milk";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "Nenen";
} else {
  drink2 = "Milk";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "Nenen" : "Milk"}`);
