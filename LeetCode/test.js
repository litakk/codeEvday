/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let seen = new Set(nums);
  let arr = [];
  let n = nums.length
  for (let i = 1; i <= n; i++) {
    if (!seen.has(i)) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]