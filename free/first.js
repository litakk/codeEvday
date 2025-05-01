const number = 42;

// number = 52 // error

// перваяБуква - camelCase

let lastName = "Smith";

lastName = "Jones";

// - - -

let _$lastName_$ = ""; // можно начинать с символами, можно заканчивать с числом
// let 5error // error // начинать с числом нельзя

// operators

let currentYear = 2024;
const birthYear = 1993;

let age = currentYear - birthYear;

age++; // плюс 1
age += 1;
age = age + 1; // плюс и сохранить в переменную => переопределение переменной

age -= 3; // минус 3 и сохранить в переменную => переопределили переменную

// console.log(age);
// console.log(age > 31); // boolean тип данных

// = => оператор присвоения
// == => оператор сравнения ( age == "31" => true )
// === => оператор типа данных

// console.log(typeof 1 + "1"); // 11
// console.log(age === '31'); // только тип данных

// - - -

// datatypes

// let x

// console.log(typeof true); // boolean => true / false
// console.log(typeof ''); // => string
// console.log(typeof 42); // => number
// console.log(typeof { a: 1 }); // => объект - ключ:значение
// console.log(x); // переменная без значения => undefined
// console.log(typeof null); // пустота => ничего
// console.log(typeof Symbol('a'));
// console.log(BigInt(10)); // служит для того что бы работать с большими целочисленными значениями
// console.log(typeof NaN); // Not A Number
// console.log("1" + 1);
// console.log(10 / undefined); // NaN

// - - -

// if statement

const myStatus = "pending"; // ready, pending, failed

if (myStatus === "ready") {
  console.log("lets go");
} else if (myStatus === "pending") {
  console.log("be prepared");
} else {
  console.log("failed");
}

// - - -

