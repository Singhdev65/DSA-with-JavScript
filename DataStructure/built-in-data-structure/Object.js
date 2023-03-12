/**
 * 1. An Object is an unordered collection of key-value pairs. The key must be either be a string or symbol data type,
 *    where as the value can be of any data type.
 * 2. To retrieve a value, you can use the corresponding key. This can be achieved using the dot notation or bracket notation.
 * 3. Object are not  iterables. They can not be used with for of loop.
 */

const obj = {
  fname: "Prince",
  lname: "Kumar",
  age: 26,
  fullName: function () {
    return `my name is ${this.fname} ${this.lname}` // this points to parent object
  }
}

obj.hobby = "reading" // insert the key named hobby into the Object obj

console.log(obj.fullName())
// console.log(obj)
delete obj.hobby // delete's the key named hobby from the object

// console.log(obj)

// properties of Object
Object.keys(obj) // returns all the keys in an array format
Object.values(obj) // returns all the values in an array format
Object.entries(obj) // returns all the keys and values in an array format

// Object - Big O time complexity
// insert => O(1)
// remove => O(1)
// access => O(1)
// search => O(n)
// Object.keys(obj) || Object.values(obj) || Object.entries(obj) => O(n)

