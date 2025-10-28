/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let total = [];

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];

    if (op === "+") {
      total.push(total[total.length - 1] + total[total.length - 2]);
    } else if (op === "D") {
      total.push(total[total.length - 1] * 2);
    } else if (op === "C") {
      total.pop();
    } else {
      total.push(parseInt(op));
    }
  }
  return total.reduce((acc, cur) => acc + cur, 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));

// Input: ops = ["5","2","C","D","+"]
// Output: 30

// Input: ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27

// Input: ops = ["1","C"]
// Output: 0
