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
