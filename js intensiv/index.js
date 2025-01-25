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
hero.run();    // "Супермен бежит!"
hero.jump();   // "Супермен прыгает!"
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
user.do();  // "Azamat делает что-то"

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

let stringExample = "azamat";  // строка с длиной 6 символов

if (stringExample.length > 7) {  // проверка, если длина строки больше 7
    console.log("не больше 7");
} else if (stringExample.length > 5) {  // проверка, если длина строки больше 5
    console.log("6 больше чем 5");  // это условие выполнится, так как длина строки 6
} else {  // если ни одно из предыдущих условий не выполнится
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
let reversedWord = lowerCaseWord.split('').reverse().join("");
if (lowerCaseWord === reversedWord) {
    console.log("Палиндром");
} else {
    console.log("Не палиндром");
}

// Перевести проверку палиндрома в функцию

function checkPalindrome(word) {
    let lowerCaseWord = word.toLowerCase();
    let reversedWord = lowerCaseWord.split('').reverse().join('');

    if (lowerCaseWord === reversedWord) {
        console.log("Это палиндром");
    } else {
        console.log('Не палиндром');
    }
};

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
}

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
}

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

const myArray = [1, 2, 3]
console.log(myArray)
// [1, 2, 3]

const myArray2 = new Array(1, 2, 3)
// призываем функцию Array и передаём в неё аргументы
console.log(myArray2)
// [1, 2, 3]

// Структура массивов

// [1, 2, 3]
// 0: 1
// 1: 2
// 2: 3
// length: 3

// Что-бы получить объект с массива нужно:

console.log(myArray[0])

// Что-бы редактировать элементы в массиве нужно:

myArray.unshift(0);  // добавляем 0 в начало массива
myArray.shift();  // удаляет первый элемент (1)

myArray.push(4);  // добавляем 4 в конец массива
myArray.pop();  // удаляет последний элемент (3)

myArray.splice(1, 0, 1.5);  // добавляем 1.5 на индекс 1 (вставка без удаления элементов)

// arr.splice(startIndex, deleteCount, item1, item2, ...)

// startIndex — индекс, с которого начинается изменение массива (можно добавить или удалить элементы).
// deleteCount — количество элементов, которые нужно удалить (можно поставить 0, если не нужно удалять элементы).
// item1, item2, ... — элементы, которые нужно добавить в массив, начиная с позиции startIndex

let ar = [1, 2, 3, 4, 5]
ar.splice(2, 1,)
// указываем индексом только 1 значение
console.log(ar)

let newArr = [...myArray, 4];  // создаём новый массив с добавленным элементом 4
// console.log(newArr[0])
// console.log(newArr[0,1])
console.log(newArr)

// --- --- --- --- --- --- --- --- --- --- --- ---

