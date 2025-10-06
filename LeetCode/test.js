var nextGreaterElement = function(nums1, nums2) {
  let result = []

  for (let num of nums1) {
    // 1️⃣ ищем индекс этого числа в nums2
    let index = nums2.indexOf(num)

    // 2️⃣ флаг — нашли ли большее
    let found = -1

    // 3️⃣ идём вправо от позиции index
    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > num) {
        found = nums2[j] // нашли первое большее
        break // сразу выходим
      }
    }

    // 4️⃣ добавляем найденное значение (или -1)
    result.push(found)
  }

  return result
}

console.log(nextGreaterElement([4,1,2], [1,3,4,2])) // [-1, 3, -1]
console.log(nextGreaterElement([2,4], [1,2,3,4]))   // [3, -1]
