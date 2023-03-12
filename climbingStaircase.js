/** Given  a staircase of n steps, count the number of distinct ways to climb to the top.
 * you can either climb 1 step or 2 steps at a time. */

// Climbing Staircase idea
// 1. At any given time, you can either climb 1 step or  steps
// 2. if you have to climb to step navigator, you can only climb from step n-1 or n-2
// 3. Calculate the ways we can climb to n-1 and n-2 steps and add the two

function climbingStaircase(n) {
  const noOfWays = [1, 2]
  for (let i = 2; i < n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
  }
  return noOfWays[n - 1]
}

// Time complexity of O(n)
