/**Given an array of Integers, sort the array */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = numberToInsert
  }
  return arr;
}

console.log(insertionSort([8, 20, -2, 4, -6]))
console.log(insertionSort([8, 10, -2, 0, 10]))

// Time complexity of O(n ^ 2)
