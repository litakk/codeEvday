// EASY
// ARRAY PROTOTYPE-LAST

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function maxSum(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (result <= arr[i]) {
      result = arr[i];
    }
  }
  console.log(result);
}

// maxSum([2, 1, 3, 5, 4]);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Task: Palindrom

function Palindrom(str) {
  let replace = str.split("").reverse().join("");

  if (str === replace) {
    console.log(str + " is palindrom");
  } else {
    console.log(str + " is not palindrom");
  }
}
// Palindrom("madam");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function IsAnagram(arg1, arg2) {
  let sort1 = arg1.split("").sort().join("");
  let sort2 = arg2.split("").sort().join("");
  return sort1 == sort2;
}
// console.log(IsAnagram("listen", "silent")); // true
// console.log(IsAnagram("hello", "world")); // false

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function range(start, end) {
  const result = [];

  if (start > end) {
    return result;
  }

  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
// console.log(range(0, 5)); // [0, 1, 2, 3, 4, 5]
// console.log(range(3, 3)); // [3]
// console.log(range(8, 0)); // [ ]
// console.log(range(0, 0)); // [0]

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function evenRange(start, end) {
  const res = [];

  if (start > end) {
    return res;
  }

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      res.push(i);
    }
  }
  return res;
}
// console.log(evenRange(0, 5));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function sumMultiplesOf3Or5(number) {
  let res = 0;

  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      res += i;
    }
  }
  return res;
}
// console.log(sumMultiplesOf3Or5(10));\

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Получить массив без повторяющихся значений, сохраняя порядок их первого появления.

function uniqueValues(arr) {
  let ress = [];

  for (let i = 0; i < arr.length; i++) {
    if (!ress.includes(arr[i])) {
      ress.push(arr[i]);
    }
  }
  return ress;
}

// console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5]));
// console.log(uniqueValues(["a", "b", "a", "c", "b"]));
uniqueValues([]); // []

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
