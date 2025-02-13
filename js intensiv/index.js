// === Изучение JavaScript ===

// === Ссылочный тип - object: [] , {} ===

// Создаём объект objectA
const objectA = {
  propertyA: 10,
  propertyB: true,
};

// Копируем ссылку на objectA в переменную copyOfA
const copyOfA = objectA;

// Изменяем свойства через ссылку
copyOfA.propertyA = 20;
copyOfA.propertyC = "abc";

// Поскольку объекты передаются по ссылке, изменения отразятся на objectA
console.log(objectA); // { propertyA: 20, propertyB: true, propertyC: 'abc' }

// --- --- --- --- --- --- --- --- --- --- --- ---

// === Базовый объект ===
const cityInfo = {
  city: "New York",
};

// Добавляем новое свойство
cityInfo.popular = true;

console.log(cityInfo); // { city: 'New York', popular: true }

// --- --- --- --- --- --- --- --- --- --- --- ---

// === МЕТОДЫ ОБЪЕКТОВ ===

// Создаём объект hero с методами
const hero = {
  name: "Супермен",

  // Метод: герой бежит
  run() {
    console.log(`${this.name} бежит!`);
  },

  // Метод: герой прыгает
  jump() {
    console.log(`${this.name} прыгает!`);
  },

  // Метод: герой атакует
  attack() {
    console.log(`${this.name} атакует врага!`);
  },
};

// Используем методы объекта hero
hero.run(); // "Супермен бежит!"
hero.jump(); // "Супермен прыгает!"
hero.attack(); // "Супермен атакует врага!"

// --- --- --- --- --- --- --- --- --- --- --- ---

// Создаём объект user с методами
const user = {
  name: "Azamat",

  // Метод: пользователь говорит
  say() {
    console.log(`${this.name} говорит!`);
  },

  // Метод: пользователь выполняет действие
  do() {
    console.log(`${this.name} делает что-то`);
  },
};

// Используем методы объекта user
user.say(); // "Azamat говорит!"
user.do(); // "Azamat делает что-то"

// --- --- --- --- --- --- --- --- --- --- --- ---

const stringifiedUser = JSON.stringify(user); // Этот метод преобразует объект user в строку формата JSON
console.log(JSON.parse(stringifiedUser));

// 1. Что такое JSON.stringify()?
// Метод JSON.stringify()
// используется для преобразования объекта, массива или значения примитивного типа
// (например, числа, строки, булевого значения) в строку формата JSON. Это удобно
// при необходимости передать данные через сеть или сохранить их в файле.

// 2. Метод JSON.parse() выполняет обратную операцию по сравнению с JSON.stringify():
// он принимает строку в формате JSON и преобразует её обратно в объект, массив или значение примитивного типа.

// ИТОГ:
// JSON.stringify() отправляет объект, преобразуя его в строку формата JSON.
// JSON.parse() принимает строку в формате JSON и преобразует её обратно в объект.

// --- --- --- --- --- --- --- --- --- --- --- ---

let number = 10;

if (number <= 10) {
  console.log("Вам меньше 10 лет");
} else {
  console.log("Доступ разрешён");
}

// --- --- --- --- --- --- --- --- --- --- --- ---

let temperature = 10;

if (temperature > 30) {
  console.log("Жарко");
} else if (temperature > 15) {
  console.log("Тепло");
} else if (temperature > 0) {
  console.log("Прохладно");
} else {
  console.log("Холодно");
}

// --- --- --- --- --- --- --- --- --- --- --- ---

let stringExample = "azamat"; // строка с длиной 6 символов

if (stringExample.length > 7) {
  // проверка, если длина строки больше 7
  console.log("не больше 7");
} else if (stringExample.length > 5) {
  // проверка, если длина строки больше 5
  console.log("6 больше чем 5"); // это условие выполнится, так как длина строки 6
} else {
  // если ни одно из предыдущих условий не выполнится
  console.log("В итоге не нашел подходящий");
}

// --- --- --- --- --- --- --- --- --- --- --- ---

// Примитивные типы данных:

// Number — числа(целые и с плавающей точкой): 5, 10.3, -7.
// String — строки(тексты): "Hello", 'World'.
// Boolean — булевы значения, которые могут быть либо true(истина), либо false(ложь).
// Null — специальное значение, которое обозначает отсутствие значения.
// Undefined — значение, которое присваивается переменной по умолчанию, если ей не присвоено другое значение.
// Symbol — уникальные и неизменяемые идентификаторы, которые обычно используются для уникальных ключей в объектах.
// BigInt — позволяет работать с очень большими числами, превышающими диапазон типов Number.
// Объекты — это сложные структуры данных, которые могут содержать различные данные, включая функции и другие объекты.Например, массивы и функции также являются объектами.

// --- --- --- --- --- --- --- --- --- --- --- ---

let name = String;
let age = Number;
let isBoolean = Boolean;

//  Создайте переменную, которая будет хранить ваш возраст через 5 лет.

let currentAge = 18;
let futureAge = currentAge + 5;
console.log(futureAge);

// --- --- --- --- --- --- --- --- --- --- --- ---

// Сравните свой текущий возраст с 18 с использованием оператора сравнения
let myAge = 18;
let isEqualTo18 = myAge === 18;
console.log(isEqualTo18);

// --- --- --- --- --- --- --- --- --- --- --- ---

