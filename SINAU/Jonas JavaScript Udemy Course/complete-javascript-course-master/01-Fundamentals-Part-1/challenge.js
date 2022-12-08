"use strict";

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
