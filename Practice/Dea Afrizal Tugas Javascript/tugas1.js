"use strict";

// 1. Prompt untuk mengetahui saldo akhir dari apa uang diinputkan oleh user
const saldoAwal = prompt("Input Saldo Awal : ");
const pengeluaran = prompt("Input Pengeluaran :  ");
alert(`Saldo Akhirmu adalah ${saldoAwal - pengeluaran}`);

// 2. Menentukan hari dari tanggal yang ada saat ini di pc kalian
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = new Date().getDay();
console.log(`Today is ${days[day]}`);
