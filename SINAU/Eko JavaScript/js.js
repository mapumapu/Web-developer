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
