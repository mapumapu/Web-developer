"use strict";

//Const data type

const constanta = 1;

console.log(constanta);

//Convert string and number

const numbString = "1.1";
console.log(numbString);

const numb = parseInt(numbString);
console.log(numb);

const numbFloat = parseFloat(numbString);
console.log(numbFloat);

const numbNumb = 22 + 22;
const numbString2 = numbNumb.toString();
console.log(numbString2);

//Object
const pasanganB7No3 = {};

pasanganB7No3.suami = "Aditya";
pasanganB7No3.umurSuami = 28;
pasanganB7No3.istri = "Mastuty";
pasanganB7No3.umurIstri = 27;

console.table(pasanganB7No3);
console.log(pasanganB7No3.istri);
console.log(pasanganB7No3.umurIstri);

//Recursive function
const factorial = function (number) {
  if (number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

console.log(factorial(10));

//Function generator
const createName = function* () {
  yield "Adit";
  yield "Prasetya";
};

const name = createName();
for (const names of name) {
  console.log(names);
}

function* numbGanjil(value) {
  for (let i = 0; i <= value; i++) {
    if (i % 2 === 1) {
      yield i;
    }
  }
}

const numbers = numbGanjil(100);
for (const number of numbers) {
  console.log(number);
}

//Arrow function
const ganjilGenap = (number) => {
  return number % 2 === 0 ? "Genap" : "Ganjil";
};
console.log(ganjilGenap(2));

const genapGanjil = (number) => (number % 2 === 0 ? "Genap" : "Ganjil");
console.log(genapGanjil(2));

//closure
function createAdder(value) {
  const name = "adit";
  function add(param) {
    console.log(name);
    return value + param;
  }
  return add;
}

const addTwo = createAdder(2);
console.log(addTwo(10));
