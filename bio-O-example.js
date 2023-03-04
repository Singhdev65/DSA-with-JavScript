// fin the sum of n Natural numbers
function addSum() {
  let sum = 0 // executes just once
  for (let i = 1; i <= n; i++) {
    sum = sum + i // execution depends upon value of n
  }
  return sum // executes once
}
// count the number of times a statement executes based on the input size (n + 2) for above problem
// O(n) as considers bigger pictures => Linear

function addSum(n) {
  return (n * (n + 1)) / 2
}
// above fn just executes once hence it has O(1) complexity => Constant

for (let i = 1; i < n; i++) {
  for (let j = 1; j < i; j++) {
    // some code
  }
}
// above code will have O(n**2) time complexity => Quadratic

for (let i = 1; i < n; i++) {
  for (let j = 1; j < i; j++) {
    for (let k = 1; k < j; k++) {
      // some code
    }
  }
}
// above code will have O(n**3) time complexity => Quadratic

