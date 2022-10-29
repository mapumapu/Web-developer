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
