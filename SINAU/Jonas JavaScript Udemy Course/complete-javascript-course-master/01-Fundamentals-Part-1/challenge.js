"use strict";

//############################################################
//JavaScript Fundamental 1
//Challege 1
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//Challenge 2

if (markBMI > johnBMI) {
  console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI})`);
} else {
  console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI})`);
}

//Challenge 3
const stages1 = 3;
const score1Dolphins1 = 96;
const score1Dolphins2 = 108;
const score1Dolphins3 = 89;
const avgScore1Dolphins =
  (score1Dolphins1 + score1Dolphins2 + score1Dolphins3) / stages1;

const score1Koalas1 = 88;
const score1Koalas2 = 91;
const score1Koalas3 = 11;
const avgScore1Koalas =
  (score1Koalas1 + score1Koalas2 + score1Koalas3) / stages1;

if (avgScore1Dolphins > avgScore1Koalas) {
  console.log(`Dolphins wins with score ${avgScore1Dolphins}`);
} else if (avgScore1Dolphins < avgScore1Koalas) {
  console.log(`Koalas wins with score ${avgScore1Koalas}`);
} else if (avgScore1Dolphins < avgScore1Koalas) {
  console.log("Both win");
}

//BONUS 1 & 2

const stages = 3;
const scoreDolphins1 = 97;
const scoreDolphins2 = 112;
const scoreDolphins3 = 80;
const avgScoreDolphins =
  (scoreDolphins1 + scoreDolphins2 + scoreDolphins3) / stages;

const scoreKoalas1 = 109;
const scoreKoalas2 = 95;
const scoreKoalas3 = 50;
const avgScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / stages;
console.log(avgScoreDolphins, avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
  console.log(`Dolphins wins with score ${avgScoreDolphins}`);
} else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= 100) {
  console.log(`Koalas wins with score ${avgScoreKoalas}`);
} else if (
  avgScoreDolphins === avgScoreKoalas &&
  avgScoreDolphins >= 100 &&
  avgScoreKoalas >= 100
) {
  console.log("Both win");
} else {
  console.log(`no one win`);
}

//Challege 4

const bill = 430;
//if bill 50-300 bill * 15% if more bill * 20%
const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

//############################################################
//JavaScript Fundamental 2
//Challenge 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(averageDolphins, averageKoalas) {
  if (averageDolphins >= 2 * averageKoalas) {
    console.log(`Dolphins Wins ${averageDolphins} vs ${averageKoalas}`);
  } else if (averageKoalas >= 2 * averageDolphins) {
    console.log(`Koalas Wins ${averageKoalas} vs ${averageDolphins}`);
  } else {
    console.log(
      `No one wins... sad. Dolphins (${averageDolphins}) vs Koalas (${averageKoalas}))`
    );
  }
}

const averageDolphins = calcAverage(44, 23, 71);
const averageKoalas = calcAverage(65, 54, 49);
checkWinner(averageDolphins, averageKoalas);

const averageDolphins2 = calcAverage(85, 54, 41);
const averageKoalas2 = calcAverage(23, 34, 27);
checkWinner(averageDolphins2, averageKoalas2);

const averageDolphins3 = calcAverage(100, 25, 15);
const averageKoalas3 = calcAverage(90, 100, 95);
checkWinner(averageDolphins3, averageKoalas3);

//Challenge 2

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return (bill * 15) / 100;
  } else if (bill > 300) {
    return (bill * 20) / 100;
  } else {
    return bill * 0;
  }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);

//Challenge 3

const markMiller = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const johnSmith = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

markMiller.calcBMI();
johnSmith.calcBMI();

//1
markMiller.bmi > johnSmith.bmi
  ? console.log(
      `${markMiller.firstName}'s BMI(${markMiller.bmi}) is higher than ${johnSmith.firstName}'s BMI(${johnSmith.bmi})`
    )
  : console.log(
      `${johnSmith.firstName}'s BMI(${johnSmith.bmi}) is higher than ${markMiller.firstName}'s BMI(${markMiller.bmi})`
    );

//2
console.log(
  `${markMiller.firstName}'s BMI(${markMiller.bmi} is ${
    markMiller.bmi > johnSmith.bmi ? "higher" : "lower"
  } than ${johnSmith.firstName}'s BMI(${johnSmith.bmi}`
);

//3
if (markMiller.bmi > johnSmith.bmi) {
  console.log(
    `${markMiller.firstName}'s BMI(${markMiller.bmi}) is higher than ${johnSmith.firstName}'s BMI(${johnSmith.bmi})`
  );
} else if (markMiller.bmi < johnSmith.bmi) {
  console.log(
    `${johnSmith.firstName}'s BMI(${johnSmith.bmi}) is higher than ${markMiller.firstName}'s BMI(${markMiller.bmi})`
  );
} else {
  console.log(
    `${markMiller.firstName}'s BMI(${markMiller.bmi}) is the same as ${johnSmith.firstName}'s BMI(${johnSmith.bmi})`
  );
}

//Challenge 4

const billsBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipTip = [];
const totalTotal = [];