// Создайте объект person с тремя свойствами:
let person = {
  name: "Azamat",
  age: 18,
};

let isAdult = person.age === 18;
console.log(isAdult);

// --- --- --- --- --- --- --- --- --- --- --- ---

// Дополнительное задание (по желанию):

let remainder = 18 % 2;
console.log(remainder);

// --- --- --- --- --- --- --- --- --- --- --- ---

// Проверка на палиндром

let word = "MADAM";

let lowerCaseWord = word.toLowerCase();
let reversedWord = lowerCaseWord.split("").reverse().join("");
if (lowerCaseWord === reversedWord) {
  console.log("Палиндром");
} else {
  console.log("Не палиндром");
}

// Перевести проверку палиндрома в функцию

function checkPalindrome(word) {
  let lowerCaseWord = word.toLowerCase();
  let reversedWord = lowerCaseWord.split("").reverse().join("");

  if (lowerCaseWord === reversedWord) {
    console.log("Это палиндром");
  } else {
    console.log("Не палиндром");
  }
}

// --- --- --- --- --- --- --- --- --- --- --- ---

// Math.floor() - округляет число в меньшую сторону
// Math.round() - округляет число в большую сторону
// Math.random() - берет рандомное число из заданного целого числа

let numberExample = 1.5;
let randomValue = Math.random(); // Генерация случайного числа от 0 до 1
console.log(randomValue);

// --- --- --- --- --- --- --- --- --- --- --- ---

let textExample = "Robin Singh from USA.";
let transformedText = textExample.replace(/ /g, "-").toLowerCase();
console.log(transformedText);

// Что делает return в функции?
// 🔹 return используется для возврата результата из функции. Без него функция ничего не возвращает (по умолчанию возвращает undefined).

// --- --- --- --- --- --- --- --- --- --- --- ---

// Чем отличаются let, const и var?
// 🔹 В JavaScript есть три способа объявить переменные:

// var (устаревший, используется редко).
// let (рекомендуемый для изменяемых значений).
// const (для неизменяемых значений).

// --- --- --- --- --- --- --- --- --- --- --- ---

// EXAMPLE CALLBACK FUNCTION ->

// Функция, которая принимает callback
function greet(name, callback) {
  console.log("Привет, " + name);
  callback(); // Вызов callback после выполнения приветствия
}

// Callback функция
function sayGoodbye() {
  console.log("До свидания!");
}

// Вызов функции с callback
greet("Иван", sayGoodbye);

// --- --- --- --- --- --- --- --- --- --- --- ---

// Более сложный пример callback

function printMyName() {
  console.log("Bogdan");
}

console.log("Start");

setTimeout(printMyName, 3000); // Задержка 3 секунды перед вызовом функции printMyName

// --- --- --- --- --- --- --- --- --- --- --- ---

// Работая с объектами, не стоит изменять оригинальный объект напрямую,
// лучше создать копию и работать с ней

const originalObject = { name: "Alice" };
const copiedObject = { ...originalObject }; // создаем поверхностную копию
copiedObject.name = "Bob";
console.log(originalObject.name); // выведет "Alice" — originalObject не изменяется

// --- --- --- --- --- --- --- --- --- --- --- ---

// Область видимости

// 1. Глобальная переменная видимости
// 2. Локальная переменная видимости

const globalVariable = 5;

function outerFunction() {
  function innerFunction() {
    console.log(globalVariable); // 5
  }
  innerFunction();
}

outerFunction();

// --- --- --- --- --- --- --- --- --- --- --- ---

// Операторы && и ||
// Используются очень часто, и это не просто теория !

// Примеры:

// const userName = userInput || "Гость";
// console.log(userName); // если userInput пустой, будет "Гость"

// Следующий пример:

const result = null || 0 || false || "Данные найдены";
console.log(result); // "Данные найдены"

// --- --- --- --- --- --- --- --- --- --- --- ---

// Стрелочная функция — это короткий синтаксис для объявления функций, введенный в ES6.
// Она пишется с использованием символа =>, из-за чего и получила свое название.

// Короткий синтаксис:
// У стрелочных функций минималистичная запись, особенно если код простой

// Не имеет имени
// Не могут быть конструкторами
// Нет доступа к arguments

// Для упрощения кода:
// Особенно удобно, если нужно написать короткую функцию:

// Когда стрелочные функции не подходят?
// Когда нужно использовать объект arguments.
// Когда функция должна быть конструктором (использование new).
// Если важен явный контекст this (например, в методах объектов).

