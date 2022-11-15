// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const calcAge = (birthYear) => 2022 - birthYear;

console.log(calcAge(1995));

// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this:
// "Given an array of temperatures of one day,
// calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const temperature1 = [1, 2, 5, 3, 0, -5, -1, "error", 10, 14, 2, 4, "error"];
const temperature2 = ["error", 6, 5, 1, 9, 2, 6, -1, 7, -10, -14];

const calcTempAmplitudeNew = function (t1, t2) {
  const tempsMerge = t1.concat(t2);

  let max = tempsMerge[0];
  let min = tempsMerge[0];

  for (let i = 0; i < tempsMerge.length; i++) {
    const currentTemp = tempsMerge[i];

    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperature1, temperature2);
console.log(amplitudeNew);
*/

/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: parseInt(prompt("Degrees celcius")),

    //or value: Number (prompt("Degrees celcius"))
  };
  console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

function printForecast(arr) {
  // const shit = [];
  // for (let i = 0; i < arr.length; i++) {
  //   shit.push(`${arr[i]}ºC in ${i + 1} days`);
  // }

  let dailyForecast = "";
  for (let i = 0; i < arr.length; i++) {
    dailyForecast += `... ${arr[i]}ºC in ${i + 1} days `;
  }

  return `${dailyForecast}...`;
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(printForecast(data1));
console.log(printForecast(data2));

// const arr = [17, 21, 23];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`${arr[i]}ºC in ${i + 1} days`);
// }
