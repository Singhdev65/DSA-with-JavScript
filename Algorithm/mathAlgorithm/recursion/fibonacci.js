/**Given a number "n", find the nth element of the fibonacci sequence */

/** The fibonacci sequence is the sequence in which each number is the sum of the two preceding onsecuritypolicyviolation.

    i.e f(n) = f(n-1) + f(n-2)
         f(0) = 0 & f(1) = 1 **/

function recursiveFibonacci(n) {
  if (n < 2) {
    return n
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(6)) // 8

// Time complexity of O(2^n)