// 1. Event Loop (Событийный цикл)
// JavaScript однопоточный, но асинхронный.
// Event Loop управляет выполнением кода, колбэков и событий.

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
