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
  return function() {
    count++;
    return count;
  };
}
const c = counter();
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3

//  - - - - - - - - - - - - - - - - - - - - - - - - -

