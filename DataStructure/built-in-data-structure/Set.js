/**
 * A set is a data structure that can hold a collection of values. The values however must be unique.
 * Sets can contain a mix of different data types. You can store strings, booleans, numbers and even objects all in the same set.
 * Sets are dynamically sized. you don't have to declare the size of a set before creating it.
 * Sets do not maintain an insertion order.
 * Sets are iterables. They can be used with a for of loop
 */

// Difference between array and Set
// Array can contain duplicate value whereas Sets cannot.
// Insertion order is maintained in arrays but not in the case with sets
// Searching and deleting an element in the set is faster compared to arrays.

const set = new Set([1, 2, 3])
set.add(4) // adds 4 to the set
console.log(set)
set.add(4) // cannot be added as this value already exist
set.has(4) // check if element exist
set.delete(3) // delete 3 from the set
console.log(set.size)
set.size // return the size of set
set.clear() // clears the set
console.log(set.size)

for (const item of set) {
  console.log(item)
}
