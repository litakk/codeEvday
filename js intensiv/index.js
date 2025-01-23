// === Изучение JavaScript ===

// === Ссылочный тип - object: [] , {} ===

// Создаём объект objectA
const objectA = {
    a: 10,
    b: true,
};

// Копируем ссылку на objectA в переменную copyOfA
const copyOfA = objectA;

// Изменяем свойства через ссылку
copyOfA.a = 20;
copyOfA.c = "abc";

// Поскольку объекты передаются по ссылке, изменения отразятся на objectA
console.log(objectA); // { a: 20, b: true, c: 'abc' }

// --- --- --- --- --- --- --- --- --- --- --- ---

// === Базовый объект ===
const MyCity = {
    city: "New York",
};

// Добавляем новое свойство
MyCity.popular = true;

console.log(MyCity); // { city: 'New York', popular: true }

// --- --- --- --- --- --- --- --- --- --- --- ---

// === МЕТОДЫ ОБЪЕКТОВ ===

// Создаём объект героя с методами
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

// Создаём объект azamat с методами
const azamat = {
    name: "Azamat",

    // Метод: Азамат говорит
    say() {
        console.log(`${this.name} говорит!`);
    },

    // Метод: Азамат выполняет действие
    do() {
        console.log(`${this.name} делает что-то`);
    },
};

// Используем методы объекта azamat
azamat.say(); // "Azamat говорит!"
azamat.do();  // "Azamat делает что-то"

// --- --- --- --- --- --- --- --- --- --- --- ---

const postStringified = JSON.stringify(azamat) // Этот метод преобразует объект азамат в строку формата JSON
console.log(JSON.parse(postStringified))

// 1. Что такое JSON.stringify()?
// Метод JSON.stringify()
// используется для преобразования объекта, массива или значения примитивного типа
// (например, числа, строки, булевого значения) в строку формата JSON. Это удобно
// при необходимости передать данные через сеть или сохранить их в файле.

// 2. Метод JSON.parse() выполняет обратную операцию по сравнению с JSON.stringify():
//  он принимает строку в формате JSON и преобразует её обратно в объект, массив или значение примитивного типа.

// ИТОГ:
// JSON.stringify() отправляет объект, преобразуя его в строку формата JSON.
// JSON.parse() принимает строку в формате JSON и преобразует её обратно в объект.

// --- --- --- --- --- --- --- --- --- --- --- ---