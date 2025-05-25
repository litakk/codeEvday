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
    console.log(str +" is palindrom");
  } else {
    console.log(str + " is not palindrom");
  }
}
// Palindrom("madam");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



