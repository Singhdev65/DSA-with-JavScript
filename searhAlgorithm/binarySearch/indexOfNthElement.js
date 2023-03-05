/**Given an sorted array of n elements and target element t,
 * find the index of t in the array.
 * Return -1 if the target element is not found */

// *******************ITERATIVE SOLUTIoN********************

function binarySearch(arr, target) {
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (target === arr[middleIndex]) {
      return middleIndex
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }
  return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1

// Time complexity of O(log(n))

// *******************RECURSIVE SOLUTIoN********************

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if (target === arr[middleIndex]) {
    return middleIndex
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1)
  } else {
    return search(arr, target, middleIndex + 1, rightIndex)
  }
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1

// Time complexity of O(log(n))
