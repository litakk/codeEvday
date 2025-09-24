/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let seen = new Map();

  for (let str of strs) {
    let key = str.split("").sort().join("");
    if (!seen.has(key)) {
      seen.set(key, []);
    }
    seen.get(key).push(str);
  }

  return Array.from(seen.values());
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