for (let i = 0; i < billsBills.length; i++) {
  const tip = calcTip(billsBills[i]);
  tipTip.push(tip);
  totalTotal.push(tip + billsBills[i]);
}

console.log(billsBills, tipTip, totalTotal);

//Bonus

function calcAverage2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage2(tipTip));
console.log(calcAverage2(totalTotal));

//############################################################
//Developer Skills and Editor Setup
//Challenge 1

//1. Understanding the problem
//-Array transform to string, separated by (...)
//-What is the x days? index + 1

//2. Breaking up into sub-problems
//-Transform array into string
//-Transform each element to string with ºC
//-String needs to contains day (index + 1)
//-Add ... between elements and start and end of string

const printForecast = function (arr) {
  let dailyForecast = "";
  for (let i = 0; i < arr.length; i++) {
    dailyForecast += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  console.log(`${dailyForecast}...`);
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);

//############################################################
//JS in Browser: DOM and Events
//Challenge 1

/* 1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)*/

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing ...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = null;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

//############################################################
//Data Structures, Modern Operators and Strings
//Challenge 1

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [goalKeeper, ...allFieldPlayers] = players1;
console.log(goalKeeper, allFieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
  console.log(`${players.length} goals scored`);
};

printGoals(...game.scored);

//7.
team1 < team2 && console.log(`${game.team1} is more likely to wins`);
team1 > team2 && console.log(`${game.team2} is more likely to wins`);

//Data Structures, Modern Operators and Strings
//Challenge 2

//1.
for (const [goalNumb, goalScorer] of game.scored.entries()) {
  console.log(`Goal ${goalNumb + 1}: ${goalScorer}`);
}

//2.
let averageOdds = 0;
const gameOdds = Object.entries(game.odds);
for (const [, odds] of gameOdds) {
  averageOdds += odds / gameOdds.length;
}
console.log(`The average odds: ${averageOdds}`);

//Better
let averageOdds2 = 0;
const gamesOdds = Object.values(game.odds);
for (const odd of gamesOdds) {
  averageOdds2 += odd / gamesOdds.length;
}
console.log(`The average odds: ${averageOdds2}`);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

//Bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

//Data Structures, Modern Operators and Strings
//Challenge 3

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

//1.
const tempSet = new Set([...gameEvents.values()]);
console.log(tempSet);

const events = [...tempSet];
console.log(events);

//Better
const events1 = [...new Set(gameEvents.values())];
console.log(events1);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);
// console.log(gameEvents.size);

//Bonus (for 92 minute)
const time = [...gameEvents.keys()].pop();
// console.log(time);
console.log(`An event happened, on
average, every ${time / gameEvents.size} minutes`);

//4.
for (const [minute, event] of gameEvents) {
  const babak = minute <= 45 ? "[First Half]" : "[Second Half]";
  console.log(`${babak} ${minute}: ${event}`);
}

//Data Structures, Modern Operators and Strings
//Challenge 4

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

//Data test
console.log(camelCase('underscore_case'));
console.log(camelCase('                  first_name            '));
console.log(camelCase('Some_Variable                '));
console.log(camelCase('          calculate_AGE '));
console.log(camelCase('delayed_departure'));
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  console.log(text);
  const rows = text.split("\n");
  console.log(rows);

  // for (const row of rows)
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    // console.log(row, first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"Mantab ".repeat(i + 1)}`);
  }
});

//Test data
/*
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/

//############################################################
//A Closer Look at Functions
//Challenge 1

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  //1.
  registerNewAnswer: function () {
    //1.1
    const answer = Number(
      prompt(`${this.question}\n${this.options.join("\n")}`)
    );
    console.log(answer);

    //1.2
    if (typeof answer === "number" && answer < this.answers.length) {
      this.answers[answer]++;
    }

    //4.
    this.displayResult();
    this.displayResult("string");
  },

  //3.
  displayResult: function (type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll result are ${this.answers.join(", ")}`);
    }
  },
};

//2.
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

//5. Bonus
poll.displayResult.call({ answers: [5, 2, 3] }, "string");
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");
poll.displayResult.call({ answers: [1, 5, 3, 9, 6, 1] });

//A Closer Look at Functions
//Challenge 2

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  addEventListener("click", function () {
    this.document.querySelector("body");
    header.style.color = "blue";
  });
})();

//############################################################
//Working With Array
//Challenge 1

const checkDogs = function (dogsJulia, dogsKate) {
  //using slice and spread operator
  /* 
  const dogsJuliaCheck = dogsJulia.slice(1, -2);
  const dogsCorrect = [...dogsJuliaCheck, ...dogsKate];
  */

  //using slice, splice, and concat
  const dogsJuliaCheck = dogsJulia.slice();
  dogsJuliaCheck.splice(0, 1);
  dogsJuliaCheck.splice(-2);

  const dogsCorrect = dogsJuliaCheck.concat(dogsKate);

  dogsCorrect.forEach(function (dogs, i) {
    /*
    const adultOrPuppy = dogsCorrect[i] >= 3 ? 'an adult,' : 'still a puppy ';
    const showAge =
      adultOrPuppy === 'an adult,' ? `and is ${dogsCorrect[i]} years old` : '';
    console.log(`Dog number ${i + 1} is ${adultOrPuppy} ${showAge}`);
    */

    //better like this
    if (dogs >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dogs} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

console.log(`TEST DATA 1`);
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log(`TEST DATA 2`);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//Working With Array
//Challenge 2

const calcAverageHumanAge = function (ages) {
  // 1.
  const humanAge = ages.map(function (age) {
    if (age <= 2) {
      return age * 2;
    } else {
      return 16 + age * 4;
    }
  });

  // 2.
  const dogsGreaterThan18YearsOld = humanAge.filter(function (age) {
    return age >= 18;
  });

  // 3.
  // const averageAge =
  //   dogsGreaterThan18YearsOld.reduce(function (acc, age, i, arr) {
  //     return acc + age;
  //   }) / dogsGreaterThan18YearsOld.length;

  //Better (3.)
  const averageAge = dogsGreaterThan18YearsOld.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2, 3. (2+3)/2 = 2.5 === 2/2 + 3/2 = 2.5

  return `1. ${humanAge}\n2. ${dogsGreaterThan18YearsOld}\n3. ${averageAge}`;
};

// 4.
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

//Working With Array
//Challenge 3

const calcAverageHumanAge2 = (ages) =>
  ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));

