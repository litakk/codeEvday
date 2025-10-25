/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // "A man, a plan, a canal: Panama"
  let filter1 = s.toLowerCase().trim(); // a man, a plan, a canal: panama
  let res = "";
  for (let i = 0; i < filter1.length; i++) {
    let char = filter1[i];

    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      res += char;
    }
  }

  if (res === res.split("").reverse().join("")) {
    return true;
  } else return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

