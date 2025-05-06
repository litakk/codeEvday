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

// if (myStatus === "ready") {
//   console.log("lets go");
// } else if (myStatus === "pending") {
//   console.log("be prepared");
// } else {
//   console.log("failed");
// }

// - - -

// function

function calc(year) {
  const date = new Date().getFullYear() - year;

  if (date < 0) {
    console.log("you are not born yet");
  }
  return date;
}
// console.log(calc(2025))

// - - -

// array

const cars = ["tesla", "porsche", "bmw"];
// console.log(cars.length);
// console.log(cars[0]);
// console.log(cars[cars.length - 1]);

// for(let car of cars) {
// console.log(car);
// }

// cars.push('audi') // добавить в конец
// cars.pop('audi') // удалить в конце

// cars.unshift('audi') // добавить в начало
// cars.shift('audi') // удалить в начале

// let t = cars.pop() // log(audi)

// - - -

// Objects

// объекты в JavaScript - это ключ: значение

// const person = {
//   firstName: "Vladilen",
//   lastName: "Minin",
//   year: 1993,
//   langs: ["en", "ru"],
//   isProgrammer: true,
//   greet() {
//     console.log("hello from person ");
//   },
// };

// console.log(person); // вернёт все ключ: значение
// console.log(person.firstName); // => Vladilen
// console.log(person['lastName']); // => Minin

//  динамический ключ:
// const key = 'year'
// console.log(person[key]);

// - - -

// Function Declaration
function greet(name) {
  console.log("Hello from", name);
}
greet("Xazratik");

// Function Expression
const greet2 = function (name) {
  console.log("Hello from", name);
};
greet2("Xazratik");

// разница в том, что Function Declaration можно вызвать до объявления функции, а Function Expression вернёт ошибку!

// - - -

// variant - 1
// const arror = (name) => {
//     console.log('Hello from', name);
//  }
// arror('Max')

// variant - 2
// const arror2 = (name) => console.log('Hello from', name);
// arror2('Max')

// - - -

// rest operator
function sumAll(...all) {
  let res = 0;
  for (let n of all) {
    res += n;
  }
  return console.log(res);
}
// sumAll(1,2,3)

// rest - собирает
// spread - разворачивает

// - - -

// reduce
function sumAll2(...all) {
  return all.reduce((acc, n) => {
    return (acc += n);
  }, 0);
}
console.log(sumAll2(1, 2, 3));

// - - -

// замыкание -> «Это функция, которая запоминает внешние переменные, даже после завершения родительской функции»

function CreateMember(firstName) {
  return function (lastName) {
    console.log(firstName + " " + lastName);
  };
}

let logWithLastName = CreateMember("John");
logWithLastName("Doe");

// - - -

function Counter() {
  let count = 0;

  return function () {
    console.log(count++);
  };
}

let res = Counter()

res()
res()
res()

// - - -
