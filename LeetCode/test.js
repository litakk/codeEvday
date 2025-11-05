/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  for (let i = 0; i < num; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
};
// 4 * 4 = 16
console.log(isPerfectSquare(16));
