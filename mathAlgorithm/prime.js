/** Given a natural number 'n', determine if the number is prime or not */

function checkPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

console.log(checkPrime(10)) // false
console.log(checkPrime(13)) // true
console.log(checkPrime(17)) // true

// Time Complexity is O(n)


/**Given a number n, find all prime numbers up to n (n included).Make sure the returned array is sorted. */

function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

function listPrime(n){
  const arr = []
  for(let i = 2; i<= n; i++){
    if(isPrime(i)){
      arr.push(i)
    }
  }
  return arr;
}

console.log(listPrime(1)) // []
console.log(listPrime(2)) // [2]
console.log(listPrime(7)) // [2,3,5,7]

// Time Complexity is O(n**2)
