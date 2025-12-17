/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let seen = new Set(magazine)

  if(has(seen)) {
    return true
  } else {
    return false}
};
console.log(canConstruct("a", "b")); // false
