/**Given a positive number 'n', determine if the number is a power of 2 or not */

function isPowerOfTwo(n) {
  if (n < 1) {
    return false
  }

  for (let i = 2; i < n; i++) {
    if (n % 2 !== 0) {
      return false
    }
    n = n / 2
  }
  return true
}

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(3)) // false

  // Time Complexity is O(log(n)) as we are reducing the n by half for each iteration
