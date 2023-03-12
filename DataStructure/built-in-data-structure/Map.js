/**
 * 1. An Map is an unordered collection of key-value pairs. Both keys and values can be of any data type.
 * 2. To retrieve a value, you can use the corresponding key.
 * 3. Maps are iterables. They can be used with a for of loop.
 */

// Object vs Map
//  1. Objects are unordered whereas maps are ordered.
//  2. Keys in objects can only be string or symbol whereas in maps, they can be of any type.
//  3. An object has a prototype and may contain a few default keys which may collide with your own keys if you're not careful.  A map on the other hand does not contain any keys by default.
//  4. Objects are not iterables where as maps are iterables.
//  5. The number of items in an object must be determined manually where as it is readily available with the size property in a map.
//  6. Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data.

const map = new Map([
  ["a", 1],
  ["b", 2]
])

map.set("c", 3) // adds c to map
console.log(map.has("a")) // check if key exist
map.delete("a") // delete particular key
console.log(map.size) // provides the size of map
map.clear() //clears the entire map

for (const [key, value] of map) {
  console.log(`${key}: ${value}`)
}
