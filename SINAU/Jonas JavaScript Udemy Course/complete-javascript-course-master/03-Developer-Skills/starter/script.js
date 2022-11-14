// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const calcAge = (birthYear) => 2022 - birthYear;

console.log(calcAge(1995));

function calcPlus(number1, number2) {
  return number1 + number2;
}

console.log(calcPlus(5, 6));

function printForecast(arr) {
  const shit = [];
  for (let i = 0; i < arr.length; i++) {
    shit.push(`${arr[i]}ºC in ${i + 1} days`);
  }

  let wow = "";
  for (let i = 0; i < shit.length; i++) {
    wow = wow + "... " + shit[i] + " ";
  }

  return wow + "...";
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(printForecast(data1));
console.log(printForecast(data2));

// const arr = [17, 21, 23];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`${arr[i]}ºC in ${i + 1} days`);
// }
