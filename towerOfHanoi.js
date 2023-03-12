/** Tower f Hanoi
 * The objective of the puzzle is to move the entire stack to the last ord, obeying the following rules
 *              1. Only one disk may be moved at a time.
 *              2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or an empty rod.
 *              3. No disk may be placed on the top of a disk that is smaller.
 */

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`move disk 1 from ${fromRod} to ${toRod}`)
    return
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod)
  console.log(`move disk ${n} from ${fromRod} to ${toRod}`)
  towerOfHanoi(n - 1, usingRod, toRod, fromRod)
}

towerOfHanoi(3, "A", "C", "B")

// Time complexity of O(2^n)