const sum = (a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

function exampleFunction() {
  const sum = (a, b) => a + b;
  console.log(sum(2, 3)); // 5
}

// --- --- --- --- --- --- --- --- --- --- --- ---

// Обработка ошибок:

// Можно сгенерировать ошибку вручную:
// throw new Error('Some error')

// Что бы поймать вероятную ошибку нужно использовать try {}, если в итоге ошибка всё таки выйдет она переходит в catch() {}

// try {
// Выполнение блока кода
// } catch (error) {
//     console.log(error)
//     console.log(error.message)
// }

// console.log("Continue...")

// Реальный пример

const fnWithError = () => {
  throw new Error("Some error");
};

try {
  fnWithError();
} catch (error) {
  console.log(error);
}

console.log("Continue...");

// --- --- --- --- --- --- --- --- --- --- --- ---

// МАССИВ:

// МАССИВ - это объект с цифровыми именами свойств
// свойство у массива называется - 0, 1, 2, 3 etc..

// Массив это очень популярная конструкция в JS
// и массив пользуется такой же популярностью как и Объект

// Каждый элемент имеет свой порядковый номер - index, который начинается с 0

// Формат записи массива:

const myArray = [1, 2, 3];
console.log(myArray);
// [1, 2, 3]

const myArray2 = new Array(1, 2, 3);
// призываем функцию Array и передаём в неё аргументы
console.log(myArray2);
// [1, 2, 3]

// Структура массивов

// [1, 2, 3]
// 0: 1
// 1: 2
// 2: 3
// length: 3

// Что-бы получить объект с массива нужно:

console.log(myArray[0]);

// Что-бы редактировать элементы в массиве нужно:

myArray.unshift(0); // добавляем 0 в начало массива
myArray.shift(); // удаляет первый элемент (1)

myArray.push(4); // добавляем 4 в конец массива
myArray.pop(); // удаляет последний элемент (3)

myArray.splice(1, 0, 1.5); // добавляем 1.5 на индекс 1 (вставка без удаления элементов)

// arr.splice(startIndex, deleteCount, item1, item2, ...)

// startIndex — индекс, с которого начинается изменение массива (можно добавить или удалить элементы).
// deleteCount — количество элементов, которые нужно удалить (можно поставить 0, если не нужно удалять элементы).
// item1, item2, ... — элементы, которые нужно добавить в массив, начиная с позиции startIndex

let ar = [1, 2, 3, 4, 5];
ar.splice(2, 1);
// указываем индексом только 1 значение
console.log(ar);

let newArr = [...myArray, 4]; // создаём новый массив с добавленным элементом 4
// console.log(newArr[0])
// console.log(newArr[0,1])
console.log(newArr);

// --- --- --- --- --- --- --- --- --- --- --- ---

// ЗАДАЧА: цикл который считает до 50 и выводит только чётные числа

for (let i = 0; i < 51; i++) {
  if (i % 2 === 0) {
    console.log(`чётное число ${i}`);
  } else {
    console.log(`не чётные числа ${i}`);
  }
}

// --- --- --- --- --- --- --- --- --- --- --- ---

// ЗАДАЧА: система скидок в магазине одежды

function CalculateDiscountedPrice(price, discount) {
  let a = price - (price * discount) / 100;
  return a;
}
console.log(CalculateDiscountedPrice(1000, 10));

// ЗАДАЧА:
// У тебя есть массив объектов, представляющий студентов, с их именами, возрастом и оценками.Напиши код, который:

// Выберет студентов старше 18 лет.
// Из студентов старше 18 лет выберет только тех, у кого средний балл больше 75.
// Вернёт массив только с именами этих студентов.

// Подсказки:
// Используй метод filter для выбора студентов старше 18 лет.
// Вычисли средний балл студента, сложив все оценки и поделив на количество оценок.
// Используй map, чтобы получить массив только с именами подходящих студентов.

const studentss = [
  { name: "Алексей", age: 17, grades: [60, 70, 80] },
  { name: "Мария", age: 19, grades: [85, 90, 95] },
  { name: "Иван", age: 21, grades: [50, 60, 55] },
  { name: "Ольга", age: 20, grades: [78, 82, 80] },
  { name: "Сергей", age: 18, grades: [70, 75, 80] },
];

// Фильтруем студентов старше 18 лет и у которых средний балл больше 75
let filt = studentss
  .filter((value) => value.age > 18) // Фильтруем студентов старше 18 лет
  .filter((value) => {
    // Вычисляем средний балл
    let middleGrade =
      value.grades.reduce((acc, num) => acc + num, 0) / value.grades.length;
    return middleGrade > 75; // Проверяем, что средний балл больше 75
  })
  .map((value) => value.name); // Получаем только имена студентов

console.log(filt);

// --- --- --- --- --- --- --- --- --- --- --- ---

// 1. forEach((value,index,array) => { })
// 2. filter((value,index) => { })
// 3. find((value,index) => { })
// 4. map((value,index) => { })
// 5. reduce((acc, next) => { })

// --- --- --- --- --- --- --- --- --- --- --- ---

// 1️⃣ forEach(value, index)
// 📌 Выведем элементы с их индексами.

const fruits = ["🍎 Яблоко", "🍌 Банан", "🍊 Апельсин"];

fruits.forEach((value, index) => {
  console.log(`Элемент №${index + 1}: ${value}`);
});

// Элемент №1: 🍎 Яблоко
// Элемент №2: 🍌 Банан
// Элемент №3: 🍊 Апельсин
// 📌 Где используется?
// Если нужно просто пройтись по массиву и что-то сделать с каждым элементом, учитывая его индекс.

// --- --- --- --- --- --- --- --- --- --- --- ---

// 2️⃣ filter(value, index)
// 📌 Оставим только элементы на чётных индексах.

const numbers6 = [10, 15, 20, 25, 30, 35];

const evenIndexNumbers = numbers6.filter((value, index) => index % 2 === 0);

console.log(evenIndexNumbers); // [10, 20, 30]
// 📌 Где используется?
// Когда нужно отфильтровать элементы по их индексу (например, взять только чётные или нечётные).

// --- --- --- --- --- --- --- --- --- --- --- ---

// 3️⃣ find(value, index)
// 📌 Найти первый элемент с нечётным индексом.

const numbers7 = [4, 7, 10, 13, 16, 19];

const firstOddIndexNumber = numbers7.find((value, index) => index % 2 !== 0);

console.log(firstOddIndexNumber); // 7
// 📌 Где используется?
// Если нужно найти первый элемент по какому-то критерию, включая его индекс.

// --- --- --- --- --- --- --- --- --- --- --- ---

// 4️⃣ map(value, index)
// 📌 Добавим к каждому элементу его номер.

const students = ["Алиса", "Борис", "Виктор"];

const numberedStudents = students.map(
  (value, index) => `${index + 1}. ${value}`
);

console.log(numberedStudents);
// ["1. Алиса", "2. Борис", "3. Виктор"]
// 📌 Где используется?
// Когда нужно изменить каждый элемент массива, используя его индекс.

// --- --- --- --- --- --- --- --- --- --- --- ---

// 5️⃣ reduce(acc, value, index)
// 📌 Соберём строку с нумерованными значениями.

const words = ["Привет", "как", "дела"];

const sentence = words.reduce((acc, value, index) => {
  return acc + `${index + 1}) ${value} `;
}, "");

console.log(sentence);
// "1) Привет 2) как 3) дела "
// 📌 Где используется?
// Если нужно собрать строку, используя индексы элементов.

// --- --- --- --- --- --- --- --- --- --- --- ---

// 🔹 Итог
// 🔸 forEach(value, index) – если нужно просто пройтись по массиву.
// 🔸 filter(value, index) – если нужно отфильтровать элементы по их индексам.
// 🔸 find(value, index) – если нужно найти первый элемент по критерию.
// 🔸 map(value, index) – если нужно изменить элементы, учитывая их индекс.
// 🔸 reduce(acc, value, index) – если нужно создать что-то новое, используя индексы.

// --- --- --- --- --- --- --- --- --- --- --- ---

// forEach - проходит по массиву и выполняет действие например (в консоли)
// создаёт новый массив ? НЕТ
// изменяет исходник? НЕТ

// --- --- --- --- --- --- --- --- --- --- --- ---

// filter - оставляет только подходящие по условию
// создаёт новый массив ? ДА
// изменяет исходник? НЕТ

// --- --- --- --- --- --- --- --- --- --- --- ---

// find - ищет первый подходящий элемент
// создаёт новый массив ? НЕТ
// изменяет исходник? НЕТ

// --- --- --- --- --- --- --- --- --- --- --- ---

// map - изменяет/работает с каждый элементом
// создаёт новый массив ? ДА
// изменяет исходник? НЕТ

// --- --- --- --- --- --- --- --- --- --- --- ---

// reduce - объединяет массив в одно значение
// создаёт новый массив ? НЕТ
// изменяет исходник? НЕТ

// --- --- --- --- --- --- --- --- --- --- --- ---

// практика:

// forEach()

// let a = ["один", "два", "три", "четыре"]

// a.forEach((value, index) => {
//     console.log(`Номер: ${index + 1} ${value}`)
// })

// --- --- --- --- --- --- --- --- --- --- --- ---

// filter()

// let a = [1, 2, 3, 4, 5, 6]

// let re = a.filter((value, index) => { return (index + 1) % 2 === 0 })
// console.log(re)

// for (let i of a) { if (i % 2 === 0) { console.log(`${i}:чётные`) } else { console.log(`${i}: не чётные`) } }

// --- --- --- --- --- --- --- --- --- --- --- ---

// Сумма чисел массива
// Представь, у тебя есть список чисел, например, [1, 2, 3, 4, 5]. Тебе нужно найти сумму всех этих чисел.

let ad = [1, 2, 3, 4, 5];
const resultatAzamat = ad.reduce((acc, num) => acc + num, 0);
console.log(resultatAzamat);

// --- --- --- --- --- --- --- --- --- --- --- ---

// Самое длинное слово
// Берёшь предложение и находишь в нём слово с самым большим количеством букв.
// Например: в "Я люблю программирование" самое длинное слово — "программирование".

function LongWord(arg) {
  return arg.split(" ").sort((a, b) => b.length - a.length)[0];
}

console.log(LongWord("Я люблю программировать"));

// --- --- --- --- --- --- --- --- --- --- --- ---

// Тернарный оператор:

// У тернарного оператора три операнда

// Конструкция с тернарным оператором - выражение

// Выражение возвращает значение

// Как использовать: Тернарный оператор?

// Условие ? Выражение 1 : Выражение 2

// Условие ? любое выражение(условие)
// Выражение 1 - если условие правдиво, тогда возвращает Выражения 1
// Выражение 2 - если условие ложно, тогда возвращает результат Выражения 2

let numberf = 5;
let resultf = numberf % 2 === 0 ? "Чётное" : "Нечётное";
console.log(resultf);

const value = 11;

value ? console.log("Условие истинно") : console.log("Условие ложно");

// --- --- --- --- --- --- --- --- --- --- --- ---

// ЦИКЛЫ В JAVASCRIPT
// БЕЗ ЦИКЛОВ:

// ПРИМЕР 1

// let i = 0
// console.log(i)
// i++
// console.log(i)
// i++
// console.log(i)
// i++
// console.log(i)
// i++
// console.log(i)
// i++

// ПРИМЕР 2

// const myArray = [true, 'abc', 10]

// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])

// ПРИМЕР 3

// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }

// console.log(myObject.x)
// console.log(myObject.y)
// console.log(myObject.z)

// ЦИКЛЫ:

// ЕСТЬ РАЗНЫЕ ТИПЫ ЦИКЛОВ В JAVASCRIPT
// ТИПЫ ЦИКЛОВ:

// 1. for
// 2. for ... in ...
// 3. while
// 4. do ... while
// 5. for ... of ...

// --- --- --- --- --- --- --- --- --- --- --- ---

// САМЫЙ ПРОСТОЙ ЦИКЛ for

// for (Начальная инструкция; Условие; Итерационное действие) {
// Блок кода, выполняемый на каждой итерации
// }

// пример:
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// когда цикл становится 5 = 5 он сразу же выходит с цикла и останавливается на 4 = 5
// то есть 5 остаётся больше в любом случае из-за условия

// --- --- --- --- --- --- --- --- --- --- --- ---

// Цикл While

// while (Условие) {
// Блок кода, выполняемый на
// каждой итерации
// }

// let i = 0

// while (i < 5) {
//     console.log(i)
//     i++
// }

// --- --- --- --- --- --- --- --- --- --- --- ---

// Цикл DO - WHILE

// do {
// Блок кода, выполняемый на
// каждой итерации
// } while ( Условие )

let i = 10;

do {
  console.log(i);
  i++;
} while (i < 5);

// --- --- --- --- --- --- --- --- --- --- --- ---

// Цикл FOR IN
// Для чего используется: Чтобы перебирать ключи (индексы или свойства) объекта или массива.
// Как работает: Он проходит по каждому ключу объекта или массива и позволяет с ним работать.

// for...in — это для ключей (свойств объекта или индексов массива).

const person3 = { name: "Alice", age: 25, city: "London" };

for (const key in person3) {
  console.log(key + ": " + person[key]);
}
// Что выведет:
// name: Alice
// age: 25
// city: London

// --- --- --- --- --- --- --- --- --- --- --- ---

// Цикл FOR OF
// Цикл for...of
// Для чего используется: Чтобы перебирать элементы массива или строки.
// Как работает: Он проходит по каждому элементу массива или строки и позволяет с ним работать.

// const fruits = ['apple', 'banana', 'cherry'];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// apple
// banana
// cherry

// --- --- --- --- --- --- --- --- --- --- --- ---

// forEach для объектов

// 1. Object.keys(obj)
// Что делает? Возвращает массив ключей (названий свойств) объекта obj.

// Как работает?
// Пример:

// const user = {
//   name: "Alice",
//   age: 30,
//   isAdmin: true
// };

// const keys = Object.keys(user);
// console.log(keys); // ["name", "age", "isAdmin"]

// --- --- --- --- --- --- --- --- --- --- --- ---

// Object.values(obj)
// Что делает? Возвращает массив значений свойств объекта obj.

// Как работает?
// Пример:

// const user = {
//   name: "Alice",
//   age: 30,
//   isAdmin: true
// };

// const values = Object.values(user);
// console.log(values); // ["Alice", 30, true]

// const myObject = {
//     x: 10,
//     y: true,
//     z: 'abc'
// }
// вариант 1
// Object.keys(myObject).forEach(key => {
//     console.log(key, myObject[key])
// })
// вариант 2
// Object.entries(myObject).forEach(([key, value]) => {
//     console.log(key, value)
// })

// --- --- --- --- --- --- --- --- --- --- --- ---

// МОДУЛИ
// Модули позволяют структурировать код
// Модули помогают избегать дублирования блоков кода

// Вынести функцию в отдельный модуль а потом использовать ее многократно

// Синтаксис
// EXPORT/IMPORT СИНТАКСИС

// moduleOne.js
// export ...

// moduleTwo.js
// import ...

// в таком случае каждый файл JS является отдельным модулем
// и потом с помощью EXPORT - экспортировать часть переменных из такого модуля
// и потом в других модулях мы можем IMPORT - импортировать определенные функции с других модулей
// там где мы их EXPORT - экспортировали

// Названия переменных могут не совпадать:
// export default myName
// import printMyName from 'link'
// не рекомендуется

// для создания расширеного модульного файла нужно:
// создать файл с названием: module.mjs

// 1. Модули должны быть одноцелевыми
// 2. Распологайте все EXPORT инструкции внизу файла
// 3. Распологайте все IMPORT инструкции сверху файла
// 4. По возможности используйте EXPORT DEFAULT

// --- --- --- --- --- --- --- --- --- --- --- ---

// КЛАССЫ И ПРОТОТИПЫ
// КЛАССЫ ПОЗВОЛЯЮТ СОЗДАВАТЬ ПРОТОТИПЫ ДЛЯ ОБЪЕКТОВ

// НА ОСНОВАНИИ ПРОТОТИПОВ СОЗДАЮТСЯ ЭКЗЕМПЛЯРЫ
// ВСЕ ЭКЗЕМПЛЯРЫ БУДУТ НЕ ЗАВИСИМЫ ДРУГ ОТ ДРУГА И БУДУТ ИМЕТЬ СВОИ СВОЙСТВА И МЕТОДЫ

// ЭКЗЕМПЛЯРЫ НАСЛЕДУЮТ СВОЙСТВА И МЕТОДЫ ПРОТОТИПОВ

// CLASS - КЛАСС

class Comment {
  constructor(text) {
    this.text = text;
    this.votesQty = 0;
  }
  // this - переменная указывает на экземпляр класса

  upvote() {
    this.votesQty += 1;
  }
}

// СОЗДАНИЕ ЭКЗЕМПЛЯРА

// Класс — это шаблон. Экземпляр — конкретный объект, созданный через new
// const firstComment = new Comment('First comment')

class Car {
  constructor(model) {
    this.model = model; // свойство экземпляра
  }

  // Метод добавляется в Car.prototype
  startEngine() {
    console.log(`${this.model}: Двигатель запущен!`);
  }
}

// Создаем экземпляр класса
const tesla = new Car("Tesla");
tesla.startEngine(); // "Tesla: Двигатель запущен!"

// --- --- --- --- --- --- --- --- --- --- --- ---

// ЗАДАНИЕ: Создай свой "Зоопарк"
// Цель: Создать класс Animal и его наследников, используя прототипы и цепочку наследования.

// Что делает: Объявляет класс Animals (шаблон для создания объектов).
class Animals {
  // Что делает: Конструктор класса. Вызывается при создании объекта через new Animals(...)
  constructor(name, sound) {
    // Что делает: Создает свойство name у экземпляра класса и присваивает ему значение из параметра name
    this.name = name;
    this.sound = sound;
  }

  // Что делает: Объявляет метод класса, который выводит в консоль строку с именем и звуком животного.
  makeSound() {
    console.log(`${this.name} говорит: ${this.sound}!`);
  }
}
// Пример создания экземпляра:
const lion = new Animals("Лев", "Рррр");
lion.makeSound(); // "Лев говорит: Рррр!"

// --- --- --- --- --- --- --- --- --- --- --- ---

// ПРОМИСЫ - Promises

// ПРОМИСЫ ПОЗВОЛЯЮТ ОБРАБАТЫВАТЬ ОТЛОЖЕННЫЕ ВО ВРЕМЕНИ СОБЫТИЯ
// ЧТО ИМЕЕТСЯ ВВИДУ? ПРЕДПОЛОЖИЛ ЧТО ВАМ НЕОБХОДИМО(ВАШЕЙ ПРОГРАММЕ)
// JAVASCRIPT ПОСЛАТЬ ЗАПРОС НА КАКОЙ ТО УДАЛЕННЫЙ СЕРВЕР, И ПОЛУЧИТЬ ОТ НЕГО ОТВЕТ
// ВЫ МОЖЕТЕ ПОСЛАТЬ ЗАПРОС ПО ПК СЕТИ ЧЕРЕЗ ИНТЕРНЕТ
// НО ВЫ НЕ ЗНАЕТЕ КОГДА СЕРВЕР ВАМ ОТВЕТИТ
// ОН МОЖЕТ ВАМ ОТВЕТИТЬ ЧЕРЕЗ 100 милли секунд, может через 2 секунды, либо через 5 секунд
// ТО ЕСТЬ ЭТО ОТ НАС НЕ ЗАВИСИТ И НЕ ЗАВИСИТ ОТ ВАШЕГО ПРИЛОЖЕНИЯ
// НО ПРИ ЭТОМ ВАШЕ ПРИЛОЖЕНИЕ ДОЛЖНО ОЖИДАТЬ ОТВЕТА ОТ СЕРВЕРА
// ТАК ВОТ ВОПРОС, ЧТО ДЕЛАТЬ ВАШЕГО ПРИЛОЖЕНИЮ ПОКА ОНА ОЖИДАЕТ ОТВЕТА ОТ УДАЛЕННОГО СЕРВЕРА
// ВАРИАНТА 2, ВАШЕ ПРИЛОЖЕНИЕ МОЖЕТ ВЫПОЛНЯТЬ ДРУГИЕ ДЕЙТСВИЯ ПОКА ОЖИДАЕТ,
// ЛИБО ЖЕ НЕ ВЫПОЛНЯТЬ НИЧЕГО ДРУГОГО.
// ТАК ВОТ 2 ВАРИАНТ НЕ ЖЕЛАТЕЛЕН. ПОЧЕМУ?
// ПОТОМУ ЧТО ЕСЛИ У ВАС ФРОНТ-ЕНД ПРИЛОЖЕНИЕ И В ЭТОМ ФРОНТ-ЕНД ПРИЛОЖЕНИИ
// ПОЛЬЗОВАТЕЛИ МОГУТ ВЗАИМОДЕЙСТВОВАТЬ СО СТРАНИЦОЙ, НАЖИМАТЬ НА КНОПКИ, ЗАПОЛНЯТЬ ФОРМЫ
// ТО ПОКА ВЫ ЖДЕТЕ ВЫ ПРОСТО НАПРОСТО НЕ СМОЖЕТЕ ОБРАБАТЫВАТЬ НИКАКИЕ ДЕЙСТВИЯ ПОЛЬЗОВАТЕЛЯ
// НЕ СМОЖЕТЕ РЕАГИРОВАТЬ С ПОМОЩЬЮ JAVASCRIPT, ПОТЕРЯЕТСЯ ИНТЕРАКТИВНОСТЬ ПОЛЬЗОВАНИЯ ВЕБ-САЙТАМИ
// ПОТОМУ ВЫ ДОЛЖНЫ ИМЕТЬ ВОЗМОЖНОСТЬ ВЫПОЛНЯТЬ ДРУГИЕ ДЕЙСТВИЯ ПОКА ВЫ ОЖИДАЕТЕ ОТВЕТА ОТ СЕРВЕРА
// И ВОТ ТАКОЙ ЗАПРОС КОТОРЫЙ ВЫ ПОСЛАЛИ НА СЕРВЕР НАЗЫВАЕТСЯ
// АССИНХРОННЫМ ЗАПРОСОМ ТО ЕСТЬ ВЫ НЕ ЗНАЕТЕ КОГДА ВЫ ПОЛУЧИТЕ ОТВЕТ,
// ТО ЕСТЬ ОТВЕТ ПРИХОДИТ АССИНХРОНО, НЕ СРАЗУ ЖЕ ПОСЛЕ ЗАПРОСА А ЧЕРЕЗ КАКОЕ ТО ВРЕМЯ
// И В ЭТОТ ИНТЕРВАЛ ВЫ ДОЛЖНЫ ИМЕТЬ ВОЗМОЖНОСТЬ ЗАНИМАТЬСЯ ДРУГИМИ ДЕЛАМИ
// ВЫПОЛНЯТЬ ДРУГИЕ ЗАДАЧИ В ВАШЕМ JS ПРИЛОЖЕНИИ,
// ТАК ВОТ С ПОМОЩЬЮ ПРОМИСОВ МОЖНО В JS ОБРАБАТЫВАТЬ ОТЛОЖЕННЫЕ ВО ВРЕМЕНИ СОБЫТИЯ
// ДРУГОЙ ПРИМЕР:
// ЭТО ЗАПИСЬ ДАННЫХ В БАЗУ ДАННЫХ
// БАЗА ДАННЫХ НАХОДИТСЯ НА ДРУГОМ СЕРВЕРЕ ВЫ ПОСЛАЛИ ЗАПРОС ЭТОЙ БАЗЕ С ПРОСЬБОЙ ЗАПИСАТЬ
// КАКИЕ ТО ДАННЫЕ В БАЗУ, НО ВЫ НЕ ЗНАЕТЕ СКОЛЬКО ВРЕМЕНИ ЗАЙМЕТ ТАКАЯ ПРОЦЕДУРА ЗАПИСИ
// МОЖЕТ 1 СЕКУНДУ МОЖЕТ 2 СЕКУНДЫ,
// И ПО ТОМУ СНОВА ТАКИ ЭТО АССИНХРОННЫЙ ЗАПРОС И КОГДА ВЫ ПОЛУЧИТЕ ОТВЕТ ВЫ ДОЛЖНЫ ЕГО ОБРАБОТАТЬ

// ПРОМИС - ЭТО ОБЕЩАНИЕ ПРЕДОСТАВИТЬ РЕЗУЛЬТАТ ПОЗЖЕ,
// МЫ ОТПРАВИЛИ ЗАПРОС НА УДАЛЕННЫЙ СЕРВЕР МЫ НЕ ЗНАЕМ ОТВЕТИТ ОН НАМ ИЛИ НЕ ОТВЕТИТ
// КАКИЕ ДАННЫЕ ОН НАМ ПРИШЛЕТ, МЫ НЕ ЗНАЕМ КАКОЙ БУДЕТ РЕЗУЛЬТАТ НАШЕГО ЗАПРОСА
// НО С ПОМОЩЬЮЮ ПРОМИСА МЫ СМОЖЕМ ПОСТАВИТЬ НА ОЖИДАНИЕ ПОЛУЧЕНИЯ РЕЗУЛЬТАТА
// ТОЖЕ САМОЕ КАСАЕТСЯ И С ПРИМЕРОМ С БАЗОЙ ДАННЫХ
// МЫ ПОСЛАЛИ ЗАПРОС В БД С ПРОСЬБОЙ ЗАПИСАТЬ ДАННЫЕ И БД ЧЕРЕЗ КАКОЕ ТО ВРЕМЯ ОТВЕТИТ

// ИТОГ:
// ПРОМИС - ЭТО ОБЕЩАНИЕ ПРЕДОСТАВИТЬ РЕЗУЛЬТАТ НЕ МГНОВЕННО, А ЧЕРЕЗ КАКОЕ ТО ВРЕМЯ

// ТАК ЖЕ ПРОМИС МОЖЕТ ВЕРНУТЬ ОШИБКУ,
// ПРИМЕР:
// ДАННЫЕ ПРОЧЕСТЬ С КАКОЙ ТО УДАЛЕННОЙ БД НЕ ВОЗМОЖНО
// НО ПРИ ЭТОМ НАШЕ ПРИЛОЖЕНИЕ ТАК ЖЕ ДОЛЖНО КАКИМ ТО ОБРАЗОМ ДОЛЖНО ОБРАБОТАТЬ

// У ПРОМИСА ЕСТЬ 3 СОСТОЯНИЯ:

// СОСТОЯНИЯ ПРОМИСА -
// КОГДА ПРОМИС ТОЛЬКО СОЗДАЕТСЯ У НЕГО БУДЕТ СОСТОЯНИЕ ОЖИДАНИЯ, ЛИБО РЕЗУЛЬТАТА ЛИБО ОШИБКИ
// КОГДА ПРОМИС ВЕРНУЛ КАКОЙ-ТО РЕЗУЛЬТАТ ОН СЧИТАЕТСЯ ИСПОЛНЕНЫМ, ТО ЕСТЬ ПРОМИС ИСПОЛНЕН И РЕЗУЛЬТАТ МОЖЕТ БЫТЬ ОБЪЕКТ С ДАННЫМИ ЛИБО МАССИВ ДОКУМЕНТОВ
// И 3 СОСТОЯНИЕ - ОТКЛОНЕН: ЕСЛИ ВОЗНИКЛА КАКАЯ-ТО ОШИБКА ТО ПРОМИС МОЖНО ОТКЛОНИТЬ

// Другими словами:
// pending (ожидание) — операция ещё выполняется.
// fulfilled (успех) — операция завершилась успешно.
// rejected (ошибка) — операция завершилась с ошибкой.

// СОЗДАНИЕ ПРОМИСА: ЧТО ТАКОЕ ПРОМИС? ЭТО ОБЪЕКТ В JS

// const myPromise = new Promise((resolve, reject) => {
// Выполнение асинхронных действий
// Внутри этой функции нужно в результате вызывать
// одну из функций resolve или reject
// })

// --- --- --- --- --- --- --- --- --- --- --- ---

// ПОЛУЧЕНИЕ РЕЗУЛЬТАТА ПРОМИСА

// ПРИМЕР ПОД КАПОТОМ:
// myPromise
// .then(value => {
// Действия в случае успешного Промиса
// Значение value - это значение, переданное в вызове
// функции resolve внутри Промиса
// })
// .catch(error => {
// Действия в случае отклонения Промиса
// Значение error - это значение, переданное в вызове
// функции reject внутри Промиса
// })

// --- --- --- --- --- --- --- --- --- --- --- ---

// ПОЛУЧЕНИЕ ДАННЫХ С ПОМОЩЬЮ FETCH API

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.log(error))

