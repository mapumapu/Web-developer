"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("cant drive");

// const interface = "Audio";
// const private = 123;
*/
/*
function logger() {
  console.log("Name. Maputo.");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// //Function Declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1996);
// console.log(age1);

// //Function Expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1996);
// console.log(age1, age2);

// //Arrow Function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1996);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 55 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1996, "Aditya"));
// console.log(yearsUntilRetirement(1997, "Mastuty"));

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 55 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1996, "Adit"));
console.log(yearsUntilRetirement(1945, "Saliyo"));
*/

/*
const friend1 = "Edwin";
const friend2 = "Indra";
const friend3 = "Damon";

const friends = ["Edwin", "Indra", "Damon"];
console.log(friends);

const years = new Array(1996, 1994, 1997);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Mastuty";
console.log(friends);

const firstName = "Aditya";
const aditya = [firstName, "Prasetya", 2022 - 1996, "Programmer", friends];

console.log(aditya);
console.log(aditya.length);

//Exercise
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years1 = [1996, 1995, 1998, 1987, 1965];

console.log(calcAge(years1)); //NaN

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years1[0]),
  calcAge(years1[1]),
  calcAge(years1[years1.length - 1]),
];

console.log(ages);
*/

/*
//ADD ELEMENTS
const friends = ["Edwin", "Mastuty", "Damon"];
friends.push("Indra"); //add element to end
console.log(friends);

friends.unshift("Fikri");
console.log(friends); //add element to start

//REMOVE ELEMENTS
friends.pop(); //remove last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //remove first
console.log(friends);

console.log(friends.indexOf("Edwin"));
console.log(friends.indexOf("Mastuty"));
console.log(friends.indexOf("Indra"));

friends.push(23);
console.log(friends.includes("Mastuty"));
console.log(friends.includes("Diana"));
console.log(friends.includes(23));

if (friends.includes("Edwin")) {
  console.log(`Edwin is here !`);
}
*/

/*
const aditArray = [
  "Adit",
  "Prasetya",
  2022 - 1996,
  "Programmer",
  ["Edwin", "Indra", "Mastuty"],
];

const adit = {
  firstName: "Adit",
  lastName: "Prasetya",
  age: 2022 - 1996,
  job: "Programmer",
  friends: ["Edwin", "Indra", "Mastuty"],
};

console.log(adit.lastName);
console.log(adit["lastName"]);

const nameKey = "Name";
console.log(adit["first" + nameKey]);
console.log(adit["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Adit? Choose between firstName, lastName, age, job, and friends"
);

if (adit[interestedIn]) {
  console.log(adit[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

adit.location = "Indonesia";
adit["instagram"] = "@madityapu";
console.log(adit);

//Challenge

console.log(
  `${adit.firstName} has ${adit.friends.length} friends, and his best friend is called ${adit.friends[0]}`
);

*/

/*
const adit = {
  firstName: "Adit",
  lastName: "Prasetya",
  birthYear: 1996,
  job: "Programmer",
  friends: ["Edwin", "Indra", "Mastuty"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2022 - birthYear
  // }

  // calcAge: function () {
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      adit.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(adit.calcAge());
// console.log(adit["calcAge"]);

console.log(adit.age);

//Challenge
console.log(adit.getSummary());
*/

// console.log("Repetition 1");
// console.log("Repetition 2");
// console.log("Repetition 3");
// console.log("Repetition 4");
// console.log("Repetition 5");
// console.log("Repetition 6");
// console.log("Repetition 7");
// console.log("Repetition 8");
// console.log("Repetition 9");
// console.log("Repetition 10");

/*
const aditArray = [
  "Adit",
  "Prasetya",
  2022 - 1996,
  "Programmer",
  ["Edwin", "Indra", "Mastuty"],
  true,
];

const types = [];

for (let i = 0; i < aditArray.length; i++) {
  // Reading from adit array
  console.log(aditArray[i], typeof aditArray[i]);

  //Filling types array
  // types[i] = typeof aditArray[i];
  types.push(typeof aditArray[i]);
}

console.log(types);

const years = [1996, 1997, 1998, 2002];
const age = [];

for (let i = 0; i < years.length; i++) {
  // age[i] = 2022 - years[i];
  age.push(2022 - years[i]);
}

console.log(age);

//continue and break
console.log("===ONLY STRING===");
for (let i = 0; i < aditArray.length; i++) {
  if (typeof aditArray[i] !== "string") continue;

  console.log(aditArray[i], typeof aditArray[i]);
}

//after number found, break
console.log("===BREAK WITH NUMBER===");
for (let i = 0; i < aditArray.length; i++) {
  if (typeof aditArray[i] === "number") break;

  console.log(aditArray[i], typeof aditArray[i]);
}
*/

/*
const aditArray = [
  "Adit",
  "Prasetya",
  2022 - 1996,
  "Programmer",
  ["Edwin", "Indra", "Mastuty"],
  true,
];

for (let i = aditArray.length - 1; i >= 0; i--) {
  console.log(i, aditArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} : Lifting weight repetition ${rep}`);
  }
}

*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Repetition ${rep}`);
// }

/*
let rep = 1;
while (rep <= 10) {
  console.log(`Repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You roll a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log(`Loop is about to end...`);
}
*/
