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

// en: Sum of array elements
// ru: Суммирование массива

function Acc(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

console.log(Acc([1, 2, 3])); // → 6

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// containsDuplicate
// если 1 одинаковых числа верни true а если нет дубликатов то верни false

const containsDuplicate = (nums) => {
  let seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// isAnagram
// s = "rat", t = "car"

function isAnagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
console.log(isAnagram("car", "car"));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// isPalindrome

function isPalindrome(x) {
  return x.toString().split("").reverse().join("") === x.toString();
}
console.log(isPalindrome(121));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Тебе нужно добавить в прототип массива (Array.prototype) метод last, который будет:
// возвращать последний элемент массива,
// если массив пустой — возвращать -1.

Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};
const arr1 = [1, 2, 3];
console.log(arr1.last()); // 👉 3

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// 📌 Условие:
// Дан массив чисел nums и число target.
// Нужно найти индексы двух элементов, сумма которых равна target.
// Каждый входной массив гарантированно имеет ровно одно решение.
// Нельзя использовать один и тот же элемент дважды.
// Порядок индексов неважен (обычно возвращают в массиве [i, j]).

// (nums, target)
// nums = [2, 7, 11, 15], target = 9
// 2 + 7 = 9
// ответ: [0, 1]

function TwoSum(nums, target) {
  let seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let result = target - num;

    if (seen.has(result)) {
      return [seen.get(result), i];
    }
    seen.set(num, i);
  }
  return [];
}
console.log(TwoSum([1, 2, 7, 3, 3, 2], 9));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// новый массив если естьь одинаковые убрать оставить только уникальные
// если в массиве нету такого числа то добавляй а если есть скипай

function Func(array) {
  let seen = new Set();
  let newArray = [];

  for (let num of array) {
    if (!seen.has(num)) {
      seen.add(num);
      newArray.push(num);
    }
  }
  return newArray;
}
console.log(Func([1, 1, 2, 2, 3, 3]));

// 1, 2, 3

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var groupAnagrams = function (strs) {
  let seen = new Map();

  for (let str of strs) {
    let key = str.split("").sort().join("");

    if (!seen.has(key)) {
      seen.set(key, []);
    }
    seen.get(key).push(str);
  }
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// бинарный поиск – делим массив пополам на каждом шаге
// линейный поиск - итерация по каждому элементу
// логорифм - log2 8=3 => 2*2*2=8 => 2(3)=8

function binarySearch(arr, target) {
  // функция принимает отсортированный массив arr и элемент target, который нужно найти

  let left = 0;
  // левая граница поиска (начало массива)

  let right = arr.length - 1;
  // правая граница поиска (конец массива)

  while (left <= right) {
    // пока границы не пересеклись (есть что искать)

    let mid = Math.floor((left + right) / 2);
    // середина текущего диапазона (делим пополам)

    if (arr[mid] === target) {
      // если элемент в середине равен target
      return mid;
      // возвращаем индекс найденного элемента
    }

    if (arr[mid] < target) {
      // если середина меньше target
      left = mid + 1;
      // сдвигаем левую границу вправо (ищем в правой половине массива)
    } else {
      // иначе (arr[mid] > target)
      right = mid - 1;
      // сдвигаем правую границу влево (ищем в левой половине массива)
    }
  }

  return -1;
  // если элемент не найден — возвращаем -1
}

// пример использования:
console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // выведет 3 (индекс элемента 7)
console.log(binarySearch([1, 3, 5, 7, 9, 11], 2)); // выведет -1 (такого элемента нет)

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
