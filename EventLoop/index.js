// 1. Event Loop (Событийный цикл)
// JavaScript однопоточный, но асинхронный.
// Event Loop – это механизм, который управляет выполнением кода в среде JavaScript.
// Он позволяет выполнять асинхронные задачи, не блокируя основной поток.

// Итоговая таблица для закрепления
// Промисы	Объекты, представляющие результат асинхронной операции.	fetch, axios.get
// Async/await	Синтаксис для работы с промисами «в стиле синхронного кода». Обработка API-запросов
// События	Паттерн для реакции на множественные действия (клики, сообщения и т.д.). button.addEventListener, EventEmitter

// SetTimeout() - асинхронность

const wait = (ms, callback) => {
  setTimeout(callback, ms);
};

console.log(1);
wait(0, () => console.log(2));
console.log(3);

// --- --- --- --- --- --- --- --- --- --- --- ---

// Синхронный код, выполняющийся сразу
console.log("Начало программы");

// Асинхронная операция с использованием SetTimeout
setTimeout(() => {
  console.log("Асинхронная функция выполнена");
}, 2000);

// --- --- --- --- --- --- --- --- --- --- --- ---

// Promise - специальный объект-надстройка
// для работы с асинхронным кодом

// Promise имеет 3 состояния:
// pending: ожидание, исходное состояние
// fulfilled - выполнено успешно, получен результат
// rejected - выполнено с ошибкой

// Основные методы Promise:

// then() - обрабатывает fulfilled состояние
// catch() - обрабатывает rejected состояние

const promise = new Promise((fulfilled, rejected) => {
  console.log("Начало, состояние pending...");

  setTimeout(() => {
    if (Math.random() > 0.5) {
      fulfilled("Ура, состояние fulfilled");
    } else {
      rejected("Увы состояние rejected");
    }
  }, 3000);
});

promise
  .then((successData) => {
    console.log("Успех! Получены данные:", successData);
  })
  .catch((errorData) => {
    console.log("Ошибка. Получены данные:", errorData);
  })
  .finally(() => {
    console.log("Код, выполняющийся в самом конце, независимо от результата");
  });

// --- --- --- --- --- --- --- --- --- --- --- ---

// Call Stack (Стек вызовов) - обычный синхронный код, непосредственно один за другим.
// Web APIs (Веб-API) -  это интерфейсы, которые предоставляют браузер, такие как setTimeout, обработчики событий (например, click), запросы и другие.
// Callback Queue (Очередь обратных вызовов) - когда завершатся все синхронные операции начинает обрабатывать асинхронные функции.
// EventLoop - 

// ПРИМЕР:

console.log(1);

setTimeout(function() {
  console.log(2);
}, 0);

console.log(3);

// ОБЪЯСНЕНИЕ:

// Последовательность:

// Стек вызовов: console.log(1) → 1
// Встречается setTimeout, его callback передается в Web APIs.
// Стек вызовов: console.log(3) → 3
// setTimeout завершает свою работу и передает callback в Callback Queue.
// Event Loop проверяет Callback Queue, когда стек пуст.
// Event Loop выполняет callback: console.log(2) → 2