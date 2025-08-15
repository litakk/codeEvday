// 1. Event Loop (Событийный цикл)
// --------------------------------
// JavaScript — однопоточный, но асинхронный.
// Event Loop управляет выполнением кода, позволяя обрабатывать асинхронные задачи,
// не блокируя основной поток.

// Call Stack (Стек вызовов) – выполняет синхронный код
// Web APIs – когда вызывается асинхронный код (например, setTimeout, fetch, addEventListener), он передается в Web APIs.
// Callback Queue / Task Queue (Очередь задач) – коллбэки от Web APIs (например, таймеры, обработчики событий) попадают в очередь задач.
// Microtask Queue (Очередь микрозадач) – сюда попадают коллбэки из Promise.then, MutationObserver, queueMicrotask.
// Event Loop – проверяет, есть ли что-то в Call Stack, и если он пуст, берет задачи из Microtask Queue, а затем из Callback Queue.

// 📌 Важно:

// Сначала выполняются все задачи в Microtask Queue, прежде чем брать новую задачу из Callback Queue.
// Callback Queue также называют MacroTask Queue, и в неё попадают setTimeout, setInterval, setImmediate (в Node.js), requestAnimationFrame.


// 📌 Приоритет:
// ✅ Сначала: Call Stack
// ✅ Потом: Microtask Queue (Promise и др.)
// ✅ Затем: Callback Queue (setTimeout и др.)

// Простой пример кода:

console.log("1");  // Синхронный код → Call Stack

setTimeout(() => console.log("2"), 0); // Асинхронный код → Web APIs → Callback Queue

Promise.resolve().then(() => console.log("3")); // Микрозадача → Microtask Queue

console.log("4");  // Синхронный код → Call Stack

// Вывод в консоли:
1
4
3
2
// ---------------------------------------------------------


// 🔹 Итоговая таблица
// ---------------------------------------------------------
// | Концепция       | Описание                                      | Примеры                   |
// |----------------|---------------------------------|--------------------------|
// | Промисы       | Объекты для работы с асинхронным кодом | fetch, axios.get       |
// | Async/await   | Упрощённая работа с промисами          | API-запросы            |
// | События       | Реакция на пользовательские действия   | addEventListener       |


// ИТОГ: EventLoop - Это механизм который позволяет JS выполнить асинхронный код не блокируя основной поток выполнения
// Он обеспечивает обработку событий, колбэков и выполнения асинхронных операций 


// --------------------------------
// 🔹 Асинхронность через setTimeout

const wait = (ms, callback) => {
  setTimeout(callback, ms);
};

console.log(1);
wait(0, () => console.log(2));
console.log(3);

// Ожидаемый вывод:
// 1
// 3
// 2 (после очистки стека вызовов)

// --------------------------------
// 🔹 Демонстрация асинхронного кода

console.log("Начало программы");

setTimeout(() => {
  console.log("Асинхронная функция выполнена");
}, 2000);

console.log("Конец программы");

// --------------------------------
// 🔹 Promise — работа с асинхронностью

const promise = new Promise((resolve, reject) => {
  console.log("Создание промиса (pending)...");

  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("✅ Успех!");
    } else {
      reject("❌ Ошибка!");
    }
  }, 3000);
});

promise
  .then((data) => console.log("then:", data))
  .catch((error) => console.log("catch:", error))
  .finally(() => console.log("finally: Завершение обработки"));

// --------------------------------
// 🔹 Как работает Event Loop? (Пример)

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);

// --------------------------------
// 🔹 Разбор выполнения кода
// 1. В стек вызовов (Call Stack) попадает console.log(1) → Вывод: 1
// 2. Встречается setTimeout (его callback передаётся в Web APIs)
// 3. В стек попадает console.log(3) → Вывод: 3
// 4. Стек вызовов очищен → Event Loop перемещает callback setTimeout из очереди в стек
// 5. Выполняется console.log(2) → Вывод: 2

// Итоговый вывод:
// 1
// 3
// 2

// --------------------------------
// 🔹 Основные компоненты Event Loop
// Call Stack (Стек вызовов) - выполняет синхронный код.
// Web APIs - хранит асинхронные задачи (setTimeout, HTTP-запросы и т. д.).
// Callback Queue (Очередь обратных вызовов) - хранит задачи для выполнения после завершения стека.
// Microtask Queue (Очередь микрозадач) - выполняет промисы перед задачами из Callback Queue.
// Event Loop - управляет порядком выполнения кода, проверяет очереди и стек вызовов.
// --------------------------------

// Задача: написать функцию которая находит минимальный элемент
// let ress = [...numm].sort((a, b) => a - b);


function Minnum(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(Minnum([1,2,3,4]))
// --------------------------------

// Замыкание (closure) — это функция, которая имеет доступ к переменным из своей внешней области видимости, даже после того, как эта область выполнения завершила работу.

// Как это работает?
// Функция внутри функции: Когда функция создаётся внутри другой функции, она получает доступ к её переменным.
// Лексическое окружение: Внутренняя функция "запоминает" переменные родительской функции, даже если внешняя функция уже завершила выполнение.
// Сборщик мусора: Замыкания могут "удерживать" переменные в памяти, предотвращая их удаление.

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

const closureExample = outerFunction("Я из замыкания");
closureExample("Я из вызова"); 
// Выведет: Outer: Я из замыкания, Inner: Я из вызова

// ✅ В этом примере innerFunction имеет доступ к outerVariable, хотя outerFunction уже завершилась.


console.log(this);

