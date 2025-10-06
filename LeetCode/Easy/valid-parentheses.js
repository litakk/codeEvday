/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  let splitWord = s.split("");

  for (let i of splitWord) {
    if (i === "(" || i === "[" || i === "{") {
      stack.push(i);
    } else {
      let last = stack.pop();
      if (i === ")" && "(" !== last) return false;
      if (i === "]" && "[" !== last) return false;
      if (i === "}" && "{" !== last) return false;
    }
  }
};
console.log(isValid("()[]}"));