//Working With Array
//Challenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach(
  (dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2.
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));

if (sarahDog.curFood >= sarahDog.recommendedFood) {
  console.log("Your dog eat too much");
} else {
  console.log("Your dog eat too little");
}

// Better(2.)
console.log(sarahDog);
console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recommendedFood ? "much" : "little"
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood)
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFood)
  .flatMap((dog) => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too litte`);

// 5.
const exactlyAmountFood = dogs.some(
  (dog) => dog.curFood === dog.recommendedFood
);
console.log(exactlyAmountFood);

// 6.
const calcOkayFood = (dog) =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

const okayAmountFood = dogs.some((dog) => calcOkayFood(dog));
console.log(okayAmountFood);

// 7.
const okayAmountFoodArray = dogs
  .filter((dog) => calcOkayFood(dog))
  .flatMap((dog) => dog.owners);
console.log(okayAmountFoodArray);

// 8.
const sortedDogs = dogs
  .map((dog) => dog)
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);

// Better/Or (8.)
const sortedDogs2 = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs2);

// Object Oriented Programming (OOP)
// Challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.brake();

car2.accelerate();
car2.accelerate();
car2.accelerate();
car2.brake();
car2.brake();

// Object Oriented Programming (OOP)
// Challenge 2

class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarClass("Ford", 120);

ford.accelerate();
ford.brake();
// getter
console.log(ford.speedUS);
// setter
ford.speedUS = 50;
console.log(ford);

// Object Oriented Programming (OOP)
// Challenge 3

const ElectricCar = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new ElectricCar("Telsa", 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();
tesla.brake();
tesla.brake();

// Object Oriented Programming (OOP)
// Challenge 4

class ElectricCarClass extends CarClass {
  // make it private fields
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;

    console.log(
      `${this.make} going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new ElectricCarClass("Rivian", 120, 23);
rivian
  .accelerate()
  .brake()
  .accelerate()
  .accelerate()
  .chargeBattery(90)
  .accelerate()
  .brake()
  .accelerate();

// Asynchronous Javascript
// Challenge 1

const renderCountry = function (data, className = "") {
  const html = `
     <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )}M People</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${
      Object.values(data.currencies)[0].name
    }</p>
    </div>
    </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const whereAmI = function (latitude, longitude) {
  return fetch(
    `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=227040645600541812098x37491`
  )
    .then((response) => {
      if (!response.ok)
        throw new Error(`Problem with geocoding ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((error) => console.error(`Something went wrong ${error.message}`));
};

whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// Asynchronous Javascript
// Challenge 2

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imageContainer = document.querySelector(".images");

// PART 1
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement("img");
    image.src = imgPath;

    image.addEventListener("load", function () {
      imageContainer.append(image);
      resolve(image);
    });

    image.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

// PART 2
let currentImage;

createImage("img/img-1.jpg")
  .then((img) => {
    currentImage = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImage = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = "none";
  })
  .catch((error) => console.log(error));

// Asynchronous Javascript
// Challenge 3

// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let image = await createImage("img/img-1.jpg");
    console.log("Image 1 loaded");
    await wait(2);
    image.style.display = "none";

    // Load image 2
    image = await createImage("img/img-2.jpg");
    console.log("Image 2 loaded");
    await wait(2);
    image.style.display = "none";
  } catch (error) {
    console.log(error);
  }
};
// loadNPause();

//PART 2
const loadAll = async function (imageArray) {
  try {
    const images = imageArray.map(async (img) => await createImage(img));
    console.log(images);

    const imagesEl = await Promise.all(images);
    console.log(imagesEl);
    imagesEl.forEach((img) => img.classList.add("parallel"));
  } catch (error) {
    console.log(error);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
