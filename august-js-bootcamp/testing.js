// js - делит типы данных на 2 вида, примитивы и объекты

// примитивы - string, number, null, boolean, undefined, bigInt, symbol

// объекты - object, array, function

// string + number = string
// number + string = string

//  при + будет = string
//  в остальных случаях будет = number

//  - - - - - - - - - - - - - - - - - - - - - - - - -

// undefined + 1 = NaN
// null + 1 // 1
// null == undefined // true
// null === undefined // false

//  - - - - - - - - - - - - - - - - - - - - - - - - -

// let obj1 = { name: "Alice" };
// let obj2 = obj1;
// obj2.name = "Bob";
// console.log(obj1.name);

//  - - - - - - - - - - - - - - - - - - - - - - - - -

// Замыкание — это функция, которая «помнит» переменные из своей внешней функции даже после её завершения.
// Нужно для сохранения состояния и инкапсуляции.

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const c = counter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3

//  - - - - - - - - - - - - - - - - - - - - - - - - -

// Контекст this, call/apply/bind

// Есть 3 пользователя и с каждым нужно работать

// Шаблон который должен выводиться

function showInfo(greeting, city) {
  console.log(
    `${greeting}! Меня зовут ${this.name}, мне ${this.age}, я из ${city}`
  );
}

// все пользователи с которыми должны проработать
const user1 = { name: "Alice", age: 20 };
const user2 = { name: "Bob", age: 25 };
const user3 = { name: "Charlie", age: 30 };

// Без call / apply / bind — this потеряется, контекст будет утерян так как я вне функции пытаюсь работать с ними
showInfo("Привет", "Ташкент");
// ❌ this → undefined (или window), данных о пользователе нет

// поэтому, нам нужно:
// call — вызвать с конкретным this + список аргументов
// то есть нам нужно указать кого подставить под этот шаблон (функцию)

showInfo.call(user1, "Привет", "Ташкента");
// Привет! Меня зовут Alice, мне 20, я из Ташкента

showInfo.call(user2, "Привет", "Ташкента");
// Здравствуй! Меня зовут Bob, мне 25, я из Ташкента

// Как работает:
// call(КТО_ВЫЗЫВАЕТСЯ, арг1, арг2, ...)
// Первый аргумент — это this, остальные — аргументы функции.

showInfo.apply(user3, ["Hi", "New York`a"]);
// Когда удобно: когда аргументы уже лежат в массиве (например, получили их из формы).

// bind() - привязать this навсегда

const bobInfo = showInfo.bind(user2, "Привет", "Ташкента");
bobInfo();

// «меняем владельца функции на лету»
function addBalance(amount) {
  this.balance += amount;
  console.log(`${this.name} теперь имеет ${this.balance}$`);
}

const acc1 = { name: "Алиса", balance: 100 };
const acc2 = { name: "Боб", balance: 50 };

addBalance.call(acc1, 20); // Алиса теперь имеет 120$
addBalance.call(acc2, 70); // Боб теперь имеет 120$

const market1 = { name: "Magazin-1", balance: 30 };
const market2 = { name: "Magazin-2", balance: 20 };
const market3 = { name: "Magazin-3", balance: 10 };

function Sumirovanie(rasxod) {
  this.balance -= rasxod;
  console.log(`Магазин ${this.name} продал товар на ${this.balance}`);
}

Sumirovanie.call(market1, 20);
Sumirovanie.call(market2, 10);
Sumirovanie.call(market3, 5);

const bound = Sumirovanie.bind(market3);
bound(5);

const user = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};

const saveFn = user.greet.bind();

// bind — навсегда привязываем user
const greetFn = user.greet.bind(user);
greetFn(); // "Alice"

// call — разово вызываем с user
user.greet.call(user); // "Alice"

// apply — то же самое, но аргументы массивом
user.greet.apply(user); // "Alice"


// Прототипы и наследование

function Auto(model, age) {
  this.model = model;
  this.age = age;
}

Auto.prototype.getInfo = function () {
  console.log(`Model: ` + this.model, `Age: ` + this.age);
};

const toyota = new Auto("toyota", 2000);
const nissan = new Auto("nissan", 1800);

toyota.getInfo();
nissan.getInfo();
