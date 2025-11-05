/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let seen = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let arr = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left > right) {
    if (!seen.has(arr[left])) {
      left++;
      continue;
    }

    if (!seen.has(arr[right])) {
      right--;
      continue;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
};