// Пример на практике:

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => {
//         console.log(response)
//         return response.json()
//     })
//     .then(json => console.log(json))
//     .catch(error => console.log(error))

// --- --- --- --- --- --- --- --- --- --- --- ---

// JSON - отправка JavaScript объектов просто в виде строк

// --- --- --- --- --- --- --- --- --- --- --- ---

// ASYNC/AWAIT => это:
// СПЕЦИАЛЬНЫЙ СИНТАКСИС ДЛЯ УПРОЩЕНИЯ РАБОТЫ С ПРОМИСАМИ
// ОН ПОЯВИЛСЯ В ES6 В 2015 ГОДУ
//  ЧТО ЖЕ ТАКОЕ АССИНХРОНАЯ ФУНКЦИЯ? ВМЕСТО КАКОГО-ТО ЗНАЧЕНИЯ - ВОЗВРАЩАЕТ ПРОМИС

// АСИНХРОННАЯ ФУНКЦИЯ

// async function asyncFn() {
// Всегда возвращает Промис
// }

// СТРЕЛОЧНАЯ ФУНКЦИЯ В АССИНХРОННОСТИ
// const asyncFn = async () => {
// Всегда возвращает Промис
// }

// async/await => async возвращает промис, await - ожидает результата промиса (то есть не выполниться пока промис не выдаст результат)

// ОЖИДАНИЕ РЕЗУЛЬТАТА AWAIT

const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFn = async () => {
  console.log("Timer starts");
  const startTime = performance.now();
  await timerPromise();
  const endTime = performance.now();
  console.log("Timer ended", endTime - startTime);
};

// --- --- --- --- --- --- --- --- --- --- --- ---

// full video - https://youtu.be/CxgOKJh4zWE?si=SboM-2YLpnxG6Qsj

// --- --- --- --- --- --- --- --- --- --- --- ---

// 🔹 Промис (Promise)
// Promise — это объект, представляющий результат асинхронной операции. У него есть три состояния:

// pending (ожидание) — операция выполняется.
// fulfilled (успех) — операция завершилась успешно.
// rejected (отклонение) — операция завершилась с ошибкой.

// --- --- --- --- --- --- --- --- --- --- --- ---

console.log('Начало');

setTimeout(() => {
  console.log('Это сообщение после задержки');
}, 2000);

console.log('Конец');

// --- --- --- --- --- --- --- --- --- --- --- ---

// Spread оператор 

const arr = [1, 2, 3];
const newArrr = [...arr]; // Копируем элементы массива в новый
console.log(newArrr); // [1, 2, 3]

// --- --- --- --- --- --- --- --- --- --- --- ---

// Scope (Область видимости) — это концепция, определяющая, где в коде можно использовать (доступаться к) переменные.

// Пример:

let globalVar = "Я глобальная переменная"; // Глобальная область видимости

function exampleFunction() {
  let localVar = "Я внутри функции"; // Локальная область видимости (функциональный scope)
  console.log(globalVar); // ✅ Доступ к глобальной переменной
  console.log(localVar); // ✅ Доступ к локальной переменной
}

exampleFunction();

console.log(globalVar); // ✅ Доступ к глобальной переменной
console.log(localVar); // ❌ Ошибка! Нет доступа к локальной переменной вне функции

// Разбор:
// globalVar — глобальная переменная, доступная везде.
// localVar — локальная переменная внутри exampleFunction(), доступная только в этой функции.
// Вызов console.log(localVar); вне функции вызывает ошибку, потому что переменная не существует за пределами своей области видимости.
// Это основа работы scope в JavaScript.

// --- --- --- --- --- --- --- --- --- --- --- ---

let numm = [1]











// --- --- --- --- --- --- --- --- --- --- --- ---
