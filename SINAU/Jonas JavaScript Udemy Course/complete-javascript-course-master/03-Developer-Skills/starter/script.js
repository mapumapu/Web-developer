// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const calcAge = (birthYear) => 2022 - birthYear;

console.log(calcAge(1995));

function calcPlus(number1, number2) {
  return number1 + number2;
}

console.log(calcPlus(5, 6));

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

let max = temperatures[0];
function calcMaxTemperature(temps) {
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) {
      max = temps[i];
    }
  }
}

let min = temperatures[0];
function calcMinTemperature(temps) {
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] < min) {
      min = temps[i];
    }
  }
}

function substractMinMaxTemperature(max, min) {
  const substract = max - min;
  return substract;
}

calcMaxTemperature(temperatures);
console.log(max);
calcMinTemperature(temperatures);
console.log(min);

console.log(substractMinMaxTemperature(max, min));
