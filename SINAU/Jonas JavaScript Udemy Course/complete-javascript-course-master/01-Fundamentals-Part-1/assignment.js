"use strict";

// Values and Variable

const country = "Indonesia";
const continent = "Sidoarjo";
const population = "200";

console.log(country);
console.log(continent);
console.log(population + " million");

// Data Types

const isIsland = true;
// let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);

//let, const, var

const language = "jawa";
console.log(typeof language);

//Basic Operators

population / 2;
console.log(population / 2);
population / 2;
console.log(population / 2);
population + 1;
console.log(population + 1);

const finland = 6;
console.log(population > finland);

const avgCountry = 33;
console.log(population < avgCountry);

// const description =
//   continent +
//   " is in " +
//   country +
//   ", and its " +
//   population +
//   " millions people speak " +
//   language;

// console.log(description);

//Strings and Template Literals

const description = `${continent} is in ${country}, and its ${population} millions people speak ${language}`;
console.log(description);

// Taking Decisions: if / else Statements

if (population > 33) {
  console.log(`${country} population is above averange`);
} else {
  console.log(`${country} population is below average`);
}

// Type Conversion and Coercion

"9" - "5"; //4
"19" - "13" + "17"; //617
"19" - "13" + 17; //23
"123" < 57; //false
5 + 6 + "4" + 9 - 4 - 2; //1143

//Equality Operators

const numNeighbours = Number(
  prompt("how many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("only 1 border");
} else if (numNeighbours > 1) {
  console.log("more than 1 border");
} else {
  console.log("no borders");
}

//Logical Operators

if (language === "english" && population < 50 && !isIsland) {
  console.log(`you should not live in ${country}`);
} else {
  console.log(`you should live in portugal`);
}

//Switch Statement

switch (language) {
  case "chinese" || "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :)");
}

//The Conditional(Ternary) Operator

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);

//Functions

function describeCountry(country, population, capitalCity) {
  const describe = `${country} has ${population} millions people and its capital city is ${capitalCity}`;
  return describe;
}

// const indonesia = describeCountry("Indonesia", 200, "Jakarta");
// const singapore = describeCountry("Singapore", 5, "Singapore");
// const spanyol = describeCountry("Spanyol", 25, "Madrid");

// console.log(indonesia);
// console.log(singapore);
// console.log(spanyol);

//Function Declaration vs. Expressions

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const indonesia = percentageOfWorld1(200);
const singapore = percentageOfWorld1(5);
const spanyol = percentageOfWorld1(25);

console.log(indonesia, singapore, spanyol);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const indonesia2 = percentageOfWorld2(200);
const singapore2 = percentageOfWorld2(5);
const spanyol2 = percentageOfWorld2(25);

console.log(indonesia2, singapore2, spanyol2);

//Arrow Function

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const indonesia3 = percentageOfWorld3(200);
const singapore3 = percentageOfWorld3(5);
const spanyol3 = percentageOfWorld3(25);

console.log(indonesia3, singapore3, spanyol3);

//Function Calling Other Function
//Using function i create earlier which is percentageWorld1

function describePopulation(country, population) {
  const percentageOfWorld = percentageOfWorld1(population);

  const describe = `${country} has ${population} million people, which is about ${percentageOfWorld}% of the world`;
  return describe;
}

console.log(describePopulation("Indonesia", 276.4));
console.log(describePopulation("Malaysia", 32.78));
console.log(describePopulation("Thailand", 69.95));
