/**
 * An Array is a data structure that can hold a collection of values.
 * Arrays can contain a mix of different data types. You can store "strings", "Boolean", "numbers" or even "objects" all in the same array.
 * Array are resizable you don't have to declare the size of an array before creating it
 * JavaScript array are zero-indexed and the insertion order is maintained.
 * Arrays are iterables. They can be used with for of loop.
 * **/

const arr = [1, 2, 3, "Prince", [1, 2, "Kunal"]]
arr.push(4) // adds element to end
arr.unshift(0) // adds element at beginning
arr.pop() // removes element from next
arr.shift() //removes element from beginning

for (const item of arr) {
  console.log(item)
}

// Insert / remove from end => O(1)
// Insert / remove from beginning => O(n)
// Access  =>  O(1)
// Search => O(n)
// => push / pop => O(n)
// => Shift / unShift / concat / slice / splice => O(n)
// => forEach / map / filter / reduce => O(n)
