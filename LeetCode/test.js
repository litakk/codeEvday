/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + +digit, 0);
  }
  return num;
};
console.log(addDigits(38));

// Input: num = 38
// Output: 2
